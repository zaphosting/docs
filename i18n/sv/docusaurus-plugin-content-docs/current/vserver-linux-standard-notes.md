---
id: vserver-linux-standard-notes
title: "Installera Standard Notes på en Linux-server – Bygg ditt privata anteckningssystem"
description: "Upptäck hur du säkert synkar och skyddar dina anteckningar över enheter med Standard Notes självhosting → Lär dig mer nu"
sidebar_label: Installera Standard Notes
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Standard Notes är en open-source anteckningsapp som skyddar dina data med granskad end-to-end-kryptering. Endast du har kontroll över dekrypteringsnycklarna. Den synkar dina krypterade anteckningar och filer sömlöst över obegränsat antal enheter, håller dem tillgängliga offline och skyddar aktivt ditt innehåll från extern åtkomst.

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

Fundera på att hosta den här tjänsten själv? Vi guidar dig steg för steg hur du installerar och konfigurerar den, plus allt du behöver ha koll på.

<InlineVoucher />



## Förutsättningar

Innan du installerar **Standard Notes**, se till att din hostingmiljö uppfyller följande krav för en smidig installation och optimal prestanda.

| Hårdvara  | Minimum     | ZAP-Hosting Rekommendation |
| --------- | ----------- | -------------------------- |
| CPU       | 1 vCPU-kärna | 4 vCPU-kärnor             |
| RAM       | 2 GB        | 4 GB                      |
| Diskutrymme | 5 GB       | 25 GB                     |

Mjukvaran kräver att alla nödvändiga beroenden är installerade och att den körs på ett stöds operativsystem. Säkerställ att din server uppfyller följande innan du fortsätter med installationen:

**Beroenden:** `Docker (Engine 26+ och Compose)`

**Operativsystem:** Senaste versionen av Ubuntu/Debian som stödjer Docker 26+

Se till att alla beroenden är installerade och att rätt OS-version används för att undvika kompatibilitetsproblem under installationen av Standard Notes.



## Förberedelser

Innan du sätter upp **Standard Notes** behöver du förbereda ditt system. Det innebär att uppdatera operativsystemet till senaste versionen och installera alla nödvändiga beroenden. Dessa förberedelser garanterar en stabil miljö och hjälper till att undvika problem under eller efter installationen.


### Uppdatera systemet
För att säkerställa att ditt system kör den senaste mjukvaran och säkerhetsuppdateringarna bör du alltid börja med att uppdatera systemet. Kör följande kommando:

```
sudo apt update && sudo apt upgrade -y
```
Detta ser till att ditt system har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.

### Installera beroenden
När uppdateringen är klar kan du fortsätta med installationen av beroenden. Standard Notes körs i flera Docker-containrar, så Docker måste installeras först. Kör följande kommando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

En komplett guide för installation och användning av Docker finns i vår [Docker](dedicated-linux-docker.md)-guide.




## Installation
Nu när alla krav är uppfyllda och förberedelserna klara kan du fortsätta med installationen av Standard Notes-appen.



Börja med att skapa en mapp som kommer att innehålla alla konfigurations- och installationsfiler. Denna mapp blir din arbetskatalog för installationen.

```
mkdir standardnotes
cd standardnotes
```

Skapa sedan en `.env`-fil i din arbetskatalog och fyll den med standardvärden från projektets exempelkonfiguration:
```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

Denna fil innehåller bara de minimala variabler som krävs för en fungerande setup. Den fullständiga listan över variabler som används hittar du här: [docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

Öppna `.env`-filen och se till att alla nycklar i KEYS-sektionen är korrekt satta. Generera slumpmässiga värden för varje miljövariabel med:

```
openssl rand -hex 32
```

Klistra in dessa värden i din `.env`-fil. Standard Notes kräver ett bootstrap-script för LocalStack. Ladda ner det till din arbetskatalog och gör det körbart:

```shell
curl https://raw.githubusercontent.com/standardnotes/server/main/docker/localstack_bootstrap.sh > localstack_bootstrap.sh
chmod +x localstack_bootstrap.sh
```

Ladda ner den officiella exempelkonfigurationen och spara den som `docker-compose.yml` i din arbetsmapp. Denna fil definierar alla container-tjänster som behövs för Standard Notes.

```
curl https://raw.githubusercontent.com/standardnotes/server/main/docker-compose.example.yml > docker-compose.yml
```

När allt är klart, hämta de senaste bilderna och starta tjänsterna i detached-läge:

```
docker compose pull && docker compose up -d
```



## Konfiguration

Standardinställningarna i den medföljande `docker-compose.yml`-filen kan anpassas efter dina behov. En viktig del är `server`-tjänsten där du kan justera portmappningarna i `ports`-egenskapen. Det låter dig välja vilka portar på värddatorn appen ska vara tillgänglig på, vilket hjälper dig undvika konflikter med andra tjänster eller anpassa till ditt nätverk.

Att säkra databasen är också viktigt. Byt ut standardlösenord mot starka, slumpgenererade strängar. Du kan skapa ett säkert lösenord med:

```
openssl rand -hex 12  
```

Lägg till det genererade värdet i `.env`-filen som `DB_PASSWORD`. Samma värde måste även sättas för `MYSQL_ROOT_PASSWORD` och `MYSQL_PASSWORD` i `docker-compose.yml` för att hålla containrarna synkade.

Dessa ändringar gör att din installation inte bara fungerar utan också är säker och anpassad efter din miljö.





## Anslut till Sync Server

För att skapa ditt konto i Standard Notes, klicka på avatar-ikonen längst ner till höger i appen. I menyn som dyker upp, välj “Create Account” för att börja skapa en ny användarprofil. Ange en giltig e-postadress och ett säkert lösenord.

Innan du slutför, öppna “Advanced Options”. Under “Sync Server” väljer du “Custom” och anger IP-adressen och porten till din egen server i formatet IP:Port. Detta säkerställer att dina anteckningar inte synkas via Standard Notes standardtjänst utan via din egen självhostade server.

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)





## Avslutning och fler resurser

Grattis! Du har nu framgångsrikt installerat och konfigurerat Standard Notes på din VPS/Dedikerade server. Vi rekommenderar även att du kikar på följande resurser som kan ge dig extra hjälp och vägledning under din serverkonfiguration:

- [Standardnotes.com](https://standardnotes.com/) – Officiell webbplats
- [Standardnotes.com/help](https://standardnotes.com/help) – Standard Notes Hjälpcenter (Dokumentation)

Har du frågor som inte täcks här? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂