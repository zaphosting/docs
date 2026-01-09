---
id: vserver-windows-avorion
title: "VPS: Configuración de Servidor Dedicado Avorion en Windows"
description: "Descubre cómo configurar un Servidor Dedicado Avorion en tu VPS Windows de forma rápida y eficiente → Aprende más ahora"
sidebar_label: Avorion
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS Windows y quieres instalar el servicio de Servidor Dedicado Avorion en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor.

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="Cómo Configurar un Servidor Dedicado Avorion en un VPS Windows" description="¿Te resulta más fácil entender cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible."/>
<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez dentro de tu servidor, necesitarás configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **de línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente archivos del taller de Steam y servidores dedicados. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una carpeta nueva en algún lugar de tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, encuentra el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows, o cualquier aplicación como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación termine completamente.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

En cuanto aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor dedicado Avorion en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous**, con el comando: `login anonymous`

Una vez logueado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido usando el comando `force_install_dir [ruta]`, reemplazando `[ruta]` con la ruta que quieras usar para tu servidor. Por ejemplo:
```
force_install_dir C:\Avorion-Server
```
:::

Ahora ejecuta el comando `app_update 565060` que iniciará la descarga. El ID de la app **565060** corresponde a la aplicación **Avorion**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un momento, ¡pero vale la pena ser paciente! :)
:::

Una vez finalizado, ve al directorio de descarga donde se han guardado todos los archivos del servidor. Aquí, deberías hacer una copia del archivo **server.bat** y renombrar la copia a **startserver.bat** o algo similar. Usarás este nuevo archivo `.bat` para iniciar el servidor y para poder editar las opciones de configuración del servidor en la siguiente sección. Recomendamos hacer el reenvío de puertos y configurar tu servidor primero.

### Reenvío de puertos para tu servidor

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo directamente con comandos de Powershell, que es más fácil, o desde la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía Powershell" default>

Abre el buscador de Windows y busca **Powershell**. Asegúrate de hacer clic derecho y **Ejecutar como Administrador** para que tengas los permisos necesarios y todo funcione correctamente.

:::info
Asegúrate de ejecutar Powershell en modo Administrador, si no, los ajustes podrían no aplicarse bien.
:::

Luego, copia y pega los siguientes comandos en tu consola de Powershell:
```
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor Avorion sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la búsqueda de Windows para abrir **Configuración de Firewall de Windows con Seguridad Avanzada**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor Avorion. Para ello, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 27000
- UDP entrante y saliente: 27000, 27003, 27020, 27021

Usa nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda con esto.

</TabItem>
</Tabs>

Una vez añadidas estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él usando la dirección IP de tu servidor. Recomendamos configurar primero los ajustes de tu servidor en la siguiente sección antes de acceder.

## Configuración

A estas alturas, ya has terminado la configuración de tu servidor Avorion. Puedes configurar los ajustes de tu servidor directamente editando el archivo **startserver.bat** que copiaste antes. Ábrelo con un editor de texto como el bloc de notas y configura los parámetros de tu servidor.

Si quieres editar parámetros y ajustes específicos del mundo, tendrás que acceder a tus guardados de galaxia y modificar el archivo de configuración **server.ini**. Este se guarda en el AppData de Windows, accesible desde la siguiente ruta:
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
Puedes acceder fácilmente a esta ruta presionando `CTRL` + `R` al mismo tiempo y buscando la siguiente ruta en el cuadro de ejecutar: `%userprofile%/AppData/Roaming/Avorion/galaxies`. Simplemente pulsa **OK** y te llevará a la carpeta.

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio base de tu servidor Avorion y ejecuta el archivo **startserver.bat** que creaste antes para iniciar el proceso. Esto abrirá la consola del servidor en un símbolo del sistema y comenzará el arranque. Ahora podrás conectarte directamente a tu servidor usando el navegador de servidores dentro del juego e introduciendo la IP y el puerto de tu servidor (por defecto es 27000).

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor Avorion en tu VPS! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.

<InlineVoucher />