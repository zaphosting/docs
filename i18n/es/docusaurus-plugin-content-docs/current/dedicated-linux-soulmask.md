---
id: dedicated-linux-soulmask
title: "Servidor Dedicado: Configuración del Servidor Dedicado Soulmask en Linux"
description: "Descubre cómo configurar y gestionar un Servidor Dedicado Soulmask en Linux para un alquiler de servidores fluido → Aprende más ahora"
sidebar_label: Soulmask
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un servidor dedicado Linux y quieres instalar el servicio del servidor dedicado Soulmask en él? Estás en el lugar correcto. En esta guía, te explicamos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso es muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu servidor dedicado? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu servidor dedicado vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que hacer una configuración inicial de SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD en Linux](dedicated-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, inicia el proceso de instalación con el siguiente comando para usar SteamCMD directamente con el usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

Ten paciencia mientras se descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

En este punto, ya terminaste la instalación de tu servidor Soulmask. Puedes hacer configuraciones adicionales editando los archivos de configuración dentro del directorio de tu servidor.

Podrás ajustar todos los parámetros accediendo y editando el archivo **Engine.ini** que está dentro de la carpeta Saved.
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo **StartServer.sh** con el siguiente comando.
```
/home/steam/Soulmask-Server/StartServer.sh
```

Deberías ver logs en la consola que indican que el servidor arrancó correctamente. Ten en cuenta que la primera vez puede tardar un poco mientras se configura todo. También puedes conectarte directamente usando la barra de búsqueda en la lista de servidores con: `[tu_dirección_ip]:18888`.

## Conclusión

¡Felicidades! Has instalado y configurado con éxito el servidor Soulmask en tu servidor dedicado. Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor de juegos dedicado como un servicio. Esto trae beneficios como arranque automático al iniciar el servidor, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes cualquier duda o problema, contacta con nuestro equipo de soporte, ¡están disponibles todos los días para ayudarte!

<InlineVoucher />