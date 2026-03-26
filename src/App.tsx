import { Analytics } from '@vercel/analytics/react'
import { useCallback, useMemo, useState } from 'react';
import heroBreadUrl from './assets/blog/breadandflower.jpg?url';
import { parseLoafSizeInput, toGrams } from './calculations';
import { CalculatorTab } from './components/CalculatorTab';
import { Header } from './components/Header';
import { RecipeTab } from './components/RecipeTab';
import { StarterTab } from './components/StarterTab';
import { BlogTab } from './components/BlogTab';
import { t } from './locales';
import type { Lang, RegionFilter, StyleId, TabId, Unit } from './types';

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [unit, setUnit] = useState<Unit>('metric');
  const [activeTab, setActiveTab] = useState<TabId>('calculator');
  const [selectedStyleId, setSelectedStyleId] = useState<StyleId>('classic');
  const [loaves, setLoaves] = useState(1);
  const [starterPct, setStarterPct] = useState(20);
  const [saltPct, setSaltPct] = useState(2);
  const [loafSizeStr, setLoafSizeStr] = useState('750');
  const [regionFilter, setRegionFilter] = useState<RegionFilter>('all');
  const [stepStates, setStepStates] = useState<Record<string, boolean>>({});

  const tr = useMemo(() => t(lang), [lang]);

  const handleUnit = useCallback(
    (u: Unit) => {
      if (u === unit) return;
      const currentG = toGrams(parseLoafSizeInput(loafSizeStr, unit), unit);
      setLoafSizeStr(u === 'metric' ? String(Math.round(currentG)) : (currentG * 0.035274).toFixed(1));
      setUnit(u);
    },
    [unit, loafSizeStr]
  );

  const changeLoaves = useCallback((delta: number) => {
    setLoaves((n) => Math.max(1, Math.min(10, n + delta)));
  }, []);

  const toggleStep = useCallback((id: string) => {
    setStepStates((s) => ({ ...s, [id]: !s[id] }));
  }, []);

  const resetSteps = useCallback(() => setStepStates({}), []);

  const handlePreset = useCallback((n: number) => {
    setLoafSizeStr(String(n));
  }, []);

  const scrollToCalculator = useCallback(() => {
    setActiveTab('calculator');
    window.setTimeout(() => {
      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }, []);

  return (
    <div className="min-h-screen">
      <Header lang={lang} unit={unit} onLang={setLang} onUnit={handleUnit} />

      <main className="mx-auto max-w-[680px] px-4 pb-16 pt-6 max-[389px]:px-3 sm:px-6 sm:pt-8">
        <section
          className="mb-8 overflow-hidden rounded-[18px] border border-border bg-bg2 text-center sm:mb-10"
          aria-label="Introduction"
        >
          <img
            src={heroBreadUrl}
            alt="Sourdough loaves, flowers, and candle"
            className="block h-[min(220px,42vw)] w-full object-cover sm:h-[260px]"
            decoding="async"
            fetchPriority="high"
          />
          <div className="px-4 py-7 sm:px-8 sm:py-10">
          <h1 className="font-display text-[1.65rem] font-semibold leading-snug tracking-tight text-primary sm:text-3xl md:text-[2rem]">
            Bake Perfect Sourdough Every Time
          </h1>
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted sm:text-base">
            By Pauline - home baker on the Swedish west coast 🌊
          </p>
          <p className="mx-auto mt-4 max-w-[32rem] font-sans text-sm leading-relaxed text-muted sm:text-[15px]">
            I built this free calculator because I got tired of doing sourdough maths by hand — and apparently so did a lot of other bakers!
          </p>
          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={scrollToCalculator}
              className="inline-flex min-h-[44px] cursor-pointer touch-manipulation items-center justify-center rounded-[12px] border-2 border-primary bg-primary px-6 py-3 font-sans text-sm font-medium text-white shadow-sm transition-all duration-150 hover:bg-primary-light hover:border-primary-light active:scale-[0.99] sm:px-7 sm:text-[15px]"
            >
              Calculate my recipe →
            </button>
          </div>
          </div>
        </section>

        <div className="tab-bar mb-8 flex flex-wrap gap-0 border-b-2 border-border">
          <button
            type="button"
            onClick={() => setActiveTab('calculator')}
            className={`tab-btn -mb-0.5 min-h-[44px] touch-manipulation cursor-pointer border-b-2 border-transparent bg-transparent px-3 py-2.5 font-sans text-[13px] font-medium transition-all duration-200 min-[390px]:px-4 min-[481px]:px-5 min-[481px]:text-sm ${
              activeTab === 'calculator'
                ? 'border-primary text-primary'
                : 'text-muted'
            }`}
          >
            {tr.tabCalc}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('starter')}
            className={`tab-btn -mb-0.5 min-h-[44px] touch-manipulation cursor-pointer border-b-2 border-transparent bg-transparent px-2.5 py-2.5 font-sans text-[13px] font-medium transition-all duration-200 min-[390px]:px-3 min-[481px]:px-5 min-[481px]:text-sm ${
              activeTab === 'starter' ? 'border-primary text-primary' : 'text-muted'
            }`}
          >
            {tr.tabStarter}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('recipe')}
            className={`tab-btn -mb-0.5 min-h-[44px] touch-manipulation cursor-pointer border-b-2 border-transparent bg-transparent px-2.5 py-2.5 font-sans text-[13px] font-medium transition-all duration-200 min-[390px]:px-3 min-[481px]:px-5 min-[481px]:text-sm ${
              activeTab === 'recipe' ? 'border-primary text-primary' : 'text-muted'
            }`}
          >
            {tr.tabRecipe}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('blog')}
            className={`tab-btn -mb-0.5 min-h-[44px] touch-manipulation cursor-pointer border-b-2 border-transparent bg-transparent px-2.5 py-2.5 font-sans text-[13px] font-medium transition-all duration-200 min-[390px]:px-3 min-[481px]:px-5 min-[481px]:text-sm ${
              activeTab === 'blog' ? 'border-primary text-primary' : 'text-muted'
            }`}
          >
            {tr.tabBlog}
          </button>
        </div>

        <div id="calculator" className={activeTab === 'calculator' ? 'block scroll-mt-24' : 'hidden'}>
          <CalculatorTab
            tr={tr}
            unit={unit}
            selectedStyleId={selectedStyleId}
            loaves={loaves}
            starterPct={starterPct}
            saltPct={saltPct}
            loafSizeStr={loafSizeStr}
            regionFilter={regionFilter}
            onLoafSizeStrChange={setLoafSizeStr}
            onSelectStyle={setSelectedStyleId}
            onLoavesDelta={changeLoaves}
            onStarterPct={setStarterPct}
            onSaltPct={setSaltPct}
            onPreset={handlePreset}
            onRegionFilter={setRegionFilter}
          />
        </div>

        <div className={activeTab === 'starter' ? 'block' : 'hidden'}>
          <StarterTab tr={tr} />
        </div>

        <div className={activeTab === 'recipe' ? 'block' : 'hidden'}>
          <RecipeTab
            tr={tr}
            unit={unit}
            selectedStyleId={selectedStyleId}
            loaves={loaves}
            starterPct={starterPct}
            saltPct={saltPct}
            loafSizeStr={loafSizeStr}
            stepStates={stepStates}
            onToggleStep={toggleStep}
            onResetSteps={resetSteps}
          />
        </div>

        <div className={activeTab === 'blog' ? 'block' : 'hidden'}>
          <BlogTab tr={tr} onOpenCalculator={scrollToCalculator} />
        </div>
      </main>

      <footer className="mx-auto max-w-[680px] border-t border-border px-4 py-8 text-center text-xs text-muted min-[390px]:px-6">
        <p>{tr.footer}</p>
        <p className="mt-2.5 max-w-md mx-auto text-[0.65rem] leading-snug text-muted/65">
          {tr.footerAmazonDisclaimer}
        </p>
      </footer>
   <Analytics />
    </div>
  );
}
