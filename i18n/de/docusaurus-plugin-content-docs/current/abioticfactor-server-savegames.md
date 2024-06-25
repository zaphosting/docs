---
id: abioticfactor-server-savegames
title: "Abiotic Factor: Verwalten von Abiotic Factor-Savegames"
description: Informationen über die Verwaltung von Savegames auf deinem Abiotic Factor Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Savegames verwalten
---

In dieser Anleitung erfahren wir, wie du deine Abiotic Factor Gamesaves auf deinem Spieleserver verwaltest, einschließlich der Sicherung deiner lokalen und Server-Savegames sowie des Uploads auf deinen Server.

## Voraussetzungen

Um auf die Dateien deines Servers zugreifen zu können, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source sind und kostenlos heruntergeladen werden können.

Du musst dich über einen FTP-Client mit deinem Server verbinden, indem du die Zugangsdaten verwendest, die du im Webinterface deines Spieleservers unter **Tools->FTP-Broswer** findest. Bitte benutze unseren [FTP File Access guide](gameserver-ftpaccess.md) als weitere Hilfe, um dich mit deinem Server zu verbinden.


## Backup Savegame

### Lokales Savegame

Lokale Savegames sind Savegames, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät veranstaltet hast. Du findest sie in den lokalen AppDaten von Windows, und zwar in folgendem Pfad:
```
../AppData/Local/AbioticFactor/Saved/SaveGames/[your_steamid]/Worlds
```

:::tip
Du kannst auf diesen Pfad auch direkt zugreifen, indem du gleichzeitig `CTRL` + `R` drückst und im Ausführen-Dialog nach dem folgenden Pfad suchst: `%Benutzerprofil%/AppData/Local/AbioticFactor/Saved/SaveGames`. Drücke einfach **OK** und du wirst zu dem Ordner weitergeleitet.

![image](https://screensaver01.zap-hosting.com/index.php/s/zd7Zy5C6EH7BMHa/preview)
:::

Achte darauf, dass du zu dem Ordner mit der Steam ID navigierst, gefolgt von dem Ordner `Worlds`. An diesem Ort findest du alle deine lokalen Savegames.

### Zugriff auf das Savegame über FTP

Das Sichern deines Savegames vom Server aus ist ganz einfach. Sobald du dich über einen FTP-Client mit deinem Spielserver verbunden hast, gehst du zu folgendem Pfad:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds
```

An diesem Ort findest du deine Savegames. Klicke einfach mit der rechten Maustaste auf den Ordner und benutze die Schaltfläche **Download**, um sie lokal auf deinem Gerät zu speichern.

![image](https://screensaver01.zap-hosting.com/index.php/s/RJSeBFpCdGamK7s/preview)

### Automatische Sicherung

Wir bieten auch die Möglichkeit, dein Savegame (und deine Konfigurationsdatei) direkt über unser Webinterface automatisch zu sichern. Rufe einfach das Webinterface deines Spieleservers auf und gehe in den Bereich **Tools->Backups**. Hier kannst du eine Reihe von Optionen konfigurieren, um automatische Backups für deinen Server zu planen. Wir stellen dir 10gb kostenlosen Backup-Speicher zur Verfügung, in dem deine Backups gespeichert werden. Weitere Informationen zu Backups findest du in unserem [Automatic Server Backup guide](gameserver-backups.md) zu diesem Thema.

## Savegame hochladen

Ähnlich wie das Sichern ist auch das Hochladen deines Savegames ganz einfach. Stelle zunächst sicher, dass du dich über einen FTP-Client mit deinem Spielserver verbindest. Sobald du bereit bist, gehst du zu folgendem Pfad:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

:::note
Zurzeit unterstützen Abiotic Factor Dedicated Server den Wechsel zwischen Savegames nicht, daher musst du den Inhalt deines Savegame-Ordners in den Hauptordner `world` hochladen.
:::

Öffne nun den Ordner des Savegames, das du hochladen möchtest. Ziehe den gesamten Inhalt deines Savegame-Ordners per Drag and Drop in den Hauptordner `world` auf dem Server. So wird dein Savegame auf deinen Server hochgeladen.

![image](https://screensaver01.zap-hosting.com/index.php/s/wsT4MXpp2MFWLtQ/preview)

:::info
Wenn der Hauptordner `world` des Savegames fehlt, versuche, den Server herunterzufahren und neu zu starten. Wenn das nicht hilft, benutze die Schaltfläche **Steam Dateien validieren** auf dem Dashboard des Gameservers, um die Standarddateien wiederherzustellen.
:::

## Savegame aktivieren

Anders als sonst musst du hier keine Konfigurationsdatei bearbeiten, um dein Savegame zu aktivieren, da die dedizierten Server von Abiotic Factor noch keine Savegame-Umschaltung unterstützen.

Stattdessen startest du deinen Server einfach neu und beim nächsten Start lädt der Server die Inhalte des Savegames, die du in den Hauptordner `world` hochgeladen hast.