---
id: rust-decay
title: "Rust: Ändra Decay"
description: "Lär dig hur du justerar Rust-serverns decay-hastighet och sparar konfigurationer för bättre spelkontroll → Läs mer nu"
sidebar_label: Decay
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Med RCON kan du köra ett kommando direkt för att göra dig själv till admin. Först måste du [ansluta via RCON](rust-connectrcon.md).

:::info
Servern måste vara helt igång för att kunna anslutas via RCON.
:::

När du är ansluten, gå till Konsol-sektionen där du kan köra kommandon. I vårt exempel använder vi **RustAdmin**.

Du kan ändra Decay-hastigheten så här:

`decay.scale 1.0` är normal decay-hastighet<br/>
`decay.scale 0.5` minskar decay-hastigheten med 50%<br/>
`decay.scale 0` stänger av decay helt<br/>

Om du till exempel vill stänga av decay helt, kör kommandot

```decay.scale 0``` och tryck enter efter att du skrivit kommandot.

Du kan nu kolla i konsol-fliken om kommandot skickades framgångsrikt.

![](https://screensaver01.zap-hosting.com/index.php/s/J4HPW5Dee93BDJP/preview)

För att spara dina ändringar måste du skicka

```server.writecfg``` en gång och trycka enter.

![](https://screensaver01.zap-hosting.com/index.php/s/kEbCodqYTf8tqKp/preview)

Om din konsol nu visar `Config Saved` har servern tagit emot dina ändringar.


<InlineVoucher />