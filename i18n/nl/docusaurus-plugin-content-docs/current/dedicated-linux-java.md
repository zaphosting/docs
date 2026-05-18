---
id: dedicated-linux-java
title: "Java installeren op een Linux Server - Java gebaseerde applicaties en services draaien"
description: "Leer hoe je Java installeert op verschillende Linux-systemen om Java-applicaties soepel te laten draaien en zorg dat je omgeving goed is ingesteld → Ontdek het nu"
sidebar_label: Java installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Java is een superpopulaire programmeertaal die wereldwijd wordt gebruikt voor talloze programma’s en services. Om deze Java-gebaseerde programma’s te kunnen draaien, is het absoluut noodzakelijk dat Java op het systeem geïnstalleerd is. Hieronder leer je hoe je Java installeert op jouw systeem voor de aangeboden Linux-besturingssystemen.

## Voorbereiding

Voordat je begint met de daadwerkelijke Java-installatie, is het belangrijk om te zorgen dat je systeem up-to-date is. Hiervoor maak je verbinding met de server via SSH. Als je niet weet wat SSH is of hoe je het gebruikt, check dan deze gids: [Eerste toegang (SSH)](vserver-linux-ssh.md)

Eenmaal verbonden, kun je het systeem updaten met het volgende commando, afhankelijk van je besturingssysteem:

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

## Installatie

Na de voorbereiding kun je nu starten met het installeren van Java. Afhankelijk van je besturingssysteem voer je de volgende commando’s uit:

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

## Versie-check

Je kunt checken of de installatie gelukt is met het commando **java --version**. De output zou er ongeveer zo uit moeten zien:

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

In dit geval is Java 11 succesvol geïnstalleerd op je systeem. Nu kun je zonder problemen je Java-applicaties draaien op je server.