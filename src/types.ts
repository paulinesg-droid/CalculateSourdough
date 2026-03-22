export type Lang = 'en' | 'sv' | 'de';
export type Unit = 'metric' | 'imperial';
export type StyleId = 'fluffy' | 'classic' | 'artisan' | 'wet';
export type RegionFilter = 'all' | 'eu' | 'us';
export type TabId = 'calculator' | 'recipe';

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
  tabRecipe: string;
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
  shopNow: string;
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
}

export interface ProductItem {
  name: string;
  category: string;
  region: 'eu' | 'us' | 'both';
  emoji: string;
  desc: string;
}
