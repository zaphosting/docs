---
id: dedicated-linux-bitwarden
title: "Dedikerad Server: Installera Bitwarden på Linux"
description: "Upptäck hur du säkert hanterar lösenord med Bitwarden med end-to-end-kryptering för moln- eller egenhostade lösningar → Lär dig mer nu"
sidebar_label: Installera Bitwarden
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Bitwarden är en open source-lösenordshanterare för lösenord och passkeys som använder zero knowledge och end-to-end-kryptering för att skydda dina data. Du kan använda den som molntjänst eller hosta själv, med funktioner för att generera, lagra och autofylla starka inloggningsuppgifter.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Fundera på att hosta tjänsten själv? Vi guidar dig steg för steg genom installation och konfiguration, plus allt du behöver ha koll på.

## Förutsättningar

Innan du installerar **Bitwarden**, se till att din hostingmiljö uppfyller följande krav för en smidig installation och optimal prestanda.

| Hårdvara  | Minimum    | ZAP-Hosting Rekommendation |
| --------- | ---------- | -------------------------- |
| CPU       | 1 CPU-kärna| 4 CPU-kärnor               |
| RAM       | 2 GB       | 4 GB                       |
| Diskutrymme | 12 GB    | 25 GB                      |

Mjukvaran kräver att alla nödvändiga beroenden är installerade och att den körs på ett stöds operativsystem. Säkerställ att din server uppfyller följande innan du fortsätter med installationen:

**Beroenden:** `Docker (Engine 26+ och Compose)`

**Operativsystem:** Senaste versionen av Ubuntu/Debian som stödjer Docker 26+

Se till att alla beroenden är installerade och att rätt OS-version används för att undvika kompatibilitetsproblem under installationen av Bitwarden.

## Förberedelser

Innan du sätter upp **Bitwarden** behöver du förbereda systemet. Det innebär att uppdatera operativsystemet till senaste versionen och installera alla nödvändiga beroenden. Dessa förberedelser garanterar en stabil miljö och hjälper till att undvika problem under eller efter installationen.

### Uppdatera systemet
För att säkerställa att ditt system kör den senaste mjukvaran och säkerhetsuppdateringarna bör du alltid börja med att uppdatera systemet. Kör följande kommando:

```
sudo apt update && sudo apt upgrade -y
```
Detta ser till att ditt system har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.

### Installera beroenden
När uppdateringen är klar kan du installera beroenden. Bitwarden körs i flera Docker-containrar, så Docker måste installeras först. Kör följande:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

En komplett guide för installation och användning av Docker finns i vår [Docker](dedicated-linux-docker.md)-guide.

### Skapa användare & katalog

Vi rekommenderar att du konfigurerar din Linux-server med ett dedikerat `bitwarden`-konto för att installera och köra Bitwarden. Det isolerar din Bitwarden-instans från andra applikationer på servern.

Skapa bitwarden-användaren och sätt ett starkt, unikt lösenord:

```
sudo adduser bitwarden
sudo passwd bitwarden
```

Skapa docker-gruppen om den inte finns och lägg till bitwarden-användaren i den:

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

Skapa arbetskatalogen, sätt rättigheter och ägarskap till bitwarden:

```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```

### Konfigurera din domän

Som standard kör Bitwarden på hosten via portarna 80 (HTTP) och 443 (HTTPS). Sätt upp en domän med DNS-poster som pekar till hosten, t.ex. server.example.com, särskilt om du ska nå den via internet. Undvik att ha med "bitwarden" i hostnamnet för att minska risken att avslöja serverns roll eller mjukvara.

## Installation

Nu när alla krav är uppfyllda och förberedelserna klara kan du installera Bitwarden.

Ladda ner installationsscriptet till din maskin och kör det. En `./bwdata`-katalog skapas i samma mapp som `bitwarden.sh`.

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

I installatören anger du först domännamnet för din Bitwarden-instans, vanligtvis den DNS-post du konfigurerat. Sedan väljer du om Let’s Encrypt ska generera ett gratis och betrott SSL-certifikat. Om ja, ange en e-postadress för utgångsmeddelanden. Om nej följer frågor om certifikatet.

Ange din Installation ID och Installation Key, som du hämtar på [Bitwarden](https://bitwarden.com/host). Välj sedan region US eller EU, vilket bara spelar roll om du kopplar en egenhostad instans till en betald prenumeration.

Om du inte använder Let’s Encrypt kan du använda ett befintligt certifikat genom att lägga filerna i `./bwdata/ssl/your.domain` och ange om det är betrott. Alternativt kan du generera ett självsignerat certifikat, vilket rekommenderas endast för testning. Om du väljer inget certifikat måste du ha en HTTPS-proxy framför installationen, annars fungerar inte Bitwarden.

## Konfiguration

Efter installationen gör du grundläggande konfiguration via två filer. Börja med att redigera miljöfilen `./bwdata/env/global.override.env`. Sätt dina SMTP-inställningar där, inklusive host, port, SSL, användarnamn och lösenord, så Bitwarden kan skicka verifierings- och organisationsinbjudningar. Om du behöver åtkomst till System Administrator Portal, lägg till en admin-e-post i `adminSettings__admins`.

```
...
globalSettings__mail__smtp__host=<placeholder>
globalSettings__mail__smtp__port=<placeholder>
globalSettings__mail__smtp__ssl=<placeholder>
globalSettings__mail__smtp__username=<placeholder>
globalSettings__mail__smtp__password=<placeholder>
...
adminSettings__admins=
...
```

Testa SMTP-inställningarna med `./bitwarden.sh checksmtp`. En korrekt setup visar "success", annars får du felmeddelanden om saknat OpenSSL eller felaktiga värden. Applicera ändringar med `./bitwarden.sh restart`.

Granska sedan installationsparametrarna i `./bwdata/config.yml`. Denna fil styr genererade resurser och måste justeras för speciella miljöer, t.ex. om du kör bakom proxy eller använder andra portar. Applicera ändringar med `./bitwarden.sh rebuild`.

Starta slutligen instansen med `./bitwarden.sh start`. Första starten kan ta tid medan Docker laddar ner bilder. Kontrollera med `docker ps` att alla containrar är friska. Öppna sedan webbvaulten på din domän och registrera ett konto vid behov. E-postverifiering kräver korrekt SMTP-konfiguration.

## Avslutning och fler resurser

Grattis! Du har nu installerat och konfigurerat Bitwarden på din dedikerade server. Vi rekommenderar även att kolla in följande resurser för extra hjälp och tips under din serverkonfiguration:

- [bitwarden.com](https://bitwarden.com/) - Officiell webbplats
- https://bitwarden.com/help/ - Bitwarden Help Center (Dokumentation)

Har du frågor som inte täcks här? Tveka inte att kontakta vår support, vi finns tillgängliga varje dag för att hjälpa dig! 🙂