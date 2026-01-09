---
id: dedicated-windows-soulmask
title: "Servidor Dedicado: Configuración del Servidor Dedicado Soulmask en Windows"
description: "Descubre cómo instalar el servidor dedicado de Soulmask en tu VPS Windows o servidor dedicado de forma rápida y eficiente → Aprende más ahora"
sidebar_label: Soulmask
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS Windows o un servidor dedicado y quieres instalar el servicio de servidor dedicado Soulmask en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor.

## Preparación

Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez que hayas accedido a tu servidor, necesitarás configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **de línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente una variedad de archivos del taller de Steam y servidores dedicados. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nueva carpeta en algún lugar de tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, encuentra el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows directamente, o con cualquier aplicación como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación se complete por completo.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

En cuanto aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor dedicado Soulmask en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous**, con el comando: `login anonymous`

Una vez conectado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido usando el comando `force_install_dir [ruta]`, reemplazando `[ruta]` con la ruta que quieras usar para tu servidor. Por ejemplo: 
```
force_install_dir C:\Soulmask-Server
```
:::

Ahora ejecuta el comando `app_update 3017310` que comenzará la descarga. El ID de la aplicación **3017310** es la aplicación **Soulmask**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un momento, ¡pero vale la pena ser paciente! :)
:::

Una vez finalizado, ve al directorio de descarga, donde se han descargado todos los archivos del servidor. Aquí, puedes usar el archivo **StartServer.bat** para iniciar el servidor. Sin embargo, recomendamos configurar el reenvío de puertos y la configuración del servidor primero.

### Reenvío de puertos para tu servidor

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo directamente mediante comandos de PowerShell, que es más fácil, o de forma tradicional a través de la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía PowerShell" default>

Abre el buscador de Windows y busca **PowerShell**. Asegúrate de hacer clic derecho y **Ejecutar como Administrador** para que los permisos estén disponibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar PowerShell en modo Administrador, de lo contrario los ajustes podrían no aplicarse correctamente.
:::

Luego, copia y pega los siguientes comandos en tu consola de PowerShell:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor Soulmask sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la función de búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que pulsar en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor Soulmask. Para ello, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 8777, 27015
- UDP entrante y saliente: 8777, 27015

Usa nuestra guía de [Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda para hacerlo.

</TabItem>
</Tabs>

Una vez que hayas añadido estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él mediante la dirección IP de tu servidor. Para ello, ve al menú Multijugador, selecciona Conexión Directa por IP e introduce la dirección IP y el puerto que usas, que por defecto es 3724 y como lo hayas configurado.

Recomendamos que configures primero los ajustes de tu servidor en la siguiente sección antes de acceder a él.

## Configuración

A estas alturas, ya has terminado la configuración inicial de tu servidor Soulmask. Puedes realizar configuraciones adicionales ajustando los parámetros dentro del archivo **StartServer.bat** que se encuentra en el directorio raíz y a través del archivo **GameUserSettings.ini** ubicado en la ruta `../WS/Saved/Config/WindowsServer`.

Consulta nuestra guía de [Configuración del Servidor](soulmask-configuration.md) para ver todos los parámetros y opciones de configuración disponibles para tu servidor Soulmask.

## Iniciar y conectar a tu servidor

Ahora es momento de iniciar tu servidor. Ve al directorio raíz y ejecuta **StartServer.bat** para comenzar el proceso de arranque. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el proceso de inicio.

:::tip
Si tu servidor no arranca y la ventana de comandos simplemente desaparece, entra en el directorio `../WS/Saved/Logs` y revisa el último log para diagnosticar el problema.

Hay un problema común relacionado con el servicio online de Steam que falla al arrancar en los binarios del servidor dedicado para Windows debido a un empaquetado incorrecto. Si el error está relacionado con Steam, ve a tu directorio raíz y mueve los siguientes archivos a la carpeta `../WS/Binaries/Win64`: `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll`. Luego intenta iniciar el servidor de nuevo y debería arrancar correctamente en la ventana de comandos.
:::

Ahora podrás conectarte directamente a tu servidor vía IP introduciendo la dirección IP de tu servidor y el puerto 8777 en el menú multijugador dentro del juego.

Si quieres que tu servidor aparezca en la lista de servidores, revisa nuestra guía de [Configuración del Servidor](soulmask-configuration.md) y añade el parámetro `-SteamServerName` adecuado en tu archivo **StartServer.bat**. Guarda el archivo y ejecuta el batch de nuevo.

Has instalado Soulmask con éxito en tu servidor dedicado Windows.