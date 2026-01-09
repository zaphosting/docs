---
id: vserver-windows-openmp
title: "VPS: Configuración del Servidor Dedicado Open.mp en Windows"
description: "Aprende a instalar y configurar un servidor dedicado open.mp en tu VPS Windows para jugar multiplayer sin líos → Descubre más ahora"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Tienes un VPS Windows y quieres instalar el servidor dedicado open.mp en él? Estás en el lugar correcto. En esta guía te explicamos paso a paso cómo instalar este servicio en tu servidor.

<InlineVoucher />

## Preparación

Para empezar, conéctate a tu VPS mediante Escritorio Remoto (RDP). Usa nuestra [Guía de Acceso Inicial (RDP)](vserver-windows-userdp.md) si necesitas ayuda para hacerlo.

Una vez dentro de tu servidor, descarga la última versión desde el [Repositorio de open.mp en GitHub](https://github.com/openmultiplayer/open.mp/releases). Asegúrate de seleccionar la versión **win-x86**.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Instalación

Cuando tengas el archivo descargado, descomprime su contenido con una herramienta como 7zip o WinRAR. Esto generará una carpeta llamada **Server** que contiene todos los archivos necesarios del servidor.

Para arrancar el servidor, simplemente ejecuta **omp-server.exe** y el servidor comenzará a iniciarse. Sin embargo, te recomendamos configurar primero el reenvío de puertos y otros ajustes.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Reenvío de puertos en tu servidor

Para que tu servidor sea accesible públicamente, debes modificar las reglas de reenvío de puertos para los puertos que usa el proceso del servidor dedicado. Puedes hacerlo directamente con comandos de PowerShell, que es más fácil, o desde la página del Firewall de Windows Defender.

:::tip
Al iniciar el servidor por primera vez, debería aparecer un aviso de Control de Cuentas de Usuario (UAC). Si lo aceptas, las reglas del firewall se configurarán automáticamente y podrás seguir con la siguiente sección. Si no, sigue uno de los métodos que te mostramos abajo.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Vía PowerShell" default>

Abre el buscador de Windows y busca **PowerShell**. Haz clic derecho y selecciona **Ejecutar como Administrador** para que tengas los permisos necesarios y todo funcione bien.

:::info
Asegúrate de ejecutar PowerShell en modo Administrador, si no, los ajustes podrían no aplicarse correctamente.
:::

Luego, copia y pega estos comandos en la consola de PowerShell:
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

Estos comandos crearán automáticamente las reglas de firewall necesarias para que tu servidor open.mp sea accesible desde fuera.

</TabItem>

<TabItem value="windefender" label="Vía Windows Defender">

Usa la búsqueda de Windows para abrir **Configuración del Firewall de Windows con Seguridad Avanzada**. Puede que tengas que hacer clic en **Configuración avanzada** para abrir la ventana correcta si entraste primero en la página básica del firewall.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Debes crear nuevas reglas para tu servidor open.mp. Para ello, crea reglas entrantes y salientes para los siguientes protocolos y puertos:
- TCP entrante y saliente: 7777
- UDP entrante y saliente: 7777

Si necesitas más ayuda, consulta nuestra [Guía de Reenvío de Puertos (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Una vez añadidas estas reglas, tu servidor será accesible y podrás conectarte a él usando la dirección IP de tu servidor.

Te recomendamos configurar primero los ajustes del servidor en la siguiente sección antes de conectarte.

## Configuración

A estas alturas, ya tienes el servidor open.mp instalado. Puedes hacer más configuraciones a través de un archivo de configuración.

Ve a la carpeta raíz. Busca y abre el archivo **config.json**. En este archivo puedes ajustar un montón de parámetros del servidor, desde el puerto, la contraseña y mucho más.

Por ejemplo, aquí tienes algunas opciones configuradas:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

Consulta nuestra [Guía de Configuración del Servidor](openmp-configuration.md) para ver todas las opciones disponibles y qué hace cada una.

## Arrancar y conectarte a tu servidor

Ahora toca arrancar el servidor. Ve a la carpeta raíz y ejecuta **omp-server.exe** para iniciar el proceso. Esto abrirá la consola del servidor en una ventana de comandos y comenzará el arranque.

Ya podrás conectarte directamente a tu servidor desde el juego usando el launcher de open.mp. Si quieres que el servidor aparezca en la lista pública con info visible, revisa nuestra [Guía de Configuración del Servidor](openmp-configuration.md) y asegúrate de que el parámetro `enable_query` esté en true (debería estarlo por defecto). Guarda el archivo y vuelve a ejecutar el servidor.

## Conclusión

¡Felicidades! Has instalado y configurado con éxito el servidor open.mp en tu VPS. Si tienes más preguntas o problemas, contacta con nuestro equipo de soporte, ¡están disponibles todos los días para ayudarte!

<InlineVoucher />