---
id: dedicated-linux-arksurvivalascended
title: "Servidor Dedicado: Configuración del Servidor Dedicado ARK Survival Ascended en Linux"
description: "Descubre cómo configurar un servidor dedicado de ARK: Survival Ascended en Linux para un juego fluido y gestión sencilla del servidor → Aprende más ahora"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un servidor dedicado Linux y quieres instalar el servicio del servidor dedicado de ARK: Survival Ascended en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu servidor dedicado? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3 aquí](dedicated-linux-gs-interface.md).
:::

## Preparación

Para empezar, conéctate a tu servidor dedicado vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que completar una configuración inicial para SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD en Linux](dedicated-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

:::info Capa de Compatibilidad Wine
ARK: Survival Ascended actualmente no ofrece una versión nativa de servidor para Linux, lo que significa que hay un paso extra para poder ejecutar la versión de servidor de Windows en Linux.

Debes hacer una instalación única de la capa de compatibilidad **Wine** si es la primera vez que la usas en tu servidor Linux. Usa nuestra rápida guía de [Configuración de la Capa de Compatibilidad Wine](dedicated-linux-wine.md) para configurarla antes de continuar.
:::

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar el proceso de instalación con el siguiente comando para usar SteamCMD directamente con el usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

Para este punto, ya habrás terminado la configuración básica de tu servidor ARK: Survival Ascended. Puedes hacer configuraciones adicionales editando un archivo de configuración dentro del directorio de tu servidor.

Podrás ajustar todos los parámetros accediendo y editando el archivo **GameUserSettings.ini** que se encuentra dentro de la carpeta Saved.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

Consulta nuestra guía de [Configuración del Servidor ARK: Survival Ascended](ark-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y Conectarte a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo ejecutable **ArkAscendedServer.exe** usando el comando siguiente. Asegúrate de añadir los comandos **xvfb-run** y **wine** para ejecutarlo a través de la capa de compatibilidad Wine.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Lamentablemente, debido a la falta de soporte, no puedes ejecutar la versión del servidor con Anti-Cheat Battleye en Linux. Esto se debe a que el Anti-Cheat no es compatible en absoluto.
:::

Ahora deberías ver que aparecen logs en tu terminal, lo que indica que el servidor arrancó correctamente. Ten en cuenta que el primer inicio puede tardar un poco mientras se configura todo. Alternativamente, podrás conectarte directamente usando la barra de búsqueda inferior en la lista de servidores y buscando: `[tu_dirección_ip]:7777`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor ARK: Survival Ascended en tu servidor dedicado! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto ofrece varios beneficios, como el arranque automático del servidor al iniciar, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, que está disponible para ayudarte todos los días.