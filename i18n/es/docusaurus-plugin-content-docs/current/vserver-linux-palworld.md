---
id: vserver-linux-palworld
title: "VPS: Configuración del Servidor Dedicado Palworld en Linux"
description: "Descubre cómo configurar y ejecutar un servidor dedicado de Palworld en tu VPS Linux de forma eficiente → Aprende más ahora"
sidebar_label: Palworld
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Linux y quieres instalar el servidor dedicado de Palworld en él? Estás en el lugar correcto. En esta guía, te explicamos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso es muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu VPS? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting, ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3](vserver-linux-gs-interface.md).
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

Una vez dentro, inicia el proceso de instalación con el siguiente comando para usar SteamCMD directamente con el usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Ten paciencia mientras se descarga, puede tardar un poco en juegos de gran tamaño. Cuando termine, verás un mensaje de éxito que lo confirma.

## Configuración

Para este punto, ya terminaste la instalación de tu servidor Palworld. Puedes hacer configuraciones adicionales a través de un archivo de configuración dentro del directorio del servidor.

Necesitarás crear una copia del archivo de configuración por defecto y moverla a la carpeta de guardado antes de editarla.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Con la copia creada, edita los parámetros principales abriendo el nuevo archivo **PalWorldSettings.ini**.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Consulta nuestra guía de [Configuración del Servidor Palworld](palworld-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo shell **PalServer.sh**.
```
/home/steam/Palworld-Server/PalServer.sh
```

Deberías ver aparecer logs en tu terminal, incluyendo uno con la versión del juego, lo que indica que el inicio fue exitoso. Si todo va bien, tu servidor aparecerá en la lista de servidores. También puedes conectarte directamente usando la barra de búsqueda en la lista de servidores con: `[tu_dirección_ip]:8211`.

## Conclusión

¡Felicidades! Has instalado y configurado con éxito el servidor Palworld en tu VPS. Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](vserver-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado como un servicio. Esto trae beneficios como arranque automático al iniciar el VPS, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!

<InlineVoucher />