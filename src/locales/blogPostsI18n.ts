import type { Lang } from '../types';

type BlogPostDef = { title: string; content: string };

export const blogPostsByLang: Record<Lang, BlogPostDef[]> = {
  en: [
    {
      title: "I Spent a Year Lost in the Sourdough Jungle — Here's What Actually Works",
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
      content: `I forgot the flour dusting. I botched the scoring. The crust cracked in all the wrong places — and yet, this sourdough loaf turned out to be one of the best I've ever baked. My husband said so. My 6 and 7-year-old kids said so. Even the cat jumped up to investigate, which in our house is the highest possible compliment. Sometimes the imperfect loaves are the ones that remind you why you started baking sourdough in the first place. No two loaves are ever the same — and that's exactly the point. Keywords naturally included: homemade sourdough bread, sourdough for beginners, sourdough mistakes, best sourdough recipe, artisan bread at home.`,
    },
  ],
  sv: [
    {
      title: 'Ett år i surdegsdjungeln — det här funkar i praktiken',
      content: `Om du någonsin har googlat "hur man bakar surdeg" vet du vad jag menar med djungeln. Autolys eller inte? 65 % hydrering eller 80 %? Mata starter två gånger om dagen eller en gång i veckan? Kalljäs eller rumstemperatur? Gjutjärnsgryta eller baksten? Ett snitt eller fem?

Jag tillbringade mer än ett år med att leta efter det rätta sättet. Jag följde strikta recept från prisbelönta bagare. Jag var i forum där folk grälade om mjölprotein. Jag dödade tre starters. Jag fick limpor som kunde användas som dörrstopp.

Så här är det: det finns inget enda rätt sätt. Surdeg är levande — bokstavligen — och den svarar mot ditt kök, ditt mjöl, ditt vatten, dina händer och till och med årstiden. Ett recept som fungerar i ett varmt kök i juli beter sig inte alls likadant i en kall lägenhet i svensk januari.

Det viktigaste är att förstå grunderna: förhållandet mellan mjöl, vatten och starter, temperaturen deg jäser vid, och att läsa din deg — inte bara klockan. Allt annat är brus.

Därför byggde jag den här kalkylatorn. Inte för att ge dig ännu ett stelt recept — utan för att hjälpa dig förstå proportionerna så att du kan anpassa efter ditt kök, ditt mjöl och ditt liv. Börja med klassisk surdeg vid 72 % hydrering. Baka tre gånger. Sedan börjar du justera.

Djungeln känns mindre skrämmande när du har en karta.`,
    },
    {
      title: 'De enda fyra ingredienserna du behöver för riktigt bra surdeg',
      content: `Mjöl. Vatten. Salt. Surdeg. Det är allt.

Ingen jäst ur påse. Inga tillsatser. Ingen specialutrustning (trots att en gjutjärnsgryta hjälper). Magin med surdeg är att fyra helt vanliga ingredienser, i rätt proportioner och med tillräckligt med tid, blir något extraordinärt.

Mjölet är grunden. Högre proteinhalt (12 % och uppåt) ger mer gluten och bättre lyft. Vetemjöl med hög proteinhalt är idealiskt för nybörjare. När du vågar mer: blanda i lite fullkorn eller råg — för smak och för hjälp till starter.

Vattentemperatur spelar större roll än många tror. Kallt vatten saktar jäsning, varmt vatten snabbar på. På sommaren kanske du kallar vattnet för att inte överjäsa. På vintern kan lite ljummet vatten hjälpa. Börja runt 25 grader.

Salt gör tre saker: smak, starkare gluten och lite långsammare jäsning. Standard är 2 % av mjölvikten. Hoppa inte över det.

Surdegen är din vilda jästkultur — den levande ingrediensen. En frisk starter luktar angenämnt sur, dubblas efter matning och har synliga bubblor.

Får du de rätt är du nästan i mål. Använd kalkylatorn ovan för dina proportioner.`,
    },
    {
      title: 'Varför din surdeg inte jäser (och hur du fixar det)',
      content: `Platt surdeg är nybörjarnas vanligaste problem — och nästan alltid beror det på en av tre saker: för svag starter, underjäsning eller för mycket mjöl i formningen.

Problem 1 — Starten är inte tillräckligt aktiv. Den ska ungefär fördubblas på 4–8 timmar vid rumstemperatur efter matning. Gör den inte det är den inte redo att lyfta bröd. Lösning: mata med lika delar mjöl och vatten varje dygn några dagar tills den är stabil.

Problem 2 — Underjäsning. Det här är vanligast. Tider i recept är vägledning — degen är klar när den ser och känns rätt, inte när timern ringer. Rätt jäst deg har vuxit kanske 50–75 %, känns luftig och dallrar lite när du skakar bunken.

Problem 3 — För mycket mjöl vid utbakning. Det är lätt att vässa händerna med mjöl. Motstå. Extra mjöl försvagar gluten och ger torr, kompakt kaka. Arbeta med fuktiga händer eller en degspackel.

Temperatur: i kalla kök går allt långsammare. Under 20 grader tar allt längre än recept säger. Ett enkelt knep: ställ degen i ugnen med bara lampan tänd — lagom värme för jäsning.

Fortfarande problem? Prova sänka hydreringen till 65 % i kalkylatorn.`,
    },
    {
      title: 'Brödet jag nästan förstörde (som alla älskade ändå)',
      content: `Jag glömde mjöla. Snittet blev fult. Skorpan sprack åt alla fel håll — och ändå blev det ett av de bästa bröden jag bakat. Min man sa det. Barnen 6 och 7 år sa det. Till och med katten hoppade upp för att undersöka, vilket hos oss är högsta betyg. Ibland är det de perfekt *imperfekta* limporna som påminner dig om varför du började baka surdeg. Inga två limpor är lika — och det är poängen. Nyckelord: hembakat surdegsbröd, surdeg för nybörjare, vanliga misstag, recept, hantverksbröd hemma.`,
    },
  ],
  de: [
    {
      title: 'Ein Jahr im Sauerteig-Dschungel — das funktioniert wirklich',
      content: `Wenn du schon mal „Sauerteig backen“ gegoogelt hast, weißt du, was ich mit Dschungel meine. Autolyse oder nicht? 65 % Hydration oder 80 %? Starter täglich füttern oder wöchentlich? Kalt stellen oder bei Raumtemperatur? Gusseisen oder Stein? Ein oder fünf Schnitte?

Über ein Jahr habe ich nach dem „richtigen“ Weg gesucht. Strikte Rezepte, Foren über Protein im Mehl, drei Starter zu viel gerührt, Brote gebacken, die fast wie Türstopper wirkten.

Am Ende: Es gibt keinen einzigen richtigen Weg. Sauerteig ist lebendig — und reagiert auf deine Küche, dein Mehl, dein Wasser, deine Hände und die Jahreszeit. Was in einem warmen Sommer funktioniert, verhält sich anders in einer kalten Wohnung im Januar.

Wichtig sind die Grundlagen: Verhältnis von Mehl, Wasser und Starter, Temperatur der Gärung, und die Dinge zu lesen — nicht nur die Uhr zu befolgen. Alles andere ist Rauschen.

Deshalb habe ich diesen Rechner gebaut: nicht für noch ein starres Rezept, sondern damit du Verhältnisse verstehst und an deine Küche anpassen kannst. Starte mit klassischem Sauerteig bei 72 % Hydration. Dreimal backen. Dann dreh an den Reglern.

Der Dschungel wird weniger unheimlich, wenn du eine Karte hast.`,
    },
    {
      title: 'Die einzigen vier Zutaten für großartigen Sauerteig',
      content: `Mehl. Wasser. Salz. Starter. Das ist alles.

Keine Hefe aus dem Päckchen. Keine Zusätze. Keine besondere Ausrüstung (ein Gusseisentopf hilft aber). Die Magie: vier einfache Zutaten, in den richtigen Verhältnissen und mit genug Zeit, werden etwas Besonderes.

Mehl ist die Basis. Höherer Proteinanteil (ab ca. 12 %) gibt mehr Gluten und Aufgang. Starkes Brotmehl ist ideal für den Einstieg. Später: etwas Vollkorn oder Roggen — für Geschmack und für den Starter.

Wassertemperatur: Kalt bremst die Gärung, warm beschleunigt sie. Im Sommer vielleicht kühleres Wasser, im Winter leicht warm. Richtwert: etwa 25 °C.

Salz: Geschmack, stabilere Struktur, etwas langsameres Gärungstempo. Standard: 2 % vom Mehl. Nicht weglassen.

Der Starter ist deine wilde Hefekultur — das Lebendige. Gesund riecht er angenehm sauer, verdoppelt sich nach dem Füttern und zeigt Bläschen.

Wenn du diese vier Zutaten im Griff hast, fehlt nur noch das Rechnen — oben im Rechner.`,
    },
    {
      title: 'Warum dein Sauerteig nicht aufgeht (und was du tun kannst)',
      content: `Flaches Brot — fast immer einer von drei Gründen: zu schwacher Starter, zu wenig Gärzeit, oder zu viel Mehl beim Formen.

Problem 1 — Starter zu schwach. Er sollte nach dem Füttern bei Raumtemperatur in etwa 4–8 Stunden etwa doppelt so groß werden. Tut er das nicht, ist er nicht bereit zum Triebmittel. Lösung: täglich gleiche Gewichte Mehl und Wasser füttern, bis er zuverlässig aktiv ist.

Problem 2 — Untergärung. Rezeptzeiten sind Richtwerte — die Dough ist fertig, wenn sie sich richtig anfühlt, nicht wenn der Timer klingelt. Gut gegart: deutlich gewachsen, luftig, wackelt leicht in der Schüssel.

Problem 3 — Zu viel Mehl beim Formen. Widersteh der Versuchung. Mehr Mehl schwächt das Gluten und macht trocken, klotzig. Feuchte Hände oder ein Teigschaber helfen.

Kalt in der Küche? Alles dauert länger. Unter 20 °C plane mehr Zeit. Tipp: Teig in den Ofen nur mit Licht — eine warme Ecke.

Noch Probleme? Probiere 65 % Hydration im Rechner.`,
    },
    {
      title: 'Das Brot, das ich fast ruiniert habe (und alle liebten)',
      content: `Ich vergaß zu mehlen. Der Schnitt wurde schief. Die Kruste riss — und trotzdem wurde es eines der besten Brote, die ich je gebacken habe. Mein Mann sagte es. Die Kinder (6 und 7) sagten es. Sogar die Katze kam schauen — bei uns das höchste Lob. Manchmal sind die unperfekten Laibe die, die dich erinnern, warum du Sauerteig angefangen hast. Keine zwei Laibe sind gleich — und genau das ist der Punkt.`,
    },
  ],
};
