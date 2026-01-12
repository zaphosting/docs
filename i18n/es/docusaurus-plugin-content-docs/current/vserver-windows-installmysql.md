---
id: vserver-windows-installmysql
title: "VPS: Instalación de MySQL"
description: "Descubre cómo configurar y asegurar tu propio servidor de base de datos MySQL en un VPS Windows para una gestión de datos confiable → Aprende más ahora"
sidebar_label: Instalar MySQL
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introducción

Se necesita un servidor MySQL para varias aplicaciones y puede contener datos importantes, por ejemplo, para un servidor de juegos o un sitio web. A continuación te explicamos cómo configurar tu propio servidor de base de datos MySQL en tu VPS Windows.
<InlineVoucher />

## Instalación

Al principio, te conectas vía escritorio remoto a tu servidor y descargas la última versión de MariaDB, que se usa para el servidor de base de datos: [Descarga MariaDB](https://mariadb.org/download/?t=mariadb). Descomprime el archivo descargado con WinRAR o 7Zip y ejecuta el archivo de instalación con doble clic.

Después, avanza en el proceso de instalación haciendo clic en **Next** hasta que te pidan ingresar la contraseña root:

![](https://screensaver01.zap-hosting.com/index.php/s/gMrr8aHEM2eAG22/preview)

Ahí puedes definir la contraseña maestra para el acceso a tu servidor de base de datos. ¡Asegúrate de usar una contraseña segura que nadie más conozca!

:::info
¡IMPORTANTE! Si quieres acceder a la base de datos externamente vía Navicat, HeidiSQL u otra herramienta, debes activar la opción **Enable access from remote machines for root user**. Por razones de seguridad, generalmente no se recomienda.
:::

Luego haces clic en **Next** hasta llegar al final de la instalación, donde debes hacer clic en **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/qYT3rrDrcXRb4gc/preview)

¡Tu servidor de base de datos ya está en línea y listo para usar!

## Configuración del acceso externo

Si activaste "Enable access from remote machines for root user" durante la instalación, también debes permitir el puerto MySQL **3306** en el firewall de Windows. Para ello, ábrelo y crea una nueva regla.

Aquí tienes la guía para abrir puertos en el firewall:
[Redirección de puertos (Firewall)](vserver-windows-port.md)

¡Ahora puedes acceder a tu servidor MySQL desde fuera!



## Conclusión

¡Felicidades, has instalado y configurado con éxito el servidor MySQL en tu VPS! Si tienes más preguntas o problemas, contacta a nuestro equipo de soporte, que está disponible para ayudarte todos los días.

<InlineVoucher />