---
id: minecraft-whitelist
title: "Minecraft: Activar y editar una whitelist en el servidor"
description: "Descubre cómo proteger tu servidor de Minecraft gestionando el acceso de jugadores con la función whitelist y protege tu experiencia de juego → Aprende más ahora"
sidebar_label: Whitelist
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
La **whitelist de Minecraft** es una opción para proteger tu servidor permitiendo que solo los jugadores seleccionados en la lista puedan conectarse a tu servidor. Por defecto, Minecraft no ofrece una opción de contraseña para el servidor como otros juegos.

![](https://screensaver01.zap-hosting.com/index.php/s/zbbRQdonbZPTeib/preview)

<YouTube videoId="nyor26XxwLY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oSWCcxscEcDzrq7/preview" title="Cómo activar la WHITELIST en tu servidor de Minecraft" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que te lo explica todo. Ya sea que tengas prisa o prefieras absorber la información de la forma más entretenida posible."/>

<InlineVoucher />

## Activar whitelist



### Activación (Config)

Para activar la whitelist, el valor del comando en el archivo **server.properties** debe estar configurado en **true**. Es necesario reiniciar el servidor para que el cambio tenga efecto.

```
white-list=true
```



### Activación (Chat)

Alternativamente, la opción de whitelist también puede activarse dentro del juego o vía la consola en vivo:

```
/whitelist on			(Activar opción whitelist)
/whitelist off			(Desactivar opción whitelist)
```



Para activar la whitelist desde el juego, se requieren permisos de operador. De lo contrario, también puedes hacerlo desde la consola en vivo (interfaz). Ten en cuenta que los comandos en la consola se ejecutan sin el símbolo **/**.


![](https://screensaver01.zap-hosting.com/index.php/s/rxsCnTeEarycfR7/preview)



## Gestionar Whitelist



### Añadir / eliminar jugadores



**Chat**

Puedes añadir o eliminar jugadores de la whitelist usando los siguientes comandos:

```
/whitelist add NombreJugador
/whitelist remove NombreJugador
```



**white-list.json**

Si conoces el UUID del jugador, también puedes añadirlo manualmente en el archivo **white-list.json**. Este archivo se puede acceder y modificar vía FTP. Aquí tienes instrucciones para conectarte por FTP: [Acceso vía FTP](gameserver-ftpaccess.md)

```
[
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Jugador1"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Jugador2"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Jugador3"
  }
]
```



### Actualizar lista

Si añades jugadores manualmente, necesitarás recargar la whitelist dentro del juego. Esto también es posible con un comando para evitar reiniciar el servidor:

```
 /whitelist reload
```



### Ver la lista

Si no quieres abrir el archivo whitelist vía FTP cada vez, también puedes mostrar todos los jugadores en la whitelist con este comando:

```
/whitelist list
```


<InlineVoucher />