---
id: vserver-linux-wordpress
title: "VPS: Instalación de WordPress"
description: "Descubre cómo configurar WordPress en un servidor Linux usando el stack LAMP para una solución web potente y flexible → Aprende más ahora"
sidebar_label: Instalar WordPress
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

WordPress es un sistema de gestión de contenido web muy popular usado para administrar y publicar sitios web. Hoy en día, WordPress ha evolucionado hacia muchas otras áreas como mailing, foros, tiendas y mucho más. Esto se potencia gracias a una comunidad activa que ha creado un ecosistema sólido de plugins junto con plantillas que facilitan la configuración para cualquier usuario final. En esta guía, cubriremos el proceso de instalación del CMS WordPress en un servidor Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

<InlineVoucher />

## Preparación

Comienza conectándote a tu servidor vía SSH. Si no sabes cómo hacerlo, echa un vistazo a nuestra [guía de acceso inicial (SSH)](vserver-linux-ssh.md).

:::info
En esta guía usaremos la distro Ubuntu, junto con Apache como servidor web, MySQL para la base de datos y PHP como dependencia principal. Esto se conoce como stack LAMP: Linux, Apache, MySQL y PHP.
:::

Una vez conectado, ejecuta el comando de actualización.
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

### Apache & Firewall

Primero, configura el firewall para permitir que el servidor web Apache se comunique con internet y asegúrate de que funcione. Es importante crear las reglas adecuadas para que el servidor web sea accesible desde internet.

En este ejemplo usaremos el **firewall UFW** ya que Apache tiene una aplicación registrada para este. Si usas otro firewall, asegúrate de permitir el puerto 80 (HTTP). Puedes aprender más sobre firewalls en Linux en nuestra [guía de gestión de firewall](vserver-linux-firewall.md).

Asegúrate de que el firewall UFW esté activado y que exista una regla para SSH.
```
# Crear regla para permitir SSH
sudo ufw allow OpenSSH

# Activar firewall UFW
sudo ufw enable
```

:::caution
¡Asegúrate de tener una regla para SSH si usas UFW! Si no, **no** podrás conectarte por SSH si pierdes la conexión actual.
:::

Ahora crea la regla para permitir Apache y luego verifica que las reglas estén activas.
```
# Crear regla para permitir Apache
sudo ufw allow in "Apache Full"

# Verificar reglas del firewall UFW
sudo ufw status
```

:::tip
Puedes ver qué perfiles están disponibles con el comando `ufw app list`. En el ejemplo, usar `Apache Full` crea reglas para HTTP (puerto 80) y HTTPS (puerto 443).
:::

Deberías ver reglas para `Apache` y `Apache (v6)` con acción `ALLOW`, confirmando que el firewall está listo. También verás otras reglas que hayas configurado, incluyendo la de SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Con el firewall abierto para Apache, asegúrate de que Apache funcione. Intenta acceder a tu dirección IP en un navegador así: `http://[tu_direccion_ip]`

Si funciona, verás una página de bienvenida por defecto. Si no, revisa el estado del servicio con: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configuración de MySQL

El siguiente paso es la configuración inicial de MySQL. Se recomienda ejecutar un script de instalación segura para mantener tu instancia de MySQL protegida. Es opcional pero muy recomendable. Ejecuta el comando `sudo mysql_secure_installation`.

Esto te guiará por una configuración interactiva. Primero te preguntará sobre la validación de contraseñas. Recomendamos seleccionar `Y` para permitir solo contraseñas seguras y luego elegir `MEDIUM` con `1` o `STRONG` con `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Luego te preguntará si quieres eliminar el usuario `anonymous` y deshabilitar el acceso remoto para root. Recomendamos aceptar con `Y` por seguridad. Esto elimina el usuario de prueba y limita el acceso root solo localmente vía SSH, reduciendo riesgos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Finalmente, te preguntará si quieres eliminar la base de datos `test` y recargar las tablas de privilegios. Nuevamente, recomendamos aceptar con `Y` para limpiar y aplicar cambios.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Ahora verifica que MySQL esté corriendo intentando iniciar sesión con: `sudo mysql -u root`. Si tienes éxito, verás un mensaje de bienvenida. Sal con el comando `quit` cuando quieras.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### Probando PHP

Por último, asegúrate de que PHP funcione correctamente. Crea un archivo `info.php` en el directorio `/var/www/html/` de Apache con el contenido para ejecutar `phpinfo()`.
```
# Abre el editor nano en el nuevo archivo
nano /var/www/html/info.php

# Pega el siguiente contenido
<?php
phpinfo();
?>
```

Guarda el archivo con `CTRL+X`, luego `Y` y `Enter` para confirmar.

Ahora accede a esta URL, que debería mostrar una página con info de PHP si todo está bien.
```
http://[tu_direccion_ip]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Con las dependencias principales del stack LAMP probadas y funcionando, ya puedes continuar con la instalación principal de WordPress.

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
# Reemplaza [tu_contraseña] con tu propia contraseña
CREATE USER wordpress@localhost IDENTIFIED BY '[tu_contraseña]';

# Asignar privilegios al usuario (copiar todo junto)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Recargar tablas de privilegios
FLUSH PRIVILEGES;
```

Cuando termines, sal con `quit`. Ya estás listo para instalar WordPress.

### Instalando WordPress

Para la instalación principal, recomendamos usar la versión oficial de **wordpress.org** en lugar del paquete APT, ya que WordPress lo recomienda para evitar problemas.

Para descargar la última versión, usa este comando que la bajará al directorio temporal.
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Extrae el archivo, lo que creará una carpeta `wordpress` con todos los archivos necesarios.
```
tar -xvf latest.tar.gz
```

Con los archivos extraídos, copia la carpeta a `/var/www/html/` de Apache para que sea accesible vía web. Ejecuta estos comandos para copiar, crear el directorio de uploads y ajustar permisos para que el grupo `www-data` tenga acceso.
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

Con esto, WordPress debería estar instalado. Accede al asistente de instalación en: `http://[tu_direccion_ip]/wordpress`

### Asistente de configuración

En el asistente, primero selecciona tu idioma.

Luego configura los datos de la base de datos. Ya los preparaste en MySQL, así que usa las mismas credenciales. Si seguiste nuestros ejemplos, completa así, reemplazando `[tu_contraseña]` con la que usaste antes.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Con esto listo, te pedirá iniciar la instalación, que es el último paso.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

En la siguiente página, ingresa el título del sitio, un correo electrónico, un usuario y contraseña para la cuenta root de WordPress para acceder al panel. También puedes decidir si quieres que los motores de búsqueda indexen tu sitio o no.

:::tip
¡Elige una contraseña fuerte y guarda bien tus credenciales para no perder acceso al panel de WordPress!
:::

Cuando estés listo, haz clic en **Instalar WordPress** para finalizar.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Serás redirigido a una página de éxito que te llevará a la página de **Iniciar sesión**. Haz clic ahí y usa tus credenciales para entrar al panel de WordPress por primera vez.

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

Y listo, tras iniciar sesión exitosamente estarás en tu panel de WordPress con la instalación completa.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Conclusión

¡Felicidades, has instalado y configurado WordPress con éxito! Como siguiente paso, te **recomendamos mucho** configurar un dominio y un **certificado SSL** para asegurar la transmisión de datos y facilitar el acceso al panel de WordPress. Consulta nuestra [guía de Certbot](vserver-linux-certbot.md#webroot-plugin) enfocada en el **Plugin de Apache** y sigue la configuración interactiva para instalar un certificado en tu dominio.

Para seguir aprendiendo y configurando, te recomendamos revisar nuestras guías de [Plugins de WordPress](webspace-wordpress-plugins.md) y [WordPress Elementor](webspace-wordpress-elementor.md), que te muestran cómo instalar plugins y usar Elementor, un constructor de páginas súper amigable.

Si tienes dudas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte 🙂 

<InlineVoucher />