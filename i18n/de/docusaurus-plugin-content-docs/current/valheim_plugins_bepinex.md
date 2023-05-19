---
id: valheim_plugins_bepinex
title: Plugins auf Server installieren (BepInEx)
description: Informationen, wie du Plugins auf deinen Valheim-Server mit BepInEx (Valheim Plus & BepInEx Server) von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Plugin's installieren (BepInEx)
---

## Verwendung von Plugin's mit BepInEx

Um **BepInEx*** kompatible Plugins in Valheim verwenden zu können ist zuerst die Installation von **Valheim Plus** auf deinem Server erforderlich. 
Diesen Wechsel kannst du kostenlos vornehmen, hier findest du eine Anleitung dazu: [Spielwechsel](https://zap-hosting.com/guides/docs/de/gameserver_gameswitch/).

:::info
ACHTUNG: Valheim Plus muss ebenfalls auf deinem PC installiert sein. Hier findest du den Download für Valheim Plus: [Valheim Plus Download](https://www.nexusmods.com/valheim/mods/4).
:::


## Installation von Plugin's auf deinem Server

:::info
**WICHTIG:** Die hier verwendeten Plugins müssen **BepInEx** kompatibel sein. Plugins für beispielsweise **uMod** funktionieren dort **nicht**! 

Informationen über die Kompatibilität kannst du meist beim Download eines Plugin's sehen.
:::

Um nun Mod's auf deinem Valheim Plus Server installieren zu können muss du zuerst via **FTP** mit diesem verbinden, wie das geht erfährst du hier: [FTP Dateizugriff](https://zap-hosting.com/guides/docs/de/gameserver_ftpaccess/).
Dort navigierst du nun in folgendes Verzeichnis: **/gxxxxxx/valheim-linux-plus/BepInEx/plugins**
In diesem Verzeichnis kannst du nun deine Plugin's hochladen, diese bestehenden meist aus einer **.dll** Datei oder aus mehreren Dateien.

:::info
ACHTUNG: Vor dem Hochladen von Plugins muss dein Server **abgeschaltet** werden!
:::

In unserem Beispiel laden wir ein Anticheat auf den Server welches aus drei Dateien besteht: 

![image](https://user-images.githubusercontent.com/26007280/189885370-0cf3d3d8-d725-4ea4-9a62-34f471e9ff44.png)


## Starten deines Servers

Nachdem du deine Plugin's wie beschrieben hochgeladen hast kannst du deinen Server starten.

:::info
Achte jeweils darauf ob einige Plugins eventuell auch Clientseitig auf deinem PC installiert sein müssen. Diese Information kannst du meist der Quelle des jeweiligen Plugins entnehmen.
:::


**Viel Spaß mit deinem Valheim Server! :)**
