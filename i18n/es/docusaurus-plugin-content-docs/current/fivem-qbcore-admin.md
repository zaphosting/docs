---
id: fivem-qbcore-admin
title: "FiveM: Conviértete en admin usando QBCore"
description: "Descubre cómo asignar permisos de administrador para tener control total del servidor y una gestión mejorada dentro del juego → Aprende más ahora"
sidebar_label: Conviértete en admin
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total de tu servidor. Como administrador, tienes la opción de usar todas las funciones y opciones disponibles que el juego ofrece directamente dentro del juego. A continuación, te explicamos todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.

<InlineVoucher />

## Configuración

La configuración de los permisos de administrador se realiza a través del archivo de configuración ``server.cfg``. Para ello, inicia sesión en la interfaz de txAdmin y abre el Editor CFG. Luego, navega hasta el final del archivo de configuración hasta llegar a la sección `Permissions`.

![img](https://screensaver01.zap-hosting.com/index.php/s/KPRTmPoYdsCWjGd/preview)

QBCore soporta varios identificadores de jugador, incluyendo IDs de FiveM (`identifier.fivem:`), licencias de Rockstar (`identifier.license:`) y IDs de Discord (`identifier.discord:`). Estos identificadores puedes obtenerlos directamente desde tu interfaz de txAdmin. Así, puedes decidir si quieres asignarles el estado GOD, Admin o Mod.

Una vez que tengas los identificadores y hayas decidido qué estado asignar, puedes otorgar permisos individuales a los jugadores agregándolos en tu `server.cfg`. Para ello, añade una de estas tres opciones disponibles como una nueva entrada bajo la sección de permisos:

```
add_principal identifier.license:xxxxxx qbcore.god   # Nombre del Jugador
add_principal identifier.license:xxxxxx qbcore.admin # Nombre del Jugador
add_principal identifier.license:xxxxxx qbcore.mod   # Nombre del Jugador
```

El resultado final podría verse así, por ejemplo:

```
## Permissions ##
add_ace group.admin command allow # permitir todos los comandos
# Nota del Desplegador: este admin master no tiene identificadores para ser añadido automáticamente.
# add_principal identifier.discord:111111111111111111 group.admin #ejemplo

add_principal identifier.fivem:16219250 qbcore.admin # Nombre del Jugador
```

## Conclusión

Si has seguido todos los pasos correctamente, ahora eres admin en tu propio servidor. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />