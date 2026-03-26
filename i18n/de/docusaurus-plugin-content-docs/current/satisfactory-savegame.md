---
id: satisfactory-savegame
title: "Satisfactory: Savegames verwalten"
description: "Entdecke, wie du deine Satisfactory Savegames lokal und auf deinem Server sicher verwaltest und sicherst → Jetzt mehr erfahren"
sidebar_label: Savegames verwalten
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In dieser Anleitung zeigen wir dir, wie du deine Satisfactory Savegames auf deinem Gameserver verwaltest, inklusive dem Backup deiner lokalen und Server-Savegames sowie dem Hochladen auf deinen Server.

<InlineVoucher />

## Vorbereitung

Um auf deine Server-Dateien zugreifen zu können, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source und kostenlos sind.

Du musst dich mit einem FTP-Client über die Zugangsdaten verbinden, die du im **Tools->FTP-Browser** Bereich im Webinterface deines Gameservers findest. Nutze gerne unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung, falls du Hilfe beim Verbinden brauchst.

## Savegame Backup

### Lokales Savegame

Lokale Savegames sind die, die du erstellt hast, während du Singleplayer gespielt hast oder ein Multiplayer-Spiel lokal auf deinem Gerät gehostet hast. Diese findest du im Windows AppData-Ordner, genauer unter folgendem Pfad:
```
../AppData/Local/FactoryGame/Saved/SaveGames
```

:::tip
Du kannst diesen Pfad ganz einfach direkt öffnen, indem du gleichzeitig `STRG` + `R` drückst und im Ausführen-Dialog folgenden Pfad eingibst: `%localappdata%/FactoryGame/Saved/SaveGames`. Einfach auf **OK** klicken und du landest direkt im Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/pbXDwJWfEPtbAY3/preview)
:::

An diesem Ort findest du Ordner, die all deine lokalen Savegames an einem Platz enthalten.

![](https://screensaver01.zap-hosting.com/index.php/s/knB2RkXYGNR7J5M/preview)

### Savegame per FTP zugreifen

Das Backup deines Savegames vom Server ist easy. Sobald du dich mit deinem Gameserver per FTP-Client verbunden hast, navigiere zu folgendem Pfad:
```
../satisfactory/save-backups
```

Dort solltest du einen Ordner mit einer Reihe zufälliger Zeichen sehen – das ist dein Savegame. Rechtsklick auf den Ordner und dann auf **Download** klicken, um es lokal auf deinem Gerät zu speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/feHc74QHrzPwo24/preview)

### Automatisches Backup

Wir bieten dir auch die Möglichkeit, dein Savegame (und die Konfigurationsdatei) direkt über unser Webinterface automatisch sichern zu lassen. Gehe dazu einfach im Webinterface deines Gameservers auf **Tools->Backups**. Dort kannst du verschiedene Optionen einstellen, um automatische Backups zu planen. Wir stellen dir 10 GB kostenlosen Backup-Speicherplatz zur Verfügung, in dem deine Backups gespeichert werden. Für mehr Infos zu Backups schau dir gerne unsere spezielle [Backups](gameserver-backups.md) Anleitung an.

## Savegame hochladen

Das Hochladen deines Savegames ist ähnlich simpel wie das Backup. Verbinde dich zuerst mit deinem Gameserver per FTP-Client. Navigiere dann zu folgendem Pfad:
```
../satisfactory/save-backups
```

![](https://screensaver01.zap-hosting.com/index.php/s/8WsKYjYzNk54A65/preview)

Zieh einfach dein Savegame per Drag & Drop in diesen Ordner im FTP-Client und es wird auf deinen Server hochgeladen.

:::tip
Es kann hilfreich sein, den Namen des hochgeladenen Savegame-Ordners zu kopieren, da du diesen brauchst, wenn du es im nächsten Schritt aktivieren möchtest.
:::

## Savegame aktivieren

Dein Savegame zu nutzen ist super easy. Du kannst das entweder über den Ingame Satisfactory Server Manager machen oder im Dashboard deines Servers unter dem Bereich **Savegame Manager**.

## Abschluss

Du hast erfolgreich ein Savegame auf deinem Gameserver hinzugefügt. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />