import Giscus from '@giscus/react';
import { useMemo, useState } from 'react';
import type { Lang, LocaleStrings } from '../types';

function formatBlogDate(iso: string, lang: Lang): string {
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  const locale = lang === 'sv' ? 'sv-SE' : lang === 'de' ? 'de-DE' : 'en-GB';
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

function firstTwoSentences(text: string) {
  const normalized = text.replace(/\s+/g, ' ').trim();
  const marked = normalized.replace(/([.!?])\s+/g, '$1|');
  const parts = marked.split('|').map((s) => s.trim()).filter(Boolean);
  return parts.slice(0, 2).join(' ');
}

export function BlogTab({
  lang,
  tr,
  onOpenCalculator,
}: {
  lang: Lang;
  tr: LocaleStrings;
  onOpenCalculator: () => void;
}) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const posts = useMemo(() => tr.blogTab?.posts ?? [], [tr.blogTab?.posts]);

  const postsWithExcerpt = useMemo(() => {
    const sorted = [...posts].sort((a, b) => {
      const ta = new Date(`${a.date}T12:00:00`).getTime();
      const tb = new Date(`${b.date}T12:00:00`).getTime();
      return tb - ta;
    });
    return sorted.map((p) => ({
      ...p,
      excerpt: firstTwoSentences(p.content),
    }));
  }, [posts]);

  return (
    <div>
      <div className="mb-4 font-display text-[1.05rem] font-semibold leading-snug text-primary min-[390px]:text-[1.1rem]">
        {tr.blogTab?.sectionTitle ?? 'Blog'}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {postsWithExcerpt.map((p) => {
          const isOpen = !!expanded[p.title];
          return (
            <article
              key={p.title}
              className="overflow-hidden rounded-[14px] border border-border bg-white"
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  decoding="async"
                  className="block h-[200px] w-full min-h-[200px] rounded-t-[14px] object-cover"
                />
              ) : null}
              <div className="p-4 min-[390px]:p-5">
                <h3 className="mb-1 font-display text-[1.05rem] font-semibold leading-snug text-primary min-[390px]:text-base">
                  {p.title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-primary/95">
                  <span className="text-muted">
                    {tr.blogTab?.datePublishedLabel ?? 'Published'}
                    {': '}
                  </span>
                  <time
                    dateTime={p.date}
                    className="font-medium text-primary"
                  >
                    {formatBlogDate(p.date, lang)}
                  </time>
                </p>
                <div className="mb-3 text-[15px] leading-relaxed text-muted sm:text-[13px]">{p.excerpt}</div>

                {isOpen ? (
                  <div className="mb-4 whitespace-pre-line text-[15px] leading-relaxed text-muted sm:text-[13px]">
                    {p.content}
                  </div>
                ) : null}

                <button
                  type="button"
                  className="min-h-[44px] touch-manipulation cursor-pointer rounded-[10px] border border-border bg-transparent px-4 py-2.5 font-sans text-sm font-medium text-muted transition-all duration-150 hover:border-primary hover:text-primary"
                  onClick={() => setExpanded((s) => ({ ...s, [p.title]: !s[p.title] }))}
                >
                  {tr.readMoreBlog}
                </button>

                <div className="mt-5 border-t border-border pt-4">
                  <p className="mb-3 text-left text-[15px] leading-snug text-muted sm:text-sm">
                    {tr.blogCalculatorCta}
                  </p>
                  <button
                    type="button"
                    onClick={onOpenCalculator}
                    className="min-h-[44px] w-full touch-manipulation cursor-pointer rounded-[10px] border-2 border-primary bg-bg2 px-4 py-2.5 text-center font-sans text-sm font-medium text-primary transition-all duration-150 hover:bg-primary hover:text-white sm:w-auto"
                  >
                    {tr.openCalculator}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div
        className="giscus-container mt-12 min-[390px]:mt-14 max-w-full rounded-[16px] border border-border bg-bg2/95 p-1 shadow-[0_1px_0_rgba(139,69,19,0.08),inset_0_1px_0_rgba(255,255,255,0.45)]"
        style={{ colorScheme: 'light dark' }}
      >
        <div className="rounded-[14px] border border-border/60 bg-gradient-to-b from-white/90 to-bg px-2 py-3 min-[390px]:px-4 min-[390px]:py-5">
          <Giscus
            repo="paulinesg-droid/CalculateSourdough"
            repoId="R_kgDORt6ZMg"
            category="General"
            categoryId="DIC_kwDORt6ZMs4C7jVd"
            mapping="pathname"
            reactionsEnabled="1"
            theme="preferred_color_scheme"
            lang="en"
          />
        </div>
      </div>
    </div>
  );
}

