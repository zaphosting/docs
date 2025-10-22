---
id: vserver-linux-java
title: "VPS: Java Installation"
description: "Lerne, wie du Java auf verschiedenen Linux-Systemen installierst und konfigurierst, damit deine Programme smooth laufen → Jetzt mehr erfahren"
sidebar_label: Java installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Java ist eine mega beliebte Programmiersprache, die weltweit für unzählige Programme und Services genutzt wird. Um diese Java-basierten Programme am Start zu haben, muss Java natürlich auf deinem System installiert sein. Im Folgenden zeigen wir dir, wie du Java auf deinem System für die angebotenen Linux-Betriebssysteme installierst.

<InlineVoucher />

## Vorbereitung

Bevor du mit der eigentlichen Java-Installation loslegst, solltest du sicherstellen, dass dein System auf dem neuesten Stand ist. Dafür verbinden wir uns per SSH mit dem Server. Falls du nicht weißt, was SSH ist oder wie das geht, check am besten unsere Anleitung: [Erstzugang (SSH)](vserver-linux-ssh.md)

Ist die Verbindung da, kannst du das System je nach Betriebssystem mit folgendem Befehl updaten:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## Installation

Nach der Vorbereitung kannst du jetzt mit der Java-Installation starten. Je nach Betriebssystem führst du folgende Befehle aus:

**Debian**

```
sudo apt-get install default-jdk
```

**Ubuntu**

```
sudo apt install default-jdk
```

**CentOS**

```
sudo yum install java-11-openjdk
```

**Fedora**

```
sudo dnf install java-11-openjdk
```

## Versions-Check

Ob die Installation geklappt hat, kannst du mit dem Befehl **java --version** prüfen. Die Ausgabe sollte ungefähr so aussehen:

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

## Fazit

Glückwunsch, du hast Java erfolgreich installiert und konfiguriert! Falls du noch Fragen hast oder irgendwo hängst, steht dir unser Support-Team täglich zur Seite und hilft dir weiter!

<InlineVoucher />