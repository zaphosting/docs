---
id: starrupture-mods
title: "StarRupture: Installera Mods"
description: "Lär dig hur du installerar mods på din StarRupture-server och klient för att förbättra spelupplevelsen → Läs mer nu"
sidebar_label: Installera Mods
services:
- gameserver-starrupture
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Mods låter dig utöka spelupplevelsen i StarRupture genom att lägga till nya mekaniker, innehåll, förbättringar för användarvänlighet eller gameplay-justeringar skapade av communityn. Många StarRupture-mods distribueras via communityplattformar som NexusMods och kan installeras både på servern och lokalt på klienten.

Att installera mods på din server säkerställer att servermiljön laddar det modifierade innehållet, medan installation lokalt på klienten gör att ditt spel kan använda samma filer när du ansluter till moddade servrar.

<InlineVoucher />

## Installera mods på servern

För att installera mods på din StarRupture-server, ladda först ner önskad modfil från en pålitlig källa som **NexusMods**.

![img](https://screensaver01.zap-hosting.com/index.php/s/rM4WR4gW2KLyzxz/preview)

Innan du laddar upp modden, se till att din server är stoppad för att undvika filkonflikter under installationen. Anslut sedan till din server via [FTP](gameserver-ftpaccess.md) med en FTP-klient. När du är ansluten, navigera till följande mapp på din server:

```
/home/container/StarRupture/Content/Paks
```
Ladda upp den nedladdade `.zip`-modfilen till den här mappen. När uppladdningen är klar, packa upp innehållet i arkivet direkt i `Paks`-mappen. När filerna är uppackade, gå tillbaka till din serverpanel och starta servern igen.

Under uppstarten kommer servern automatiskt att upptäcka och ladda de installerade modsen.

## Installera mods på klienten

Vissa StarRupture-mods behöver även installeras lokalt på klienten. De flesta lokalt installerade mods är aktiva när du ansluter till servrar. Ladda först ner önskad mod från en pålitlig källa som NexusMods.

Öppna sedan ditt **Steam-bibliotek**, högerklicka på **StarRupture**, hovra över **Hantera** och välj **Bläddra i lokala filer**. Inuti spelinstallationsmappen, hitta följande sökväg:

```
StarRupture/StarRupture/Content/Paks
```

Flytta den nedladdade `.zip`-modfilen till den här mappen. Efter att du kopierat filen, packa upp arkivet direkt i `Paks`-mappen. När det är klart kommer modden att laddas automatiskt nästa gång du startar spelet.

## Avslutning

Grattis! Du har nu installerat mods för StarRupture både på servern och klienten. Med mods installerade kan du utöka spelupplevelsen med nya funktioner, mekaniker och förbättringar skapade av communityn.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />