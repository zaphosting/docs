---
id: vserver-windows-arksurvivalascended
title: "VPS: Configuración de Servidor Dedicado ARK Survival Ascended en Windows"
description: "Descubre cómo configurar un servidor dedicado de ARK: Survival Ascended en un VPS Windows para un juego fluido y control total del servidor → Aprende más ahora"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
¿Tienes un VPS Windows y quieres instalar el servicio de servidor dedicado de ARK: Survival Ascended en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor.
<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Sa76nDiSmQKx7x2/preview" title="Configuración de Servidor Dedicado ARK: Survival Ascended en VPS Windows" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Lo tenemos cubierto! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o prefieras absorber la información de la forma más entretenida posible."/>
<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez que hayas accedido a tu servidor, necesitarás configurar **SteamCMD** para poder descargar los archivos necesarios del servidor dedicado. SteamCMD es la versión **de línea de comandos (CLI)** del cliente Steam y es la herramienta que te permite descargar fácilmente una variedad de archivos del taller de Steam y servidores dedicados. Descarga [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Crea una carpeta nueva en algún lugar de tu servidor, en este caso la llamaremos `steamcmd`. Ve a tu carpeta de Descargas, encuentra el archivo **steamcmd.zip** que acabas de descargar y colócalo dentro de la carpeta `steamcmd`. Ahora descomprime el archivo haciendo clic derecho y usando la función de descompresión de Windows directamente, o con cualquier aplicación como .7zip o Winrar. Esto debería generar un archivo **steamcmd.exe** descomprimido.

Simplemente ejecuta **steamcmd.exe** y espera hasta que el proceso de instalación se complete por completo.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Tan pronto como aparezca el mensaje **Loading Steam API.... OK**, el proceso se ha completado con éxito y puedes comenzar con la instalación del servidor dedicado de ARK: Survival Ascended en la siguiente sección.

## Instalación

Después de la instalación, deberías poder ejecutar comandos dentro del símbolo del sistema de **steamcmd.exe** que abriste antes. Necesitas iniciar sesión antes de poder hacer cualquier cosa, usando el usuario **anonymous**, con el comando: `login anonymous`

Una vez conectado, ya puedes comenzar a descargar los archivos.

:::tip
Opcional: Puedes establecer tu directorio de instalación preferido usando el comando `force_install_dir [ruta]`, reemplazando `[ruta]` por la ruta que quieras usar para tu servidor. Por ejemplo: 
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

Ahora ejecuta el comando `app_update 2430930` que iniciará la descarga. El ID de la aplicación **2430930** corresponde a la aplicación **Servidor Dedicado ARK: Survival Ascended**.

![](https://screensaver01.zap-hosting.com/index.php/s/DSMpETJYtkciNHT/preview)

:::info
Por favor, no interrumpas el proceso antes de que termine para evitar errores. Puede tardar un momento, ¡pero vale la pena ser paciente! :)
:::

### Creando el archivo de inicio

Una vez que la descarga se haya completado con éxito, navega al directorio donde realizaste la instalación y ve al siguiente subdirectorio:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

En este subdirectorio, tendrás que crear tu archivo de inicio que es necesario para lanzar el servidor dedicado. Crea un archivo con el nombre: `start-ark.bat`. Puedes crear primero un documento de texto y luego renombrarlo con la extensión `.bat`.

:::info
Asegúrate de tener activada la opción "Mostrar extensiones de archivo" en el Explorador de archivos para que la extensión sea la correcta.
:::

Abre el archivo con un editor de texto (como Notepad++) y añade el siguiente contenido:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Dentro de este comando, debes reemplazar `[server_name]`, `[admin_password]` y `[max_players]` por lo que desees.

Si también quieres configurar una contraseña para que la gente normal pueda unirse, puedes añadir `?ServerPassword=[join_password]` al comando en el archivo anterior. Quedaría así:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Asegúrate de haber configurado las variables y guarda los cambios antes de cerrar el archivo.

Tu servidor ahora será accesible localmente a través de `127.0.0.1:7777` una vez que ejecutes el archivo de inicio y el servidor esté en línea. Sin embargo, aún debes añadir reglas de reenvío de puertos en el firewall de Windows si quieres que tu servidor sea accesible públicamente, lo cual cubriremos en la siguiente sección.

### Reenvío de puertos para tu servidor

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo mediante comandos de Powershell, que es más fácil, o a través de la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía Powershell" default>

Abre el buscador de Windows y busca **Powershell**. Asegúrate de hacer clic derecho y **Ejecutar como Administrador** para que los permisos sean accesibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar Powershell en modo Administrador, de lo contrario las configuraciones pueden no aplicarse correctamente.
:::

Luego, copia y pega los siguientes comandos en tu consola de Powershell:
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor de Ark: Survival Ascended sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la función de búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que pulsar en **Configuración avanzada** para abrir la ventana necesaria si entras en la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor de Ark: Survival Ascended. Para ello, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 27020
- UDP entrante y saliente: 27015
- UDP entrante y saliente: 7777-7778

Usa nuestra guía de [Reenvío de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda para hacerlo.

</TabItem>
</Tabs>

Una vez que hayas añadido estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él mediante la dirección IP de tu servidor. Puedes hacerlo abriendo la consola dentro del juego Ark: Survival Ascended y ejecutando `open [tu_dirección_ip]:7777`.

Recomendamos que configures primero los ajustes de tu servidor en la siguiente sección antes de acceder a él.

## Configuración

Para este punto, ya has terminado la configuración de tu servidor dedicado de Ark: Survival Ascended. Puedes realizar configuraciones adicionales del servidor a través de dos archivos de configuración que se encuentran dentro del directorio de tu servidor.

Primero, navega a los siguientes directorios:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

Ahí encontrarás los archivos de configuración **DefaultGameUserSettings.ini** y **GameUserSettings.ini**. En estos archivos puedes editar una amplia variedad de variables y opciones relacionadas con tu servidor.

:::warning[SOPORTE CROSSPLAY]
Desde el 18 de noviembre de 2023, los propietarios de servidores deben instalar manualmente la lista de revocación de certificados que se puede obtener en https://dev.epicgames.com/ (o directamente en http://crl.r2m02.amazontrust.com/r2m02.crl). El archivo r2m02.crl descargado debe instalarse (clic derecho sobre el archivo) seleccionando "Colocar todos los certificados en el siguiente almacén" y eligiendo "Autoridades de certificación raíz de confianza". Puede ser necesario reiniciar el sistema.

Si antes del 18 de noviembre de 2023 los propietarios instalaron el archivo de certificado r2m02.cer y el servidor no aparece, ese certificado debe eliminarse del sistema para que los servidores vuelvan a ser visibles. Para eliminar el certificado revocado, ejecuta (Windows + R) certmgr.msc y busca Amazon RSA 2048 M02 en "Autoridades de certificación raíz de confianza". Lo mismo debe hacerse ejecutando certlm.msc. Finalmente, puede ser necesario reiniciar el sistema.
:::

## Iniciar y conectar a tu servidor

Ahora es momento de iniciar tu servidor. Sin embargo, para que el servidor arranque correctamente, deberás instalar [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) en tu VPS Windows.

:::info
Debes instalar [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) en tu VPS Windows antes de intentar iniciar el servidor si aún no lo tienes, ya que es una dependencia. Tu servidor podría no arrancar sin esta instalación.
:::

Una vez instalado en tu VPS, puedes proceder a iniciar el servidor ejecutando el archivo **start-ark.bat** que creaste anteriormente.

Esto abrirá la consola del servidor en una ventana de comandos y comenzará el proceso de arranque. Si todo va bien, tu servidor aparecerá en la lista de servidores. Alternativamente, podrás conectarte directamente abriendo la consola dentro del juego y ejecutando `open [tu_dirección_ip]:7777`.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor ARK-Survival-Ascended en tu VPS! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!

<InlineVoucher />