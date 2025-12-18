---
id: dedicated-linux-palworld
title: "Servidor Dedicado: Configuración del Servidor Dedicado Palworld en Linux"
description: "Descubre cómo configurar y gestionar un Servidor Dedicado Palworld en Linux para una experiencia de juego sin interrupciones → Aprende más ahora"
sidebar_label: Palworld
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un Servidor Dedicado Linux y quieres instalar el servicio del servidor dedicado de Palworld en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu servidor dedicado? Esto te permite configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3 aquí](dedicated-linux-gs-interface.md).
:::

## Preparación

Para empezar, conéctate a tu Servidor Dedicado vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que completar una configuración inicial para SteamCMD si es la primera vez que lo usas en tu servidor Linux. Por favor, usa nuestra guía de [Configuración SteamCMD en Linux](dedicated-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

## Instalación

Comienza iniciando sesión como el usuario `steam` y dirígete al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar el proceso de instalación con el siguiente comando para instalar fácilmente usando SteamCMD directamente con el usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos de mayor tamaño. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

En este punto, ya has terminado la configuración inicial de tu servidor Palworld. Puedes hacer configuraciones adicionales a través de un archivo de configuración que se encuentra dentro del directorio de tu servidor.

Necesitarás crear una copia del archivo de configuración por defecto y añadirla a la carpeta de guardado antes de poder editarla.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Con la copia creada, puedes editar los parámetros principales abriendo el nuevo archivo de configuración **PalWorldSettings.ini**.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Consulta nuestra guía de [Configuración del Servidor Palworld](palworld-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y Conectarse a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo shell **PalServer.sh**.
```
/home/steam/Palworld-Server/PalServer.sh
```

Deberías ver aparecer logs en tu consola, incluyendo un log de la versión del juego, lo que indica que el inicio fue exitoso. Si todo va bien, tu servidor será visible en la lista de servidores. Alternativamente, podrás conectarte directamente usando la barra de búsqueda inferior en la lista de servidores buscando: `[tu_dirección_ip]:8211`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor Palworld en tu Servidor Dedicado! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que cubre cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto ofrece varios beneficios, incluyendo el arranque automático del servidor al iniciar, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o problemas, no dudes en contactar a nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!