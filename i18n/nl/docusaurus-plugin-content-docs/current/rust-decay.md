---
id: rust-decay
title: "Rust: Decay aanpassen"
description: "Ontdek hoe je de decay-snelheid van je Rust-server aanpast en configuraties opslaat voor betere gameplay controle → Leer het nu"
sidebar_label: Decay
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Met RCON kun je direct een commando uitvoeren om jezelf admin te maken. Eerst moet je [verbinden via RCON](rust-connectrcon.md).

:::info
De server moet volledig gestart zijn om via RCON verbonden te kunnen worden.
:::

Als je verbonden bent, ga dan naar het Console-gedeelte waar je commando’s kunt uitvoeren. In ons voorbeeld gebruiken we **RustAdmin**.

Je kunt de decay-rate als volgt aanpassen:

`decay.scale 1.0` is de normale decay-snelheid<br/>
`decay.scale 0.5` verlaagt de decay met 50%<br/>
`decay.scale 0` schakelt decay volledig uit<br/>

Wil je bijvoorbeeld decay helemaal uitzetten, voer dan het commando uit:

```decay.scale 0``` en druk op enter nadat je het commando hebt ingevoerd.

Je kunt nu in het console-tabblad checken of het commando succesvol is verzonden.

![](https://screensaver01.zap-hosting.com/index.php/s/J4HPW5Dee93BDJP/preview)

Om je wijzigingen op te slaan, moet je het volgende commando één keer sturen:

```server.writecfg``` en druk op enter.

![](https://screensaver01.zap-hosting.com/index.php/s/kEbCodqYTf8tqKp/preview)

Als je console nu `Config Saved` toont, heeft de server je wijzigingen overgenomen.


<InlineVoucher />