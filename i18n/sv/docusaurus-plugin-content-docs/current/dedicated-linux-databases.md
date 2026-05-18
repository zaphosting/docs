---
id: dedicated-linux-databases
title: "Sätt upp databaser på en Linux-server - Distribuera och hantera databastjänster"
description: "Utforska hur du installerar och sätter upp olika databaser på Ubuntu och andra Linux-distros för bättre prestanda och säkerhet → Lär dig mer nu"
sidebar_label: Installera databaser
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Den här guiden visar steg för installation av olika typer av databaser. I exemplet används Ubuntu 20.04 som operativsystem, men motsvarande kommandon för andra Linux-distros som vi erbjuder på vår webbplats anges också. Dessa kommandon måste köras via SSH, om du inte vet hur du ansluter till din server via SSH, kolla här: [Initial access (SSH)](vserver-linux-ssh.md).



## Installera databaser med One Click Apps Installer

Du kan installera **Databaser** direkt via vår **One Click Apps Installer** i VPS-webbgränssnittet. Efter att ha slutfört den initiala app-inställningen, öppna appkatalogen, sök efter **Databaser** och starta distributionen med dina föredragna projekt-, miljö- och domäninställningar. Detta ger dig ett snabbt och användarvänligt sätt att distribuera och hantera **Databaser** utan manuell kommandoradskonfiguration, samtidigt som du får fördelar av integrerad webbaserad hantering, stöd för egna domäner och SSL-provisionering där det är tillgängligt.

## Förberedelser

Innan du börjar med installationen av en databas är det först nödvändigt att säkerställa att systemet är uppdaterat. För att göra detta behöver du uppdatera paketen från din systempakethanterare med följande kommando, beroende på ditt operativsystem:

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

MariaDB är ett open-source relationsdatabashanteringssystem, ursprungligen en fork av MySQL. Det säkerställer förbättrad prestanda, säkerhet och kontinuerlig utveckling. MariaDB erbjuder bland annat förbättrade lagringsmotorer och dess arkitektur är fullt kompatibel med MySQL. Vi rekommenderar MariaDB framför MySQL.

## Installation av MariaDB

Först måste du säkerställa att den senaste versionen av MariaDB installeras. Vissa äldre operativsystem som Debian 9 eller Ubuntu 18.04 har inte den senaste MariaDB-versionen i sina pakethanterare som standard, så genom att köra följande kommando ser du till att den senaste versionen hämtas.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Efter att ha installerat repo, uppdatera din pakethanterar-cache enligt stegen i förberedelseavsnittet.

:::info
Installation av MariaDB-repot (steg ovan) kan tryggt hoppas över på moderna operativsystem som Ubuntu 22.04 eller Debian 11.
:::

När repot är klart kan installationen av MariaDB påbörjas genom att installera paketet `mariadb-server`. Beroende på operativsystem kör du något av följande kommandon:

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

När installationen är klar, skriv in följande kommando för att starta serverkonfigurationen:

```
mysql_secure_installation
```

Nu kan du konfigurera din MariaDB (MySQL)-server genom att följa instruktionerna och sätta ett lösenord för din server. Vid nästa prompt kan du hoppa över inmatningen för tillfället genom att trycka på **Enter**.

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
Användaren root är huvudanvändaren för din MariaDB (MySQL)-server!
:::

Du kommer sedan att bli tillfrågad om du vill sätta ett lösenord för root-användaren, bekräfta detta med **y** för ja. Därefter skriver du in det nya lösenordet för root-användaren.

:::note
När du skriver in lösenordet syns det inte på skärmen. Detta är normalt och ditt lösenord sparas ändå. Se till att använda ett säkert lösenord för root-användaren och förvara det på ett säkert ställe.
:::

Nu blir du tillfrågad om du vill ta bort anonyma användare från servern, detta bör du göra av säkerhetsskäl. Bekräfta med **y** för ja:

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

I nästa prompt definierar du om root-användaren ska tillåtas ansluta till servern externt. Av säkerhetsskäl bör du inaktivera detta och bekräfta med **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

I nästa steg kan du också bekräfta att ta bort testdatabasen som MariaDB (MySQL) tillhandahåller med **y**, eftersom den inte behövs och enkelt kan tas bort:

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

I slutet av konfigurationsprocessen blir du tillfrågad om du vill uppdatera databasens behörigheter. Bekräfta med **y** för att aktivera det tidigare satta lösenordet för root-användaren:

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

Din MariaDB (MySQL)-server är nu redo att användas!

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Vad är Redis?

Redis är en in-memory datalagringsstruktur, främst använd för att lagra data med nyckel-värde-struktur, men stöder även andra format som listor, JSON med mera. Det kännetecknas av sin hastighet och levererar svar på förfrågningar på millisekunder.

## Installation av Redis

Först måste du lägga till ett repo som gör det möjligt att installera Redis. Detta steg är inte nödvändigt för alla Linux-distributioner, endast för de listade nedan. Kör kommandot som motsvarar ditt operativsystem och version:

```
// Ubuntu (alla versioner) och Debian (endast Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (endast CentOS 7)
sudo yum install epel-release

// CentOS (endast CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Efter att ha installerat repot, uppdatera din pakethanterar-cache enligt förberedelseavsnittet.

:::info
Om ditt operativsystem inte finns med ovan kan du hoppa över detta steg.
:::

Efter att ha installerat rätt repo kan du installera Redis-serverpaketet. Kör kommandot som passar ditt operativsystem:

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
Kom ihåg att aktivera `redis-server`-tjänsten efter installationen för att säkerställa att den startar automatiskt vid serverstart. Det gör du med följande kommando:
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## Vad är MongoDB?
MongoDB är en dokumentorienterad NoSQL-databas, designad för skalbarhet och utvecklarvänlighet. Den lagrar data i JSON-liknande BSON-format, vilket möjliggör lagring av olika datatyper. Den har stöd för indexering för att minska svarstider och kännetecknas av att inte ha ett fördefinierat schema som MySQL eller SQLite, vilket ger snabbhet och flexibilitet.

## Installation av MongoDB

Välj ditt operativsystem i flikarna nedan för att visa motsvarande guide.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Installation på Ubuntu & Debian

Först ska du köra följande kommando för att importera MongoDB:s publika GPG-nyckel:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Därefter behöver du lägga till MongoDB-källan i din operativsystems källista. Det gör du med följande kommando:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Nu kan pakethanteraren installera MongoDB Community Edition, men först måste du uppdatera repositorierna med kommandot: `sudo apt update`. Slutligen installerar du MongoDB med:

```
sudo apt install mongodb-org
```

Din MongoDB-installation borde nu fungera!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Installation på CentOS & Fedora

Först måste du konfigurera MongoDB-repot för Red Hat-system.

Skapa en fil vid `/etc/yum.repos.d/mongodb-org-6.0.repo` och klistra in följande innehåll:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Nu kan du installera MongoDB. Det finns en liten skillnad i installationskommandot mellan CentOS och Fedora, så använd det som passar nedan:

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

Din MongoDB-installation borde nu fungera, det är mycket enklare jämfört med andra Linux-distros!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Installation på OpenSUSE

Först måste du importera MongoDB:s publika nyckel för MongoDB-repot med kommandot:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Därefter lägger du till MongoDB-repot med följande kommando:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

Slutligen installerar du senaste MongoDB-versionen med:

```
sudo zypper -n install mongodb-org
```

Din MongoDB-installation borde nu fungera!

</TabItem>
</Tabs>

</TabItem>
</Tabs>