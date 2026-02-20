---
id: dedicated-windows-installmysql
title: "MySQL installeren op een Windows Server - Betrouwbare databases opzetten en beheren"
description: "Leer hoe je je eigen MySQL database server opzet en beveiligt op een Windows Dedicated Server voor betrouwbare data management → Ontdek het nu"
sidebar_label: MySQL installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een MySQL-server is nodig voor verschillende applicaties en kan belangrijke data bevatten, bijvoorbeeld voor een game server of een website. Hieronder leggen we uit hoe je je eigen MySQL database server opzet op je Windows Dedicated Server.



## Installatie

Begin met het verbinden via Remote Desktop Connection met je server en download de nieuwste versie van MariaDB, die wordt gebruikt als database server: [MariaDB Download](https://mariadb.org/download/?t=mariadb). 

Pak het gedownloade archief uit met WinRAR of 7Zip en start het installatiebestand met een dubbele klik: 

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

Daarna navigeer je door het installatieproces door op **Next** te klikken totdat je gevraagd wordt het root-wachtwoord in te voeren:

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

Hier kun je het masterwachtwoord instellen voor de toegang tot je database server. Zorg ervoor dat je een veilig wachtwoord kiest dat niemand anders kent!

:::info
BELANGRIJK! Als je extern toegang wilt tot de database via Navicat, HeidiSQL of een andere tool, moet je de optie **Enable access from remote machines for root user** activeren! Om veiligheidsredenen wordt dit normaal gesproken niet aanbevolen.
:::

Klik daarna op **Next** totdat je aan het einde van de installatie bent, daar klik je op **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

Je database server is nu online en klaar voor gebruik!

## Configuratie van externe toegang

Als je tijdens de installatie "Enable access from remote machines for root user" hebt aangezet, moet je ook poort **3306** van MySQL openzetten in de Windows Firewall. Open hiervoor de firewall en maak een nieuwe regel aan.
Hier vind je de handleiding voor het doorsturen van poorten in de firewall:
[Port Forwarding (Firewall)](vserver-windows-port.md)

Nu kun je extern verbinding maken met je MySQL server!



## Conclusie

Gefeliciteerd, je hebt de MySQL server succesvol geïnstalleerd. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂