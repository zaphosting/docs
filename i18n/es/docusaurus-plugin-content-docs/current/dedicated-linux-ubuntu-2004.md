---
id: dedicated-linux-ubuntu-2004
title: "Servidor dedicado: Instalación de Ubuntu 20.04"
description: "Descubre cómo instalar y configurar Ubuntu en tu servidor dedicado para un rendimiento óptimo y soporte a largo plazo → Aprende más ahora"
sidebar_label: Ubuntu 20.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

A continuación te explicamos paso a paso cómo instalar y configurar el sistema operativo Ubuntu en tu servidor dedicado. Sigue estas instrucciones con cuidado para asegurarte de que configuras el sistema operativo correctamente y lo aprovechas al máximo.



:::warning Versión más reciente disponible / detalles EOL

La última versión de Ubuntu es la [24.04](dedicated-linux-ubuntu.md). Recomendamos usar la versión más reciente para proyectos a largo plazo.

El soporte para versiones antiguas de Ubuntu se descontinuará tarde o temprano. Las fechas límite para la versión 20.04 son:

- Fin del soporte estándar: 01.05.2025
- Fin del soporte Ubuntu Pro: 01.04.2030
- Fin del soporte Legacy: 01.04.2032

Más información en la [web oficial](https://ubuntu.com/about/release-cycle).
:::


<InlineVoucher />

## Preparación

Para la instalación y configuración de un sistema operativo, es importante montar inicialmente el ISO correspondiente. Hay varias formas posibles de montarlo:

1. Montaje vía configuración inicial
2. Montaje vía iLO (Medios Virtuales)
3. Montaje vía iLO (Consola Remota)

Si aún no estás familiarizado con montar un archivo ISO, lo mejor es consultar nuestra [Configuración inicial](dedicated-setup.md) o la [Guía de ISO propia](dedicated-iso.md).



## Instalación

Una vez que el ISO se haya montado y cargado correctamente, el servidor debería iniciar el proceso de configuración. Al principio se define el idioma que quieres usar para tu sistema operativo. Selecciona uno de los idiomas disponibles y confirma con la tecla `Enter`. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

A continuación, debes seleccionar y configurar la distribución del teclado para el idioma elegido. Escoge la distribución que más te convenga. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Después viene la configuración de red. Por defecto, el servidor se configura vía DHCP. El adaptador de red predeterminado es `eno1`. Confirma los ajustes por defecto y continúa. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Opcionalmente, puedes configurar un proxy adicional. Esto no es obligatorio, así que si no lo necesitas, simplemente salta este paso. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Ahora se define el espejo del archivo de Ubuntu (servidor de descarga para paquetes). Nuestros servidores dedicados están en Alemania, por lo que recomendamos elegir el espejo alemán para obtener la mejor velocidad de descarga posible.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

En la configuración de almacenamiento puedes definir las particiones. Puedes usar una partición grande o subdividirla si quieres. Si prefieres usar todo el SSD como una sola partición, simplemente selecciona `Usar un disco entero` y continúa.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

El sistema crea automáticamente los volúmenes y puedes continuar eligiendo la opción `Hecho`.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Antes de iniciar el proceso, se te informará que se borrarán todos los datos existentes. Debes confirmar este mensaje con la opción `Continuar`. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Configura tu cuenta de usuario a tu gusto; también puedes usar la cuenta root al final cambiando la contraseña.
Puedes navegar por las opciones con tab o las flechas. Cuando termines, marca `Hecho`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)

La instalación del setup SSH es recomendable. Si quieres gestionar el servidor vía SSH, selecciona la opción para instalarlo y confirma.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu ofrece algunos snaps por defecto; si quieres usar alguno, márcalos.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Para completar el proceso, el ISO debe ser expulsado para evitar que se recargue al reiniciar el servidor. Reinicia el servidor una vez para finalizar.

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Configuración



### Cambiar la contraseña del usuario root

Puedes cambiar fácilmente la contraseña del usuario root. Ejecuta `sudo su` e ingresa tu contraseña. Luego ejecuta `sudo passwd` para cambiar la contraseña. Ahora introduce la nueva contraseña deseada para root. ¡Listo! Ya puedes iniciar sesión con el usuario `root`.



## Conclusión

¡Felicidades! Has instalado con éxito Ubuntu 20.04 en tu servidor dedicado. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, disponible todos los días para echarte una mano 🙂






<InlineVoucher />