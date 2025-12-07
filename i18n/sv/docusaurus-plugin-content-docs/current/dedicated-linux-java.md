---
id: dedicated-linux-java
title: "Dedikerad Server: Installation av Java"
description: "Lär dig hur du installerar Java på olika Linux-system för att köra Java-applikationer smidigt och säkerställa att din miljö är korrekt uppsatt → Läs mer nu"
sidebar_label: Installera Java
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Java är ett väldigt populärt programmeringsspråk som används världen över för massor av program och tjänster. För att köra dessa program baserade på Java är det helt nödvändigt att Java är installerat på systemet. Här nedan lär du dig hur du installerar Java på ditt system för de Linux-operativsystem vi erbjuder. 



## Förberedelse

Innan du sätter igång med själva Java-installationen är det viktigt att se till att systemet är uppdaterat. För detta ansluter vi till servern via SSH. Om du inte vet vad SSH är eller hur du använder det, kolla in den här guiden: [Initial access (SSH)](vserver-linux-ssh.md)

När du är inloggad kan systemet uppdateras med följande kommando, beroende på operativsystem:

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

När förberedelserna är klara kan du starta Java-installationen. Beroende på operativsystem kör du följande kommandon:

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

Du kan kolla om installationen lyckades med kommandot **java --version**. Utdata bör se ut ungefär så här:

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

I det här fallet är Java 11 installerat och klart på ditt system. Nu kan du enkelt köra dina Java-applikationer på servern. 


