---
id: vserver-windows-foundry
title: "VPS: Configuración de Foundry Dedicated Server en Windows"
description: "Descubre cómo configurar un Foundry Dedicated Server en tu VPS Windows para un hosting de juego sin interrupciones → Aprende más ahora"
sidebar_label: Foundry
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS Windows y quieres instalar el servicio Foundry Dedicated Server en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Xm3o2P3oc7QzLtp/preview" title="Cómo configurar Foundry Dedicated Server en un VPS Windows" description="¿Te resulta más fácil entender cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo para ti. Ya sea que tengas prisa o simplemente prefieras absorber la info de la forma más entretenida posible."/>
<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez dentro de tu servidor, necesitarás configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **de línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente una variedad de archivos del taller de Steam y servidores dedicados. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una carpeta nueva en algún lugar de tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, encuentra el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows, o con cualquier aplicación como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación termine completamente.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Cuando aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor dedicado Foundry en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous** con el comando: `login anonymous`

Una vez logueado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido usando el comando `force_install_dir [ruta]`, reemplazando `[ruta]` con la ruta que quieras usar para tu servidor. Por ejemplo:
```
force_install_dir C:\Foundry-Server
```
:::

Ahora ejecuta el comando `app_update 2915550` que iniciará la descarga. El App ID **2915550** corresponde a la aplicación **Foundry**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un momento, ¡pero vale la pena ser paciente! :)
:::

Cuando termine con éxito, ve al directorio de descarga donde se han guardado todos los archivos del servidor. Aquí puedes usar el **FoundryDedicatedServerLauncher.exe** para iniciar el servidor. Sin embargo, te recomendamos hacer el reenvío de puertos y configurar tu servidor primero.

### Reenvío de puertos para tu servidor

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo mediante comandos de PowerShell, que es más fácil, o desde la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía PowerShell" default>

Abre el buscador de Windows y busca **PowerShell**. Asegúrate de hacer clic derecho y **Ejecutar como Administrador** para que los permisos estén disponibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar PowerShell en modo Administrador, si no, los ajustes podrían no aplicarse bien.
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

Usa la búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor Foundry. Para ello, haz clic en las reglas entrantes y salientes como se indica a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 3724, 27015
- UDP entrante y saliente: 3724, 27015

Si necesitas más ayuda, usa nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Una vez añadidas estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él usando la dirección IP de tu servidor. Para hacerlo, ve a Multijugador desde el menú principal, entra en Conexión Directa por IP e introduce tu dirección IP y el puerto usado, que por defecto es 3724 y el que configuraste.

Te recomendamos configurar primero los ajustes de tu servidor en la siguiente sección antes de acceder a él.

## Configuración

A estas alturas, ya terminaste la configuración inicial de tu servidor Foundry. Puedes hacer configuraciones adicionales mediante un archivo de configuración. Vuelve a la carpeta del juego y crea un nuevo archivo **app.cfg** (si no existe ya) en el directorio raíz. Este debe estar en la misma carpeta que el ejecutable **FoundryDedicatedServerLauncher.exe**.

Ahora abre el archivo **app.cfg** con el bloc de notas o el editor que prefieras y comienza a añadir opciones de configuración para los parámetros que quieras ajustar. Simplemente crea una línea nueva por cada parámetro que quieras añadir con un signo igual seguido del valor que quieras asignar.

Por ejemplo, aquí tienes tres opciones de configuración definidas:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Consulta nuestra [Guía de Configuración del Servidor](foundry-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio raíz y ejecuta **FoundryDedicatedServerLauncher.exe** para iniciar el proceso. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el arranque.

Ya podrás conectarte directamente a tu servidor vía IP yendo a **Multijugador -> Conexión Directa por IP** e introduciendo la dirección IP de tu servidor y el puerto 3724, que es el predeterminado y el que has reenviado.

Si quieres que tu servidor aparezca en la lista pública, revisa nuestra [Guía de Configuración del Servidor](foundry-configuration.md) y añade los parámetros `server_name` y `server_is_public` adecuados en tu archivo de configuración. Guarda el archivo y ejecuta de nuevo el servidor.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor Foundry en tu VPS! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.

<InlineVoucher />