---
id: redm-steam-web-api-key
title: "RedM: Configuración de la Steam Web API Key"
description: "Descubre cómo obtener y activar una Steam Web API Key para RedM y así habilitar la autenticación y mejorar la configuración de tu servidor → Aprende más ahora"
sidebar_label: Steam Web API Key
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

La Steam Web API Key tiene usos importantes para RedM. Esto incluye la autenticación mediante la API Key cuando Steam se usa como identificador por diferentes scripts y/o recursos.

<InlineVoucher />

## Preparación

Se requiere una cuenta de Steam sin restricciones para solicitar una API key. Las cuentas de Steam restringidas tienen acceso limitado a las funciones de Steam, por lo que sin acceso completo no es posible solicitar una API key. Debes gastar al menos **5.00 USD** en la tienda de Steam para desbloquear tu cuenta y sus funciones.

## Solicitar una API key

Una vez que tengas tu cuenta de Steam lista, deberías poder solicitar tu propia Steam Web API key. Puedes hacerlo registrándote [en la web de Steam](https://steamcommunity.com/dev/apikey) con tu nombre de cuenta y contraseña de Steam.

![](https://screensaver01.zap-hosting.com/index.php/s/Wm8rdwwFPbt7D5W/preview)

Una vez dentro, tendrás que ingresar un nombre de dominio, confirmar los términos de uso de la Steam Web API y hacer clic en el botón **Register**. El dominio debe configurarse con la **IP de tu servidor** *(sin puerto)*, así que introdúcelo ahí.

![](https://screensaver01.zap-hosting.com/index.php/s/GNmZXzTn9JJ8cBo/preview)

Si todo va bien, deberías poder ver tu propia Steam Web API Key, como se muestra a continuación.

![](https://screensaver01.zap-hosting.com/index.php/s/m8WoXg3WcjeaQrW/preview)

## Activación de una API key

Ahora que tienes tu Steam Web API Key, debes colocarla en el archivo de configuración de tu servidor (`server.cfg`) en tu servidor de juegos RedM. Puedes acceder a tu `server.cfg` a través de la **interfaz txAdmin** en el **Editor CFG**. Busca una línea existente o crea una nueva si no existe, y añade lo siguiente, reemplazando `YOUR_KEY_HERE` con la key que generaste:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/Rw48iY5FGCfP5s9/preview)

## Conclusión

Finalmente, puedes reiniciar tu servidor. Tu Steam Web API key se cargará la próxima vez que tu servidor haya arrancado completamente. Has añadido con éxito una Steam Web API Key en tu servidor de juegos RedM. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />