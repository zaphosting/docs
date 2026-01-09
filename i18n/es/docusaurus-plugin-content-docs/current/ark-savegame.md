---
id: ark-savegame
title: ARK Survival Evolved Importar tu propio archivo de guardado
description: "Descubre cómo restaurar tu servidor de Ark: Survival Evolved usando copias de seguridad oficiales o personales para una continuidad de juego sin interrupciones → Aprende más ahora"
sidebar_label: Importar archivo de guardado
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Quieres importar tu propio archivo de guardado o una copia oficial a tu servidor de Ark: Survival Evolved? No busques más, esta guía te explica los pasos para importar tu archivo de guardado regular o copia oficial a tu nuevo servidor.

<YouTube videoId="lvIIVOhAUjo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/riyYaWCc4562mTS/preview" title="Cómo conseguir un servidor ARK:SE con copias oficiales" description="¿Te resulta más fácil entender cuando ves las cosas en acción? ¡Aquí te tenemos! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible."/>

<InlineVoucher />

## Prepara tu archivo de guardado

### Copia oficial de guardado

Primero debes descargar el archivo oficial de guardado de tu servidor. Puedes hacerlo directamente desde la [web oficial de ARK](https://survivetheark.com/index.php?/server-backups/), o usar [una herramienta creada por la comunidad](https://arkutils.netlify.app/tools/officialdownload) para encontrar tu servidor más fácilmente, ya que permite buscar.

:::note
Si juegas en Xbox o Playstation, lamentablemente no podrás descargar archivos oficiales del servidor. Los desarrolladores solo permiten descargar las copias de mundo desde las plataformas Steam y Epic.
:::

Hay dos snapshots disponibles, el primero del 25 de agosto de 2023 y el segundo del 30 de septiembre de 2023. Para cualquiera de ellos, debes encontrar tu servidor y descargar tu archivo de guardado.

:::note
El uso de tu propia copia oficial solo es posible con la variante de servidor de juegos **ARK - SE (compatible con copias oficiales)**. Si usas otra versión para tu servidor, puedes cambiarla en la sección **juegos** del panel web de tu servidor o usando nuestra [guía de cambio de juego](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/Kwjyx4sDSHLTFZJ/preview)
:::



### Archivo de guardado propio regular

Para importar tu propio archivo de guardado (no oficial), necesitas todos los archivos del guardado. Normalmente se guardan en el directorio **SavedArks**, que está dentro de **Shootergame/Saved**. Busca estos archivos y guárdalos para el proceso de importación.

:::note
Para esto, deberías usar la variante regular de servidor de juegos **Ark: SE** (sin soporte para copias oficiales), ya que estás importando un archivo de guardado normal que no es oficial.

![](https://screensaver01.zap-hosting.com/index.php/s/FCMPjApJBjZxdR2/preview)
:::



## Subir el guardado al servidor

Una vez que hayas descargado tu archivo `.zip` de guardado, tendrás que descomprimirlo usando un programa como 7zip o Winrar. Para cualquier tipo de servidor de juegos y archivo de guardado, el proceso de subida es el mismo.

Ahora debes acceder a tu servidor vía FTP para subir los archivos de guardado. Usa nuestra [guía de acceso vía FTP](gameserver-ftpaccess.md) si necesitas ayuda para conectarte con tu cliente FTP favorito y transferir archivos.

Con tu cliente FTP abierto, ve al siguiente subdirectorio dentro de tu servidor de juegos:
```
/gxxxxx/ark/ShooterGame/Saved/SavedArks
```

![](https://screensaver01.zap-hosting.com/index.php/s/YXFcNPMgtbmRJJj/preview)

Borra todos los archivos del guardado actual (o haz una copia de seguridad antes si quieres seguir jugando en ese guardado en el futuro). Luego, arrastra y sube todos los archivos extraídos a este directorio (incluyendo los archivos .ark, .arktribe y .arkprofile). Ten paciencia, puede tardar un poco dependiendo del tamaño total de tu guardado.

Cuando termine la subida, reinicia tu servidor y los archivos recién subidos deberían cargarse. ¡Ya subiste con éxito una copia oficial o tu propio archivo de guardado a tu servidor de juegos Ark: Survival Evolved!

<InlineVoucher />