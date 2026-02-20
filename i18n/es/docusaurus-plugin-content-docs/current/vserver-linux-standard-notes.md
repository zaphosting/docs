---
id: vserver-linux-standard-notes
title: "Configura Standard Notes en un Servidor Linux - Crea tu Sistema Privado de Notas"
description: "Descubre cómo sincronizar y proteger tus notas de forma segura en todos tus dispositivos con Standard Notes autoalojado → Aprende más ahora"
sidebar_label: Instalar Standard Notes
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Standard Notes es una app de notas open-source que protege tus datos usando cifrado de extremo a extremo auditado. Solo tú controlas las claves de descifrado. Sincroniza tus notas y archivos cifrados sin problemas en dispositivos ilimitados, los mantiene accesibles offline y protege activamente tu contenido de accesos externos.

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

¿Estás pensando en alojar este servicio tú mismo? Te guiaremos paso a paso para configurarlo y ajustarlo, junto con todo lo que necesitas tener en cuenta.

<InlineVoucher />

## Requisitos Previos

Antes de instalar **Standard Notes**, asegúrate de que tu entorno de hosting cumple con los siguientes requisitos para garantizar una instalación fluida y un rendimiento óptimo.

| Hardware   | Mínimo      | Recomendación ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU             |
| RAM        | 2 GB         | 4 GB                       |
| Espacio en disco | 5 GB         | 25 GB                      |

El software requiere que todas las dependencias necesarias estén instaladas y que se ejecute en un sistema operativo soportado. Asegúrate de que tu servidor cumple con los siguientes requisitos antes de continuar con la instalación:

**Dependencias:** `Docker (Engine 26+ y Compose)`

**Sistema Operativo:** Última versión de Ubuntu/Debian compatible con Docker 26+

Verifica que todas las dependencias estén instaladas y que uses la versión correcta del sistema operativo para evitar problemas de compatibilidad durante la instalación de Standard Notes.

## Preparación

Antes de configurar **Standard Notes**, necesitas preparar tu sistema. Esto incluye actualizar tu sistema operativo a la última versión e instalar todas las dependencias necesarias. Estas preparaciones aseguran un entorno estable y ayudan a prevenir problemas durante o después de la instalación.

### Actualizar Sistema
Para asegurarte de que tu sistema corre con las últimas mejoras de software y seguridad, siempre debes hacer primero una actualización del sistema. Para ello, ejecuta el siguiente comando:

```
sudo apt update && sudo apt upgrade -y
```
Esto garantiza que tu sistema tenga los últimos parches de seguridad y versiones de software antes de continuar.

### Instalar dependencias
Una vez completada la actualización, puedes proceder con la instalación de las dependencias. Standard Notes se desplegará y ejecutará en tu máquina usando varios contenedores Docker. Por eso, primero debes instalar Docker. Para hacerlo, ejecuta:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Una guía completa del proceso de instalación y cómo usar Docker está disponible en nuestra [guía Docker](dedicated-linux-docker.md).

## Instalación
Ahora que cumples con todos los requisitos y has hecho las preparaciones necesarias, puedes continuar con la instalación de la aplicación Standard Notes.

Primero, crea una carpeta que contendrá todos los archivos de configuración y setup. Esta carpeta será tu directorio de trabajo para la instalación.

```
mkdir standardnotes
cd standardnotes
```

Luego, crea un archivo `.env` en tu directorio de trabajo y rellénalo con los valores por defecto del archivo de configuración de ejemplo del proyecto:

```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

Este archivo contiene solo las variables mínimas necesarias para una configuración funcional. La lista completa de variables actualmente en uso la puedes encontrar aquí: [docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

Abre el archivo `.env` y asegúrate de que todas las claves en la sección KEYS estén correctamente configuradas. Genera valores aleatorios para cada variable de entorno requerida con:

```
openssl rand -hex 32
```

Pega estos valores en tu archivo `.env`. Standard Notes requiere un script bootstrap para LocalStack. Descárgalo en tu directorio de trabajo y hazlo ejecutable:

```shell
curl https://raw.githubusercontent.com/standardnotes/server/main/docker/localstack_bootstrap.sh > localstack_bootstrap.sh
chmod +x localstack_bootstrap.sh
```

Descarga la configuración oficial de ejemplo y guárdala como `docker-compose.yml` dentro de tu carpeta de trabajo. Este archivo define todos los servicios de contenedores necesarios para Standard Notes.

```
curl https://raw.githubusercontent.com/standardnotes/server/main/docker-compose.example.yml > docker-compose.yml
```

Cuando todo esté listo, descarga las últimas imágenes y arranca los servicios en modo detached:

```
docker compose pull && docker compose up -d
```

## Configuración

La configuración por defecto en el archivo `docker-compose.yml` proporcionado puede personalizarse para ajustarse a tus necesidades específicas. Un punto clave es el servicio `server`, donde puedes modificar los mapeos de puertos en la propiedad `ports`. Esto te permite elegir en qué puertos del host la aplicación será accesible, ayudando a evitar conflictos con otros servicios o para adaptarse a tu configuración de red preferida.

Asegurar la base de datos es otro paso crítico. Las contraseñas por defecto deben ser reemplazadas por cadenas fuertes y generadas aleatoriamente. Puedes crear una contraseña segura con:

```
openssl rand -hex 12
```

Agrega el valor generado al archivo `.env` como `DB_PASSWORD`. El mismo valor también debe establecerse para `MYSQL_ROOT_PASSWORD` y `MYSQL_PASSWORD` en el archivo `docker-compose.yml` para mantener sincronizados los contenedores.

Estos cambios en la configuración aseguran que tu instalación no solo funcione, sino que también esté segura y adaptada a tu entorno.

## Conexión al Servidor de Sincronización

Para configurar tu cuenta en Standard Notes, haz clic en el icono de avatar en la esquina inferior derecha de la app. En el menú que aparece, selecciona “Crear Cuenta” para comenzar a crear un nuevo perfil de usuario. Ingresa un correo electrónico válido junto con una contraseña segura.

Antes de completar el proceso, abre la sección “Opciones Avanzadas”. Bajo “Servidor de Sincronización”, selecciona la opción “Personalizado” e ingresa la dirección IP y puerto de tu propio servidor en el formato IP:Puerto. Esto asegura que tus notas no se sincronicen a través del servicio estándar de Standard Notes, sino con tu servidor autoalojado.

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)

## Conclusión y Más Recursos

¡Felicidades! Ahora has instalado y configurado con éxito Standard Notes en tu VPS/servidor dedicado. También te recomendamos echar un vistazo a los siguientes recursos, que pueden ofrecerte ayuda y guía adicional durante el proceso de configuración de tu servidor:

- [Standardnotes.com](https://standardnotes.com/) - Sitio Oficial
- [Standardnotes.com/help](https://standardnotes.com/help) - Centro de Ayuda de Standard Notes (Documentación)

¿Tienes preguntas específicas que no se cubren aquí? Para más dudas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂