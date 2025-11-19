---
id: dedicated-linux-rust
title: "Servidor Dedicado: Configuración de Servidor Dedicado Rust en Linux"
description: "Aprende cómo configurar un Servidor Dedicado Rust en Linux para alojar tu servidor de juegos de forma eficiente y optimizar el rendimiento del servidor → Aprende más ahora"
sidebar_label: Rust
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un servidor dedicado Linux y quieres instalar el servicio de servidor dedicado Rust en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar para otras distribuciones.

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

Una vez dentro, puedes iniciar el proceso de instalación con el siguiente comando para arrancar la instalación usando SteamCMD directamente con el usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

## Configuración

En este punto, ya terminaste la configuración básica de tu servidor Rust. Puedes hacer configuraciones adicionales a través de archivos de configuración dentro del directorio de tu servidor.

Ve a tu directorio raíz y crea un archivo `.sh`. Este será el archivo bash que usarás para arrancar el servidor y ajustar varios parámetros de configuración.
```
nano /home/steam/Rust-Server/start_server.sh
```

Ahora añade el siguiente contenido al archivo bash. En el comando de abajo, se han incluido algunos de los parámetros básicos y más usados. Si quieres añadir más o aprender sobre cada uno, te recomendamos visitar la [wiki oficial de Rust](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver) que ofrece todas las opciones de configuración disponibles.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Guarda el archivo con `CTRL+X`, luego `Y` y `Enter`. Por último, para hacer que el archivo bash sea ejecutable sin privilegios sudo, ejecuta el siguiente comando que añade el permiso de ejecución al archivo.
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo shell **start_server.sh**.
```
/home/steam/Rust-Server/start_server.sh
```

Deberías ver aparecer logs en tu consola que indican que el inicio fue exitoso. Ten en cuenta que el primer arranque puede tardar un poco mientras se configura todo. Si todo va bien, tu servidor será visible en la lista de servidores. Alternativamente, podrás conectarte directamente buscando: `[tu_dirección_ip]:28015`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor Rust en tu servidor dedicado! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](dedicated-linux-create-gameservice.md), que explica cómo configurar tu nuevo servidor dedicado de juegos como un servicio. Esto ofrece varios beneficios, incluyendo el arranque automático del servidor al iniciar, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!