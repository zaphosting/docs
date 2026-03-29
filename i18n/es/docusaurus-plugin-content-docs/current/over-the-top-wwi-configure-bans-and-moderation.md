---
id: over-the-top-wwi-configure-bans-and-moderation
title: "Over the Top WWI: Configura baneos y moderación"
description: "Aprende a configurar listas de baneos y ajustes de moderación en tu servidor Over the Top WWI → Aprende más ahora"
sidebar_label: Baneos y Moderación
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Las herramientas de moderación en **Over the Top WWI** te permiten controlar el comportamiento de los jugadores y mantener un ambiente justo y divertido en tu servidor. Configurando las listas de baneos y los ajustes de moderación, puedes restringir el acceso, gestionar sanciones y proporcionar instrucciones claras para los jugadores.

Estos ajustes son especialmente útiles para servidores comunitarios donde se requiere una moderación activa.

<InlineVoucher />

## Configuración

Los ajustes de baneos y moderación se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
BanPathstring = Banlist.txt
TempBanPathstring = TempBanlist.txt
CustomUnBanString =
```

- `BanPathstring` define el archivo que contiene a los jugadores baneados permanentemente  
- `TempBanPathstring` define el archivo que contiene a los jugadores baneados temporalmente  

- `CustomUnBanString` te permite definir un mensaje personalizado que indique a los jugadores cómo solicitar un desbaneo. Ejemplo: enlace de Discord o página web

### Uso del archivo de baneos

Los archivos de baneos están ubicados en el directorio de tu servidor y contienen los identificadores de los jugadores.

Cada jugador baneado debe estar listado en una línea nueva dentro del archivo:

```
SteamID1
SteamID2
SteamID3
```

Estos archivos son leídos automáticamente por el servidor para bloquear el acceso a los jugadores listados. Ajustar estos parámetros te permite definir cómo se manejan los baneos y cómo los jugadores pueden apelar.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los ajustes de moderación actualizados se aplicarán automáticamente.

## Conclusión

¡Felicidades! Has configurado con éxito los ajustes de baneos y moderación en tu **servidor Over the Top WWI**. Esto te permite gestionar el comportamiento de los jugadores de forma efectiva y mantener un entorno controlado en el servidor.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />