---
id: fivem-changeloadingscreen
title: "FiveM: Instalación de Pantalla de Carga Personalizada"
description: "Descubre cómo personalizar tu pantalla de carga en FiveM para una experiencia única y mejora los visuales de tu servidor → Aprende más ahora"
sidebar_label: Instalar Pantalla de Carga Personalizada
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

¿Quieres usar tu propia pantalla de carga personalizada en lugar de la pantalla de carga por defecto de FiveM? Aquí te explicamos cómo hacerlo y qué pasos debes seguir.

<InlineVoucher />



## Preparación

Para instalar tu propia pantalla de carga, primero necesitas encontrar un recurso adecuado. Puedes encontrar una gran selección de recursos en la página oficial de [Cfx.re](https://forum.cfx.re/c/releases/7). Luego, descarga el recurso y descomprímelo en tu ordenador.

![img](https://screensaver01.zap-hosting.com/index.php/s/zZKWWMWCJPqKonj/preview)



## Instalación

La instalación de la pantalla de carga se realiza vía FTP. Para ello, conéctate a tu servidor de juegos mediante FTP. Si aún no sabes cómo usar FTP, echa un vistazo a nuestra [guía de acceso FTP](gameserver-ftpaccess.md).

Una vez conectado por FTP, navega hasta la carpeta de recursos. Dependiendo del framework que tengas instalado, encontrarás la carpeta de recursos en la siguiente estructura: `/gXXXXXX/fivem/TU_FRAMEWORK/resources`

Sube la carpeta del recurso que descargaste y descomprimiste en tu ordenador a esta ubicación.

![img](https://screensaver01.zap-hosting.com/index.php/s/qkYBKoMox94EEWK/download)



Ahora que el recurso de la pantalla de carga se ha subido correctamente, aún necesitas añadirlo al archivo de configuración del servidor `server.cfg`. Para ello, accede a la interfaz de txAdmin y abre el Editor CFG.

Luego añade tu recurso a la configuración. Puedes hacerlo con el comando `start nombredelrecurso`. En este ejemplo, sería `start loadingscreen`. Guarda los cambios y reinicia el servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/gxniiKj3HmLGeEE/preview)







## Conclusión

Si has seguido todos los pasos, deberías ver tu nueva pantalla de carga tras el próximo reinicio de tu servidor. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />