---
id: 7d2d-becomeadmin
title: "7 Days to Die: Cómo convertirte en admin para 7 Days to Die"
description: "Descubre cómo asignar y gestionar permisos de administrador para tener control total del servidor y roles de admin personalizados → Aprende más ahora"
sidebar_label: Convertirse en admin
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
La asignación de permisos de administrador te permite una administración sencilla y completa con control total sobre tu servidor. Como administrador, tienes la opción de usar todas las opciones y funciones disponibles que ofrece el juego directamente dentro del juego. A continuación, se describen todos los pasos que debes seguir para asignar permisos de administrador a tu servidor.  
<InlineVoucher />

## Configuración
Agregar un admin se hace a través del archivo de configuración **serveradmin.xml**, que puedes encontrar en la interfaz web bajo Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/wXpLL2qyZE2zCYa/preview)

Puedes encontrar tu SteamID64 yendo a tu perfil de Steam y haciendo clic derecho en cualquier parte del perfil. Luego haz clic en **Copiar URL de Steam**.

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)

Después abre una de las siguientes páginas y pega la URL de tu perfil allí:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Esto te proporcionará información general así como el Steam ID de tu cuenta. En este caso solo necesitamos el SteamID64. El SteamID64 se especifica luego dentro de ``<admins>...</admins>``. Se verá así:

```
 <users>
    <user steamID="76561198021925107" name="Pista sobre quién es este usuario" permission_level="0" />
  </users>
```

:::danger  ¿No se reconoce el registro de admin? 
Asegúrate de eliminar los caracteres de comentario `<!--` y `-->` para que la línea sea válida. De lo contrario, la línea seguirá siendo solo un comentario y no se aplicará. Simplemente elimina esos caracteres al inicio y al final de la línea para activarla.
:::

El juego ofrece la posibilidad de definir diferentes niveles de permisos para los permisos de administrador. Esto significa que es posible definir distintos grupos de administradores con permisos diferentes. El nivel se define con la opción ``permission_level``. Este puede configurarse de 0 a 1000. Dependiendo de cómo se configure, los administradores tendrán acceso a los permisos asignados. Una vez hecho esto, los permisos de administrador se habrán asignado correctamente.

## Permisos

Los permisos para todos los comandos de administrador se pueden definir bajo ``permissions``. Para esto, el ``permission_level`` debe ajustarse, igual que cuando agregas administradores. Se verá así:

```
<permissions>
	<permission cmd="dm" permission_level="0" ></permission>
	<permission cmd="kick" permission_level="1" ></permission>
	<permission cmd="say" permission_level="1000" ></permission>
    <permission cmd="chunkcache" permission_level="1000" ></permission>
    <permission cmd="debugshot" permission_level="1000" ></permission>
    <permission cmd="debugweather" permission_level="1000" ></permission>
    <permission cmd="getgamepref" permission_level="1000" ></permission>
</permissions>
```

Un nivel de permiso es un valor entre 0 y 1000 que determina qué permisos tiene un jugador. 1000 es el nivel más bajo (sin permisos) y 0 es el más alto (permisos completos de administrador). Dependiendo de cómo quieras que sean los permisos, debes ajustarlo en consecuencia.

## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para asistirte. 🙂

<InlineVoucher />