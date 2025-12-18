---
id: vserver-linux-valheim
title: "VPS: Configuración de Servidor Dedicado Valheim en Linux"
description: "Descubre cómo configurar un servidor dedicado de Valheim en tu VPS Linux para un juego fluido y gestión fácil del servidor → Aprende más ahora"
sidebar_label: Valheim
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Linux y quieres instalar el servidor dedicado de Valheim en él? Estás en el lugar correcto. En esta guía, te explicamos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso es muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu VPS? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting, ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS vía SSH. Usa nuestra guía de [Acceso Inicial SSH](vserver-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que hacer una configuración inicial de SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD en Linux](vserver-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

## Instalación

Comienza iniciando sesión como usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, inicia la instalación con este comando para usar SteamCMD directamente con el usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Ten paciencia mientras se descarga, puede tardar un poco en juegos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

Para este punto, ya terminaste la configuración básica de tu servidor Valheim. Puedes hacer configuraciones adicionales editando directamente el archivo de lanzamiento.

Ve a tu directorio raíz y abre el archivo `.sh`. Aquí puedes modificar los parámetros.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo shell **start_server.sh**.
```
/home/steam/Valheim-Server/start_server.sh
```

Deberías ver logs en tu consola que indican que el servidor arrancó correctamente. Ten en cuenta que la primera vez puede tardar un poco mientras se configura todo. También puedes conectarte directamente usando la barra de búsqueda en la lista de servidores con: `[tu_dirección_ip]:2456`.

:::info
Si no puedes conectar y ves errores `PlayFab` en la consola, puede que necesites desactivar el soporte crossplay para solucionarlo, ya que es un problema actual en la versión Linux. Para hacerlo, ejecuta `nano /home/steam/Valheim-Server/start_server.sh` y elimina la bandera `-crossplay`.

Si necesitas crossplay, una solución alternativa es instalar la versión de Windows y usar **Wine** como capa de compatibilidad. Usa nuestra rápida guía de [Configuración de Capa de Compatibilidad Wine](vserver-linux-wine.md) para configurarlo. Cuando esté listo, instala el servidor Valheim para Windows con SteamCMD usando:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Una vez instalado, lanza la versión Windows con Wine usando: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Conclusión

¡Felicidades! Has instalado y configurado con éxito el servidor Valheim en tu VPS. Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](vserver-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto trae beneficios como arranque automático al iniciar el VPS, actualizaciones automáticas, gestión sencilla, acceso a logs y mucho más.

Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!

<InlineVoucher />