---
id: arma3-altislife-ranks
title: "Arma 3: Añadir rangos a un servidor Altis Life"
description: "Aprende a asignar y gestionar rangos de jugador como Policía, Médico y Admin en Arma 3 para mejorar la jugabilidad y los roles en el servidor → Aprende más ahora"
sidebar_label: Rangos Altis Life
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En Arma 3 existen diferentes rangos que se pueden asignar a un jugador. Estos incluyen Policía, Médico y los distintos rangos de Admin.  
Dependiendo del servidor, puede haber otros rangos si, por ejemplo, se añade una nueva facción o profesión.  
A continuación aprenderás cómo asignar los rangos para Policías, Médicos y Administradores en el juego, siempre usando la base de datos dentro de la tabla **players**.

:::info
IMPORTANTE: ¡Para encontrar el nombre del jugador en la base de datos tienes que conectarte al servidor al menos una vez!
:::

<InlineVoucher />

## Abrir la base de datos

Primero tienes que navegar a tu base de datos, a la que puedes acceder desde el menú de la izquierda bajo **Herramientas** > **Bases de datos**:

![](https://screensaver01.zap-hosting.com/index.php/s/Y8mZZ7JCNqr9zZM/preview)

El acceso a la base de datos se realiza a través de este icono azul, a la izquierda también encontrarás los datos de acceso (usuario y contraseña) para tu base de datos:

![](https://screensaver01.zap-hosting.com/index.php/s/3tta9MQ5XcdZk98/preview)

Después de hacer clic en este botón, estarás en phpMyAdmin, la interfaz de administración de tu base de datos.  
Ahí eliges el nombre de tu base de datos en el lado izquierdo:

![](https://screensaver01.zap-hosting.com/index.php/s/YfTpyoXmArbtBwb/preview)

Luego seleccionas la tabla **players** con un clic izquierdo, donde podrás asignar los rangos:

![](https://screensaver01.zap-hosting.com/index.php/s/A643Ds2LFjFCzba/preview)

Busca el nombre del jugador al que quieres asignar un rango y haz clic en **Editar**:

![](https://screensaver01.zap-hosting.com/index.php/s/KrnpZMyeiL8YXAm/preview)

## Asignar rangos para Policías y Médicos

Los campos para el nivel de Policía y Médico los encontrarás justo al principio de la lista:

![](https://screensaver01.zap-hosting.com/index.php/s/z5KoxwqHf7XMcFd/preview)

Ahí puedes seleccionar fácilmente el nivel de rango mediante el menú desplegable, están disponibles niveles del 1 al 7 para policías y del 1 al 5 para médicos.  
Cuanto más alto sea el nivel, más permisos tiene el Policía o Médico en el juego, lo que influye, entre otras cosas, en las armas y vehículos disponibles.

![](https://screensaver01.zap-hosting.com/index.php/s/bKr4MHNy5LYnWYr/preview)

## Asignar rangos para administradores (nivel admin)

El nivel de admin se configura igual que antes, solo que la entrada está más abajo:

![](https://screensaver01.zap-hosting.com/index.php/s/fc5G93bWkdW7nAj/preview)

También puedes elegir entre 5 niveles diferentes en el desplegable. Cuanto más alto sea el nivel, más derechos tiene el administrador en el juego.

Para guardar los cambios, simplemente haz clic en el botón **GO** en la esquina inferior derecha:

![](https://screensaver01.zap-hosting.com/index.php/s/y85Zwq3J8zM9sFi/preview)

Los rangos ya están guardados y activos para el jugador, que solo tiene que reconectarse al servidor una vez; no es necesario reiniciar el servidor.

<InlineVoucher />