---
id: fivem-steam-web-api-key
title: "FiveM: Configuración de la clave Steam Web API"
description: "Descubre cómo obtener y activar una clave Steam Web API para FiveM para habilitar la autenticación y mejorar la funcionalidad del servidor → Aprende más ahora"
sidebar_label: Clave Steam Web API
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una clave Steam Web API tiene usos importantes para FiveM. Esto incluye la autenticación mediante la clave API cuando Steam se usa como identificador por diferentes scripts y/o recursos.

<InlineVoucher />

## Preparación

Se requiere una cuenta Steam sin restricciones para solicitar una clave API. Las cuentas Steam restringidas tienen acceso limitado a las funciones de Steam, por lo que sin acceso completo no es posible solicitar una clave API. Debes gastar al menos **5.00 USD** en la tienda de Steam para desbloquear tu cuenta y sus funciones.

## Solicitar una clave API

Una vez que tengas tu cuenta Steam lista, deberías poder solicitar tu propia clave Steam Web API. Puedes hacerlo registrándote [en la web de Steam](https://steamcommunity.com/dev/apikey) con tu nombre de cuenta Steam y contraseña.

![](https://screensaver01.zap-hosting.com/index.php/s/Wm8rdwwFPbt7D5W/preview)

Una vez dentro, tendrás que ingresar un nombre de dominio, confirmar los términos de uso de la Steam Web API y hacer clic en el botón **Register**. El dominio debe ser configurado con la **IP de tu servidor** *(sin puerto)*, así que introdúcelo ahí.

![](https://screensaver01.zap-hosting.com/index.php/s/GNmZXzTn9JJ8cBo/preview)

Si todo va bien, deberías poder ver tu propia clave Steam Web API, como se muestra a continuación.

![](https://screensaver01.zap-hosting.com/index.php/s/m8WoXg3WcjeaQrW/preview)

## Activación de la clave API

Ahora que tienes tu clave Steam Web API, debes colocarla en el archivo de configuración de tu servidor (`server.cfg`) en tu servidor de juegos FiveM. Puedes acceder a tu `server.cfg` a través de la **interfaz txAdmin** en el **Editor CFG**. Busca una línea existente o crea una nueva si no existe, y añade lo siguiente, reemplazando `YOUR_KEY_HERE` con la clave que generaste:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/ED4QbkP8aaeF92B/preview)

## Conclusión

Finalmente, puedes reiniciar tu servidor. Tu clave Steam Web API se cargará la próxima vez que tu servidor haya arrancado completamente. Has añadido con éxito una clave Steam Web API en tu servidor de juegos FiveM. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />