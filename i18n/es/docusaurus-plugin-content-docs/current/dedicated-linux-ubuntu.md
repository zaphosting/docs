---
id: dedicated-linux-ubuntu
title: "Servidor dedicado: Instalación de Ubuntu 24.04"
description: "Aprende cómo instalar y configurar Ubuntu en tu servidor dedicado para un rendimiento y fiabilidad óptimos → Descubre más ahora"
sidebar_label: Ubuntu 24.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

A continuación te explicamos paso a paso cómo instalar y configurar el sistema operativo Ubuntu en tu servidor dedicado. Sigue estas instrucciones con atención para asegurarte de que configuras el sistema operativo correctamente y lo aprovechas al máximo.

<InlineVoucher />

## Preparación

Para la instalación y configuración de un sistema operativo, es importante montar inicialmente el ISO correspondiente del sistema operativo. Hay varias formas posibles de montarlo:

1. Montaje vía la configuración inicial
2. Montaje vía iLO (Medios Virtuales)
3. Montaje vía iLO (Consola Remota)

Si aún no estás familiarizado con cómo montar un archivo ISO, lo mejor es que consultes nuestra [guía de Configuración inicial](dedicated-setup.md) o la [guía de ISO propia](dedicated-iso.md).

## Instalación

Una vez que el ISO se haya montado y cargado correctamente, el servidor debería estar en el proceso de configuración. Al inicio del setup se define el idioma que quieres usar para tu sistema operativo. Selecciona uno de los idiomas disponibles y confirma la selección con la tecla `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

A continuación, debes seleccionar y configurar la distribución del teclado adecuada para el idioma. Elige aquí también la distribución de teclado que te convenga.

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Después sigue la configuración de red. Por defecto, el servidor se configura vía DHCP. El adaptador de red predeterminado es `eno1`. Confirma los ajustes por defecto y continúa.

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Opcionalmente, se puede configurar un proxy adicional. Sin embargo, esto no es imprescindible. Si no lo necesitas, simplemente salta este paso.

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Ahora se define el espejo del archivo de Ubuntu (servidor de descarga para paquetes). Nuestros servidores dedicados están ubicados en Alemania, por lo que se recomienda elegir el espejo alemán para conseguir la mejor velocidad de descarga posible.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

En la configuración de almacenamiento ahora puedes definir las particiones. Puedes usar una partición grande o subdividirla si lo deseas. Si quieres usar todo el SSD como una sola partición, simplemente selecciona `Usar un disco entero` y continúa.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

El setup crea automáticamente los volúmenes y puedes continuar eligiendo la opción `Hecho`.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Antes de iniciar el proceso, se te informará que este proceso borrará todos los datos existentes. Este mensaje debe ser confirmado con la opción `Continuar`.

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Configura tu cuenta de usuario a tu gusto, también puedes usar la cuenta root al final cambiando la contraseña. Puedes navegar por las opciones con tab o las flechas. Cuando termines, continúa marcando `Hecho`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)

Se recomienda instalar la configuración SSH. Si quieres gestionar el servidor vía SSH, selecciona la opción para instalarlo y confirma el proceso.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu ofrece algunos snaps por defecto, si quieres usar algunos, simplemente marca los que te gusten.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Para completar el proceso, el ISO debe ser expulsado para evitar que se recargue al reiniciar el servidor. Reinicia el servidor una vez para finalizar el proceso.

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)

## Configuración

### Cambiar la contraseña del usuario root

Puedes cambiar fácilmente la contraseña del usuario root. Ejecuta `sudo su` e ingresa tu contraseña. Después ejecuta `sudo passwd` para cambiar la contraseña. Ahora introduce la nueva contraseña deseada para el usuario root. Listo, ya puedes iniciar sesión con el usuario `root`.

## Conclusión

¡Felicidades, has instalado con éxito el sistema operativo Ubuntu 24.04 en tu servidor dedicado! Para cualquier pregunta o ayuda, no dudes en contactar con nuestro equipo de soporte, que está disponible todos los días para ayudarte 🙂.

<InlineVoucher />