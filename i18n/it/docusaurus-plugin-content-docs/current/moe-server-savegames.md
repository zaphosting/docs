---
id: moe-server-savegames
title: "Myth of Empires: Savegames verwalten"
description: "Entdecke, wie du deine Myth of Empires Savegames sicher verwaltest und sicherst für ein nahtloses Spielerlebnis → Jetzt mehr erfahren"
sidebar_label: Savegames verwalten
services:
  - gameserver-moe
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In diesem Guide erfährst du, wie du deine Myth of Empires Savegames auf deinem Gameserver verwaltest, inklusive Backup deiner lokalen und Server-Savegames sowie dem Hochladen auf deinen Server.

<InlineVoucher />

## Vorbereitung

Um auf deine Server-Dateien zuzugreifen, brauchst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), beide sind Open-Source und kostenlos.

Verbinde dich mit deinem Server über den FTP-Client, indem du die Zugangsdaten nutzt, die du unter **Tools->FTP-Browser** im Webinterface deines Gameservers findest. Für weitere Hilfe schau dir unseren Guide [Zugriff via FTP](gameserver-ftpaccess.md) an.

## Savegame Backup

### Lokales Savegame

Lokale Savegames sind die, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät gehostet hast. MOE speichert diese in einem Ordner im Installationsverzeichnis des Spiels.

Starte Steam auf deinem System, klicke mit der rechten Maustaste auf dein **Myth of Empires** Spiel und wähle **Lokale Dateien durchsuchen** unter dem Bereich **Verwalten**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Navigiere zum Pfad:
```
../WindowsPrivateServer/MOE/Saved/SaveGames/
```

In diesem Ordner findest du alle aktuell vorhandenen lokalen Savegames.

### Savegame per FTP zugreifen

Das Backup deines Savegames vom Server ist easy. Sobald du per FTP-Client mit deinem Gameserver verbunden bist, geh zum Pfad:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

Hier solltest du Ordner sehen, die deine Savegames sind. Rechtsklick auf den Ordner und dann **Download** auswählen, um es lokal auf deinem Gerät zu speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/3yN723tY8eiBb2w/preview)

### Automatisches Backup

Wir bieten dir auch die Möglichkeit, dein Savegame (und die Konfigurationsdatei) direkt über unser Webinterface automatisch sichern zu lassen. Geh dazu einfach in deinem Gameserver-Webinterface auf **Tools->Backups**. Dort kannst du verschiedene Optionen einstellen, um automatische Backups zu planen. Du bekommst 10 GB kostenlosen Backup-Speicher, in dem deine Backups abgelegt werden. Für mehr Infos zu Backups check unseren speziellen [Backups](gameserver-backups.md) Guide.

## Savegame hochladen

Das Hochladen deines Savegames ist genauso easy wie das Backup. Verbinde dich zuerst per FTP-Client mit deinem Gameserver. Dann navigiere zum Pfad:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

![](https://screensaver01.zap-hosting.com/index.php/s/KLD26KTYZYpfoqP/preview)

Zieh einfach dein Savegame per Drag & Drop in diesen Ordner im FTP-Client, und es wird auf deinen Server hochgeladen.

## Savegame aktivieren

Um dein Savegame zu nutzen, musst du es in deiner Server-Konfiguration auswählen. Am einfachsten geht das im **Settings** Bereich im Webinterface deines Gameservers. Für mehr Infos nutze unseren [Server-Konfigurations](moe-configuration.md) Guide.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Such in den Basic Settings den Parameter **Map Name** – dein hochgeladenes Savegame sollte hier jetzt auftauchen. Falls nicht, starte deinen Server nach dem Upload neu.

Du hast dein Savegame erfolgreich auf deinem Gameserver hinzugefügt.

<InlineVoucher />