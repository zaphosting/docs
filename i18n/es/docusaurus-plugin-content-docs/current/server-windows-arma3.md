---
id: server-windows-arma3
title: "Configuración de Servidor Dedicado Arma 3 en Windows"
description: "Descubre cómo configurar un servidor dedicado de Arma 3 en tu servidor Windows para una experiencia de juego fluida y control total → Aprende más ahora"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS/servidor dedicado Windows y quieres instalar el servicio de servidor dedicado de Arma 3 en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor.

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS/servidor dedicado mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez que hayas accedido a tu servidor, necesitarás configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión de **línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente una variedad de archivos del taller de Steam y servidores dedicados. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una nueva carpeta en algún lugar de tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, encuentra el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows directamente, o con cualquier aplicación como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación se complete por completo.

![](https://screensaver01.zap-hosting.com/index.php/s/RsC7AK37qrYnDYR/preview)

En cuanto aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor dedicado de Arma 3 en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous**, con el comando: `login anonymous`

Una vez conectado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido usando el comando `force_install_dir [ruta]`, reemplazando `[ruta]` con la ruta que quieras usar para tu servidor. Por ejemplo:
```
force_install_dir C:\arma3-server
```
:::

Ahora ejecuta el comando `app_update 233780` que iniciará la descarga. El ID de la aplicación **233780** corresponde a **Arma 3**.

![](https://screensaver01.zap-hosting.com/index.php/s/52dAJQDFjTs8Y4f/preview)

:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un momento, ¡pero vale la pena ser paciente! :)
:::

Una vez finalizado, ve al directorio de descarga donde se han guardado todos los archivos del servidor. Aquí, puedes usar el archivo **Arma 3_server.exe** para iniciar el servidor. Sin embargo, recomendamos configurar el reenvío de puertos y ajustar tu servidor primero.

### Reenvío de puertos para tu servidor

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del VPS/servidor dedicado. Puedes hacerlo directamente con comandos de Powershell, que es más fácil, o mediante la página del Firewall de Windows Defender.

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
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Inbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Outbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor de Arma 3 sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la función de búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que pulsar en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/r9j8kYmR3LtcQJ2/preview)

Debes crear nuevas reglas para tu servidor de Arma 3. Para ello, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- UDP entrante y saliente: 2302–2306

Usa nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda para hacerlo.

</TabItem>
</Tabs>

Una vez añadidas estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él mediante la dirección IP de tu servidor. Para hacerlo, selecciona tu personaje en el menú principal, ve a la pestaña **Buscar Juegos** y pulsa en **Agregar Servidor**. Aquí, introduce la IP de tu servidor junto con el puerto (2302 por defecto) y la contraseña del servidor (si la configuraste, si no déjalo vacío).

Recomendamos configurar primero los ajustes de tu servidor en la siguiente sección antes de acceder a él.

## Configuración

A estas alturas, ya has terminado la configuración básica de tu servidor de Arma 3. Puedes realizar configuraciones adicionales a través de un archivo de configuración que se encuentra dentro del directorio de tu servidor.

Primero, navega a la siguiente ruta:
```
C:\arma3-Server
```

Ahí encontrarás el archivo de configuración **server.cfg**. A través de este archivo, puedes ajustar varios parámetros para tu servidor.

## Iniciar y conectar a tu servidor

Ahora es momento de iniciar tu servidor. Ve al directorio principal del juego y ejecuta el archivo **arma3server_x64.exe**.

Esto abrirá la consola del servidor y comenzará el proceso de arranque.

Los jugadores pueden conectarse a tu servidor a través del **navegador de servidores de Arma 3** usando la **dirección IP de tu servidor** y el puerto por defecto **2302**.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el **servidor de Arma 3** en tu VPS/servidor dedicado! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.

<InlineVoucher />