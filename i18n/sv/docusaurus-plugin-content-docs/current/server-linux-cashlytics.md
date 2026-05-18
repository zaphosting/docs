---
id: server-linux-cashlytics
title: "Installera Cashlytics på en Linux-server – Självhosta din AI-drivna ekonomihanterare"
description: "Lär dig hur du installerar och kör Cashlytics på din Linux VPS med Docker för att hantera privatekonomi och budgetering med AI-hjälp → Läs mer nu"
sidebar_label: Installera Cashlytics
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

[Cashlytics](https://github.com/aaronjoeldev/cashlytics-ai) är en modern **plattform för privatekonomi och budgetering** som hjälper dig att hålla koll på utgifter, hantera budgetar och få insikter om dina ekonomiska vanor. Genom att analysera transaktionsdata och utgiftskategorier hjälper Cashlytics dig att förstå vart dina pengar tar vägen och hur du kan förbättra din ekonomiska planering.

Plattformen kan även integreras med **AI-driven assistans**, vilket låter dig analysera ekonomiska data, identifiera spenderingsmönster och få smarta insikter om ditt budgetbeteende.

![img](https://screensaver01.zap-hosting.com/index.php/s/W46gYzqdiPrBDsE/preview)

Att självhosta Cashlytics på din egen server ger dig **full kontroll över din ekonomiska data** samtidigt som du kan nå dina budgetverktyg var som helst via en webbläsare. Tänker du köra Cashlytics själv? Den här guiden visar dig hur du installerar det med Docker på din Linux VPS.

<InlineVoucher />

## Användningsområden för Cashlytics

Cashlytics kan användas i en rad personliga och professionella sammanhang där ekonomisk ordning och budgetering är viktigt. Typiska användningsområden är:

- Spåra personliga utgifter och månadsbudgetar
- Övervaka spenderingsmönster och ekonomiska vanor
- Hantera flera inkomstkällor och ekonomiska kategorier
- Generera AI-drivna insikter för smartare budgetering
- Driva en privat och självkontrollerad ekonomisk dashboard

Eftersom det är självhostat är Cashlytics perfekt för dig som vill ha ett integritetsfokuserat alternativ till molnbaserade ekonomiverktyg.

## Förutsättningar

Innan du installerar Cashlytics, se till att din VPS uppfyller följande krav.

| Hårdvara | Minimikrav | Rekommenderat |
|----------|------------|---------------|
| CPU | 1 kärna | 2 kärnor |
| RAM | 2 GB | 4 GB |
| Diskutrymme | 10 GB | 20 GB |



Dessutom måste följande mjukvara vara installerad:

- Docker
- Docker Compose

Om Docker inte är installerat än, följ gärna vår guide för att installera [Docker](dedicated-linux-docker.md) innan du fortsätter.



<InlineServiceLink />



## Förberedelser

Börja med att skapa en projektmapp för Cashlytics-installationen.

```bash
mkdir cashlytics && cd cashlytics
```

Ladda sedan ner de officiella Docker-konfigurationsfilerna för Cashlytics.

```
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/docker-compose.selfhost.yml
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/.env.example
```

Skapa din miljökonfigurationsfil genom att kopiera exempel-filen.

```
cp .env.example .env
```

Filen `.env` innehåller de konfigurationsvariabler som krävs för att köra Cashlytics.



## Installation



### Öppna `.env`-filen

Öppna `.env`-filen och konfigurera de nödvändiga miljövariablerna.

```
nano .env
```



### Ställ in databaslösenord

Sätt ett säkert lösenord för PostgreSQL-databasen som Cashlytics använder.

```
POSTGRES_PASSWORD=your_secure_password_here
```



### Konfigurera databasanslutning

Uppdatera databasanslutningssträngen och använd samma lösenord som ovan.

```
DATABASE_URL=postgresql://cashlytics:your_secure_password_here@postgres:5432/cashlytics
```



### Valfri AI-assistent

Cashlytics stödjer en valfri AI-assistent som kan analysera ekonomiska data och ge budgetinsikter. För att aktivera detta, lägg till din OpenAI API-nyckel.

```
OPENAI_API_KEY=sk-your-openai-key
```

Vill du inte använda AI-assistenten kan denna variabel lämnas tom.



## Starta Cashlytics

När konfigurationen är klar, starta applikationen med Docker Compose.

```
docker compose -f docker-compose.selfhost.yml up -d
```

Docker kommer nu att ladda ner nödvändiga containerbilder och starta Cashlytics-tjänsterna. För att kontrollera att containrarna körs kan du använda:

```
docker ps
```



## Komma åt Cashlytics

När containrarna har startat kan du öppna Cashlytics webbgränssnitt. Öppna din webbläsare och gå till:

```
http://DIN_SERVER_IP:3000
```

Byt ut DIN_SERVER_IP mot IP-adressen till din VPS. När gränssnittet laddats kan du börja konfigurera din ekonomi, budgetar och kategorier.

## Avslutning

Grattis! Du har nu installerat Cashlytics på din Linux-server. Du kan börja använda plattformen för att följa utgifter, hantera budgetar och få insikter om din ekonomiska data.

Att köra Cashlytics på din egen VPS/Dedikerade Server säkerställer att din ekonomiska information är under din kontroll samtidigt som du får tillgång till moderna budgetverktyg och valfri AI-driven analys.

Har du frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />