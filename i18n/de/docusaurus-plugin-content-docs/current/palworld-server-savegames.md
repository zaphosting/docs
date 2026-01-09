---
id: palworld-server-savegames
title: "Palworld: Palworld Savegames verwalten"
description: "Entdecke, wie du deine Palworld Gamesaves sicher verwaltest und sicherst für nahtloses Gameplay → Jetzt mehr erfahren"
sidebar_label: Savegames verwalten
services:
  - gameserver-palworld
---

import InlineVoucher from '@site/src/components/InlineVoucher';

In dieser Anleitung zeigen wir dir, wie du deine Palworld Gamesaves auf deinem Gameserver verwaltest, inklusive Backup deiner lokalen und Server-Savegames sowie dem Hochladen auf deinen Server.

## Vorbereitung

Um auf deine Serverdateien zugreifen zu können, benötigst du einen FTP-Client wie [WinSCP](https://winscp.net/eng/index.php) oder [FileZilla](https://filezilla-project.org/), die beide Open-Source und kostenlos sind.

Du musst dich mit einem FTP-Client über die Zugangsdaten verbinden, die du im Webinterface deines Gameservers unter **Tools->FTP-Browser** findest. Nutze gerne unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung, falls du Hilfe beim Verbinden brauchst.

## Savegame sichern

### Lokales Savegame

Lokale Savegames sind die, die du erstellt hast, während du ein Multiplayer-Spiel lokal auf deinem Gerät gehostet hast. Diese findest du im Windows AppData-Ordner, genauer unter folgendem Pfad:
```
../AppData/Local/Pal/Saved/SaveGames
```

:::tip
Du kannst diesen Pfad ganz einfach direkt öffnen, indem du gleichzeitig `STRG` + `R` drückst und im Ausführen-Dialog folgenden Pfad eingibst: `%localappdata%/Pal/Saved/SaveGames/`. Einfach auf **OK** klicken und du landest im Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/gWL9gtAZ8JE2ENP/preview)
:::

An diesem Ort findest du einen Ordner, der deiner SteamID entspricht. Öffne diesen Ordner und du siehst alle deine lokalen Savegames an einem Ort.

![](https://screensaver01.zap-hosting.com/index.php/s/aaeRXfs5cFjA6fN/preview)

### Savegame per FTP zugreifen

Das Backup deines Savegames vom Server ist easy. Sobald du dich mit deinem Gameserver per FTP-Client verbunden hast, navigiere zu folgendem Pfad:
```
../palworld/Pal/Saved/SaveGames/0
```

Dort solltest du einen Ordner mit einer Reihe zufälliger Zeichen sehen – das ist dein Savegame. Rechtsklick auf den Ordner und dann **Download** auswählen, um es lokal auf deinem Gerät zu speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/pmrmNHS5NAfXpY3/preview)

### Automatisches Backup

Wir bieten dir auch die Möglichkeit, dein Savegame (und die Konfigurationsdatei) direkt über unser Webinterface automatisch sichern zu lassen. Gehe dazu einfach im Webinterface deines Gameservers auf **Tools->Backups**. Dort kannst du verschiedene Optionen einstellen, um automatische Backups zu planen. Du bekommst 10 GB kostenlosen Backup-Speicher, in dem deine Backups abgelegt werden. Mehr Infos zum Thema Backups findest du in unserer speziellen [Backups](gameserver-backups.md) Anleitung.

## Savegame hochladen

Ähnlich wie beim Backup ist das Hochladen deines Savegames simpel. Verbinde dich zuerst mit deinem Gameserver per FTP-Client. Navigiere dann zu folgendem Pfad:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/tadxngnRCJDbtTe/preview)

Zieh einfach dein Savegame per Drag & Drop in diesen Ordner im FTP-Client und es wird auf deinen Server hochgeladen.

:::tip
Es kann hilfreich sein, den Namen des hochgeladenen Savegame-Ordners zu kopieren, da du diesen brauchst, um es im nächsten Schritt zu aktivieren.
:::

## Savegame aktivieren

Um ein bestimmtes Savegame zu nutzen, musst du eine Konfigurationsdatei anpassen. Navigiere zu folgendem Pfad und suche die Datei **GameUserSettings.ini**:
```
../Pal/Saved/Config/WindowsServer/ # Für Windows
../Pal/Saved/Config/LinuxServer/ # Für Linux
```

Öffne die **GameUserSettings.ini** und finde den Parameter `DedicatedServerName`.

Bearbeite diese Zeile, indem du den Namen des Savegame-Ordners einträgst, das du auf deinem Server aktivieren möchtest.

![](https://screensaver01.zap-hosting.com/index.php/s/qLG2jtzFkYM6WB7/preview)

Speichere die Datei und starte deinen Server neu, damit die Änderung wirksam wird. Du hast erfolgreich ein Savegame auf deinem Gameserver hinzugefügt.

## Savegame ist verschwunden

In seltenen Fällen kann es passieren, dass der Server beim Start ein neues Savegame erstellt, anstatt ein bestehendes zu laden.

Überprüfe zuerst deine Savefiles per FTP-Client unter folgendem Pfad:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/wYQ42Aein5y6Z6j/preview)

Dort solltest du dein altes Savegame und ein neu generiertes sehen. Um das zu beheben, bearbeite die Konfigurationsdatei wie im Abschnitt Savegame aktivieren beschrieben und trage den korrekten Savegame-Ordnernamen ein.

Das Savegame sollte wieder aktiv sein, sobald du die Datei gespeichert und den Server neu gestartet hast.

:::info
Wir empfehlen dir dringend, die automatischen Backups wie im vorherigen Abschnitt Automatisches Backup beschrieben zu aktivieren, da Palworld sich noch im Early Access befindet und Savegames bei Updates verloren gehen oder beschädigt werden können.
:::

<InlineVoucher />