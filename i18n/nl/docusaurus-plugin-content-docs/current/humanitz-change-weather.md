---
id: humanitz-change-weather
title: "HumanitZ: Weer Aanpassen"
description: "Leer hoe je de frequentie en soorten weer op je HumanitZ-server kunt aanpassen en personaliseren → Ontdek het nu"
sidebar_label: "Weer Aanpassen"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Intro

Weerspatronen beïnvloeden de survival gameplay, zichtbaarheid en sfeer in HumanitZ. Of je nu een rustigere omgeving wilt met vooral heldere luchten, of een ruigere wereld met frequente stormen en sneeuwstormen, door de weersinstellingen aan te passen bepaal je zelf hoe vaak welke weersomstandigheden voorkomen.

<InlineVoucher />



## Configuratie

De weersinstellingen regel je in het bestand `GameServerSettings.ini`. Je vindt dit bestand in je serverbeheer paneel onder **Configs**. Zoek in het configbestand naar de volgende parameters:

```
;Hieronder kun je de kans op elk type weer aanpassen. Het huidige seizoen bepaalt nog steeds welke weersomstandigheden kunnen voorkomen.
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

Elke instelling geeft de **relatieve kans** aan dat het bijbehorende weertype voorkomt. Hogere waarden verhogen de kans dat dat weertype gekozen wordt tijdens het genereren van het weer, lagere waarden verlagen die kans.

Bijvoorbeeld:

- `Weather_ClearSky=3` verhoogt de kans op een heldere lucht ten opzichte van andere weersomstandigheden  
- `Weather_Blizzard=0` zet sneeuwstormen effectief uit (tenzij het seizoen het toch afdwingt)



### Rustig Weer

Dit voorbeeld geeft prioriteit aan rustig weer en vermindert zware weersomstandigheden:

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



### Heftig Weer

Dit voorbeeld verhoogt de kans op zware en dynamische weersomstandigheden:
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

Sla na het aanpassen het bestand op en herstart je server zodat de nieuwe weersinstellingen actief worden.



## Afsluiting

Gefeliciteerd! Door de weerfrequenties in `GameServerSettings.ini` aan te passen, heb je nu zelf de controle over het weer op je HumanitZ-server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />