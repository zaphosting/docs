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

¿Tienes un servidor dedicado Windows y quieres instalar el servicio de servidor dedicado de RageMP en él? Estás en el lugar correcto. En esta guía te explicamos paso a paso cómo instalar este servicio en tu servidor.

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu servidor dedicado mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez dentro de tu servidor, comienza instalando [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe), ya que es un requisito que RageMP necesita. Asegúrate de tenerlo instalado antes de continuar. Si no estás seguro de si ya lo tienes, ejecuta el instalador y te indicará durante el proceso.

Con la dependencia instalada, descarga la última versión del servidor desde la [Web de RageMP](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe).

:::tip
Si ya tienes RageMP instalado, puedes saltar a la subsección **Cambiar a la rama del servidor**. No necesitas reinstalar RageMP.
:::

## Instalación

Cuando tengas el archivo descargado, ejecuta el archivo **RAGEMultiplayer_Setup.exe** y sigue los pasos de instalación. Podrás ajustar la ruta de instalación durante el proceso, lo cual recomendamos.

Con RageMP instalado, ejecuta la app **RAGE Multiplayer**, que ahora debería estar disponible en tus aplicaciones de Windows.

En el primer lanzamiento, te pedirá que configures la ruta a la carpeta donde tienes instalado GTA:V. El directorio de instalación depende del launcher desde el que instalaste el juego y por defecto estará en `C:/Program Files` o `C:/Program Files (x86)`.

Ahora tendrás que cambiar la rama para descargar los archivos del servidor.

### Cambiar a la rama del servidor

Ve al directorio donde instalaste RageMP. Localiza el archivo **config.xml** en esa carpeta. Cambia el parámetro `channel` de `prerelease` a `prerelease_server` y guarda el archivo.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Ahora ejecuta el archivo **updater.exe**, que descargará los archivos necesarios del servidor según el cambio de rama. Verás que aparece una nueva carpeta llamada **server-files** en tu directorio de RageMP, que es lo que necesitarás.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

Puedes volver a cambiar el parámetro `channel` a `prerelease` y ejecutar de nuevo **update.exe** para volver a la versión cliente y poder jugar otra vez.

:::tip
Puedes mover los archivos del servidor y renombrar la carpeta como quieras, por ejemplo al escritorio. No es obligatorio ejecutar esto dentro de la carpeta `RAGEMP`.
:::

Para iniciar el servidor, simplemente ejecuta **ragemp-server.exe** que está en la carpeta `server-files` o en tu carpeta del servidor y el servidor comenzará a arrancar. Sin embargo, recomendamos configurar el reenvío de puertos y ajustar tu servidor primero.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Reenvío de puertos para tu servidor

Para que tu servidor sea accesible públicamente, debes configurar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo mediante comandos de PowerShell, que es más fácil, o desde la página del Firewall de Windows Defender.

:::tip
Al iniciar el servidor por primera vez debería aparecer un aviso de Control de Cuentas de Usuario (UAC). Si aceptas, las reglas del firewall se configurarán automáticamente y podrás continuar con la siguiente sección. Si no, sigue uno de los métodos que te mostramos abajo.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía PowerShell" default>

Abre el buscador de Windows y busca **PowerShell**. Asegúrate de hacer clic derecho y seleccionar **Ejecutar como administrador** para que tengas los permisos necesarios y todo funcione bien.

:::info
Asegúrate de ejecutar PowerShell en modo administrador, si no los ajustes podrían no aplicarse correctamente.
:::

Luego copia y pega estos comandos en la consola de PowerShell:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor RageMP sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que pulsar en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Debes crear nuevas reglas para tu servidor RageMP. Para ello, crea reglas entrantes y salientes para los siguientes protocolos y puertos:

- TCP entrante y saliente: 22005
- UDP entrante y saliente: 22005

Si necesitas más ayuda, consulta nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Una vez añadidas estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él usando la dirección IP de tu servidor.

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

Ahora es momento de arrancar tu servidor. Ve a la carpeta `server-files` o a la carpeta de tu servidor y ejecuta **ragemp-server.exe** para iniciar el proceso. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el arranque.

Ya podrás conectarte directamente a tu servidor desde el juego usando el launcher de RageMP.

## Conclusión

¡Felicidades! Has instalado y configurado con éxito el servidor RageMP en tu servidor dedicado. Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.

<InlineVoucher />