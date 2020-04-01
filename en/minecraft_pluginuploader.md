---
id: minecraft_pluginuploader
title: Plugin Uploader
sidebar_label: Plugin Uploader
---

## 🕹 Plugin Uploader

Klicke auf der Serverübersicht auf deinen Minecraft Server. Wähle dann den Reiter Plugins, der sich im Unterpunkt Einstellungen befindet.

> Stelle sicher, dass dein aktuelles Spiel Spigot oder Bukkit ist. Nur dort ist der Plugin Uploader verfügbar.

![](https://screensaver01.zap-hosting.com/index.php/s/QebjPJ7kb3jAjEQ/preview)

## 🔼 Plugin installieren / hochladen

Es gibt zwei verschiedene Möglichkeiten, wie du ein Plugin auf deinem Minecraft Server installieren kannst. 

- Du kannst dein Plugin aus einer von uns vorgefertigten Auswahl installieren (falls vorhanden)
- Du kannst deine eigenen Plugins per Drag'n Drop hochladen

### 📚 Plugins aus Liste

Wähle aus der Liste "Alle Plugins" dein Wunschplugin aus und klicke auf den grünen Button "Installieren". Die Installation kann je nach Plugingröße einen Augenblick dauern.

![](https://screensaver01.zap-hosting.com/index.php/s/pS3CWPBT3mxXyHr/preview)

###  Eigenes Plugin hochladen 

Ziehe die gewünschte Plugin .jar Datei in die auf dem Bild markierte Box. Es ist auch möglich mehrere Plugins gleichzeitig in diesen Bereich zu ziehen und zu installieren.

![](https://screensaver01.zap-hosting.com/index.php/s/EWB49StdDnf2aEC/preview)

Hast du das Plugin in das Uploadfeld gezogen, dauert es einen Augenblick, bis sich das Plugin auf dem Server befindet.

![](https://screensaver01.zap-hosting.com/index.php/s/gLJEP6msd6Wypsc/preview)

Um das Plugin nun nutzen zu können musst du deinen Server mit dem Befehl `/rl` oder `/reload` über deine Gameserver Konsole neu laden (oder den gesamten Server neu starten). 

> In seltenen Fällen muss der Server einmal neugestartet werden, damit das Plugin reibungslos läuft.

## 🚮 Plugin deinstallieren

![](https://screensaver01.zap-hosting.com/index.php/s/bXBA4GXNg6Znd5p/preview)

Um ein Plugin zu deinstallieren, klicke auf die rote Mülltone neben dem Eintrag.

## 🔴 Plugin deaktivieren

Klicke dazu hinter einem installierten Plugin auf den grünen Button mit dem Schloss. Wechselt der Button seine Farbe von grün zu orange, hast du dein Plugin deaktiviert. Andersherum aktivierst du dein Plugin wieder. Die Plugindatei befindet sich nach dem Deaktivieren weiterhin auf dem Server, wird jedoch vom Gameserver nicht mehr geladen.

> Nachdem du dein Plugin deaktiviert hast, musst du den Server einmal reloaden, damit die Änderungen wirksam werden. Verwende dazu einen der beiden folgenden Befehle in deiner Gameserverkonsole oder Ingame: `/rl` oder `/reload`

![](https://screensaver01.zap-hosting.com/index.php/s/oFLgW46xixPij36/preview)


## 🆘 Häufige Probleme

**Mein Plugin lässt sich über den "Drag'n Drop"-Bereich nicht hochladen.**

Lösungsvorschläge:

- Dein Plugin ist möglicherweise größer als 5 MB und daher ungeeignet für den Upload via WebInterface. Verwende alternativ einfach einen FTP-Client. 
- Die FTP-Rechte machen möglicherweise Probleme. Klicke zum Beheben des Problems auf den Reiter FTP-Browser im WebInterface und klicke den Button FTP-Rechte neu setzen. Danach sollten sich Plugins wieder hochladen lassen.
- Dein Plugin ist möglicherweise ungültig und enthält keine gültige plugin.yml. In dem Fall verwende bitte hier auch alternativ einen FTP-Client.
- Manchmal kann es vorkommen, dass die Liste nicht neu geladen wird. Lade dazu einfach die Seite via. F5, etc. neu.

### Mein Plugin lässt sich nicht mehr löschen.

> Kontaktiere in dem Fall den Support.

### Mein Plugin lässt sich nicht deaktivieren / aktivieren.

Lösungsvorschläge:

- Befindet sich dein Plugin noch auf dem Server? Kontrolliere dies, indem du den Refresh Button am Rand der Tabelle klickst. Dadurch wird die angezeigte Liste mit den Plugins auf dem Server neu synchronisiert. Jetzt werden nur noch die Plugins angezeigt, die sich auch wirklich auf dem Server befinden.

### In der vorgefertigten Liste fehlen Plugins.

Lösungsvorschläge:

- Für die aktuell installierte Version deines Gameservers gibt es möglicherweise keine aktuelle Version dieses Plugins. Um dir ein Plugin zu wünschen, benutze den blauen Button Plugin fehlt?.

![](https://screensaver01.zap-hosting.com/index.php/s/waDKkT4bSXiGMTb/preview)

### Das Neu-/De-/Installieren in der vorgefertigten Liste scheint nicht zu funktionieren.

Lösungsvorschläge:

- Lade zum Lösen des Problems hier einmal die Seite neu.

### Es wird ein Plugin angezeigt, welches gar nicht auf dem Server ist.

Lösungsvorschläge:

- In dem Fall kannst du den Plugineintrag einfach per Klick auf den Deinstallieren-Button entfernen.
- Du kannst auch alternativ versuchen den Button Synchronisieren zu klicken.