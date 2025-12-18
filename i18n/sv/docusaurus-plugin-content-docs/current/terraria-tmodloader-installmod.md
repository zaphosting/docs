---
id: terraria-tmodloader-installmod
title: "Terraria: Installation av mods (tModLoader)"
description: "Upptäck hur du enkelt installerar och aktiverar tModLoader-mods för Terraria för att förbättra din spelupplevelse → Lär dig mer nu"
sidebar_label: Installera mods (tModLoader)
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Installera mods via tModLoader

tModLoader för Terraria är en viktig modifikation som låter dig ladda mods på din Terraria-server. Installationen görs via drag & drop och med bara en liten justering på din server, så hela processen är superenkel och klar på några minuter.


## Installera tModLoader på din PC

Om du inte redan har installerat tModLoader kan du ladda ner det direkt från Steam helt gratis. Sök bara efter tModLoader i Steam Store eller använd följande länk: [tModLoader i Steam Store](https://store.steampowered.com/app/1281930/tModLoader/)

Efter nedladdning och installation kan du starta tModLoader direkt från Steam.

## Lägga till mods på din PC

När du är i huvudmenyn, öppna din mod-mapp genom att klicka på **Mods** och sedan på **Manage Mods** och därefter **Open Mod Folder**:

![](https://screensaver01.zap-hosting.com/index.php/s/KYXqfC3oaFeti3t/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/sPbWCz9KiY6n9dN/preview)

I den nu öppnade mappen, som som standard ligger under **C:\Users\UserName\Documents\My Games\Terraria\ModLoader\Mods**, kan du nu lägga in dina önskade mods.
I det här exemplet installerar vi Calamity-Mod.

![](https://screensaver01.zap-hosting.com/index.php/s/bbXjf6JpMKC6jzq/preview)

:::info
En mod måste alltid ha filändelsen **.tmod**, annars kan den inte laddas av servern!
:::

Sen kan du stänga mappen igen, klicka på **Back** i spelet och sedan på **Mods**:

![](https://screensaver01.zap-hosting.com/index.php/s/95y5k6AfobCJJed/preview)

Där ser du nu din tillagda mod som du kan aktivera genom att klicka på **Disabled**:

![](https://screensaver01.zap-hosting.com/index.php/s/dCbgnKbeWkr2JeY/preview)

För att göra modden aktiv, klicka på **Reload Mods**, sen kan du stänga spelet och börja installera modden på din server.


## Installera mods på din server

För att kunna installera modden på din server kan du ansluta till servern via FTP, hur du gör det hittar du här: [Åtkomst via FTP](gameserver-ftpaccess.md)

Navigera där till följande mapp: /g******/terraria/mods/ där du också lägger in den tidigare använda **.tmod**-filen:

![](https://screensaver01.zap-hosting.com/index.php/s/7NtFqes4g9JfQLW/preview)

:::info
Om det inte finns någon fil som heter **enabled.json** måste du starta servern först, då ska den dyka upp. Alternativt kan du skapa filen själv.
:::

Öppna sedan filen **enabled.json** via **Högerklick > Redigera** och lägg till namnet på din mod, det ska se ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/FECRXyNGsNNwadd/preview)

Vill du lägga till flera mods gör du så här:

![](https://screensaver01.zap-hosting.com/index.php/s/dtSqazRiH6zBRqD/preview)

:::info
Tänk på att det måste vara ett kommatecken efter varje mod-namn, förutom efter den sista modden!
:::

Nu kan du stänga FTP-anslutningen, starta din server och ansluta till servern med tModLoader som du laddade ner från Steam.

Genom att trycka på **ESC**, klicka på **Settings** och sedan på **Mod Configuration** kan du se dina mods som är laddade på servern:

<InlineVoucher />