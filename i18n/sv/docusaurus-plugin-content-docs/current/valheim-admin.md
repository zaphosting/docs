---
id: valheim-admin
title: "Valheim: Server Admin Kommandon & Fusk"
description: "Upptäck hur du ger adminrättigheter för full kontroll över din server och hanterar spelare effektivt i Valheim → Läs mer nu"
sidebar_label: Admin Kommandon & Fusk
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och heltäckande administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att ge adminrättigheter på din server beskrivs nedan.  
<InlineVoucher />

### Konfiguration
För att lägga till dig själv som admin behöver du först få fram ditt SteamID64, du kan använda ett verktyg som [Steam ID Finder](https://steamidfinder.com/)

Här klistrar du in din Steam-URL:

![](https://screensaver01.zap-hosting.com/index.php/s/e8H8Y4P9ojW9sD2/preview)

Tryck sedan på `Find Steam ID`

Nu ska vi kunna se vår Steam-profil, här kopierar vi vårt "Steam64ID (Dec)".

Öppna sedan serverns webbgränssnitt och gå till inställningssidan, där hittar du ett alternativ som heter "Admins" där du kan lägga till ditt Steam ID:

![](https://screensaver01.zap-hosting.com/index.php/s/aJkGRMcmWrnZyiM/preview)

När du har lagt till ditt Steam ID sparar du inställningarna och startar om servern.

## Öppna Konsolen

Konsolen i Valheim öppnas genom att trycka på "F5" medan du är i spelet, där kan du skriva alla adminkommandon.


### Admin Kommandon

|  Kommando  |           Argument           |                  Effekt               |
| :--------: | :--------------------------: |  :---------------------------------:  |
|   kick     |        Namn/PlayerID/IP      |     Kickar den angivna spelaren       |
|   ban      |        Namn/PlayerID/IP      |     Bannlyser den angivna spelaren    |
|   unban    |        PlayerID/IP           |     Tar bort ban på den angivna spelaren |
|   banned   |           Inga               |    Visar alla bannlysta spelare       |

<InlineVoucher />