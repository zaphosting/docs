---
id: scpservermod-uploadplugins
title: "SCP Secret Laboratory: Plugin auf dem Server installieren"
description: "Entdecke, wie du SMOD-Plugins für deinen SCP-Server installierst und konfigurierst, um Gameplay und Serverfeatures zu verbessern → Jetzt mehr erfahren"
sidebar_label: Plugins installieren
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archivierter Guide
Dieses Dokument wurde archiviert. Dokumente werden archiviert, wenn sie nicht mehr relevant, falsch oder veraltet sind. Es wurde aus folgendem Grund archiviert:

Grund: Die Servermod-Erweiterung für SCP wurde eingestellt und wird daher nicht mehr gewartet. Wir empfehlen stattdessen den Wechsel zu **[SCP:EXILED](exiled-plugins.md)**. 
::::

<InlineVoucher />

## Mit FTP verbinden

Bevor du Plugins installieren kannst, muss der [FTP-Zugang](gameserver-ftpaccess.md) eingerichtet sein.

Nachdem das erledigt ist, kannst du dich verbinden und folgenden Server-Ordner öffnen:
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/2Fid5MKq57YDCNj/preview)

## Plugins installieren

### Plugins finden

Zuerst musst du kompatible SMOD-Plugins finden.

Der beste Ort dafür ist direkt im offiziellen [Discord](https://discord.gg/T9aurNf).

:::info
Das ist nur eine Möglichkeit, Plugins zu bekommen. Sie können auch woanders verfügbar sein. Wichtig ist, dass du prüfst, ob sie mit deiner SMOD-Version kompatibel sind. 
:::

In diesem Beispiel holen wir uns folgendes Plugin:

![](https://screensaver01.zap-hosting.com/index.php/s/bEEQP3cm33fgMFi/preview)

### Plugins hochladen

Hast du deine gewünschten Plugins, lädst du sie per **Drag & Drop** in den **sm_plugins-Ordner** auf deinem Server-FTP hoch.

![](https://screensaver01.zap-hosting.com/index.php/s/HzRKJXFyENqK4N8/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/kSSMs23E6g4PfwN/preview)

:::info
Tipp: Nach jeder Plugin-Installation musst du deinen Server **neu starten**, damit die Plugins **wirksam werden**.
:::

### Plugins konfigurieren

Je nach Plugin musst du verschiedene Einstellungen in deiner config_gameplay.txt vornehmen.

In unserem Beispiel-Plugin sind folgende Konfigurationen definiert:

![](https://screensaver01.zap-hosting.com/index.php/s/5PrLzeCQaFamGRn/preview)

Um die hinzuzufügen, bearbeiten wir die config_gameplay.txt.

Die findest du über den **Configs**-Tab links im Menü.

![](https://screensaver01.zap-hosting.com/index.php/s/mMck39x2mEnLtLY/preview)

Dann suchst du die **config_gameplay.txt** heraus.

![](https://screensaver01.zap-hosting.com/index.php/s/SGLpBYM5DAWRRzN/preview)

:::info
Die Einstellungen kannst du eigentlich überall reinschreiben. Best Practice ist, sie unter '#Misc gameplay settings' in der config_gameplay.txt einzufügen.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/JMK542jpCj472ag/preview)

:::info
WICHTIG: Je nach Plugin unterscheiden sich die Konfigurationen. Lies immer die Anleitung zum Plugin, damit du die Einstellungen korrekt übernimmst.
:::

Nachdem du die Einstellungen gemacht hast, startest du deinen Server neu (oder startest ihn) und checkst das Ganze direkt ingame!

<InlineVoucher />