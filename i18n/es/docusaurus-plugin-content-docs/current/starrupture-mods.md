---
id: starrupture-mods
title: "StarRupture: Instalar Mods"
description: "Aprende cómo instalar mods en tu servidor y cliente de StarRupture para mejorar la experiencia de juego → Aprende más ahora"
sidebar_label: Instalar Mods
services:
- gameserver-starrupture
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los mods te permiten ampliar la jugabilidad de StarRupture añadiendo nuevas mecánicas, contenido, mejoras de calidad de vida o ajustes de juego creados por la comunidad. Muchos mods de StarRupture se distribuyen a través de plataformas comunitarias como NexusMods y pueden instalarse tanto en el servidor como localmente en el cliente.

Instalar mods en tu servidor asegura que el entorno del servidor cargue el contenido modificado, mientras que instalarlos localmente permite que tu cliente de juego use los mismos archivos al conectarse a servidores con mods.

<InlineVoucher />

## Instalación de mods en el servidor

Para instalar mods en tu servidor de StarRupture, primero descarga el archivo del mod deseado desde una fuente confiable como **NexusMods**.

![img](https://screensaver01.zap-hosting.com/index.php/s/rM4WR4gW2KLyzxz/preview)

Antes de subir el mod, asegúrate de que tu servidor esté detenido para evitar conflictos de archivos durante la instalación. Luego, conéctate a tu servidor vía [FTP](gameserver-ftpaccess.md) usando un cliente FTP. Una vez conectado, navega hasta el siguiente directorio en tu servidor:

```
/home/container/StarRupture/Content/Paks
```
Sube el archivo `.zip` del mod descargado a esta carpeta. Cuando la subida haya terminado, extrae el contenido del archivo directamente dentro del directorio `Paks`. Una vez extraídos los archivos, vuelve a tu panel de gestión del servidor y arráncalo nuevamente.

Durante el inicio, el servidor detectará y cargará automáticamente los mods instalados.

## Instalación de mods en el cliente

Algunos mods de StarRupture también deben instalarse localmente en el cliente. La mayoría de los mods instalados localmente permanecen activos al conectarte a servidores. Primero, descarga el mod deseado desde una fuente confiable como NexusMods.

Luego, abre tu **Biblioteca de Steam**, haz clic derecho en **StarRupture**, pasa el cursor sobre **Administrar** y selecciona **Explorar archivos locales**. Dentro del directorio de instalación del juego, localiza la siguiente ruta:

```
StarRupture/StarRupture/Content/Paks
```

Copia el archivo `.zip` del mod descargado en esta carpeta. Después de copiar el archivo, extrae el contenido del archivo directamente en el directorio `Paks`. Una vez extraído, el mod se cargará automáticamente la próxima vez que inicies el juego.

## Conclusión

¡Felicidades! Has instalado con éxito mods para StarRupture tanto en el servidor como en el cliente. Con los mods instalados, puedes ampliar la experiencia de juego con nuevas funciones, mecánicas y mejoras creadas por la comunidad.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />