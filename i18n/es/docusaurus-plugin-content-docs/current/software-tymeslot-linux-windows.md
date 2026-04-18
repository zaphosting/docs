---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Aprende a desplegar Tymeslot con Docker, gestionar contenedores docker y revisar detalles clave de configuración para entornos de hosting Linux y Windows. -> Aprende más ahora"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Tymeslot es una plataforma de código abierto para la programación de reuniones y citas, construida con Elixir y Phoenix LiveView. En esta guía, aprenderás qué requiere Tymeslot, cómo desplegarlo con Docker en Linux o Windows, y qué puntos de configuración debes revisar antes de ponerlo en producción.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, necesitas un sistema que pueda ejecutar Docker de forma fiable y exponer Tymeslot a través de la red.

### Requisitos

| Requisito | Recomendación |
| --- | --- |
| CPU | 1 vCPU o más |
| RAM | Al menos 2 GB |
| Espacio en disco | Al menos 10 GB |
| Sistema operativo | Linux o Windows |
| Plataforma de contenedores | [Docker](https://www.docker.com/) |
| Puerto de red | `4000/tcp` |

### Qué necesitas tener listo

| Elemento | Por qué es necesario |
| --- | --- |
| Un servidor Linux o sistema Windows | Para alojar la aplicación |
| Docker instalado | Tymeslot incluye archivos relacionados con Docker en su repositorio |
| Acceso de red abierto al `4000` o un proxy inverso | Para acceder a la interfaz web |
| Un nombre de host como `[your_domain]` | Recomendado para uso en producción |
| Un secreto fuerte generado | Requerido para la seguridad de sesiones y la aplicación |

:::info Requisito de instalación de Docker
Esta guía se centra en Docker porque el repositorio de Tymeslot incluye archivos relacionados como `Dockerfile.docker` y `docker-compose.yml`. La instalación nativa con Elixir y Phoenix puede ser posible, pero los pasos exactos para producción no fueron completamente verificables con el material fuente proporcionado.
:::

### Nota para Windows

En Windows, generalmente necesitas un entorno Docker funcional como Docker Desktop. Si usas Docker para Windows, asegúrate de que la virtualización esté habilitada y que Docker Desktop esté en ejecución antes de continuar.

## Acerca de Tymeslot

Tymeslot se describe en su repositorio como una plataforma de código abierto para la programación de reuniones, construida con Elixir y Phoenix LiveView. Está pensada para autoalojamiento y también puede usarse a través de la oferta en la nube gestionada del proyecto.

### Detalles verificados del proyecto

| Atributo | Valor |
| --- | --- |
| Nombre | Tymeslot |
| Categoría | Programación |
| Repositorio fuente | `https://github.com/tymeslot/tymeslot` |
| Mención semanal | Self-Host Weekly, 10 de abril de 2026 |
| Tecnología | Elixir / Phoenix LiveView |
| Soporte para autoalojamiento | Sí |

:::note Verificación de la fuente
El repositorio confirma el nombre del proyecto, propósito y stack tecnológico. Sin embargo, algunos detalles en tiempo de ejecución como el nombre exacto de la imagen Docker publicada, lista completa de variables de entorno y el mapeo oficial de puertos para producción no fueron totalmente visibles en el snapshot fuente proporcionado, por lo que esas partes deben verificarse directamente en el repositorio upstream antes de producción.
:::

## Método de despliegue

Para la mayoría de usuarios, Docker es el método de despliegue más sencillo porque mantiene las dependencias aisladas y facilita la gestión de actualizaciones.

### Por qué se recomienda Docker

| Beneficio | Explicación |
| --- | --- |
| Configuración más sencilla | No necesitas instalar Elixir, Erlang y Phoenix manualmente |
| Actualizaciones más limpias | Puedes reemplazar imágenes docker sin reconstruir el entorno host |
| Mejor portabilidad | La misma configuración de contenedor funciona en Linux y Windows |
| Reversión más simple | Puedes volver a una versión anterior de la imagen si es necesario |

### Limitación importante

:::caution El nombre de la imagen Docker debe verificarse
El borrador proporcionado usó `youruser/tymeslot:latest` como ejemplo de imagen, pero esto es solo un marcador de posición y no un nombre oficial verificado. Antes del despliegue, revisa el repositorio de Tymeslot, su `README-Docker.md` o las instrucciones del registro de contenedores del proyecto para confirmar la fuente correcta de la imagen.
:::

## Instalar Tymeslot con Docker

Esta sección muestra un flujo de despliegue basado en Docker usando una referencia de imagen marcador de posición. Reemplaza `[your_tymeslot_image]` con el nombre de imagen verificado del proyecto oficial Tymeslot.

### Descargar la imagen

```bash
docker pull [your_tymeslot_image]
```

### Generar una clave secreta

En Linux, puedes generar un secreto fuerte con:

```bash
openssl rand -base64 64 | tr -d '\n'
```

Guarda el resultado de forma segura y úsalo como `[your_secret_key_base]`.

En Windows, puedes generar un valor aleatorio seguro usando otro método confiable si `openssl` no está disponible en tu entorno de shell.

### Ejecutar el contenedor

```bash
docker run -d \
  --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE='[your_secret_key_base]' \
  -e PHX_HOST='[your_domain_or_ip]' \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  [your_tymeslot_image]
```

### Referencia de parámetros

| Parámetro | Significado |
| --- | --- |
| `-d` | Inicia el contenedor en modo desacoplado |
| `--name tymeslot` | Asigna un nombre legible al contenedor |
| `-p 4000:4000` | Mapea el puerto `4000` del host al puerto `4000` del contenedor |
| `-e SECRET_KEY_BASE=...` | Establece el secreto de la aplicación |
| `-e PHX_HOST=...` | Define el nombre de host usado por Phoenix |
| `-v tymeslot_data:/app/data` | Persiste los datos de la aplicación |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Persiste los datos de PostgreSQL si se usa dentro del contenedor |

:::caution Verifica primero las rutas de los volúmenes
Las rutas de volúmenes mostradas arriba provienen del material borrador y no fueron confirmadas completamente en la documentación oficial. Revisa la documentación oficial de Docker para Tymeslot antes de confiar en estas rutas exactas en producción.
:::

### Verificar estado del contenedor

```bash
docker ps
```

Para revisar los logs:

```bash
docker logs tymeslot
```

Si tienes problemas en el arranque, los logs son el primer lugar que debes revisar.

## Despliegue opcional con Docker Compose

Si prefieres gestionar contenedores docker con Compose, puedes definir el servicio en un archivo `docker-compose.yml`. Esto suele ser más fácil de mantener que comandos largos de `docker run`.

### Ejemplo de archivo Compose

```yaml
services:
  tymeslot:
    image: [your_tymeslot_image]
    container_name: tymeslot
    ports:
      - "4000:4000"
    environment:
      SECRET_KEY_BASE: "[your_secret_key_base]"
      PHX_HOST: "[your_domain_or_ip]"
    volumes:
      - tymeslot_data:/app/data
      - tymeslot_pg:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  tymeslot_data:
  tymeslot_pg:
```

Inicia la pila con:

```bash
docker compose up -d
```

:::tip Gestión con Compose
Usar Compose facilita actualizaciones, reinicios y copias de seguridad porque la configuración del contenedor queda en un solo archivo. Esto es especialmente útil si gestionas varias imágenes docker en el mismo host.
:::

## Configurar Tymeslot

Después de que el contenedor esté en ejecución, revisa los valores de configuración más importantes.

### Variables de entorno principales

| Variable | Propósito |
| --- | --- |
| `SECRET_KEY_BASE` | Protege sesiones y secretos de la aplicación |
| `PHX_HOST` | Define el nombre de host público o dirección IP |

Usa los marcadores de posición de esta forma:

- `[your_secret_key_base]` es tu secreto seguro generado
- `[your_domain_or_ip]` es el nombre de host público o IP del servidor, por ejemplo `schedule.[your_domain]` o `[your_server_ip]`

### Configuración SMTP

El material borrador indica que SMTP puede configurarse para notificaciones por correo en `config/prod.exs`. Ejemplo:

```elixir
config :tymeslot, Tymeslot.Mailer,
  adapter: Bamboo.SMTPAdapter,
  server: "smtp.example.com",
  port: 587,
  username: "your_email@example.com",
  password: "your_password",
  tls: :if_available,
  auth: :always
```

:::note Verificación de configuración SMTP
El ejemplo anterior proviene del borrador y refleja una configuración típica de mailer en Elixir. Aún así, deberías compararlo con los archivos actuales de configuración de Tymeslot porque los ajustes de correo pueden cambiar entre versiones.
:::

## Red y acceso

Una vez que Tymeslot esté en ejecución, debes asegurarte de que sea accesible desde tu navegador.

### Acceder a la interfaz web

Abre la siguiente URL en tu navegador:

```text
http://[your_server_ip]:4000
```

Si configuraste un proxy inverso y DNS, puedes usar en su lugar:

```text
https://[your_domain]
```

### Referencia de puertos

| Puerto | Protocolo | Propósito |
| --- | --- | --- |
| `4000` | TCP | Acceso web por defecto según la configuración del borrador |

### Consideraciones de firewall

Debes permitir tráfico entrante al `4000/tcp` si accedes a Tymeslot directamente.

:::caution Exposición pública
Si expones Tymeslot directamente a internet, deberías considerar seriamente ponerlo detrás de un proxy inverso con HTTPS. Esto mejora la seguridad y te da un acceso más limpio basado en dominio.
:::

## Recomendación de proxy inverso

Se recomienda un proxy inverso si quieres usar un nombre de dominio y certificado TLS.

### Por qué usar un proxy inverso

| Beneficio | Explicación |
| --- | --- |
| Soporte HTTPS | Encripta el tráfico entre usuarios y tu servicio |
| Acceso basado en dominio | Permite usar `[your_domain]` en lugar de un puerto crudo |
| Gestión más fácil de certificados | Funciona bien con Let's Encrypt y herramientas similares |
| Acceso público más limpio | Oculta los puertos internos de la aplicación |

### Qué verificar

La configuración exacta del proxy inverso depende de si usas Nginx, Apache u otro servidor web. Como no hubo un ejemplo oficial completo en el material fuente, debes verificar los encabezados requeridos y el manejo de websockets en la documentación oficial de Tymeslot antes del despliegue.

## Notas sobre instalación nativa

Tymeslot está construido con Elixir y Phoenix LiveView, por lo que una instalación nativa puede ser posible en entornos de desarrollo Linux o Windows. El borrador incluyó estos comandos:

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### Qué tener en cuenta

| Tema | Nota |
| --- | --- |
| Elixir y Erlang | Deben estar instalados en versiones compatibles |
| Dependencias de Phoenix | Pueden requerir herramientas de compilación adicionales |
| Configuración de base de datos | Debe estar correctamente configurada antes de migraciones |
| Endurecimiento para producción | Usualmente más complejo que con Docker |

:::danger Despliegue nativo en producción requiere verificación
Los pasos de instalación nativa arriba fueron incluidos en el borrador pero no confirmados completamente en el snapshot del repositorio oficial. No debes confiar en ellos para producción sin revisar primero la documentación y archivos oficiales actuales de Tymeslot.
:::

## Verificar la instalación

Después del despliegue, confirma que la aplicación funciona correctamente.

### Comprobaciones básicas

| Comprobación | Resultado esperado |
| --- | --- |
| `docker ps` | El contenedor `tymeslot` está en ejecución |
| `docker logs tymeslot` | No hay errores repetidos de inicio o base de datos |
| Acceso desde navegador | La interfaz de Tymeslot carga correctamente |
| Prueba de puerto | El `4000` responde en el servidor |

### Problemas comunes

| Problema | Causa posible |
| --- | --- |
| La página no carga | El puerto `4000` está bloqueado o el contenedor no está en ejecución |
| El contenedor se cierra inmediatamente | Variables de entorno inválidas o dependencias faltantes |
| Errores de base de datos en logs | Fallo en la inicialización de la base de datos o ruta de almacenamiento incorrecta |
| Comportamiento erróneo del hostname | `PHX_HOST` no está configurado correctamente |

## Actualizar Tymeslot

Cuando haya una versión nueva disponible, actualiza el despliegue con cuidado.

### Flujo de actualización con Docker

1. Descarga la imagen actualizada:
   ```bash
   docker pull [your_tymeslot_image]
   ```
2. Detén el contenedor actual:
   ```bash
   docker stop tymeslot
   ```
3. Elimina el contenedor viejo:
   ```bash
   docker rm tymeslot
   ```
4. Inicia un nuevo contenedor con la misma configuración.

Si usas Compose, normalmente puedes actualizar con:

```bash
docker compose pull
docker compose up -d
```

:::tip Copia de seguridad antes de actualizar
Antes de actualizar, haz copia de seguridad de tus volúmenes persistentes y cualquier dato de base de datos relacionado. Esto te da una vía de recuperación si la nueva versión introduce una migración o problema de compatibilidad.
:::

## Referencias adicionales

| Recurso | Enlace |
| --- | --- |
| Repositorio oficial de Tymeslot | [GitHub - Tymeslot](https://github.com/tymeslot/tymeslot) |
| Sitio oficial de Docker | [Docker](https://www.docker.com/) |
| Mención en Self-Host Weekly | [Self-Host Weekly - 10 April 2026](https://selfh.st/weekly/2026-04-10/) |

## Conclusión

Felicidades, has revisado y desplegado exitosamente Tymeslot en Linux o Windows usando Docker. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible diariamente para ayudarte! 🙂