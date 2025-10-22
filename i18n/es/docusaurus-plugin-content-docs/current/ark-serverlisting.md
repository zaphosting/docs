---
id: ark-serverlisting
title: "ARK: Problemas con la lista de servidores en juegos de Steam que usan Steamworks"
description: "Descubre por qué juegos populares enfrentan problemas para listar servidores debido a los límites de Steamworks y cómo afecta tu experiencia multijugador → Aprende más ahora"
sidebar_label: Problemas con la lista de servidores
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Lamentablemente, muchos juegos populares como ARK o Valheim tienen enormes problemas para listar todos los servidores en la lista de servidores dentro del juego.

Esto se debe a que estos juegos usan el software "Steamworks" para su listado.

Steamworks puede listar un máximo de 4880 servidores. Si un juego tiene más de esta cantidad de servidores activos, solo una pequeña parte de los servidores activos aparecerá para el jugador.

Es muy aleatorio si el jugador 1 ve el servidor Y o no.  
Por eso también pasa que el jugador 1 ve el servidor Y, pero el jugador 2 no. El jugador 3, en cambio, sí lo ve, pero no ve otro servidor que el jugador 1 sí ve.

Para descartar un problema con el proveedor del servidor, puedes buscar el servidor bajo "Steam" - "Ver" - "Servidor" con IP y puerto. Si se encuentra ahí, la conexión entre jugador y servidor es perfecta. Esto se debe a que se hace una consulta directa por parte del jugador.

Un buen ejemplo para validar el problema es que los jugadores de ARK que abren el juego vía Steam no pueden encontrar servidores. Si abren ARK en Epic Games, los servidores se encuentran perfectamente. Aquí no se usa Steamworks.

También hay varios desarrolladores que han comentado sobre este problema. Por ejemplo, Garry Newman de Garrysmod pensó que el problema estaba relacionado con su proveedor de servidores OVH. Sin embargo, no fue así. El problema está también con ZAP-Hosting y cualquier otro proveedor de servidores, ya que es directamente con Steamworks:

![](https://screensaver01.zap-hosting.com/index.php/s/M6DkmBYCjLsPBeW/preview)

Fuente: https://x.com/garrynewman/status/1334446218437681152?s=20

O incluso Rust, como escriben en su blog:

```
No todo es color de rosa cuando tienes un aumento tan repentino en popularidad.  
Empiezas a ver grietas en los cimientos, lo más notable para nosotros es que el navegador de servidores nunca fue pensado para manejar una cantidad tan grande de servidores.  
Sin entrar en detalles técnicos, esto ha resultado en que muchos servidores no se muestren para los usuarios y cause mucha frustración para los dueños de servidores.  
Actualmente estamos trabajando y explorando soluciones, así que por favor tengan paciencia con nosotros.
```

Fuente: https://rust.facepunch.com/blog/

Seguiremos atentos al problema e informaremos aquí cuando haya una solución.

<InlineVoucher />