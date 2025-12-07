---
id: vserver-linux-java
title: "VPS: Installera Java"
description: "Lär dig hur du installerar och konfigurerar Java på olika Linux-system för att köra dina program smidigt → Lär dig mer nu"
sidebar_label: Installera Java
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Java är ett superpopulärt programmeringsspråk som används över hela världen för massor av program och tjänster. För att köra program baserade på Java är det helt nödvändigt att Java är installerat på systemet. Här nedan lär du dig hur du installerar Java på ditt system för de Linux-operativsystem vi erbjuder.

<InlineVoucher />

## Förberedelser

Innan du drar igång med själva Java-installationen är det viktigt att se till att systemet är uppdaterat. Vi kopplar upp oss mot servern via SSH. Om du inte vet vad SSH är eller hur du använder det, kolla in vår guide: [Initial access (SSH)](vserver-linux-ssh.md)

När du är inne kan du uppdatera systemet med följande kommando, beroende på vilket OS du kör:

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

När förberedelserna är klara kan du starta Java-installationen. Beroende på operativsystem kör du något av följande kommandon:

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

## Versionskontroll

Du kan kolla att installationen gick igenom med kommandot **java --version**. Outputen borde se ut ungefär så här:

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

## Avslutning

Grattis, du har nu installerat och konfigurerat Java utan problem! Om du har fler frågor eller stöter på problem, tveka inte att kontakta vår support – vi finns här för dig varje dag!

<InlineVoucher />