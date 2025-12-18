---
id: dedicated-linux-valheim
title: "Servidor Dedicado: Configuración de Valheim Dedicated Server en Linux"
description: "Descubre cómo configurar un Valheim Dedicated Server en Linux para alojar tu servidor de juegos de forma eficiente y optimizar el rendimiento de tu servidor → Aprende más ahora"
sidebar_label: Valheim
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un servidor dedicado Linux y quieres instalar el servicio Valheim Dedicated Server en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu servidor dedicado? Esto te permite configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting, ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparación

Para empezar, conéctate a tu servidor dedicado vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que completar una configuración inicial para SteamCMD si es la primera vez que lo usas en tu servidor Linux. Por favor, usa nuestra guía de [Configuración SteamCMD en Linux](dedicated-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar el proceso de instalación con el siguiente comando para instalar fácilmente usando SteamCMD directamente con el usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito que lo confirma.

## Configuración

En este punto, ya terminaste la configuración básica de tu servidor Valheim. Puedes hacer configuraciones adicionales editando directamente el archivo de inicio.

Ve a tu directorio raíz y abre el archivo `.sh`. Aquí puedes modificar los parámetros.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo shell **start_server.sh**.
```
/home/steam/Valheim-Server/start_server.sh
```

Deberías ver aparecer logs en tu consola que indican que el inicio fue exitoso. Ten en cuenta que el primer arranque puede tardar un poco mientras se configura todo. Alternativamente, podrás conectarte directamente usando la barra de búsqueda inferior en la lista de servidores y buscando: `[tu_dirección_ip]:2456`.

:::info
Si no puedes conectar y recibes errores `PlayFab` en la consola, puede que necesites desactivar el soporte crossplay para resolverlo, ya que es un problema actual en la versión Linux. Para hacerlo, ejecuta `nano /home/steam/Valheim-Server/start_server.sh` y elimina la bandera `-crossplay`.

Si necesitas crossplay, una solución alternativa es instalar la versión de Windows y usar **Wine** como capa de compatibilidad. Usa nuestra rápida guía de [Configuración de Capa de Compatibilidad Wine](dedicated-linux-wine.md) para configurarlo. Una vez listo, puedes instalar la versión Windows del servidor Valheim vía SteamCMD con:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Una vez instalado, usa el siguiente comando para lanzar la versión Windows a través de Wine: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Conclusión

¡Felicidades, has instalado y configurado exitosamente el servidor Valheim en tu servidor dedicado! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor de juegos dedicado como un servicio. Esto ofrece varios beneficios, incluyendo arranque automático del servidor al iniciar, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, que está disponible para ayudarte todos los días.