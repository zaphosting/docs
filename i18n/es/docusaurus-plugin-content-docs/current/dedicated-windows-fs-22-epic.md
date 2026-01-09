---
id: dedicated-windows-fs-22-epic
title: "Servidor Dedicado: Farming Simulator 2022 (Epic Games) Configuración Servidor Dedicado Windows"
description: "Descubre cómo configurar un servidor dedicado para Farming Simulator 22 versión Epic Games con rendimiento optimizado y requisitos únicos → Aprende más ahora"
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Configurar un servidor para Farming Simulator 22 versión Epic Games es un poco diferente al proceso para un servidor estándar. Esta guía te llevará paso a paso, enfocándose en los aspectos únicos de la versión Epic Games.

## Preparación

Antes de comenzar, asegúrate de que tu configuración cumpla con los siguientes requisitos:
- **Sistema Operativo:** Windows Server 2016/2019 (64-bit)
- **CPU:** Al menos 4x 2.4 GHz (AMD/Intel)
- **RAM:** Al menos 4GB (DDR3/4)
- **Espacio en Disco:** Al menos 50GB libres (preferible SSD o mejor)
- **Cuenta Epic Games:** Una cuenta Epic Games con Farming Simulator 22.

:::info
Al ejecutar el servidor, no puedes alojar el servidor y jugar con la misma cuenta Epic Games. Esto significa que necesitarás una segunda copia del juego en otra cuenta si quieres jugar en el servidor.
:::

## Paso 1: Preparación para la instalación del servidor
Comienza conectándote a tu servidor vía Escritorio Remoto (RDP). Si necesitas ayuda con esto, consulta nuestra [Acceso Inicial (RDP)](vserver-windows-userdp.md).

Una vez conectado, tendrás que instalar un requisito previo necesario, Microsoft Visual C++ Redistributable, que puedes descargar desde la [web de Microsoft](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170). Después de descargarlo, sigue las instrucciones en pantalla para completar la instalación.

:::tip
Es posible que ya tengas las herramientas C++ Redistributable instaladas; si es así, el instalador puede mostrar un error. Puedes ignorarlo con seguridad y continuar.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

Ahora debes instalar el launcher de Epic Games, que puedes descargar desde la [web de Epic Games](https://store.epicgames.com/en-US/download). Nuevamente, sigue las instrucciones en pantalla para completar la instalación.

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

Después de la instalación, es muy probable que el launcher tenga que descargar algunos archivos adicionales y actualizaciones antes de iniciarse.

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

Una vez abierto el launcher, debes iniciar sesión con tu cuenta Epic Games, que tenga Farming Simulator 2022 en su biblioteca de juegos.

## Paso 2: Descargar Farming Simulator 2022

En el Epic Games Launcher, haz clic en la pestaña **Biblioteca** y localiza Farming Simulator 22. Usa el botón **Instalar** y selecciona la ubicación donde deseas descargar el juego.

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

Ahora tendrás que esperar a que la descarga e instalación se completen. La velocidad de descarga depende del ancho de banda de tu servidor.

## Paso 3: Configurar opciones de lanzamiento

Una vez instalado el juego, vuelve a la pestaña **Biblioteca** en el Epic Games Launcher. Encuentra Farming Simulator 22, haz clic en los tres puntos junto a él y selecciona **Administrar**.

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

Desplázate hasta la sección **Opciones de lanzamiento** y actívala. En el cuadro de texto que aparece, escribe `-server` y cierra el menú.

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## Paso 4: Ejecutar el Servidor

Ahora puedes iniciar Farming Simulator 2022 desde tu launcher de Epic Games o el acceso directo en tu escritorio. El juego debería abrirse mediante un símbolo del sistema (CMD) en modo servidor dedicado. Si no es así, asegúrate de haber configurado correctamente la opción de lanzamiento.

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## Paso 5: Habilitar la Interfaz Web (opcional)

Los servidores dedicados de Farming Simulator 22 incluyen una interfaz web que puedes habilitar para tu servidor. Es opcional, pero puede ser muy útil para ajustar configuraciones y acceder a mucha otra información, por lo que recomendamos activarla.

Antes de continuar, asegúrate de cerrar el servidor saliendo del símbolo del sistema. Esto es para garantizar que los cambios que hagas en este paso no se sobrescriban.

Navega a la ruta de instalación de tu juego, normalmente será `C:\Program Files\Epic Games\FarmingSimulator22` si instalaste en el directorio por defecto.

![](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

Busca y abre el archivo `dedicatedServer.xml` que se encuentra en el directorio raíz usando un editor de texto como el Bloc de notas.

Configura el nombre de usuario y la contraseña para el admin modificando los campos correspondientes. 
```xml
  <initial_admin>
    <username>admin</username> //usuario
    <passphrase>tu_contraseña</passphrase> //contraseña
  </initial_admin>
```

![](https://screensaver01.zap-hosting.com/index.php/s/gks4Pswpyc3Wcix/preview)

Asegúrate de guardar el archivo antes de cerrarlo y ejecuta el `dedicatedServer.exe` ubicado en el mismo directorio raíz.

![](https://screensaver01.zap-hosting.com/index.php/s/KjNeS5E8BLEgnnH/preview)

Ahora deberías poder acceder a la interfaz web yendo a `http://[tu_ip_servidor]:8080` en tu navegador, reemplazando `[tu_ip_servidor]` con la dirección IP de tu servidor. Si quieres acceder al panel directamente desde el mismo servidor, también puedes usar `http://127.0.0.1:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
Debido a la configuración única de la versión Epic Games, podrías tener dificultades para usar la interfaz web al 100%. Aunque puedes hacer cambios y detener el servidor usando la interfaz web, no puedes iniciarlo desde ahí, por ejemplo.

Si tienes problemas, primero detén dedicatedServer.exe, luego ejecuta Farming Simulator 22 directamente para asegurarte de que el servidor esté operativo. Después, ejecuta dedicatedServer.exe para activar la interfaz web.

Es importante que ejecutes el servidor **primero** y la interfaz web **después**, de lo contrario Epic Games puede detectar ambos como el mismo archivo y evitar que puedas iniciar el servidor principal.
:::

## Paso 6: Redirección de Puertos

Para asegurarte de que tu servidor sea accesible al público, debes modificar las reglas de redirección de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo mediante comandos de PowerShell, que es más fácil, o a través de la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía PowerShell" default>

Abre el cuadro de búsqueda de Windows y busca **PowerShell**. Asegúrate de hacer clic derecho y seleccionar **Ejecutar como Administrador** para que los permisos estén disponibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar PowerShell en modo Administrador, de lo contrario las configuraciones pueden no aplicarse correctamente.
:::

Luego, copia y pega los siguientes comandos en tu consola PowerShell:
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor de Farming Simulator 22 sea accesible al público.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la función de búsqueda de Windows para abrir **Configuración de Firewall de Windows con Seguridad Avanzada**. Puede que tengas que presionar **Configuración avanzada** para abrir la ventana necesaria si abres la página base del Firewall de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor de Farming Simulator 22. Para ello, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 3724, 27015
- UDP entrante y saliente: 3724, 27015

Usa nuestra [Guía de Redirección de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda con esto.

</TabItem>
</Tabs>

## Paso 7: Conectarse al Servidor
Inicia el juego y navega al menú multijugador. Busca el nombre del servidor, que puedes encontrar en la interfaz web y es personalizable.

Una vez localizado el servidor, haz clic para conectarte. Si te pide contraseña, esta también estará visible en la interfaz web.

Has instalado con éxito Farming Simulator 22 (versión Epic Games) en tu servidor dedicado Windows.