---
id: redm-installresources
title: "RedM: Instalación de recursos"
description: "Descubre cómo mejorar tu servidor RedM con recursos populares para proyectos grandes como servidores de roleplay → Aprende más ahora"
sidebar_label: Instalar recursos
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los recursos se pueden usar para ampliar tu servidor RedM con funciones adicionales. Esto es especialmente interesante si planeas iniciar proyectos grandes, como un servidor de roleplay o similar. Algo así no se puede hacer sin estos recursos adicionales.

RedM y su comunidad ofrecen una gran variedad de recursos. Un resumen de los recursos más populares lo puedes encontrar en el foro de Cfx.re: https://forum.cfx.re/c/redm-development/54



<InlineVoucher />

## Preparación

La instalación de recursos se realiza vía FTP. Necesitarás un cliente FTP para subir archivos a tu servidor. Si no estás familiarizado con el uso de FTP, te recomendamos echar un vistazo a la [guía de acceso FTP](gameserver-ftpaccess.md).

Los recursos descargados suelen venir en formato comprimido. Esto significa que tienes que descomprimir los archivos con un programa como 7Zip, WinRAR o WinZip. La carpeta del recurso descomprimido debería contener al menos los siguientes archivos: `__resource.lua` o `fxmanifest.lua` junto con los archivos de script asociados.

:::info
En caso de que estos archivos no estén presentes, puede que se encuentren dentro de un subdirectorio dentro del recurso.
:::

## Instalación

### Subir archivos

Ahora debes subir los archivos descomprimidos como una carpeta individual (si no lo hiciste ya). Tu carpeta debe subirse al directorio `resource` del servidor. La estructura de directorios suele ser: `/gXXXXXX/redm-txadmin/TU_FRAMEWORK/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/ofMKfG6rfewsb3o/preview)



Algunos recursos trabajan con bases de datos y por eso suelen incluir archivos SQL que deben importarse a la base de datos. Si es tu caso, visita nuestra [guía de importación de archivos SQL](redm-sql-file-import.md) para aprender cómo hacerlo.

### Activación

Para asegurarte de que el recurso instalado se cargue al iniciar el servidor, primero debes activarlo en el archivo `server.cfg` de tu servidor. La activación se hace con el comando `start [nombre del recurso]`.

Por ejemplo, si subiste el recurso en una carpeta llamada `eup-ui`, el comando de inicio en la configuración debe ser así:
```
start eup-ui
```

Puedes acceder a tu archivo `server.cfg` a través del Editor CFG en la interfaz de txAdmin.

:::info
Asegúrate de que el nombre de la carpeta que creaste sea exactamente igual al que usas en el comando start, incluyendo mayúsculas y minúsculas.
:::



## Conclusión
Finalmente, puedes reiniciar tu servidor. El recurso instalado debería cargarse la próxima vez que el servidor arranque por completo. ¡Has instalado con éxito un recurso en tu servidor de juegos RedM! Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte. 🙂

<InlineVoucher />