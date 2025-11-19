---
id: dedicated-linux-satisfactory
title: "Servidor Dedicado: Configuración de Servidor Dedicado Satisfactory en Linux"
description: "Comienza con la instalación y configuración de un servidor dedicado de Satisfactory en tu servidor Linux para un alquiler de servidores sin interrupciones → Aprende más ahora"
sidebar_label: Satisfactory
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un servidor dedicado Linux y quieres instalar el servicio de servidor dedicado de Satisfactory en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar para otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu servidor dedicado, permitiéndote configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting, ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3 aquí](dedicated-linux-gs-interface.md).
:::

## Preparación

Para comenzar, conéctate a tu servidor dedicado vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda para hacerlo.

También tendrás que completar una configuración inicial para SteamCMD si es la primera vez que lo usas en tu servidor Linux. Por favor, usa nuestra guía de [Configuración SteamCMD Linux](dedicated-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

## Instalación

Comienza iniciando sesión como el usuario `steam` y dirígete al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar el proceso de instalación usando el siguiente comando para arrancar la instalación fácilmente con SteamCMD directamente en tu usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos de mayor tamaño. Cuando termine con éxito, verás un mensaje de confirmación.

## Configuración

En este punto, ya has terminado la configuración básica de tu servidor Satisfactory. Puedes hacer configuraciones adicionales editando los archivos de configuración que se encuentran dentro del directorio de tu servidor.

Podrás ajustar todos los parámetros de configuración accediendo y editando los archivos **Engine.ini** y **GameUserSettings.ini** que están dentro de la carpeta Saved.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Iniciar y conectar a tu servidor

Ahora es momento de iniciar tu servidor. Ve al directorio principal del juego y ejecuta el archivo shell **FactoryServer.sh**.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

Deberías ver aparecer logs en tu terminal que indican que el inicio fue exitoso. Ten en cuenta que el primer inicio puede tardar un poco mientras se configura todo. Alternativamente, podrás conectarte directamente usando la barra de búsqueda inferior en la lista de servidores y buscando: `[tu_dirección_ip]:15777`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor de Satisfactory en tu servidor dedicado! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto ofrece varios beneficios, incluyendo el arranque automático del servidor al iniciar, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, que está disponible para ayudarte todos los días.