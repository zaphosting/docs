---
id: rust-decay
title: "Rust: Modyfikacja Rozkładu"
description: "Dowiedz się, jak dostosować tempo rozkładu na serwerze Rust i zapisać konfiguracje dla lepszej kontroli rozgrywki → Sprawdź teraz"
sidebar_label: Rozkład
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Korzystając z RCON, możesz bezpośrednio wykonać komendę, aby nadać sobie uprawnienia admina. Najpierw musisz [połączyć się przez RCON](rust-connectrcon.md).

:::info
Serwer musi być w pełni uruchomiony, aby można było połączyć się przez RCON.
:::

Po połączeniu przejdź do sekcji Konsola, gdzie możesz wykonywać komendy. W naszym przykładzie używamy **RustAdmin**.

Możesz zmodyfikować tempo rozkładu (Decay-Rate) w następujący sposób:

`decay.scale 1.0` to normalne tempo rozkładu<br/>
`decay.scale 0.5` zmniejsza tempo rozkładu o 50%<br/>
`decay.scale 0` całkowicie wyłącza rozkład<br/>

Na przykład, jeśli chcesz całkowicie wyłączyć rozkład, wpisz komendę

```decay.scale 0``` i naciśnij enter.

Możesz teraz sprawdzić w zakładce konsoli, czy komenda została poprawnie wysłana.

![](https://screensaver01.zap-hosting.com/index.php/s/J4HPW5Dee93BDJP/preview)

Aby zapisać zmiany, wpisz

```server.writecfg``` i zatwierdź enterem.

![](https://screensaver01.zap-hosting.com/index.php/s/kEbCodqYTf8tqKp/preview)

Jeśli w konsoli pojawi się komunikat `Config Saved`, oznacza to, że serwer przyjął Twoje zmiany.


<InlineVoucher />