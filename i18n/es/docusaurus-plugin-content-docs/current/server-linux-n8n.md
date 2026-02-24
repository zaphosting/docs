---
id: server-linux-n8n
title: "Configura n8n en un Servidor Linux - Crea Automatizaciones de Flujo de Trabajo Poderosas"
description: "Descubre cómo instalar y configurar n8n para autoalojamiento y crear una automatización de flujo de trabajo con IA que facilite tu trabajo → Aprende más ahora"
sidebar_label: Instalar n8n
services:
  - vserver-service-n8n
  - dedicated-service-n8n
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';


## Introducción

[n8n](https://n8n.io/) es un editor visual líder para iteraciones rápidas donde puedes crear flujos de trabajo automatizados y ver resultados al instante. Perfecto tanto para automatizaciones diarias como para flujos de trabajo complejos con agentes de IA.

![img](https://screensaver01.zap-hosting.com/index.php/s/skzPCRajMZPbfw3/preview)

El soporte para autoalojamiento y el editor Low Code hacen de n8n el favorito de cualquier Dev. Si quieres máximo control, personalizaciones y mantener los costos bajos a largo plazo, la opción de autoalojamiento es una excelente elección para ti.

¿Planeas alojar n8n tú mismo? Te guiaremos paso a paso sobre cómo configurarlo y ajustarlo, junto con todo lo que debes tener en cuenta.

<InlineVoucher />



## Casos de uso de n8n

n8n puede usarse en muchos escenarios cotidianos y es ideal para cualquiera que quiera automatizar tareas, usar un editor low code, crear agentes de IA, liderar automatizaciones, potenciar CRM, operaciones IT, operaciones de seguridad, prototipado backend ¡y mucho más! n8n es perfecto tanto para principiantes como para expertos.

n8n ofrece más de 1367 integraciones como Google Sheets, Telegram, MySQL, Slack, Discord, Postgres con combinaciones de automatización populares como HubSpot y Salesforce, Twilio y WhatsApp, GitHub y Jira, Asana y Slack, Asana y Salesforce, Jira y Slack y muchísimos templates de la comunidad.

## Requisitos previos

Aunque n8n es ligero en su núcleo, el uso de recursos puede aumentar con el tiempo según la cantidad de flujos de trabajo, llamadas API y nodos con datos pesados. Recomendamos los siguientes requisitos de hardware para alojar n8n en tu VPS.

| Hardware   | Mínimo      | Recomendado               |
| ---------- | ----------- | ------------------------- |
| CPU        | 1 núcleo vCPU | 2 núcleos vCPU           |
| RAM        | 2 GB        | 4 GB                      |
| Espacio en disco | 20 GB   | 50 GB                     |
<InlineServiceLink />

## Preparación

Antes de comenzar, necesitamos instalar Docker y actualizar los paquetes del sistema. Ya tenemos una guía sobre [Instalar Docker](dedicated-linux-docker.md). Asegúrate de completar esto antes de empezar con la instalación.

## Instalación
Después de instalar Docker en tu servidor, ejecuta el siguiente comando para verificar la instalación:

```
docker --version
docker compose version
```

### Crear un archivo `.env`

Crea un directorio de proyecto para almacenar los archivos locales de n8n y las configuraciones de entorno de n8n y navega dentro:

```
mkdir n8n-compose
cd n8n-compose
```

Dentro del directorio `n8n-compose`, crea un archivo `.env` usando `nano .env` e incluye el siguiente código con la configuración del entorno de n8n.

```
# DOMAIN_NAME y SUBDOMAIN juntos determinan desde dónde será accesible n8n
# El dominio de nivel superior desde donde se servirá
DOMAIN_NAME=zap.cloud

# El subdominio desde donde se servirá
SUBDOMAIN=silver-octopus-xxxxx

# El ejemplo anterior sirve n8n en: https://silver-octopus-xxxxx.zap.cloud

# Zona horaria opcional que se usa para Cron y otros nodos de programación
GENERIC_TIMEZONE=Europe/Berlin

# Dirección de email para la creación del certificado TLS/SSL
SSL_EMAIL=hello@zap-hosting.com
```

:::info
Para encontrar DOMAIN_NAME y SUBDOMAIN, ve a la página de producto de tu VPS en ZAP-Hosting y localiza tu `Nombre de host`.


![img](https://screensaver01.zap-hosting.com/index.php/s/7DoXD5F9m2oYTXX/preview)

:::

Introduce la parte `zap.cloud` en DOMAIN_NAME y la parte anterior en SUBDOMAIN (ejemplo silver-octopus-xxxxx).

![img](https://screensaver01.zap-hosting.com/index.php/s/EaQn97J25TpwDSa/preview)

:::warning Requisito HTTPS
No uses una dirección IP directa en el archivo .env. n8n requiere conexión HTTPS para acceder al sitio web, y los certificados SSL solo se emiten para dominios, no para direcciones IP directas.
:::

Si quieres alojar n8n en tu propio dominio, crea un subdominio para n8n creando un registro A en el administrador DNS de tu dominio apuntando a la IP del VPS que usas.

| Nombre           | Tipo | Valor          | TTL  | Prioridad |
| ---------------- | ---- | -------------- | ---- | --------- |
| n8n (Subdominio) | A    | Dirección IPv4 | 1440 | 0         |

### Crear directorio para archivos locales

Dentro del directorio del proyecto, crea otro directorio llamado `local-files` para compartir archivos entre la instancia de n8n y el sistema host:

```
mkdir local-files
```

### Crear archivo Docker Compose

Crea el archivo Docker Compose `compose.yaml` usando `nano compose.yaml` y pega el siguiente contenido:

```yaml
services:
  traefik:
    image: "traefik"
    restart: always
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.mytlschallenge.acme.tlschallenge=true"
      - "--certificatesresolvers.mytlschallenge.acme.email=${SSL_EMAIL}"
      - "--certificatesresolvers.mytlschallenge.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - traefik_data:/letsencrypt
      - /var/run/docker.sock:/var/run/docker.sock:ro

  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "127.0.0.1:5678:5678"
    labels:
      - traefik.enable=true
      - traefik.http.routers.n8n.rule=Host(`${SUBDOMAIN}.${DOMAIN_NAME}`)
      - traefik.http.routers.n8n.tls=true
      - traefik.http.routers.n8n.entrypoints=web,websecure
      - traefik.http.routers.n8n.tls.certresolver=mytlschallenge
      - traefik.http.middlewares.n8n.headers.SSLRedirect=true
      - traefik.http.middlewares.n8n.headers.STSSeconds=315360000
      - traefik.http.middlewares.n8n.headers.browserXSSFilter=true
      - traefik.http.middlewares.n8n.headers.contentTypeNosniff=true
      - traefik.http.middlewares.n8n.headers.forceSTSHeader=true
      - traefik.http.middlewares.n8n.headers.SSLHost=${DOMAIN_NAME}
      - traefik.http.middlewares.n8n.headers.STSIncludeSubdomains=true
      - traefik.http.middlewares.n8n.headers.STSPreload=true
      - traefik.http.routers.n8n.middlewares=n8n@docker
    environment:
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_HOST=${SUBDOMAIN}.${DOMAIN_NAME}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - N8N_RUNNERS_ENABLED=true
      - NODE_ENV=production
      - WEBHOOK_URL=https://${SUBDOMAIN}.${DOMAIN_NAME}/
      - GENERIC_TIMEZONE=${GENERIC_TIMEZONE}
      - TZ=${GENERIC_TIMEZONE}
    volumes:
      - n8n_data:/home/node/.n8n
      - ./local-files:/files

volumes:
  n8n_data:
  traefik_data:
```

Esto instala n8n, emite el certificado SSL, configura y pone n8n en línea en el dominio.

### Iniciar n8n

Para iniciar n8n, ejecuta este comando:

```
sudo docker compose up -d
```

Para detener n8n, ejecuta este comando:

```
sudo docker compose stop
```

### Acceder a n8n

Después de iniciar n8n, el siguiente paso es acceder a él con un navegador web. Ingresa la URL (o el nombre de host si lo usaste) para entrar a la página de configuración. Aquí, debes crear una cuenta de Admin antes de continuar.

![img](https://screensaver01.zap-hosting.com/index.php/s/3SNBcAtXco8RTQr/preview)

:::info Aviso de contraseña
¡Asegúrate de recordar tu contraseña para uso futuro!
:::

Luego, aparecerá una pequeña encuesta pidiéndote algunos datos básicos.

![img](https://screensaver01.zap-hosting.com/index.php/s/bY8sDwenKtSEBg4/preview)

Opcionalmente, puedes acceder gratis a algunas funciones de pago que requieren que ingreses tu email y recibas un correo con la clave de licencia. Si te interesa, ingresa tu correo y solicita la clave de licencia.

![img](https://screensaver01.zap-hosting.com/index.php/s/7jEtswn3s3gZ3Es/preview)

La clave de licencia llegará instantáneamente a tu email. Copia esa clave y pégala en Configuración > Uso y Planes > Ingresar clave de activación.

### Crear el primer flujo de trabajo

Después de eso, podrás visitar el panel y comenzar a usar n8n ¡de inmediato!

![img](https://screensaver01.zap-hosting.com/index.php/s/RbFAoJ9ZRD9m8Px/preview)

Ahora puedes empezar con un lienzo en blanco o trabajar con una plantilla prehecha. ¡Tu instalación de n8n está lista!

![img](https://screensaver01.zap-hosting.com/index.php/s/y93sTPG9Qwt5PKo/preview)



## Conclusión y más recursos

¡Genial! Has instalado n8n exitosamente en tu servidor y puedes empezar a usarlo ya. También te recomendamos echar un vistazo a los siguientes recursos, que pueden darte ayuda y guía adicional durante la configuración de tu servidor:

- [n8n.io](https://n8n.io/) - Sitio oficial
- [docs.n8n.io](https://docs.n8n.io/) - Documentación de n8n

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂



<InlineVoucher />