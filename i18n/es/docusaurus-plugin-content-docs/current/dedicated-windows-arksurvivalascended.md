---
id: dedicated-windows-arksurvivalascended
title: "Servidor Dedicado: Configuración de Servidor Dedicado ARK Survival Ascended en Windows"
description: "Descubre cómo configurar un servidor dedicado de ARK: Survival Ascended en tu VPS o servidor dedicado Windows rápida y fácilmente → Aprende más ahora"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS o servidor dedicado Windows y quieres instalar el servicio de servidor dedicado de ARK: Survival Ascended? Estás en el lugar correcto. En esta guía, te explicamos paso a paso cómo instalar este servicio en tu servidor.

<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/RpJWENYeqgTQaee/preview" title="Configuración de Servidor Dedicado ARK: Survival Ascended en VPS Windows" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo. Ya sea que tengas prisa o prefieras absorber la información de la forma más entretenida posible." />

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez dentro de tu servidor, necesitarás configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente archivos del taller de Steam y servidores dedicados. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una carpeta nueva en tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, encuentra el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows, o con aplicaciones como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación termine completamente.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Cuando aparezca el mensaje **Loading Steam API.... OK**, el proceso se completó con éxito y puedes continuar con la instalación del servidor dedicado de ARK: Survival Ascended en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous** con el comando: `login anonymous`

Una vez logueado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido con el comando `force_install_dir [ruta]`, reemplazando `[ruta]` por la ruta que quieras usar para tu servidor. Por ejemplo:
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

Ahora ejecuta el comando `app_update 2430930` que iniciará la descarga. El App ID **2430930** corresponde a la aplicación **Servidor Dedicado ARK: Survival Ascended**.

![](https://github.com/zaphosting/docs/assets/42719082/98d7c643-04be-488b-8831-86606363f98c)

:::info
No interrumpas el proceso antes de que termine para evitar errores. Puede tardar un poco, ¡pero vale la pena ser paciente! :)
:::

### Creando el archivo de inicio

Cuando la descarga haya terminado con éxito, navega al directorio donde instalaste el servidor y ve a la siguiente subcarpeta:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

En esta subcarpeta, tendrás que crear tu archivo de inicio necesario para lanzar el servidor dedicado. Crea un archivo llamado: `start-ark.bat`. Puedes crear primero un documento de texto y luego renombrarlo con la extensión `.bat`.

:::info
Asegúrate de tener activada la opción "Mostrar extensiones de archivo" en el Explorador de archivos para que uses la extensión correcta.
:::

Abre el archivo con un editor de texto (como Notepad++) y añade el siguiente contenido:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[nombre_servidor]?ServerAdminPassword=[contraseña_admin]?Port=7777?QueryPort=27015?MaxPlayers=[max_jugadores] -NoBattlEye
exit
```

En este comando, reemplaza `[nombre_servidor]`, `[contraseña_admin]` y `[max_jugadores]` por lo que desees.

Si también quieres poner una contraseña para que la gente normal pueda unirse, añade `?ServerPassword=[contraseña_unirse]` al comando anterior. Quedaría así:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[nombre_servidor]?ServerPassword=[contraseña_unirse]?ServerAdminPassword=[contraseña_admin]?Port=7777?QueryPort=27015?MaxPlayers=[max_jugadores] -NoBattlEye
exit
```

Asegúrate de haber configurado las variables y guarda los cambios antes de cerrar el archivo.

Tu servidor ahora será accesible localmente a través de `127.0.0.1:7777` cuando ejecutes el archivo de inicio y el servidor esté online. Sin embargo, aún debes añadir reglas de reenvío de puertos en el Firewall de Windows para que el servidor sea accesible públicamente, lo cual veremos en la siguiente sección.

### Reenvío de puertos para tu servidor

Para que tu servidor sea accesible públicamente, debes configurar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo mediante comandos de Powershell, que es más fácil, o desde la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía Powershell" default>

Abre el buscador de Windows y busca **Powershell**. Haz clic derecho y selecciona **Ejecutar como administrador** para que tengas los permisos necesarios y todo funcione bien.

:::info
Asegúrate de ejecutar Powershell en modo Administrador, si no las configuraciones podrían no aplicarse correctamente.
:::

Luego copia y pega estos comandos en la consola de Powershell:
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor de Ark: Survival Ascended sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la búsqueda de Windows para abrir **Configuración de Firewall de Windows con Seguridad Avanzada**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Debes crear reglas nuevas para tu servidor de Ark: Survival Ascended. Para ello, crea reglas entrantes y salientes para los siguientes protocolos y puertos:
- TCP entrante y saliente: 27020
- UDP entrante y saliente: 27015
- UDP entrante y saliente: 7777-7778

Usa nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas ayuda adicional.

</TabItem>
</Tabs>

Una vez añadidas estas reglas, tu servidor será accesible públicamente, lo que significa que podrás conectarte a él usando la dirección IP de tu servidor. Para hacerlo, abre la consola dentro del juego Ark: Survival Ascended y ejecuta `open [tu_dirección_ip]:7777`.

Te recomendamos configurar primero los ajustes de tu servidor en la siguiente sección antes de acceder.

## Configuración

A estas alturas, ya terminaste la configuración de tu servidor dedicado de Ark: Survival Ascended. Puedes hacer configuraciones adicionales a través de dos archivos de configuración que se encuentran en el directorio de tu servidor.

Primero, navega a estas carpetas:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

Ahí encontrarás los archivos de configuración **DefaultGameUserSettings.ini** y **GameUserSettings.ini**. En estos archivos puedes editar un montón de variables y opciones relacionadas con tu servidor.

:::warning[SOPORTE CROSSPLAY]
Desde el 18 de noviembre de 2023, los propietarios de servidores deben instalar manualmente la lista de revocación de certificados que se puede obtener en https://dev.epicgames.com/ (o directamente en http://crl.r2m02.amazontrust.com/r2m02.crl). El archivo r2m02.crl descargado debe instalarse (clic derecho sobre el archivo) seleccionando "Colocar todos los certificados en el siguiente almacén" y eligiendo "Autoridades de certificación raíz de confianza". Puede ser necesario reiniciar el sistema.

Si antes del 18 de noviembre de 2023 los propietarios instalaron el archivo de certificado r2m02.cer y el servidor no aparece, ese certificado debe eliminarse del sistema para que los servidores vuelvan a ser visibles. Para eliminar el certificado revocado, ejecuta (Windows + R) certmgr.msc y busca Amazon RSA 2048 M02 en "Autoridades de certificación raíz de confianza". Lo mismo debe hacerse ejecutando certlm.msc. Finalmente, puede ser necesario reiniciar el sistema.
:::

## Iniciar y conectar a tu servidor

Ahora es momento de arrancar tu servidor. Pero para que el servidor inicie correctamente, debes instalar [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) en tu VPS Windows.

:::info
Debes instalar [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) en tu VPS Windows antes de intentar iniciar el servidor si aún no lo tienes, ya que es una dependencia. Tu servidor podría no arrancar sin esto.
:::

Una vez instalado en tu VPS, puedes iniciar el servidor ejecutando el archivo **start-ark.bat** que creaste antes.

Esto abrirá la consola del servidor en una ventana de comandos y comenzará el proceso de arranque. Si todo va bien, tu servidor aparecerá en la lista de servidores. Alternativamente, podrás conectarte directamente abriendo la consola dentro del juego y ejecutando `open [tu_dirección_ip]:7777`.

¡Has instalado con éxito Ark: Survival Ascended en tu servidor dedicado Windows!

<InlineVoucher />