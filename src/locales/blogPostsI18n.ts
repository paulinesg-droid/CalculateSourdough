import type { Lang } from '../types';
import imgCatUrl from '../assets/blog/IMG_4108.jpg?url';
import imgHeroBreadUrl from '../assets/blog/breadandflower.jpg?url';

type BlogPostDef = { title: string; content: string; image?: string };

export const blogPostsByLang: Record<Lang, BlogPostDef[]> = {
  en: [
    {
      title: 'I built this for Swedish bakers. Half of you are American.',
      content: `I built this for Swedish bakers. Half of you are American.

And honestly, that might be my favourite thing about this little project.

I put this together because I kept doing the same sourdough calculations over and over in my kitchen in western Sweden, and eventually just thought — let me build a thing. I wrote it in Swedish, figured a few local bakers might find it useful, and left it at that.

Then I looked at the numbers. Over half of you are coming from the US. Another chunk from Canada. People I will never meet, baking bread in kitchens I will never see, using something I made on my couch on a grey Tuesday in Gothenburg.

I find that genuinely moving, if I'm honest.

There's something about bread that just does this. It doesn't care where you're from or what language your calculator is in. You've got flour, water, time, and that slightly unpredictable starter that you've somehow kept alive for longer than some houseplants. We're all just trying to get a good loaf out of it.

So whether you found this site because you speak Swedish, or because Google somehow dropped you here from across the Atlantic — welcome. I'm really glad you're here. I hope the calculator makes your baking a little easier and your kitchen smell a little better.

Now go make something good.

Pauline`,
    },
    {
      title: 'Sourdough hydration explained: which % is right for you?',
      image: imgHeroBreadUrl,
      content: `You followed a recipe and your loaf still came out flat and dense. That stings. Often the piece recipes skip explaining is hydration — how much water is in your dough compared to the flour. Many throw a percentage at you without saying what it means for your hands, your oven, or your lunch.

Here is baker's percentage in one line: water is measured as a percent of flour weight, not of the whole dough. Seventy-five percent hydration means 75 grams of water for every 100 grams of flour. That single idea unlocks every sourdough hydration calculator and recipe you will read.

The four sourdough hydration levels (and what they actually mean)

These labels match what you will see in a sourdough hydration calculator like the one on this site — so you can go straight from reading to baking.

Fluffy and soft — 65% hydration. The dough feels firm and easier to shape. You get a tighter, even crumb and a softer bite. Great for sandwiches and toast. If you are new to sourdough or your loaves spread too much, this is your friend.

Classic sourdough — 72% hydration. Slightly tacky but manageable. Most home bakers land here. You get a more open crumb than 65%, a chewy crust, and an everyday loaf that still looks handmade.

Artisan and open — 80% hydration. Wet and floppy; it will stick if you are not used to it. The reward is bigger holes and a crackly crust. Better once you are comfortable shaping.

Very wet and chewy — 88% hydration. Ciabatta-style slack dough. Extremely open crumb, hardest to handle. Save this for when lower hydrations feel boring, not for loaf number one.

How to pick the right hydration for your kitchen

First sourdough bake? Aim for 65–72% and learn the rhythm before chasing an Instagram crumb.

Hot and humid (think Southern US summer)? Drop hydration about 3–5% below the recipe — flour already picks up moisture from the air.

Baking with whole wheat or rye? Plan on roughly 5% more water than white flour; those grains drink more.

Dough always sticks and puddles on the counter? Lower hydration by 5% next time and build skill on a friendlier dough.

Want those big, lacy holes? Work your way up toward 80% once shaping feels natural, not on day one.

Get your exact recipe in seconds

Once you know your hydration level, you still need grams of flour, water, starter, and salt — and doing that math by hand gets old fast. Use the sourdough hydration calculator on this page: pick a style, set your loaf size and starter percentage, and copy a ready-to-bake formula. It is free and you do not need an account. You can also open the recipe tab for step-by-step timing after you have your numbers.

Your best loaf is one batch away.`,
    },
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
      image: imgCatUrl,
      content: `I forgot the flour dusting. I botched the scoring. The crust cracked in all the wrong places — and yet, this sourdough loaf turned out to be one of the best I've ever baked. My husband said so. My 6 and 7-year-old kids said so. Even the cat jumped up to investigate, which in our house is the highest possible compliment. Sometimes the imperfect loaves are the ones that remind you why you started baking sourdough in the first place. No two loaves are ever the same — and that's exactly the point. Keywords naturally included: homemade sourdough bread, sourdough for beginners, sourdough mistakes, best sourdough recipe, artisan bread at home.`,
    },
  ],
  sv: [
    {
      title: 'Jag byggde det här för svenska bagare. Hälften av er är amerikaner.',
      content: `Jag byggde det här för svenska bagare. Hälften av er är amerikaner.

Och ärligt talat: det där kanske är min favoritsak med det här lilla projektet.

Jag satte ihop det här eftersom jag gjorde samma surdegsräkningar om och om igen i mitt kök i västra Sverige, och tillslut tänkte jag bara — låt mig bygga någonting. Jag skrev det på svenska, tänkte att några lokala bagare kanske hade nytta av det, och lät det bero med det.

Sedan tittade jag på siffrorna. Mer än hälften av er kommer från USA. Ytterligare en del från Kanada. Människor jag aldrig träffar, som bakar bröd i kök jag aldrig får se, med något jag gjorde i soffan en grå tisdag i Göteborg.

Jag tycker faktiskt att det där rör mig, om jag ska vara ärlig.

Det är någonting med bröd som bara gör så. Det bryr sig inte om var du kommer ifrån eller vilket språk kalkylatorn har. Du har mjöl, vatten, tid och den där stundtals oberäkneliga starten som du av någon anledning hållit vid liv längre än vissa krukväxter. Vi försöker bara få en bra limpa, allihop.

Oavsett om du hittade hit för att du talar svenska, eller för att Google ställde dig här från andra sidan Atlanten — välkommen. Jag är verkligen glad att du är här. Jag hoppas kalkylatorn gör bakningen lite enklare och att köket luktar lite godare.

Gör något gott nu.

Pauline`,
    },
    {
      title: 'Surdegshydrering förklarad: vilken procent passar dig?',
      image: imgHeroBreadUrl,
      content: `Du följde receptet och limpan blev ändå platt och kompakt. Det gör ont. Ofta är det recepten inte förklarar hydrering — hur mycket vatten degen har i förhållande till mjölet. Många kastar ut en procentsiffra utan att säga vad den betyder för händerna, ugnen eller mackan.

Här är bagarprocent i en mening: vatten anges som procent av mjölvikten, inte av hela degen. Sjuttiofem procent hydrering betyder 75 gram vatten per 100 gram mjöl. Den tanken räcker för att förstå varje hydreringskalkylator och recept du läser.

De fyra hydreringsnivåerna (och vad de betyder i praktiken)

Namnen matchar vad du ser i en hydreringskalkylator på den här sidan — så du kan gå från text till bakning direkt.

Fluffig och mjuk — 65 % hydrering. Deg som känns fastare och är lättare att forma. Tätare, jämn krumb och mjukare tugga. Bra till mackor och rostat. Ny på surdeg eller sprider sig limpan? Börja här.

Klassisk surdeg — 72 % hydrering. Lite kletig men hanterbar. De flesta hemmabagare hamnar här. Mer öppen crumb än vid 65 %, seg skorpa och ett vardagsbröd som fortfarande ser hembakat ut.

Hantverk och öppen — 80 % hydrering. Blöt och sladdrig; den kletar om du inte vant dig. Större hål och knäckigare skorpa. Lämpligare när du behärskar formningen.

Mycket våt och seg — 88 % hydrering. Ciabattalik slack deg. Extremt öppen crumb, svårast att handskas med. Spara tills lägre hydreringar känns tråkiga, inte till första limpan.

Så väljer du rätt hydrering för ditt kök

Första surdegsbaket? Sikta på 65–72 % och lär dig tempot innan du jagar Instagram-crumb.

Varmt och fuktigt (typ svensk sommar i söder)? Sänk hydreringen cirka 3–5 % under receptet — mjölet tar redan upp fukt från luften.

Fullkorn eller råg? Räkna med ungefär 5 % mer vatten än för vitt mjöl; de suger mer.

Deg som alltid kletar och flyter ut? Sänk hydreringen 5 % nästa gång och öva på en snällare deg.

Vill du ha stora, spetsiga hål? Jobba dig upp mot 80 % när formning känns naturlig — inte dag ett.

Få exakta gram på några sekunder

När du vet ungefär vilken hydrering du vill ha behöver du ändå gram mjöl, vatten, starter och salt — och räkna för hand tröttnar man på. Använd hydreringskalkylatorn på den här sidan: välj stil, sätt limstorlek och starterprocent, och kopiera en färdig formel. Det är gratis och kräver inget konto. Öppna gärna receptfliken för tidsplan när du har dina siffror.

Ditt bästa bröd är bara en deg bort.`,
    },
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

Problem 1 — Din starter är inte tillräckligt aktiv. Den ska ungefär fördubblas på 4–8 timmar vid rumstemperatur efter matning. Gör den inte det är den inte redo att lyfta bröd. Lösning: mata med lika delar mjöl och vatten varje dygn några dagar tills den är stabil.

Problem 2 — Underjäsning. Det här är vanligast. Tider i recept är vägledning — degen är klar när den ser och känns rätt, inte när timern ringer. Rätt jäst deg har vuxit kanske 50–75 %, känns luftig och dallrar lite när du skakar bunken.

Problem 3 — För mycket mjöl vid utbakning. Det är lätt att vässa händerna med mjöl. Motstå. Extra mjöl försvagar gluten och ger torr, kompakt kaka. Arbeta med fuktiga händer eller en degspackel.

Temperatur: i kalla kök går allt långsammare. Under 20 grader tar allt längre än recept säger. Ett enkelt knep: ställ degen i ugnen med bara lampan tänd — lagom värme för jäsning.

Fortfarande problem? Prova sänka hydreringen till 65 % i kalkylatorn.`,
    },
    {
      title: 'Brödet jag nästan förstörde (som alla älskade ändå)',
      image: imgCatUrl,
      content: `Jag glömde mjöla. Snittet blev fult. Skorpan sprack åt alla fel håll — och ändå blev det ett av de bästa bröden jag bakat. Min man sa det. Barnen 6 och 7 år sa det. Till och med katten hoppade upp för att undersöka, vilket hos oss är högsta betyg. Ibland är det de perfekt *imperfekta* limporna som påminner dig om varför du började baka surdeg. Inga två limpor är lika — och det är poängen. Nyckelord: hembakat surdegsbröd, surdeg för nybörjare, vanliga misstag, recept, hantverksbröd hemma.`,
    },
  ],
  de: [
    {
      title: 'Eigentlich für schwedische Bäcker. Die Hälfte von euch ist aus den USA.',
      content: `Eigentlich habe ich das für schwedische Bäcker gebaut. Die Hälfte von euch ist aus den USA.

Und ehrlich: Das ist vielleicht mein Lieblingsding an diesem kleinen Projekt.

Ich hab’s zusammengestellt, weil ich in meiner Küche in Westschweden immer wieder dieselben Sauerteigrechnungen gemacht habe und irgendwann dachte: Bau ich mir halt was. Ich habe auf Schwedisch geschrieben, mir ein paar Bäcker aus der Gegend vorgestellt, und mehr nicht erwartet.

Dann habe ich mir die Zahlen angesehen. Mehr als die Hälfte kommt aus den USA. Einen großen Teil aus Kanada. Menschen, die ich nie treffe, die in Küchen backen, die ich nie sehen werde, und etwas benutzen, das ich an einem grauen Dienstag auf meinem Sofa in Göteborg gebaut habe.

Das rührt mich wirklich, wenn ich ehrlich bin.

Brot macht so was. Es ist egal, woher du kommst und in welcher Sprache dein Rechner ist. Mehl, Wasser, Zeit — und der etwas unberechenbare Starter, den du länger am Leben hältst als manche Zimmerpflanzen. Wir wollen doch alle nur einen guten Laib.

Ob du die Seite gefunden hast, weil du Schwedisch sprichst, oder weil Google dich irgendwie jenseits des Atlantiks hergeschickt hat — willkommen. Schön, dass du da bist. Ich hoffe, der Rechner macht’s ein bisschen leichter und deine Küche riecht ein bisschen besser.

Back jetzt was Gutes.

Pauline`,
    },
    {
      title: 'Sauerteig-Hydration erklärt: Welcher Prozentsatz passt zu dir?',
      image: imgHeroBreadUrl,
      content: `Du hast das Rezept befolgt — und das Brot wurde trotzdem flach und fest. Das ärgert. Oft fehlt die Erklärung zur Hydration: wie viel Wasser der Teig im Verhältnis zum Mehl hat. Viele Rezepte nennen eine Zahl, ohne zu sagen, was sie für Hände, Ofen und Brotzeit bedeutet.

Bäcker-Prozent in einem Satz: Wasser wird als Prozent vom Mehlgewicht angegeben, nicht vom gesamten Teig. 75 % Hydration heißt 75 g Wasser auf 100 g Mehl. Damit verstehst du jeden Sauerteig-Hydrationsrechner und jedes Rezept.

Die vier Hydrationsstufen (und was sie wirklich bedeuten)

Die Bezeichnungen entsprechen dem Rechner auf dieser Seite — du kannst vom Lesen direkt zum Backen gehen.

Fluffig und weich — 65 % Hydration. Der Teig wirkt fester und lässt sich leichter formen. Engere Krume, weicheres Mundgefühl. Ideal für Sandwiches und Toast. Neu im Sauerteig oder der Laib fließt zu sehr? Hier starten.

Klassischer Sauerteig — 72 % Hydration. Etwas klebrig, aber gut zu handhaben. Viele Hobbybäcker landen hier. Offenere Krume als bei 65 %, kräftige Kruste, ein Alltagslaib mit Charakter.

Handwerk und große Poren — 80 % Hydration. Feucht und weich; er klebt, wenn man es nicht gewohnt ist. Belohnung: größere Löcher und knackige Kruste. Sinnvoll, wenn Formen schon sitzt.

Sehr feucht und elastisch — 88 % Hydration. Wie Ciabatta, sehr weich. Extrem offene Krume, am schwierigsten zu formen. Für später, nicht für den ersten Laib.

So wählst du die passende Hydration für deine Küche

Erster Sauerteig-Laib? Ziel 65–72 % und erst den Rhythmus lernen, bevor du Instagram-Krumen jagst.

Heiß und schwül (z. B. Süden der USA im Sommer)? 3–5 % unter dem Rezept — das Mehl nimmt schon Feuchtigkeit aus der Luft auf.

Mit Vollkorn oder Roggen? Rechne mit etwa 5 % mehr Wasser als bei Weißmehl; die saugen mehr.

Teig klebt immer und läuft auseinander? Nächstes Mal 5 % weniger Hydration und Technik an freundlicherem Teig üben.

Große, luftige Löcher gewünscht? Schrittweise Richtung 80 %, wenn Formen sicher sitzt — nicht am ersten Tag.

Dein exaktes Rezept in Sekunden

Wenn du deine Hydration grob kennst, brauchst du trotzdem Grammzahlen für Mehl, Wasser, Starter und Salz — und das dauernd von Hand zu rechnen nervt. Nutze den Sauerteig-Hydrationsrechner auf dieser Seite: Stil wählen, Laibgröße und Starteranteil einstellen, fertige Formel übernehmen. Kostenlos, ohne Anmeldung. Den Reiter Rezept kannst du für die Zeiten öffnen, sobald du deine Mengen hast.

Dein bestes Brot ist nur einen Teig entfernt.`,
    },
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

Problem 2 — Untergärung. Rezeptzeiten sind Richtwerte — der Teig ist fertig, wenn er sich richtig anfühlt, nicht wenn der Timer klingelt. Gut gegart: deutlich gewachsen, luftig, wackelt leicht in der Schüssel.

Problem 3 — Zu viel Mehl beim Formen. Widersteh der Versuchung. Mehr Mehl schwächt das Gluten und macht trocken, klotzig. Feuchte Hände oder ein Teigschaber helfen.

Kalt in der Küche? Alles dauert länger. Unter 20 °C plane mehr Zeit. Tipp: Teig in den Ofen nur mit Licht — eine warme Ecke.

Noch Probleme? Probiere 65 % Hydration im Rechner.`,
    },
    {
      title: 'Das Brot, das ich fast ruiniert habe (und alle liebten)',
      image: imgCatUrl,
      content: `Ich vergaß zu mehlen. Der Schnitt wurde schief. Die Kruste riss — und trotzdem wurde es eines der besten Brote, die ich je gebacken habe. Mein Mann sagte es. Die Kinder (6 und 7) sagten es. Sogar die Katze kam schauen — bei uns das höchste Lob. Manchmal sind die unperfekten Laibe die, die dich erinnern, warum du Sauerteig angefangen hast. Keine zwei Laibe sind gleich — und genau das ist der Punkt.`,
    },
  ],
};
