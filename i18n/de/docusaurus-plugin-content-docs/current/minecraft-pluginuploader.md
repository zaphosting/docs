---
id: minecraft-pluginuploader
title: "Minecraft: Server mit ZAP-Hosting Plugin Uploader"
description: "Entdecke, wie du Minecraft Server Plugins für Spigot oder Bukkit einfach verwaltest und dein Spielerlebnis verbesserst → Jetzt mehr erfahren"
sidebar_label: Plugin Uploader
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Plugin Uploader

Klick in der Serverübersicht auf deinen Minecraft Gameserver. Wähle dann den Reiter Plugins, der sich im Unterpunkt Einstellungen befindet.

:::info
Stelle sicher, dass dein aktuelles Spiel Spigot oder Bukkit ist. Der Plugin Uploader ist nur dort verfügbar.
:::

## Plugins installieren/hochladen

Es gibt zwei verschiedene Wege, wie du ein Plugin auf deinem Minecraft Gameserver installieren kannst.

- Du kannst dein Plugin aus einer unserer vorgefertigten Listen auswählen (sofern verfügbar)
- Du kannst deine eigenen Plugins per Drag'n Drop hochladen

### Plugins aus der Liste

Wähle dein gewünschtes Plugin aus der Liste „Alle Plugins“ aus und klicke auf den grünen „Installieren“-Button. Die Installation kann je nach Größe des Plugins einen Moment dauern.

![](https://screensaver01.zap-hosting.com/index.php/s/dxrtY8pQwmtfEP9/preview)

### Eigenes Plugin hochladen

Zieh die gewünschte Plugin .jar-Datei in das auf dem Bild markierte Feld. Es ist auch möglich, mehrere Plugins gleichzeitig in diesen Bereich zu ziehen und zu installieren.

![](https://screensaver01.zap-hosting.com/index.php/s/fM2a4AeyspaQzYd/preview)

Nachdem du das Plugin in das Upload-Feld gezogen hast, dauert es einen Moment, bis das Plugin auf dem Server ist.

Damit du das Plugin nutzen kannst, musst du deinen Server mit dem Befehl `/rl` oder `/reload` über die Gameserver-Konsole neu laden (oder den gesamten Server neu starten).

:::info
In seltenen Fällen muss der Server neu gestartet werden, damit das Plugin reibungslos läuft.
:::


## Plugin deinstallieren

![](https://screensaver01.zap-hosting.com/index.php/s/dKaeJr8M3jzgMBS/preview)

Um ein Plugin zu deinstallieren, klicke auf den roten Mülleimer neben dem Eintrag.

## Plugin deaktivieren

Klicke dazu auf den grünen Button mit dem Schloss hinter einem installierten Plugin. Wenn der Button von grün auf orange wechselt, hast du dein Plugin deaktiviert. Umgekehrt aktivierst du das Plugin wieder. Die Plugin-Datei bleibt nach der Deaktivierung auf dem Server, wird aber vom Gameserver nicht mehr geladen.

:::info
Nachdem du dein Plugin deaktiviert hast, musst du den Server einmal neu laden, damit die Änderungen wirksam werden. Nutze dafür einen der beiden Befehle in deiner Gameserver-Konsole oder im Spiel: `/rl` oder `/reload`
:::

## Häufige Probleme

**Mein Plugin lässt sich nicht über den „Drag'n Drop“-Bereich hochladen.**

Vorschläge zur Lösung:

- Dein Plugin ist möglicherweise größer als 5 MB und daher ungeeignet für den Upload über die Weboberfläche. Alternativ nutze einfach einen FTP-Client.
- Die FTP-Rechte könnten Probleme verursachen. Um das zu beheben, klicke im Webinterface auf den FTP-Browser-Tab und dann auf den Button „FTP-Rechte zurücksetzen“. Danach solltest du Plugins wieder hochladen können.
- Dein Plugin ist eventuell ungültig und enthält keine gültige plugin.yml. In diesem Fall nutze bitte alternativ einen FTP-Client.
- Manchmal wird die Liste nicht neu geladen. Lade die Seite einfach neu (z.B. mit F5).

### Mein Plugin lässt sich nicht mehr löschen.

:::info
In dem Fall kontaktiere bitte den Support.
:::

### Mein Plugin lässt sich nicht deaktivieren/aktivieren.

Vorschläge zur Lösung:

- Ist dein Plugin noch auf dem Server? Prüfe das, indem du auf den Aktualisieren-Button am Rand der Tabelle klickst. Dadurch wird die angezeigte Liste mit den Plugins auf dem Server neu synchronisiert. Es werden dann nur noch die Plugins angezeigt, die tatsächlich auf dem Server sind.

### Plugins fehlen im Bereich „Alle Plugins“.

Vorschläge zur Lösung:

- Für die aktuell installierte Version deines Gameservers gibt es möglicherweise keine aktuelle Version dieses Plugins. Um ein Plugin anzufragen, nutze den blauen Button „Plugin fehlt?“.

![](https://screensaver01.zap-hosting.com/index.php/s/DeMjH2s74geaLPq/preview)

### Die Deinstallation/Installation in der vorgefertigten Liste funktioniert scheinbar nicht.

Vorschläge zur Lösung:

- Lade die Seite hier neu, um das Problem zu beheben.

### Ein Plugin wird angezeigt, das gar nicht auf dem Server ist.

Vorschläge zur Lösung:

- In dem Fall kannst du den Plugin-Eintrag einfach durch Klick auf den Deinstallieren-Button entfernen.
- Alternativ kannst du versuchen, auf den Synchronisieren-Button zu klicken.

<InlineVoucher />