---
id: fivem-installels
title: "FiveM: Installera ELS på din server"
description: "Upptäck hur du sätter upp och aktiverar ELS-FiveM med carmods för en grymmare spelupplevelse på din server → Läs mer nu"
sidebar_label: Installera ELS
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Anslut till FTP

För att kunna installera resursen behöver du konfigurera [FTP-åtkomst](gameserver-ftpaccess.md).

## Förberedelser

Först laddar vi ner den senaste [ELS-FiveM-versionen](https://github.com/MrDaGree/ELS-FiveM/releases/latest), som du hittar under "Assets".

När du laddat ner ELS, packa upp filen och öppna mappen "ELS-FiveM".

## Konfiguration

Nu konfigurerar vi ELS-FiveM genom att göra en kopia av `vcf.default.lua` och döpa om den till `vcf.lua`.

:::info
Obs: Den gamla `vcf.default.lua` ska inte tas bort.
:::

Ytterligare inställningar kan justeras i "config.lua", men vi lämnar dem som standard.

## Ladda upp resursen

Du installerar ELS-FiveM genom att dra & släppa filerna till mappen "resources".

När filerna är uppladdade öppnar du server.cfg i server-data-mappen:

![](https://screensaver01.zap-hosting.com/index.php/s/6AfsTS6wyy9REFB/preview)

Bredvid de andra startkommandona för resurser kan du nu lägga till raden för ELS-FiveM.

Starta sedan om servern så är ELS-FiveM tillgängligt i spelet!

## Carmods-konfiguration

För att lägga till nya carmods i ELS-FiveM behöver vi först ELS-konfigurationen, som ofta finns i mappen för den nedladdade carmodden. Den heter vanligtvis `autoname.xml`, i vårt fall `scpdvic.xml`.

Ladda upp filerna till "vcf"-mappen i din ELS-FiveM-mapp via FTP.

När filen är uppladdad öppnar du `vcf.lua` i ELS-FiveM-mappen.

:::info
Se till att föregående rad alltid slutar med ett kommatecken.
:::

Klart! Din Carmod ska nu vara ELS-aktiverad och fungera efter en serveromstart.

<InlineVoucher />