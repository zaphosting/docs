---
id: rust-decay
title: "Rust: Decay verändern"
description: Information, zur Anpassung des Decay bei deinem Rust Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Decay
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

Mithilfe eines RCON Tools kannst du auf deinem Server beliebige Befehle ausführen, auch Adminrechte können so vergeben werden.
Zuerst musst du [via RCON verbinden](rust-connectrcon.md).

:::info
Dein Server muss vollständig gestartet sein, um via RCON erreichbar zu sein. 
:::

Sobald du verbunden bist, navigiere in das Feld, in welchem du Konsolenbefehle ausführen kannst. In unserem Beispiel nutzen wir **RustAdmin**.

Du kannst mit der Zahl die Decay-Rate anpassen, zum Beispiel:

`decay.scale 1.0` unveränderte Decay Rate<br/>
`decay.scale 0.5` Decay Rate auf 50% reduziert<br/>
`decay.scale 0` Decay ist komplett deaktiviert<br/>

Angenommen, du möchtest den Decay komplett deaktivieren, dann muss der Befehl

```decay.scale 0``` Ausgeführt werden. Die Eingabe muss mit Enter bestätigt werden.

Du kannst nun im Konsolen-Tab sehen, ob der Befehl erfolgreich übermittelt wurde.

![image](https://screensaver01.zap-hosting.com/index.php/s/59Z2Y7x7t6Dcm5q/preview)


Um unsere Änderungen nun zu speichern, muss noch einmalig

```server.writecfg``` Eingegeben und ebenfalls mit Enter bestätigt werden.

![image](https://screensaver01.zap-hosting.com/index.php/s/kMbnt6M2XTEcLMB/preview)

Sofern nun in deiner Konsole `Config Saved` steht, wurde die Änderung erfolgreich übernommen.

