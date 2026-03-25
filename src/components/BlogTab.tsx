import { useMemo, useState } from 'react';
import imgCat from '../assets/blog/IMG_4108.jpg';
import imgJungle from '../assets/blog/IMG_4102.jpg';
import type { LocaleStrings } from '../types';

type BlogPost = {
  title: string;
  content: string;
  image?: string;
};

/** Vite-resolved /assets/… URLs, http(s), or a public filename joined with BASE_URL. */
function blogImageSrc(urlOrFilename: string): string {
  if (urlOrFilename.startsWith('http://') || urlOrFilename.startsWith('https://')) {
    return urlOrFilename;
  }
  if (urlOrFilename.includes('/assets/')) {
    return urlOrFilename;
  }
  return `${import.meta.env.BASE_URL}${urlOrFilename.replace(/^\//, '')}`;
}

function firstTwoSentences(text: string) {
  const normalized = text.replace(/\s+/g, ' ').trim();
  const marked = normalized.replace(/([.!?])\s+/g, '$1|');
  const parts = marked.split('|').map((s) => s.trim()).filter(Boolean);
  return parts.slice(0, 2).join(' ');
}

const BLOG_POSTS: BlogPost[] = [
  {
    title: "I Spent a Year Lost in the Sourdough Jungle — Here's What Actually Works",
    image: imgJungle,
    content: `If you've ever searched "how to make sourdough" you'll know exactly what I mean by the jungle. Autolyse or no autolyse? 65% hydration or 80%? Feed your starter twice a day or once a week? Cold proof or room temperature? Dutch oven or baking stone? Score once or five times?

I spent over a year trying to find the right way to make sourdough bread. I followed strict recipes from award-winning bakers. I joined forums where people argued passionately about flour protein content. I killed three starters. I produced loaves that could double as doorstops.

Here is what I eventually learned: there is no single right way. Sourdough is alive — literally — and it responds to your kitchen, your flour, your water, your hands, and even the season. A recipe that works perfectly in a warm San Francisco kitchen in summer will behave completely differently in a cold Swedish apartment in January.

What matters most is understanding the fundamentals: the ratio of flour to water to starter, the temperature your dough ferments at, and learning to read your dough rather than just following a clock. Everything else is noise.

That is exactly why I built this calculator. Not to give you another rigid recipe to follow — but to help you understand the ratios so you can adapt to your own kitchen, your own flour, and your own life. Start with Classic Sourdough at 72% hydration. Bake it three times. Then start tweaking.

The jungle becomes a lot less scary when you have a map.`,
  },
  {
    title: 'The Only 4 Ingredients You Need for Perfect Sourdough',
    content: `Flour. Water. Salt. Starter. That is it.

No commercial yeast. No bread improvers. No special equipment (though a Dutch oven helps). The magic of sourdough is that four completely ordinary ingredients, combined in the right ratios and given enough time, produce something extraordinary.

Flour is your foundation. Higher protein content (12% and above) gives you more gluten development and a better rise. Strong bread flour is ideal for beginners. As you get more confident, try mixing in some wholemeal or rye — both add flavour and help your starter.

Water temperature matters more than most beginners realise. Cold water slows fermentation, warm water speeds it up. In summer you might use cold water to stop your dough over-fermenting. In winter, slightly warm water helps things along. Aim for around 25 degrees as a starting point.

Salt does three things: it adds flavour, it strengthens gluten structure, and it slows fermentation slightly. The standard ratio is 2% of your flour weight. Do not skip it.

Starter is your wild yeast culture — the living ingredient that makes sourdough, sourdough. A healthy starter smells pleasantly sour and tangy, doubles in size after feeding, and has visible bubbles throughout.

Get these four ingredients right and you are most of the way there. Use the calculator above to find your perfect ratios.`,
  },
  {
    title: 'Why Your Sourdough Is Not Rising (And How to Fix It)',
    content: `Flat sourdough is the most common problem beginners face — and almost always, the culprit is one of three things: an underactive starter, under-fermentation, or too much flour.

Problem 1 — Your starter is not active enough. Your starter should roughly double in size within 4 to 8 hours of feeding at room temperature. If it is not doing that, it is not ready to leaven bread. Fix: feed it equal weights of flour and water every 24 hours for a few days until it becomes reliably active.

Problem 2 — Under-fermentation. This is the most common mistake. Recipes give times as a guide, but your dough is ready when it looks and feels right — not when the timer goes off. Properly fermented dough will have grown 50 to 75%, feel airy and pillowy, and jiggle when you shake the bowl.

Problem 3 — Too much flour during shaping. It is tempting to add flour when dough sticks to your hands. Resist. Extra flour weakens the gluten structure and creates dense, dry bread. Work with slightly wet hands instead, or use a bench scraper.

The temperature factor: fermentation slows dramatically in cold kitchens. If your kitchen is below 20 degrees, everything will take longer than recipes suggest. A simple trick: put your dough in the oven with just the light on — the light generates enough warmth to create a perfect proofing environment.

Still struggling? Try dropping your hydration to 65% using the calculator above.`,
  },
  {
    title: 'The Bread I Almost Ruined (But Everyone Loved)',
    image: imgCat,
    content: `I forgot the flour dusting. I botched the scoring. The crust cracked in all the wrong places — and yet, this sourdough loaf turned out to be one of the best I've ever baked. My husband said so. My 6 and 7-year-old kids said so. Even the cat jumped up to investigate, which in our house is the highest possible compliment. Sometimes the imperfect loaves are the ones that remind you why you started baking sourdough in the first place. No two loaves are ever the same — and that's exactly the point. Keywords naturally included: homemade sourdough bread, sourdough for beginners, sourdough mistakes, best sourdough recipe, artisan bread at home.`,
  },
];

export function BlogTab({ tr }: { tr: LocaleStrings }) {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const posts = tr.blogTab?.posts ?? BLOG_POSTS;
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
      <div className="mb-4 font-display text-[1.1rem] font-semibold text-primary">
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
                  src={blogImageSrc(p.image)}
                  alt=""
                  decoding="async"
                  fetchPriority="low"
                  className="block h-[200px] w-full rounded-t-[14px] object-cover"
                />
              ) : null}
              <div className="p-5">
                <div className="mb-2 font-display text-base font-semibold text-primary">{p.title}</div>
                <div className="mb-3 text-[13px] leading-relaxed text-muted">{p.excerpt}</div>

                {isOpen ? (
                  <div className="mb-3 whitespace-pre-line text-[13px] leading-relaxed text-muted">
                    {p.content}
                  </div>
                ) : null}

                <button
                  type="button"
                  className="cursor-pointer rounded-[10px] border border-border bg-transparent px-3.5 py-1.5 font-sans text-xs font-medium text-muted transition-all duration-150 hover:border-primary hover:text-primary"
                  onClick={() => setExpanded((s) => ({ ...s, [p.idx]: !s[p.idx] }))}
                >
                  Read more
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

