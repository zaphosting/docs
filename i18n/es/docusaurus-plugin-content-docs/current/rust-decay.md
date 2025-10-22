---
id: rust-decay
title: "Rust: Modificar Decaimiento"
description: "Descubre cómo ajustar las tasas de decaimiento en servidores de Rust y guardar configuraciones para un mejor control del juego → Aprende más ahora"
sidebar_label: Decaimiento
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Usando RCON, puedes ejecutar un comando directamente para hacerte admin. Primero es necesario [Conectarse vía RCON](rust-connectrcon.md).

:::info
El servidor debe estar completamente iniciado para poder conectarse a través de RCON.
:::

Cuando estés conectado, navega a la sección Consola, donde puedes ejecutar comandos. En nuestro ejemplo usamos **RustAdmin**.

Puedes modificar la tasa de decaimiento así:

`decay.scale 1.0` es la tasa de decaimiento normal<br/>
`decay.scale 0.5` reduce la tasa de decaimiento en un 50%<br/>
`decay.scale 0` desactiva completamente el decaimiento<br/>

Por ejemplo, si quieres desactivar el decaimiento por completo, debes ejecutar el comando

```decay.scale 0``` y presionar enter después de escribirlo.

Ahora puedes verificar en la pestaña de consola si el comando se envió correctamente.

![](https://screensaver01.zap-hosting.com/index.php/s/J4HPW5Dee93BDJP/preview)

Para guardar los cambios, es necesario enviar

```server.writecfg``` una vez y presionar enter.

![](https://screensaver01.zap-hosting.com/index.php/s/kEbCodqYTf8tqKp/preview)

Si tu consola muestra ahora `Config Saved`, el servidor ha aplicado tus cambios.


<InlineVoucher />