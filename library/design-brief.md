# Design Brief

	Daan Rongen
	Afstudeerstudent Communication & Multimedia Design,
	minor Intelligent Environments, 
	focus op IoT-design en design-ethiek.
		
	Onder begeleiding van: Harold Konickx
	In opdracht van: Healthy Workers
	Onder supervisie van: Niels de Keizer & Boy Lokhoff

---

<div align="center">
<a href="https://github.com/daanrongen/delta/blob/master/library/design-brief.md">design-brief</a> || <a href="https://github.com/daanrongen/delta/blob/master/library/design-rationale.md">design-rationale</a> || <a href="https://github.com/daanrongen/delta/blob/master/library/literatuuronderzoek.md">literatuuronderzoek</a> || <a href="https://github.com/daanrongen/delta/blob/master/library/veldonderzoek.md">veldonderzoek</a>
</div>

---

In deze **design brief** beschrijf ik de achtergrond van mijn afstudeeropdracht. Hierin worden de eisen van de opdrachtgever, het huidige product van de opdrachtgever en de context van de eindgebruiker beschreven.

{{TOC}}

## Introductie
In Nederland werken ruim 2.3 miljoen mensen in een kantooromgeving (Stijnenbosch, 2015). Dat is bijna eenderde van de complete beroepsbevolking van Nederland (CBS, 2015). Het percentage Nederlanders dat in een kantooromgeving werkt zal naar schatting blijven stijgen, dit komt voornamelijk door de sterke groei van de diensten-economie. Alhoewel het ziekteverzuim van de gemiddelde Nederlandse kantoormedewerker lager ligt dan bij andere sectoren, is het alsnog niet de meest gezonde werkomgeving om langdurig in te werken. Sterker nog, de kantoortuin is funest voor de gezondheid (van Agteren, 2018). Het interieur van de kantooromgeving is ontworpen om kantoormedewerkers zo efficiënt mogelijk werk te laten verrichten. Een comfortabele bureaustoel waarin uren geconcentreerd gewerkt kan worden, een bureau met een computer en alle andere voorzieningen die benodigd zijn voor het werk, dat is de werkplek van een kantoormedewerker. Deze werkwijze is lucratief voor het bedrijf. De werknemer komt echter aan steeds minder fysieke activiteit toe, dit resulteert in gezondheidsproblemen (Pandey, Usman, & Sushil, 2016).

MKB heeft in samenwerking met Menzis een ‘bedrijfs-gezondheidscheck’ ontwikkeld en laat deze afleggen bij talloze bedrijven. Het doel van de check is om alle bedrijven te laten streven naar gezond en fit personeel en aan te moedigen om te investeren in de gezondheid van de werknemers. Voor de directie van deze bedrijven is het namelijk een win-win om hun personeel zo gezond mogelijk te houden: een toename in productiviteit en een afname in ziekteverzuim. Naast de bedrijfsgezondheidscheck maakt MKB namelijk ook berekeningen hoeveel een zieke werknemer kost per dag voor het bedrijf. Bij hun berekeningen staat het gemiddelde op €410 per dag per zieke werknemer (Klees, 2017). Al met al is het dus bijzonder lucratief om te investeren in welzijn. Het probleem is echter dat gezondheid complex is en niet opgelost kan worden met *quick fix*-interventies.

De gemiddelde kantoormedewerker zit 10,1 uur op een dag (RIVM, 2015). Op een werkdag spendeert de kantoormedewerker 77,0% van de tijd zittend terwijl dit op een niet-werkdag 62,9% is (Thorp et al, 2012). Dit bevestigt de zitcultuur die heerst op kantoren. Te lang in een ergonomisch-onverantwoorde zithouding zitten draagt bij aan de ontwikkeling van musculoskeletal disorders (Middlesworth, n.d). Fysieke inactiviteit op de lange termijn draagt bij aan de ontwikkeling van hart- en vaatziekten (Morris, 1958). Valt de "zit-epidemie", zoals het wordt genoemd, op te lossen met *quick fixes* zoals het zit-sta-bureau en de zitbal? Of ligt de oplossing in een gedragsverandering van het personeelsbestand om een ergonomisch-verantwoordelijke werkhouding aan te leren?

## Opdrachtgever
Healthy Workers zet zich in om werknemerswelzijn te meten en te verbeteren bij grote corporate bedrijven. Naast het management bestaat het team uit developers, designers, onderzoekers en psychologen. Healthy Workers is nog jong, maar er zit veel momentum en groei in de start-up. De start-up heeft een partnership met startup-hub B. Building Business en vastgoed-bedrijf CBRE en is co-founded door digital design agency FONK. Door sensoren in kantoorruimtes te hangen verricht Healthy Workers objectieve metingen over de fysieke werkomgeving. Denk hierbij aan metingen over de binnentemperatuur, luchtkwaliteit en geluidsniveaus. Ook heeft Healthy Workers een web-app ontwikkelt die middels vragenlijsten subjectieve input van elke kantoormedewerker vraagt over hoe zij de werkomgeving ervaren. Denk hierbij aan vragen over hun relaties met collega's, of ze hun persoonlijke leerdoelen behalen en of ze zich op hun plek voelen bij het bedrijf. Healthy Workers noemt zichzelf een bedrijfs-'thermometer'. Ze verrichten metingen, analyseren de resultaten, delen de inzichten met het management en doen suggesties voor hoe de werkomgeving verbeterd kan worden waardoor het werknemerswelzijn zal stijgen. Ook is Healthy Workers vervolgens gekoppeld met interventiepartijen die deze verbeteringen kunnen implementeren. De interventies worden gevalideerd op haar rendabiliteit. Dit proces wordt herhaald totdat het personeelsbestand aantoonbaar meer bevlogen is. De voornaamste doelen van Healthy Workers zijn het laten stijgen van bevlogenheid en productiviteit van werknemers, bedrijven aantrekkelijk maken voor talenten en deze ook binnen houden en het verminderen van ziekteverzuim en gezondheidsklachten.

### Huidige Product
#### Employee Companion
Hieronder zijn twee schermen te zien van de web-app van Healthy Workers. Deze web-app, speciaal voor de werknemers, wordt de Employee Companion genoemd. In het linkerscherm is de home-page van de huidige web-app te zien. Bovenin het linkerscherm is te zien dat de luchtkwaliteit 'alpenfris' is. Als hierop wordt geklikt, gaat de gebruiker naar het rechterscherm, het klimaatoverzicht. Hier zien de kantoormedewerkers de informatie die real-time van de geplaatste sensoren komt. Healthy Workers heeft in het afgelopen halfjaar drie pilots bij corporate bedrijven uitgevoerd. Deze vonden plaats bij Uitvoeringsinstituut Werknemersverzekeringen (UWV), een van de grootste accounting-firma’s PriceWaterhouseCoopers (PWC) en bloemen- conglomeraat Royal FloraHolland. Tijdens deze pilots is het huidige product uitvoerig getest.

<div align="center">
![Huidige Webapp Healthy Workers](/images/huidig-product.png)
</div>

## Het Probleem
Het probleem omtrent gezondheidsklachten en verminderd welzijn op het kantoor is een probleem dat speelt bij drie stakeholders in het algemeen, dit zijn:
1. De (full-time) kantoormedewerkers;
2. De directie van een corporate bedrijf;
3. Healthy Workers (en haar partners);

### Kantoormedewerkers
In de introductie werd al beschreven dat kantoortuinen funest zijn voor de gezondheid. Een bijzonder groot deel van de Nederlandse arbeider werkt in zo’n kantooromgeving. Deze kantoormedewerkers kampen met informatie-vervuiling die voor een groot deel onbewust wordt veroorzaakt door omgevingsstressoren. "Stress is beroepsziekte nummer één" en skeletvergroeiingen door een langdurige sedentaire houding is het grootste werkgerelateerde letsel op de arbeidsvloer. De gezondheidsklachten die ontstaan door en tijdens het werk op het kantoor kunnen zelfs na de carrière van de kantoormedewerker nog nare consequenties met zich meebrengen. Het is van groot belang voor de gezondheid van de kantoormedewerker dat er interventies plaatsvinden die het welzijn centraal stellen.

### Directie / Management
Door alle impulsen die kantoormedewerkers op zich af krijgen in de vorm van omgevingsstressoren, neemt het concentratie-vermogen, de bevlogenheid en de learning-curve significant af. Deze afname is funest voor de productiviteit van het personeelsbestand. Gelijkertijd neemt door stress en lichamelijke klachten het ziekteverzuim toe, wat de kosten voor het bedrijf doet oplopen. Het management heeft dus baat bij het optimaliseren van de gezondheid van haar personeel en er zijn steeds meer bedrijven die dit inzien. Het is echter erg moeilijk om te analyseren wat de gezondheidsproblemen precies aanwakkert en waar de ‘biggest wins’ gehaald kunnen worden met betrekking tot welzijn.

### Healthy Workers
Healthy Workers zet zich in om het welzijn van kantoormedewerkers meetbaar en verbeterbaar te maken. Door middel van een combinatie van objectieve sensordata en subjectieve informatie-vergaring meten ze waar een afname van welzijn door veroorzaakt zou kunnen worden. Vervolgens zijn ze aangesteld bij meerdere interventiepartners om de problemen die ze ontdekken gelijk te kunnen oplossen. Denk bij interventies aan wanden met luchtzuiverende planten, betere ventilatie, ergonomisch-verantwoorde bureaustoelen, verstelbare tafels en nog veel meer. Ze hebben zojuist drie pilots afgerond bij grote corporate bedrijven. Om aan de directie te kunnen tonen welke interventies de grootste toename in welzijn zouden realiseren heeft Healthy Workers data nodig dat afkomstig is van de kantoormedewerkers. Deze data laat vaak op zich wachten. Dit komt voornamelijk door inefficiënte datavergaring bij medewerkers die de hele dag door geacht worden productief te zijn, met andere woorden: een mismatch tussen eindgebruiker en product.

## Onderzoek

### Literatuuronderzoek
Steeds meer werkenden werken in een sedentaire sector, voornamelijk in kantooromgevingen. Het percentage Nederlanders dat in een kantooromgeving werkt zal naar schatting blijven stijgen, dit komt voornamelijk door de sterke groei van de diensten-economie. De gemiddelde kantoormedewerker zit 10,1 uur op een dag (RIVM, 2015). Kantoormedewerkers brengen op een werkdag gemiddeld 77,0% van de tijd zittend door, terwijl ze op werkdagen buiten werktijden 63,1% van de tijd zitten. Op niet-werkdagen zit dezelfde groep gemiddeld 62,9% van de tijd. 

Door te lang in een ergonomisch-onverantwoordelijke houding te zitten ontwikkelen mensen musculoskeletal disorders, ook wel skeletvergroeiingen. Musculoskeletal disorders vormen de grooste categorie van werkgerelateerd letsel. Er vindt een toename plaats in het aantal werknemers met pre-existing MSD's op het moment dat ze het werkveld betreden. In 1995 was het percentage werkers met een MSD 21%, in 2000 was dit 35% en in 2015 48% (Middlesworth, n.d). 

Ook is er een significante correlatie tussen sedentair werk en de ontwikkeling van hart- en vaatziekten. De Schotse epidemioloog Jerry Morris onderzocht de correlatie tussen ‘sedentair werk’ en de ontwikkeling van dodelijke hart- en vaatziekten. Bij een onderzoek naar de doodsoorzaken van 3.800 Britse mannen die het grootste deel van hun leven full-time werkten, ontdekte Morris een significante correlatie tussen vermindering of absentie van fysieke activiteit en de ontwikkeling van gezondheidsproblemen (Morris, 1958). Langdurig in een sedentaire houding zitten reduceert de fysieke activiteit van het individu tot het minimum, dit heeft invloed op de bloedsomloop. 

De fysieke activiteit van de kantoormedewerker dient toe te nemen. Dit kan middels verschillende interventie-soorten. Tot nu toe heeft het inspelen op de technologische "Quantified Self"-trend het beste resultaat opgeleverd, deze toepassing valt onder mediale interventies. Aangezien er gesteld kan worden dat er een zitcultuur heerst op de kantooromgeving en menselijk gedrag voor een groot deel beïnvloedbaar is door de omgeving, dienen er grotere maatregelen getroffen te worden. Een mediale interventie meet en toont gedrag, maar de verbetering moet vanuit intrinsieke motivatie van de gebruiker komen.

### Veldonderzoek
Kantoormedewerkers geven aan dat ze informatie over hun werkomgeving het liefst visueel willen zien. Ook geven ze aan dat ze in een applicatie willen zien of waarden 'goed' of 'slecht' zijn. Tijdens de observatie bij FONK is Ben naarmate de week vorderde percentueel meer gaan zitten. Zijn verklaring hiervoor was dat er meer werkdruk ontstaat richting het einde van de week. Ben was niet verrast door de zitinzichten, hij had al verwacht rond de 80% van de dag zittend door te brengen. In de zitinzichten zijn patronen te herkennen. Zo zit Ben aan het einde van de dag vaak langer, vaak in zitperiodes van anderhalf uur. Ben geeft aan verbetering te willen aanbrengen aan zijn zitgedrag, hij deed dit voorheen met een computer-timer die hem elke 45 minuten attendeerde om te gaan staan. Deze timer kwam echter altijd ongelegen en is daarom snel verwijderd.

"Actionable Data" is data, afkomstig uit een Quantified Self toepassing, waarbij de gebruiker de mogelijkheid heeft om te kiezen voor een aanpassing in zijn/haar gedrag. Met andere woorden, actionable data is een inzicht waarop gehandeld kan worden. Je zou kunnen stellen dat bij user-centred design het product is afgestemd op het tonen van zo veel mogelijk actionable data.

8 op de 10 kantoormedewerkers ontwikkelt vroeg of laat nek-, schouder-, rug- of armklachten. Dit probleem is moeilijk op te lossen omdat er een zitcultuur heerst in kantooromgevingen. Gedrag en omgeving gaan hand-in-hand en de kantooromgeving is ontworpen om zittend werk te verrichten. Medewerkers in fysiek-intensieve sectoren hebben dynamische belasting op hun lichaam, waarbij kantoormedewerkers statische belasting ondergaan. Bij statische belasting worden de spieren evengoed belast maar worden niet bewogen. De kantoormedewerker moet niet dynamisch zitten, dat bevordert het blijven zitten alleen maar. 

De oplossing ligt in het aanleren van dynamisch werken, waarbij op een efficiënte manier zitten, staan en bewegen voortdurend wordt afgewisseld over de werkdag. Staan, op zich, is namelijk ook heel statisch. Het voordeel dat staand werken met zich meebrengt is dat je gemakkelijker kunt overgaan naar een beweging dan dat je dit vanuit een zittende houding doet. Er wordt geadviseerd om tussen de 4 en 6 zituren op een werkdag aan te houden, afgewisseld met 2 tot 4 uur aan beweging. De ergonomische metingen dienen verricht te worden tussen het begin van de werkdag en het einde van de werkdag, hier valt de meeste winst te behalen. Door te letten op de duur van elke activiteit of inactiviteit is het mogelijk om patronen herkennen. De one-size-fits-all mentaliteit gaat hier niet op. De inzichten moeten individueel naar de medewerker gecommuniceerd worden. 

Bij het werken naar een oplossing moet er kritisch gekeken worden naar of er een gedragsverandering plaatsvindt. De data vormt zich namelijk naar het gedrag, het gedrag moet zich niet naar de data vormen. Het is niet de bedoeling dat kantoormedewerkers een prestatie gaan najagen. Lechner stelt met het ASE-model dat gedragsverandering ontstaat bij intentie. Intentie is afhankelijk van drie factoren: Attitude, Social influence, Efficacy. Vervolgens komt het persoon in kwestie in aanraking met mogelijke barrières en het wel of niet beheersen van benodigde vaardigheden, dit is competentie. Als dit slaagt resulteert het in gedrag, maar dan is het nog de vraag hoe lang het persoon in kwestie dit gedrag zal behouden. Dat hangt af van beloningen of straffen.

### Conclusie
De kantoormedewerker moet dynamisch leren werken om gezondheidsproblemen af te zwakken. Dit vergt een gedragsverandering. Op een werkdag dient de kantoormedewerker constant af te wisselen tussen zitten, staan en bewegen. Deze afwisselingen moeten frequent en efficiënt zijn. Het meubilair van de kantoormedewerker moet uitnodigen tot het vaak wisselen van fase. De kantoormedewerker dient inzicht te krijgen in het ergonomisch gedrag, dit leidt tot bewustzijn en kan de houding tegenover dynamisch werken veranderen. Het sociaal-culturele element in de werkomgeving is essentieel en hier dient rekening mee gehouden te worden in de oplossing. De krachtdadigheid van de interventie is afhankelijk van de hoeveelheid *actionable data*. Zodra de intentie is bereikt om naar dynamisch werken te streven, is het een kwestie van faciliteren. De interventie dient minimale barrières te hebben en simpel te zijn in het gebruik. Tot slot, om het gedrag van dynamisch werken te behouden dient er een beloning, of *pay-off*, tegenover te staan.

## Ontwerpvraag
Op basis van de bevindingen uit zowel het literatuuronderzoek als het veldonderzoek heb ik de volgende ontwerpvraag geformuleerd:

> **Hoe kun je fysieke activiteit inzichtelijk maken bij full-time-kantoormedewerkers door middel van een web-app die verbonden is met een IoT-device zodat zij leren dynamisch te werken om fysiek welzijn in de werkomgeving te optimaliseren.**

### Design Challenges
Om het theoretisch kader van het onderzoek en de bevindingen uit het veldonderzoek te concretiseren naar een praktische toepassing, heb ik de volgende design challenges opgesteld:

| Design Challenge |
|:--|
| Hoe kun je zitgedrag inzichtelijk maken door middel van digitale technologie zodat deze informatie systematisch gebruikt kan worden? |
| Hoe kun je middels een ergonomische interventie musculoskeletal disorders afzwakken en zitgedrag inzichtelijk maken? |
| Hoe kun je middels een ergonomische interventie gedrag aanleren waardoor hart- en vaatziekten afzwakken? |
| Hoe kun je ergonomisch-verantwoord zitgedrag stimuleren zonder de workflow van de kantoormedewerker te verstoren? |
| Hoe kun je fysieke activiteit inzichtelijk maken zodat kantoormedewerkers weten of ze aan voldoende beweging toekomen? |
| Hoe kun je kantoormedewerkers dynamisch werken aanleren zodat ze vaker wisselen tussen staan, zitten en bewegen op werk? |
| Hoe kun je kantoormedewerkers attenderen op hun ergonomie wanneer deze onverantwoord wordt, zonder hun workflow te verstoren? |

## Focus
Met mijn minor in Intelligent Environments en een focus op IoT-design wil ik mijzelf uitdagen om binnen dit afstudeerproject het ontwerp van een fysiek IoT-product te realiseren dat middels sensoren informatie uit de (werk)omgeving kan halen. Aangezien sensoren een fysieke vorm hebben was ik in eerste instantie van plan om hier een mooie casing voor te ontwerpen. De casing zou middels actuatoren nog een interactie-laag zou hebben als toegevoegde waarde voor de kantoormedewerker. Wat voor vorm de sensor-casing zou aannemen wist ik echter nog niet.

Tijdens het literatuuronderzoek stuitte ik op de bevindingen met betrekking tot musculoskeletal disorders en cardiovascular diseases, allebei afkomstig van slechte ergonomische omstandigheden in de werkomgeving. De sensor-casing heeft een vorm gekregen: de vorm van een zitmeubel. Middels een slimme IoT-werkstoel, uitgerust met sensoren en actuatoren, en een mobiele web-app die communiceert met deze stoel, wil ik de ergonomie van de kantooromgeving verbeteren.

Tegen het einde van het afstudeerproject wens ik op de volgende aspecten tevreden te zijn met mijn werk:

- De kwaliteit van het fysieke prototype;
- De UI en UX van de web-app;
- De esthetiek omtrent het IoT-device;
- De innovativiteit omtrent de oplossing van de ontwerpvraag;
- De kwaliteit van het onderzoek ter ontwerp-validatie.

## Marktanalyse
In deze marktanalyse bestudeer ik bestaande producten die voorzien in het bieden van ergonomische inzichten die met deze data streven naar een gedragsverbetering.

### FitBit
Het product van FitBit is een combinatie van een native smartphone applicatie en een "tracker", zoals FitBit het zelf noemt. Het is een wearable fitness polsband uitgerust met sensoren. De polsband meet onder andere de hartslag, het aantal stappen, het aantal trappen, verschillende sport-activiteiten, slaap-ritmes en het aantal verbrande calorieën van de gebruiker. Deze data wordt real-time naar de smartphone van de gebruiker gestuurd via Bluetooth. In de app ziet de gebruiker vervolgens inzichten in een dashboard-interface. De gebruiker kan in zijn FitBit app vrienden toevoegen via het contactenboek of via Facebook. FitBit biedt de gebruiker fitness-uitdagingen aan, waarbij de gebruiker vrienden kan uitnodigen om deze uitdaging aan te gaan.

De sterkste eigenschappen van het ontwerp van FitBit is de nauwkeurigheid van de data, het sociale aspect en het reward-systeem. Doordat de data van de tracker wordt gedeeld met de vrienden, ben je geneigd om beter te presteren. Bij het behalen van een doel, klein of groot, geeft de FitBit tracker feedback en een compliment op het behalen van het doel. Als de gebruiker vervolgens de app opent, is een verslag van alle behaalde doelen te zien met kleurrijke animaties.

Een minder sterk aspect van het FitBit ontwerp is het gebrek aan ubiquitousness en het gebrek aan sociale interactie in de 'fysieke wereld'. Het enige sociale aspect leeft in de app, en hier is alleen data te zien van andere gebruikers, wat eerder robotisch dan menselijk aanvoelt. Dit is raar als de gebruiker in een kantoor werkt waarbij collega's continu aanwezig zijn.

### Apple Health App
Apple bracht ongeveer twee jaar geleden de Health-app uit. Deze zit standaard op de iPhone en staat ook automatisch aan. De Health-app leest de sensoren in de iPhone uit en analyseert het aantal stappen, het aantal trappen en gelopen kilometers van de gebruiker. Als de gebruiker gebruik maakt van de Bedtime-feature als wekker, kan de Health-app ook slaapduur meten.

Hoe de Health-app een oplossing biedt voor kantoormedewerkers is dat het kan tonen wanneer en hoe veel stappen worden gezet. De gebruiker kan zo doelen stellen en in een overzichtelijke interface kijken of deze zijn behaald.

Waar de Health-app echter de plank misslaat is het gebrek aan nauwkeurigheid en dat de data niet *actionable* genoeg is. De data biedt voornamelijk inzichten in de totale hoeveelheid gelopen stappen per dag, over een periode van bijvoorbeeld een maand. Een kantoormedewerker zou niet snel een inschatting kunnen maken hoeveel beweging er nog in hetzelfde uur zou moeten plaatsvinden.

### Herman Miller Live OS


### BMA Ergonomics Axia

### Huidige oplossingsrichting