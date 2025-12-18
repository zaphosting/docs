---
id: gameserver-databases-pma
title: 'Servidor de juegos: acceso a PHPMyAdmin'
description: "Descubre cómo gestionar bases de datos MySQL de forma eficiente con phpMyAdmin en servidores de juegos de ZAP-Hosting para un control de bases de datos sin complicaciones → Aprende más ahora"
sidebar_label: PHPMyAdmin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Con phpMyAdmin, las bases de datos MySQL se pueden gestionar rápida y fácilmente a través de una interfaz web. ZAP-Hosting ofrece bases de datos MySQL incluidas con los productos de servidor de juegos. Estas pueden ser gestionadas tanto con phpMyAdmin como con programas externos de administración MySQL como Navicat o HeidiSQL. También ofrecemos una guía para esto que puedes encontrar en [Acceso externo a bases de datos](gameserver-database-external-access.md).

<InlineVoucher />

## Acceso a phpMyAdmin

Primero vamos a la lista de bases de datos creadas para el servidor de juegos. Para ello, abrimos el menú "Bases de datos" en la barra lateral izquierda del servidor bajo la pestaña "Herramientas".

![](https://screensaver01.zap-hosting.com/index.php/s/ay9X6jBsCRWYdDB/preview)

En esta página se listan todas las bases de datos para este servidor. El acceso a phpMyAdmin es muy sencillo porque el inicio de sesión se realiza automáticamente por nuestro sistema. Solo tienes que hacer clic en el botón azul "Gestionar".

:::info
Si el acceso no funciona automáticamente, entonces el inicio de sesión debe hacerse manualmente con las credenciales correspondientes. La información para esto se puede encontrar en el área marcada en rojo en este ejemplo.
:::


## Herramientas de tablas

Al principio solo se muestra la página de inicio de phpMyAdmin. Para ver y editar las tablas de la base de datos respectiva, primero hay que abrir la base de datos:

![](https://screensaver01.zap-hosting.com/index.php/s/DFTDGKm47ngaB9R/preview)

Ahora se listan todas las tablas de la base de datos y algunas herramientas con las que puedes realizar ciertas acciones, por ejemplo, las tablas se pueden eliminar haciendo clic en el botón rojo "Eliminar".

![](https://screensaver01.zap-hosting.com/index.php/s/dkPqEj5xgQoHgHD/preview)

Para ahorrar tiempo, se pueden realizar acciones en varias tablas al mismo tiempo. Para ello, haz clic una vez en la casilla de selección en el extremo izquierdo y repite hasta seleccionar todas las tablas deseadas. Si la acción debe aplicarse a todas las tablas de la base de datos, también puedes usar el botón "Seleccionar todo", que selecciona automáticamente cada tabla. Después, la acción deseada se puede elegir en el menú desplegable y ejecutar haciendo clic en "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/Qip8TDLbeezT67F/preview)


## Modificar contenido de tablas

Los valores en una tabla se pueden editar rápida y fácilmente haciendo doble clic en el campo correspondiente. Sin embargo, debe asegurarse que la tabla esté configurada para permitir la edición. Esto se reconoce por los tres botones de acción que se muestran en este caso.

![](https://screensaver01.zap-hosting.com/index.php/s/H7twJagPyR7L66w/preview)


## Ejecutar comandos SQL

Con phpMyAdmin también es posible ejecutar comandos SQL normales. Para ello, primero hay que seleccionar la base de datos y luego llamar la opción de menú "SQL" en la parte superior de la barra de menú.

Una vez en el prompt de comandos, puedes ingresar todos los comandos SQL que desees, los cuales se ejecutan haciendo clic en "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/jJcmLGcXAfxQgkH/preview)

<InlineVoucher />