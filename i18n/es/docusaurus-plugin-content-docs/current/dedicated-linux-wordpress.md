---
id: dedicated-linux-wordpress
title: "Servidor Dedicado: Instalación de WordPress"
description: "Descubre cómo instalar WordPress en un servidor Linux usando el stack LAMP para construir y gestionar tu sitio web de forma eficiente → Aprende más ahora"
sidebar_label: Instalar WordPress
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

WordPress es un sistema de gestión de contenido web muy popular para administrar y publicar sitios web. Hoy en día, WordPress ha evolucionado hacia muchas otras áreas como mailing, foros, tiendas y mucho más. Esto se debe a una comunidad activa que ha creado un ecosistema sólido de plugins junto con plantillas que facilitan la configuración para cualquier usuario final. En esta guía, cubriremos el proceso de instalación del CMS WordPress en un servidor Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

<InlineVoucher />

## Preparación

Comienza conectándote a tu servidor vía SSH. Si no sabes cómo hacerlo, echa un vistazo a nuestra [guía de acceso inicial (SSH)](dedicated-linux-ssh.md).

:::info
En esta guía usaremos la distro Ubuntu, junto con Apache como servidor web, MySQL para la base de datos y PHP como dependencia principal. Esto se conoce como el stack LAMP: Linux, Apache, MySQL y PHP.
:::

Una vez que hayas iniciado sesión, ejecuta el comando de actualización.
```
sudo apt update
```

Luego, instala todas las dependencias necesarias. Copia el comando completo de abajo y pégalo para instalar todo de una vez. Ten paciencia, puede tardar un poco.
```
sudo apt install apache2 \
                 ghostscript \
                 libapache2-mod-php \
                 mysql-server \
                 php \
                 php-bcmath \
                 php-curl \
                 php-imagick \
                 php-intl \
                 php-json \
                 php-mbstring \
                 php-mysql \
                 php-xml \
                 php-zip
```

Con las dependencias instaladas, hay algunos pasos recomendados para asegurarte de que todas las dependencias principales del stack LAMP funcionen correctamente.

### Apache y Firewall

Primero, configura el firewall para permitir que el servidor web Apache se comunique con internet y asegúrate de que funcione. Es importante crear las reglas adecuadas para que el servidor web sea accesible desde internet.

En este ejemplo usaremos el **firewall UFW** porque Apache tiene una aplicación registrada para este. Si usas otro firewall, asegúrate de permitir el puerto 80 (HTTP). Puedes aprender más sobre firewalls en Linux en nuestra [guía de gestión de firewall](vserver-linux-firewall.md).

Asegúrate de que el firewall UFW esté activado y que exista una regla para SSH.
```
# Crear regla para permitir SSH
sudo ufw allow OpenSSH

# Activar firewall UFW
sudo ufw enable
```

:::caution
¡Asegúrate de tener una regla para SSH si usas UFW! Si no la tienes, **no** podrás conectarte por SSH al servidor si pierdes la conexión actual.
:::

Ahora crea la regla para permitir Apache y luego verifica que las reglas estén activas.
```
# Crear regla para permitir Apache
sudo ufw allow in "Apache Full"

# Verificar reglas del firewall UFW
sudo ufw status
```

:::tip
Puedes ver qué perfiles están disponibles con el comando `ufw app list`. En el ejemplo usamos `Apache Full`, que crea reglas para HTTP (puerto 80) y HTTPS (puerto 443).
:::

Deberías ver reglas para `Apache` y `Apache (v6)` con acción `ALLOW`, confirmando que el firewall está listo. También verás otras reglas que hayas configurado, incluyendo la de SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Con el firewall abierto para Apache, asegúrate de que Apache funcione. Intenta acceder a tu dirección IP en un navegador así: `http://[tu_dirección_ip]`

Si funciona, verás una página de bienvenida por defecto. Si no, revisa el estado del servicio con: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configuración de MySQL

El siguiente paso es la configuración inicial de MySQL. Se recomienda ejecutar un script de instalación segura para mantener tu servidor MySQL protegido. Es opcional pero muy recomendable. Ejecuta el comando `sudo mysql_secure_installation`.

Esto te guiará por una configuración interactiva. Primero te preguntará sobre la validación de contraseñas. Recomendamos seleccionar `Y` para permitir solo contraseñas seguras y luego elegir `MEDIUM` con `1` o `STRONG` con `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Luego te preguntará si quieres eliminar el usuario `anonymous` y deshabilitar el acceso remoto para root. Recomendamos aceptar con `Y` por seguridad. Esto elimina el usuario de prueba y limita el acceso root solo localmente vía SSH, reduciendo riesgos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Finalmente, te preguntará si quieres eliminar la base de datos `test` y recargar las tablas de privilegios. Nuevamente, acepta con `Y` porque la base de datos de prueba no es necesaria y debes recargar los privilegios para aplicar cambios.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Ahora verifica que MySQL esté corriendo intentando iniciar sesión con: `sudo mysql -u root`. Si tienes éxito, verás un mensaje de bienvenida. Sal con el comando `quit` cuando quieras.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### Probando PHP

Por último, asegúrate de que PHP funcione correctamente. Crea un archivo `info.php` en el directorio de Apache `/var/www/html/` con contenido PHP que ejecute `phpinfo()`.
```
# Abre el editor nano en el nuevo archivo
nano /var/www/html/info.php

# Pega el siguiente contenido
<?php
phpinfo();
?>
```

Guarda el archivo con `CTRL+X`, luego `Y` y `Enter` para confirmar.

Ahora accede a esta URL, que debería mostrar una página con información de PHP si todo está bien:
```
http://[tu_dirección_ip]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Con las dependencias principales del stack LAMP probadas y funcionando, ya estás listo para instalar WordPress.

## Instalación

La instalación de WordPress se divide en tres partes: preparar la base de datos MySQL, instalar WordPress y configurar usando el asistente de instalación.

### Base de datos MySQL

Para empezar, crea una nueva base de datos MySQL. Esto es importante porque usarás estos datos en el asistente de instalación de WordPress, así que recomendamos usar nuestros ejemplos.

Copia estos comandos para crear la base de datos, tablas y usuarios necesarios.
```
# Iniciar sesión en MySQL
sudo mysql -u root

# Crear base de datos
CREATE DATABASE wordpress;

# Crear usuario dedicado para wordpress
# Reemplaza [your_password] con tu propia contraseña
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# Asignar privilegios al usuario (copia todo junto)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Recargar tablas de privilegios
FLUSH PRIVILEGES;
```

Cuando termines, sal con `quit`. Ya puedes instalar WordPress.

### Instalando WordPress

Para la instalación principal, recomendamos usar la versión oficial de **wordpress.org** en lugar del paquete APT, ya que WordPress lo recomienda para evitar problemas.

Descarga la última versión con este comando, que la bajará al directorio temporal.
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Extrae el archivo, que creará una carpeta `wordpress` con todos los archivos necesarios.
```
tar -xvf latest.tar.gz
```

Ahora copia la carpeta a tu directorio Apache `/var/www/html/` para que sea accesible vía web. Ejecuta estos comandos para copiar, crear la carpeta de uploads y ajustar permisos para que el grupo `www-data` tenga acceso.
```
# Copiar carpeta wordpress y actualizar propietario
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Crear directorio uploads
mkdir /var/www/html/wordpress/wp-content/uploads

# Ajustar permisos
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

Con esto WordPress debería estar instalado. Accede al asistente de instalación en: `http://[tu_dirección_ip]/wordpress`

### Asistente de configuración

En el asistente podrás configurar WordPress, que es el último paso. Primero te pedirá seleccionar el idioma.

Luego deberás configurar los datos de la base de datos. Ya los preparaste en MySQL, así que usa las mismas credenciales. Si seguiste nuestros ejemplos, completa así, reemplazando `[your_password]` con la contraseña que usaste.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Con esto listo, te pedirá ejecutar la instalación, que es el último paso.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

En la siguiente página, ingresa información como el título del sitio, un correo electrónico, y un usuario y contraseña para la cuenta root de WordPress para acceder al panel. También puedes decidir si quieres que los motores de búsqueda indexen tu sitio o no.

:::tip
¡Elige una contraseña fuerte y guarda bien tus credenciales para no perder acceso al panel de WordPress!
:::

Cuando estés listo, haz clic en **Instalar WordPress** para finalizar.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Serás llevado a una página de éxito que redirige a la página de **Inicio de sesión**. Haz clic ahí y usa tus credenciales para entrar al panel de WordPress por primera vez.

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

Y listo, tras iniciar sesión exitosamente estarás en tu panel de WordPress con la instalación completa.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Conclusión

¡Felicidades, has instalado y configurado WordPress con éxito! Como siguiente paso, **recomendamos mucho** configurar un dominio y un **certificado SSL** para asegurar que los datos se transmitan de forma segura y facilitar el acceso al panel de WordPress. Consulta nuestra [guía de Certbot](dedicated-linux-certbot.md#webroot-plugin) enfocada en el **plugin de Apache** y sigue la configuración interactiva para instalar un certificado para tu dominio.

Para seguir aprendiendo y configurando, te recomendamos revisar nuestras guías de [Plugins de WordPress](webspace-wordpress-plugins.md) y [WordPress Elementor](webspace-wordpress-elementor.md), que exploran cómo instalar plugins y usar Elementor, un constructor de páginas popular y fácil de usar.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte! 🙂

<InlineVoucher />