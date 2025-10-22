---
id: factorio-becomeadmin
title: "Factorio: Cómo ser Admin"
description: "Descubre cómo asignar permisos de administrador para tener control total del servidor y gestionar opciones dentro del juego de forma efectiva → Aprende más ahora"
sidebar_label: Convertirse en admin
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total sobre tu servidor. Como administrador, puedes usar todas las opciones y funciones disponibles que ofrece el juego directamente dentro del juego. A continuación te explicamos todos los pasos que necesitas para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

## Configuración

Los derechos de administrador te permiten hacer cambios directamente en el juego en tu servidor sin tener que modificarlos en la Config. Añadir un admin se hace a través del archivo de configuración **server-settings.json**, que puedes encontrar en la interfaz bajo Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/nDGgzXfmgzqDrf5/preview)

Al final del archivo de configuración está la parte importante. Ahí se definen los admins:

```
  "_comment_admins": "Lista de nombres de usuario sin distinción de mayúsculas, que serán promovidos inmediatamente",
  "admins": []
}
```

Los nombres de los jugadores que recibirán permisos de administrador deben especificarse ahí. Si quieres añadir varios admins, podría quedar así por ejemplo:

```
  "_comment_admins": "Lista de nombres de usuario sin distinción de mayúsculas, que serán promovidos inmediatamente",
  "admins": [
  	"PlayerName1",
  	"PlayerName2",
  	"PlayerName3"
  ]
}
```

Los jugadores con los nombres **PlayerName1, PlayerName2, PlayerName3** ya tienen los permisos asignados. Ahora se pueden ejecutar comandos de admin en el juego a través de la consola. A continuación tienes un resumen de los comandos más usados.



### Comandos más usados

|                Comando                 |                         Descripción                          |
| :------------------------------------: | :----------------------------------------------------------: |
|                 /admin                 |               Abre la interfaz de gestión de jugadores.      |
|           /ban player reason           |                          Banea a un jugador                  |
|                 /bans                  |               Muestra la lista de jugadores baneados.        |
|             /unban player              |                         Desbanea a un jugador                |
|  /banlist add/remove/get/clear player  | Añade o elimina un jugador de la lista de baneos. Igual que /ban o /unban. |
|          /kick player reason           |                         Expulsa a un jugador                 |
|              /mute player              |                         Silencia a un jugador                |
|             /unmute player             |                        Quita el silencio a un jugador       |
| /whitelist add/remove/get/clear player |         Añade o elimina un jugador de la lista blanca        |

Puedes encontrar más comandos disponibles en la [Wiki oficial de Factorio](https://wiki.factorio.com/Console).


## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, que está disponible todos los días para ayudarte. 🙂

<InlineVoucher />