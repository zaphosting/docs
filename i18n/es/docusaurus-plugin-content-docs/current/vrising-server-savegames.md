---
id: vrising-server-savegames
title: "V Rising: Cómo gestionar las partidas guardadas de V Rising"
description: "Descubre cómo gestionar y hacer copias de seguridad de tus partidas guardadas de V Rising para una experiencia multijugador segura → Aprende más ahora"
sidebar_label: Gestionar partidas guardadas
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En esta guía, exploraremos cómo gestionar tus partidas guardadas de V Rising en tu servidor de juegos, incluyendo cómo hacer copias de seguridad de tus partidas locales y del servidor, así como subirlas a tu servidor.

<InlineVoucher />

## Preparación

Para acceder a los archivos de tu servidor, necesitarás un cliente FTP como [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), ambos de código abierto y gratuitos.

Tendrás que conectarte a tu servidor mediante un cliente FTP usando las credenciales que encontrarás en **Herramientas->Explorador FTP** en el panel web de tu servidor de juegos. Usa nuestra [guía de Acceso vía FTP](gameserver-ftpaccess.md) para más ayuda para conectarte a tu servidor.

## Copia de seguridad de la partida guardada

### Partida guardada local

Las partidas guardadas locales son las que creas mientras alojas una partida multijugador localmente en tu dispositivo. Estas se encuentran dentro del AppData LocalLow de Windows, específicamente en la siguiente ruta:
```
../AppData/LocalLow/Stunlock Studios/VRising
```

:::tip
Puedes acceder fácilmente a esta ruta directamente presionando `CTRL` + `R` al mismo tiempo y buscando la siguiente ruta en el cuadro de ejecutar: `%userprofile%/appdata/locallow/Stunlock Studios/VRising`. Simplemente presiona **OK** y serás llevado a la carpeta.

![](https://screensaver01.zap-hosting.com/index.php/s/dz4ytiTai5jD2ep/preview)
:::

En esta ubicación, podrás ver una carpeta `Saves` y/o `CloudSaves` dependiendo de si has usado la función Steam Cloud Saving y del tipo de servidor. Si entras en las carpetas, encontrarás tus partidas guardadas locales.

:::note
Dependiendo de la versión del juego, tus partidas estarán en una carpeta v1 o v3.
:::

### Accediendo a la partida guardada vía FTP

Hacer una copia de seguridad de tu partida guardada desde el servidor es sencillo. Una vez conectado a tu servidor de juegos mediante un cliente FTP, ve a la siguiente ruta:
```
../vrising/save-data/Saves
```

En esta ubicación, deberías ver una carpeta v1 y otra v3, dependiendo de la versión del juego. Dentro de cada una encontrarás tus partidas guardadas. Simplemente haz clic derecho en la carpeta y usa el botón **Descargar** para guardarla localmente en tu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/tZ4HngqLeHTkizz/preview)

### Copia de seguridad automática

También ofrecemos una opción para hacer copias de seguridad automáticas de tu partida guardada (y archivo de configuración) directamente desde nuestro panel web. Solo ve al panel web de tu servidor de juegos y entra en la sección **Herramientas->Copias de seguridad**. Aquí puedes configurar varias opciones para programar copias automáticas para tu servidor. Te damos 10 GB de almacenamiento gratuito para copias de seguridad donde se guardarán tus backups. Para más info sobre copias de seguridad, echa un vistazo a nuestra guía dedicada [Copias de seguridad](gameserver-backups.md).

## Subir partida guardada

Al igual que hacer copias de seguridad, subir tu partida guardada es fácil. Primero asegúrate de conectarte a tu servidor de juegos mediante un cliente FTP. Cuando estés listo, ve a la siguiente ruta:
```
../vrising/save-data/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/RXd4aoxrA6QnP46/preview)

Dependiendo de la versión de tus partidas, simplemente arrastra y suelta cualquiera de tus partidas guardadas en la carpeta correspondiente a través de tu cliente FTP y se subirán a tu servidor.

:::tip
Puede ser útil copiar el nombre de la carpeta de la partida guardada que subiste, ya que lo necesitarás para activarla en la siguiente sección.
:::

## Activar partida guardada

Para usar una partida guardada específica, tendrás que editar un archivo de configuración. Hay varias formas de hacerlo, pero cubriremos cómo hacerlo desde el panel web, ya que es lo más sencillo. Si quieres ver otros métodos para editar el archivo, consulta nuestra guía de [Configuración del servidor](vrising-configuration.md).

Simplemente ve a la sección **Configuración** en el panel web de tu servidor de juegos y busca la opción **Savename**.

Cambia esta opción al nombre de la carpeta de la partida guardada que subiste en el paso anterior. Cuando termines, asegúrate de guardar abajo con el botón verde **Guardar** y luego reinicia tu servidor.

<InlineVoucher />