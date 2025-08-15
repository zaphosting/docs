---
id: soulmask-server-savegames
title: "Soulmask: Soulmask Savegames verwalten"
description: Informationen über die Verwaltung von Savegames auf deinem Soulmask-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Savegames verwalten
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In dieser Anleitung erfahren wir, wie du deine Soulmask Gamesaves auf deinem Spielserver verwaltest, einschließlich der Sicherung deiner lokalen und Server-Savegames sowie des Uploads auf deinen Server.

<InlineVoucher />

## Voraussetzungen

Um auf die Dateien deines Servers zugreifen zu können, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source sind und kostenlos heruntergeladen werden können.

Du musst dich über einen FTP-Client mit deinem Server verbinden, indem du die Zugangsdaten verwendest, die du im Webinterface deines Spieleservers unter **Tools->FTP-Broswer** findest. Bitte benutze unsere [Zugriff per FTP](gameserver-ftpaccess.md) Anleitung als weitere Hilfe, um dich mit deinem Server zu verbinden.


## Backup Savegame

### Lokales Savegame

Lokale Savegames sind Spiele, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät veranstaltet hast. Du findest sie in den lokalen AppDaten von Windows, und zwar in folgendem Pfad:
```
../AppData/Local/WS/[dein_steamid]/AutoGames
```

:::tip
Du kannst auf diesen Pfad auch direkt zugreifen, indem du die Tasten `CTRL` + `R` gleichzeitig drückst und im Ausführen-Dialog nach dem folgenden Pfad suchst: `%userprofile%/appdata/local/WS/`. Drücke einfach **OK** und öffne den Ordner mit deiner SteamID, um den Ordner AutoGames zu erreichen.

![](https://screensaver01.zap-hosting.com/index.php/s/FT4J9Jdi8d8LDxq/preview)
:::

An diesem Ort kannst du alle deine lokalen Savegames sehen. Jeder Ordner ist mit dem Einladungscode des Servers gekennzeichnet, so dass es einfach ist, die richtige Welt zu finden.

### Zugriff auf das Savegame über FTP

Das Sichern deines Savegames vom Server ist ganz einfach. Sobald du dich über einen FTP-Client mit deinem Spielserver verbunden hast, gehst du zu folgendem Pfad:
```
../soulmask/WS/Saved/Worlds/Dedicated
```

Dort siehst du den Hauptordner `Level01_Main`, in dem sich die Speicherstände für den dedizierten Server befinden. Klicke einfach mit der rechten Maustaste auf den Ordner und benutze den Button **Download**, um ihn lokal auf deinem Gerät zu speichern.

:::note
Im Moment unterstützen die Soulmask Dedicated Server nur einen Speicherstand, der sich im Hauptordner `Level01_Main` befindet.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Ywna6zc3BkCK6ES/preview)

### Automatische Sicherung

Wir bieten auch die Möglichkeit, ein automatisches Backup deines Savegames (und deiner Konfigurationsdatei) direkt über unser Webinterface zu erstellen. Gehe einfach zum Webinterface deines Spieleservers und rufe den Bereich **Tools->Backups** auf. Hier kannst du eine Reihe von Optionen konfigurieren, um automatische Backups für deinen Server zu planen. Wir stellen dir 10gb kostenlosen Backup-Speicher zur Verfügung, in dem deine Backups gespeichert werden. Weitere Informationen zu Backups findest du in unserer [Backups](gameserver-backups.md) Anleitung zu diesem Thema.

## Savegame hochladen

Ähnlich wie das Sichern ist auch das Hochladen deines Savegames ganz einfach. Stelle zunächst sicher, dass du dich über einen FTP-Client mit deinem Spielserver verbindest und deinen Server herunterfährst.

:::note
Im Moment unterstützen die Soulmask Dedicated Server nur einen einzigen Spielstand, der sich im Hauptordner `Level01_Main` befindet.
:::

Sobald du bereit bist, gehst du zu folgendem Pfad:
```
.../soulmask/WS/Saved/Worlds/Dedicated/Level01_Main
```

![Bild](https://screensaver01.zap-hosting.com/index.php/s/iWKPKw5Grg4JgPi/preview)

Ziehe nun die Datei **world.db** aus dem Speicher, den du hochladen möchtest, und ersetze die bestehende Datei. Achte darauf, dass du die bestehende Datei vom Server herunterlädst, wenn du sie behalten willst, sonst geht sie verloren, sobald du die Datei überschreibst.

Du kannst auch deine Spieleinstellungsdatei hochladen, indem du zu folgendem Pfad gehst:
```
../soulmask/WS/Saved/GameplaySettings
```

![Bild](https://screensaver01.zap-hosting.com/index.php/s/yqXF9EaDCin5rzT/preview)

Ziehe die Datei **GameXishu.json** aus dem Spielstand, den du hochladen möchtest, und ersetze die bestehende Datei. Lade auch hier die bestehende Datei herunter, wenn du sie vor dem Ersetzen behalten willst.

:::tip
Wenn der Spielstand, den du verwendest, einen etwas anderen Namen für die **GameXishu.json** Datei hat, z.B. `GameXishu_2.json`, passe den Dateinamen wieder an `GameXishu.json` an, damit er vom dedizierten Server erkannt wird.
:::

Starte nun einfach den Server erneut und dein Spielstand sollte nun erfolgreich auf den Server geladen werden.