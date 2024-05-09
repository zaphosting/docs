---
id: enshrouded-server-savegames
title: "Enshrouded: Enshrouded Savegames verwalten"
description: Informationen über die Verwaltung von Savegames auf deinem Enshrouded-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Savegames verwalten
---

In dieser Anleitung erfahren wir, wie du deine Enshrouded Gamesaves auf deinem Gameserver verwaltest, einschließlich der Sicherung deiner lokalen und Server-Savegames sowie des Uploads auf deinen Server.

## Voraussetzungen

Um auf die Dateien deines Servers zugreifen zu können, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source sind und kostenlos heruntergeladen werden können.

Du musst dich über einen FTP-Client mit deinem Server verbinden, indem du die Zugangsdaten verwendest, die du unter **Werkzeuge->FTP-Broswer** im Webinterface deines Gameservers findest. Bitte benutze unsere [Zugriff per FTP Anleitung](gameserver-ftpaccess.md) als weitere Hilfe, um dich mit deinem Server zu verbinden.


## Backup Savegame

### Lokales Savegame

Lokale Savegames sind Savegames, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät hostest. Standardmäßig nutzt Enshrouded die Steam Cloud, um dein Savegame automatisch zu sichern. Um darauf zugreifen zu können, musst du in den Ordner "Steam Userdata" gehen, um auf die Spieldaten zuzugreifen. Gehe zu dem folgenden Pfad:
```
../Steam/userdata/[dein_steamid]/1203620/remote
```

:::tip
Bei regulären Installationen befindet sich der Steam-Ordner auf dem Laufwerk deines Betriebssystems, und zwar unter dem Pfad: C://Programmdateien x86/Steam`. Es ist möglich, dass dies bei dir anders ist, wenn du Steam woanders installiert hast.
:::

Sobald du diesen Ordner erreicht hast, siehst du eine Zeichendatei mit allen deinen lokalen Savegames an einem Ort. 

![image](https://github.com/zaphosting/docs/assets/42719082/31022018-3072-4b40-85f0-77f9da992ccc)

:::note
Wenn du explizit **nicht** die Steam Cloud zum Speichern verwendest, findest du deinen Speicherordner in folgendem Verzeichnis: `C://Users/[deinBenutzer]/Saved Games/Enshrouded`.
:::

### Zugriff auf das Savegame über FTP

Das Sichern deines Savegames vom Server aus ist ganz einfach. Sobald du dich über einen FTP-Client mit deinem Gameserver verbunden hast, gehst du zu folgendem Pfad:
```
../enshrouded/savegame/
```

An diesem Ort solltest du eine Datei mit zufälligen Zeichen sehen, die dein Savegame ist. Klicke einfach mit der rechten Maustaste auf die Datei und benutze die Schaltfläche **Download**, um sie lokal auf deinem Gerät zu speichern.

![image](https://github.com/zaphosting/docs/assets/42719082/e7c230a3-a2cb-4ae0-a0dc-6d2211edd06c)

### Automatische Sicherung

Wir bieten auch die Möglichkeit, dein Savegame (und deine Konfigurationsdatei) direkt über unser Webinterface automatisch zu sichern. Rufe einfach das Webinterface deines Gameservers auf und gehe in den Bereich **Tools->Backups**. Hier kannst du eine Reihe von Optionen konfigurieren, um automatische Backups für deinen Server zu planen. Wir stellen dir 10gb kostenlosen Backup-Speicher zur Verfügung, in dem deine Backups gespeichert werden. Weitere Informationen zu Backups findest du in unserem [Automatic Server Backup Anleitung](gameserver-backups.md) zu diesem Thema.

## Savegame hochladen

Ähnlich wie das Sichern ist auch das Hochladen deines Savegames ganz einfach. Stelle zunächst sicher, dass du dich über einen FTP-Client mit deinem Gameserver verbindest. Sobald du bereit bist, gehst du zu folgendem Pfad:
```
../enshrouded/savegame/
```

![image](https://github.com/zaphosting/docs/assets/42719082/e465680f-65bc-456d-bd99-fbdff755defb)

Ziehe einfach eines deiner Savegames mit deinem FTP-Client in diesen Ordner und es wird auf deinen Server hochgeladen.

## Savegame aktivieren

Die Verwendung deines Savegames ist sehr einfach. Verbinde dich einfach mit deinem Server und wähle während der Spieleinstellungen ein bestimmtes Savegame aus, das du verwenden möchtest. Der Name des Spielstands, das Level und das Datum des letzten Spiels werden unter jedem Spielstand angezeigt, damit du erkennen kannst, welchen du auswählen möchtest.

Du hast erfolgreich ein Savegame zu deinem Gameserver hinzugefügt.