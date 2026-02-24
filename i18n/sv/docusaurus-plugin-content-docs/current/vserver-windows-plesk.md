---
id: vserver-windows-plesk
title: "Installera Plesk på en Windows Server - Hantera Webbplatser med ett Kraftfullt Kontrollpanel"
description: "Upptäck hur du enkelt hanterar webbplatser och servrar med Plesks mångsidiga plattform för både nybörjare och proffs → Läs mer nu"
sidebar_label: Installera Plesk
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Plesk är en komplett plattform för webbhosting och serverhantering som låter dig hantera webbplatser, servrar, e-postkonton och mycket mer via ett användarvänligt gränssnitt. Det är en flexibel lösning som passar både nybörjare och erfarna webbutvecklare och systemadministratörer.  
<InlineVoucher />


## Skapa en anslutning till servern

För att installera Plesk på servern behöver du först ansluta till den. Hur det går till förklaras i detalj i vår separata guide: [Initial Access (RDP)](vserver-windows-userdp.md)

## Plesk Installer

Nästa steg är att ladda ner Plesk Installer, som krävs för att installera Plesk. Du kan ladda ner den genom att klicka på [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

Installationsfilen sparas nu i en mapp, i vårt exempel använder vi en "Plesk"-mapp som vi skapat på skrivbordet. Sökvägen till den här filen är viktig för nästa steg.

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### Öppna Kommandotolken

Nu måste CMD-konsolen öppnas för installationen. Det gör du enklast med kortkommandot [Windows] + [R] eller genom att söka på "command" i Windows-sökfältet.

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### Installera Plesk

I CMD-konsolen navigerar du till mappen där Plesk-installationsfilen ligger. I vårt exempel är det "Plesk"-mappen på skrivbordet.

Du byter mapp i CMD med kommandot "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

När du är i rätt mapp kör du installationskommandot. Det startar Plesk-installer.exe och installerar automatiskt den senaste versionen av Plesk.

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

Kommando: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
Installationen kan ta mellan 30 och 60 minuter. När den är klar är Plesk installerat och redo att användas.
:::


## Avslutning

Grattis, du har nu installerat och konfigurerat Plesk på din VPS/Dedikerade Server! Har du fler frågor eller stöter på problem, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!

<InlineVoucher />