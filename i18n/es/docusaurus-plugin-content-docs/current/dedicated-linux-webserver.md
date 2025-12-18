---
id: dedicated-linux-webserver
title: "Servidor dedicado: Instalación de Nginx y Apache webserver"
description: "Descubre cómo configurar y montar servidores web Nginx o Apache para alojar tu sitio web de forma eficiente → Aprende más ahora"
sidebar_label: Instalar servidor web
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Nginx y Apache son servicios web populares que se usan para entregar páginas web al navegador del usuario. A continuación te mostramos cómo instalar uno de estos servicios en tu sistema. 



## Preparación

Antes de comenzar con la instalación real de un servidor web, es necesario asegurarse de que el sistema esté actualizado. Para ello, nos conectamos al servidor vía SSH. Si no sabes qué es SSH ni cómo usarlo, echa un vistazo a esta guía: [Acceso inicial (SSH)](vserver-linux-ssh.md).

Una vez dentro, puedes actualizar el sistema con el siguiente comando según tu sistema operativo:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper update

// Fedora
sudo dnf upgrade --refresh
```



## Instalación

Una vez completada la preparación, ya puedes comenzar con la instalación del servidor web. Dependiendo del sistema operativo y del servidor web, debes ejecutar los siguientes comandos:



### Apache

```
// Debian
sudo apt install apache2

// Ubuntu
sudo apt install apache2

// CentOS
sudo yum install httpd

// OpenSUSE
sudo zypper install httpd

// Fedora
sudo dnf install httpd
```

Después de instalar el servidor web, puedes subir los archivos de tu sitio web. Conéctate a tu servidor vía FTP/SFTP, navega hasta el siguiente directorio y sube los archivos.

```
/var/www/html/
```



### Nginx

```
// Debian
sudo apt install nginx

// Ubuntu
sudo apt install nginx

// CentOS
sudo yum install nginx

// OpenSUSE
sudo zypper install nginx

// Fedora
sudo dnf install nginx
```

Después de instalar el servidor web, puedes subir los archivos de tu sitio web. Conéctate a tu servidor vía FTP/SFTP, navega hasta el siguiente directorio y sube los archivos.

```
/usr/share/nginx/html
```



## Verificación de versión

Una vez terminada la instalación, puedes usar los comandos `apache2 -v` (Apache) y `nginx -v` (Nginx) para comprobar si la instalación fue exitosa. La salida debería ser similar a la siguiente:



### Apache

```
apache2 -v
Server version: Apache/2.4.41 (Ubuntu)
Server built:   XXXX-XX-XXTXX:XX:XX
```



### Nginx

```
nginx -V
nginx version: nginx/1.2.3
...
```

Si obtienes alguna de estas salidas, entonces el servidor web se ha instalado correctamente. 


