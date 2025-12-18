---
id: fivem-change-servericon
title: "FiveM: Cambiar el icono para la lista de servidores"
description: "Descubre cómo personalizar tu servidor FiveM con un icono PNG único de 96x96 para mejorar la identidad de tu servidor → Aprende más ahora"
sidebar_label: Cambiar icono del servidor
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Quieres personalizar tu servidor y poner tu propio icono personalizado? ¡Es muy fácil! En esta guía aprenderás cómo preparar una imagen y configurarla como el nuevo icono personalizado de tu servidor.

<InlineVoucher />

## Preparación
Para poner un icono personalizado en tu servidor FiveM, primero debes preparar un archivo de imagen con un tamaño de 96x96 píxeles y en formato PNG (extensión `.png`). Recomendamos usar un programa de edición de imágenes como GIMP, o simplemente una herramienta online para redimensionar y convertir tu imagen actual. Una vez que tengas la imagen lista con esos parámetros, ya puedes subirla y configurarla en la configuración de tu servidor.

## Instalación

### Subir archivos

El siguiente paso es subir la imagen lista a tu servidor de juegos FiveM, lo cual se hace mediante FTP. Si no estás familiarizado con FTP, te recomendamos echar un vistazo a la [guía de acceso FTP](gameserver-ftpaccess.md).

Una vez conectado por FTP, navega a `gXXXXXX/fivem/TU_FRAMEWORK/` y sube ahí el archivo de tu icono del servidor. En este ejemplo se usa la plantilla por defecto de CFX. Sube el archivo a la carpeta de tu propio framework. Asegúrate de recordar el nombre del archivo.

![img](https://screensaver01.zap-hosting.com/index.php/s/BffobqB7CmdK2Wb/download)

### Activación

Para que el icono se cargue al iniciar el servidor, ahora debes configurarlo en el archivo `server.cfg` de tu servidor, bajo el parámetro `load_server_icon`. Por ejemplo, si nombraste tu icono `zaphosting96x96`, el comando sería:

```
# Cargando un icono de servidor (archivo PNG 96x96)
load_server_icon zaphosting96x96.png
```

:::info
Asegúrate de que el nombre del archivo de imagen en el comando coincida exactamente con el que subiste, incluyendo mayúsculas y minúsculas.
:::

## Conclusión

Si seguiste todos los pasos, tu nuevo icono de servidor debería mostrarse la próxima vez que reinicies el servidor. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />