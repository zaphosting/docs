---
id: assettocorsa-mods
title: "Assetto Corsa: Instalando mods en un servidor"
description: "Descubre cómo configurar y personalizar tu servidor de Assetto Corsa para una experiencia de juego óptima → Aprende más ahora"
sidebar_label: Instalar Mods
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Conectar al FTP

Antes de poder configurar el servidor, se debe configurar el [Acceso vía FTP](gameserver-ftpaccess.md):

![](https://screensaver01.zap-hosting.com/index.php/s/gcojCfR2L8Mt5gg/preview)

Una vez configurado, ya puedes conectarte y abrir la carpeta del servidor:

![](https://screensaver01.zap-hosting.com/index.php/s/eSDXfR8HS6eDC6g/preview)


## Preparación

Primero abrimos la carpeta de Assetto Corsa, para ello abre Steam y haz clic derecho en "Assetto Corsa" en la lista de juegos.

Ahora abrimos "Archivos locales" y accedemos a los archivos locales del juego:

![](https://screensaver01.zap-hosting.com/index.php/s/A8PqgJEGHnc72Xe/preview)

Luego abrimos la carpeta "server", ahí encontrarás un archivo llamado "acServerManager", ábrelo.



## Configurar Coches

Ahora cambiamos a la pestaña "Cars / Entry List", aquí podemos añadir nuevos coches:


Para activar coches, la casilla debe estar marcada a la izquierda

![](https://screensaver01.zap-hosting.com/index.php/s/3M7QKxcEEBEEKfw/preview)

En el centro puedes ver los coches que pueden colocarse en la parrilla, aquí elegimos los coches con los colores que estarán en la parrilla:

![](https://screensaver01.zap-hosting.com/index.php/s/7WbYdxJk8TJEDc3/preview)

:::info
Para seleccionar varios coches, puedes marcar varias casillas para añadir diferentes coches en el centro.

Ten en cuenta que todos los slots de coches deben estar llenos y no se debe superar la cantidad de slots disponibles.

![](https://screensaver01.zap-hosting.com/index.php/s/ogiaNKsGJZjWK2p/preview)
:::


## Subir Configuración

Ahora podemos guardar la configuración con el botón "Save" y exportarla con el botón "Export":

![](https://screensaver01.zap-hosting.com/index.php/s/DcJLfNGYtpmRjSz/preview)

Aquí seleccionamos una carpeta libre donde se almacenarán los datos de configuración.

Luego cerramos el AC Server Manager y abrimos la carpeta donde se exportaron las configuraciones.

![](https://screensaver01.zap-hosting.com/index.php/s/cRYG4yspGbzpnHH/preview)

Estas configuraciones ahora pueden copiarse mediante Drag&Drop a la carpeta "cfg" de tu servidor de juegos.

![](https://screensaver01.zap-hosting.com/index.php/s/56pgFoDj9KQyBX2/preview)



## Subir Contenido del Servidor

Ahora tenemos que generar el contenido para el servidor, para que los mods de coches y mapas se carguen en el servidor. Para ello primero hacemos clic en "Update Server Content" abajo.

![](https://screensaver01.zap-hosting.com/index.php/s/dRg5xoxcrNcCK9r/preview)

Este proceso puede tardar unos minutos, todos los mapas y coches se convierten en archivos para el servidor.

:::info
Después de este proceso puede aparecer un mensaje "Could not update", esto no es un problema.
:::

Ahora abrimos la carpeta "Server", donde está el AcServerManager, ahí hay una carpeta "Content" que subiremos a nuestro servidor de Assetto Corsa mediante Drag&Drop, sobrescribiendo la antigua carpeta "Content":

![](https://screensaver01.zap-hosting.com/index.php/s/dfDYjZjADkpfdDc/preview)

Después de subir el contenido, los mods de coches estarán instalados y activos tras reiniciar el servidor.

<InlineVoucher />