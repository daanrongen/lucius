# Design Rationale

	Daan Rongen
	Afstudeerstudent Communication & Multimedia Design,
	minor Intelligent Environments, 
	focus op IoT-design en design-ethiek.
		
	Onder begeleiding van: Harold Konickx
	In opdracht van: Healthy Workers
	Onder supervisie van: Niels de Keizer & Boy Lokhoff

---

<div align="center">
<a href="https://github.com/daanrongen/delta/blob/master/library//design-brief.md">design-brief</a> || <a href="https://github.com/daanrongen/delta/blob/master/library/design-rationale.md">design-rationale</a> || <a href="https://github.com/daanrongen/delta/blob/master/library/literatuuronderzoek.md">literatuuronderzoek</a> || <a href="https://github.com/daanrongen/delta/blob/master/library/veldonderzoek.md">veldonderzoek</a>
</div>

---

In de **design rationale** beschrijf ik de belangrijkste (ontwerp)keuzes en beslissingen die ik heb genomen gedurende het ontwerpproces van mijn afstudeerproject.

{{TOC}}

## Introductie
Lorem ipsum

## Job Stories
Alan Klement uitte zijn kritiek op de *User Stories*-methode die tot op heden vaak werd gebruikt door UX-ontwerpers op een inventarisatie van eisen te maken. User Stories zijn te vaag en bestaan uit te veel assumpties.

Een User Story ziet er als volgt uit:
> "As a (*persona*), I want to (*action*), So that (*expected outcome*)"

Alan Klement stelde een alternatief voor: de Job Story. Deze zou er als volgt uit zien:
> "When (*situation*), I want to (*motivation*), So I can (*expected outcome*)"

Om dus een inventarisatie te maken van de wensen van full-time kantoormedewerkers omtrent een ergonomische interventie heb ik de volgende reeks aan job stories opgesteld:
1. Wanneer ik lange werkdagen maak op kantoor, wil ik inzichten krijgen in mijn zitgedrag, zodat ik aan het einde van de dag kan zien of mijn fysieke activiteit voldoende is geweest.
2. Wanneer ik geconcentreerd aan het werk ben en niet bewust ben van mijn ergonomisch-onverantwoorde zitgedrag, wil ik *ubiquitous* hierop geattendeerd worden, zodat ik op tijd mijn zitgedrag kan verbeteren.
3. Wanneer ik voor een langere periode mijn zitgedrag heb gemeten, wil ik mijn metingen over een langere periode bekijken, zodat ik kan zien of ik beter zitgedrag aanleer.

## Productvisie

### Wat weet ik tot nu toe?
Door het literatuur- en veldonderzoek weet ik dat het comfort van de fysieke werkomgeving essentieel is voor het welzijn van de kantoormedewerker. Kantoormedewerkers ontwikkelen op den duur mentale problemen door stress en lichamelijke klachten door hun zitgedrag. Om inzicht te krijgen in het comfort van de werkomgeving dienen er ergonomische en omgevingsmetingen verricht te worden. Het is van groot belang dat kantoormedewerkers aan veel beweging toekomen terwijl ze werken, ergonomisch zitten is goed maar dynamisch zitten is immers beter. Een stoel waarbij van nature al in een ergonomisch-verantwoorde zithouding aangenomen wordt zou ideaal zijn. Het belang is echter dat kantoormedewerkers inzicht kunnen krijgen in hun sedentary movement: de hoeveelheid beweging die tijdens het zitten plaatsvindt.

Wat betreft de omgevingsmetingen, weet ik ook dat elke kantoormedewerker andere standaarden van comfort heeft. Om inzicht te krijgen dit comfort, dienen de omgevingsstressoren individueel geanalyseerd te worden. Kantoor-medewerkers weten bijvoorbeeld wel of ze de temperatuur (te) warm of (te) koud vinden, maar ze hebben moeite met inschatten wat hun gewenste temperatuur zou zijn. Zodra een omgevingsstressor actief is, komen kantoormedewerkers graag in actie om deze tegen te gaan. De actie die ze nemen hangt echter af van of iedereen deze stressor ervaart, of dat het slechts door een kleine groep wordt ervaren. Het management wil graag inzicht in de omgevingsstressoren om te kunnen analyseren welke interventies de grootste toename in welzijn zullen realiseren.

### Huidige oplossingsrichting: Fysiek Component
- Steeds meer kantooromgevingen zijn voorzien van zitballen waar kantoormedewerkers op kunnen werken. Door de ronding in de bal is zitbalans een vereiste, waardoor automatisch een ergonomisc-verantwoorde zithouding aangenomen wordt. Dit remt muskoskeletal disorders.
- Door veel te bewegen tijdens het werk blijft de bloedsomploop optimaal, wat cardiovascular diseases voorkomt. Sommige bedrijven adviseren hun werknemers om regelmatig op te staan en veel te lopen op een dag, maar beweging tijdens het zitten is nog belangrijker. Beweging in de stoel is meetbaar met een gyroscoop en/of accelerometer.
- De stoel zal voorzien worden van sensoren die omgevingsmetingen kunnen verrichten. Denk aan lux-sensoren voor licht, decibel-sensoren voor geluid en temperatuur-, luchtvochtigheid-, tVOC- en CO2-sensoren voor klimaat. Deze sensoren dienen modulair (plug and play) opgebouwd te kunnen worden.
- De stoel moet ook voorzien zijn van sensoren die meten hoeveel tijd er op een dag gezeten wordt, en in hoeverre dit in verlgelijking staat tot staan. Dit kan gemeten worden met een pressure-sensor, of een simpele ‘knop’ in het zitvlak van de stoel, in de web-app kan dit gevisualiseerd worden naar zit-duratie over tijd.
- De “Buoy” van de Enrichers is een kruk die ontworpen is om beweging in de heupen te stimuleren tijdens het zitten. De onderkant van de kruk is een koperen ‘kom’ met een ronde onderkant. Zodra je erop gaat zitten, neem je een ergonomisch-verantwoorde zithouding aan om in balans te blijven. Je zit automatisch met een gestrekte rug en rechte nek. Gelijkertijd merk je dat de heupen de vrijheid hebben om te bewegen, wat de kruk de perfecte kandidaat maakt om zowel muskoskeletal disorders als cardiovascular diseases mee tegen te gaan.

De Buoy van de Enrichers is van origine al een kruk dat perfect in de potentiële oplossing past aangezien het een zeer ergonomisch-verantwoord product is. Deze ergonomische kwaliteit is echter niet meetbaar, noch inzichtelijk. Middels een gyroscoop kan de ‘sedentary movement’ gemeten worden en door een knop in het zitvlak kan de zit-duratie uitgelezen worden. Om omgevingsfactoren te kunnen meten, zal de kruk voorzien worden van een component waarop de sensoren modulair geplaatst kunnen worden. Welzijn in de werkomgeving staat, zoals eerder benoemd in dit document, op fysiologische en psychologische factoren. De werkomgeving moet comfortabel zijn en de werkcultuur dient aangenaam te zijn. In dit ontwerp geven de LED’s een visuele indicatie van het zitgedrag. Het doel is dat de collega’s van de zittende kantoormedewerker hem/haar herinneren even te gaan staan als dat nodig is. Het toont collegialiteit en een ‘menselijke’ nudge is een stuk vriendelijker en meer context-aware dan een computer-notificatie.

### Huidige oplossingsrichting: Web-app
- De web-app is standaard voorzien van persoonlijke ergonomische inzichten. Door sensoren op de Buoy te plaatsen kunnen andere omgevingsfactoren gemeten worden. Metingen kunnen op persoonlijk- en afdelingsniveau bekeken worden.
- In deze visualisatie kunnen kantoormedewerkers hun zitgedrag tijdens de werkdag bekijken. Zodra de medewerker gaat zitten wordt de gyroscoop uitgelezen en analyseert het de *in-chair-movement*, deze worden met kleurconnotaties weergegeven op een klok. Het getal in het midden van de cirkel staat voor het percentage van de tijd waarop de kantoormedewerker heeft gezeten, vergeleken met de gehele werkdag.


<div align="center">
![Huidige Oplossingsrichting, mockup](/images/delta-header.png)
</div>