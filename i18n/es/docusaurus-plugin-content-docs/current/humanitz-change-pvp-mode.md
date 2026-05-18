---
id: humanitz-change-pvp-mode
title: "HumanitZ: Cambiar modo PvP"
description: "Aprende cómo activar o desactivar el PvP en tu servidor de HumanitZ → Aprende más ahora"
sidebar_label: "Cambiar modo PvP"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

El combate jugador contra jugador (PvP) es una mecánica clave en juegos de supervivencia como HumanitZ. Activar o desactivar el PvP cambia cómo los jugadores pueden interactuar en combate, si pueden dañarse entre sí y si pueden interactuar con objetos propiedad de jugadores como vehículos o contenedores.

<InlineVoucher />

## Configuración

El modo PvP se controla en el archivo `GameServerSettings.ini`. Puedes acceder a este archivo en el panel de gestión de tu servidor bajo **Configs**. Dentro del archivo de configuración, localiza el siguiente parámetro:

```
;false/true=Off/On. Esto también afecta la capacidad de interactuar con objetos de jugadores como coches y contenedores
PVP=true
```

- `PVP=true` – Activa el combate jugador contra jugador  
- `PVP=false` – Desactiva el combate jugador contra jugador

Para cambiar el modo PvP, simplemente ajusta el valor a `true` (Activado) o `false` (Desactivado), según cómo quieras que funcione el PvP en tu servidor.

Ejemplo – PvP desactivado:

```
PVP=false
```

Después de editar el archivo, guarda los cambios y reinicia el servidor para que la nueva configuración tenga efecto.

## Conclusión

¡Felicidades! Modificando el valor `PVP` en el `GameServerSettings.ini`, has cambiado con éxito el modo PvP en tu servidor de HumanitZ. Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />