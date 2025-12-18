---
id: dedicated-linux-nodejs
title: "Dedikerad Server: Installera Node.js på Linux"
description: "Upptäck hur du sätter upp en stabil Node.js-miljö för skalbara, realtidsapplikationer med bästa praxis och förberedelsesteg → Lär dig mer nu"
sidebar_label: Installera Node.js
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Node.js är en plattformsoberoende, öppen källkod JavaScript-runtime som kör JavaScript-kod utanför webbläsaren, till exempel på servrar eller i kommandoradsverktyg. Byggt på V8-motorn stödjer det asynkron, event-driven I/O, vilket gör det mycket effektivt för att bygga skalbara nätverks- och realtidsapplikationer.

Paradigmet "JavaScript överallt" låter utvecklare använda ett enda språk både för backend och frontend-utveckling.  

## Förberedelser

Innan du installerar **Node.js** behöver du förbereda ditt system. Det inkluderar att uppdatera operativsystemet till senaste versionen och installera alla nödvändiga beroenden. Dessa förberedelser säkerställer en stabil miljö och hjälper till att undvika problem under eller efter installationen.

### Uppdatera systemet
För att säkerställa att ditt system kör den senaste mjukvaran och säkerhetsuppdateringarna bör du alltid börja med att uppdatera systemet. Kör följande kommando:

```
sudo apt update && sudo apt upgrade -y
```
Detta ser till att ditt system har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.

### Installera beroenden
När uppdateringen är klar kan du fortsätta med installationen av beroenden. Node.js kommer att köras i din maskin via en rad Docker-containrar. Det kräver att Docker är installerat först. Kör följande kommando för att installera Docker:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

En komplett guide för installation och användning av Docker finns i vår [Docker](dedicated-linux-docker.md)-guide.

## Installation

Nu när alla krav är uppfyllda och förberedelserna klara kan du fortsätta med installationen av Node.js-applikationen.

För att använda Node.js i en isolerad miljö behöver du först ladda ner den officiella Alpine-baserade imagen. Kör följande kommando för att hämta senaste Node.js 22-imagen till ditt system, redo för container-deployments:

```
docker pull node:22-alpine
```

Därefter kan du starta en container baserad på denna image och öppna en shell-session inuti den. Använd detta kommando för att starta containern med en interaktiv shell. `--rm`-flaggan ser till att containern tas bort automatiskt när du avslutar, vilket håller din host-miljö ren:

```
docker run -it --rm --entrypoint sh node:22-alpine
```

Inuti containern kan du verifiera installerad Node.js-version med `node -v` som bör visa `v22.19.0`. Du kan även kolla npm-versionen med `npm -v` där förväntat svar är `10.9.3`. Detta bekräftar att imagen levererar rätt versioner av Node.js och npm, redo att användas direkt.

## Konfiguration

Efter att ha startat Node.js-containern rekommenderas det att konfigurera viktiga Node.js-inställningar direkt i miljön. Ett vanligt sätt är att definiera miljövariabler, till exempel:

```
export NODE_ENV=production
```

Detta aktiverar produktionsläge, med prestandaoptimeringar och justerad loggning. För utveckling kan du istället sätta `NODE_ENV=development` för att få mer detaljerade felmeddelanden och debug-funktioner.

En välstrukturerad projektmapp är viktig, och börjar med en konfigurationsfil som skapas via:

```
npm init -y
```

Detta genererar en `package.json`-fil som definierar beroenden, skript och metadata för ditt projekt. Det är den centrala konfigurationsfilen för varje Node.js-applikation.

Beroenden installeras med `npm install <package>`, medan utvecklingsberoenden läggs till med `npm install <package> --save-dev`. `scripts`-sektionen i `package.json` låter dig definiera egna kommandon, som `npm start` eller `npm run build`, för att förenkla körning och projektledning.

För mer avancerade setup kan Node.js anpassas med `.npmrc` eller `.nvmrc`-filer, som tillåter konfiguration av privata registries, cache-alternativ eller att tvinga en specifik Node.js-version. Detta säkerställer att dina applikationer körs konsekvent över olika miljöer.

## Avslutning och fler resurser

Grattis! Du har nu framgångsrikt installerat och konfigurerat Node.js på din Dedikerade Server. Vi rekommenderar även att du kikar på följande resurser som kan ge dig extra hjälp och vägledning under din serverkonfiguration:

- [Node.js.com](https://Node.js.com/) - Officiell webbplats
- https://Node.js.com/help/ - Node.js Hjälpcenter (Dokumentation)

Har du specifika frågor som inte täcks här? För fler frågor eller support, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂