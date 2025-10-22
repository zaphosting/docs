---
id: dedicated-linux-rust
title: "Servidor Dedicado: Configuración de Servidor Dedicado Rust en Linux"
description: "Aprende cómo configurar un servidor dedicado Rust en Linux para alojar tu servidor de juegos de forma eficiente y optimizar el rendimiento del servidor → ¡Descúbrelo ahora!"
sidebar_label: Rust
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un servidor dedicado Linux y quieres instalar el servicio de servidor dedicado Rust en él? Estás en el lugar correcto. En esta guía, te explicamos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso es muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu servidor dedicado? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3 aquí](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu servidor dedicado vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que hacer una configuración inicial de SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD Linux](dedicated-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, inicia el proceso de instalación con el siguiente comando para instalar fácilmente usando SteamCMD directamente en el usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Ten paciencia mientras se descarga, puede tardar un poco en juegos de mayor tamaño. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

Para este punto, ya terminaste la configuración básica de tu servidor Rust. Puedes hacer configuraciones adicionales a través de los archivos de configuración que están dentro del directorio de tu servidor.

Ve al directorio raíz y crea un archivo `.sh`. Este será el archivo bash que usarás para iniciar el servidor y ajustar varios parámetros de configuración.
```
nano /home/steam/Rust-Server/start_server.sh
```

Ahora añade el siguiente contenido en el archivo bash. En el comando están algunos de los parámetros básicos y más usados. Si quieres añadir más o aprender sobre cada uno, te recomendamos visitar la [wiki oficial de Rust](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver) que tiene todas las opciones de configuración disponibles.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Guarda el archivo con `CTRL+X`, luego `Y` y presiona `Enter`. Por último, para que el archivo bash sea ejecutable sin privilegios sudo, ejecuta este comando que añade permiso de ejecución al archivo.
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo shell **start_server.sh**.
```
/home/steam/Rust-Server/start_server.sh
```

Deberías ver logs en tu consola que indican que el inicio fue exitoso. Ten en cuenta que la primera vez puede tardar un poco mientras se configura todo. Si todo va bien, tu servidor aparecerá en la lista de servidores. También podrás conectarte directamente buscando: `[tu_dirección_ip]:28015`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor Rust en tu servidor dedicado! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto trae varios beneficios como arranque automático al iniciar el VPS, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!

<InlineVoucher />