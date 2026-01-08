---
id: dayz-whitelist
title: "DayZ: Lista blanca"
description: "Información sobre cómo poner en lista blanca tu servidor de juegos DayZ en ZAP-Hosting → Aprende más ahora"
sidebar_label: Lista blanca
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una lista blanca es una lista de acceso que restringe quién puede unirse a tu servidor. DayZ ofrece un modo de lista blanca incorporado que puedes activar y luego gestionar por jugador.

<InlineVoucher />


## Activar la Lista Blanca

Conéctate a tu servidor vía FTP y abre el archivo principal de configuración `serverDZ.cfg`. Localiza la opción de lista blanca y actívala.

```cfg
enableWhitelist = 1;
```

Luego, localiza o crea el archivo de lista blanca que tu host expone, comúnmente llamado `whitelist.txt` y ubicado junto a los archivos de configuración del servidor. Añade un SteamID64 por línea.

```txt
XXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXX
```

Guarda todos los archivos y reinicia el servidor para que la lista blanca se aplique.

## Gestionar Jugadores en la Lista Blanca

Para añadir un jugador, agrega su SteamID64 en `whitelist.txt`, guarda y reinicia el servidor. Para eliminar un jugador, borra su línea de `whitelist.txt`, guarda y reinicia el servidor.

Mantén el archivo limpio con un ID por línea. Los comentarios no son soportados universalmente, así que evita texto extra en la misma línea a menos que hayas confirmado que tu servidor lo acepta.

## Verificar el Funcionamiento de la Lista Blanca

Después del reinicio, intenta conectarte con una cuenta que no esté en `whitelist.txt`. El acceso debería ser denegado. Luego conéctate con una cuenta listada para confirmar que funciona.

Si los jugadores listados no pueden unirse, verifica que usaste valores SteamID64 y que el servidor está cargando el mismo `whitelist.txt` que editaste.

## Conclusión

Si seguiste correctamente todos los pasos anteriores, tu lista blanca ya está activa y puedes controlar exactamente quién puede unirse al servidor. Si el acceso sigue sin funcionar como esperas, reinicia el servidor una vez más y revisa el archivo o la salida de comandos para confirmar que el cambio se aplicó.

Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />