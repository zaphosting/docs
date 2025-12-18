---
id: dedicated-linux-css
title: "Servidor Dedicado: Configuración de Servidor Dedicado Counter-Strike: Source en Linux"
description: "Aprende a configurar un servidor dedicado de Counter-Strike: Source en tu VPS Linux para un hosting de juego sin interrupciones → ¡Descubre más ahora!"
sidebar_label: "Counter-Strike: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Linux y quieres instalar el servicio de servidor dedicado de Counter-Strike: Source en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu VPS? Esto te permite configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting, ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparación

Para empezar, conéctate a tu VPS vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda con esto. También tendrás que completar una configuración inicial para SteamCMD si es la primera vez que lo usas en tu servidor Linux. Por favor, usa nuestra guía de [Configuración SteamCMD en Linux](dedicated-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

## Instalación

Comienza iniciando sesión como el usuario `steam` y dirígete al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar el proceso de instalación con el siguiente comando para instalar fácilmente usando SteamCMD directamente en el usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 232330 validate +quit
```

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

En este punto, ya terminaste la configuración básica de tu servidor de Counter-Strike: Source. Puedes hacer configuraciones adicionales editando directamente el archivo de lanzamiento.

Ve a tu directorio raíz. Dentro de este, navega a la carpeta cfg y abre el archivo `server.cfg`. Ahí podrás editar las opciones del servidor.
```
nano /home/steam/css-ds/cstrike/cfg/server.cfg
```

## Registro del Token GSL

Para que otros jugadores puedan unirse a tu servidor, debes generar e incluir un Game Server Login Token (GSLT). Este token autentica tu servidor con Steam. Para generar un GSLT, visita http://steamcommunity.com/dev/managegameservers y crea un token usando el ID de juego 232330, que corresponde a Counter-Strike: Source.

Una vez tengas el token, inclúyelo en los parámetros de lanzamiento del servidor con `+sv_setsteamaccount <TOKEN>`.

## Iniciar y Conectarse a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el siguiente comando de lanzamiento:
```
./srcds_run -console -game cstrike -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Deberías ver aparecer logs en tu consola que indican que el servidor arrancó correctamente. Ten en cuenta que el primer inicio puede tardar un poco mientras se configura todo. Alternativamente, podrás conectarte directamente usando la barra de búsqueda inferior en la lista de servidores y buscando: `[tu_dirección_ip]:2456`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor de Counter-Strike: Source en tu VPS! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto ofrece varios beneficios, incluyendo arranque automático del servidor al iniciar, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂