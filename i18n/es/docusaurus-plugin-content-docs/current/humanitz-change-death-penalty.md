---
id: humanitz-change-death-penalty
title: "HumanitZ: Cambiar la Pena de Muerte"
description: "Descubre cómo ajustar la configuración de la pena de muerte en tu servidor HumanitZ → Aprende más ahora"
sidebar_label: Cambiar Pena de Muerte
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';



## Introducción

La pena de muerte en HumanitZ determina qué pierde un jugador después de morir. Dependiendo del estilo de juego de tu servidor, puede que prefieras una experiencia de supervivencia más indulgente o un sistema más duro que aumente la tensión y el riesgo. 

<InlineVoucher />



## Configuración

La pena de muerte se controla en el archivo `GameServerSettings.ini`. Puedes acceder a este archivo en el panel de gestión de tu servidor bajo **Configs**. Dentro del archivo de configuración, localiza el siguiente parámetro:

```
;0=No perder nada, 1=Perder mochila y arma en mano, 2=Anterior + bolsillos y mochila, 3=Todo lo anterior + equipo
OnDeath=2
```

El valor después de `OnDeath=` determina cuánto del inventario de un jugador se pierde al morir:

- `0` – Los jugadores no pierden nada  
- `1` – Los jugadores pierden su mochila y el arma que tienen en mano  
- `2` – Pérdidas anteriores + contenido de bolsillos y mochila  
- `3` – Todo lo anterior + equipo equipado  

Para ajustar la pena, simplemente cambia el número al valor que desees. Después de editar el archivo, guarda los cambios y reinicia el servidor para que la nueva configuración tenga efecto.



## Conclusión

¡Felicidades! Modificando el valor `OnDeath` en el `GameServerSettings.ini`, has configurado con éxito la pena de muerte en tu servidor HumanitZ. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂



<InlineVoucher />