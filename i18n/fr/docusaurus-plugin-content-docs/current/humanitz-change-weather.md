---
id: humanitz-change-weather
title: "HumanitZ : Modifier la météo"
description: "Apprends à éditer et personnaliser la fréquence et les types de météo sur ton serveur HumanitZ → Découvre-le maintenant"
sidebar_label: "Modifier la météo"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

Les conditions météo influencent la survie, la visibilité et l’ambiance du monde dans HumanitZ. Que tu veuilles un environnement plus calme avec principalement un ciel dégagé ou un monde plus rude avec des tempêtes et blizzards fréquents, ajuster les paramètres météo te permet de contrôler la fréquence d’apparition des différents types de météo.

<InlineVoucher />

## Configuration

Les paramètres météo se règlent dans le fichier `GameServerSettings.ini`. Tu peux accéder à ce fichier dans ton panneau de contrôle sous **Configs**. Dans ce fichier de config, repère les paramètres suivants :

```
;Ci-dessous tu peux ajuster les chances de chaque type de météo. La saison actuelle déterminera toujours quels types de météo peuvent apparaître.
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

Chaque paramètre représente la **probabilité relative** que le type de météo correspondant se produise. Des valeurs plus élevées augmentent la probabilité que ce type de météo soit choisi lors de la génération, tandis que des valeurs plus basses la diminuent.

Par exemple :

- Mettre `Weather_ClearSky=3` augmente les chances d’avoir un ciel dégagé par rapport aux autres types de météo  
- Réduire `Weather_Blizzard=0` désactive efficacement l’apparition des blizzards (sauf si la logique de saison l’impose)



### Météo calme

Cet exemple privilégie une météo calme et réduit les conditions sévères :

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



### Météo rude

Cet exemple augmente les chances d’avoir une météo sévère et dynamique :

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

Après avoir modifié le fichier, sauvegarde tes changements et redémarre le serveur pour que les nouveaux réglages météo prennent effet.



## Conclusion

Bravo ! En ajustant les valeurs de fréquence météo dans le fichier `GameServerSettings.ini`, tu as personnalisé avec succès le comportement de la météo sur ton serveur HumanitZ. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />