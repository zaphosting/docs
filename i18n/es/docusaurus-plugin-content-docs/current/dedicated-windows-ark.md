---
id: dedicated-windows-ark
title: "Servidor dedicado: Configuración de servidor dedicado ARK Survival Evolved en Windows"
description: "Descubre cómo configurar un servidor dedicado de ARK: Survival Evolved en un VPS Windows para un juego multijugador sin interrupciones → Aprende más ahora"
sidebar_label: Configuración servidor dedicado ARK Survival Evolved
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS Windows y quieres instalar servidores de juegos en él? ¿Por ejemplo, un servidor dedicado de ARK: Survival Evolved? ¡Entonces estás en el lugar correcto! A continuación te explicamos paso a paso cómo puedes instalar este servicio en tu servidor. Conéctate a tu VPS vía RDP para configurar tu servidor dedicado de ARK: Survival Evolved. Si no sabes cómo conectarte a tu servidor vía RDP, te recomendamos echar un vistazo a la [guía de Acceso Inicial (RDP)](vserver-windows-userdp.md).

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BF23kJKNsFQyeyX/preview" title="Configuración servidor dedicado ARK: Survival Evolved en VPS Windows" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Aquí te tenemos! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible." />

<InlineVoucher />

## Preparación

Para la configuración de un servidor ARK necesitas SteamCMD. SteamCMD es la **versión de línea de comandos del cliente Steam**. Esta herramienta se usa para descargar rápida y fácilmente las aplicaciones de servidores dedicados de juegos populares de Steam. Puedes encontrar SteamCMD en la web oficial para desarrolladores de Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

Después de esto, se realiza la descarga. Esta contendrá el archivo **steamcmd.zip**, que primero debes descomprimir. Se recomienda crear una carpeta aparte donde puedas extraer el archivo. Deberías ver el archivo **steamcmd.exe** como resultado. Ejecútalo y espera hasta que el proceso de instalación termine.

![](https://screensaver01.zap-hosting.com/index.php/s/QnqpbKQiEAFLL2T/preview)

Cuando aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor ARK.



## Instalación

Después de la instalación, deberías poder ejecutar comandos en la **línea de comandos de Steam (steamcmd.exe)**. Ahí necesitas iniciar sesión. Esto se hace con el usuario **anonymous**. Ejecuta el siguiente comando: `login anonymous`

El siguiente paso será la instalación. Esto se hace con el comando `app_update 376030`. El ID de la app **376030** corresponde a la aplicación del **servidor dedicado ARK: Survival Evolved**.

![](https://screensaver01.zap-hosting.com/index.php/s/RJzpFL4ZPSsAZZd/preview)



:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un poco, ¡pero vale la pena ser paciente! :)
:::



Navega al directorio donde realizaste la instalación y entra en el siguiente subdirectorio: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

Ahí tienes que crear el archivo de inicio, que es necesario para ejecutar el software del servidor. Crea un archivo con el siguiente nombre: start-ark.bat

:::info
Asegúrate de tener activada la opción Mostrar extensiones de archivo para que se use la extensión correcta.
:::

Abre el archivo, añade el siguiente contenido y guarda los cambios:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



Para que el servidor sea visible y accesible desde fuera, los puertos que usa el servidor deben estar habilitados/redireccionados en el firewall. Para ello, abre la configuración del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/p7iyYxZwfeGaZaW/preview)


Debes añadir reglas adicionales en la configuración. Para ello, haz clic en las reglas entrantes y salientes como se indica a continuación y añádelas para los siguientes protocolos y puertos:

- TCP entrante y saliente: 27020
- UDP entrante y saliente: 27015
- UDP entrante y saliente: 7777-7778



## Configuración

La configuración básica ya está lista. Puedes hacer más cambios en los archivos de configuración **DefaultGameUserSettings.ini** y **Gameusersettings.ini**. Ahí puedes cambiar el nombre del servidor, la contraseña para unirte, la contraseña de administrador y muchas otras opciones. Para ello, navega a estos directorios:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Jugar

Al final de la configuración, ya puedes iniciar el servidor ejecutando el archivo **start-ark.bat** que creaste antes. Esto debería abrir la consola del servidor y comenzar el proceso de arranque. Si todo va bien, el servidor debería aparecer en la lista de servidores tras un inicio exitoso.

![](https://screensaver01.zap-hosting.com/index.php/s/cENfRQGxK4NjM3Y/preview)

<InlineVoucher />