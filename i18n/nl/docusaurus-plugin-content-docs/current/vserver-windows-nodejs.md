---
id: vserver-windows-nodejs
title: "VPS: Node.js installeren op Windows"
description: "Ontdek hoe je een stabiele Node.js-omgeving opzet voor schaalbare, realtime applicaties met Docker en systeemvoorbereiding → Leer het nu"
sidebar_label: Node.js installeren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Node.js is een cross-platform, open-source JavaScript runtime omgeving die JavaScript-code buiten de browser uitvoert, bijvoorbeeld op servers of in command-line tools. Gebouwd op de V8-engine ondersteunt het asynchrone, event-driven I/O, wat het super efficiënt maakt voor het bouwen van schaalbare netwerk- en realtime applicaties.

Het “JavaScript overal” principe maakt het mogelijk voor developers om één taal te gebruiken voor zowel backend als frontend development.  

<InlineVoucher />

## Voorbereiding

Voordat je **Node.js** installeert, moet je je systeem klaarmaken. Dit betekent dat je je besturingssysteem bijwerkt naar de nieuwste versie en alle benodigde dependencies installeert. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.

### Systeem updaten
Om zeker te weten dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je altijd eerst een systeemupdate uit. Gebruik hiervoor het volgende commando:

```
sudo apt update && sudo apt upgrade -y
```
Zo zorg je dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.

### Dependencies installeren
Als de update klaar is, kun je de dependencies installeren. Node.js wordt via verschillende Docker-containers op je machine gedraaid. Daarom moet Docker eerst geïnstalleerd zijn. Gebruik hiervoor dit commando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Een volledige walkthrough van het installatieproces en hoe je Docker gebruikt, vind je in onze [Docker](vserver-windows-docker.md) gids.

## Installatie

Nu aan alle vereisten is voldaan en de voorbereidingen klaar zijn, kun je doorgaan met het installeren van de Node.js applicatie.

Om Node.js in een geïsoleerde omgeving te gebruiken, moet je eerst de officiële Alpine-gebaseerde image downloaden. Haal de nieuwste Node.js 22 image binnen met dit commando, zodat je deze kunt gebruiken voor container deployments:

```
docker pull node:22-alpine
```

Daarna start je een container op basis van deze image en open je een shell sessie erin. Gebruik dit commando om de container te starten met een interactieve shell. De `--rm` optie zorgt ervoor dat de container automatisch wordt verwijderd zodra je afsluit, zodat je host schoon blijft.

```
docker run -it --rm --entrypoint sh node:22-alpine
```

Binnen de container check je de geïnstalleerde Node.js versie met `node -v`, dit zou `v22.19.0` moeten tonen. Ook kun je de npm versie checken met `npm -v`, wat `10.9.3` zou moeten zijn. Dit bevestigt dat de image de juiste versies van Node.js en npm bevat, klaar voor direct gebruik.

## Configuratie

Na het starten van de Node.js container is het slim om belangrijke Node.js instellingen binnen de omgeving zelf te configureren. Een veelgebruikte aanpak is het definiëren van environment variables, bijvoorbeeld:

```
export NODE_ENV=production
```

Dit zet de productie-modus aan, wat performance optimalisaties activeert en het loggen aanpast. Voor development kun je in plaats daarvan `NODE_ENV=development` zetten, zodat je uitgebreide foutmeldingen en debugging features krijgt.

Een goed gestructureerde projectmap begint met een configuratiebestand, dat je aanmaakt met:

```
npm init -y
```

Dit maakt een `package.json` bestand aan, waarin dependencies, scripts en metadata voor je project staan. Dit is het centrale configuratiebestand voor elke Node.js app.

Dependencies installeer je met `npm install <package>`, terwijl development dependencies je toevoegt met `npm install <package> --save-dev`. In de `scripts` sectie van `package.json` kun je custom commands definiëren, zoals `npm start` of `npm run build`, om het uitvoeren en beheren van je project makkelijker te maken.

Voor geavanceerdere setups kun je Node.js aanpassen met `.npmrc` of `.nvmrc` bestanden, waarmee je private registries, caching opties of een specifieke Node.js versie kunt instellen. Zo zorg je dat je apps consistent draaien op verschillende omgevingen.

## Conclusie en meer bronnen

Gefeliciteerd! Je hebt nu succesvol Node.js geïnstalleerd en geconfigureerd op je VPS. We raden je ook aan om deze bronnen te checken, die je extra hulp en tips kunnen geven tijdens je serverconfiguratie:

- [Node.js.com](https://Node.js.com/) - Officiële website
- https://Node.js.com/help/ - Node.js Help Center (Documentatie)

Heb je specifieke vragen die hier niet behandeld worden? Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂