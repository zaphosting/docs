---
id: vserver_linux_java
title: vServer: Java auf Server installieren
description: Informationen, wie du Java auf deinen vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Java installieren
---


## Was ist Java und wofür wird es benötigt?

Java ist weltweit eine sehr stark verwendete Programmiersprache die für zahlreiche Programme und Dienste eingesetzt wird. Damit diese Programme funktionieren ist es zwingend notwendig das Java auf dem System installiert ist. Im Folgenden erfährst du, wie du für die angebotenen Linux Betriebssysteme Java auf deinem System installieren kannst. 



## Vorbereitung

Bevor die eigentliche Java Installation begonnen werden kann, muss sichergestellt werden, dass das System auf dem neusten Stand ist. Dafür verbinden wir uns per SSH mit dem Server. Falls du nicht weißt, was SSH ist und wie du es verwendest, dann schaue dir folgende Anleitung an: [Erstzugriff (SSH)](https://zap-hosting.com/guides/docs/de/vserver_linux_ssh/)

Dort angekommen kann das System je nach Betriebssystem mit dem folgenden Befehl aktualisiert werden:

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

Nachdem die Vorbereitung abgeschlossen wurde, kann nun die Java Installation begonnen werden. Je nach Betriebssystem müssen dafür folgende Befehle ausgeführt werden:

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



## Version-Check

Nachdem die Installation abgeschlossen wurde kannst du mit dem **java --version** Befehl prüfen, ob die Installation erfolgreich gewesen ist. Die Ausgabe sollte im etwa wie im folgenden aussehen:

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

In dem Fall wurde Java 11 erfolgreich auf dem System eingerichtet. Nun kannst du problemlos Java-Applikationen auf deinem System laufen lassen. 
