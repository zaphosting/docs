---
id: rust-decay
title: "Rust: Modifica il Decay"
description: "Scopri come regolare i tassi di decay nel server Rust e salvare le configurazioni per un controllo di gioco migliore → Scopri di più ora"
sidebar_label: Decay
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Usando RCON, puoi eseguire un comando direttamente per diventare admin. Prima di tutto, è necessario [Connettersi via RCON](rust-connectrcon.md).

:::info
Il server deve essere completamente avviato per poter essere raggiunto tramite RCON.
:::

Una volta connesso, vai nella sezione Console, dove puoi eseguire i comandi. Nel nostro esempio usiamo **RustAdmin**.

Puoi modificare il tasso di Decay così:

`decay.scale 1.0` è il tasso di decay normale<br/>
`decay.scale 0.5` riduce il decay del 50%<br/>
`decay.scale 0` disabilita completamente il decay<br/>

Ad esempio, se vuoi disabilitare completamente il decay, devi eseguire il comando

```decay.scale 0``` e premere invio dopo aver inserito il comando.

Ora puoi verificare nella scheda console se il comando è stato inviato con successo.

![](https://screensaver01.zap-hosting.com/index.php/s/J4HPW5Dee93BDJP/preview)

Per salvare le modifiche, devi inviare

```server.writecfg``` una volta e premere invio.

![](https://screensaver01.zap-hosting.com/index.php/s/kEbCodqYTf8tqKp/preview)

Se nella console compare `Config Saved`, il server ha applicato le tue modifiche.


<InlineVoucher />