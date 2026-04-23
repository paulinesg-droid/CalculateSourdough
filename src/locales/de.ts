import type { LocaleStrings } from '../types';

export const de: LocaleStrings = {
  tagline:
    'Perfekte Verhältnisse für dein perfektes Brot. Passe die Einstellungen unten an und dein Rezept aktualisiert sich sofort.',
  tabCalc: 'Rechner',
  tabStarter: 'Sauerteig-Starter',
  tabRecipe: 'Schritt-für-Schritt Rezept',
  tabBlog: 'Blog',
  styleQuestion: 'Wie soll dein Brot werden?',
  labelLoafSize: 'Brotgröße',
  labelLoaves: 'Anzahl Brote',
  labelStarter: 'Sauerteig-Starter',
  labelSalt: 'Salz',
  hintStarter:
    'Höherer % = schnelleres Aufgehen & sauererer Geschmack. 20% ist der klassische Ausgangspunkt.',
  hintSalt: 'Steuert Geschmack und Gärung. 2% ist Standard — nicht unter 1,5% gehen.',
  yourRecipe: 'Dein Rezept',
  perLoaf: 'Pro Brot',
  total: 'Gesamt',
  totalDough: 'Gesamtes Teiggewicht',
  comingSoon: 'Starter-Hydrationskompensation — demnächst verfügbar',
  whatYouNeed: 'Was du brauchst',
  youMightAlsoNeed: 'Das könnte dir auch helfen',
  shopNow: 'Jetzt kaufen →',
  openCalculator: 'Zum Rechner →',
  blogCalculatorCta:
    'Backen geplant? Berechne Mehl, Wasser, Starter und Salz exakt im Rechner.',
  resetAll: 'Alles zurücksetzen',
  tip: 'Tipp',
  stepsOf: (d, t) => `${d} von ${t} Schritten abgeschlossen`,
  recipeIntro: (loaves, loafW, style, h, sp, salt, flour, water, starter, saltA) =>
    `Backen von <strong>${loaves} × ${loafW} ${style}</strong> — ${h}% Hydration, ${sp}% Starter, ${salt}% Salz.<br>Gesamt: <strong>${flour}</strong> Mehl · <strong>${water}</strong> Wasser · <strong>${starter}</strong> Starter · <strong>${saltA}</strong> Salz. Gehe zum Rechner-Tab zum Ändern.`,

  starterTab: {
    heading: 'So stellst du deinen Sauerteig-Starter her',
    intro:
      'Ein Sauerteig-Starter ist eine lebende Kultur aus wilden Hefen und Bakterien. Die Herstellung dauert 7 Tage und die tägliche Pflege nur 5 Minuten. Hier ist alles, was du brauchst.',
    whatYouNeedHeading: 'Was du brauchst',
    whatYouNeedItems: [
      'Mehl (Vollkorn- oder Roggenmehl funktioniert am besten)',
      'Wasser (Raumtemperatur, möglichst ohne Chlor)',
      'Ein sauberes Glas',
      'Eine Küchenwaage',
    ],
    dayByDayHeading: 'Tag für Tag',
  },

  styles: [
    {
      id: 'fluffy',
      label: 'Fluffig & weich',
      desc: 'Feine Krume, ideal für Sandwiches und Toast. Einfach zu formen.',
    },
    {
      id: 'classic',
      label: 'Klassisches Sauerteigbrot',
      desc: 'Das Alltagsbrot. Offene Krume, zähe Kruste. Ein echter Allrounder.',
    },
    {
      id: 'artisan',
      label: 'Artisan & offen',
      desc: 'Große Löcher, zähe Textur, knusprige Kruste. Schwieriger zu formen.',
    },
    {
      id: 'wet',
      label: 'Sehr nass & zäh',
      desc: 'Ciabatta-Stil. Extrem offene Krume. Für erfahrene Bäcker.',
    },
  ],
  ingredients: { flour: 'Mehl', water: 'Wasser', starter: 'Sauerteig-Starter', salt: 'Salz' },
  hydration: 'Hydration',
  phases: (tf, tw, ts, tSalt, sp, isWet, isFluffy, styleId) => [
    {
      phase: 'Am Abend zuvor',
      icon: '🌙',
      time: 'Abend',
      steps: [
        {
          id: 'feed-starter',
          title: 'Sauerteig-Starter füttern',
          desc: 'Alle bis auf ~50g Starter wegschütten. Mit gleichen Teilen Mehl und Wasser füttern (z.B. 50g + 50g). Gut umrühren, locker abdecken und über Nacht bei Raumtemperatur stehen lassen.',
          tip: 'Dein Starter ist bereit, wenn er sich verdoppelt hat und blasig aussieht — normalerweise 8–12 Stunden.',
        },
      ],
    },
    {
      phase: 'Mischtag',
      icon: '🌅',
      time: 'Morgen',
      steps: [
        {
          id: 'autolyse',
          title: 'Autolyse — Mehl und Wasser mischen',
          desc: `${tf} Mehl mit ${tw} Wasser in einer großen Schüssel vermengen. Mischen bis kein trockenes Mehl mehr sichtbar ist. Abdecken und 30–60 Minuten ruhen lassen. Dieser Schritt entwickelt Gluten ohne Aufwand.`,
          amounts: `${tf} Mehl + ${tw} Wasser`,
          tip: isFluffy
            ? 'Der Teig fühlt sich fest an — das ist perfekt für eine engere Krume.'
            : isWet
              ? 'Nasser Teig ist normal — widerstehe dem Drang, mehr Mehl hinzuzufügen.'
              : null,
        },
        {
          id: 'add-starter',
          title: 'Starter hinzufügen und mischen',
          desc: `${ts} aktiven, blasigen Starter zum Teig geben. Mit den Händen einkneten und falten bis er vollständig eingearbeitet ist, 3–5 Minuten.`,
          amounts: `${ts} Starter`,
          tip: 'Der Starter sollte auf Wasser schwimmen — sinkt er, braucht er mehr Zeit.',
        },
        {
          id: 'add-salt',
          title: 'Salz hinzufügen',
          desc: `${tSalt} Salz über den Teig streuen. Einen Spritzer Wasser (~20g) hinzufügen um es aufzulösen, dann falten und kneten bis alles eingearbeitet ist. 30 Minuten ruhen lassen.`,
          amounts: `${tSalt} Salz`,
          tip: 'Salz nach dem Starter hinzufügen verhindert, dass es die Hefe hemmt.',
        },
      ],
    },
    {
      phase: 'Stockgare',
      icon: '⏱️',
      time: `${sp >= 25 ? '3–4' : '4–6'} Stunden`,
      steps: [
        {
          id: 'sf1',
          title: 'Dehnen & Falten — Runde 1',
          desc: 'Hand anfeuchten, eine Seite des Teigs greifen, hochziehen und über die andere Seite falten. Schüssel 90° drehen und insgesamt 4-mal wiederholen. Abdecken und 30 Minuten ruhen.',
          tip: 'Sanft vorgehen — du baust Struktur auf, knetest nicht.',
        },
        {
          id: 'sf2',
          title: 'Dehnen & Falten — Runde 2',
          desc: 'Dieselbe Technik wiederholen. Der Teig sollte sich etwas elastischer anfühlen. Abdecken und 30 Minuten ruhen.',
          tip: null,
        },
        {
          id: 'sf3',
          title: 'Dehnen & Falten — Runde 3',
          desc: 'Noch einmal wiederholen. Der Teig sollte nun seine Form besser halten und sich spürbar glatter anfühlen. Abdecken und 30 Minuten ruhen.',
          tip: null,
        },
        {
          id: 'sf4',
          title: 'Dehnen & Falten — Runde 4 (optional)',
          desc: isWet
            ? 'Für nasse Teige eine 4. Runde für extra Stärke. Der Teig sollte sich seidig anfühlen.'
            : 'Wenn der Teig noch schlaff wirkt, eine weitere Runde machen. Sonst ungestört weitergehen lassen.',
          tip: 'Die Stockgare ist fertig wenn der Teig 50–75% gewachsen ist und luftig mit Blasen an der Oberfläche aussieht.',
        },
      ],
    },
    {
      phase: 'Formen',
      icon: '🤲',
      time: '20 Minuten',
      steps: [
        {
          id: 'pre-shape',
          title: 'Vorformen',
          desc: 'Teig auf eine unbemehlte Fläche stürzen. Ränder nach innen falten, dann den Ball zu dir hin ziehen um Spannung zu erzeugen. Unbedeckt 20–30 Minuten ruhen lassen.',
          tip: 'Kein Mehl hinzufügen — die Klebrigkeit hilft beim Aufbau der Oberflächenspannung.',
        },
        {
          id: 'final-shape',
          title: 'Endform',
          desc: isFluffy
            ? 'Zu einer festen Kugel oder einem Oval formen. Umdrehen und zu dir hin ziehen um eine straffe Haut aufzubauen. Mit dem Schluss nach oben in ein gut bemehltes Gärkörbchen legen.'
            : isWet
              ? 'Schnell arbeiten — nasse Teige breiten sich aus. Wie einen Brief falten, dann zu einer Rolle oder Kugel formen. Schluss nach oben ins Gärkörbchen legen.'
              : 'Ränder zur Mitte falten, umdrehen, dann in kreisenden Bewegungen zu dir hin ziehen. Mit Schluss nach oben in ein bemehltes Gärkörbchen legen.',
          tip: 'Tief genug einschneiden (2–3 cm) in 45° Winkel für maximalen Ofentrieb.',
        },
      ],
    },
    {
      phase: 'Kalte Gare',
      icon: '❄️',
      time: '12–18 Stunden',
      steps: [
        {
          id: 'cold-proof',
          title: 'Über Nacht kühlen',
          desc: 'Gärkörbchen mit einer Duschhaube oder Frischhaltefolie abdecken. 12–18 Stunden (bis zu 24) in den Kühlschrank stellen. Kalte Gare entwickelt Geschmack und macht das Einschneiden leichter.',
          tip:
            styleId === 'wet'
              ? 'Eine längere kalte Gare (18–24 Std.) gibt nassen Teigen mehr Struktur und komplexeren Geschmack.'
              : 'Längere kalte Gare = saurer und komplexer im Geschmack.',
        },
      ],
    },
    {
      phase: 'Backen',
      icon: '🔥',
      time: `${styleId === 'fluffy' ? '40' : '45–50'} Minuten`,
      steps: [
        {
          id: 'preheat',
          title: 'Ofen + Gusseisentopf vorheizen',
          desc: 'Gusseisentopf (mit Deckel) in den kalten Ofen stellen. Auf 250°C einstellen. Mindestens 45–60 Minuten vorheizen. Je heißer desto besser.',
          tip: 'Diesen Schritt nicht überspringen — der glühend heiße Topf erzeugt Dampf für offene Krume und blasenartige Kruste.',
        },
        {
          id: 'score',
          title: 'Einschneiden und backen (Deckel drauf)',
          desc: 'Teig direkt aus dem Kühlschrank nehmen. Auf Backpapier stürzen. Mit einem Lame oder scharfen Messer in 30–45° Winkel einschneiden. Vorsichtig in den Topf senken. Mit Deckel 20 Minuten backen.',
          tip: 'Kalter Teig lässt sich sauberer einschneiden — nicht aufwärmen lassen.',
        },
        {
          id: 'bake-open',
          title: `Deckel abnehmen und ${styleId === 'fluffy' ? '20' : '25–30'} Minuten weiterbacken`,
          desc: `Deckel abnehmen und Temperatur auf ${styleId === 'fluffy' ? '220°C' : '230°C'} reduzieren. Backen bis die Kruste tief braun ist und die Innentemperatur 96–98°C erreicht.`,
          tip: isFluffy
            ? 'Früher herausnehmen für eine weichere Kruste — bei ~93°C Innentemperatur.'
            : 'Keine Angst vor Dunkel — eine tiefbraune Kruste = maximaler Geschmack.',
        },
        {
          id: 'cool',
          title: 'Komplett abkühlen lassen vor dem Anschneiden',
          desc: 'Auf ein Gitter legen und mindestens 1–2 Stunden warten. Das Innere backt durch die Restwärme noch nach. Zu frühes Anschneiden ergibt eine gummiartige Krume.',
          tip: 'Das Knistern beim Abkühlen ist das Geräusch eines gelungenen Brotes. Genieß es.',
        },
      ],
    },
  ],
  heroTitle: 'Perfekten Sauerteig jedes Mal backen',
  heroByline: 'Von Pauline – Hobbybäckerin an der schwedischen Westküste 🌊',
  heroIntro:
    'Ich habe diesen kostenlosen Rechner gebaut, weil ich Sauerteig-Rechnungen leid war — und anscheinend viele andere Bäcker auch.',
  heroCta: 'Mein Rezept berechnen →',
  heroImageAlt: 'Sauerteigbrot, Blumen und Kerze',
  heroAriaLabel: 'Einführung',
  readMoreBlog: 'Weiterlesen',
  filterAll: 'Alle',
  comingSoonProduct: 'Demnächst',
  calcLinkNoStarter: 'Noch keinen Starter? So stellst du einen her →',
  calcLinkToRecipe: 'Schritt-für-Schritt beim Backen — ich begleite dich →',
  starterLinkToRecipe: 'Schritt-für-Schritt-Anleitung →',
  blogTab: {
    sectionTitle: 'Blog',
    datePublishedLabel: 'Veröffentlicht',
  },
  footer: 'SourdoughCalculate — für immer kostenlos. Affiliate-Links helfen uns, dieses Tool kostenlos zu halten.',
  footerAmazonDisclaimer:
    'Als Amazon-Partner verdiene ich an qualifizierten Käufen.',
};
