---
id: empyrion-becomeadmin
title: "Empyrion: Bli Admin"
description: "Lär dig hur du ger adminrättigheter för full kontroll över din server och hanterar spelets funktioner effektivt → Läs mer nu"
sidebar_label: Bli admin
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela adminrättigheter ger dig enkel och komplett administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att ge adminrättigheter på din server beskrivs nedan.  
<InlineVoucher />

## Hitta Steam64ID

Först behöver du hitta ditt Steam64ID.  
Du kan använda följande verktyg: [SteamID Lookup](https://steamid.io/lookup).  
ID:t kommer du sedan att skriva in i konfigurationsfilen.

Här är ett exempel på hur du kan få fram ditt steamid genom att klistra in din profil-länk där:

![](https://screensaver01.zap-hosting.com/index.php/s/3LQXKFg58qXCCHw/preview)

## Konfigurera adminconfig

Filen "**adminconfig.yaml**" som ska redigeras finns i mappen "**Saves**".  
För att öppna den här mappen behöver du följa instruktionerna för [FTP-åtkomst](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/XtfdjdgoxcqXsWx/preview)

Följande värden är förinställda som standard:

![](https://screensaver01.zap-hosting.com/index.php/s/Tpf23riFnGfZAsP/preview)

Det tidigare hittade Steam64ID:t ska nu skrivas in efter "**Id:**".

![](https://screensaver01.zap-hosting.com/index.php/s/RHEr44CGsaLQWyY/preview)

Med "**Permission**" bestämmer du vilken rank användaren ska få.  
Rankerna är följande:

Permission | Rank
-----|-------
3 | gamemaster
6 | moderator
9 | admin


## Avslutning

Grattis, du har nu konfigurerat adminrättigheterna! Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />