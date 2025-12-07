---
id: dedicated-windows-supabase
title: "Dedicated Server: Supabase installeren op Windows"
description: "Ontdek hoe je Supabase instelt en configureert voor een betrouwbare open-source Postgres platform met authenticatie en realtime functies → Leer het nu"
sidebar_label: Supabase Installeren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Supabase is een open-source Postgres ontwikkelplatform dat een volledige Postgres database biedt plus authenticatie, instant API’s, realtime en opslag, waardoor het een open-source alternatief is voor Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Denk je eraan deze service zelf te hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles waar je op moet letten.





## Vereisten

Voordat je **Supabase** installeert, zorg ervoor dat je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale performance.

| Hardware   | Minimaal   | ZAP-Hosting Aanbeveling |
| ---------- | ---------- | ----------------------- |
| CPU        | 1 CPU Core | 4 CPU Cores             |
| RAM        | 4 GB       | 8 GB                    |
| Schijfruimte | 25 GB    | 25 GB                   |

De software vereist dat alle benodigde dependencies geïnstalleerd zijn en dat het draait op een ondersteund besturingssysteem. Zorg dat je server aan de volgende eisen voldoet voordat je verder gaat met de installatie:

**Dependencies:** `Git`, `Docker (Engine en Compose)`

**Besturingssysteem:** Laatste versie van Ubuntu/Debian met ondersteuning voor Docker 2

Zorg dat alle dependencies geïnstalleerd zijn en dat je de juiste OS-versie gebruikt om compatibiliteitsproblemen tijdens de installatie van Supabase te voorkomen.



## Voorbereiding

Voordat je **Supabase** installeert, moet je je systeem klaarmaken. Dit betekent dat je je besturingssysteem bijwerkt naar de nieuwste versie en alle benodigde dependencies installeert. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.


### Systeem bijwerken
Om zeker te zijn dat je systeem draait met de nieuwste software en beveiligingsupdates, moet je altijd eerst een systeemupdate uitvoeren. Zo zorg je dat je systeem de laatste patches en softwareversies heeft voordat je verder gaat.

### Dependencies installeren
Als de update klaar is, kun je de dependencies installeren.

#### Git
De Supabase data wordt via GitHub gedownload. Hiervoor moet Git eerst geïnstalleerd zijn. Installeer hiervoor [Git voor Windows](https://git-scm.com/downloads/win) op je server.
#### Docker

Supabase wordt uitgerold en gedraaid in een Docker container. Hiervoor moet Docker eerst geïnstalleerd zijn. Installeer hiervoor [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) op je server.

Een complete walkthrough van het installatieproces en hoe je Docker gebruikt vind je in onze [Docker](dedicated-windows-docker.md) gids.


## Installatie
Nu aan alle vereisten is voldaan en de voorbereidingen zijn afgerond, kun je Supabase installeren. Open de command prompt. Haal de Supabase repository binnen, maak een dedicated projectmap aan en kopieer de Docker bestanden en voorbeeld environment file erin.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir .\supabase-project

Copy-Item .\supabase\docker\* -Destination .\supabase-project -Recurse -Force
Copy-Item .\supabase\docker\.env.example -Destination .\supabase-project\.env -Force
```

Ga naar de projectmap, haal de nieuwste container images binnen en start de stack in detached mode.
```
cd supabase-project
docker compose pull
docker compose up -d
```

Je kunt nu Supabase Studio bereiken via `http://<jouw-ip>:8000`. Je wordt gevraagd om een gebruikersnaam en wachtwoord. Standaard zijn de inloggegevens:

- Gebruikersnaam: `supabase`
- Wachtwoord: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Standaard Inloggegevens
Je app draait nu met standaard inloggegevens. Beveilig je services zo snel mogelijk met de instructies hieronder.
:::



## Configuratie
Je moet nooit met standaard- of voorbeeldwaarden live gaan. Vervang alle placeholders door sterke, unieke secrets, check de configuratie op je beveiligingseisen en herstart alle services om de wijzigingen door te voeren.

Genereer veilige API keys voordat je een service blootstelt. Begin met het kiezen van een 40-karakter JWT secret. Je kunt de meegeleverde waarde gebruiken of zelf een maken. Bewaar deze secret lokaal op een veilige plek. Deel ‘m niet en commit ‘m niet in versiebeheer. Gebruik de secret om een JWT te genereren en haal daarna de anon en service API keys op via het formulier dat in de Supabase docs staat: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Draai het formulier twee keer om beide keys te maken. Update je `./docker/.env` met:

- `ANON_KEY`: anon key
- `SERVICE_ROLE_KEY`: service key

Update de verplichte secrets in `./docker/.env`. Deze waarden moeten ingesteld zijn voor een werkende deployment:

- `POSTGRES_PASSWORD`: wachtwoord voor de `postgres` rol
- `JWT_SECRET`: gebruikt door PostgREST en GoTrue
- `SITE_URL`: basis URL van je site
- `SMTP_*`: mailserver credentials
- `POOLER_TENANT_ID`: tenant id gebruikt door de Supavisor pooler

Beveilig het Dashboard met nieuwe inloggegevens voordat je live gaat. Pas `./docker/.env` aan:

- `DASHBOARD_USERNAME`: dashboard gebruiker
- `DASHBOARD_PASSWORD`: dashboard wachtwoord

Je kunt meerdere dashboard gebruikers definiëren in `./docker/volumes/api/kong.yml`:

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

Om alle dashboard functies buiten `localhost` te gebruiken, zet je `SUPABASE_PUBLIC_URL` in `./docker/.env` op de URL of IP waarmee je het dashboard gaat benaderen.

Pas configuratiewijzigingen toe door de stack te herstarten:

```
docker compose down
docker compose up -d
```




## Afsluiting en meer bronnen

Gefeliciteerd! Je hebt Supabase nu succesvol geïnstalleerd en geconfigureerd op je Dedicated Server. We raden je ook aan om de volgende bronnen te bekijken, die je extra hulp en tips kunnen geven tijdens je serverconfiguratie:

- [Supabase.com](https://Supabase.com/) - Officiële website
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Supabase documentatie

Heb je specifieke vragen die hier niet behandeld worden? Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂