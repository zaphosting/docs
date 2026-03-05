---
id: csgo-becomeadmin
title: "CS:GO: Cómo ser admin"
description: "Descubre cómo asignar y gestionar permisos de administrador para tener control total de tu servidor en CS:GO → Aprende más ahora"
sidebar_label: Ser admin
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total de tu servidor. Como admin, puedes usar todas las opciones y funciones disponibles que ofrece el juego directamente desde la partida. A continuación te explicamos todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

## Preparación
Para usar privilegios de administrador, primero hay que establecer una base. Por defecto, CS:GO no ofrece una gestión completa de administración. Sin embargo, existen frameworks para este propósito, como CounterStrikeSharp. Este framework debe estar instalado para poder configurarlo. Si aún no lo tienes instalado, no dudes en echar un vistazo a nuestra [guía de Instalación de Plugins](csgo-plugins).

## Definir Admins

Agregar un admin se hace a través del archivo de configuración `admins.json`, que se encuentra en `../CS:GO/game/csgo/addons/CounterStrikeShap/addons/configs/`. Para declarar un nuevo admin, debes crear una nueva entrada. Esta debe incluir un nombre, un identificador (identity) y flags (permisos). El nombre lo puedes asignar a tu gusto, ya que solo sirve como marcador/identificador. Para el identificador "identity", debes usar el SteamID de la cuenta de Steam. Además, las flags deben definirse según lo que necesites.

```js title="admins.json (Ejemplo)"
{
  "User 1": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"]
  },
  "User 2": {
    "identity": "STEAM_0:1:1",
    "flags": ["@css/generic"]
  }
}
```

## Definir Grupos de Admin
También puedes definir grupos de admin. Así, los permisos de un admin se asignan a través de su grupo correspondiente. De esta forma, no tienes que configurar permisos individualmente para cada admin. Los grupos se definen en el archivo de configuración `admin_groups.json`, ubicado en `../CS:GO/game/csgo/addons/CounterStrikeShap/addons/configs/`.

```js title="admin_groups.json"
"#css/simple-admin": {
  "flags": [
    "@css/generic",
    "@css/reservation",
    "@css/ban",
    "@css/slay",
  ]
}
```

## Definir Inmunidad de Admin
Se puede asignar un valor de inmunidad a los admins. Si un admin o jugador con un valor de inmunidad menor ataca a otro admin o jugador con un valor de inmunidad mayor, el comando fallará. Puedes definir este valor agregando la clave immunity a cada admin en `configs/admins.json`.

```
{
  "ZoNiCaL": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"],
    "immunity": 100
  }
}
```
:::info
La comprobación de inmunidad no la realiza automáticamente CounterStrikeSharp. Depende de cada plugin manejar y gestionar esta comprobación.
:::

## Conclusión

¡Felicidades, ya configuraste los permisos de administrador con éxito! Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para asistirte. 🙂

<InlineVoucher />