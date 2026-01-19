---
id: dedicated-windows-hytale
title: "Servidor Dedicado: Configuración del Servidor Dedicado de Hytale"
description: "Descubre cómo configurar el servidor dedicado de Hytale en tu servidor dedicado Windows para una gestión de juego sin interrupciones → Aprende más ahora"
sidebar_label: Hytale
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un servidor dedicado y quieres alojar tu propio servidor de juegos Hytale en él? En esta guía, te explicamos paso a paso cómo instalar y ejecutar el servidor dedicado de Hytale en un sistema Windows.

## Preparación

Para ejecutar un servidor de juegos Hytale, tu sistema debe cumplir algunos requisitos básicos. El servidor funciona con Java 25 y requiere al menos 4 GB de RAM. Se soportan arquitecturas x64 y arm64. El uso real de recursos depende del número de jugadores, la distancia de visión y la actividad del mundo, por lo que puede ser necesario más recursos para servidores grandes.

Antes de continuar, asegúrate de que Java 25 esté instalado en tu sistema Windows. Puedes verificar la instalación abriendo una consola de comandos y ejecutando:

```
java --version
```

Si Java aún no está instalado en tu sistema, sigue nuestra guía dedicada Instalar Java para servidores Windows. Esta guía explica cómo instalar y configurar Java correctamente en tu entorno.



## Instalación

Comienza creando un directorio dedicado para el servidor de Hytale. Esto mantiene todos los archivos del servidor organizados en un solo lugar. Por ejemplo:

```
C:\Hytale
```

El servidor requiere dos componentes principales: la aplicación del servidor y los assets del juego. Estos archivos se pueden obtener usando el descargador de línea de comandos de Hytale, que está pensado para despliegues de servidores y actualizaciones más fáciles.

El descargador CLI ofrece una forma estructurada de descargar y actualizar los archivos del servidor de Hytale. Después de descargar el archivo del descargador, extráelo en un directorio temporal. Dentro del archivo encontrarás un archivo QUICKSTART.md que describe el uso básico de la herramienta.

Ejecuta el descargador desde la línea de comandos y sigue las indicaciones para descargar la última versión del servidor. Una vez completado el proceso, copia los archivos del servidor descargados y el archivo de assets en tu directorio del servidor. Después de este paso, el directorio debería contener el archivo JAR del servidor y un archivo de assets como Assets.zip.

| **Comando**                                   | **Descripción**                       |
| :-------------------------------------------- | :------------------------------------ |
| `./hytale-downloader`                         | Descargar la última versión           |
| `./hytale-downloader -print-version`          | Mostrar versión del juego sin descargar |
| `./hytale-downloader -version`                | Mostrar versión del hytale-downloader |
| `./hytale-downloader -check-update`           | Comprobar actualizaciones del descargador |
| `./hytale-downloader -download-path game.zip` | Descargar a un archivo específico     |
| `./hytale-downloader -patchline pre-release`  | Descargar desde canal pre-release      |
| `./hytale-downloader -skip-update-check`      | Omitir comprobación automática de actualizaciones |



## Configuración

### Iniciar el servidor

El servidor se inicia lanzando el archivo JAR y especificando la ruta al archivo de assets. Ajusta la ruta si tus assets están en una ubicación diferente. Abre la consola de comandos en el directorio del servidor y ejecuta:

```
java -jar HytaleServer.jar --assets C:\Hytale\Assets.zip --bind 0.0.0.0:5520
```

### Autenticación

En el primer inicio, el servidor debe autenticarse antes de que los jugadores puedan conectarse. Esto se hace directamente desde la consola del servidor usando un proceso de inicio de sesión basado en dispositivo. Sigue las instrucciones que aparecen en la consola para completar la autenticación.

```
/auth login device
```

La salida será algo así:

```
> /auth login device
===================================================================
AUTORIZACIÓN DE DISPOSITIVO
===================================================================
Visita: https://accounts.hytale.com/device
Introduce el código: ABCD-1234
O visita: https://accounts.hytale.com/device?user_code=ABCD-1234
===================================================================
Esperando autorización (expira en 900 segundos)...

[El usuario completa la autorización en el navegador]

> ¡Autenticación exitosa! Modo: OAUTH_DEVICE
```

Una vez autenticado, tu servidor podrá aceptar conexiones de jugadores.



### Configuración del firewall

Por defecto, el servidor escucha en el puerto UDP 5520 y se enlaza a todas las interfaces disponibles. Puedes cambiar la dirección y el puerto si es necesario. El servidor se comunica por UDP usando QUIC. Asegúrate de que tu firewall permita el tráfico UDP entrante en el puerto elegido, ya sea usando Iptables o UFW. Ejecuta el siguiente comando en PowerShell para aplicar esta regla de firewall fácilmente:

```
New-NetFirewallRule -DisplayName "Hytale Server" -Direction Inbound -Protocol UDP -LocalPort 5520 -Action Allow
```



## Notas de rendimiento

La distancia de visión es uno de los factores más importantes que influyen en el consumo de memoria. Valores más altos aumentan el uso de RAM porque más datos del mundo deben permanecer activos al mismo tiempo.

Para la mayoría de configuraciones, una distancia máxima de visión de 12 chunks (384 bloques) ofrece un buen equilibrio entre rendimiento del servidor y experiencia de juego.

Para comparar, los servidores de Minecraft usan una distancia de visión predeterminada de 10 chunks (160 bloques). El valor predeterminado de Hytale de 384 bloques equivale aproximadamente a 24 chunks de Minecraft, lo que explica los mayores requisitos de memoria. Este valor debe ajustarse según el número esperado de jugadores y los recursos disponibles del sistema.



## Conclusión

¡Felicidades, ahora tienes un servidor funcional de Hytale corriendo en tu sistema! Desde aquí, puedes ampliar la configuración instalando mods, ajustando la configuración del mundo y afinando parámetros de rendimiento para adaptarlos a tu comunidad de jugadores. Se recomienda monitorear regularmente el uso de recursos para asegurar una operación estable a medida que el servidor crece.

Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂