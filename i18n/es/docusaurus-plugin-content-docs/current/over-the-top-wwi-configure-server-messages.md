---
title: "Over the Top WWI: Configura los Mensajes del Servidor"
description: "Aprende a configurar mensajes automáticos en tu servidor Over the Top WWI → Descubre más ahora"
sidebar_label: Mensajes del Servidor
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los mensajes automáticos del servidor son una forma súper útil de comunicar información importante a los jugadores durante la partida. Estos mensajes pueden usarse para compartir reglas, promocionar tu servidor de Discord o dar consejos útiles.

En un servidor **Over the Top WWI**, los mensajes se pueden mostrar a intervalos regulares, asegurando que todos los jugadores reciban la info importante sin que tengas que hacerlo manualmente.

<InlineVoucher />

## Configuración

Los mensajes del servidor se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Busca y abre el archivo `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
ShowServerTimedMessages = 1
AddServerMessage = ¡Únete al Discord oficial! discord.gg/example
AddServerMessage = Por favor, reporta cualquier bug en nuestro Discord.
ServerMessagesTimer = 120
```

- `ShowServerTimedMessages` activa o desactiva los mensajes automáticos. Ponlo en `1` para activarlos o en `0` para desactivarlos.
- `AddServerMessage` define los mensajes que se mostrarán. Puedes añadir varias líneas para rotar diferentes mensajes durante la partida.
- `ServerMessagesTimer` define el intervalo entre mensajes en segundos. Por ejemplo, `120` mostrará un mensaje cada 2 minutos.

Puedes personalizar y ampliar tus mensajes libremente añadiendo líneas adicionales:

```
AddServerMessage = ¡Bienvenido al servidor!
AddServerMessage = Sigue las reglas y respeta a los demás jugadores.
AddServerMessage = Únete a nuestro Discord para estar al día.
```

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los mensajes aparecerán automáticamente en el juego con el intervalo configurado.

## Conclusión

¡Felicidades! Has configurado con éxito los mensajes automáticos en tu **servidor Over the Top WWI**. Esto te ayuda a mantener a los jugadores informados y mejora la comunicación general en tu servidor.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />