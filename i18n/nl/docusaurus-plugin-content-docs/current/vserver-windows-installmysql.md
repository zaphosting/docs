---
id: vserver-windows-installmysql
title: "VPS: MySQL Installeren"
description: "Ontdek hoe je je eigen MySQL database server op een Windows VPS instelt en beveiligt voor betrouwbare data management → Leer het nu"
sidebar_label: MySQL Installeren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introductie

Een MySQL-server is nodig voor verschillende applicaties en kan belangrijke data bevatten, bijvoorbeeld voor een game server of een website. Hieronder leggen we uit hoe je je eigen MySQL database server op je Windows VPS instelt.
<InlineVoucher />

## Installatie

Allereerst maak je via Remote Desktop verbinding met je server en download je de nieuwste versie van MariaDB, die wordt gebruikt als database server: [MariaDB Download](https://mariadb.org/download/?t=mariadb). 

Pak het gedownloade archief uit met WinRAR of 7Zip en start het installatiebestand met een dubbele klik: 

![](https://screensaver01.zap-hosting.com/index.php/s/aPZn6jmLK5NZybW/preview)

Daarna navigeer je door het installatieproces door op **Next** te klikken totdat je gevraagd wordt het root-wachtwoord in te voeren:

![](https://screensaver01.zap-hosting.com/index.php/s/gMrr8aHEM2eAG22/preview)

Hier kun je het masterwachtwoord instellen voor de toegang tot je database server. Zorg ervoor dat je een sterk wachtwoord gebruikt dat niemand anders kent!

:::info
BELANGRIJK! Als je extern toegang wilt tot de database via Navicat, HeidiSQL of een andere tool, moet je de optie **Enable access from remote machines for root user** activeren! Om veiligheidsredenen wordt dit over het algemeen niet aanbevolen.
:::

Klik daarna op **Next** totdat je aan het einde van de installatie bent, daar klik je dan op **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/qYT3rrDrcXRb4gc/preview)

Je database server is nu online en klaar voor gebruik!

## Configuratie van externe toegang

Als je tijdens de installatie "Enable access from remote machines for root user" hebt ingeschakeld, moet je ook poort **3306** van MySQL openzetten in de Windows Firewall. Open hiervoor de firewall en maak daar een nieuwe regel aan.
Je vindt hier de handleiding voor het doorsturen van poorten in de firewall:
[Port Forwarding (Firewall)](vserver-windows-port.md)

Nu kun je extern toegang krijgen tot je MySQL server!



## Conclusie

Gefeliciteerd, je hebt de MySQL server succesvol geïnstalleerd en geconfigureerd op je VPS! Heb je nog vragen of problemen? Neem dan gerust contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />