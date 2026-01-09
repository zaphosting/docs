---
id: enshrouded-server-savegames
title: "Enshrouded: Enshrouded Savegames verwalten"
description: "Entdecke, wie du deine Enshrouded Gamesaves sicher verwaltest und sicherst für entspanntes Multiplayer-Gaming → Jetzt mehr erfahren"
sidebar_label: Savegames verwalten
services:
  - gameserver-enshrouded
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In dieser Anleitung zeigen wir dir, wie du deine Enshrouded Gamesaves auf deinem Gameserver verwaltest, inklusive Backup deiner lokalen und Server-Savegames sowie dem Hochladen auf deinen Server.

<InlineVoucher />

## Vorbereitung

Um auf deine Server-Dateien zugreifen zu können, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source und kostenlos sind.

Du musst dich mit deinem FTP-Client über die Zugangsdaten verbinden, die du im **Tools->FTP-Browser** Bereich im Webinterface deines Gameservers findest. Nutze gerne unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung, falls du Hilfe beim Verbinden brauchst.

## Savegame sichern

### Lokales Savegame

Lokale Savegames sind solche, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät gehostet hast. Standardmäßig nutzt Enshrouded Steam Cloud, um dein Savegame automatisch zu sichern. Um darauf zuzugreifen, musst du in deinen Steam-Userdata-Ordner gehen. Navigiere zu folgendem Pfad:
```
../Steam/userdata/[deine_steamid]/1203620/remote
```

:::tip
Bei normalen Installationen findest du den Steam-Ordner auf deinem Systemlaufwerk unter: `C://Program Files x86/Steam`. Beachte, dass der Pfad abweichen kann, wenn du Steam an einem anderen Ort installiert hast.
:::

Sobald du diesen Ordner erreicht hast, siehst du eine Datei mit Charakterdaten sowie alle deine lokalen Savegames an einem Ort.

![](https://screensaver01.zap-hosting.com/index.php/s/dyydLNzQt7ZWRPx/preview)

:::note
Falls du explizit **nicht** Steam Cloud zum Speichern nutzt, findest du deinen Savegame-Ordner unter: `C://Users/[deinuser]/Saved Games/Enshrouded`.
:::

### Savegame per FTP zugreifen

Das Backup deines Savegames vom Server ist easy. Sobald du dich mit deinem FTP-Client mit deinem Gameserver verbunden hast, navigiere zu folgendem Pfad:
```
../enshrouded/savegame/
```

Dort findest du eine Datei mit zufälligen Zeichen – das ist dein Savegame. Rechtsklick drauf und **Download** auswählen, um es lokal auf deinem Gerät zu speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/wTcodeKXYq3RBfY/preview)

### Automatisches Backup

Wir bieten dir auch die Möglichkeit, dein Savegame (und die Konfigurationsdatei) direkt über unser Webinterface automatisch sichern zu lassen. Gehe dazu einfach im Webinterface deines Gameservers auf **Tools->Backups**. Dort kannst du verschiedene Optionen einstellen, um automatische Backups zu planen. Du bekommst 10 GB kostenlosen Backup-Speicher, in dem deine Backups abgelegt werden. Für mehr Infos zu Backups schau dir unsere spezielle [Backups](gameserver-backups.md) Anleitung an.

## Savegame hochladen

Das Hochladen deines Savegames ist genauso easy wie das Backup. Verbinde dich zuerst mit deinem Gameserver per FTP-Client. Navigiere dann zu folgendem Pfad:
```
../enshrouded/savegame/
```

![](https://screensaver01.zap-hosting.com/index.php/s/gJW8wSapi4Bo2gw/preview)

Zieh einfach dein Savegame per Drag & Drop in diesen Ordner im FTP-Client und es wird auf deinen Server hochgeladen.

## Savegame aktivieren

Dein Savegame zu nutzen ist super simpel. Verbinde dich mit deinem Server und im Spiel-Setup kannst du dann das gewünschte Savegame auswählen. Der Name, das Level und das letzte Spiel-Datum werden unter jedem Save angezeigt, damit du leicht erkennst, welches du laden möchtest.

Du hast erfolgreich ein Savegame auf deinem Gameserver hinzugefügt.

<InlineVoucher />