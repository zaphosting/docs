---
id: valheim-plugins-bepinex
title: "Valheim: Installation von Plugins auf dem Server (BepInEx)"
description: Informationen über die Installation von Plugins auf deinem Valheim-Server mit BepInEx (Valheim Plus Server) von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Plugins installieren (BepInEx)
---

## Einleitung
BepInEx ist ein sehr beliebtes Open-Source-Plugin und Modding-Framework, mit dem Spieler/innen Mods zu einer Reihe von Spielen hinzufügen können, die traditionell kein offizielles Modding unterstützen. In dieser Anleitung zeigen wir dir, wie du Plugins über BepInEx auf Valheim installieren kannst.

## BepInEx Spielversion

Um **BepInEx**-kompatible Plugins in Valheim zu verwenden, musst du zuerst die **Valheim Plus**-Spielversion auf deinem Server installieren. Wir haben auch eine eigenständige **Valheim BepInEx** Spielversion, aber wir empfehlen, Valheim Plus zu installieren, da es mit allem mitgeliefert wird. Das geht ganz einfach mit unserem Gameserver Game Switcher. Mehr darüber erfährst du in unserem [Gameserver Game Switch guide](gameserver-gameswitch.md).

:::info
Valheim Plus muss auch lokal auf deinem PC installiert werden. Hier findest du den Download für Valheim Plus: [Valheim Plus Download](https://www.nexusmods.com/valheim/mods/4).
:::

## Plugins hochladen

Du solltest damit beginnen, Mods zu finden, die mit BepInEx kompatibel sind und die du zu deinem Server hinzufügen möchtest. Informationen über die Kompatibilität des Plugins findest du normalerweise auf der jeweiligen Download-Seite.

:::important
Verwendete Plugins müssen **BepInEx**-kompatibel sein, sonst werden sie nicht funktionieren!
:::

Wenn du einen Mod fertig hast, verbinde dich zunächst per FTP mit deinem Gameserver. Lies unseren [Access FTP guide](gameserver-ftpaccess.md), um zu erfahren, wie das geht.

Wenn dein FTP-Client nun bereit ist, navigiere in das folgende Verzeichnis:
```
../valheim-linux-plus/BepInEx/plugins
```

In diesen Ordner musst du die Mods, die du heruntergeladen hast, ablegen. In der Regel handelt es sich dabei um Dateien mit der Erweiterung `.dll`.

:::note
Der Server muss angehalten werden, bevor du Mods hinzufügst oder bearbeitest, da sonst alle Änderungen rückgängig gemacht werden können.
:::

![image](https://screensaver01.zap-hosting.com/index.php/s/d8gTeFiGXTsxHwz/preview)

## Server starten

Wenn du die gewünschten Plugins hochgeladen hast, starte deinen Server einfach wieder.

:::info
Einige Plugins müssen eventuell auch auf dem PC installiert werden. Informiere dich auf der Website des Plugins, ob dies notwendig ist oder nicht.
:::

Du hast erfolgreich neue BepInEx-Plugins auf deinem Valheim Gameserver installiert!