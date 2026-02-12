---
id: vserver-linux-bitwarden
title: "VPS: Bitwarden installeren op Linux"
description: "Ontdek hoe je Bitwarden veilig zelf host voor het beheren van wachtwoorden met end-to-end encryptie en sterke credential features → Leer het nu"
sidebar_label: Bitwarden installeren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Bitwarden is een open source wachtwoordmanager voor wachtwoorden en passkeys die zero knowledge, end-to-end encryptie gebruikt om je data te beschermen. Je kunt het als cloudservice gebruiken of zelf hosten, met functies om sterke credentials te genereren, op te slaan en automatisch in te vullen.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Overweeg je deze service zelf te hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles waar je op moet letten.

<InlineVoucher />

## Vereisten

Voordat je **Bitwarden** installeert, check je of je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale performance.

| Hardware   | Minimaal    | ZAP-Hosting Aanbeveling |
| ---------- | ----------- | ----------------------- |
| CPU        | 1 vCPU Core | 4 vCPU Cores            |
| RAM        | 2 GB        | 4 GB                    |
| Schijfruimte | 12 GB     | 25 GB                   |

De software vereist dat alle benodigde dependencies geïnstalleerd zijn en dat het draait op een ondersteund besturingssysteem. Zorg dat je server aan de volgende eisen voldoet voordat je verder gaat met installeren:

**Dependencies:** `Docker (Engine 26+ en Compose)`

**Besturingssysteem:** Laatste versie van Ubuntu/Debian die Docker 26+ ondersteunt

Zorg dat alle dependencies geïnstalleerd zijn en dat je de juiste OS-versie gebruikt om compatibiliteitsproblemen tijdens de installatie van Bitwarden te voorkomen.

## Voorbereiding

Voordat je **Bitwarden** installeert, moet je je systeem klaarmaken. Dit betekent je OS updaten naar de nieuwste versie en alle benodigde dependencies installeren. Zo zorg je voor een stabiele omgeving en voorkom je problemen tijdens of na de installatie.

### Systeem updaten
Om zeker te zijn dat je systeem draait met de nieuwste software en security updates, voer je eerst een systeemupdate uit met:

```
sudo apt update && sudo apt upgrade -y
```
Dit zorgt dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.

### Dependencies installeren
Als de update klaar is, kun je de dependencies installeren. Bitwarden draait in een set Docker containers, dus Docker moet eerst geïnstalleerd worden. Gebruik hiervoor:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Een volledige uitleg over het installeren en gebruiken van Docker vind je in onze [Docker](dedicated-linux-docker.md) gids.

### Gebruiker & map aanmaken

We raden aan om je Linux server te configureren met een dedicated `bitwarden` service account om Bitwarden te installeren en draaien. Zo blijft je Bitwarden instance gescheiden van andere apps op je server.

Maak de bitwarden gebruiker aan en stel een sterk, uniek wachtwoord in:

```
sudo adduser bitwarden
sudo passwd bitwarden
```

Maak de docker groep aan als die nog niet bestaat en voeg de bitwarden gebruiker toe aan de docker groep:

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

Maak de werkmap aan, stel de rechten in en geef eigendom aan bitwarden:

```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```

### Domein configureren

Standaard draait Bitwarden op de host via poorten 80 (HTTP) en 443 (HTTPS). Zet een domein op met DNS records die naar je host wijzen, bijvoorbeeld server.example.com, zeker als je het via internet beschikbaar maakt. Vermijd het gebruik van “bitwarden” in de hostname om te voorkomen dat je serverrol of software te veel prijsgeeft.

## Installatie

Nu aan alle eisen is voldaan en je alles hebt voorbereid, kun je Bitwarden installeren.

Download het Bitwarden installatiescript naar je server en voer het uit. Er wordt een `./bwdata` map aangemaakt op dezelfde locatie als `bitwarden.sh`.

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

In de installer voer je eerst de domeinnaam van je Bitwarden instance in, meestal de DNS record die je hebt ingesteld. Daarna kies je of Let’s Encrypt een gratis vertrouwd SSL-certificaat moet genereren. Kies je ja, dan geef je een e-mail op voor vervaldatum notificaties. Kies je nee, dan volgen vragen over het certificaat.

Voer je Installatie ID en Installatie Key in, die je krijgt via [Bitwarden](https://bitwarden.com/host). Kies daarna regio US of EU, wat alleen relevant is als je een self-hosted instance koppelt aan een betaald abonnement.

Gebruik je geen Let’s Encrypt? Dan kun je een bestaand certificaat gebruiken door de bestanden te plaatsen in `./bwdata/ssl/your.domain` en aan te geven of het vertrouwd is. Je kunt ook een zelf-ondertekend certificaat genereren, wat alleen aanbevolen is voor testdoeleinden. Kies je geen certificaat, dan moet je een HTTPS proxy voor de installatie zetten, anders werkt Bitwarden niet.

## Configuratie

Na installatie maak je de basisconfig af met twee bestanden. Bewerk eerst het environment bestand `./bwdata/env/global.override.env`. Vul hier je SMTP servergegevens in, zoals host, poort, SSL, gebruikersnaam en wachtwoord, zodat Bitwarden verificatie- en uitnodigingsmails kan versturen. Wil je toegang tot het System Administrator Portal? Voeg dan een admin e-mail toe aan `adminSettings__admins`.

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

Check je SMTP setup met `./bitwarden.sh checksmtp`. Als alles goed staat, krijg je een succesmelding. Anders zie je foutmeldingen over ontbrekende OpenSSL of verkeerde waarden. Pas wijzigingen toe met `./bitwarden.sh restart`.

Bekijk daarna de installatieparameters in `./bwdata/config.yml`. Dit bestand regelt de gegenereerde assets en moet je aanpassen voor speciale omgevingen, bijvoorbeeld als je achter een proxy draait of andere poorten gebruikt. Pas aan en voer `./bitwarden.sh rebuild` uit.

Start tenslotte de instance met `./bitwarden.sh start`. De eerste keer kan even duren omdat Docker images binnenhaalt. Met `docker ps` check je of alle containers gezond zijn. Open daarna de web vault via je domein en registreer een account als dat nodig is. E-mail verificatie werkt alleen met correct ingestelde SMTP gegevens.

## Conclusie en meer bronnen

Gefeliciteerd! Je hebt Bitwarden nu succesvol geïnstalleerd en geconfigureerd op je VPS. We raden je ook aan om deze bronnen te checken voor extra hulp en tips tijdens je serverconfiguratie:

- [bitwarden.com](https://bitwarden.com/) - Officiële website
- https://bitwarden.com/help/ - Bitwarden Help Center (Documentatie)

Heb je nog vragen die hier niet beantwoord worden? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat om je te helpen! 🙂