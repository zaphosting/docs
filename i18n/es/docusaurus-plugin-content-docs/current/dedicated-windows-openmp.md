---
id: dedicated-windows-openmp
title: "Servidor Dedicado: Configuración de Servidor Dedicado Open.mp en Windows"
description: "Descubre cómo configurar y ejecutar un servidor dedicado open.mp en Windows para un juego multijugador sin interrupciones → Aprende más ahora"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un servidor dedicado Windows y quieres instalar el servicio de servidor dedicado open.mp en él? Estás en el lugar correcto. En esta guía, te explicaremos paso a paso cómo instalar este servicio en tu servidor.

## Preparación

Para comenzar, conéctate a tu servidor dedicado mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez que hayas accedido a tu servidor, descarga la última versión desde el [Repositorio de GitHub de open.mp](https://github.com/openmultiplayer/open.mp/releases). Asegúrate de seleccionar la versión **win-x86**.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Instalación

Una vez descargada la versión, descomprime el contenido del archivo usando una herramienta como 7zip o WinRAR. Esto debería generar una carpeta llamada **Server** que contendrá todos los archivos necesarios del servidor.

Para iniciar el servidor, simplemente ejecuta **omp-server.exe** y el servidor comenzará a arrancar. Sin embargo, recomendamos configurar el reenvío de puertos y ajustar tu servidor primero.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Reenvío de puertos en tu servidor

Para asegurarte de que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que utiliza el proceso del servidor dedicado. Puedes hacerlo mediante comandos de PowerShell directamente, que es más fácil, o de forma tradicional a través de la página del Firewall de Windows Defender.

:::tip
Al iniciar el servidor por primera vez debería aparecer un aviso de UAC. Si lo aceptas, las reglas del firewall se configurarán automáticamente, por lo que podrás continuar con la siguiente sección. Si no, sigue uno de los métodos que te mostramos a continuación.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía PowerShell" default>

Abre el buscador de Windows y busca **PowerShell**. Asegúrate de hacer clic derecho y seleccionar **Ejecutar como administrador** para que los permisos sean los correctos y todo funcione bien.

:::info
Asegúrate de ejecutar PowerShell en modo administrador, de lo contrario las configuraciones podrían no aplicarse correctamente.
:::

Luego, copia y pega los siguientes comandos en tu consola de PowerShell:
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor open.mp sea accesible públicamente.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la función de búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana necesaria si solo abres la página base del Firewall de Windows.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Debes crear nuevas reglas para tu servidor open.mp. Para ello, haz clic en las reglas de entrada y salida como se describe a continuación y añádelas para los siguientes protocolos y puertos:
- TCP entrada y salida: 7777
- UDP entrada y salida: 7777

Si necesitas más ayuda, consulta nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Una vez que hayas añadido estas reglas, tu servidor será accesible, lo que significa que podrás conectarte a él mediante la dirección IP de tu servidor.

Recomendamos que configures primero los ajustes de tu servidor en la siguiente sección antes de acceder a él.

## Configuración

En este punto, ya has terminado la configuración inicial de tu servidor open.mp. Puedes realizar configuraciones adicionales a través de un archivo de configuración.

Vuelve a la carpeta raíz. Busca y abre el archivo de configuración **config.json**. En este archivo, puedes ajustar una gran variedad de parámetros del servidor, desde el puerto, la contraseña y mucho más.

Como ejemplo, aquí tienes algunas opciones de configuración que están definidas:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

Consulta nuestra [Guía de Configuración del Servidor](openmp-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Iniciar y conectar a tu servidor

Ahora es momento de iniciar tu servidor. Ve al directorio raíz y ejecuta **omp-server.exe** para comenzar el proceso de arranque. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el proceso de inicio.

Ahora podrás conectarte directamente a tu servidor desde el juego usando el launcher de open.mp. Si quieres que la información del servidor aparezca en la lista de servidores, revisa nuestra [Guía de Configuración del Servidor](openmp-configuration.md) y asegúrate de que el parámetro `enable_query` esté en true (debería ser el valor por defecto). Guarda el archivo y ejecuta de nuevo el servidor.

## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor open.mp en tu servidor dedicado! Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, ¡están disponibles para ayudarte todos los días!