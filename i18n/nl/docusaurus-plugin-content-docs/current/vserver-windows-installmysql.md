---
id: vserver-windows-installmysql
title: "VPS: MySQL installeren"
description: "Ontdek hoe je je eigen MySQL-databaseserver op een Windows VPS instelt en beveiligt voor betrouwbare data management → Leer het nu"
sidebar_label: MySQL installeren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Intro

Een MySQL-server heb je nodig voor allerlei toepassingen en kan belangrijke data bevatten, bijvoorbeeld voor een game server of een website. Hieronder leggen we uit hoe je je eigen MySQL-databaseserver op je Windows VPS installeert.
<InlineVoucher />

## Installatie

Eerst maak je via Remote Desktop verbinding met je server en download je de nieuwste versie van MariaDB, dat wordt gebruikt als database server: [MariaDB Download](https://mariadb.org/download/?t=mariadb). Pak het gedownloade archief uit met WinRAR of 7Zip en start het installatiebestand met een dubbele klik.

Daarna klik je tijdens de installatie steeds op **Next** totdat je gevraagd wordt om het root-wachtwoord in te voeren:

![](https://screensaver01.zap-hosting.com/index.php/s/gMrr8aHEM2eAG22/preview)

Hier stel je het masterwachtwoord in voor de toegang tot je database server. Zorg ervoor dat je een sterk wachtwoord kiest dat niemand anders kent!

:::info
BELANGRIJK! Wil je extern toegang tot de database via Navicat, HeidiSQL of een andere tool, dan moet je de optie **Enable access from remote machines for root user** activeren! Dit wordt om veiligheidsredenen meestal afgeraden.
:::

Klik daarna weer op **Next** tot je bij het einde van de installatie bent, daar klik je dan op **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/qYT3rrDrcXRb4gc/preview)

Je database server is nu online en klaar voor gebruik!

## Externe toegang configureren

Als je tijdens de installatie "Enable access from remote machines for root user" hebt aangezet, moet je ook poort **3306** van MySQL openzetten in de Windows Firewall. Open daarvoor de firewall en maak een nieuwe regel aan.
Hier vind je de handleiding voor het doorsturen van poorten in de firewall:
[Port Forwarding (Firewall)](vserver-windows-port.md)

Nu kun je extern verbinding maken met je MySQL-server!



## Afsluiting

Gefeliciteerd, je hebt MySQL succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem dan gerust contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />