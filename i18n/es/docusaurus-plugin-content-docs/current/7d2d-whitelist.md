---
id: 7d2d-whitelist
title: "7 Days To Die: Lista Blanca"
description: "Información sobre cómo poner en lista blanca tu servidor de 7 Days To Die en ZAP-Hosting → Aprende más ahora"
sidebar_label: Lista Blanca
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una lista blanca es una lista de acceso que limita quién puede unirse a tu servidor. En 7 Days To Die esto se gestiona comúnmente en el archivo serveradmin.xml, que almacena las cuentas de Steam en lista blanca. Una vez activada, solo los jugadores listados allí pueden conectarse.

<InlineVoucher />


## Activando la Lista Blanca

Conéctate a tu servidor vía FTP y localiza el archivo `serveradmin.xml`. En la mayoría de las instalaciones alojadas está en el directorio de guardado, comúnmente bajo una ruta similar a `7-days-to-die/Saves/<WorldName>/<SaveName>/serveradmin.xml` o directamente en `7-days-to-die/Saves/serveradmin.xml` dependiendo de la estructura del proveedor. Abre el archivo y busca la sección `<whitelist>` dentro de `<adminTools>`.

Agrega al menos un SteamID64 a la lista blanca. El formato a continuación sigue la estructura por defecto usada por el juego.

```xml
<whitelist>
  <user steamID="76561198021925107" name="PlayerName" permission_level="1000" />
</whitelist>
```

Guarda el archivo y reinicia el servidor para que se cargue la nueva lista blanca. Si tu archivo solo contiene ejemplos comentados, asegúrate de que la línea `<user ... />` no esté dentro de un comentario XML.

## Gestionando Jugadores en la Lista Blanca

Para agregar otro jugador, repite el mismo cambio en `serveradmin.xml` añadiendo otra entrada `<user ... />` dentro de `<whitelist>`. Usa el SteamID64 del jugador para `steamID`.

Para eliminar un jugador, borra la línea correspondiente `<user ... />` de la sección `<whitelist>`, guarda y reinicia el servidor.

Si prefieres usar comandos, abre la Consola en Vivo en la gestión del servidor de juegos de ZAP-Hosting y usa los comandos integrados de lista blanca para añadir o eliminar jugadores. Los cambios hechos por comandos se reflejarán en los mismos datos de lista blanca que el servidor usa al reiniciarse.

## Verificando la Funcionalidad de la Lista Blanca

Después del reinicio, intenta conectarte con una cuenta que no esté en la lista blanca. El intento de conexión debería ser rechazado. Luego prueba con una cuenta en lista blanca para confirmar que el acceso funciona.

Si el servidor aún permite la entrada a jugadores no listados, revisa que tus entradas en la lista blanca no estén comentadas y que hayas editado el `serveradmin.xml` correcto para la partida activa.

## Conclusión

Si seguiste correctamente todos los pasos anteriores, tu lista blanca ya está activa y puedes controlar exactamente quién puede unirse al servidor. Si el acceso sigue sin funcionar como esperas, reinicia el servidor una vez más y revisa el archivo o la salida de comandos para confirmar que el cambio se aplicó.

Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />