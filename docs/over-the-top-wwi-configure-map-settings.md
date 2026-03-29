---
id: over-the-top-wwi-configure-map-settings
title: "Over the Top WWI: Configure Random Map Settings"
description: "Learn how to configure random map generation settings on your Over the Top WWI server → Learn more now"
sidebar_label: Random Maps
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Random map settings in **Over the Top WWI** allow you to dynamically generate maps with different terrain, vegetation, and environmental features. This can significantly increase replayability and create unique battlefields for each match.

By adjusting these values, you can control map size, terrain complexity, and the amount of objects such as forests, rocks, or buildings.

<InlineVoucher />

## Configuration

Random map settings are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

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





- `RandomMapSizee` defines the overall size of the generated map
- `RandomFields`, `RandomForests`, `RandomBush`, `RandomRocks` control how many natural elements appear on the map
- `RandomCivBuildings` and `RandomMilBuildings` define the number of civilian and military structures
- `RandomSingleTrees` controls isolated tree placement
- `RandomNoiseSetting`, `RandomFrequency`, `RandomLacunarity`, and `RandomPersistence` affect terrain generation and variation
- `RandomWaterHeight` defines the water level
- `RandomMaxTerrainHeight` controls elevation and terrain height
- `RandomDesert` determines whether desert environments can appear

- `0` → Disabled
- `1` → Enabled
- `2` → Random


Adjust these values to create different types of maps, from dense forests to open battlefields or varied terrain landscapes.

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The new map settings will be applied when a random map is generated.

## Conclusion

Congratulations! You have successfully configured random map settings on your **Over the Top WWI server**. This allows you to create unique and dynamic battlefields, enhancing replayability and player experience.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />