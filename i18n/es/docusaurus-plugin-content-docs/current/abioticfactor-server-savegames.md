---
id: abioticfactor-server-savegames
title: "Abiotic Factor: Gestión de partidas guardadas de Abiotic Factor"
description: "Descubre cómo gestionar y hacer copias de seguridad de tus partidas guardadas de Abiotic Factor localmente y en tu servidor para un juego seguro → Aprende más ahora"
sidebar_label: Gestionar partidas guardadas
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En esta guía, exploraremos cómo gestionar tus partidas guardadas de Abiotic Factor en tu servidor de juegos, incluyendo cómo hacer copias de seguridad de tus partidas guardadas locales y del servidor, así como subirlas a tu servidor.

<InlineVoucher />

## Preparación

Para acceder a los archivos de tu servidor, necesitarás un cliente FTP como [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), ambos de código abierto y gratuitos.

Deberás conectarte a tu servidor mediante un cliente FTP usando las credenciales que encontrarás en **Herramientas->Explorador FTP** en el panel web de tu servidor de juegos. Usa nuestra [Guía de acceso vía FTP](gameserver-ftpaccess.md) para más ayuda para conectarte a tu servidor.

## Copia de seguridad de la partida guardada

### Partida guardada local

Las partidas guardadas locales son las que creas mientras alojas una partida multijugador localmente en tu dispositivo. Estas se encuentran dentro del AppData local de Windows, específicamente en la siguiente ruta:
```
../AppData/Local/AbioticFactor/Saved/SaveGames/[tu_steamid]/Worlds
```

:::tip
Puedes acceder fácilmente a esta ruta presionando `CTRL` + `R` al mismo tiempo y buscando la siguiente ruta en el cuadro de diálogo Ejecutar: `%userprofile%/AppData/Local/AbioticFactor/Saved/SaveGames`. Simplemente presiona **OK** y serás llevado a la carpeta.

![](https://screensaver01.zap-hosting.com/index.php/s/zd7Zy5C6EH7BMHa/preview)
:::

Asegúrate de navegar a la carpeta con tu Steam ID y luego a la carpeta `Worlds`. Allí encontrarás todas tus partidas guardadas locales.

### Acceso a la partida guardada vía FTP

Hacer una copia de seguridad de tu partida guardada desde el servidor es sencillo. Una vez conectado a tu servidor de juegos mediante un cliente FTP, dirígete a la siguiente ruta:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds
```

En esta ubicación encontrarás tus partidas guardadas. Simplemente haz clic derecho en la carpeta y usa el botón **Descargar** para guardarla localmente en tu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/RJSeBFpCdGamK7s/preview)

### Copia de seguridad automática

También ofrecemos una opción para hacer copias de seguridad automáticas de tu partida guardada (y archivo de configuración) directamente desde nuestro panel web. Solo ve al panel web de tu servidor de juegos y entra en la sección **Herramientas->Copias de seguridad**. Aquí puedes configurar varias opciones para programar copias de seguridad automáticas para tu servidor. Te damos 10 GB de almacenamiento gratuito para copias de seguridad donde se guardarán tus backups. Para más info sobre copias de seguridad, echa un vistazo a nuestra guía dedicada [Copias de seguridad](gameserver-backups.md).

## Subir partida guardada

Al igual que hacer una copia de seguridad, subir tu partida guardada es fácil. Primero asegúrate de conectarte a tu servidor de juegos mediante un cliente FTP. Cuando estés listo, ve a la siguiente ruta:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

:::note
Actualmente, los servidores dedicados de Abiotic Factor no soportan cambiar entre partidas guardadas, por lo que debes subir el contenido de tu carpeta de partida guardada dentro de la carpeta principal `world`.
:::

Ahora abre la carpeta de la partida guardada que quieres subir. Simplemente arrastra y suelta todo el contenido interno de tu carpeta de partida guardada dentro de la carpeta principal `world` en el servidor. Esto subirá tu partida guardada a tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/wsT4MXpp2MFWLtQ/preview)

:::info
Si la carpeta principal de la partida guardada `world` falta, intenta apagar y encender el servidor. Si esto no ayuda, usa el botón **Revalidar archivos de Steam** en el panel principal del servidor de juegos para restaurar los archivos por defecto.
:::

## Activar partida guardada

A diferencia de tener que editar un archivo de configuración para activar tu partida guardada, aquí no es necesario porque los servidores dedicados de Abiotic Factor aún no soportan cambiar entre partidas guardadas.

Simplemente reinicia tu servidor y en el próximo inicio el servidor cargará el contenido de la partida guardada que subiste en la carpeta principal `world`.

<InlineVoucher />