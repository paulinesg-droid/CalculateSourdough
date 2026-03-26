import {
  HYDRATIONS,
  IMPERIAL_PRESETS,
  METRIC_PRESETS,
  PRODUCTS,
  spotlightProducts,
} from '../constants';
import { calcValues, fmt, parseLoafSizeInput } from '../calculations';
import type { LocaleStrings } from '../types';
import type { RegionFilter, StyleId, Unit } from '../types';

interface CalculatorTabProps {
  tr: LocaleStrings;
  unit: Unit;
  selectedStyleId: StyleId;
  loaves: number;
  starterPct: number;
  saltPct: number;
  loafSizeStr: string;
  regionFilter: RegionFilter;
  onLoafSizeStrChange: (v: string) => void;
  onSelectStyle: (id: StyleId) => void;
  onLoavesDelta: (d: number) => void;
  onStarterPct: (v: number) => void;
  onSaltPct: (v: number) => void;
  onPreset: (n: number) => void;
  onRegionFilter: (r: RegionFilter) => void;
}

export function CalculatorTab({
  tr,
  unit,
  selectedStyleId,
  loaves,
  starterPct,
  saltPct,
  loafSizeStr,
  regionFilter,
  onLoafSizeStrChange,
  onSelectStyle,
  onLoavesDelta,
  onStarterPct,
  onSaltPct,
  onPreset,
  onRegionFilter,
}: CalculatorTabProps) {
  const loafNum = parseLoafSizeInput(loafSizeStr, unit);
  const v = calcValues(loafNum, unit, selectedStyleId, starterPct, saltPct);
  const showBoth = loaves > 1;
  const styleLabel = tr.styles.find((s) => s.id === selectedStyleId)!.label;

  const rows = [
    { label: tr.ingredients.flour, per: v.flour, tot: v.flour * loaves },
    { label: tr.ingredients.water, per: v.water, tot: v.water * loaves },
    { label: tr.ingredients.starter, per: v.starter, tot: v.starter * loaves },
    { label: tr.ingredients.salt, per: v.salt, tot: v.salt * loaves },
  ];

  const totalDoughPer = v.flour + v.water + v.starter + v.salt;
  const totalDoughAll = totalDoughPer * loaves;

  const presets = unit === 'metric' ? METRIC_PRESETS : IMPERIAL_PRESETS;
  const unitLabel = unit === 'metric' ? 'g' : 'oz';
  const currentPreset = loafNum;

  const filteredProducts = PRODUCTS.filter(
    (p) => regionFilter === 'all' || p.region === regionFilter || p.region === 'both'
  );
  const spotlight = spotlightProducts();

  return (
    <div>
      <p className="mb-6 text-[15px] leading-relaxed text-muted sm:text-sm">{tr.tagline}</p>

      <div className="section-title mb-4 font-display text-[1.1rem] font-semibold text-primary">
        {tr.styleQuestion}
      </div>
      <div className="mb-8 grid grid-cols-1 gap-2.5 min-[481px]:grid-cols-2">
        {tr.styles.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelectStyle(s.id)}
            className={`min-h-[44px] touch-manipulation cursor-pointer rounded-[14px] border-[1.5px] p-4 text-left transition-all duration-200 active:scale-[0.99] ${
              s.id === selectedStyleId
                ? 'border-primary bg-bg2'
                : 'border-border bg-white hover:border-accent'
            }`}
          >
            <div
              className={`mb-1 text-sm font-medium ${
                s.id === selectedStyleId ? 'text-primary' : 'text-ink'
              }`}
            >
              {s.label}
            </div>
            <div className="text-xs leading-snug text-muted">{s.desc}</div>
            <span className="mt-1.5 inline-block rounded-[10px] bg-accent-light px-2 py-0.5 text-[11px] font-medium text-accent">
              {Math.round(HYDRATIONS[s.id] * 100)}% {tr.hydration}
            </span>
          </button>
        ))}
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 min-[481px]:grid-cols-2">
        <div className="rounded-[14px] border border-border bg-white px-4 py-4 min-[390px]:px-5">
          <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted">
            {tr.labelLoafSize}
          </label>
          <div className="flex min-h-[44px] items-center gap-2">
            <input
              type="number"
              min={100}
              max={3000}
              value={loafSizeStr}
              onChange={(e) => onLoafSizeStrChange(e.target.value)}
              className="min-h-[44px] w-full min-[390px]:w-24 border-none bg-transparent p-0 font-sans text-2xl font-medium text-ink outline-none"
            />
            <span className="text-sm font-normal text-muted">{unitLabel}</span>
          </div>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {presets.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => onPreset(p)}
                className={`min-h-[44px] touch-manipulation cursor-pointer rounded-[10px] border px-3 py-2 font-sans text-xs font-medium transition-all duration-150 ${
                  currentPreset == p
                    ? 'border-primary bg-bg2 text-primary'
                    : 'border-border bg-bg text-muted hover:border-primary hover:bg-bg2 hover:text-primary'
                }`}
              >
                {p}
                {unitLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[14px] border border-border bg-white px-4 py-4 min-[390px]:px-5">
          <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted">
            {tr.labelLoaves}
          </label>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onLoavesDelta(-1)}
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] touch-manipulation cursor-pointer items-center justify-center rounded-full border-[1.5px] border-border bg-bg text-lg leading-none text-muted transition-all duration-150 hover:border-primary hover:bg-bg2 hover:text-primary"
            >
              −
            </button>
            <div className="min-w-8 text-center text-2xl font-medium">{loaves}</div>
            <button
              type="button"
              onClick={() => onLoavesDelta(1)}
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] touch-manipulation cursor-pointer items-center justify-center rounded-full border-[1.5px] border-border bg-bg text-lg leading-none text-muted transition-all duration-150 hover:border-primary hover:bg-bg2 hover:text-primary"
            >
              +
            </button>
          </div>
        </div>

        <div className="col-span-1 min-[481px]:col-span-2 rounded-[14px] border border-border bg-white px-4 py-4 min-[390px]:px-5">
          <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted">
            {tr.labelStarter} — {starterPct}%
          </label>
          <div className="flex min-h-[44px] items-center gap-2.5">
            <input
              type="range"
              min={10}
              max={30}
              step={1}
              value={starterPct}
              onChange={(e) => onStarterPct(Number(e.target.value))}
              className="slider-primary min-h-[44px] flex-1 py-2"
            />
            <div className="min-w-[42px] text-right text-lg font-medium text-primary">{starterPct}%</div>
          </div>
          <div className="input-hint mt-1.5 text-[11px] leading-snug text-accent">{tr.hintStarter}</div>
        </div>

        <div className="col-span-1 min-[481px]:col-span-2 rounded-[14px] border border-border bg-white px-4 py-4 min-[390px]:px-5">
          <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-muted">
            {tr.labelSalt} — {saltPct.toFixed(1)}%
          </label>
          <div className="flex min-h-[44px] items-center gap-2.5">
            <input
              type="range"
              min={1.5}
              max={2.5}
              step={0.1}
              value={saltPct}
              onChange={(e) => onSaltPct(Number(e.target.value))}
              className="slider-primary min-h-[44px] flex-1 py-2"
            />
            <div className="min-w-[42px] text-right text-lg font-medium text-primary">
              {saltPct.toFixed(1)}%
            </div>
          </div>
          <div className="input-hint mt-1.5 text-[11px] leading-snug text-accent">{tr.hintSalt}</div>
        </div>
      </div>

      <div className="mb-8 rounded-[20px] border-[1.5px] border-accent-light bg-bg2 p-4 min-[390px]:p-6">
        <div className="output-header mb-5 flex items-baseline justify-between border-b border-border pb-4">
          <div className="font-display text-[1.1rem] text-primary">{tr.yourRecipe}</div>
          <div className="text-xs text-muted">
            {loaves} × {styleLabel}
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          {rows.map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between rounded-[10px] bg-white px-3 py-2"
            >
              <div className="text-sm font-normal text-muted">{r.label}</div>
              <div className="flex gap-3 min-[481px]:gap-5">
                {showBoth && (
                  <div className="text-right">
                    <div className="mb-0.5 text-[10px] uppercase tracking-wide text-muted">
                      {tr.perLoaf}
                    </div>
                    <div className="text-lg font-medium text-ink">{fmt(r.per, unit)}</div>
                  </div>
                )}
                <div className="text-right">
                  <div className="mb-0.5 text-[10px] uppercase tracking-wide text-muted">
                    {showBoth ? tr.total : '\u00a0'}
                  </div>
                  <div className="text-lg font-medium text-ink">
                    {fmt(showBoth ? r.tot : r.per, unit)}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="output-row total mt-1 flex items-center justify-between rounded-[10px] bg-primary px-3 py-2">
            <div className="text-sm font-medium text-white/80">{tr.totalDough}</div>
            <div className="flex gap-3 min-[481px]:gap-5">
              {showBoth && (
                <div className="text-right">
                  <div className="mb-0.5 text-[10px] uppercase tracking-wide text-white/60">
                    {tr.perLoaf}
                  </div>
                  <div className="text-xl font-medium text-white">{fmt(totalDoughPer, unit)}</div>
                </div>
              )}
              <div className="text-right">
                <div className="mb-0.5 text-[10px] uppercase tracking-wide text-white/60">
                  {showBoth ? tr.total : '\u00a0'}
                </div>
                <div className="text-xl font-medium text-white">
                  {fmt(showBoth ? totalDoughAll : totalDoughPer, unit)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="coming-soon mt-2.5 text-center text-[11px] italic text-muted">
          {tr.comingSoon}
        </div>
      </div>

      <div className="products-section mt-4">
        <div className="products-header mb-4 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
          <div className="section-title mb-0 font-display text-[1.05rem] font-semibold leading-snug text-primary min-[390px]:text-[1.1rem]">
            {tr.whatYouNeed}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {(['all', 'eu', 'us'] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => onRegionFilter(r)}
                className={`min-h-[44px] min-w-[44px] touch-manipulation cursor-pointer rounded-xl border px-3 py-2 font-sans text-xs font-medium transition-all duration-150 ${
                  regionFilter === r
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-transparent text-muted'
                }`}
              >
                {r === 'all' ? tr.filterAll : r.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2.5 min-[481px]:grid-cols-2">
          {filteredProducts.map((p) => (
            <div
              key={p.name}
              className="flex flex-col gap-2 rounded-[14px] border border-border bg-white p-4 max-[389px]:p-3.5"
            >
              <div className="flex h-20 items-center justify-center rounded-lg bg-bg text-[28px]">
                {p.emoji}
              </div>
              <div className="text-[13px] font-medium leading-snug text-ink">{p.name}</div>
              <div className="flex-1 text-xs leading-snug text-muted">{p.desc}</div>
              <div className="mt-1 flex items-center justify-between">
                <span className="rounded-lg bg-accent-light px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                  {p.region === 'both' ? 'EU & US' : p.region.toUpperCase()}
                </span>
                {p.affiliateUrl ? (
                  <a
                    href={p.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="shop-btn inline-flex min-h-[44px] touch-manipulation cursor-pointer items-center justify-center rounded-[10px] border-[1.5px] border-primary bg-transparent px-3 py-2 font-sans text-xs font-medium text-primary no-underline transition-all duration-150 hover:bg-primary hover:text-white"
                  >
                    {tr.shopNow}
                  </a>
                ) : (
                  <span className="rounded-lg border border-border bg-bg px-2 py-0.5 text-[10px] font-medium text-muted">
                    {tr.comingSoonProduct}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="also-need-section mt-10 border-t border-border pt-8">
        <div className="section-title mb-4 font-display text-[1.05rem] font-semibold leading-snug text-primary min-[390px]:text-[1.1rem]">
          {tr.youMightAlsoNeed}
        </div>
        <div className="grid grid-cols-1 gap-2.5 min-[390px]:grid-cols-3">
          {spotlight.map((p) => (
            <div
              key={p.name}
              className="flex flex-col gap-2 rounded-[14px] border border-border bg-white p-4 max-[389px]:p-3.5"
            >
              <div className="flex h-[4.5rem] min-h-[4.5rem] items-center justify-center rounded-lg bg-bg text-[26px] min-[390px]:text-[28px]">
                {p.emoji}
              </div>
              <div className="text-[13px] font-medium leading-snug text-ink">{p.name}</div>
              <div className="flex-1 text-xs leading-snug text-muted">{p.desc}</div>
              <div className="mt-1 flex flex-col gap-2 min-[390px]:flex-row min-[390px]:items-center min-[390px]:justify-between">
                <span className="w-fit rounded-lg bg-accent-light px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                  {p.region === 'both' ? 'EU & US' : p.region.toUpperCase()}
                </span>
                {p.affiliateUrl ? (
                  <a
                    href={p.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="shop-btn inline-flex min-h-[44px] w-full touch-manipulation cursor-pointer items-center justify-center rounded-[10px] border-[1.5px] border-primary bg-transparent px-3 py-2 text-center font-sans text-xs font-medium text-primary no-underline transition-all duration-150 hover:bg-primary hover:text-white min-[390px]:w-auto"
                  >
                    {tr.shopNow}
                  </a>
                ) : (
                  <span className="rounded-lg border border-border bg-bg px-2 py-2 text-center text-[10px] font-medium text-muted">
                    {tr.comingSoonProduct}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
