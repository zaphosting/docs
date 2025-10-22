---
id: abioticfactor-server-savegames
title: "Abiotic Factor: Abiotic Factor Savegames verwalten"
description: "Entdecke, wie du deine Abiotic Factor Spielstände lokal und auf deinem Server sicher verwaltest und sicherst → Jetzt mehr erfahren"
sidebar_label: Savegames verwalten
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In dieser Anleitung zeigen wir dir, wie du deine Abiotic Factor Savegames auf deinem Gameserver verwaltest, inklusive Backup deiner lokalen und Server-Savegames sowie dem Hochladen auf deinen Server.

<InlineVoucher />

## Vorbereitung

Um auf deine Serverdateien zuzugreifen, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source und kostenlos sind.

Verbinde dich mit deinem Server über einen FTP-Client, indem du die Zugangsdaten nutzt, die du im **Tools->FTP-Browser** Bereich im Webinterface deines Gameservers findest. Für weitere Hilfe schau dir gerne unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung an.

## Savegame Backup

### Lokales Savegame

Lokale Savegames sind die, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät gehostet hast. Diese findest du im Windows Local AppData Ordner, genauer unter folgendem Pfad:
```
../AppData/Local/AbioticFactor/Saved/SaveGames/[deine_steamid]/Worlds
```

:::tip
Du kannst diesen Pfad ganz einfach direkt öffnen, indem du gleichzeitig `STRG` + `R` drückst und im Ausführen-Dialog folgenden Pfad eingibst: `%userprofile%/AppData/Local/AbioticFactor/Saved/SaveGames`. Einfach auf **OK** klicken und du landest im Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/zd7Zy5C6EH7BMHa/preview)
:::

Navigiere dann in den Ordner mit deiner Steam ID und anschließend in den `Worlds` Ordner. Dort findest du alle deine lokalen Savegames.

### Savegame per FTP zugreifen

Das Backup deines Savegames vom Server ist easy. Sobald du dich per FTP-Client mit deinem Gameserver verbunden hast, navigiere zu folgendem Pfad:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds
```

Hier findest du deine Savegames. Einfach mit Rechtsklick auf den Ordner klicken und **Download** auswählen, um die Daten lokal auf deinem Gerät zu speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/RJSeBFpCdGamK7s/preview)

### Automatisches Backup

Wir bieten dir auch die Möglichkeit, dein Savegame (und die Konfigurationsdatei) direkt über unser Webinterface automatisch sichern zu lassen. Gehe dazu im Webinterface deines Gameservers auf **Tools->Backups**. Dort kannst du verschiedene Optionen einstellen, um automatische Backups für deinen Server zu planen. Du bekommst 10 GB kostenlosen Backup-Speicher, in dem deine Backups abgelegt werden. Mehr Infos zum Thema Backups findest du in unserer speziellen [Backups](gameserver-backups.md) Anleitung.

## Savegame hochladen

Das Hochladen deines Savegames funktioniert ähnlich einfach wie das Backup. Verbinde dich zuerst per FTP-Client mit deinem Gameserver. Navigiere dann zu folgendem Pfad:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

:::note
Aktuell unterstützen Abiotic Factor Dedicated Server noch kein Wechseln zwischen Savegames. Du musst also den Inhalt deines Savegame-Ordners direkt in den Hauptordner `world` hochladen.
:::

Öffne den Ordner deines Savegames, das du hochladen möchtest. Ziehe dann einfach alle inneren Dateien und Ordner deines Savegame-Ordners in den Hauptordner `world` auf dem Server. So lädst du dein Savegame auf deinen Server hoch.

![](https://screensaver01.zap-hosting.com/index.php/s/wsT4MXpp2MFWLtQ/preview)

:::info
Falls der Hauptordner `world` fehlt, versuche den Server einmal herunterzufahren und neu zu starten. Hilft das nicht, nutze den **Steam-Dateien validieren** Button im Haupt-Dashboard deines Gameservers, um die Standarddateien wiederherzustellen.
:::

## Savegame aktivieren

Im Gegensatz zu anderen Spielen, bei denen du eine Konfigurationsdatei anpassen musst, um dein Savegame zu aktivieren, ist das hier nicht nötig, da Abiotic Factor Dedicated Server noch kein Savegame-Switching unterstützen.

Starte einfach deinen Server neu und beim nächsten Start lädt der Server automatisch das Savegame, das du in den Hauptordner `world` hochgeladen hast.

<InlineVoucher />