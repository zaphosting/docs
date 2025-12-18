---
id: rimworldtogether-server-savegames
title: "Rimworld Together: Gestionando las partidas guardadas de Rimworld Together"
description: "Descubre cómo gestionar y hacer copias de seguridad de tus partidas guardadas de Rimworld Together para un juego multijugador sin interrupciones → Aprende más ahora"
sidebar_label: Gestionar partidas guardadas
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En esta guía, exploraremos cómo gestionar tus partidas guardadas de Rimworld Together en tu servidor de juegos, incluyendo cómo hacer copias de seguridad de tus partidas locales y del servidor, así como subirlas a tu servidor.

:::info
Ten en cuenta que mover una partida vanilla existente a un servidor de Rimworld Together con mods probablemente cause problemas en la jugabilidad. Esto es especialmente cierto al mover mundos entre servidores con mods diferentes.
:::

<InlineVoucher />

## Preparación

Para acceder a los archivos de tu servidor, necesitarás un cliente FTP como [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), ambos de código abierto y gratuitos.

Deberás conectarte a tu servidor mediante un cliente FTP usando las credenciales que encontrarás en **Herramientas->FTP-Browser** en el panel web de tu servidor de juegos. Usa nuestra [guía de Acceso vía FTP](gameserver-ftpaccess.md) para más ayuda para conectarte a tu servidor.


## Copia de seguridad de la partida guardada

### Partida guardada local

Las partidas guardadas locales son las que creaste mientras alojabas una partida multijugador localmente en tu dispositivo. Estas se encuentran dentro del AppData LocalLow de Windows, específicamente en la siguiente ruta:
```
../AppData/LocalLow/Ludeon Studios/RimWorld by Ludeon Studios/Saves
```

:::tip
Puedes acceder fácilmente a esta ruta directamente presionando `CTRL` + `R` al mismo tiempo y buscando la siguiente ruta en el cuadro de diálogo Ejecutar: `%userprofile%/appdata/locallow/Ludeon Studios/RimWorld by Ludeon Studios/Saves`. Simplemente presiona **OK** y serás llevado a la carpeta.

![](https://screensaver01.zap-hosting.com/index.php/s/LZ6Ljo2DfBoH45s/preview)
:::

En esta ubicación podrás ver todas tus partidas guardadas locales.

### Accediendo a la partida guardada vía FTP

Hacer una copia de seguridad de tu partida guardada desde el servidor es sencillo. Una vez conectado a tu servidor de juegos mediante un cliente FTP, dirígete a la siguiente ruta:
```
../rimworld-together/Saves
```

En esta ubicación deberías poder ver carpetas, cada una representando una partida guardada. Simplemente haz clic derecho en la carpeta y usa el botón **Descargar** para guardarla localmente en tu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/yjYXnDSHs7g5eCH/preview)

### Copia de seguridad automática

También ofrecemos una opción para hacer copias de seguridad automáticas de tu partida guardada (y archivo de configuración) directamente desde nuestro panel web. Simplemente ve al panel web de tu servidor de juegos y entra en la sección **Herramientas->Copias de seguridad**. Aquí puedes configurar varias opciones para programar copias automáticas para tu servidor. Te ofrecemos 10 GB de almacenamiento gratuito para copias de seguridad donde se guardarán tus backups. Para más información sobre copias de seguridad, echa un vistazo a nuestra guía dedicada [Copias de seguridad](gameserver-backups.md).

## Subir partida guardada

De forma similar a hacer copias de seguridad, subir tu partida guardada es sencillo. Primero asegúrate de conectarte a tu servidor de juegos mediante un cliente FTP. Cuando estés listo, dirígete a la siguiente ruta:
```
../rimworld-together/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/s4zakSdKniMdGmT/preview)

Simplemente arrastra y suelta cualquiera de tus partidas guardadas en esta carpeta a través de tu cliente FTP y se subirá a tu servidor.

:::info
Como mencionamos al inicio de la guía, mover mundos entre servidores con mods diferentes probablemente cause problemas en la jugabilidad.
:::

<InlineVoucher />