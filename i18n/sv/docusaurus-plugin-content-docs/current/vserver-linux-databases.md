---
id: vserver-linux-databases
title: "VPS: Installation av databaser"
description: "Upptäck hur du installerar och konfigurerar olika databaser på Linux för bättre prestanda och säkerhet → Lär dig mer nu"
sidebar_label: Installera databaser
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Den här guiden visar steg för installation av olika typer av databaser. I exemplet används Ubuntu 20.04 som operativsystem, men motsvarande kommandon för andra Linux-distributioner som vi erbjuder på vår webbplats anges också. Dessa kommandon måste köras via SSH. Om du inte vet hur du ansluter till din server via SSH, kolla här: [Initial access (SSH)](vserver-linux-ssh.md).

<InlineVoucher />

## Förberedelser

Innan du börjar installera en databas behöver du först se till att systemet är uppdaterat. Det gör du genom att uppdatera paketen i din systempakethanterare med följande kommando, beroende på ditt operativsystem:

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

## Databastyper

Beroende på vilken databastjänst du vill installera, följ motsvarande guide:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## Vad är MariaDB?

MariaDB är ett open-source relationsdatabashanteringssystem, ursprungligen en fork av MySQL. Det ger förbättrad prestanda, säkerhet och kontinuerlig utveckling. MariaDB erbjuder bland annat bättre lagringsmotorer och är fullt kompatibelt med MySQL. Vi rekommenderar MariaDB framför MySQL.

## Installation av MariaDB

Först måste du säkerställa att den senaste versionen av MariaDB installeras. Vissa äldre operativsystem som Debian 9 eller Ubuntu 18.04 har inte den senaste MariaDB-versionen i sina paketkällor, så genom att köra följande kommando ser du till att den senaste versionen hämtas.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Efter att ha installerat repo, uppdatera paketcachén enligt stegen i förberedelseavsnittet.

:::info
MariaDB-repo-installationen (steg ovan) kan tryggt hoppas över på moderna operativsystem som Ubuntu 22.04 eller Debian 11.
:::

När repo är klart kan du börja installera MariaDB genom att installera paketet `mariadb-server`. Beroende på operativsystem kör du något av följande:

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

## Konfigurera MariaDB

När installationen är klar, starta konfigurationen med kommandot:

```
mysql_secure_installation
```

Följ instruktionerna och sätt ett lösenord för din server. Vid nästa prompt kan du hoppa över genom att trycka på **Enter**.

![](https://screensaver01.zap-hosting.com/index.php/s/S8mibcHmaAcetqJ/preview)

:::info
Användaren root är huvudkontot för din MariaDB (MySQL)-server!
:::

Du kommer bli tillfrågad om du vill sätta ett lösenord för root-användaren, bekräfta med **y** för ja. Skriv sedan in det nya lösenordet.

:::note
När du skriver lösenordet syns det inte, men det är helt normalt och lösenordet sparas ändå. Använd ett säkert lösenord och förvara det på ett tryggt ställe.
:::

Nästa fråga gäller om du vill ta bort anonyma användare från servern – gör det alltid av säkerhetsskäl. Bekräfta med **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/7q2kGxDXTfWg36m/preview)

Sedan frågas om root-användaren ska tillåtas ansluta externt. Avaktivera detta för säkerhet och bekräfta med **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/PcpJ6boNspf2fPo/preview)

Du kan också ta bort testdatabasen som MariaDB levererar med **y**, den behövs inte och kan tas bort:

![](https://screensaver01.zap-hosting.com/index.php/s/9HfkcaLjGXjEwK7/preview)

Slutligen frågas om du vill uppdatera databasens rättigheter. Bekräfta med **y** för att aktivera det nya root-lösenordet:

![](https://screensaver01.zap-hosting.com/index.php/s/QiBNQYFiwJM4CcA/preview)

Din MariaDB (MySQL)-server är nu redo att användas!

![](https://screensaver01.zap-hosting.com/index.php/s/zkKoTX7GbbKgj2M/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Vad är Redis?

Redis är en in-memory datalagring, främst för nyckel-värdepar, men stöder även listor, JSON och mer. Det är känt för sin snabbhet och svarar på förfrågningar på millisekunder.

## Installation av Redis

Först måste du lägga till ett repo som gör att vi kan installera Redis. Detta behövs inte för alla Linux-distributioner, bara för de listade nedan. Kör kommandot som passar ditt operativsystem och version:

```
// Ubuntu (alla versioner) och Debian (endast Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (endast CentOS 7)
sudo yum install epel-release

// CentOS (endast CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Efter att ha lagt till repo, uppdatera paketcachén enligt förberedelseavsnittet.

:::info
Om ditt operativsystem inte finns med ovan kan du hoppa över detta steg.
:::

När repo är installerat, installera Redis-servern med rätt kommando för ditt system:

```
// Ubuntu och Debian
sudo apt install redis-server

// CentOS
sudo yum install redis

// OpenSUSE
sudo zypper install redis

// Fedora
sudo dnf install redis
```

Efter installationen är din Redis-server redo att användas! Som standard körs den på 127.0.0.1:6379 utan lösenord.

:::caution 
För Debian/Ubuntu-användare:
Glöm inte att aktivera `redis-server`-tjänsten efter installationen så att den startar automatiskt vid serverstart. Det gör du med:

```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## Vad är MongoDB?
MongoDB är en dokumentorienterad NoSQL-databas, designad för skalbarhet och snabb utveckling. Den lagrar data i JSON-liknande BSON-format, vilket möjliggör lagring av olika datatyper. Den har stöd för index för att minska svarstider och saknar ett fördefinierat schema som MySQL eller SQLite, vilket ger flexibilitet och snabbhet.

## Installation av MongoDB

Välj ditt operativsystem i flikarna nedan för att se rätt guide.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Installation på Ubuntu & Debian

Börja med att importera MongoDB:s publika GPG-nyckel:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Lägg sedan till MongoDB-källan i din systems källista med:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Uppdatera paketlistan med `sudo apt update` och installera sedan MongoDB:

```
sudo apt install mongodb-org
```

Din MongoDB-installation ska nu fungera!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Installation på CentOS & Fedora

Börja med att skapa en repo-fil för MongoDB på Red Hat-system.

Skapa filen `/etc/yum.repos.d/mongodb-org-6.0.repo` och klistra in följande:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Installera sedan MongoDB med rätt kommando för ditt system:

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

Din MongoDB-installation är nu klar och mycket enklare än på andra Linux-distributioner!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Installation på OpenSUSE

Importera först MongoDB:s publika nyckel:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Lägg sedan till MongoDB-repot:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

Installera slutligen MongoDB:

```
sudo zypper -n install mongodb-org
```

Din MongoDB-installation ska nu fungera!

</TabItem>
</Tabs>

</TabItem>
</Tabs>


## Avslutning

Grattis, du har nu installerat och konfigurerat din databas! Om du har fler frågor eller problem, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!

<InlineVoucher />