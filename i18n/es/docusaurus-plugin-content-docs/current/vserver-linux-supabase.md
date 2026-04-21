---
id: vserver-linux-supabase
title: "Configura Supabase en un Servidor Linux - Lanza Tu Plataforma Backend Open Source"
description: "Descubre cómo alojar y configurar Supabase para una plataforma Postgres open source confiable con autenticación y funciones en tiempo real → Aprende más ahora"
sidebar_label: Instalar Supabase
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Supabase es una plataforma de desarrollo Postgres open source que ofrece una base de datos Postgres completa junto con autenticación, APIs instantáneas, funciones en tiempo real y almacenamiento, convirtiéndola en una alternativa open source a Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

¿Estás pensando en alojar este servicio por tu cuenta? Te guiaremos paso a paso sobre cómo configurarlo y ajustarlo, junto con todo lo que necesitas tener en cuenta.

## Instala Supabase con el Instalador de Apps One Click

Puedes instalar **Supabase** directamente a través de nuestro **Instalador de Apps One Click** en la interfaz web del VPS. Tras completar la configuración inicial de apps, abre el catálogo de aplicaciones, busca **Supabase** y comienza el despliegue con tu proyecto, entorno y configuración de dominio preferidos. Esto te ofrece una forma rápida y amigable de desplegar y gestionar **Supabase** sin necesidad de configurar manualmente por línea de comandos, mientras aprovechas la gestión integrada basada en web, soporte para dominios personalizados y provisión de SSL donde esté disponible.

<InlineVoucher />

## Requisitos Previos

Antes de instalar **Supabase**, asegúrate de que tu entorno de hosting cumple con los siguientes requisitos para garantizar una instalación fluida y un rendimiento óptimo.

| Hardware   | Mínimo      | Recomendación ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU             |
| RAM        | 4 GB         | 8 GB                       |
| Espacio en disco | 25 GB        | 25 GB                      |

El software requiere que todas las dependencias necesarias estén instaladas y que se ejecute en un sistema operativo soportado. Asegúrate de que tu servidor cumple con los siguientes requisitos antes de continuar con la instalación:

**Dependencias:** `Git`, `Docker (Engine y Compose)`

**Sistema Operativo:** Última versión de Ubuntu/Debian compatible con Docker 2

Verifica que todas las dependencias estén instaladas y que la versión del sistema operativo sea la correcta para evitar problemas de compatibilidad durante la instalación de Supabase.

## Preparación

Antes de configurar **Supabase**, necesitas preparar tu sistema. Esto incluye actualizar tu sistema operativo a la última versión e instalar todas las dependencias necesarias. Estas preparaciones aseguran un entorno estable y ayudan a prevenir problemas durante o después de la instalación.

### Actualizar Sistema
Para asegurarte de que tu sistema está ejecutando el software y las mejoras de seguridad más recientes, siempre debes realizar primero las actualizaciones del sistema. Para ello, ejecuta el siguiente comando:

```
sudo apt update && sudo apt upgrade -y
```
Esto garantiza que tu sistema tenga los últimos parches de seguridad y versiones de software antes de continuar.

### Instalar dependencias
Una vez completado el proceso de actualización, puedes proceder con la instalación de las dependencias.

#### Git
Los datos de Supabase se descargarán a través de GitHub. Esto requiere que Git esté instalado primero. Para ello, ejecuta el siguiente comando:
```
sudo apt install git-all
```

#### Docker

Supabase se desplegará y ejecutará en tu máquina usando un contenedor Docker. Esto requiere que Docker esté instalado primero. Para ello, ejecuta el siguiente comando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Un recorrido completo del proceso de instalación y cómo usar Docker está disponible en nuestra [guía Docker](dedicated-linux-docker.md).

## Instalación
Ahora que se han cumplido todos los requisitos y se han completado las preparaciones necesarias, puedes proceder con la instalación de la aplicación Supabase.

Clona el repositorio de Supabase, crea un directorio de proyecto dedicado y copia los recursos Docker y el archivo de entorno de ejemplo en él.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir supabase-project

cp -rf supabase/docker/* supabase-project
cp supabase/docker/.env.example supabase-project/.env
```

Cambia al directorio del proyecto, descarga las últimas imágenes de contenedores y lanza la pila en modo detached.
```
cd supabase-project
docker compose pull
docker compose up -d
```

![img](https://screensaver01.zap-hosting.com/index.php/s/njapji2YePRgema/preview)

Ahora puedes acceder a Supabase Studio a través de `http://<tu-ip>:8000`. Se te pedirá un nombre de usuario y contraseña. Por defecto, las credenciales son:

- Usuario: `supabase`
- Contraseña: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Credenciales por Defecto
Tu app está corriendo ahora con credenciales por defecto. Asegura tus servicios lo antes posible usando las instrucciones a continuación.
:::

## Configuración
Nunca deberías desplegar con valores por defecto o de ejemplo. Debes reemplazar todos los placeholders con secretos fuertes y únicos, revisar la configuración según tus requisitos de seguridad y reiniciar todos los servicios para aplicar los cambios.

Genera claves API seguras antes de exponer cualquier servicio. Comienza eligiendo un secreto JWT de 40 caracteres. Puedes usar el valor proporcionado o crear el tuyo propio. Guarda este secreto localmente en un lugar seguro. No lo compartas ni lo subas a control de versiones. Usa el secreto para generar un JWT y luego deriva las claves API anon y service usando el formulario referenciado en la documentación de Supabase: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Ejecuta el formulario dos veces para producir ambas claves. Actualiza tu `./docker/.env` con:

- `ANON_KEY`: clave anon
- `SERVICE_ROLE_KEY`: clave de servicio

Actualiza los secretos requeridos en `./docker/.env`. Estos valores deben estar configurados para un despliegue funcional:

- `POSTGRES_PASSWORD`: contraseña para el rol `postgres`
- `JWT_SECRET`: consumido por PostgREST y GoTrue
- `SITE_URL`: URL base de tu sitio
- `SMTP_*`: credenciales del servidor de correo
- `POOLER_TENANT_ID`: ID de tenant usado por el pooler Supavisor

Protege el panel con nuevas credenciales antes de usar en producción. Edita `./docker/.env`:

- `DASHBOARD_USERNAME`: usuario del panel
- `DASHBOARD_PASSWORD`: contraseña del panel

Puedes definir múltiples usuarios para el panel en `./docker/volumes/api/kong.yml`:

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

Para habilitar todas las funciones del panel fuera de `localhost`, configura `SUPABASE_PUBLIC_URL` en `./docker/.env` con la URL o IP que usarás para acceder al panel.

Aplica los cambios de configuración reiniciando la pila:

```
docker compose down
docker compose up -d
```

## Conclusión y más Recursos

¡Felicidades! Ahora has instalado y configurado Supabase con éxito en tu VPS/servidor dedicado. También te recomendamos echar un vistazo a los siguientes recursos, que pueden ofrecerte ayuda y guía adicional durante tu proceso de configuración del servidor:

- [Supabase.com](https://Supabase.com/) - Sitio Oficial
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Documentación de Supabase

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂