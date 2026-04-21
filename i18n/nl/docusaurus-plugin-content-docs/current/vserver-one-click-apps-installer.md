---
id: vserver-one-click-apps-installer
title: "VPS: One Click Apps Installer"
description: "Deploy apps met de VPS One Click Apps Installer, beheer projecten via de webinterface en gebruik Coolify voor geavanceerd appbeheer -> Leer nu meer"
sidebar_label: One Click App Installer
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Met de One Click Apps Installer blader je door een uitgebreide app-catalogus en zet je apps direct vanuit je VPS-webinterface live. In deze gids leer je hoe je je server voorbereidt, het juiste installatie-type kiest, apps installeert en beheert, en geavanceerde instellingen en troubleshooting-tools gebruikt wanneer nodig.

![img](https://screensaver01.zap-hosting.com/index.php/s/GDwkwA8Mi4gHS7D/preview)

<InlineVoucher />

## Voorbereiding

Voordat je de One Click Apps Installer gebruikt, moet je VPS aan de minimale eisen voldoen en een ondersteund besturingssysteem draaien.

:::info Minimale Vereisten
De apps-functie vereist dat je VPS online is en genoeg resources heeft om zowel de platformdiensten als je geïnstalleerde apps betrouwbaar te draaien.
:::

| Vereiste | Minimaal | Aanbevolen |
| --- | --- | --- |
| Serverstatus | Online | Online |
| Opslag | 30 GB | 50 GB |
| RAM | 2 GB | 4 GB |
| CPU | 2 cores | 4 cores |
| Besturingssysteem | Debian of Ubuntu LTS | Debian 13 - NL - 64bit |

:::caution Verse OS Installatie Aanbevolen
We raden sterk aan om de apps-functie op een verse OS-installatie te zetten. Zo voorkom je conflicten met bestaande services, bezette poorten, Docker-setup of custom configuraties die al op de server staan.
:::

Moet je je VPS opnieuw installeren? Gebruik dan een verse, ondersteunde Debian- of Ubuntu LTS-image via je VPS-beheerinterface.

## Toegang tot de One Click Apps Installer

Open je VPS in de ZAP-Hosting webinterface en zoek de sectie One Click Apps. Vanaf daar start je de eerste setup en kun je later terugkomen om alle geïnstalleerde apps te beheren.

De eerste keer dat je deze functie opent, kies je hoe het platform op je VPS geïnstalleerd moet worden.

## Installatietype kiezen

Je kunt kiezen tussen een volledige installatie en een node-only installatie. Welke optie je kiest, hangt af van of deze VPS zowel het managementpaneel als de apps moet hosten, of alleen als gekoppelde node voor een ander paneel fungeert.

### Volledige Installatie

Kies **Volledige Installatie** als je de server wilt opzetten met het paneel én de server zelf als node. Dit is de aanbevolen optie voor beginners en de meeste standaarddeployments.

Met deze methode kun je:

- apps uit de app-catalogus deployen
- projecten en omgevingen beheren
- alle apps op één plek organiseren
- gebruikmaken van geïntegreerde webinterface management tools
- later toegang krijgen tot het geavanceerde paneel indien nodig

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Aanbevolen voor de meeste gebruikers
Als je voor het eerst met de apps-functie werkt, kies dan voor de volledige installatie. Dit is de makkelijkste setup en geeft je volledige controle direct vanuit de ZAP-Hosting webinterface.
:::

### Node-only Installatie

Kies **Node-only Installatie** als je wilt dat deze VPS alleen als node fungeert. Je kunt ‘m dan koppelen aan een andere VPS-server of een extern paneel.

Deze optie is handig als je:

- wilt schalen over meerdere VPS-systemen
- beheer wilt centraliseren op één paneel
- deze server wilt koppelen aan een bestaande deployment
- een multi-node setup wilt uitbreiden

:::note Geavanceerde Deployment Optie
Node-only installatie is bedoeld voor gebruikers die al een ander paneel hebben of deze server willen koppelen aan een externe omgeving.
:::

## De Apps-functie installeren

Na het kiezen van het installatietype start je de setup via de webinterface. De initiële installatie duurt meestal maar een paar minuten.

Tijdens dit proces worden de platformdiensten die nodig zijn voor de One Click Apps-functie op je VPS uitgerold. Zodra dit klaar is, zijn de app-catalogus en beheersecties beschikbaar in de webinterface.

:::info Installatiegedrag
De exacte voortgang kan verschillen afhankelijk van je VPS-prestaties, de staat van het besturingssysteem en netwerkcondities. Als de setup niet succesvol is, check dan later de troubleshooting-sectie in deze gids.
:::

## De app-catalogus verkennen

Na de installatie kun je de app-catalogus openen en door de beschikbare apps bladeren. De catalogus bevat meer dan 300 direct inzetbare apps en ondersteunt filters om snel de juiste app te vinden.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Apps zoeken en filteren

In de catalogus kun je zoeken op app-naam en filteren op categorie. Zo vind je snel de juiste app voor jouw project in deze app-store-achtige interface.

Typische acties zijn:

- zoeken op app-naam
- filteren op categorie
- beschikbare apps bekijken
- een app selecteren voor installatie

Deze workflow is vooral handig als je veel apps beheert of verschillende services wilt vergelijken voor installatie.

### Een app installeren starten

Na het kiezen van een app uit de catalogus start je de installatie via de webinterface. Afhankelijk van de app moet je mogelijk waarden invullen zoals:

- `[your_project_name]`
- `[your_environment_name]`
- `[your_domain]`
- `[your_app_name]`

Deze placeholders staan voor waarden die specifiek zijn voor jouw deployment. Bijvoorbeeld, `[your_domain]` vervang je door het domein dat je voor de app wilt gebruiken.

:::tip Projecten en omgevingen
Gebruik projecten en omgevingen om je deployment overzichtelijk te houden. Dit is vooral handig als je meerdere apps host, versies test of productie en staging scheidt.
:::

## Geïnstalleerde apps beheren

Na deployment worden je geïnstalleerde apps weergegeven in het beheer gedeelte van de webinterface. Vanaf hier kun je je services monitoren en bedienen zonder handmatig met containers te werken.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Beschikbare beheeracties

In het geïnstalleerde apps-gedeelte kun je veelvoorkomende lifecycle-acties direct vanuit de webinterface uitvoeren.

| Actie | Doel |
| --- | --- |
| Start | Start een gestopte app |
| Stop | Stop een draaiende app |
| Logs bekijken | Open de app-logs voor troubleshooting |
| Herinstalleren | Zet de app opnieuw uit |

Deze tools maken het makkelijker om al je apps vanaf één plek te beheren, vooral als je liever een simpele webinterface gebruikt dan command line.

### Projecten en omgevingen organiseren

Projecten en omgevingen helpen je om je deployments overzichtelijk te houden. Je kunt ze gebruiken om te scheiden:

- persoonlijke en productie-apps
- test- en live-omgevingen
- meerdere klant- of teamdeployments
- verschillende stacks op dezelfde VPS

Deze structuur wordt steeds belangrijker naarmate je app-collectie groeit en je meer services op één of meerdere nodes beheert.

## Domeinen, Cloud-toegang en SSL

De One Click Apps-functie ondersteunt custom domeinen en ZAP Cloud-integratie. Zo kun je apps veilig beschikbaar maken en SSL-certificaten regelen voor je deployments.

:::info Domein- en SSL-ondersteuning
Je kunt custom domeinen gebruiken voor je apps en profiteren van SSL-certificaat provisioning waar het platform dat ondersteunt.
:::

Zorg bij het toewijzen van een domein dat je DNS-records naar `[your_server_ip]` wijzen. Als je domein niet goed is ingesteld, is de app mogelijk niet bereikbaar via internet.

| Waarde | Beschrijving |
| --- | --- |
| `[your_domain]` | Het domein of subdomein dat aan je app is toegewezen |
| `[your_server_ip]` | Het publieke IP-adres van je VPS |

:::caution DNS Moet Naar Je VPS Wijzen
Als de DNS voor `[your_domain]` niet naar `[your_server_ip]` wijst, kan domeinvalidatie en app-toegang mislukken.
:::

## Geavanceerde instellingen gebruiken

Geavanceerde gebruikers kunnen extra functionaliteit bereiken via het externe paneel in de geavanceerde instellingen.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

Dit is handig als je diepere aanpassingen wilt, uitgebreidere deploymentcontrole of directe toegang tot features buiten de standaard webinterface.

### Belangrijke supportbeperking

:::caution Supportscope voor geavanceerd paneelgebruik
Geavanceerde gebruikers mogen het externe Coolify-paneel gebruiken voor extra aanpassingen en functies. Support is echter beperkt tot de ZAP-Hosting webinterface. Wijzigingen buiten de webinterface kunnen mogelijk niet ondersteund worden.
:::

### Wanneer het geavanceerde paneel gebruiken

Gebruik het geavanceerde paneel als je:

- meer gedetailleerde deployment-aanpassingen nodig hebt
- directe node-koppelingsworkflows wilt
- geavanceerde appconfiguratie wilt
- paneelbeheer wilt dat verder gaat dan de simpele interface

Als je de toegang verliest of de integratie niet meer reageert, gebruik dan eerst de troubleshooting-tools hieronder voordat je handmatig aanpassingen maakt.

## Nodes koppelen

Als je voor node-only installatie hebt gekozen, kun je deze VPS koppelen aan een andere VPS-server of een extern paneel. Zo schaal je je infrastructuur en beheer je meerdere nodes vanuit één plek.

Node-koppeling is handig als je:

- apps over meerdere VPS-systemen wilt verdelen
- beheer wilt centraliseren
- capaciteit wilt uitbreiden zonder geïsoleerde deployments
- wilt koppelen aan een externe paneelomgeving

:::note Externe paneelkoppeling
Je kunt je node koppelen aan een andere VPS of een extern paneel. De exacte koppeldetails hangen af van de gebruikte doelomgeving.
:::

## Problemen oplossen bij een degraded status

Als de webinterface een degraded status toont, betekent dit dat het platform geen contact kan maken met of data kan ophalen van de instantie die de One Click Apps-functie aandrijft. Volg de troubleshooting-stappen in chronologische volgorde.

### Statusindicatoren

De troubleshooting-popup kan indicatoren tonen zoals:

| Status | Betekenis |
| --- | --- |
| Coolify Status: Actief | De panel-service draait naar verwachting |
| API Status: Bereikbaar | De API is momenteel bereikbaar |
| Service Status: Online | Je VPS zelf is online |

Als één of meerdere onderdelen niet goed werken, ga dan verder met de onderstaande stappen.

### Stap 1: Controleer of de VPS online is

Zorg eerst dat je VPS online is in de ZAP-Hosting webinterface. Als de server offline is, werkt het apps-platform niet.

### Stap 2: Vernieuw de status

Gebruik de actie **Status Vernieuwen** om de healthcheck opnieuw uit te voeren met de nieuwste data. Dit kan tijdelijke problemen oplossen.

:::tip Tijdelijke connectiviteitsproblemen
Een degraded status kan soms door een kortdurend communicatieprobleem komen. Vernieuwen is de snelste eerste check.
:::

### Stap 3: Herstart Docker

Blijft de status degraded? Gebruik dan **Docker Herstarten**. Dit forceert een herstart van de platforminstantie. Wacht na een succesvolle reactie `1-2 minuten` en vernieuw de status opnieuw.

:::caution Service Herstart
Docker herstarten kan lopende apps tijdelijk onderbreken terwijl de services opnieuw opstarten.
:::

### Stap 4: Vernieuw credentials

Als laatste stap gebruik je **Credentials Vernieuwen**. Dit is vooral belangrijk als de status online lijkt, maar functies zoals app-installatie niet werken.

Deze actie:

- verwijdert **geen** data
- vernieuwt de root gebruikerscredentials
- vernieuwt het API-token dat de webinterface gebruikt
- werkt de panel-credentials automatisch bij bij succes

:::info Veilige credential-vernieuwing
Credentials vernieuwen verwijdert je geïnstalleerde apps of deploymentdata niet. Het vernieuwt alleen de toegangs- en communicatiegegevens.
:::

### Wanneer support contacteren

Als het probleem na alle stappen blijft bestaan, maak dan een supportticket aan via de ZAP-Hosting website.

## Best Practices

Om de One Click Apps Installer stabiel en makkelijk te beheren te houden, volg je deze tips:

| Best practice | Reden |
| --- | --- |
| Gebruik een verse OS-installatie | Voorkomt conflicten met bestaande services en poorten |
| Voldoe aan aanbevolen resources | Verbetert performance en betrouwbaarheid |
| Organiseer apps in projecten en omgevingen | Houdt deployments overzichtelijk |
| Configureer DNS vóór domeintoewijzing | Voorkomt toegang- en SSL-problemen |
| Gebruik geavanceerde instellingen met zorg | Voorkomt unsupported custom wijzigingen |

:::tip Houd deployments georganiseerd
Als je veel apps wilt hosten, bedenk dan een duidelijke naamgeving voor `[your_project_name]`, `[your_environment_name]` en `[your_app_name]` voordat je je eerste services uitrolt.
:::

## Conclusie

Gefeliciteerd, je hebt de VPS One Click Apps Installer succesvol opgezet en gebruikt om apps op je server te deployen en beheren. Voor vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat!

<InlineVoucher />