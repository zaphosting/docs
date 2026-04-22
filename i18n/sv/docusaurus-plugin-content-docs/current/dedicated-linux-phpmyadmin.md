---
id: dedicated-linux-phpmyadmin
title: "Installera phpMyAdmin på en Linux-server – Hantera dina databaser via webbgränssnitt"
description: "Upptäck hur du enkelt hanterar MySQL- och MariaDB-databaser med phpMyAdmins webbgränssnitt för effektiv databasadministration → Läs mer nu"
sidebar_label: Installera phpMyAdmin
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

phpMyAdmin är ett gratis, webbaserat verktyg för att hantera MySQL- och MariaDB-databaser. Det erbjuder ett användarvänligt gränssnitt som låter dig skapa, redigera, hantera och ta bort databaser utan att behöva skriva SQL-kommandon manuellt.



## Installera phpMyAdmin med One Click Apps Installer

Du kan installera **phpMyAdmin** direkt via vår **One Click Apps Installer** i VPS-webbgränssnittet. Efter att ha slutfört den initiala app-installationen, öppna appkatalogen, sök efter **phpMyAdmin** och starta deploymenten med dina valda projekt-, miljö- och domäninställningar. Det ger dig ett snabbt och smidigt sätt att deploya och hantera **phpMyAdmin** utan manuell kommandoradskonfiguration, samtidigt som du får fördelarna med integrerad webbhantering, stöd för egna domäner och SSL där det finns tillgängligt.

## Förberedelser

Innan installationen börjar, se till att systemet är uppdaterat. Eventuella väntande uppdateringar och uppgraderingar kan göras så här:

```
sudo apt update -y
sudo apt upgrade -y
```

Du måste också säkerställa att PHP redan är installerat på ditt system. Det är nödvändigt för att kunna använda phpMyAdmin. För att se hur du installerar PHP, kolla in vår guide [Installera PHP](vserver-linux-php.md).

:::warning Saknas PHP-paket
Om de nödvändiga PHP-paketen saknas kan inte phpMyAdmins PHP-filer bearbetas och visas korrekt. 
:::

## Installation

När förberedelserna är klara kan installationen av phpMyAdmin börja. Börja med att öppna installationsmappen där phpMyAdmin ska installeras.

Navigera till rätt mapp med kommandot `cd /usr/share`. Ladda sedan ner senaste versionen av phpMyAdmin till installationsmappen med `wget`:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Om `wget` inte finns installerat kan du lägga till det med kommandot `sudo apt install wget -y`. 
:::

När nedladdningen är klar kan ZIP-filen packas upp med följande kommando:

```
unzip phpmyadmin.zip
```
:::warning
Om `unzip` saknas kan du installera det med kommandot `sudo apt install unzip -y`. 
:::

Den uppackade mappen kan nu döpas om till ett enklare namn, ZIP-filen tas bort och nödvändiga rättigheter sätts:

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Konfiguration

### Webbserverns konfigurationsfil

Nu måste phpMyAdmin läggas till i webbserverns konfiguration. Skapa en ny Virtual Host-konfigurationsfil med `nano /etc/apache2/conf-available/phpmyadmin.conf` och fyll den med följande innehåll:

```
# phpMyAdmin Apache-konfiguration

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Blockera webbåtkomst för säkerhet till mappar som inte behöver det
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

När Apache2-phpMyAdmin-konfigurationen är ifylld sparar och stänger du med `CTRL+X`, tryck `Y` och bekräfta med `Enter`.

Den nya virtual host-konfigurationsfilen måste sedan aktiveras och laddas om. Kör följande kommandon:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Skapa nödvändig temporär mapp

För att phpMyAdmin ska fungera korrekt måste en temporär mapp skapas och rätt behörigheter sättas. Det gör du med:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Avslutning

Grattis, du har nu installerat och konfigurerat phpMyAdmin! Du kan nå webbgränssnittet via serverns IP-adress och sökvägen (http://IP-Address/phpmyadmin). Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support – vi finns här för dig varje dag! 🙂