---
id: vserver-linux-mythofempires
title: "VPS: Configuración del servidor dedicado Myth of Empires en Linux"
description: "Descubre cómo instalar y ejecutar el servidor dedicado de Myth of Empires en tu VPS Linux para un alquiler de servidores sin complicaciones → Aprende más ahora"
sidebar_label: Myth of Empires
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Linux y quieres instalar el servidor dedicado de Myth of Empires en él? Estás en el lugar correcto. En esta guía, te explicamos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu VPS? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting en solo unos clics. ¡Échale un vistazo a la [Interfaz GS/TS3](vserver-linux-gs-interface.md)!
:::

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS vía SSH. Si necesitas ayuda, usa nuestra [Guía de acceso inicial SSH](vserver-linux-ssh.md).

También tendrás que hacer una configuración inicial de SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra [Guía de configuración SteamCMD en Linux](vserver-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente listo antes de continuar.

:::info Capa de compatibilidad Wine
Actualmente Myth of Empires no ofrece una versión nativa del servidor para Linux, por lo que necesitas un paso extra para ejecutar la versión de Windows en Linux.

Debes hacer una instalación única de la capa de compatibilidad **Wine** si es la primera vez que la usas en tu servidor Linux. Usa nuestra rápida [Guía de configuración de Wine](vserver-linux-wine.md) para prepararlo antes de seguir.
:::

## Instalación

Primero, inicia sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo ordenado.
```
sudo -u steam -s
cd ~
```

Ya dentro, puedes comenzar la instalación con este comando que usa SteamCMD para instalar directamente bajo el usuario `steam`. El parámetro `+@sSteamCmdForcePlatformType windows` fuerza la instalación de los binarios de Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Ten paciencia mientras se descarga, puede tardar un poco en juegos pesados. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

A estas alturas, ya tienes listo tu servidor Myth of Empires. Puedes hacer configuraciones adicionales editando varios archivos dentro del directorio del servidor.

Podrás ajustar todos los parámetros editando los archivos `.ini` que están en la carpeta Saved. Usa el comando `ls` para ver qué archivos hay.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

Para editar un archivo, simplemente ejecuta `nano ./[nombrearchivo].ini` para abrir el editor nano.

Consulta nuestra [Guía de configuración del servidor Myth of Empires](moe-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y conectar a tu servidor

Ahora toca arrancar el servidor. Ve al directorio principal del juego y ejecuta el archivo **MOEServer.exe** con este comando. No olvides usar **xvfb-run** y **wine** para correrlo a través de la capa de compatibilidad Wine.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

Verás que aparecen logs en la consola, lo que indica que el servidor arrancó bien. Ten en cuenta que la primera vez puede tardar un poco mientras se configura todo. Podrás conectarte directamente buscando los detalles del servidor en la pestaña **Servidor personalizado**: `[tu_dirección_ip]:15636`.

## Conclusión

¡Felicidades! Has instalado y configurado con éxito el servidor Myth of Empires en tu VPS. Como siguiente paso, te recomendamos revisar nuestra [Guía para configurar un servicio Linux](vserver-linux-create-gameservice.md), que explica cómo montar tu servidor dedicado como un servicio. Esto trae beneficios como arranque automático al iniciar el VPS, actualizaciones automáticas, gestión sencilla, acceso a logs y mucho más.

Si tienes cualquier duda o problema, contacta con nuestro equipo de soporte, ¡están disponibles todos los días para ayudarte!

<InlineVoucher />