---
id: foundry-server-savegames
title: "Foundry: Foundry Savegames verwalten"
description: Informationen über die Verwaltung von Savegames auf deinem Foundry-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Savegames verwalten
---

## Einführung

In dieser Anleitung erfährst du, wie du deine Foundry Gamesaves auf deinem Gameserver verwaltest, einschließlich der Sicherung deiner lokalen und Server-Savegames sowie des Uploads auf deinen Server.

## Voraussetzungen

Um auf die Dateien deines Servers zuzugreifen, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source sind und kostenlos heruntergeladen werden können.

Du musst dich über einen FTP-Client mit deinem Server verbinden, indem du die Zugangsdaten verwendest, die du unter **Tools->FTP-Broswer** im Webinterface deines Gameservers findest. Bitte benutze unseren [Zugriff per FTP Anleitung](gameserver-ftpaccess.md) als weitere Hilfe, um dich mit deinem Server zu verbinden.


## Backup Savegame

### Lokales Savegame

Lokale Savegames sind Savegames, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät veranstaltet hast. Diese findest du in deinen Windows LocalLow AppData, und zwar in folgendem Pfad:
```
../AppData/LocalLow/Channel 3 Entertainment/Foundry/save
```

:::tip
Du kannst ganz einfach direkt auf diesen Pfad zugreifen, indem du `CTRL` + `R` gleichzeitig drückst und im Ausführen-Dialog nach dem folgenden Pfad suchst: `%userprofile%/appdata/locallow/Channel 3 Entertainment/foundry/save`. Drücke einfach **OK** und du wirst zu dem Ordner geführt.

![image](https://screensaver01.zap-hosting.com/index.php/s/E6rniERFyc5AdS9/preview)
:::

An dieser Stelle kannst du alle deine lokalen Savegames sehen.

![image](https://screensaver01.zap-hosting.com/index.php/s/LGPj2xZNGeCJpjt/preview)

### Zugriff auf das Savegame über FTP

Es ist ganz einfach, dein Savegame auf dem Server zu sichern. Sobald du dich über einen FTP-Client mit deinem Gameserver verbunden hast, gehst du zu folgendem Pfad:
```
../foundry/saves/save
```

An diesem Ort solltest du Ordner sehen, die jeweils ein Savegame sind. Klicke einfach mit der rechten Maustaste auf den Ordner und benutze die Schaltfläche **Download**, um ihn lokal auf deinem Gerät zu speichern.

![image](https://screensaver01.zap-hosting.com/index.php/s/X2f3Fo27GCyFe3m/preview)

### Automatische Sicherung

Wir bieten auch die Möglichkeit, dein Savegame (und deine Konfigurationsdatei) direkt über unser Webinterface automatisch zu sichern. Rufe einfach das Webinterface deines Gameservers auf und gehe in den Bereich **Tools->Backups**. Hier kannst du eine Reihe von Optionen konfigurieren, um automatische Backups für deinen Server zu planen. Wir stellen dir 10gb kostenlosen Backup-Speicher zur Verfügung, in dem deine Backups gespeichert werden. Weitere Informationen zu Backups findest du in unserem [Automatic Server Backups Anleitung](gameserver-backups.md) zu diesem Thema.

## Savegame hochladen

Ähnlich wie das Sichern ist auch das Hochladen deines Savegames ganz einfach. Stelle zunächst sicher, dass du dich über einen FTP-Client mit deinem Gameserver verbindest. Sobald du bereit bist, gehst du zu folgendem Pfad:
```
../foundry/saves/save
```

![image](https://screensaver01.zap-hosting.com/index.php/s/CobaowD4JLPWte7/preview)

Ziehe einfach alle deine Savegames mit deinem FTP-Client in diesen Ordner und sie werden auf deinen Server hochgeladen.

:::tip
Es kann nützlich sein, den Namen des hochgeladenen Gamesave-Ordners zu kopieren, da du ihn brauchst, wenn du ihn im nächsten Abschnitt aktivieren willst.
:::

## Savegame aktivieren

Um ein bestimmtes Savegame verwenden zu können, musst du eine Konfigurationsdatei bearbeiten. Es gibt mehrere Möglichkeiten, dies zu tun. Wir werden uns mit dem Webinterface beschäftigen, da dies die benutzerfreundlichste ist. Wenn du andere Methoden zur Bearbeitung der Datei suchst, schaue dir bitte unsere [Foundry-Konfigurationsanleitung](foundry-configuration.md) an, in der dies beschrieben wird.

Gehe einfach zum Abschnitt **Einstellungen** im Webinterface deines Gameservers und suche die Einstellung **Savename**.

Ändere diese Einstellung auf den Namen des Spielstandsordners, den du im vorherigen Schritt hochgeladen hast. Wenn du fertig bist, speichere unten mit dem grünen Button **Speichern** und starte dann deinen Server neu.