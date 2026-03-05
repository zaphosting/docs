---
id: csgo-fastdl
title: "CS:GO: Configurar FastDL"
description: "Descubre cómo optimizar la entrega de contenido del juego con FastDL para acelerar las descargas y reducir la carga del servidor para los jugadores de CS:GO → Aprende más ahora"
sidebar_label: FastDL
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introducción

FastDL (Fast Download) es un método para entregar contenido personalizado como mapas, sonidos o modelos a través de un servidor web externo en lugar del servidor de juegos. Esto mejora la velocidad de descarga para los jugadores y reduce la carga en el servidor.

Para usar FastDL, necesitas acceso a un servidor web HTTP público. Una opción ideal para esto es un **paquete de hosting web de ZAP-Hosting**, que es perfecto para entregar contenido de juegos. Esta guía explica cómo configurar FastDL usando el hosting web de ZAP.

<InlineVoucher />

## Requisitos

Necesitarás un servidor de juegos CS:GO activo alojado en ZAP-Hosting y un paquete adicional de hosting web. Debe estar disponible acceso FTP o acceso al Administrador de Archivos tanto para el servidor de juegos como para el hosting web.

En el lado del juego, los archivos que quieres distribuir (como mapas `.bsp`, archivos de sonido o modelos) deben estar organizados correctamente. La misma estructura será necesaria en el hosting web para permitir una entrega FastDL exitosa.

## Preparando el Hosting Web

Para gestionar y subir tus archivos FastDL, recomendamos usar el **Administrador de Archivos** que ofrece la interfaz del hosting web de ZAP. Puedes acceder directamente desde el panel web en **Hosting web > Administrador de Archivos**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

En el directorio raíz de tu hosting web, crea una carpeta llamada `fastdl`. Dentro de esta carpeta, crea subcarpetas como `maps`, `sound` o `models` según el contenido que planees servir. La estructura de carpetas debe reflejar exactamente la que usa tu servidor de juegos CS:GO.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Antes de subir tus archivos, asegúrate de que estén **comprimidos en formato `.bz2`** (bzip2). La mayoría de los motores basados en Source requieren que los archivos se entreguen en este formato. Por ejemplo, un archivo de mapa `custom_map.bsp` debe subirse como `custom_map.bsp.bz2`.

:::info Comprimir con 7-Zip
Para preparar tus archivos para FastDL, puedes usar herramientas como **7-Zip** para comprimirlos en formato `.bz2`. Simplemente haz clic derecho sobre el archivo, elige **7-Zip > Añadir al archivo...**, selecciona `bzip2` como formato de archivo y confirma.
:::

Después de subir los archivos comprimidos en las carpetas correspondientes, asegúrate de que **todos los directorios y archivos tengan permisos de lectura correctos** para que puedan ser accedidos públicamente. El Administrador de Archivos te permite ajustar los permisos de carpetas y archivos.

Una vez que tus archivos estén subidos y con permisos correctos, el contenido FastDL estará disponible a través de la siguiente URL pública:

```
https://[tu-nombre-de-dominio].zap.cloud/fastdl/
```

Puedes probar esto abriendo la URL en tu navegador y verificando si los archivos son accesibles.

## Configurar el Servidor de Juegos

En la interfaz de ZAP, dentro de la administración del servidor de juegos, abre el archivo `server.cfg` desde la página de **Configs** e inserta las siguientes líneas:

```cfg
sv_downloadurl "https://[tu-nombre-de-dominio].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Asegúrate de que la URL FastDL coincida exactamente con la estructura usada en tu hosting web. Después de guardar el archivo, reinicia tu servidor de juegos para aplicar la configuración.

## Conclusión

FastDL se puede configurar rápida y fácilmente usando tu propio hosting web de ZAP. Esto permite una entrega rápida y eficiente de contenido personalizado y mejora la experiencia para todos los jugadores de tu servidor de juegos CS:GO.

Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />