---
id: vserver-windows-dods
title: "VPS: Configuración de servidor dedicado de Day of Defeat: Source en Windows"
description: "Aprende a configurar un servidor dedicado de Day of Defeat: Source en tu VPS o servidor dedicado de forma rápida y eficiente → Descubre más ahora"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS o servidor dedicado y quieres instalar servidores de juegos en él? ¿Por ejemplo, un servidor dedicado de Day of Defeat: Source? ¡Entonces estás en el lugar correcto! A continuación te explicamos paso a paso cómo puedes instalar este servicio en tu servidor.

<InlineVoucher />

## Preparación

Para la configuración de un servidor de Day of Defeat: Source necesitas SteamCMD. SteamCMD es la **versión de línea de comandos del cliente Steam**. Esta herramienta permite descargar rápida y fácilmente las aplicaciones de servidores dedicados de juegos populares de Steam. Puedes encontrar SteamCMD en la web oficial para desarrolladores de Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

Después de esto, se realiza la descarga. Esta contendrá el archivo **steamcmd.zip**, que primero debes descomprimir. Se recomienda crear una carpeta aparte para descomprimir el archivo. Como resultado deberías ver el archivo **steamcmd.exe**. Ejecútalo y espera hasta que el proceso de instalación termine.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Cuando aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor de Day of Defeat: Source.



## Instalación

Después de la instalación deberías poder ejecutar comandos en la **línea de comandos de Steam (steamcmd.exe)**. Ahí necesitas iniciar sesión. Esto se hace con el usuario **anonymous**. Ejecuta el siguiente comando: `login anonymous`

El siguiente paso es la instalación. Esto se hace con el comando `app_update 232290`. El ID de la aplicación **232290** corresponde a la aplicación del **servidor dedicado de Day of Defeat: Source**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito que lo confirma.

Para que el servidor sea visible y accesible desde fuera, los puertos que usa el servidor deben estar habilitados/redireccionados en el firewall. Para ello, abre la configuración del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Debes añadir reglas adicionales en la configuración. Haz clic en las reglas de entrada y salida como se indica abajo y añádelas para los siguientes puertos: 27015-27020 para los protocolos TCP/UDP.



## Configuración

En este punto, ya has terminado la configuración básica de tu servidor de Day of Defeat: Source. Puedes hacer configuraciones adicionales editando directamente el archivo de lanzamiento. Ve a tu directorio raíz. Dentro de este directorio navega a la carpeta cfg y abre el archivo `server.cfg`. Ahí puedes modificar las opciones del servidor.

```
../steamapps/common/dod-ds/dod/cfg/server.cfg
```

## Registro del Token GSL

Para que otros jugadores puedan unirse a tu servidor, debes generar e incluir un Game Server Login Token (GSLT). Este token autentica tu servidor con Steam. Para generar un GSLT, visita http://steamcommunity.com/dev/managegameservers y crea un token usando el ID del juego 232290, que corresponde a Day of Defeat: Source.

Una vez tengas el token, inclúyelo en los parámetros de lanzamiento del servidor con `+sv_setsteamaccount <TOKEN>`.



## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el siguiente comando de lanzamiento:

```
start srcds.exe -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Deberías ver aparecer logs en tu consola que indican que el inicio fue exitoso. Ten en cuenta que el primer arranque puede tardar un poco mientras se configura todo. Alternativamente, podrás conectarte directamente usando la barra de búsqueda inferior en la lista de servidores y buscando: `[tu_dirección_ip]:2456`.


## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor de Day of Defeat: Source en tu VPS! Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, disponible todos los días para echarte una mano 🙂.

<InlineVoucher />