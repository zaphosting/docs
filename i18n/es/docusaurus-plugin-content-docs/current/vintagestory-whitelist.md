---
id: vintagestory-whitelist
title: "Vintage Story: Lista blanca"
description: "Información sobre cómo poner en lista blanca tu servidor de Vintage Story en ZAP-Hosting → Aprende más ahora"
sidebar_label: Lista blanca
services:
  - gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una lista blanca es una lista de acceso que restringe quién puede unirse a tu servidor. Vintage Story ofrece un modo de lista blanca integrado que puedes activar y luego alternar por jugador.

<InlineVoucher />


## Activar la Lista Blanca

Abre la consola dentro del juego y configura el modo de lista blanca con el comando de configuración del servidor. Usa el valor 1 para el modo lista blanca para permitir solo a los jugadores en la lista blanca.

```text
/serverconfig whitelistmode 1
```

Reinicia el servidor una vez después de activar el modo para asegurar que la configuración se mantenga y se aplique correctamente al iniciar.

## Gestionar Jugadores en la Lista Blanca

Para permitir a un jugador, agrégalo a la lista blanca usando el comando de jugador.

```text
/player PlayerName whitelist on
```

Para quitar el acceso, desactiva la lista blanca para ese jugador.

```text
/player PlayerName whitelist off
```

Si necesitas verificar la configuración actual del servidor, imprime la configuración actual o ejecuta el comando whitelistmode sin cambiar otros valores y confirma que sigue en 1.

## Verificar el Funcionamiento de la Lista Blanca

Intenta conectarte con un jugador que no esté en la lista blanca. La conexión debería ser rechazada. Luego conecta con un jugador para quien activaste `whitelist on`.

Si todos aún pueden unirse, confirma que `whitelistmode` esté en 1 y que ejecutaste los comandos en el servidor correcto.

## Conclusión

Si seguiste correctamente todos los pasos anteriores, tu lista blanca ya está activa y puedes controlar exactamente quién puede unirse al servidor. Si el acceso sigue sin funcionar como esperas, reinicia el servidor una vez más y revisa el archivo o la salida del comando para confirmar que el cambio se aplicó.

Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />