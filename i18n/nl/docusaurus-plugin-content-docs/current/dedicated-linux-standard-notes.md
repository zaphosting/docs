---
id: dedicated-linux-standard-notes
title: "Dedicated Server: Standard Notes installeren op Linux"
description: "Ontdek hoe je je notities veilig synchroniseert en beschermt op al je apparaten met Standard Notes zelfhosten → Leer het nu"
sidebar_label: Standard Notes installeren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Standard Notes is een open-source notitie-app die jouw data beschermt met geauditeerde end-to-end encryptie. Alleen jij hebt de sleutels om te ontsleutelen. Je versleutelde notities en bestanden worden naadloos gesynchroniseerd over onbeperkt veel apparaten, zijn offline toegankelijk en je content wordt actief beschermd tegen externe toegang.

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

Wil je deze service zelf hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles wat je moet weten.



## Vereisten

Voordat je **Standard Notes** installeert, zorg dat je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale performance.

| Hardware   | Minimum      | ZAP-Hosting Aanbeveling  |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 vCPU Core  | 4 vCPU Cores             |
| RAM        | 2 GB         | 4 GB                     |
| Schijfruimte | 5 GB       | 25 GB                    |

De software vereist dat alle benodigde dependencies geïnstalleerd zijn en dat het draait op een ondersteund besturingssysteem. Check dat je server aan deze eisen voldoet voordat je verder gaat met installeren:

**Dependencies:** `Docker (Engine 26+ en Compose)`

**Besturingssysteem:** Laatste versie van Ubuntu/Debian die Docker 26+ ondersteunt

Zorg dat alle dependencies geïnstalleerd zijn en dat je de juiste OS-versie gebruikt om compatibiliteitsproblemen tijdens de installatie van Standard Notes te voorkomen.



## Voorbereiding

Voordat je **Standard Notes** installeert, moet je je systeem klaarmaken. Dit betekent je besturingssysteem updaten naar de nieuwste versie en alle benodigde dependencies installeren. Zo zorg je voor een stabiele omgeving en voorkom je problemen tijdens of na de installatie.


### Systeem updaten
Om te zorgen dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je eerst een systeemupdate uit met:

```
sudo apt update && sudo apt upgrade -y
```
Dit zorgt dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.

### Dependencies installeren
Als de update klaar is, kun je de dependencies installeren. Standard Notes draait in een set Docker containers, dus Docker moet eerst geïnstalleerd worden. Gebruik hiervoor:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Een volledige uitleg over het installeren en gebruiken van Docker vind je in onze [Docker](vserver-linux-docker.md) gids.




## Installatie
Nu aan alle eisen is voldaan en de voorbereidingen klaar zijn, kun je Standard Notes installeren.



Maak eerst een map aan waar alle configuratie- en setupbestanden in komen. Dit wordt je werkmap voor de installatie.

```
mkdir standardnotes
cd standardnotes
```

Maak vervolgens een `.env` bestand aan in je werkmap en vul deze met de standaardwaarden uit de voorbeeldconfiguratie van het project:

```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

Dit bestand bevat alleen de minimale vereiste variabelen voor een werkende setup. De volledige lijst met variabelen die nu gebruikt worden, vind je hier: [docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

Open het `.env` bestand en zorg dat alle sleutels in de KEYS-sectie correct zijn ingevuld. Genereer voor elke vereiste environment variabele een willekeurige waarde met:

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

Als alles klaar is, haal je de nieuwste images binnen en start je de services in detached mode:

```
docker compose pull && docker compose up -d
```



## Configuratie

De standaardconfiguratie in het meegeleverde `docker-compose.yml` bestand kun je aanpassen naar jouw wensen. Een belangrijk onderdeel is de `server` service, waar je de poortmappingen in de `ports` property kunt wijzigen. Zo bepaal je op welke hostpoorten de app bereikbaar is, wat handig is om conflicten met andere services te voorkomen of om aan te sluiten bij jouw netwerksetup.

Het beveiligen van de database is ook cruciaal. Vervang standaardwachtwoorden door sterke, willekeurig gegenereerde strings. Maak een veilig wachtwoord aan met:

```
openssl rand -hex 12  
```

Voeg deze waarde toe aan het `.env` bestand als `DB_PASSWORD`. Gebruik hetzelfde wachtwoord ook voor `MYSQL_ROOT_PASSWORD` en `MYSQL_PASSWORD` in het `docker-compose.yml` bestand, zodat de containers synchroon blijven.

Met deze configuratiewijzigingen zorg je dat je installatie niet alleen werkt, maar ook veilig en op maat is voor jouw omgeving.





## Verbinden met de Sync Server

Om je account in Standard Notes aan te maken, klik je onderin rechts op het avatar-icoon. Kies in het menu voor “Create Account” om een nieuw profiel te maken. Vul een geldig e-mailadres en een sterk wachtwoord in.

Voordat je het proces afrondt, open je de “Advanced Options”. Kies bij “Sync Server” voor “Custom” en vul het IP-adres en de poort van je eigen server in het formaat IP:Port in. Zo worden je notities niet gesynchroniseerd via de standaard Standard Notes service, maar via jouw zelfgehoste server.

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)





## Conclusie en meer bronnen

Gefeliciteerd! Je hebt Standard Notes nu succesvol geïnstalleerd en geconfigureerd op je Dedicated Server. We raden je ook aan om deze bronnen te bekijken, die je extra hulp en tips kunnen geven tijdens het configureren van je server:

- [Standardnotes.com](https://standardnotes.com/) - Officiële website
- [Standardnotes.com/help](https://standardnotes.com/help) - Standard Notes Help Center (documentatie)

Heb je nog vragen die hier niet beantwoord worden? Neem gerust contact op met onze support, we staan dagelijks voor je klaar om je te helpen! 🙂