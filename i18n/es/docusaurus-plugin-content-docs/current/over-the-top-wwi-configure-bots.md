---
id: over-the-top-wwi-configure-bots
title: "Over the Top WWI: Configura Bots"
description: "Aprende a configurar los ajustes de bots en tu servidor Over the Top WWI → Aprende más ahora"
sidebar_label: Bots
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los bots se pueden usar en un servidor **Over the Top WWI** para llenar espacios vacíos, simular batallas a gran escala y mantener la actividad incluso con pocos jugadores. Ajustando la configuración de los bots, puedes controlar la dificultad, el comportamiento y la intensidad general de las partidas.

Esto te permite crear desde pequeñas escaramuzas controladas hasta grandes batallas caóticas con muchas unidades controladas por IA.

<InlineVoucher />

## Configuración

Los ajustes de los bots se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
AttackerBots = 45
DefenderBots = 45
AutoAssignBots = 0
BotCallinMulti = 250
SubBotForPlayer = 1
```

- `AttackerBots` define la cantidad de bots en el equipo atacante
- `DefenderBots` define la cantidad de bots en el equipo defensor
- `AutoAssignBots` distribuye automáticamente los bots entre los equipos
- `0` → Desactivado
- `1` → Activado

- `BotCallinMulti` controla la frecuencia con la que se generan o refuerzan los bots
- `SubBotForPlayer` reemplaza bots por jugadores reales cuando se unen
- `1` → Activado
- `0` → Desactivado

### Configuración avanzada de bots

Puedes personalizar aún más el comportamiento de los bots usando parámetros adicionales:

```
BotWeightOff = 8
BotWeightRankers = 40
BotWeightHeavys = 20
BotWeightSnipers = 10
BotWeightStormTroops = 20
BotWeightSappers = 20
BotWeightSpecialists = 10
BotWeightMech = 10
BotWeightZombies = 0
```

Estos valores controlan la frecuencia con la que se seleccionan ciertos tipos de unidades cuando se generan bots. Aumentar un valor hará que aparezcan más bots de ese tipo en las partidas.

### Ajustes de oleadas y escalado

```
WaveLegnth = 300
WaveBuildUpTime = 90
AutoAssignBotsScaleMulti = 100
```

- `WaveLegnth` controla la duración de una oleada de bots
- `WaveBuildUpTime` define cuánto tarda una oleada en formarse completamente
- `AutoAssignBotsScaleMulti` escala la cantidad de bots según el número de jugadores

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los nuevos ajustes de bots se aplicarán durante el juego.

## Conclusión

¡Felicidades! Has configurado con éxito los bots en tu **servidor Over the Top WWI**. Ajustar estos parámetros te permite controlar la intensidad de las partidas, mejorar la experiencia de los jugadores y mantener tu servidor activo en todo momento.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />