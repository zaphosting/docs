---
id: dedicated-windows-nodejs
title: "Installera Node.js på en Windows Server - Kör moderna JavaScript-appar"
description: "Upptäck hur du sätter upp Node.js för skalbara, realtidsapplikationer med en smidig miljö → Lär dig mer nu"
sidebar_label: Installera Node.js
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Node.js är en plattformsoberoende, öppen källkod JavaScript-runtime som kör JavaScript-kod utanför webbläsaren, till exempel på servrar eller i kommandoradsverktyg. Byggt på V8-motorn stödjer det asynkron, event-driven I/O, vilket gör det supereffektivt för att bygga skalbara nätverks- och realtidsapplikationer.

Paradigmet "JavaScript överallt" låter utvecklare använda ett och samma språk både för backend och frontend.  

## Förberedelser

Innan du sätter upp **Node.js** behöver du förbereda ditt system. Det innebär att uppdatera operativsystemet till senaste versionen och installera alla nödvändiga beroenden. Dessa förberedelser säkerställer en stabil miljö och hjälper till att undvika problem under eller efter installationen.

### Uppdatera systemet
För att se till att ditt system kör den senaste mjukvaran och säkerhetsuppdateringarna bör du alltid börja med att uppdatera systemet. Kör följande kommando:

```
sudo apt update && sudo apt upgrade -y
```
Detta garanterar att ditt system har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.

### Installera beroenden
När uppdateringen är klar kan du fortsätta med installationen av beroenden. Node.js kommer att köras i din maskin via en rad Docker-containrar, så Docker måste installeras först. Kör följande kommando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

En komplett guide för installation och användning av Docker finns i vår [Docker](vserver-windows-docker.md)-guide.

## Installation

Nu när alla krav är uppfyllda och förberedelserna klara kan du fortsätta med installationen av Node.js.

För att använda Node.js i en isolerad miljö behöver du först ladda ner den officiella Alpine-baserade imagen. Kör följande kommando för att hämta senaste Node.js 22-imagen till ditt system, redo för container-deployments:

```
docker pull node:22-alpine
```

Sen kan du starta en container baserad på denna image och öppna en shell-session inuti den. Använd detta kommando för att starta containern med en interaktiv shell. `--rm`-flaggan ser till att containern tas bort automatiskt när du avslutar, så din host-miljö hålls ren:

```
docker run -it --rm --entrypoint sh node:22-alpine
```

Inuti containern kan du kolla vilken Node.js-version som är installerad med `node -v` som bör visa `v22.19.0`. Du kan även verifiera npm-versionen med `npm -v` och förväntat svar är `10.9.3`. Det bekräftar att imagen har rätt versioner av Node.js och npm, redo att användas direkt.

## Konfiguration

Efter att ha startat Node.js-containern rekommenderas det att konfigurera viktiga Node.js-inställningar direkt i miljön. Ett vanligt sätt är att definiera miljövariabler, till exempel:

```
export NODE_ENV=production
```

Det aktiverar produktionsläge, med prestandaoptimeringar och justerad loggning. För utveckling kan du istället sätta `NODE_ENV=development` för att få mer detaljerade felmeddelanden och debug-funktioner.

En välstrukturerad projektmapp är viktigt, börja med att skapa en konfigurationsfil via:

```
npm init -y
```

Det genererar en `package.json`-fil som definierar beroenden, skript och metadata för ditt projekt. Den är central för alla Node.js-appar.

Beroenden installeras med `npm install <package>`, medan utvecklingsberoenden läggs till med `npm install <package> --save-dev`. `scripts`-sektionen i `package.json` låter dig definiera egna kommandon, som `npm start` eller `npm run build`, för att förenkla körning och projektstyrning.

För mer avancerade setups kan Node.js anpassas med `.npmrc` eller `.nvmrc`-filer, som låter dig konfigurera privata registries, cache-alternativ eller tvinga en specifik Node.js-version. Det ser till att dina appar körs konsekvent över olika miljöer.

## Avslutning och fler resurser

Grattis! Du har nu framgångsrikt installerat och konfigurerat Node.js på din VPS/Dedikerade Server. Vi rekommenderar också att kolla in följande resurser som kan ge dig extra hjälp och tips under din serverkonfiguration:

- [Node.js.com](https://Node.js.com/) - Officiell hemsida
- https://Node.js.com/help/ - Node.js Hjälpcenter (Dokumentation)

Har du frågor som inte täcks här? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂