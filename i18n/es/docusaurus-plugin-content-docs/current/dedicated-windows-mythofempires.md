---
id: dedicated-windows-mythofempires
title: "Servidor Dedicado: Configuración del Servidor Dedicado Myth of Empires en Windows"
description: "Descubre cómo configurar un servidor dedicado de Myth of Empires en tu VPS Windows de forma rápida y eficiente → Aprende más ahora"
sidebar_label: Configuración Servidor MOE Dedicado
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Windows y quieres instalar un servidor dedicado MOE en él? Estás en el lugar correcto. En esta guía te explicamos paso a paso cómo instalar este servicio en tu servidor.

<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/T3jP36eWcQgTmNy/preview" title="Cómo Configurar un Servidor Myth Of Empires en un VPS Windows" description="¿Te resulta más fácil entender cuando ves las cosas en acción? ¡Tenemos justo lo que necesitas! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible." />

<InlineVoucher />

## Preparación
Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez dentro de tu servidor, tendrás que configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente archivos de servidores dedicados y del taller de Steam. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una carpeta nueva en tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, localiza el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows o cualquier programa como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación termine por completo.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Cuando aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes continuar con la instalación del servidor dedicado MOE en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous** con el comando: `login anonymous`

Una vez logueado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido con el comando `force_install_dir [ruta]`, reemplazando `[ruta]` por la ruta que quieras usar para tu servidor. Por ejemplo:
```
force_install_dir C:\MOE-Server
```
:::

Ahora ejecuta el comando `app_update 1794810` que iniciará la descarga. El App ID **1794810** corresponde a la aplicación **MOE**.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
No interrumpas el proceso antes de que termine para evitar errores. Puede tardar un poco, ¡pero vale la pena ser paciente! :)
:::

Cuando termine, ve al directorio de descarga donde se han guardado todos los archivos del servidor.

### Accediendo a PrivateServerTool

A diferencia de las instalaciones típicas con SteamCMD, MOE requiere que copies una carpeta desde la instalación local del juego Steam para poder ejecutar el servidor en Windows.

Abre Steam en tu sistema, haz clic derecho en tu juego **Myth of Empires** y selecciona **Explorar archivos locales** mientras pasas el cursor sobre la sección **Administrar**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

En la carpeta raíz que se abre, localiza la carpeta **PrivateServerTool**. Esta es la carpeta que tendrás que copiar a tu servidor. Puedes hacerlo fácilmente con `CTRL+C` para copiar en tu PC local y `CTRL+V` para pegar en tu servidor Windows vía RDP. Asegúrate de pegarla en el directorio raíz de tu servidor dedicado.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Luego, pasa a la siguiente sección para configurar el reenvío de puertos y ajustar tu servidor.

### Reenvío de puertos en tu servidor

Para que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo directamente con comandos de Powershell, que es más fácil, o desde la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía Powershell" default>

Abre el buscador de Windows y busca **Powershell**. Asegúrate de hacer clic derecho y **Ejecutar como Administrador** para que los permisos estén disponibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar Powershell en modo Administrador, si no, los ajustes podrían no aplicarse bien.
:::

Luego copia y pega estos comandos en la consola de Powershell:
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor MOE sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la búsqueda de Windows para abrir **Configuración de Firewall de Windows con Seguridad Avanzada**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Debes crear nuevas reglas para tu servidor MOE. Para ello, crea reglas entrantes y salientes para los siguientes protocolos y puertos:
- TCP entrante y saliente: 11888, 12888
- UDP entrante y saliente: 11888, 12888

Usa nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda con esto.

</TabItem>
</Tabs>

Antes de acceder a tu servidor, ve a la siguiente sección para crear tu archivo de configuración y el archivo `.bat` de inicio.

## Configuración

Ahora usarás la herramienta del servidor que copiaste antes desde los archivos del juego para crear tu archivo de configuración y el archivo `.bat` de inicio que usarás para lanzar tu servidor.

Navega a este directorio (la carpeta que copiaste antes):
```
../MOE/PrivateServerTool
```

Dentro, ejecuta el archivo **PrivateServerTool.exe**. Con esta herramienta, configura las opciones del servidor a tu gusto, incluyendo mods, ajustes del juego y mucho más.

Recomendamos configurar al menos los parámetros básicos como el **Nombre del Servidor** antes de continuar.

Cuando estés listo, ve a la pestaña **Start Console** en la herramienta y pulsa el botón **Save Config** seguido del botón **Start Server**. Esto generará el archivo `StartPrivateServer.bat` que usarás para arrancar tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

Recomendamos crear un acceso directo a tu archivo `StartPrivateServer.bat` haciendo clic derecho y seleccionando **Crear acceso directo**, para que sea más fácil arrancar el servidor.

:::note
Puede que tengas que editar la ruta a la carpeta del juego dentro del archivo `StartPrivateServer.bat` generado automáticamente. Simplemente abre el archivo con un editor como el bloc de notas y asegúrate de que la ruta al principio del archivo coincida con la ruta donde está tu servidor.

Si la ruta es incorrecta, puedes hacer doble clic en la barra de ruta superior cuando estés en la raíz de la carpeta de tu servidor MOE dedicado para copiar la ruta actual y pegarla donde corresponda en el archivo.
:::

## Arrancar y conectar a tu servidor

Ya es hora de arrancar tu servidor. Ve al directorio de tu servidor Myth of Empires y ejecuta **StartPrivateServer.bat** (o el acceso directo si creaste uno) para iniciar el proceso. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el arranque. Ahora podrás conectarte directamente a tu servidor yendo a la pestaña **Custom Server** y buscándolo en el cuadro de búsqueda.

:::tip
Si tienes problemas para conectarte al servidor, abre tu archivo `StartPrivateServer.bat` con un editor como el bloc de notas y asegúrate de que los dos parámetros IP coincidan con la IP de tu servidor Windows. Esto debería rellenarse automáticamente por la herramienta, pero es un buen paso para solucionar problemas.
:::

Has instalado con éxito Myth of Empires en tu servidor dedicado Windows.

<InlineVoucher />