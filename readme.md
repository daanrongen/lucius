# Groenlicht Presentatie

Daan Rongen
Afstudeerstudent Communication & Multimedia Design,
minor Intelligent Environments, focus op IoT-design en design-ethiek.

Onder begeleiding van: Harold Konickx
In samenwerking met: Healthy Workers
Met dank aan: Govert Flint, Nick Rovroy en Niels de Keizer

Volg de progressie op [daanrongen.github.io/momentum](https://daanrongen.github.io/momentum/) en lees de [design brief](img/design-brief-compressed.pdf) voor het volledige literatuuronderzoek en ontwerpproces.

---

<div align="center">
<a href="https://github.com/daanrongen/momentum/blob/master/library/design-brief.md">design-brief</a> || <a href="https://github.com/daanrongen/momentum/blob/master/library/design-rationale.md">design-rationale</a> || <a href="https://github.com/daanrongen/momentum/blob/master/library/literatuuronderzoek.md">literatuuronderzoek</a> || <a href="https://github.com/daanrongen/momentum/blob/master/library/veldonderzoek.md">veldonderzoek</a>
</div>

---

## Productbiografie
- [ ] Design Brief
	- [x] Introduction
	- [ ] Healthy Workers
	- [ ] Opdracht
	- [ ] Stakeholders
	- [ ] Context
	- [ ] Design Challenge
	- [ ] Productvisie
- [ ] Onderzoek
	- [ ] White papers met aantekeningen
	- [ ] Interview Mariska van de Kaa
	- [ ] Observatie Ben de Groot
	- [ ] Interview Ben de Groot
- [ ] Inzichten
	- [ ] Job stories
	- [ ] User Requirements
- [ ] Productontwikkeling
	- [ ] Schetsen
	- [ ] Iteraties
	- [ ] Expert Review Jasper van Bunschoten (UX/UI)
	- [ ] Expert Review Govert Flint (BUOY ACTUATOR)
	- [ ] Expert Review Nick Rovroy (3D ADD-ON)
- [ ] Validatie
	- [ ] Job Stories
	- [ ] Usability

---
## Design Rationale

- [ ] Fysiek Product
- [ ] Web-applicatie
- [ ] Sociaal-cultureel aspect

---
## Presentatie

- [ ] Healthy Workers
	- [ ] Missie
	- [ ] Product
	- [ ] Opdracht
- [ ] Probleem

## Design Brief

### Introduction
In het begin van de 20ste eeuw werd voor het eerst lean management toegepast om kantoormedewerkers zo min mogelijk tijd en energie te laten steken in alle processen die niet zouden bijdragen aan hun functie. Elke medewerker kreeg een bureau met lades, een eigen stoel en alle materialen die ze nodig hadden. Ook werden er plattegronden gemaakt met daarin divisies en afdelingen.  Met deze ontwikkelingen werd de "Modern Efficiency Desk" geïntroduceerd. Inmiddels, honderd jaar later, bestaan er veel verschillende interpretaties van de kantooromgeving. Zo hebben we open offices, team spaces, cubicles, private of shared offices, work lounges en meeting rooms. Het enige aspect dat echter nooit is veranderd: de arbeid wordt altijd zittend verricht. Het RIVM heeft aangetoond dat de gemiddelde kantoormedewerker 10,1 uur op een dag zit. Kantoormedewerkers brengen op een werkdag gemiddeld 77,0% van de tijd zittend door, terwijl ze op werkdagen buiten werktijden 63,1% van de tijd zitten. Op niet-werkdagen zit dezelfde groep gemiddeld 62,9% van de tijd. In de kantooromgeving wordt langdurige sedentaire tijd als normaal beschouwd, sterker nog, de omgeving is hier volledig op ontworpen. Door specialisten op dit gebied, voornamelijk mensendieck-deskundigen, is de oorzaak van deze 'zit-epidemie' in kantooromgevingen de zitcultuur. Deze zitcultuur brengt ernstige gezondheidsproblemen met zich mee. Zo kan gebrek aan fysieke activiteit leiden tot hart- en vaatziekten. Te lang in een ergonomisch-onverantwoordelijke zithouding werken leidt op den duur tot musculoskeletale aandoeningen, ofwel skeletvergroeiingen. Valt de "zit-epidemie", zoals het wordt genoemd, op te lossen met quick fixes zoals het zit-sta-bureau en de zitbal? Of ligt de oplossing in een gedragsverandering van het personeelsbestand om een ergonomisch-verantwoordelijke werkhouding aan te leren?

### Healthy Workers
Healthy Workers zet zich in om werknemerswelzijn te meten en te verbeteren bij grote corporate bedrijven. Naast het management bestaat het team uit developers, designers, onderzoekers en psychologen. Healthy Workers is nog jong, maar er zit veel momentum en groei in de start-up. Door sensoren in kantoorruimtes te hangen verricht Healthy Workers objectieve metingen over de fysieke werkomgeving. Denk hierbij aan metingen over de binnentemperatuur, luchtkwaliteit en geluidsniveaus. Ook heeft Healthy Workers een web-app ontwikkelt die middels vragenlijsten subjectieve input van elke kantoormedewerker vraagt over hoe zij de werkomgeving ervaren. Denk hierbij aan vragen over hun relaties met collega's, of ze hun persoonlijke leerdoelen behalen en of ze zich op hun plek voelen bij het bedrijf. Healthy Workers noemt zichzelf een bedrijfs-'thermometer'. Ze verrichten metingen, analyseren de resultaten, delen de inzichten met het management en doen suggesties voor hoe de werkomgeving verbeterd kan worden waardoor het werknemerswelzijn zal stijgen. Ook is Healthy Workers vervolgens aangesloten bij interventiepartijen die deze verbeteringen kunnen implementeren. De interventies worden gevalideerd op haar rendabiliteit. Dit proces wordt herhaald totdat het personeelsbestand aantoonbaar meer bevlogen is. De voornaamste doelen van Healthy Workers zijn het laten stijgen van bevlogenheid en productiviteit van werknemers, bedrijven aantrekkelijk maken voor talenten en deze ook binnen houden en het verminderen van ziekteverzuim en gezondheidsklachten.

### Opdracht
Healthy Workers verricht dus objectieve en subjectieve metingen en biedt interventie-mogelijkheden ter verbetering van het werknemerswelzijn. In maart 2018 benaderden ze mij met de opdracht om een technologie te ontwerpen om fysiek welzijn in kantooromgevingen te meten én te verbeteren. 

### Ontwerpvraag
Op basis van de bevindingen uit zowel het literatuuronderzoek als het veldonderzoek heb ik de volgende ontwerpvraag geformuleerd:

> **Hoe kun je kantoormedewerkers leren dynamisch te werken door middel van een IoT-toepassing waarbij fysieke activiteit in de stoel wordt gestimuleerd en ergonomische informatie wordt vergaard zodat de gebruiker bewustzijn creëert op basis van deze inzichten.**

#### Design Challenges
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