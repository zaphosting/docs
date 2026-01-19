---
id: hytale-pvp-management
title: "Hytale: Gestión de PvP"
description: "Gestiona y configura el combate jugador contra jugador (PvP) en tu servidor de Hytale → Aprende más ahora"
sidebar_label: Gestión de PvP
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

La gestión de PvP en un servidor de Hytale controla si los jugadores pueden dañarse o pelear entre sí dentro de un mundo. Ajustando las configuraciones de PvP, los propietarios del servidor pueden definir si el combate entre jugadores está completamente habilitado, totalmente desactivado o restringido a situaciones específicas.

<InlineVoucher />

## Configuración

El comportamiento de PvP se define por mundo y se configura a través del archivo de configuración del servidor:

```
/gXXXXXXX/hytale/universe/worlds/default/config.json
```

Esta configuración determina cómo el servidor maneja el daño entre jugadores y si el PvP está permitido dentro del mundo activo. Los cambios en las configuraciones de PvP se aplican globalmente al mundo afectado y requieren reiniciar el servidor para que tengan efecto.

El siguiente ejemplo muestra una configuración donde el PvP está desactivado para un mundo:

```
"WorldConfig": {
  "PvP": false
}
```

Con esta configuración aplicada, los jugadores ya no pueden dañarse entre sí dentro de ese mundo, creando efectivamente un entorno enfocado en PvE.

Para habilitar el PvP y permitir el combate jugador contra jugador, la configuración puede establecerse así:

```
"WorldConfig": {
  "PvP": true
}
```

## Conclusión

Una vez configurado, tendrás una visión clara de cómo se gestiona el PvP y podrás ajustar fácilmente la configuración para apoyar el juego cooperativo, entornos competitivos o una combinación de ambos. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />