---
id: server-linux-gluetun-webui
title: "Configura Gluetun WebUI en un servidor Linux - Gestiona tu contenedor VPN fácilmente"
description: "Aprende a instalar y ejecutar Gluetun WebUI en tu VPS Linux para monitorear y gestionar tu contenedor VPN Gluetun → Aprende más ahora"
sidebar_label: Instalar Gluetun WebUI
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

[Gluetun WebUI](https://github.com/Sir-Scuzza/gluetun-webui) es una interfaz web ligera diseñada para simplificar la gestión del contenedor VPN Gluetun. Gluetun es un contenedor Docker popular que se usa para enrutar otras aplicaciones a través de una conexión VPN segura.

El WebUI añade un panel práctico que te permite monitorear el estado de la VPN, gestionar conexiones y controlar el comportamiento del contenedor sin necesidad de interactuar manualmente con comandos Docker o archivos de configuración.

![img](https://screensaver01.zap-hosting.com/index.php/s/PL3rDEKy2xA36CP/preview)

Autoalojar Gluetun WebUI en tu propio servidor te ofrece una interfaz centralizada para gestionar tu configuración VPN, lo que es especialmente útil cuando ejecutas múltiples contenedores que dependen de una conexión VPN Gluetun.

¿Planeas ejecutar Gluetun WebUI en tu VPS? Esta guía te lleva paso a paso por el proceso de instalación y configuración.

<InlineVoucher />



## Casos de uso de Gluetun WebUI

Gluetun WebUI es útil para cualquiera que ejecute aplicaciones en contenedores detrás de una VPN. Los casos de uso típicos incluyen:

- Monitorear el estado de la conexión VPN en tiempo real
- Gestionar contenedores que enrutan tráfico a través de la VPN Gluetun
- Simplificar la configuración y solución de problemas del contenedor VPN
- Controlar servicios VPN sin usar comandos Docker complejos
- Ejecutar una interfaz centralizada de gestión VPN para entornos autoalojados

El WebUI es especialmente útil en entornos homelab o configuraciones VPS donde varias aplicaciones dependen de un contenedor VPN.



## Requisitos previos

Antes de instalar Gluetun WebUI, asegúrate de que tu servidor cumpla con los siguientes requisitos.

| Hardware | Mínimo | Recomendado |
|----------|---------|-------------|
| CPU | 1 núcleo | 2 núcleos |
| RAM | 1 GB | 4 GB |
| Espacio en disco | 5 GB | 10 GB |

Software requerido:

- Docker
- Docker Compose

Si Docker no está instalado aún, sigue nuestra guía para instalar Docker antes de continuar.

<InlineServiceLink />

## Preparación

Antes de instalar Gluetun WebUI, verifica que Docker y Docker Compose estén disponibles en tu servidor. Ejecuta los siguientes comandos para comprobar que Docker está instalado y listo para usar:

```
docker --version
docker compose version
```
Luego crea un directorio para la instalación de Gluetun WebUI.
```
mkdir gluetun-webui
cd gluetun-webui
```
Este directorio contendrá la configuración de Docker Compose usada para ejecutar la interfaz web.

## Instalación

Crea un archivo Docker Compose para Gluetun WebUI.
```
nano compose.yaml
```
Inserta la siguiente configuración:

```yaml
services:
  gluetun-webui:
    image: ghcr.io/sir-scuzza/gluetun-webui:latest
    container_name: gluetun-webui
    restart: unless-stopped
    ports:
      - "8000:8000"
    environment:
      - GLUETUN_API_URL=http://gluetun:8000
    volumes:
      - ./data:/app/data
```

Esta configuración hará lo siguiente:

- Desplegar el contenedor Gluetun WebUI
- Conectarlo con la API de Gluetun
- Exponer el WebUI a través del puerto 8000
- Guardar datos de configuración persistentes en el directorio `data`

Guarda el archivo y sal del editor.

## Iniciar Gluetun WebUI

Inicia el contenedor usando Docker Compose.

```
docker compose up -d
```

Docker descargará la imagen requerida y lanzará el contenedor WebUI. Para verificar que el contenedor está corriendo, usa:

```
docker ps
```

## Acceder a la interfaz web

Una vez que el contenedor esté en ejecución, abre el WebUI en tu navegador.

```
http://TU_DIRECCIÓN_IP_DEL_SERVIDOR:8000
```

Reemplaza `TU_DIRECCIÓN_IP_DEL_SERVIDOR` con la dirección IP de tu VPS. Al abrir la interfaz podrás:

- Monitorear el estado de la conexión VPN
- Gestionar el comportamiento del contenedor Gluetun
- Ver detalles de configuración VPN
- Controlar servicios que se enrutan a través del contenedor VPN



## Conclusión

¡Felicidades! Has instalado con éxito **Gluetun WebUI** en tu servidor Linux. La interfaz web ahora te permite monitorear y gestionar fácilmente tu contenedor VPN Gluetun sin necesidad de usar comandos Docker manualmente.

Ejecutar Gluetun WebUI junto a tu contenedor VPN simplifica la gestión y te da una visión clara del estado y configuración de tu conexión VPN.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />