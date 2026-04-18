---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Aprende a desplegar Tymeslot con Docker, contenedores Docker y conceptos básicos de instalación de Docker en Linux o Windows para programación autohospedada. -> Aprende más ahora"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Tymeslot es una plataforma de código abierto para la programación de reuniones y citas, construida con Elixir y Phoenix LiveView. En esta guía, aprenderás qué es Tymeslot, qué necesitas para ejecutarlo y cómo desplegarlo en Linux o Windows usando Docker.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de desplegar Tymeslot, debes asegurarte de que tu sistema cumple con los requisitos básicos y que Docker está disponible.

### Requisitos

Los siguientes requisitos se basan en la información disponible del proyecto y el borrador de configuración proporcionado:

| Requisito | Recomendación |
|---|---|
| CPU | Al menos `1` vCPU |
| RAM | Al menos `2 GB` |
| Espacio en disco | Al menos `10 GB` |
| Sistema operativo | Linux o Windows |
| Runtime de contenedores | Docker |
| Red | Acceso al puerto `4000` |

### Qué está verificado y qué no

:::info Disponibilidad de la fuente
El repositorio de Tymeslot confirma que el proyecto es una plataforma de programación de reuniones de código abierto construida con Elixir y Phoenix LiveView, y que existen archivos relacionados con Docker como `Dockerfile.docker` y `docker-compose.yml` en el repositorio.

Sin embargo, los pasos exactos para el despliegue en producción, el nombre de la imagen y todas las variables de entorno necesarias no son completamente verificables con el material fuente proporcionado aquí. Por eso, esta guía usa la información del borrador disponible y marca claramente los valores que debes verificar en el repositorio oficial antes de usar en producción.
:::

### Instalar Docker

Necesitas Docker antes de poder ejecutar Tymeslot en un contenedor.

- En Linux, instala Docker Engine usando la documentación oficial de [Docker](https://docs.docker.com/engine/install/)
- En Windows, instala [Docker Desktop](https://www.docker.com/products/docker-desktop/)

:::tip Docker para Windows
Si usas Docker para Windows, asegúrate de que la virtualización esté habilitada y que Docker Desktop esté en ejecución antes de continuar.
:::

## Resumen del Software

Tymeslot pertenece a la categoría *Scheduling* y está diseñado para la gestión autohospedada de citas y reuniones.

| Propiedad | Valor |
|---|---|
| Nombre | `Tymeslot` |
| Categoría | `Scheduling` |
| Fuente | `https://github.com/tymeslot/tymeslot` |
| Tecnología | `Elixir`, `Phoenix LiveView` |
| Estilo de despliegue | Autohospedado, compatible con Docker |
| Mención semanal | Self-Host Weekly, 10 de abril de 2026 |

### Por qué usar Tymeslot

Tymeslot puede ser útil si quieres:

- alojar tu propia plataforma de programación
- mantener los datos de reservas en tu propia infraestructura
- gestionar citas sin depender de una plataforma SaaS de terceros
- desplegar una aplicación web moderna con contenedores Docker

## Opciones de Despliegue

Según la información disponible, hay dos enfoques posibles:

| Método | Estado |
|---|---|
| Despliegue con Docker | Recomendado |
| Instalación nativa Elixir/Phoenix | Posible, pero más avanzada |

Para la mayoría de usuarios, Docker es la mejor opción porque simplifica la instalación, actualizaciones y gestión del servicio.

## Instalar Tymeslot con Docker

Este es el método más práctico para sistemas Linux y Windows.

### Descargar la imagen Docker

El borrador proporcionado usa la siguiente referencia de imagen:

```bash
docker pull youruser/tymeslot:latest
```

:::caution Verifica primero la imagen Docker
El nombre exacto de la imagen pública no está confirmado por el contenido del repositorio obtenido. Antes de usar este comando en producción, verifica el nombre correcto de la imagen en el repositorio oficial de Tymeslot, notas de lanzamiento o página de Docker Hub si está publicada.
:::

### Iniciar el contenedor

Puedes iniciar Tymeslot con el siguiente comando del borrador de configuración:

```bash
docker run --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE="$(openssl rand -base64 64 | tr -d '\n')" \
  -e PHX_HOST=localhost \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  youruser/tymeslot:latest
```

Si usas PowerShell en Windows, el comando `openssl` puede no estar disponible por defecto. En ese caso, genera un valor seguro aleatorio por separado y reemplaza `SECRET_KEY_BASE` manualmente.

### Referencia de comando ejemplo

| Opción | Propósito |
|---|---|
| `--name tymeslot` | Define el nombre del contenedor |
| `-p 4000:4000` | Expone Tymeslot en el puerto `4000` |
| `-e SECRET_KEY_BASE=...` | Define el secreto de la aplicación para cifrado y sesiones |
| `-e PHX_HOST=localhost` | Establece el nombre de host usado por Phoenix |
| `-v tymeslot_data:/app/data` | Persiste los datos de la aplicación |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Persiste los datos de PostgreSQL |
| `youruser/tymeslot:latest` | Nombre de la imagen Docker del borrador |

### Generar una clave secreta en Linux

Si tienes instalado `openssl`, puedes generar un secreto así:

```bash
openssl rand -base64 64 | tr -d '\n'
```

### Generar una clave secreta en PowerShell de Windows

Puedes generar un secreto temporal en PowerShell así:

```powershell
[Convert]::ToBase64String((1..64 | ForEach-Object { Get-Random -Maximum 256 }))
```

:::danger Usa tu propio valor secreto
No reutilices secretos de ejemplo en producción. Siempre genera tu propio `SECRET_KEY_BASE` y guárdalo de forma segura.
:::

## Configurar Tymeslot

Antes del primer uso, debes revisar las configuraciones de ejecución más importantes.

### Variables de entorno

El borrador confirma las siguientes variables de entorno:

| Variable | Ejemplo | Propósito |
|---|---|---|
| `SECRET_KEY_BASE` | `[your_secret_key]` | Asegura sesiones y funciones relacionadas con cifrado |
| `PHX_HOST` | `[your_domain]` o `[your_server_ip]` | Define el nombre de host público usado por la aplicación |

Cuando uses los marcadores:

- `[your_secret_key]` es tu secreto seguro generado
- `[your_domain]` es tu dominio público si usas uno
- `[your_server_ip]` es la dirección IP de tu servidor para acceso directo

### Configuración SMTP

El borrador también menciona configuración SMTP en `config/prod.exs` para notificaciones por correo:

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

:::note Verificación SMTP
El formato exacto de configuración del mailer debe verificarse en el repositorio actual de Tymeslot antes de aplicarlo en producción, ya que la configuración puede cambiar entre versiones.
:::

## Acceder a Tymeslot

Una vez que el contenedor esté en ejecución, puedes probar la interfaz web.

### Acceso local

Si pruebas localmente, abre:

```text
http://localhost:4000
```

### Acceso remoto

Si Tymeslot está en un servidor remoto, abre:

```text
http://[your_server_ip]:4000
```

Si configuraste un dominio y un proxy inverso, puedes acceder a través de:

```text
https://[your_domain]
```

## Firewall y Red

Tymeslot necesita acceso de red al puerto que publiques desde Docker.

### Puerto requerido

| Puerto | Protocolo | Propósito |
|---|---|---|
| `4000` | TCP | Acceso web a la aplicación Tymeslot |

### Consideraciones de firewall

Debes asegurarte de que:

- el puerto `4000` esté abierto en el firewall del servidor si quieres acceso directo
- el firewall de tu proveedor o firewall en la nube también permita el mismo puerto
- tu proxy inverso reenvíe el tráfico correctamente si usas un dominio

:::caution Exposición pública
Si expones el puerto `4000` directamente a internet, asegúrate de entender las implicaciones de seguridad. Para despliegues en producción, un proxy inverso con HTTPS suele ser la mejor opción.
:::

## Instalación Nativa Opcional

Una instalación nativa puede ser posible si prefieres no usar Docker. Este método es más avanzado y requiere un entorno compatible con Elixir y Phoenix.

### Pasos básicos nativos

Según el borrador proporcionado, el proceso es:

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### Notas sobre despliegue nativo

Para despliegues nativos también necesitarías:

- Elixir
- Erlang/OTP
- dependencias de Phoenix
- configuración de base de datos soportada
- revisión de configuración para producción

:::info Complejidad de instalación nativa
El material fuente obtenido no proporciona detalles verificados suficientes para documentar una configuración nativa completa en Linux o Windows para producción de forma segura. Si quieres usar este método, revisa la documentación oficial del repositorio directamente antes del despliegue.
:::

## Mantenimiento y Solución de Problemas

Después del despliegue, debes verificar que el servicio se mantenga disponible y que tus datos sean persistentes.

### Verificar estado del contenedor

```bash
docker ps
```

### Ver logs

```bash
docker logs tymeslot
```

### Reiniciar el contenedor

```bash
docker restart tymeslot
```

### Problemas comunes

| Problema | Causa posible | Acción sugerida |
|---|---|---|
| La página web no carga | Puerto `4000` bloqueado | Revisa firewall y mapeo de puertos Docker |
| Contenedor se cierra inmediatamente | Variables de entorno inválidas | Revisa `SECRET_KEY_BASE` y configuración de imagen |
| Errores relacionados con la base de datos | Problema con almacenamiento persistente o inicialización | Revisa logs y verifica uso de volúmenes |
| Nombre de host incorrecto en enlaces | `PHX_HOST` incorrecto | Establece `PHX_HOST` a `[your_domain]` o `[your_server_ip]` |

## Buenas Prácticas

### Usa volúmenes persistentes

Siempre mantén volúmenes Docker persistentes para datos de la aplicación y base de datos para que la recreación del contenedor no borre tus datos.

### Usa un proxy inverso

Para despliegues públicos, suele ser mejor colocar Tymeslot detrás de un proxy inverso como Nginx o Apache y habilitar HTTPS.

### Verifica cambios upstream

Como Tymeslot está en desarrollo activo, debes revisar el repositorio oficial antes de actualizar. Esto es especialmente importante para:

- cambios en imágenes Docker
- variables de entorno actualizadas
- migraciones de base de datos
- cambios en configuración de correo

## Referencias Adicionales

| Recurso | Enlace |
|---|---|
| Repositorio GitHub de Tymeslot | [Repositorio oficial de Tymeslot](https://github.com/tymeslot/tymeslot) |
| Mención en Self-Host Weekly | [Self-Host Weekly - 10 de abril de 2026](https://selfh.st/weekly/2026-04-10/) |
| Documentación de Docker | [Documentación de Docker](https://docs.docker.com/) |
| Descarga de Docker Desktop | [Docker Desktop](https://www.docker.com/products/docker-desktop/) |

## Conclusión

Felicitaciones, has aprendido con éxito cómo revisar y desplegar Tymeslot en Linux o Windows usando Docker. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡que está disponible todos los días para ayudarte! 🙂