---
id: over-the-top-wwi-configure-map-settings
title: "Over the Top WWI: Konfigurera Inställningar för Slumpmässiga Kartor"
description: "Lär dig hur du konfigurerar inställningar för slumpmässig kartgenerering på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Slumpkartor
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Inställningarna för slumpmässiga kartor i **Over the Top WWI** låter dig dynamiskt generera kartor med olika terräng, vegetation och miljöegenskaper. Det här kan öka återspelningsvärdet rejält och skapa unika slagfält för varje match.

Genom att justera dessa värden kan du styra kartans storlek, terrängens komplexitet och mängden objekt som skogar, stenar eller byggnader.

<InlineVoucher />

## Konfiguration

Inställningarna för slumpkartor konfigureras i serverns konfigurationsfil. Du når och redigerar den här filen i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna konfigurationsfilen `ServerConfiguration.ini`. Inuti filen hittar du följande parametrar:

```
RandomMapSizee = 450
RandomFields = 8.25
RandomCivBuildings = 0
RandomMilBuildings = 0
RandomForests = 8.5
RandomSingleTrees = 1.1
RandomBush = 5
RandomRocks = 1.1
RandomNoiseSetting = 0
RandomWaterHeight = 12.25
RandomMaxTerrainHeight = 26
RandomFrequency = 5
RandomLacunarity = 3
RandomPersistence = 32
RandomDesert = 0
```

- `RandomMapSizee` definierar den totala storleken på den genererade kartan  
- `RandomFields`, `RandomForests`, `RandomBush`, `RandomRocks` styr hur många naturliga element som dyker upp på kartan  
- `RandomCivBuildings` och `RandomMilBuildings` definierar antalet civila respektive militära byggnader  
- `RandomSingleTrees` styr placeringen av enstaka träd  
- `RandomNoiseSetting`, `RandomFrequency`, `RandomLacunarity` och `RandomPersistence` påverkar terränggenerering och variation  
- `RandomWaterHeight` definierar vattennivån  
- `RandomMaxTerrainHeight` styr höjd och terrängens elevation  
- `RandomDesert` avgör om ökenmiljöer kan förekomma  

- `0` → Avstängt  
- `1` → På  
- `2` → Slumpmässigt  

Justera dessa värden för att skapa olika typer av kartor, från täta skogar till öppna slagfält eller varierande terränglandskap.

När du ändrat i `ServerConfiguration.ini`, spara filen och starta om din server. De nya kartinställningarna appliceras när en slumpmässig karta genereras.

## Avslutning

Grattis! Du har nu konfigurerat inställningarna för slumpmässiga kartor på din **Over the Top WWI-server**. Det ger dig möjlighet att skapa unika och dynamiska slagfält som höjer återspelningsvärdet och spelupplevelsen.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />