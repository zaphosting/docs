---
id: rust-decay
title: "Rust: Modificar Decaimento"
description: "Descubra como ajustar as taxas de decaimento no servidor de Rust e salvar as configurações para um controle melhor do gameplay → Saiba mais agora"
sidebar_label: Decaimento
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Usando RCON, você pode executar um comando direto para se tornar admin. Primeiro, é necessário [Conectar via RCON](rust-connectrcon.md).

:::info
O servidor precisa estar totalmente iniciado para ser acessível via RCON.
:::

Quando estiver conectado, vá para a seção Console, onde você pode executar comandos. No nosso exemplo, estamos usando o **RustAdmin**.

Você pode modificar a taxa de Decaimento assim:

`decay.scale 1.0` é a taxa normal de decaimento<br/>
`decay.scale 0.5` reduz a taxa de decaimento em 50%<br/>
`decay.scale 0` desativa completamente o decaimento<br/>

Por exemplo, se quiser desativar o decaimento completamente, execute o comando

```decay.scale 0``` e pressione enter após digitar o comando.

Agora você pode verificar na aba do console se o comando foi enviado com sucesso.

![](https://screensaver01.zap-hosting.com/index.php/s/J4HPW5Dee93BDJP/preview)

Para salvar as alterações, é necessário enviar

```server.writecfg``` uma vez e pressionar enter para enviar.

![](https://screensaver01.zap-hosting.com/index.php/s/kEbCodqYTf8tqKp/preview)

Se o console mostrar `Config Saved`, o servidor aplicou suas mudanças.


<InlineVoucher />