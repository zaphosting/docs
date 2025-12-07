---
id: gameserver-ftpaccess
title: "Gameserver: Toegang via FTP om serverbestanden te beheren"
description: "Ontdek hoe je veilig toegang krijgt tot en je serverbestanden beheert met FTP voor naadloze bestandsoverdrachten en servercontrole → Leer het nu"
sidebar_label: FTP-toegang
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

FTP (File Transfer Protocol) is een netwerkprotocol dat is ontworpen om bestanden over een TCP/IP-netwerk te versturen. Het protocol is ontwikkeld om eenvoudig bestanden uit te wisselen tussen systemen. Met het FTP-protocol kun je je serverbestanden benaderen en beheren, of je nu bestanden wilt uploaden, downloaden of actief wilt bewerken.

<InlineVoucher />

## Voorbereiding

Om je bestanden te beheren via het FTP-protocol heb je een geschikte FTP-client nodig. Er is een ruime keuze aan FTP-clients beschikbaar. Twee van de bekendste en meest gebruikte FTP-clients zijn **FileZilla** en **WinSCP**.

| FTP-client | Download                                                     |
| ---------- | ------------------------------------------------------------ |
| FileZilla  | [Officiële Website](https://filezilla-project.org/download.php?platform=win64) |
| WinSCP     | [Officiële Website](https://winscp.net/eng/downloads.php)    |



## FTP-gegevens verkrijgen

Om via FTP toegang te krijgen tot je gameserver, heb je de bijbehorende inloggegevens nodig. Je vindt deze gegevens in het **FTP Browser**-gedeelte van je gameserverbeheer.

Voer simpelweg het **IP-adres (FTP-server)**, **gebruikersnaam** en **wachtwoord** in om verbinding te maken. Deze gegevens staan op de **FTP Browser**-pagina. De poort is altijd **21** en wordt meestal automatisch ingesteld.

![img](https://screensaver01.zap-hosting.com/index.php/s/6FTFDwyBQZ792Fd/download)



## FileZilla

### Verbinden

Je kunt verbinding maken via de Quickconnect-functie of via **Bestand -> Sitebeheer**. Vul daar de **FTP-gegevens** van je server in en klik vervolgens op **Verbinden**.

![](https://screensaver01.zap-hosting.com/index.php/s/wxSSFoW3GTXJdLK/preview)

:::info
Zorg dat je de server stopt en de FTP-permissies bijwerkt voordat je toegang krijgt tot de serverbestanden. Anders kunnen foutmeldingen zoals "Toegang geweigerd" of "Permissie geweigerd" optreden.
:::

### Bestanden beheren

Zoals eerder genoemd, kun je met de FTP-client bestanden uploaden, downloaden en bewerken op je server. De FTP-client is verdeeld in twee delen. Het linker deel staat voor jouw client (computer) en het rechter deel voor je server. Je kunt in beide mappenstructuren navigeren, zowel lokaal als op de server.

Beheer doe je door met de rechtermuisknop op het betreffende bestand of map te klikken. Afhankelijk van wat je wilt doen, kun je bestanden of mappen uploaden, downloaden, bewerken, hernoemen of verplaatsen.

![](https://screensaver01.zap-hosting.com/index.php/s/qizoBD5JnHBRkJc/preview)

:::info
Heb je meerdere gameservers? Zorg dan dat je eerst naar de juiste gameservermap navigeert.
:::



### Mogelijke problemen en oplossingen

#### "530 Login incorrect" fout
Als deze fout optreedt tijdens het verbinden, betekent dit dat de inloggegevens onjuist zijn. Controleer alle velden op volledigheid en juistheid.

#### "Transfer connection interrupted" fout
Als deze fout optreedt tijdens het verbinden of overdragen, kun je proberen de overdrachtsmodus te wijzigen van *Passief* naar *Actief*. Hieronder zie je hoe je deze instelling in FileZilla aanpast.




## WinSCP

### Verbinden
Je kunt verbinding maken via Quickconnect of bovenaan via **Nieuwe sessie**. Vul daar de FTP-gegevens van je server in en klik vervolgens op **Verbinden**.

![](https://screensaver01.zap-hosting.com/index.php/s/KNnkJsnETTFqZpD/preview)


:::info
Zorg dat je de server stopt en de FTP-permissies bijwerkt voordat je toegang krijgt tot de serverbestanden. Anders kunnen foutmeldingen zoals "Toegang geweigerd" of "Permissie geweigerd" optreden.
:::


### Bestanden beheren

Zoals eerder genoemd, kun je met de FTP-client bestanden uploaden, downloaden en bewerken op je server. De FTP-client is verdeeld in twee delen. Het linker deel staat voor jouw client (computer) en het rechter deel voor je server. Je kunt in beide mappenstructuren navigeren, zowel lokaal als op de server.

Beheer doe je door met de rechtermuisknop op het betreffende bestand of map te klikken. Afhankelijk van wat je wilt doen, kun je bestanden of mappen uploaden, downloaden, bewerken, hernoemen of verplaatsen.

![](https://screensaver01.zap-hosting.com/index.php/s/dAYiFwWQAipgTqW/preview)


### Mogelijke problemen en oplossingen

#### "530 Login incorrect" fout
Als deze fout optreedt tijdens het verbinden, betekent dit dat de inloggegevens onjuist zijn. Controleer alle velden op volledigheid en juistheid.

<InlineVoucher />