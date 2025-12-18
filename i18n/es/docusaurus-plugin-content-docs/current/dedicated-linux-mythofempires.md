---
id: dedicated-linux-mythofempires
title: "Servidor Dedicado: Configuración del Servidor Dedicado Myth of Empires en Linux"
description: "Descubre cómo instalar el servidor dedicado de Myth of Empires en Linux y optimiza tu setup de alquiler de servidores → Aprende más ahora"
sidebar_label: Myth of Empires
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un servidor dedicado Linux y quieres instalar el servicio del servidor dedicado de Myth of Empires en él? Estás en el lugar correcto. En esta guía, te explicamos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu servidor dedicado? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting, ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3 aquí](dedicated-linux-gs-interface.md).
:::

## Preparación

Para empezar, conéctate a tu servidor dedicado vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que completar una configuración inicial para SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD en Linux](dedicated-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

:::info Capa de Compatibilidad Wine
Myth of Empires actualmente no ofrece una versión nativa del servidor para Linux, lo que significa que hay un paso extra para poder ejecutar la versión de servidor de Windows en Linux.

Debes hacer una instalación única de la capa de compatibilidad **Wine** si es la primera vez que la usas en tu servidor Linux. Usa nuestra rápida guía de [Configuración de la Capa de Compatibilidad Wine](dedicated-linux-wine.md) para configurarla antes de continuar.
:::

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz del usuario `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar el proceso de instalación con el siguiente comando para usar SteamCMD directamente con el usuario `steam`. Usando el parámetro `+@sSteamCmdForcePlatformType windows` fuerzas la instalación de los binarios de Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Ten paciencia mientras se descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

Para este punto, ya terminaste la configuración básica de tu servidor Myth of Empires. Puedes hacer configuraciones adicionales editando varios archivos de configuración que están dentro del directorio de tu servidor.

Podrás ajustar todos los parámetros accediendo y editando los archivos `.ini` que están dentro de la carpeta Saved. Usa el comando `ls` para ver qué archivos hay.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

Para editar un archivo, simplemente ejecuta `nano ./[nombre_del_archivo].ini` para abrir el editor nano.

Consulta nuestra guía de [Configuración del Servidor Myth of Empires](moe-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y Conectarte a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo ejecutable **MOEServer.exe** con el siguiente comando. Asegúrate de usar los comandos **xvfb-run** y **wine** para correrlo a través de la capa de compatibilidad Wine.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

Deberías ver logs aparecer en tu terminal que indican que el servidor arrancó correctamente. Ten en cuenta que la primera vez puede tardar un poco mientras se configura todo. Podrás conectarte directamente buscando los detalles del servidor en la pestaña **Servidor Personalizado**: `[tu_dirección_ip]:15636`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor Myth of Empires en tu servidor dedicado! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto trae varios beneficios como arranque automático al iniciar el servidor, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, que está disponible para ayudarte todos los días.