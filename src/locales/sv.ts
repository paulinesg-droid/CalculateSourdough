import type { LocaleStrings } from '../types';

export const sv: LocaleStrings = {
  tagline:
    'Perfekta proportioner för ditt perfekta bröd. Justera inställningarna nedan så uppdateras receptet direkt.',
  tabCalc: 'Kalkylator',
  tabStarter: 'Surdegsstarter',
  tabRecipe: 'Steg-för-steg recept',
  tabBlog: 'Blogg',
  styleQuestion: 'Hur vill du att brödet ska bli?',
  labelLoafSize: 'Brödets vikt',
  labelLoaves: 'Antal bröd',
  labelStarter: 'Surdeg',
  labelSalt: 'Salt',
  hintStarter: 'Högre % = snabbare jäsning & surare smak. 20% är det klassiska utgångsvärdet.',
  hintSalt: 'Styr smak och jäsning. 2% är standard — gå inte under 1,5%.',
  yourRecipe: 'Ditt recept',
  perLoaf: 'Per bröd',
  total: 'Totalt',
  totalDough: 'Total degvikt',
  comingSoon: 'Kompensation för surdegsvätska — kommer snart',
  whatYouNeed: 'Det här behöver du',
  youMightAlsoNeed: 'Du kanske också behöver',
  shopNow: 'Köp här →',
  openCalculator: 'Öppna kalkylatorn →',
  blogCalculatorCta:
    'Redo att baka? Räkna ut exakt mjöl, vatten, surdeg och salt i kalkylatorn.',
  resetAll: 'Nollställ',
  tip: 'Tips',
  stepsOf: (d, t) => `${d} av ${t} steg klara`,
  recipeIntro: (loaves, loafW, style, h, sp, salt, flour, water, starter, saltA) =>
    `Bakar <strong>${loaves} × ${loafW} ${style}</strong> — ${h}% hydrering, ${sp}% surdeg, ${salt}% salt.<br>Totalt: <strong>${flour}</strong> mjöl · <strong>${water}</strong> vatten · <strong>${starter}</strong> surdeg · <strong>${saltA}</strong> salt. Gå till kalkylatorn för att ändra.`,

  starterTab: {
    heading: 'Så gör du din surdegsstarter från grunden',
    intro:
      'En surdegsstarter är en levande kultur av vilda jästsvampar och bakterier. Det tar 7 dagar att skapa från grunden och bara 5 minuter om dagen att underhålla. Här är allt du behöver.',
    whatYouNeedHeading: 'Det här behöver du',
    whatYouNeedItems: [
      'Mjöl (fullkorns- eller rågmjöl fungerar bäst att börja med)',
      'Vatten (rumstempererat, helst utan klor)',
      'En ren glasburk',
      'En köksvåg',
    ],
    dayByDayHeading: 'Dag för dag',
  },

  styles: [
    {
      id: 'fluffy',
      label: 'Fluffigt & mjukt',
      desc: 'Tät smula, perfekt för mackor och toast. Lätt att forma.',
    },
    {
      id: 'classic',
      label: 'Klassisk surdeg',
      desc: 'Det vardagliga brödet. Öppen smula, seg skorpa. En pålitlig favorit.',
    },
    {
      id: 'artisan',
      label: 'Segt & hålrikt',
      desc: 'Stora hål, seg textur, krispig skorpa. Svårare att forma.',
    },
    {
      id: 'wet',
      label: 'Mycket vått & segt',
      desc: 'Ciabatta-stil. Extremt öppen smula. För erfarna bagare.',
    },
  ],
  ingredients: { flour: 'Mjöl', water: 'Vatten', starter: 'Surdeg', salt: 'Salt' },
  hydration: 'hydrering',
  phases: (tf, tw, ts, tSalt, sp, isWet, isFluffy, styleId) => [
    {
      phase: 'Kvällen innan',
      icon: '🌙',
      time: 'Kväll',
      steps: [
        {
          id: 'feed-starter',
          title: 'Mata din surdeg',
          desc: 'Häll bort allt utom ~50g surdeg. Mata med lika delar mjöl och vatten (t.ex. 50g + 50g). Rör om, täck löst och låt stå i rumstemperatur över natten.',
          tip: 'Din surdeg är redo när den har fördubblats och ser bubblande ut — vanligtvis 8–12 timmar.',
        },
      ],
    },
    {
      phase: 'Blandningsdag',
      icon: '🌅',
      time: 'Morgon',
      steps: [
        {
          id: 'autolyse',
          title: 'Autolys — blanda mjöl och vatten',
          desc: `Blanda ${tf} mjöl med ${tw} vatten i en stor bunke. Blanda tills inget torrt mjöl syns. Täck och vila 30–60 minuter. Detta bygger gluten utan ansträngning.`,
          amounts: `${tf} mjöl + ${tw} vatten`,
          tip: isFluffy
            ? 'Degen känns fast — det är perfekt för en tätare smula.'
            : isWet
              ? 'Lös deg är normalt — motstå frestelsen att tillsätta mer mjöl.'
              : null,
        },
        {
          id: 'add-starter',
          title: 'Tillsätt surdeg och blanda',
          desc: `Tillsätt ${ts} aktiv, bubblande surdeg. Knåda och vik ner surdegen i degen tills den är helt inblandad, 3–5 minuter.`,
          amounts: `${ts} surdeg`,
          tip: 'Surdegen ska flyta på vatten — sjunker den behöver den mer tid.',
        },
        {
          id: 'add-salt',
          title: 'Tillsätt salt',
          desc: `Strö ${tSalt} salt över degen. Tillsätt lite vatten (~20g) för att lösa upp saltet, vik och pressa tills det är helt inblandat. Vila 30 minuter.`,
          amounts: `${tSalt} salt`,
          tip: 'Att tillsätta salt efter surdegen förhindrar att det hämmar jästen.',
        },
      ],
    },
    {
      phase: 'Bulkjäsning',
      icon: '⏱️',
      time: `${sp >= 25 ? '3–4' : '4–6'} timmar`,
      steps: [
        {
          id: 'sf1',
          title: 'Sträck & vik — Omgång 1',
          desc: 'Blöt handen, ta tag i ena sidan av degen, sträck upp och vik över. Rotera skålen 90° och upprepa 4 gånger. Täck och vila 30 minuter.',
          tip: 'Var varsam — du bygger struktur, inte knådar.',
        },
        {
          id: 'sf2',
          title: 'Sträck & vik — Omgång 2',
          desc: 'Upprepa samma teknik. Degen bör kännas lite mer elastisk. Täck och vila 30 minuter.',
          tip: null,
        },
        {
          id: 'sf3',
          title: 'Sträck & vik — Omgång 3',
          desc: 'Upprepa en gång till. Degen bör hålla sin form bättre och kännas märkbart slätare. Täck och vila 30 minuter.',
          tip: null,
        },
        {
          id: 'sf4',
          title: 'Sträck & vik — Omgång 4 (valfritt)',
          desc: isWet
            ? 'För lös deg, gör en 4:e omgång för extra styrka. Degen bör kännas sidenlen.'
            : 'Om degen fortfarande känns lös, gör en omgång till. Annars låt den jäsa ostörd.',
          tip: 'Bulkjäsningen är klar när degen vuxit 50–75% och ser luftig ut med bubblor på ytan.',
        },
      ],
    },
    {
      phase: 'Formning',
      icon: '🤲',
      time: '20 minuter',
      steps: [
        {
          id: 'pre-shape',
          title: 'Förformning',
          desc: 'Vänd degen på ett omjölat bord. Vik kanterna inåt och dra sedan degen mot dig för att skapa spänning. Vila utan täckning 20–30 minuter.',
          tip: 'Tillsätt inte mjöl — klebbigheten hjälper till att skapa ytspänning.',
        },
        {
          id: 'final-shape',
          title: 'Slutformning',
          desc: isFluffy
            ? 'Forma till en spänd rund eller oval. Vänd och dra mot dig för att bygga en spänd yta. Lägg med skarven uppåt i en mjölad jäskorg.'
            : isWet
              ? 'Jobba snabbt — lös deg sprider sig. Vik som ett brev och rulla till en rulle eller rund. Lägg med skarven uppåt i en mjölad jäskorg.'
              : 'Vik kanterna till mitten, vänd, och dra i cirkelrörelse för att bygga spänning. Lägg med skarven uppåt i en mjölad jäskorg.',
          tip: 'Snitta tillräckligt djupt (2–3 cm) i 45° vinkel för maximalt ugnslyft.',
        },
      ],
    },
    {
      phase: 'Kylskåpsjäsning',
      icon: '❄️',
      time: '12–18 timmar',
      steps: [
        {
          id: 'cold-proof',
          title: 'Jäs i kylskåpet över natten',
          desc: 'Täck jäskorgen med en duschkeps eller plastfilm. Ställ i kylskåpet 12–18 timmar (upp till 24). Kylskåpsjäsning ger bättre smak och gör degen lättare att snitta.',
          tip:
            styleId === 'wet'
              ? 'En längre kylskåpsjäsning (18–24 tim) ger lös deg mer struktur och komplex smak.'
              : 'Längre jäsning = surare och mer komplex smak.',
        },
      ],
    },
    {
      phase: 'Bakning',
      icon: '🔥',
      time: `${styleId === 'fluffy' ? '40' : '45–50'} minuter`,
      steps: [
        {
          id: 'preheat',
          title: 'Förvärm ugn + gjutjärnsgryta',
          desc: 'Ställ gjutjärnsgrytan (med lock) i kall ugn. Sätt på 250°C. Förvärm minst 45–60 minuter. Ju hetare desto bättre.',
          tip: 'Hoppa inte över det här steget — den glödande grytan skapar ånga för öppen smula och blåskig skorpa.',
        },
        {
          id: 'score',
          title: 'Snitta och grädda (lock på)',
          desc: 'Ta degen direkt från kylskåpet. Vänd på bakplåtspapper. Snitta med en vass kniv i 30–45° vinkel. Sänk försiktigt ner i grytan. Grädda med lock 20 minuter.',
          tip: 'Kall deg snitter renare — låt den inte värmas upp först.',
        },
        {
          id: 'bake-open',
          title: `Ta av locket och grädda ${styleId === 'fluffy' ? '20' : '25–30'} minuter till`,
          desc: `Ta av locket och sänk värmen till ${styleId === 'fluffy' ? '220°C' : '230°C'}. Grädda tills skorpan är djupt brun och innertemperaturen når 96–98°C.`,
          tip: isFluffy
            ? 'Ta ut tidigare för mjukare skorpa — runt 93°C inre temperatur.'
            : 'Var inte rädd för mörk färg — djupt brun skorpa = maximal smak.',
        },
        {
          id: 'cool',
          title: 'Låt svalna helt innan du skär',
          desc: 'Lägg på ett galler och vänta 1–2 timmar innan du skär. Brödet bakas fortfarande klart av kvarvarande värme. Skär du för tidigt får du klibbig smula.',
          tip: 'Knäppljudet när brödet svalnar är ljudet av ett lyckat bröd. Njut av det.',
        },
      ],
    },
  ],
  heroTitle: 'Baka perfekt surdeg varje gång',
  heroByline: 'Av Pauline – hemmabagare på västkusten 🌊',
  heroIntro:
    'Jag byggde den här gratis kalkylatorn för att jag tröttnade på att räkna surdeg för hand – och tydligen gjorde många andra bagare detsamma!',
  heroCta: 'Räkna ut mitt recept →',
  heroImageAlt: 'Surdegsbröd, blommor och ljus',
  heroAriaLabel: 'Introduktion',
  readMoreBlog: 'Läs mer',
  filterAll: 'Alla',
  comingSoonProduct: 'Kommer snart',
  blogTab: {
    sectionTitle: 'Blogg',
  },
  footer: 'SourdoughCalculate — alltid gratis. Affiliatelänkar hjälper oss hålla verktyget kostnadsfritt.',
  footerAmazonDisclaimer:
    'Som Amazon-partner tjänar jag på kvalificerade köp.',
};
