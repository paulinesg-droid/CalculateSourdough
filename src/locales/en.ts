import type { LocaleStrings } from '../types';

export const en: LocaleStrings = {
  tagline:
    'Perfect ratios for your perfect loaf. Adjust the settings below and your recipe updates instantly.',
  tabCalc: 'Calculator',
  tabStarter: 'Sourdough starter',
  tabRecipe: 'Step-by-step recipe',
  tabBlog: 'Blog',
  styleQuestion: 'How should your bread turn out?',
  labelLoafSize: 'Loaf size',
  labelLoaves: 'Number of loaves',
  labelStarter: 'Starter',
  labelSalt: 'Salt',
  hintStarter:
    'Higher % = faster rise & more sour flavour. 20% is the classic starting point.',
  hintSalt: "Controls flavour and fermentation. 2% is the standard — don't go below 1.5%.",
  yourRecipe: 'Your recipe',
  perLoaf: 'Per loaf',
  total: 'Total',
  totalDough: 'Total dough weight',
  comingSoon: 'Starter hydration compensation — coming soon',
  whatYouNeed: "What you'll need",
  shopNow: 'Shop now →',
  resetAll: 'Reset all',
  tip: 'Tip',
  stepsOf: (d, t) => `${d} of ${t} steps completed`,
  recipeIntro: (loaves, loafW, style, h, sp, salt, flour, water, starter, saltA) =>
    `Baking <strong>${loaves} × ${loafW} ${style}</strong> — ${h}% hydration, ${sp}% starter, ${salt}% salt.<br>Total: <strong>${flour}</strong> flour · <strong>${water}</strong> water · <strong>${starter}</strong> starter · <strong>${saltA}</strong> salt. Go to the Calculator tab to adjust.`,

  starterTab: {
    heading: 'How to make your sourdough starter from scratch',
    intro:
      "A sourdough starter is a living culture of wild yeast and bacteria. It takes 7 days to create from scratch and just 5 minutes a day to maintain. Here's everything you need.",
    whatYouNeedHeading: 'What you need',
    whatYouNeedItems: [
      'Flour (wholemeal or rye works best to begin)',
      'Water (room temperature, unchlorinated if possible)',
      'A clean glass jar',
      'A kitchen scale',
    ],
    dayByDayHeading: 'Day by Day Guide',
  },

  styles: [
    {
      id: 'fluffy',
      label: 'Fluffy & soft',
      desc: 'Tight crumb, great for sandwiches and toast. Easy to handle.',
    },
    {
      id: 'classic',
      label: 'Classic sourdough',
      desc: 'The everyday loaf. Open crumb, chewy crust. A great all-rounder.',
    },
    {
      id: 'artisan',
      label: 'Artisan & open',
      desc: 'Big holes, chewy texture, crispy crust. Trickier to shape.',
    },
    {
      id: 'wet',
      label: 'Very wet & chewy',
      desc: 'Ciabatta-style. Extremely open crumb. For experienced bakers.',
    },
  ],
  ingredients: { flour: 'Flour', water: 'Water', starter: 'Sourdough starter', salt: 'Salt' },
  hydration: 'hydration',
  phases: (tf, tw, ts, tSalt, sp, isWet, isFluffy, styleId) => [
    {
      phase: 'The night before',
      icon: '🌙',
      time: 'Evening',
      steps: [
        {
          id: 'feed-starter',
          title: 'Feed your sourdough starter',
          desc: 'Discard all but ~50g of starter. Feed with equal parts flour and water (e.g. 50g + 50g). Stir well, cover loosely, leave at room temperature overnight.',
          tip: "Your starter is ready when it's doubled and bubbly — usually 8–12 hours.",
        },
      ],
    },
    {
      phase: 'Mixing day',
      icon: '🌅',
      time: 'Morning',
      steps: [
        {
          id: 'autolyse',
          title: 'Autolyse — mix flour and water',
          desc: `Combine ${tf} flour with ${tw} water in a large bowl. Mix until no dry flour remains. Cover and rest 30–60 minutes. This builds gluten effortlessly.`,
          amounts: `${tf} flour + ${tw} water`,
          tip: isFluffy
            ? "Your dough will feel firm — that's perfect for a tighter crumb."
            : isWet
              ? 'Wet dough is normal — resist adding more flour.'
              : null,
        },
        {
          id: 'add-starter',
          title: 'Add starter and mix',
          desc: `Add ${ts} of active, bubbly starter. Squeeze and fold it through the dough until fully incorporated, 3–5 minutes.`,
          amounts: `${ts} starter`,
          tip: 'The starter should float on water — if it sinks, give it more time.',
        },
        {
          id: 'add-salt',
          title: 'Add salt',
          desc: `Sprinkle ${tSalt} of salt over the dough. Add a splash of water (~20g) to dissolve it, fold and squeeze until fully combined. Rest 30 minutes.`,
          amounts: `${tSalt} salt`,
          tip: 'Adding salt after the starter prevents it inhibiting yeast activity.',
        },
      ],
    },
    {
      phase: 'Bulk fermentation',
      icon: '⏱️',
      time: `${sp >= 25 ? '3–4' : '4–6'} hours`,
      steps: [
        {
          id: 'sf1',
          title: 'Stretch & fold — Round 1',
          desc: 'Wet your hand, grab one side of the dough, stretch up and fold over. Rotate 90° and repeat 4 times total. Cover and rest 30 minutes.',
          tip: "Be gentle — you're building structure, not kneading.",
        },
        {
          id: 'sf2',
          title: 'Stretch & fold — Round 2',
          desc: 'Repeat the same technique. The dough should feel slightly more elastic. Cover and rest 30 minutes.',
          tip: null,
        },
        {
          id: 'sf3',
          title: 'Stretch & fold — Round 3',
          desc: 'Repeat once more. The dough should hold shape better and feel noticeably smoother. Cover and rest 30 minutes.',
          tip: null,
        },
        {
          id: 'sf4',
          title: 'Stretch & fold — Round 4 (optional)',
          desc: isWet
            ? 'For wet doughs, a 4th set builds extra strength. The dough should feel silky.'
            : 'If the dough still feels slack, do one more set. Otherwise let it rise undisturbed.',
          tip: 'Bulk fermentation is done when the dough has grown 50–75% and looks airy with bubbles on the surface.',
        },
      ],
    },
    {
      phase: 'Shaping',
      icon: '🤲',
      time: '20 minutes',
      steps: [
        {
          id: 'pre-shape',
          title: 'Pre-shape',
          desc: 'Turn dough onto an unfloured surface. Fold edges inward then drag the ball toward you to create tension. Rest uncovered 20–30 minutes.',
          tip: "Don't add flour — stickiness helps create surface tension.",
        },
        {
          id: 'final-shape',
          title: 'Final shape',
          desc: isFluffy
            ? 'Shape into a tight round or oval. Flip and drag toward you to build a tight skin. Place seam-side up into a well-floured banneton.'
            : isWet
              ? 'Work quickly — wet doughs spread. Fold like a letter, roll into a log or round. Place seam-side up in a floured banneton.'
              : 'Fold edges to centre, flip, then drag in a circular motion to build tension. Place seam-side up in a floured banneton.',
          tip: 'Score deep enough (2–3cm) at 45° for maximum oven spring.',
        },
      ],
    },
    {
      phase: 'Cold proof',
      icon: '❄️',
      time: '12–18 hours',
      steps: [
        {
          id: 'cold-proof',
          title: 'Refrigerate overnight',
          desc: 'Cover the banneton with a shower cap or cling film. Refrigerate 12–18 hours (up to 24). Cold proofing develops flavour and makes scoring easier.',
          tip:
            styleId === 'wet'
              ? 'A longer cold proof (18–24h) gives wet doughs more structure and complex flavour.'
              : 'Longer cold proofs = more sour and complex flavour.',
        },
      ],
    },
    {
      phase: 'Baking',
      icon: '🔥',
      time: `${styleId === 'fluffy' ? '40' : '45–50'} minutes`,
      steps: [
        {
          id: 'preheat',
          title: 'Preheat oven + Dutch oven',
          desc: 'Place Dutch oven (lid on) in cold oven. Set to 250°C / 480°F. Preheat at least 45–60 minutes. The hotter the better.',
          tip: "Don't skip this — the screaming-hot Dutch oven creates steam for an open crumb and blistered crust.",
        },
        {
          id: 'score',
          title: 'Score and bake (lid on)',
          desc: 'Take dough straight from fridge. Flip onto parchment. Score with a lame or sharp knife at 30–45°. Lower into Dutch oven. Bake with lid on for 20 minutes.',
          tip: "Cold dough scores more cleanly — don't let it warm up first.",
        },
        {
          id: 'bake-open',
          title: `Remove lid and bake ${styleId === 'fluffy' ? '20' : '25–30'} more minutes`,
          desc: `Remove the lid and reduce heat to ${styleId === 'fluffy' ? '220°C / 425°F' : '230°C / 450°F'}. Bake until deep brown and internal temperature reaches 96–98°C / 205°F.`,
          tip: isFluffy
            ? 'Pull earlier for a softer crust — around 93°C internal.'
            : "Don't be afraid of dark — a deep brown crust = maximum flavour.",
        },
        {
          id: 'cool',
          title: 'Cool completely before cutting',
          desc: 'Transfer to a wire rack. Resist cutting for 1–2 hours — the interior is still baking from residual heat. Cutting too early gives a gummy crumb.',
          tip: 'The crackling sound as it cools is the sound of a good loaf. Enjoy it.',
        },
      ],
    },
  ],
  footer: 'SourdoughCalculate — free forever. Affiliate links help keep this tool free.',
};
