---
id: vserver-windows-soulmask
title: "VPS: Configuración del Servidor Dedicado Soulmask en Windows"
description: "Descubre cómo instalar el servidor dedicado Soulmask en tu VPS o servidor dedicado Windows para una experiencia de juego sin interrupciones → Aprende más ahora"
sidebar_label: Soulmask
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS o servidor dedicado Windows y quieres instalar el servicio del servidor dedicado Soulmask? Estás en el lugar correcto. En esta guía te explicamos paso a paso cómo instalar este servicio en tu servidor.

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez dentro de tu servidor, tendrás que configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **de línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente archivos de Steam Workshop y servidores dedicados. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una carpeta nueva en tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, localiza el archivo **steamcmd.zip** que acabas de descargar y muévelo a la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows, o con cualquier programa como .7zip o Winrar. Esto debería extraer un archivo llamado **steamcmd.exe**.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación termine por completo.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Cuando aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes continuar con la instalación del servidor dedicado Soulmask en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous** con el comando: `login anonymous`

Una vez logueado, ya puedes empezar a descargar los archivos.

:::tip
Opcional: Puedes definir tu directorio de instalación preferido con el comando `force_install_dir [ruta]`, reemplazando `[ruta]` por la ruta que quieras usar para tu servidor. Por ejemplo:
```
force_install_dir C:\Soulmask-Server
```
:::

Ahora ejecuta el comando `app_update 3017310` para comenzar la descarga. El App ID **3017310** corresponde a la aplicación **Soulmask**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
No interrumpas el proceso antes de que termine para evitar errores. Puede tardar un poco, ¡pero vale la pena ser paciente! :)
:::

Cuando termine, ve al directorio de descarga donde se guardaron todos los archivos del servidor. Aquí puedes usar el archivo **StartServer.bat** para arrancar el servidor. Sin embargo, te recomendamos configurar primero el reenvío de puertos y otros ajustes.

### Reenvío de puertos para tu servidor

Para que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo directamente con comandos de PowerShell, que es más fácil, o desde la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía PowerShell" default>

Abre el buscador de Windows y busca **PowerShell**. Asegúrate de hacer clic derecho y seleccionar **Ejecutar como Administrador** para que tengas los permisos necesarios y todo funcione bien.

:::info
Asegúrate de ejecutar PowerShell en modo Administrador, si no las configuraciones podrían no aplicarse correctamente.
:::

Luego copia y pega estos comandos en la consola de PowerShell:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor Soulmask sea accesible desde fuera.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor Soulmask. Para ello, crea reglas entrantes y salientes para los siguientes protocolos y puertos:
- TCP entrante y saliente: 8777, 27015
- UDP entrante y saliente: 8777, 27015

Si necesitas más ayuda, consulta nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Una vez añadidas estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él usando la dirección IP de tu servidor. Para hacerlo, ve al menú principal a Multijugador, selecciona Conexión IP Directa e introduce la IP y el puerto que usas, que por defecto es 3724 o el que hayas configurado.

Te recomendamos configurar primero los ajustes de tu servidor en la siguiente sección antes de conectarte.

## Configuración

A estas alturas, ya tienes listo tu servidor Soulmask. Puedes hacer configuraciones adicionales ajustando los parámetros dentro del archivo **StartServer.bat** que está en el directorio raíz y también en el archivo **GameUserSettings.ini** ubicado en `../WS/Saved/Config/WindowsServer`.

Consulta nuestra [Guía de Configuración del Servidor](soulmask-configuration.md) para ver todos los parámetros y opciones disponibles para tu servidor Soulmask.

## Arrancar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio raíz y ejecuta **StartServer.bat** para iniciar el proceso. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el arranque.

:::tip
Si tu servidor no arranca y la ventana de comandos simplemente desaparece, entra en el directorio `../WS/Saved/Logs` y revisa el último log para diagnosticar el problema.

Hay un problema común relacionado con el servicio online de Steam que falla al arrancar en los binarios del servidor dedicado Windows por un empaquetado incorrecto. Si el error está relacionado con Steam, mueve los archivos `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll` desde el directorio raíz a la carpeta `../WS/Binaries/Win64`. Luego intenta arrancar el servidor de nuevo y debería iniciarse correctamente en la consola.
:::

Ahora podrás conectarte directamente a tu servidor usando la IP y el puerto 8777 desde el menú multijugador del juego.

Si quieres que tu servidor aparezca en la lista pública, revisa nuestra [Guía de Configuración del Servidor](soulmask-configuration.md) y añade el parámetro `-SteamServerName` adecuado en tu archivo **StartServer.bat**. Guarda el archivo y ejecuta el batch de nuevo.

¡Has instalado Soulmask con éxito en tu servidor dedicado Windows!

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor Soulmask en tu VPS! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.

<InlineVoucher />