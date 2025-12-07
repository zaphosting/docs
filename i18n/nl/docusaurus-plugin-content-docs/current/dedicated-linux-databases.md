---
id: dedicated-linux-databases
title: "Dedicated Server: Installatie van Databases"
description: "Ontdek hoe je verschillende databases installeert en configureert op Ubuntu en andere Linux distros voor betere performance en veiligheid → Leer het nu"
sidebar_label: Databases Installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Deze gids geeft je stappen voor het installeren van verschillende soorten databases. Voor dit voorbeeld gebruiken we Ubuntu 20.04 als besturingssysteem, maar we geven ook de equivalente commando’s voor andere Linux distros die wij aanbieden op onze website. Deze commando’s voer je uit via SSH. Weet je niet hoe je via SSH verbinding maakt met je server? Check dan hier: [Eerste toegang (SSH)](vserver-linux-ssh.md).

## Voorbereiding

Voordat je begint met het installeren van een database, moet je eerst zorgen dat je systeem up-to-date is. Update hiervoor de pakketten via je pakketbeheerder met het volgende commando, afhankelijk van je OS:

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

MariaDB is een open-source relationeel databasebeheersysteem, oorspronkelijk een fork van MySQL. Het biedt betere performance, veiligheid en wordt continu doorontwikkeld. MariaDB heeft verbeterde opslagengines en is volledig compatibel met MySQL. Wij raden MariaDB aan boven MySQL.

## MariaDB Installatie

Zorg er eerst voor dat je de nieuwste MariaDB-versie installeert. Sommige oudere OS’en zoals Debian 9 of Ubuntu 18.04 hebben standaard niet de nieuwste MariaDB in hun pakketbeheer, dus met het volgende commando zorg je dat je de nieuwste versie binnenhaalt:

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Na het toevoegen van de repo update je de pakketcache zoals beschreven in de voorbereiding.

:::info
De MariaDB repo installatie (bovenstaande stap) kun je veilig overslaan op moderne OS’en zoals Ubuntu 22.04 of Debian 11.
:::

Als de repo klaarstaat, kun je MariaDB installeren door het `mariadb-server` pakket te installeren. Voer het juiste commando uit voor jouw OS:

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

Na installatie start je de configuratie met:

```
mysql_secure_installation
```

Volg de prompts om je MariaDB (MySQL) server te configureren en stel een wachtwoord in. Bij de eerste prompt kun je voorlopig op **Enter** drukken om door te gaan.

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
De gebruiker root is de hoofdgebruiker van je MariaDB (MySQL) server!
:::

Je wordt gevraagd of je een wachtwoord voor root wilt instellen, bevestig met **y**. Typ daarna het nieuwe wachtwoord in.

:::note
Tijdens het typen zie je het wachtwoord niet verschijnen, dat is normaal. Je wachtwoord wordt wel opgeslagen. Gebruik een sterk wachtwoord en bewaar het veilig.
:::

Vervolgens vraagt het systeem of je anonieme gebruikers wilt verwijderen. Doe dit altijd voor de veiligheid en bevestig met **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

Daarna bepaal je of root extern mag verbinden. Voor de veiligheid raden we aan dit uit te schakelen, bevestig met **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

Je kunt ook de testdatabase verwijderen, dit is niet nodig. Bevestig met **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

Tot slot wordt gevraagd of je de permissies wilt updaten. Bevestig met **y** om het wachtwoord te activeren:

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

Je MariaDB (MySQL) server is nu klaar voor gebruik!

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Wat is Redis?

Redis is een in-memory data structuur opslag, vooral gebruikt voor key-value data, maar ondersteunt ook lijsten, JSON en meer. Het is super snel en reageert binnen milliseconden.

## Redis Installatie

Eerst moet je een repo toevoegen om Redis te kunnen installeren. Dit is niet voor alle Linux distros nodig, alleen voor de onderstaande. Voer het commando uit dat bij jouw OS en versie hoort:

```
// Ubuntu (alle versies) en Debian (alleen Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (alleen CentOS 7)
sudo yum install epel-release

// CentOS (alleen CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Update daarna je pakketcache zoals in de voorbereiding beschreven.

:::info
Als jouw OS hier niet tussen staat, kun je deze stap overslaan.
:::

Installeer daarna Redis met het commando dat bij jouw OS past:

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

Na installatie is je Redis server klaar voor gebruik! Standaard draait hij op 127.0.0.1:6379 zonder wachtwoord.

:::caution 
Voor Debian/Ubuntu gebruikers:
Vergeet niet de `redis-server` service te activeren zodat deze automatisch start bij het opstarten van de server. Dit doe je met:

```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## Wat is MongoDB?
MongoDB is een document-georiënteerde NoSQL database, ontworpen voor schaalbaarheid en snelle ontwikkeling. Het slaat data op in JSON-achtige BSON-formaat, wat diverse datatypes ondersteunt. Het gebruikt indexen om responstijden te verkorten en heeft geen vast schema zoals MySQL of SQLite, wat flexibiliteit en snelheid geeft.

## MongoDB Installatie

Kies je OS in de tabs hieronder voor de juiste installatiehandleiding.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Installatie op Ubuntu & Debian

Importeer eerst de publieke GPG-sleutel van MongoDB:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Voeg daarna de MongoDB bron toe aan je sources list:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Update je pakketbronnen met `sudo apt update` en installeer MongoDB met:

```
sudo apt install mongodb-org
```

Je MongoDB installatie werkt nu!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Installatie op CentOS & Fedora

Stel eerst de MongoDB repo in voor Red Hat systemen.

Maak een bestand `/etc/yum.repos.d/mongodb-org-6.0.repo` aan met de volgende inhoud:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Installeer MongoDB met het juiste commando:

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

Je MongoDB installatie werkt nu, veel makkelijker dan bij andere Linux distros!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Installatie op OpenSUSE

Importeer eerst de publieke sleutel van MongoDB:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Voeg daarna de MongoDB repo toe:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

Installeer tenslotte MongoDB:

```
sudo zypper -n install mongodb-org
```

Je MongoDB installatie werkt nu!

</TabItem>
</Tabs>

</TabItem>
</Tabs>