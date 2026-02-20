---
id: vserver-linux-standard-notes
title: "Standard Notes op een Linux Server Installeren - Bouw je Eigen Private Notes Systeem"
description: "Ontdek hoe je je notities veilig synchroniseert en beschermt op al je apparaten met Standard Notes self-hosting → Leer het nu"
sidebar_label: Standard Notes Installeren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Standard Notes is een open-source notitie-app die je data beschermt met geauditeerde end-to-end encryptie. Alleen jij hebt de sleutels om je notities te ontsleutelen. Het synchroniseert je versleutelde notities en bestanden moeiteloos over onbeperkt veel apparaten, houdt ze offline toegankelijk en beschermt actief je content tegen externe toegang.

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

Overweeg je om deze service zelf te hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles wat je moet weten.

<InlineVoucher />



## Vereisten

Voordat je **Standard Notes** installeert, check je of je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale performance.

| Hardware   | Minimum      | ZAP-Hosting Aanbeveling  |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 vCPU Core  | 4 vCPU Cores             |
| RAM        | 2 GB         | 4 GB                     |
| Schijfruimte | 5 GB       | 25 GB                    |

De software vereist dat alle benodigde dependencies geïnstalleerd zijn en dat het draait op een ondersteund besturingssysteem. Zorg dat je server aan de volgende eisen voldoet voordat je verder gaat met installeren:

**Dependencies:** `Docker (Engine 26+ en Compose)`

**Besturingssysteem:** Laatste versie van Ubuntu/Debian met ondersteuning voor Docker 26+

Zorg dat alle dependencies geïnstalleerd zijn en dat je de juiste OS-versie gebruikt om compatibiliteitsproblemen tijdens de installatie van Standard Notes te voorkomen.



## Voorbereiding

Voordat je **Standard Notes** installeert, moet je je systeem klaarmaken. Dit betekent dat je je besturingssysteem update naar de nieuwste versie en alle benodigde dependencies installeert. Deze voorbereidingen zorgen voor een stabiele omgeving en voorkomen problemen tijdens of na de installatie.


### Systeem updaten
Om zeker te zijn dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je eerst een systeemupdate uit. Gebruik hiervoor het volgende commando:

```
sudo apt update && sudo apt upgrade -y
```
Dit zorgt ervoor dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.

### Dependencies installeren
Als de update klaar is, kun je de dependencies installeren. Standard Notes draait in een set Docker containers, dus Docker moet eerst geïnstalleerd worden. Gebruik hiervoor:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Een volledige walkthrough van de installatie en het gebruik van Docker vind je in onze [Docker](dedicated-linux-docker.md) gids.




## Installatie
Nu aan alle vereisten is voldaan en de voorbereidingen klaar zijn, kun je Standard Notes installeren.



Maak eerst een map aan waarin alle configuratie- en setupbestanden komen te staan. Dit wordt je werkmap voor de installatie.

```
mkdir standardnotes
cd standardnotes
```

Maak vervolgens een `.env` bestand aan in je werkmap en vul deze met de standaardwaarden uit de voorbeeldconfiguratie van het project:
```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

Dit bestand bevat alleen de minimaal benodigde variabelen voor een werkende setup. De volledige lijst met variabelen die nu gebruikt worden vind je hier: [docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

Open het `.env` bestand en zorg dat alle sleutels in de KEYS sectie correct zijn ingevuld. Genereer voor elke vereiste environment variabele een willekeurige waarde met:

```
openssl rand -hex 32
```

Plak deze waarden in je `.env` bestand. Standard Notes heeft een bootstrap script nodig voor LocalStack. Download dit in je werkmap en maak het uitvoerbaar:

```shell
curl https://raw.githubusercontent.com/standardnotes/server/main/docker/localstack_bootstrap.sh > localstack_bootstrap.sh
chmod +x localstack_bootstrap.sh
```

Download de officiële voorbeeldconfiguratie en sla deze op als `docker-compose.yml` in je werkmap. Dit bestand definieert alle container services die Standard Notes nodig heeft.

```
curl https://raw.githubusercontent.com/standardnotes/server/main/docker-compose.example.yml > docker-compose.yml
```

Als alles klaarstaat, haal je de nieuwste images binnen en start je de services in detached mode:

```
docker compose pull && docker compose up -d
```



## Configuratie

De standaardconfiguratie in het meegeleverde `docker-compose.yml` bestand kun je aanpassen naar je eigen wensen. Een belangrijk onderdeel is de `server` service, waar je de poortmappingen in de `ports` property kunt wijzigen. Zo bepaal je op welke hostpoorten de app bereikbaar is, wat handig is om conflicten met andere services te voorkomen of om aan te sluiten op je netwerkvoorkeuren.

Het beveiligen van de database is ook cruciaal. Vervang standaardwachtwoorden door sterke, willekeurig gegenereerde strings. Maak een veilig wachtwoord aan met:

```
openssl rand -hex 12  
```

Voeg deze waarde toe aan het `.env` bestand als `DB_PASSWORD`. Gebruik dezelfde waarde ook voor `MYSQL_ROOT_PASSWORD` en `MYSQL_PASSWORD` in het `docker-compose.yml` bestand zodat de containers synchroon blijven.

Met deze configuratiewijzigingen zorg je dat je installatie niet alleen werkt, maar ook veilig en op maat is voor jouw omgeving.





## Verbinden met de Sync Server

Om je account in Standard Notes aan te maken, klik je op het avatar-icoon rechtsonder in de app. Kies in het menu voor “Create Account” om een nieuw profiel aan te maken. Vul een geldig e-mailadres in en een sterk wachtwoord.

Voordat je het proces afrondt, open je de sectie “Advanced Options”. Kies bij “Sync Server” de optie “Custom” en vul het IP-adres en de poort van je eigen server in het formaat IP:Poort in. Zo zorg je dat je notities niet via de standaard Standard Notes service gesynchroniseerd worden, maar via jouw zelf-gehoste server.

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)





## Conclusie en meer bronnen

Gefeliciteerd! Je hebt Standard Notes nu succesvol geïnstalleerd en geconfigureerd op je VPS/Dedicated Server. We raden je ook aan om deze bronnen te checken, die je extra hulp en tips kunnen geven tijdens je serverconfiguratie:

- [Standardnotes.com](https://standardnotes.com/) - Officiële Website
- [Standardnotes.com/help](https://standardnotes.com/help) - Standard Notes Help Center (Documentatie)

Heb je nog vragen die hier niet beantwoord worden? Voor verdere vragen of support kun je altijd contact opnemen met ons supportteam, dat dagelijks voor je klaarstaat! 🙂