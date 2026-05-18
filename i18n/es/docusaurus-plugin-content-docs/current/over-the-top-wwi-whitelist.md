---
id: over-the-top-wwi-whitelist
title: "Over the Top WWI: Configura la Whitelist"
description: "Aprende cómo activar y gestionar una whitelist en tu servidor de Over the Top WWI → Descubre más ahora"
sidebar_label: Whitelist
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una whitelist te permite restringir el acceso a tu servidor de **Over the Top WWI** para que solo los jugadores aprobados puedan unirse. Esto es especialmente útil para servidores privados, comunidades o entornos de prueba donde el acceso debe estar controlado.

Al activar la whitelist, solo los jugadores listados en el archivo de whitelist podrán conectarse al servidor.

<InlineVoucher />

## Configuración

La whitelist se configura dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra el siguiente parámetro:

```
WhiteListIsEnabled = True
WhiteListPathString = Whitelist.txt
```

- `WhiteListIsEnabled` activa o desactiva el sistema de whitelist

- `False` → Desactivado
- `True` → Activado

- `WhiteListPathString` define el archivo usado para almacenar los IDs de jugadores permitidos

Cuando la whitelist está activada, solo los jugadores listados en el archivo especificado podrán unirse al servidor.

## Gestión de la whitelist

El archivo de whitelist normalmente se encuentra en el directorio de tu servidor y contiene una lista de IDs de jugadores permitidos.

Cada jugador debe añadirse en una nueva línea dentro del archivo:

```
SteamID1
SteamID2
SteamID3
```

Asegúrate de usar los identificadores correctos de los jugadores, de lo contrario el acceso será denegado. Después de actualizar el archivo de whitelist o modificar el `ServerConfiguration.ini`, guarda los cambios y reinicia el servidor. La whitelist se aplicará entonces.

## Conclusión

¡Felicidades! Has configurado exitosamente la whitelist en tu **servidor de Over the Top WWI**. Esto te permite controlar quién puede acceder a tu servidor y mantener un entorno privado o moderado.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂

<InlineVoucher />