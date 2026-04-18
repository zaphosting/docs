---
id: software-zublo-linux-windows
title: "Software - Zublo (Linux/Windows)"
description: "Aprende a desplegar Zublo para la gestión segura de datos de suscripciones, seguimiento de pagos recurrentes y análisis de datos autohospedados con Docker -> Aprende más ahora"
sidebar_label: Software - Zublo (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Zublo es un rastreador de suscripciones de código abierto y autohospedado diseñado para ayudarte a gestionar pagos recurrentes y datos relacionados en un solo lugar. En esta guía, aprenderás a desplegar Zublo en un servidor Linux o Windows usando Docker y a verificar que la interfaz web funcione correctamente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de que tu servidor cumpla con los requisitos básicos y tenga Docker instalado.

### Requisitos

| Componente | Mínimo recomendado |
| --- | --- |
| CPU | 1 vCore |
| RAM | 512 MB |
| Almacenamiento | 1 GB de espacio libre en disco |
| Sistema operativo | Linux o Windows con soporte para Docker |
| Red | Acceso al puerto `9597` |

### Software requerido

Necesitas tener instalado el siguiente software:

| Software | Propósito |
| --- | --- |
| [Docker](https://www.docker.com/) | Ejecuta el contenedor de Zublo |
| Docker Compose | Inicia y gestiona la pila de contenedores |

:::info Requisito de Docker
Esta guía se basa en el método de despliegue con Docker referenciado en el repositorio del proyecto. Si Docker no está instalado aún, debes completarlo antes de continuar.
:::

:::caution Acceso al puerto
Zublo usa el puerto `9597` por defecto. Asegúrate de que este puerto no esté en uso por otro servicio y que esté permitido en tu firewall si quieres acceder a la interfaz web de forma remota.
:::

## Acerca de Zublo

Zublo está pensado para rastrear suscripciones, pagos recurrentes y datos relacionados con gastos a través de una aplicación web autohospedada. Según el repositorio del proyecto, es Docker-first y está diseñado para usuarios que quieren controlar sus propios datos.

### Qué ofrece la aplicación

Según la información disponible del proyecto, Zublo se enfoca en las siguientes áreas:

| Área funcional | Descripción |
| --- | --- |
| Seguimiento de suscripciones | Gestiona servicios y pagos recurrentes |
| Autohospedaje | Mantén tus datos de suscripción en tu propio servidor |
| Interfaz web | Accede a la aplicación desde un navegador |
| Acceso API | Usa el endpoint API incorporado |
| Backend administrativo | Accede a la interfaz de administración de PocketBase |

:::note Disponibilidad de funciones
Algunas funciones avanzadas mencionadas en resúmenes de terceros, como análisis asistido por IA, pueden depender de la versión actual del proyecto. Si una función no está visible en tu instalación, revisa el repositorio oficial para detalles específicos de la versión: [Repositorio GitHub de Zublo](https://github.com/danielalves96/zublo)
:::

## Crea el directorio del proyecto Zublo

Primero, crea un directorio dedicado para tu despliegue de Zublo para mantener organizada la configuración y los datos persistentes.

### Linux

Ejecuta los siguientes comandos en tu terminal:

```bash
mkdir -p zublo-data
cd zublo-data
```

### Windows

Si usas PowerShell, ejecuta:

```powershell
mkdir zublo-data
cd zublo-data
```

Esta carpeta contendrá tu archivo `docker-compose.yml` y el directorio de datos persistentes de la aplicación.

## Crea la configuración de Docker Compose

A continuación, crea un archivo `docker-compose.yml` dentro de tu directorio de proyecto.

### Configuración de ejemplo

Usa la siguiente configuración:

```yaml
services:
  zublo:
    image: ghcr.io/danielalves96/zublo:latest
    container_name: zublo
    restart: unless-stopped
    ports:
      - "9597:9597"
    environment:
      PB_ENCRYPTION_KEY: "[your_secure_encryption_key]"
    volumes:
      - ./zublo-data:/pb/pb_data
```

### Resumen de configuración

| Clave | Valor de ejemplo | Propósito |
| --- | --- | --- |
| `image` | `ghcr.io/danielalves96/zublo:latest` | Descarga la última imagen del contenedor Zublo |
| `container_name` | `zublo` | Define un nombre legible para el contenedor |
| `restart` | `unless-stopped` | Reinicia el contenedor automáticamente tras reinicios o fallos |
| `ports` | `9597:9597` | Expone la aplicación web en el puerto `9597` |
| `PB_ENCRYPTION_KEY` | `[your_secure_encryption_key]` | Protege los datos sensibles almacenados |
| `volumes` | `./zublo-data:/pb/pb_data` | Persiste los datos de la aplicación en tu servidor |

:::danger Usa una clave de cifrado fuerte
No dejes la clave de cifrado con un valor débil o por defecto. Reemplaza `[your_secure_encryption_key]` por un secreto largo y aleatorio antes de iniciar el contenedor en producción.
:::

### Guarda el archivo

Guarda el archivo como `docker-compose.yml` en tu directorio actual. Una vez guardado, estarás listo para iniciar el servicio.

## Inicia Zublo

Después de crear el archivo Compose, inicia la pila de contenedores.

```bash
docker compose up -d
```

Si tu entorno usa la sintaxis antigua de Docker Compose, puede que necesites usar:

```bash
docker-compose up -d
```

### Verifica que el contenedor esté en ejecución

Puedes comprobar el estado del contenedor con:

```bash
docker ps
```

Deberías ver un contenedor llamado `zublo` en la lista.

### Consulta los logs si es necesario

Si el servicio no inicia correctamente, inspecciona los logs:

```bash
docker logs zublo
```

Esto te ayudará a identificar problemas como configuración inválida, conflictos de puerto o problemas de permisos con los datos persistentes.

## Accede a la interfaz web

Una vez que el contenedor esté en ejecución, puedes abrir Zublo en tu navegador.

### URLs de la aplicación

Reemplaza `[your_server_ip]` por la dirección IP pública o local de tu servidor.

| Interfaz | URL |
| --- | --- |
| Aplicación principal | `http://[your_server_ip]:9597` |
| Interfaz administrativa de PocketBase | `http://[your_server_ip]:9597/_/` |
| Endpoint API | `http://[your_server_ip]:9597/api/` |

:::info Localhost vs acceso remoto
Si trabajas directamente en la misma máquina donde está instalado Zublo, también puedes usar `http://localhost:9597`. Para acceso remoto, usa la IP real de tu servidor o un dominio configurado.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Configura un acceso seguro

Después de confirmar que Zublo es accesible, deberías revisar cómo está expuesto a internet.

### Consideraciones de firewall

Si no puedes acceder a la aplicación desde otro dispositivo, confirma que el puerto `9597` esté abierto en la configuración de tu firewall.

| Puerto | Protocolo | Propósito |
| --- | --- | --- |
| `9597` | TCP | Interfaz web de Zublo, panel administrativo y API |

### Uso de proxy inverso

Si quieres usar un dominio como `[your_domain]`, puedes colocar Zublo detrás de un proxy inverso como Nginx u otra solución compatible. En esa configuración, el proxy reenvía las solicitudes a `http://127.0.0.1:9597` o a la dirección interna del host Docker.

:::tip Usa HTTPS para acceso público
Si planeas exponer Zublo públicamente, se recomienda usar un proxy inverso con SSL para que tus datos de suscripción estén cifrados en tránsito.
:::

## Gestiona los datos persistentes

Zublo almacena sus datos persistentes en el directorio montado definido en el archivo Compose.

### Ubicación de los datos

En esta guía, se usa el siguiente mapeo de volumen:

```yaml
volumes:
  - ./zublo-data:/pb/pb_data
```

Esto significa que tus datos de la aplicación se almacenan en la carpeta local `zublo-data` dentro de tu directorio de proyecto.

### Por qué la persistencia es importante

El almacenamiento persistente asegura que tus datos de la aplicación permanezcan disponibles después de:

- reinicios del contenedor
- reinicios del servidor
- actualizaciones de la imagen
- operaciones de mantenimiento

:::caution Recomendación de copia de seguridad
Como Zublo almacena datos personales importantes de suscripciones, deberías hacer copias de seguridad regulares del directorio `zublo-data` antes de realizar cambios o actualizaciones importantes.
:::

## Mantenimiento básico

Una vez que Zublo esté en funcionamiento, puede que necesites actualizarlo o reiniciarlo ocasionalmente.

### Reiniciar el contenedor

```bash
docker restart zublo
```

### Detener el despliegue

```bash
docker compose down
```

### Actualizar a la última imagen

Descarga la última imagen y recrea el contenedor:

```bash
docker compose pull
docker compose up -d
```

### Referencia útil de comandos

| Comando | Propósito |
| --- | --- |
| `docker compose up -d` | Inicia Zublo en segundo plano |
| `docker ps` | Verifica los contenedores en ejecución |
| `docker logs zublo` | Consulta los logs del contenedor |
| `docker restart zublo` | Reinicia el contenedor |
| `docker compose down` | Detiene y elimina el contenedor |
| `docker compose pull` | Descarga la última imagen |

## Solución de problemas

Si Zublo no funciona como esperas, revisa las siguientes causas comunes.

### El puerto `9597` ya está en uso

Si Docker reporta un error de enlace de puerto, otro servicio ya está usando `9597`. Debes detener el servicio en conflicto o cambiar el mapeo del puerto en el host.

Ejemplo con un puerto externo diferente:

```yaml
ports:
  - "9600:9597"
```

En ese caso, accederías a la aplicación a través de `http://[your_server_ip]:9600`.

### El contenedor inicia pero la página no carga

Verifica lo siguiente:

- confirma que el contenedor está en ejecución con `docker ps`
- revisa los logs con `docker logs zublo`
- verifica que tu firewall permita el puerto seleccionado
- confirma que usas la dirección IP o nombre de host correcto

### Problemas con la clave de cifrado

Si cambias `PB_ENCRYPTION_KEY` después de la configuración inicial, los datos cifrados existentes pueden dejar de ser legibles. Si necesitas rotar esta clave, revisa primero la documentación oficial del proyecto porque el comportamiento exacto de migración no está documentado en el material fuente proporcionado.

:::note Detalles faltantes sobre comportamiento
El material fuente proporcionado no documenta completamente todos los pasos administrativos del primer inicio, comportamiento de creación de cuentas u opciones avanzadas de configuración. Si necesitas esos detalles, revisa la documentación del proyecto original: [Repositorio GitHub de Zublo](https://github.com/danielalves96/zublo)
:::

## Conclusión

Felicitaciones, has instalado y configurado Zublo con éxito en Linux o Windows usando Docker. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para ayudarte! 🙂