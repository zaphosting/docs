---
id: valheim-plugins-bepinex
title: "Valheim: Plugins auf dem Server installieren (BepInEx)"
description: "Entdecke, wie du dein Valheim-Erlebnis mit BepInEx-Plugins aufpeppen und neue Modding-Möglichkeiten freischalten kannst → Jetzt mehr erfahren"
sidebar_label: Plugins installieren (BepInEx)
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/valheim-plugins.json';

## Einführung
BepInEx ist ein mega beliebtes Open-Source Plugin- und Modding-Framework, mit dem du Mods zu vielen Games hinzufügen kannst, die eigentlich kein offizielles Modding unterstützen. In dieser Anleitung zeigen wir dir, wie du Plugins über BepInEx auf deinem Valheim-Gameserver installierst.

<InlineVoucher />

## BepInEx Spielversion

Um **BepInEx** kompatible Plugins in Valheim zu nutzen, musst du zuerst die **Valheim Plus** Spielversion auf deinem Server installieren. Wir bieten auch eine eigenständige **Valheim BepInEx** Spielversion an, empfehlen aber Valheim Plus, weil da schon alles Wichtige drin ist. Das kannst du easy über unseren Gameserver-Spielwechsel machen, mehr dazu findest du in unserer [Spiel wechseln](gameserver-gameswitch.md) Anleitung.

:::info
Valheim Plus muss auch lokal auf deinem PC installiert sein. Hier findest du den Download für Valheim Plus: [Valheim Plus Download](https://www.nexusmods.com/valheim/mods/4).
:::

## Plugins hochladen

Such dir zuerst Mods raus, die mit BepInEx kompatibel sind und die du auf deinem Server haben willst. Meistens findest du auf der jeweiligen Download-Seite Infos zur Kompatibilität.

:::important
Die Plugins müssen **BepInEx** kompatibel sein, sonst funktionieren sie nicht!
:::

Wenn du eine Mod hast, verbinde dich per FTP mit deinem Gameserver. Wie das geht, steht in unserer [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung.

Im FTP-Client navigierst du dann zu folgendem Ordner:
```
../valheim-linux-plus/BepInEx/plugins
```

Dort lädst du die Mods hoch, die du runtergeladen hast. Normalerweise sind das Dateien mit der Endung `.dll`.

:::note
Der Server muss gestoppt sein, bevor du Mods hinzufügst oder änderst, sonst gehen die Änderungen verloren.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/d8gTeFiGXTsxHwz/preview)

## Server starten

Nachdem du die gewünschten Plugins hochgeladen hast, kannst du deinen Server einfach wieder starten.

:::info
Manche Plugins müssen auch clientseitig auf deinem PC installiert werden. Schau auf der Plugin-Webseite nach, ob das nötig ist.
:::

Du hast erfolgreich neue BepInEx-Plugins auf deinem Valheim-Gameserver installiert!

## Beliebte Plugins

Du suchst noch nach den perfekten Plugins für deinen Server?

Stöbere durch unsere sorgfältig zusammengestellte Liste der beliebtesten und am meisten empfohlenen Plugins, um dein Gameplay zu verbessern und deinem Server den letzten Schliff zu geben. Lass dich inspirieren und finde genau die Addons, die zu deinem Projekt passen.

<SearchableItemList items={items} />

<InlineVoucher />