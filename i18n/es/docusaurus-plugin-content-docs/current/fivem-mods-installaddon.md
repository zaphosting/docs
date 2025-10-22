---
id: fivem-mods-installaddon
title: "FiveM: Instalar Addon Carmods en el Servidor"
description: "Descubre cómo descargar y convertir mods de coches para FiveM fácilmente y mejora tu experiencia de juego con esta guía paso a paso → Aprende más ahora"
sidebar_label: Instalar Addon Carmods
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Conéctate vía FTP

Primero debes conectarte a tu servidor vía FTP, puedes usar nuestro [Acceso vía FTP](gameserver-ftpaccess.md).

## Preparación

Para este tutorial usaremos la herramienta [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest), que simplifica mucho el proceso. Para ello descargamos las carpetas "NConvert.zip" y "rpf2fivem.zip" desde la sección "Releases":

![](https://screensaver01.zap-hosting.com/index.php/s/7o2JCm3SdMz5Gga/preview)

Ahora primero descomprimimos rpf2fivem en una carpeta vacía:

![](https://screensaver01.zap-hosting.com/index.php/s/czBs5E82SpPa2Px/preview)

Luego abrimos el archivo zip de NConvert y copiamos la carpeta "NConvert" dentro de la misma carpeta:

![](https://screensaver01.zap-hosting.com/index.php/s/8qNGTCMLjgZNTbK/preview)

¡Ahora podemos abrir el `rpf2fivem.exe`!


## Descargar Mods

Para instalar mods con rpf2fivem tenemos que añadir enlaces directos, por ejemplo desde gta5-mods.com. Aquí simplemente elegimos el carmod que queremos y hacemos clic en "Download".

Ahora solo tenemos que hacer clic derecho en el botón de descarga y seleccionar "Copiar dirección de enlace", que luego pegamos en la parte superior izquierda de rpf2fivem:

![](https://screensaver01.zap-hosting.com/index.php/s/T6ksM4qmfodiy8s/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/cdNmSztB69TN74T/preview)

Aquí podemos escribir nuestro propio nombre para el recurso y pulsar "Add to queue".

Si quieres descargar más mods, simplemente los añades igual, se pueden instalar varios carmods al mismo tiempo:

## Convertir Mods

Ahora que tenemos la lista de mods, solo tenemos que pulsar el botón "Start".

:::info
Nota: la casilla 'compress/downsize textures' siempre debe estar activada para evitar errores de texturas en los Carmods dentro de FiveM.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/BrFZWJkMaryLrzg/preview)

Ahora los carmods se descargan y preparan para FiveM.

## Subir recursos

Cuando rpf2fivem termine, los carmods estarán en la carpeta "rpf2fivem":

![](https://screensaver01.zap-hosting.com/index.php/s/yPCK5nwFa9Xscif/preview)

Ahora simplemente podemos subirlos vía [Instalar recursos](fivem-installresources.md). También se crea un `servercfg.txt` en la carpeta rpf2fivem con las entradas para añadir los carmods directamente en el server.cfg, solo tienes que copiar esas líneas en tu server.cfg.


¡Listo! Los Carmods ya están instalados en tu servidor, después de reiniciarlo podrás usarlos.

<InlineVoucher />