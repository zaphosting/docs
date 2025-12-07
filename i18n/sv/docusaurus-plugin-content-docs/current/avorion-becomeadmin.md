---
id: avorion-becomeadmin
title: "Avorion: Bli admin på din egen server"
description: "Upptäck hur du ger administratörsrättigheter för full kontroll över din server och hanterar spelets funktioner effektivt → Lär dig mer nu"
sidebar_label: Bli admin
services:
  - gameserver-avorion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och heltäckande administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att ge administratörsrättigheter för din server beskrivs nedan.  
<InlineVoucher />

## Konfiguration

Att lägga till en admin görs via inställningssidan i webbgränssnittet. Klicka i **Gameserver Administration** på **Settings** och scrolla ner till **Server Settings**.

![](https://screensaver01.zap-hosting.com/index.php/s/gzei7sWedJMrqzc/preview)



Där hittar du ett fält som heter **Admin SteamIDs**. Där måste du ange din SteamID64. Du hittar din SteamID64 genom att först öppna din Steam-profil och sedan högerklicka var som helst där. Klicka sedan på **Copy Steam URL**. 



![](https://screensaver01.zap-hosting.com/index.php/s/q7E3qSd9GoLCswM/preview)



Öppna sedan någon av följande sidor och klistra in URL:en till din profil där: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Där får du allmän information samt Steam ID för ditt konto. Här behöver vi bara SteamID64. SteamID64 ska fyllas i fältet enligt nedan. Det bör se ut så här:



![](https://screensaver01.zap-hosting.com/index.php/s/qakTq9iLW72jkyC/preview)



Klicka på **Save**. När du har startat om servern kan du köra admin-kommandon i spelet. Tryck Enter för att öppna chatten och kör sedan kommandona med ett /-tecken. 



## Admin-kommandon

Här hittar du en översikt över vanliga kommandon som du kan köra som admin. 



**Allmänna kommandon**

| Kommando                 | Beskrivning                                                  |
| :---------------------- | :----------------------------------------------------------- |
| /help                   | visa hjälpmelding                                            |
| /w [spelarens namn]     | skicka ett privat meddelande till en spelare                |
| /save                   | sparar det aktuella läget                                    |
| /stop                   | stoppar servern                                              |
| /seed                   | serverns seed                                                |
| /version                | visar aktuell serverversion                                  |
| /suicide                | förstör ditt nuvarande skepp                                 |
| /player                 | visar antal spelare                                          |
| /status                 | visar information om serverns aktuella status               |
| /admin -a [spelarens namn] | lägg till en spelare som admin                              |
| /admin -r [spelarens namn] | ta bort en spelare som admin                                |
| /kick [spelarens namn]  | sparkar ut en spelare från servern                           |
| /ban [spelarens namn]   | lägger till spelaren på svartlistan                          |
| /unban [spelarens namn] | tar bort spelaren från svartlistan                           |
| /banip [spelarens ip]   | lägger till spelaren på svartlistan                          |
| /unbanip [spelarens ip] | tar bort spelaren från svartlistan                           |
| /blacklist              | visar svartlistans alternativ                                |
| /whitelist              | visar vitlistans alternativ                                  |



**Fusk-kommandon (i spelet):**

| Kommando                                | Beskrivning                                           |
| :------------------------------------- | :---------------------------------------------------- |
| /give [spelarens namn] [antal] credits | ger spelaren önskat antal credits                     |
| /give [spelarens namn] [antal] [malmnamn] | ger spelaren önskat antal av vald malm                |



**Server-kommandon (konsol):**

| Kommando                       | Beskrivning                                                  |
| :---------------------------- | :----------------------------------------------------------- |
| /max-logs [värde]             | antal loggfiler som sparas                                  |
| /difficulty [värde]           | serverns svårighetsgrad, tillåtna värden: -3, -2, -1, 0, 1, 2, 3 Standard: 0 |
| /collision-damage [värde]     | skada på objekt vid kollision, från 0 till 1. 0: ingen skada, 1: full skada. standard: 1 |
| /exit-on-last-admin-logout    | stäng ner när sista admin loggar ut                         |
| /public [värde]               | ange om servern ska tillåta andra spelare att ansluta      |
| /infinite-resources [värde]   | aktivera oändliga resurser för alla spelare                 |
| /listed [värde]               | ange om servern ska visas i offentliga serverlistor        |
| /max-players [värde]          | max antal online-spelare Standard: 10                       |
| /save-interval [värde]        | tidsintervall mellan sparningar Standard: 300               |
| /same-start-sector arg        | ange om alla spelare ska starta i samma sektor              |
| /server-name [värde]          | servernamn, visas vid förfrågan                              |
| /use-steam-networking [värde] | använd Steam-nätverk och autentisering för användare        |
| /galaxy-name [värde]          | galaxnamn, läggs till datapath, slutgiltig sökväg blir [datapath]/[galaxyname] |
| /datapath [värde]             | mapp där galaxerna sparas, läggs till galaxnamnet           |
| /admin [värde]                | steam id(s) för serverns administratörer                    |


## Slutsats

Grattis, du har nu konfigurerat administratörsrättigheterna! Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />