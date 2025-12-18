---
id: fivem-txadmin-discord-bot
title: "FiveM: Bot de Discord para txAdmin"
description: "Descubre cómo integrar y usar el bot de Discord con tu servidor txAdmin para una gestión mejorada de tu servidor de juegos FiveM → Aprende más ahora"
sidebar_label: Bot de Discord para txAdmin
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introducción
El panel txAdmin trae un montón de funciones para tu servidor de juegos FiveM, incluyendo la integración con un bot de Discord.
En esta guía, te mostraremos cómo configurar el bot de Discord y cómo usarlo.

<InlineVoucher />

## Preparación

Para configurar el bot de Discord para tu servidor txAdmin, primero tienes que iniciar sesión en tu panel txAdmin.
La información de acceso se muestra en la página de resumen del servidor, como se ve aquí:

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

:::info

Esta guía requiere que txAdmin ya esté configurado. Para aprender cómo hacerlo, puedes visitar nuestra [guía FiveM: Configuración de txAdmin](fivem-txadmin-setup.md).

:::

## Configuración

### Creando una Aplicación de Discord

Para configurar el bot con txAdmin, tienes que crear una aplicación de Discord. Tu bot se asignará a esta aplicación y actuará bajo su nombre. Para crear una aplicación, accede a [el Portal de Desarrolladores de Discord](https://discord.com/developers/applications/).

Ahora, crea una nueva aplicación haciendo clic en **New Application** y asigna un nombre como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Luego, crea la aplicación haciendo clic en **Create**. Para los siguientes pasos, anota el ID de la aplicación:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Configurando el Bot y Obteniendo el Token

Al crear una aplicación, también se crea automáticamente un bot. Puedes obtener el token fácilmente haciendo clic en **Reset Token**. Luego, recibirás un token de usuario que también debes anotar o guardar en un lugar seguro:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
No reveles el token del bot a nadie para que tu bot funcione sin interrupciones y no cause problemas de seguridad. El token es como una clave secreta y no debe compartirse.
:::

En la misma página, baja un poco y activa la opción "Server Members Intent" y guarda los cambios:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Invitando al Bot a tu Discord

Para invitar al bot, tienes que insertar el client ID que anotaste antes en el siguiente enlace en el lugar correspondiente, luego abre el enlace en tu navegador y añade el bot a tu servidor de Discord. Debería verse así:

```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Obteniendo los IDs del Servidor y Canal

Para usar el bot correctamente con txAdmin, necesitas obtener el ID del servidor donde el bot operará.
Puedes obtenerlo haciendo clic derecho en el ícono del servidor en Discord y seleccionando **Copiar ID del servidor**. Anota ese ID también.

Aquí tienes un ejemplo de cómo debería verse:
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

También puedes opcionalmente configurar un canal donde se publiquen actualizaciones de estado como horarios de reinicio; puedes copiar el ID de la misma forma, pero para un canal.
No olvides que el bot debe tener permiso para leer y escribir en ese canal.

:::info
Si no tienes la opción para copiar el ID del servidor o canal, primero tienes que activar el modo desarrollador en la configuración de usuario de Discord:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Personalizando la Configuración en txAdmin

Ahora puedes activar el bot de Discord en txAdmin e ingresar todos los IDs y tokens que guardaste antes:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Opcional: Enviar Mensaje de Estado

Opcionalmente, puedes enviar un mensaje de estado una vez, que se actualizará constantemente con el estado actual del servidor, jugadores, etc.
Para hacerlo, entra al canal de Discord donde quieres que aparezca y escribe `/status add`. Asegúrate de que el bot tenga permiso para enviar mensajes en ese canal.

Esto debería crear un mensaje como este:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Todo en ese mensaje se puede personalizar en la página de configuración de Discord dentro de txAdmin.

## Conclusión

Configurar un bot de Discord para txAdmin te permite mostrar fácilmente el estado de tu servidor de juegos FiveM y otra info en tu servidor de Discord. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />