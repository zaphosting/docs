---
id: ark-becomeadmin
title: "ARK: Conviértete en admin"
description: "Descubre cómo gestionar tu servidor de juegos con control total de administrador y mejora la experiencia de juego → Aprende más ahora"
sidebar_label: Conviértete en admin
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total de tu servidor. Como administrador, tienes la opción de usar todas las opciones y funciones disponibles que ofrece el juego directamente dentro del juego. A continuación, se describen todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

## Configuración

Los derechos de administrador te permiten hacer cambios directamente en el juego en tu servidor sin tener que modificarlos en la Config. Para asignarte derechos de administrador a ti mismo u otros jugadores, primero debes definir una contraseña de administrador del servidor. Esta contraseña se define en los ajustes de nuestra interfaz web.

![](https://screensaver01.zap-hosting.com/index.php/s/kLEsKbT6RN6c7Na/preview)

Una vez definida la contraseña, es necesario reiniciar el servidor. Después podrás conectarte a tu servidor e iniciar sesión como admin a través de la consola dentro del juego con el siguiente comando y tu contraseña de administrador del servidor:

```
enableCheats contraseña
```

Después podrás ejecutar todos los comandos del servidor como admin. A continuación encontrarás un resumen de los comandos más usados.

## Comandos más usados

| Comando                                        | Descripción                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| setcheatplayer TRUE/FALSE                      | Activa / desactiva el menú de trucos                         |
| admincheat AllowPlayerToJoinNoCheck SteamID    | Añade un jugador a la lista blanca                            |
| admincheat DisallowPlayerToJoinNoCheck SteamID | Elimina un jugador de la lista blanca                         |
| admincheat SetMessageOfTheDay Mensaje          | Define el mensaje del día (MOTD). Este mensaje aparece cuando un jugador se conecta al servidor de juegos |
| admincheat broadcast Mensaje                    | Envía un mensaje a todos los jugadores en el servidor        |
| admincheat god                                 | Activa la inmortalidad para tu propio jugador                 |
| admincheat fly                                 | Activa el vuelo para tu propio jugador                        |
| admincheat walk                                | Desactiva el vuelo para tu propio jugador                     |
| admincheat teleport                            | Teletransporta a tu jugador en la dirección en la que estás mirando |
| admincheat slomo                               | Cambia la velocidad del servidor y la velocidad de movimiento de todos los jugadores |
| admincheat playersonly                         | Detiene todos los movimientos de criaturas y detiene/impide la fabricación |
| admincheat ghost                               | Activa el modo Noclip para tu propio jugador                  |
| admincheat forcetame                           | Permite domesticar dinosaurios al instante y montar sin silla |
| admincheat listplayers                         | Lista todos los jugadores incluyendo el SteamId64            |
| admincheat banplayer SteamId64                 | Prohíbe jugadores usando el SteamID64                         |
| admincheat unbanplayer SteamId64               | Quita la prohibición a jugadores usando el SteamID64          |
| admincheat setplayerpos x y z                  | Teletransporta a tu jugador a la ubicación deseada            |
| admincheat saveworld                           | Guarda el estado actual del mundo                             |
| admincheat addexperience Cantidad              | Añade experiencia al jugador                                  |
| admincheat settimeofday Hora                    | Cambia la hora del día del servidor de juegos. Ejemplo: "admincheat settimeofday 12:00" |

## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Para cualquier pregunta o ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para asistirte 🙂 

<InlineVoucher />