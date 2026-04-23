export type Lang = 'en' | 'sv' | 'de';
export type Unit = 'metric' | 'imperial';
export type StyleId = 'fluffy' | 'classic' | 'artisan' | 'wet';
export type RegionFilter = 'all' | 'eu' | 'us';
export type TabId = 'calculator' | 'starter' | 'recipe' | 'blog';

export interface StyleDef {
  id: StyleId;
  label: string;
  desc: string;
}

export interface RecipeStepDef {
  id: string;
  title: string;
  desc: string;
  amounts?: string;
  tip: string | null;
}

export interface RecipePhaseDef {
  phase: string;
  icon: string;
  time: string;
  steps: RecipeStepDef[];
}

export type PhasesFn = (
  tf: string,
  tw: string,
  ts: string,
  tSalt: string,
  sp: number,
  isWet: boolean,
  isFluffy: boolean,
  styleId: StyleId
) => RecipePhaseDef[];

export interface LocaleStrings {
  tagline: string;
  tabCalc: string;
  tabStarter: string;
  tabRecipe: string;
  tabBlog: string;
  styleQuestion: string;
  labelLoafSize: string;
  labelLoaves: string;
  labelStarter: string;
  labelSalt: string;
  hintStarter: string;
  hintSalt: string;
  yourRecipe: string;
  perLoaf: string;
  total: string;
  totalDough: string;
  comingSoon: string;
  whatYouNeed: string;
  youMightAlsoNeed: string;
  shopNow: string;
  openCalculator: string;
  blogCalculatorCta: string;
  resetAll: string;
  tip: string;
  stepsOf: (d: number, t: number) => string;
  recipeIntro: (
    loaves: number,
    loafW: string,
    style: string,
    h: number,
    sp: number,
    salt: number,
    flour: string,
    water: string,
    starter: string,
    saltA: string
  ) => string;
  styles: StyleDef[];
  ingredients: { flour: string; water: string; starter: string; salt: string };
  hydration: string;
  phases: PhasesFn;
  footer: string;
  footerAmazonDisclaimer: string;

  /** Hero (home intro card) */
  heroTitle: string;
  heroByline: string;
  heroIntro: string;
  heroCta: string;
  heroImageAlt: string;
  heroAriaLabel: string;
  readMoreBlog: string;
  filterAll: string;
  comingSoonProduct: string;
  /** Calculator: link to Starter tab */
  calcLinkNoStarter: string;
  /** Calculator: link to Recipe tab after amounts */
  calcLinkToRecipe: string;
  /** Starter tab: link to Recipe step-by-step at end of page */
  starterLinkToRecipe: string;

  starterTab?: {
    heading: string;
    intro: string;
    whatYouNeedHeading: string;
    whatYouNeedItems: string[];
    dayByDayHeading: string;
    dayByDaySteps?: { label: string; text: string }[];
    feedingRatioHeading?: string;
    maintenanceHeading?: string;
    maintenanceItems?: string[];
    maintenanceRatio?: string;
    bakingDayHeading?: string;
    bakingDayItems?: string[];
    bakingDayRatio?: string;
    tipsHeading?: string;
    tips?: string[];
  };

  blogTab?: {
    sectionTitle?: string;
    /** Shown before the post date, e.g. "Published" */
    datePublishedLabel?: string;
    /** ISO YYYY-MM-DD, shown with locale-appropriate formatting */
    posts?: { title: string; content: string; image?: string; date: string }[];
  };
}

export interface ProductItem {
  name: string;
  category: string;
  region: 'eu' | 'us' | 'both';
  emoji: string;
  desc: string;
  affiliateUrl?: string;
}
