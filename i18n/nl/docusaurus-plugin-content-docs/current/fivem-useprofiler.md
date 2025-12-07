---
id: fivem-useprofiler
title: "FiveM: De Profiler gebruiken om serverproblemen te identificeren"
description: "Ontdek hoe je serverprestaties analyseert en resourceproblemen opspoort met de FiveM Profiler voor soepelere gameplay → Leer het nu"
sidebar_label: Profiler gebruiken
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introductie

De Profiler is een superhandige en makkelijk te gebruiken game tool om de prestaties van je server te meten. Hiermee check je codes en threads die mogelijk voor performance issues zorgen. Dit kan bijvoorbeeld komen door slecht ontwikkelde resources of iets dergelijks. De profiler zit direct ingebouwd in de server software.

<InlineVoucher />

## Profiler gebruiken
Het gebruik van de FiveM Profiler is vrij simpel. Voer in de live console de commando’s `profiler record 100` en `profiler view` uit. Er wordt een profiel met 100 frames gemaakt, die je vervolgens via de link in de console kunt openen. ![img](https://screensaver01.zap-hosting.com/index.php/s/ZGFEaFFmgyKn8PK/preview)




## Problemen opsporen
De profiler geeft info over de individuele activiteiten (ticks) die je wat beter moet checken. Selecteer een tick-gebied en zoom erin. Op basis van die tick zie je welke processen zijn uitgevoerd en hoe lang ze duurden.

![](https://screensaver01.zap-hosting.com/index.php/s/6BJozz7abRSHSj5/preview)

Zo zie je bijvoorbeeld ook welke resources veel tijd opslurpen. Resources die in totaal meer dan 6 ms gebruiken, kunnen voor problemen zorgen.
:::



## Conclusie

Gefeliciteerd, je hebt succesvol een FiveM profiel gemaakt waarmee je potentiële issues kunt opsporen. Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂

<InlineVoucher />