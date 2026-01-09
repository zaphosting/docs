---
id: enshrouded-server-savegames
title: "Enshrouded: Gestión de partidas guardadas en Enshrouded"
description: "Descubre cómo gestionar y hacer copias de seguridad de tus partidas guardadas de Enshrouded para un juego multijugador seguro → Aprende más ahora"
sidebar_label: Gestionar partidas guardadas
services:
  - gameserver-enshrouded
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En esta guía, exploraremos cómo gestionar tus partidas guardadas de Enshrouded en tu servidor de juegos, incluyendo cómo hacer copias de seguridad de tus partidas locales y del servidor, así como subirlas a tu servidor.

<InlineVoucher />

## Preparación

Para acceder a los archivos de tu servidor, necesitarás un cliente FTP como [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), ambos de código abierto y gratuitos.

Deberás conectarte a tu servidor mediante un cliente FTP usando las credenciales que encontrarás en **Herramientas->Explorador FTP** en el panel web de tu servidor de juegos. Usa nuestra [guía de acceso vía FTP](gameserver-ftpaccess.md) para más ayuda para conectar con tu servidor.

## Copia de seguridad de la partida guardada

### Partida guardada local

Las partidas guardadas locales son las que creas mientras alojas una partida multijugador localmente en tu dispositivo. Por defecto, Enshrouded usa Steam Cloud para hacer una copia de seguridad automática de tu partida guardada. Para acceder a esto, tendrás que ir a la carpeta userdata de Steam para acceder a los datos del juego. Ve a la siguiente ruta:
```
../Steam/userdata/[tu_steamid]/1203620/remote
```

:::tip
En instalaciones normales, la carpeta Steam estará en la unidad de tu sistema operativo, en la ruta: `C://Program Files x86/Steam`. Ten en cuenta que puede ser diferente si instalaste Steam en otro lugar.
:::

Una vez en esta carpeta, podrás ver un archivo de personajes junto con todas tus partidas guardadas locales en un solo lugar.

![](https://screensaver01.zap-hosting.com/index.php/s/dyydLNzQt7ZWRPx/preview)

:::note
Si explícitamente **no** usas Steam Cloud para guardar, podrás encontrar tu carpeta de guardado en el siguiente directorio: `C://Users/[tuusuario]/Saved Games/Enshrouded`.
:::

### Acceso a la partida guardada vía FTP

Hacer copia de seguridad de tu partida guardada desde el servidor es sencillo. Una vez conectado a tu servidor de juegos mediante un cliente FTP, ve a la siguiente ruta:
```
../enshrouded/savegame/
```

En esta ubicación, deberías ver un archivo con caracteres aleatorios que es tu partida guardada. Simplemente haz clic derecho sobre el archivo y usa el botón **Descargar** para guardarlo localmente en tu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/wTcodeKXYq3RBfY/preview)

### Copia de seguridad automática

También ofrecemos una opción para hacer copias de seguridad automáticas de tu partida guardada (y archivo de configuración) directamente desde nuestro panel web. Solo tienes que ir al panel web de tu servidor de juegos y entrar en la sección **Herramientas->Copias de seguridad**. Aquí puedes configurar varias opciones para programar copias automáticas para tu servidor. Te damos 10 GB de almacenamiento gratuito para copias de seguridad donde se guardarán tus backups. Para más info sobre copias de seguridad, echa un vistazo a nuestra guía dedicada [Copias de seguridad](gameserver-backups.md).

## Subir partida guardada

Al igual que hacer copias, subir tu partida guardada es fácil. Primero asegúrate de conectarte a tu servidor de juegos mediante un cliente FTP. Cuando estés listo, ve a la siguiente ruta:
```
../enshrouded/savegame/
```

![](https://screensaver01.zap-hosting.com/index.php/s/gJW8wSapi4Bo2gw/preview)

Simplemente arrastra y suelta cualquiera de tus partidas guardadas en esta carpeta a través del cliente FTP y se subirá a tu servidor.

## Activar partida guardada

Usar tu partida guardada es muy fácil. Solo conéctate a tu servidor y durante la pantalla de configuración del juego podrás elegir una partida guardada específica que quieras usar. El nombre de la partida, nivel y fecha de última partida se mostrarán debajo de cada guardado para ayudarte a identificar cuál quieres seleccionar.

Has añadido con éxito una partida guardada a tu servidor de juegos.

<InlineVoucher />