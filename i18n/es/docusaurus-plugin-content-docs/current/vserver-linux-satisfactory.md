---
id: vserver-linux-satisfactory
title: "VPS: Configuración de Servidor Dedicado Satisfactory en Linux"
description: "Descubre cómo configurar un servidor dedicado de Satisfactory en tu VPS Linux para un alquiler de servidores y gestión sin complicaciones → Aprende más ahora"
sidebar_label: Satisfactory
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Linux y quieres instalar el servidor dedicado de Satisfactory en él? Estás en el lugar correcto. En esta guía, te explicamos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso es muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu VPS? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS vía SSH. Usa nuestra guía de [Acceso Inicial SSH](vserver-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que hacer una configuración inicial de SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD en Linux](vserver-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, inicia la instalación con el siguiente comando para usar SteamCMD directamente con el usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

Ten paciencia mientras se descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

En este punto, ya terminaste la instalación de tu servidor Satisfactory. Puedes hacer configuraciones adicionales editando los archivos de configuración dentro del directorio del servidor.

Podrás ajustar todos los parámetros accediendo y editando los archivos **Engine.ini** y **GameUserSettings.ini** que están en la carpeta Saved.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo shell **FactoryServer.sh**.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

Deberías ver logs en tu terminal que indican que el servidor arrancó correctamente. Ten en cuenta que el primer inicio puede tardar un poco mientras se configura todo. También puedes conectarte directamente usando la barra de búsqueda en la lista de servidores con: `[tu_dirección_ip]:15777`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor de Satisfactory en tu VPS! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](vserver-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto trae beneficios como arranque automático al iniciar el VPS, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!

<InlineVoucher />