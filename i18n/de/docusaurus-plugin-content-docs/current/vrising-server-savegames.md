---
id: vrising-server-savegames
title: "V Rising: V Rising Savegames verwalten"
description: "Entdecke, wie du deine V Rising Spielstände sicher verwaltest und sicherst für ein entspanntes Multiplayer-Erlebnis → Jetzt mehr erfahren"
sidebar_label: Savegames verwalten
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In dieser Anleitung zeigen wir dir, wie du deine V Rising Savegames auf deinem Gameserver verwaltest, inklusive Backup deiner lokalen und Server-Savegames sowie dem Hochladen auf deinen Server.

<InlineVoucher />

## Vorbereitung

Um auf deine Server-Dateien zuzugreifen, brauchst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source und kostenlos sind.

Verbinde dich mit deinem Server über den FTP-Client mit den Zugangsdaten, die du im **Tools->FTP-Browser** Bereich im Webinterface deines Gameservers findest. Für weitere Hilfe beim Verbinden schau dir unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung an.

## Savegame sichern

### Lokales Savegame

Lokale Savegames sind die, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät gehostet hast. Diese findest du im Windows LocalLow AppData Ordner, genauer unter folgendem Pfad:
```
../AppData/LocalLow/Stunlock Studios/VRising
```

:::tip
Du kannst diesen Pfad ganz easy direkt öffnen, indem du gleichzeitig `STRG` + `R` drückst und im Ausführen-Dialog folgenden Pfad eingibst: `%userprofile%/appdata/locallow/Stunlock Studios/VRising`. Einfach auf **OK** klicken und du bist im Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/dz4ytiTai5jD2ep/preview)
:::

An diesem Ort findest du je nach Nutzung der Steam Cloud Save-Funktion und Server-Typ einen `Saves` und/oder `CloudSaves` Ordner. In diesen Ordnern sind deine lokalen Savegames gespeichert.

:::note
Je nach Spielversion liegen deine Saves entweder im v1 oder v3 Ordner.
:::

### Savegame per FTP zugreifen

Das Backup deines Savegames vom Server ist easy. Sobald du dich per FTP-Client mit deinem Gameserver verbunden hast, navigiere zu folgendem Pfad:
```
../vrising/save-data/Saves
```

Hier solltest du einen v1 und v3 Ordner sehen, je nach Spielversion. In jedem Ordner findest du deine Savegames. Einfach mit Rechtsklick auf den Ordner klicken und **Download** wählen, um die Daten lokal auf deinem Gerät zu speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/tZ4HngqLeHTkizz/preview)

### Automatisches Backup

Wir bieten dir auch die Möglichkeit, dein Savegame (und die Konfigurationsdatei) automatisch über unser Webinterface zu sichern. Gehe dazu im Webinterface deines Gameservers auf **Tools->Backups**. Dort kannst du verschiedene Optionen einstellen, um automatische Backups zu planen. Du bekommst 10 GB kostenlosen Backup-Speicher, in dem deine Backups abgelegt werden. Für mehr Infos zu Backups schau dir unsere spezielle [Backups](gameserver-backups.md) Anleitung an.

## Savegame hochladen

Das Hochladen deines Savegames funktioniert ähnlich wie das Backup. Verbinde dich zuerst per FTP-Client mit deinem Gameserver. Navigiere dann zu folgendem Pfad:
```
../vrising/save-data/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/RXd4aoxrA6QnP46/preview)

Je nach Savegame-Version ziehst du jetzt einfach deine Savegames per Drag & Drop in den passenden Ordner im FTP-Client und lädst sie so auf deinen Server hoch.

:::tip
Es kann hilfreich sein, den Namen des hochgeladenen Savegame-Ordners zu kopieren, da du diesen im nächsten Schritt zum Aktivieren brauchst.
:::

## Savegame aktivieren

Um ein bestimmtes Savegame zu nutzen, musst du eine Konfigurationsdatei anpassen. Es gibt verschiedene Wege, das zu machen – wir zeigen dir hier den einfachsten über das Webinterface. Wenn du andere Methoden sehen möchtest, schau in unsere [Server-Konfiguration](vrising-configuration.md) Anleitung.

Gehe im Webinterface deines Gameservers in den Bereich **Einstellungen** und suche die Einstellung **Savename**.

Ändere diesen Wert auf den Namen des Savegame-Ordners, den du im vorherigen Schritt hochgeladen hast. Speichere die Änderung unten mit dem grünen **Speichern** Button und starte dann deinen Server neu.

<InlineVoucher />