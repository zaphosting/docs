---
id: fivem-mastodon
title: "FiveM: Configura un feed de actividad para tu servidor"
description: "Descubre cómo integrar un feed de actividad de Mastodon en tu servidor para actualizaciones en tiempo real y mayor interacción con la comunidad → Aprende más ahora"
sidebar_label: Configurar Feed de Actividad
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Preparación

Para configurar un feed de actividad en nuestro servidor, primero necesitamos registrar una cuenta en Mastodon.

## Configuración

Ahora abrimos nuestro perfil de Mastodon y copiamos nuestro nombre de usuario, en nuestro caso es `zaphosting@mstdn.instance`

Luego abrimos las "Configs" de nuestro servidor FiveM y editamos el server.cfg.

Insertamos la siguiente línea al final del archivo:

```
sets activitypubFeed username
```

"username" debe ser reemplazado por tu nombre de usuario de Mastodon.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Guardamos el archivo y reiniciamos nuestro servidor, después de ~20 minutos la pestaña "Feed" estará disponible una vez que tu servidor esté en línea.


<InlineVoucher />