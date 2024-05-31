---
id: rimworldtogether-server-savegames
title: "Rimworld Together: Rimworld Together Savegames verwalten"
description: Informationen über die Verwaltung von Savegames auf deinem Rimworld Together Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Savegames verwalten
---

In dieser Anleitung erfahren wir, wie du deine Rimworld Together Gamesaves auf deinem Spieleserver verwaltest, einschließlich der Sicherung deiner lokalen und Server-Savegames sowie des Uploads auf deinen Server.

:::info
Bedenke, dass das Verschieben eines bestehenden Vanilla-Spiels auf einen Rimworld Together-Server mit Mods wahrscheinlich zu Problemen beim Spielablauf führen wird. Das gilt besonders, wenn du Welten zwischen Servern mit verschiedenen Mods verschiebst.
:::

## Voraussetzungen

Um auf die Dateien deines Servers zugreifen zu können, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source sind und kostenlos heruntergeladen werden können.

Du musst dich über einen FTP-Client mit deinem Server verbinden, indem du die Zugangsdaten verwendest, die du im Webinterface deines Spieleservers unter **Tools->FTP-Broswer** findest. Bitte benutze unseren [FTP File Access guide](gameserver-ftpaccess.md) als weitere Hilfe, um dich mit deinem Server zu verbinden.


## Backup Savegame

### Lokales Savegame

Lokale Savegames sind Spiele, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät veranstaltet hast. Du findest sie in deinen Windows LocalLow AppData, und zwar in folgendem Pfad:
```
../AppData/LocalLow/Ludeon Studios/RimWorld by Ludeon Studios/Saves
```

:::tip
Du kannst auf diesen Pfad auch direkt zugreifen, indem du gleichzeitig `CTRL` + `R` drückst und im Ausführen-Dialog nach dem folgenden Pfad suchst: `%Benutzerprofil%/appdata/locallow/Ludeon Studios/RimWorld by Ludeon Studios/Saves`. Drücke einfach **OK** und du wirst zu dem Ordner weitergeleitet.

![image](https://screensaver01.zap-hosting.com/index.php/s/LZ6Ljo2DfBoH45s/preview)
:::

An diesem Ort kannst du alle deine lokalen Savegames sehen.

### Zugriff auf das Savegame über FTP

Das Sichern deines Savegames vom Server aus ist ganz einfach. Sobald du dich über einen FTP-Client mit deinem Spielserver verbunden hast, gehst du zu folgendem Pfad:
```
../rimworld-together/Saves
```

An diesem Ort solltest du Ordner sehen, die jeweils ein Savegame sind. Klicke einfach mit der rechten Maustaste auf den Ordner und benutze die Schaltfläche **Download**, um ihn lokal auf deinem Gerät zu speichern.

![image](https://screensaver01.zap-hosting.com/index.php/s/yjYXnDSHs7g5eCH/preview)

### Automatische Sicherung

Wir bieten auch die Möglichkeit, dein Savegame (und deine Konfigurationsdatei) direkt über unser Webinterface automatisch zu sichern. Rufe einfach das Webinterface deines Spieleservers auf und gehe in den Bereich **Tools->Backups**. Hier kannst du eine Reihe von Optionen konfigurieren, um automatische Backups für deinen Server zu planen. Wir stellen dir 10gb kostenlosen Backup-Speicher zur Verfügung, in dem deine Backups gespeichert werden. Weitere Informationen zu Backups findest du in unserem [Automatic Server Backup guide](gameserver-backups.md) zu diesem Thema.

## Savegame hochladen

Ähnlich wie das Sichern ist auch das Hochladen deines Savegames ganz einfach. Stelle zunächst sicher, dass du dich über einen FTP-Client mit deinem Spielserver verbindest. Sobald du bereit bist, gehst du zu folgendem Pfad:
```
../rimworld-together/Saves
```

![image](https://screensaver01.zap-hosting.com/index.php/s/s4zakSdKniMdGmT/preview)

Ziehe einfach alle deine Savegames mit deinem FTP-Client in diesen Ordner und sie werden auf deinen Server hochgeladen.

:::info
Wie bereits zu Beginn des Anleitung erwähnt, kann das Verschieben von Welten zwischen Servern mit verschiedenen Mods zu Problemen beim Gameplay führen.
:::