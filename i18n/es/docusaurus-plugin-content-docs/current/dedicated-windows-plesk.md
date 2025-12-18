---
id: dedicated-windows-plesk
title: "Servidor Dedicado: Instalación de Plesk"
description: "Descubre cómo gestionar de forma eficiente sitios web y servidores con Plesk, tanto para principiantes como para expertos → Aprende más ahora"
sidebar_label: Instalar Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Plesk es una plataforma completa para el hosting web y la gestión de servidores que permite a los usuarios administrar sitios web, servidores, cuentas de correo y más a través de una interfaz fácil de usar. Es una solución versátil, ideal tanto para principiantes como para desarrolladores web y administradores de sistemas con experiencia.

## Establecer conexión con el servidor

Para instalar Plesk en el servidor, primero necesitas conectarte a él. Cómo hacerlo se explica en detalle en nuestras instrucciones separadas: [Acceso Inicial (RDP)](vserver-windows-userdp.md)

## Instalador de Plesk

A continuación, necesitas el Instalador de Plesk, que es necesario para la instalación. Puedes descargarlo haciendo clic en [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

Este instalador se guarda en una carpeta; en nuestro ejemplo usamos una carpeta llamada "Plesk" creada en el escritorio. La ruta a este archivo será importante para los siguientes pasos.

![](https://screensaver01.zap-hosting.com/index.php/s/qpQK28F3oPezWR8/preview)

### Abrir Símbolo del sistema

Ahora debes abrir la consola CMD para la instalación.  
Esto se hace con la combinación de teclas [Windows] + [R] o buscando "command" en la consola de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCiRtYrFK43Xbn/preview)

### Instalación de Plesk

En esta consola CMD tienes que navegar hasta el directorio donde guardaste el instalador de Plesk. En nuestro ejemplo, fue la carpeta "Plesk" en el "Escritorio".

Se accede a este directorio con el comando "*cd*" en CMD.

![](https://screensaver01.zap-hosting.com/index.php/s/sCCpiogDGsrGN9F/preview)

Ya en el directorio correcto, el último paso es ejecutar el comando del instalador. Esto ejecutará plesk-installer.exe y la última versión de Plesk se instalará automáticamente.

![](https://screensaver01.zap-hosting.com/index.php/s/TKrkZagQr4CC7Hr/preview)

Comando: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
El proceso de instalación puede tardar entre 30 y 60 minutos, tras lo cual Plesk estará instalado y listo para usar.
:::

## Conclusión

¡Felicidades, has instalado Plesk con éxito! Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, disponible todos los días para asistirte 🙂