---
id: dedicated-linux-vrising
title: "Servidor Dedicado: Configuración del Servidor Dedicado V-Rising en Linux"
description: "Descubre cómo configurar el Servidor Dedicado V-Rising en Linux para un alquiler de servidores y gestión sin complicaciones → Aprende más ahora"
sidebar_label: V-Rising
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un servidor dedicado Linux y quieres instalar el servicio del servidor dedicado V-Rising en él? Estás en el lugar correcto. En esta guía, te explicamos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu servidor dedicado? Esto te permite configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparación

Para empezar, conéctate a tu servidor dedicado vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que completar una configuración inicial para SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD en Linux](dedicated-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

:::info Capa de Compatibilidad Wine
Actualmente, V-Rising no ofrece una versión nativa para servidores Linux, lo que significa que hay un paso extra para poder ejecutar la versión de servidor para Windows en Linux.

Debes hacer una instalación única de la capa de compatibilidad **Wine** si es la primera vez que la usas en tu servidor Linux. Usa nuestra rápida guía de [Configuración de la Capa de Compatibilidad Wine](dedicated-linux-wine.md) para configurarla antes de continuar.
:::

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar el proceso de instalación con el siguiente comando para usar SteamCMD directamente como usuario `steam`. Al usar el parámetro `+@sSteamCmdForcePlatformType windows`, fuerzas la instalación de los binarios para Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

Ten paciencia mientras se descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

En este punto, ya terminaste la configuración básica de tu servidor V-Rising. Puedes hacer configuraciones adicionales editando directamente el archivo de lanzamiento.

Podrás ajustar todos los parámetros de configuración accediendo y editando los archivos **ServerGameSettings.json** y **ServerHostSettings.json** que están en la carpeta Settings.
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

Consulta nuestra guía de [Configuración del Servidor V-Rising](vrising-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego, donde recomendamos crear una copia del archivo batch de ejemplo.
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

Puedes editar el archivo si quieres. Cuando estés listo, ejecuta el nuevo archivo **start_server.bat** con el comando siguiente. Asegúrate de añadir los comandos **xvfb-run** y **wine** para ejecutarlo a través de la capa de compatibilidad Wine.
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Deberías ver logs en tu terminal que indican que el inicio fue exitoso. Ten en cuenta que el primer arranque puede tardar un poco mientras se configura todo. Alternativamente, podrás conectarte directamente usando la barra de búsqueda inferior en la lista de servidores buscando: `[tu_dirección_ip]:8211`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor V-Rising en tu servidor dedicado! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto ofrece varios beneficios como arranque automático al iniciar el servidor, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, que está disponible para ayudarte todos los días.