---
id: vrising-plugins-bepinex
title: "V Rising: Plugins auf dem Server installieren (BepInEx)"
description: "Entdecke, wie du dein V Rising Gameplay mit BepInEx Mods aufpeppen und die Serveranpassung verbessern kannst → Jetzt mehr erfahren"
sidebar_label: Plugins installieren (BepInEx)
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archivierte Anleitung
Dieses Dokument wurde archiviert. Dokumente werden archiviert, wenn sie nicht mehr relevant, fehlerhaft oder veraltet sind. Es wurde aus folgenden Gründen archiviert:

**Grund**: Das Produkt V Rising mit BepInEx ist nicht mehr funktionsfähig und wurde daher aus dem Shop entfernt. 
::::

## Einführung
BepInEx ist ein extrem beliebtes Open-Source Plugin- und Modding-Framework, das es Spielern ermöglicht, Mods zu einer Reihe von Spielen hinzuzufügen, die traditionell kein offizielles Modding unterstützen. In dieser Anleitung zeigen wir dir, wie du Plugins über BepInEx auf deinem V Rising Gameserver installieren kannst.
<InlineVoucher />

## BepInEx Spielversion

Um **BepInEx** kompatible Plugins in V Rising zu nutzen, musst du zuerst die **V Rising BepInEx** Spielversion auf deinem Server installieren. Das geht ganz easy mit unserer Gameserver-Spielwechsel-Funktion. Mehr dazu erfährst du in unserer [Spielwechsel](gameserver-gameswitch.md) Anleitung.

## Plugins hochladen

Such dir zuerst Mods, die mit BepInEx kompatibel sind und die du auf deinem Server hinzufügen möchtest. Infos zur Kompatibilität findest du meistens auf der jeweiligen Download-Seite des Plugins.

:::important
Die verwendeten Plugins müssen **BepInEx** kompatibel sein, sonst funktionieren sie nicht!
:::

Wenn du einen Mod hast, verbinde dich per FTP mit deinem Gameserver. Wie das geht, erfährst du in unserer [FTP-Zugang](gameserver-ftpaccess.md) Anleitung.

Im FTP-Client navigierst du dann zu folgendem Verzeichnis:
```
../vrising/BepInEx/plugins
```

In diesen Ordner lädst du die heruntergeladenen Mods hoch. Meistens sind das Dateien mit der Endung `.dll`. In diesem Beispiel laden wir einen Framework-Mod hoch, der nützlich ist, um Befehle zu erstellen.

:::note
Der Server muss gestoppt sein, bevor du Mods hinzufügst oder bearbeitest, sonst gehen Änderungen verloren.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9xkrPmPMp7YZYWQ/preview)

## Server starten

Nachdem du die gewünschten Plugins hochgeladen hast, starte deinen Server einfach wieder.

:::info
Manche Plugins müssen auch clientseitig auf deinem PC installiert werden. Schau auf der Plugin-Webseite nach, ob das nötig ist.
:::

Du hast erfolgreich neue BepInEx Plugins auf deinem V Rising Gameserver installiert!

<InlineVoucher />