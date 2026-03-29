---
title: "Over the Top WWI: Cambiar el modo de juego"
description: "Aprende cómo cambiar el modo de juego en tu servidor Over the Top WWI → Aprende más ahora"
sidebar_label: Cambiar modo de juego
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El modo de juego en un **servidor de Over the Top WWI** define cómo se juegan las partidas y qué objetivos deben cumplir los jugadores. Diferentes modos de juego pueden cambiar significativamente el ritmo, la estrategia y la experiencia general de juego.

Al ajustar el modo de juego, puedes personalizar tu servidor para enfocarte en batallas a gran escala, jugabilidad defensiva o escenarios basados en objetivos, según las preferencias de tu comunidad.

<InlineVoucher />

## Configuración

El modo de juego se configura dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra el siguiente parámetro:

```
CurrentGameMode = 2
```

El valor determina qué modo de juego está activo en tu servidor. Valores disponibles:

- `2` → Conquista
- `3` → Asedio

El valor seleccionado define las reglas principales de juego para cada partida.

- **Conquista (2)** se centra en capturar y mantener objetivos en el mapa, fomentando el movimiento constante y la coordinación en equipo.
- **Asedio (3)** suele ser más defensivo, donde un equipo ataca mientras el otro defiende posiciones estratégicas.

Elegir el modo correcto depende de tu estilo de juego preferido y la cantidad de jugadores.

Después de modificar el valor en el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. El nuevo modo de juego se aplicará en la próxima partida o rotación de mapa.

## Conclusión

¡Felicidades! Has cambiado con éxito el modo de juego en tu **servidor de Over the Top WWI**. Al seleccionar el modo adecuado, puedes moldear la experiencia de juego y adaptarla mejor a las preferencias de tu comunidad.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂

<InlineVoucher />