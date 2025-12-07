---
id: gameserver-backups
title: 'Gameserver: Skapa, ladda ner och importera backups'
description: "Upptäck hur du enkelt skapar och återställer manuella eller automatiska backups för din gameserver för att skydda dina data → Lär dig mer nu"
sidebar_label: Backups
services:
  - gameserver
  - premium-storage
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Vi erbjuder möjligheten att skapa individuella backups med ett klick. Det gör att du enkelt och smidigt kan skapa backups och importera dem när som helst senare. Denna funktion finns för serverfilerna på din gameserver samt för tillhörande databaser. Alla backups sparas på din lagringsserver, som som standard inkluderar 10GB gratis lagringsutrymme. Behöver du mer kan du uppgradera till Premium Storage.

Förutom att skapa backups manuellt kan backups också skapas helt automatiskt. Backups kan schemaläggas dagligen eller veckovis vid en angiven tidpunkt. När du återställer en backup kommer servern att vara i det skick den var vid backupens skapande.

<YouTube videoId="yUDAcfyDELc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/CTWHD2Lq4QqFWQw/preview" title="Så skapar du BACKUPS för din Server!" description="Känns det lättare att förstå när du ser saker i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara vill ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Skapa backups manuellt

Tryck på den gröna **+**-knappen bredvid backup-listan för att skapa en backup manuellt. Backup-processen startar därefter.

:::info
Backup-skapandet kan ta några minuter beroende på storleken på dina serverfiler!
:::

## Skapa backups automatiskt

Längst ner på sidan hittar du fler inställningar, inklusive inställningar för automatiska backups. Alternativet **Skapa backups automatiskt** måste vara aktiverat för att funktionen ska fungera. Dessutom måste intervallet ställas in.

![](https://screensaver01.zap-hosting.com/index.php/s/gB9n6JspdNW73bj/preview)

Beroende på spelet är det ofta också smart att säkerhetskopiera databasen, eftersom viktig data som poäng, behörigheter och mycket mer ofta lagras där.

>⚠️ Tillräckligt med lagringsutrymme är avgörande för att kunna skapa regelbundna backups. Se till att du alltid har tillräckligt med ledigt utrymme. 

## Ladda ner/radera backups

Om du vill ladda ner eller radera backups måste du ansluta till lagringsservern via FTP. Här hittar du instruktioner för att använda FTP: [Access via FTP](gameserver-ftpaccess.md)
![](https://screensaver01.zap-hosting.com/index.php/s/tfJoBpaELEPKMij/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/q3E8XTX8gRQoasY/preview)

Där kan du se användaruppgifterna för din lagringsserver och hur mycket lagringsutrymme som används just nu. När du är ansluten via FTP kan du ladda ner eller radera dina backups därifrån.

<InlineVoucher />