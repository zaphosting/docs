---
id: humanitz-enable-disable-death-notifications
title: "HumanitZ: Activar/Desactivar Notificaciones de Muerte"
description: "Aprende cómo activar o desactivar las notificaciones de muerte de jugadores en tu servidor de HumanitZ → Aprende más ahora"
sidebar_label: "Activar/Desactivar Notificaciones de Muerte"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

Las notificaciones de muerte informan a los jugadores cuando alguien en el servidor ha muerto. Aunque esto puede ser útil para seguir la actividad, algunos servidores prefieren una experiencia más inmersiva o competitiva sin mensajes públicos de muerte.

HumanitZ te permite activar o desactivar las notificaciones de muerte de jugadores directamente desde el archivo de configuración del servidor.

<InlineVoucher />

## Configuración

Los ajustes de notificación de muerte se controlan en el archivo `GameServerSettings.ini`. Puedes acceder a este archivo en tu panel de control bajo **Configs**.  
Dentro del archivo de configuración, localiza el siguiente parámetro:

```
;If set to true notification about dead players will be disabled. Admins will still be able to see them.
NoDeathFeedback=true
```

- `NoDeathFeedback=true` – Desactiva las notificaciones de muerte para jugadores normales. Los administradores aún podrán verlas.  
- `NoDeathFeedback=false` – Activa las notificaciones de muerte para todos los jugadores.

Si quieres que las notificaciones de muerte sean visibles para todos, establece el valor en:

```
NoDeathFeedback=false
```

Después de editar el archivo, guarda los cambios y reinicia el servidor para que la nueva configuración tenga efecto.

## Conclusión

¡Felicidades! Modificando el valor `NoDeathFeedback` en el `GameServerSettings.ini`, has configurado con éxito las notificaciones de muerte en tu servidor de HumanitZ. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />