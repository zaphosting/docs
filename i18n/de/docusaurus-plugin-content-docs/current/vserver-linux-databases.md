---
id: vserver-linux-databases
title: Installation von Datenbanken
description: Information, wie du Datenbanken auf deinem vServer von ZAP-Hosting installierst - ZAP-Hosting.com Dokumentation
sidebar_label: Datenbank installieren
---

## Einführung

Diese Anleitung beinhaltet Schritte für die Installation verschiedener Arten von Datenbanken. In diesem Beispiel wird Ubuntu 20.04 als Betriebssystem verwendet, es werden jedoch auch entsprechende Befehle für andere Linux-Distributionen angegeben, die wir auf unserer Website bereitstellen. Diese Befehle müssen über SSH ausgeführt werden. Wenn du nicht weißt, wie du dich über SSH mit deinem Server verbinden kannst, schaue bitte hier nach: [Erstzugang (SSH)](vserver-linux-ssh.md).

## Vorbereitung

Bevor du mit der Installation einer Datenbank beginnst, musst du zunächst sicherstellen, dass das System auf dem neuesten Stand ist. Dazu musst du, je nach Betriebssystem, die Pakete aus der Paketverwaltung deines Systems mit dem folgenden Befehl aktualisieren:

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

## Datenbankarten
  
Je nachdem, welchen Datenbankdienst du installieren möchtest, folge der entsprechenden Anleitung:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## Was ist MariaDB?

MariaDB ist ein quelloffenes relationales Datenbankmanagementsystem, das ursprünglich von MySQL abgeleitet wurde. Es gewährleistet verbesserte Leistung, Sicherheit und kontinuierliche Weiterentwicklung. MariaDB bietet verbesserte Speicher-Engines und seine Architektur ist vollständig kompatibel mit MySQL. Wir empfehlen MariaDB gegenüber MySQL.

## MariaDB Installation

Zuallererst musst du sicherstellen, dass die neueste MariaDB-Version installiert ist. Einige alte Betriebssysteme wie Debian 9 oder Ubuntu 18.04 enthalten standardmäßig nicht die neueste MariaDB-Version im Paketmanager. Durch die Ausführung des folgenden Befehls stellst du sicher, dass die neueste Version abgerufen wird.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Nach der Installation des Repos aktualisierst du den Cache deines Paketmanagers, indem du die im Abschnitt [Vorbereitungsschritt](#vorbereitung) beschriebenen Schritte ausführst.

:::info
Die Installation der MariaDB-Repos (Schritt oben) kann bei modernen Betriebssystemen wie Ubuntu 22.04 oder Debian 11 getrost ignoriert werden.
:::

Nachdem das Repo-Setup abgeschlossen ist, kann nun die Installation von MariaDB durch die Installation des Pakets `mariadb-server` beginnen. Je nach Betriebssystem müssen dazu die folgenden Befehle ausgeführt werden:

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

Sobald die Installation abgeschlossen ist, gibst du den folgenden Befehl ein, um die Konfiguration des Servers zu starten: 

```
mysql_secure_installation
```

Nun kannst du deinen MariaDB (MySQL)-Server konfigurieren, indem du den Eingabeaufforderungen folgst und ein Passwort für Ihren Server festlegen. Bei der folgenden Aufforderung können Sie die Eingabe vorerst überspringen, indem Sie **Enter** drücken.

![](https://user-images.githubusercontent.com/61839701/165694493-b113409b-3f2a-41ba-8113-59f86ded31b8.png)

:::info
Der Benutzer root ist der Hauptbenutzer deines MariaDB (MySQL) Servers!
:::

Als Nächstes wirst du gefragt, ob du ein Passwort für den Root-Benutzer festlegen willst, bestätige dies mit **y** für ja. Anschließend musst du das neue Passwort für den Benutzer root eintippen.

:::note
Während du das Passwort eingibst, kannst du es nicht sehen. Dieses Verhalten ist jedoch normal und dein Passwort wird trotzdem gespeichert. Stellen sicher, dass du ein sicheres Passwort für deinen Root-Benutzer verwendest und es an einem sicheren Ort aufbewahrst. 
:::

Nun wirst du gefragt, ob du anonyme Benutzer von deinem Server entfernen willst, was du aus Sicherheitsgründen auf jeden Fall tun solltest. Bestätige dies mit einem **y** für ja:

![image](https://user-images.githubusercontent.com/13604413/159171942-82667636-b148-4248-a95d-ad3d9ed3ab47.png)

In der folgenden Eingabeaufforderung legst du fest, ob sich der Benutzer root von außen mit dem Server verbinden darf. Aus Sicherheitsgründen solltest du auch diese Option deaktivieren und dies daher mit **y** bestätigen:

![image](https://user-images.githubusercontent.com/13604413/159171944-d897a99a-a0f4-421b-bfb9-92c0640f2db0.png)

Im nächsten Schritt kannst du auch bestätigen, dass du die von MariaDB (MySQL) bereitgestellte Testdatenbank mit **y** entfernst, da sie nicht benötigt wird und einfach gelöscht werden kann:

![image](https://user-images.githubusercontent.com/13604413/159171945-e7b4f9ef-1ec0-409f-ad5f-dff05f42c561.png)

Am Ende des Konfigurationsprozesses wirst du gefragt, ob du die Berechtigungen der Datenbank aktualisieren möchtest. Bestätige dies mit **y**, um das zuvor festgelegte Passwort für den Root-Benutzer zu aktivieren:

![image](https://user-images.githubusercontent.com/13604413/159171953-8a6cb526-6fac-47fd-be04-eb752f57b1a1.png)

Dein MariaDB (MySQL) Server ist nun einsatzbereit!

![](https://user-images.githubusercontent.com/61839701/165694518-162f9567-e95e-43e8-98b2-c2450f26c975.png)
</TabItem>

<TabItem value="redis" label="Redis">

## Was ist Redis?

Redis is an in-memory data structure store, mainly used to store data with key-value structure, although it supports other formats such as lists, JSON and more. It is characterized by its speed, providing answers to queries in milliseconds.

## Redis Installation

Zunächst musst du ein Repo hinzufügen, mit dem du Redis installieren kannst. Dieser Schritt ist nicht für alle Linux-Distributionen erforderlich, sondern nur für die unten aufgeführten Linux-Distributionen. Führe den folgenden Befehl aus, der deinem Betriebssystem und deiner Version entspricht:

```
// Ubuntu (any version) and Debian (only Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (only CentOS 7)
sudo yum install epel-release

// CentOS (only CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Nach der Installation des Repos aktualisierst du den Cache deines Paketmanagers, indem du die im Abschnitt [Vorbereitungsschritt](#vorbereitung) beschriebenen Schritte ausführst.

:::info
Wenn dein Betriebssystem oben nicht aufgeführt ist, kannst du diesen Schritt überspringen.
:::

Nachdem du das entsprechende Repo installiert hast, fährst du mit der Installation des Redis Server-Pakets fort. Führe den Befehl aus, der dem von deinem  verwendeten Betriebssystem entspricht.

```
// Ubuntu and Debian
sudo apt install redis-server

// CentOS
sudo yum install redis

// OpenSUSE
sudo zypper install redis

// Fedora
sudo dnf install redis
```

Nach der Installation ist dein Redis-Server einsatzbereit! Standardmäßig läuft er unter 127.0.0.1:6379 ohne Passwort.

:::caution 
Für Debian/Ubuntu-Benutzer:
Denke daran, den Dienst "redis-server" nach der Installation zu aktivieren, damit er automatisch beim Booten des Servers startet. Du kannst dies mit dem folgenden Befehl tun:
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## Was ist MongoDB?
MongoDB ist eine dokumentenorientierte NoSQL-Datenbank, die auf Skalierbarkeit und Flexibilität bei der Entwicklung ausgelegt ist. Sie speichert Daten im JSON-ähnlichen BSON-Format, was die Speicherung verschiedener Datentypen ermöglicht. Sie bietet die Möglichkeit, Indizes zu verwenden, um die Antwortzeit zu verkürzen, und zeichnet sich dadurch aus, dass sie kein vordefiniertes Schema wie MySQL oder SQLite hat, was Agilität und Flexibilität ermöglicht.

## MongoDB Installation

Wähle auf den folgenden Registerkarten Ihr Betriebssystem aus, um die entsprechende Anleitung anzuzeigen.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Installation bei Ubuntu & Debian

Zunächst solltest du den folgenden Befehl ausführen, um den öffentlichen GPG-Schlüssel von MongoDB zu importieren:
```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Anschließend musst du die MongoDB-Quelle in die Quellenliste deines Betriebssystems aufnehmen. Dazu kannst du den folgenden Befehl ausführen:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Nun kann der Paketmanager MongoDB Community Edition installieren, aber vorher musst du die Repositories mit dem Befehl aktualisieren: `sudo apt update`. Schließlich kannst du MongoDB mit installieren:

```
sudo apt install mongodb-org
```

Deine MongoDB-Installation sollte jetzt funktionieren!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Installation bei CentOS & Fedora

Zunächst musst du das MongoDB-Repositorium für das Red Hat-System einrichten.

Erstelle eine Datei mit dem Namen `/etc/yum.repos.d/mongodb-org-6.0.repo`, und füge den folgenden Inhalt ein:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Jetzt kannst du MongoDB installieren. Es gibt einen kleinen Unterschied im Installationsbefehl zwischen CentOS und Fedora, daher solltest du den entsprechenden Befehl unten verwenden:

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

Deine MongoDB-Installation sollte jetzt funktionieren, es ist viel einfacher als bei anderen Linux-Distributionen!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Installation bei OpenSUSE

Zunächst musst du den öffentlichen MongoDB-Schlüssel für das MongoDB-Repository mit diesem Befehl importieren:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Um das MongoDB-Repository hinzuzufügen, musst du anschließend den folgenden Befehl ausführen:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

Und schließlich kannst du die neueste MongoDB-Version installieren:

```
sudo zypper -n install mongodb-org
```

Deine MongoDB-Installation sollte jetzt funktionieren!

</TabItem>
</Tabs>

</TabItem>
</Tabs>
