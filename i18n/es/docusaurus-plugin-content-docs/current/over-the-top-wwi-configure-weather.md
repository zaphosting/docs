---
id: over-the-top-wwi-configure-weather
title: "Over the Top WWI: Configura el Clima"
description: "Aprende a configurar los ajustes del clima en tu servidor de Over the Top WWI → Aprende más ahora"
sidebar_label: Clima
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los ajustes del clima en **Over the Top WWI** tienen un impacto directo en la jugabilidad, la visibilidad y la atmósfera. Al modificar estos valores, puedes crear condiciones claras para un combate equilibrado o introducir entornos desafiantes como niebla, lluvia o tormentas.

Las configuraciones personalizadas del clima te permiten moldear la experiencia general y hacer que las partidas sean más dinámicas o inmersivas.

<InlineVoucher />

## Configuración

Los ajustes del clima se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
EnableRandomWeather = 1
CurrentWeather = 0
CloudCoverage = 20
TimeToChangeWeather = 180
TimeToChangeClouds = 180
```

- `EnableRandomWeather` activa o desactiva los cambios dinámicos del clima

- `0` → Desactivado
- `1` → Activado

- `CurrentWeather` define el tipo de clima actual

- `0` → Despejado
- `1` → Lluvia
- `2` → Niebla
- `3` → Nieve
- Añade `+3` para versiones más intensas

- `CloudCoverage` controla cuánto del cielo está cubierto por nubes

- Valores bajos resultan en cielos más despejados
- Valores altos aumentan la densidad de nubes

- `TimeToChangeWeather` define cada cuánto cambia el clima en segundos

- `TimeToChangeClouds` controla la frecuencia con la que se actualizan las condiciones de las nubes

Ajustes adicionales del entorno:

```
WindStrength = 2
WindDirection = 0
ChanceOfLightningOccuring = 100
LightningTimer = 6
CanLightningKill = 1
```

- `WindStrength` controla la fuerza con la que el viento afecta la jugabilidad
- `WindDirection` define la dirección del viento
- `ChanceOfLightningOccuring` establece la probabilidad de que ocurra un rayo
- `LightningTimer` controla la frecuencia con la que aparecen los rayos
- `CanLightningKill` determina si los rayos pueden dañar a los jugadores

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los nuevos ajustes del clima se aplicarán automáticamente.

## Conclusión

¡Felicidades! Has configurado con éxito los ajustes del clima en tu **servidor de Over the Top WWI**. Ajustar estos valores te permite crear entornos dinámicos y mejorar la experiencia de juego para tus jugadores.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />