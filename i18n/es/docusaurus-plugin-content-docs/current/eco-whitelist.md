---
id: eco-whitelist
title: "ECO: Lista blanca"
description: "Información sobre cómo poner en lista blanca tu servidor ECO desde ZAP-Hosting→ Aprende más ahora"
sidebar_label: Lista blanca
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una lista blanca es una lista de acceso que limita quién puede conectarse a tu servidor. En ECO, la lista blanca se guarda en la configuración `Users.eco` y se activa automáticamente una vez que al menos un SteamID64 está presente.

## Activar la lista blanca

Conéctate a tu servidor vía FTP y localiza el archivo `Users.eco`. Ábrelo y busca la sección `WhiteList`. Añade los valores SteamID64 dentro de `$values`.

```json
"WhiteList": {
  "System.String": {
"$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
"$values": [
  "76561198000000000"
]
  }
}
```

Guarda el archivo y reinicia el servidor para asegurarte de que la nueva lista de acceso se aplique.

## Gestionar jugadores en la lista blanca

Agregar jugadores también se puede hacer a través de la Consola en vivo en la gestión del servidor de juegos de ZAP-Hosting si tienes el permiso requerido dentro del juego. Usa el comando whitelist con el nombre del jugador.

```text
/whitelist PlayerName
```

Para eliminar jugadores, edita el archivo `Users.eco`. Borra el SteamID64 de `$values`, guarda y reinicia el servidor ya que no hay comando en el servidor para eliminar entradas.

## Verificar el funcionamiento de la lista blanca

Después del reinicio, intenta conectarte con una cuenta que no esté incluida en `$values`. El acceso debería estar bloqueado. Luego conéctate con una cuenta que esté en la lista blanca.

Si el acceso sigue abierto, confirma que al menos un SteamID64 está presente y que el archivo `Users.eco` que editaste coincide con la instancia activa del servidor.

## Conclusión

Si seguiste correctamente todos los pasos anteriores, tu lista blanca ya está activa y puedes controlar exactamente quién puede unirse al servidor. Si el acceso aún no funciona como esperas, reinicia el servidor una vez más y revisa el archivo o la salida del comando para confirmar que el cambio se aplicó.

<InlineVoucher />