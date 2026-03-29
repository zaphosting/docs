---
id: over-the-top-wwi-configure-revive-system
title: "Over the Top WWI: Configura el Sistema de Revivir"
description: "Aprende a configurar la mecánica de revivir en tu servidor de Over the Top WWI → Aprende más ahora"
sidebar_label: Sistema de Revivir
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El sistema de revivir en **Over the Top WWI** determina cómo los jugadores pueden volver a la acción después de ser derribados. Ajustar estos parámetros te permite controlar qué tan permisivo o exigente es el combate.

Un sistema de revivir más rápido o confiable puede hacer que el juego sea más accesible, mientras que configuraciones más estrictas aumentan el realismo y las consecuencias de los errores.

<InlineVoucher />

## Configuración

El sistema de revivir se configura dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
ReviveTimer = 60
ReviveChance = 100
ReviveMaxDamage = 80
```

- `ReviveTimer` define cuánto tiempo tarda en revivir a un jugador
- `ReviveChance` determina la probabilidad de éxito de un revivir
- `ReviveMaxDamage` define el daño máximo que puede tener un jugador para poder ser revivido

Ajusta estos valores para controlar con qué frecuencia los revivir son exitosos y cuánto dura el proceso.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los nuevos ajustes de revivir se aplicarán automáticamente.

## Conclusión

¡Felicidades! Has configurado con éxito el sistema de revivir en tu **servidor de Over the Top WWI**. Esto te permite afinar la dificultad del combate y mejorar la experiencia general de juego.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />