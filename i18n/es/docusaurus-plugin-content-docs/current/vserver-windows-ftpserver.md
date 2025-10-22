---
id: vserver-windows-ftpserver
title: "VPS: Instalación de FTP"
description: "Descubre cómo configurar y gestionar un servidor FTP FileZilla en Windows para transferencias seguras y control de acceso de usuarios → Aprende más ahora"
sidebar_label: Instalar FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El **FTP (Protocolo de Transferencia de Archivos)** es un protocolo de red usado para transferir archivos a través de una red TCP/IP. Fue desarrollado para facilitar el intercambio sencillo de archivos entre sistemas.

Con el **FileZilla Server** es posible montar un servidor FTP en un sistema operativo Windows. FileZilla Server es fácil de instalar y configurar, y ofrece muchas funciones como la creación de cuentas de usuario, gestión de permisos de acceso y transferencia de archivos.
<InlineVoucher />


## Preparación

### Descarga

Para montar un servidor FTP necesitas el software adecuado. FileZilla Server es una solución posible para sistemas Windows. Puedes descargarlo aquí: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### Instalación

Una vez descargado el archivo de instalación, ejecútalo. Haz clic en el archivo descargado y debería abrirse esta ventana: ![](https://screensaver01.zap-hosting.com/index.php/s/Qi97fYbyoKDdsi3/preview)



Ahí puedes seleccionar los paquetes a instalar. Pero basta con dejar los paquetes preseleccionados, así que solo haz clic en **Next** y luego elige la ruta de instalación:

![](https://screensaver01.zap-hosting.com/index.php/s/fsMiKt9Zjas4Rme/preview)

En este ejemplo, FileZilla Server se instalará en **C:\Program Files (x86)\FileZilla Server**. Puedes elegir otra ruta si quieres. Después de elegir la ruta, debes decidir cómo quieres que se instale y arranque el servidor FTP. También puedes definir el puerto y establecer una contraseña de administrador.



![](https://screensaver01.zap-hosting.com/index.php/s/gCoGAcGnTtLQ2P6/preview)

Luego haz clic en **Next** y en el siguiente paso. Al final, pulsa en **Install** para comenzar la instalación. Se abrirá la interfaz de administración del servidor FTP FileZilla. Haz clic en el botón **Connect to FileZilla FTP Server**.

Aparecerá una ventana con los campos Host, Port y Password. Puedes dejar los dos primeros sin cambios y poner la contraseña de administrador que definiste. Luego conecta haciendo clic en **Ok**.



## Configuración

### Creación de usuario

Para poder conectarte a tu servidor vía FTP, necesitas crear un usuario. 
Haz clic en **Server** en el menú superior y luego en **Configure**.

![](https://screensaver01.zap-hosting.com/index.php/s/D7KHSrkGZEErEcH/preview)

Después, en el menú Users, añade un nuevo usuario haciendo clic en **Add**:

![](https://screensaver01.zap-hosting.com/index.php/s/mtdi4oRmR4ZDzyq/preview)

En este ejemplo, el nombre de usuario es **YourUserName**. Puedes poner el que quieras.



### Contraseña y permisos

Con el usuario creado, toca configurar el acceso y permisos. Activa el usuario y configura la contraseña en la categoría **General** bajo **Credentials**. Recomendamos usar contraseña por seguridad. Marca **Require a password to log in** y pon la contraseña que quieras.

![](https://screensaver01.zap-hosting.com/index.php/s/gwkkexqXgmfXc2q/preview)

Para dar permisos, indica qué carpetas puede acceder el usuario haciendo clic en **Add** en mount points. Debes definir una ruta virtual y una ruta real. En el ejemplo, el disco C se monta en \.

![](https://screensaver01.zap-hosting.com/index.php/s/LE46PteX7eAftjQ/preview)

A la derecha está la opción **Permissions**, donde configuras los derechos de acceso a esa ruta. Si quieres que el usuario pueda leer y modificar archivos, pon **Read+Write**.

::: danger
Por seguridad, solo da acceso a carpetas específicas.
:::

Aplica y confirma los cambios con el botón **Apply**.



## Excepciones en el Firewall de Windows

Para que puedas conectar con tu servidor FTP, debes permitir el uso del servidor FTP en el firewall de Windows. Abre la configuración del firewall en **Panel de control\Sistema y seguridad\Firewall de Windows Defender** y haz clic en **Permitir una aplicación o característica a través del Firewall de Windows Defender**.
En la ventana siguiente selecciona la aplicación que quieres permitir:

![](https://screensaver01.zap-hosting.com/index.php/s/aorQ7Y8gQJPSE8e/preview)

En este ejemplo la ruta es **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/wx7p5GykbQfx8B6/preview)

Luego cierra con **OK** y ya podrás conectar con tu servidor FTP.


## Conclusión

¡Felicidades! Has instalado y configurado con éxito el servidor FTP en tu VPS. Si tienes dudas o problemas, nuestro equipo de soporte está disponible todos los días para ayudarte.

<InlineVoucher />