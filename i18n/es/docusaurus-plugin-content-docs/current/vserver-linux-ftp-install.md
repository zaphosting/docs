---
id: vserver-linux-ftp-install
title: "VPS: Instalación de un servidor FTP"
description: "Descubre cómo configurar y gestionar un servidor FTP seguro en Linux con FileZilla Server para transferir archivos de forma eficiente → Aprende más ahora"
sidebar_label: Instalar servidor FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El **FTP (Protocolo de Transferencia de Archivos)** es un protocolo de red utilizado para transferir archivos a través de una red TCP/IP. El protocolo fue desarrollado para permitir el intercambio fácil de archivos entre sistemas. Con **FileZilla Server** es posible montar un servidor FTP en un sistema operativo Linux. FileZilla Server es fácil de instalar y configurar, y ofrece numerosas funciones como la posibilidad de crear cuentas de usuario, gestionar permisos de acceso y transferir archivos. En esta guía, exploraremos el proceso de instalación y configuración del servicio **FileZilla Server** en un servidor Linux.

<InlineVoucher />

## Instalación

Para añadir un usuario FTP, primero necesitas instalar el servidor FTP. Para ello, conéctate una vez al servidor vía SSH (Putty).

Para instalar el servidor FTP ahora, introduce el siguiente comando **apt-get install proftpd**. Debes confirmar la solicitud con una **Y** y pulsar Enter:

![](https://screensaver01.zap-hosting.com/index.php/s/seKtY9GBELG78in/preview)

Ahora tenemos que ajustar la configuración. Para ello, escribe **nano /etc/proftpd/proftpd.conf** y confirma. Después se abrirá el archivo de configuración en el editor Nano:

![](https://screensaver01.zap-hosting.com/index.php/s/J5kS2bJFjDyLpCZ/preview)

Se deben añadir las siguientes líneas: 

![](https://screensaver01.zap-hosting.com/index.php/s/TZoDZpiBQi5Yb5L/preview)

Ahora hay que reiniciar el servidor FTP para que los cambios se apliquen. Esto se hace con el siguiente comando: **service proftpd restart**

## Añadir usuarios

Para crear un nuevo usuario FTP, primero tenemos que crear un grupo FTP. Lo hacemos con el comando **addgroup ftpuser**. Esto se verá así: 

![](https://screensaver01.zap-hosting.com/index.php/s/M2jnE6mWqQLKkme/preview)

Ahora podemos añadir nuestro primer usuario FTP con los comandos: **adduser benutzerftp -shell /bin/false -home /var/www** y luego **adduser benutzerftp ftpuser**.

Ahora se nos pedirá establecer una contraseña: 

![](https://screensaver01.zap-hosting.com/index.php/s/LKsops7sKTr2jXt/preview)

Después tenemos que confirmar que los datos son correctos: 

![](https://screensaver01.zap-hosting.com/index.php/s/LWdMS2j7PnRQwnd/preview)

El último paso es asignar el nuevo usuario al grupo con **adduser benutzerftp ftpuser** :

![](https://screensaver01.zap-hosting.com/index.php/s/66fqTTttpM5BPkg/preview)

Ahora podemos conectarnos con la información que hemos configurado:

![](https://screensaver01.zap-hosting.com/index.php/s/ftccknJBSoC2pCH/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/zRsRHA3NWNCwcsj/preview)



## Conclusión

¡Enhorabuena, has instalado y configurado FTP con éxito! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!

<InlineVoucher />