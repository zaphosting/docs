---
id: vrising-becomeadmin
title: "V Rising: Convertirse en admin"
description: "Descubre cómo gestionar y asignar permisos completos de administrador para tu servidor de juegos de forma eficiente → Aprende más ahora"
sidebar_label: Convertirse en admin
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
La asignación de permisos de administrador te permite una administración sencilla y completa con control total sobre tu servidor. Como administrador, tienes la opción de usar todas las opciones y funciones disponibles que ofrece el juego directamente dentro del juego. A continuación, se describen todos los pasos que debes seguir para asignar permisos de administrador a tu servidor.  
<InlineVoucher />

### Añadir permisos

La administración de los permisos de admin se maneja mediante el archivo de configuración **adminlist.txt**. Puedes acceder a este archivo en la interfaz web bajo la sección Configs. Para añadir un admin, necesitas el SteamID64 del jugador. Puedes obtenerlo abriendo tu perfil de Steam y haciendo clic derecho en cualquier parte. Ahí tendrás la opción de copiar la URL de la página. Luego, esa URL puede ser ingresada en uno de los siguientes sitios web: https://steamid.io/ https://steamrep.com/ https://steamidfinder.com/ 

![](https://screensaver01.zap-hosting.com/index.php/s/QT5HRX4t966kRjQ/preview)

Una vez allí, pega la URL de tu perfil de Steam en el campo correspondiente y recibirás tu SteamID64. Añade el SteamID64 al archivo de configuración **adminlist.txt**. Para hacerlo, ve a la interfaz web de administración de tu servidor de juegos en la categoría Configs y abre el archivo adminlist.txt. 

![](https://screensaver01.zap-hosting.com/index.php/s/Y35BDx5xJ5zLGoS/preview)

:::info
Si planeas asignar permisos de admin a varios jugadores, cada SteamID debe estar en su propia línea para cada jugador. 
:::

### Activar permisos

Antes de poder asignar los permisos de admin dentro del juego, tienes que activar la consola para tu juego. Conéctate a tu servidor y ve a la configuración. En la configuración debes activar la opción **Console Enabled**. La consola se puede abrir por defecto con la tecla Gravis en el teclado. Los permisos de admin se pueden activar luego en la consola con el comando `adminauth`. 

![](https://screensaver01.zap-hosting.com/index.php/s/MLS9wbcC56ZomAb/preview)


### Lista de comandos de admin

Aquí tienes un resumen rápido de los comandos de admin más comunes que puedes ejecutar en tu servidor. 

|                          |                                                         |
| ------------------------ | ------------------------------------------------------- |
| adminauth                | Asignación de permisos de admin                         |
| admindeauth              | Eliminación de permisos de admin                         |
| banuser [nombre/IP/userID] | Banea a un jugador específico por nombre, IP o user ID |
| banned                   | Muestra una lista de todos los usuarios baneados        |
| bancharacter             | Se usa para banear un personaje específico               |
| give [nombre]            | Te proporciona un ítem específico dentro del juego      |
| giveset                  | Permite explorar varios sets de armaduras y armas       |
| kick [nombre/IP/userID]  | Expulsa a un jugador específico por nombre, IP o user ID|
| unban [nombre/IP/userID] | Desbanea a un jugador específico por nombre, IP o user ID|


## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Para cualquier pregunta o ayuda adicional, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para asistirte. 🙂

<InlineVoucher />