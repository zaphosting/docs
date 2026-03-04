---
id: server-linux-swush
title: "Installera Swush på en Linux-server – Bygg ditt eget privata media- och filarkiv"
description: "Lär dig hur du installerar och kör Swush på din Linux VPS för att skapa en självhostad plattform för media, filer och innehållshantering → Läs mer nu"
sidebar_label: Installera Swush
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

[Swush](https://github.com/imthatdev/swush) är ett självhostat digitalt arkiv och innehållshanteringsplattform som hjälper dig att organisera filer, media och personliga data i en central dashboard. Appen kombinerar fil-lagring, delningsverktyg, medieströmning och kunskapshantering i ett och samma webbgränssnitt.

Med Swush kan du ladda upp och hantera filer, organisera innehåll med mappar och taggar, skapa delningsbara länkar och till och med streama media direkt från din server. Eftersom det är helt självhostat har du full kontroll över dina data och din infrastruktur – ett grymt alternativ till molnbaserade lagringsplattformar.

Appen är byggd med moderna tekniker som Next.js, TypeScript och TailwindCSS, vilket ger en snabb och responsiv upplevelse samtidigt som den är enkel att köra på en VPS eller dedikerad server. Den här guiden visar dig steg för steg hur du installerar och kör Swush på en Linux-server.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRRZ8MM6iWfF3kM/preview)

<InlineVoucher />



## Användningsområden för Swush

Swush är designat för att vara en central hub för ditt digitala innehåll och dina arbetsflöden. Det kan användas i många olika scenarier:

- Hantera och organisera filer, bilder och dokument
- Skapa en personlig mediaserver för att streama uppladdat innehåll
- Generera säkra delningslänkar för filer och media
- Organisera kunskap som anteckningar, bokmärken eller kodsnuttar
- Köra en privat dashboard för personliga arbetsflöden
- Automatisera uppladdningar och integrationer via Swush API

Plattformen samlar flera verktyg i en och samma miljö, vilket hjälper dig minska beroendet av utspridda molntjänster. 

## Förutsättningar

Innan du installerar Swush, se till att din server uppfyller följande krav.

| Hårdvara | Minsta | Rekommenderat |
|----------|---------|-------------|
| CPU | 1 kärna | 4 kärnor |
| RAM | 2 GB | 4 GB |
| Diskutrymme | 20 GB | 50 GB |

Nödvändig mjukvara:

- Bun runtime
- PostgreSQL databas
- Git

Se till att ditt system är uppdaterat innan du börjar installationen.

<InlineServiceLink />

## Förberedelser

Börja med att skapa en mapp för Swush-installationen.
```
mkdir swush
cd swush
```
Klona sedan Swush-repot.
```
git clone https://github.com/imthatdev/swush.git .
```
Installera projektets beroenden med Bun.
```
bun install
```
## Konfiguration

Innan du startar appen, skapa miljökonfigurationsfilen.
```
cp example.env .env
```
Öppna `.env`-filen och konfigurera de nödvändiga värdena:
```
APP_NAME=Swush
APP_URL=http://din-server-ip:3000
SUPPORT_NAME=Support
SUPPORT_EMAIL=support@example.com
DATABASE_URL=postgresql://användarnamn:lösenord@localhost:5432/swush
```
Du kan även konfigurera extra inställningar som:

- Lagringsbackend (lokal eller S3)
- Uppladdningsmapp
- SMTP-inställningar för e-postnotiser
- Autentiseringshemligheter

Swush stödjer både **lokal lagring och S3-kompatibla lagringssystem**, så du kan skala filhanteringen efter din miljö.

## Installation

Efter att ha konfigurerat miljövariablerna, initiera databasschemat.
```
bun run push:db
```
Bygg sedan applikationen.
```
bun run build
```
Starta Swush-servern.
```
bun start
```
Appen startar nu och lyssnar på port **3000**.

## Komma åt Swush

När servern körs, öppna din webbläsare och gå till:
```
http://DIN_SERVER_IP:3000
```
Byt ut `DIN_SERVER_IP` mot IP-adressen till din VPS/dedikerade server. Vid första inloggningen guidar installationsguiden dig genom att skapa ditt första konto och konfigurera lagringsinställningar.

När setupen är klar kan du börja ladda upp filer, organisera media och hantera ditt digitala innehåll direkt från Swush-dashboarden.

## Avslutning

Grattis! Du har nu installerat **Swush** på din Linux-server. Ditt självhostade digitala arkiv är redo att hantera filer, dela media och organisera personligt innehåll från en central dashboard.

Genom att hosta Swush själv får du full kontroll över dina data samtidigt som du får en modern och integritetsfokuserad plattform för innehållshantering.

Har du frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />