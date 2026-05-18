---
id: dedicated-linux-wordpress
title: "Configura WordPress en un Servidor Linux - Lanza tu Propio Sitio Web o Blog"
description: "Descubre cómo instalar WordPress en un servidor Linux usando el stack LAMP para construir y gestionar tu sitio web de forma eficiente → Aprende más ahora"
sidebar_label: Instalar WordPress
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

WordPress es un popular sistema de gestión de contenido web usado para administrar y publicar sitios web. Hoy en día, WordPress ha evolucionado hacia muchas otras áreas como mailing, foros, tiendas y mucho más. Esto se ve reforzado por una comunidad activa que ha creado un ecosistema sólido de plugins junto con plantillas que facilitan la configuración para cualquier usuario final. En esta guía, cubriremos el proceso de instalación del CMS WordPress en un servidor Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## Instala WordPress con el Instalador de Apps One Click

Puedes instalar **WordPress** directamente a través de nuestro **Instalador de Apps One Click** en la interfaz web del VPS. Tras completar la configuración inicial de apps, abre el catálogo de apps, busca **WordPress** y comienza el despliegue con tu proyecto, entorno y configuración de dominio preferidos. Esto te ofrece una forma rápida y amigable de desplegar y gestionar **WordPress** sin necesidad de configurar manualmente por línea de comandos, mientras aprovechas la gestión integrada vía web, soporte para dominios personalizados y provisión de SSL donde esté disponible.

## Preparación

Comienza conectándote a tu servidor vía SSH. Si no sabes cómo hacerlo, echa un vistazo a nuestra [guía de acceso inicial (SSH)](dedicated-linux-ssh.md).

:::info
En esta guía usaremos la distro Ubuntu, junto con Apache como servidor web, MySQL para la base de datos y PHP como dependencia principal. Esto se conoce como el stack LAMP: Linux, Apache, MySQL y PHP.
:::

Una vez conectado, comienza ejecutando el comando de actualización.
```
sudo apt update
```

Luego puedes instalar todas las dependencias necesarias. Simplemente copia el comando completo de abajo y pégalo para instalar todo de una vez. Ten paciencia, puede tardar un poco.
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

Con las dependencias instaladas, hay algunos pequeños pasos recomendados para asegurarte de que todas las dependencias principales del stack LAMP funcionen correctamente.

### Apache & Firewall

Para empezar, debes configurar el firewall para permitir que el servidor web Apache se comunique con internet y asegurarte de que funcione. Es importante crear las reglas adecuadas en el firewall para que el servidor web sea accesible desde internet.

En este ejemplo, usaremos el **firewall UFW** ya que Apache tiene una aplicación registrada para este. Si usas otro firewall, asegúrate de permitir el puerto 80 (HTTP) a través del firewall. Puedes aprender más sobre firewalls en Linux en nuestra guía [Gestionar Firewall](vserver-linux-firewall.md).

Asegúrate de que el firewall UFW esté habilitado y que exista una regla para SSH.
```
# Crea una regla para permitir SSH
sudo ufw allow OpenSSH

# Habilita el firewall UFW
sudo ufw enable
```

:::caution
¡Asegúrate de tener una regla para SSH si usas el firewall UFW! Si no la tienes, **no** podrás conectarte por SSH al servidor si pierdes la conexión actual.
:::

Ahora crea la regla para permitir Apache y luego verifica que las reglas estén activas.
```
# Crea una regla para permitir Apache
sudo ufw allow in "Apache Full"

# Verifica las reglas del firewall UFW
sudo ufw status
```

:::tip
Puedes ver qué perfiles están disponibles ejecutando el comando `ufw app list`. En el ejemplo anterior, usar `Apache Full` significa que se crean reglas para HTTP (puerto 80) y HTTPS (puerto 443).
:::

Deberías ver reglas `Apache` y `Apache (v6)` con acción `ALLOW`, lo que confirma que el firewall está listo. También verás otras reglas que hayas configurado antes, incluyendo la de SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Con el firewall abierto para Apache, ahora asegúrate de que Apache funcione. Puedes probar accediendo a tu dirección IP en un navegador, así: `http://[tu_direccion_ip]`

Si funciona, deberías ver una página de bienvenida por defecto. Si no, revisa el estado del servicio con: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configuración de MySQL

El siguiente paso es hacer una configuración inicial de MySQL. Se recomienda ejecutar un script de instalación segura para mantener tu instancia de MySQL protegida. Es opcional pero muy recomendable. Puedes hacerlo con el comando `sudo mysql_secure_installation`.

Esto te guiará en una configuración interactiva. Primero te preguntará sobre la validación de contraseñas. Recomendamos seleccionar `Y` para permitir solo contraseñas seguras en el futuro y luego elegir `MEDIUM` con `1` o `STRONG` con `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Luego te preguntará si quieres eliminar el usuario `anonymous` y deshabilitar el acceso remoto para root. Recomendamos aceptar con `Y` por seguridad. Esto elimina el usuario de prueba y asegura que el usuario root solo pueda usarse localmente vía SSH, reduciendo riesgos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Finalmente, te preguntará si quieres eliminar la base de datos `test` y recargar las tablas de privilegios. Nuevamente recomendamos aceptar con `Y` ya que la base de datos de prueba no es necesaria y debes recargar las tablas para que los cambios tengan efecto.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Ahora verifica que la base de datos MySQL esté corriendo intentando iniciar sesión con: `sudo mysql -u root`. Si tienes éxito, verás un mensaje de bienvenida. Puedes salir con el comando `quit`.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### Probando PHP

Por último, asegúrate de que PHP funcione correctamente. Para esto, crea un archivo `info.php` en el directorio Apache `/var/www/html/` con contenido PHP que ejecute el comando `phpinfo()`.
```
# Abre el editor nano en la nueva ruta
nano /var/www/html/info.php

# Pega el siguiente contenido en el editor
<?php
phpinfo();
?>
```

Cuando termines, guarda el archivo presionando `CTRL+X`, luego `Y` y `Enter` para confirmar los cambios.

Ahora accede a esta URL, que debería mostrar una página con información de PHP si todo funciona bien:
```
http://[tu_direccion_ip]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Con las dependencias principales del stack LAMP probadas y funcionando, estás listo para continuar con la instalación principal del CMS WordPress.

## Instalación

La instalación de WordPress se divide en tres partes: preparar la base de datos MySQL, instalar WordPress y finalmente configurar usando el asistente de instalación de WordPress.

### Base de datos MySQL

Para comenzar la instalación, debes crear una nueva base de datos MySQL. Esto es importante porque usarás estos datos durante el asistente de configuración de WordPress, por eso recomendamos usar nuestros ejemplos.

Copia los siguientes comandos para crear la base de datos, tablas y usuarios necesarios.
```
# Inicia sesión en MySQL
sudo mysql -u root

# Crea la base de datos
CREATE DATABASE wordpress;

# Crea un usuario dedicado para wordpress
# Reemplaza [your_password] con tu propia contraseña
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# Asigna privilegios al usuario (copia todo junto)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Recarga las tablas de privilegios
FLUSH PRIVILEGES;
```

Cuando termines de crear la base de datos y el usuario, sal con el comando `quit`. Ya estás listo para instalar WordPress.

### Instalando WordPress

Para la instalación principal de WordPress, recomendamos usar la versión oficial de **wordpress.org** directamente en lugar del paquete APT, ya que WordPress lo recomienda para evitar posibles problemas.

Para descargar la última versión, usa este comando que la bajará al directorio temporal.
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Ahora extrae el archivo, lo que creará una carpeta `wordpress` con todos los archivos necesarios.
```
tar -xvf latest.tar.gz
```

Con los archivos extraídos, debes copiar la carpeta a tu directorio Apache `/var/www/html/` para que todo sea accesible vía web. Ejecuta estos comandos para copiar la carpeta, crear un directorio `uploads` y ajustar permisos para que el grupo `www-data` del servidor web tenga acceso.
```
# Copia la carpeta wordpress y actualiza la propiedad
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Crea el directorio uploads
mkdir /var/www/html/wordpress/wp-content/uploads

# Ajusta permisos de archivos
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

Con esto hecho, WordPress debería estar instalado. Accede al asistente de configuración de WordPress en: `http://[tu_direccion_ip]/wordpress`

### Asistente de configuración

Con el asistente, ahora puedes configurar WordPress, que es el paso final de la instalación. Primero te pedirá seleccionar el idioma.

Luego deberás configurar los datos de la base de datos. Ya preparaste esto en MySQL en la primera parte, así que usa las mismas credenciales y valores aquí. Si seguiste nuestros ejemplos, completa las opciones así, reemplazando `[your_password]` con la contraseña que usaste antes.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Con este paso listo, te pedirá ejecutar la instalación. Esta es la última parte del proceso.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

En la página siguiente, deberás ingresar información como el título del sitio, un correo electrónico, y un usuario y contraseña para la cuenta root de WordPress para acceder al panel. También puedes decidir la visibilidad para motores de búsqueda, si quieres que tu sitio sea indexado o no.

:::tip
¡Asegúrate de elegir una contraseña fuerte y guardar bien las credenciales para no perder acceso a tu panel de WordPress!
:::

Cuando estés listo, selecciona el botón **Instalar WordPress** para completar la instalación.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Serás llevado a una página de éxito que te redirige a la página de **Iniciar sesión**. Selecciónala y usa las credenciales para entrar a tu panel de WordPress por primera vez.

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

Y así, tras iniciar sesión con éxito, estarás en tu panel de WordPress con la instalación completa.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Conclusión

¡Felicidades, has instalado y configurado WordPress con éxito! Como siguiente paso, te **recomendamos mucho** configurar un dominio y un **certificado SSL** para asegurar que los datos se transmitan de forma segura y facilitar el acceso al panel de WordPress. Consulta nuestra [guía de Certbot](dedicated-linux-certbot.md) enfocada en el **plugin de Apache** y sigue la configuración interactiva para instalar un certificado para tu dominio elegido rápida y fácilmente.

Para seguir aprendiendo y configurando, te recomendamos echar un vistazo a nuestras guías de [Plugins de WordPress](webspace-wordpress-plugins.md) y [WordPress Elementor](webspace-wordpress-elementor.md), que exploran cómo instalar plugins y usar un popular constructor de páginas amigable llamado Elementor.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte! 🙂