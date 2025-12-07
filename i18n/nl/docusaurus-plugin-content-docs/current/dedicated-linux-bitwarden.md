---
id: dedicated-linux-bitwarden
title: "Dedicated Server: Bitwarden installeren op Linux"
description: "Ontdek hoe je wachtwoorden veilig beheert met Bitwarden via end-to-end encryptie voor cloud- of self-hosted setups → Leer het nu"
sidebar_label: Bitwarden installeren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Bitwarden is een open source wachtwoordmanager voor wachtwoorden en passkeys die zero knowledge, end-to-end encryptie gebruikt om je data te beschermen. Je kunt het gebruiken als cloudservice of zelf hosten, met functies om sterke inloggegevens te genereren, op te slaan en automatisch in te vullen.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Overweeg je deze service zelf te hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles waar je op moet letten.



## Vereisten

Voordat je **Bitwarden** installeert, zorg dat je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale performance.

| Hardware   | Minimum     | ZAP-Hosting Aanbeveling  |
| ---------- | ----------- | ------------------------ |
| CPU        | 1 CPU Core  | 4 CPU Cores              |
| RAM        | 2 GB        | 4 GB                     |
| Schijfruimte | 12 GB     | 25 GB                    |

De software vereist dat alle benodigde dependencies geïnstalleerd zijn en dat het draait op een ondersteund besturingssysteem. Controleer dat je server aan de volgende eisen voldoet voordat je verder gaat met de installatie:

**Dependencies:** `Docker (Engine 26+ en Compose)`

**Besturingssysteem:** Laatste versie van Ubuntu/Debian die Docker 26+ ondersteunt

Zorg dat alle dependencies geïnstalleerd zijn en dat je de juiste OS-versie gebruikt om compatibiliteitsproblemen tijdens de installatie van Bitwarden te voorkomen.



## Voorbereiding

Voordat je **Bitwarden** installeert, moet je je systeem klaarmaken. Dit betekent je besturingssysteem updaten naar de nieuwste versie en alle benodigde dependencies installeren. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.


### Systeem updaten
Om zeker te zijn dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je eerst een systeemupdate uit. Gebruik hiervoor het volgende commando:

```
sudo apt update && sudo apt upgrade -y
```
Dit zorgt ervoor dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.

### Dependencies installeren
Als de update klaar is, kun je de dependencies installeren. Bitwarden draait via verschillende Docker containers, dus Docker moet eerst geïnstalleerd worden. Gebruik hiervoor:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Een uitgebreide uitleg over de installatie en het gebruik van Docker vind je in onze [Docker](dedicated-linux-docker.md) gids.



### Gebruiker & map aanmaken

We raden aan om je Linux server te configureren met een dedicated `bitwarden` service account, waarvandaan je Bitwarden installeert en runt. Zo blijft je Bitwarden instance netjes geïsoleerd van andere applicaties op je server.

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

Maak de werkmap aan, stel de permissies in en geef eigendom aan bitwarden:
```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```



### Domein configureren

Standaard draait Bitwarden op de host via poorten 80 (HTTP) en 443 (HTTPS). Stel een domein in met DNS records die naar de host wijzen, bijvoorbeeld server.example.com, vooral als je het via internet beschikbaar maakt. Vermijd het gebruik van “Bitwarden” in de hostnaam om te voorkomen dat je de rol of software van de server te veel prijsgeeft.




## Installatie
Nu aan alle vereisten is voldaan en de voorbereidingen zijn getroffen, kun je doorgaan met het installeren van Bitwarden.

Download het installatie script naar je server en voer het uit. Er wordt een `./bwdata` map aangemaakt op dezelfde locatie als `bitwarden.sh`.

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

In de installer voer je eerst de domeinnaam van je Bitwarden instance in, meestal de geconfigureerde DNS-record. Daarna kies je of Let’s Encrypt een gratis vertrouwd SSL-certificaat moet genereren. Kies je ja, dan geef je een e-mailadres op voor vervaldatum-meldingen. Kies je nee, dan volgen vragen over het certificaat.

Voer je Installatie ID en Installatie Key in, beide te vinden op [Bitwarden](https://bitwarden.com/host). Kies vervolgens de regio US of EU, wat alleen relevant is als je een self-hosted instance koppelt aan een betaald abonnement.

Gebruik je geen Let’s Encrypt, dan kun je een bestaand certificaat gebruiken door de bestanden te plaatsen in `./bwdata/ssl/your.domain` en aan te geven of het vertrouwd is. Je kunt ook een self-signed certificaat genereren, wat alleen aanbevolen is voor testdoeleinden. Kies je geen certificaat, dan moet je een HTTPS proxy voor de installatie zetten, anders werkt Bitwarden niet.



## Configuratie

Na de installatie maak je de basisconfig af met twee bestanden. Bewerk eerst het environment bestand `./bwdata/env/global.override.env`. Vul hier je SMTP servergegevens in, zoals host, poort, SSL, gebruikersnaam en wachtwoord, zodat Bitwarden verificatie- en uitnodigingsmails kan versturen. Wil je toegang tot het System Administrator Portal, voeg dan een admin e-mail toe aan `adminSettings__admins`.

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

Test de SMTP-instellingen met `./bitwarden.sh checksmtp`. Bij een correcte setup krijg je een succesmelding; anders zie je foutmeldingen over ontbrekende OpenSSL of verkeerde waarden. Pas wijzigingen toe met `./bitwarden.sh restart`.

Bekijk daarna de installatieparameters in `./bwdata/config.yml`. Dit bestand regelt de gegenereerde assets en moet je aanpassen voor speciale omgevingen, bijvoorbeeld bij gebruik van een proxy of alternatieve poorten. Pas wijzigingen toe met `./bitwarden.sh rebuild`.

Start tenslotte de instance met `./bitwarden.sh start`. De eerste keer kan het even duren omdat Docker images downloadt. Met `docker ps` check je of alle containers gezond zijn. Open daarna de web vault via je domein en registreer een account als dat nodig is. E-mailverificatie werkt alleen met correct ingestelde SMTP-gegevens.

## Afsluiting en meer bronnen

Gefeliciteerd! Je hebt Bitwarden nu succesvol geïnstalleerd en geconfigureerd op je Dedicated Server. We raden je ook aan om deze bronnen te checken voor extra hulp en tips tijdens je serverconfiguratie:

- [bitwarden.com](https://bitwarden.com/) - Officiële website
- https://bitwarden.com/help/ - Bitwarden Help Center (Documentatie)

Heb je specifieke vragen die hier niet behandeld worden? Neem gerust contact op met onze support, we staan dagelijks voor je klaar om je te helpen! 🙂