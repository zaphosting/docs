---
id: dedicated-windows-avorion
title: "Servidor Dedicado: Configuración del Servidor Dedicado Avorion en Windows"
description: "Descubre cómo configurar el Servidor Dedicado Avorion en tu VPS Windows para un alojamiento de juego sin interrupciones → Aprende más ahora"
sidebar_label: Avorion
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS Windows y quieres instalar el servicio de Servidor Dedicado Avorion en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor.

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="Cómo Configurar el Servidor Dedicado Avorion en un VPS Windows" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo para ti. Ya sea que tengas prisa o simplemente prefieras absorber la información de la forma más entretenida posible."/>

## Preparación

Para comenzar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez que hayas accedido a tu servidor, necesitarás configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión de **línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente una variedad de archivos del taller de Steam y servidores dedicados. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nueva carpeta en algún lugar de tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, encuentra el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows directamente, o con cualquier aplicación como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación se complete por completo.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Tan pronto como aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor dedicado Avorion en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous**, con el comando: `login anonymous`

Una vez conectado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido usando el comando `force_install_dir [ruta]`, reemplazando `[ruta]` con la ruta que quieras usar para tu servidor. Por ejemplo:
```
force_install_dir C:\Avorion-Server
```
:::

Ahora ejecuta el comando `app_update 565060` que comenzará la descarga. El ID de la aplicación **565060** es la aplicación **Avorion**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un momento, ¡pero vale la pena ser paciente! :)
:::

Una vez completado, ve al directorio de descarga donde se han guardado todos los archivos del servidor. Aquí, deberías hacer una copia del archivo **server.bat** y renombrar la copia a **startserver.bat** o algo similar. Usarás este nuevo archivo `.bat` para iniciar el servidor y para poder editar las opciones de configuración del servidor en la siguiente sección. Recomendamos configurar primero el reenvío de puertos y la configuración del servidor.

### Reenvío de puertos para tu servidor

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo mediante comandos de Powershell, que es más fácil, o a través de la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía Powershell" default>

Abre el buscador de Windows y busca **Powershell**. Asegúrate de hacer clic derecho y seleccionar **Ejecutar como Administrador** para que los permisos estén disponibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar Powershell en modo Administrador, de lo contrario los ajustes podrían no aplicarse correctamente.
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

Usa la función de búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor Avorion. Para hacerlo, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 27000
- UDP entrante y saliente: 27000, 27003, 27020, 27021

Por favor, usa nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda para hacerlo.

</TabItem>
</Tabs>

Una vez que hayas añadido estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él mediante la dirección IP de tu servidor. Puedes hacerlo seleccionando tu personaje en el menú principal, yendo a la pestaña **Buscar Juegos** y pulsando **Agregar Servidor**. Aquí, introduce la IP de tu servidor junto con el puerto (15636 por defecto) y la contraseña del servidor (si la configuraste, si no déjalo vacío).

Recomendamos que configures primero los ajustes de tu servidor en la siguiente sección antes de acceder a él.

## Configuración

Para este punto, ya has terminado la configuración de tu servidor Avorion. Puedes configurar los ajustes de tu servidor directamente a través del archivo **startserver.bat** que copiaste antes. Abre el archivo con un editor de texto como el bloc de notas y configura los parámetros de tu servidor.

Si quieres editar parámetros y configuraciones específicas del mundo, tendrás que acceder a tus guardados de galaxia y editar el archivo de configuración **server.ini**. Este se almacenará en el AppData de Windows, accesible mediante la siguiente ruta:
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
Puedes acceder fácilmente a esta ruta directamente presionando `CTRL` + `R` al mismo tiempo y buscando la siguiente ruta en el cuadro de diálogo Ejecutar: `%userprofile%/AppData/Roaming/Avorion/galaxies`. Simplemente pulsa **OK** y serás llevado a la carpeta.

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## Iniciar y Conectarte a tu servidor

Ahora es momento de iniciar tu servidor. Ve al directorio base de tu servidor Avorion y ejecuta **startserver.bat** que creaste antes para comenzar el proceso de arranque. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el proceso de inicio. Ahora podrás conectarte directamente a tu servidor usando el navegador de servidores dentro del juego e introduciendo la IP y el puerto de tu servidor (por defecto es 27000).

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor Avorion en tu VPS! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.