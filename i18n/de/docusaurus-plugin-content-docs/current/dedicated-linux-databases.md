---
id: dedicated-linux-databases
title: "Datenbanken auf einem Linux-Server einrichten – Datenbankdienste deployen und verwalten"
description: "Entdecke, wie du verschiedene Datenbanken auf Ubuntu und anderen Linux-Distributionen installierst und einrichtest – für mehr Performance und Sicherheit → Jetzt mehr erfahren"
sidebar_label: Datenbanken installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Diese Anleitung zeigt dir, wie du verschiedene Datenbanktypen installierst. Als Beispiel verwenden wir Ubuntu 20.04 als Betriebssystem, aber wir geben auch die entsprechenden Befehle für andere Linux-Distributionen an, die wir auf unserer Website anbieten. Diese Befehle müssen per SSH ausgeführt werden. Falls du nicht weißt, wie du dich per SSH mit deinem Server verbindest, schau dir hier unsere Anleitung an: [Erstzugang (SSH)](vserver-linux-ssh.md).

## Vorbereitung

Bevor du mit der Installation einer Datenbank startest, solltest du sicherstellen, dass dein System auf dem neuesten Stand ist. Aktualisiere dazu die Pakete deines Paketmanagers mit folgendem Befehl, je nach Betriebssystem:

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

## Datenbanktypen

Je nachdem, welchen Datenbankdienst du installieren möchtest, folge der passenden Anleitung:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## Was ist MariaDB?

MariaDB ist ein Open-Source relationales Datenbankmanagementsystem, ursprünglich als Fork von MySQL entstanden. Es bietet verbesserte Performance, Sicherheit und eine kontinuierliche Weiterentwicklung. Besonders hervorzuheben sind die verbesserten Storage Engines und die volle Kompatibilität zu MySQL. Wir empfehlen MariaDB gegenüber MySQL.

## MariaDB Installation

Zuerst solltest du sicherstellen, dass die neueste MariaDB-Version installiert wird. Einige ältere Betriebssysteme wie Debian 9 oder Ubuntu 18.04 bringen standardmäßig nicht die aktuellste MariaDB-Version im Paketmanager mit. Mit folgendem Befehl stellst du sicher, dass die neueste Version bezogen wird:

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Nach der Installation des Repositories aktualisiere den Paketmanager-Cache, wie im Vorbereitungsschritt beschrieben.

:::info
Die Installation des MariaDB-Repos (oben) kannst du bei modernen Betriebssystemen wie Ubuntu 22.04 oder Debian 11 getrost überspringen.
:::

Sobald das Repo eingerichtet ist, kannst du MariaDB installieren, indem du das Paket `mariadb-server` installierst. Je nach Betriebssystem führe einen der folgenden Befehle aus:

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

## MariaDB Konfiguration

Nach der Installation startest du die Konfiguration des Servers mit folgendem Befehl:

```
mysql_secure_installation
```

Folge den Anweisungen und lege ein Passwort für deinen Server fest. Beim nächsten Prompt kannst du die Eingabe vorerst mit **Enter** überspringen.

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
Der Benutzer root ist der Hauptnutzer deines MariaDB (MySQL) Servers!
:::

Als Nächstes wirst du gefragt, ob du ein Passwort für den root-User setzen möchtest – bestätige mit **y** für ja. Danach gibst du das neue Passwort für root ein.

:::note
Während der Passworteingabe wird nichts angezeigt – das ist normal und dein Passwort wird trotzdem gespeichert. Verwende ein sicheres Passwort und bewahre es gut auf.
:::

Jetzt wirst du gefragt, ob anonyme Benutzer vom Server entfernt werden sollen – aus Sicherheitsgründen solltest du das auf jeden Fall machen. Bestätige mit **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

Im nächsten Schritt legst du fest, ob sich der root-User auch von extern mit dem Server verbinden darf. Aus Sicherheitsgründen solltest du diese Option deaktivieren und mit **y** bestätigen:

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

Anschließend kannst du die Testdatenbank von MariaDB (MySQL) entfernen – bestätige auch hier mit **y**, da sie nicht benötigt wird:

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

Am Ende wirst du gefragt, ob die Berechtigungen der Datenbank aktualisiert werden sollen. Bestätige mit **y**, damit das zuvor gesetzte Passwort für root aktiviert wird:

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

Dein MariaDB (MySQL) Server ist jetzt einsatzbereit!

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## Was ist Redis?

Redis ist ein In-Memory-Datenspeicher, der hauptsächlich Daten im Key-Value-Format speichert, aber auch andere Formate wie Listen, JSON und mehr unterstützt. Es zeichnet sich durch seine Geschwindigkeit aus und liefert Antworten auf Anfragen in Millisekunden.

## Redis Installation

Zuerst musst du ein Repository hinzufügen, das die Installation von Redis ermöglicht. Dieser Schritt ist nicht für alle Linux-Distributionen nötig, sondern nur für die unten aufgeführten. Führe den Befehl aus, der zu deinem Betriebssystem und deiner Version passt:

```
// Ubuntu (alle Versionen) und Debian (nur Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (nur CentOS 7)
sudo yum install epel-release

// CentOS (nur CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Nach der Installation des Repos aktualisiere den Paketmanager-Cache, wie im Vorbereitungsschritt beschrieben.

:::info
Wenn dein Betriebssystem nicht oben aufgeführt ist, kannst du diesen Schritt überspringen.
:::

Nachdem das passende Repo eingerichtet ist, kannst du Redis installieren. Führe den Befehl aus, der zu deinem Betriebssystem passt:

```
// Ubuntu und Debian
sudo apt install redis-server

// CentOS
sudo yum install redis

// OpenSUSE
sudo zypper install redis

// Fedora
sudo dnf install redis
```

Nach der Installation ist dein Redis-Server einsatzbereit! Standardmäßig läuft er auf 127.0.0.1:6379 ohne Passwort.

:::caution 
Für Debian/Ubuntu-Nutzer:
Vergiss nicht, den `redis-server` Dienst nach der Installation zu aktivieren, damit er beim Serverstart automatisch startet. Das machst du mit:

```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## Was ist MongoDB?

MongoDB ist eine dokumentenorientierte NoSQL-Datenbank, die für Skalierbarkeit und Entwickler-Agilität konzipiert ist. Sie speichert Daten im JSON-ähnlichen BSON-Format, was die Speicherung vielfältiger Datentypen ermöglicht. MongoDB unterstützt Indizes zur Reduzierung der Antwortzeiten und zeichnet sich dadurch aus, dass es kein festes Schema wie MySQL oder SQLite benötigt – das sorgt für Flexibilität und Schnelligkeit.

## MongoDB Installation

Wähle dein Betriebssystem in den Tabs unten aus, um die passende Anleitung zu sehen.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Installation auf Ubuntu & Debian

Zuerst importierst du den öffentlichen GPG-Schlüssel von MongoDB mit folgendem Befehl:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Danach fügst du die MongoDB-Quelle zur Quellenliste deines Betriebssystems hinzu:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Jetzt kannst du MongoDB Community Edition installieren, nachdem du die Repositories mit `sudo apt update` aktualisiert hast. Installiere MongoDB mit:

```
sudo apt install mongodb-org
```

Deine MongoDB-Installation sollte jetzt funktionieren!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Installation auf CentOS & Fedora

Zuerst richtest du das MongoDB-Repo für Red Hat Systeme ein.

Erstelle die Datei `/etc/yum.repos.d/mongodb-org-6.0.repo` und füge folgenden Inhalt ein:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Jetzt kannst du MongoDB installieren. Der Installationsbefehl unterscheidet sich leicht zwischen CentOS und Fedora, nutze den passenden Befehl:

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

Deine MongoDB-Installation sollte jetzt laufen – viel einfacher als bei anderen Linux-Distributionen!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Installation auf OpenSUSE

Zuerst importierst du den öffentlichen MongoDB-Schlüssel mit:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Dann fügst du das MongoDB-Repository hinzu:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

Zum Schluss installierst du die neueste MongoDB-Version mit:

```
sudo zypper -n install mongodb-org
```

Deine MongoDB-Installation sollte jetzt einsatzbereit sein!

</TabItem>
</Tabs>

</TabItem>
</Tabs>