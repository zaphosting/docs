---
id: dedicated-windows-installmysql
title: "Dedicated Server: MySQL Installeren"
description: "Leer hoe je je eigen MySQL-databaseserver op een Windows Dedicated Server instelt en beveiligt voor betrouwbare data management → Ontdek het nu"
sidebar_label: MySQL Installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een MySQL-server heb je nodig voor verschillende applicaties en kan belangrijke data bevatten, bijvoorbeeld voor een game server of een website. Hieronder leggen we uit hoe je je eigen MySQL-databaseserver op je Windows Dedicated Server installeert.



## Installatie

Eerst maak je via Remote Desktop verbinding met je server en download je de nieuwste versie van MariaDB, dat wordt gebruikt als database server: [MariaDB Download](https://mariadb.org/download/?t=mariadb). 

Pak het gedownloade archief uit met WinRAR of 7Zip en start het installatiebestand met een dubbele klik: 

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

Daarna navigeer je door het installatieproces door steeds op **Next** te klikken totdat je gevraagd wordt het root-wachtwoord in te voeren:

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

Hier stel je het masterwachtwoord in voor de toegang tot je databaseserver. Zorg ervoor dat je een sterk wachtwoord kiest dat niemand anders kent!

:::info
BELANGRIJK! Wil je extern toegang tot de database via Navicat, HeidiSQL of een andere tool, dan moet je de optie **Enable access from remote machines for root user** activeren! Dit wordt om veiligheidsredenen meestal afgeraden.
:::

Klik daarna weer op **Next** tot je aan het einde van de installatie bent, waar je op **Install** klikt:

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

Je databaseserver is nu online en klaar voor gebruik!

## Configuratie van externe toegang

Als je tijdens de installatie "Enable access from remote machines for root user" hebt aangezet, moet je ook poort **3306** van MySQL openzetten in de Windows Firewall. Open daarvoor de firewall en maak een nieuwe regel aan.
Hier vind je de handleiding voor het doorsturen van poorten in de firewall:
[Port Forwarding (Firewall)](vserver-windows-port.md)

Nu kun je extern verbinding maken met je MySQL-server!



## Conclusie

Gefeliciteerd, je hebt de MySQL-server succesvol geïnstalleerd. Voor vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂