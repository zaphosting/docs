---
id: over-the-top-wwi-configure-performance-settings
title: "Over the Top WWI: Optimiza el Rendimiento del Servidor"
description: "Aprende cómo optimizar el rendimiento y el comportamiento del servidor en tu servidor de Over the Top WWI → Aprende más ahora"
sidebar_label: Configuración de Rendimiento
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Las configuraciones de rendimiento en **Over the Top WWI** influyen en qué tan fluido corre tu servidor, especialmente con muchos jugadores o uso intensivo de IA. Una configuración adecuada puede mejorar la estabilidad, reducir el lag y asegurar una mejor experiencia de juego para todos.

Al ajustar estos valores, puedes equilibrar la simulación visual, los cálculos de IA y la carga del servidor.

<InlineVoucher />

## Configuración

Las configuraciones de rendimiento se ajustan dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
TargetFPS = 0
NavCalcsPerFrame = 2000
NavMeshFrames = 1
NavMeshAutoSeed = 5
ResetIfNoPlayers = 1
```

- `TargetFPS` define el perfil de rendimiento del servidor

  - `0` → Predeterminado
  - `1` → Optimización para mayor cantidad de jugadores
  - `2` → Optimización para cantidad muy alta de jugadores

- `NavCalcsPerFrame` controla cuántos cálculos de navegación se procesan por frame
- `NavMeshFrames` define con qué frecuencia se actualizan las mallas de navegación
- `NavMeshAutoSeed` influye en cómo se generan las rutas de navegación de la IA
- `ResetIfNoPlayers` reinicia automáticamente el servidor cuando no hay jugadores conectados

  - `0` → Desactivado
  - `1` → Activado

Ajustar estas configuraciones puede ayudar a mejorar el rendimiento del servidor, especialmente cuando hay muchos bots o se alojan batallas grandes.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los nuevos ajustes de rendimiento se aplicarán automáticamente.

## Conclusión

¡Felicidades! Has optimizado con éxito las configuraciones de rendimiento en tu **servidor de Over the Top WWI**. Ajustar bien estos valores ayuda a mantener la estabilidad y asegura un juego fluido incluso bajo carga pesada.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />