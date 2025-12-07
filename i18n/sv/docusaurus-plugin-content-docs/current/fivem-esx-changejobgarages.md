---
id: fivem-esx-changejobgarages
title: "FiveM: Job Garages - Lägga till bilar"
description: "Upptäck hur du anpassar och utökar jobbgaraer med fler bilar för en bättre spelupplevelse → Läs mer nu"
sidebar_label: Lägg till Jobb-Garage Bilar
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Vill du ändra eller utöka vilka bilar som finns i dina jobbgaraer? Här nedan förklarar vi hur du gör och vilka steg du behöver följa!

<InlineVoucher />



## Konfiguration

Extra bilar läggs till i jobbgaraerna via FTP. Koppla upp dig mot din spelserver via FTP för att göra detta. Om du inte är bekant med FTP än, kolla gärna in vår guide för [FTP-access](gameserver-ftpaccess.md).

När du är uppkopplad via FTP, navigera till ESX-resursmappen och öppna mappen esx_addons. Mappstrukturen ska se ut ungefär så här: `/gXXXXXX/fivem/ESXLegacy_XXXXXX.base/resources/[esx_addons]`

Välj sedan till exempel Ambulans- eller Polis-jobbet och öppna konfigurationsfilen `config.lua` i resursmappen.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQYbzYs2xAkb5fp/preview)



I konfigurationsfilen behöver du justera sektionen `Config.AuthorizedVehicles`. Du kan söka upp den med sökfunktionen och sedan ändra eller lägga till bilar efter eget tycke:

![img](https://screensaver01.zap-hosting.com/index.php/s/eyK7q78aewrpJtx/preview)

:::warning 
Se till att det finns ett kommatecken på slutet av raden innan när du lägger till nya fordon, annars kan problem uppstå.
:::



## Avslutning

Om du följt alla steg korrekt har du nu lyckats anpassa eller utöka ditt jobb-garage. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />