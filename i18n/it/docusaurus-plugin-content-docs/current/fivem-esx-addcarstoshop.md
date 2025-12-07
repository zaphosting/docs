---
id: fivem-esx-addcarstoshop
title: "FiveM: Añadir coches a la tienda"
description: "Descubre cómo gestionar y añadir vehículos a tu base de datos para una experiencia personalizada en la tienda de coches → Aprende más ahora"
sidebar_label: Añadir coches al concesionario
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Acceso a la base de datos

Primero tenemos que conectarnos a nuestra base de datos. Lo hacemos en la pestaña "Bases de datos"

![](https://screensaver01.zap-hosting.com/index.php/s/8NYJC6Qq5inG5yk/preview)

Ahí hacemos clic en el icono azul e iniciamos sesión con nuestros datos, que también encontramos en la página.

![](https://screensaver01.zap-hosting.com/index.php/s/XK5CLoeckxxHk8w/preview)

## Encontrar nombres de spawn

Luego tenemos que averiguar el nombre de spawn del coche. Podemos hacerlo probando directamente o navegando por esta página:
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## Añadir nuevo vehículo

Una vez que hayamos elegido un coche, podemos añadirlo a la lista.

:::info
Por defecto ya hay muchos coches en la tienda. Comprueba si tu coche ya está listado.
:::

Primero revisamos las categorías de coches para saber cuáles podemos añadir.
Lo hacemos en la tabla "vehicle_categories"

![](https://screensaver01.zap-hosting.com/index.php/s/PYSt6anrdXs8QLY/preview)

Aquí necesitamos la columna "name". La recordaremos.


![](https://screensaver01.zap-hosting.com/index.php/s/CnrQJcGbf3SPdtg/preview)

Después vamos a la tabla "vehicles".
Y luego a Insertar


![](https://screensaver01.zap-hosting.com/index.php/s/eN5x9o724a6tKwf/preview)

Ahora añadimos un nuevo vehículo. Una breve explicación de qué significa cada campo:

**name** El nombre que se muestra en la tienda  
**model** Nombre de spawn (asegúrate de que esté en minúsculas)  
**price** Precio del vehículo  
**category** Categoría que acabamos de elegir

Aquí os dejo un pequeño ejemplo:


![](https://screensaver01.zap-hosting.com/index.php/s/cFrrLYKTALmCnFP/preview)

<InlineVoucher />