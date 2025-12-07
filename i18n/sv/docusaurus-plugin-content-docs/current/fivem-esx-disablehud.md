---
id: fivem-esx-disablehud
title: "FiveM: Inaktivera/aktivera HUD"
description: "Lär dig hur du uppdaterar din ESX-serverkonfiguration för bättre HUD-hantering och serverprestanda → Läs mer nu"
sidebar_label: Inaktivera HUD
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Arkiverad guide
Det här dokumentet har arkiverats. Dokument arkiveras när de inte längre är relevanta, felaktiga eller uppdaterade. Det har arkiverats av följande anledning:

**Orsak**: Metoden gäller en föråldrad ESX-version. Den här metoden fungerar inte för nuvarande ESX-version eftersom strukturen har ändrats. 
::::



<InlineVoucher />

## 📑 Hitta och redigera Config

När vi gjort detta öppnar vi Config-sidan och söker efter es_extended.
Tryck bara på CTRL + F och sök efter es_extended.
Då hittar du det snabbt.
Vi ska jobba med dessa.

![](https://screensaver01.zap-hosting.com/index.php/s/FfjdwPMGYgz2k3k/preview)

Nu kollar vi på: Config.EnableHUD.

![](https://screensaver01.zap-hosting.com/index.php/s/F6w582EoXgbPjeC/preview)

Vi sätter den till false och sparar filen.

Sen går vi till Server.cfg.
Den hittar du också på Config-sidan.
Där söker vi igen med STRG + F efter es_
Vi letar upp es_ui och tar bort hela den raden.
Nu sparar vi igen.

När du gjort det är det bara att starta om servern, klart!

<InlineVoucher />