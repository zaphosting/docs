---
id: dedicated-linux-ftp-install
title: "Servidor dedicado: Instalación de un servidor FTP"
description: "Descubre cómo configurar y gestionar un servidor FTP seguro en Linux con FileZilla Server para facilitar la transferencia de archivos y el acceso de usuarios → Aprende más ahora"
sidebar_label: Instalar servidor FTP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El **FTP (Protocolo de Transferencia de Archivos)** es un protocolo de red usado para transferir archivos a través de una red TCP/IP. El protocolo fue desarrollado para permitir el intercambio sencillo de archivos entre sistemas. Con **FileZilla Server** es posible montar un servidor FTP en un sistema operativo Linux. FileZilla Server es fácil de instalar y configurar, y ofrece muchas funciones como la posibilidad de crear cuentas de usuario, gestionar permisos de acceso y transferir archivos. En esta guía, exploraremos el proceso de instalación y configuración del servicio **FileZilla Server** en un servidor Linux.

<InlineVoucher />

## ¿Cómo instalo el servidor FTP para añadir un usuario?

Para añadir un usuario FTP, primero tienes que instalar el servidor FTP. Para ello, conéctate una vez al servidor vía SSH (Putty).

Para instalar el servidor FTP ahora, introduce el siguiente comando: **apt-get install proftpd**. Debes confirmar la petición con una **Y** y pulsar Enter:

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

Ahora tenemos que ajustar la configuración. Para ello, escribe el siguiente comando: **nano /etc/proftpd/proftpd.conf** y confirma. Se abrirá el archivo de configuración en el editor Nano:

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

Debes añadir las siguientes líneas:

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

Ahora hay que reiniciar el servidor FTP para que los cambios se apliquen. Esto se hace con el comando: **service proftpd restart**

## ¿Cómo añado un usuario FTP?

Para crear un nuevo usuario FTP, primero tenemos que crear un grupo FTP. Lo hacemos con el comando **addgroup ftpuser**. Esto se verá así:

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

Ahora podemos añadir nuestro primer usuario FTP con los comandos: **adduser benutzerftp -shell /bin/false -home /var/www** y luego **adduser benutzerftp ftpuser**.

A continuación, se te pedirá que establezcas una contraseña:

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

Después debes confirmar que los datos son correctos:

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

El último paso es asignar el nuevo usuario al grupo con **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

Ahora ya podemos conectarnos con la información que hemos configurado:

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)


<InlineVoucher />