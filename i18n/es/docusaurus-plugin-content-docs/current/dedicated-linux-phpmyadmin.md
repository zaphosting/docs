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

phpMyAdmin es una herramienta gratuita basada en web para gestionar bases de datos MySQL y MariaDB. Ofrece una interfaz amigable que permite a los usuarios crear, editar, gestionar y eliminar bases de datos sin tener que escribir comandos SQL manualmente.

## Instala phpMyAdmin con el Instalador de Apps One Click

Puedes instalar **phpMyAdmin** directamente a través de nuestro **Instalador de Apps One Click** en el panel web del VPS. Tras completar la configuración inicial de apps, abre el catálogo de aplicaciones, busca **phpMyAdmin** y comienza el despliegue con tu proyecto, entorno y configuración de dominio preferidos. Esto te ofrece una forma rápida y sencilla de desplegar y gestionar **phpMyAdmin** sin necesidad de configurar manualmente por línea de comandos, mientras aprovechas la gestión integrada vía web, soporte para dominios personalizados y provisión de SSL donde esté disponible.

## Preparación

Antes de comenzar la instalación, asegúrate de que el sistema esté actualizado. Las actualizaciones y mejoras pendientes se pueden realizar con los siguientes comandos:

```
sudo apt update -y
sudo apt upgrade -y
```

También debes asegurarte de tener PHP instalado en tu sistema. Esto es esencial para usar phpMyAdmin. Para saber cómo instalar PHP, consulta nuestra [guía Instalar PHP](vserver-linux-php.md).

:::warning Paquetes PHP faltantes
Si faltan los paquetes PHP necesarios, los archivos PHP de phpMyAdmin no podrán procesarse ni mostrarse correctamente.
:::

## Instalación

Si la preparación está completa, ahora puedes comenzar la instalación de la interfaz phpMyAdmin. Para ello, primero abre el directorio donde quieres instalar phpMyAdmin.

Navega al directorio correspondiente con el comando `cd /usr/share`. Luego, descarga la última versión de phpMyAdmin en el directorio de instalación usando `wget`:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Si el servicio `wget` no se encuentra, puedes instalarlo con el comando `sudo apt install wget -y`.
:::

Cuando la descarga termine, descomprime el archivo ZIP con el siguiente comando:

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

Una vez que hayas añadido el contenido a la configuración de Apache2 para phpMyAdmin, guarda y cierra con `CTRL+X`, luego presiona `Y` y confirma con `Enter`.

Luego, activa y carga el nuevo archivo de configuración del virtual host con estos comandos:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Crear directorio temporal requerido

Para asegurar que phpMyAdmin funcione correctamente, debes crear un directorio temporal y asignar los permisos necesarios. Hazlo con estos comandos:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Conclusión

¡Felicidades! Has instalado y configurado phpMyAdmin con éxito. Puedes acceder a la interfaz web usando la dirección IP y la ruta de tu servidor (`http://Dirección-IP/phpmyadmin`). Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, disponible todos los días para asistirte 🙂
