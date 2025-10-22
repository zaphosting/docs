---
id: gameserver-ftpaccess
title: "Servidor de juegos: Acceso vía FTP para gestionar archivos del servidor"
description: "Descubre cómo acceder y gestionar tus archivos del servidor de forma segura usando FTP para transferencias sin complicaciones y control total → Aprende más ahora"
sidebar_label: Acceso FTP
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El FTP (Protocolo de Transferencia de Archivos) es un protocolo de red diseñado para transferir archivos a través de una red TCP/IP. Este protocolo fue desarrollado para facilitar el intercambio de archivos entre sistemas. Con FTP, puedes acceder y gestionar los archivos de tu servidor, ya sea para subir, descargar o editar activamente los archivos.

<InlineVoucher />

## Preparación

Para gestionar tus archivos usando el protocolo FTP, necesitas un cliente FTP adecuado. Hay una gran variedad de clientes FTP disponibles. Sin embargo, dos de los clientes FTP más conocidos y consolidados son **FileZilla** y **WinSCP**.

| Cliente FTP | Descarga                                                     |
| ---------- | ------------------------------------------------------------ |
| FileZilla  | [Sitio Oficial](https://filezilla-project.org/download.php?platform=win64) |
| WinSCP     | [Sitio Oficial](https://winscp.net/eng/downloads.php)        |



## Obtener datos FTP

Para acceder a tu servidor de juegos vía FTP, necesitarás las credenciales correspondientes. Puedes encontrar estos datos en la sección **FTP Browser** dentro de la administración de tu servidor de juegos.

Simplemente introduce la **dirección IP (servidor FTP)**, el **usuario** y la **contraseña** para establecer la conexión. Estas credenciales están listadas en la página **FTP Browser**. El puerto siempre es **21** y normalmente se configura automáticamente.

![img](https://screensaver01.zap-hosting.com/index.php/s/6FTFDwyBQZ792Fd/download)



## FileZilla

### Conexión

Puedes establecer la conexión usando la función Quickconnect o yendo a **Archivo -> Gestor de sitios**. Introduce las **credenciales FTP** de tu servidor y luego haz clic en **Conectar**.

![](https://screensaver01.zap-hosting.com/index.php/s/wxSSFoW3GTXJdLK/preview)

:::info
Asegúrate de detener el servidor y actualizar los permisos FTP antes de acceder a los archivos del servidor. De lo contrario, pueden aparecer mensajes de error como "Permiso denegado" o "Acceso denegado".
:::

### Gestión de archivos

Como mencionamos antes, puedes usar el cliente FTP para subir, descargar y editar archivos en tu servidor. El cliente FTP está dividido en dos partes. La mitad izquierda representa tu cliente (ordenador) y la mitad derecha representa tu servidor. Puedes navegar por ambos directorios, tanto a nivel local como en el servidor.

La gestión se realiza haciendo clic derecho sobre el archivo o carpeta correspondiente. Dependiendo de lo que quieras hacer, puedes subir, descargar, editar, renombrar o mover archivos o carpetas.

![](https://screensaver01.zap-hosting.com/index.php/s/qizoBD5JnHBRkJc/preview)

:::info
Si tienes varios servidores de juegos, primero debes navegar al directorio correcto del servidor de juegos.
:::



### Problemas comunes y soluciones

#### Error "530 Login incorrecto"
Si este error aparece al intentar conectar, significa que las credenciales son incorrectas. Revisa que todos los campos estén completos y sean correctos.

#### Error "Transfer connection interrupted"
Si este error ocurre durante la conexión o transferencia, puedes intentar cambiar el modo de transferencia de *Pasivo* a *Activo*. Los siguientes pasos muestran cómo cambiar esta configuración en FileZilla.




## WinSCP

### Conexión
Puedes establecer la conexión usando Quickconnect o en la parte superior mediante **Nueva sesión**. Introduce las credenciales FTP de tu servidor y luego haz clic en **Conectar**.

![](https://screensaver01.zap-hosting.com/index.php/s/KNnkJsnETTFqZpD/preview)


:::info
Asegúrate de detener el servidor y actualizar los permisos FTP antes de acceder a los archivos del servidor. De lo contrario, pueden aparecer mensajes de error como "Permiso denegado" o "Acceso denegado".
:::


### Gestión de archivos

Como mencionamos antes, puedes usar el cliente FTP para subir, descargar y editar archivos en tu servidor. El cliente FTP está dividido en dos partes. La mitad izquierda representa tu cliente (ordenador) y la mitad derecha representa tu servidor. Puedes navegar por ambos directorios, tanto a nivel local como en el servidor.

La gestión se realiza haciendo clic derecho sobre el archivo o carpeta correspondiente. Dependiendo de lo que quieras hacer, puedes subir, descargar, editar, renombrar o mover archivos o carpetas.

![](https://screensaver01.zap-hosting.com/index.php/s/dAYiFwWQAipgTqW/preview)


### Problemas comunes y soluciones

#### Error "530 Login incorrecto"
Si este error aparece al intentar conectar, significa que las credenciales son incorrectas. Revisa que todos los campos estén completos y sean correctos.

<InlineVoucher />