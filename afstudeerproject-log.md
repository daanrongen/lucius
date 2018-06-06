# Afstudeerproject CMD HvA

{{TOC}}

## Introductie
In deze design brief beschrijf ik de urgentie van het probleem dat ik wil oplossen met mijn afstudeerproject aan de studie Communication & Multimedia Design aan de Hogeschool van Amsterdam in opdracht van HR-tech startup Healthy Workers. Het project valt te beschrijven als een intelligente welzijns-interventie dat ergonomie in de werkomgeving verbetert en inzichtelijk maakt met een kruk. Sensoren in de kruk zullen zitduur en *in-chair-movement* registreren waardoor het zitgedrag naar de gebruiker gecommuniceerd kan worden.

In Nederland werken ruim 2.3 miljoen mensen in een kantooromgeving (Stijnenbosch, 2015). Dat is bijna eenderde van de complete beroepsbevolking van Nederland (CBS, 2015). Alhoewel het ziekteverzuim van de gemiddelde Nederlandse kantoormedewerker lager ligt dan bij andere sectoren, is het alsnog niet de meest gezonde werkomgeving om langdurig in te werken. Sterker nog, de kantoortuin is funest voor de mentale gezondheid (van Agteren, 2018). Dit heeft te maken met de hoeveelheid stressoren die aanwezig zijn in de werkomgeving. Stressoren zijn impulsen waarbij het vrijkomen van het stresshormoon wordt bevorderd (Ontstressen.net, n.d.). Deze impulsen kunnen onderverdeeld worden in fysiologische stressoren, zoals kou, (rug)pijn en lawaai, en psychologische stressoren zoals nare herinneringen of slechte relaties met mensen om ons heen. Meer dan een miljoen Nederlandse kantoormedewerkers kampen met burn-out klachten en 36% van al het werk-gerelateerde ziekteverzuim wordt veroorzaakt door stress. Van al deze medewerkers die kampen met stress, vormt de groep jonge medewerkers (leeftijd 25 tot 35 jaar) de grootste groep (TNO, n.d.). Buiten het feit dat het een grote kostenpost is voor bedrijven en dat het bijzonder vervelend is voor de medewerkers, kunnen gevolgen van een ongezonde werk-omgeving ook nog langdurige effecten met zich meebrengen die later in, of zelfs na het beroepsleven, consequenties hebben op zowel de mentale als fysieke gezondheid van de kantoormedewerker. Het is dan ook niet gek dat sinds het begin van de eenentwintigste eeuw de leus "stress op het werk is beroepsziekte nummer één" steeds bekender is geworden.

MKB heeft in samenwerking met Menzis een ‘bedrijfs-gezondheidscheck’ ontwikkeld en laat deze afleggen bij talloze bedrijven. Het doel van de check is om alle bedrijven te laten streven naar gezond en fit personeel en aan te moedigen om te investeren in de gezondheid van de werknemers. Voor de directie van deze bedrijven is het namelijk een win-win om hun personeel zo gezond mogelijk te houden: een toename in productiviteit en een afname in ziekteverzuim. Naast de bedrijfsgezondheidscheck maakt MKB namelijk ook berekeningen hoeveel een zieke werknemer kost per dag voor het bedrijf. Bij hun berekeningen staat het gemiddelde op €410 per dag per zieke werknemer (Klees, 2017). Al met al is het dus bijzonder lucratief om te investeren in welzijn. Het probleem ligt echter bij maatwerk. Welzijn is complex en kan alleen verbeterd worden als er eerst kritisch wordt gekeken naar wat er daadwerkelijk fout gaat in de werkomgeving. Zoals eerder genoemd vertakken de impulsen die invloed hebben op welzijn zich in fysiologische en psychologische stressoren. Beide vertakkingen vergen twee compleet verschillende maatregelen.

Er hebben in de afgelopen decennia veel onderzoeken plaatsgevonden naar welzijn van werknemers in een kantooromgeving. De eerdergenoemde fysiologische stressoren worden voornamelijk veroorzaakt door factoren uit de fysieke werkomgeving. In het meest recente psychologie-onderzoek van de Hanzehogeschool Groningen is gebleken dat voornamelijk de factoren ergonomie, klimaat, licht en geluid de grootste invloed hebben op fysiologische stressoren in de kantooromgeving (Smid, 2016). Het blijkt dat indirecte omgevingsstressoren als klimaat, licht en geluid invloeden hebben op de capabiliteit om cognitieve acties te verrichten, vermoeidheid, alertheid, concentratie en het melatonine-huishouden van de kantoormedewerker. Directe fysieke stressoren, zoals ergonomie, dragen bij aan skeletvergroeiingen en de ontwikkeling van hart- en vaatziekten bij langdurig gebrek aan fysieke activiteit en het aannemen van een ergonomisch onverantwoorde zithouding.

## Opdrachtgever
Healthy Workers zet zich in om werknemerswelzijn te meten en te verbeteren bij grote corporate bedrijven. Naast het management bestaat het team uit developers, designers, onderzoekers en psychologen. Healthy Workers is nog jong, maar er zit veel momentum en groei in de start-up. De start-up heeft een partnership met startup-hub B. Building Business en vastgoed-bedrijf CBRE en is co-founded door digital design agency FONK. Door sensoren in kantoorruimtes te hangen verricht Healthy Workers objectieve metingen over de fysieke werkomgeving. Denk hierbij aan metingen over de binnentemperatuur, luchtkwaliteit en geluidsniveaus. Ook heeft Healthy Workers een web-app ontwikkelt die middels vragenlijsten subjectieve input van elke kantoormedewerker vraagt over hoe zij de werkomgeving ervaren. Denk hierbij aan vragen over hun relaties met collega's, of ze hun persoonlijke leerdoelen behalen en of ze zich op hun plek voelen bij het bedrijf. Healthy Workers noemt zichzelf een bedrijfs-'thermometer'. Ze verrichten metingen, analyseren de resultaten, delen de inzichten met het management en doen suggesties voor hoe de werkomgeving verbeterd kan worden waardoor het werknemers-welzijn zal stijgen. Ook is Healthy Workers vervolgens gekoppeld met interventie-partijen die deze verbeteringen kunnen implementeren. De interventies worden gevalideerd op haar rendabiliteit. Dit proces wordt herhaald totdat het personeelsbestand aantoonbaar meer bevlogen is. De voornaamste doelen van Healthy Workers zijn het laten stijgen van bevlogenheid en productiviteit van werknemers, bedrijven aantrekkelijk maken voor talenten en deze ook binnen houden en het verminderen van ziekteverzuim en gezondheidsklachten.

### Huidige Product
#### Employee Companion
Hieronder zijn twee schermen te zien van de web-app van Healthy Workers. Deze web-app, speciaal voor de werknemers, wordt de Employee Companion genoemd. In het linkerscherm is de home-page van de huidige web-app te zien. De plant symboliseert persoonlijke groei. Het getal op de pot geeft aan hoe veel weken de gebruiker de web-app gebruikt. Bovenin het linkerscherm is te zien dat de luchtkwaliteit 'alpenfris' is. Als hierop wordt geklikt, gaat de gebruiker naar het rechterscherm, het klimaatoverzicht. Hier zien de kantoormedewerkers de informatie die real-time van de geplaatste sensoren komt. Healthy Workers heeft in het afgelopen halfjaar drie pilots bij corporate bedrijven uitgevoerd. Deze vonden plaats bij Uitvoeringsinstituut Werknemersverzekeringen (UWV), een van de grootste accounting-firma’s PriceWaterhouseCoopers (PWC) en bloemen- conglomeraat Royal FloraHolland. Tijdens deze pilots is het huidige product uitvoerig getest.

/documents/images/huidig-product.png

## Het Probleem
Het probleem omtrent gezondheidsklachten en verminderd welzijn op het kantoor is een probleem dat speelt bij vier stakeholders in het algemeen, dit zijn:
- De (full-time) kantoormedewerkers;
- De directie van een corporate bedrijf;
- Healthy Workers (en haar partners);
- Gezondheidsinstanties als zorgverzekeraars die ziekteverzuim vergoeden.

Van deze vier is de laatste stakeholder voornamelijk op maatschappelijk niveau relevant en is niet specifiek aan mijn project gekoppeld.

### Kantoormedewerkers
In de introductie werd al beschreven dat kantoortuinen funest zijn voor de mentale gezondheid. Een bijzonder groot deel van de Nederlandse arbeider werkt in zo’n kantooromgeving. Deze kantoormedewerkers kampen met informatie-vervuiling die voor een groot deel onbewust wordt veroorzaakt door omgevingsstressoren. Dit resulteert in hoge stress-levels en leidt zelfs tot burn-outs. De kantooromgeving heeft niet alleen ongezonde werking op het mentale welzijn van de kantoormedewerker, maar ook op het fysieke welzijn. Zo scoort de werkomgeving op ergonomisch vlak erg slecht, waardoor full-time kantoormedewerkers nare lichamelijke klachten kunnen overhouden na hun carrière. Het is van groot belang voor de gezondheid van de kantoormedewerker dat er interventies plaatsvinden die het welzijn centraal stellen en dat gelijkertijd kantoormedewerkers zich meer gehoord voelen.

### Directie / Management
Door alle impulsen die kantoormedewerkers op zich af krijgen in de vorm van stressoren, neemt het concentratie-vermogen, de bevlogenheid en de learning-curve significant af. Deze afname is funest voor de productiviteit van het personeelsbestand. Gelijkertijd neemt door stress en lichamelijke klachten het ziekteverzuim toe, wat de kosten voor het bedrijf laat oplopen. Het management heeft dus baat bij het optimaliseren van de gezondheid van haar personeel en er zijn steeds meer bedrijven die dit inzien. Het is echter erg moeilijk om te analyseren wat de gezondheidsproblemen precies aanwakkert en waar de ‘biggest wins’ gehaald kunnen worden met betrekking tot welzijn.

### Healthy Workers
Healthy Workers zet zich in om het welzijn van kantoormedewerkers meetbaar en verbeterbaar te maken. Door middel van een combinatie van objectieve sensordata en subjectieve informatie-vergaring meten ze waar een afname van welzijn door veroorzaakt zou kunnen worden. Vervolgens zijn ze aangesteld bij meerdere interventie-partners om de problemen die ze ontdekken gelijk te kunnen oplossen. Denk bij interventies aan wanden met luchtzuiverende planten, betere ventilatie, ergonomisch-verantwoorde bureaustoelen, verstelbare tafels en nog veel meer. Ze hebben zojuist drie pilots afgerond bij grote corporate bedrijven. Om aan de directie te kunnen tonen welke interventies de grootste toename in welzijn zouden realiseren heeft Healthy Workers data nodig dat afkomstig is van de kantoormedewerkers. De kantoormedewerker zijn tot op heden nog onvoldoende gemotiveerd om deze data te geven omdat het format waar in de data wordt gevraagd onhandig is en omdat de kantoormedewerkers niet voldoende in zien “what is in it for them”.

## Context
Om de stressoren in de kantooromgeving in kaart te kunnen brengen heb ik een literatuuronderzoek gedaan. De onderzoeksvragen die ik geformuleerd zijn als volgt:

- Wat maken omgevingsfactoren in de kantooromgeving tot stressoren?
- Wat zijn de voornaamste omgevingsstressoren in een kantooromgeving?
- Wat zijn de invloeden van deze stressoren op het welzijn van de kantoormedewerker?
- In hoeverre kunnen stressoren individueel verschillen per medewerker?

### Literatuur

#### Ergonomie
Ergonomie wordt officieel gedefinieerd als de wetenschappelijke studie van de mens in relatie tot haar fysieke omgeving. Het is afgeleid van de Griekse woorden 'ergon' (werk) en 'nomos' (wet) en dient de veiligheid en gezondheid van mensen die arbeid verrichten te waarborgen. Zoals in de inleiding vermeld werd, is er een toename in het aantal kantoormedewerkers. Deze kantoormedewerkers hebben gemeen dat ze hun werk zittend verrichten en aan een bureau zitten met een computer.

Door te lang in een ergonomisch-onverantwoordelijke houding te zitten ontwikkelen mensen muskoskeletal disorders (MSD's), ook wel skeletvergroeiingen. MSD's vormen de grooste categorie van werkgerelateerd letsel. Er vindt een toename plaats in het aantal werknemers met pre-existing MSD's op het moment dat ze het werkveld betreden. In 1995 was het percentage werkers met een MSD 21%, in 2000 was dit 35% en in 2015 48% (Middlesworth, n.d). Een van de meest aannemelijke verklaringen van deze toename is de hoeveelheid beeldschermen op het werk, gecombineerd met de grootte van deze beeldschermen en de hoeveelheid tijd dat we achter deze beeldschermen zitten. MSD's zijn echter te voorkomen. In de eerste helft van de twintigste eeuw heeft er veel onderzoek plaatsgevonden naar ergonomie in de werkomgeving. Op basis van deze onderzoeken is de "ergonomisch-verantwoordelijke zithouding" vastgesteld. Waarbij werkers met een rechte rug en rechte nek in hun stoel zitten. Dit remt wel de ontwikkeling van MSD's, maar voedt weer een volgend probleem.

De Schotse epidemioloog Jerry Morris ontdekte een significante corrolatie tussen ‘sedentair werk’ en de ontwikkeling van dodelijke hart- en vaatziekten. Door langdurig in dezelfde positie te zitten op een stoel, worden de bloedwegen aan de achterkant van de bovenbenen afgekneld door het zitoppervlak. Hierdoor neemt de druk op de bloedvaten toe, wat vervolgens kan leiden tot cardiovascular diseases, ookwel hart- en vaatziekten (Pandey, A, Usman, S, & Sushil, G, 2016). "Zitten is het nieuwe roken", wordt zelfs toegegeven door het UMC Utrecht. Er zijn nieuwe onderzoeken gedaan naar ergonomie op de werkomgeving en de uitspraken van het begin van de twintigste eeuw zijn deels gerectificeerd: ergonomisch zitten is goed, dynamisch zitten is beter. Het is daarom essentieel om een ergonomisch-verantwoordelijke zithouding aan te nemen tijdens het werk, maar gelijkertijd aan zo veel mogelijk beweging toe te komen.

#### Klimaat
Onder klimaat in de kantooromgeving beschouw ik binnentemperatuur (°C), luchtvochtigheid (%), de hoeveelheid CO₂-luchtdeeltjes in de lucht in vergelijking tot een miljoen luchtdeeltjes (ppm) en de hoeveelheid tVOC, vluchtige organische componenten, in vergelijking tot een miljard luchtdeeltjes (ppb). Deze vier onderwerpen kunnen gecategoriseerd worden onder thermisch comfort en luchtkwaliteit.

Een decennium geleden is geconcludeerd dat bij een temperatuur van 22 °C optimale productiviteit behaald kan worden (Helsinki Univeristy of Technology, 2006). Inmiddels zijn wetenschappers zich er van bewust dat objectieve binnentemperatuur weinig van waarde is. Het gaat natuurlijk om het comfort dat een individu haalt uit de ruimtelijke temperatuur. Gevoelstemperatuur, of thermisch comfort, is een indicator die aangeeft in hoeverre een individu de luchttemperatuur aangenaam vindt. Dit thermisch comfort is onderhevig aan zes variabelen. Van deze zes variabelen zijn er vier van invloed door de omgeving, en objectief te benaderen. Deze zijn: de lucht-temperatuur, stralings-temperatuur, luchtsnelheid en de luchtvochtigheid.

De overige twee variabelen zijn echter erg persoonlijk, dit zijn de hoeveelheid isolatie dat door de gedragen kleding wordt geboden en de metabolische warmte van het individu, die ook weer afhankelijk is van geslacht, gewicht, leeftijd, fitheid en mate van vermoeidheid (Health and Safety Executive, n.d.). In een recenter onderzoek naar binnenklimaten in gebouwen is gebleken dat de omringende lucht-temperatuur nauwelijks samenhangt met de uitvoering van werk en dat juist de gepercipieerde thermische tevredenheid wel een significante correlatie heeft met work performance. Daarbij komt ook dat het bieden van controle over thermische factoren in de werkomgeving positief werkt op de productiviteit en het welzijn van de werknemer (Tanabe, S, Masaoki, H & Naoe, N, 2015).

Luchtkwaliteit in binnenomgevingen kunnen gemeten worden aan de hand van CO₂-waarden. CO₂ wordt uitgedrukt in ppm (parts per million). In een recent experiment is gebleken dat kantoormedewerkers 50% slechter scoren bij het verrichten van cognitieve acties bij een CO₂-waarde boven de 1000 ppm, dan bij een waarde van 500 ppm (Brueck, 2017). Ook verschijnen er symptomen van vermoeidheid, hoofdpijn en gebrek aan concentratie bij CO₂-waarden boven de 1000 ppm. Kantoormedewerkers kunnen zelfs last krijgen van misselijkheid en duizeligheid bij CO₂-waarden boven de 1600 ppm. De ventilatiekracht en daarmee inherent de hoeveelheid CO₂ in de binnenlucht speelt een grote factor binnen het beruchte "Sick Building Syndrome" (SBS). De symptomen van het SBS zijn funest voor de productiviteit van het bedrijf en het welzijn van haar werknemers (Mens en Gezondheid, 2015).

#### Licht
Licht bestaat uit een kleurenspectrum en elke lichtkleur in dit spectrum wordt uitgedrukt in kelvin (K). Het iconische kleurenspectrum kennen we van de regenboog en de album cover van Pink Floyd's Dark Side of the Moon. De menselijke biologische klok is zodanig geëvolueerd dat we een bepaalde afhankelijkheid hebben opgebouwd naar deze kleuren in het lichtspectrum. Onze klok is zo ingesteld dat de mens in de ochtend kleurtemperaturen van 2700K prefereren, dit zijn voornamelijk rode en oranje kleurtinten. Aan het einde van de ochtend is het van belang om een mens bloot te stellen aan witte en blauwe kleurtinten vanaf 4000K en naarmate de middag begint de kleurtinten richting de 6500K te laten veranderen. Dit resulteert in een toename van alertheid en het behoud van concentratie. Richting het einde van de middag zijn gele en oranje kleurtinten wenselijk, deze bevorderen prestatie. Aan het einde van een dag, voordat het donker wordt, heeft de mens weer behoefte aan rode lichtkleuren om tot ontspanning te kunnen komen (SLE, 2017). Het negeren van de behoefte aan deze ritmes, en dus hele dagen lang blootgesteld worden aan een non-dynamische lichtbron, brengt het melatonine-huishouden uit balans. Een van de bekendste symptomen van een verstoorde melatonine-huishouding is depressie. Voor veel wetenschappers is dit ook de verklaring van het fenomeen “winterdepressie".

Licht bestaat uit knipperingen. De hoeveelheid Herz (Hz) bepaald de constantheid van het signaal. De intensiteit van het licht dat op een oppervlakte schijnt wordt uigedrukt in lux. Het is in Nederland vastgelegd in de Arbeidsomstandighedenwet onder de norm "lux-waarden" dat een kantooromgeving minimaal 500 lux moet bieden op de werkplek. Dit geldt ook voor vergaderruimtes. In gangen, archief-ruimtes en kantines mag de lux-waarde echter 150 zijn (Lumeco Light Solutions, n.d.). Te weinig verlichting betekent dat er minder visuele informatie vanuit het oog naar het brein gestuurd kan worden, en dat er meer inspanning geleverd moet worden voor een taak. Bij te veel licht kan het oog juist veel informatie uit het complete zichtveld halen, waardoor een information overload kan ontstaan. Beide gevallen dragen bij aan de ontwikkeling van stress.

#### Geluid
Geluid is de oscillatie van druk dat wordt overgedragen door een 'medium'. Dit medium kan een vaste, vloeibare of gasvorm hebben. Het bekendste medium waar deze trillingen doorheen reizen is zuurstof in gasvorm. Geluid heeft altijd een verzender, medium en ontvanger. In een scenario waar een kantoormedewerker geconcentreerd zit te werken, en er een collega muziek wilt luisteren is de speaker de verzender, zuurstof het medium en het oor van de medewerker de ontvanger. Afhankelijk van het volume dat de speaker uitzendt, de afstand tussen de verzender en de ontvanger, de hoeveelheid geluidsabsorptie die in de ruimte plaatsvindt en eventuele gehoorbescherming die de ontvanger draagt, wordt de concentratie van de medewerker wel of niet doorbroken. Geluid is een van de grootste stoorzenders in een kantooromgeving. Het meest wenselijke geluidsniveau is echter een punt waar veel medewerkers van mening verschillen. Het is echter wel gebleken dat "ergernis" door geluid de meest significante afname in werk-productiviteit draagt. Op het moment dat er sprake is van ergernis door geluid, spreekt men van "noise pollution". Dit is het resultaat van een slechte verhouding tussen verzender, medium en ontvanger in het omgevingsgeluid. Noise pollution op kantoren zorgt voor een flinke afname in productiviteit, zwakkere learning curves, moeite van het opnemen van nieuwe informatie, moeite met het ophalen van geheugen en het afbreken van concentratie. Geluid wordt uitgedrukt in decibel (dB), maar er is een gestandaardiseerd equivalent voor het menselijk oor en dat is dBA. Het geadviseerde geluidsniveau voor in kantoren, gebaseerd op optimale productiviteit en concentratie, is 45 dBA. Het gemiddelde geluidsniveau in kantoren in Nederland is echter 54 dBA (Mize, 2016).

### Veldonderzoek
Na het literatuuronderzoek ben ik bij B. Amsterdam in gesprek gegaan met kantoormedewerkers. Mijn doel was om tijdens een één-op-één gesprek meer te weten te komen over wat voor data kantoormedewerkers zouden willen ontvangen over hun (fysieke) werkomgeving en of ze bereid zijn in actie te komen om hun werkomgeving te verbeteren. Ik had ze het volgende scenario voorgelegd:

"Je werkt full-time in een kantooromgeving waar je geen ramen open kunt zetten, de verwarming centraal geregeld wordt en veel planten hebt staan. Er komt een bedrijf langs dat sensoren ophangt in elke ruimte. Ze zijn volledig transparant in hoe de technologie van de sensoren werkt. De sensoren zouden hypothetisch gezien alle natuurkundige en klimatologische omstandigheden kunnen meten.”

In totaal heb ik 14 respondenten geïnterviewd.

#### Sensordata Werkomgeving
Het is me opgevallen dat de respondenten niet erg creatief durven te zijn met het bedenken van sensoren die omgevingsstressoren kunnen meten. Populaire antwoorden waren: temperatuur, CO₂, luchtvochtigheid en metingen als "luchtvervuiling" en "zuurstofgehaltes", die onder luchtkwaliteit vallen. Uniekere antwoorden waren: lichtintensiteit, lichtkleur, lichtverdeling, geluid en akoestiek, de klimatologische omstandigheden om een plant mee te verzorgen, het aantal mensen op een plek (occupancy, reuring) en ergonomie (zithouding). Toen ik vroeg of ze zelf ook last hebben van de door hen eerder genoemde stressoren, bevestigden ze dit.

De informatie dient volgens bijna alle respondenten voornamelijk visueel te worden weergegeven. Sommigen geven aan grafieken te willen zien waarin waarden over tijd worden weergegeven met labels over welke waarden goed en slecht zijn. Anderen geven aan dat ze graag "meters" of spectra willen zien, waarop wordt weergegeven wat de huidige waarde is op een horizontale as, en direct gerelativeerd kan worden met wenselijke en onwenselijke waarden.

#### Actie Ondernemen
“Stel dat je op de manier die je net hebt genoemd een "slechte" omgevingswaarde zou zien. Heb je de behoefte om direct actie te ondernemen om deze te verhelpen of te verminderen?"

Alle respondenten hebben aangegeven dat ze actie zouden ondernemen op het moment dat ze vanuit hun omgeving feedback krijgen dat er omgevingsstressoren aanwezig zijn, of binnenkort zullen zijn. De acties die ondernomen zouden worden verschillen echter:

**1. Passief (via superior):**
Vier van de veertien respondenten geven aan actie te ondernemen door naar een manager of ander verantwoordelijk persoon te stappen om een melding of klacht door te geven. Ze hebben het idee dat ze zelf niet in staat zijn om het probleem aan te pakken. Sommigen denken wel de capaciteit te hebben om de stressor te verhelpen, maar vinden dat zij alsnog niet het aangewezen persoon zijn om deze actie te verrichten.

**2. Passief (verplaatsing):**
Vijf respondenten hebben aangegeven zich te verplaatsen van de plek waar een stressor plaatsvindt of zal plaatsvinden. De reden dat deze respondenten dat de meest logische keuze vinden, is omdat ze er erg in geloven dat veel stressoren subjectief zijn. Het is dan niet ondenkbaar dat het individu in kwestie als enige last heeft van deze stressor. De respondenten menen dat In plaats van de omgeving aanpassen, dat ook van toepassing is op anderen, het ze beter lijkt om zelf een omgeving met minder stressoren op te zoeken.

**3. Actief:**
Vijf van de veertien ondervraagden geven aan zelfstandig actie te ondernemen. Een deel hiervan geeft aan dat ze hierbij ook juist de sociale context interessant vinden. "Samen verantwoordelijk zijn voor een aangename werkomgeving" is een doel dat ze willen bewerkstelligen. Sommigen geven echter wel aan dat ze graag eerst willen overleggen met de rest van de medewerkers of de stressoren unaniem worden ervaren.

### Conclusie
Teruggrijpend naar het literatuuronderzoek weet ik dat fysieke stressoren omtrent ergonomie, klimaat, licht en geluid de grootste invloeden op productiviteit, concentratie, learning-curve, tevredenheid met de werkomgeving, stress, en uiteindelijk welzijn hebben. In de interviews tijdens het veldonderzoek wordt bevestigd dat deze meetpunten interessant zijn voor kantoormedewerkers. Sterker nog: kantoormedewerkers zijn zich bewust van wanneer een stressor actief is. Ze kunnen de stressor ook definiëren en zijn in staat om aan te geven in hoeverre ze last hebben van deze stressor. Kantoormedewerkers kunnen echter niet aangeven in hoeverre ze elke factor in de fysieke omgeving ingesteld willen hebben. Deze zijn moeilijk in te schatten.

Er zijn verschillende manieren mogelijk om de informatie over deze omgevingsfactoren naar de gebruiker te brengen, het hangt af van workflow, urgentie en in hoeverre de kantoormedewerker actie kan ondernemen om comfort te optimaliseren. Kantoormedewerkers hebben verschillende standaarden van comfort, maar hebben moeite met deze standaarden uit te drukken.

Tot slot zijn niet alle kantoormedewerkers evenveel gebaat bij een oplossing waarbij ze zelf actie moeten ondernemen. Er zijn kantoormedewerkers die wel meer comfort willen, maar vinden dat hun werkgever hiervoor moet zorgen. Ook zijn er kantoormedewerkers die moeite hebben met inschatten of zij de enigen zijn die de omgevingsstressor ervaren, en om deze reden het probleem uit de weg gaan door zich te verplaatsen.

## Ontwerpvraag
Op basis van de bevindingen uit zowel het literatuuronderzoek als het veldonderzoek heb ik de volgende ontwerpvraag geformuleerd:

> **Hoe kun je fysieke activiteit inzichtelijk maken voor kantoormedewerkers die full-time bij een corporate bedrijf werken, door middel van een web-app die verbonden is met een IoT-device, om fysiek welzijn in de werkomgeving te optimaliseren?**

### Design Challenges
Om het theoretisch kader van het onderzoek en de bevindingen uit het veldonderzoek te concretiseren naar een praktische toepassing, heb ik de volgende design challenges opgesteld:

**1. Hoe kun je middels een ergonomische interventie MSD's en CVD's afzwakken en zitgedrag inzichtelijk maken?**
**2. Hoe kun je ergonomisch-verantwoord zitgedrag aanmoedigen zonder de workflow van de kantoormedewerker te verstoren?**
**3. Hoe kun je zitgedrag inzichtelijk maken door middel van digitale technologie zodat deze informatie systematisch gebruikt kan worden?**
**4. Hoe kun je omgevingsstressoren meetbaar maken met een IoT-device waarbij de sensor-componenten modulair opgebouwd kunnen worden?**

## Focus
Met mijn minor in Intelligent Environments en een focus op IoT-design wil ik mijzelf uitdagen om binnen dit afstudeerproject het ontwerp van een fysiek IoT-product te realiseren dat middels sensoren informatie uit de (werk)omgeving kan halen. Aangezien sensoren een fysieke vorm hebben was ik in eerste instantie van plan om hier een mooie casing voor te ontwerpen. De casing zou middels actuatoren nog een interactie-laag zou hebben als toegevoegde waarde voor de kantoormedewerker. Wat voor vorm de sensor-casing zou aannemen wist ik echter nog niet.

Tijdens het literatuuronderzoek stuitte ik op de bevindingen met betrekking tot muskoskeletal disorders en cardiovascular diseases, allebei afkomstig van slechte ergonomische omstandigheden in de werkomgeving. De sensor-casing heeft een vorm gekregen: de vorm van een stoel. Middels een slimme IoT-werkstoel, uitgerust met sensoren en actuatoren, en een mobiele web-app die communiceert met deze stoel, wil ik het comfort van de werkomgeving optimaliseren.

Tegen het einde van het afstudeerproject wens ik op de volgende aspecten tevreden te zijn met mijn werk:

- De kwaliteit van het fysieke prototype;
- De kwaliteit van het web-app prototype;
- De UI en UX van de web-app;
- De esthetiek omtrent het IoT-device;
- De innovativiteit omtrent de oplossing van de ontwerpvraag;

## Productvisie

#### Wat weet ik tot nu toe?
Door het literatuur- en veldonderzoek weet ik dat het comfort van de fysieke werkomgeving essentieel is voor het welzijn van de kantoormedewerker. Kantoormedewerkers ontwikkelen op den duur mentale problemen door stress en lichamelijke klachten door hun zitgedrag. Om inzicht te krijgen in het comfort van de werkomgeving dienen er ergonomische en omgevings-metingen verricht te worden. Het is van groot belang dat kantoormedewerkers aan veel beweging toekomen terwijl ze werken, ergonomisch zitten is goed maar dynamisch zitten is immers beter. Een stoel waarbij van nature al in een ergonomisch-verantwoorde zithouding aangenomen wordt zou ideaal zijn. Het belang is echter dat kantoormedewerkers inzicht kunnen krijgen in hun sedentary movement: de hoeveelheid beweging die tijdens het zitten plaatsvindt.

Wat betreft de omgevingsmetingen, weet ik ook dat elke kantoormedewerker andere standaarden van comfort heeft. Om inzicht te krijgen dit comfort, dienen de omgevingsstressoren individueel geanalyseerd te worden. Kantoor-medewerkers weten bijvoorbeeld wel of ze de temperatuur (te) warm of (te) koud vinden, maar ze hebben moeite met inschatten wat hun gewenste temperatuur zou zijn. Zodra een omgevingsstressor actief is, komen kantoormedewerkers graag in actie om deze tegen te gaan. De actie die ze nemen hangt echter af van of iedereen deze stressor ervaart, of dat het slechts door een kleine groep wordt ervaren. Het management wil graag inzicht in de omgevingsstressoren om te kunnen analyseren welke interventies de grootste toename in welzijn zullen realiseren.

#### Huidige oplossingsrichting: Fysiek Component
- Steeds meer kantooromgevingen zijn voorzien van zitballen waar kantoormedewerkers op kunnen werken. Door de ronding in de bal is zitbalans een vereiste, waardoor automatisch een ergonomisc-verantwoorde zithouding aangenomen wordt. Dit remt muskoskeletal disorders.
- Door veel te bewegen tijdens het werk blijft de bloedsomploop optimaal, wat cardiovascular diseases voorkomt. Sommige bedrijven adviseren hun werknemers om regelmatig op te staan en veel te lopen op een dag, maar beweging tijdens het zitten is nog belangrijker. Beweging in de stoel is meetbaar met een gyroscoop en/of accelerometer.
- De stoel zal voorzien worden van sensoren die omgevingsmetingen kunnen verrichten. Denk aan lux-sensoren voor licht, decibel-sensoren voor geluid en temperatuur-, luchtvochtigheid-, tVOC- en CO2-sensoren voor klimaat. Deze sensoren dienen modulair (plug and play) opgebouwd te kunnen worden.
- De stoel moet ook voorzien zijn van sensoren die meten hoeveel tijd er op een dag gezeten wordt, en in hoeverre dit in verlgelijking staat tot staan. Dit kan gemeten worden met een pressure-sensor, of een simpele ‘knop’ in het zitvlak van de stoel, in de web-app kan dit gevisualiseerd worden naar zit-duratie over tijd.
- De “Buoy” van de Enrichers is een kruk die ontworpen is om beweging in de heupen te stimuleren tijdens het zitten. De onderkant van de kruk is een koperen ‘kom’ met een ronde onderkant. Zodra je erop gaat zitten, neem je een ergonomisch-verantwoorde zithouding aan om in balans te blijven. Je zit automatisch met een gestrekte rug en rechte nek. Gelijkertijd merk je dat de heupen de vrijheid hebben om te bewegen, wat de kruk de perfecte kandidaat maakt om zowel muskoskeletal disorders als cardiovascular diseases mee tegen te gaan.

De Buoy van de Enrichers is van origine al een kruk dat perfect in de potentiële oplossing past aangezien het een zeer ergonomisch-verantwoord product is. Deze ergonomische kwaliteit is echter niet meetbaar, noch inzichtelijk. Middels een gyroscoop kan de ‘sedentary movement’ gemeten worden en door een knop in het zitvlak kan de zit-duratie uitgelezen worden. Om omgevingsfactoren te kunnen meten, zal de kruk voorzien worden van een component waarop de sensoren modulair geplaatst kunnen worden. Welzijn in de werkomgeving staat, zoals eerder benoemd in dit document, op fysiologische en psychologische factoren. De werkomgeving moet comfortabel zijn en de werkcultuur dient aangenaam te zijn. In dit ontwerp geven de LED’s een visuele indicatie van het zitgedrag. Het doel is dat de collega’s van de zittende kantoormedewerker hem/haar herinneren even te gaan staan als dat nodig is. Het toont collegialiteit en een ‘menselijke’ nudge is een stuk vriendelijker en meer context-aware dan een computer-notificatie.

/documents/images/buoy-schets.png

#### Huidige oplossingsrichting: Web-app
- De web-app is standaard voorzien van persoonlijke ergonomische inzichten. Door sensoren op de Buoy te plaatsen kunnen andere omgevingsfactoren gemeten worden. Metingen kunnen op persoonlijk- en afdelingsniveau bekeken worden.
- In deze visualisatie kunnen kantoormedewerkers hun zitgedrag tijdens de werkdag bekijken. Zodra de medewerker gaat zitten wordt de gyroscoop uitgelezen en analyseert het de *in-chair-movement*, deze worden met kleurconnotaties weergegeven op een klok. Het getal in het midden van de cirkel staat voor het percentage van de tijd waarop de kantoormedewerker heeft gezeten, vergeleken met de gehele werkdag.

/documents/images/interface-webapp.png

## Concept Validatie
Startend op 4 juni begin ik met het valideren van de huidige oplossing-richting. Het concept leunt nu op twee hypothesen, deze zijn:

Hypothese 1:
> **Door persoonlijk inzicht te geven in zitgedrag zijn kantoormedewerkers meer geneigd om verbetering aan te brengen in hun fysieke welzijn.**

Hypothese 2:
> **Kantoormedewerkers attenderen hun collega’s op hun zitgedrag als dit aantoonbaar ergonomisch-onverantwoord begint te worden.**

## Experiment 1: Inzichten Zitgedrag
Op het kantoor van FONK Amsterdam heb ik een vrijwilliger gevonden wiens zitgedrag ik mag bestuderen tussen maandag 4 juni en vrijdag 8 juni. Tussen 09:00 uur 's ochtends en 18:00 uur 's avonds zal ik bijhouden op welke momenten hij zit en hoe lang hij zit. Aan het einde van de werkdag gaan we gezamenlijk de inzichten doornemen. Ik zal hem dan de volgende vragen stellen:
1. Wat kun je mij vertellen over het onderstaande figuur? (*Usability vraag*)
2. Wat gaat er door je heen als je deze inzichten bekijkt?
3. Heb je de behoefte om deze inzichten vanaf nu elke dag te ontvangen?
4. Wat zou je nog meer willen zien in dit figuur met betrekking tot het zitgedrag dat je vandaag vertoond hebt?


### Maandag 4 juni
- Zitpercentage: 72%
- Ben vond het zitpercentage hoger dan verwacht, hij dacht dat hij meer had gestaan dan dat.
- Ben geeft aan dat hij zich bewust is van de vermindering in bloedcirculatie bij een sedentaire houding en zegt soms behoefte te hebben aan wat sport op het midden van de werkdag.
- Ben geeft ook aan dat hij regelmatig timers gebruikt om regelmatig geattendeerd te worden op zijn zitgedrag. Hij zegt echter dat deze timers 'altijd ongelegen afgaan' en dat hij de tool daarom uit zet.


## Concept UX

### Job Stories
Alan Klement uitte zijn kritiek op de *User Stories*-methode die tot op heden vaak werd gebruikt door UX-ontwerpers op een inventarisatie van eisen te maken. User Stories zijn te vaag en bestaan uit te veel assumpties.

Een User Story ziet er als volgt uit:
> "As a (*persona*), I want to (*action*), So that (*expected outcome*)"

Alan Klement stelde een alternatief voor: de Job Story. Deze zou er als volgt uit zien:
> "When (*situation*), I want to (*motivation*), So I can (*expected outcome*)"

Om dus een inventarisatie te maken van de wensen van full-time kantoormedewerkers omtrent een ergonomische interventie heb ik de volgende reeks aan job stories opgesteld:
1. Wanneer ik lange werkdagen maak op kantoor, wil ik inzichten krijgen in mijn zitgedrag, zodat ik aan het einde van de dag kan zien of mijn fysieke activiteit voldoende is geweest.
2. Wanneer ik geconcentreerd aan het werk ben en niet bewust ben van mijn ergonomisch-onverantwoorde zitgedrag, wil ik *ubiquitous* hierop geattendeerd worden, zodat ik op tijd mijn zitgedrag kan verbeteren.
3. Wanneer ik voor een langere periode mijn zitgedrag heb gemeten, wil ik mijn metingen over een langere periode bekijken, zodat ik kan zien of ik beter zitgedrag aanleer.
