---
id: vserver-windows-plesk
title: "Configura Plesk en un Servidor Windows - Gestiona Sitios Web con un Panel de Control Potente"
description: "Descubre cómo gestionar sitios web y servidores de forma eficiente con la plataforma versátil de Plesk, ideal para principiantes y expertos → Aprende más ahora"
sidebar_label: Instalar Plesk
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Plesk es una plataforma completa para el hosting web y la gestión de servidores que permite a los usuarios administrar sitios web, servidores, cuentas de correo y más a través de una interfaz fácil de usar. Es una solución versátil, perfecta tanto para principiantes como para desarrolladores web y administradores de sistemas con experiencia.  
<InlineVoucher />


## Establece conexión con el servidor

Para instalar Plesk en el servidor, primero necesitas conectarte a él. Cómo hacerlo se explica en detalle en nuestra guía aparte: [Acceso Inicial (RDP)](vserver-windows-userdp.md)

## Instalador de Plesk

A continuación, necesitas el instalador de Plesk, que es necesario para la instalación. Puedes descargarlo haciendo clic en [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe)

Este instalador se guarda en una carpeta, en nuestro ejemplo usamos una carpeta llamada "Plesk" creada en el escritorio. La ruta a este archivo será importante para los siguientes pasos.

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### Abre el Símbolo del sistema

Ahora debes abrir la consola CMD para la instalación.  
Esto se hace con la combinación de teclas [Windows] + [R] o buscando "command" en la consola de Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### Instalación de Plesk

En esta consola CMD tienes que navegar hasta el directorio donde guardaste el instalador de Plesk. En nuestro ejemplo, fue la carpeta "Plesk" en el "Escritorio".

Se accede a este directorio con el comando "*cd*" en CMD.

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

Ya en el directorio correcto, el último paso es ejecutar el comando del instalador. Esto ejecutará plesk-installer.exe y la última versión de Plesk se instalará automáticamente.

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

Comando: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
El proceso de instalación puede tardar entre 30 y 60 minutos, tras lo cual Plesk estará instalado y listo para usar.
:::


## Conclusión

¡Felicidades, has instalado y configurado Plesk con éxito en tu VPS/servidor dedicado! Si tienes alguna duda o problema, contacta con nuestro equipo de soporte, que está disponible para ayudarte todos los días.

<InlineVoucher />