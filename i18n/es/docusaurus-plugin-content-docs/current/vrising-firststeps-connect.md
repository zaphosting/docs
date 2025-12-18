---
id: vrising-firststeps-connect
title: "V Rising: Conéctate a tu servidor de V Rising"
description: "Descubre cómo conectarte a tu servidor de V Rising directamente o a través de la lista de servidores para una configuración de juego sin complicaciones → Aprende más ahora"
sidebar_label: Conectar al Servidor
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En esta guía, exploraremos cómo conectarte a tu servidor de V Rising. Hay dos métodos para conectarse: directamente a través de la dirección IP de tu servidor o mediante la lista de servidores. Recomendamos configurar el servidor a tu gusto antes de jugar, aprende más sobre esto en nuestra [Guía de Configuración del Servidor](vrising-configuration.md).

<InlineVoucher />

## Conexión Directa vía IP

### Obtener la IP del Servidor

Primero, necesitas conocer la IP y el puerto de tu servidor de V Rising para poder conectarte directamente. Simplemente entra a tu [panel web de ZAP-Hosting](https://zap-hosting.com/en/customer/) en el sitio y ten a mano la IP completa y el puerto.

![](https://screensaver01.zap-hosting.com/index.php/s/4L86LFeqL8o96kn/preview)

Si estás ejecutando tu servidor de V Rising en un servidor dedicado externo, la IP será la de la máquina anfitriona y el puerto será el que hayas configurado en tu archivo de configuración (por defecto es 9876). Consulta nuestra [Guía de Configuración del Servidor](vrising-configuration.md) para más info sobre el puerto.

### Conectarse desde el juego

Comienza lanzando V Rising desde tu lanzador de juegos. En el menú principal, selecciona **Jugar**, seguido de la opción **Juego en línea**.

![](https://screensaver01.zap-hosting.com/index.php/s/cJcnRAX2Wj7sogx/preview)

Selecciona el modo de juego que vas a jugar, o simplemente pulsa **Mostrar todos los servidores** en la esquina inferior derecha para ir directo al navegador de servidores.

Ahora presiona el botón **Conexión directa** en la parte inferior e ingresa tu IP seguida del puerto, por ejemplo: `123.456.679.123:9876`. Si hay una contraseña, el juego te pedirá que la ingreses después de conectarte.

![](https://screensaver01.zap-hosting.com/index.php/s/tfroQDEgmr3p2D8/preview)

Si no puedes unirte al servidor y recibes un error de tiempo de espera, asegúrate de que la IP y el puerto ingresados sean correctos y que tu servidor esté en línea. Puedes usar la sección de consola de tu panel web para tu servidor de V Rising para ayudarte a depurar.

## Conexión vía Lista de Servidores

La opción más fácil para conectarte a tu servidor es a través de la lista de servidores. Sin embargo, esto requiere que tu servidor esté configurado como público en los parámetros de configuración del servidor.

Revisa nuestra [Guía de Configuración del Servidor](vrising-configuration.md) para añadir los parámetros `Name` y `ListOnMasterServer` adecuados en tu archivo de configuración o a través del panel web.

Una vez hecho esto, en el menú principal selecciona **Jugar**, luego **Juego en línea** y nuevamente pulsa **Mostrar todos los servidores** en la esquina inferior derecha. Ahora puedes usar el navegador de servidores para encontrar tu servidor usando los filtros disponibles como búsqueda por nombre, modo de juego, dificultad y mucho más.

![](https://screensaver01.zap-hosting.com/index.php/s/CGoZBkRsGTwkTQg/preview)

<InlineVoucher />