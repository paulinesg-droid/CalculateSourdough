import type { LocaleStrings, TabId } from '../types';

const TABS: { id: TabId; label: (tr: LocaleStrings) => string }[] = [
  { id: 'calculator', label: (tr) => tr.tabCalc },
  { id: 'starter', label: (tr) => tr.tabStarter },
  { id: 'recipe', label: (tr) => tr.tabRecipe },
  { id: 'blog', label: (tr) => tr.tabBlog },
];

export function MainTabNav({
  activeTab,
  onSelect,
  tr,
}: {
  activeTab: TabId;
  onSelect: (tab: TabId) => void;
  tr: LocaleStrings;
}) {
  return (
    <nav
      className="mb-8 rounded-2xl border border-border bg-bg2/95 p-1.5 shadow-[0_1px_0_rgba(255,255,255,0.7),inset_0_1px_0_rgba(255,255,255,0.5)]"
      aria-label="Main"
    >
      <div
        className="grid grid-cols-2 gap-1 sm:grid-cols-4"
        role="tablist"
        aria-orientation="horizontal"
      >
        {TABS.map(({ id, label }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`tab-${id}`}
              aria-selected={isActive}
              aria-controls={`panel-${id}`}
              tabIndex={0}
              onClick={() => onSelect(id)}
              className={[
                'min-h-[44px] w-full touch-manipulation rounded-xl px-2 py-2.5 text-center font-sans text-[12px] font-medium leading-snug transition-all duration-200 min-[390px]:px-3 min-[481px]:text-sm',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-bg2',
                isActive
                  ? 'bg-primary font-semibold text-white shadow-md shadow-primary/25'
                  : 'text-muted hover:bg-white/75 hover:text-primary active:bg-white/90',
              ].join(' ')}
            >
              {label(tr)}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
