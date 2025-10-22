---
id: fivem-installresources
title: "FiveM: Instalación de recursos"
description: "Descubre cómo mejorar tu servidor de juegos FiveM con recursos populares para proyectos grandes como servidores de roleplay → Aprende más ahora"
sidebar_label: Instalar recursos
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/fivem-resources.json';

## Introducción

Los recursos se pueden usar para ampliar tu servidor de juegos FiveM con funciones adicionales. Esto es especialmente interesante si planeas iniciar proyectos grandes, como un servidor de roleplay o similar. Algo así no se puede hacer sin estos recursos adicionales.

FiveM y su comunidad ofrecen una gran variedad de recursos. Un resumen de los recursos más populares lo puedes encontrar en el foro de Cfx.re: https://forum.cfx.re/c/development/releases/7



<InlineVoucher />

## Preparación

La instalación de recursos se realiza vía FTP. Necesitarás un cliente FTP para subir archivos a tu servidor. Si no estás familiarizado con el uso de FTP, te recomendamos echar un vistazo a la [guía de acceso FTP](gameserver-ftpaccess.md).

Los recursos descargados suelen venir en formato comprimido. Esto significa que tienes que descomprimir los archivos con un programa como 7Zip, Winrar o WinZip. La carpeta del recurso descomprimido debería contener al menos los siguientes archivos: `__resource.lua` o `fxmanifest.lua` junto con los archivos de script asociados.

:::info
Si estos archivos no están presentes, puede que se encuentren dentro de un subdirectorio dentro del recurso.
:::

## Instalación

### Subir archivos

Ahora debes subir los archivos previamente descomprimidos como una carpeta individual (si no lo hiciste ya). Tu carpeta debe subirse al directorio `resource` del servidor. La estructura típica del directorio es: `/gXXXXXX/fivem/TU_PLANTILLA/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/9ZEX32BSrwGDjEc/preview)



Algunos recursos trabajan con bases de datos y por eso suelen incluir archivos SQL que deben importarse a la base de datos. Si es tu caso, visita nuestra [guía de importación de archivos SQL](fivem-sql-file-import.md) para aprender cómo hacerlo.

### Activación

Para asegurarte de que el recurso instalado se cargue al iniciar el servidor, primero debes activarlo en el archivo `server.cfg` de tu servidor. La activación se hace con el comando `start [nombre del recurso]`.

Por ejemplo, si subiste el recurso en una carpeta llamada `eup-ui`, el comando de inicio en la configuración debe verse así:
```
start eup-ui
```

Puedes acceder a tu archivo `server.cfg` a través del Editor CFG en la interfaz de txAdmin.

:::info
Asegúrate de que el nombre de la carpeta que creaste sea exactamente igual al que uses en el comando start, incluyendo mayúsculas y minúsculas.
:::


## Recursos Populares

¿Sigues buscando los recursos perfectos para tu servidor? Navega por nuestra lista cuidadosamente seleccionada de los recursos más populares y recomendados para mejorar tu experiencia de juego y darle a tu servidor ese toque final que se merece. Inspírate y encuentra justo las adiciones que encajan con tu proyecto.

<SearchableItemList items={items} />


## Conclusión
Finalmente, puedes reiniciar tu servidor. El recurso instalado debería cargarse la próxima vez que tu servidor arranque completamente. ¡Has instalado con éxito un recurso en tu servidor de juegos FiveM! Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte. 🙂

<InlineVoucher />