---
id: over-the-top-wwi-configure-auto-balance
title: "Over the Top WWI: Configura el Auto Balanceo de Equipos"
description: "Aprende cómo configurar el balanceo automático de equipos en tu servidor de Over the Top WWI → Aprende más ahora"
sidebar_label: Auto Balanceo de Equipos
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El balance de equipos es clave para partidas justas y divertidas en **Over the Top WWI**. Sin un buen balance, un equipo puede tener una ventaja enorme, lo que genera un gameplay desigual y una mala experiencia para los jugadores.

El sistema de auto balance ayuda a mantener la equidad redistribuyendo automáticamente a los jugadores entre los equipos cuando se cumplen ciertas condiciones.

<InlineVoucher />

## Configuración

El auto balance de equipos se configura dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, busca los siguientes parámetros:

```
EnableAutobalance = 1
TeamPercentsAutoBalance = 50
AutoBalanceThreshold = 5
MinAutoBalanceCount = 15
LimitTeamSelection = 0
```

- `EnableAutobalance` activa o desactiva el balanceo automático de equipos

- `0` → Desactivado
- `1` → Activado

- `TeamPercentsAutoBalance` define la distribución deseada de los equipos. Ejemplo: `50` = tamaños iguales de equipos
- `AutoBalanceThreshold` define cuánto desequilibrio se permite antes de activar el balanceo
- `MinAutoBalanceCount` define el número mínimo de jugadores para que el auto balance esté activo
- `LimitTeamSelection` restringe que los jugadores elijan equipos manualmente

- `0` → Sin restricción
- `1–3` → Limita la selección de equipo según el valor


Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. El sistema de auto balance gestionará automáticamente la distribución de equipos durante las partidas.

## Conclusión

¡Felicidades! Has configurado con éxito el balanceo automático de equipos en tu **servidor de Over the Top WWI**. Esto ayuda a asegurar partidas justas y mejora la experiencia general para todos los jugadores.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />