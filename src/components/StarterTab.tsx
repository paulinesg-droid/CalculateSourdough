import type { LocaleStrings } from '../types';

const DEFAULT_WHAT_YOU_NEED = [
  'Flour (wholemeal or rye works best to begin)',
  'Water (room temperature, unchlorinated if possible)',
  'A clean glass jar',
  'A kitchen scale',
];

const DEFAULT_DAY_BY_DAY_HEADING = 'Day by Day Guide';

const DEFAULT_DAY_STEPS: { label: string; text: string }[] = [
  {
    label: 'Day 1:',
    text: 'Mix 50g wholemeal flour + 50g room temperature water in a clean jar. Stir well, cover loosely, leave at room temperature.',
  },
  {
    label: 'Day 2:',
    text: 'You may see small bubbles. Discard half (50g) and add 50g fresh flour + 50g water. Stir well.',
  },
  {
    label: 'Day 3-4:',
    text: 'More bubbles appearing. Repeat the discard and feed process every 24 hours.',
  },
  {
    label: 'Day 5-6:',
    text: 'Starter should be visibly active and bubbly. Continue daily feedings.',
  },
  {
    label: 'Day 7:',
    text: 'Your starter is ready when it doubles in size within 4-8 hours of feeding and smells pleasantly sour and tangy.',
  },
];

const DEFAULT_INTRO =
  "A sourdough starter is a living culture of wild yeast and bacteria. It takes 7 days to create from scratch and just 5 minutes a day to maintain. Here's everything you need.";

const DEFAULT_HEADING = 'How to make your sourdough starter from scratch';

export function StarterTab({
  tr,
  onGoToRecipe,
}: {
  tr: LocaleStrings;
  onGoToRecipe: () => void;
}) {
  const starter = tr.starterTab;
  const heading = starter?.heading ?? DEFAULT_HEADING;
  const intro = starter?.intro ?? DEFAULT_INTRO;
  const whatYouNeedHeading = starter?.whatYouNeedHeading ?? 'What you need';
  const whatYouNeedItems = starter?.whatYouNeedItems ?? DEFAULT_WHAT_YOU_NEED;
  const dayByDayHeading = starter?.dayByDayHeading ?? DEFAULT_DAY_BY_DAY_HEADING;
  const daySteps = starter?.dayByDaySteps ?? DEFAULT_DAY_STEPS;

  return (
    <div>
      <div className="mb-4 font-display text-[1.1rem] font-semibold text-primary">
        {heading}
      </div>

      <p className="mb-6 text-[13px] leading-relaxed text-muted">
        {intro}
      </p>

      <div className="space-y-4">
        <div className="rounded-[14px] border border-border bg-white p-5">
          <div className="mb-3 font-display text-base font-semibold text-primary">
            {whatYouNeedHeading}
          </div>
          <ul className="list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-muted">
            {whatYouNeedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-[14px] border border-border bg-white p-5">
          <div className="mb-3 font-display text-base font-semibold text-primary">
            {dayByDayHeading}
          </div>
          <div className="space-y-2 text-[13px] leading-relaxed text-muted">
            {daySteps.map((d) => (
              <div key={d.label}>
                <strong className="font-medium">{d.label}</strong> {d.text}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[14px] border border-border bg-white p-5">
          <div className="mb-3 font-display text-base font-semibold text-primary">Feeding Ratio</div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-[14px] border border-border bg-bg2 p-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                Maintenance (once established):
              </div>
              <ul className="list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-muted">
                <li>Starter: 1 part (e.g. 20g)</li>
                <li>Flour: 1 part (e.g. 20g)</li>
                <li>Water: 1 part (e.g. 20g)</li>
              </ul>
              <div className="mt-3 font-medium text-primary">
                Ratio: <span className="font-mono">1:1:1</span>
              </div>
            </div>

            <div className="rounded-[14px] border border-border bg-bg2 p-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                For baking day (more active starter):
              </div>
              <ul className="list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-muted">
                <li>Starter: 1 part (e.g. 20g)</li>
                <li>Flour: 5 parts (e.g. 100g)</li>
                <li>Water: 5 parts (e.g. 100g)</li>
              </ul>
              <div className="mt-3 font-medium text-primary">
                Ratio: <span className="font-mono">1:5:5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[14px] border border-border bg-white p-5">
          <div className="mb-3 font-display text-base font-semibold text-primary">Tips</div>
          <ul className="list-disc space-y-1 pl-5 text-[13px] leading-relaxed text-muted">
            <li>
              Store in the fridge if baking less than once a week — feed once a week
            </li>
            <li>Always leave some starter in the jar — never use it all</li>
            <li>Room temperature starter is more active than cold starter</li>
            <li>A healthy starter smells tangy and yeasty, not like nail polish remover</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <button
          type="button"
          onClick={onGoToRecipe}
          className="min-h-[48px] w-full touch-manipulation rounded-[12px] border-2 border-primary/35 bg-white px-4 py-3 text-center font-sans text-[13px] font-semibold leading-snug text-primary shadow-sm transition-all hover:border-primary hover:bg-bg2 hover:shadow-md active:scale-[0.99] sm:text-sm"
        >
          {tr.starterLinkToRecipe}
        </button>
      </div>
    </div>
  );
}

