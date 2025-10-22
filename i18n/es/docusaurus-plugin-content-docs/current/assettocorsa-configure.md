---
id: assettocorsa-configure
title: "Assetto Corsa: Configura tu servidor"
description: "Descubre cómo configurar tu servidor de juegos Assetto Corsa con mapas y coches personalizados para una experiencia de juego óptima → Aprende más ahora"
sidebar_label: Configurar Servidor
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Conéctate al FTP

Antes de poder configurar el servidor, debes configurar el [Acceso vía FTP](gameserver-ftpaccess.md):

![](https://screensaver01.zap-hosting.com/index.php/s/GdzeM4wyAGtGk8e/preview)

Una vez configurado, ya puedes conectarte y abrir la carpeta del servidor:

![](https://screensaver01.zap-hosting.com/index.php/s/dkSSLWF5QGGf4yR/preview)


## Preparación

Primero abrimos la carpeta de Assetto Corsa, para eso abre Steam y haz clic derecho en "Assetto Corsa" en la lista de juegos.

Ahora abrimos "Archivos locales" para acceder a los archivos locales del juego:

![](https://screensaver01.zap-hosting.com/index.php/s/XKBgdiNbZ5AXtia/preview)

Luego abrimos la carpeta "server", ahí encontrarás un archivo llamado "acServerManager", ábrelo.

## Configurar Mapa

Ahora estamos en la interfaz del "AC Server Manager", con esta herramienta podemos crear y gestionar configuraciones del servidor. Primero creamos una configuración nueva.

![](https://screensaver01.zap-hosting.com/index.php/s/Z37toTgBHDmf54n/preview)

Ahora podemos configurar nuestro servidor, en nuestro caso solo queremos editar las pistas y coches, para eso abrimos la pestaña "Tracks".

Aquí podemos hacer clic en nuestro mapa preferido, arriba podemos ajustar la cantidad de coches en la pista.

![](https://screensaver01.zap-hosting.com/index.php/s/Hr9AMt9SHyas4CN/preview)

:::info
Asegúrate de no especificar más coches que los slots disponibles en tu servidor, si no, el servidor no arrancará.
:::

## Configurar Coches

Ahora cambiamos a la pestaña "Cars / Entry List", aquí podemos añadir nuevos coches:


Para activar coches, la casilla a la izquierda debe estar marcada.

![](https://screensaver01.zap-hosting.com/index.php/s/4w643p56GLXK9cP/preview)

En el centro puedes ver los coches que pueden colocarse en la parrilla, aquí elegimos los coches con los colores que aparecerán en la parrilla:

![](https://screensaver01.zap-hosting.com/index.php/s/T5SfpsdAPxfMwnY/preview)

:::info
Para seleccionar varios coches, puedes marcar varias casillas para añadir diferentes coches en el centro.

Recuerda que todos los slots de coches deben estar llenos y no superar la cantidad de slots disponibles.

![](https://screensaver01.zap-hosting.com/index.php/s/FTeJX3BJipBRFQP/preview)
:::

## Subir Configuración

Ahora podemos guardar la configuración con el botón "Save" y exportarla con el botón "Export":

![](https://screensaver01.zap-hosting.com/index.php/s/b7co7wfcegmwPYd/preview)

Aquí seleccionamos una carpeta libre donde se guardarán los datos de configuración.

Ahora puedes cerrar el AC Server Manager y abrir la carpeta donde se exportaron las configuraciones.

![](https://screensaver01.zap-hosting.com/index.php/s/4Nysjo24BAAGbqe/preview)

Estas configuraciones ahora pueden copiarse con Drag&Drop a la carpeta "cfg" de tu servidor de juegos.

![](https://screensaver01.zap-hosting.com/index.php/s/YKHtnDMSqBgssDc/preview)

El servidor ya puede arrancar con la nueva configuración.

<InlineVoucher />