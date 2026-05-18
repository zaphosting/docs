---
id: dst-whitelist
title: "Don't Starve Together: Lista blanca"
description: "Información sobre cómo poner en lista blanca tu servidor de Don't Starve Together en ZAP-Hosting → Aprende más ahora"
sidebar_label: Lista blanca
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una lista blanca es una lista de acceso que limita quién puede unirse a tu servidor. En Don't Starve Together, esto se implementa como una lista de permitidos basada en los IDs de usuario de Klei. La configuración habitual es un archivo `whitelist.txt` junto con `whitelist_slots` en `cluster.ini`.

<InlineVoucher />


## Activar la lista blanca

Conéctate a tu servidor vía FTP y localiza la carpeta del clúster, comúnmente algo como `DoNotStarveTogether/Cluster_1/` o una ruta específica del proveedor que contenga `cluster.ini`. Abre `cluster.ini` y en la sección `[NETWORK]` configura `whitelist_slots`.

Para que el servidor funcione exclusivamente con lista blanca, pon `whitelist_slots` igual al valor de `max_players`.

```ini
[NETWORK]
max_players = 6
whitelist_slots = 6
```

En el mismo directorio del clúster, crea o edita `whitelist.txt`. Añade un ID KU_ por línea.

```txt
KU_aaaaaaaa
KU_bbbbbbbb
```

Guarda los archivos y reinicia el servidor. La lista de permitidos se lee al iniciar.

## Gestionar jugadores en la lista blanca

Para añadir un jugador, agrega su ID KU_ en `whitelist.txt`, guarda y reinicia.

Para eliminar un jugador, borra su ID KU_ de `whitelist.txt`, guarda y reinicia.

Mantén el número de IDs en `whitelist.txt` al menos igual a `whitelist_slots` para evitar problemas al unirse cuando los slots reservados superan el número de usuarios listados.

## Verificar que la lista blanca funciona

Después del reinicio, intenta unirte con una cuenta que no esté en `whitelist.txt`. Si `whitelist_slots` es igual a `max_players`, la conexión debería fallar. Luego únete con un ID KU_ listado para confirmar el acceso.

Si el servidor aún permite jugadores no listados, confirma que editaste la carpeta activa del clúster y que la sección `[NETWORK]` contiene la línea `whitelist_slots`.

## Conclusión

Si seguiste todos los pasos anteriores correctamente, tu lista blanca ya está activa y puedes controlar exactamente quién puede unirse al servidor. Si el acceso sigue sin funcionar como esperas, reinicia el servidor una vez más y revisa los archivos o la salida de comandos para confirmar que el cambio se aplicó.

<InlineVoucher />