---
id: moe-server-savegames
title: "Myth of Empires: Savegames verwalten"
description: Informationen über die Verwaltung von Savegames auf deinem Myth of Empires Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Savegames verwalten
---

## Einführung

In dieser Anleitung erfährst du, wie du deine Myth of Empires Gamesaves auf deinem Gameserver verwaltest, einschließlich der Sicherung deiner lokalen und Server-Savegames sowie des Uploads auf deinen Server.

## Voraussetzungen

Um auf die Dateien deines Servers zugreifen zu können, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source sind und kostenlos heruntergeladen werden können.

Du musst dich über einen FTP-Client mit deinem Server verbinden, indem du die Zugangsdaten verwendest, die du unter **Tools->FTP-Broswer** im Webinterface deines Gameservers findest. Bitte benutze unseren [FTP-Dateizugriff](gameserver-ftpaccess.md) als weitere Hilfe, um dich mit deinem Server zu verbinden.

## Backup Savegame

### Lokales Savegame

Lokale Savegames sind Spiele, die du während eines Multiplayer-Spiels lokal auf deinem Gerät erstellt hast. MOE speichert diese in einem Ordner am Installationsort des Spiels.

Öffne Steam auf deinem System, klicke mit der rechten Maustaste auf dein **Myth of Empires** Spiel und wähle **Lokale Dateien durchsuchen**, während du den Mauszeiger über den Abschnitt **Verwalten** bewegst.

![Bild](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Navigiere zu dem folgenden Pfad:
```
../WindowsPrivateServer/MOE/Saved/SaveGames/
```

In diesem Ordner kannst du alle deine derzeit vorhandenen lokalen Savegames sehen.

### Zugriff auf das Savegame über FTP

Das Sichern deines Savegames vom Server aus ist ganz einfach. Sobald du dich über einen FTP-Client mit deinem Gameserver verbunden hast, gehst du zu folgendem Pfad:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

An diesem Ort solltest du Ordner sehen, die deine Savegames sind. Klicke einfach mit der rechten Maustaste auf den Ordner und benutze die Schaltfläche **Download**, um ihn lokal auf deinem Gerät zu speichern.

![image](https://screensaver01.zap-hosting.com/index.php/s/3yN723tY8eiBb2w/preview)

### Automatische Sicherung

Wir bieten auch die Möglichkeit, dein Savegame (und deine Konfigurationsdatei) direkt über unser Webinterface automatisch zu sichern. Rufe einfach das Webinterface deines Gameservers auf und gehe in den Bereich **Tools->Backups**. Hier kannst du eine Reihe von Optionen konfigurieren, um automatische Backups für deinen Server zu planen. Wir stellen dir 10gb kostenlosen Backup-Speicher zur Verfügung, in dem deine Backups gespeichert werden. Weitere Informationen zu Backups findest du in unserem [Automatische Server Backups Anleitung](gameserver-backups.md) zu diesem Thema.

## Savegame hochladen

Ähnlich wie das Sichern ist auch das Hochladen deines Savegames ganz einfach. Stelle zunächst sicher, dass du dich über einen FTP-Client mit deinem Gameserver verbindest. Sobald du bereit bist, gehst du zu folgendem Pfad:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

![image](https://screensaver01.zap-hosting.com/index.php/s/KLD26KTYZYpfoqP/preview)

Ziehe einfach eines deiner Savegames mit deinem FTP-Client in diesen Ordner und es wird auf deinen Server hochgeladen.

## Savegame aktivieren

Um dein Savegame zu benutzen, musst du es in deiner Serverkonfiguration auswählen. Am einfachsten ist es, wenn du im Webinterface deines Gameservers den Bereich **Einstellungen** aufrufst. Weitere Informationen findest du in unserer [MOE-Konfigurationsanleitung](moe-configuration.md).

![image](https://screensaver01.zap-hosting.com/index.php/s/cGbSnRp5gfbWnnb/preview)

In diesem Abschnitt findest du den Parameter **Map Name** im Abschnitt Grundeinstellungen, und deine hochgeladene Welt sollte nun hier zu finden sein. Wenn du ihn nicht siehst, stelle sicher, dass du deinen Server nach dem Hochladen neu startest.

Du hast erfolgreich ein Savegame zu deinem Gameserver hinzugefügt.