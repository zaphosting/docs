---
id: vserver-windows-fs-22-epic
title: "VPS: Servidor dedicado de Farming Simulator 2022 (Epic Games) configuración en Windows"
description: "Descubre cómo configurar un servidor dedicado de Farming Simulator 22 para Epic Games y optimiza tu experiencia de juego y hosting → Aprende más ahora"
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Configurar un servidor para la versión de Farming Simulator 22 de Epic Games es un poco diferente al proceso para un servidor estándar. Esta guía te llevará paso a paso, enfocándose en los aspectos únicos de la versión de Epic Games.
<InlineVoucher />

## Preparación

Antes de empezar, asegúrate de que tu configuración cumple con los siguientes requisitos:
- **Sistema operativo:** Windows Server 2016/2019 (64 bits)
- **CPU:** Al menos 4x 2.4 GHz (AMD/Intel)
- **RAM:** Al menos 4GB (DDR3/4)
- **Espacio en disco:** Al menos 50GB libres (preferiblemente SSD o mejor)
- **Cuenta de Epic Games:** Una cuenta de Epic Games con Farming Simulator 22.

:::info
Al ejecutar el servidor, no puedes alojar el servidor y jugar con la misma cuenta de Epic Games. Esto significa que necesitarás una segunda copia del juego en otra cuenta si quieres jugar en el servidor.
:::

## Paso 1: Preparación para la instalación del servidor
Comienza conectándote a tu servidor vía Escritorio Remoto (RDP). Si necesitas ayuda con esto, consulta nuestra [guía de Acceso Inicial (RDP)](vserver-windows-userdp.md).

Una vez conectado, tendrás que instalar un requisito previo necesario, Microsoft Visual C++ Redistributable, que puedes descargar desde la [web de Microsoft](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170). Después de descargarlo, sigue las instrucciones en pantalla para completar la instalación.

:::tip
Es posible que ya tengas las herramientas C++ Redistributable instaladas; si es así, el instalador puede mostrar un error. Puedes ignorarlo con seguridad y continuar.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

Ahora tienes que instalar el launcher de Epic Games, que puedes descargar desde la [web de Epic Games](https://store.epicgames.com/en-US/download). Nuevamente, sigue las instrucciones en pantalla para completar la instalación.

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

Después de la instalación, es muy probable que el launcher tenga que descargar algunos archivos adicionales y actualizaciones antes de iniciarse.

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

Una vez abierto el launcher, debes iniciar sesión con tu cuenta de Epic Games, que tenga Farming Simulator 2022 en su biblioteca de juegos.

## Paso 2: Descargar Farming Simulator 2022

En el launcher de Epic Games, haz clic en la pestaña **Biblioteca** y localiza Farming Simulator 22. Usa el botón **Instalar** y selecciona la ubicación donde quieres descargar el juego.

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

Ahora tendrás que esperar a que la descarga e instalación se completen. La velocidad de descarga depende del ancho de banda de tu servidor.

## Paso 3: Configurar opciones de lanzamiento

Una vez instalado el juego, vuelve a la pestaña **Biblioteca** en el launcher de Epic Games. Busca Farming Simulator 22, haz clic en los tres puntos junto a él y selecciona **Administrar**.

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

Desplázate hasta la sección **Opciones de lanzamiento** y actívala. En el cuadro de texto que aparece, escribe `-server` y cierra el menú.

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## Paso 4: Ejecutar el servidor

Ahora puedes iniciar Farming Simulator 2022 desde tu launcher de Epic Games o desde el acceso directo en tu escritorio. El juego debería abrirse a través de un símbolo del sistema (CMD) en modo servidor dedicado. Si no es así, asegúrate de haber configurado correctamente la opción de lanzamiento.

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## Paso 5: Activar la interfaz web (opcional)

Los servidores dedicados de Farming Simulator 22 incluyen una interfaz web que puedes activar para tu servidor. Es opcional, pero puede ser muy útil para ajustar configuraciones y acceder a mucha información, por lo que recomendamos activarla.

Antes de continuar, asegúrate de cerrar el servidor saliendo del símbolo del sistema. Esto es para garantizar que los cambios que hagas en este paso no se sobrescriban.

Navega a la ruta de instalación del juego, normalmente será `C:\Program Files\Epic Games\FarmingSimulator22` si instalaste en el directorio por defecto.

![](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

Busca y abre el archivo `dedicatedServer.xml` que está en el directorio raíz usando un editor de texto como el Bloc de notas.

Configura el nombre de usuario y la contraseña para el admin modificando los campos correspondientes.
```xml
  <initial_admin>
    <username>admin</username> //usuario
    <passphrase>tu_contraseña</passphrase> //contraseña
  </initial_admin>
```

![](https://screensaver01.zap-hosting.com/index.php/s/gks4Pswpyc3Wcix/preview)

Asegúrate de guardar el archivo antes de cerrarlo y ejecuta el `dedicatedServer.exe` que está en el mismo directorio raíz.

![](https://screensaver01.zap-hosting.com/index.php/s/KjNeS5E8BLEgnnH/preview)

Ahora deberías poder acceder a la interfaz web entrando en `http://[tu_ip_servidor]:8080` en tu navegador, reemplazando `[tu_ip_servidor]` por la dirección IP de tu servidor. Si quieres acceder al panel directamente desde el mismo servidor, también puedes usar `http://127.0.0.1:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
Debido a la configuración única de la versión de Epic Games, puede que tengas dificultades para usar la interfaz web al 100%. Aunque puedes hacer cambios y detener el servidor usando la interfaz web, no puedes iniciarlo desde ahí, por ejemplo.

Si tienes problemas, primero detén dedicatedServer.exe, luego ejecuta Farming Simulator 22 directamente para asegurarte de que el servidor está operativo. Después, ejecuta dedicatedServer.exe para activar la interfaz web.

Es importante que ejecutes el servidor **primero** y la interfaz web **después**, de lo contrario Epic Games puede detectar ambos como el mismo archivo y evitar que puedas lanzar el servidor principal.
:::

## Paso 6: Redirección de puertos

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de redirección de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo mediante comandos de PowerShell, que es más fácil, o a través de la página del Firewall de Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía PowerShell" default>

Abre el cuadro de búsqueda de Windows y busca **PowerShell**. Asegúrate de hacer clic derecho y seleccionar **Ejecutar como administrador** para que los permisos estén disponibles y todo funcione correctamente.

:::info
Asegúrate de ejecutar PowerShell en modo Administrador, si no, las configuraciones pueden no aplicarse correctamente.
:::

Luego, copia y pega los siguientes comandos en tu consola de PowerShell:
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor de Farming Simulator 22 sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la función de búsqueda de Windows para abrir **Configuración avanzada del Firewall de Windows**. Puede que tengas que pulsar en **Configuración avanzada** para abrir la ventana necesaria si abres la página base del Firewall de Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Debes crear nuevas reglas para tu servidor de Farming Simulator 22. Para ello, haz clic en las reglas entrantes y salientes como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrante y saliente: 3724, 27015
- UDP entrante y saliente: 3724, 27015

Usa nuestra [guía de Redirección de Puertos (Firewall)](vserver-windows-port.md) si necesitas más ayuda con esto.

</TabItem>
</Tabs>

## Paso 7: Conectarse al servidor
Inicia el juego y ve al menú multijugador. Busca el nombre del servidor, que puedes encontrar en la interfaz web y es personalizable.

Cuando lo encuentres, haz clic para conectarte. Si te pide contraseña, introdúcela, también visible en la interfaz web.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor de Farming Simulator 2022 en tu VPS! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!

<InlineVoucher />