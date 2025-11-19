---
id: dedicated-linux-java
title: "Dedicated Server: Installation von Java"
description: "Lerne, wie du Java auf verschiedenen Linux-Systemen installierst, um Java-Anwendungen reibungslos auszuführen und deine Umgebung richtig einzurichten → Jetzt mehr erfahren"
sidebar_label: Java installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Java ist eine sehr beliebte Programmiersprache, die weltweit für zahlreiche Programme und Services genutzt wird. Um diese Java-basierten Programme auszuführen, ist es absolut notwendig, dass Java auf dem System installiert ist. Im Folgenden erfährst du, wie du Java auf deinem System für die angebotenen Linux-Betriebssysteme installierst.

## Vorbereitung

Bevor du mit der eigentlichen Java-Installation startest, ist es wichtig sicherzustellen, dass das System auf dem neuesten Stand ist. Dafür verbinden wir uns per SSH mit dem Server. Falls du nicht weißt, was SSH ist und wie man es nutzt, schau dir bitte die folgende Anleitung an: [Erstzugang (SSH)](vserver-linux-ssh.md)

Dort angekommen, kannst du das System je nach Betriebssystem mit folgendem Befehl aktualisieren:

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

Nach Abschluss der Vorbereitung kann die Java-Installation gestartet werden. Je nach Betriebssystem müssen folgende Befehle ausgeführt werden:

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

Du kannst überprüfen, ob die Installation erfolgreich war, indem du den Befehl **java --version** ausführst. Die Ausgabe sollte ungefähr so aussehen:

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

In diesem Fall wurde Java 11 erfolgreich auf deinem System installiert. Jetzt kannst du deine Java-Anwendungen problemlos auf deinem System ausführen.