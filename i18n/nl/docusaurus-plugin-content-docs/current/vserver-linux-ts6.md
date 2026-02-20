---
id: vserver-linux-ts6
title: "TeamSpeak 6 Server op een Linux Server Installeren - Zet Je Eigen Voice Platform Op"
description: "Ontdek hoe je de TeamSpeak 6 Server installeert en optimaliseert voor betrouwbare hosting en performance → Leer het nu"
sidebar_label: Installeer Teamspeak 6 Server
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

In de zomer van 2025 bracht TeamSpeak de **Beta versie** van de **TeamSpeak 6 Server** uit. Ervaar nu zelf de volgende generatie van TeamSpeak!

Wil je deze service zelf hosten? We nemen je stap voor stap mee in het installatie- en configuratieproces, inclusief alles wat je moet weten.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Vereisten

Voordat je de **Teamspeak 6 Server** installeert, zorg je dat je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale performance.

| Hardware   | Minimum      | ZAP-Hosting Aanbeveling  |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 vCPU Core  | 4 vCPU Cores             |
| RAM        | 1 GB         | 4 GB                     |
| Schijfruimte | 1 GB       | 25 GB                    |



## Voorbereiding

Voordat je de **TeamSpeak 6 Server** installeert, moet je je systeem klaarmaken. Dit betekent dat je je besturingssysteem bijwerkt naar de nieuwste versie en alle benodigde dependencies installeert. Zo zorg je voor een stabiele omgeving en voorkom je problemen tijdens of na de installatie.


### Systeem bijwerken
Om zeker te zijn dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je eerst een systeemupdate uit. Gebruik hiervoor het volgende commando:

```
sudo apt update && sudo apt upgrade -y
```
Dit zorgt ervoor dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.

### Dependencies installeren
Als de update klaar is, kun je de dependencies installeren. Voor een snelle, makkelijke en aanbevolen installatie raden we Docker aan. Installeer daarvoor eerst de Docker Engine:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Installatie
Nu aan alle vereisten is voldaan en de voorbereidingen zijn getroffen, kun je de Teamspeak 6 Server applicatie installeren.

De volgende stap is het aanmaken van het Docker Compose bestand `docker-compose.yml` voor de TeamSpeak 6 Server. Je kunt elke map kiezen, maar in dit voorbeeld maken we het bestand aan onder `/opt/containers/ts6/`. Hiervoor gebruiken we het officiële TeamSpeak Compose bestand:

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # Voice Port
      - "30033:30033/tcp" # File Transfer
      # - "10080:10080/tcp" # Web Query
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

Navigeer naar de map waar het bestand moet komen en maak het bestand aan. Gebruik hiervoor het commando `nano docker-compose.yml` en plak de inhoud erin.

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


Om de Docker container en de TeamSpeak 6 Server te starten, gebruik je het volgende Docker Compose commando:
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

De Docker container voor de TeamSpeak 6 Server start nu. Standaard draait hij nog niet persistent. Bij de eerste start zie je **belangrijke info** over het **Server Query Admin Account** en de **privilege key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Bewaar deze gegevens goed, want ze worden bij volgende starts niet meer getoond. Stop daarna de container weer met `CTRL+C`.



## Configuratie

Je kunt extra instellingen voor de TeamSpeak 6 Server aanpassen via **environment variables** in het Docker Compose bestand. Zo configureer je de server precies zoals jij wilt. Een volledige lijst met opties vind je in de officiële [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md) documentatie.

Voorbeeld in `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## Server beheer

Om de TeamSpeak 6 Server op de achtergrond te laten draaien, start je de container met:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

Om de TeamSpeak 6 Server te stoppen, stop je de container met:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Verbinden

Als de TeamSpeak 6 Server draait, kun je verbinden met de TeamSpeak 6 Client. Gebruik simpelweg het IP-adres van je server en de juiste poort. Vul deze gegevens in de client in om verbinding te maken en te testen.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusie en meer bronnen

Gefeliciteerd! Je hebt nu succesvol de Teamspeak 6 Server geïnstalleerd en geconfigureerd op je VPS/Dedicated Server. We raden je ook aan om de volgende bronnen te bekijken, die je extra hulp en tips kunnen geven tijdens het configureren van je server:

- [Officiële Website](https://teamspeak.com/en/) - Info en downloads voor TeamSpeak 6
- [Community Forum](https://community.teamspeak.com/) - Support en discussies van gebruikers
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Bugs melden en openstaande issues volgen

Heb je specifieke vragen die hier niet behandeld worden? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂