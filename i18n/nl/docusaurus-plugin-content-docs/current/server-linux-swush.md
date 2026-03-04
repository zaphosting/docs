---
id: server-linux-swush
title: "Swush installeren op een Linux-server - Bouw je eigen privé media- en bestandskluis"
description: "Leer hoe je Swush installeert en draait op je Linux VPS om een zelfgehoste media-, bestanden- en contentmanagementplatform te creëren → Ontdek het nu"
sidebar_label: Swush installeren
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introductie

[Swush](https://github.com/imthatdev/swush) is een zelfgehoste digitale kluis en contentmanagementplatform waarmee je bestanden, media en persoonlijke data overzichtelijk in één centrale dashboard beheert. De applicatie combineert bestandsopslag, deeltools, mediastreaming en kennisbeheer in één webinterface.

Met Swush kun je bestanden uploaden en beheren, content organiseren met mappen en tags, deelbare links genereren en zelfs media direct vanaf je server streamen. Omdat het volledig zelfgehost is, houd jij de volledige controle over je data en infrastructuur, wat het een top alternatief maakt voor cloudopslagdiensten.

De app is gebouwd met moderne technologieën zoals Next.js, TypeScript en TailwindCSS, wat zorgt voor een snelle en responsieve interface die makkelijk te deployen is op een VPS of dedicated server. Deze gids neemt je stap voor stap mee bij het installeren en draaien van Swush op een Linux-server.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRRZ8MM6iWfF3kM/preview)

<InlineVoucher />

## Gebruiksscenario’s van Swush

Swush is ontworpen als een centraal punt voor je digitale content en workflows. Het kan in allerlei situaties gebruikt worden:

- Bestanden, afbeeldingen en documenten beheren en organiseren
- Een persoonlijke mediaserver creëren om geüploade content te streamen
- Veilige deel-links genereren voor bestanden en media
- Kennis organiseren zoals notities, bookmarks of snippets
- Een privé dashboard hosten voor persoonlijke workflows
- Uploads en integraties automatiseren via de Swush API

Het platform bundelt meerdere tools in één omgeving, waardoor je minder afhankelijk bent van verspreide cloudservices.

## Vereisten

Voordat je Swush installeert, check of je server aan de volgende eisen voldoet.

| Hardware | Minimum | Aanbevolen |
|----------|---------|------------|
| CPU | 1 Core | 4 Cores |
| RAM | 2 GB | 4 GB |
| Schijfruimte | 20 GB | 50 GB |

Benodigde software:

- Bun runtime
- PostgreSQL database
- Git

Zorg dat je systeem up-to-date is voordat je begint met installeren.

<InlineServiceLink />

## Voorbereiding

Maak eerst een map aan voor de Swush installatie.
```
mkdir swush
cd swush
```
Clone daarna de Swush repository.
```
git clone https://github.com/imthatdev/swush.git .
```
Installeer de projectafhankelijkheden met Bun.
```
bun install
```
## Configuratie

Maak voor het starten van de applicatie het configuratiebestand aan.
```
cp example.env .env
```
Open het `.env` bestand en pas de benodigde waarden aan:
```
APP_NAME=Swush
APP_URL=http://jouw-server-ip:3000
SUPPORT_NAME=Support
SUPPORT_EMAIL=support@example.com
DATABASE_URL=postgresql://gebruikersnaam:wachtwoord@localhost:5432/swush
```
Je kunt ook extra instellingen configureren zoals:

- Opslag backend (lokaal of S3)
- Upload map
- SMTP instellingen voor e-mailnotificaties
- Authenticatiesleutels

Swush ondersteunt zowel **lokale opslag als S3-compatibele opslag**, zodat je de bestandsopslag kunt schalen naar jouw omgeving.

## Installatie

Na het instellen van de omgevingsvariabelen, initialiseer je het databaseschema.
```
bun run push:db
```
Bouw daarna de applicatie.
```
bun run build
```
Start de Swush server.
```
bun start
```
De applicatie draait nu en luistert op poort **3000**.

## Swush openen

Als de server draait, open je je browser en ga je naar:
```
http://JOUW_SERVER_IP:3000
```
Vervang `JOUW_SERVER_IP` door het IP-adres van je VPS of Dedicated Server. Bij de eerste keer inloggen word je door de setup wizard geleid, waar je je eerste account aanmaakt en opslaginstellingen configureert.

Na de setup kun je direct bestanden uploaden, media organiseren en je digitale content beheren via het Swush dashboard.

## Conclusie

Gefeliciteerd! Je hebt **Swush** succesvol geïnstalleerd op je Linux-server. Je zelfgehoste digitale kluis is nu klaar om bestanden te beheren, media te delen en persoonlijke content te organiseren vanuit één centraal dashboard.

Door Swush zelf te hosten, houd je volledige controle over je data en profiteer je van een modern, privacygericht contentmanagementplatform.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, we staan dagelijks voor je klaar! 🙂

<InlineVoucher />