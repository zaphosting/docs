---
id: starmade-whitelist
title: "StarMade: Lista blanca"
description: "Información sobre cómo poner en lista blanca tu servidor de StarMade en ZAP-Hosting → Aprende más ahora"
sidebar_label: Lista blanca
services:
  - gameserver-starmade
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una lista blanca es una lista de acceso que limita quién puede unirse a tu servidor. StarMade soporta una lista blanca integrada controlada en `server.cfg` y poblada a través de `whitelist.txt`.

<InlineVoucher />

## Activar la lista blanca

Conéctate a tu servidor vía FTP y abre `server.cfg`. Activa la autenticación y la lista blanca.

```cfg
USE_STARMADE_AUTHENTICATION=true
REQUIRE_STARMADE_AUTHENTICATION=true
USE_WHITELIST=true
```

Guarda el archivo. Luego abre o crea `whitelist.txt` en el mismo directorio del servidor. Añade jugadores con el formato que usa StarMade, una entrada por línea.

```txt
act:-1:PlayerName
act:-1:AnotherPlayer
```

Reinicia el servidor para cargar la lista blanca actualizada.

## Gestionar jugadores en la lista blanca

Para añadir un jugador, agrega una nueva línea en `whitelist.txt` usando el mismo formato, guarda y reinicia. Para eliminar un jugador, borra su línea de `whitelist.txt`, guarda y reinicia.

Si los nombres contienen caracteres especiales, usa el nombre exacto del juego tal como aparece al iniciar sesión para evitar errores.

## Verificar que la lista blanca funciona

Después del reinicio, intenta conectarte con una cuenta que no esté en `whitelist.txt`. El acceso debería ser denegado. Luego conéctate con un nombre listado.

Si los jugadores listados no pueden unirse, confirma que la autenticación de StarMade esté activada y requerida, de lo contrario los nombres podrían no coincidir correctamente.

## Conclusión

Si seguiste todos los pasos anteriores correctamente, tu lista blanca ya está activa y puedes controlar exactamente quién puede unirse al servidor. Si el acceso sigue sin funcionar como esperas, reinicia el servidor una vez más y revisa el archivo o la salida de comandos para confirmar que el cambio se aplicó.

Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />