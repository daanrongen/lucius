# Delta

	Daan Rongen
	Afstudeerstudent Communication & Multimedia Design,
	minor Intelligent Environments, 
	focus op IoT-design en design-ethiek.
		
	Onder begeleiding van: Harold Konickx
	In opdracht van: Healthy Workers
	Onder supervisie van: Niels de Keizer & Boy Lokhoff

Volg de progressie op [daanrongen.github.io/delta](https://daanrongen.github.io/delta/) en lees de [design brief](img/design-brief-compressed.pdf) voor het volledige literatuuronderzoek en ontwerpproces.

![Huidige productoplossing Delta](docs/img/delta-header.png)

---

<div align="center">
<a href="https://github.com/daanrongen/delta/blob/master/library/design-brief.md">design-brief</a> || <a href="https://github.com/daanrongen/delta/blob/master/library/design-rationale.md">design-rationale</a> || <a href="https://github.com/daanrongen/delta/blob/master/library/literatuuronderzoek.md">literatuuronderzoek</a> || <a href="https://github.com/daanrongen/delta/blob/master/library/veldonderzoek.md">veldonderzoek</a>
</div>

---


## Inhoud
* [To Do List](#to-do-list)
* [Introductie](#introductie)
* [Ontwerpvraag](#ontwerpvraag)
* [Planning en Deliverables](#planning-en-deliverables)

## To Do List
- [x] Design Brief:
	- [x] Update oplossingsrichting Design Brief
	- [x] Update literatuuronderzoek Design Brief
	- [x] Update conceptschetsen Design Brief
- [x] README:
	- [x] Update Introduction met nieuwe bevindingen
- [x] GitHub Pages:
	- [x] Update Design Challenge
	- [x] Update oplossingsrichting
	- [x] Social Media Preview Cards
- [x] Literatuuronderzoek:
	- [x] Uitschrijven interview Mariska van der Kaa
- [ ] Feedback Frenzy:
	- [x] Inventarisatie Poster Feedback Frenzy
	- [ ] Poster Feedback Frenzy (Design)
- [ ] Prototype:
	- [x] Node Server
	- [x] Database Users
	- [ ] Database FSR Data
	- [ ] Arduino FSR
	- [ ] Web App Frontend
	- [ ] Buoy

## Introductie
In Nederland werken ruim 2.3 miljoen mensen in een kantooromgeving (Stijnenbosch, 2015). Dat is bijna eenderde van de complete beroepsbevolking van Nederland (CBS, 2015). Het percentage Nederlanders dat in een kantooromgeving werkt zal naar schatting blijven stijgen, dit komt voornamelijk door de sterke groei van de diensten-economie. Alhoewel het ziekteverzuim van de gemiddelde Nederlandse kantoormedewerker lager ligt dan bij andere sectoren, is het alsnog niet de meest gezonde werkomgeving om langdurig in te werken. Sterker nog, de kantoortuin is funest voor de gezondheid (van Agteren, 2018). Het interieur van de kantooromgeving is ontworpen om kantoormedewerkers zo efficiënt mogelijk werk te laten verrichten. Een comfortabele bureaustoel waarin uren geconcentreerd gewerkt kan worden, een bureau met een computer en alle andere voorzieningen die benodigd zijn voor het werk, dat is de werkplek van een kantoormedewerker. Deze werkwijze is lucratief voor het bedrijf. De werknemer komt echter aan steeds minder fysieke activiteit toe, dit resulteert in gezondheidsproblemen (Pandey, Usman, & Sushil, 2016).

MKB heeft in samenwerking met Menzis een ‘bedrijfs-gezondheidscheck’ ontwikkeld en laat deze afleggen bij talloze bedrijven. Het doel van de check is om alle bedrijven te laten streven naar gezond en fit personeel en aan te moedigen om te investeren in de gezondheid van de werknemers. Voor de directie van deze bedrijven is het namelijk een win-win om hun personeel zo gezond mogelijk te houden: een toename in productiviteit en een afname in ziekteverzuim. Naast de bedrijfsgezondheidscheck maakt MKB namelijk ook berekeningen hoeveel een zieke werknemer kost per dag voor het bedrijf. Bij hun berekeningen staat het gemiddelde op €410 per dag per zieke werknemer (Klees, 2017). Al met al is het dus bijzonder lucratief om te investeren in welzijn. Het probleem is echter dat gezondheid complex is en niet opgelost kan worden met *quick fix*-interventies.

De gemiddelde kantoormedewerker zit 10,1 uur op een dag (RIVM, 2015). Op een werkdag spendeert de kantoormedewerker 77,0% van de tijd zittend terwijl dit op een niet-werkdag 63,1% is (Thorp et al, 2012). Dit bevestigt de zitcultuur die heerst op kantoren. Te lang in een ergonomisch-onverantwoorde zithouding zitten draagt bij aan de ontwikkeling van musculoskeletal disorders (Middlesworth, n.d). Fysieke inactiviteit op de lange termijn draagt bij aan de ontwikkeling van hart- en vaatziekten (Morris, 1958). Valt de "zit-epidemie", zoals het wordt genoemd, op te lossen met *quick fixes* zoals het zit-sta-bureau en de zitbal? Of ligt de oplossing in een gedragsverandering van het personeelsbestand om een ergonomisch-verantwoordelijke werkhouding aan te leren?

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

## Planning en Deliverables
![planning](docs/img/delta-planning.png)