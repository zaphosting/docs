---
id: vrising-becomeadmin
title: "V Rising: Bli admin"
description: "Upptäck hur du enkelt hanterar och tilldelar fulla administratörsrättigheter för din spelserver → Lär dig mer nu"
sidebar_label: Bli admin
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och komplett administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att tilldela adminrättigheter till din server beskrivs nedan.  
<InlineVoucher />

### Lägg till rättigheter

Administrationen av adminrättigheter sköts via konfigurationsfilen **adminlist.txt**. Du hittar den i webbgränssnittet under Configs. För att lägga till en admin behöver du spelarens SteamID64. Du får fram det genom att öppna din Steam-profil och högerklicka var som helst på sidan. Där kan du kopiera sidans URL. Den URL:en klistrar du sedan in på någon av följande sajter: https://steamid.io/ https://steamrep.com/ https://steamidfinder.com/ 

![](https://screensaver01.zap-hosting.com/index.php/s/QT5HRX4t966kRjQ/preview)

Klistra in din Steam-profil-URL i fältet och du får fram SteamID64. Lägg till SteamID64 i konfigurationsfilen **adminlist.txt**. Gå till webbgränssnittet för din spelserver under Configs och öppna adminlist.txt.

![](https://screensaver01.zap-hosting.com/index.php/s/Y35BDx5xJ5zLGoS/preview)

:::info
Om du vill ge adminrättigheter till flera spelare måste varje SteamID stå på en egen rad.
:::

### Aktivera rättigheter

Innan du kan använda adminrättigheterna i spelet måste du aktivera konsolen. Koppla upp dig mot din server och gå till inställningarna. Där aktiverar du alternativet **Console Enabled**. Konsolen öppnas som standard med gravis-tangenten (`~`) på tangentbordet. Adminrättigheterna aktiveras sedan i konsolen med kommandot `adminauth`.

![](https://screensaver01.zap-hosting.com/index.php/s/MLS9wbcC56ZomAb/preview)

### Admin-kommandon

Här är en snabb översikt över de vanligaste admin-kommandona du kan köra på din server.

|                          |                                                         |
| ------------------------ | ------------------------------------------------------- |
| adminauth                | Tilldela adminrättigheter                                |
| admindeauth              | Ta bort adminrättigheter                                 |
| banuser [namn/IP/userID] | Banna en specifik spelare via namn, IP eller userID     |
| banned                   | Visar en lista över alla bannade användare              |
| bancharacter             | Bannlyser en specifik karaktär                           |
| give [namn]              | Ger dig ett specifikt föremål i spelet                   |
| giveset                  | Låter dig utforska olika set av rustningar och vapen    |
| kick [namn/IP/userID]    | Kicka en specifik spelare via namn, IP eller userID     |
| unban [namn/IP/userID]   | Ta bort ban på en specifik spelare via namn, IP eller userID |

## Avslutning

Grattis, du har nu konfigurerat adminrättigheterna! Har du fler frågor eller behöver hjälp är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />