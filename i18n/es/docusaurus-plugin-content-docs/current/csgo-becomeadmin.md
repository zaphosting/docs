---
id: csgo-becomeadmin
title: "CS:GO: Cómo ser admin"
description: "Descubre cómo asignar y gestionar permisos de administrador para tener control total de tu servidor en CS:GO con Sourcemod → Aprende más ahora"
sidebar_label: Ser admin
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total de tu servidor. Como admin, puedes usar todas las opciones y funciones que Sourcemod ofrece directamente dentro del juego. A continuación te explicamos todos los pasos para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

## Preparación

Para usar privilegios de administrador, primero hay que establecer una base. Por defecto, CS:GO no ofrece una gestión completa de administración. Sin embargo, existen frameworks para esto, como Sourcemod. Debes instalar el framework para poder configurarlo. Si aún no lo has hecho, no dudes en consultar nuestra guía de instalación de plugins para CS:GO.

## Definir admins

Agregar admins se puede hacer mediante el archivo de configuración `admins_simple.ini` o `admins.cfg`, que encontrarás en `../csgo/cstrike/addons/sourcemod/configs/`. Para configuraciones simples, `admins_simple.ini` suele ser suficiente. Ahí defines admins por SteamID y asignas las flags de permisos directamente.

```ini title="admins_simple.ini (Ejemplo)"
"STEAM_0:1:12345678" "z"
"STEAM_0:1:87654321" "bcdefgjk"
```

En este ejemplo, el primer admin recibe permisos completos con la flag `z`, mientras que el segundo solo recibe permisos seleccionados.

Si quieres usar configuraciones más avanzadas como grupos, inmunidad o contraseñas, deberías usar `admins.cfg`.

```
Admins
{
  "Usuario 1"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:12345678"
    "flags"   "z"
  }

  "Usuario 2"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:87654321"
    "flags"   "bcdefgjk"
  }
}
```

## Definir grupos de admins

También puedes definir grupos de admins. Así, los permisos de un admin se gestionan a través de su grupo correspondiente. De esta forma no tienes que configurar permisos individualmente para cada admin. Los grupos se definen en el archivo `admin_groups.cfg`, ubicado en `../csgo/cstrike/addons/sourcemod/configs/`.

```
Groups
{
  "Admin completo"
  {
    "flags"   "z"
    "immunity" "99"
  }

  "Moderador"
  {
    "flags"   "bcdefgjk"
    "immunity" "10"
  }
}
```

Luego, puedes asignar un grupo a un admin en el archivo `admins.cfg`:

```
Admins
{
  "Usuario 1"
  {
    "auth"     "steam"
    "identity" "STEAM_0:1:12345678"
    "group"    "Admin completo"
  }
}
```

## Definir inmunidad de admins

Se puede asignar un valor de inmunidad a admins o grupos. Si un admin con menor inmunidad intenta afectar a otro con mayor inmunidad, el comando fallará. Puedes definir la inmunidad añadiendo la clave `immunity` a cada admin en `admins.cfg` o directamente en `admin_groups.cfg`.

```
Admins
{
  "ZoNiCaL"
  {
    "auth"      "steam"
    "identity"  "STEAM_0:1:12345678"
    "flags"     "z"
    "immunity"  "100"
  }
}
```

Un valor de inmunidad más alto significa mayor protección contra acciones administrativas de otros admins con menor inmunidad.

## Conclusión

¡Felicidades! Has configurado con éxito los permisos de administrador para tu servidor de CS:GO con Sourcemod. Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte 🙂 

<InlineVoucher />