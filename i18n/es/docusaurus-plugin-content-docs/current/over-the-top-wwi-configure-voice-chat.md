---
id: over-the-top-wwi-configure-voice-chat
title: "Over the Top WWI: Configurar chat de voz"
description: "Aprende cómo activar y configurar el chat de voz en tu servidor Over the Top WWI → Aprende más ahora"
sidebar_label: Chat de voz
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El chat de voz permite que los jugadores en tu servidor **Over the Top WWI** se comuniquen directamente durante la partida. Esto puede mejorar la coordinación, el trabajo en equipo y la inmersión general, especialmente en escenarios tácticos.

Al configurar los ajustes del chat de voz, puedes controlar si se permite la comunicación, ajustar la calidad y definir cómo se comporta el chat de voz durante las partidas.

<InlineVoucher />

## Configuración

Los ajustes del chat de voz se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
VoipAllowed = 1
VoipQuality = 0
VoipDelay = 0
```

- `VoipAllowed` activa o desactiva el chat de voz en el servidor  
- `VoipQuality` controla el nivel de calidad de voz  
- `VoipDelay` añade un retraso en segundos antes de que los jugadores puedan usar el chat de voz tras aparecer  

Ajusta estos valores según las preferencias de tu servidor y los requisitos de rendimiento. Configuraciones de calidad más bajas pueden ser beneficiosas para servidores con muchos jugadores o ancho de banda limitado.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los ajustes del chat de voz se aplicarán automáticamente.

## Conclusión

¡Felicidades! Has configurado con éxito el chat de voz en tu **servidor Over the Top WWI**. Esto permite que los jugadores se comuniquen eficazmente y mejora el trabajo en equipo durante las partidas.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂

<InlineVoucher />