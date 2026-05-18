---
id: vserver-windows-supabase
title: "Installera Supabase på Windows"
description: "Upptäck hur du installerar och konfigurerar Supabase för en pålitlig open-source Postgres-plattform med autentisering och realtime-funktioner → Lär dig mer nu"
sidebar_label: Installera Supabase
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Supabase är en open-source Postgres-utvecklingsplattform som erbjuder en komplett Postgres-databas plus autentisering, omedelbara API:er, realtime och lagring, vilket gör det till ett open-source alternativ till Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Fundera på att hosta den här tjänsten själv? Vi guidar dig genom varje steg för hur du installerar och konfigurerar den, tillsammans med allt du behöver ha koll på.

## Installera Supabase med One Click Apps Installer

Du kan installera **Supabase** direkt via vår **One Click Apps Installer** i VPS-webbgränssnittet. Efter att ha slutfört den initiala app-installationen, öppna appkatalogen, sök efter **Supabase** och starta deployment med dina valda projekt-, miljö- och domäninställningar. Detta ger dig ett snabbt och användarvänligt sätt att deploya och hantera **Supabase** utan manuell kommandoradskonfiguration, samtidigt som du får fördelarna med integrerad webbaserad hantering, stöd för egna domäner och SSL där det finns tillgängligt.

<InlineVoucher />



## Förutsättningar

Innan du installerar **Supabase**, se till att din hostingmiljö uppfyller följande krav för att garantera en smidig installation och optimal prestanda.

| Hårdvara  | Minimum      | ZAP-Hosting Rekommendation |
| --------- | ------------ | -------------------------- |
| CPU       | 1 vCPU-kärna | 4 vCPU-kärnor              |
| RAM       | 4 GB         | 8 GB                       |
| Diskutrymme | 25 GB      | 25 GB                      |

Mjukvaran kräver att alla nödvändiga beroenden är installerade och att den körs på ett stöds operativsystem. Se till att din server uppfyller följande krav innan du fortsätter med installationen:

**Beroenden:** `Git`, `Docker (Engine och Compose)`

**Operativsystem:** Senaste versionen av Ubuntu/Debian som stödjer Docker 2

Säkerställ att alla beroenden är installerade och att rätt operativsystemsversion används för att undvika kompatibilitetsproblem under installationen av Supabase.



## Förberedelser

Innan du sätter upp **Supabase** behöver du förbereda ditt system. Det inkluderar att uppdatera operativsystemet till senaste versionen och installera alla nödvändiga beroenden. Dessa förberedelser säkerställer en stabil miljö och hjälper till att undvika problem under eller efter installationen.


### Uppdatera systemet
För att säkerställa att ditt system kör den senaste mjukvaran och säkerhetsförbättringarna bör du alltid börja med att uppdatera systemet. Detta garanterar att ditt system har de senaste säkerhetspatcharna och mjukvaruversionerna innan du fortsätter.

### Installera beroenden
När uppdateringen är klar kan du fortsätta med installationen av beroenden.

#### Git
Supabase-data kommer att laddas ner via GitHub. Detta kräver att Git är installerat först. Installera [Git för Windows](https://git-scm.com/downloads/win) på din server.
#### Docker

Supabase kommer att deployas och köras på din maskin via en Docker-container. Detta kräver att Docker är installerat först. Installera [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) på din server.

En komplett genomgång av installationsprocessen och hur du använder Docker finns i vår [Docker](vserver-windows-docker.md)-guide.


## Installation
Nu när alla krav är uppfyllda och förberedelserna klara kan du fortsätta med installationen av Supabase-appen. Öppna kommandoprompten. Hämta Supabase-repot, skapa en dedikerad projektmapp och kopiera Docker-resurserna och exempelmiljöfilen dit.

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

Du kan nu nå Supabase Studio via `http://<din-ip>:8000`. Du kommer att bli ombedd att ange användarnamn och lösenord. Standarduppgifterna är:

- Användarnamn: `supabase`
- Lösenord: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Standarduppgifter
Din app körs nu med standarduppgifter. Säkra dina tjänster så snart som möjligt med instruktionerna nedan.
:::



## Konfiguration
Du bör aldrig köra i produktion med standard- eller exempelvärden. Byt ut alla platshållare mot starka, unika hemligheter, granska konfigurationen utifrån dina säkerhetskrav och starta om alla tjänster för att tillämpa ändringarna.

Generera säkra API-nycklar innan du exponerar någon tjänst. Börja med att välja en 40-teckens JWT-hemlighet. Du kan använda det förvalda värdet eller skapa en egen. Spara denna hemlighet lokalt på en säker plats. Dela den inte och checka inte in den i versionshantering. Använd hemligheten för att generera en JWT och härled sedan anon- och service-API-nycklarna med formuläret som refereras i Supabase-dokumentationen: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Kör formuläret två gånger för att få fram båda nycklarna. Uppdatera din `./docker/.env` med:

- `ANON_KEY`: anon-nyckel
- `SERVICE_ROLE_KEY`: service-nyckel

Uppdatera nödvändiga hemligheter i `./docker/.env`. Dessa värden måste vara satta för att deployment ska fungera:

- `POSTGRES_PASSWORD`: lösenord för `postgres`-rollen
- `JWT_SECRET`: används av PostgREST och GoTrue
- `SITE_URL`: bas-URL för din site
- `SMTP_*`: mailserveruppgifter
- `POOLER_TENANT_ID`: tenant-id som används av Supavisor poolern

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

Tillämpa konfigurationsändringarna genom att starta om stacken:

```
docker compose down
docker compose up -d
```




## Avslutning och fler resurser

Grattis! Du har nu framgångsrikt installerat och konfigurerat Supabase på din VPS/Dedikerade Server. Vi rekommenderar också att du kikar på följande resurser som kan ge dig extra hjälp och vägledning under din serverkonfiguration:

- [Supabase.com](https://Supabase.com/) - Officiell webbplats
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Supabase-dokumentation

Har du specifika frågor som inte täcks här? För fler frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig dagligen för att hjälpa dig! 🙂