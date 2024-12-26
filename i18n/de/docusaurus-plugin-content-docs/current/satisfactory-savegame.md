---
id: satisfactory-savegame
title: "Satisfactory: Manage Savegames"
description: Informationen über die Verwaltung von Savegames auf deinem Satisfactory-Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Managing Savegames
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In dieser Anleitung erfährst du, wie du deine Satisfactory-Spielstände auf deinem Spielserver verwaltest, einschließlich der Sicherung deiner lokalen und Server-Spielstände sowie des Hochladens auf deinen Server.

<InlineVoucher />

## Voraussetzungen

Um auf deine Serverdateien zugreifen zu können, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source und kostenlos zum Download zur Verfügung stehen.

Du musst dich über einen FTP-Client mit deinem Server verbinden und dabei die Anmeldedaten verwenden, die du unter **Tools->FTP-Broswer** auf der Weboberfläche deines Spielservers findest. Bitte verwende unsere Anleitung [Zugang über FTP](gameserver-ftpaccess.md) als weitere Hilfe, um dich mit deinem Server zu verbinden.

## Backup Savegame

### Lokales Savegame

Lokale Savegames sind solche, die du erstellt hast, während du entweder im Einzelspieler-Modus gespielt oder ein Multiplayer-Spiel lokal auf deinem Gerät gehostet hast. Diese befinden sich in deinen Windows AppData, genauer gesagt unter folgendem Pfad:
```
../AppData/Local/FactoryGame/Saved/SaveGames
```

:::tip
Du kannst direkt auf diesen Pfad zugreifen, indem du gleichzeitig `STRG + R` drückst und im Ausführen-Dialog nach dem folgenden Pfad suchst: `%localappdata%/FactoryGame/Saved/SaveGames`. Drücke einfach auf **OK** und du gelangst zum Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/pbXDwJWfEPtbAY3/preview)
:::

An diesem Ort kannst du einen Ordner sehen, der deine lokalen Savegames an einem Ort enthält.

![](https://screensaver01.zap-hosting.com/index.php/s/knB2RkXYGNR7J5M/preview)

### Zugriff auf das Savegame über FTP

Das Sichern deines Spielstands vom Server ist ganz einfach. Sobald du dich über einen FTP-Client mit deinem Spielserver verbunden hast, gehe zum folgenden Pfad:
```
../satisfactory/save-backups
```

An dieser Stelle solltest du einen Ordner mit einer Reihe von zufälligen Zeichen sehen, der dein Spielstand ist. Klicke einfach mit der rechten Maustaste auf den Ordner und verwende den Button "Download", um ihn lokal auf deinem Gerät zu speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/feHc74QHrzPwo24/preview)

### Automatisches Backup

Wir bieten auch die Möglichkeit, ein automatisches Backup deines Savegames (und deiner Konfigurationsdatei) direkt über unser Webinterface zu erstellen. Rufe einfach das Webinterface deines Gameservers auf und gehe in den Bereich **Tools->Backups**. Hier kannst du eine Reihe von Optionen konfigurieren, um automatische Backups für deinen Server zu planen. Wir stellen dir 10gb kostenlosen Backup-Speicher zur Verfügung, in dem deine Backups gespeichert werden. Weitere Informationen zu Backups findest du in unserer [Backups](gameserver-backups.md) zu diesem Thema.

## Savegame hochladen

Ähnlich wie das Erstellen von Backups ist auch das Hochladen deines Savegames einfach. Stelle zunächst sicher, dass du über einen FTP-Client mit deinem Spielserver verbunden bist. Wenn du bereit bist, gehe zum folgenden Pfad:
```
../satisfactory/save-backups
```

![](https://screensaver01.zap-hosting.com/index.php/s/8WsKYjYzNk54A65/preview)

Ziehe einfach eines deiner Savegames per Drag-and-Drop über deinen FTP-Client in diesen Ordner und es wird auf deinen Server hochgeladen.

:::tip
Es kann nützlich sein, den Namen des hochgeladenen Savegame-Ordners zu kopieren, da du diesen benötigst, wenn du ihn im nächsten Abschnitt aktivieren möchtest.
:::

## Savegame aktivieren

Die Verwendung deines Savegames ist sehr einfach. Du kannst dies entweder über den Satisfactory Server Manager im Spiel verwalten oder indem du zum Dashboard deines Servers gehst und den Abschnitt "Savegame Manager" verwendest.

Du hast deinem Spielserver erfolgreich ein Savegame hinzugefügt.