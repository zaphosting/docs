---
id: vserver-windows-enshrouded
title: "VPS: Configuración de Servidor Dedicado Enshrouded en Windows"
description: "Descubre cómo configurar un Servidor Dedicado Enshrouded en tu VPS Windows para un juego fluido y control total → Aprende más ahora"
sidebar_label: Enshrouded
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Windows y quieres instalar el servicio de Servidor Dedicado Enshrouded en él? Estás en el lugar correcto. En esta guía, te explicamos paso a paso cómo instalar este servicio en tu servidor.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qQy4x4cS5Rz8WR4/preview" title="Cómo Configurar un Servidor Dedicado Enshrouded en un VPS Windows" description="¿Te resulta más fácil entender cuando ves las cosas en acción? ¡Lo tenemos! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o prefieras aprender de la forma más entretenida posible."/>
<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez dentro de tu servidor, necesitarás configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **de línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente una variedad de archivos del taller de Steam y servidores dedicados. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nueva carpeta en algún lugar de tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, encuentra el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows, o cualquier aplicación como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación termine completamente.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

En cuanto aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor dedicado Enshrouded en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous** con el comando: `login anonymous`

Una vez logueado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido usando el comando `force_install_dir [ruta]`, reemplazando `[ruta]` con la ruta que quieras usar para tu servidor. Por ejemplo:
```
force_install_dir C:\Enshrouded-Server
```
:::

Ahora ejecuta el comando `app_update 2278520` que iniciará la descarga. El ID de la aplicación **2278520** corresponde a **Enshrouded**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un poco, ¡pero vale la pena ser paciente! :)
:::

Una vez finalizado, ve al directorio de descarga donde se han guardado todos los archivos del servidor. Aquí, puedes usar el **enshrouded_server.exe** para iniciar el servidor. Sin embargo, te recomendamos configurar el reenvío de puertos y ajustar tu servidor primero.

### Reenvío de puertos para tu servidor

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo directamente con comandos de Powershell, que es más fácil, o desde la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía Powershell" default>

Abre el buscador de Windows y busca **Powershell**. Asegúrate de hacer clic derecho y **Ejecutar como Administrador** para que los permisos estén disponibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar Powershell en modo Administrador, de lo contrario las configuraciones podrían no aplicarse bien.
:::

Luego, copia y pega los siguientes comandos en tu consola de Powershell:
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor Enshrouded sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor Enshrouded. Para ello, haz clic en las reglas de entrada y salida como se indica a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrada y salida: 15636-15637
- UDP entrada y salida: 15636-15637

Usa nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda con esto.

</TabItem>
</Tabs>

Una vez añadidas estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él usando la dirección IP de tu servidor. Para hacerlo, selecciona tu personaje en el menú principal, ve a la pestaña **Buscar Juegos** y pulsa **Agregar Servidor**. Aquí, introduce la IP de tu servidor junto con el puerto (15636 por defecto) y la contraseña del servidor (si la tienes, si no déjalo vacío).

:::tip
Consulta nuestra [Guía de Configuración del Servidor](enshrouded-configuration.md) si quieres activar una contraseña para tu servidor y ajustar otras opciones.
:::

Te recomendamos configurar primero los ajustes de tu servidor en la siguiente sección antes de acceder a él.

## Configuración

A estas alturas, ya has terminado la configuración básica de tu servidor Enshrouded. Puedes hacer configuraciones adicionales a través de un archivo de configuración que se encuentra en el directorio de tu servidor.

Primero, navega a este directorio:
```
..EnshroudedServer/ (directorio raíz)
```

Ahí encontrarás el archivo de configuración **enshrouded_server.json**. Con este archivo puedes ajustar varios parámetros de tu servidor. Consulta nuestra [Guía de Configuración del Servidor](enshrouded-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve al directorio base de tu servidor Enshrouded y ejecuta **enshrouded_server.exe** para iniciar el proceso. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el arranque. Ya podrás conectarte directamente a tu servidor yendo a la pestaña **Buscar Juegos**, pulsando **Agregar Servidor** e introduciendo la IP y el puerto de tu servidor (por defecto 15636).

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor Enshrouded en tu VPS! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.

<InlineVoucher />