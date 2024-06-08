---
id: palworld-server-savegames
title: "Palworld: Palworld Savegames verwalten"
description: Informationen über die Verwaltung von Savegames auf deinem Palworld-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Savegames verwalten
---

In dieser Anleitung erfahren wir, wie du deine Palworld Gamesaves auf deinem Gameserver verwaltest, einschließlich der Sicherung deiner lokalen und Server-Savegames sowie dem Upload auf deinen Server.

## Voraussetzungen

Um auf die Dateien deines Servers zugreifen zu können, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source sind und kostenlos heruntergeladen werden können.

Du musst dich über einen FTP-Client mit deinem Server verbinden, indem du die Zugangsdaten verwendest, die du unter **Werkzeuge->FTP-Broswer** im Webinterface deines Gameservers findest. Bitte benutze unseren [FTP File Access Anleitung](gameserver-ftpaccess.md) als weitere Hilfe, um dich mit deinem Server zu verbinden.


## Backup Savegame

### Lokales Savegame

Lokale Savegames sind Savegames, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät veranstaltet hast. Du findest sie in den Windows AppData, und zwar in folgendem Pfad:
```
../AppData/Local/Pal/Saved/SaveGames
```

:::tip
Du kannst ganz einfach auf diesen Pfad zugreifen, indem du gleichzeitig `CTRL` + `R` drückst und im Ausführen-Dialog nach dem folgenden Pfad suchst: `%localappdata%/Pal/Saved/SaveGames/`. Drücke einfach **OK** und du wirst zu dem Ordner weitergeleitet.

![image](https://screensaver01.zap-hosting.com/index.php/s/wtwnsM5rrjFxjis/preview)
:::

An diesem Ort kannst du einen Ordner sehen, der deine SteamID enthält. Öffne diesen Ordner und du kannst alle deine lokalen Savegames an einem Ort sehen.

![image](https://screensaver01.zap-hosting.com/index.php/s/rpaSM3AQsZai6fz/preview)

### Zugriff auf das Savegame über FTP

Es ist ganz einfach, dein Savegame auf dem Server zu sichern. Sobald du dich über einen FTP-Client mit deinem Gameserver verbunden hast, gehst du zu folgendem Pfad:
```
../palworld/Pal/Saved/SaveGames/0
```

An diesem Ort solltest du einen Ordner mit einer Reihe zufälliger Zeichen sehen, der dein Savegame ist. Klicke einfach mit der rechten Maustaste auf den Ordner und benutze die Schaltfläche **Download**, um es lokal auf deinem Gerät zu speichern.

![image](https://github.com/zaphosting/docs/assets/42719082/ca890470-450d-4962-a982-39378dfbb695)

### Automatische Backups

Wir bieten auch die Möglichkeit, ein automatisches Backup deines Savegames (und deiner Konfigurationsdatei) direkt über unser Webinterface zu erstellen. Rufe einfach das Webinterface deines Gameservers auf und gehe in den Bereich **Tools->Backups**. Hier kannst du eine Reihe von Optionen konfigurieren, um automatische Backups für deinen Server zu planen. Wir stellen dir 10gb kostenlosen Backup-Speicher zur Verfügung, in dem deine Backups gespeichert werden. Weitere Informationen zu Backups findest du in unserer [Automatische Server Backups Anleitung](gameserver-backups.md) zu diesem Thema.

## Savegame hochladen

Ähnlich wie das Sichern ist auch das Hochladen deines Savegames ganz einfach. Stelle zunächst sicher, dass du dich über einen FTP-Client mit deinem Gameserver verbindest. Sobald du bereit bist, gehst du zu folgendem Pfad:
```
../Pal/Saved/SaveGames/0
```

![Bild](https://screensaver01.zap-hosting.com/index.php/s/tadxngnRCJDbtTe/preview)

Ziehe einfach alle deine Savegames mit deinem FTP-Client in diesen Ordner und sie werden auf deinen Server hochgeladen.

:::tip
Es kann nützlich sein, den Namen des hochgeladenen Gamesave-Ordners zu kopieren, da du ihn brauchst, wenn du ihn im nächsten Abschnitt aktivieren willst.
:::

## Savegame aktivieren

Um ein bestimmtes Savegame zu verwenden, musst du eine Konfigurationsdatei bearbeiten. Gehe zu folgendem Pfad und suche die Datei namens **GameUserSettings.ini**:
```
../Pal/Saved/Config/WindowsServer/ # Für Windows
../Pal/Saved/Config/LinuxServer/ # Für Linux
```

In diesem Ordner öffnest du die Datei **GameUserSettings.ini** und suchst den Parameter `DedicatedServerName`.

Bearbeite den Inhalt dieser Zeile und ersetze ihn durch den Namen des Savegames (den Namen des Ordners), das du auf deinem Server aktivieren möchtest.

![image](https://screensaver01.zap-hosting.com/index.php/s/qLG2jtzFkYM6WB7/preview)

Stelle sicher, dass du diese Datei speicherst und deinen Server neu startest, damit die Änderungen wirksam werden. Du hast erfolgreich ein Savegame zu deinem Gameserver hinzugefügt.

## Savegame verschwunden

In seltenen Fällen kann es vorkommen, dass der Server beim Starten ein neues Savegame erstellt, anstatt ein bestehendes zu laden.

Überprüfe zunächst deine Savegames über deinen FTP-Client, indem du den folgenden Pfad aufrufst:
```
../Pal/Saved/SaveGames/0
```

![image](https://screensaver01.zap-hosting.com/index.php/s/wYQ42Aein5y6Z6j/preview)

An dieser Stelle solltest du immer noch das alte Savegame sehen und ein neues, das generiert wurde. Um dies zu beheben, bearbeite einfach die Konfigurationsdatei, wie im Abschnitt [Savegame aktivieren](#savegame-aktivieren) oben beschrieben, mit dem richtigen Namen des Savegame-Ordners.

Das Savegame sollte wieder aktiv sein, sobald du die Datei gespeichert und deinen Server neu gestartet hast.

:::info
Wir empfehlen dringend, automatische Backups zu aktivieren, wie im vorherigen Abschnitt [Automatisches Backup](#automatische-backups) erwähnt, da sich Palworld noch im Early Access befindet und es daher möglich ist, dass Savegames bei Updates verloren gehen oder beschädigt werden.
:::