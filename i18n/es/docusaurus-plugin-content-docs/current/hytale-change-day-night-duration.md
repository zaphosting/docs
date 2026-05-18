---
id: hytale-change-day-night-duration
title: "Hytale: Cambiar la Duración del Día y la Noche"
description: "Descubre cómo teletransportarte entre Mundos en un servidor de Hytale → Aprende más ahora"
sidebar_label: Cambiar la Duración del Día y la Noche
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El ciclo de día y noche en un servidor de Hytale define cuánto duran las fases de luz y oscuridad dentro de un mundo. Ajustando la duración de estos ciclos, los propietarios del servidor pueden influir en el ritmo del juego, la atmósfera y la dificultad.

Noches más cortas pueden crear un ambiente más relajado, mientras que noches más largas aumentan el desafío y la tensión. Personalizar la duración del día y la noche te permite adaptar el mundo al estilo de juego que quieres para tu servidor.

:::info Aviso de Acceso Anticipado

Hytale se lanzó el 13 de enero de 2026 y actualmente está disponible en Acceso Anticipado. Como el juego aún está en fase activa de desarrollo, el software del servidor, archivos de configuración, soporte para mods y flujos de instalación pueden seguir cambiando con el tiempo.

:::

<InlineVoucher />

## Configuración

Para cambiar la duración del día y la noche, debes ajustar la configuración directamente en el archivo `config.json` del mundo, que se encuentra en:

```
/gXXXXXXX/hytale/universe/worlds/<nombre_del_mundo>/config.json
```

Si las entradas de configuración para la duración del día y la noche no existen aún, debes agregarlas manualmente. Desplázate por el archivo hasta encontrar la siguiente línea:

```
"GameplayConfig":
```

Justo debajo de esta línea, inserta los ajustes de duración del día y la noche:

```
"DaytimeDurationSeconds": 1800,
"NighttimeDurationSeconds": 1000,
```

Estos valores definen la duración del día y la noche en segundos. Por ejemplo, un valor de `1800` para el día resulta en una fase diurna más larga, mientras que un valor de `1000` para la noche controla cuánto dura la noche antes de que el ciclo se reinicie. Después de hacer los cambios, guarda el archivo `config.json` y reinicia el servidor.

## Conclusión

Después de completar esta configuración, tendrás control total sobre cuánto duran el día y la noche en cada mundo de tu servidor de Hytale. Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂


<InlineVoucher />