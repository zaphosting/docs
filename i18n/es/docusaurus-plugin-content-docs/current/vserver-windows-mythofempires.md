---
id: vserver-windows-mythofempires
title: "VPS: Configuración de servidor dedicado de Myth of Empires en Windows"
description: "Descubre cómo configurar un servidor dedicado de Myth of Empires en tu VPS Windows de forma rápida y eficiente → Aprende más ahora"
sidebar_label: Configuración Servidor Dedicado MOE
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Windows y quieres instalar un servidor dedicado de MOE en él? Estás en el lugar correcto. En esta guía te explicamos paso a paso cómo instalar este servicio en tu servidor.
<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/4WnZSyGqLyN7pmG/preview" title="Cómo configurar un servidor de Myth Of Empires en un VPS Windows" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible."/>
<InlineVoucher />

## Preparación
Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de acceso inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez dentro de tu servidor, tendrás que configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **de línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente archivos de servidores dedicados y del taller de Steam. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una carpeta nueva en tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, localiza el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows, o con cualquier programa como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación termine por completo.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Cuando aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes continuar con la instalación del servidor dedicado MOE en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous** con el comando: `login anonymous`

Una vez logueado, ya puedes empezar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido con el comando `force_install_dir [ruta]`, reemplazando `[ruta]` por la ruta donde quieres instalar tu servidor. Por ejemplo:
```
force_install_dir C:\MOE-Server
```
:::

Ahora ejecuta el comando `app_update 1794810` que comenzará la descarga. El App ID **1794810** corresponde a la aplicación **MOE**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
No interrumpas el proceso antes de que termine para evitar errores. Puede tardar un poco, ¡pero vale la pena ser paciente! :)
:::

Cuando termine, ve al directorio de descarga donde se han guardado todos los archivos del servidor.

### Accediendo a PrivateServerTool

A diferencia de otras instalaciones típicas con SteamCMD, MOE requiere que copies una carpeta desde la instalación local del juego Steam para poder ejecutar el servidor en Windows.

Abre Steam en tu PC, haz clic derecho en el juego **Myth of Empires** y selecciona **Explorar archivos locales** dentro de la sección **Administrar**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

En la carpeta raíz que se abre, busca la carpeta **PrivateServerTool**. Esta es la carpeta que tienes que copiar a tu servidor. Puedes hacerlo fácilmente con `CTRL+C` en tu PC local y `CTRL+V` para pegarla en tu servidor Windows vía RDP. Asegúrate de pegarla en el directorio raíz de tu servidor dedicado.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Ahora ve a la siguiente sección para hacer el reenvío de puertos y configurar tu servidor.

### Reenvío de puertos en tu servidor

Para que tu servidor sea accesible públicamente, debes configurar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo directamente con comandos de Powershell, que es más fácil, o desde la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía Powershell" default>

Abre el buscador de Windows y busca **Powershell**. Haz clic derecho y selecciona **Ejecutar como administrador** para que tengas los permisos necesarios y todo funcione bien.

:::info
Asegúrate de ejecutar Powershell en modo Administrador, si no los cambios podrían no aplicarse correctamente.
:::

Luego copia y pega estos comandos en la consola de Powershell:
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor MOE sea accesible desde fuera.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la búsqueda de Windows para abrir **Configuración avanzada de Firewall de Windows**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana correcta si solo abres la página base del Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor MOE. Para ello, crea reglas entrantes y salientes para los siguientes protocolos y puertos:
- TCP entrante y saliente: 11888, 12888
- UDP entrante y saliente: 11888, 12888

Si necesitas más ayuda, consulta nuestra [Guía de reenvío de puertos (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Antes de acceder a tu servidor, ve a la siguiente sección para crear tu archivo de configuración y el archivo de inicio `.bat`.

## Configuración

Ahora usarás la herramienta del servidor que copiaste antes desde los archivos del juego para crear tu archivo de configuración y el archivo `.bat` de inicio que usarás para lanzar tu servidor.

Navega a este directorio (la carpeta que copiaste antes):
```
../MOE/PrivateServerTool
```

Dentro de esta carpeta, ejecuta el archivo **PrivateServerTool.exe**. Con esta herramienta, configura las opciones del servidor a tu gusto, incluyendo mods, ajustes del juego y mucho más.

Recomendamos configurar al menos los parámetros básicos como el **Nombre del servidor** antes de continuar.

Cuando estés listo, ve a la pestaña **Start Console** en la herramienta y pulsa el botón **Save Config** seguido del botón **Start Server**. Esto generará el archivo `StartPrivateServer.bat` que usarás para arrancar tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

Te recomendamos crear un acceso directo a tu archivo `StartPrivateServer.bat` haciendo clic derecho y seleccionando **Crear acceso directo**, para que sea más fácil arrancar el servidor.

:::note
Puede que tengas que editar la ruta a la carpeta del juego dentro del archivo `StartPrivateServer.bat` generado automáticamente. Simplemente ábrelo con un editor como el bloc de notas y asegúrate de que la ruta al inicio del archivo coincide con la ruta donde está tu servidor.

Si la ruta es incorrecta, puedes hacer doble clic en la barra de ruta superior cuando estés en la raíz de la carpeta de tu servidor MOE para copiar la ruta actual y pegarla donde corresponda en el archivo.
:::

## Arrancar y conectar a tu servidor

Ya es hora de arrancar tu servidor. Ve al directorio de tu servidor Myth of Empires y ejecuta **StartPrivateServer.bat** (o el acceso directo si creaste uno) para iniciar el proceso. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el arranque. Ahora podrás conectarte directamente a tu servidor yendo a la pestaña **Custom Server** y buscándolo en el cuadro de búsqueda.

:::tip
Si tienes problemas para conectarte, abre tu archivo `StartPrivateServer.bat` con un editor como el bloc de notas y asegúrate de que los dos parámetros IP coinciden con la IP de tu servidor Windows. Esto debería rellenarse automáticamente con la herramienta, pero es un buen paso para solucionar problemas.
:::

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor de Myth of Empires en tu VPS! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.

<InlineVoucher />