---
id: vserver-linux-conan
title: "VPS: Configuración de servidor dedicado de Conan Exiles en Linux"
description: "Descubre cómo instalar y ejecutar un servidor dedicado de Conan Exiles en tu VPS Linux con SteamCMD y compatibilidad con Wine → Aprende más ahora"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS Linux y quieres instalar el servidor dedicado de Conan Exiles en él? Estás en el lugar correcto. En esta guía te explicamos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso es muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu VPS? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting ¡en solo unos clics! Descubre más sobre la [Interfaz GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS vía SSH. Si necesitas ayuda, consulta nuestra guía de [Acceso inicial SSH](vserver-linux-ssh.md).

También tendrás que hacer una configuración inicial de SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD en Linux](vserver-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente instalado antes de continuar.

:::info Capa de compatibilidad Wine
Conan Exiles no ofrece actualmente una versión nativa de servidor para Linux, por lo que necesitas un paso extra para ejecutar la versión de servidor de Windows en Linux.

Debes hacer una instalación única de la capa de compatibilidad **Wine** si es la primera vez que la usas en tu servidor Linux. Usa nuestra rápida guía de [Configuración de Wine](vserver-linux-wine.md) para prepararlo antes de seguir.
:::

## Instalación

Primero, inicia sesión como usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Ya dentro, inicia la instalación con este comando para usar SteamCMD directamente como usuario `steam`. El parámetro `+@sSteamCmdForcePlatformType windows` fuerza la instalación de los binarios de Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Ten paciencia mientras se descarga, puede tardar un poco en juegos grandes. Cuando termine verás un mensaje de éxito confirmándolo.

## Configuración

A estas alturas, ya tienes listo tu servidor de Conan Exiles. Puedes hacer configuraciones adicionales editando un archivo dentro del directorio del servidor.

Podrás ajustar todos los parámetros editando el archivo de configuración **WindowsServerEngine.ini** que está en esta ruta:
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Para añadir opciones de configuración, agrega parámetros específicos. Por ejemplo, para poner nombre al servidor, contraseña y contraseña de admin, añade esto al archivo:
```
[OnlineSubsystem]
ServerName=[tu_nombre_de_servidor]
ServerPassword=[tu_contraseña]

[ServerSettings]
AdminPassword=[tu_contraseña_admin]
```

Te recomendamos echar un vistazo a la [Wiki de Conan Exiles](https://conanexiles.fandom.com/wiki/Server_Configuration) para ver todas las opciones disponibles.

## Iniciar y conectar a tu servidor

Ahora toca arrancar el servidor. Ve al directorio principal del juego y ejecuta el archivo **ConanSandboxServer.exe** con este comando. Asegúrate de usar **xvfb-run** y **wine64** para correrlo con la capa de compatibilidad Wine.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

Verás muchos logs en la consola indicando que el servidor está arrancando. Podrás conectarte buscando el servidor en la lista o conectando directo con: `[tu_dirección_ip]:7777`.

## Conclusión

¡Felicidades! Has instalado y configurado con éxito el servidor de Conan Exiles en tu VPS. Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar servicio Linux](vserver-linux-create-gameservice.md), que explica cómo montar tu nuevo servidor dedicado de juegos como un servicio. Esto trae beneficios como arranque automático al iniciar el VPS, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes dudas o problemas, contacta con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte!

<InlineVoucher />