---
id: dedicated-windows-conan
title: "Servidor Dedicado: Configuración del Servidor Dedicado de Conan Exiles en Windows"
description: "Descubre cómo configurar un Servidor Dedicado de Conan Exiles en un Servidor Dedicado Windows para un juego fluido y gestión del servidor → Aprende más ahora"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un Servidor Dedicado Windows y quieres instalar el servicio del servidor dedicado de Conan Exiles en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor.

## Preparación

Para empezar, conéctate a tu Servidor Dedicado mediante Escritorio Remoto (RDP). Usa nuestra guía de [Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

:::note Herramienta de Lanzamiento del Servidor
Como alternativa a usar SteamCMD, los desarrolladores de Conan Exiles mantienen una útil herramienta de lanzamiento de servidor que puede usarse en Windows para facilitar el arranque del servidor.

Te recomendamos leer el [Post Oficial en el Foro](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) si prefieres usar esta opción.
:::

Una vez que hayas accedido a tu servidor, necesitarás configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente una variedad de archivos de servidores dedicados y del taller de Steam. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nueva carpeta en algún lugar de tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, encuentra el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows, o cualquier aplicación como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación se complete por completo.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

En cuanto aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor dedicado de Conan Exiles en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous** con el comando: `login anonymous`

Una vez logueado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido usando el comando `force_install_dir [ruta]`, reemplazando `[ruta]` con la ruta que quieras usar para tu servidor. Por ejemplo:
```
force_install_dir C:\Conan-Server
```
:::

Ahora ejecuta el comando `app_update 443030` que comenzará la descarga. El ID de la aplicación **443030** corresponde a **Conan Exiles**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un momento, ¡pero vale la pena ser paciente! :)
:::

Una vez finalizado, ve al directorio de descarga donde se han guardado todos los archivos del servidor. Aquí, puedes usar el archivo **StartServer.bat** para iniciar el servidor. Sin embargo, te recomendamos configurar el reenvío de puertos y ajustar tu servidor primero.

### Reenvío de puertos para tu servidor

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo directamente con comandos de Powershell, que es más fácil, o mediante la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía Powershell" default>

Abre el buscador de Windows y busca **Powershell**. Asegúrate de hacer clic derecho y **Ejecutar como Administrador** para que los permisos estén disponibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar Powershell en modo Administrador, de lo contrario los ajustes podrían no aplicarse correctamente.
:::

Luego, copia y pega los siguientes comandos en tu consola de Powershell:
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor de Conan Exiles sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la función de búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que pulsar en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor de Conan Exiles. Para ello, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 7777, 25575
- UDP entrante y saliente: 7777, 7778, 27015

Por favor, usa nuestra guía de [Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda para hacerlo.

</TabItem>
</Tabs>

Una vez añadidas estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él usando la dirección IP de tu servidor. Te recomendamos configurar primero los ajustes de tu servidor en la siguiente sección antes de acceder.

## Configuración

En este punto, ya has terminado la configuración inicial de tu servidor de Conan Exiles. Puedes hacer configuraciones adicionales a través de un archivo de configuración que se encuentra dentro del directorio de tu servidor.

Primero, navega al siguiente directorio:
```
../Conan-Server/Engine/Config/Windows
```

Ahí encontrarás el archivo de configuración **WindowsServerEngine.ini**. A través de este archivo, puedes ajustar una gran variedad de opciones añadiendo parámetros específicos.

Por ejemplo, para añadir un nombre de servidor, contraseña y contraseña de administrador, añadirías lo siguiente al archivo:
```
[OnlineSubsystem]
ServerName=[tu_nombre_de_servidor]
ServerPassword=[tu_contraseña]

[ServerSettings]
AdminPassword=[tu_contraseña_admin]
```

Te recomendamos visitar la [Wiki de Conan Exiles](https://conanexiles.fandom.com/wiki/Server_Configuration) para una lista completa de opciones disponibles.

## Iniciar y conectar a tu servidor

Ahora es momento de iniciar tu servidor. Ve al directorio base de tu servidor de Conan Exiles y ejecuta el archivo **StartServer.bat** que creaste antes para comenzar el proceso de arranque. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el proceso de inicio. Ahora podrás conectarte directamente a tu servidor usando el navegador de servidores dentro del juego e introduciendo la IP y el puerto de tu servidor (el puerto por defecto es 7777).

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor de Conan Exiles en tu servidor dedicado! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!