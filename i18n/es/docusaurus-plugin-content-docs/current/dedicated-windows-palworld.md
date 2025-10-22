---
id: dedicated-windows-palworld
title: "Servidor Dedicado: Configuración del Servidor Dedicado Palworld en Windows"
description: "Descubre cómo configurar un Servidor Dedicado Palworld en tu VPS o servidor dedicado Windows de forma rápida y eficiente → Aprende más ahora"
sidebar_label: Palworld
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS o servidor dedicado Windows y quieres instalar el servicio de Servidor Dedicado Palworld en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pt4oNY8tPJdKf44/preview" title="Cómo Configurar el Servidor Dedicado Palworld en un VPS Windows" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Lo tenemos cubierto! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o prefieras absorber la información de la forma más entretenida posible."/>

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra guía de [Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez que hayas accedido a tu servidor, necesitarás configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **de línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente una variedad de archivos del taller de Steam y servidores dedicados. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nueva carpeta en algún lugar de tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, encuentra el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows directamente, o con cualquier aplicación como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación se complete por completo.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Tan pronto como aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor dedicado Palworld en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous**, con el comando: `login anonymous`

Una vez conectado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido usando el comando `force_install_dir [ruta]`, reemplazando `[ruta]` con la ruta que quieras usar para tu servidor. Por ejemplo:
```
force_install_dir C:\Palworld-Server
```
:::

Ahora ejecuta el comando `app_update 2394010` que comenzará la descarga. El ID de la aplicación **2394010** corresponde a **Palworld**.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un momento, ¡pero vale la pena ser paciente! :)
:::

Una vez finalizado con éxito, ve al directorio de descarga donde se han descargado todos los archivos del servidor. Aquí, puedes usar **PalServer.exe** para iniciar el servidor. Sin embargo, recomendamos configurar el reenvío de puertos y la configuración del servidor primero.

### Reenvío de puertos para tu servidor

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo directamente mediante comandos de Powershell, que es más fácil, o a través de la página del Firewall de Windows Defender.

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
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor Palworld sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la función de búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que pulsar en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Debes crear nuevas reglas para tu servidor Palworld. Para ello, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 8211
- UDP entrante y saliente: 8211

Por favor, usa nuestra guía de [Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda para hacerlo.

</TabItem>
</Tabs>

Una vez que hayas añadido estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él mediante la dirección IP de tu servidor. Puedes hacerlo yendo al navegador de lista de servidores e introduciendo tu dirección IP y puerto en la búsqueda en la parte inferior. Debes buscar: `[tu_dirección_ip]:8211`

Recomendamos que configures primero los ajustes de tu servidor en la siguiente sección antes de acceder a él.

## Configuración

A estas alturas, ya has terminado la configuración de tu servidor Palworld. Puedes realizar configuraciones adicionales del servidor a través de un archivo de configuración que se encuentra dentro del directorio de tu servidor.

Primero, navega al siguiente directorio:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Ahí encontrarás el archivo de configuración **PalWorldSettings.ini**. A través de este archivo, puedes configurar una amplia selección de parámetros para tu servidor. Consulta nuestra [Configuración del Servidor](palworld-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

:::note
Si no ves este archivo, por favor inicia tu servidor al menos **una vez** para que se genere automáticamente. Alternativamente, puedes copiar y usar la configuración por defecto desde la ruta `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### Activar modo Xbox

Los servidores dedicados Palworld ahora incluyen la opción de cambiar y funcionar como un servidor dedicado de Microsoft Store/Xbox para permitir que jugadores de Xbox y PC de Microsoft Store jueguen juntos en su propio servidor.

:::note
El juego cruzado entre las versiones de Steam y Microsoft Store/Xbox aún no es posible. Tu servidor puede configurarse para funcionar con Steam o con Microsoft Store/Xbox, no ambos.
:::

Navega al siguiente directorio y abre el archivo **PalWorldSettings.ini**:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

Añade el siguiente fragmento para activar el modo Xbox:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

Guarda el archivo y la próxima vez que inicies el servidor estará en modo Xbox.

:::info
En consolas Xbox no puedes conectarte directamente mediante la dirección IP, por lo que si planeas jugar en Xbox, tendrás que hacer tu servidor dedicado público.

Puedes hacerlo creando un nuevo archivo `StartServer.bat` en el directorio raíz y llenándolo con: `PalServer.exe -publiclobby`. El flag especial de inicio `-publiclobby` activa el modo Servidor Comunitario, haciéndolo accesible en la lista de servidores.

También deberías configurar un nombre de servidor que sea fácil de encontrar, consulta nuestra guía de [Configuración del Servidor](palworld-configuration.md) para saber cómo hacerlo.
:::

## Iniciar y conectarte a tu servidor

Ahora es momento de iniciar tu servidor. Puede que necesites instalar el [runtime de DirectX](https://www.microsoft.com/en-gb/download/details.aspx?id=35) si no lo tienes ya en tu servidor dedicado Windows.

Ve al directorio base de tu servidor Palworld y ejecuta **PalServer.exe** para comenzar el proceso de inicio. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el proceso de arranque. Si todo va bien, tu servidor será visible en la lista de servidores. Alternativamente, podrás conectarte directamente usando la barra de búsqueda inferior en la lista de servidores buscando: `[tu_dirección_ip]:8211`.

Has instalado Palworld con éxito en tu servidor dedicado Windows.

<InlineVoucher />