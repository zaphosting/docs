---
id: dedicated-linux-enshrouded
title: "Servidor Dedicado: Configuración del Servidor Dedicado Enshrouded en Linux"
description: "Descubre cómo instalar y ejecutar el Servidor Dedicado Enshrouded en Linux para un alquiler de servidores y gestión sin complicaciones → Aprende más ahora"
sidebar_label: Enshrouded
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un Servidor Dedicado Linux y quieres instalar el servicio del Servidor Dedicado Enshrouded en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu servidor dedicado? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3 aquí](dedicated-linux-gs-interface.md).
:::

## Preparación

Para empezar, conéctate a tu Servidor Dedicado vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que completar una configuración inicial para SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD en Linux](dedicated-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

:::info Capa de Compatibilidad Wine
Actualmente Enshrouded no ofrece una versión nativa para servidores Linux, lo que significa que hay un paso extra para poder ejecutar la versión de servidor para Windows en Linux.

Debes hacer una instalación única de la capa de compatibilidad **Wine** si es la primera vez que la usas en tu servidor Linux. Usa nuestra rápida guía de [Configuración de la Capa de Compatibilidad Wine](dedicated-linux-wine.md) para prepararlo antes de continuar.
:::

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar el proceso de instalación con el siguiente comando para usar SteamCMD directamente con el usuario `steam`. Al usar el parámetro `+@sSteamCmdForcePlatformType windows`, fuerzas la instalación de los binarios para Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

Para este punto, ya terminaste la configuración inicial de tu servidor Enshrouded. Puedes hacer configuraciones adicionales a través de un archivo de configuración dentro del directorio del servidor.

Podrás ajustar todos los parámetros editando el archivo de configuración **enshrouded_server.json** que se encuentra en el directorio raíz.
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

Consulta nuestra guía de [Configuración del Servidor Enshrouded](enshrouded-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y Conectarse a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo ejecutable **enshrouded_server.exe** con el siguiente comando. Asegúrate de usar los comandos **xvfb-run** y **wine** para ejecutarlo a través de la capa de compatibilidad Wine.
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

Deberías ver muchos logs aparecer en tu terminal. Si ves el mensaje `[Session] 'HostOnline' (up)!`, eso indica que el inicio fue exitoso. Podrás conectarte directamente agregando los detalles del servidor en la pestaña **Buscar Juegos**: `[tu_dirección_ip]:15636`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor Enshrouded en tu Servidor Dedicado! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto ofrece varios beneficios como arranque automático al iniciar el servidor, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, que está disponible para ayudarte todos los días.