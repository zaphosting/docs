---
id: spaceengineers-becomeadmin
title: "Space Engineers: Cómo ser admin en tu servidor"
description: "Descubre cómo asignar permisos de administrador para tener control total del servidor y gestión fácil dentro del juego → Aprende más ahora"
sidebar_label: Convertirse en admin
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total sobre tu servidor. Como administrador, puedes usar todas las opciones y funciones disponibles que ofrece el juego directamente dentro del juego. A continuación te explicamos todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

Para poder gestionar bien tu servidor de juegos dentro del juego, es importante tener el rango de Admin.

### SteamID64 desde la web

Primero, abre el perfil en Steam y haz clic derecho en cualquier parte del perfil.  
Ahí podrás copiar la URL de Steam del perfil.

![](https://screensaver01.zap-hosting.com/index.php/s/pNMMAqQDRPSoo38/preview)

Una vez hecho esto, puedes pegar la URL en las siguientes webs:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/dBezeZQEoP3KYq5/preview)

### Introducir SteamID en la configuración

Luego, entra a tu interfaz y al servidor.  
Ve a la pestaña **Configs**

![](https://screensaver01.zap-hosting.com/index.php/s/NQffqKfjszY23HK/preview)

Después abre el archivo **SpaceEngineers-Dedicated.cfg**

![](https://screensaver01.zap-hosting.com/index.php/s/yx2efZLYmW32BZH/preview)

Luego presiona **STR + F** y busca *admin*

![](https://screensaver01.zap-hosting.com/index.php/s/eBgLRwe5Y3itnyt/preview)

Ahora escribe esto:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
Debería quedar así:

![](https://screensaver01.zap-hosting.com/index.php/s/r7tj3EF6trSiz5x/preview)

Solo queda **Guardar** el archivo de configuración ¡y listo!

## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte 🙂 

<InlineVoucher />