---
id: scp-becomeadmin
title: "SCP Secret Laboratory: Conviértete en admin en tu propio servidor"
description: "Descubre cómo asignar permisos de administrador para tener control total del servidor y gestionar roles de forma efectiva en tu servidor de juegos → Aprende más ahora"
sidebar_label: Conviértete en admin
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introducción
La asignación de permisos de administrador te permite una administración sencilla y completa con control total de tu servidor. Como administrador, tienes la opción de usar todas las opciones y funciones disponibles que ofrece el juego directamente dentro del juego. A continuación, se describen todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

:::info
Desde las recientes actualizaciones de SCP, el inicio de sesión con contraseña ya no funciona. Por favor, usa la siguiente guía para añadir tus roles directamente mediante el steamid. 
:::


## Configuración para el Remote Admin Config

### Preparación

Primero, necesitas localizar tu Steam64ID.  
Puedes usar la siguiente herramienta: [SteamID Lookup](https://steamid.io/lookup).  
El ID se ingresará más adelante en el archivo de configuración.

Aquí tienes un ejemplo de cómo obtener tu steamid introduciendo el enlace de tu perfil:

![](https://screensaver01.zap-hosting.com/index.php/s/k4EEWwFQB3xAxA2/preview)

## Añadir Admins

Ahora hay que abrir y editar el archivo de configuración.  
Este se encuentra en "**Configs**" dentro de "**Settings**".

![](https://screensaver01.zap-hosting.com/index.php/s/NSFrZG3SX6ZaQgb/preview)

Ahí se puede abrir el archivo "**config_remoteadmin.txt**" en el que se reescriben las líneas necesarias.

![](https://screensaver01.zap-hosting.com/index.php/s/KM6YpQwGC4n8rZW/preview)

Los roles se crean y asignan ahí.  
En este, "**SomeSteamId64**" que está delante de "**@steam: owner**" debe ser reemplazado por tu SteamID64, que viste previamente en "**steamid lookup**".

![](https://screensaver01.zap-hosting.com/index.php/s/HC4Z2s9wPgdJjXT/preview)

Esto se puede hacer para cada usuario adicional que deba recibir permisos.  
En nuestro ejemplo asignamos permisos a tres usuarios, uno recibe "**owner**" y los otros dos "**admin**".

![](https://screensaver01.zap-hosting.com/index.php/s/9e7YWoMHAxn3z3b/preview)

## Añadir Más Roles para Sobrescribir la Contraseña

Si tienes varios roles a los que quieres que se les permita sobrescribir la contraseña del remote admin, simplemente ajusta la siguiente línea en el archivo:  
"**config_remoteadmin.txt**"

Encuentra exactamente esta sección: 

![](https://screensaver01.zap-hosting.com/index.php/s/HoGJ7X2ZEWW34bH/preview)

Para añadir más roles, solo escribe los roles deseados separados por comas.  
Por ejemplo, para añadir admin y moderator para sobrescribir la contraseña:

![](https://screensaver01.zap-hosting.com/index.php/s/PFLFiG9W3kScZ3d/preview)

:::info
Para abrir la consola de remote admin dentro del juego, una vez que estés conectado al servidor, usa la tecla "**M**". Si el servidor está en ejecución, tendrás que reiniciarlo para que los cambios tengan efecto. O si el servidor está apagado, simplemente enciéndelo y luego revisa la consola de Remote Admin dentro del juego.
:::


## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Para cualquier pregunta o ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para asistirte 🙂.

<InlineVoucher />