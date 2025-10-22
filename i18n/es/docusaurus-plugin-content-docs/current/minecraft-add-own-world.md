---
id: minecraft-add-own-world
title: "Minecraft: Añade tu propio mundo al servidor"
description: "Aprende cómo subir y configurar mundos personalizados de Minecraft en tu servidor para una experiencia de juego única → Descúbrelo ahora"
sidebar_label: Añade tu propio mundo
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Quieres usar tu propio mundo o un mundo descargado de internet en tu servidor? ¡Entonces este es el lugar indicado para ti! Solo necesitas tu mundo y un cliente FTP. Si no sabes qué es un cliente FTP ni cómo usarlo, echa un vistazo a esta guía: [Acceso vía FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/Rmx6c6n2rP5MqBz/preview)

<YouTube videoId="5tII3C9yO3g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/SbB6iZmdZtMAPaS/preview" title="Cómo subir MAPAS personalizados en tu servidor de Minecraft" description="¿Te gusta entender mejor cuando ves las cosas en acción? ¡Aquí te ayudamos! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o prefieras aprender de la forma más entretenida posible."/>

Una vez establecida la conexión con el servidor vía FTP, puedes empezar a configurar tu propio mundo. Para ello, primero debes ir al directorio donde se encuentra el mundo actual. Está ubicado en el siguiente directorio: /gXXXXX/modpack/

![](https://screensaver01.zap-hosting.com/index.php/s/85KLwjPYt3yjHZt/preview)

Ahora debes subir el nuevo mundo a ese directorio. Puedes eliminar y reemplazar la carpeta **world** antigua o subir el nuevo mundo con otro nombre. En este ejemplo subimos el mundo con un nombre nuevo:

![](https://screensaver01.zap-hosting.com/index.php/s/3DYD5ANgNsCNpkE/preview)

Ahora solo falta configurar el mundo recién subido en el archivo **server.properties**. Lo encontrarás en la **administración del servidor de juegos** bajo **Configs**. Ahí debes ajustar el valor del comando **level-name=**:

![](https://screensaver01.zap-hosting.com/index.php/s/idoHWafC3g4AbYL/preview)

Después de reiniciar el servidor, el nuevo mundo debería estar activo. ¡Disfruta tu nuevo mundo! 🙂

<InlineVoucher />

<InlineVoucher />