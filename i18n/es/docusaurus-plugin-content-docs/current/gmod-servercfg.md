---
id: gmod-servercfg
title: "Garry's Mod: Configuración de Server.cfg"
description: "Configura los ajustes de tu servidor de juegos Garry's Mod para personalizar la jugabilidad y los límites de spawn para una experiencia optimizada → Aprende más ahora"
sidebar_label: Modificación de Server.cfg en Garry's Mod
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Configura tu server.cfg en Garry's Mod.

Para cambiar el server.cfg directamente desde nuestro panel web, vamos a la pestaña Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/TNFHX38G5PNpqac/preview)

Después abrimos el server.cfg en nuestro editor de configuración integrado.

![](https://screensaver01.zap-hosting.com/index.php/s/Pro5QoBBKSQCTdF/preview)

Ahora estás en nuestro editor de configuración, aquí puedes cambiar todas las variables que quieras, solo asegúrate de no mezclar ajustes entre nuestra pestaña de Configuración y el server.cfg, esto podría afectar: hostname, rcon_password y sv_password.

Variables posibles para personalizar tu servidor de juegos Garry's Mod:

Ajustes de spawn:
```
sbox_maxprops 150		//Establece el límite máximo de props que un jugador puede tener.
sbox_maxragdolls 10		//Establece el límite máximo de ragdolls que un jugador puede tener.
sbox_maxballoons 10		//Establece el límite máximo de globos que un jugador puede tener.
sbox_maxeffects 10		//Establece el límite máximo de efectos que un jugador puede tener. (Sensibles al FPS)
sbox_maxdynamite 10		//Establece el límite máximo de dinamita que un jugador puede tener.
sbox_maxlamps 10		//Establece el límite máximo de lámparas que un jugador puede tener.
sbox_maxthrusters 10	//Establece el límite máximo de propulsores que un jugador puede tener.
sbox_maxwheels 10		//Establece el límite máximo de ruedas que un jugador puede tener.
sbox_maxnpcs 10			//Establece el límite máximo de NPCs que un jugador puede tener.
sbox_maxhoverballs 10	//Establece el límite máximo de hoverballs que un jugador puede tener.
sbox_maxvehicles 10		//Establece el límite máximo de vehículos que un jugador puede tener.
sbox_maxbuttons 10		//Establece el límite máximo de botones que un jugador puede tener.
```

Ajustes de juego:
```
sbox_plpldamage 0 / 1	//0 = PVP desactivado, 1 = PVP activado
sbox_godmode	0 / 1	//0 = desactivado, 1 = activado (Modo dios para todos los jugadores)
sbox_noclip		0 / 1	//0 = Noclip desactivado, 1 = Noclip activado
sv_noclipaccelerate 3	//Cambia la velocidad del noclip.
sv_alltalk 1			//Si está activado, puedes escuchar a todos los jugadores en el servidor.
```

Ajustes relacionados con la red (No se recomiendan cambios)
```
sv_minrate 0			//Velocidad mínima de conexión
sv_maxrate 10000		//Velocidad máxima de conexión
sv_minupdaterrate 10	//Tickrate mínimo
sv_maxupdaterrate 66	//Tickrate máximo
net_maxfilesize	64		//Tamaño máximo de archivo que se puede transferir sin FastDL.
sv_lan 0				//Convierte el juego en un juego online.
sv_region 3				//0+1 = US, 2 = Sudáfrica, 3 = Europa, 4 = Asia, 5 = Australia, 6 = Medio Oriente, 7 = África, 255 = Mundial
```

Si has cambiado todo como quieres, solo necesitas guardar tus cambios.

![](https://screensaver01.zap-hosting.com/index.php/s/zpaddQA5EXfSRM3/preview)

Después de reiniciar el servidor, todos los cambios estarán activos.

<InlineVoucher />