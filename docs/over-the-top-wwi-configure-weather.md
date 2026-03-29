---
id: over-the-top-wwi-configure-weather
title: "Over the Top WWI: Configure Weather"
description: "Learn how to configure weather settings on your Over the Top WWI server → Learn more now"
sidebar_label: Weather
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Weather settings in **Over the Top WWI** have a direct impact on gameplay, visibility, and atmosphere. By adjusting these values, you can create clear conditions for balanced combat or introduce challenging environments such as fog, rain, or storms.

Custom weather configurations allow you to shape the overall experience and make matches more dynamic or immersive.

<InlineVoucher />

## Configuration

Weather settings are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
EnableRandomWeather = 1
CurrentWeather = 0
CloudCoverage = 20
TimeToChangeWeather = 180
TimeToChangeClouds = 180
```


- `EnableRandomWeather` enables or disables dynamic weather changes

- `0` → Disabled
- `1` → Enabled

- `CurrentWeather` defines the current weather type

- `0` → Clear
- `1` → Rain
- `2` → Fog
- `3` → Snow
- Add `+3` for more intense versions

- `CloudCoverage` controls how much of the sky is covered with clouds

- Lower values result in clearer skies
- Higher values increase cloud density

- `TimeToChangeWeather` defines how often the weather changes in seconds

- `TimeToChangeClouds` controls how frequently cloud conditions update

Additional environment settings:

```
WindStrength = 2
WindDirection = 0
ChanceOfLightningOccuring = 100
LightningTimer = 6
CanLightningKill = 1
```

- `WindStrength` controls how strong the wind affects gameplay
- `WindDirection` defines the direction of the wind
- `ChanceOfLightningOccuring` sets how likely lightning is to occur
- `LightningTimer` controls how frequently lightning appears
- `CanLightningKill` determines whether lightning can damage players

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The new weather settings will be applied automatically.



## Conclusion

Congratulations! You have successfully configured the weather settings on your **Over the Top WWI server**. Adjusting these values allows you to create dynamic environments and enhance the gameplay experience for your players.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />