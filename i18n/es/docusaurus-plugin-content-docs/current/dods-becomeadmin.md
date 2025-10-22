---
id: dods-becomeadmin
title: "Day of Defeat: Source: Cómo ser admin"
description: "Descubre cómo asignar permisos de admin para tener control total del servidor y gestionar las funciones del juego de forma efectiva → Aprende más ahora"
sidebar_label: Ser admin
services:
  - gameserver-dods
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

Asignar permisos de administrador te permite una administración sencilla y completa con control total sobre tu servidor. Como admin, puedes usar todas las opciones y funciones disponibles que ofrece el juego directamente desde el juego. A continuación te explicamos todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.

<InlineVoucher />



## Configuración

Para registrarte como admin, es obligatorio instalar SourceMod o MetaMod. Además, necesitarás el Steam ID de tu cuenta de Steam. Hay varias formas de obtenerlo: puedes usar una web externa que ofrezca este servicio o sacarlo directamente desde la consola dentro del juego.


Para obtener tu SteamID vía web, primero abre tu perfil de Steam y haz clic derecho en cualquier parte de la página para copiar la URL del perfil. Luego, pega esta URL en alguna de las siguientes webs:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

La página mostrará tu SteamID junto con otra info de la cuenta. Para registrar al admin, necesitas el **SteamID32**:

```
steamID32: STEAM_0:1:XXXXXX
```

Alternativamente, puedes sacar tu SteamID dentro del juego usando la consola. Arranca el juego, conéctate a tu servidor, abre la consola y escribe el comando:

```
status
```

Esto mostrará tus datos de conexión, incluyendo tu SteamID. Luego, conéctate al servidor vía FTP y abre el archivo `admins.cfg` que está en:

```
.../addons/sourcemod/configs/
```

El archivo contiene un ejemplo que puedes copiar y adaptar:

```
Admins
{
	"Nombre del jugador"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

El **nombre del jugador** no tiene que coincidir con tu nombre de cuenta Steam; es solo para referencia interna. El campo `auth` define el método de autenticación, que debe ser `steam`. En `identity` pones el SteamID32. Las `flags` definen los permisos que tendrá el admin:

| Permiso     | Flag | Descripción               |
|-------------|:----:|---------------------------|
| reserva     | a    | Reserva de slots          |
| genérico    | b    | Derechos básicos (oblig.) |
| kick        | c    | Expulsar jugadores        |
| ban         | d    | Banear jugadores          |
| unban       | e    | Desbanear jugadores       |
| slay        | f    | Matar o dar slap          |
| changemap   | g    | Cambiar mapa              |
| cvar        | h    | Cambiar valores del servidor |
| config      | i    | Ejecutar configs del servidor |
| chat        | j    | Derechos avanzados de chat |
| vote        | k    | Iniciar votaciones admin  |
| password    | l    | Poner contraseña al servidor |
| rcon        | m    | Ejecutar comandos RCON    |
| cheats      | n    | Activar `sv_cheats`       |
| root        | z    | Acceso total              |

Puedes combinar varias flags (ejemplo: `bc` para derechos de kick). Para acceso total, usa solo `z`. Puedes abrir el menú de admin escribiendo `admin` en el chat o `sm_admin` en la consola. Con el comando `admin` en el chat o `sm_admin` en la consola se abre el menú.



## Comandos de Admin

Aquí tienes una lista de comandos comunes que puedes usar como admin en tu servidor.

| Comando                           | Descripción                                   |
| --------------------------------- | --------------------------------------------- |
| `sm_kick <jugador>`               | Expulsa a un jugador                          |
| `sm_ban <jugador> <tiempo> [razón]` | Banea a un jugador por X minutos (0 = permanente) |
| `sm_unban <SteamID/IP>`           | Desbanea a un jugador                         |
| `sm_slay <jugador>`               | Mata instantáneamente al jugador              |
| `sm_slap <jugador> [daño]`        | Da un slap al jugador (opcional con daño)    |
| `sm_map <nombre_mapa>`            | Cambia al mapa especificado                   |
| `sm_cvar <cvar> <valor>`          | Cambia una variable de configuración del servidor en tiempo real |
| `sm_vote <tema>`                  | Inicia una votación básica                     |
| `sm_restartgame <segundos>`       | Reinicia el juego tras una cuenta atrás       |
| `sm_say <mensaje>`                | Envía un mensaje al chat global                |



## Conclusión

¡Felicidades! Si seguiste todo al pie de la letra, ya deberías tener configurados los permisos de admin en tu servidor. Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para echarte una mano! 🙂

<InlineVoucher />