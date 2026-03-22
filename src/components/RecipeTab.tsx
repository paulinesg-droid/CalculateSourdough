import { HYDRATIONS } from '../constants';
import { calcValues, fmt, parseLoafSizeInput, toGrams } from '../calculations';
import type { LocaleStrings } from '../types';
import type { StyleId, Unit } from '../types';

interface RecipeTabProps {
  tr: LocaleStrings;
  unit: Unit;
  selectedStyleId: StyleId;
  loaves: number;
  starterPct: number;
  saltPct: number;
  loafSizeStr: string;
  stepStates: Record<string, boolean>;
  onToggleStep: (id: string) => void;
  onResetSteps: () => void;
}

export function RecipeTab({
  tr,
  unit,
  selectedStyleId,
  loaves,
  starterPct,
  saltPct,
  loafSizeStr,
  stepStates,
  onToggleStep,
  onResetSteps,
}: RecipeTabProps) {
  const v = calcValues(parseLoafSizeInput(loafSizeStr, unit), unit, selectedStyleId, starterPct, saltPct);
  const loafSizeG = toGrams(parseLoafSizeInput(loafSizeStr, unit), unit);
  const styleLabel = tr.styles.find((s) => s.id === selectedStyleId)!.label.toLowerCase();
  const isWet = HYDRATIONS[selectedStyleId] >= 0.8;
  const isFluffy = HYDRATIONS[selectedStyleId] <= 0.65;

  const tf = fmt(v.flour * loaves, unit);
  const tw = fmt(v.water * loaves, unit);
  const ts = fmt(v.starter * loaves, unit);
  const tSalt = fmt(v.salt * loaves, unit);

  const introHtml = tr.recipeIntro(
    loaves,
    fmt(loafSizeG * loaves, unit),
    styleLabel,
    Math.round(HYDRATIONS[selectedStyleId] * 100),
    starterPct,
    saltPct,
    tf,
    tw,
    ts,
    tSalt
  );

  const phases = tr.phases(tf, tw, ts, tSalt, starterPct, isWet, isFluffy, selectedStyleId);
  const allSteps = phases.flatMap((p) => p.steps);
  const total = allSteps.length;
  const done = allSteps.filter((s) => stepStates[s.id]).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <div>
      <div
        className="recipe-intro mb-6 rounded-[14px] border border-accent-light bg-bg2 px-5 py-4 text-[13px] leading-relaxed text-muted"
        dangerouslySetInnerHTML={{ __html: introHtml }}
      />
      <div className="progress-label mb-1.5 flex justify-between text-xs text-muted">
        <span>{tr.stepsOf(done, total)}</span>
        <button
          type="button"
          onClick={onResetSteps}
          className="cursor-pointer rounded-[10px] border border-border bg-transparent px-3.5 py-1.5 font-sans text-xs font-medium text-muted transition-all duration-150 hover:border-primary hover:text-primary"
        >
          {tr.resetAll}
        </button>
      </div>
      <div className="mb-6 h-1.5 overflow-hidden rounded bg-border">
        <div
          className="h-full rounded bg-success transition-[width] duration-300 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div>
        {phases.map((phase) => (
          <div key={phase.phase} className="recipe-phase mb-8">
            <div className="phase-header mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-base text-white">
                {phase.icon}
              </div>
              <div className="font-display text-base font-semibold text-primary">{phase.phase}</div>
              <div className="ml-auto rounded-[10px] bg-accent-light px-2.5 py-0.5 text-xs font-medium text-muted">
                {phase.time}
              </div>
            </div>
            {phase.steps.map((step) => {
              const isDone = !!stepStates[step.id];
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => onToggleStep(step.id)}
                  className={`step-item mb-2 flex w-full cursor-pointer items-start gap-3 rounded-xl border px-3.5 py-3 text-left transition-all duration-200 select-none ${
                    isDone
                      ? 'border-step-border-done bg-step-done opacity-75'
                      : 'border-border bg-white hover:border-accent'
                  }`}
                >
                  <div
                    className={`step-checkbox mt-px flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-2 text-xs text-white transition-all duration-200 ${
                      isDone ? 'border-success bg-success' : 'border-border bg-transparent'
                    }`}
                  >
                    {isDone ? '✓' : ''}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div
                      className={`step-title mb-0.5 text-sm font-medium leading-snug ${
                        isDone ? 'text-muted line-through' : 'text-ink'
                      }`}
                    >
                      {step.title}
                    </div>
                    <div className="step-desc text-xs leading-normal text-muted">{step.desc}</div>
                    {step.amounts ? (
                      <div className="step-amounts mt-1.5 inline-block rounded-lg bg-bg2 px-2 py-0.5 text-xs font-medium text-primary">
                        {step.amounts}
                      </div>
                    ) : null}
                    {step.tip ? (
                      <div className="step-tip mt-1 inline-block text-[11px] italic text-accent">
                        {tr.tip}: {step.tip}
                      </div>
                    ) : null}
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
