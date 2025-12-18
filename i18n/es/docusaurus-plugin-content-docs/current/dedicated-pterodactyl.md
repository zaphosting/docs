---
id: dedicated-pterodactyl
title: "Servidor Dedicado: Instalación de Pterodactyl"
description: "Descubre cómo configurar y gestionar tu propio panel de servidor de juegos Pterodactyl de forma eficiente → Aprende más ahora"
sidebar_label: Instalar Pterodactyl
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Pterodactyl Panel es un panel de control open source diseñado para gestionar y alojar servidores de juegos fácilmente. Ofrece una interfaz de usuario que permite a los administradores configurar y gestionar múltiples servidores de juegos de forma centralizada.

En esta guía, exploraremos los pasos necesarios para configurar tu propia instancia de Pterodactyl en tu servidor.



## Preparación

Necesitarás un servidor dedicado con Linux para instalar el Panel Pterodactyl. Debes usar uno de los sistemas operativos compatibles que aparecen en la tabla a continuación.

| SO      | Versiones compatibles |
| ------- | --------------------- |
| Ubuntu  | 20.04, 22.04          |
| CentOS  | 7, 8                  |
| Debian  | 11, 12                |

## Dependencias

Pterodactyl requiere varias dependencias para poder instalarse y funcionar correctamente. También depende de un gestor de dependencias popular para PHP llamado Composer.

### Lista de Dependencias

Aquí tienes una lista corta de las dependencias que necesitarás para esta guía. Dirígete a la siguiente sección para aprender cómo instalarlas.

- PHP 8.1 con las siguientes extensiones: cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xml o dom, curl, zip y fpm.
- MariaDB
- Servidor web - En esta guía usaremos Nginx.
- curl
- tar
- unzip
- git
- composer v2

### Instalando Dependencias

Primero, ejecuta este comando que es esencial para permitirte añadir paquetes que no vienen por defecto en el SO.

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

Ahora debes instalar los repositorios adicionales para PHP, Redis y MariaDB (MySQL).

```bash
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
```

También tendrás que instalar Redis, que es necesario para el almacenamiento temporal de datos.

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

Para el servidor web, elegimos usar Nginx porque es fiable y open source. Debes instalarlo o puedes usar otros servidores web como Apache o Caddy, aunque no encajan tan bien con esta guía.

```bash
sudo apt install nginx # Descargar e instalar Nginx
sudo ufw allow 'Nginx Full' # Ajustar firewall
```

Recomendamos ir a `http://[tu_ip_servidor]/`, reemplazando `[tu_ip_servidor]` con la dirección IP de tu servidor para probar y asegurarte de que Nginx está funcionando. Deberías ver una página de bienvenida por defecto.

Continuando, ahora debes instalar MariaDB, que usarás como tu base de datos MySQL.
```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Finalmente, actualiza la lista de repositorios e instala las dependencias restantes.
```bash
apt update
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

Ahora deberías tener todas las dependencias necesarias instaladas y puedes proceder a instalar Composer.

### Instalando Composer

Ahora que tus dependencias principales están instaladas, debes instalar Composer, que es un gestor de dependencias popular para PHP. Esto te permitirá descargar e instalar fácilmente todo el servicio Pterodactyl.

Simplemente ejecuta el siguiente comando:
```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Descargar el Panel

Ahora que todos los prerequisitos están listos, debes instalar el Panel Pterodactyl.

Debes crear una carpeta donde se almacenará el panel usando el siguiente comando.
```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

Ahora, puedes clonar el repositorio oficial de Pterodactyl en GitHub para descargar los archivos necesarios.
```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

Una vez completada la descarga, tendrás el panel descargado exitosamente. En la siguiente sección, configurarás una amplia gama de ajustes y opciones esenciales para asegurar que el panel se instale correctamente y funcione bien.

## Instalación

La primera parte de la instalación implica configurar una base de datos MySQL que almacenará todos los datos de tu panel Pterodactyl. Si ya tienes una base de datos MySQL lista con un usuario adecuado, puedes saltarte la siguiente subsección.

### Configuración de la Base de Datos

Necesitarás iniciar sesión en tu base de datos MySQL para comenzar. Si es una instancia MySQL nueva, puedes hacerlo simplemente ejecutando:
```
mysql -u root -p
```

De lo contrario, si ya tienes una instancia MySQL, puedes usar tu usuario con `-u` siendo el nombre de usuario y `-p` para la entrada de contraseña.

Una vez dentro, debes crear un nuevo usuario que usarás para tu instancia Pterodactyl. Asegúrate de reemplazar `[tu_contraseña]` con la que desees usar. Esto se hace con:
```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY '[tu_contraseña]';
```

Ahora que tu usuario está listo, debes crear una base de datos para tu instancia Pterodactyl. También tienes que otorgar permisos a tu nuevo usuario para que pueda realizar acciones en la base de datos. Simplemente ejecuta:
```sql
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

Has configurado exitosamente un usuario y base de datos MySQL para tu instancia Pterodactyl, así que puedes continuar con la instalación. Ejecuta el comando `exit` para salir de la gestión de MySQL.

### Continuando la Configuración

Para continuar, ahora debes copiar el archivo de entorno por defecto donde almacenarás tus tokens secretos.
```bash
cp .env.example .env
```

Luego, puedes usar Composer para instalar automáticamente todos los paquetes necesarios ejecutando:
```bash
composer install --no-dev --optimize-autoloader
```

También debes generar una clave de encriptación que usarás para tu aplicación, lo cual se hace con:
```bash
php artisan key:generate --force
```

### Configuración del Entorno

Ahora configurarás tu instancia Pterodactyl. Esto se hace simplemente ejecutando los siguientes comandos. Cada comando te guiará por una configuración interactiva que cubre muchos ajustes como sesiones, email, caché y más.

```bash
php artisan p:environment:setup # Primer comando
php artisan p:environment:database # Segundo comando
```

### Configurando la Base de Datos

El siguiente paso es configurar los datos base necesarios para que el panel funcione, usando la base de datos que creaste antes. De nuevo, esto se hace simplemente ejecutando el siguiente comando.

:::info
Ten en cuenta que esto puede tardar varios minutos en completarse. No salgas del proceso o podrías romper algo. ¡Ten paciencia! :)
:::

```bash
php artisan migrate --seed --force
```

### Creando el Usuario Administrador

Ahora que tu base de datos está lista, debes crear tu primer usuario administrador para poder iniciar sesión en tu panel Pterodactyl. Esto se hace ejecutando el siguiente comando.
```bash
php artisan p:user:make
```

### Configurando Permisos

El siguiente paso en la instalación de tu panel es establecer los permisos necesarios para los archivos del panel Pterodactyl para que la instancia del panel pueda leer y escribir sin problemas.

Puedes establecer los permisos ejecutando:
```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

Una vez hecho esto, deberías poder acceder a tu panel Pterodactyl visitando el siguiente enlace, reemplazando `tu_direccion_ip` con la IP de tu sistema.
```
http://[tu_direccion_ip]/
```

### Trabajadores de Cola (Queue Workers)

El paso final en la instalación del panel implica configurar un cronjob que se ejecute a intervalos regulares junto con un trabajador de cola que se encarga de muchas tareas en segundo plano.

Primero, abre tu crontab ejecutando `sudo crontab -e` en tu consola. Una vez abierto, ejecuta el siguiente comando que configura un cronjob que se ejecuta cada minuto para tu panel Pterodactyl.
```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

Ahora que esto está hecho, necesitas crear un trabajador de cola usando `systemd` que mantenga el proceso de cola corriendo en segundo plano.

Crea un nuevo archivo para el trabajador ejecutando lo siguiente, que abrirá el editor nano.
```
nano /etc/systemd/system/pteroq.service
```

Aquí, copia y pega el siguiente contenido:
```
# Archivo del Trabajador de Cola de Pterodactyl
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
# En algunos sistemas el usuario y grupo pueden ser diferentes.
# Algunos sistemas usan `apache` o `nginx` como usuario y grupo.
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

:::note
Si usas CentOS, debes reemplazar `redis-server.service` por `redis.service` en el archivo anterior.
:::

Cuando estés listo, guarda presionando `CTRL + X` y luego `Y` para confirmar.

Finalmente, debes habilitar el servicio de Redis y el servicio que creaste para que se ejecuten al iniciar el sistema con los siguientes comandos.
```
sudo systemctl enable --now redis-server
sudo systemctl enable --now pteroq.service
```

Has instalado Pterodactyl exitosamente en tu servidor. Deberías poder acceder al panel usando la siguiente URL, reemplazando `[tu_ip_servidor]` con la IP de tu servidor.
```
http://[tu_ip_servidor]
```

## Opcional: Configurar el Servidor Web

Como función adicional, puedes decidir configurar tu servidor web. En esta guía usamos Nginx, por lo que esta sección explorará cómo ajustar la configuración para este.

Los beneficios de configurar más el servidor web es que podrás usar tu propio dominio para el panel y configurar un certificado SSL para tu sitio web del panel.

### Registro DNS del Dominio
Para que tu servidor sea accesible mediante tu dominio, debes configurar un registro DNS `A` para ese dominio. Esto depende mucho del proveedor que uses, pero debería estar accesible en algún tipo de área de `Panel DNS` al gestionar tu dominio. El contenido del registro debe ser la dirección IP objetivo de tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/EsGB6DaTC65Fce8/preview)

### Eliminar configuración por defecto
Comienza eliminando la configuración por defecto de Nginx. Esto se hace simplemente borrando el archivo.
```bash
rm /etc/nginx/sites-enabled/default
```
En este punto, debes usar el contenido que sigue para crear un nuevo archivo de configuración para tu sitio del panel Pterodactyl. Debes decidir si quieres usar SSL o no en esta etapa, ya que el contenido y los pasos de configuración variarán ligeramente según la elección.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx With SSL" label="Nginx con SSL" default>

### Configurando Certbot
Para que tu sitio web tenga un certificado SSL, debes configurar un sistema que gestione y renueve automáticamente tus certificados. En este caso, usarás Certbot, que es open source.

Primero debes instalar Certbot en tu servidor. Para Nginx, también necesitas instalar el paquete python3 certbot.
```bash
sudo apt update
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

Luego tendrás que configurar la verificación para permitir la generación del certificado. En este caso, usarás un desafío DNS porque es más seguro que un desafío HTTP.

Tendrás que crear un registro DNS `TXT` para el dominio que deseas usar. Esto depende mucho del proveedor que uses, pero debería estar accesible en algún tipo de área de `Panel DNS` al gestionar tu dominio.

Ejecuta el siguiente comando que te proporcionará el contenido para tu registro DNS `TXT`. Reemplaza `[tu_dominio]` con el dominio que deseas usar.
```bash
certbot -d [tu_dominio] --manual --preferred-challenges dns certonly
```

Una vez que hayas configurado tu registro DNS, debes configurar la renovación automática mediante un cronjob. Primero, abre crontab ejecutando `sudo crontab -e` y cuando esté abierto, ejecuta el siguiente comando para que el certificado se renueve todos los días a las 23:00 hora del sistema.

```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

#### Creando el Archivo de Configuración

Ahora que tienes tu certificado SSL listo, puedes comenzar a crear tu archivo de configuración.

Simplemente ejecuta el siguiente comando para abrir el editor nano en la carpeta y archivo designados.
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

En el editor, copia el archivo de configuración que sigue. Asegúrate de reemplazar `[tu_dominio]` con el dominio para el que configuraste los registros DNS en pasos anteriores.

:::warning
Asegúrate de haber configurado el certificado SSL, de lo contrario el servidor web no arrancará correctamente.
:::

```
server_tokens off;

server {
    listen 80;
    server_name [tu_dominio];
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name [tu_dominio];

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    ssl_certificate /etc/letsencrypt/live/[tu_dominio]/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/[tu_dominio]/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

</TabItem>
<TabItem value="Nginx Without SSL" label="Nginx sin SSL">

#### Creando el Archivo de Configuración

Ejecuta el siguiente comando para abrir el editor nano en la carpeta y archivo designados.
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

En el editor, copia el archivo de configuración que sigue. Asegúrate de reemplazar `[tu_dominio]` con el dominio para el que configuraste un registro DNS apuntando a la IP de tu servidor.

:::warning
Asegúrate de haber configurado el certificado SSL, de lo contrario el servidor web no arrancará correctamente.
:::

```
server {
    listen 80;
    server_name [tu_dominio];

    root /var/www/pterodactyl/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\.ht {
        deny all;
    }
}
```
</TabItem>
</Tabs>

### Aplicar Configuración

Ahora que has realizado los cambios en tu configuración, debes habilitarla ejecutando lo siguiente.
```bash
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf # No necesario en CentOS

sudo systemctl restart nginx # Reiniciar Nginx
```

Con todo hecho correctamente, ahora deberías poder acceder fácilmente a tu panel Pterodactyl usando el dominio que configuraste en esta sección.

Has configurado exitosamente tu servidor web para usar tu dominio y añadir un certificado SSL a tu sitio web.