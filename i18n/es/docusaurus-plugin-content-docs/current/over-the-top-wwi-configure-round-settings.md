---
id: over-the-top-wwi-configure-round-settings
title: "Over the Top WWI: Configura los Ajustes de Ronda"
description: "Aprende a configurar la duración de la ronda y el flujo de la partida en tu servidor Over the Top WWI → Aprende más ahora"
sidebar_label: Ajustes de Ronda
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los ajustes de ronda en **Over the Top WWI** definen cuánto duran las partidas y cómo progresa el juego. Ajustar estos valores te permite controlar el ritmo de la partida, la duración de la ronda y el flujo general de la sesión.

Esto es especialmente importante para equilibrar partidas rápidas frente a batallas más largas y estratégicas.

<InlineVoucher />

## Configuración

Los ajustes de ronda se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
MaxAmountofRounds = 3
MaxMapTime = 30
FinalRecapTimer2 = 3
PersistentMatch = 0
```

- `MaxAmountofRounds` define cuántas rondas se juegan por partida
- `MaxMapTime` establece la duración máxima de un mapa en minutos
- `FinalRecapTimer2` controla cuánto tiempo se muestra el resumen al final de la ronda

- `PersistentMatch` determina si el tiempo y la puntuación continúan entre rondas

  - `0` → Desactivado
  - `1` → Activado

Ajusta estos valores para crear partidas más cortas con rotaciones rápidas o sesiones más largas con juego extendido.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los ajustes de ronda actualizados se aplicarán automáticamente.

## Conclusión

¡Felicidades! Has configurado con éxito los ajustes de ronda en tu **servidor de juegos Over the Top WWI**. Esto te permite controlar la duración de las partidas y mejorar el flujo del juego en tu servidor.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />