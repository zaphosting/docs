---
id: source-metamod-addadmins
title: Conviértete en admin del servidor
description: "Descubre cómo ser admin obteniendo tu Steam ID y configurando permisos para la gestión del servidor → Aprende más ahora"
sidebar_label: Convertirse en admin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Conviértete en admin

Para poder registrarte como admin, es esencial tener instalado Source- / Metamod.

Además, necesitas el Steam ID de tu cuenta de Steam. Hay varias formas de obtenerlo. Puedes usar una web externa que ofrezca este servicio o usar la consola del juego.

<InlineVoucher />

### SteamID vía web

Primero, abre el perfil en Steam y haz clic derecho en cualquier parte del perfil. Ahí puedes copiar la URL de Steam del perfil.

![](https://screensaver01.zap-hosting.com/index.php/s/5xbii7Kzmpa33KE/preview)

Después, pega la URL en alguna de estas páginas:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/wiMssSGFEXWSF9R/preview)

Luego recibirás el Steam ID junto con la info general de la cuenta. Necesitas el **Steam ID 32**:

```
steamID32: STEAM_0:1:XXXXXX
```

### SteamID vía consola del juego

Arranca el juego y conéctate a tu servidor. Abre la consola del juego y usa el comando 'status', verás algo así:

```
] status
Connected to XXX.XXX.XXX.XX:XXXXX
hostname: Server Hosted by ZAP-Hosting.com
version : 1.37.1.1 secure
os : Linux
type : community dedicated
map : en_dust2
players : 1 humans, 0 bots (16/0 max) (not hibernating)

# userid name uniqueid connected ping loss state rate
# 2 1 "Player name" STEAM_1:1:XXXXXXXXX 44:39 30 0 active 196608
#end
```

### Configuración

Luego, conéctate al servidor vía FTP y abre el archivo admins.cfg. Lo encontrarás en: addons/sourcemod/configs

El archivo ya trae un ejemplo de cómo debería verse una entrada de admin. Puedes copiarlo y modificarlo así:

```
Admins
{
	"Player name"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

El **nombre del jugador** **no** tiene que coincidir con el nombre de la cuenta Steam. Solo sirve para identificarlo en la Config. La entrada 'auth' es para la autenticación. Aquí siempre es Steam, así que no la cambies. En `identity` pones el SteamID32 de la cuenta. En `flags` defines los permisos. Hay varios niveles de permisos.

| permiso     | flag | uso                         |
| ------------|:----:|:---------------------------:|
| reserva    | a    | reserva de slots            |
| genérico   | b    | básico (necesario)          |
| kick       | c    | expulsar jugadores          |
| ban        | d    | banear jugadores            |
| unban      | e    | desbanear jugadores         |
| slay       | f    | matar o eliminar jugadores  |
| changemap  | g    | cambiar mapas               |
| cvar       | h    | cambiar valores del servidor|
| config     | i    | ejecutar configs del servidor|
| chat       | j    | permisos avanzados de chat  |
| vote       | k    | votos de admin              |
| password   | l    | poner contraseña al servidor|
| rcon       | m    | ejecutar comandos RCON      |
| cheats     | n    | activar sv_cheats del juego |
| root       | z    | acceso total                |

Según los permisos que quieras dar, pones las flags una detrás de otra. Por ejemplo, si solo quieres dar permiso para expulsar, asignas las flags 'b' y 'c'. Pero si quieres dar acceso total, solo la flag `z` basta.

### Usar el menú de admin

Con el comando 'admin' en el chat o 'sm_admin' en la consola puedes abrir el menú.

![](https://screensaver01.zap-hosting.com/index.php/s/jwLWXJ99XeJJGSK/preview)

<InlineVoucher />