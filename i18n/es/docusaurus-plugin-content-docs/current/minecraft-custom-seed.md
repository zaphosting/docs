---
id: minecraft-custom-seed
title: "Minecraft: Semilla personalizada para el mundo"
description: "Descubre cómo crear mundos únicos en Minecraft configurando semillas personalizadas para nuevas aventuras y generación de mundos → Aprende más ahora"
sidebar_label: Semilla personalizada
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una semilla en Minecraft es un código específico compuesto por números o letras que determina cómo se genera tu mundo de juego. Define el terreno, biomas, estructuras y recursos que descubrirás en tu mundo. Usar la misma semilla con la misma versión del juego y configuración siempre crea el mismo diseño del mundo, lo que facilita compartir mundos únicos con otros.

Ten en cuenta que no puedes cambiar la semilla de un mundo ya existente. La semilla solo afecta la generación de un mundo nuevo. Para usar una semilla diferente, siempre necesitas crear un mundo nuevo después de configurarla.

<InlineVoucher />

## Configuración

Para configurar una semilla personalizada, primero detén tu servidor para evitar conflictos de datos. Luego, abre tu archivo `server.properties`. Puedes encontrar este archivo de configuración en el panel de administración de tu servidor bajo **Configs**.

![img](https://screensaver01.zap-hosting.com/index.php/s/XBKN9r3CAweP9RG/download)

Busca la línea que comienza con `level-seed=`. Aquí puedes ingresar el valor de la semilla que desees. Por ejemplo:

```
level-seed=12345
```

Reemplaza `12345` con tu propio código de semilla. Puede ser cualquier número o cadena de texto que prefieras. Después de configurar tu semilla personalizada, necesitas generar un mundo nuevo para que tenga efecto.

La forma más fácil de hacerlo es cambiar el `level-name` en **Settings** a un nombre nuevo y sin usar, por ejemplo `world1`. Esto asegura que Minecraft cree una carpeta de mundo fresca con tu nueva semilla.

Si quieres saber más sobre cómo recrear un mundo existente, puedes consultar nuestra [guía Recreate World](minecraft-worlds.md) con instrucciones detalladas. Finalmente, inicia tu servidor de nuevo. Minecraft generará un mundo nuevo usando tu semilla personalizada.

## Conclusión

Con estos pasos has configurado exitosamente una nueva semilla para tu nuevo mundo. Reinicia tu servidor, explora tu mundo recién generado y disfruta de tu propia aventura única en Minecraft. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂

<InlineVoucher />