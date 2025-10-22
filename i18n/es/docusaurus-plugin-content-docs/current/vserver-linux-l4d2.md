---
id: vserver-linux-l4d2
title: "VPS: Configuración de Servidor Dedicado Left 4 Dead 2 en Linux"
description: "Descubre cómo configurar un servidor dedicado de Left 4 Dead 2 en tu VPS Linux para una experiencia de juego fluida y gestión sencilla → Aprende más ahora"
sidebar_label: "Left 4 Dead 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Linux y quieres instalar el servicio de servidor dedicado de Left 4 Dead 2? Estás en el lugar correcto. En esta guía, te explicamos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso es muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu VPS? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS vía SSH. Usa nuestra guía de [Acceso Inicial SSH](vserver-linux-ssh.md) si necesitas ayuda con esto. También tendrás que completar la configuración inicial de SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD Linux](vserver-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, inicia el proceso de instalación con el siguiente comando para usar SteamCMD directamente con el usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/l4d2-ds' +login anonymous +app_update 222840 validate +quit
```

Ten paciencia mientras se descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

En este punto, ya terminaste la instalación de tu servidor de Left 4 Dead 2. Puedes hacer configuraciones adicionales editando directamente el archivo de lanzamiento.

Ve a tu directorio raíz. Dentro de este, navega a la carpeta cfg y abre el archivo `server.cfg`. Ahí podrás editar las opciones del servidor.
```
nano /home/steam/l4d2-ds/l4d2/cfg/server.cfg
```

## Registro del Token GSL

Para que otros jugadores puedan unirse a tu servidor, debes generar e incluir un Game Server Login Token (GSLT). Este token autentica tu servidor con Steam. Para generar un GSLT, visita http://steamcommunity.com/dev/managegameservers y crea un token usando el ID de juego 222840, que corresponde a Left 4 Dead 2.

Una vez tengas el token, inclúyelo en los parámetros de lanzamiento del servidor con `+sv_setsteamaccount <TOKEN>`.

## Iniciar y Conectarte a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el siguiente comando de lanzamiento:
```
./srcds_run -console -game left4dead2 -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Deberías ver logs en tu consola que indican que el servidor arrancó correctamente. Ten en cuenta que la primera vez puede tardar un poco mientras se configura todo. También puedes conectarte directamente usando la barra de búsqueda en la lista de servidores con: `[tu_dirección_ip]:2456`.

## Conclusión

¡Felicidades! Has instalado y configurado con éxito el servidor de Left 4 Dead 2 en tu VPS. Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](vserver-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto ofrece beneficios como arranque automático al iniciar el VPS, actualizaciones automáticas, gestión sencilla, acceso a logs y mucho más.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />