---
id: dedicated-windows-installmysql
title: "Configura MySQL en un Servidor Windows - Despliega y Gestiona Bases de Datos Confiables"
description: "Aprende a configurar y asegurar tu propio servidor de bases de datos MySQL en un Servidor Dedicado Windows para una gestión de datos confiable → Aprende más ahora"
sidebar_label: Instalar MySQL
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Un servidor MySQL es necesario para varias aplicaciones y puede contener datos importantes, por ejemplo, para un servidor de juegos o un sitio web. A continuación te explicamos cómo configurar tu propio servidor de bases de datos MySQL en tu Servidor Dedicado Windows.



## Instalación

Al principio te conectas vía escritorio remoto a tu servidor y descargas la última versión de MariaDB, que se usa para el servidor de bases de datos: [Descarga MariaDB](https://mariadb.org/download/?t=mariadb). 

Descomprime el archivo descargado con WinRAR o 7Zip y ejecuta el archivo de instalación con doble clic: 

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

Después navega por el proceso de instalación haciendo clic en **Next** hasta que te pidan ingresar la contraseña root:

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

Ahí puedes definir la contraseña maestra para el acceso a tu servidor de bases de datos. ¡Asegúrate de usar una contraseña segura que nadie más conozca!

:::info
¡IMPORTANTE! Si quieres acceder a la base de datos externamente vía Navicat, HeidiSQL u otra herramienta, debes activar la opción **Enable access from remote machines for root user** (Habilitar acceso remoto para el usuario root). Por razones de seguridad, generalmente no se recomienda.
:::

Luego haces clic en **Next** hasta llegar al final de la instalación, donde debes hacer clic en **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

¡Tu servidor de bases de datos ya está en línea y listo para usar!

## Configuración del acceso externo

Si activaste "Enable access from remote machines for root user" durante la instalación, también debes especificar el puerto MySQL **3306** en el 
firewall de Windows. Para ello, ábrelo y crea una nueva regla.
Aquí tienes la guía para cómo abrir puertos en el firewall:
[Redirección de Puertos (Firewall)](vserver-windows-port.md)

¡Ahora puedes acceder a tu servidor MySQL desde fuera!



## Conclusión

¡Felicidades, has instalado con éxito el servidor MySQL! Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte 🙂


