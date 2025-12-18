---
id: moe-server-savegames
title: "Myth of Empires: Savegames verwalten"
description: "Entdecke, wie du deine Myth of Empires Savegames sicher verwaltest und sicherst, um ein nahtloses Spielerlebnis zu gewährleisten → Jetzt mehr erfahren"
sidebar_label: Savegames verwalten
services:
  - gameserver-moe
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In dieser Anleitung erfährst du, wie du deine Myth of Empires Savegames auf deinem Gameserver verwaltest, inklusive Backup deiner lokalen und Server-Savegames sowie dem Hochladen auf deinen Server.

<InlineVoucher />

## Vorbereitung

Um auf deine Serverdateien zugreifen zu können, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source und kostenlos sind.

Du musst dich mit einem FTP-Client über die Zugangsdaten verbinden, die du im **Tools->FTP-Browser** Bereich im Webinterface deines Gameservers findest. Nutze gerne unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung für weitere Hilfe beim Verbinden mit deinem Server.

## Savegame Backup

### Lokales Savegame

Lokale Savegames sind solche, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät gehostet hast. MOE speichert diese in einem Ordner innerhalb des Spielinstallationsverzeichnisses.

Öffne Steam auf deinem System, klicke mit der rechten Maustaste auf dein **Myth of Empires** Spiel und wähle **Lokale Dateien durchsuchen** im Bereich **Verwalten** aus.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Navigiere zu folgendem Pfad:
```
../WindowsPrivateServer/MOE/Saved/SaveGames/
```

In diesem Ordner findest du alle aktuell vorhandenen lokalen Savegames.

### Savegame per FTP zugreifen

Das Backup deines Savegames vom Server ist easy. Sobald du dich mit einem FTP-Client mit deinem Gameserver verbunden hast, navigiere zu folgendem Pfad:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

Dort solltest du Ordner sehen, die deine Savegames sind. Klicke einfach mit der rechten Maustaste auf den Ordner und nutze den **Download**-Button, um ihn lokal auf deinem Gerät zu speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/3yN723tY8eiBb2w/preview)

### Automatisches Backup

Wir bieten dir auch die Möglichkeit, dein Savegame (und die Konfigurationsdatei) direkt über unser Webinterface automatisch zu sichern. Gehe dazu einfach im Webinterface deines Gameservers auf **Tools->Backups**. Hier kannst du verschiedene Optionen einstellen, um automatische Backups für deinen Server zu planen. Wir stellen dir 10 GB kostenlosen Backup-Speicherplatz zur Verfügung, in dem deine Backups gespeichert werden. Für mehr Infos zu Backups schau dir unsere spezielle [Backups](gameserver-backups.md) Anleitung an.

## Savegame hochladen

Ähnlich wie beim Backup ist das Hochladen deines Savegames simpel. Verbinde dich zuerst mit deinem Gameserver über einen FTP-Client. Navigiere dann zu folgendem Pfad:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

![](https://screensaver01.zap-hosting.com/index.php/s/KLD26KTYZYpfoqP/preview)

Zieh einfach dein Savegame per Drag & Drop in diesen Ordner im FTP-Client und es wird auf deinen Server hochgeladen.

## Savegame aktivieren

Um dein Savegame zu nutzen, musst du es in deiner Serverkonfiguration auswählen. Am einfachsten geht das im **Einstellungen** Bereich im Webinterface deines Gameservers. Für mehr Infos nutze unsere [Serverkonfiguration](moe-configuration.md) Anleitung.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Suche in diesem Bereich den Parameter **Map Name** in den Grundeinstellungen, dort sollte deine hochgeladene Welt jetzt auftauchen. Falls nicht, stelle sicher, dass du deinen Server nach dem Hochladen neu startest.

Du hast erfolgreich ein Savegame zu deinem Gameserver hinzugefügt.

<InlineVoucher />