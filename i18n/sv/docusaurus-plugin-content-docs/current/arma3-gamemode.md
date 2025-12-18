---
id: arma3-gamemode
title: "Arma 3: Byt spelläge"
description: "Upptäck hur du ställer in och laddar spellägen på din Arma 3-server för en skräddarsydd spelupplevelse → Lär dig mer nu"
sidebar_label: Byt spelläge
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Ställ in spelläget

För att byta spelläge på din Arma 3-server måste du ladda upp rätt missionsfil för spelläget till din server.

Vi erbjuder just nu följande missionsfiler utan att du behöver ladda upp dem själv:

- Arma 3 Wasteland

Dessa finns redan i din **mpmissions**-mapp.

<InlineVoucher />

## Ladda upp missionsfilen

För att ladda upp missionsfilen måste du först ansluta till din server via FTP: [Åtkomst via FTP](gameserver-ftpaccess.md).  
Där laddar du upp rätt missionsfil till din **mpmissions**-mapp som du hittar under **/gxxxxxx/arma3/**.  
I det här exemplet laddar vi upp spelläget **King of the Hill** till vår server.

![](https://screensaver01.zap-hosting.com/index.php/s/rDS7DsEfQskZ9Y3/preview)


## Ladda missionsfilen på servern

För att ladda missionsfilen från servern går du till din Arma 3-serverpanel och klickar på fliken **Configs** i menyn till vänster:

![](https://screensaver01.zap-hosting.com/index.php/s/dxDWHiFJy5e4qYq/preview)

Där redigerar du filen **server.cfg** och skriver in namnet på din missionsfil som på bilden:

![](https://screensaver01.zap-hosting.com/index.php/s/7JQED8wC9WGBdYB/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/7jtRK3YRD7wWiij/preview)

Klicka sedan på **Spara** och starta din server. Den nya missionsfilen kommer att laddas.

<InlineVoucher />