---
id: vserver-windows-palworld
title: "VPS: Configuración de Servidor Dedicado Palworld en Windows"
description: "Descubre cómo configurar un Servidor Dedicado Palworld en tu VPS Windows para un hosting de juego sin interrupciones → Aprende más ahora"
sidebar_label: Palworld
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS Windows y quieres instalar el servicio de Servidor Dedicado Palworld en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/3gSdKyDDL65BAxM/preview" title="Cómo Configurar un Servidor Dedicado Palworld en un VPS Windows" description="¿Te resulta más fácil entender cuando ves las cosas en acción? ¡Aquí te tenemos! Sumérgete en nuestro video que lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible."/>
<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez que hayas accedido a tu servidor, necesitarás configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente una variedad de archivos de workshop y servidores dedicados de Steam. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una carpeta nueva en algún lugar de tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, encuentra el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows, o con cualquier aplicación como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación termine completamente.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

En cuanto aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor dedicado Palworld en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous**, con el comando: `login anonymous`

Una vez logueado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido usando el comando `force_install_dir [ruta]`, reemplazando `[ruta]` con la ruta que quieras usar para tu servidor. Por ejemplo:
```
force_install_dir C:\Palworld-Server
```
:::

Ahora ejecuta el comando `app_update 2394010` que comenzará la descarga. El App ID **2394010** corresponde a la aplicación **Palworld**.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un momento, ¡pero vale la pena ser paciente! :)
:::

Una vez finalizado, ve al directorio de descarga donde se han guardado todos los archivos del servidor. Aquí, puedes usar **PalServer.exe** para iniciar el servidor. Sin embargo, te recomendamos configurar el reenvío de puertos y ajustar tu servidor primero.

### Reenvío de puertos para tu servidor

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo mediante comandos de Powershell, que es más fácil, o a través de la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía Powershell" default>

Abre el buscador de Windows y busca **Powershell**. Asegúrate de hacer clic derecho y **Ejecutar como Administrador** para que los permisos estén disponibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar Powershell en modo Administrador, de lo contrario los ajustes podrían no aplicarse bien.
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

Usa la función de búsqueda de Windows para abrir **Configuración de Firewall de Windows con Seguridad Avanzada**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Debes crear nuevas reglas para tu servidor Palworld. Para hacerlo, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 8211
- UDP entrante y saliente: 8211

Usa nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda con esto.

</TabItem>
</Tabs>

Una vez que hayas añadido estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él usando la dirección IP de tu servidor. Puedes hacerlo yendo al navegador de lista de servidores e ingresando tu IP y puerto en la búsqueda de abajo. Debes buscar: `[tu_dirección_ip]:8211`

Te recomendamos configurar primero los ajustes de tu servidor en la siguiente sección antes de acceder a él.

## Configuración

A estas alturas, ya terminaste la configuración inicial de tu servidor Palworld. Puedes hacer configuraciones adicionales a través de un archivo de configuración que se encuentra dentro del directorio de tu servidor.

Primero, navega a la siguiente ruta:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Ahí encontrarás el archivo de configuración **PalWorldSettings.ini**. Con este archivo puedes configurar un montón de parámetros para tu servidor. Consulta nuestra [Guía de Configuración del Servidor](palworld-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

:::note
Si no ves este archivo, por favor inicia tu servidor al menos **una vez** para que se genere automáticamente. Alternativamente, puedes copiar y usar la configuración por defecto desde la ruta `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### Activar modo Xbox

Los servidores dedicados de Palworld ahora tienen la opción de funcionar como servidores dedicados de Microsoft Store/Xbox para que jugadores de Xbox y PC de Microsoft Store puedan jugar juntos en su propio servidor.

:::note
El cross-play entre las versiones de Steam y Microsoft Store/Xbox aún no es posible. Tu servidor puede estar configurado para Steam o para Microsoft Store/Xbox, no ambos.
:::

Navega a la siguiente ruta y abre el archivo **PalWorldSettings.ini**:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

Agrega el siguiente fragmento para activar el modo Xbox:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

Guarda el archivo y la próxima vez que inicies el servidor estará en modo Xbox.

:::info
En consolas Xbox no puedes conectarte directamente vía dirección IP, por lo que si planeas jugar en Xbox, tendrás que hacer tu servidor dedicado público.

Puedes hacer esto creando un nuevo archivo `StartServer.bat` en el directorio raíz y llenándolo con: `PalServer.exe -publiclobby`. El flag especial `-publiclobby` activa el modo Servidor Comunitario, haciéndolo accesible en la lista de servidores.

También deberías poner un nombre de servidor fácil de encontrar, consulta nuestra [Guía de Configuración del Servidor](palworld-configuration.md) para saber cómo hacerlo.
:::

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Puede que necesites instalar [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) si no lo tienes ya en tu VPS Windows.

Ve al directorio base de tu servidor Palworld y ejecuta **PalServer.exe** para comenzar el proceso de inicio. Esto abrirá la consola del servidor en una ventana de comandos y arrancará el servidor. Si todo va bien, tu servidor aparecerá en la lista de servidores. Alternativamente, podrás conectarte directamente usando la barra de búsqueda inferior en la lista de servidores buscando: `[tu_dirección_ip]:8211`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor Palworld en tu VPS! Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, que está disponible para ayudarte todos los días.

<InlineVoucher />