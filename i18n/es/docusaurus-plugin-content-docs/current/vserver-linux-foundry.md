---
id: vserver-linux-foundry
title: "VPS: Configuración del Servidor Dedicado Foundry en Linux"
description: "Descubre cómo instalar el servidor dedicado Foundry en tu VPS Linux para un alojamiento y gestión de servidores de juegos sin complicaciones → Aprende más ahora"
sidebar_label: Foundry
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Linux y quieres instalar el servicio de servidor dedicado Foundry en él? Estás en el lugar correcto. En esta guía, te explicamos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu VPS? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS vía SSH. Usa nuestra guía de [Acceso Inicial SSH](vserver-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que completar una configuración inicial para SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD en Linux](vserver-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

:::info Capa de Compatibilidad Wine
Foundry actualmente no ofrece una versión nativa de servidor para Linux, lo que significa que hay un paso extra para poder ejecutar la versión de servidor para Windows en Linux.

Debes hacer una instalación única de la capa de compatibilidad **Wine** si es la primera vez que la usas en tu servidor Linux. Usa nuestra rápida guía de [Configuración de la Capa de Compatibilidad Wine](vserver-linux-wine.md) para configurarla antes de continuar.
:::

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar el proceso de instalación con el siguiente comando para usar SteamCMD directamente como usuario `steam`. Usando el parámetro `+@sSteamCmdForcePlatformType windows` te aseguras de que se instalen los binarios de Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

Para este punto, ya terminaste la instalación de tu servidor Foundry. Puedes hacer configuraciones adicionales editando el archivo de configuración que está dentro del directorio del servidor.

Podrás ajustar todos los parámetros accediendo y editando el archivo **app.cfg** que se encuentra en el directorio raíz.
```
nano /home/steam/Foundry-Server/app.cfg
```

Consulta nuestra guía de [Configuración del Servidor Foundry](foundry-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y Conectarte a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo ejecutable **FoundryDedicatedServerLauncher.exe** con el siguiente comando. Asegúrate de usar los comandos **xvfb-run** y **wine** para correrlo a través de la capa de compatibilidad Wine.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

Deberías ver aparecer logs en tu terminal que indican que el inicio fue exitoso. Si todo va bien, tu servidor aparecerá en la lista de servidores. Alternativamente, podrás conectarte directamente usando la barra de búsqueda en la lista de servidores con: `[tu_dirección_ip]:3724`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor Foundry en tu VPS! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](vserver-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto trae varios beneficios como arranque automático al iniciar el VPS, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!

<InlineVoucher />