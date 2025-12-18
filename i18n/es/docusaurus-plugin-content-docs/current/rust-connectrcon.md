---
id: rust-connectrcon
title: "Rust: Conectarse al servidor vía RCON"
description: "Descubre cómo gestionar tu servidor de forma remota usando RCON para ejecutar comandos y control eficiente → Aprende más ahora"
sidebar_label: Conectar vía RCON
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ¿Qué es RCON?

RCON es un protocolo para ejecutar comandos en el servidor sin tener acceso directo a la consola.

<InlineVoucher />

### Habilitar WebRCON

Primero, antes de poder conectarte, debes asegurarte de que Web RCON esté habilitado.
Para activarlo, visita la pestaña **Configuración**.

![](https://screensaver01.zap-hosting.com/index.php/s/RqpZcnBcEHY3gN2/preview)

Y luego actívalo directamente en esta página.
![](https://screensaver01.zap-hosting.com/index.php/s/wJ5psnbAneZ6rMD/preview)

:::info
Será necesario reiniciar el servidor para que los cambios tengan efecto. 
:::

### Instalar programa RCON

Para conectarte necesitarás un programa RCON. Hay varios disponibles que puedes usar.
Para este ejemplo, y como recomendación, puedes descargar [RustAdmin](https://www.rustadmin.com/).

Puedes instalarlo con el botón directamente en su web.
![](https://screensaver01.zap-hosting.com/index.php/s/zNtESocaQPFwzCg/preview)

## Conectar vía RCON

Una vez que hayas abierto WebAdmin, pulsa en **Servidor** en la parte superior. Luego pulsa en **Conectar**.

:::info
Tu servidor debe estar completamente ONLINE para que RCON pueda acceder a él. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bHLwGDCqH52Bye8/preview)

Después serás redirigido a una página de configuración.
Aquí deberás ingresar la información de tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/qmQFd7S79EpYWTE/preview)

:::info
TIP: El puerto RCON y la contraseña RCON los encuentras en la pestaña **Configuración** donde activaste WebRCON. 
:::

Una vez ingresados los datos, puedes guardar la configuración.

![](https://screensaver01.zap-hosting.com/index.php/s/FDMqdsfAHrbiTpt/preview)

Luego pulsa Servidor -> Conectar.

![](https://screensaver01.zap-hosting.com/index.php/s/4DLGZiQ5X6WJrzA/preview)

Si la conexión es exitosa, verás **Conectado** en letras verdes abajo.

![](https://screensaver01.zap-hosting.com/index.php/s/qzq68ENHzXGK69T/preview)

¡Ya puedes usar RCON para gestionar tu servidor! :) 


<InlineVoucher />