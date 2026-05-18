---
id: server-linux-arma3
title: "Configuración del Servidor Dedicado Arma 3 en Linux"
description: "Descubre cómo instalar y ejecutar el Servidor Dedicado de Arma 3 en Linux para un alquiler de servidores y gestión sin complicaciones → Aprende más ahora"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS/servidor dedicado Linux y quieres instalar el servicio del servidor dedicado de Arma 3 en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu VPS/servidor dedicado? Esto te permite configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting, ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3 aquí](dedicated-linux-gs-interface.md).
:::

## Preparación

Para empezar, conéctate a tu VPS/servidor dedicado vía SSH. Usa nuestra guía de [Acceso Inicial SSH](dedicated-linux-ssh.md) si necesitas ayuda para hacerlo.

También tendrás que completar una configuración inicial para SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD en Linux](dedicated-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

## Instalación

Comienza iniciando sesión como el usuario `steam` y dirígete al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar el proceso de instalación con el siguiente comando para arrancar la instalación usando SteamCMD directamente con el usuario `steam`. Al usar el parámetro `+@sSteamCmdForcePlatformType windows`, fuerzas la instalación de los binarios de Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/arma3-server' +login anonymous +app_update 233780 validate +quit
```

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito que lo confirma.

## Configuración

En este punto, ya has terminado la configuración inicial de tu servidor de Arma 3. Puedes hacer configuraciones adicionales a través de un archivo de configuración que se encuentra dentro del directorio de tu servidor.

Podrás ajustar todos los parámetros editando el archivo de configuración **server.cfg** que está en el directorio raíz.
```
nano /home/steam/arma3-server/server.cfg
```

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el archivo **arma3server_x64** con el siguiente comando.

```
/home/steam/arma3-server/arma3server_x64
```

Deberías ver muchos logs en tu terminal que indican que el servidor ha arrancado correctamente.

Los jugadores podrán conectarse directamente a través del **navegador de servidores de Arma 3** usando la dirección IP de tu servidor y el puerto por defecto **2302**.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el **servidor de Arma 3** en tu VPS/servidor dedicado! Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!

<InlineVoucher />