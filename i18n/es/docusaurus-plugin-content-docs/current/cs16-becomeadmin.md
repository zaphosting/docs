---
id: cs16-becomeadmin
title: "CS 1.6: Cómo ser admin en tu propio servidor"
description: "Descubre cómo asignar permisos de administrador para tener control total del servidor y una gestión mejorada dentro del juego → Aprende más ahora"
sidebar_label: Ser admin
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total sobre tu servidor. Como administrador, puedes usar todas las opciones y funciones disponibles que ofrece el juego directamente desde dentro del juego. A continuación te explicamos todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

## Configuración
Agregar un admin se hace a través del archivo de configuración **users.ini**. Para poder ser admin y encontrar esos archivos, primero tienes que instalar **AMXmodX** y **Metamod**. Si aún no lo has hecho, te recomendamos echar un vistazo a esta guía: [Instalar Plugins](cs16-plugins.md)

Para editar el archivo de configuración **users.ini**, necesitas conectarte al servidor vía FTP. Ahí debes navegar hasta el directorio ``/gXXXX/cs16/cstrike/addons/amxmodx/configs``. Luego abrimos el archivo con un editor de texto y lo modificamos.

<InlineVoucher />

```
...
; Ejemplos de cuentas de admin:
; "STEAM_0:0:123456" "" "abcdefghijklmnopqrstu" "ce"
; "123.45.67.89" "" "abcdefghijklmnopqrstu" "de"
; "Mi Nombre" "mi_contraseña" "abcdefghijklmnopqrstu" "a"

"loopback" "" "abcdefghijklmnopqrstu" "de"
```

En la configuración, la entrada ``"loopback" "" "abcdefghijklmnopqrstu" "en"`` debe ajustarse. Antes la autenticación se hacía solo por nombre y contraseña. Hoy en día solo se hace vía SteamID64. Puedes encontrar tu SteamID64 abriendo tu perfil de Steam y haciendo clic derecho en cualquier parte del perfil. Ahí seleccionas **Copiar URL de Steam**.

Después, la URL la tienes que pegar en uno de estos sitios web:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/agXYcjRaDn8nSim/preview)

Esto te dará la información general de la cuenta y el Steam ID. En este caso solo necesitamos el SteamID64. Luego, el Steam ID debe añadirse en la entrada del cliente bajo **SteamID**. El resultado se verá así:

```
"STEAM_0:0:XXXXXX" "" "abcdefghijklmnopqrstu" "ce"
```

La línea contiene la siguiente info:

1. nombre/SteamID - ID único del jugador.
2. contraseña - no disponible si es autenticación por Steam
3. nivel de permisos 
4. flags de conexión - Estos flags controlan cómo AMX Mod X intenta autorizar a un admin que se conecta.

En este caso no se necesita contraseña porque la autenticación es vía Steam. Por eso ponemos ``ce`` en lugar de ``en``. Abajo tienes un resumen de todos los niveles de autorización y flags de conexión:



**Nivel de autorización**

| Nivel de autorización | Descripción                                                  |
| --------------------- | ------------------------------------------------------------ |
| a                     | inmunidad (no puede ser expulsado/banneado/matado/golpeado ni afectado por otros comandos) |
| b                     | reserva (puede unirse a slots reservados)                    |
| c                     | comando amx_kick                                             |
| d                     | comandos amx_ban y amx_unban                                 |
| e                     | comandos amx_slay y amx_slap                                 |
| f                     | comando amx_map                                              |
| g                     | comando amx_cvar (no todos los cvars estarán disponibles)    |
| h                     | comando amx_cfg                                              |
| i                     | comandos de chat amx_chat y otros                            |
| j                     | comandos de votación amx_vote y otros                        |
| k                     | acceso al cvar sv_password (por comando amx_cvar)            |
| l                     | acceso al comando amx_rcon y cvar rcon_password (por amx_cvar)|
| m                     | nivel personalizado A (para plugins adicionales)             |
| n                     | nivel personalizado B (para plugins adicionales)             |
| o                     | nivel personalizado C (para plugins adicionales)             |
| p                     | nivel personalizado D (para plugins adicionales)             |
| q                     | nivel personalizado E (para plugins adicionales)             |
| r                     | nivel personalizado F (para plugins adicionales)             |
| s                     | nivel personalizado G (para plugins adicionales)             |
| t                     | nivel personalizado H (para plugins adicionales)             |
| u                     | acceso al menú                                              |
| z                     | usuario (sin admin)                                          |



**Flags de conexión** 

| Flag | Descripción                                        |
| ---- | -------------------------------------------------- |
| a    | desconectar jugador si la contraseña es inválida  |
| b    | etiqueta de clan                                   |
| c    | esto es steamid/wonid                              |
| d    | esto es ip                                         |
| e    | contraseña no verificada (solo se necesita nombre/ip/steamid) |


## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para ayudarte. 🙂

<InlineVoucher />