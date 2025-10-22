---
id: avorion-becomeadmin
title: "Avorion: Conviértete en admin de tu propio servidor"
description: "Descubre cómo asignar permisos de administrador para tener control total del servidor y gestionar las funciones del juego de forma efectiva → Aprende más ahora"
sidebar_label: Convertirse en admin
services:
  - gameserver-avorion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total de tu servidor. Como administrador, puedes usar todas las opciones y funciones disponibles que ofrece el juego directamente dentro del juego. A continuación, te explicamos todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

## Configuración

Agregar un admin se hace desde la página de configuración en la interfaz web. Haz clic en **Administración del servidor de juegos** en **Configuración** y baja hasta **Ajustes del servidor**.

![](https://screensaver01.zap-hosting.com/index.php/s/gzei7sWedJMrqzc/preview)

Ahí encontrarás un campo llamado **Admin SteamIDs**. Debes ingresar tu SteamID64. Para encontrar tu SteamID64, primero abre tu perfil de Steam y haz clic derecho en cualquier parte. Luego selecciona **Copiar URL de Steam**.

![](https://screensaver01.zap-hosting.com/index.php/s/q7E3qSd9GoLCswM/preview)

Después abre alguna de estas páginas y pega la URL de tu perfil:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Estas te mostrarán información general y el Steam ID de tu cuenta. Solo necesitas el SteamID64. Ese es el que debes pegar en el campo correspondiente. Debería verse así:

![](https://screensaver01.zap-hosting.com/index.php/s/qakTq9iLW72jkyC/preview)

Haz clic en **Guardar**. Una vez que reinicies el servidor, podrás ejecutar comandos de admin dentro del juego. Para hacerlo, pulsa Enter para abrir el chat y ejecuta los comandos con el símbolo /.

## Comandos de admin

Aquí tienes un resumen de comandos comunes que puedes usar como admin.

**Comandos generales**

| Comando                 | Descripción                                                  |
| :---------------------- | :----------------------------------------------------------- |
| /help                   | muestra mensaje de ayuda                                     |
| /w [nombre jugador]     | envía un mensaje privado a un jugador                        |
| /save                   | guarda el estado actual                                     |
| /stop                   | detiene el servidor                                         |
| /seed                   | semilla del servidor                                        |
| /version                | muestra la versión actual del servidor                      |
| /suicide                | destruye tu nave actual                                     |
| /player                 | muestra el número de jugadores                              |
| /status                 | muestra información sobre el estado actual del servidor    |
| /admin -a [nombre jugador] | añade un jugador como admin                               |
| /admin -r [nombre jugador] | elimina a un jugador como admin                            |
| /kick [nombre jugador]  | expulsa a un jugador del servidor                           |
| /ban [nombre jugador]   | añade al jugador a la lista negra                           |
| /unban [nombre jugador] | elimina al jugador de la lista negra                        |
| /banip [IP jugador]     | añade la IP del jugador a la lista negra                    |
| /unbanip [IP jugador]   | elimina la IP del jugador de la lista negra                 |
| /blacklist              | muestra las opciones de la lista negra                      |
| /whitelist              | muestra las opciones de la lista blanca                     |

**Comandos de cheat (dentro del juego):**

| Comando                                | Descripción                                           |
| :------------------------------------- | :---------------------------------------------------- |
| /give [nombre jugador] [cantidad] credits    | da al jugador la cantidad deseada de créditos          |
| /give [nombre jugador] [cantidad] [nombre mineral] | da al jugador la cantidad deseada del mineral seleccionado |

**Comandos del servidor (consola):**

| Comando                       | Descripción                                                  |
| :---------------------------- | :----------------------------------------------------------- |
| /max-logs [valor]             | cantidad de archivos de log que se mantienen                 |
| /difficulty [valor]           | dificultad del servidor, valores permitidos: -3, -2, -1, 0, 1, 2, 3 Por defecto: 0 |
| /collision-damage [valor]     | daño causado a un objeto en colisión, de 0 a 1. 0: sin daño, 1: daño total. Por defecto: 1 |
| /exit-on-last-admin-logout    | apaga el servidor cuando el último admin cierre sesión       |
| /public [valor]               | indica si el servidor permite que otros jugadores se unan    |
| /infinite-resources [valor]   | activa recursos infinitos para todos los jugadores           |
| /listed [valor]               | indica si el servidor aparece en listas públicas              |
| /max-players [valor]          | número máximo de jugadores en línea Por defecto: 10          |
| /save-interval [valor]        | intervalo entre guardados Por defecto: 300                    |
| /same-start-sector arg        | indica si todos los jugadores empiezan en el mismo sector    |
| /server-name [valor]          | nombre del servidor, se mostrará cuando se consulte           |
| /use-steam-networking [valor] | usa la red y autenticación de Steam para los usuarios         |
| /galaxy-name [valor]          | nombre de la galaxia, se añade a la ruta de datos, la ruta final será [datapath]/[galaxyname] |
| /datapath [valor]             | carpeta donde se almacenan las galaxias, se antepone al nombre de la galaxia |
| /admin [valor]                | steam id(s) del(los) administrador(es) del servidor          |

## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para echarte una mano 🙂 

<InlineVoucher />