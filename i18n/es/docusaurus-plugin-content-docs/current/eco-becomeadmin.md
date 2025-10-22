---
id: eco-becomeadmin
title: "ECO: Cómo ser Admin"
description: "Descubre cómo asignar permisos de administrador para tener control total del servidor y gestionar el juego de forma eficiente → Aprende más ahora"
sidebar_label: Ser admin
services:
  - gameserver-eco
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total sobre tu servidor. Como admin, puedes usar todas las opciones y funciones disponibles que ofrece el juego directamente desde el juego. A continuación te explicamos todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

## Configuración
Agregar un admin se hace a través del archivo **Users.eco** Config, que puedes encontrar en la interfaz bajo Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/ACgPpyPfGmnmi8X/preview)

Para añadir un nuevo jugador como admin, hay que modificar la siguiente sección en el archivo **Users.eco** Config:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
  },
```

El jugador que quieres que sea admin se especifica en el campo **values**. En caso de varios admins, se añaden separados por comas. Para identificar al jugador se usa el SteamID64.

Puedes encontrarlo accediendo a tu perfil de Steam y haciendo clic derecho en cualquier parte del perfil. Ahí puedes copiar la URL de tu perfil de Steam.

![](https://screensaver01.zap-hosting.com/index.php/s/YQoe4tpFzbRTAqd/preview)

Después, la URL debe pegarse en uno de estos sitios web:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/3RSya5KbWGfcgHr/preview)

Esto te mostrará la información general de la cuenta y el Steam ID. Ese Steam ID es el que debes insertar en **values**. El resultado quedaría así:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
			"123456789",
			"otroSteamID"
	]
    }
  },
```

Una vez reiniciado el servidor, los jugadores registrados ahí tendrán privilegios de administrador. Si quieres añadir más admins, ya no tienes que hacerlo siempre vía Config. Puedes hacerlo directamente en el juego con el siguiente comando:

```
/admin [jugador]
```

A continuación tienes un resumen de comandos comunes que puedes usar como admin.

## Comandos más usados

|              Comandos              |                      Descripción                       |
| :--------------------------------: | :----------------------------------------------------: |
|             /allblocks             |                   Genera todos los bloques             |
|          /allconstructed           |         Genera todos los bloques construibles por jugadores         |
|             /allplants             |                Genera todos los bloques de plantas                 |
|             /allskills             |                   Desbloquea todas las habilidades                   |
|            /allterrain             |               Genera todos los bloques excavables               |
|          /allworldobjects          |                Genera todos los objetos del mundo                |
|      /kick [jugador],(razón)       |                      Expulsa a un usuario                      |
|       /ban [jugador],(razón)       |                      Banea a un usuario                       |
|     /give [nombreitem],(cantidad)      |                 Te da un ítem                  |
| /giveskillpoints [jugador],(cantidad) |           Da puntos de habilidad a otro jugador           |
|                /fly                |                    Activa o desactiva modo vuelo                    |
|         /move [x],[y],[z]          | Te mueve a la posición x, y, z; donde xyz son números enteros. |
|       /removeadmin [jugador]        |               Quita a un usuario como Admin               |

Más comandos disponibles los puedes encontrar en la [Wiki oficial de ECO](https://eco.gamepedia.com/Chat_Commands).

## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, que está disponible todos los días para ayudarte. 🙂

<InlineVoucher />