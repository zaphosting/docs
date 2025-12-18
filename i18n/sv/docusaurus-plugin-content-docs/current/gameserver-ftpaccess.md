---
id: gameserver-ftpaccess
title: "Gameserver: Åtkomst via FTP för att hantera serverfiler"
description: "Upptäck hur du säkert kan komma åt och hantera dina serverfiler med FTP för smidiga filöverföringar och serverkontroll → Lär dig mer nu"
sidebar_label: FTP-åtkomst
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

FTP (File Transfer Protocol) är ett nätverksprotokoll designat för att överföra filer över ett TCP/IP-nätverk. Protokollet utvecklades för att möjliggöra enkel filutbyte mellan system. Med FTP-protokollet kan du komma åt och hantera dina serverfiler, oavsett om du vill ladda upp och ladda ner filer eller aktivt redigera dem.

<InlineVoucher />

## Förberedelser

För att hantera dina filer med FTP-protokollet behöver du en lämplig FTP-klient. Det finns ett ganska stort utbud av FTP-klienter. Två av de mest kända och etablerade FTP-klienterna är **FileZilla** och **WinSCP**.

| FTP-klient | Ladda ner                                                     |
| ---------- | ------------------------------------------------------------ |
| FileZilla  | [Officiell webbplats](https://filezilla-project.org/download.php?platform=win64) |
| WinSCP     | [Officiell webbplats](https://winscp.net/eng/downloads.php)    |



## Skaffa FTP-uppgifter

För att komma åt din gameserver via FTP behöver du motsvarande inloggningsuppgifter. Du hittar dessa i avsnittet **FTP Browser** i din gameservers administration.

Ange helt enkelt **IP-adressen (FTP-servern)**, **användarnamn** och **lösenord** för att upprätta anslutningen. Dessa uppgifter finns listade på sidan **FTP Browser**. Porten är alltid **21** och brukar sättas automatiskt.

![img](https://screensaver01.zap-hosting.com/index.php/s/6FTFDwyBQZ792Fd/download)



## FileZilla

### Ansluta

Du kan upprätta en anslutning antingen via Quickconnect-funktionen eller genom att gå till **File -> Site Manager**. Ange dina **FTP-uppgifter** för servern där och klicka sedan på **Connect**.

![](https://screensaver01.zap-hosting.com/index.php/s/wxSSFoW3GTXJdLK/preview)

:::info
Se till att stoppa servern och uppdatera FTP-behörigheterna innan du går in på serverfilerna. Annars kan felmeddelanden som "Permission Denied" eller "Access Denied" dyka upp.
:::

### Hantera filer

Som nämnt tidigare kan du använda FTP-klienten för att ladda upp, ladda ner och redigera filer på din server. FTP-klienten är uppdelad i två delar. Vänstra halvan representerar din klient (datorn) och högra halvan representerar din server. Du kan navigera i båda katalogerna på både lokal och servernivå.

Hantering görs genom att högerklicka på respektive fil eller mapp. Beroende på vad du vill göra kan du ladda upp, ladda ner, redigera, byta namn på eller flytta filer eller mappar.

![](https://screensaver01.zap-hosting.com/index.php/s/qizoBD5JnHBRkJc/preview)

:::info
Om du har flera gameservrar måste du först navigera till rätt gameserver-katalog.
:::



### Vanliga problem och lösningar

#### Felmeddelandet "530 Login incorrect"
Om detta fel uppstår vid anslutningen betyder det att felaktiga uppgifter har angetts. Kontrollera att alla fält är ifyllda korrekt och fullständigt.

#### Felmeddelandet "Transfer connection interrupted"
Om detta fel uppstår under anslutning eller överföring kan du prova att byta överföringsläge från *Passive* till *Active*. Följande steg visar hur du ändrar denna inställning i FileZilla.




## WinSCP

### Ansluta
Du kan upprätta en anslutning via Quickconnect eller högst upp via **New Session**. Ange dina FTP-uppgifter för servern där och klicka sedan på **Connect**.

![](https://screensaver01.zap-hosting.com/index.php/s/KNnkJsnETTFqZpD/preview)


:::info
Se till att stoppa servern och uppdatera FTP-behörigheterna innan du går in på serverfilerna. Annars kan felmeddelanden som "Permission Denied" eller "Access Denied" dyka upp.
:::


### Hantera filer

Som nämnt tidigare kan du använda FTP-klienten för att ladda upp, ladda ner och redigera filer på din server. FTP-klienten är uppdelad i två delar. Vänstra halvan representerar din klient (datorn) och högra halvan representerar din server. Du kan navigera i båda katalogerna på både lokal och servernivå.

Hantera filer genom att högerklicka på respektive fil eller mapp. Beroende på vad du vill göra kan du ladda upp, ladda ner, redigera, byta namn på eller flytta filer eller mappar.

![](https://screensaver01.zap-hosting.com/index.php/s/dAYiFwWQAipgTqW/preview)


### Vanliga problem och lösningar

#### Felmeddelandet "530 Login incorrect"
Om detta fel uppstår vid anslutningen betyder det att felaktiga uppgifter har angetts. Kontrollera att alla fält är ifyllda korrekt och fullständigt.

<InlineVoucher />