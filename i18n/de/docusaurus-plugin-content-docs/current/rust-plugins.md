---
id: rust-plugins
title: "Rust: Installation von Plugins"
description: Informationen, wie du Plugins auf deinen Rust-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Plugins installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Plugins ermöglichen es dir, deinen Server noch weiter zu erweitern und individuell anzupassen. Im Folgenden erklären wir dir, wo du die am häufigsten genutzten Plugins findest und wie du sie einrichtest.

<InlineVoucher />

## Vorbereitung

Zunächst einmal müssen die Plugins heruntergeladen werden, die auf dem Server installiert werden sollen. Eine große Auswahl an Plugins findest du unter [umod.org (ehemals OXIDE)](https://umod.org/plugins). Beim Download erhältst du dann eine **.cs** Datei. 

![](https://screensaver01.zap-hosting.com/index.php/s/7ZoxqBEMiMYMbqP/preview)



## Installation

Sobald die gewünschten Plugins heruntergeladen worden sind, kannst du mit der Installation fortfahren. Dies geschieht über **FTP**, daher benötigst du einen FTP-Client, um die Dateien auf deinen Server hochzuladen. Falls du noch nicht mit FTP und dessen Funktionsweise vertraut bist, schaue dir bitte die [FTP Zugang](gameserver-ftpaccess.md) Anleitung an.

Das richtige Plugin Verzeichnis findest du unter: `/gXXXXXX/rust-oxide/oxide/plugins`. Lade einfach die heruntergeladenen `.cs` Plugin-Dateien in diesen Ordner hoch. Nach dem Hochladen sollte es ungefähr so aussehen:

![img](https://screensaver01.zap-hosting.com/index.php/s/G8iWxrxrc7zw4QK/preview)

Mehr muss nicht gemacht werden. Damit ist die Installation bereits abgeschlossen. Im Anschluss kannst du in der Live-Konsole nachschauen, ob das Plugin erfolgreich kompiliert und geladen wurde. Die Ausgabe sollte dann wie folgt aussehen:

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```



## Abschluss

Wenn du alle Schritte befolgt hast, solltest du dein Plugin erfolgreich installiert haben. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
