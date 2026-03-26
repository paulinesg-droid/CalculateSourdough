import type { Lang, Unit } from '../types';

interface HeaderProps {
  lang: Lang;
  unit: Unit;
  onLang: (l: Lang) => void;
  onUnit: (u: Unit) => void;
}

export function Header({ lang, unit, onLang, onUnit }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b border-border bg-white px-4 py-3 min-[390px]:px-6 min-[390px]:py-4">
      <div className="min-w-0 font-display text-[1.25rem] font-semibold tracking-tight text-primary min-[390px]:text-[1.4rem]">
        Sourdough<span className="text-accent">Calculate</span>
      </div>
      <div className="header-controls flex flex-wrap items-center justify-end gap-2 min-[390px]:gap-2.5">
        <div className="flex gap-0.5 rounded-[20px] border border-border bg-bg p-[3px]">
          {(['en', 'sv', 'de'] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => onLang(l)}
              className={`min-h-[44px] min-w-[44px] touch-manipulation cursor-pointer rounded-[14px] border-none px-2.5 py-2 font-sans text-xs font-medium transition-all duration-200 ${
                lang === l ? 'bg-accent text-white' : 'bg-transparent text-muted'
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="flex gap-0.5 rounded-[20px] border border-border bg-bg p-[3px]">
          <button
            type="button"
            onClick={() => onUnit('metric')}
            className={`min-h-[44px] touch-manipulation cursor-pointer rounded-2xl border-none px-3.5 py-2 font-sans text-[13px] font-medium transition-all duration-200 ${
              unit === 'metric' ? 'bg-primary text-white' : 'bg-transparent text-muted'
            }`}
          >
            g / kg
          </button>
          <button
            type="button"
            onClick={() => onUnit('imperial')}
            className={`min-h-[44px] touch-manipulation cursor-pointer rounded-2xl border-none px-3.5 py-2 font-sans text-[13px] font-medium transition-all duration-200 ${
              unit === 'imperial' ? 'bg-primary text-white' : 'bg-transparent text-muted'
            }`}
          >
            oz / lbs
          </button>
        </div>
      </div>
    </header>
  );
}
