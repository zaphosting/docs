---
id: gmod-ttt
title: "Garry's Mod: Konfiguration"
description: "Upptäck hur du optimerar dina TTT-serverinställningar för bättre gameplay och rundhantering → Lär dig mer nu"
sidebar_label: Garry's Mod TTT Konfiguration
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Konfigurationen av din TTT-server

**Viktigt: Stäng av din server innan du gör några ändringar.**

Grundkonfigurationen gör du enkelt i vårt webbgränssnitt, till exempel servernamn, Rcon- och serverlösenord.

![](https://screensaver01.zap-hosting.com/index.php/s/6TACDQ4QGXkRfrX/preview)

När du har konfigurerat servern som du vill kan vi gå vidare med att ställa in de specifika inställningarna för TTT-spelläget. Du kan använda vårt webbgränssnitt eller ändra filen via FTP.

Du hittar konfigurationseditorn i vårt webbgränssnitt under fliken "Configs" där du öppnar server.cfg-filen.
I vårt webbgränssnitt hittar du denna funktion under "Configs" där du öppnar server.cfg

![](https://screensaver01.zap-hosting.com/index.php/s/MjC5XoBCzc2tsMo/preview)

Där hittar du värdena för att justera gameplay på din TTT-server, de viktigaste variablerna förklarade snabbt:

<InlineVoucher />

## Ronder och kartbyte

ttt_round_limit  
:::info  
Max antal ronder innan kartan byts. (Standard: 6)  
:::

ttt_time_limit_minutes  
:::info  
Max antal minuter innan kartan byts eller en omröstning startas. (Standard: 75)  
:::

ttt_postround_dm  
:::info  
Aktiverar skada efter att en runda har slutat. Dödsfall räknas inte för poäng, så det är fritt fram för alla. (Standard: 1)  
:::

ttt_ragdoll_pinning_innocents  
:::info  
Tillåter icke-förrädare att spärra lik också. (Standard: 1)  
:::

## Gameplay  
ttt_traitor_pct  
:::info  
Andel av totala spelare som blir förrädare. Antalet spelare multipliceras med detta värde och avrundas nedåt. Om resultatet är mindre än 1 eller mer än spelarkvoten, begränsas det till dessa värden. (Standard: 0.25)  
:::

ttt_traitor_max  
:::info  
Max antal förrädare. (Standard: 32)  
:::

ttt_detective_pct  
:::info  
Andel av totala spelare som blir detektiver. (Standard: 0.13)  
:::

ttt_detective_max  
:::info  
Max antal detektiver. Kan användas för att begränsa eller stänga av detektiver. (Standard: 32)  
:::

ttt_detective_min_players  
:::info  
Minsta antal spelare innan detektiver börjar spela. (Standard: 5)  
:::

ttt_detective_karma_min  
:::info  
Om en spelares Karma sjunker under denna nivå minskar chansen att bli vald som detektiv. (Standard: 600)  
:::

ttt_minimum_players  
:::info  
Antal spelare som måste vara online innan rundan startar. Detta kontrolleras innan förberedelsefasen och innan rundan börjar. (Standard: 2)  
:::

## DNA  
ttt_killer_dna_range  
:::info  
Max räckvidd inom vilken ett DNA-prov från mördaren placeras på offrets lik. (Standard: 300)  
:::

## Karma

ttt_karma  
:::info  
Aktiverar karmasystemet. Spelare startar med en viss karma och förlorar den när de skadar/dödar "lagkamrater" (dvs. oskyldiga om de är oskyldiga, förrädare om de är förrädare). Hur mycket karma som förloras beror på den skadades karma. (Standard: 1)  
:::

ttt_karma_strict  
:::info  
Om aktiverad ökar skadestraffet snabbare när karmapunkterna sjunker. När strikt är av är skadestraffet väldigt lågt så länge spelare ligger över 800 karma. (Standard: 1)  
:::

ttt_karma_starting  
:::info  
Startkarma för spelare. Vill du att spelare ska kunna "tjäna" en skadebonus kan du sätta detta till runt 850. Att spela schyssta rundor låter dem öka till 1000 och göra några procent mer skada än en ny spelare. (Standard: 1000)  
:::

ttt_karma_max  
:::info  
Max karma en spelare kan ha. Att höja detta över 1000 betyder inte att spelare med 1100 karma får skadebonus, utan ger bara en "buffert" innan de får skadestraff. (Standard: 1000)  
:::

ttt_karma_ratio  
:::info  
Andelen av skadan som används för att räkna ut hur mycket av offrets karma som dras från angriparen. (Standard: 0.001)  
:::

ttt_karma_kill_penalty  
:::info  
Alla karmastraff baseras på skada. Dödsstraffet är bara en extra mängd "skada" när du dödar någon. Om detta är 100 och du headshotar någon med ett gevär, straffas du som om du gjort 200 skada. (Standard: 15)  
:::

ttt_karma_round_increment  
:::info  
Basbeloppet som allas karma "läks" med i slutet av varje runda. (Standard: 5)  
:::

ttt_karma_clean_bonus  
:::info  
Om en spelare inte skadat eller dödat en lagkamrat denna runda, "läks" hen extra 30 karma. (Standard: 30)  
:::

ttt_karma_traitordmg_ratio  
:::info  
Som ttt_karma_ratio, men för karma-belöning vid skada på förrädare. Som standard belönas skada på förrädare med ungefär 1/4 av straffet du skulle få om det var en full-karma oskyldig. (Standard: 30)  
:::

ttt_karma_traitorkill_bonus  
:::info  
Bonuskarma för att döda en förrädare. (Standard: 40)  
:::

ttt_karma_low_autokick  
:::info  
Kickar automatiskt spelare med låg karma i slutet av en runda. (Standard: 1)  
:::

ttt_karma_low_amount  
:::info  
Karmanivån där spelare kickas i slutet av rundan. (Standard: 300)  
:::

ttt_karma_low_ban  
:::info  
Om low_autokick är aktiverat, bannas spelare också om detta är på. Ingen effekt om autokick är av. (Standard: 1)  
:::

ttt_karma_low_ban_minutes  
:::info  
Antal minuter spelare bannas. (Standard: 60)  
:::

ttt_karma_persist  
:::info  
Sparar spelarens karma i persistent lagring i slutet av rundan eller vid disconnect. Vid återanslutning laddas karmavärdet. Karma sparas alltså även vid kartbyte. (Standard: 1)  
:::

ttt_karma_clean_half  
:::info  
När en spelares karma är över startnivån (dvs. karma max är konfigurerat högre än startvärdet) minskas alla karmaförbättringar baserat på hur mycket karma spelaren har över startnivån. Ju högre karma, desto långsammare ökning. (Standard: 0.25)  
:::

När du ändrat alla variabler som du vill är nästa steg att spara dina ändringar.

![](https://screensaver01.zap-hosting.com/index.php/s/LyEsQQ8Af8AwWj9/preview)

Efter det kan du starta din server!

<InlineVoucher />