---
id: hytale-teleport-between-worlds
title: "Hytale: Teletransportarse Entre Mundos"
description: "Descubre cómo teletransportarte entre Mundos en un servidor de Hytale → Aprende más ahora"
sidebar_label: Teletransportarse Entre Mundos
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Teletransportarse entre mundos en un servidor de Hytale permite a los jugadores moverse sin problemas de un entorno mundial a otro. Esta funcionalidad se usa comúnmente en servidores que alojan múltiples mundos, como hubs, mapas de aventura, áreas creativas o zonas de juego separadas.

:::info Aviso de Acceso Anticipado

Hytale se lanzó el 13 de enero de 2026 y actualmente está disponible en Acceso Anticipado. Como el juego aún está en fase activa de desarrollo, el software del servidor, archivos de configuración, soporte para mods y flujos de instalación pueden seguir cambiando con el tiempo.

:::

<InlineVoucher />


## Teletransportarse

Los comandos de teletransporte entre mundos pueden ejecutarse desde la consola del servidor o por un operador en el chat dentro del juego. Cuando se ejecuta desde la consola, el comando afecta al jugador especificado de inmediato. Cuando se ejecuta dentro del juego, el jugador que emite el comando debe tener permisos de operador o equivalentes.

Para teletransportar a un jugador de su mundo actual a otro mundo, usa el siguiente comando:

```
/world teleport <playername> <worldname>
```

El parámetro `<playername>` define el nombre del jugador que debe ser teletransportado. El parámetro `<worldname>` especifica el nombre del mundo de destino.

El teletransporte entre mundos requiere que el mundo de destino esté disponible en el servidor. Si el mundo objetivo no está cargado actualmente, el comando de teletransporte no tendrá éxito. Para hacer que un mundo esté disponible para teletransporte, cárgalo usando el siguiente comando:

```
/world load <worldname>
```


:::tip Resumen de nombres de mundos

Si no estás seguro del nombre exacto de un mundo, puedes mostrar una lista de todos los mundos disponibles usando el comando `/world list`. 
:::


## Conclusión

Teletransportarse entre mundos es una herramienta poderosa para gestionar servidores de Hytale con múltiples mundos. Usando los comandos adecuados desde la consola o el chat del juego y asegurando que los mundos de destino estén cargados, los administradores pueden ofrecer una navegación fluida y flexible entre diferentes entornos del servidor.

Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂


<InlineVoucher />