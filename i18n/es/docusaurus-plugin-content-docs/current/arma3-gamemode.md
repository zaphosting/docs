---
id: arma3-gamemode
title: "Arma 3: Cambiar modo de juego"
description: "Descubre cómo configurar y cargar modos de juego en tu servidor de Arma 3 para una experiencia personalizada → Aprende más ahora"
sidebar_label: Cambiar modo de juego
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Configura el modo de juego

Para cambiar el modo de juego en tu servidor de Arma 3, tienes que subir el archivo de misión correspondiente al modo de juego a tu servidor.

Actualmente ofrecemos los siguientes archivos de misión sin que tengas que subirlos tú:

- Arma 3 Wasteland

Estos ya están en tu directorio **mpmissions**.

<InlineVoucher />

## Sube el archivo de misión

Para subir el archivo de misión, primero tienes que conectarte a tu servidor vía FTP: [Acceso vía FTP](gameserver-ftpaccess.md).  
Ahí subes el archivo de misión correspondiente a tu directorio **mpmissions**, que encontrarás en **/gxxxxxx/arma3/**.  
En este ejemplo subimos el modo de juego **King of the Hill** a nuestro servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/rDS7DsEfQskZ9Y3/preview)


## Cargar el archivo de misión en el servidor

Para cargar el archivo de misión desde el servidor, ve a la interfaz de tu servidor de Arma 3 y haz clic en la pestaña **Configs** en el menú de la izquierda:

![](https://screensaver01.zap-hosting.com/index.php/s/dxDWHiFJy5e4qYq/preview)

Ahí editas el archivo **server.cfg** y escribes el nombre de tu archivo de misión como se muestra en la imagen:

![](https://screensaver01.zap-hosting.com/index.php/s/7JQED8wC9WGBdYB/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/7jtRK3YRD7wWiij/preview)

Después, haz clic en **Guardar** y podrás iniciar tu servidor. El nuevo archivo de misión se cargará.

<InlineVoucher />