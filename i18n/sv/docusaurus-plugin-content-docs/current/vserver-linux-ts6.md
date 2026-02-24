---
id: vserver-linux-ts6
title: "Sätt upp TeamSpeak 6 Server på en Linux-server – Kör din egen röstplattform"
description: "Upptäck hur du sätter upp och optimerar TeamSpeak 6 Server för pålitlig hosting och prestanda → Läs mer nu"
sidebar_label: Installera Teamspeak 6 Server
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Sommaren 2025 släppte TeamSpeak **Beta-versionen** av **TeamSpeak 6 Server**. Nu kan du uppleva nästa generation av TeamSpeak på riktigt!

Fundera på att hosta tjänsten själv? Vi guidar dig steg för steg hur du sätter upp och konfigurerar den, plus allt du behöver ha koll på.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Förutsättningar

Innan du installerar **Teamspeak 6 Server**, se till att din hostingmiljö uppfyller följande krav för en smidig installation och optimal prestanda.

| Hårdvara   | Minimum      | ZAP-Hosting Rekommendation |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU-kärna | 4 vCPU-kärnor              |
| RAM        | 1 GB         | 4 GB                       |
| Diskutrymme| 1 GB         | 25 GB                      |



## Förberedelser

Innan du sätter upp **TeamSpeak 6 Server** behöver du förbereda systemet. Det innebär att uppdatera operativsystemet till senaste versionen och installera alla nödvändiga beroenden. Dessa förberedelser garanterar en stabil miljö och minskar risken för problem under eller efter installationen.


### Uppdatera systemet
För att säkerställa att ditt system kör den senaste mjukvaran och säkerhetsuppdateringarna bör du alltid börja med att uppdatera systemet. Kör följande kommando:

```
sudo apt update && sudo apt upgrade -y
```
Detta ser till att systemet har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.

### Installera beroenden
När uppdateringen är klar kan du installera beroenden. För en snabb, enkel och rekommenderad installation rekommenderar vi att använda Docker. För detta måste du installera Docker Engine:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Installation
Nu när alla krav är uppfyllda och förberedelserna klara kan du gå vidare med installationen av Teamspeak 6 Server-appen.

Nästa steg är att skapa Docker Compose-filen `docker-compose.yml` för TeamSpeak 6 Server. Du kan välja vilken katalog som helst, men i det här exemplet skapas filen under `/opt/containers/ts6/`. Här används den officiella TeamSpeak Compose-filen:

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # Röstport
      - "30033:30033/tcp" # Filöverföring
      # - "10080:10080/tcp" # Web Query
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

Navigera till katalogen där filen ska skapas och skapa filen. Använd kommandot `nano docker-compose.yml` och klistra in innehållet.

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


För att starta Docker-containern och TeamSpeak 6 Server, kör följande Docker Compose-kommando:
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

Nu startar Docker-containern för TeamSpeak 6 Server. Som standard körs den inte i bakgrunden än. Vid första starten får du **viktig info** om **Server Query Admin-kontot** och **privilegienyckeln**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Spara denna info säkert, den visas inte igen vid framtida starter. Stoppa sedan containern med `CTRL+C`.



## Konfiguration

Du kan justera fler inställningar för TeamSpeak 6 Server via **miljövariabler** i Docker Compose-filen. Det låter dig anpassa servern efter dina behov. En fullständig lista på tillgängliga alternativ finns i den officiella [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md)-dokumentationen.

Exempel i `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## Serverhantering

För att hålla TeamSpeak 6 Server igång i bakgrunden, starta containern med detta kommando:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

För att stoppa TeamSpeak 6 Server, stoppa containern med detta kommando:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Ansluta till servern

När TeamSpeak 6 Server är igång kan du ansluta med TeamSpeak 6-klienten. Använd bara serverns IP-adress och rätt port. Fyll i dessa uppgifter i klienten för att koppla upp dig och börja testa.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Sammanfattning och fler resurser

Grattis! Du har nu framgångsrikt installerat och konfigurerat Teamspeak 6 Server på din VPS/Dedikerade Server. Vi rekommenderar också att kolla in följande resurser som kan ge dig extra hjälp och tips under serverkonfigurationen:

- [Officiell webbplats](https://teamspeak.com/en/) – Info och nedladdningar för TeamSpeak 6
- [Community Forum](https://community.teamspeak.com/) – Support och diskussioner
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) – Rapportera buggar och följ öppna ärenden

Har du frågor som inte täcks här? Hör gärna av dig till vår support, vi finns tillgängliga varje dag för att hjälpa dig! 🙂