---
id: contribution-guides-guidelines
title: Richtlijnen voor Gidsen
description: "Ontdek hoe je consistente, hoogwaardige documentatie maakt die de leeservaring en duidelijkheid verbetert → Leer nu meer"
sidebar_label: Richtlijnen
---

![Gidsen Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Om ervoor te zorgen dat de inhoud op onze ZAP-Docs altijd consistent blijft qua kwaliteit en stijl, hebben we een reeks richtlijnen opgesteld die je moet volgen bij het maken of bewerken van documentatie. Je **moet** onze richtlijnen nauwkeurig volgen om ervoor te zorgen dat je suggestie en uiteindelijke pull request snel worden verwerkt. Belangrijker nog, dit zorgt ervoor dat onze lezers een betere en meer consistente hoogwaardige ervaring hebben tijdens het lezen en volgen van de gidsen.

Onze richtlijnen voor bijdragen aan gidsen zijn verdeeld in de volgende secties:

- Structuur
- Stijl
- Opmaak
- Terminologie

We raden aan om deze secties minstens één keer door te nemen voordat je begint met het schrijven van content. Het is ook een handige plek om naar terug te grijpen als je twijfelt over hoe je iets moet aanpakken tijdens het creatieproces.

## Structuur

Al onze gidsen binnen ZAP-Docs volgen een relatief consistente structuur die begint met een korte introductie, inclusief eventuele vereisten of voorbereidingsstappen, gevolgd door de hoofdinhoud en een korte conclusie.

De structuur kan af en toe aangepast worden, afhankelijk van het type gids dat wordt gemaakt. Dit kan besproken worden met het ZAP-Docs Team in je eerste suggestie. Je kunt zien hoe je koppen gebruikt via de sectie headers; dit gebeurt via traditionele Markdown.

De structuur die we doorgaans verwachten bevat de volgende koppen:

- **Paginatitel** (H1) - Dit wordt ingesteld via de `title` metadata bovenaan de pagina.
- **Introductie** (H2) - Korte 1-2 zinnen die het onderwerp van de gids uitleggen en vooral wat de gids beoogt te bereiken.
- **Voorbereiding** (H2) - Deze kop is **optioneel**. Alleen nodig als er bepaalde vereisten of voorbereidingsstappen zijn die uitgevoerd moeten worden voordat een lezer de gids kan volgen. Bijvoorbeeld, hier kun je verwijzen naar onze [SSH Initial Access](vserver-linux-ssh.md) gids als de gebruiker eerst moet inloggen op zijn server. Of je kunt software- en/of hardwarevereisten noemen. Of je geeft snelle instructies over het voorbereiden van software, zoals een firewall. We raden aan om onze [ZAP-Docs website](https://zap-hosting.com/guides) te doorzoeken om te zien of er al gidsen zijn die deze stappen behandelen en zo ja, link er dan naar.
- **Hoofdonderwerp** (H2) - Dit is je eerste hoofdsectie van de gids. Vaak zal dit **Installatie** zijn, gevolgd door verschillende subsecties voor elk deel van het proces. Maar dit hoeft niet altijd zo te zijn, bijvoorbeeld informatieve gidsen kunnen een ander hoofdonderwerp hebben.
- Optioneel: **Subonderwerp 1** (H3)
- Optioneel: **Subonderwerp 2** (H3)
- ...
- Optioneel: **Een Ander Onderwerp** (H2)
- **Conclusie** (H2) - Als laatste deel van de gids sluit je af in 1-3 zinnen waarin je uitlegt wat de lezer succesvol heeft bereikt en verwijs je naar ons Support Team als de lezer nog problemen ondervindt.

:::info Gebruik van Subkoppen (H3 & H4)
Je wordt aangemoedigd om H3-koppen te gebruiken om subsecties binnen hoofdsecties (H2) te maken, zodat grotere stukken content beter georganiseerd worden. Een voorbeeld zie je bij de **Hoofdonderwerp** sectie hierboven.

Je kunt ook H4-koppen gebruiken. Deze zijn handig als je nog een subsectie wilt maken zonder dat deze in de rechterzijbalk van de gids wordt weergegeven. Ze zijn ook nuttig als je een H3-sectie verder wilt opsplitsen in kleinere delen.

Als je subkoppen gebruikt, is het meestal logisch om minstens twee of meer subkoppen binnen de bovenliggende kop te hebben; anders heeft het meestal geen zin om slechts één subkop binnen een hoofdsectie te hebben.
:::

In de toekomst zullen we templates toevoegen met vooraf voorbereide Markdown, wat een handige startpunt zal zijn voor het maken van nieuwe pagina’s. Dit wordt binnenkort toegevoegd.

### Titels

Titels voor je gids moeten kort zijn en gebaseerd op het algemene doel van de gids die je hebt geschreven. Denk goed na over wat de lezer aan het einde van de gids zal bereiken, bijvoorbeeld het installeren van software of het geven van informatie over een specifiek onderwerp.

De titel moet worden voorafgegaan door de productcategorie waar de gids betrekking op heeft, en dit moet ook de plek zijn waar je de gids in de zijbalk hebt geplaatst. Je kunt makkelijk andere gidsen in dezelfde sectie bekijken om hun prefix te zien.

Een voorbeeld van een goede titel voor een gids over het VPS-product zou zijn: `VPS: SteamCMD Linux Setup`

### Introductie

Introducties voor je gids moeten relatief kort en to the point zijn, meestal 1-2 zinnen. In de inhoud beschrijf je kort het onderwerp en vooral wat de gids de lezer zal presenteren, zodat ze weten wat het einddoel is.

Een voorbeeld van een ideale introductie voor een gids over SteamCMD is:

- **1e zin**: SteamCMD is een essentieel hulpmiddel dat nodig is voor het installeren van dedicated servers voor een breed scala aan games, waaronder Palworld, Enshrouded en meer.
- **2e zin**: In deze gids behandelen we het installatieproces van SteamCMD op je Linux-server. We gebruiken Ubuntu in de voorbeelden, maar het proces is vergelijkbaar voor andere distributies.

Zoals je ziet, vat het kort de relevante onderwerpen samen en presenteert het het algemene doel voor de lezer.

### Voorbereiding

De voorbereidingssectie is handig om eventuele noodzakelijke vereisten te verduidelijken die de lezer moet vervullen voordat hij de gids kan volgen. Dit kan software- of hardwarevereisten zijn, instructies om software zoals een firewall voor te bereiden, of simpelweg de gebruiker begeleiden om in te loggen op zijn server via SSH of RDP.

We raden sterk aan om onze [ZAP-Docs website](https://zap-hosting.com/guides) te doorzoeken naar gidsen die mogelijk de voorbereidingsstappen behandelen die je wilt opnemen. Als er een gids is over een onderwerp, bijvoorbeeld [SSH Initial Access](vserver-linux-ssh.md), link dan naar die gids en informeer de lezer om die eerst te volgen.

Veelvoorkomende vereisten voor gidsen zijn:

- Benodigde software (bijv. Git, Node.js, Python, Docker)
- Tutorials die basiskennis bieden (bijv. een andere ZAP-Docs pagina)
- Gebruikersaccounts zoals API’s
- Vereiste instellingen (bijv. DNS/SSL)

Een voorbeeld voor een Reverse Proxy gids zou zijn:
```
Om een reverse proxy in te stellen heb je een Linux-server nodig om je proxyserver te hosten en moet je verbinding maken. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids als je hulp nodig hebt. Je hebt ook toegang nodig tot een domein dat je bezit. Voor elk subdomein dat je wilt gebruiken, moet je een `A` DNS-record aanmaken dat verwijst naar het IP-adres van je Linux-server.
```

### Hoofdonderwerp

Nu is het tijd om het grootste deel van je gids te schrijven. Je mag gerust verschillende H2, H3 en H4 koppen gebruiken om je gids goed te structureren. Het is logisch om H2 te gebruiken voor grote secties en deze verder op te splitsen in subsecties met H3 en/of H4.

In veel gevallen, vooral bij gidsen die het proces van software-installatie behandelen, gebruik je waarschijnlijk een **Installatie** kop die is opgesplitst in verschillende H3-subsecties. Als je moeite hebt met het vinden van een goede structuur, geen zorgen: we werken met je samen tijdens de suggestiefase om een goed doordachte gidsstructuur te plannen.

Binnen elke sectie is het aan te raden om korte inleidende en afsluitende overgangszinnen toe te voegen, zodat de lezer altijd weet wat hij tot nu toe heeft gedaan en wat er daarna komt. Dit geldt natuurlijk niet voor de laatste hoofdsectie, die hoeft niet per se een afsluitende zin te hebben, omdat die natuurlijk overloopt in de conclusie.

Voorbeelden van zulke zinnen zijn:

- **Inleidende zin**: In deze sectie doorloop je het configuratieproces om de software naar wens aan te passen.
- **Afsluitende zin**: Met de configuratie klaar en het bestand opgeslagen, ga je naar de volgende sectie om het beheerdersaccount in te stellen en de software te gebruiken.

Deze overgangszinnen geven de lezer belangrijke context en zorgen voor een vloeiende gids. Gebruik altijd de tweede persoon (bijv. "Je maakt") in plaats van de eerste persoon bij het schrijven van je content en overgangen.

### Conclusie

Tot slot is er de conclusie van de gids. Deze sectie sluit de gids af in 1-3 zinnen waarin je uitlegt wat de lezer succesvol heeft bereikt en verwijst naar verdere leesstof of gidsen die ze kunnen volgen om hun kennis uit te breiden.

Het is fijn om hier bestaande ZAP-Docs gidsen te linken, vooral als ze logisch volgen op jouw gids. We raden ook aan om een verwijzing naar ons Support Team te geven als de lezer nog problemen ondervindt.

Een voorbeeld van een goede conclusie is:
```
Je hebt nu succesvol de software ingesteld om te draaien op je Linux-server! We raden aan om onze Linux Service gidsen in deze sectie te bekijken om meer services te installeren.

Voor verdere vragen of hulp, neem gerust contact op met ons supportteam, dat dagelijks voor je klaarstaat! 🙂
```

## Stijl

De schrijfstijl voor de ZAP-Hosting docs is gericht op het maken van hoogwaardige, praktische en makkelijk toegankelijke gidsen die een breed scala aan onderwerpen ondersteunen en lezers van elk ervaringsniveau helpen.

### Technisch & correct

Onze artikelen streven ernaar zo technisch accuraat mogelijk en up-to-date te zijn met de laatste informatie uit de industrie. We verwachten dat artikelen niet alleen de gebruiker helpen het einddoel te bereiken (leren, bouwen of iets opzetten), maar ook dat ze begrijpen wat ze hebben gedaan. Elke stap in een gids moet een duidelijk doel en uitleg hebben, met extra opties en/of flags waar relevant. Je houdt de lezer altijd op de hoogte van wat ze doen en waarom.

Schrijvers moeten hun gidsen altijd proeflezen en testen om te zorgen dat alles technisch klopt en werkt zoals bedoeld voordat ze een pull request indienen. Het ZAP-Hosting docs team leest en test je gids waar nodig om consistentie en feitelijke juistheid te waarborgen, of bespreekt verbeteringen als er fouten zijn.

:::tip
We raden altijd aan om je content door een spellingscontrole te halen voordat je een pull request maakt. Een handige website hiervoor is: https://languagetool.org/
:::

### Praktisch & nuttig

Als een lezer een artikel heeft afgerond, moet hij iets geleerd, gebouwd of opgezet hebben van begin tot eind. Onze gidsen ondersteunen lezers van elk niveau, dus je bijdrage moet het onderwerp volledig behandelen zodat de lezer kennis opdoet en/of iets bereikt. Dit betekent dat je als schrijver je onderwerp grondig behandelt, inclusief alle noodzakelijke details en vereisten. Verwijs alleen naar externe websites als er geen documentatie over het onderwerp op ZAP-Docs is, of als het extra informatie is die niet vereist is maar wel nuttig kan zijn. Externe links mogen niet naar concurrenten verwijzen.

### Vriendelijk, formeel & uitgebreid

We willen dat onze documentatie vooruitstrevend en vriendelijk is, zodat het voor iedereen toegankelijk is, maar toch formeel blijft. Door je gids heen streven we naar een toon die voor alle lezers acceptabel is, ongeacht ervaring of taalbarrières.

Omdat deze gidsen vooral gericht zijn op het ondersteunen van de lezer om iets te leren en een resultaat te bereiken, verwachten we dat schrijvers de tweede persoon gebruiken (bijv. "Je moet...") in plaats van de eerste persoon (bijv. "Ik denk...") om de lezer betrokken te houden en de focus op hen te houden.

Tot slot moeten alle schrijvers zich houden aan onze gedragscode om te zorgen dat onze gidsen iedereen accepteren, ongeacht leeftijd, etniciteit, genderidentiteit, ervaringsniveau, nationaliteit, religie, politieke voorkeur, seksuele geaardheid, sociaaleconomische status of technologische keuzes. Vermijd elke taal of inhoud die mogelijk aanstootgevend is of verwijst naar bovengenoemde onderwerpen.

## Opmaak

Onze documentatie wordt opgemaakt met Markdown, een veelgebruikte en relatief eenvoudige opmaaktaal. Bekijk de onderstaande secties om te begrijpen welke elementen we gebruiken en hoe.

:::tip
Voor meer voorbeelden en uitgebreide uitleg over Markdown, ga naar [Markdown Guide](https://www.markdownguide.org/cheat-sheet/) voor extra info.
:::

### Koppen

Koppen zijn een van de belangrijkste opmaakopties om pagina’s logisch en overzichtelijk te scheiden. De hoofdtitel is een H1-kop, maar die gebruik je nooit in de tekst zelf. Die wordt ingesteld via de `title` metadata bovenaan het gidsbestand.

In onze gidsen gebruik je H2-koppen om de gids in hoofdsecties te splitsen. Daarna gebruik je H3-koppen om die hoofdsecties op te splitsen in subsecties. Een voorbeeld is het opdelen van een hoofdsectie in meerdere stappen om het volgen makkelijker te maken. Er is ook een H4-kop, die minder vaak gebruikt wordt, maar hetzelfde doel dient om verder op te splitsen zonder dat het in de gidsstructuur verschijnt.

:::info
Als je subkoppen gebruikt (bijv. H3 onder H2), zorg dan dat er twee of meer koppen van hetzelfde niveau in die sectie zijn, anders is het verkeerd gebruik.
:::

Hier een snel voorbeeld van koppen:

```
## Installatie
H2 - Hoofdsectie

### Gamebestanden downloaden
H3 - Subsectie van H2

#### Via SteamCMD
H4 - Subsectie van H3

#### Handmatig via GitHub
H4 - Subsectie van H3

### Configuratie voorbereiden
H3 - Subsectie van H2

### Server starten
H3 - Subsectie van H2
```

### Inline markdown

We gebruiken verschillende inline opmaak om de leesbaarheid te verbeteren en aan te sluiten bij lezers met uiteenlopende technische kennis. Hieronder de uitleg per type.

#### Vetgedrukte tekst

Vetgedrukte tekst gebruik je vooral om informatie te benadrukken. Bijvoorbeeld:

- Contextwisselingen tussen stappen
- Hostnamen, inloggegevens & gebruikersnamen
- Belangrijke termen

Je maakt tekst vet door er dubbele sterretjes omheen te zetten, bijvoorbeeld `**hallo daar**` wordt **hallo daar**.

#### Cursief

Cursief gebruik je vooral om nieuwe technische termen te introduceren. Bijvoorbeeld: we gaan vandaag een *reverse proxy* opzetten.

Je maakt tekst cursief door er één sterretje omheen te zetten, bijvoorbeeld `*ZAP-Hosting - Meer POWER!*` wordt *ZAP-Hosting - Meer Power!*.

#### Inline code

Inline code gebruik je om technische info te tonen zoals URL’s. Voorbeelden:

- Bestandsnamen en paden (bijv. `C:/User/[your_name]/AppData....test.png`)
- URL’s (bijv. `https://zap-hosting.com`)
- Poorten (bijv. `:30120`)
- Commando’s (bijv. `ipconfig`)
- SQL-queries (bijv. `SELECT * FROM servers`)
- Toetscombinaties (bijv. `ENTER` of `CTRL + C`)

#### Tabellen

Tabellen zijn handig om veel herhalende info overzichtelijk te tonen, bijvoorbeeld commando’s, beschrijvingen en gebruik binnen een game. Voorbeeld:

```
| Commando    | Beschrijving            | Gebruik               |
| ----------- | ----------------------- | --------------------- |
| /help       | Stuurt help-commando    | /help [categorie]     |
| /stop       | Stopt de server         | /stop [true/false]    |
```

#### Codeblokken

Codeblokken zijn erg handig voor gidsen met commando’s, scripts, terminaloutput en meer.

Je maakt een codeblok door drie backticks te gebruiken ``` rondom de tekst. Je kunt ook de programmeertaal aangeven na de eerste drie backticks voor syntax highlighting. Bijvoorbeeld:

```js
function hello(name) {
    console.log(name)
}

var server = "ZAP-Hosting"
hello(server)
```

### Gebruik van admonities

Je kunt admonities gebruiken om bepaalde info te benadrukken met één van de 5 labels hieronder.

De syntax is hetzelfde, je vervangt alleen het keyword door het type. Voorbeeld:

```
:::note
Dit is een notitie! Vervang het keyword om het type te veranderen.
:::
```

#### Notitie

:::note Notitie Titel! (Optioneel)
Gebruik deze tag voor extra notities die nuttig kunnen zijn maar niet direct belangrijk zijn.
:::

#### Tip

:::tip Tip Titel! (Optioneel)
Plaats hier tips uit ervaring.
:::

#### Info

:::info Info Titel! (Optioneel)
Belangrijke info die de gebruiker moet weten, plaats je hier.
:::

#### Waarschuwing

:::caution Waarschuwing Titel! (Optioneel)
Is er iets waar de gebruiker op moet letten of voorzichtig mee moet zijn? Gebruik deze tag.
:::

#### Gevaar

:::danger Gevaar Titel! (Optioneel)
Gebruik deze voor cruciale info, zoals bekende bugs of verouderde features.
:::

### Screenshots

Screenshots zijn superhandig om lezers visueel door stappen te leiden en we raden aan ze te gebruiken waar passend.

Voor de Duitse sectie verwachten we dat je bij screenshots zowel een Engelse als Duitse versie toevoegt, zodat ze consistent zijn. Je kunt ze naast elkaar plaatsen in je gids. De Duitse screenshots worden verwijderd en gebruikt zodra het ZAP-Docs team je artikel vertaalt.

Gebruik deze syntax om een screenshot toe te voegen, vervang `your_url` door de URL van de afbeelding:
```
![](your_url)
```

Het beste is om een site als Imgur te gebruiken om je afbeelding te uploaden, of je kunt het direct in het bewerkingsveld slepen als je via GitHub werkt, dan wordt het automatisch geüpload.

## Terminologie

In onze documentatie gebruiken we veel belangrijke termen. We verwachten dat je US-Engelse spelling gebruikt voor consistentie in al onze artikelen. Hieronder standaardiseren we enkele veelgebruikte termen.

### ZAP-Hosting producten

Als je een ZAP-Hosting product noemt, zorg dan dat je de juiste naam, spelling en hoofdletters gebruikt. Check dit op [de ZAP-Hosting website](https://zap-hosting.com) bij het betreffende product.

### Door gebruiker gedefinieerde attributen

In de meeste gidsen zul je configuratie-opties tegenkomen voor gebruikers, hostnamen, domeinen, IP-adressen en URL’s, waarbij de lezer zijn eigen gegevens moet invullen in plaats van onze placeholders.

Gebruik standaard altijd `[your_attribute]` om statische elementen te onderscheiden van unieke elementen, waarbij `attribute` vervangen wordt door het type attribuut. Bijvoorbeeld, bij een IP-adres schrijf je `[your_server_ip]` of bij een URL `http://[your_server_ip]:30120`. Dit maakt duidelijk welke gegevens de lezer moet aanpassen. Geef ook een uitleg of opmerking bij de eerste vermelding zodat alles duidelijk is.

Gebruik `zaphosting` als standaard hostname, gebruikersnaam of databasenaam.

### Software

Als je software noemt in je gidsen, zorg dan dat je de juiste spelling en hoofdletters gebruikt. Als de softwarewebsite inconsistent is in hoofdletters, zorg dan dat je binnen één artikel consistent bent.

Link bij de eerste vermelding naar de officiële website van de software, als die beschikbaar is.