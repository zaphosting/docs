---
id: vrising-plugins-bepinex
title: "V Rising: Installation von Plugins auf dem Server (BepInEx)"
description: Informationen über die Installation von Plugins auf deinem V Rising Server mit BepInEx (V Rising BepInEx Server) von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Plugins installieren (BepInEx)
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archivierte Anleitung
Dieses Dokument wurde archiviert. Dokumente werden archiviert, wenn sie nicht mehr relevant, nicht mehr korrekt oder nicht mehr auf dem neuesten Stand sind. Es wurde aus den folgenden Gründen archiviert:

**Grund**: Das Produkt V Rising mit BepInEx ist nicht mehr funktional und wurde daher aus dem Shop entfernt. 
::::

## Einleitung
BepInEx ist ein sehr beliebtes Open-Source-Plugin und Modding-Framework, mit dem Spieler/innen Mods zu einer Reihe von Spielen hinzufügen können, die traditionell kein offizielles Modding unterstützen. In dieser Anleitung zeigen wir dir, wie du Plugins über BepInEx in V Rising installieren kannst.

<InlineVoucher />

## BepInEx Spielversion

Um **BepInEx**-kompatible Plugins in V Rising zu verwenden, musst du zuerst die **V Rising BepInEx**-Spielversion auf deinem Server installieren. Das kannst du ganz einfach mit unserem Gameserver Game Switcher machen. Mehr darüber erfährst du in unserer [Spielwechsel](gameserver-gameswitch.md) Anleitung.

## Plugins hochladen

Du solltest damit beginnen, Mods zu finden, die mit BepInEx kompatibel sind und die du zu deinem Server hinzufügen möchtest. Informationen über die Kompatibilität des Plugins findest du normalerweise auf der jeweiligen Downloadseite.

:::important
Verwendete Plugins müssen **BepInEx**-kompatibel sein, sonst werden sie nicht funktionieren!
:::

Wenn du einen Mod fertig hast, verbinde dich zunächst per FTP mit deinem Gameserver. Lies unseren [Zugriff per FTP](gameserver-ftpaccess.md), um zu erfahren, wie das geht.

Wenn dein FTP-Client nun bereit ist, navigiere in das folgende Verzeichnis:
```
.../vrising/BepInEx/plugins
```

In diesen Ordner musst du die Mods, die du heruntergeladen hast, einfügen. Normalerweise handelt es sich dabei um Dateien mit der Erweiterung `.dll`. In diesem Beispiel laden wir eine Framework-Mod hoch, die für die Erstellung von Befehlen nützlich ist.

:::note
Der Server muss angehalten werden, bevor du Mods hinzufügst oder bearbeitest, da sonst alle Änderungen rückgängig gemacht werden können.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9xkrPmPMp7YZYWQ/preview)

## Server starten

Wenn du die gewünschten Plugins hochgeladen hast, starte deinen Server einfach wieder.

:::info
Einige Plugins müssen eventuell auch auf dem PC installiert werden. Informiere dich auf der Website des Plugins, ob dies notwendig ist oder nicht.
:::

Du hast erfolgreich neue BepInEx-Plugins auf deinem V Rising Gameserver installiert!