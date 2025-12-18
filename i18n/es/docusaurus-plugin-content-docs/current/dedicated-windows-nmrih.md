---
id: dedicated-windows-nmrih
title: "Servidor Dedicado: Configuración del Servidor Dedicado No More Room In Hell en Windows"
description: "Aprende cómo configurar un servidor dedicado de No More Room In Hell en tu VPS o servidor dedicado rápida y fácilmente → Aprende más ahora"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS o servidor dedicado y quieres instalar servidores de juegos en él? ¿Por ejemplo, un servidor dedicado de No More Room In Hell? ¡Entonces estás en el lugar correcto! A continuación te explicamos paso a paso cómo puedes instalar este servicio en tu servidor.



## Preparación

Para la configuración de un servidor de No More Room In Hell se necesita SteamCMD. SteamCMD es la **versión de línea de comandos del cliente Steam**. Esta herramienta se puede usar para descargar rápida y fácilmente las aplicaciones de servidores dedicados de juegos populares de Steam. Puedes encontrar SteamCMD en la web oficial para desarrolladores de Valve: https://developer.valvesoftware.com/wiki/SteamCMD. 

Después de esto, se realiza la descarga. Esta contendrá el archivo **steamcmd.zip**, que primero debe ser descomprimido. Se recomienda crear una carpeta separada donde puedas descomprimir el archivo. Deberías ver el archivo **steamcmd.exe** como resultado. Ejecútalo y espera hasta que el proceso de instalación haya finalizado.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Tan pronto como aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor de No More Room In Hell.



## Instalación

Después de la instalación deberías poder ejecutar comandos en la **línea de comandos de Steam (steamcmd.exe)**. Ahí necesitas iniciar sesión. Esto se hace con el usuario **anonymous**. Ejecuta el siguiente comando: `login anonymous`

El siguiente paso será la instalación. Esto se hace con el comando `app_update 317670`. El ID de la aplicación **317670** corresponde a la aplicación del **Servidor Dedicado de No More Room In Hell**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos con archivos grandes. Una vez finalizado, verás un mensaje de éxito que lo confirma.

Para que el servidor sea visible y accesible desde fuera, los puertos del servidor que se usan deben estar habilitados/redireccionados en el firewall. Para ello, abre la configuración del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Debes añadir reglas adicionales en la configuración. Para ello, haz clic en las reglas entrantes y salientes como se indica a continuación y añádelas para los siguientes puertos: 27015-27020 para los protocolos TCP/UDP.



## Configuración

En este punto, ya has terminado la configuración de tu servidor de No More Room In Hell. Puedes realizar configuraciones adicionales editando directamente el archivo de lanzamiento. Ve a tu directorio raíz. Dentro de este directorio navega a la carpeta cfg y abre el archivo `server.cfg`. Ahí puedes editar las opciones del servidor.

```
../steamapps/common/nmrih-ds/nmrih/cfg/server.cfg
```

## Registro del Token GSL

Para que otros jugadores puedan unirse a tu servidor, debes generar e incluir un Game Server Login Token (GSLT). Este token autentica tu servidor con Steam. Para generar un GSLT, visita http://steamcommunity.com/dev/managegameservers y crea un token usando el ID del juego 317670, que corresponde a No More Room In Hell.

Una vez que tengas el token, inclúyelo en los parámetros de lanzamiento de tu servidor con `+sv_setsteamaccount <TOKEN>`. 



## Iniciar y Conectarse a tu servidor

Ahora es momento de iniciar tu servidor. Ve al directorio principal del juego y ejecuta el siguiente comando de lanzamiento:

```
start srcds.exe -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Deberías ver aparecer logs en tu consola que indican que el inicio fue exitoso. Ten en cuenta que el primer inicio puede tardar un poco mientras se configura todo. Alternativamente, podrás conectarte directamente usando la barra de búsqueda inferior en la lista de servidores y buscando: `[tu_dirección_ip]:2456`.


## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor de No More Room In Hell en tu VPS! Para cualquier pregunta o ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para asistirte! 🙂


