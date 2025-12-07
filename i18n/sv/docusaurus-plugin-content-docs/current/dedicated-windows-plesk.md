---
id: dedicated-windows-plesk
title: "Dedikerad Server: Installation av Plesk"
description: "Upptäck hur du enkelt hanterar webbplatser och servrar med Plesk för både nybörjare och proffs → Lär dig mer nu"
sidebar_label: Installera Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Plesk är en komplett plattform för webbhotell och serverhantering som låter dig hantera webbplatser, servrar, e-postkonton och mycket mer via ett användarvänligt gränssnitt. Det är en flexibel lösning som passar både nybörjare och erfarna webbutvecklare och systemadministratörer.

## Anslut till servern

För att installera Plesk på servern behöver du först ansluta till den. Hur du gör detta förklaras i detalj i våra separata instruktioner: [Första åtkomst (RDP)](vserver-windows-userdp.md)

## Plesk Installer

Nästa steg är att ladda ner Plesk Installer, som krävs för att installera Plesk. Du kan ladda ner den genom att klicka på [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

Installationsfilen sparas nu i en mapp, i vårt exempel använder vi en "Plesk"-mapp som vi skapat på skrivbordet. Sökvägen till den här filen är viktig för nästa steg.

![](https://screensaver01.zap-hosting.com/index.php/s/qpQK28F3oPezWR8/preview)

### Öppna Kommandotolken

Nu måste CMD-konsolen öppnas för installationen. Det gör du enklast med tangentkombinationen [Windows] + [R] eller genom att söka på "command" i Windows startmeny.

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCiRtYrFK43Xbn/preview)

### Installera Plesk

I CMD-konsolen navigerar du till mappen där Plesk-installationsfilen ligger. I vårt exempel är det "Plesk"-mappen på skrivbordet.

Du byter mapp i CMD med kommandot "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/sCCpiogDGsrGN9F/preview)

När du är i rätt mapp kör du installationskommandot. Det startar `plesk-installer.exe` och installerar automatiskt den senaste versionen av Plesk.

![](https://screensaver01.zap-hosting.com/index.php/s/TKrkZagQr4CC7Hr/preview)

Kommando: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
Installationen kan ta mellan 30 och 60 minuter. När den är klar är Plesk installerat och klart att använda.
:::

## Avslutning

Grattis, du har nu installerat Plesk! Har du fler frågor eller behöver hjälp är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂