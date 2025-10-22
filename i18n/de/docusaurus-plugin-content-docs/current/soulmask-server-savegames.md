---
id: soulmask-server-savegames
title: "Soulmask: Soulmask Savegames verwalten"
description: "Entdecke, wie du deine Soulmask Gamesaves lokal und auf deinem Server sicher verwaltest und sicherst → Jetzt mehr erfahren"
sidebar_label: Savegames verwalten
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

In dieser Anleitung zeigen wir dir, wie du deine Soulmask Gamesaves auf deinem Gameserver verwaltest, inklusive Backup deiner lokalen und Server-Savegames sowie dem Hochladen auf deinen Server.

<InlineVoucher />

## Vorbereitung

Um auf deine Server-Dateien zuzugreifen, brauchst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source und kostenlos sind.

Verbinde dich mit deinem Server über einen FTP-Client, indem du die Zugangsdaten nutzt, die du im **Tools->FTP-Browser** Bereich im Webinterface deines Gameservers findest. Für weitere Hilfe beim Verbinden schau dir unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung an.

## Savegame Backup

### Lokales Savegame

Lokale Savegames sind die, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät gehostet hast. Diese findest du im Windows Local AppData, genauer gesagt unter folgendem Pfad:
```
../AppData/Local/WS/[deine_steamid]/AutoGames
```

:::tip
Du kannst diesen Pfad ganz easy direkt öffnen, indem du gleichzeitig `STRG` + `R` drückst und im Ausführen-Dialog folgenden Pfad eingibst: `%userprofile%/appdata/local/WS/`. Einfach auf **OK** klicken und den Ordner mit deiner SteamID öffnen, um zum AutoGames-Ordner zu gelangen.

![](https://screensaver01.zap-hosting.com/index.php/s/FT4J9Jdi8d8LDxq/preview)
:::

Dort findest du alle deine lokalen Savegames. Jeder Ordner ist mit dem Einladungscode des Servers benannt, was die Identifikation der richtigen Welt super easy macht.

### Savegame per FTP zugreifen

Das Backup deines Savegames vom Server ist simpel. Sobald du dich per FTP-Client mit deinem Gameserver verbunden hast, navigiere zu folgendem Pfad:
```
../soulmask/WS/Saved/Worlds/Dedicated
```

Dort findest du den Hauptordner `Level01_Main`, in dem das Savegame für den Dedicated Server liegt. Rechtsklick auf den Ordner und **Download** auswählen, um es lokal auf deinem Gerät zu speichern.

:::note
Aktuell unterstützen Soulmask Dedicated Server nur ein Savegame gleichzeitig, das sich im Hauptordner `Level01_Main` befindet.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Ywna6zc3BkCK6ES/preview)

### Automatisches Backup

Wir bieten dir auch die Möglichkeit, dein Savegame (und die Konfigurationsdatei) direkt über unser Webinterface automatisch sichern zu lassen. Gehe dazu im Webinterface deines Gameservers auf **Tools->Backups**. Dort kannst du verschiedene Optionen einstellen, um automatische Backups zu planen. Du bekommst 10 GB kostenlosen Backup-Speicher, in dem deine Backups abgelegt werden. Für mehr Infos zu Backups schau dir unsere spezielle [Backups](gameserver-backups.md) Anleitung an.

## Savegame hochladen

Das Hochladen deines Savegames ist ähnlich einfach wie das Backup. Verbinde dich zuerst per FTP-Client mit deinem Gameserver und stelle sicher, dass dein Server ausgeschaltet ist.

:::note
Aktuell unterstützen Soulmask Dedicated Server nur ein Savegame gleichzeitig, das sich im Hauptordner `Level01_Main` befindet.
:::

Navigiere dann zu folgendem Pfad:
```
../soulmask/WS/Saved/Worlds/Dedicated/Level01_Main
```

![](https://screensaver01.zap-hosting.com/index.php/s/iWKPKw5Grg4JgPi/preview)

Zieh jetzt die **world.db** Datei von dem Savegame, das du hochladen möchtest, per Drag & Drop in diesen Ordner und ersetze die bestehende Datei. Lade die bestehende Datei vorher runter, wenn du sie behalten möchtest, sonst geht sie verloren.

Du kannst auch deine Gameplay-Einstellungen hochladen, indem du zu folgendem Pfad gehst:
```
../soulmask/WS/Saved/GameplaySettings
```

![](https://screensaver01.zap-hosting.com/index.php/s/yqXF9EaDCin5rzT/preview)

Zieh die **GameXishu.json** Datei von dem Savegame, das du hochladen willst, per Drag & Drop in diesen Ordner und ersetze die vorhandene Datei. Lade auch hier die bestehende Datei vorher runter, wenn du sie behalten möchtest.

:::tip
Falls die Savegame-Datei für **GameXishu.json** einen leicht anderen Namen hat, z.B. `GameXishu_2.json`, benenne sie zurück zu `GameXishu.json`, damit sie vom Dedicated Server erkannt wird.
:::

Starte den Server danach einfach neu, und dein Savegame sollte erfolgreich geladen werden.

<InlineVoucher />