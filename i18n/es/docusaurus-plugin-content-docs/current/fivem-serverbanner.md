---
id: fivem-serverbanner
title: "FiveM: Configura tu propio banner para el servidor"
description: "Descubre cómo mejorar la apariencia de tu servidor FiveM con un banner personalizado para un look único y profesional → Aprende más ahora"
sidebar_label: Configurar banner del servidor
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Un banner personalizado para el servidor es una forma sencilla pero efectiva de hacer que tu servidor FiveM destaque. Le da a tu servidor un aspecto único en la lista de servidores y añade un toque profesional cuando los jugadores se conectan.

Ya sea que uses una captura de pantalla personalizada o un gráfico diseñado, configurar un banner ayuda a que tu comunidad reconozca tu servidor al instante y causa una gran primera impresión.

<InlineVoucher />

## Configuración

Para configurar un banner personalizado para tu servidor FiveM, primero necesitas una imagen adecuada. Recomendamos tomar una captura de pantalla dentro del juego que represente bien tu servidor. Puedes crear una captura rápidamente presionando la tecla **F8** mientras juegas y usando el comando `screenshot`.

Una vez que tengas tu captura, súbela a un servicio de hosting de imágenes que proporcione un **enlace directo** al archivo de imagen (por ejemplo, que termine en `.jpg` o `.png`). Asegúrate de que la imagen sea accesible mediante una URL directa.

![img](https://screensaver01.zap-hosting.com/index.php/s/4sCEeKkyGEm3EXd/preview)

Para añadir el banner, abre el panel de txAdmin y ve a la configuración de tu servidor. Busca el campo **Server banner URL** y pega ahí el enlace directo a tu imagen. Guarda los cambios. Tu banner personalizado aparecerá ahora en los detalles del servidor cuando los jugadores vean tu servidor en la lista.

```
# Establece una URL opcional para el banner de info del servidor y el banner de conexión.
# El tamaño no importa, cualquier imagen con tamaño de banner funcionará.
sets banner_detail "https://url.to/image.png"
sets banner_connecting "https://url.to/image.png"
```

Reemplaza las URLs de ejemplo con el enlace directo a tu imagen subida. Guarda el archivo en el Editor CFG y reinicia tu servidor para aplicar los cambios.

## Conclusión

Tu banner personalizado aparecerá ahora en la lista de servidores y durante la pantalla de conexión, haciendo que tu servidor luzca más único y profesional. Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />