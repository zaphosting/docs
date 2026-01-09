---
id: dedicated-windows-ragemp
title: "Servidor Dedicado: Configuración de RageMP en Servidor Dedicado Windows"
description: "Aprende cómo configurar el servidor dedicado de RageMP en tu servidor Windows para alojar sesiones multijugador de GTA V → Descubre más ahora"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un servidor dedicado Windows y quieres instalar el servicio de servidor dedicado de RageMP en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor.



## Preparación

Para empezar, conéctate a tu servidor dedicado mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez que hayas accedido a tu servidor, comienza instalando [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe), ya que es un requisito que RageMP necesita. Asegúrate de que esté instalado antes de continuar. Si no estás seguro de si ya lo tienes, ejecuta el instalador y te indicará durante la instalación.

Cuando tengas la dependencia instalada, descarga la última versión del servidor desde la [web oficial de RageMP](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe).

:::tip
Si ya tienes RageMP instalado, puedes pasar directamente a la subsección **Cambiar a la rama del servidor**. No es necesario reinstalar RageMP.
:::

## Instalación

Una vez descargada la versión, ejecuta el archivo **RAGEMultiplayer_Setup.exe** y sigue los pasos de instalación. Podrás ajustar la ruta de instalación durante el proceso, lo cual recomendamos.

Con RageMP instalado, ejecuta la app **RAGE Multiplayer**, que ahora debería estar accesible en tus aplicaciones de Windows.

En el primer lanzamiento, se te pedirá que configures la ruta de la carpeta donde tienes instalado GTA:V. El directorio de instalación depende del launcher desde el que instalaste el juego y por defecto estará en `C:/Program Files` o `C:/Program Files (x86)`.

Ahora tendrás que ajustar la rama para descargar los archivos del servidor.

### Cambiar a la rama del servidor

Navega hasta el directorio donde instalaste RageMP. Localiza el archivo **config.xml** en esta carpeta. Cambia el parámetro `channel` de `prerelease` a `prerelease_server` y guarda el archivo.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Ahora ejecuta el archivo **updater.exe**, que descargará los archivos necesarios del servidor según el cambio de rama. Verás que aparece una nueva carpeta llamada **server-files** en tu directorio de RageMP, que es lo que necesitarás.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

Puedes revertir el parámetro `channel` a `prerelease` y volver a ejecutar **update.exe** para cambiar de nuevo a la versión cliente y poder jugar.

:::tip
Puedes mover los archivos del servidor y renombrar la carpeta como quieras, por ejemplo al escritorio. No es obligatorio ejecutar esto dentro de la carpeta `RAGEMP`.
:::

Para iniciar el servidor, simplemente ejecuta **ragemp-server.exe** que encontrarás en la carpeta `server-files` o en tu carpeta de servidor y el servidor comenzará a arrancar. Sin embargo, recomendamos configurar el reenvío de puertos y ajustar tu servidor primero.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Reenvío de puertos para tu servidor

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo directamente con comandos de PowerShell, que es más fácil, o desde la página del Firewall de Windows Defender.

:::tip
Al iniciar el servidor por primera vez debería aparecer un aviso de UAC. Si aceptas, las reglas del firewall se configurarán automáticamente, y podrás continuar con la siguiente sección. Si no, sigue uno de los métodos que te mostramos a continuación.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía PowerShell" default>

Abre el buscador de Windows y busca **PowerShell**. Asegúrate de hacer clic derecho y seleccionar **Ejecutar como administrador** para que tengas los permisos necesarios y todo funcione correctamente.

:::info
Asegúrate de ejecutar PowerShell en modo administrador, si no, los ajustes podrían no aplicarse bien.
:::

Luego, copia y pega los siguientes comandos en la consola de PowerShell:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor RageMP sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la búsqueda de Windows para abrir **Configuración del Firewall de Windows con seguridad avanzada**. Puede que tengas que pulsar en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor RageMP. Para ello, haz clic en las reglas de entrada y salida como se indica a continuación y añádelas para los siguientes protocolos y puertos:

- TCP entrada y salida: 22005
- UDP entrada y salida: 22005

Si necesitas ayuda adicional, consulta nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Una vez añadidas estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él a través de la dirección IP de tu servidor.

Recomendamos configurar primero los ajustes de tu servidor en la siguiente sección antes de acceder a él.

## Configuración

A estas alturas, ya has terminado la configuración básica de tu servidor RageMP. Puedes hacer configuraciones adicionales mediante un archivo de configuración.

Vuelve a la carpeta raíz. Busca y abre el archivo **conf.json**. En este archivo puedes ajustar varios parámetros del servidor, desde el puerto, el nombre del servidor y más.

Por ejemplo, aquí tienes algunas opciones de configuración que están definidas:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Ve a la carpeta `server-files` o a tu carpeta de servidor y ejecuta **ragemp-server.exe** para iniciar el proceso. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el arranque.

Ya podrás conectarte directamente a tu servidor desde el juego usando el launcher de RageMP.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor RageMP en tu servidor dedicado! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.