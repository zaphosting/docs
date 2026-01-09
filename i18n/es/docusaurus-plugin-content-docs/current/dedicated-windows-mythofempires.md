---
id: dedicated-windows-mythofempires
title: "Servidor Dedicado: Configuración de Servidor Dedicado Myth of Empires en Windows"
description: "Descubre cómo configurar un servidor dedicado de Myth of Empires en tu VPS Windows rápida y eficientemente → Aprende más ahora"
sidebar_label: Configuración Servidor Dedicado MOE
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Windows y quieres instalar un servidor dedicado MOE en él? Estás en el lugar correcto. En esta guía te explicaremos paso a paso cómo instalar este servicio en tu servidor.

<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/T3jP36eWcQgTmNy/preview" title="¡Cómo Configurar un Servidor Myth Of Empires en un VPS Windows!" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo para ti. Ya sea que tengas prisa o simplemente prefieras absorber la información de la forma más entretenida posible."/>



## Preparación
Para comenzar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez que hayas accedido a tu servidor, necesitarás configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **de línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente una variedad de archivos del taller de Steam y servidores dedicados. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nueva carpeta en algún lugar de tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, encuentra el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows directamente, o cualquier aplicación como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación esté completamente terminado.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Tan pronto como aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor dedicado MOE en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous**, con el comando: `login anonymous`

Una vez conectado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido usando el comando `force_install_dir [ruta]`, reemplazando `[ruta]` con la ruta que quieras usar para tu servidor. Por ejemplo: 
```
force_install_dir C:\MOE-Server
```
:::
 
Ahora ejecuta el comando `app_update 1794810` que comenzará la descarga. El ID de la aplicación **1794810** es la aplicación **MOE**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un momento, ¡pero vale la pena ser paciente! :)
:::

Una vez completado, ve al directorio de descarga donde se han descargado todos los archivos del servidor.

### Accediendo a PrivateServerTool

A diferencia de las instalaciones típicas con SteamCMD, MOE requiere que copies una carpeta desde tu instalación local del juego Steam para poder ejecutar el servidor en Windows.

Abre Steam en tu sistema, haz clic derecho en tu juego **Myth of Empires** y selecciona **Explorar archivos locales** mientras pasas el cursor sobre la sección **Administrar**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

En la carpeta raíz que se abre, encuentra la carpeta **PrivateServerTool**. Esta es la carpeta que tendrás que copiar a tu servidor. Puedes hacerlo fácilmente usando `CTRL+C` para copiar en tu PC local, y `CTRL+V` para pegar en tu servidor Windows vía RDP. Asegúrate de pegarla en el directorio raíz de tu servidor dedicado.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Luego, ve a la siguiente sección para hacer el reenvío de puertos y configurar tu servidor.

### Reenvío de puertos para tu servidor

Para asegurarte de que tu servidor sea accesible al público, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo directamente mediante comandos de Powershell, que es más fácil, o de forma tradicional a través de la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía Powershell" default>

Abre el buscador de Windows y busca **Powershell**. Asegúrate de hacer clic derecho y **Ejecutar como Administrador** para que los permisos estén disponibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar Powershell en modo Administrador, de lo contrario las configuraciones podrían no aplicarse correctamente.
:::

Luego, copia y pega los siguientes comandos en tu consola de Powershell:
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor MOE sea accesible al público.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la función de búsqueda de Windows para abrir **Configuración de Firewall de Windows con Seguridad Avanzada**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor MOE. Para hacerlo, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 11888, 12888
- UDP entrante y saliente: 11888, 12888

Por favor, usa nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda para hacerlo.

</TabItem>
</Tabs>

Ve a la siguiente sección antes de acceder a tu servidor para crear tu archivo de configuración y el archivo `.bat` de inicio.

## Configuración

Ahora usarás la herramienta del servidor ubicada en la carpeta que copiaste antes desde los archivos de tu juego, para crear tu archivo de configuración y el archivo `.bat` de inicio que usarás para lanzar tu servidor.

Navega al siguiente directorio (la carpeta que copiaste antes):
```
../MOE/PrivateServerTool
```

En esta carpeta, ejecuta el archivo **PrivateServerTool.exe**. Usando esta herramienta, configura las opciones del servidor a tu gusto, incluyendo mods, ajustes del juego y mucho más.

Recomendamos configurar al menos los parámetros básicos como el **Nombre del Servidor** antes de continuar.

Cuando estés listo, simplemente ve a la pestaña **Start Console** en la herramienta, y presiona el botón **Save Config** seguido del botón **Start Server**. Esto generará el archivo `StartPrivateServer.bat` que usarás para iniciar tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

Recomendamos crear un acceso directo a tu archivo `StartPrivateServer.bat` haciendo clic derecho y usando **Crear acceso directo**, para facilitar el inicio.

:::note
Puede que tengas que editar la ruta a tu carpeta del juego dentro del archivo `StartPrivateServer.bat` generado automáticamente. Simplemente abre el archivo con una herramienta como el bloc de notas y asegúrate de que la ruta al inicio del archivo coincida con la ruta donde se encuentra el servidor.

Si la ruta es incorrecta, puedes hacer doble clic en la barra de ruta superior cuando estés dentro de la raíz de tu carpeta dedicada MOE para copiar la ruta actual y pegarla donde corresponda en el archivo.
:::

## Iniciar y conectar a tu servidor

Ahora es momento de iniciar tu servidor. Ve al directorio de tu servidor Myth of Empires y ejecuta **StartPrivateServer.bat** (o el acceso directo si creaste uno) para comenzar el proceso de inicio. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el proceso de arranque. Ahora podrás conectarte directamente a tu servidor yendo a la pestaña **Custom Server** y buscando tu servidor mediante el cuadro de búsqueda.

:::tip
Si tienes problemas para conectarte al servidor, abre tu archivo `StartPrivateServer.bat` con una herramienta como el bloc de notas y asegúrate de que los dos parámetros IP coincidan con la IP de tu servidor Windows. Esto debería ser rellenado automáticamente por la herramienta que usaste, pero es un buen paso para solucionar problemas.
:::

Has instalado con éxito Myth of Empires en tu servidor dedicado Windows.