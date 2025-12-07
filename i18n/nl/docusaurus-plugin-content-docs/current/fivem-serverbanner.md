---
id: fivem-serverbanner
title: "FiveM: Stel je eigen serverbanner in"
description: "Ontdek hoe je de uitstraling van je FiveM-server verbetert met een custom banner voor een unieke, professionele look → Leer het nu"
sidebar_label: Serverbanner instellen
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een custom serverbanner is een simpele maar effectieve manier om jouw FiveM-server eruit te laten springen. Het geeft je server een unieke look in de serverlijst en zorgt voor een professionele touch wanneer spelers verbinden.

Of je nu een eigen screenshot gebruikt of een ontworpen graphic, het instellen van een banner helpt je community om je server direct te herkennen en maakt een sterke eerste indruk.

<InlineVoucher />

## Configuratie

Om een custom serverbanner in te stellen voor je FiveM-server, heb je eerst een geschikte afbeelding nodig. We raden aan om een screenshot te maken in-game die jouw server goed representeert. Je maakt snel een ingame screenshot door tijdens het spelen op de **F8**-toets te drukken en het `screenshot`-commando te gebruiken.

Heb je je screenshot, upload deze dan naar een image hosting service die een **directe link** naar het afbeeldingsbestand levert (bijvoorbeeld eindigend op `.jpg` of `.png`). Zorg dat de afbeelding via een directe URL toegankelijk is.

![img](https://screensaver01.zap-hosting.com/index.php/s/4sCEeKkyGEm3EXd/preview)

Om de banner toe te voegen, open je je txAdmin dashboard en ga je naar de configuratie-instellingen van je server. Zoek het veld **Server banner URL** en plak daar je directe afbeeldingslink. Sla de wijzigingen op. Je custom banner verschijnt nu in je serverdetails wanneer spelers je server in de serverlijst zien.

```
# Stel een optionele server info en verbindingsbanner afbeelding URL in.
# Afmeting maakt niet uit, elke banner-grootte afbeelding werkt.
sets banner_detail "https://url.to/image.png"
sets banner_connecting "https://url.to/image.png"
```

Vervang de voorbeeld-URL’s door de directe link naar jouw geüploade afbeelding. Sla het bestand op in de CFG Editor en herstart je server om de wijzigingen door te voeren.

## Conclusie

Je custom banner verschijnt nu in de serverlijst en tijdens het verbindingsscherm, waardoor je server er unieker en professioneler uitziet. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />