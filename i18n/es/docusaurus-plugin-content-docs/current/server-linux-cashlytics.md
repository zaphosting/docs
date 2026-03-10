---
id: server-linux-cashlytics
title: "Configura Cashlytics en un servidor Linux - Aloja tu gestor financiero con IA"
description: "Aprende a instalar y ejecutar Cashlytics en tu VPS Linux usando Docker para gestionar finanzas personales y presupuestos con ayuda de IA → Descubre más ahora"
sidebar_label: Instalar Cashlytics
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

[Cashlytics](https://github.com/aaronjoeldev/cashlytics-ai) es una plataforma moderna de **finanzas personales y gestión de presupuestos** diseñada para ayudarte a controlar gastos, administrar presupuestos y obtener insights sobre tus hábitos financieros. Analizando datos de transacciones y categorías de gasto, Cashlytics te ayuda a entender a dónde va tu dinero y cómo mejorar tu planificación financiera.

La plataforma también puede integrarse opcionalmente con **asistencia potenciada por IA**, permitiéndote analizar datos financieros, identificar patrones de gasto y recibir insights inteligentes sobre tu comportamiento presupuestario.

![img](https://screensaver01.zap-hosting.com/index.php/s/W46gYzqdiPrBDsE/preview)

Alojar Cashlytics en tu propio servidor te da **control total sobre tus datos financieros** mientras mantienes tus herramientas de presupuesto accesibles desde cualquier lugar vía interfaz web. ¿Planeas alojar Cashlytics tú mismo? Esta guía te lleva paso a paso por el proceso de instalación usando Docker en tu VPS Linux.

<InlineVoucher />

## Casos de uso de Cashlytics

Cashlytics puede usarse en varios escenarios personales y profesionales donde la organización financiera y el presupuesto son clave. Algunos casos típicos incluyen:

- Controlar gastos personales y presupuestos mensuales
- Monitorizar patrones de gasto y hábitos financieros
- Gestionar múltiples fuentes de ingresos y categorías financieras
- Generar insights con IA para presupuestos más inteligentes
- Alojar un panel financiero privado y bajo tu control

Al ser autoalojado, Cashlytics es ideal para usuarios que buscan una alternativa enfocada en la privacidad frente a herramientas financieras en la nube.

## Requisitos previos

Antes de instalar Cashlytics, asegúrate de que tu VPS cumple con los siguientes requisitos.

| Hardware | Mínimo | Recomendado |
|----------|---------|-------------|
| CPU | 1 Núcleo | 2 Núcleos |
| RAM | 2 GB | 4 GB |
| Espacio en disco | 10 GB | 20 GB |



Además, debes tener instalado el siguiente software:

- Docker
- Docker Compose

Si Docker aún no está instalado, sigue nuestra guía para instalar [Docker](dedicated-linux-docker.md) antes de continuar.



<InlineServiceLink />



## Preparación

Primero crea un directorio para el proyecto de Cashlytics.

```bash
mkdir cashlytics && cd cashlytics
```

Luego descarga los archivos oficiales de configuración Docker de Cashlytics.

```
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/docker-compose.selfhost.yml
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/.env.example
```

Crea tu archivo de configuración de entorno copiando el archivo de ejemplo.

```
cp .env.example .env
```

El archivo `.env` contiene las variables de configuración necesarias para ejecutar Cashlytics.



## Instalación



### Abre el archivo `.env`

Abre el archivo `.env` y configura las variables de entorno requeridas.

```
nano .env
```



### Configura la contraseña de la base de datos

Define una contraseña segura para la base de datos PostgreSQL que usa Cashlytics.

```
POSTGRES_PASSWORD=tu_contraseña_segura_aquí
```



### Configura la conexión a la base de datos

Actualiza la cadena de conexión a la base de datos usando la misma contraseña definida arriba.

```
DATABASE_URL=postgresql://cashlytics:tu_contraseña_segura_aquí@postgres:5432/cashlytics
```



### Asistente de IA opcional

Cashlytics soporta un asistente de IA opcional que puede analizar datos financieros y ofrecer insights para presupuestos. Para activar esta función, añade tu clave API de OpenAI.

```
OPENAI_API_KEY=sk-tu-clave-openai
```

Si no quieres usar el asistente de IA, esta variable puede quedar vacía.



## Iniciando Cashlytics

Una vez completada la configuración, inicia la aplicación usando Docker Compose.

```
docker compose -f docker-compose.selfhost.yml up -d
```

Docker descargará las imágenes necesarias y arrancará los servicios de Cashlytics. Para verificar que los contenedores están activos, puedes usar:

```
docker ps
```



## Accediendo a Cashlytics

Después de que los contenedores estén corriendo, puedes acceder a la interfaz web de Cashlytics. Abre tu navegador y navega a:

```
http://TU_DIRECCIÓN_IP_DEL_SERVIDOR:3000
```

Sustituye TU_DIRECCIÓN_IP_DEL_SERVIDOR por la dirección IP de tu VPS. Cuando cargue la interfaz, podrás comenzar a configurar tus finanzas, presupuestos y categorías.

## Conclusión

¡Felicidades! Has instalado exitosamente Cashlytics en tu servidor Linux. Ahora puedes empezar a usar la plataforma para controlar gastos, gestionar presupuestos y obtener insights sobre tus datos financieros.

Ejecutar Cashlytics en tu propio VPS/servidor dedicado garantiza que tu información financiera esté bajo tu control, mientras aprovechas herramientas modernas de presupuesto y análisis opcional con IA.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />