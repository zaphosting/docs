---
id: dedicated-windows-supabase
title: "Dedikerad Server: Installera Supabase på Windows"
description: "Upptäck hur du sätter upp och konfigurerar Supabase för en pålitlig open-source Postgres-plattform med autentisering och realtime-funktioner → Lär dig mer nu"
sidebar_label: Installera Supabase
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Supabase är en open-source Postgres-utvecklingsplattform som erbjuder en fullständig Postgres-databas plus autentisering, instant APIs, realtime och lagring – ett open-source-alternativ till Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Fundera på att hosta den här tjänsten själv? Vi guidar dig steg för steg hur du sätter upp och konfigurerar den, samt allt du behöver ha koll på.



## Förutsättningar

Innan du installerar **Supabase**, se till att din hostingmiljö uppfyller följande krav för en smidig installation och optimal prestanda.

| Hårdvara  | Minimum    | ZAP-Hosting Rekommendation |
| --------- | ---------- | -------------------------- |
| CPU       | 1 CPU-kärna| 4 CPU-kärnor               |
| RAM       | 4 GB       | 8 GB                       |
| Diskutrymme | 25 GB    | 25 GB                      |

Mjukvaran kräver att alla nödvändiga beroenden är installerade och att den körs på ett stödt operativsystem. Säkerställ att din server uppfyller följande innan du fortsätter med installationen:

**Beroenden:** `Git`, `Docker (Engine och Compose)`

**Operativsystem:** Senaste versionen av Ubuntu/Debian som stödjer Docker 2

Se till att alla beroenden är installerade och att rätt OS-version används för att undvika kompatibilitetsproblem vid installation av Supabase.



## Förberedelser

Innan du sätter upp **Supabase** behöver du förbereda systemet. Det innebär att uppdatera operativsystemet till senaste versionen och installera alla nödvändiga beroenden. Dessa förberedelser säkerställer en stabil miljö och hjälper till att undvika problem under eller efter installationen.


### Uppdatera systemet
För att säkerställa att ditt system kör den senaste mjukvaran och säkerhetsuppdateringarna bör du alltid börja med att uppdatera systemet. Det garanterar att du har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.

### Installera beroenden
När uppdateringen är klar kan du installera beroenden.

#### Git
Supabase-data hämtas via GitHub, vilket kräver att Git är installerat. Installera [Git för Windows](https://git-scm.com/downloads/win) på din server.

#### Docker

Supabase körs i en Docker-container på din maskin, så Docker måste vara installerat. Installera [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) på din server.

En komplett guide för installation och användning av Docker finns i vår [Docker](dedicated-windows-docker.md)-guide.


## Installation
Nu när alla krav är uppfyllda och förberedelserna klara kan du installera Supabase. Öppna kommandoprompten. Hämta Supabase-repot, skapa en dedikerad projektmapp och kopiera Docker-filer och exempel på miljöfil dit.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir .\supabase-project

Copy-Item .\supabase\docker\* -Destination .\supabase-project -Recurse -Force
Copy-Item .\supabase\docker\.env.example -Destination .\supabase-project\.env -Force
```

Byt till projektmappen, hämta de senaste containerbilderna och starta stacken i detached-läge.
```
cd supabase-project
docker compose pull
docker compose up -d
```

Nu kan du nå Supabase Studio via `http://<din-ip>:8000`. Du kommer bli ombedd att logga in. Standardinloggningen är:

- Användarnamn: `supabase`
- Lösenord: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Standardinloggning
Din app körs nu med standardinloggning. Säkra dina tjänster så fort som möjligt enligt instruktionerna nedan.
:::



## Konfiguration
Du ska aldrig köra i produktion med standard- eller exempelvärden. Byt ut alla platshållare mot starka, unika hemligheter, granska konfigurationen utifrån dina säkerhetskrav och starta om alla tjänster för att ändringarna ska gälla.

Generera säkra API-nycklar innan du exponerar någon tjänst. Börja med att välja en 40-tecken lång JWT-hemlighet. Du kan använda det förvalda värdet eller skapa en egen. Spara hemligheten lokalt på en säker plats. Dela den inte och checka inte in den i versionshantering. Använd hemligheten för att generera en JWT och ta sedan fram anon- och service-API-nycklar med formuläret som refereras i Supabase docs: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Kör formuläret två gånger för att få fram båda nycklarna. Uppdatera din `./docker/.env` med:

- `ANON_KEY`: anon-nyckel
- `SERVICE_ROLE_KEY`: service-nyckel

Uppdatera nödvändiga hemligheter i `./docker/.env`. Dessa måste vara satta för att deployment ska fungera:

- `POSTGRES_PASSWORD`: lösenord för `postgres`-rollen
- `JWT_SECRET`: används av PostgREST och GoTrue
- `SITE_URL`: bas-URL för din site
- `SMTP_*`: mailserveruppgifter
- `POOLER_TENANT_ID`: tenant-id som Supavisor pooler använder

Skydda Dashboarden med nya inloggningsuppgifter innan produktion. Redigera `./docker/.env`:

- `DASHBOARD_USERNAME`: dashboard-användare
- `DASHBOARD_PASSWORD`: dashboard-lösenord

Du kan definiera flera dashboard-användare i `./docker/volumes/api/kong.yml`:

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

För att aktivera alla dashboard-funktioner utanför `localhost`, sätt `SUPABASE_PUBLIC_URL` i `./docker/.env` till den URL eller IP du kommer använda för att nå dashboarden.

Applicera konfigurationsändringar genom att starta om stacken:

```
docker compose down
docker compose up -d
```




## Avslutning och fler resurser

Grattis! Du har nu framgångsrikt installerat och konfigurerat Supabase på din dedikerade server. Vi rekommenderar även att du kollar in följande resurser som kan ge dig extra hjälp och vägledning under din serverkonfiguration:

- [Supabase.com](https://Supabase.com/) - Officiell webbplats
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Supabase-dokumentation

Har du frågor som inte täcks här? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂