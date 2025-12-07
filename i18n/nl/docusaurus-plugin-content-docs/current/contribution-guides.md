---
id: contribution-guides
title: Gidsen Proces
description: "Ontdek hoe je waardevolle, originele gidsen kunt bijdragen aan ZAP-Docs en gebruikers helpt met duidelijke, praktische content → Leer nu meer"
sidebar_label: Gidsen Proces
---

![Gidsen Banner](https://screensaver01.zap-hosting.com/index.php/s/4aaqq3zctZFW4JJ/preview)

Lees hier meer over het proces om bij te dragen aan onze ZAP-Docs. Het proces is chronologisch beschreven op deze pagina, dus we raden aan hier te beginnen.

## Stap 1: Content Voorstellen

Het eerste deel van het proces is het aanmaken van een suggestie-issue via onze GitHub-repository. Je moet ons details geven over de veranderingen en verbeteringen die je wilt maken.

Zorg ervoor dat je idee geen duplicaat is van een bestaande gids of suggestie en dat je er echt van overtuigd bent dat het nuttig zal zijn voor beginners of gevorderde gebruikers. Je kunt bestaande suggesties bekijken op de [Issues Pagina](https://github.com/zaphosting/docs/issues?q=is%3Aissue).

:::tip
We raden aan onze [Richtlijnen](contribution-guides-guidelines.md) door te nemen om te begrijpen welke content en documentatiestijl we nastreven.
:::

### Naar welke onderwerpen zijn we op zoek?

In onze gidsen zoeken we naar een breed scala aan praktische en kwalitatieve gidsen over producten, diensten en open-source software die beschikbaar is via ZAP-Hosting of gerelateerd is aan onze services. Heb je inspiratie nodig? Check dan onze pagina’s binnen ZAP-Docs om een gevoel te krijgen voor onze schrijfstijl en het soort content dat we publiceren.

Zoals in de intro genoemd, moet alle content origineel zijn om te voldoen aan auteursrechten. Ongeautoriseerd gebruik van AI/generatieve tools en/of andere intellectuele eigendommen is strikt verboden. Onze gidsen bieden hoogwaardige informatie in stappen, zodat de lezer begrijpt wat ze doen en hoe, met als doel de lezer te onderwijzen en een oplossing te bieden.

#### Gewenste Gidsen Lijst

We hebben hieronder een handige lijst met toffe suggesties voor nieuwe gidsen die je misschien wilt schrijven. Sommige onderwerpen kunnen zelfs een extra beloning opleveren. Je kunt de [lijst handmatig hier bekijken](https://docs.google.com/document/d/13R321FP6Yo3TMQZ07vMARQFlX6n_Or6RIrLpU7IsMfs/edit?usp=sharing).

<iframe width="800" height="750" src="https://docs.google.com/document/d/e/2PACX-1vRACoNJMjk3rcWyo6LDt8WCvtqB17JpdjsPW3YHpLaZJgfPxGlt4pDEnD1ezOwGW1eljWZYPSyfgrb3/pub?embedded=true"></iframe>
<br></br>

:::note
Dit zijn alleen handige ideeën, je **hoeft niet** strikt over deze onderwerpen te schrijven, je gids-suggesties mogen creatief zijn zoals eerder genoemd.
:::

### Suggestie Indienen

Als je zeker weet dat je suggestie geschikt is voor onze documentatie, ga dan naar onze [ZAP Docs GitHub repository](https://github.com/zaphosting/docs) en open een issue met de **Contribution Suggestion** template. Volg de template en vul alle benodigde details in. Je wordt ook gevraagd te bevestigen dat je akkoord gaat met onze Algemene Voorwaarden voor het Bijdrageprogramma, te vinden via [Contribution Terms](contribution-terms.md).

:::caution
Zorg dat je je ZAP ID correct invult, zodat je beloning naar het juiste account wordt gestuurd!
:::

Na het indienen van je suggestie streven we ernaar binnen 3-5 dagen te reageren. Je ontvangt een antwoord direct in je GitHub issue.

:::tip
**Problemen?** Join onze [ZAP-Hosting Discord Server](https://zap-hosting.com/discord), waar wij en de ZAP Community je graag helpen. Of neem contact op via een [Ticket op onze website](https://zap-hosting.com/en/customer/support/) en vermeld "Contribution Program - Guides" in je bericht zodat het bij het ZAP-Hosting Contributions Team terechtkomt.
:::

In onze reactie geven we feedback of details die we willen aanpassen aan je suggestie. Bij problemen nemen we direct contact met je op via je GitHub issue.

## Stap 2: De Gids Schrijven

Bij toevoegingen of wijzigingen aan onze documentatie, volg altijd onze [Richtlijnen](contribution-guides-guidelines.md) voor consistentie en kwaliteit. In deze sectie duiken we in best practices en de beste workflow voor het maken van nieuwe content en het aanpassen van bestaande content. Ben je nieuw met GitHub? Gebruik dan de korte tutorials hieronder om te leren hoe je makkelijk content kunt bewerken of aanmaken voor ZAP-Docs.

:::note
Zorg dat je eerst een suggestie hebt ingediend en dat deze is goedgekeurd door een lid van het ZAP Contribution Team voordat je aan een nieuwe gids of wijziging werkt. Zonder goedkeuring kunnen we geen beloning garanderen.
:::

**Vereisten:**
- [GitHub Account](https://github.com/)

De eerste stap is het maken van een eigen fork van de ZAP-Docs repository op GitHub. Ga naar de [ZAP Docs GitHub repository](https://github.com/zaphosting/docs) en klik op de **Fork** knop bovenaan de pagina.

![](https://screensaver01.zap-hosting.com/index.php/s/3AGoSTE7dGTsdz7/preview)

Noem de repository passend bij de geaccepteerde suggestie en vink `Copy the master branch only` aan. Klik daarna op create en wacht een paar seconden tot het geforkt is.

Met je eigen fork klaar, kun je verder naar de volgende sectie om je bijdrage af te ronden. Er zijn twee hoofdmethodes om content te maken: direct via de GitHub website of lokaal klonen van de repository. De eerste is gebruiksvriendelijker, de tweede geeft je de mogelijkheid om Docusaurus lokaal te testen en live veranderingen te zien.

:::tip
Voor beginners of mensen zonder veel Git-ervaring raden we **Methode 1** aan: content schrijven via de GitHub website. Dit is sneller, makkelijker en alles gebeurt in je browser zonder lokale setup.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Manieren om Gidsen te Maken

<Tabs>
<TabItem value="direct" label="Methode 1: Direct via GitHub Website" default>

De makkelijkste en aanbevolen manier om content te maken is via de GitHub website. Hier laten we zien hoe je een nieuwe gids maakt en een bestaande gids bewerkt via GitHub.

Ga naar de fork die je in de vorige stap hebt gemaakt. In je ZAP Docs fork vind je alle documentatie in de **docs** map.

![](https://screensaver01.zap-hosting.com/index.php/s/dqptZFrSTrBBHAJ/preview)

De documentatiebestanden hebben een simpele naamgeving: het eerste woord verwijst naar het type gids, meestal een game, product of sectie, en de volgende woorden naar het specifieke onderwerp. We raden aan onze live [ZAP-Docs Website](https://zap-hosting.com/guides) te bekijken om te zien waar een gids thuishoort. Bijvoorbeeld, `dedicated-windows.md` hoort bij de Dedicated Server sectie, specifiek voor Windows OS.

Je opent nu een bestaand gidsbestand of maakt een nieuw bestand aan, afhankelijk van of je een gids update of een nieuwe maakt. Gebruik het juiste tabblad hieronder voor instructies, want een nieuwe gids vereist wat extra voorbereiding.

<Tabs>
<TabItem value="direct_new" label="Nieuwe gids aanmaken" default>

In dit voorbeeld was de suggestie om een nieuwe gids te maken voor de game Rust, specifiek over de commands die het spel biedt. Op de ZAP-Docs website en in de repo zien we dat er al een **Rust** sectie is onder game servers. Volgens de naamgevingsconventie en bestaande gidsen noemen we de nieuwe gids `rust-commands.md`.

Ga naar de [GitHub Repository](https://github.com/zaphosting/docs), open de **docs** map en klik rechtsboven op **Add File**. Kies dan **Create new file** om een nieuw tabblad te openen.

![](https://screensaver01.zap-hosting.com/index.php/s/xgL3QF9HzJnwARA/preview)

Bovenaan in het pad kun je de bestandsnaam instellen, in ons voorbeeld `rust-commands.md`.

:::info
Zorg dat je de `.md` extensie toevoegt, want alle gidsen zijn in Markdown-formaat.
:::

Vervolgens voeg je belangrijke metadata toe bovenaan het bestand. De makkelijkste manier is een ander bestand zoals `rust-plugins.md` te openen en de metadata te kopiëren. Pas daarna de waarden aan voor je nieuwe gids, vooral het `id` veld dat **moet** overeenkomen met je bestandsnaam (zonder `.md`).

In ons voorbeeld ziet dat er zo uit:
```
---
id: rust-commands
title: "Rust: Admin Commands"
description: "Informatie over Admin commands voor Rust van ZAP-Hosting"
sidebar_label: Admin Commands
services:
  - gameserver
---
```

:::note
We checken de metadata tijdens de review, dus maak je geen zorgen als het niet perfect is, ga gewoon door.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/2CJFHoc5LeD4YSn/preview)

</TabItem>

<TabItem value="direct_existing" label="Bestaande gids bewerken" default>

Open het bestand dat je wilt aanpassen. Bijvoorbeeld `dedicated-linux-satisfactory.md` in de `/docs` map. Je ziet een ruwe preview van de Markdown.

Klik rechtsboven op het potlood-icoon om het bestand te bewerken. Er opent een nieuw tabblad waarin je direct kunt aanpassen.

![](https://screensaver01.zap-hosting.com/index.php/s/SZTsAikipzCZcg3/preview)

</TabItem>
</Tabs>

#### Verder: Content Maken

Nu je bestand klaar is, kun je de afgesproken content schrijven. We raden aan regelmatig op te slaan of te committen om verlies van werk te voorkomen.

:::tip Werk Veilig
GitHub’s editor heeft geen autosave, dus commit regelmatig of maak backups. We raden aan om je content eerst te schrijven in de Markdown tool **[StackEdit](https://stackedit.io/app#)**. Zo sla je lokaal op en kun je zelfs synchroniseren met je drive of accounts. Daarna kopieer je de content naar GitHub en commit je.
:::

Gebruik de **Preview** knop bovenaan om te schakelen tussen bewerken en preview.

![](https://screensaver01.zap-hosting.com/index.php/s/4YcQo6q3iAAGYkZ/preview)

:::note Docusaurus Elementen
Sommige Docusaurus-specifieke elementen zoals admonities (`:::note`, `:::tip` etc.) of tabs worden niet goed weergegeven in GitHub preview, omdat het geen standaard Markdown is. Ze werken wel lokaal en in productie.
:::

:::info Volg onze Richtlijnen
Check de [Richtlijnen](contribution-guides-guidelines.md) voor alles over Markdown, structuur, terminologie en meer.
:::

Als je klaar bent, klik op **Commit changes...** en vul een duidelijke commit message in die uitlegt wat je hebt gedaan. Commit daarna je wijzigingen naar je fork. Ga daarna naar de sectie **Content Indienen** om een Pull Request te maken en je content in te sturen naar de hoofd ZAP-Docs repository.

</TabItem>

<TabItem value="local" label="Methode 2: Lokaal via IDE (git cloning)">

Je kunt er ook voor kiezen om lokaal te werken via een IDE of editor zoals Visual Studio Code. Hier leggen we uit hoe je een nieuwe gids maakt en een bestaande gids lokaal bewerkt.

**Vereisten:**
- IDE naar keuze, wij gebruiken [Visual Studio Code](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com/) of een andere Git-client

Eerst clone je je fork. De makkelijkste manier is via GitHub Desktop: klik op **Add**, dan **Clone repository** en kies je fork. Je kunt ook direct in je IDE clonen als die Git ondersteunt.

![](https://screensaver01.zap-hosting.com/index.php/s/g8AwEcGa6mBrQ75/preview)

Open daarna de repository map in Visual Studio Code. In de linker tab **Explorer** zie je alle mappen.

De documentatiebestanden hebben een simpele naamgeving: het eerste woord verwijst naar het type gids, meestal een game, product of sectie, en de volgende woorden naar het specifieke onderwerp. We raden aan onze live [ZAP-Docs Website](https://zap-hosting.com/guides) te bekijken om te zien waar een gids thuishoort. Bijvoorbeeld, `dedicated-windows.md` hoort bij de Dedicated Server sectie, specifiek voor Windows OS.

Je opent nu een bestaand gidsbestand of maakt een nieuw bestand aan, afhankelijk van of je een gids update of een nieuwe maakt. Gebruik het juiste tabblad hieronder voor instructies, want een nieuwe gids vereist wat extra voorbereiding.

<Tabs>
<TabItem value="local_new" label="Nieuwe gids aanmaken" default>

In dit voorbeeld was de suggestie om een nieuwe gids te maken voor de game Rust, specifiek over de commands die het spel biedt. Op de ZAP-Docs website en in de repo zien we dat er al een **Rust** sectie is onder game servers. Volgens de naamgevingsconventie en bestaande gidsen noemen we de nieuwe gids `rust-commands.md`.

Open de `/docs` map in je IDE en maak een nieuw bestand aan met de juiste naam.

:::info
Zorg dat je de `.md` extensie toevoegt, want alle gidsen zijn in Markdown-formaat.
:::

Voeg bovenaan het bestand belangrijke metadata toe. Kopieer dit bijvoorbeeld uit `rust-plugins.md` en pas aan. Het `id` veld moet overeenkomen met je bestandsnaam (zonder `.md`).

Voorbeeld:
```
---
id: rust-commands
title: "Rust: Admin Commands"
description: "Informatie over Admin commands voor Rust van ZAP-Hosting"
sidebar_label: Admin Commands
services:
  - gameserver
---
```

:::note
We checken de metadata tijdens de review, dus maak je geen zorgen als het niet perfect is, ga gewoon door.
:::

De laatste stap om je nieuwe pagina in de sidebar van Docusaurus te krijgen, is toevoegen aan het `sidebar.js` bestand in de juiste sectie. Omdat de **Rust** sectie al bestaat, zoek je die op met `CTRL+F` en zoek op rust.

Voeg onder het laatste item een nieuwe regel toe met de naam van je bestand, in ons voorbeeld `rust-commands`. Als er nog geen passende sectie is, kun je een nieuwe sectie toevoegen volgens het format van andere secties.

![](https://screensaver01.zap-hosting.com/index.php/s/TwKjWmCofG5Rs8f/preview)

:::note
Zorg dat je een komma (`,`) zet op de regel vóór je nieuwe regel, zodat de syntax klopt.
:::

</TabItem>

<TabItem value="local_existing" label="Bestaande gids bewerken" default>

Een bestaand bestand bewerken is simpel, je hoeft de structuur niet opnieuw op te zetten.

Open het gidsbestand dat je wilt aanpassen in de `/docs` map en pas het aan volgens je geaccepteerde suggestie.

</TabItem>
</Tabs>

#### Verder: Content Maken

Nu je bestand klaar is, kun je de afgesproken content schrijven. We raden aan regelmatig op te slaan of te committen om verlies van werk te voorkomen.

Gebruik `CTRL+SHIFT+V` of klik op het preview-icoon rechtsboven in de editor om een split view te openen waarin je live ziet wat je aanpast.

:::note Docusaurus Elementen
Sommige Docusaurus-specifieke elementen zoals admonities (`:::note`, `:::tip` etc.) of tabs worden niet goed weergegeven in GitHub preview, omdat het geen standaard Markdown is. Ze werken wel lokaal en in productie.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cXgQEswNsbpGMsR/preview)

:::info Volg onze Richtlijnen
Check de [Richtlijnen](contribution-guides-guidelines.md) voor alles over Markdown, structuur, terminologie en meer.
:::

Als je klaar bent, push je een commit naar je fork en maak je een Pull Request aan. Dit kan via GitHub Desktop of een andere Git-client door een titel en beschrijving toe te voegen en te pushen.

![](https://screensaver01.zap-hosting.com/index.php/s/tFdrLknnXn62sZc/preview)

Ga daarna naar de sectie **Content Indienen** om je Pull Request in te dienen bij de hoofd ZAP-Docs repository.

:::tip
We raden aan ook de optionele sectie **Lokaal build testen** te lezen. Zo kun je je workflow optimaliseren door je wijzigingen live lokaal te testen. Dit is niet verplicht.
:::

</TabItem>
</Tabs>

### Optioneel: Lokaal build testen

Voordat je de definitieve Pull Request maakt, is het vaak handig om lokaal te bouwen en testen of alles werkt met je wijzigingen. Dit versnelt de verwerking van je Pull Request. Het is niet verplicht, je kunt ook direct door naar de volgende sectie.

:::tip
Dit is **NIET** verplicht, want we draaien automatisch een build bij het indienen van een Pull Request. Maar lokaal testen kan handig zijn om te debuggen en live te testen.
:::

:::note
Als je de tutorial hebt gevolgd om lokaal te werken, kun je de eerste stap (repository clonen) overslaan, want die heb je al.
:::

**Vereisten:**
- [Node.js v16.14 of hoger](https://nodejs.org/en)
- [GitHub Desktop](https://desktop.github.com/) of [Git](https://git-scm.com/)

Clone je fork via GitHub Desktop of Git (zie stap 2). Maak een nieuwe map aan, bijvoorbeeld `Docs Test`. Open Git Bash in die map en voer uit:
```
git clone [your_url]
```
Vervang `[your_url]` door de URL van je fork.

Ga naar de map van je repo, open een terminal en voer uit:
```
npm install
```
Dit installeert alle benodigde modules. Als je fouten krijgt, heb je waarschijnlijk Node.js niet geïnstalleerd.

Start de docs site lokaal met:
```
npm start
```
Er opent automatisch een lokale versie van de website in je browser op poort 3000. Dit is precies hoe de docs er in productie uitzien, hier kun je alles testen!

Ben je tevreden? Ga dan door naar de volgende sectie om je Pull Request te maken.

## Stap 3: Content Indienen

Als je bijdrage volgens onze richtlijnen is en van hoge kwaliteit, kun je een Pull Request maken. Ga naar je fork van de ZAP Docs repository, klik op **Contribute** onder de hoofdknoppen en open een pull request.

![](https://screensaver01.zap-hosting.com/index.php/s/GLjSno3Ltz3zFpZ/preview)

Er opent een pagina waar je je wijzigingen ziet. Standaard staat er een checklist in de beschrijving om te checken of alles klopt. Je mag deze verwijderen als je hem hebt bekeken.

Geef een duidelijke titel die uitlegt wat je hebt gedaan. Vermeld in de beschrijving je suggestie door `#000` te gebruiken met het ID van je suggestie. Als je het niet via het menu vindt, ga dan naar de hoofd [ZAP Docs GitHub repository](https://github.com/zaphosting/docs), kijk bij issues en zoek je suggestie met het ID.

Als titel, beschrijving en wijzigingen kloppen, maak je de pull request aan om deze in te dienen bij onze repository.

![](https://screensaver01.zap-hosting.com/index.php/s/mrGm5f2WMttYzFT/preview)

Ons systeem checkt syntax en kwaliteit. Als dat goed gaat, wordt je Pull Request binnen een paar dagen door het ZAP-Docs team beoordeeld.

Tijdens de review kunnen we je vragen om aanpassingen te doen. We kunnen ook zelf wijzigingen maken waar nodig. Als alles klaar is, keuren we je wijziging goed zodat die gepubliceerd kan worden.

## Stap 4: Gidswijzigingen publiceren & beloning

Als we je Pull Request accepteren na eventuele aanpassingen, laten we je dat weten via je Pull Request. We geven info over het publiceren van je gids en je beloning voor het succesvol afronden van je bijdrage.

:::info
De beloning hangt af van verschillende factoren, vooral de kwaliteit en omvang van je content, en andere criteria die het ZAP Contribution Team beoordeelt. Lees meer over onze criteria in [Beloningen](contribution-rewards.md).
:::

Gefeliciteerd met je bijdrage aan onze ZAP-Hosting Gidsen! We waarderen al je inzet! 💚