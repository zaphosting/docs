---
id: humanitz-change-weather
title: "HumanitZ: Change Weather"
description: "Learn how to edit and customize weather frequency and types on your HumanitZ server → Learn more now"
sidebar_label: "Change Weather"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

Weather patterns influence survival gameplay, visibility, and world atmosphere in HumanitZ. Whether you want a calmer environment with mostly clear skies or a harsher world with frequent storms and blizzards, adjusting weather settings allows you to control how often different weather types occur.

<InlineVoucher />



## Configuration

Weather settings are controlled in the `GameServerSettings.ini` file. You can access this file in your server management panel under **Configs**. Inside the config file, locate the following parameters:

```
;Below you can tweak the odds of each weather type. The current season will still dictate which weather types can spawn.
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=1
Weather_Thunderstorm=1
Weather_LightSnow=1
Weather_Snow=1
Weather_Blizzard=1
```

Each setting represents the **relative odds** of the corresponding weather type occurring. Higher values increase the likelihood that weather type will be chosen during weather generation, while lower values decrease it.

For example:

- Setting `Weather_ClearSky=3` increases the chance of clear skies compared to other weather types  
- Reducing `Weather_Blizzard=0` effectively disables blizzard spawns (unless season logic forces it)



### Calm Weather

This example prioritizes calm weather and reduces severe conditions:

```
Weather_ClearSky=3
Weather_Cloudy=2
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=0
Weather_Thunderstorm=0
Weather_LightSnow=1
Weather_Snow=0
Weather_Blizzard=0
```



### Harsh Weather

This example increases the odds of severe and dynamic weather:
```
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=2
Weather_LightRain=2
Weather_Rain=3
Weather_Thunderstorm=2
Weather_LightSnow=1
Weather_Snow=2
Weather_Blizzard=2
```

After editing the file, save your changes and restart the server for the new weather settings to take effect.



## Conclusion

Congratulations! By adjusting the weather frequency values in the  `GameServerSettings.ini`, you have successfully customized how weather behaves on your HumanitZ server. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />

