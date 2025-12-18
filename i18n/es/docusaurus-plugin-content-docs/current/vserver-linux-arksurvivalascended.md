---
id: vserver-linux-arksurvivalascended
title: "VPS: Configuración del Servidor Dedicado ARK Survival Ascended en Linux"
description: "Descubre cómo configurar el servidor dedicado ARK: Survival Ascended en tu VPS Linux para una gestión de juego sin complicaciones → Aprende más ahora"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Linux y quieres instalar el servidor dedicado de ARK: Survival Ascended en él? Estás en el lugar correcto. En esta guía te explicamos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso es muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu VPS? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting ¡en solo unos clics! Descubre más sobre la [Interfaz GS/TS3 aquí](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS vía SSH. Usa nuestra [Guía de Acceso Inicial SSH](vserver-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que hacer una configuración inicial de SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra [Guía de Configuración SteamCMD Linux](vserver-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente listo antes de continuar.

:::info Capa de Compatibilidad Wine
ARK: Survival Ascended actualmente no ofrece una versión nativa de servidor para Linux, lo que significa que hay un paso extra para poder ejecutar la versión de servidor de Windows en Linux.

Debes hacer una instalación única de la capa de compatibilidad **Wine** si es la primera vez que la usas en tu servidor Linux. Usa nuestra rápida [Guía de Configuración de Wine](vserver-linux-wine.md) para prepararlo antes de continuar.
:::

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Ya dentro, inicia la instalación con el siguiente comando para usar SteamCMD y descargar el servidor directamente en el usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Ten paciencia mientras se descarga, puede tardar un poco en juegos grandes. Cuando termine verás un mensaje de éxito confirmándolo.

## Configuración

Para este punto, ya terminaste la instalación de tu servidor ARK: Survival Ascended. Puedes hacer configuraciones adicionales editando un archivo dentro del directorio del servidor.

Podrás ajustar todos los parámetros editando el archivo de configuración **GameUserSettings.ini** que está dentro de la carpeta Saved.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

Consulta nuestra [Guía de Configuración del Servidor ARK: Survival Ascended](ark-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y Conectarte a tu servidor

Ahora toca arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo **ArkAscendedServer.exe** con el comando de abajo. Asegúrate de usar los comandos **xvfb-run** y **wine** para correrlo a través de la capa de compatibilidad Wine.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Lamentablemente, por falta de soporte, no puedes ejecutar la versión del servidor con Anti-Cheat Battleye en Linux. Esto se debe a que el Anti-Cheat no es compatible en absoluto.
:::

Deberías ver logs en tu consola que indican que el servidor arrancó correctamente. Ten en cuenta que el primer inicio puede tardar un poco mientras se configura todo. También podrás conectarte directamente usando la barra de búsqueda en la lista de servidores con: `[tu_dirección_ip]:7777`.

## Conclusión

¡Felicidades! Has instalado y configurado con éxito el servidor ARK: Survival Ascended en tu VPS. Como siguiente paso, te recomendamos revisar nuestra [Guía para Configurar el Servicio Linux](vserver-linux-create-gameservice.md), que explica cómo montar tu nuevo servidor dedicado de juegos como un servicio. Esto trae beneficios como arranque automático al iniciar el VPS, actualizaciones automáticas, gestión sencilla, acceso a logs y mucho más.

Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!

<InlineVoucher />