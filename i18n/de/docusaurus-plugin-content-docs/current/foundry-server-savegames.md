---
id: foundry-server-savegames
title: "Foundry: Foundry Savegames verwalten"
description: "Entdecke, wie du deine Foundry Gamesaves lokal und auf deinem Server sicher sicherst und verwaltest, um nahtloses Gameplay zu gewährleisten → Jetzt mehr erfahren"
sidebar_label: Savegames verwalten
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In dieser Anleitung zeigen wir dir, wie du deine Foundry Gamesaves auf deinem Gameserver verwaltest, inklusive dem Backup deiner lokalen und Server-Savegames sowie dem Hochladen auf deinen Server.

<InlineVoucher />

## Vorbereitung

Um auf deine Serverdateien zugreifen zu können, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source und kostenlos sind.

Du musst dich mit einem FTP-Client über die Zugangsdaten verbinden, die du im **Tools->FTP-Browser** Bereich im Webinterface deines Gameservers findest. Nutze gerne unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung als Unterstützung, um dich mit deinem Server zu verbinden.

## Savegame sichern

### Lokales Savegame

Lokale Savegames sind solche, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät gehostet hast. Diese findest du im Windows LocalLow AppData Ordner, genauer unter folgendem Pfad:
```
../AppData/LocalLow/Channel 3 Entertainment/Foundry/save
```

:::tip
Du kannst diesen Pfad ganz einfach direkt öffnen, indem du gleichzeitig `STRG` + `R` drückst und im Ausführen-Dialog folgenden Pfad eingibst: `%userprofile%/appdata/locallow/Channel 3 Entertainment/foundry/save`. Einfach auf **OK** klicken und du landest direkt im Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/E6rniERFyc5AdS9/preview)
:::

An diesem Ort kannst du alle deine lokalen Savegames sehen.

![](https://screensaver01.zap-hosting.com/index.php/s/LGPj2xZNGeCJpjt/preview)

### Savegame per FTP zugreifen

Das Backup deines Savegames vom Server ist easy. Sobald du dich mit deinem Gameserver per FTP-Client verbunden hast, navigiere zu folgendem Pfad:
```
../foundry/saves/save
```

Dort solltest du Ordner sehen, die jeweils ein Savegame repräsentieren. Rechtsklicke einfach auf den Ordner und wähle **Download**, um ihn lokal auf deinem Gerät zu speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/X2f3Fo27GCyFe3m/preview)

### Automatisches Backup

Wir bieten dir auch die Möglichkeit, dein Savegame (und die Konfigurationsdatei) direkt über unser Webinterface automatisch sichern zu lassen. Gehe dazu einfach im Webinterface deines Gameservers auf **Tools->Backups**. Dort kannst du verschiedene Optionen einstellen, um automatische Backups zu planen. Wir stellen dir 10 GB kostenlosen Backup-Speicher zur Verfügung, in dem deine Backups abgelegt werden. Für mehr Infos zu Backups schau dir gerne unsere ausführliche [Backups](gameserver-backups.md) Anleitung an.

## Savegame hochladen

Ähnlich wie beim Backup ist das Hochladen deines Savegames simpel. Verbinde dich zuerst per FTP-Client mit deinem Gameserver. Navigiere dann zu folgendem Pfad:
```
../foundry/saves/save
```

![](https://screensaver01.zap-hosting.com/index.php/s/CobaowD4JLPWte7/preview)

Zieh einfach dein Savegame per Drag & Drop in diesen Ordner im FTP-Client und es wird auf deinen Server hochgeladen.

:::tip
Es kann hilfreich sein, den Namen des hochgeladenen Savegame-Ordners zu kopieren, da du diesen brauchst, um es im nächsten Schritt zu aktivieren.
:::

## Savegame aktivieren

Um ein bestimmtes Savegame zu nutzen, musst du eine Konfigurationsdatei anpassen. Es gibt verschiedene Wege, das zu machen – wir zeigen dir hier den Weg über das Webinterface, da das am einfachsten ist. Wenn du andere Methoden kennenlernen möchtest, schau dir unsere [Server-Konfiguration](foundry-configuration.md) Anleitung an.

Gehe im Webinterface deines Gameservers in den Bereich **Settings** und suche die Einstellung **Savename**.

Ändere diese Einstellung auf den Namen des Savegame-Ordners, den du im vorherigen Schritt hochgeladen hast. Speichere die Änderung unten mit dem grünen **Speichern**-Button und starte dann deinen Server neu.

<InlineVoucher />