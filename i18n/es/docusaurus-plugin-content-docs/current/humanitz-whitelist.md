---
id: humanitz-whitelist
title: "HumanitZ: Gestión de Whitelist"
description: "Aprende a gestionar la whitelist y controlar el acceso a tu servidor de HumanitZ → Descubre más ahora"
sidebar_label: "Whitelist"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

La whitelist te permite controlar exactamente quién puede unirse a tu servidor de HumanitZ. Cuando está activada, solo los jugadores cuyos Steam IDs estén listados en el archivo de jugadores permitidos podrán conectarse.

<InlineVoucher />

## Configuración

La funcionalidad de whitelist se controla dentro del archivo `GameServerSettings.ini`. Puedes acceder a este archivo en el panel de gestión de tu servidor bajo **Configs**. Para activar el modo whitelist, localiza y configura el siguiente parámetro:

```
OnlyAllowedPlayers=1
```

- `OnlyAllowedPlayers=1` – Activa el modo whitelist. Solo los jugadores listados pueden unirse.
- `OnlyAllowedPlayers=0` – Desactiva el modo whitelist. Todos los jugadores pueden unirse.

Después de activar el modo whitelist, debes crear el archivo de whitelist manualmente.

Conéctate a tu servidor vía [FTP](gameserver-ftpaccess.md) usando tu cliente FTP favorito. Una vez conectado, navega al directorio principal del servidor y crea un archivo nuevo llamado `F_MVPAccess.txt`. Dentro de este archivo, introduce un **Steam ID único por línea** para cada jugador que quieras permitir.

```
76561198000000001
76561198000000002
```

Guarda el archivo después de añadir los Steam IDs.

## Monitorización de la Actividad de Jugadores

HumanitZ proporciona archivos adicionales para rastrear las conexiones de jugadores. `F_ConnectedPlayers.txt` muestra los jugadores conectados actualmente y `PlayerConnectedLog.txt` registra todas las conexiones y desconexiones, incluyendo el nombre de Steam y el Steam ID único con marcas de tiempo.

Estos archivos son útiles para identificar Steam IDs y monitorizar la actividad del servidor. Tras hacer cualquier cambio en los archivos de whitelist o baneos, guarda los archivos y reinicia el servidor para asegurar que los cambios se apliquen correctamente.

## Conclusión

¡Enhorabuena! Activando el modo whitelist y gestionando los archivos `F_MVPAccess.txt` y `F_BannedPlayers.txt`, has configurado con éxito el control de acceso en tu servidor de HumanitZ.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />