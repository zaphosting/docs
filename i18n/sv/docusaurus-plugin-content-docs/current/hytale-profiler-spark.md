---
id: hytale-profiler-spark
title: "Hytale: Spark Profiler – Identifiera prestandaflaskhalsar"
description: "Använd Spark-modden för att diagnostisera prestandaproblem och hitta orsaker till lagg på din Hytale-server → Läs mer nu"
sidebar_label: Spark Profiler
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## Introduktion

Prestandaproblem som låg TPS (ticks per sekund), laggspikar eller hackande kan verkligen förstöra spelupplevelsen på en Hytale-server. Att manuellt hitta orsaken till dessa problem är svårt utan detaljerad diagnostik.

![img](https://screensaver01.zap-hosting.com/index.php/s/E4o3SDSRr3RpBBA/preview)

**Spark** profiler-modden ger serverägare ett kraftfullt verktyg för att analysera serverns prestanda. När den är installerad kan Spark samla in data om CPU-användning, tick-tider, serverhälsomått och mer, och skapa detaljerade rapporter som hjälper dig att exakt lokalisera var prestandaproblem uppstår. Det gör den till ett måste för felsökning och optimering, särskilt på större eller mer aktiva Hytale-världar.

<InlineVoucher />

## Vad Spark gör

Spark erbjuder flera profileringsfunktioner:

- **Prestandaprofilering** – spelar in serveraktivitet och identifierar långsamma ticks eller hög CPU-användning  
- **Serverhälsomått** – inkluderar tick-längder, TPS, CPU- och minnesanvändning  
- **Interaktiva rapporter** – genererar en webbaserad rapport som kan öppnas i webbläsaren  
- **Lättviktig och enkel att använda** – designad för minimal påverkan samtidigt som den samlar in värdefull data  


## Installera Spark

Spark distribueras via CurseForge och installeras som en mod. Du kan installera mods antingen via vår Mods Installer eller via FTP. Mer info hittar du i vår [Install Mods](http://localhost:3000/guides/docs/hytale-mods)-guide. Efter installation, starta om din Hytale-server.

<Button label="Ladda ner Spark" link="https://www.curseforge.com/hytale/mods/spark" block />

## Köra profileraren

Efter att ha installerat Spark och startat din server, öppna fliken **Live Console** i din spelserverpanel eller använd in-game chatten om du har rätt behörigheter. För att börja samla prestandadata, starta profileraren med följande kommando:

```
/spark profiler start
```

![](https://screensaver01.zap-hosting.com/index.php/s/4fwJk5wtkGK7Yqy/download)

När den är igång börjar Spark spela in detaljerad serveraktivitet som tick-längder, CPU-användning och tråd-exekvering. Profileraren bör köras medan servern upplever det problem du vill analysera, till exempel under hög spelaraktivitet eller vid laggspikar. Att låta profileraren köra i minst 30 till 60 sekunder ger oftast tillräckligt med data för meningsfull analys.

Medan profileraren kör kan du redan se live-resultat genom att köra:

```
/spark profiler open
```

Detta kommando genererar en webblänk i konsolen eller chatten. Öppna länken i din webbläsare för att se en livevy av profileringsdata, inklusive tick-grafer och arbetsfördelning.

När tillräckligt med data samlats in, stoppa profileraren med:

```
/spark profiler stop
```

Efter stopp genererar Spark en slutgiltig rapportlänk. Denna rapport innehåller hela datasetet från profileringssessionen och kan öppnas i webbläsaren eller delas för vidare analys.

Om du vill kassera den aktuella sessionen och börja om kan du återställa profileraren med:

```
/spark profiler cancel
/spark profiler start
```

Detta rensar befintlig data och startar om profileringskörningen direkt.

## Analysera profilerarens resultat

Spark-profilerarens rapport ger en detaljerad översikt över hur serverresurser används. Ett av de viktigaste områdena att granska är tick-tidslinjen, som visar hur lång tid varje tick tar att slutföra. Långvariga ticks indikerar ofta tunga arbetsbelastningar som direkt påverkar TPS och spelupplevelsen.

![img](https://screensaver01.zap-hosting.com/index.php/s/zToJEdffQ75EgXH/preview)

Profileraren lyfter också fram **hotspots**, alltså vilka funktioner eller system som står för den högsta resursanvändningen. Denna insikt gör det enklare att avgöra om prestandaproblem orsakas av specifika mods, spelarbeteende, världsmekanik eller serverkonfiguration.

Spark-rapporter är designade för att enkelt kunna delas. När du söker hjälp från support eller andra admins, gör profilerarlänken det möjligt för dem att direkt granska datan och ge riktade rekommendationer.

## Slutsats

Spark-profileraren för Hytale är ett grymt verktyg för att diagnostisera prestandaproblem och hitta roten till serverlagg. Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />