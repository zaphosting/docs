---
id: humanitz-change-weather
title: "HumanitZ: Ändra Väder"
description: "Lär dig hur du redigerar och anpassar väderfrekvens och typer på din HumanitZ-server → Läs mer nu"
sidebar_label: "Ändra Väder"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduktion

Vädermönster påverkar survival-spelupplevelsen, sikt och världens atmosfär i HumanitZ. Oavsett om du vill ha en lugnare miljö med mestadels klar himmel eller en tuffare värld med frekventa stormar och snöoväder, så låter väderinställningarna dig styra hur ofta olika vädertyper ska förekomma.

<InlineVoucher />



## Konfiguration

Väderinställningarna styrs i filen `GameServerSettings.ini`. Du hittar den i din serverhanteringspanel under **Configs**. Inuti konfigurationsfilen, leta upp följande parametrar:

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

Varje inställning representerar **relativa sannolikheten** för att motsvarande vädertyp ska inträffa. Högre värden ökar chansen att den vädertypen väljs vid vädergenerering, medan lägre värden minskar den.

Till exempel:

- Att sätta `Weather_ClearSky=3` ökar chansen för klar himmel jämfört med andra vädertyper  
- Att sätta `Weather_Blizzard=0` stänger effektivt av snöoväder (om inte säsongslogiken tvingar fram det)



### Lugnt Väder

Det här exemplet prioriterar lugnt väder och minskar allvarliga väderförhållanden:

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



### Tufft Väder

Det här exemplet ökar sannolikheten för kraftigt och dynamiskt väder:
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

När du redigerat filen, spara ändringarna och starta om servern för att de nya väderinställningarna ska börja gälla.



## Avslutning

Grattis! Genom att justera väderfrekvensvärdena i `GameServerSettings.ini` har du nu anpassat hur vädret beter sig på din HumanitZ-server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support – vi finns här för dig varje dag! 🙂

<InlineVoucher />