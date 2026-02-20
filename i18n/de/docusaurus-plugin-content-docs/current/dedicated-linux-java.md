---
id: dedicated-linux-java
title: "Java auf einem Linux Server einrichten – Java-basierte Anwendungen und Services starten"
description: "Lerne, wie du Java auf verschiedenen Linux-Systemen installierst, um Java-Anwendungen reibungslos auszuführen und deine Umgebung optimal einzurichten → Jetzt mehr erfahren"
sidebar_label: Java installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Java ist eine mega beliebte Programmiersprache, die weltweit für unzählige Programme und Services genutzt wird. Um diese Java-basierten Programme laufen zu lassen, muss Java unbedingt auf dem System installiert sein. Im Folgenden erfährst du, wie du Java auf deinem System für die angebotenen Linux-Betriebssysteme installierst. 



## Vorbereitung

Bevor du mit der eigentlichen Java-Installation startest, solltest du sicherstellen, dass dein System auf dem neuesten Stand ist. Dafür verbinden wir uns per SSH mit dem Server. Falls du nicht weißt, was SSH ist oder wie man es nutzt, schau dir am besten diese Anleitung an: [Erstzugang (SSH)](vserver-linux-ssh.md)

Dort angekommen, kannst du das System je nach Betriebssystem mit folgendem Befehl updaten:

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

Nach der Vorbereitung kannst du jetzt mit der Java-Installation starten. Je nach Betriebssystem musst du folgende Befehle ausführen:

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

In dem Fall wurde Java 11 erfolgreich auf deinem System installiert. Jetzt kannst du deine Java-Anwendungen ganz easy auf deinem System starten. 