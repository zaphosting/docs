---
id: vserver-linux-databases
title: "VPS: Installatie van Databases"
description: "Ontdek hoe je verschillende databases installeert en configureert op Linux voor betere prestaties en veiligheid → Leer het nu"
sidebar_label: Installeer Databases
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

In deze gids leggen we uit hoe je verschillende soorten databases installeert. Voor dit voorbeeld gebruiken we Ubuntu 20.04 als besturingssysteem, maar we geven ook de equivalente commando’s voor andere Linux-distributies die wij aanbieden. Deze commando’s voer je uit via SSH. Weet je niet hoe je via SSH verbinding maakt met je server? Check dan hier: [Eerste toegang (SSH)](vserver-linux-ssh.md).

<InlineVoucher />

## Voorbereiding

Voordat je begint met het installeren van een database, moet je eerst zorgen dat je systeem up-to-date is. Update hiervoor de pakketten via je pakketbeheerder met het volgende commando, afhankelijk van je besturingssysteem:

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

Afhankelijk van welke database je wilt installeren, volg je de bijbehorende handleiding:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## Wat is MariaDB?

MariaDB is een open-source relationeel databasesysteem, oorspronkelijk een fork van MySQL. Het biedt betere prestaties, meer veiligheid en wordt continu doorontwikkeld. MariaDB heeft verbeterde opslagengines en is volledig compatibel met MySQL. Wij raden MariaDB aan boven MySQL.

## MariaDB Installatie

Zorg er eerst voor dat je de nieuwste MariaDB-versie installeert. Sommige oudere systemen zoals Debian 9 of Ubuntu 18.04 hebben standaard niet de nieuwste MariaDB in hun pakketbeheer. Met het volgende commando zorg je dat je de nieuwste versie binnenhaalt:

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Na het toevoegen van de repo update je de pakketcache zoals beschreven in de voorbereiding.

:::info
De MariaDB repo toevoegen (zoals hierboven) kun je overslaan op moderne systemen zoals Ubuntu 22.04 of Debian 11.
:::

Als de repo is ingesteld, kun je MariaDB installeren met het pakket `mariadb-server`. Voer het volgende commando uit, afhankelijk van je OS:

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

![](https://screensaver01.zap-hosting.com/index.php/s/S8mibcHmaAcetqJ/preview)

:::info
De gebruiker root is de hoofdgebruiker van je MariaDB (MySQL) server!
:::

Je wordt gevraagd of je een wachtwoord voor root wilt instellen, bevestig met **y**. Typ daarna het nieuwe wachtwoord in.

:::note
Tijdens het typen zie je het wachtwoord niet verschijnen, dat is normaal. Zorg dat je een sterk wachtwoord kiest en bewaar het veilig.
:::

Vervolgens wordt gevraagd of je anonieme gebruikers wilt verwijderen. Doe dit altijd voor de veiligheid en bevestig met **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/7q2kGxDXTfWg36m/preview)

Daarna bepaal je of root extern mag verbinden. Voor de veiligheid raden we aan dit uit te schakelen, bevestig met **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/PcpJ6boNspf2fPo/preview)

Je kunt ook de testdatabase verwijderen, bevestig dit met **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/9HfkcaLjGXjEwK7/preview)

Tot slot update je de permissies om het wachtwoord te activeren, bevestig met **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/QiBNQYFiwJM4CcA/preview)

Je MariaDB (MySQL) server is nu klaar voor gebruik!

![](https://screensaver01.zap-hosting.com/index.php/s/zkKoTX7GbbKgj2M/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Wat is Redis?

Redis is een in-memory data store, vooral gebruikt voor key-value opslag, maar ondersteunt ook lijsten, JSON en meer. Het is super snel en reageert binnen milliseconden.

## Redis Installatie

Eerst voeg je een repo toe om Redis te kunnen installeren. Dit is niet voor alle Linux-distributies nodig, alleen voor de hieronder genoemde. Voer het commando uit dat bij jouw OS en versie hoort:

```
// Ubuntu (alle versies) en Debian (alleen Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (alleen CentOS 7)
sudo yum install epel-release

// CentOS (alleen CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Update daarna je pakketcache zoals beschreven in de voorbereiding.

:::info
Als jouw OS hier niet tussen staat, kun je deze stap overslaan.
:::

Installeer nu Redis met het commando dat bij jouw OS past:

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
Zorg dat je de `redis-server` service activeert zodat deze automatisch start bij het opstarten van de server. Dit doe je met:

```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## Wat is MongoDB?
MongoDB is een document-georiënteerde NoSQL database, ontworpen voor schaalbaarheid en snelle ontwikkeling. Het slaat data op in JSON-achtige BSON-formaat, wat diverse datatypes ondersteunt. Het gebruikt indexen om responstijden te verkorten en heeft geen vast schema zoals MySQL of SQLite, wat flexibiliteit en snelheid geeft.

## MongoDB Installatie

Kies je besturingssysteem in de tabs hieronder voor de juiste installatiehandleiding.

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

Update je pakketbronnen met `sudo apt update` en installeer MongoDB:

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

Installeer MongoDB met het juiste commando voor jouw OS:

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


## Afronding

Gefeliciteerd, je hebt succesvol een database geïnstalleerd en geconfigureerd! Heb je nog vragen of problemen? Onze support staat elke dag voor je klaar om je te helpen!

<InlineVoucher />