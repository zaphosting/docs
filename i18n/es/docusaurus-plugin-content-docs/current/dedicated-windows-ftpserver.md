---
id: dedicated-windows-ftpserver
title: "Configura FTP en un Servidor Windows - Aloja un Servicio Seguro de Transferencia de Archivos"
description: "Descubre cómo configurar y gestionar un servidor FTP FileZilla en Windows para transferencias seguras y control de acceso de usuarios → Aprende más ahora"
sidebar_label: Instalar FTP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El **FTP (Protocolo de Transferencia de Archivos)** es un protocolo de red usado para transferir archivos a través de una red TCP/IP. El protocolo fue desarrollado para facilitar el intercambio sencillo de archivos entre sistemas.

Con el **FileZilla Server** es posible montar un servidor FTP en un sistema operativo Windows. FileZilla Server es fácil de instalar y configurar, y ofrece muchas funciones como la creación de cuentas de usuario, gestión de permisos de acceso y transferencia de archivos.



## Preparación

### Descarga

Para configurar un servidor FTP necesitas el software correspondiente. FileZilla Server es una solución posible para sistemas operativos Windows. Puedes descargarlo aquí: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### Instalación

Una vez descargado el archivo de instalación, ejecútalo haciendo clic sobre él. Debería abrirse esta ventana: ![](https://screensaver01.zap-hosting.com/index.php/s/a2DEpaR5jD28X23/preview)



Ahí puedes seleccionar los paquetes a instalar. Sin embargo, basta con dejar los paquetes preseleccionados, así que simplemente haz clic en **Next** y luego elige la ruta de instalación:

![](https://screensaver01.zap-hosting.com/index.php/s/cN7K9Cte9tXFrF2/preview)

En este ejemplo, FileZilla Server se instalará en **C:\Program Files (x86)\FileZilla Server**. Pero puedes elegir la ruta que prefieras. Después de seleccionar la ruta, debes indicar cómo quieres que se instale y arranque el servidor FTP. También puedes definir el puerto y establecer una contraseña de administrador.



![](https://screensaver01.zap-hosting.com/index.php/s/WopFXcW3teFAyJK/preview)

Luego haz clic en **Next** y en el siguiente paso. Al final, pulsa **Install** para comenzar la instalación. Se abrirá la interfaz de administración del servidor FTP FileZilla. Haz clic en el botón **Connect to FileZilla FTP Server**.

Aparecerá una ventana con los campos Host, Port y Password. Puedes dejar los dos primeros campos tal cual y escribir la contraseña de administrador que definiste para el servidor FTP. Después, conecta haciendo clic en **Ok**.



## Configuración

### Creación de usuario

Para poder conectarte a tu servidor vía FTP, necesitas crear un usuario. 
Haz clic en **Server** en el menú superior y luego en **Configure**.

![](https://screensaver01.zap-hosting.com/index.php/s/C5WLC8Lp8CjTjQg/preview)

Después, en el menú Usuarios, añade un nuevo usuario haciendo clic en **Add**:

![](https://screensaver01.zap-hosting.com/index.php/s/dbCS5yJfwqry8Dq/preview)

En este ejemplo, el nombre de usuario es **YourUserName**. Por supuesto, puedes elegir el nombre que quieras.



### Contraseña y permisos

Con el usuario creado, ahora configura el acceso y los permisos. Activa el usuario y configura la contraseña en la categoría **General** bajo **Credentials**. Recomendamos usar contraseña por seguridad. Marca **Require a password to log in** y establece la contraseña que prefieras.

![](https://screensaver01.zap-hosting.com/index.php/s/z78wpcFbYEAJYeB/preview)

Para que el usuario tenga los permisos adecuados, debes definir a qué carpetas puede acceder haciendo clic en **Add** en puntos de montaje. Debes especificar una ruta virtual y una ruta nativa. En nuestro ejemplo, definimos que el disco C esté listado bajo \.

![](https://screensaver01.zap-hosting.com/index.php/s/iqQrjGByHpkBcJF/preview)

A la derecha está la opción **Permissions**, donde puedes ajustar los permisos para esa ruta. Si quieres que el usuario pueda leer y modificar archivos, lo ideal es ponerlo en **Read+Write**.

::: danger
Por seguridad, solo da acceso a usuarios a carpetas específicas.
:::

Aplica y confirma los cambios con el botón **Apply**.



## Excepciones en el Firewall de Windows

Para permitir la conexión a tu servidor FTP, debes habilitar el uso del servidor FTP en el firewall de Windows. Abre la configuración del firewall en **Panel de control\Sistema y seguridad\Firewall de Windows Defender** y haz clic en **Permitir una aplicación o característica a través del Firewall de Windows Defender**.
En la ventana siguiente selecciona la aplicación que quieres permitir:

![](https://screensaver01.zap-hosting.com/index.php/s/xHwQzCKokHTn424/preview)

En este ejemplo, la ruta es **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/Laz3HFb7GrLBY9w/preview)

Después cierra con **OK** y ya podrás conectar a tu servidor FTP.



## Conclusión

¡Felicidades, has instalado con éxito tu servidor FTP! Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, disponible todos los días para echarte una mano 🙂