---
id: satisfactory-savegame
title: "Satisfactory: Gestiona tus partidas guardadas"
description: "Descubre cómo gestionar y hacer copias de seguridad de tus partidas guardadas de Satisfactory localmente y en tu servidor para un juego seguro → Aprende más ahora"
sidebar_label: Gestión de partidas guardadas
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En esta guía, exploraremos cómo gestionar tus partidas guardadas de Satisfactory en tu servidor de juegos, incluyendo cómo hacer copias de seguridad de tus partidas locales y del servidor, así como subirlas a tu servidor.

<InlineVoucher />

## Preparación

Para acceder a los archivos de tu servidor, necesitarás un cliente FTP como [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), ambos de código abierto y gratuitos.

Tendrás que conectarte a tu servidor mediante un cliente FTP usando las credenciales que encontrarás en **Herramientas->FTP-Browser** en el panel web de tu servidor de juegos. Usa nuestra [guía de acceso vía FTP](gameserver-ftpaccess.md) para más ayuda para conectar con tu servidor.

## Copia de seguridad de la partida guardada

### Partida guardada local

Las partidas guardadas locales son las que creas mientras juegas en modo un jugador o alojas una partida multijugador localmente en tu dispositivo. Estas se encuentran dentro del AppData de Windows, específicamente en la siguiente ruta:
```
../AppData/Local/FactoryGame/Saved/SaveGames
```

:::tip
Puedes acceder fácilmente a esta ruta directamente presionando `CTRL` + `R` al mismo tiempo y buscando la siguiente ruta en el cuadro de ejecutar: `%localappdata%/FactoryGame/Saved/SaveGames`. Simplemente presiona **OK** y te llevará a la carpeta.

![](https://screensaver01.zap-hosting.com/index.php/s/pbXDwJWfEPtbAY3/preview)
:::

En esta ubicación, podrás ver carpetas que contienen tus partidas guardadas locales todas en un solo lugar.

![](https://screensaver01.zap-hosting.com/index.php/s/knB2RkXYGNR7J5M/preview)

### Accediendo a la partida guardada vía FTP

Hacer una copia de seguridad de tu partida guardada desde el servidor es sencillo. Una vez conectado a tu servidor de juegos mediante un cliente FTP, dirígete a la siguiente ruta:
```
../satisfactory/save-backups
```

En esta ubicación, deberías ver una carpeta con una serie de caracteres aleatorios que corresponde a tu partida guardada. Simplemente haz clic derecho en la carpeta y usa el botón **Descargar** para guardarla localmente en tu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/feHc74QHrzPwo24/preview)

### Copia de seguridad automática

También ofrecemos una opción para hacer copias de seguridad automáticas de tu partida guardada (y archivo de configuración) directamente desde nuestro panel web. Simplemente ve al panel web de tu servidor de juegos y entra en la sección **Herramientas->Backups**. Aquí puedes configurar varias opciones para programar copias de seguridad automáticas para tu servidor. Te ofrecemos 10 GB de almacenamiento gratuito para copias de seguridad donde se guardarán tus backups. Para más información sobre copias de seguridad, echa un vistazo a nuestra guía dedicada de [Backups](gameserver-backups.md).

## Subir partida guardada

De forma similar a hacer una copia de seguridad, subir tu partida guardada es sencillo. Primero asegúrate de conectarte a tu servidor de juegos mediante un cliente FTP. Cuando estés listo, dirígete a la siguiente ruta:
```
../satisfactory/save-backups
```

![](https://screensaver01.zap-hosting.com/index.php/s/8WsKYjYzNk54A65/preview)

Simplemente arrastra y suelta cualquiera de tus partidas guardadas en esta carpeta a través de tu cliente FTP y se subirá a tu servidor.

:::tip
Puede ser útil copiar el nombre de la carpeta de la partida guardada que has subido, ya que lo necesitarás si quieres activarla en la siguiente sección.
:::

## Activar partida guardada

Usar tu partida guardada es muy fácil. Puedes gestionarlo a través del Satisfactory Server Manager dentro del juego o entrando al panel de tu servidor y usando la sección **Savegame Manager**.

## Conclusión

Has añadido con éxito una partida guardada a tu servidor de juegos. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />