---
id: over-the-top-wwi-configure-map-rotation-rules
title: "Over the Top WWI: Configura las reglas de rotación de mapas"
description: "Aprende a configurar el comportamiento de rotación de mapas en tu servidor de Over the Top WWI → Aprende más ahora"
sidebar_label: Rotación de mapas
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Las reglas de rotación de mapas en **Over the Top WWI** determinan cómo se seleccionan y juegan los mapas según la cantidad de jugadores. Esto ayuda a asegurar que los mapas se mantengan equilibrados y adecuados para el número de jugadores activos.

Al configurar estos ajustes, puedes evitar que mapas grandes se jueguen con pocos jugadores o que mapas pequeños se saturen.

<InlineVoucher />

## Configuración

Las reglas de rotación de mapas se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra el siguiente parámetro:


EnableMinMaxPlayersPerMapCheck = False


- `EnableMinMaxPlayersPerMapCheck` habilita o deshabilita la selección automática de mapas basada en la cantidad de jugadores

  - `False` → Desactivado
  - `True` → Activado


Cuando está activado, el servidor verificará la cantidad actual de jugadores y ajustará la selección de mapas en consecuencia. Esto asegura que los mapas se elijan dentro de un rango adecuado, ayudando a mantener un juego equilibrado.

El sistema usa umbrales internos para determinar si un mapa es apropiado, evitando situaciones donde mapas grandes estén poco poblados o mapas pequeños se saturen.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. El comportamiento actualizado de rotación de mapas se aplicará automáticamente.

## Conclusión

¡Felicidades! Has configurado con éxito las reglas de rotación de mapas en tu **servidor de Over the Top WWI**. Esto ayuda a asegurar un juego equilibrado al ajustar el tamaño del mapa según la cantidad de jugadores.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂

<InlineVoucher />