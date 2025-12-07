---
id: arma3-missionfile
title: "Arma 3: Ladda upp din egen missionsfil"
description: "Upptäck hur du laddar upp och kör egna missionsfiler på din Arma 3-server för en personlig spelupplevelse → Läs mer nu"
sidebar_label: Ladda upp din egen missionsfil
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Ladda upp missionsfilen

För att ladda upp din egen missionsfil måste du först ansluta till din server via FTP: [Åtkomst via FTP](gameserver-ftpaccess.md).  
Där ska du ladda upp missionsfilen i din **mpmissions**-mapp som du hittar under **/gxxxxxx/arma3/**.  
I det här exemplet laddar vi upp missionsfilen **King_of_the_hill.Altis** till vår server.

![](https://screensaver01.zap-hosting.com/index.php/s/jkfK9X48qj2e7Pn/preview)

<InlineVoucher />

## Ladda missionsfilen på servern

För att ladda missionsfilen från servern, gå till din Arma 3-serverpanel och klicka på fliken **Configs** i menyn till vänster:

![](https://screensaver01.zap-hosting.com/index.php/s/PD98ATq8xHdjy8Q/preview)

Där redigerar du filen **server.cfg** och skriver in namnet på din missionsfil som visas på bilden:

![](https://screensaver01.zap-hosting.com/index.php/s/aG7QESxyTNpATsG/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/6TZ7mc578pcHpbF/preview)

Efter det klickar du på **Spara** och kan starta din server. Den nya missionsfilen kommer att laddas.

<InlineVoucher />