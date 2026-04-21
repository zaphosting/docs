---
id: dedicated-linux-databases
title: "Databases op een Linux Server Installeren - Database Services Deployen en Beheren"
description: "Ontdek hoe je verschillende databases installeert en configureert op Ubuntu en andere Linux distros voor betere performance en veiligheid → Leer het nu"
sidebar_label: Databases Installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Deze gids geeft je stappen voor het installeren van verschillende soorten databases. Voor dit voorbeeld gebruiken we Ubuntu 20.04 als besturingssysteem, maar we geven ook de equivalente commando’s voor andere Linux distros die wij aanbieden op onze website. Deze commando’s voer je uit via SSH. Weet je niet hoe je via SSH verbinding maakt met je server? Check dan hier: [Eerste toegang (SSH)](vserver-linux-ssh.md).



## Databases Installeren met de One Click Apps Installer

Je kunt **Databases** direct installeren via onze **One Click Apps Installer** in de VPS webinterface. Na het afronden van de eerste app-setup, open je de app-catalogus, zoek je op **Databases** en start je de deployment met je favoriete project-, omgeving- en domeininstellingen. Dit is een snelle en gebruiksvriendelijke manier om **Databases** te deployen en beheren zonder handmatige command line setup, terwijl je toch profiteert van geïntegreerd webbeheer, custom domeinsupport en SSL provisioning waar beschikbaar.

## Voorbereiding

Voordat je begint met het installeren van een database, moet je eerst zorgen dat je systeem up-to-date is. Update hiervoor de pakketten via je systeem package manager met het volgende commando, afhankelijk van je besturingssysteem:

```
// Ubuntu & Debian
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## Database types

Afhankelijk van welke database service je wilt installeren, volg je de bijbehorende handleiding:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## Wat is MariaDB?

MariaDB is een open-source relationeel databasebeheersysteem, oorspronkelijk een fork van MySQL. Het biedt betere performance, veiligheid en continue ontwikkeling. MariaDB heeft verbeterde opslagengines en is volledig compatibel met MySQL. Wij raden MariaDB aan boven MySQL.

## MariaDB Installatie

Allereerst moet je ervoor zorgen dat de nieuwste MariaDB-versie wordt geïnstalleerd. Sommige oudere besturingssystemen zoals Debian 9 of Ubuntu 18.04 bevatten standaard niet de nieuwste MariaDB-versie in hun package manager. Door het volgende commando uit te voeren zorg je dat je de nieuwste versie binnenhaalt.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Na het installeren van de repo, update je de package manager cache zoals beschreven in de voorbereiding.

:::info
De MariaDB repo installatie (stap hierboven) kun je veilig overslaan op moderne besturingssystemen zoals Ubuntu 22.04 of Debian 11.
:::

Als de repo setup klaar is, kun je MariaDB installeren door het `mariadb-server` pakket te installeren. Voer het volgende commando uit, afhankelijk van je OS:

```
// Ubuntu & Debian
sudo apt install mariadb-server

// CentOS
sudo yum install mariadb-server

// OpenSUSE
sudo zypper install mariadb

// Fedora
sudo dnf install mariadb-server
```

## MariaDB Configuratie

Als de installatie klaar is, start je de configuratie van de server met:

```
mysql_secure_installation
```

Volg de prompts om je MariaDB (MySQL) server te configureren en stel een wachtwoord in. Bij de eerste prompt kun je voorlopig op **Enter** drukken om deze over te slaan.

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
De gebruiker root is de hoofdgebruiker van je MariaDB (MySQL) server!
:::

Daarna wordt gevraagd of je een wachtwoord wilt instellen voor de root gebruiker, bevestig dit met **y**. Typ vervolgens het nieuwe wachtwoord in.

:::note
Tijdens het typen van het wachtwoord zie je niets verschijnen. Dit is normaal en je wachtwoord wordt gewoon opgeslagen. Gebruik een sterk wachtwoord en bewaar het veilig.
:::

Vervolgens wordt gevraagd of je anonieme gebruikers wilt verwijderen. Dit moet je sowieso doen voor de veiligheid, bevestig met **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

Daarna bepaal je of de root gebruiker extern mag verbinden met de server. Voor de veiligheid schakel je dit uit en bevestig je met **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

In de volgende stap kun je ook de testdatabase verwijderen die MariaDB (MySQL) standaard aanmaakt. Dit is niet nodig, dus bevestig met **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

Tot slot wordt gevraagd of je de permissies wilt updaten. Bevestig met **y** om het ingestelde root wachtwoord te activeren:

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

Je MariaDB (MySQL) server is nu klaar voor gebruik!

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Wat is Redis?

Redis is een in-memory data structuur opslag, vooral gebruikt om data op te slaan in key-value vorm, maar ondersteunt ook andere formaten zoals lijsten, JSON en meer. Het staat bekend om zijn snelheid en geeft antwoorden binnen milliseconden.

## Redis Installatie

Eerst moet je een repo toevoegen om Redis te kunnen installeren. Dit is niet nodig voor alle Linux distros, alleen voor de hieronder genoemde. Voer het commando uit dat bij jouw OS en versie hoort:

```
// Ubuntu (alle versies) en Debian (alleen Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (alleen CentOS 7)
sudo yum install epel-release

// CentOS (alleen CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Update daarna je package manager cache zoals beschreven in de voorbereiding.

:::info
Als jouw OS niet hierboven staat, kun je deze stap overslaan.
:::

Na het toevoegen van de juiste repo, installeer je het Redis Server pakket. Gebruik het commando dat bij jouw OS hoort:

```
// Ubuntu en Debian
sudo apt install redis-server

// CentOS
sudo yum install redis

// OpenSUSE
sudo zypper install redis

// Fedora
sudo dnf install redis
```

Na installatie is je Redis server klaar voor gebruik! Standaard draait deze op 127.0.0.1:6379 zonder wachtwoord.

:::caution 
Voor Debian/Ubuntu gebruikers:
Vergeet niet om de `redis-server` service te activeren zodat deze automatisch start bij het opstarten van de server. Dit doe je met:

```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## Wat is MongoDB?
MongoDB is een document-georiënteerde NoSQL database, ontworpen voor schaalbaarheid en ontwikkelaarsflexibiliteit. Het slaat data op in JSON-achtige BSON-formaat, wat diverse datatypes ondersteunt. Het maakt gebruik van indexen om responstijd te verkorten en heeft geen vooraf gedefinieerd schema zoals MySQL of SQLite, wat zorgt voor meer flexibiliteit.

## MongoDB Installatie

Selecteer je besturingssysteem in de tabs hieronder voor de juiste installatiehandleiding.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Installatie op Ubuntu & Debian

Eerst importeer je de publieke GPG-sleutel van MongoDB:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Daarna voeg je de MongoDB bron toe aan de source list van je OS:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Update nu de repositories met `sudo apt update`. Installeer MongoDB met:

```
sudo apt install mongodb-org
```

Je MongoDB installatie zou nu moeten werken!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Installatie op CentOS & Fedora

Eerst stel je de MongoDB repo in voor Red Hat systemen.

Maak een bestand aan `/etc/yum.repos.d/mongodb-org-6.0.repo` en plak de volgende inhoud erin:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Nu kun je MongoDB installeren. Er is een klein verschil in het install commando tussen CentOS en Fedora, gebruik het juiste hieronder:

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

Je MongoDB installatie zou nu moeten werken, veel makkelijker dan bij andere Linux distros!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Installatie op OpenSUSE

Eerst importeer je de publieke MongoDB sleutel:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Voeg daarna de MongoDB repo toe met:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

Installeer tenslotte de nieuwste MongoDB versie met:

```
sudo zypper -n install mongodb-org
```

Je MongoDB installatie zou nu moeten werken!

</TabItem>
</Tabs>

</TabItem>
</Tabs>