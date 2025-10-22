---
id: rimworldtogether-server-savegames
title: "Rimworld Together: Rimworld Together Savegames verwalten"
description: "Entdecke, wie du deine Rimworld Together Savegames verwaltest und sicherst für ein reibungsloses Multiplayer-Erlebnis → Jetzt mehr erfahren"
sidebar_label: Savegames verwalten
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In dieser Anleitung zeigen wir dir, wie du deine Rimworld Together Gamesaves auf deinem Gameserver verwaltest, inklusive Backup deiner lokalen und Server-Savegames sowie dem Hochladen auf deinen Server.

:::info
Beachte, dass das Verschieben eines bestehenden Vanilla-Spiels auf einen Rimworld Together Server mit Mods wahrscheinlich zu Gameplay-Problemen führt. Das gilt besonders, wenn Welten zwischen Servern mit unterschiedlichen Mods verschoben werden.
:::

<InlineVoucher />

## Vorbereitung

Um auf deine Serverdateien zuzugreifen, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source und kostenlos sind.

Du musst dich mit deinem FTP-Client über die Zugangsdaten verbinden, die du unter **Tools->FTP-Browser** im Webinterface deines Gameservers findest. Nutze gerne unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung als Hilfe, um dich mit deinem Server zu verbinden.

## Savegame sichern

### Lokales Savegame

Lokale Savegames sind die, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät gehostet hast. Diese findest du im Windows LocalLow AppData Ordner, genauer unter folgendem Pfad:
```
../AppData/LocalLow/Ludeon Studios/RimWorld by Ludeon Studios/Saves
```

:::tip
Du kannst diesen Pfad ganz einfach direkt öffnen, indem du gleichzeitig `STRG` + `R` drückst und im Ausführen-Dialog folgenden Pfad eingibst: `%userprofile%/appdata/locallow/Ludeon Studios/RimWorld by Ludeon Studios/Saves`. Einfach auf **OK** klicken und du landest im Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/LZ6Ljo2DfBoH45s/preview)
:::

An diesem Ort siehst du alle deine lokalen Savegames.

### Savegame per FTP zugreifen

Das Sichern deines Savegames vom Server ist easy. Sobald du dich mit deinem Gameserver per FTP-Client verbunden hast, navigiere zu folgendem Pfad:
```
../rimworld-together/Saves
```

Dort solltest du Ordner sehen, die jeweils ein Savegame darstellen. Rechtsklicke einfach auf den Ordner und wähle **Download**, um es lokal auf deinem Gerät zu speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/yjYXnDSHs7g5eCH/preview)

### Automatisches Backup

Wir bieten dir auch die Möglichkeit, dein Savegame (und die Konfigurationsdatei) direkt über unser Webinterface automatisch zu sichern. Gehe dazu im Webinterface deines Gameservers auf **Tools->Backups**. Dort kannst du verschiedene Optionen einstellen, um automatische Backups für deinen Server zu planen. Du bekommst 10 GB kostenlosen Backup-Speicher, in dem deine Backups abgelegt werden. Für mehr Infos zu Backups schau dir gerne unsere spezielle [Backups](gameserver-backups.md) Anleitung an.

## Savegame hochladen

Ähnlich wie beim Sichern ist das Hochladen deines Savegames simpel. Verbinde dich zuerst mit deinem Gameserver per FTP-Client. Navigiere dann zu folgendem Pfad:
```
../rimworld-together/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/s4zakSdKniMdGmT/preview)

Zieh einfach eines deiner Savegames per Drag & Drop in diesen Ordner im FTP-Client und es wird auf deinen Server hochgeladen.

:::info
Wie am Anfang der Anleitung erwähnt, führt das Verschieben von Welten zwischen Servern mit unterschiedlichen Mods wahrscheinlich zu Gameplay-Problemen.
:::

<InlineVoucher />