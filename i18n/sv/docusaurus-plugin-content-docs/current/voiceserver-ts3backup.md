---
id: voiceserver-ts3backup
title: "Voiceserver: Skapa, ladda ner och importera backups"
description: "Upptäck hur du enkelt skapar och hanterar backups med gratis lagring och uppgraderingsalternativ för säker dataskydd → Läs mer nu"
sidebar_label: Backups
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Vi erbjuder möjligheten att skapa individuella backups med ett klick. Det gör att du enkelt och smidigt kan skapa backups och importera dem när som helst senare. Alla backups sparas på din lagringsserver, som som standard inkluderar 10GB gratis lagringsutrymme. Behöver du mer kan du även uppgradera till Premium Storage.

<InlineVoucher />

## Skapa Backups

<Tabs>

<TabItem value="Webinterface" label="TeamSpeak Server Produkt" default>

För att skapa en backup på vår webbplats måste du öppna din Voiceserver-tjänst i webbgränssnittet och navigera till **Snapshots** i administrationen. Väl där klickar du på den gröna knappen **Create snapshot** för att skapa en backup.

![img](https://screensaver01.zap-hosting.com/index.php/s/G2EfYtMnqGzrjpC/download)

:::warning Externa Backups
Import av externa backups (snapshots) är inte möjligt av säkerhetsskäl. Undantag finns inte. 
:::

</TabItem>
<TabItem value="self_hosted" label="Självhostad (VPS/Dedikerad Server)">

Precis som med TeamSpeak Server-produkten kan du, om du använder GS/TS3-gränssnittet, skapa en backup (snapshot) med ett klick via TeamSpeak Server-tjänstadministrationen. Du kan också skapa en backup manuellt med inloggningsuppgifterna för TeamSpeak-instansen (Query) och det externa programmet YatQA.

![](https://screensaver01.zap-hosting.com/index.php/s/GNak6s26sFcX4bA/preview)

För att skapa en snapshot i YatQA går du till **Miscellaneous** högst upp i programmet och klickar sedan på **Create and save snapshot**.

![](https://screensaver01.zap-hosting.com/index.php/s/CZWZRYSXpCTi4j3/preview)

</TabItem>
</Tabs>

## Ladda ner Backups

Skapade backups (snapshots) kan laddas ner från din lagringsserver via FTP. Inloggningsuppgifterna hittar du i webbgränssnittet under din lagringsserver-tjänst. Om du inte är van vid FTP rekommenderar vi att du använder vår generella guide för [FTP-access](gameserver-ftpaccess.md).

![img](https://screensaver01.zap-hosting.com/index.php/s/NTR5oygagD6M6mY/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/MiX4GG2zoe5mkSc/preview)

## Sammanfattning

Du har lyckats skapa en backup om du följt alla stegen ovan. Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />