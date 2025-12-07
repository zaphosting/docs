---
id: scum-becomeadmin
title: "SCUM: Bli admin"
description: "Upptäck hur du hanterar din spelserver med full adminkontroll och använder kraftfulla kommandon för att förbättra spelupplevelsen → Lär dig mer nu"
sidebar_label: Bli admin
services:
  - gameserver-scum
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och heltäckande administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att tilldela adminrättigheter för din server beskrivs nedan.

<InlineVoucher />



## Konfiguration

Adminrättigheterna konfigureras via din **spelservers inställningssida**. Öppna inställningarna och navigera till alternativet **Admin List**. Ange din **SteamID64** där för att ge dig själv adminstatus. Vill du lägga till fler spelare som admins, separera varje SteamID med ett **kommatecken**.

![img](https://screensaver01.zap-hosting.com/index.php/s/AiMDoy5mdEHjnj3/download)



## Adminkommandon

Nedan hittar du en lista med vanliga adminkommandon som du kan använda som admin på din server.

| Kommando          | Beskrivning                                                | Exempel                      |
| ----------------- | ---------------------------------------------------------- | ---------------------------- |
| #LIST             | Visar en komplett lista över SCUM:s adminkommandon.       | #list                       |
| #LISTPLAYERS      | Visar en lista över alla spelare som är online på servern. | #listplayers                |
| #KICK             | Kickar en specifik spelare från servern.                   | #kick playername            |
| #BAN              | Bannlyser permanent en specifik spelare från servern.      | #ban playername             |
| #LOCATION         | Visar exakt position för en angiven spelare.               | #location playername        |
| #LISTASSETS       | Listar alla in-game tillgångar, kan filtreras med nyckelord.| #listassets wood            |
| #SPAWNITEM        | Spawna ett specifikt föremål framför spelaren.             | #spawnitem cal_9mm          |
| #SPAWNCHARACTER   | Spawna en specifik NPC, djur eller docka framför spelaren.  | #spawncharacter bp_cow2     |
| #TELEPORT         | Teleporterar dig till angivna koordinater.                  | #teleport 143,1222,1333     |
| #TELEPORTTOPLAYER | Teleporterar dig till en specifik spelare.                  | #teleport playername        |
| #SETFAMEPOINTS    | Sätter fame-poäng för en specifik spelare.                  | #setfamepoints 400 playername |





## Avslutning

Grattis! Om du följt alla steg har du nu framgångsrikt konfigurerat adminrättigheterna för din server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />