---
id: over-the-top-wwi-friendly-fire
title: "Over the Top WWI: Configura el Friendly Fire"
description: "Aprende a activar o ajustar la configuración de friendly fire en tu servidor Over the Top WWI → Descubre más ahora"
sidebar_label: Friendly Fire
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El friendly fire determina si los jugadores pueden dañar a sus propios compañeros durante la partida. Ajustar estas configuraciones te permite controlar qué tan realista o permisivo debe ser el combate en tu **servidor de juegos Over the Top WWI**.

Activar el friendly fire puede aumentar el realismo y la jugabilidad táctica, mientras que desactivarlo o reducirlo puede crear una experiencia más casual y accesible.

<InlineVoucher />

## Configuración

Los ajustes de friendly fire se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de control del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
EnableFriendlyMeleeFire = 1
EnableFriendlyRangeFire = 1
FriendlyFireAtRoundStart = 60
FriendlyFirePercent = 5
RangeFriendlyFirePercent = 5
ExplosionFf = 0
FriendlyFireReflectPercent = 0
```

- `EnableFriendlyMeleeFire` activa o desactiva el daño cuerpo a cuerpo a compañeros.
- `EnableFriendlyRangeFire` activa o desactiva el daño a distancia a compañeros.
- `FriendlyFireAtRoundStart` define un retraso en segundos antes de que el friendly fire se active.
- `FriendlyFirePercent` controla cuánto daño cuerpo a cuerpo se aplica a los compañeros.
- `RangeFriendlyFirePercent` controla cuánto daño a distancia se aplica a los compañeros.
- `ExplosionFf` activa o desactiva el daño por explosiones a compañeros.
- `FriendlyFireReflectPercent` refleja un porcentaje del daño de vuelta al atacante en lugar de al compañero.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los nuevos ajustes de friendly fire se aplicarán de inmediato.

## Conclusión

¡Felicidades! Has configurado con éxito los ajustes de friendly fire en tu **servidor de juegos Over the Top WWI**. Ajustar estos valores te permite equilibrar el realismo y la experiencia de juego para tu comunidad.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂

<InlineVoucher />