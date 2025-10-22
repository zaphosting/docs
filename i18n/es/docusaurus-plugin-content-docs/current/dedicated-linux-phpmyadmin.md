---
id: dedicated-linux-phpmyadmin
title: "Servidor Dedicado: Instalación de phpMyAdmin"
description: "Descubre cómo gestionar bases de datos MySQL y MariaDB fácilmente con la interfaz web de phpMyAdmin para una administración eficiente → Aprende más ahora"
sidebar_label: Instalar phpMyAdmin
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

phpMyAdmin es una herramienta gratuita basada en web para gestionar bases de datos MySQL y MariaDB. Ofrece una interfaz amigable que permite a los usuarios crear, editar, administrar y eliminar bases de datos sin tener que escribir comandos SQL manualmente.

<InlineVoucher />

## Preparación

Antes de comenzar la instalación, asegúrate de que el sistema esté actualizado. Las actualizaciones y mejoras pendientes se pueden realizar con los siguientes comandos:

```
sudo apt update -y
sudo apt upgrade -y
```

También debes asegurarte de tener PHP instalado en tu sistema. Esto es esencial para usar phpMyAdmin. Para saber cómo instalar PHP, echa un vistazo a nuestra [guía Instalar PHP](dedicated-linux-php.md).

:::warning Paquetes PHP faltantes
Si faltan los paquetes PHP necesarios, los archivos PHP de phpMyAdmin no se procesarán ni mostrarán correctamente.
:::

## Instalación

Si la preparación está lista, ahora puedes comenzar con la instalación de la interfaz phpMyAdmin. Primero, abre el directorio donde quieres instalar phpMyAdmin.

Navega al directorio correspondiente con el comando `cd /usr/share`. Luego, descarga la última versión de phpMyAdmin al directorio de instalación usando `wget`:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Si el comando `wget` no se encuentra, puedes instalarlo con `sudo apt install wget -y`.
:::

Cuando la descarga termine, descomprime el archivo ZIP con el siguiente comando:

```
unzip phpmyadmin.zip
```
:::warning
Si el comando `unzip` no se encuentra, instálalo con `sudo apt install unzip -y`.
:::

Ahora renombra el archivo descomprimido a un nombre más simple, elimina el archivo ZIP y asigna los permisos necesarios:

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Configuración

### Archivo de configuración del servidor web

Ahora debes añadir phpMyAdmin a la configuración del servidor web. Para ello, crea un nuevo archivo de configuración de Virtual Host con `nano /etc/apache2/conf-available/phpmyadmin.conf` y rellénalo con el siguiente contenido:

```
# Configuración de Apache para phpMyAdmin

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Denegar acceso web por seguridad a directorios que no lo necesitan
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

Una vez que hayas añadido el contenido, guarda y cierra el archivo con `CTRL+X`, luego presiona `Y` y confirma con `Enter`.

Después, activa y carga la nueva configuración del Virtual Host con estos comandos:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Crear directorio temporal necesario

Para que phpMyAdmin funcione correctamente, debes crear un directorio temporal y asignarle los permisos necesarios. Hazlo con estos comandos:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Conclusión

¡Felicidades! Has instalado y configurado phpMyAdmin con éxito. Puedes acceder a la interfaz web usando la dirección IP y la ruta de tu servidor (http://Dirección-IP/phpmyadmin). Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte. 🙂

<InlineVoucher />