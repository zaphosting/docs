---
id: scp-becomeadmin
title: "SCP Secret Laboratory: Bli admin på din egen server"
description: "Upptäck hur du tilldelar administratörsbehörigheter för full kontroll över din server och hanterar roller effektivt i din spelserver → Lär dig mer nu"
sidebar_label: Bli admin
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduktion
Att tilldela administratörsbehörigheter ger dig enkel och komplett administration med full kontroll över din server. Som administratör kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att tilldela administratörsbehörigheter för din server beskrivs nedan.  
<InlineVoucher />

:::info
Sedan de senaste SCP-uppdateringarna fungerar inte längre lösenordsinloggningen. Använd istället guiden nedan för att lägga till dina roller direkt via SteamID. 
:::


## Konfiguration för Remote Admin Config

### Förberedelse

Först behöver du hitta ditt Steam64ID.  
Du kan använda följande verktyg: [SteamID Lookup](https://steamid.io/lookup).  
ID:t kommer du sedan att skriva in i konfigurationsfilen.

Här är ett exempel på hur du kan få fram ditt SteamID genom att skriva in din profil-länk där:

![](https://screensaver01.zap-hosting.com/index.php/s/k4EEWwFQB3xAxA2/preview)

## Lägg till admins

Nu ska konfigurationsfilen öppnas och redigeras.  
Den finns under "**Configs**" i "**Settings**".

![](https://screensaver01.zap-hosting.com/index.php/s/NSFrZG3SX6ZaQgb/preview)

Där öppnas filen "**config_remoteadmin.txt**" där de nödvändiga raderna skrivs om.

![](https://screensaver01.zap-hosting.com/index.php/s/KM6YpQwGC4n8rZW/preview)

Rollerna skapas och tilldelas där.  
I raden där det står "**SomeSteamId64**" framför "**@steam: owner**" byter du ut det mot ditt SteamID64 som du hämtade från "**steamid lookup**".

![](https://screensaver01.zap-hosting.com/index.php/s/HC4Z2s9wPgdJjXT/preview)

Detta kan du göra för varje användare som ska få rättigheter.  
I vårt exempel ger vi rättigheter till tre användare, en får "**owner**" och de andra två får "**admin**".

![](https://screensaver01.zap-hosting.com/index.php/s/9e7YWoMHAxn3z3b/preview)

## Lägg till fler roller för att kringgå lösenordet

Om du har flera roller som ska kunna kringgå remote admin-lösenordet kan du enkelt justera följande rad i filen:  
"**config_remoteadmin.txt**"

Hitta exakt den här sektionen:

![](https://screensaver01.zap-hosting.com/index.php/s/HoGJ7X2ZEWW34bH/preview)

För att lägga till fler roller skriver du bara in dem med kommatecken emellan.  
Till exempel, för att lägga till admin och moderator för att kringgå lösenordet:

![](https://screensaver01.zap-hosting.com/index.php/s/PFLFiG9W3kScZ3d/preview)

:::info
För att öppna remote admin-konsolen i spelet, när du är inloggad på servern, trycker du på "**M**"-knappen. Om servern redan körs måste du starta om den för att ändringarna ska träda i kraft. Om servern är avstängd, starta bara upp den och kolla sedan in Remote Admin Console i spelet.
:::


## Avslutning

Grattis, du har nu konfigurerat administratörsbehörigheterna! Har du fler frågor eller behöver hjälp är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />