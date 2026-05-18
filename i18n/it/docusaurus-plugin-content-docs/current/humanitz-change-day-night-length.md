---
id: humanitz-change-day-night-length
title: "HumanitZ: Cambia la Duración del Día y la Noche"
description: "Descubre cómo ajustar la duración del día y la noche en tu servidor de HumanitZ → Aprende más ahora"
sidebar_label: "Cambiar Duración Día/Noche"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

El ciclo de día y noche en HumanitZ afecta directamente la jugabilidad, la visibilidad, la dificultad para sobrevivir y el ritmo general del juego. Días más cortos pueden crear una experiencia de supervivencia más intensa, mientras que períodos de luz más largos permiten a los jugadores más tiempo para explorar, construir y recolectar recursos.

<InlineVoucher />

## Configuración

La duración del día y la noche se controla en el archivo `GameServerSettings.ini`. Puedes acceder a este archivo desde el panel de gestión de tu servidor en **Configs**. Dentro del archivo de configuración, localiza los siguientes parámetros:

```
;Duración del día en minutos
DayDur=40
;Duración de la noche en minutos
NightDur=20
```

Los valores están definidos en minutos:

- `DayDur` – Controla cuánto dura el día  
- `NightDur` – Controla cuánto dura la noche  

Para cambiar la duración del ciclo, simplemente ajusta los números a la duración que prefieras. Ejemplo para días más largos y noches más cortas:

```
DayDur=60
NightDur=15
```

Después de editar el archivo, guarda los cambios y reinicia el servidor para que los nuevos ajustes tengan efecto.

## Conclusión

¡Felicidades! Modificando los valores `DayDur` y `NightDur` en el `GameServerSettings.ini`, has ajustado con éxito el ciclo de día y noche en tu servidor de HumanitZ. Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />