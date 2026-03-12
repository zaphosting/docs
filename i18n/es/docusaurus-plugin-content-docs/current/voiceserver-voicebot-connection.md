---
id: voiceserver-voicebot-connection
title: "Voiceserver: Conectando tu bot de voz con tu servidor de voz"
description: "Descubre cómo conectar tu bot de voz a servidores de TeamSpeak y Discord para una comunicación y control sin interrupciones → Aprende más ahora"
sidebar_label: Enlace al servidor de voz
services:
  - voiceserver
  - voicebot
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## Introducción

¿Quieres conectar tu bot de voz a tu servidor de TeamSpeak, pero no sabes muy bien cómo hacerlo? No te preocupes, aquí te explicamos paso a paso cómo hacerlo.



## Conectando el bot a tu TeamSpeak

Para conectar tu bot de voz a tu servidor TeamSpeak 3, tienes que acceder a él desde el panel de control. Luego, ve a la sección **Servidor** en la izquierda como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

Ahora puedes seleccionar un TeamSpeak bajo **Servidor** si también lo has contratado con tu cuenta. Si está alojado externamente, también puedes seleccionar **Servidor TeamSpeak personalizado**.

Luego puedes ingresar los datos abajo, guardar y el bot de voz se conectará a tu servidor TeamSpeak 3, aquí tienes un ejemplo:

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## Conectando el bot a tu Discord

Para conectar tu bot de voz a Discord, tienes que ir a **Servidor** y luego seleccionar **Discord**.

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

Debes ingresar el **Token del Bot de Discord** y el **ID del Cliente del Bot de Discord**. Después, el bot de voz se conectará a tu servidor de Discord.


## Cómo obtener el Token y el Client ID de tu Bot de Discord

Como tu servidor de Discord no tiene una dirección IP o puerto directo, hay algunos pasos previos para preparar antes de usar tu bot en un servidor de Discord.


### Crear una aplicación en Discord

Lo primero que tienes que hacer es crear una aplicación en Discord. Tu bot se asigna a esta aplicación y actúa bajo su nombre. Para crearla, accede al [Portal de Desarrolladores de Discord](https://discord.com/developers/applications/).

Ahora, crea una nueva aplicación haciendo clic en **New Application** y asigna un nombre como se ve aquí:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Luego, crea la aplicación haciendo clic en **Create**. Para los siguientes pasos, anota el ID de la aplicación:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Configurar el Bot y obtener el Token

Al crear la aplicación, se crea automáticamente un bot. Puedes obtener el token fácilmente haciendo clic en **Reset Token**. Recibirás un token de usuario que también debes anotar o guardar en un lugar seguro:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
No reveles el token del bot a nadie para que tu bot funcione sin problemas y no cause problemas de seguridad. El token es como una llave secreta y no debe compartirse.
:::

En la misma página, baja un poco y activa **Presence Intent**, **Server Members Intent** y **Message Content Intent**, luego guarda los cambios:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### Invitar al bot a tu Discord

Para invitar al bot, inserta el Client ID que anotaste antes en el siguiente enlace en el lugar correspondiente, abre el enlace en tu navegador y añade el bot a tu servidor de Discord. Debería verse así:

```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Configura el panel del bot

Ahora, añade el token y el Client ID que anotaste en los campos correspondientes del panel de control de ZAP-Hosting y pulsa **Guardar** abajo:

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

Luego, puedes iniciar el bot. Debería conectarse a tu servidor de Discord en unos 10 segundos.


## Conclusión

El bot de voz es un producto muy útil y divertido para mucha gente. Puedes usarlo tanto en un servidor de TeamSpeak como en Discord. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />