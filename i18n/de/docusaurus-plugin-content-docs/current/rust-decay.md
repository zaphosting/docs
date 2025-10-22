---
id: rust-decay
title: "Rust: Decay anpassen"
description: "Entdecke, wie du die Decay-Rate deines Rust-Gameservers anpasst und Konfigurationen speicherst, um das Gameplay besser zu kontrollieren → Jetzt mehr erfahren"
sidebar_label: Decay
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Mit RCON kannst du direkt einen Befehl ausführen, um dich selbst zum Admin zu machen. Zuerst musst du dich [per RCON verbinden](rust-connectrcon.md).

:::info
Der Server muss vollständig gestartet sein, damit eine Verbindung über RCON möglich ist.
:::

Wenn du verbunden bist, geh bitte zum Konsolen-Bereich, wo du Befehle eingeben kannst. In unserem Beispiel nutzen wir **RustAdmin**.

Du kannst die Decay-Rate wie folgt anpassen:

`decay.scale 1.0` ist die normale Decay-Rate<br/>
`decay.scale 0.5` reduziert die Decay-Rate um 50%<br/>
`decay.scale 0` deaktiviert die Decay komplett<br/>

Wenn du zum Beispiel die Decay komplett deaktivieren möchtest, musst du den Befehl

```decay.scale 0``` eingeben und mit Enter bestätigen.

Du kannst jetzt im Konsolen-Tab prüfen, ob der Befehl erfolgreich gesendet wurde.

![](https://screensaver01.zap-hosting.com/index.php/s/J4HPW5Dee93BDJP/preview)

Um die Änderungen zu speichern, musst du einmal

```server.writecfg``` eingeben und mit Enter abschicken.

![](https://screensaver01.zap-hosting.com/index.php/s/kEbCodqYTf8tqKp/preview)

Wenn in deiner Konsole jetzt `Config Saved` angezeigt wird, hat der Server deine Änderungen übernommen.


<InlineVoucher />