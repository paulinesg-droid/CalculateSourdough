import { useCallback, useMemo, useState } from 'react';
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

  return (
    <div className="min-h-screen bg-bg">
      <Header lang={lang} unit={unit} onLang={setLang} onUnit={handleUnit} />

      <main className="mx-auto max-w-[680px] px-6 pb-16 pt-8">
        <div className="tab-bar mb-8 flex gap-0 border-b-2 border-border">
          <button
            type="button"
            onClick={() => setActiveTab('calculator')}
            className={`tab-btn -mb-0.5 cursor-pointer border-b-2 border-transparent bg-transparent px-5 py-2.5 font-sans text-sm font-medium transition-all duration-200 min-[481px]:px-5 ${
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
            className={`tab-btn -mb-0.5 cursor-pointer border-b-2 border-transparent bg-transparent px-4 py-2.5 font-sans text-sm font-medium transition-all duration-200 min-[481px]:px-5 min-[481px]:text-sm ${
              activeTab === 'starter' ? 'border-primary text-primary' : 'text-muted'
            }`}
          >
            {tr.tabStarter}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('recipe')}
            className={`tab-btn -mb-0.5 cursor-pointer border-b-2 border-transparent bg-transparent px-3.5 py-2.5 font-sans text-sm font-medium transition-all duration-200 min-[481px]:px-5 min-[481px]:text-sm ${
              activeTab === 'recipe' ? 'border-primary text-primary' : 'text-muted'
            }`}
          >
            {tr.tabRecipe}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('blog')}
            className={`tab-btn -mb-0.5 cursor-pointer border-b-2 border-transparent bg-transparent px-3.5 py-2.5 font-sans text-sm font-medium transition-all duration-200 min-[481px]:px-5 min-[481px]:text-sm ${
              activeTab === 'blog' ? 'border-primary text-primary' : 'text-muted'
            }`}
          >
            {tr.tabBlog}
          </button>
        </div>

        <div className={activeTab === 'calculator' ? 'block' : 'hidden'}>
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
          <BlogTab tr={tr} />
        </div>
      </main>

      <footer className="mx-auto max-w-[680px] border-t border-border px-6 py-8 text-center text-xs text-muted">
        {tr.footer}
      </footer>
    </div>
  );
}
