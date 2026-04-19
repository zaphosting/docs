---
id: verver-one-click-apps-installer
title: "VPS: One Click Apps Installer"
description: "Deploy apps with the VPS One Click Apps Installer, manage projects through the web interface, and use Coolify for advanced app management -> Learn more now"
sidebar_label: One Click App Installer
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

De One Click Apps Installer laat je een uitgebreide app-catalogus doorzoeken en apps direct vanuit je VPS-webinterface uitrollen. In deze gids leer je hoe je je server voorbereidt, het juiste installatie-type kiest, apps installeert en beheert, en geavanceerde instellingen en troubleshooting-tools gebruikt wanneer nodig.

<InlineVoucher />

## Voorbereiding

Voordat je de One Click Apps Installer gebruikt, moet je VPS aan de minimale eisen voldoen en een ondersteund besturingssysteem gebruiken.

:::info Minimale Vereisten
De apps-functie vereist dat je VPS online is en voldoende resources heeft om zowel de platformdiensten als je geïnstalleerde apps betrouwbaar te draaien.
:::

| Vereiste | Minimaal | Aanbevolen |
| --- | --- | --- |
| Serverstatus | Online | Online |
| Opslag | 30 GB | 50 GB |
| RAM | 2 GB | 4 GB |
| CPU | 2 cores | 4 cores |
| Besturingssysteem | Debian of Ubuntu LTS | Debian 13 - EN - 64bit |

:::caution Verse OS Installatie Aanbevolen
Het wordt sterk aanbevolen om de apps-functie op een verse besturingssysteeminstallatie op te zetten. Dit voorkomt conflicten met bestaande services, bezette poorten, Docker-omgevingen of aangepaste configuraties die al op de server aanwezig zijn.
:::

Als je je VPS opnieuw moet installeren voordat je verdergaat, gebruik dan een verse ondersteunde Debian- of Ubuntu LTS-image vanuit je VPS-beheerinterface.

## Toegang tot de One Click Apps Installer

Open je VPS in de ZAP-Hosting webinterface en zoek de sectie One Click Apps. Vanaf daar kun je de initiële setup starten en later terugkeren om alle geïnstalleerde apps op de server te beheren.

De eerste keer dat je deze functie opent, moet je kiezen hoe het platform op je VPS geïnstalleerd moet worden.

## Keuze van Installatietype

Je kunt kiezen tussen een volledige installatie en een node-only installatie. De juiste optie hangt af van of deze VPS zowel het beheerpaneel als de apps moet hosten, of alleen als gekoppelde node voor een ander paneel moet fungeren.

### Volledige Installatie

Kies **Volledige Installatie** als je de server wilt opzetten met het paneel en de server zelf als node. Dit is de aanbevolen optie voor beginners en de meeste standaarddeployments.

Met deze methode kun je:

- apps uit de app-catalogus uitrollen
- projecten en omgevingen beheren
- alle apps op één plek organiseren
- gebruikmaken van geïntegreerde webinterface beheertools
- later toegang krijgen tot het geavanceerde paneel indien nodig

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Aanbevolen voor de Meeste Gebruikers
Als dit je eerste keer is dat je de apps-functie gebruikt, kies dan voor de volledige installatie. Dit biedt de eenvoudigste setup en geeft je volledige beheer direct vanuit de ZAP-Hosting webinterface.
:::

### Node-only Installatie

Kies **Node-only Installatie** als je wilt dat deze VPS alleen als node fungeert. Je kunt deze dan koppelen aan een andere VPS-server of een externe paneelinstantie.

Deze optie is handig als je wilt:

- schalen over meerdere VPS-systemen
- beheer centraliseren op één paneel
- deze server koppelen aan een bestaande deployment
- een bestaand multi-node systeem uitbreiden

:::note Geavanceerde Deployment Optie
Node-only installatie is bedoeld voor gebruikers die al een ander paneel beschikbaar hebben of deze server willen koppelen aan een externe omgeving.
:::

## Installeren van de Apps-functie

Na het kiezen van het installatietype start je de setup vanuit de webinterface. De initiële installatie duurt meestal maar een paar minuten.

Tijdens dit proces worden de platformdiensten die nodig zijn voor de One Click Apps-functie op je VPS uitgerold. Zodra dit voltooid is, worden de app-catalogus en beheersecties beschikbaar in de webinterface.

:::info Installatiegedrag
De exacte voortgang van de installatie kan variëren afhankelijk van de prestaties van je VPS, de staat van het besturingssysteem en netwerkcondities. Als de setup niet succesvol voltooid wordt, bekijk dan later de troubleshooting-sectie in deze gids.
:::

## De App-catalogus Doorzoeken

Zodra de installatie voltooid is, kun je de app-catalogus openen en de beschikbare apps doorzoeken. De catalogus bevat meer dan 300 direct uitrolbare apps en ondersteunt filters om snel de juiste app te vinden.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Apps Zoeken en Filteren

In de catalogus kun je zoeken op app-naam en filteren op categorie. Dit helpt je om alle apps in de app-store-achtige interface te beperken en de juiste deployment voor je project te vinden.

Typische acties zijn:

- zoeken op app-naam
- filteren op categorie
- beschikbare app-entries bekijken
- een app selecteren voor installatie

Deze workflow is vooral handig als je veel apps beheert of meerdere services vergelijkt voor installatie.

### Een App Installeren

Na het selecteren van een app uit de catalogus, start je de installatie via de webinterface. Afhankelijk van de app moet je mogelijk waarden definiëren zoals:

- `[your_project_name]`
- `[your_environment_name]`
- `[your_domain]`
- `[your_app_name]`

Deze placeholders staan voor waarden die specifiek zijn voor jouw deployment. Bijvoorbeeld, `[your_domain]` moet je vervangen door het domein dat je voor de app wilt gebruiken.

:::tip Projecten en Omgevingen
Gebruik projecten en omgevingen om je deployment georganiseerd te houden. Dit is vooral handig als je meerdere apps host, versies test of productie- en staging-services scheidt.
:::

## Beheren van Geïnstalleerde Apps

Na deployment worden je geïnstalleerde apps weergegeven in de beheersectie van de webinterface. Vanaf hier kun je je services monitoren en beheren zonder handmatig met de onderliggende containers te werken.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Beschikbare Beheeracties

De sectie voor geïnstalleerde apps laat je veelvoorkomende lifecycle-acties direct vanuit de webinterface uitvoeren.

| Actie | Doel |
| --- | --- |
| Start | Start een gestopte app |
| Stop | Stopt een draaiende app |
| Logs bekijken | Opent de app-logs voor troubleshooting |
| Herinstalleren | Rol de app opnieuw uit |

Deze tools maken het makkelijker om alle apps vanaf één plek te beheren, vooral als je eenvoudige webgebaseerde controle wilt in plaats van handmatige command line administratie.

### Projecten en Omgevingen Organiseren

Projecten en omgevingen helpen je om je deployments overzichtelijk te structureren. Je kunt ze gebruiken om te scheiden:

- persoonlijke en productie-apps
- test- en live-omgevingen
- meerdere klant- of teamdeployments
- verschillende stacks op dezelfde VPS

Deze organisatie wordt steeds belangrijker naarmate je app-store collectie groeit en je meer services op één of meerdere nodes beheert.

## Domeinen, Cloud Toegang en SSL

De One Click Apps-functie ondersteunt custom domeinen en ZAP Cloud-integratie. Dit stelt je in staat om apps veilig bloot te stellen en SSL-certificaten voor je deployments te regelen.

:::info Domein- en SSL-ondersteuning
Je kunt custom domeinen gebruiken voor je apps en profiteren van SSL-certificaat provisioning waar dit door de platformsetup wordt ondersteund.
:::

Bij het toewijzen van een domein moet je ervoor zorgen dat je DNS-records naar `[your_server_ip]` wijzen. Als je domein niet correct is geconfigureerd, kan de app niet bereikbaar worden vanaf het internet.

| Waarde | Beschrijving |
| --- | --- |
| `[your_domain]` | Het domein of subdomein dat aan je app is toegewezen |
| `[your_server_ip]` | Het publieke IP-adres van je VPS |

:::caution DNS Moet Naar Je VPS Wijzen
Als de DNS voor `[your_domain]` niet naar `[your_server_ip]` wijst, kan domeinvalidatie en app-toegang mislukken.
:::

## Geavanceerde Instellingen Gebruiken

Geavanceerde gebruikers kunnen extra functionaliteit bereiken via het externe paneel dat beschikbaar is in de geavanceerde instellingen.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

Dit is handig als je diepere aanpassingen, uitgebreidere deploymentcontrole of directe toegang tot functies buiten de standaard webinterface nodig hebt.

### Belangrijke Supportbeperking

:::caution Supportbereik voor Geavanceerd Paneelgebruik
Geavanceerde gebruikers kunnen het externe Coolify-paneel gebruiken voor extra aanpassingen en functionaliteit. Support is echter beperkt tot de ZAP-Hosting webinterface. Als je wijzigingen buiten de webinterface maakt, is ondersteuning voor die aanpassingen mogelijk niet beschikbaar.
:::

### Wanneer het Geavanceerde Paneel te Gebruiken

Je wilt het geavanceerde paneel gebruiken als je:

- meer gedetailleerde deployment-aanpassingen nodig hebt
- directe node-koppelingsworkflows wilt
- geavanceerde app-configuratie wilt
- paneelbeheer wilt dat verder gaat dan de vereenvoudigde interface

Als je de toegang verliest of de integratie niet meer reageert, gebruik dan eerst de troubleshooting-tools hieronder voordat je handmatige wijzigingen maakt.

## Nodes Koppelen

Als je het node-only installatietype hebt gekozen, kun je deze VPS koppelen aan een andere VPS-server of een externe paneelinstantie. Dit stelt je in staat om je infrastructuur te schalen en meerdere nodes vanaf één locatie te beheren.

Node-koppeling is handig als je wilt:

- apps verspreiden over meerdere VPS-systemen
- beheer centraliseren
- capaciteit uitbreiden zonder geïsoleerde deployments te maken
- koppelen aan een externe paneelomgeving

:::note Externe Paneelkoppeling
Je kunt je node koppelen aan een andere VPS of een externe paneelinstantie. De exacte koppelingsdetails hangen af van de reeds gebruikte doelomgeving.
:::

## Troubleshooting bij Verlaagde Status

Als de webinterface een verlaagde status toont, betekent dit dat het platform geen contact kan maken met of geen data kan ophalen van de instantie die de One Click Apps-functie aandrijft. Volg de troubleshooting-stappen in chronologische volgorde.

### Statusindicatoren

De troubleshooting-popup kan indicatoren tonen zoals:

| Status | Betekenis |
| --- | --- |
| Coolify Status: Actief | De panel-service lijkt te draaien |
| API Status: Toegankelijk | De API is momenteel bereikbaar |
| Service Status: Online | Je VPS zelf is online |

Als één of meerdere onderdelen niet correct functioneren, ga dan verder met de onderstaande stappen.

### Stap 1: Bevestig dat de VPS Online Is

Controleer eerst of je VPS-service online is in de ZAP-Hosting webinterface. Als de server offline is, kan het apps-platform niet functioneren.

### Stap 2: Vernieuw de Status

Gebruik de actie **Status Vernieuwen** om de healthcheck opnieuw uit te voeren met de nieuwste data. Dit kan tijdelijke, intermitterende problemen oplossen.

:::tip Tijdelijke Connectiviteitsproblemen
Een verlaagde status kan soms veroorzaakt worden door een kortdurend communicatieprobleem. Het vernieuwen van de status is de snelste eerste check.
:::

### Stap 3: Herstart Docker

Als de status nog steeds verlaagd is, gebruik dan de actie **Docker Herstarten**. Dit forceert een herstart van de platforminstantie. Wacht na een succesvolle respons `1-2 minuten` en vernieuw de status opnieuw.

:::caution Service Herstart
Het herstarten van Docker kan lopende apps tijdelijk onderbreken terwijl de services opnieuw opstarten.
:::

### Stap 4: Vernieuw Referenties

Als laatste stap gebruik je **Referenties Vernieuwen**. Dit is vooral belangrijk als de status online lijkt, maar functies in de webinterface zoals app-installatie niet werken.

Deze actie:

- verwijdert je data **niet**
- vernieuwt de root-gebruikersreferenties
- vernieuwt het API-token dat door de webinterface wordt gebruikt
- werkt de panelreferenties automatisch bij bij succes

:::info Veilige Referentie Vernieuwing
Het vernieuwen van referenties verwijdert je geïnstalleerde apps of deploymentdata niet. Het vernieuwt alleen de benodigde referenties voor toegang en communicatie.
:::

### Wanneer Contact Opnemen met Support

Als het probleem blijft bestaan nadat je alle troubleshooting-stappen hebt doorlopen, maak dan een supportticket aan via de ZAP-Hosting website.

## Best Practices

Om de One Click Apps Installer stabiel en makkelijk beheersbaar te houden, volg je deze aanbevelingen:

| Best practice | Reden |
| --- | --- |
| Gebruik een verse OS-installatie | Vermindert conflicten met bestaande services en poorten |
| Voldoe aan aanbevolen resources | Verbetert prestaties en betrouwbaarheid |
| Organiseer apps in projecten en omgevingen | Houdt deployments beheersbaar |
| Configureer DNS vóór domeintoewijzing | Voorkomt toegang- en SSL-problemen |
| Gebruik geavanceerde instellingen voorzichtig | Voorkomt niet-ondersteunde aanpassingen |

:::tip Houd Deployments Georganiseerd
Als je van plan bent veel apps te hosten, maak dan een duidelijke naamgevingsstructuur voor `[your_project_name]`, `[your_environment_name]` en `[your_app_name]` voordat je je eerste services uitrolt.
:::

## Conclusie

Gefeliciteerd, je hebt de VPS One Click Apps Installer succesvol opgezet en gebruikt om apps op je server uit te rollen en te beheren. Voor verdere vragen of hulp kun je altijd contact opnemen met onze supportafdeling, die dagelijks voor je klaarstaat!

<InlineVoucher />