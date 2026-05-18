---
id: over-the-top-wwi-configure-spawn-settings
title: "Over the Top WWI: Configura los Ajustes de Spawn"
description: "Aprende a configurar el comportamiento de spawn en tu servidor de Over the Top WWI → Aprende más ahora"
sidebar_label: Ajustes de Spawn
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los ajustes de spawn en **Over the Top WWI** controlan cómo y cuándo los jugadores vuelven al campo de batalla. Estos ajustes afectan directamente el ritmo, la justicia y el flujo general de la partida.

Al modificar los tiempos de spawn, los periodos de gracia y el comportamiento de respawn, puedes crear partidas más rápidas o escenarios de combate más tácticos y desafiantes.

<InlineVoucher />

## Configuración

Los ajustes de spawn se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
SpawnGracePeriod = 15
AttackerRespawnTime = 8
DefenderRespawnTime = 8
WaveSpawning = 0
WaveLegnth = 300
WaveBuildUpTime = 90
```

- `SpawnGracePeriod` define cuánto tiempo pueden spawnear los jugadores sin penalizaciones ni restricciones al inicio
- `AttackerRespawnTime` establece el retraso de respawn para el equipo atacante
- `DefenderRespawnTime` establece el retraso de respawn para el equipo defensor

- `WaveSpawning` activa o desactiva el spawn en oleadas

- `WaveLegnth` define cuánto dura una oleada de spawn
- `WaveBuildUpTime` controla cuánto tarda en formarse completamente una oleada

Ajustar estos valores te permite controlar si los jugadores spawnean individualmente o en oleadas coordinadas, y qué tan rápido pueden volver al campo de batalla.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. El nuevo comportamiento de spawn se aplicará automáticamente.

## Conclusión

¡Felicidades! Has configurado con éxito los ajustes de spawn en tu **servidor de Over the Top WWI**. Estos ajustes te permiten afinar el ritmo del juego y mejorar la experiencia general de los jugadores.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />