---
id: over-the-top-wwi-configure-chat-settings
title: "Over the Top WWI: Configura los Ajustes del Chat"
description: "Aprende a configurar los ajustes de chat y comunicación en tu servidor Over the Top WWI → Aprende más ahora"
sidebar_label: Ajustes del Chat
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los ajustes del chat en **Over the Top WWI** controlan cómo los jugadores se comunican por texto durante la partida. Ajustar estos parámetros te permite habilitar la comunicación global, restringir el uso del chat o silenciar completamente a los jugadores si es necesario.

Una configuración adecuada del chat ayuda a mantener el orden en el servidor y mejora la experiencia general de los jugadores.

<InlineVoucher />

## Configuración

Los ajustes del chat se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
AllowAllChat = 1
ServerMuteAll = 0
BannedWordsPathString = BannedWords.txt
```

- `AllowAllChat` habilita o deshabilita la comunicación global en el chat

- `0` → Deshabilitado
- `1` → Habilitado

- `ServerMuteAll` desactiva todo el chat de los jugadores cuando está habilitado

- `0` → Deshabilitado
- `1` → Habilitado

- `BannedWordsPathString` define el archivo usado para filtrar palabras restringidas. El archivo contiene una lista de términos bloqueados que no estarán permitidos en el chat

Ajusta estos parámetros para controlar cómo se comunican los jugadores y para hacer cumplir las reglas de moderación del chat en tu servidor.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los ajustes actualizados del chat se aplicarán automáticamente.

## Conclusión

¡Felicidades! Has configurado con éxito los ajustes del chat en tu **servidor Over the Top WWI**. Esto te permite gestionar la comunicación entre jugadores y mantener un ambiente controlado y divertido.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂

<InlineVoucher />