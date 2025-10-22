---
id: vserver-linux-enshrouded
title: "VPS: Configuración del Servidor Dedicado Enshrouded en Linux"
description: "Descubre cómo configurar el servidor dedicado Enshrouded en tu VPS Linux para un alojamiento y gestión de servidores de juegos sin complicaciones → Aprende más ahora"
sidebar_label: Enshrouded
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Linux y quieres instalar el servidor dedicado Enshrouded en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar para otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu VPS? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS vía SSH. Usa nuestra guía de [Acceso Inicial SSH](vserver-linux-ssh.md) si necesitas ayuda para hacerlo.

También tendrás que completar una configuración inicial para SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD en Linux](vserver-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

:::info Capa de Compatibilidad Wine
Actualmente Enshrouded no ofrece una versión nativa del servidor para Linux, lo que significa que hay un paso extra para poder ejecutar la versión de servidor para Windows en Linux.

Debes hacer una instalación única de la capa de compatibilidad **Wine** si es la primera vez que la usas en tu servidor Linux. Usa nuestra rápida guía de [Configuración de la Capa de Compatibilidad Wine](vserver-linux-wine.md) para configurarla antes de continuar.
:::

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar el proceso de instalación con el siguiente comando para usar SteamCMD directamente como usuario `steam`. Al usar el parámetro `+@sSteamCmdForcePlatformType windows`, fuerzas la instalación de los binarios para Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

Ten paciencia mientras se descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

Para este punto, ya habrás terminado la configuración inicial de tu servidor Enshrouded. Puedes hacer configuraciones adicionales a través de un archivo de configuración dentro del directorio del servidor.

Podrás ajustar todos los parámetros editando el archivo **enshrouded_server.json** que está en el directorio raíz.
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

Consulta nuestra guía de [Configuración del Servidor Enshrouded](enshrouded-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo **enshrouded_server.exe** con el siguiente comando. Asegúrate de usar los comandos **xvfb-run** y **wine** para correrlo a través de la capa de compatibilidad Wine.
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

Deberías ver muchos logs en tu consola. Si ves el mensaje `[Session] 'HostOnline' (up)!`, significa que el inicio fue exitoso. Podrás conectarte directamente añadiendo los detalles del servidor en la pestaña **Buscar Juegos**: `[tu_dirección_ip]:15636`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor Enshrouded en tu VPS! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](vserver-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto ofrece beneficios como arranque automático al iniciar el VPS, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes cualquier duda o problema, contacta con nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!

<InlineVoucher />