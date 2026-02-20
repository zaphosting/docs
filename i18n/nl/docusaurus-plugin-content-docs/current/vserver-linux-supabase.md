---
id: vserver-linux-supabase
title: "Supabase op een Linux Server Installeren - Start je Open Source Backend Platform"
description: "Ontdek hoe je Supabase host en configureert voor een betrouwbare open-source Postgres platform met authenticatie en realtime features → Leer het nu"
sidebar_label: Supabase Installeren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Supabase is een open-source Postgres ontwikkelplatform dat een volledige Postgres database biedt plus authenticatie, instant API’s, realtime functionaliteit en opslag. Het is daarmee een open-source alternatief voor Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Wil je deze service zelf hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles waar je op moet letten.

<InlineVoucher />



## Vereisten

Voordat je **Supabase** installeert, zorg dat je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale performance.

| Hardware   | Minimaal    | ZAP-Hosting Aanbeveling  |
| ---------- | ----------- | ------------------------ |
| CPU        | 1 vCPU Core | 4 vCPU Cores             |
| RAM        | 4 GB        | 8 GB                     |
| Schijfruimte | 25 GB     | 25 GB                    |

De software vereist dat alle benodigde dependencies geïnstalleerd zijn en dat het draait op een ondersteund besturingssysteem. Controleer dat je server aan deze eisen voldoet voordat je verder gaat met de installatie:

**Dependencies:** `Git`, `Docker (Engine en Compose)`

**Besturingssysteem:** Laatste versie van Ubuntu/Debian met ondersteuning voor Docker 2

Zorg dat alle dependencies geïnstalleerd zijn en dat je de juiste OS-versie gebruikt om compatibiliteitsproblemen tijdens de installatie van Supabase te voorkomen.



## Voorbereiding

Voordat je **Supabase** installeert, moet je je systeem klaarmaken. Dit betekent je besturingssysteem updaten naar de nieuwste versie en alle benodigde dependencies installeren. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.


### Systeem updaten
Om zeker te zijn dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je eerst een systeemupdate uit. Gebruik hiervoor het volgende commando:

```
sudo apt update && sudo apt upgrade -y
```
Dit zorgt ervoor dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.

### Dependencies installeren
Als de update klaar is, kun je de dependencies installeren.

#### Git
De Supabase data wordt via GitHub gedownload. Hiervoor moet Git eerst geïnstalleerd zijn. Voer het volgende commando uit:
```
sudo apt install git-all
```

#### Docker

Supabase wordt gedraaid in een Docker container op je machine. Docker moet dus eerst geïnstalleerd worden. Gebruik hiervoor:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Een volledige uitleg over het installeren en gebruiken van Docker vind je in onze [Docker](dedicated-linux-docker.md) gids.


## Installatie
Nu aan alle vereisten is voldaan en de voorbereidingen zijn getroffen, kun je Supabase installeren.



Haal de Supabase repository binnen, maak een aparte projectmap aan en kopieer de Docker bestanden en voorbeeld environment file erin.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir supabase-project

cp -rf supabase/docker/* supabase-project
cp supabase/docker/.env.example supabase-project/.env
```

Ga naar de projectmap, haal de nieuwste container images binnen en start de stack in detached mode.
```
cd supabase-project
docker compose pull
docker compose up -d
```

![img](https://screensaver01.zap-hosting.com/index.php/s/njapji2YePRgema/preview)

Je kunt nu Supabase Studio bereiken via `http://<jouw-ip>:8000`. Je wordt gevraagd om een gebruikersnaam en wachtwoord. Standaard zijn de inloggegevens:

- Gebruikersnaam: `supabase`
- Wachtwoord: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Standaard Inloggegevens
Je app draait nu met standaard inloggegevens. Beveilig je services zo snel mogelijk met de instructies hieronder.
:::



## Configuratie
Je moet nooit met standaard- of voorbeeldwaarden live gaan. Vervang alle placeholders door sterke, unieke secrets, check je configuratie op je beveiligingseisen en herstart alle services om de wijzigingen door te voeren.

Genereer veilige API keys voordat je een service blootstelt. Begin met het kiezen van een 40-karakter JWT secret. Je kunt de meegeleverde waarde gebruiken of zelf een maken. Bewaar deze secret lokaal op een veilige plek. Deel ‘m niet en commit ‘m niet in versiebeheer. Gebruik de secret om een JWT te genereren en maak daarna de anon en service API keys aan via het formulier dat in de Supabase docs staat: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Voer het formulier twee keer uit om beide keys te maken. Update je `./docker/.env` met:

- `ANON_KEY`: anon key
- `SERVICE_ROLE_KEY`: service key

Update de verplichte secrets in `./docker/.env`. Deze waarden moeten ingesteld zijn voor een werkende installatie:

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

Wil je alle dashboard features buiten `localhost` gebruiken? Stel dan `SUPABASE_PUBLIC_URL` in `./docker/.env` in op de URL of IP waarmee je het dashboard gaat bereiken.

Pas configuratiewijzigingen toe door de stack te herstarten:

```
docker compose down
docker compose up -d
```




## Afsluiting en meer bronnen

Gefeliciteerd! Je hebt Supabase nu succesvol geïnstalleerd en geconfigureerd op je VPS/Dedicated Server. We raden je ook aan om de volgende bronnen te bekijken, die je extra hulp en tips kunnen geven tijdens je serverconfiguratie.

- [Supabase.com](https://Supabase.com/) - Officiële website
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Supabase Documentatie

Heb je specifieke vragen die hier niet behandeld worden? Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂



<InlineVoucher />