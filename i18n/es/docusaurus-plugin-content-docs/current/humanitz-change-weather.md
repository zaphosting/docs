---
id: humanitz-change-weather
title: "HumanitZ: Cambiar el Clima"
description: "Aprende a editar y personalizar la frecuencia y tipos de clima en tu servidor de HumanitZ → Aprende más ahora"
sidebar_label: "Cambiar el Clima"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

Los patrones climáticos influyen en la jugabilidad de supervivencia, la visibilidad y la atmósfera del mundo en HumanitZ. Ya sea que quieras un ambiente más tranquilo con cielos mayormente despejados o un mundo más duro con tormentas y ventiscas frecuentes, ajustar la configuración del clima te permite controlar con qué frecuencia ocurren los diferentes tipos de clima.

<InlineVoucher />



## Configuración

Los ajustes del clima se controlan en el archivo `GameServerSettings.ini`. Puedes acceder a este archivo en el panel de gestión de tu servidor bajo **Configs**. Dentro del archivo de configuración, localiza los siguientes parámetros:

```
;Aquí puedes ajustar las probabilidades de cada tipo de clima. La temporada actual seguirá dictando qué tipos de clima pueden aparecer.
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

Cada ajuste representa la **probabilidad relativa** de que ocurra el tipo de clima correspondiente. Valores más altos aumentan la probabilidad de que ese tipo de clima sea elegido durante la generación del clima, mientras que valores más bajos la disminuyen.

Por ejemplo:

- Configurar `Weather_ClearSky=3` aumenta la posibilidad de cielos despejados en comparación con otros tipos de clima  
- Reducir `Weather_Blizzard=0` desactiva efectivamente la aparición de ventiscas (a menos que la lógica de la temporada lo fuerce)



### Clima Tranquilo

Este ejemplo prioriza un clima tranquilo y reduce condiciones severas:

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



### Clima Severo

Este ejemplo aumenta las probabilidades de un clima severo y dinámico:
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

Después de editar el archivo, guarda los cambios y reinicia el servidor para que la nueva configuración del clima tenga efecto.



## Conclusión

¡Felicidades! Al ajustar los valores de frecuencia del clima en el `GameServerSettings.ini`, has personalizado con éxito cómo se comporta el clima en tu servidor de HumanitZ. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />