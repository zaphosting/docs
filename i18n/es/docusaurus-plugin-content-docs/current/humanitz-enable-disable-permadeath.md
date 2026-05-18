---
id: humanitz-enable-disable-permadeath
title: "HumanitZ: Activar/Desactivar Permadeath"
description: "Aprende cómo activar o desactivar el permadeath en tu servidor de HumanitZ → Aprende más ahora"
sidebar_label: "Activar/Desactivar Permadeath"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

El permadeath aumenta significativamente la dificultad y la tensión del gameplay de supervivencia en HumanitZ. Cuando está activado, los jugadores pierden permanentemente su personaje al morir y deben crear uno nuevo. Esta configuración es común en servidores hardcore o de supervivencia de alto riesgo.

<InlineVoucher />

## Configuración

El permadeath se controla en el archivo `GameServerSettings.ini`. Puedes acceder a este archivo en el panel de control de tu servidor bajo **Configs**. Dentro del archivo de configuración, localiza el siguiente parámetro:

```
;Cuando está en true, el jugador que muera perderá su personaje y tendrá que crear uno nuevo
PermaDeath=false
```

- `PermaDeath=true` – Activa el permadeath. Los jugadores pierden permanentemente su personaje al morir.  
- `PermaDeath=false` – Desactiva el permadeath. Los jugadores pueden reaparecer con su personaje existente.

Si quieres activar el permadeath, cambia el valor a:

```
PermaDeath=true
```

Después de editar el archivo, guarda los cambios y reinicia el servidor para que la nueva configuración tenga efecto.

## Conclusión

¡Felicidades! Modificando el valor `PermaDeath` en el `GameServerSettings.ini`, has activado o desactivado con éxito el permadeath en tu servidor de HumanitZ. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂

<InlineVoucher />