---
id: dedicated-windows-valheim
title: "Servidor Dedicado: Configuración de Valheim Dedicated Server en Windows"
description: "Descubre cómo configurar un servidor dedicado de Valheim en tu propio servidor para un juego multijugador sin interrupciones → Aprende más ahora"
sidebar_label: Valheim
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un servidor dedicado y quieres instalar servidores de juegos en él? ¿Por ejemplo, un Valheim Dedicated Server? ¡Entonces estás en el lugar correcto! A continuación te explicamos paso a paso cómo puedes instalar este servicio en tu servidor.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/D2doaAqjzdMSo9r/preview" title="Configuración de Valheim Dedicated Server en Windows VPS" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o simplemente prefieras absorber la info de la forma más entretenida posible."/>

<InlineVoucher />

## Preparación
Para la configuración de un servidor de Valheim necesitas SteamCMD. SteamCMD es la **versión de línea de comandos del cliente Steam**. Esta herramienta se usa para descargar rápida y fácilmente las aplicaciones de servidores dedicados de juegos populares de Steam. Puedes encontrar SteamCMD en la web oficial para desarrolladores de Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

Luego se realiza la descarga. Esta contendrá el archivo **steamcmd.zip**, que primero debes descomprimir. Se recomienda crear una carpeta aparte para descomprimir el archivo. Deberías ver el archivo **steamcmd.exe** como resultado. Ejecútalo y espera hasta que el proceso de instalación termine.
![](https://screensaver01.zap-hosting.com/index.php/s/Y5zygHw2DFJa4dZ/preview)

Cuando aparezca el mensaje **Loading Steam API.... OK**, el proceso se completó con éxito y puedes comenzar con la instalación del servidor de Valheim.



## Instalación

Después de la instalación deberías poder ejecutar comandos en la **línea de comandos de Steam (steamcmd.exe)**. Ahí necesitas iniciar sesión. Esto se hace con el usuario **anonymous**. Ejecuta el siguiente comando: `login anonymous`

El siguiente paso es la instalación. Esto se hace con el comando `app_update 896660`. El App ID **896660** corresponde a la aplicación **Valheim Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/PxZFZat7cP2C26k/preview)

:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un poco, ¡pero vale la pena ser paciente! :)
:::


Navega al directorio donde realizaste la instalación y entra en el siguiente subdirectorio:  **../steamapps/common/Valheim dedicated Server/**

Ahí tienes que crear el archivo de inicio, que es necesario para ejecutar el software del servidor. Crea un archivo con el siguiente nombre: start_headless.bat

:::info
Asegúrate de tener activada la opción Mostrar extensiones de archivo para que se use la extensión correcta.
:::

Abre el archivo, añade el siguiente contenido y guarda los cambios:

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tip: Make a local copy of this script to avoid it being overwritten by steam.
REM NOTE: Minimum password length is 5 characters & Password cant be in the server name.
REM NOTE: You need to make sure che ports 2456-2458 is being forwarded to your server through your local router & firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

Para que el servidor sea visible y accesible desde fuera, los puertos del servidor que se usan deben estar habilitados/redirigidos en el firewall. Para esto, abre la configuración del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/MTHjL85zKsLtN9g/preview)

Debes añadir reglas adicionales en la configuración. Para ello, haz clic en las reglas entrantes y salientes como se indica abajo y añádelas para los siguientes puertos: 2456-2458 para los protocolos TCP/UDP.




## Configuración

La configuración básica ya está lista. Puedes hacer más cambios en el archivo **start_headless_server.bat**. Ahí puedes cambiar el nombre del servidor, la contraseña del servidor, la contraseña de administrador y muchas otras opciones. Para eso, navega a la siguiente ruta:

```
../steamapps/common/Valheim dedicated Server/
```



## Jugar

Al final de la configuración, ahora puedes iniciar el servidor ejecutando el archivo **start_headless_server.bat** que creaste antes. Esto debería abrir la consola del servidor y comenzar el proceso de arranque. Si todo va bien, el servidor debería aparecer en la lista de servidores tras un inicio exitoso.

<InlineVoucher />