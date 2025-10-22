---
id: scpservermod-uploadplugins
title: "SCP Secret Laboratory: Plugins auf dem Server installieren"
description: "Entdecke, wie du SMOD-Plugins für deinen SCP-Gameserver installierst und konfigurierst, um Gameplay und Serverfunktionen zu verbessern → Jetzt mehr erfahren"
sidebar_label: Plugins installieren
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archivierte Anleitung
Dieses Dokument wurde archiviert. Dokumente werden archiviert, wenn sie nicht mehr relevant, fehlerhaft oder veraltet sind. Es wurde aus folgenden Gründen archiviert:

Grund: Die Servermod-Erweiterung für SCP wurde eingestellt und wird daher nicht mehr gepflegt. Wir empfehlen stattdessen auf **[SCP:EXILED](exiled-plugins.md)** umzusteigen. 
::::

<InlineVoucher />

## Mit FTP verbinden

Bevor Plugins installiert werden können, muss der [Zugang via FTP](gameserver-ftpaccess.md) eingerichtet sein.

Nachdem das eingerichtet ist, kannst du dich verbinden und den folgenden Serverordner öffnen:
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/2Fid5MKq57YDCNj/preview)

## Plugins installieren

### Plugins finden

Zuerst musst du kompatible SMOD-Plugins finden.

Der beste Ort dafür ist direkt deren [Discord](https://discord.gg/T9aurNf).

:::info
Das ist nur eine Möglichkeit, Plugins zu bekommen. Sie können auch woanders verfügbar sein. Wichtig ist, dass du prüfst, ob sie mit deiner SMOD-Version kompatibel sind. 
:::

In diesem Beispiel holen wir uns folgendes Plugin:

![](https://screensaver01.zap-hosting.com/index.php/s/bEEQP3cm33fgMFi/preview)

### Plugins hochladen

Sobald du deine gewünschten Plugins hast, lädst du sie per FTP auf deinen Gameserver hoch. Am einfachsten per **Drag & Drop** in den **sm_plugins-Ordner.**

![](https://screensaver01.zap-hosting.com/index.php/s/HzRKJXFyENqK4N8/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/kSSMs23E6g4PfwN/preview)

:::info
Tipp: Nach jeder Plugin-Installation musst du deinen Server **neu starten**, damit die Plugins **aktiv werden.**
:::

### Plugins konfigurieren

Je nach Plugin musst du verschiedene Einstellungen in deiner config_gameplay.txt vornehmen.

In unserem Beispiel-Plugin sind folgende Konfigurationen definiert:

![](https://screensaver01.zap-hosting.com/index.php/s/5PrLzeCQaFamGRn/preview)

Um diese hinzuzufügen, bearbeiten wir die config_gameplay.txt.

Diese findest du über den **Configs**-Tab links im Dashboard.

![](https://screensaver01.zap-hosting.com/index.php/s/mMck39x2mEnLtLY/preview)

Dann suchst du die **config_gameplay.txt** heraus.

![](https://screensaver01.zap-hosting.com/index.php/s/SGLpBYM5DAWRRzN/preview)

:::info
Die Konfigurationen können grundsätzlich überall stehen. Best Practice ist, sie unter '#Misc gameplay settings' in der config_gameplay.txt zu platzieren.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/JMK542jpCj472ag/preview)

:::info
WICHTIG: Je nach Plugin unterscheiden sich die Einstellungen. Lies immer die Anleitung zum Plugin, damit du die Konfiguration korrekt übernimmst.
:::

Nachdem du die Einstellungen vorgenommen hast, startest du deinen Server neu (oder startest ihn) und prüfst die Änderungen direkt ingame!

<InlineVoucher />