---
id: unturned-whitelist
title: "Unturned: Activa y edita la whitelist en el servidor"
description: "Descubre cómo asegurar tu servidor de Unturned activando y gestionando la whitelist para un acceso controlado de jugadores → Aprende más ahora"
sidebar_label: Whitelist
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Activa la whitelist

La whitelist en Unturned te permite proteger tu servidor permitiendo que solo los jugadores seleccionados que estén en la lista puedan conectarse. Activar la whitelist se hace dentro del juego mediante un comando. Esto requiere **permisos de propietario**. Si no sabes qué es esto ni cómo asignarlos, echa un vistazo a esta guía: [Convertirse en admin](unturned-becomeadmin.md)

Si seguiste la guía y te convertiste en admin con éxito, ahora puedes activar la whitelist en tu servidor. Para hacerlo, abre el chat/consola dentro del juego en tu servidor. Ahí tienes que ejecutar el siguiente comando:

```
/Whitelisted
```

La whitelist debería estar activa ahora y, por lo tanto, solo permitirá que los jugadores que estén en la lista se unan al servidor. Añadir y eliminar jugadores es posible usando los siguientes comandos.

## Gestiona la whitelist

**Agregar jugador a la whitelist:**

```
Permit [SteamID]/[Tag]
```

**Eliminar jugador de la whitelist:**

```
Unpermit [SteamID]
```

**Mostrar todos los jugadores permitidos:**

```
Permits
```

<InlineVoucher />