---
id: vserver-windows-ark
title: "VPS: Configuración de Servidor Dedicado ARK Survival Evolved en Windows"
description: "Descubre cómo configurar un Servidor Dedicado de ARK: Survival Evolved en tu VPS Windows rápida y fácilmente → Aprende más ahora"
sidebar_label: Configuración Servidor Dedicado ARK Survival Evolved
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introducción
¿Tienes un VPS Windows y quieres instalar servidores de juegos en él? ¿Por ejemplo, un Servidor Dedicado de ARK: Survival Evolved? ¡Entonces estás en el lugar correcto! A continuación te explicamos paso a paso cómo puedes instalar este servicio en tu servidor.

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Tde2kaHrjgtMd3H/preview" title="Configuración Servidor Dedicado ARK: Survival Evolved en VPS Windows" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible."/>

Conéctate a tu VPS vía RDP para configurar tu Servidor Dedicado ARK: Survival Evolved. Si no sabes cómo conectarte a tu servidor vía RDP, te recomendamos echar un vistazo a la [guía de Acceso Inicial (RDP)](vserver-windows-userdp.md).

<InlineVoucher />

## Preparación

Para la configuración de un servidor ARK necesitas SteamCMD. SteamCMD es la **versión de línea de comandos del cliente Steam**. Esta herramienta se usa para descargar rápida y fácilmente las aplicaciones de servidores dedicados de juegos populares de Steam. Puedes encontrar SteamCMD en la web oficial para desarrolladores de Valve: https://developer.valvesoftware.com/wiki/SteamCMD. 

Después de esto, se realiza la descarga. Esta contendrá el archivo **steamcmd.zip**, que primero debes descomprimir. Se recomienda crear una carpeta aparte donde puedas extraer el archivo. Deberías ver el archivo **steamcmd.exe** como resultado. Ejecútalo y espera hasta que el proceso de instalación termine.

![](https://screensaver01.zap-hosting.com/index.php/s/67Prbs9CKEo4tfG/preview)

Cuando aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor ARK.



## Instalación

Después de la instalación deberías poder ejecutar comandos en la **línea de comandos de Steam (steamcmd.exe)**. Ahí necesitas iniciar sesión. Esto se hace con el usuario **anonymous**. Ejecuta el siguiente comando: `login anonymous`

El siguiente paso será la instalación. Esto se hace con el comando `app_update 376030`. El ID de la app **376030** corresponde a la aplicación del **Servidor Dedicado ARK: Survival Evolved**.

![](https://screensaver01.zap-hosting.com/index.php/s/37YL4YgiL4EogS6/preview)



:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un poco, ¡pero vale la pena tener paciencia! :)
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



Para que el servidor sea visible y accesible desde fuera, los puertos del servidor que se usan deben estar habilitados/redireccionados en el firewall. Para ello, abre la configuración del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/WxKJRKAPf9dXwFF/preview)


Debes añadir reglas adicionales en la configuración. Para ello, haz clic en las reglas entrantes y salientes como se indica abajo y añádelas para los siguientes protocolos y puertos:

- TCP entrante y saliente: 27020
- UDP entrante y saliente: 27015
- UDP entrante y saliente: 7777-7778



## Configuración

La configuración básica ya está lista. Puedes hacer más cambios en los archivos de configuración **DefaultGameUserSettings.ini** y **Gameusersettings.ini**. Ahí puedes cambiar el nombre del servidor, la contraseña para unirte, la contraseña de administrador y muchas otras opciones. Para ello, navega a los siguientes directorios:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Jugar

Al final de la configuración, ahora puedes iniciar el servidor ejecutando el archivo **start-ark.bat** que creaste antes. Esto debería abrir la consola del servidor y comenzar el proceso de arranque. Si todo va bien, el servidor debería aparecer en la lista de servidores tras un inicio exitoso.

![](https://screensaver01.zap-hosting.com/index.php/s/SkjP94KCa9YnJXn/preview)


## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor ARK Survival en tu VPS! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.

<InlineVoucher />