---
id: server-linux-swush
title: "Configura Swush en un servidor Linux - Crea tu propio vault privado de medios y archivos"
description: "Aprende a instalar y ejecutar Swush en tu VPS Linux para crear una plataforma autohospedada de gestión de medios, archivos y contenido → Aprende más ahora"
sidebar_label: Instalar Swush
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

[Swush](https://github.com/imthatdev/swush) es un vault digital autohospedado y plataforma de gestión de contenido diseñada para ayudarte a organizar archivos, medios y datos personales en un panel centralizado. La aplicación combina almacenamiento de archivos, herramientas para compartir, streaming de medios y funciones de gestión del conocimiento en una sola interfaz web.

Con Swush, puedes subir y gestionar archivos, organizar contenido usando carpetas y etiquetas, generar enlaces para compartir y hasta hacer streaming de medios directamente desde tu servidor. Al ser completamente autohospedado, mantienes el control total sobre tus datos e infraestructura, siendo una excelente alternativa a plataformas de almacenamiento en la nube.

La aplicación está construida con tecnologías modernas como Next.js, TypeScript y TailwindCSS, ofreciendo una interfaz rápida y responsiva, y a la vez fácil de desplegar en un VPS o servidor dedicado. Esta guía te llevará paso a paso para instalar y ejecutar Swush en un servidor Linux.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRRZ8MM6iWfF3kM/preview)

<InlineVoucher />



## Casos de uso de Swush

Swush está diseñado para funcionar como un hub central para tu contenido digital y flujos de trabajo. Puede usarse en muchos escenarios diferentes:

- Gestionar y organizar archivos, imágenes y documentos
- Crear un servidor personal de medios para hacer streaming del contenido subido
- Generar enlaces seguros para compartir archivos y medios
- Organizar conocimiento como notas, marcadores o fragmentos
- Hospedar un panel privado para flujos de trabajo personales
- Automatizar subidas e integraciones mediante la API de Swush

La plataforma combina múltiples herramientas en un solo entorno, ayudando a reducir la dependencia de servicios en la nube dispersos.

## Requisitos previos

Antes de instalar Swush, asegúrate de que tu servidor cumple con los siguientes requisitos.

| Hardware | Mínimo | Recomendado |
|----------|---------|-------------|
| CPU | 1 núcleo | 4 núcleos |
| RAM | 2 GB | 4 GB |
| Espacio en disco | 20 GB | 50 GB |

Software requerido:

- Runtime Bun
- Base de datos PostgreSQL
- Git

Asegúrate de que tu sistema esté actualizado antes de comenzar la instalación.

<InlineServiceLink />

## Preparación

Primero crea un directorio para la instalación de Swush.
```
mkdir swush
cd swush
```
Luego clona el repositorio de Swush.
```
git clone https://github.com/imthatdev/swush.git .
```
Instala las dependencias del proyecto usando Bun.
```
bun install
```
## Configuración

Antes de iniciar la aplicación, crea el archivo de configuración de entorno.
```
cp example.env .env
```
Abre el archivo `.env` y configura los valores requeridos:
```
APP_NAME=Swush
APP_URL=http://tu-ip-del-servidor:3000
SUPPORT_NAME=Soporte
SUPPORT_EMAIL=soporte@ejemplo.com
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/swush
```
También puedes configurar ajustes adicionales como:

- Backend de almacenamiento (local o S3)
- Directorio de subida
- Configuración SMTP para notificaciones por email
- Secretos de autenticación

Swush soporta tanto **almacenamiento local como sistemas compatibles con S3**, permitiéndote escalar el almacenamiento de archivos según tu entorno.

## Instalación

Después de configurar las variables de entorno, inicializa el esquema de la base de datos.
```
bun run push:db
```
Luego compila la aplicación.
```
bun run build
```
Inicia el servidor Swush.
```
bun start
```
La aplicación arrancará y escuchará en el puerto **3000**.

## Accediendo a Swush

Una vez que el servidor esté corriendo, abre tu navegador y navega a:
```
http://TU_IP_DEL_SERVIDOR:3000
```
Reemplaza `TU_IP_DEL_SERVIDOR` con la dirección IP de tu VPS/servidor dedicado. Al acceder al panel por primera vez, serás guiado por un asistente de configuración inicial donde podrás crear tu primera cuenta y configurar las opciones de almacenamiento.

Después de completar la configuración, podrás empezar a subir archivos, organizar medios y gestionar tu contenido digital desde el panel de Swush.

## Conclusión

¡Felicidades! Has instalado con éxito **Swush** en tu servidor Linux. Tu vault digital autohospedado ya está listo para gestionar archivos, compartir medios y organizar contenido personal desde un panel centralizado.

Al hospedar Swush tú mismo, obtienes control total sobre tus datos mientras disfrutas de una plataforma moderna y enfocada en la privacidad para la gestión de contenido.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂

<InlineVoucher />