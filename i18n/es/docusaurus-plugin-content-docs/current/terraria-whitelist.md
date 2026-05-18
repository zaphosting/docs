---
id: terraria-whitelist
title: "Terraria: Lista blanca"
description: "Información sobre cómo poner en lista blanca tu servidor de Terraria en ZAP-Hosting → Aprende más ahora"
sidebar_label: Lista blanca
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una lista blanca es una lista de acceso que restringe quién puede unirse a tu servidor. Para el hosting de Terraria, el método común para la lista blanca es usar un servidor TShock y activar su función de lista blanca, que se gestiona mediante un archivo de lista blanca y comandos.

<InlineVoucher />

## Activando la lista blanca

Conéctate a tu servidor vía FTP y confirma que tu servidor está corriendo TShock. Luego localiza el archivo de configuración de TShock `tshock/config.json` y activa la opción de lista blanca:

```
"EnableWhitelist": true
```

Guarda el archivo y reinicia el servidor. TShock ahora requerirá aprobación en la lista blanca para las conexiones entrantes.

## Gestionando jugadores en la lista blanca

Para añadir una entrada, abre la Consola en Vivo en el panel de gestión del servidor de juegos de ZAP-Hosting y usa el comando whitelist con la dirección IP del jugador.

```text
whitelist 203.0.113.25
```

TShock guarda la lista en `tshock/whitelist.txt`. Para eliminar una entrada, conéctate vía FTP, abre ese archivo, borra la línea con la IP, guarda y reinicia el servidor.

```txt
203.0.113.25
198.51.100.10
```

## Verificando la funcionalidad de la lista blanca

Después del reinicio, intenta conectarte desde una dirección IP que no esté en la lista. El acceso debería estar bloqueado. Luego conéctate desde una IP que sí esté en la lista blanca.

Si los jugadores aún pueden unirse sin estar listados, revisa que `EnableWhitelist` esté en true en `config.json` y que el servidor realmente haya arrancado como TShock.

## Conclusión

Si seguiste todos los pasos anteriores correctamente, tu lista blanca ya está activa y puedes controlar exactamente quién puede unirse al servidor. Si el acceso sigue sin funcionar como esperas, reinicia el servidor una vez más y revisa el archivo o la salida del comando para confirmar que el cambio se aplicó.

Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂



<InlineVoucher />