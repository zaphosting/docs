---
id: pathoftitans-becomeadmin
title: Convertirse en admin
description: "Descubre cómo asignar y gestionar permisos de administrador para tener control total en tu servidor de juegos → Aprende más ahora"
sidebar_label: Convertirse en admin
services:
  - gameserver-pathoftitans
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
La asignación de permisos de administrador te permite una administración sencilla y completa con control total de tu servidor. Como administrador, tienes la opción de usar todas las opciones y funciones disponibles que ofrece el juego directamente dentro del juego. A continuación, se describen todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

## Preparación

La configuración de los permisos de admin se realiza a través de los archivos de configuración de tu servidor. Para ello, navega en el panel de control de tu servidor de juegos a **Configs** y abre el archivo de configuración Game.ini.



## Configuración

En la sección [/Script/PathOfTitans.IGameSession], debe ingresarse el Alderon Games ID (AGID) del admin. La entrada para esto es `Server-Admins=` seguido del AGID. Si quieres añadir varios admins, debes crear una línea nueva para cada uno. Suponiendo que quieras asignar permisos de admin a un total de tres jugadores, la configuración quedaría así:

![](https://screensaver01.zap-hosting.com/index.php/s/TwZyRsEoeATM3By/preview)

```
[/Script/PathOfTitans.IGameSession]
ServerAdmins=XXX-XXX-XXX # 1. Registro de Admin
ServerAdmins=XXX-XXX-XXX # 2. Registro de Admin
ServerAdmins=XXX-XXX-XXX # 3. Registro de Admin
```

Haz clic en Guardar y luego reinicia el servidor. Los permisos de admin ya están configurados con éxito. Una vez que tengas derechos de admin, podrás nombrar a otros jugadores como admins mediante comandos de chat o revocar su estatus de admin. Estas funciones están disponibles mientras tu servidor esté activo. Puedes encontrar más información sobre los comandos en el [Wiki oficial de GitHub](https://github.com/Alderon-Games/pot-community-servers/wiki/Admin-Chat-Commands#admin-tools).


## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, que está disponible todos los días para ayudarte. 🙂

<InlineVoucher />