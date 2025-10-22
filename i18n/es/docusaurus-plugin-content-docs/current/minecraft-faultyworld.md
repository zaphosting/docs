---
id: minecraft-faultyworld
title: "Minecraft: Eliminar chunks defectuosos del mundo"
description: "Descubre cómo arreglar errores de chunks en Minecraft y restaurar una jugabilidad fluida eliminando secciones corruptas del mundo → Aprende más ahora"
sidebar_label: Mundo defectuoso (Chunks)
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tu mundo está parcialmente sobrecargado o tiene fallos y esto limita la jugabilidad, impidiéndote jugar bien? Esto puede pasar si hay demasiados objetos en ciertas áreas de tu mundo o si en general contiene chunks dañados. Un error de chunk es un fallo bastante común en Minecraft que ocurre cuando un chunk se carga incorrectamente.

![img](https://screensaver01.zap-hosting.com/index.php/s/A5bj6posqkTfGK8/preview)

## Preparación

Existen varias herramientas que puedes usar para modificar mundos de Minecraft. Una de las más comunes es [MCA Selector](https://github.com/Querz/mcaselector), que usaremos en esta guía. Para ello, descarga el archivo `MCA_Selector_Setup.exe`.

Además, necesitas tener los archivos de tu mundo en tu ordenador. El mundo se puede descargar vía FTP. Si no estás familiarizado con el uso de FTP, te recomendamos echar un vistazo a nuestra [guía de Acceso vía FTP](gameserver-ftpaccess.md). Descarga el directorio `world` desde el directorio del servidor de juegos.

## Cargar mundo

Una vez que tengas la herramienta y el mundo descargados, ya puedes importar el mundo en la herramienta. Para ello, haz clic en la navegación de la herramienta en `File -> Open World`. Después de esto, deberías ver tu mundo como en nuestro ejemplo.

:::info
Dependiendo de las coordenadas, puede que primero tengas que hacer zoom out con el ratón para encontrar el área relevante.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/eGY45mKdd4ZEwW4/download)

## Eliminar chunk(s)

Puedes seleccionar cajas individuales (chunks) con un clic del ratón. Busca y selecciona los chunks que te estén dando problemas y que quieras borrar. Luego haz clic en `Selection -> Delete selected Chunks` en la navegación.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDCAEX3iWyjjXQm/download)

Como resultado, los chunks seleccionados se habrán eliminado y ahora puedes subir el mundo a tu servidor de juegos nuevamente vía FTP.

## Conclusión

¡Felicidades, has eliminado con éxito los chunks defectuosos y deberías poder jugar en este mundo sin problemas otra vez! Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, que está disponible todos los días para echarte una mano 🙂.

<InlineVoucher />