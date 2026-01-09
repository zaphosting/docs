---
id: dedicated-windows-foundry
title: "Servidor Dedicado: Configuración de Foundry en Servidor Dedicado Windows"
description: "Descubre cómo configurar un Servidor Dedicado Foundry en tu VPS o servidor dedicado Windows de forma rápida y eficiente → Aprende más ahora"
sidebar_label: Foundry
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS o servidor dedicado Windows y quieres instalar el servicio de Servidor Dedicado Foundry en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="Cómo Configurar Foundry Dedicated Server en un VPS Windows" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo para ti. Ya sea que tengas prisa o prefieras absorber la información de la forma más entretenida posible."/>



## Preparación

Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez que hayas accedido a tu servidor, necesitarás configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **de línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente una variedad de archivos del taller de Steam y servidores dedicados. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una carpeta nueva en algún lugar de tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, encuentra el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows directamente, o cualquier aplicación como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación se complete por completo.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Tan pronto como aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor dedicado Foundry en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous**, con el comando: `login anonymous`

Una vez logueado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido usando el comando `force_install_dir [ruta]`, reemplazando `[ruta]` con la ruta que quieras usar para tu servidor. Por ejemplo: 
```
force_install_dir C:\Foundry-Server
```
:::

Ahora ejecuta el comando `app_update 2915550` que iniciará la descarga. El ID de la aplicación **2915550** es la aplicación **Foundry**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un momento, ¡pero vale la pena ser paciente! :)
:::

Una vez completado, ve al directorio de descarga, donde se han descargado todos los archivos del servidor. Aquí, puedes usar el **FoundryDedicatedServerLauncher.exe** para iniciar el servidor. Sin embargo, recomendamos configurar el reenvío de puertos y la configuración del servidor primero.

### Reenvío de puertos en tu servidor

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo mediante comandos de PowerShell directamente, que es más fácil, o de forma tradicional a través de la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía PowerShell" default>

Abre el buscador de Windows y busca **PowerShell**. Asegúrate de hacer clic derecho y **Ejecutar como Administrador** para que los permisos estén disponibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar PowerShell en modo Administrador, de lo contrario las configuraciones podrían no aplicarse correctamente.
:::

Luego, copia y pega los siguientes comandos en tu consola de PowerShell:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor Foundry sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la función de búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor Foundry. Para ello, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 3724, 27015
- UDP entrante y saliente: 3724, 27015

Por favor, usa nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda para hacerlo.

</TabItem>
</Tabs>

Una vez que hayas añadido estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él mediante la dirección IP de tu servidor. Para ello, ve a Multijugador desde el menú principal, entra en Conexión Directa por IP e introduce tu dirección IP y el puerto usado, que por defecto es 3724 y como lo configuraste.

Recomendamos que configures primero los ajustes de tu servidor en la siguiente sección antes de acceder a él.

## Configuración

A estas alturas, ya has terminado la configuración inicial de tu servidor Foundry. Puedes realizar configuraciones adicionales mediante un archivo de configuración. Navega a la carpeta de tu juego y crea un nuevo archivo **app.cfg** (si no existe ya) en el directorio raíz. Este debe estar en la misma carpeta que el ejecutable de lanzamiento del servidor **FoundryDedicatedServerLauncher.exe**.

Ahora puedes abrir el archivo **app.cfg** con el bloc de notas o el editor que prefieras y empezar a añadir opciones de configuración para los parámetros que quieras ajustar. Simplemente crea una línea nueva por cada parámetro que quieras añadir con un igual, seguido del valor que quieras asignar.

Como ejemplo, aquí tienes tres opciones de configuración definidas:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Consulta nuestra [Guía de Configuración del Servidor](foundry-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y conectar a tu servidor

Ahora es momento de iniciar tu servidor. Ve al directorio raíz y ejecuta **FoundryDedicatedServerLauncher.exe** para comenzar el proceso de arranque. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el proceso de inicio.

Ahora podrás conectarte directamente a tu servidor vía IP yendo a **Multijugador->Conexión Directa por IP** e introduciendo la dirección IP de tu servidor y el puerto 3724, que es el predeterminado y el que has configurado para el reenvío.

Si quieres que tu servidor aparezca en la lista de servidores, revisa nuestra [Guía de Configuración del Servidor](foundry-configuration.md) y añade los parámetros `server_name` y `server_is_public` apropiados en tu archivo de configuración. Guarda el archivo y ejecuta de nuevo el ejecutable del servidor.

Has instalado Foundry con éxito en tu Servidor Dedicado Windows.