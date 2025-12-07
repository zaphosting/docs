---
id: fivem-useprofiler
title: "FiveM: Använd Profiler för att hitta serverproblem"
description: "Lär dig analysera serverprestanda och hitta resursproblem med FiveM Profiler för smidigare gameplay → Läs mer nu"
sidebar_label: Använd Profiler
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduktion

Profiler är ett riktigt användbart och enkelt spelverktyg för att mäta serverns prestanda. Det kan användas för att kolla koder och trådar som kan orsaka prestandaproblem. Det kan till exempel bero på dåligt utvecklade resurser eller liknande. Profiler är direkt integrerat i servermjukvaran. 

<InlineVoucher />

## Så här använder du Profiler
Att använda FiveM Profiler är ganska enkelt. Kör kommandona `profiler record 100` och `profiler view` i live-konsolen. En profil med 100 frames skapas, som du sedan kan öppna via länken som visas i konsolen. ![img](https://screensaver01.zap-hosting.com/index.php/s/ZGFEaFFmgyKn8PK/preview)




## Hitta problem
Profiler visar info om de olika aktiviteterna (ticks) som du behöver kolla närmare på. Välj ett tick-område och zooma in på det. Baserat på ticken kan du nu se vilka processer som kördes och hur lång tid de tog. 

![](https://screensaver01.zap-hosting.com/index.php/s/6BJozz7abRSHSj5/preview)

På så sätt kan du till exempel också se vilka resurser som tar mycket tid. Resurser som tar mer än 6 ms totalt kan orsaka problem.
:::



## Slutsats

Grattis, du har nu skapat en FiveM-profil som hjälper dig att hitta potentiella problem. Har du fler frågor eller behöver hjälp är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />