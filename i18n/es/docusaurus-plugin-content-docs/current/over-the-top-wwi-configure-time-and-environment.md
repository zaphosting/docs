---
id: over-the-top-wwi-configure-time-and-environment
title: "Over the Top WWI: Configura el Tiempo y el Entorno"
description: "Aprende a ajustar la hora del día y la configuración ambiental en tu servidor Over the Top WWI → Aprende más ahora"
sidebar_label: Tiempo y Entorno
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los ajustes de tiempo y entorno en **Over the Top WWI** influyen en la visibilidad, la atmósfera y las condiciones generales de juego. Al modificar estos valores, puedes crear batallas diurnas brillantes, escenarios más oscuros o ambientes con diferentes estaciones.

Estas configuraciones te permiten personalizar el aspecto y la sensación de tu servidor y mejorar la inmersión para tus jugadores.

<InlineVoucher />

## Configuración

Los ajustes de tiempo y entorno se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
TimeOfDay = 8
Season = 0
TemperatureinCelcius = 0
```

- `TimeOfDay` define la hora dentro del juego
- `Season` controla la estación actual

- `0` → Predeterminado
- `1` → Primavera
- `2` → Verano
- `3` → Otoño
- `4` → Invierno

- `TemperatureinCelcius` ajusta la temperatura ambiental
- Esto puede influir en la atmósfera y los efectos ambientales

Estos ajustes te permiten crear diferentes escenarios, como batallas a primera hora de la mañana, combates nocturnos o ambientes estacionales.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los nuevos ajustes de entorno se aplicarán automáticamente.

## Conclusión

¡Felicidades! Has configurado con éxito el tiempo y el entorno en tu **servidor de juegos Over the Top WWI**. Esto te permite personalizar la atmósfera y crear experiencias de juego únicas para tus jugadores.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />