import { useMemo, useState } from 'react';
import type { LocaleStrings } from '../types';

// Bundled from src/assets/blog/ (paths relative to this file: ../assets/blog/…)
import imgCatUrl from '../assets/blog/IMG_4108.jpg?url';

function firstTwoSentences(text: string) {
  const normalized = text.replace(/\s+/g, ' ').trim();
  const marked = normalized.replace(/([.!?])\s+/g, '$1|');
  const parts = marked.split('|').map((s) => s.trim()).filter(Boolean);
  return parts.slice(0, 2).join(' ');
}

export function BlogTab({
  tr,
  onOpenCalculator,
}: {
  tr: LocaleStrings;
  onOpenCalculator: () => void;
}) {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const posts = useMemo(() => {
    const raw = tr.blogTab?.posts ?? [];
    return raw.map((p, idx) => ({
      ...p,
      image: p.image ?? (idx === 3 ? imgCatUrl : undefined),
    }));
  }, [tr.blogTab?.posts]);

  const postsWithExcerpt = useMemo(
    () =>
      posts.map((p, idx) => ({
        ...p,
        idx,
        excerpt: firstTwoSentences(p.content),
      })),
    [posts]
  );

  return (
    <div>
      <div className="mb-4 font-display text-[1.05rem] font-semibold leading-snug text-primary min-[390px]:text-[1.1rem]">
        {tr.blogTab?.sectionTitle ?? 'Blog'}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {postsWithExcerpt.map((p) => {
          const isOpen = !!expanded[p.idx];
          return (
            <div
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
                <div className="mb-2 font-display text-[1.05rem] font-semibold leading-snug text-primary min-[390px]:text-base">
                  {p.title}
                </div>
                <div className="mb-3 text-[15px] leading-relaxed text-muted sm:text-[13px]">{p.excerpt}</div>

                {isOpen ? (
                  <div className="mb-4 whitespace-pre-line text-[15px] leading-relaxed text-muted sm:text-[13px]">
                    {p.content}
                  </div>
                ) : null}

                <button
                  type="button"
                  className="min-h-[44px] touch-manipulation cursor-pointer rounded-[10px] border border-border bg-transparent px-4 py-2.5 font-sans text-sm font-medium text-muted transition-all duration-150 hover:border-primary hover:text-primary"
                  onClick={() => setExpanded((s) => ({ ...s, [p.idx]: !s[p.idx] }))}
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

