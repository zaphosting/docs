---
id: dedicated-linux-conan
title: "Servidor Dedicado: Configuración del Servidor Dedicado de Conan Exiles en Linux"
description: "Descubre cómo configurar un Servidor Dedicado de Conan Exiles en Linux para un alojamiento y gestión de juego sin interrupciones → Aprende más ahora"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un servidor dedicado Linux y quieres instalar el servicio del servidor dedicado de Conan Exiles en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu servidor dedicado? Esto te permite configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting, ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3](dedicated-linux-gs-interface.md).
:::

## Preparación

Para empezar, conéctate a tu servidor dedicado vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que completar una configuración inicial para SteamCMD si es la primera vez que lo usas en tu servidor Linux. Por favor, usa nuestra guía de [Configuración SteamCMD en Linux](dedicated-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

:::info Capa de Compatibilidad Wine
Conan Exiles actualmente no ofrece una versión nativa del servidor para Linux, lo que significa que hay un paso extra necesario para ejecutar la versión del servidor de Windows en Linux.

Debes completar una instalación única de la capa de compatibilidad **Wine** si es la primera vez que la usas en tu servidor Linux. Usa nuestra rápida guía de [Configuración de la Capa de Compatibilidad Wine](dedicated-linux-wine.md) para configurarla antes de continuar.
:::

## Instalación

Comienza iniciando sesión como el usuario `steam` y dirígete al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar el proceso de instalación con el siguiente comando para usar SteamCMD directamente como usuario `steam`. Al usar el parámetro `+@sSteamCmdForcePlatformType windows`, te aseguras de que se instalen los binarios de Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos de gran tamaño. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

En este punto, ya terminaste la configuración inicial de tu servidor de Conan Exiles. Puedes hacer configuraciones adicionales a través de un archivo de configuración dentro del directorio de tu servidor.

Podrás ajustar todos los parámetros de configuración accediendo y editando el archivo **WindowsServerEngine.ini** que se encuentra en el siguiente directorio:
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Puedes añadir opciones de configuración agregando parámetros específicos. Por ejemplo, para añadir un nombre de servidor, contraseña y contraseña de administrador, agregarías lo siguiente al archivo:
```
[OnlineSubsystem]
ServerName=[tu_nombre_de_servidor]
ServerPassword=[tu_contraseña]

[ServerSettings]
AdminPassword=[tu_contraseña_admin]
```

Te recomendamos visitar la [Wiki de Conan Exiles](https://conanexiles.fandom.com/wiki/Server_Configuration) para una lista completa de opciones disponibles.

## Iniciar y Conectarte a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo ejecutable **ConanSandboxServer.exe** con el siguiente comando. Asegúrate de añadir los comandos **xvfb-run** y **wine64** para ejecutarlo a través de la capa de compatibilidad Wine.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

Deberías ver muchos logs aparecer en tu terminal, lo que indica que el servidor está arrancando. Podrás conectarte directamente buscando el servidor en la lista o conectándote directamente vía: `[tu_dirección_ip]:7777`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor de Conan Exiles en tu servidor dedicado! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que cubre cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto ofrece varios beneficios, incluyendo el arranque automático del servidor al iniciar, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!