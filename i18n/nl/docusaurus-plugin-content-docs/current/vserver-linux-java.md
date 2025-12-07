---
id: vserver-linux-java
title: "VPS: Java installeren"
description: "Leer hoe je Java installeert en configureert op verschillende Linux-systemen zodat je programma’s soepel draaien → Ontdek het nu"
sidebar_label: Java installeren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Java is een superpopulaire programmeertaal die wereldwijd wordt gebruikt voor talloze programma’s en services. Om deze Java-programma’s te kunnen draaien, moet Java natuurlijk wel op je systeem geïnstalleerd zijn. Hieronder leer je hoe je Java installeert op de Linux-systemen die wij aanbieden.

<InlineVoucher />

## Voorbereiding

Voordat je begint met de Java-installatie, is het belangrijk om te checken of je systeem up-to-date is. Hiervoor maak je verbinding met je server via SSH. Weet je niet wat SSH is of hoe je het gebruikt? Check dan even deze guide: [Eerste toegang (SSH)](vserver-linux-ssh.md)

Als je verbonden bent, update je het systeem met het volgende commando, afhankelijk van je OS:

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

Na de voorbereiding kun je nu Java installeren. Voer het juiste commando uit voor jouw besturingssysteem:

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

## Versie check

Check of de installatie gelukt is met het commando **java --version**. De output zou er ongeveer zo uit moeten zien:

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

## Afsluiting

Gefeliciteerd, je hebt Java succesvol geïnstalleerd en geconfigureerd! Heb je nog vragen of problemen? Onze support staat elke dag voor je klaar om je te helpen!

<InlineVoucher />