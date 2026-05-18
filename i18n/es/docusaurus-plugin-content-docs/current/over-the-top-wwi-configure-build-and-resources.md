---
id: over-the-top-wwi-configure-build-and-resources
title: "Over the Top WWI: Configura Puntos de Construcción y Recursos"
description: "Aprende a configurar puntos de construcción, cañones y límites de recursos en tu servidor Over the Top WWI → Aprende más ahora"
sidebar_label: Puntos de Construcción y Recursos
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los puntos de construcción y la configuración de recursos en **Over the Top WWI** controlan cuántas estructuras, defensas y equipamiento pueden desplegar los jugadores durante una partida. Estos valores afectan directamente el equilibrio del juego, especialmente en modos donde la construcción y las fortificaciones son clave.

Al ajustar estas configuraciones, puedes crear una jugabilidad más defensiva con fortificaciones extensas o limitar los recursos para partidas más rápidas y agresivas.

<InlineVoucher />

## Configuración

Los ajustes de construcción y recursos se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
AttackerBuildPoints = 5000
DefenderBuildPoints = 5000
AttackerCannonPoints = 250
DefenderCannonPoints = 250
SapperBPRegenAmount = 50
SapperCannonPRegenAmount = 5
SapperPropBPRegenTime = 15
CannonPropPRegenTime = 15
```

- `AttackerBuildPoints` y `DefenderBuildPoints` definen cuántos puntos de construcción tiene disponible cada equipo

- `AttackerCannonPoints` y `DefenderCannonPoints` controlan cuántos cañones o unidades de artillería se pueden desplegar

- `SapperBPRegenAmount` define cuántos puntos de construcción se regeneran con el tiempo

- `SapperCannonPRegenAmount` controla la velocidad de regeneración de los puntos de cañón

- `SapperPropBPRegenTime` y `CannonPropPRegenTime` definen el tiempo en segundos entre cada tick de regeneración

Ajusta estos valores para controlar cuántas estructuras y defensas pueden crear los jugadores y qué tan rápido se reponen los recursos durante la partida.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los ajustes de recursos actualizados se aplicarán automáticamente.

## Conclusión

¡Felicidades! Has configurado con éxito los puntos de construcción y los ajustes de recursos en tu **servidor de Over the Top WWI**. Esto te permite controlar las fortificaciones, equilibrar la jugabilidad y moldear la experiencia general de batalla.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂

<InlineVoucher />