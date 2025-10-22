---
id: vserver-windows-cs16
title: "VPS: Configuración de Servidor Dedicado Counter-Strike 1.6 en Windows"
description: "Aprende cómo configurar un servidor dedicado de Counter-Strike 1.6 en tu VPS o servidor dedicado rápida y fácilmente → Descubre más ahora"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS o servidor dedicado y quieres instalar servidores de juegos en él? ¿Por ejemplo un servidor dedicado de Counter-Strike 1.6? ¡Entonces estás en el lugar correcto! A continuación te explicamos paso a paso cómo puedes instalar este servicio en tu servidor.

<InlineVoucher />

## Preparación

Para la configuración de un servidor de Counter-Strike 1.6 necesitas SteamCMD. SteamCMD es la **versión de línea de comandos del cliente Steam**. Esta herramienta se usa para descargar rápida y fácilmente las aplicaciones de servidores dedicados de juegos populares de Steam. Puedes encontrar SteamCMD en la web oficial para desarrolladores de Valve: https://developer.valvesoftware.com/wiki/SteamCMD. 

Después de esto, se realiza la descarga. Esta contendrá el archivo **steamcmd.zip**, que primero debes descomprimir. Se recomienda crear una carpeta aparte donde puedas extraer el archivo. Deberías ver el archivo **steamcmd.exe** como resultado. Ejecútalo y espera hasta que el proceso de instalación termine.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Cuando aparezca el mensaje **Loading Steam API.... OK**, el proceso se completó con éxito y puedes comenzar con la instalación del servidor de Counter-Strike 1.6.



## Instalación

Después de la instalación, deberías poder ejecutar comandos en la **línea de comandos de Steam (steamcmd.exe)**. Ahí necesitas iniciar sesión. Esto se hace con el usuario **anonymous**. Ejecuta el siguiente comando: `login anonymous`

El siguiente paso es la instalación. Esto se hace con el comando `app_update 90`. El ID de la aplicación **90** corresponde a la aplicación del **Servidor Dedicado de Counter-Strike 1.6**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Ten paciencia mientras se completa la descarga, puede tardar un poco en juegos con archivos grandes. Cuando termine, verás un mensaje de éxito confirmándolo.

Para que el servidor sea visible y accesible desde fuera, los puertos que usa el servidor deben estar habilitados/redireccionados en el firewall. Para esto, abre la configuración del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Debes añadir reglas adicionales en la configuración. Haz clic en las reglas de entrada y salida como se indica abajo y añádelas para los siguientes puertos: 27015-27020 para los protocolos TCP/UDP.



## Configuración

En este punto, ya terminaste la configuración básica de tu servidor de Counter-Strike 1.6. Puedes hacer configuraciones adicionales editando directamente el archivo de lanzamiento. Ve a tu directorio raíz. Dentro de este directorio navega a la carpeta cfg y abre el archivo `server.cfg`. Ahí puedes modificar las opciones del servidor.

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```

## Registro del Token GSL

Para que otros jugadores puedan unirse a tu servidor, debes generar e incluir un Game Server Login Token (GSLT). Este token autentica tu servidor con Steam. Para generar un GSLT, visita http://steamcommunity.com/dev/managegameservers y crea un token usando el ID de juego 90, que corresponde a Counter-Strike 1.6.

Una vez tengas el token, inclúyelo en los parámetros de lanzamiento del servidor con `+sv_setsteamaccount <TOKEN>`. 



## Iniciar y Conectarse a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio principal del juego y ejecuta el siguiente comando de lanzamiento:

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

Deberías ver aparecer logs en tu consola que indican que el inicio fue exitoso. Ten en cuenta que el primer arranque puede tardar un poco mientras se configura todo. Alternativamente, podrás conectarte directamente usando la barra de búsqueda inferior en la lista de servidores y buscando: `[tu_dirección_ip]:2456`.


## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor de Counter-Strike 1.6 en tu VPS! Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para ayudarte 🙂.

<InlineVoucher />