---
id: dedicated-linux-odoo
title: "Configura Odoo en un Servidor Linux - Ejecuta tu propio ERP y CRM Open Source"
description: "Descubre cómo gestionar y automatizar procesos empresariales con la plataforma integrada ERP y CRM de Odoo para operaciones empresariales más eficientes → Aprende más ahora"
sidebar_label: Instalar Odoo
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Odoo es una plataforma modular open source que combina funcionalidades de Enterprise Resource Planning (ERP) y Customer Relationship Management (CRM). Permite a las empresas gestionar y automatizar procesos como contabilidad, inventario, gestión de proyectos y ventas desde un único sistema.

Con sus extensiones flexibles, Odoo puede adaptarse a necesidades específicas y ofrece una solución integrada para administrar todas las áreas de una empresa.

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

¿Estás pensando en alojar este servicio por tu cuenta? Te guiaremos paso a paso sobre cómo configurarlo y ajustarlo, junto con todo lo que debes tener en cuenta.



## Instala Odoo con el Instalador de Apps One Click

Puedes instalar **Odoo** directamente a través de nuestro **Instalador de Apps One Click** en la interfaz web del VPS. Tras completar la configuración inicial de apps, abre el catálogo de aplicaciones, busca **Odoo** y comienza el despliegue con tu proyecto, entorno y configuración de dominio preferidos. Esto te ofrece una forma rápida y amigable de desplegar y gestionar **Odoo** sin necesidad de configurar manualmente por línea de comandos, mientras aprovechas la gestión integrada basada en web, soporte para dominios personalizados y provisión de SSL donde esté disponible.

## Requisitos Previos

Antes de instalar **Odoo**, asegúrate de que tu entorno de hosting cumple con los siguientes requisitos para garantizar una instalación fluida y un rendimiento óptimo.

| Hardware   | Mínimo      | Recomendado  |
| ---------- | ------------ | ------------ |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU |
| RAM        | 1 GB         | 4 GB         |
| Espacio en disco | 15 GB        | 25 GB        |

El software requiere que todas las dependencias necesarias estén instaladas y que se ejecute en un sistema operativo soportado. Asegúrate de que tu servidor cumple con los siguientes requisitos antes de continuar con la instalación:

**Dependencias:** `Docker`

**Sistema Operativo:** Última versión de Ubuntu/Debian compatible con Docker 26+

Verifica que todas las dependencias estén instaladas y que la versión del sistema operativo sea la correcta para evitar problemas de compatibilidad durante la instalación de Odoo.



## Preparación

Antes de configurar **Odoo**, necesitas preparar tu sistema. Esto incluye actualizar tu sistema operativo a la última versión e instalar todas las dependencias requeridas. Estas preparaciones aseguran un entorno estable y ayudan a prevenir problemas durante o después de la instalación.


### Actualizar Sistema
Para asegurarte de que tu sistema corre con las últimas mejoras de software y seguridad, siempre debes realizar primero una actualización del sistema. Para ello, ejecuta el siguiente comando:

```
sudo apt update && sudo apt upgrade -y
```
Esto garantiza que tu sistema tenga los últimos parches de seguridad y versiones de software antes de continuar.

### Instalar dependencias
Una vez completado el proceso de actualización, puedes proceder con la instalación de dependencias. Odoo se desplegará y ejecutará en tu máquina usando varios contenedores Docker. Esto requiere que Docker esté instalado primero. Para hacerlo, ejecuta el siguiente comando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un recorrido completo del proceso de instalación y cómo usar Docker está disponible en nuestra [guía Docker](dedicated-linux-docker.md).



### Configura tu dominio

Por defecto, Odoo corre en el host a través de los puertos 80 (HTTP) y 443 (HTTPS). Configura un dominio con registros DNS apuntando al host. Si el dominio está gestionado por nosotros, puedes hacerlo fácilmente usando la opción [EasyDNS](domain-easydns.md).




## Instalación
Ahora que todos los requisitos están cumplidos y las preparaciones necesarias hechas, puedes proceder con la instalación de la aplicación Odoo.

Cuando trabajas con múltiples configuraciones Docker, es buena práctica crear una estructura de directorios clara para mantener los proyectos aislados entre sí. Un enfoque común es crear una carpeta *docker* dentro del directorio home del usuario, con una subcarpeta dedicada para cada dominio. Así, varios proyectos pueden alojarse en el mismo servidor sin conflictos de configuración.

Por ejemplo, para preparar la estructura para el dominio `example.com`:

```
mkdir -p /docker/example.com
cd /docker/example.com
```

Dentro de este directorio de proyecto, se recomienda crear subcarpetas que serán montadas como volúmenes por los contenedores. Estos volúmenes permiten compartir datos entre servicios o mantenerlos persistentes. Un caso crítico es el webroot compartido, al que tanto nginx como certbot deben acceder para generar y renovar certificados SSL. Una estructura adecuada puede crearse así:

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

Esto proporciona directorios dedicados para configuración de nginx, certificados SSL, archivos include y contenido específico de Odoo como configuraciones y addons.




### Crear Docker Compose

Dentro de tu proyecto docker crea el archivo compose.yml usando `nano compose.yml`. Inserta el siguiente código:

```
services:
  db:
    image: postgres:16
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=odoo
      - POSTGRES_PASSWORD=odoo
      - PGDATA=/var/lib/postgresql/data/pgdata
    volumes:
      - odoo-db-data:/var/lib/postgresql/data

  odoo:
    image: odoo:18.0
    depends_on:
      - db
    ports:
      - "8069:8069"
    volumes:
      - odoo-web-data:/var/lib/odoo
      - ./config:/etc/odoo
      - ./addons:/mnt/extra-addons
    command: odoo -d odoo_db -i base --db_user=odoo --db_password=odoo --db_host=db

  nginx:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf:/etc/nginx/conf.d
      - ./nginx/inc:/etc/nginx/inc
      - ./nginx/ssl:/etc/nginx/ssl
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt
    depends_on:
      - odoo

  certbot:
    image: certbot/certbot
    volumes:
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt

volumes:
  odoo-db-data:
  odoo-web-data:
```



### Firewall

Para que nginx y certbot funcionen correctamente, debes permitir los puertos TCP 80 (HTTP) y 443 (HTTPS) a través del firewall. Estos puertos son esenciales porque certbot usa el puerto 80 para la validación HTTP, mientras que el puerto 443 es necesario para servir tráfico cifrado HTTPS. Si tienes UFW (Uncomplicated Firewall) habilitado, puedes añadir las reglas necesarias con estos comandos:

```
sudo ufw allow http
sudo ufw allow https
```

Luego, verifica las reglas ejecutando `sudo ufw status` para confirmar que los puertos están abiertos. Asegúrate de que ninguna otra configuración de firewall bloquee el acceso a estos puertos, de lo contrario la generación de certificados o el tráfico HTTPS seguro podrían fallar.



### Configuración de Nginx

La configuración de nginx comienza creando un archivo de configuración para tu dominio. Dentro del directorio `nginx/conf`, crea un nuevo archivo con el nombre de tu dominio. Para ello ejecuta `nano nginx/conf/example.com.conf` y añade las directivas básicas, reemplazando el placeholder con tu dominio real:

```
server {
    listen 80;
    server_name example.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

Esta configuración permite que certbot complete el desafío ACME y emita certificados SSL válidos. También asegura que todas las peticiones HTTP se redirijan a HTTPS.

Una vez guardado el archivo, puedes iniciar los contenedores necesarios. Estos incluyen la base de datos, Odoo y nginx. Ejecuta el siguiente comando:

```
sudo docker compose up -d db odoo nginx
```

Los contenedores correrán en segundo plano, y nginx ya usará la nueva configuración, permitiendo que certbot genere certificados en el siguiente paso.


### Generar certificados SSL

Ejecuta el siguiente comando para crear certificados SSL usando certbot. Asegúrate de especificar tu propio dominio tras la bandera `-d` y reemplaza la dirección de ejemplo user@mail.com con tu correo válido.

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

Genera un archivo DH parameter dedicado después para fortalecer aún más la seguridad del intercambio criptográfico de claves.

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

Ahora crea el archivo `ssl.conf` usando `nano nginx/ssl/ssl.conf` y añade el siguiente contenido. Asegúrate de reemplazar example.com con tu dominio:

```
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ecdh_curve X25519:prime256v1:secp384r1;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-CHACHA20-POLY1305;
ssl_prefer_server_ciphers off;
ssl_session_timeout 1d;
ssl_session_cache shared:MozSSL:10m;
ssl_dhparam "/etc/nginx/ssl/dhparam.pem";
ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
resolver 1.1.1.1 1.0.0.1 valid=300s;
```



## Configuración



### Configuración de Nginx

Edita el archivo de configuración nginx que creaste antes y reemplaza su contenido con la configuración mostrada a continuación para asegurar que tu sitio solo se sirva vía HTTPS.

No olvides insertar tu dominio real en la directiva `server_name` y especificar las rutas correctas a tus archivos de certificado en las directivas `ssl_certificate` y `ssl_certificate_key`.

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # Incluye la configuración SSL de Mozilla
    include /etc/nginx/ssl/ssl.conf;

    # Rutas de certificados (asegúrate que coincidan con tu volumen montado)
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Cabeceras de seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    access_log /var/log/nginx/odoo_access.log;
    error_log  /var/log/nginx/odoo_error.log;

    #Gzip
    include /etc/nginx/inc/gzip.conf;

    # Configuración proxy para Odoo
    location / {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Host $host;
        proxy_redirect off;
        proxy_request_buffering off;
        # Tiempos recomendados para solicitudes estándar
        proxy_connect_timeout 30s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
        send_timeout          60s;
    }

    # Cache para archivos estáticos
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://odoo:8069;
    }

    # Aumentar tiempos para long polling
    location /longpolling {
        proxy_pass http://odoo:8069;
        proxy_connect_timeout 60s;
        proxy_send_timeout    300s;
        proxy_read_timeout    300s;
        send_timeout          300s;
    }

    location /websocket {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name example.com;

    # Esto permite a Certbot acceder a la URL del desafío
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```



Una vez guardados los cambios en la configuración de nginx, debes aplicar los nuevos ajustes reiniciando el contenedor nginx:

```
sudo docker compose restart nginx
```

Reiniciar asegura que nginx cargue la configuración actualizada y comience a servir solicitudes con los nuevos parámetros de inmediato. Atiende cualquier mensaje de error durante el reinicio. Si hay problemas, puedes revisar los logs del contenedor con `sudo docker compose logs nginx` para diagnosticar posibles errores de configuración. Cuando el contenedor funcione sin errores, revisa tu sitio web para confirmar que HTTPS está activo y el sitio se sirve correctamente.



### Opciones de Configuración de Odoo

Para aplicar configuraciones personalizadas, puedes crear un archivo de configuración dedicado para Odoo. Coloca un nuevo archivo en `config/odoo.conf` y añade las opciones deseadas.

Dentro de este archivo puedes definir varios parámetros útiles: `list_db = False` oculta la selección de base de datos en la página de login, `proxy_mode = True` indica a Odoo que está detrás de un proxy inverso, y si quieres usar addons personalizados, puedes descomentar la línea `addons_path` y apuntarla al directorio de addons que creaste antes. Ejemplo de configuración:

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```



### Quitar el flag -i base

El flag `-i base` debe eliminarse del archivo `compose.yml`, de lo contrario recreará la base de datos cada vez que recrees el contenedor de Odoo. Para eliminarlo, accede al archivo compose. Abre el archivo con `nano compose.yml` y ajusta el comando así:

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```



## Accediendo al sitio web

Una vez que la instalación y configuración estén completas y todos los servicios estén corriendo, puedes acceder de forma segura a tu sitio web ingresando tu dominio en la barra de direcciones del navegador.



![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

Esto cargará la página de inicio de tu nueva instalación. Para el login inicial, se proporciona una cuenta por defecto con el usuario `admin` y la contraseña `admin`. Se recomienda encarecidamente que cambies estas credenciales.



## Conclusión y más Recursos

¡Felicidades! Ahora has instalado y configurado con éxito Odoo en tu VPS/servidor dedicado. También te recomendamos echar un vistazo a los siguientes recursos, que pueden ofrecerte ayuda y guía adicional durante tu proceso de configuración del servidor:

- [Odoo.com](https://odoo.com) - Sitio Oficial
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - Documentación de Odoo

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂