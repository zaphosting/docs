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

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="Cómo Configurar Foundry Dedicated Server en un VPS Windows" description="¿Te resulta más fácil entender cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible."/>

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez dentro de tu servidor, tendrás que configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente una variedad de archivos del taller de Steam y servidores dedicados. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una carpeta nueva en algún lugar de tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, encuentra el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows o cualquier aplicación como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación termine completamente.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Cuando aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor dedicado Foundry en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous** con el comando: `login anonymous`

Una vez logueado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido usando el comando `force_install_dir [ruta]`, reemplazando `[ruta]` por la ruta que quieras usar para tu servidor. Por ejemplo:
```
force_install_dir C:\Foundry-Server
```
:::

Ahora ejecuta el comando `app_update 2915550` que iniciará la descarga. El App ID **2915550** corresponde a la aplicación **Foundry**.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un momento, ¡pero vale la pena ser paciente! :)
:::

Una vez finalizado, ve al directorio de descarga donde se han guardado todos los archivos del servidor. Aquí puedes usar el **FoundryDedicatedServerLauncher.exe** para iniciar el servidor. Sin embargo, te recomendamos configurar el reenvío de puertos y ajustar tu servidor primero.

### Reenvío de puertos en tu servidor

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo directamente con comandos de PowerShell, que es más fácil, o desde la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía PowerShell" default>

Abre el buscador de Windows y busca **PowerShell**. Asegúrate de hacer clic derecho y **Ejecutar como Administrador** para que los permisos estén disponibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar PowerShell en modo Administrador, si no, las configuraciones podrían no aplicarse bien.
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

Usa la búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana necesaria si abres la página base del Firewall de Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Debes crear nuevas reglas para tu servidor Foundry. Para ello, haz clic en las reglas entrantes y salientes como se indica a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 3724, 27015
- UDP entrante y saliente: 3724, 27015

Si necesitas más ayuda, consulta nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Una vez añadidas estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él mediante la dirección IP de tu servidor. Para ello, ve a Multijugador desde el menú principal, selecciona Conexión Directa por IP e introduce la dirección IP y el puerto que usaste, que por defecto es 3724.

Te recomendamos configurar primero los ajustes de tu servidor en la siguiente sección antes de acceder.

## Configuración

A estas alturas, ya has terminado la configuración básica de tu servidor Foundry. Puedes hacer configuraciones adicionales mediante un archivo de configuración. Vuelve a la carpeta del juego y crea un archivo nuevo llamado **app.cfg** (si no existe ya) en el directorio raíz. Este debe estar en la misma carpeta que el ejecutable **FoundryDedicatedServerLauncher.exe**.

Ahora abre el archivo **app.cfg** con el bloc de notas o el editor que prefieras y comienza a añadir opciones de configuración para los parámetros que quieras ajustar. Simplemente crea una línea nueva por cada parámetro con un igual y el valor que quieras asignarle.

Por ejemplo, aquí tienes tres opciones configuradas:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Consulta nuestra [Guía de Configuración del Servidor](foundry-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio raíz y ejecuta **FoundryDedicatedServerLauncher.exe** para iniciar el proceso. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el arranque.

Ya podrás conectarte directamente a tu servidor vía IP yendo a **Multijugador -> Conexión Directa por IP** e introduciendo la dirección IP de tu servidor y el puerto 3724, que es el predeterminado y el que has configurado para el reenvío.

Si quieres que tu servidor aparezca en la lista pública, revisa nuestra [Guía de Configuración del Servidor](foundry-configuration.md) y añade los parámetros `server_name` y `server_is_public` en tu archivo de configuración. Guarda el archivo y ejecuta de nuevo el servidor.

¡Has instalado Foundry con éxito en tu servidor dedicado Windows!

<InlineVoucher />