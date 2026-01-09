---
id: vserver-windows-ragemp
title: "VPS: Configuración de servidor dedicado RageMP en Windows"
description: "Aprende cómo instalar y configurar el servidor dedicado RageMP en tu VPS Windows para un juego multijugador sin interrupciones → Descubre más ahora"
sidebar_label: RageMP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS Windows y quieres instalar el servicio de servidor dedicado RageMP en él? Estás en el lugar correcto. En esta guía te explicamos paso a paso cómo instalar este servicio en tu servidor.

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de acceso inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez dentro de tu servidor, instala primero el [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe), ya que es un requisito que RageMP necesita. Asegúrate de tenerlo instalado antes de continuar. Si no estás seguro de si ya lo tienes, ejecuta el instalador y te indicará durante el proceso.

Con la dependencia instalada, descarga la última versión del servidor desde la [web oficial de RageMP](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe).

:::tip
Si ya tienes RageMP instalado, puedes saltar a la subsección **Cambiar a la rama del servidor**. No necesitas reinstalar RageMP.
:::

## Instalación

Cuando tengas el archivo descargado, ejecuta el archivo **RAGEMultiplayer_Setup.exe** y sigue los pasos de instalación. Podrás elegir la ruta de instalación durante el proceso, lo cual recomendamos.

Con RageMP instalado, abre la app **RAGE Multiplayer**, que ahora debería estar disponible en tus aplicaciones de Windows.

En el primer lanzamiento, te pedirá que configures la ruta de la carpeta donde tienes instalado GTA:V. La ubicación depende del launcher desde el que instalaste el juego y por defecto suele estar en `C:/Program Files` o `C:/Program Files (x86)`.

Ahora tendrás que cambiar la rama para descargar los archivos del servidor.

### Cambiar a la rama del servidor

Ve a la carpeta donde instalaste RageMP. Busca el archivo **config.xml** dentro de esa carpeta. Cambia el parámetro `channel` de `prerelease` a `prerelease_server` y guarda el archivo.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Luego ejecuta el archivo **updater.exe**, que descargará los archivos necesarios del servidor según el cambio de rama. Verás que aparece una nueva carpeta llamada **server-files** dentro del directorio de RageMP, que es la que necesitarás.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

Puedes volver a cambiar el parámetro `channel` a `prerelease` y ejecutar de nuevo **update.exe** para volver a la versión cliente y poder jugar.

:::tip
Puedes mover los archivos del servidor y renombrar la carpeta como quieras, por ejemplo al escritorio. No es obligatorio que estén dentro de la carpeta `RAGEMP`.
:::

Para arrancar el servidor, simplemente ejecuta **ragemp-server.exe** que está en la carpeta `server-files` o en la carpeta de tu servidor y el servidor comenzará a iniciarse. Sin embargo, te recomendamos configurar el reenvío de puertos y ajustar tu servidor primero.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Reenvío de puertos para tu servidor

Para que tu servidor sea accesible desde internet, debes configurar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo directamente con comandos de PowerShell, que es más fácil, o desde la página del Firewall de Windows Defender.

:::tip
Al iniciar el servidor por primera vez, debería aparecer un aviso de Control de Cuentas de Usuario (UAC). Si aceptas, las reglas del firewall se configurarán automáticamente y podrás seguir con la siguiente sección. Si no, sigue uno de los métodos que te mostramos abajo.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía PowerShell" default>

Abre el buscador de Windows y busca **PowerShell**. Haz clic derecho y selecciona **Ejecutar como administrador** para que tenga los permisos necesarios y todo funcione bien.

:::info
Asegúrate de ejecutar PowerShell en modo administrador, si no las configuraciones podrían no aplicarse correctamente.
:::

Luego copia y pega estos comandos en la consola de PowerShell:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor RageMP sea accesible desde internet.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la búsqueda de Windows para abrir **Configuración del Firewall de Windows con seguridad avanzada**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana correcta si entraste primero en la página básica del Firewall.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear reglas nuevas para tu servidor RageMP. Para ello, crea reglas entrantes y salientes para los siguientes protocolos y puertos:

- TCP entrante y saliente: 22005
- UDP entrante y saliente: 22005

Si necesitas más ayuda, consulta nuestra [Guía de reenvío de puertos (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Una vez añadidas estas reglas, tu servidor será accesible y podrás conectarte a él usando la dirección IP de tu servidor.

Te recomendamos configurar primero los ajustes del servidor en la siguiente sección antes de conectarte.

## Configuración

Para este punto, ya tienes el servidor RageMP instalado. Puedes hacer configuraciones adicionales editando un archivo de configuración.

Ve a la carpeta raíz. Abre el archivo **conf.json**. Ahí puedes modificar varios parámetros del servidor, como el puerto, el nombre del servidor y más.

Por ejemplo, aquí tienes algunas opciones configuradas:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## Iniciar y conectarte a tu servidor

Ahora es momento de arrancar tu servidor. Ve a la carpeta `server-files` o a la carpeta de tu servidor y ejecuta **ragemp-server.exe** para iniciar el proceso. Se abrirá la consola del servidor en una ventana de comandos y comenzará a arrancar.

Ya podrás conectarte directamente a tu servidor desde el juego usando el launcher de RageMP.

## Conclusión

¡Felicidades! Has instalado y configurado con éxito el servidor RageMP en tu VPS. Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.

<InlineVoucher />