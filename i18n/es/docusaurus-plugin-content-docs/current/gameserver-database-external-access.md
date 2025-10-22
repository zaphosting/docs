---
id: gameserver-database-external-access
title: 'Servidor de juegos: Acceso externo a la base de datos'
description: "Descubre cómo gestionar las bases de datos MySQL de ZAP-Hosting para servidores de juegos usando herramientas como Navicat o HeidiSQL → Aprende más ahora"
sidebar_label: Acceso externo a la base de datos
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

ZAP-Hosting ofrece bases de datos MySQL incluidas para los productos de servidor de juegos. Estas pueden gestionarse internamente vía phpMyAdmin o externamente mediante herramientas de administración MySQL como Navicat o HeidiSQL.

Para ello, se requieren las credenciales de usuario para acceder a la base de datos. Estas se encuentran en la administración del servidor de juegos bajo bases de datos. Necesitarás la información sobre **servidor/IP**, **base de datos**, **usuario**, **contraseña** y el puerto por defecto **3306**:

![](https://screensaver01.zap-hosting.com/index.php/s/GLG56HQ737rNC7R/preview)

<InlineVoucher />

## Preparación

Primero necesitamos un software, en este ejemplo mostramos [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) o [HeidiSQL](https://www.heidisql.com/download.php). Luego, el archivo descargado debe ejecutarse y seguir el proceso de instalación. Cuando este paso esté completado, se puede iniciar el programa y configurar la conexión a la base de datos.

## HeidiSQL

Para establecer la conexión en HeidiSQL, creamos una nueva conexión con "New".

![](https://screensaver01.zap-hosting.com/index.php/s/CgwFCeHErLAokHo/preview)

En Hostname / IP, ingresamos el nombre de tu base de datos, en nuestro ejemplo "mysql-mariadb-5-101.zap-hosting.com". El nombre de usuario y la contraseña también se toman de los datos, el puerto queda en 3306.

Después solo hacemos clic en "Open".

## Navicat

Para establecer la conexión en Navicat creamos una nueva conexión. Bajo **Connection** seleccionamos **MySQL**. Luego se abre otra ventana emergente donde se deben insertar los datos de la base de datos.

![](https://screensaver01.zap-hosting.com/index.php/s/rFBDYidqnBc4TZB/preview)

El **Connection Name** es solo para tener una vista general de las bases de datos y puede elegirse libremente. Toda la demás información se toma de la interfaz como se describió arriba. Luego hacemos clic en **OK** y la configuración termina. La conexión se puede establecer luego en la vista general de bases de datos a la izquierda. Para ello, haz doble clic en tu base de datos o clic derecho y elige "Open connection":

![](https://screensaver01.zap-hosting.com/index.php/s/Gy7jjBDHiR5n5gn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WyqzoLaEP6yQn85/preview)

Después se abre la base de datos con todas las tablas existentes. Ahí puedes modificar o gestionar tu base de datos de forma similar a phpMyAdmin, tanto con clics como usando comandos SQL.

![](https://screensaver01.zap-hosting.com/index.php/s/FxDrm2K3f7YwLqS/preview)

## Conclusión

Has establecido con éxito una conexión a tu base de datos y ahora puedes gestionarla. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂 

<InlineVoucher />