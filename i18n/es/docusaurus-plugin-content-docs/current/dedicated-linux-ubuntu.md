---
id: dedicated-linux-ubuntu
title: "Servidor Dedicado: Instalación de Ubuntu 24.04"
description: "Aprende cómo instalar y configurar Ubuntu en tu servidor dedicado para un rendimiento y fiabilidad óptimos → Aprende más ahora"
sidebar_label: Ubuntu 24.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

A continuación te explicamos paso a paso cómo instalar y configurar el sistema operativo Ubuntu en tu servidor dedicado. Sigue estas instrucciones con cuidado para asegurarte de configurar el sistema operativo correctamente y sacarle el máximo provecho.



## Preparación

Para la instalación y configuración de un sistema operativo, inicialmente es importante montar el ISO correspondiente del sistema operativo. Hay varias formas posibles de montarlo:

1. Montaje vía la configuración inicial
2. Montaje vía iLO (Medios Virtuales)
3. Montaje vía iLO (Consola Remota)

Si aún no estás familiarizado con cómo montar un archivo ISO, lo mejor es que consultes nuestra [guía de Configuración inicial](dedicated-setup.md) o la [guía de ISO propia](dedicated-iso.md).



## Instalación

Una vez que el ISO se haya montado y cargado correctamente, el servidor debería estar en el proceso de configuración. El idioma que quieres usar para tu sistema operativo se define al inicio de la configuración. Selecciona uno de los idiomas disponibles y confirma la selección con la tecla `Enter`. 

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

A continuación, debes seleccionar y configurar el diseño del teclado adecuado para el idioma. Elige aquí también el diseño de teclado que más te convenga. 

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

Después de esto, se realiza la configuración de red. Por defecto, el servidor se configura vía DHCP. El adaptador de red predeterminado es `eno1`. Confirma los ajustes por defecto y continúa. 

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

Opcionalmente, se puede configurar un proxy adicional. Sin embargo, esto no es esencial. Si no lo necesitas, simplemente salta este paso. 

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

Ahora se define el espejo del archivo de Ubuntu (servidor de descarga para paquetes). Nuestros servidores dedicados están ubicados en Alemania, por lo que se recomienda elegir el espejo alemán para conseguir la mejor velocidad de descarga posible.

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

Ahora puedes definir las particiones en la configuración de almacenamiento. Puedes usar una partición grande o subdividirla si lo necesitas. Si quieres usar todo el SSD como una sola partición, simplemente selecciona `Usar un disco entero` y continúa.

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

La configuración crea automáticamente los volúmenes y puedes continuar eligiendo la opción `Hecho`.

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

Antes de iniciar el proceso, se te informará que este proceso borrará todos los datos existentes. Este mensaje debe ser confirmado con la opción `Continuar`. 

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

Configura tu cuenta de usuario a tu gusto, también puedes usar la cuenta root al final cambiando la contraseña.
Puedes navegar por las opciones con tab o las flechas. Cuando termines, continúa marcando `Hecho`.

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)

La instalación del setup SSH es recomendada. Si quieres gestionar el servidor vía SSH, selecciona la opción para instalarlo y confirma el proceso.

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu ofrece algunos snaps por defecto, si quieres usar algunos, simplemente marca los que te gusten.

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

Para completar el proceso, el ISO debe ser expulsado para evitar que se recargue al reiniciar el servidor. Reinicia el servidor una vez para finalizar el proceso. 

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## Configuración



### Cambiar la contraseña del usuario root

Puedes cambiar fácilmente la contraseña del usuario root. Ejecuta `sudo su` e ingresa tu contraseña. Después ejecuta `sudo passwd` para cambiar la contraseña. Ahora introduce la nueva contraseña deseada para el usuario root. Listo, ya puedes iniciar sesión con tu cuenta `root`.



## Conclusión

¡Felicidades, has instalado con éxito el sistema operativo Ubuntu 24.04 en tu servidor dedicado! Para cualquier pregunta o ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para asistirte 🙂



