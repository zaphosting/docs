---
id: dedicated-linux-phpmyadmin
title: "Configura phpMyAdmin en un Servidor Linux - Gestiona tus Bases de Datos vía Interfaz Web"
description: "Descubre cómo gestionar bases de datos MySQL y MariaDB fácilmente con la interfaz web de phpMyAdmin para una administración eficiente → Aprende más ahora"
sidebar_label: Instalar phpMyAdmin
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

phpMyAdmin es una herramienta gratuita basada en web para gestionar bases de datos MySQL y MariaDB. Ofrece una interfaz amigable que permite a los usuarios crear, editar, gestionar y eliminar bases de datos sin tener que ingresar comandos SQL manualmente.

## Preparación

Antes de comenzar la instalación, asegúrate de que el sistema esté actualizado. Las actualizaciones y mejoras pendientes se pueden realizar con los siguientes comandos:

```
sudo apt update -y
sudo apt upgrade -y
```

También debes asegurarte de tener PHP instalado en tu sistema. Esto es esencial para usar phpMyAdmin. Para saber cómo instalar PHP, echa un vistazo a nuestra [guía Instalar PHP](vserver-linux-php.md).

:::warning Paquetes PHP faltantes
Si faltan los paquetes PHP necesarios, los archivos PHP de phpMyAdmin no podrán procesarse ni mostrarse correctamente.
:::

## Instalación

Si la preparación está completa, ahora puedes comenzar con la instalación de la interfaz phpMyAdmin. Para ello, primero abre el directorio de instalación donde quieres instalar phpMyAdmin.

Navega al directorio correspondiente con el comando `cd /usr/share`. Luego, descarga la última versión de phpMyAdmin en el directorio de instalación usando `wget`:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Si el servicio `wget` no se encuentra, puedes instalarlo con el comando `sudo apt install wget -y`.
:::

Cuando la descarga termine, descomprime el archivo ZIP descargado con el siguiente comando:

```
unzip phpmyadmin.zip
```

:::warning
Si el servicio `unzip` no se encuentra, puedes instalarlo con el comando `sudo apt install unzip -y`.
:::

Ahora puedes renombrar el archivo descomprimido a un nombre más simple, eliminar el archivo ZIP y establecer los permisos necesarios:

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Configuración

### Archivo de configuración del servidor web

Ahora debes añadir phpMyAdmin a la configuración del servidor web. Para ello, usa `nano /etc/apache2/conf-available/phpmyadmin.conf` para crear un nuevo archivo de configuración de Virtual Host y rellénalo con el siguiente contenido:

```
# Configuración Apache para phpMyAdmin

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

Una vez que hayas llenado la configuración de Apache2 para phpMyAdmin, guarda y cierra con `CTRL+X`, luego presiona `Y` y confirma con `Enter`.

El archivo de configuración del virtual host recién creado debe activarse y cargarse. Para ello, ejecuta los siguientes comandos:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Crear directorio temporal requerido

Para asegurar que phpMyAdmin funcione correctamente, debes crear un directorio temporal y establecer los permisos necesarios. Puedes hacerlo con estos comandos:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Conclusión

¡Felicidades! Has instalado y configurado phpMyAdmin con éxito. Puedes acceder a la interfaz web usando la dirección IP y la ruta de tu servidor (`http://Dirección-IP/phpmyadmin`). Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂