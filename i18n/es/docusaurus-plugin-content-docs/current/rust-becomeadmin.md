---
id: rust-becomeadmin
title: "Rust: Conviértete en admin en tu propio servidor"
description: "Descubre cómo asignar permisos de administrador para tener control total del servidor y gestionar tu juego de forma efectiva → Aprende más ahora"
sidebar_label: Convertirse en admin
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Asignar permisos de administrador te permite una administración sencilla y completa con control total sobre tu servidor. Como administrador, puedes usar todas las opciones y funciones disponibles que ofrece el juego directamente dentro del juego. A continuación, te explicamos todos los pasos que debes seguir para asignar permisos de administrador en tu servidor.  
<InlineVoucher />

## Usar RCON para convertirte en admin

Con RCON, puedes ejecutar un comando directamente para hacerte admin.  
Primero, debes [Conectarte vía RCON](rust-connectrcon.md).

Una vez conectado, navega hasta donde puedas ejecutar comandos de consola. En nuestro ejemplo, usamos RustAdmin.

![](https://screensaver01.zap-hosting.com/index.php/s/zpJH32AHCySP8qT/preview)

Aquí debes ejecutar el comando respectivo:  
`ownerid Steam64ID`

:::info
Por favor, reemplaza **Steam64ID** con tu Steam64ID real. Puedes encontrar tu Steam64ID usando esta [herramienta](https://steamid.io/)
:::

Después serás asignado directamente como admin.

:::info
Si estás dentro del juego al ejecutar esto, simplemente relógate en el servidor.
:::

¡Y listo, ahora eres administrador! :)

## Usar FTP para convertirte en admin

Alternativamente, puedes asignarte admin directamente a través de FTP.  
Primero, debes conectarte usando [Acceso vía FTP](gameserver-ftpaccess.md).

Una vez conectado con éxito, navega hasta el siguiente directorio:

`/g#####/rust/server/<tu_guardado_del_servidor>/cfg`

En esta carpeta, deberás **crear** un **nuevo archivo** llamado **users.cfg**

En este archivo, añade tus entradas usando el formato:

`<rol> <Steam64ID> <razón/usuario>`

:::info
Por favor, reemplaza **Steam64ID** con tu Steam64ID real. Puedes encontrar tu Steam64ID usando esta [herramienta](https://steamid.io/)
:::

Un ejemplo de entrada sería:

```
ownerid 76561198114248380 "Puedes escribir cualquier cosa aquí como referencia"
moderatorid 76561198114248380 "Persona de prueba"
```
:::info
Debes reiniciar tu servidor para que los cambios tengan efecto.
:::

## Conclusión

¡Felicidades, has configurado con éxito los permisos de administrador! Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para asistirte. 🙂

<InlineVoucher />