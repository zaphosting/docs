---
id: domain-gameserver-srv-link
title: "Dominio: Configura el reenvío a tu servidor de juegos"
description: "Descubre cómo redirigir tu dominio o subdominio a un servidor de juegos para un acceso fácil y mejor conectividad → Aprende más ahora"
sidebar_label: Reenvío de servidor de juegos
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Puedes redirigir tu dominio completo o solo un subdominio a tu servidor de juegos. Esto es útil porque permite que la gente se conecte a tu servidor de juegos mediante un dominio, en lugar de tener que recordar direcciones IP complicadas compuestas solo por números. En esta guía, cubriremos el proceso para configurar un dominio que redirija a tu servidor de juegos mediante registros DNS.

<InlineVoucher />

:::info
¡Ten en cuenta que los cambios en las entradas DNS pueden tardar hasta 24 horas en activarse!
:::

## Funcionalidad

Para reenviar la dirección IP, se crea un subdominio que redirige a la dirección IP del servidor de juegos, o se redirige el dominio completo sin subdominio. Esto es suficiente si el servidor de juegos usa el puerto por defecto del juego. Si el servidor de juegos usa otro puerto distinto al puerto por defecto, necesitas un **registro SRV** adicional para redirigir el subdominio al servidor de juegos.

:::info
No todos los juegos soportan el reenvío de un dominio al puerto del juego mediante un registro SRV, así que infórmate antes si tu juego soporta registros SRV.
:::

### Servicio SRV

El nombre del servicio depende del juego y siempre comienza con un **guion bajo**. Por ejemplo, el nombre del servicio para un servidor de Minecraft es siempre **_minecraft** y para un servidor de FiveM es **_cfx**.

### Protocolo SRV

Como protocolo especificamos el protocolo de internet usado para la conexión. Aquí están disponibles **UDP** y **TCP**. Qué protocolo se usa depende también del juego, la especificación del protocolo siempre comienza con un **guion bajo** y es **_udp** o **_tcp**.

## Preparación

Para redirigir tu dominio a un servidor de juegos sin crear un subdominio, primero abre tu dominio en el panel, luego abre la gestión DNS desde el menú a la izquierda.

![](https://screensaver01.zap-hosting.com/index.php/s/X8q3jdigEdZrRaB/preview)

Ahí puedes ver todas las entradas DNS existentes para tu dominio.

![](https://screensaver01.zap-hosting.com/index.php/s/zRzCnwbqYxaeSiJ/preview)

## Reenvío de dominio (Minecraft)

Primero tienes que averiguar la IP y el puerto del servidor de Minecraft al que quieres redirigir. Con esta información, sigue los siguientes pasos.

En nuestro ejemplo usamos `testserver-domain.de` como nombre de dominio, `123.123.123.123` como IP del servidor y `25500` como PUERTO.

### Crear registro A

Para crear un nuevo registro, usa el botón **Nueva entrada**.

Se abrirá una ventana con cuatro campos que debes completar:

![](https://screensaver01.zap-hosting.com/index.php/s/BYNiFMMwdwjEHwZ/preview)

El **Nombre** es el dominio principal o subdominio por el que se hará el reenvío a la IP, este nombre es libre para elegir. El **Tipo** se deja en **A** en este paso. En el **Valor** solo tienes que ingresar la IP del servidor de Minecraft que buscaste antes. En nuestro ejemplo queda así:

![](https://screensaver01.zap-hosting.com/index.php/s/aRYpxgrySQqzton/preview)

Una vez guardado, esta entrada se mostrará correctamente:

![](https://screensaver01.zap-hosting.com/index.php/s/eFLm8oqbo4cLtn8/preview)

### Crear registro SRV

Ahora tienes que crear un registro SRV, que se usa para el reenvío de puerto, necesario si no usas el puerto por defecto. Para ello, haz clic de nuevo en el botón **Nueva entrada**.

En **Nombre** debes ingresar el protocolo y el dominio de conexión. El nombre de dominio que pongas aquí se usará luego para la conexión al servidor. Como **Tipo** selecciona **SRV** en el menú desplegable:

![](https://screensaver01.zap-hosting.com/index.php/s/pH9F5kZins8wHn4/preview)

En el **Valor** ahora debes ingresar tres valores: primero la prioridad, que por defecto puede quedar en 0, luego el puerto del servidor de juegos, en nuestro ejemplo `25500`, y por último el nombre de dominio del registro **A** que acabas de crear.

En nuestro ejemplo queda así:

![](https://screensaver01.zap-hosting.com/index.php/s/Gf8kkc5srHEbC2N/preview)

### Solución de problemas y resultado

:::important
Al final de la entrada debe escribirse un punto, sin este punto el sistema intentará añadir el dominio.
:::

Si no sigues esta indicación, el sistema redirigirá `minecraft.testserver-domain.de` a `minecraft.testserver-domain.de.testserver-domain.de` y la redirección fallará.

## Reenvío de dominio (FiveM)
Primero tienes que averiguar la IP y el puerto del servidor de FiveM al que quieres redirigir. Con estos datos sigue los siguientes pasos.

En nuestro ejemplo usamos `testserver-domain.de` como nombre de dominio, `123.123.123.123` como IP del servidor y PUERTO `30300`.

### Crear registro A
Para crear un nuevo registro, usa el botón **Nueva entrada**.

Se abrirá una ventana con cuatro campos que debes completar:

![](https://screensaver01.zap-hosting.com/index.php/s/FigmCXEc3eJYz78/preview)

El **Nombre** es el dominio principal o subdominio por el que se hará el reenvío a la IP, este nombre es libre para elegir. El **Tipo** se deja en **A** en este paso. En el **Valor** solo tienes que ingresar la IP del servidor de FiveM que buscaste antes. En nuestro ejemplo queda así:

![](https://screensaver01.zap-hosting.com/index.php/s/7dBKaJ4xomTiS9C/preview)

Una vez guardado, esta entrada se mostrará correctamente:

![](https://screensaver01.zap-hosting.com/index.php/s/5DppfyXsADTT85t/preview)

### Crear registro SRV
Ahora tienes que crear un registro SRV, que se usa para el reenvío de puerto, necesario si no usas el puerto por defecto. Para ello, haz clic de nuevo en el botón **Nueva entrada**.

En **Nombre** debes ingresar el protocolo y el dominio de conexión. El nombre de dominio que pongas aquí se usará luego para la conexión al servidor. Como **Tipo** selecciona **SRV** en el menú desplegable:

![](https://screensaver01.zap-hosting.com/index.php/s/Yab6ksJNJFTLAeB/preview)

En el **Valor** ahora debes ingresar tres valores: primero la prioridad, que por defecto puede quedar en 0, luego el puerto del servidor de juegos, en nuestro ejemplo `30300`, y por último el nombre de dominio del registro **A** que acabas de crear.

En nuestro ejemplo queda así:

![](https://screensaver01.zap-hosting.com/index.php/s/te4LJ3yKRpTSi5W/preview)

### Solución de problemas y resultado

:::important
Al final de la entrada debe escribirse un punto, sin este punto el sistema intentará añadir el dominio.
:::

Si no sigues esta indicación, el sistema redirigirá `fivem.testserver-domain.de` a `fivem.testserver-domain.de.testserver-domain.de` y la redirección fallará.

<InlineVoucher />