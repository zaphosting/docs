---
id: ark-becomeadmin
title: "ARK: Bli admin"
description: "Upptäck hur du hanterar din spelserver med full adminkontroll och förbättrar spelupplevelsen → Lär dig mer nu"
sidebar_label: Bli admin
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och heltäckande administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att tilldela adminrättigheter på din server beskrivs nedan.  
<InlineVoucher />

## Konfiguration

Adminrättigheter låter dig göra ändringar direkt i spelet på din server utan att behöva ändra i Config. För att tilldela adminrättigheter till dig själv eller andra spelare måste du först sätta ett serveradmin-lösenord. Det gör du i inställningarna i vårt webbgränssnitt.

![](https://screensaver01.zap-hosting.com/index.php/s/kLEsKbT6RN6c7Na/preview)

När lösenordet är satt måste servern startas om. Därefter kan du ansluta till din server och logga in som admin via in-game-konsolen med följande kommando och ditt serveradmin-lösenord:

```
enableCheats password
```

Efter det kan du köra alla serverkommandon som admin. Här nedan hittar du en översikt över de vanligaste kommandona.

## Vanliga kommandon

| Kommando                                       | Beskrivning                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| setcheatplayer TRUE/FALSE                      | Aktiverar / inaktiverar fuskmenyn                            |
| admincheat AllowPlayerToJoinNoCheck SteamID    | Lägger till spelare i whitelist                              |
| admincheat DisallowPlayerToJoinNoCheck SteamID | Tar bort spelare från whitelist                              |
| admincheat SetMessageOfTheDay Meddelande       | Sätter dagens meddelande (MOTD). Visas när en spelare ansluter till servern |
| admincheat broadcast Meddelande                 | Skickar ett meddelande till alla spelare på servern         |
| admincheat god                                 | Aktiverar odödlighet för din egen spelare                    |
| admincheat fly                                 | Aktiverar flygning för din egen spelare                      |
| admincheat walk                                | Stänger av flygning för din egen spelare                     |
| admincheat teleport                            | Teleporterar din spelare i den riktning du tittar           |
| admincheat slomo                               | Ändrar både serverns hastighet och alla spelares rörelsehastighet |
| admincheat playersonly                         | Stoppar all rörelse hos varelser och stoppar/förhindrar crafting |
| admincheat ghost                               | Aktiverar noclip för din egen spelare                        |
| admincheat forcetame                           | Gör att dinosaurier tamas direkt och kan ridas utan sadel   |
| admincheat listplayers                         | Visar alla spelare inklusive deras SteamId64                 |
| admincheat banplayer SteamId64                 | Bannlyser spelare med SteamID64                              |
| admincheat unbanplayer SteamId64               | Avbannlyser spelare med SteamID64                            |
| admincheat setplayerpos x y z                  | Teleporterar din spelare till önskad position                |
| admincheat saveworld                           | Sparar världens nuvarande tillstånd                           |
| admincheat addexperience Mängd                  | Lägger till erfarenhet till spelaren                         |
| admincheat settimeofday Tid                     | Ändrar spelets tid på servern. Exempel: "admincheat settimeofday 12:00" |

## Avslutning

Grattis, du har nu konfigurerat adminrättigheterna! Har du fler frågor eller behöver hjälp är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />