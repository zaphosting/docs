---
id: server-linux-cashlytics
title: "Cashlytics installeren op een Linux Server - Host je AI-gestuurde financiële manager zelf"
description: "Leer hoe je Cashlytics installeert en draait op je Linux VPS met Docker om je persoonlijke financiën en budgettering met AI-ondersteuning te beheren → Ontdek het nu"
sidebar_label: Cashlytics installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introductie

[Cashlytics](https://github.com/aaronjoeldev/cashlytics-ai) is een moderne **persoonlijke finance- en budgetteringsplatform** die je helpt je uitgaven bij te houden, budgetten te beheren en inzicht te krijgen in je financiële gewoontes. Door transactiedata en uitgavencategorieën te analyseren, helpt Cashlytics je te begrijpen waar je geld naartoe gaat en hoe je je financiële planning kunt verbeteren.

Het platform kan ook optioneel integreren met **AI-gestuurde assistentie**, waarmee je financiële data kunt analyseren, uitgaventrends kunt herkennen en slimme inzichten krijgt in je budgetgedrag.

![img](https://screensaver01.zap-hosting.com/index.php/s/W46gYzqdiPrBDsE/preview)

Cashlytics zelf hosten op je eigen server geeft je **volledige controle over je financiële data**, terwijl je budgetteringstools overal toegankelijk blijven via een webinterface. Wil je Cashlytics zelf hosten? Deze gids neemt je stap voor stap mee door het installatieproces met Docker op je Linux VPS.

<InlineVoucher />

## Gebruiksscenario’s van Cashlytics

Cashlytics is geschikt voor allerlei persoonlijke en professionele situaties waar financiële organisatie en budgettering belangrijk zijn. Typische use cases zijn:

- Persoonlijke uitgaven en maandelijkse budgetten bijhouden
- Uitgaventrends en financiële gewoontes monitoren
- Meerdere inkomstenbronnen en financiële categorieën beheren
- AI-gestuurde inzichten genereren voor slimmer budgetteren
- Een privé en zelfbeheerde financiële dashboard hosten

Omdat het self-hosted is, is Cashlytics ideaal voor gebruikers die een privacygerichte alternatief zoeken voor cloud-gebaseerde financiële tools.

## Vereisten

Voordat je Cashlytics installeert, zorg dat je VPS aan de volgende eisen voldoet.

| Hardware | Minimaal | Aanbevolen |
|----------|----------|------------|
| CPU | 1 Core | 2 Core |
| RAM | 2 GB | 4 GB |
| Schijfruimte | 10 GB | 20 GB |

Daarnaast moet de volgende software geïnstalleerd zijn:

- Docker
- Docker Compose

Als Docker nog niet geïnstalleerd is, volg dan eerst onze handleiding voor het installeren van [Docker](dedicated-linux-docker.md).

<InlineServiceLink />

## Voorbereiding

Maak eerst een projectmap aan voor de Cashlytics installatie.

```bash
mkdir cashlytics && cd cashlytics
```

Download vervolgens de officiële Cashlytics Docker configuratiebestanden.

```
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/docker-compose.selfhost.yml
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/.env.example
```

Maak je eigen configuratiebestand aan door het voorbeeldbestand te kopiëren.

```
cp .env.example .env
```

Het `.env` bestand bevat de configuratievariabelen die nodig zijn om Cashlytics te draaien.

## Installatie

### Open het `.env` bestand

Open het `.env` bestand en pas de vereiste omgevingsvariabelen aan.

```
nano .env
```

### Database wachtwoord instellen

Stel een veilig wachtwoord in voor de PostgreSQL database die Cashlytics gebruikt.

```
POSTGRES_PASSWORD=je_veilige_wachtwoord_hier
```

### Database connectie configureren

Werk de database connectiestring bij en gebruik hetzelfde wachtwoord als hierboven.

```
DATABASE_URL=postgresql://cashlytics:je_veilige_wachtwoord_hier@postgres:5432/cashlytics
```

### Optionele AI-assistent

Cashlytics ondersteunt een optionele AI-assistent die financiële data kan analyseren en budgetinzichten kan geven. Om deze functie te activeren, voeg je je OpenAI API-sleutel toe.

```
OPENAI_API_KEY=sk-je-openai-sleutel
```

Als je de AI-assistent niet wilt gebruiken, kun je deze variabele leeg laten.

## Cashlytics starten

Als de configuratie klaar is, start je de applicatie met Docker Compose.

```
docker compose -f docker-compose.selfhost.yml up -d
```

Docker downloadt nu de benodigde container images en start de Cashlytics services. Om te checken of de containers draaien, gebruik je:

```
docker ps
```

## Cashlytics openen

Zodra de containers succesvol draaien, kun je de Cashlytics webinterface openen. Ga in je browser naar:

```
http://JOUW_SERVER_IP:3000
```

Vervang JOUW_SERVER_IP door het IP-adres van je VPS. Zodra de interface geladen is, kun je beginnen met het instellen van je financiën, budgetten en categorieën.

## Conclusie

Gefeliciteerd! Je hebt Cashlytics succesvol geïnstalleerd op je Linux server. Je kunt nu aan de slag met het bijhouden van uitgaven, beheren van budgetten en het krijgen van inzichten in je financiële data.

Cashlytics draaien op je eigen VPS/Dedicated Server zorgt ervoor dat je financiële info onder jouw controle blijft, terwijl je profiteert van moderne budgetteringstools en optionele AI-gestuurde analyses.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />