import { Analytics } from '@vercel/analytics/react'
import { useCallback, useEffect, useMemo, useState } from 'react';
import heroBreadUrl from './assets/blog/breadandflower.jpg?url';
import { parseLoafSizeInput, toGrams } from './calculations';
import { CalculatorTab } from './components/CalculatorTab';
import { Header } from './components/Header';
import { RecipeTab } from './components/RecipeTab';
import { StarterTab } from './components/StarterTab';
import { BlogTab } from './components/BlogTab';
import { MainTabNav } from './components/MainTabNav';
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

  useEffect(() => {
    document.documentElement.lang = lang === 'sv' ? 'sv' : lang === 'de' ? 'de' : 'en';
  }, [lang]);

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
      document.getElementById('panel-calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }, []);

  return (
    <div className="min-h-screen">
      <Header lang={lang} unit={unit} onLang={setLang} onUnit={handleUnit} />

      <main className="mx-auto max-w-[680px] px-4 pb-16 pt-6 max-[389px]:px-3 sm:px-6 sm:pt-8">
        <MainTabNav activeTab={activeTab} onSelect={setActiveTab} tr={tr} />

        <div
          id="panel-calculator"
          role="tabpanel"
          aria-labelledby="tab-calculator"
          className={activeTab === 'calculator' ? 'block scroll-mt-24' : 'hidden'}
        >
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
            onGoToStarter={() => setActiveTab('starter')}
            onGoToRecipe={() => setActiveTab('recipe')}
          />
        </div>

        <div
          id="panel-starter"
          role="tabpanel"
          aria-labelledby="tab-starter"
          className={activeTab === 'starter' ? 'block' : 'hidden'}
        >
          <StarterTab tr={tr} onGoToRecipe={() => setActiveTab('recipe')} />
        </div>

        <div
          id="panel-recipe"
          role="tabpanel"
          aria-labelledby="tab-recipe"
          className={activeTab === 'recipe' ? 'block' : 'hidden'}
        >
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

        <div
          id="panel-blog"
          role="tabpanel"
          aria-labelledby="tab-blog"
          className={activeTab === 'blog' ? 'block' : 'hidden'}
        >
          <BlogTab tr={tr} onOpenCalculator={scrollToCalculator} />
        </div>

        <section
          className="mt-10 overflow-hidden rounded-[18px] border border-border bg-bg2 text-center sm:mt-12"
          aria-label={tr.heroAriaLabel}
        >
          <img
            src={heroBreadUrl}
            alt={tr.heroImageAlt}
            className="block h-[min(220px,42vw)] w-full object-cover sm:h-[260px]"
            decoding="async"
            fetchPriority="low"
          />
          <div className="px-4 py-7 sm:px-8 sm:py-10">
            <h1 className="font-display text-[1.65rem] font-semibold leading-snug tracking-tight text-primary sm:text-3xl md:text-[2rem]">
              {tr.heroTitle}
            </h1>
            <p className="mt-3 font-sans text-sm leading-relaxed text-muted sm:text-base">
              {tr.heroByline}
            </p>
            <p className="mx-auto mt-4 max-w-[32rem] font-sans text-sm leading-relaxed text-muted sm:text-[15px]">
              {tr.heroIntro}
            </p>
            <div className="mt-7 flex justify-center">
              <button
                type="button"
                onClick={scrollToCalculator}
                className="inline-flex min-h-[44px] cursor-pointer touch-manipulation items-center justify-center rounded-[12px] border-2 border-primary bg-primary px-6 py-3 font-sans text-sm font-medium text-white shadow-sm transition-all duration-150 hover:border-primary-light hover:bg-primary-light active:scale-[0.99] sm:px-7 sm:text-[15px]"
              >
                {tr.heroCta}
              </button>
            </div>
          </div>
        </section>
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
