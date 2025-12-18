---
id: dedicated-windows-tf2
title: "Servidor Dedicado: Configuración de Servidor Dedicado Team Fortress 2 en Windows"
description: "Descubre cómo configurar un servidor dedicado de Team Fortress 2 en tu VPS o servidor dedicado rápida y fácilmente → Aprende más ahora"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS o servidor dedicado y quieres instalar servidores de juegos en él? ¿Por ejemplo, un servidor dedicado de Team Fortress 2? ¡Entonces estás en el lugar correcto! A continuación te explicamos paso a paso cómo puedes instalar este servicio en tu servidor.



## Preparación

Para la configuración de un servidor de Team Fortress 2 se necesita SteamCMD. SteamCMD es la **versión de línea de comandos del cliente Steam**. Esta herramienta se usa para descargar rápida y fácilmente las aplicaciones de servidores dedicados de juegos populares de Steam. Puedes encontrar SteamCMD en la web oficial para desarrolladores de Valve: https://developer.valvesoftware.com/wiki/SteamCMD. 

Después de esto, se realiza la descarga. Esta contendrá el archivo **steamcmd.zip**, que primero debe ser descomprimido. Se recomienda crear una carpeta aparte donde puedas descomprimir el archivo. Deberías ver el archivo **steamcmd.exe** como resultado. Ejecútalo y espera hasta que el proceso de instalación haya finalizado.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Tan pronto como aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor de Team Fortress 2.



## Instalación

Después de la instalación, deberías poder ejecutar comandos en la **línea de comandos de Steam (steamcmd.exe)**. Allí necesitas iniciar sesión. Esto se hace con el usuario **anonymous**. Ejecuta el siguiente comando: `login anonymous`

El siguiente paso será la instalación. Esto se hace con el comando `app_update 232250`. El ID de la aplicación **232250** corresponde a la aplicación del **Servidor Dedicado de Team Fortress 2**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos de mayor tamaño. Una vez finalizado con éxito, verás un mensaje de confirmación.

Para que el servidor sea visible y accesible desde fuera, los puertos del servidor que se usan deben estar habilitados/redireccionados en el firewall. Para ello, abre la configuración del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Debes añadir reglas adicionales en la configuración. Para ello, haz clic en las reglas entrantes y salientes como se indica a continuación y añádelas para los siguientes puertos: 27015-27020 para los protocolos TCP/UDP.



## Configuración

En esta etapa, ya has terminado la configuración de tu servidor de Team Fortress 2. Puedes realizar configuraciones adicionales editando directamente el archivo de lanzamiento. Ve a tu directorio raíz. Dentro de este directorio navega a la carpeta cfg y abre el archivo `server.cfg`. Ahí puedes editar las opciones del servidor.

```
../steamapps/common/tf2-ds/tf2/tf/cfg/server.cfg
```

## Registro del Token GSL

Para que otros jugadores puedan unirse a tu servidor, debes generar e incluir un Game Server Login Token (GSLT). Este token autentica tu servidor con Steam. Para generar un GSLT, visita http://steamcommunity.com/dev/managegameservers y crea un token usando el ID del juego 232250, que corresponde a Team Fortress 2.

Una vez que tengas el token, inclúyelo en los parámetros de lanzamiento de tu servidor con `+sv_setsteamaccount <TOKEN>`.



## Iniciar y conectar a tu servidor

Ahora es momento de iniciar tu servidor. Ve al directorio principal del juego y ejecuta el siguiente comando de lanzamiento:

```
start srcds.exe -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Deberías ver aparecer logs en tu consola que indican que el inicio fue exitoso. Ten en cuenta que el primer inicio puede tardar un poco mientras se configura todo. Alternativamente, podrás conectarte directamente usando la barra de búsqueda inferior en la lista de servidores y buscando: `[tu_dirección_ip]:2456`.


## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor de Team Fortress 2 en tu VPS! Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂