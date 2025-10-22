---
id: vserver-linux-dods
title: "VPS: Configuración de servidor dedicado Day of Defeat: Source en Linux"
description: "Descubre cómo configurar un servidor dedicado de Day of Defeat: Source en tu VPS Linux de forma rápida y eficiente → Aprende más ahora"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Linux y quieres instalar el servidor dedicado de Day of Defeat: Source en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu VPS? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting en solo unos clics. ¡Échale un vistazo a la [Interfaz GS/TS3](vserver-linux-gs-interface.md)!
:::

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS vía SSH. Usa nuestra [Guía de acceso inicial SSH](vserver-linux-ssh.md) si necesitas ayuda con esto. También tendrás que completar la configuración inicial de SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra [Guía de configuración SteamCMD en Linux](vserver-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente instalado antes de continuar.

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar la instalación con el siguiente comando para descargar e instalar fácilmente usando SteamCMD directamente con el usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/dod-ds' +login anonymous +app_update 232290 validate +quit
```

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

En este punto, ya terminaste la configuración básica de tu servidor de Day of Defeat: Source. Puedes hacer configuraciones adicionales editando directamente el archivo de lanzamiento.

Ve a tu directorio raíz. Dentro de este, navega a la carpeta cfg y abre el archivo `server.cfg`. Ahí podrás modificar las opciones del servidor.
```
nano /home/steam/dod-ds/dod/cfg/server.cfg
```

## Registro del token GSL

Para que otros jugadores puedan unirse a tu servidor, debes generar e incluir un Game Server Login Token (GSLT). Este token autentica tu servidor con Steam. Para generar un GSLT, visita http://steamcommunity.com/dev/managegameservers y crea un token usando el ID de juego 232290, que corresponde a Day of Defeat: Source.

Una vez tengas el token, inclúyelo en los parámetros de lanzamiento del servidor con `+sv_setsteamaccount <TOKEN>`.

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el siguiente comando de lanzamiento:
```
./srcds_run -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Deberías ver aparecer logs en tu terminal que indican que el servidor arrancó correctamente. Ten en cuenta que el primer inicio puede tardar un poco mientras se configura todo. Alternativamente, podrás conectarte directamente usando la barra de búsqueda en la lista de servidores con: `[tu_dirección_ip]:2456`.

## Conclusión

¡Felicidades! Has instalado y configurado con éxito el servidor de Day of Defeat: Source en tu VPS. Como siguiente paso, te recomendamos revisar nuestra [Guía para configurar servicios Linux](vserver-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto te ofrece beneficios como arranque automático al iniciar el VPS, actualizaciones automáticas, gestión sencilla, acceso a logs y mucho más.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />