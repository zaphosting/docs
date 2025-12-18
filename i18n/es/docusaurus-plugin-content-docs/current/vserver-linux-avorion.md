---
id: vserver-linux-avorion
title: "VPS: Configuración de Servidor Dedicado Avorion en Linux"
description: "Descubre cómo instalar y configurar un servidor dedicado de Avorion en tu VPS Linux para un alquiler de servidores y gestión sin complicaciones → Aprende más ahora"
sidebar_label: Avorion
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Linux y quieres instalar el servicio de servidor dedicado de Avorion en él? Estás en el lugar correcto. En esta guía, te explicamos paso a paso cómo instalar este servicio en tu servidor Linux usando SteamCMD. Usaremos Ubuntu en los ejemplos, pero el proceso debería ser muy similar en otras distribuciones.

:::tip
¿Sabías que puedes instalar nuestra **Interfaz ZAP GS/TS3** directamente en tu VPS? Así podrás configurar servicios de servidor de juegos con integración directa a tu panel de ZAP-Hosting ¡en solo unos clics! Aprende más sobre la [Interfaz GS/TS3](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS vía SSH. Usa nuestra guía de [Acceso Inicial SSH](vserver-linux-ssh.md) si necesitas ayuda con esto.

También tendrás que completar una configuración inicial para SteamCMD si es la primera vez que lo usas en tu servidor Linux. Usa nuestra guía de [Configuración SteamCMD en Linux](vserver-linux-steamcmd.md) y asegúrate de que SteamCMD esté completamente configurado antes de continuar.

## Instalación

Comienza iniciando sesión como el usuario `steam` y ve al directorio raíz `home/steam` para mantener todo organizado.
```
sudo -u steam -s
cd ~
```

Una vez dentro, puedes iniciar la instalación con el siguiente comando para usar SteamCMD directamente como usuario `steam`.
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos de gran tamaño. Cuando termine, verás un mensaje de éxito que lo confirma.

## Configuración

En este punto, ya terminaste la instalación de tu servidor Avorion. Puedes configurar los ajustes del servidor directamente editando el archivo **startserver.sh** que copiaste antes. Ábrelo con `nano /home/steam/Avorion-Server/startserver.sh` y ajusta los parámetros de tu servidor.

También podrás editar parámetros y configuraciones específicas del mundo modificando el archivo **server.ini** que se encuentra en cada guardado de galaxia. Este archivo está en la carpeta raíz de tu usuario (que debería ser `steam`) y puedes gestionarlo con estos comandos:
```
# Ver guardados actuales
ls /home/steam/.avorion/galaxies

# Editar configuración de un guardado
nano /home/steam/.avorion/galaxies/avorion_galaxy/server.ini
```

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego, donde recomendamos crear una copia del archivo batch de ejemplo.
```
cp /home/steam/Avorion-Server/server.sh /home/steam/Avorion-Server/startserver.sh
```

Puedes editar este archivo si quieres. Cuando estés listo, ejecuta el nuevo archivo batch **startserver.sh** con este comando:
```
/home/steam/Avorion-Server/startserver.sh
```

Deberías ver aparecer logs en tu terminal que indican que el servidor está arrancando correctamente. Ten en cuenta que el primer inicio puede tardar un poco mientras se configura todo. Cuando esté listo, verás en la consola el mensaje `Server startup complete.`. Ahora podrás conectarte directamente a tu servidor usando el navegador de servidores dentro del juego, introduciendo la dirección IP y el puerto de tu servidor (por defecto es 27000).

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor Avorion en tu VPS! Como siguiente paso, te recomendamos revisar nuestra guía de [Configurar Servicio Linux](vserver-linux-create-gameservice.md), que explica cómo montar tu nuevo servidor dedicado de juegos como un servicio. Esto trae beneficios como arranque automático al iniciar el VPS, actualizaciones automáticas, gestión sencilla y acceso a logs, ¡y mucho más!

Si tienes cualquier duda o problema, contacta con nuestro equipo de soporte, ¡estamos disponibles para ayudarte todos los días!

<InlineVoucher />