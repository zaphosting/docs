---
id: dedicated-linux-plausible
title: "Dedicated Server: Plausible installeren op OS"
description: "Ontdek hoe je een privacygerichte webanalyseplatform instelt dat belangrijke inzichten snel en eenvoudig levert → Leer het nu"
sidebar_label: Plausible installeren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Plausible is een lichtgewicht, open-source webanalyseplatform dat zonder cookies werkt en volledig voldoet aan privacyregels. Het levert belangrijke statistieken, zoals bezoekersaantallen, paginaweergaven en bezoektijd, via een overzichtelijk en intuïtief dashboard. Dankzij het gebruiksgemak, de snelle prestaties en de EU-gebaseerde infrastructuur is Plausible een moderne en privacybewuste alternatief voor Google Analytics.

Wil je deze service zelf hosten? We nemen je stap voor stap mee in het installatie- en configuratieproces, inclusief alles wat je moet weten.

## Vereisten

Voordat je **Plausible** installeert, zorg dat je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale prestaties.

| Hardware   | Minimum     | ZAP-Hosting Aanbeveling  |
| ---------- | ----------- | ------------------------ |
| CPU        | 1 CPU-core  | 4 CPU-cores              |
| RAM        | 2 GB        | 4 GB                     |
| Schijfruimte | 10 GB     | 25 GB                    |

De software vereist dat alle benodigde dependencies geïnstalleerd zijn en dat het draait op een ondersteund besturingssysteem. Controleer dat je server aan de volgende eisen voldoet voordat je verder gaat met de installatie:

**Dependencies:** `Docker`

**Besturingssysteem:** Laatste versie van Ubuntu/Debian met ondersteuning voor Docker 26+

Zorg dat alle dependencies geïnstalleerd zijn en dat je de juiste OS-versie gebruikt om compatibiliteitsproblemen tijdens de installatie van Plausible te voorkomen.

## Voorbereiding

Voordat je **Plausible** installeert, moet je je systeem klaarmaken. Dit betekent dat je het besturingssysteem bijwerkt naar de nieuwste versie en alle benodigde dependencies installeert. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.

### Systeem bijwerken
Om te zorgen dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je eerst een systeemupdate uit met het volgende commando:

```
sudo apt update && sudo apt upgrade -y
```

Dit zorgt ervoor dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.

### Dependencies installeren
Als de update klaar is, kun je de benodigde dependencies installeren.

#### Git
De Plausible data wordt via GitHub gedownload. Hiervoor moet Git eerst geïnstalleerd zijn. Voer het volgende commando uit:

```
sudo apt install git-all
```

#### Docker

Plausible wordt gedraaid in een Docker-container. Docker moet dus eerst geïnstalleerd worden. Gebruik hiervoor het volgende commando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Een volledige uitleg over het installatieproces en het gebruik van Docker vind je in onze [Docker](vserver-linux-docker.md) handleiding.

## Installatie
Nu aan alle vereisten is voldaan en de voorbereidingen zijn getroffen, kun je doorgaan met het installeren van Plausible.

Begin met het clonen van de Community Edition repository en het aanmaken van het configuratiebestand:

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

Maak vervolgens een environment-bestand (.env) aan en definieer de essentiële variabelen. De BASE_URL moet verwijzen naar het domein dat al een DNS-record heeft dat naar jouw server verwijst. Je moet ook een willekeurige SECRET_KEY_BASE genereren met minimaal 64 bytes:

```
touch .env
echo "BASE_URL=https://Plausible.example.com" >> .env
echo "SECRET_KEY_BASE=$(openssl rand -base64 48)" >> .env
echo "HTTP_PORT=80" >> .env
echo "HTTPS_PORT=443" >> .env
```

Controleer de inhoud van het bestand met `cat .env` om te bevestigen dat de waarden kloppen. De output zou er zo uit moeten zien:

```
BASE_URL=https://Plausible.example.com
SECRET_KEY_BASE=As0fZsJlUpuFYSthRjT5Yflg/NlxkFKPRro72xMLXF8yInZ60s6xGGXYVqml+XN1
HTTP_PORT=80
HTTPS_PORT=443
```

Deze standaardpoorten zorgen ervoor dat Let’s Encrypt automatisch TLS-certificaten kan uitgeven. Als je Plausible achter een reverse proxy wilt draaien, kun je deze waarden aanpassen. Maak daarnaast een `compose.override.yml` aan om de juiste poorten voor de Plausible-container te exposen:

```
cat > compose.override.yml << EOF
services:
  Plausible:
    ports:
      - 80:80
      - 443:443
EOF 
```

Start tenslotte de benodigde services met Docker Compose:

```
docker compose up -d
```

Als de containers draaien, open je je browser op het domein dat je in BASE_URL hebt opgegeven en maak je de eerste gebruikersaccount aan.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)

## Configuratie

Plausible kan geïntegreerd worden met Google Search Console om je analytics te verrijken met zoekopdrachtgegevens. Zo zie je welke zoekwoorden verkeer naar je site brengen en krijg je diepere inzichten in het gedrag van bezoekers.

Heb je al een Google Cloud-account en een OAuth-client ingesteld? Voeg dan simpelweg je credentials (`GOOGLE_CLIENT_ID` en `GOOGLE_CLIENT_SECRET`) toe aan het `.env` bestand. Sla op en herstart je Docker-services met `docker compose up -d`. Ga in het Plausible-dashboard naar *Site Settings > Integrations* om de koppeling af te ronden en volg de authenticatie-instructies.

Als je nog geen OAuth-client hebt of niet bekend bent met het proces, biedt de officiële Plausible Wiki een uitgebreide stap-voor-stap handleiding. Hierin staat hoe je een project aanmaakt in Google Cloud, de benodigde API’s activeert, een OAuth-client configureert en de gegenereerde credentials toevoegt aan Plausible: [Plausible Wiki: Google Integration](https://github.com/Plausible/community-edition/wiki/google-integration).

Met Google Search Console kun je dus eenvoudig data over zoektermen binnenhalen, wat echt superhandig is.

## Conclusie en meer bronnen

Gefeliciteerd! Je hebt Plausible nu succesvol geïnstalleerd en geconfigureerd op je Dedicated Server. We raden je ook aan om de volgende bronnen te bekijken, die je extra hulp en tips kunnen bieden tijdens je serverconfiguratie:

- [Plausible.io](https://Plausible.io/) - Officiële website
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) - Aankondigingen, discussies, bugrapporten

Heb je nog vragen die hier niet beantwoord worden? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat om je te helpen! 🙂