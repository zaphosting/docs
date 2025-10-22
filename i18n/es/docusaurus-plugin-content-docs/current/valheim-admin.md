---
id: valheim-admin
title: "Valheim: Comandos y Trucos de Admin para el Servidor"
description: "Descubre cómo asignar permisos de administrador para tener control total del servidor y gestionar jugadores eficazmente en Valheim → Aprende más ahora"
sidebar_label: Comandos y Trucos de Admin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total sobre tu servidor. Como administrador, puedes usar todas las opciones y funciones disponibles que ofrece el juego directamente dentro del juego. A continuación, te explicamos todos los pasos que necesitas para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

### Configuración
Para agregarte como Admin, primero necesitas obtener tu SteamID64, puedes usar una herramienta como el [Steam ID Finder](https://steamidfinder.com/)

Aquí introduces la URL de tu perfil de Steam:

![](https://screensaver01.zap-hosting.com/index.php/s/e8H8Y4P9ojW9sD2/preview)

Luego presiona `Find Steam ID`

Ahora deberías poder ver tu perfil de Steam, aquí copiamos nuestro "Steam64ID (Dec)".

Después abrimos el panel web de nuestro servidor y vamos a la página de Configuración, donde veremos una opción llamada "Admins" para añadir nuestro Steam ID:

![](https://screensaver01.zap-hosting.com/index.php/s/aJkGRMcmWrnZyiM/preview)

Una vez añadido nuestro Steam ID, guardamos la configuración y reiniciamos el servidor.

## Acceder a la Consola

La consola en Valheim se abre presionando "F5" mientras estás dentro del juego, ahí puedes escribir todos los comandos de administrador.

### Comandos de Admin

|  Comando  |        Argumentos         |               Efecto                |
| :-------: | :-----------------------: | :--------------------------------: |
|   kick    |    Nombre/PlayerID/IP     | Expulsa al jugador especificado    |
|   ban     |    Nombre/PlayerID/IP     | Prohíbe al jugador especificado    |
|  unban    |       PlayerID/IP         | Quita la prohibición al jugador    |
|  banned   |           Ninguno         | Muestra todos los jugadores baneados |

<InlineVoucher />