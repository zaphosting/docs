---
id: vserver-linux-plausible
title: "VPS: Installera Plausible på OS"
description: "Upptäck hur du sätter upp en integritetsfokuserad webbanalysplattform för tydliga insikter och snabb prestanda → Lär dig mer nu"
sidebar_label: Installera Plausible
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Plausible är en lättviktig, öppen källkodsbaserad webbanalysplattform som fungerar utan cookies och följer alla integritetsregler till punkt och pricka. Den levererar viktiga mätvärden som antal besökare, sidvisningar och besökstid via en ren och intuitiv dashboard. Med sin användarvänlighet, snabba prestanda och EU-baserade infrastruktur är Plausible ett modernt och integritetsvänligt alternativ till Google Analytics.

Fundera på att hosta tjänsten själv? Vi guidar dig steg för steg genom installation och konfiguration, plus allt du behöver ha koll på.

<InlineVoucher />

## Förutsättningar

Innan du installerar **Plausible**, se till att din hostingmiljö uppfyller följande krav för en smidig installation och optimal prestanda.

| Hårdvara  | Minimum     | ZAP-Hosting Rekommendation |
| --------- | ----------- | -------------------------- |
| CPU       | 1 vCPU-kärna| 4 vCPU-kärnor              |
| RAM       | 2 GB        | 4 GB                       |
| Diskutrymme | 10 GB     | 25 GB                      |

Mjukvaran kräver att alla nödvändiga beroenden är installerade och att den körs på ett stöds operativsystem. Säkerställ att din server uppfyller följande innan du fortsätter med installationen:

**Beroenden:** `Docker`

**Operativsystem:** Senaste versionen av Ubuntu/Debian som stödjer Docker 26+

Se till att alla beroenden är installerade och att rätt OS-version används för att undvika kompatibilitetsproblem under installationen av Plausible.

## Förberedelser

Innan du sätter upp **Plausible** behöver du förbereda systemet. Det innebär att uppdatera operativsystemet till senaste versionen och installera alla nödvändiga beroenden. Dessa förberedelser garanterar en stabil miljö och hjälper till att undvika problem under eller efter installationen.

### Uppdatera systemet
För att säkerställa att ditt system kör den senaste mjukvaran och säkerhetsuppdateringarna bör du alltid börja med att uppdatera systemet. Kör följande kommando:

```
sudo apt update && sudo apt upgrade -y
```
Detta ser till att ditt system har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.

### Installera beroenden
När uppdateringen är klar kan du fortsätta med att installera beroenden.

#### Git
Plausible-data laddas ner via GitHub, vilket kräver att Git är installerat. Kör detta kommando:

```
sudo apt install git-all
```

#### Docker

Plausible körs i en Docker-container, så Docker måste installeras först. Kör följande:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

En komplett guide för installation och användning av Docker finns i vår [Docker](dedicated-linux-docker.md)-guide.

## Installation
Nu när alla krav är uppfyllda och förberedelserna klara kan du installera Plausible.

Börja med att klona Community Edition-repot och skapa konfigurationsfilen:

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

Skapa sedan en miljöfil (.env) och definiera de viktiga variablerna. BASE_URL måste peka på den faktiska domänen som redan har en DNS-post som pekar till din server. Du behöver också generera en slumpmässig SECRET_KEY_BASE med minst 64 bytes:

```
touch .env
echo "BASE_URL=https://Plausible.example.com" >> .env
echo "SECRET_KEY_BASE=$(openssl rand -base64 48)" >> .env
echo "HTTP_PORT=80" >> .env
echo "HTTPS_PORT=443" >> .env
```

Verifiera filens innehåll med `cat .env` för att säkerställa att värdena är korrekta. Utdata ska se ut så här:

```
BASE_URL=https://Plausible.example.com
SECRET_KEY_BASE=As0fZsJlUpuFYSthRjT5Yflg/NlxkFKPRro72xMLXF8yInZ60s6xGGXYVqml+XN1
HTTP_PORT=80
HTTPS_PORT=443
```

Dessa standardportar tillåter Let’s Encrypt att automatiskt utfärda TLS-certifikat. Om du planerar att köra Plausible bakom en reverse proxy kan du justera dessa värden. Skapa dessutom en `compose.override.yml` för att exponera rätt portar för Plausible-containern:

```
cat > compose.override.yml << EOF
services:
  Plausible:
    ports:
      - 80:80
      - 443:443
EOF 
```

Starta slutligen de nödvändiga tjänsterna med Docker Compose:

```
docker compose up -d
```

När containrarna körs, öppna din webbläsare på domänen som anges i BASE_URL och skapa det första användarkontot.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)

## Konfiguration

Plausible kan integreras med Google Search Console för att berika din analys med sökordsdata. Det låter dig se vilka sökord som driver trafik till din sajt och ger djupare insikter om besökarnas beteende.

Om du redan har ett Google Cloud-konto och en OAuth-klient konfigurerad, behöver du bara lägga till dina uppgifter (`GOOGLE_CLIENT_ID` och `GOOGLE_CLIENT_SECRET`) i `.env`-filen. Spara och starta om Docker-tjänsterna med `docker compose up -d`. Gå sedan till *Site Settings > Integrations* i Plausible för att slutföra kopplingen och följa autentiseringsstegen.

Om du inte har en OAuth-klient eller är osäker på processen, erbjuder Plausibles officiella Wiki en detaljerad steg-för-steg-guide. Den visar hur du skapar ett projekt i Google Cloud, aktiverar nödvändiga API:er, konfigurerar en OAuth-klient och lägger till uppgifterna i Plausible: [Plausible Wiki: Google Integration](https://github.com/Plausible/community-edition/wiki/google-integration).

Om du använder Google Search Console kan du konfigurera Google Integration för att hämta data om söktermer, vilket är riktigt smidigt.

Har du redan ett Google Cloud-konto med en OAuth-klient kan du enkelt klistra in `GOOGLE_CLIENT_ID` och `GOOGLE_CLIENT_SECRET` i `.env`-filen, starta om Docker med `docker compose up -d` och följa instruktionerna i Plausibles Site Settings > Integrations.

## Avslutning och fler resurser

Grattis! Du har nu installerat och konfigurerat Plausible på din VPS. Vi rekommenderar också att du kikar på följande resurser som kan ge dig extra hjälp och tips under din serverkonfiguration:

- [Plausible.io](https://Plausible.io/) - Officiell webbplats
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) - Nyheter, diskussioner, buggrapporter

Har du frågor som inte täcks här? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />