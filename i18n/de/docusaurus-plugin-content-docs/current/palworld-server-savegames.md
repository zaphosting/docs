---
id: palworld-server-savegames
title: Palworld Savegames Verwalten
description: Informationen über die Savegame-verwaltung für das Palworld-Spiel von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Savegames
---

Dein Savegame kannst du über ein Programm wie FileZilla Client oder WinSCP verwalten. In unserem Beispiel benutzen wir WinSCP.
Stelle mit dem Programm deiner Wahl einfach eine Verbindung her, die Daten dafür findest du links im Dashboard unter "FTP-Browser".

Du kannst das Savegame per FTP im Ordner `Pal/Saved/SaveGames/0` finden.

![](https://screensaver01.zap-hosting.com/index.php/s/xMMKs6p5M6pz23j/preview)

## Savegame Sichern

Um dein Savegame zu sichern, kannst du dies einfach über deinen FTP Client herunterladen, gehe sicher das du den gesamten Ordner, und nicht nur Dateien darin sicherst, in unserem Fall heißt das Savegame `891F30085A3F4D338DC5F015B5C1E729`

![](https://screensaver01.zap-hosting.com/index.php/s/SXXpJ5oMPwyFNrN/preview)

## Eigenes Savegame Konfigurieren

### Lokales Savegame finden

Savegames, welche lokal erstellt wurden, kannst du in folgenden Ordner finden:
`Appdata/Local/PAL/Saved/SaveGames/`

Diesen Ordner kannst du öffnen, indem du Windows-Taste+R gleichzeitig drückst, und folgendes im Dialog eingibst:

`%localappdata%/PAL/Saved/SaveGames/`

![](https://screensaver01.zap-hosting.com/index.php/s/wtwnsM5rrjFxjis/preview)

Danach kann einfach auf "OK" gedrückt werden, wir landen nun im SaveGames Ordner von PAL:

![](https://screensaver01.zap-hosting.com/index.php/s/rpaSM3AQsZai6fz/preview)

Hier öffnen wir den Ordner neben der UserOption.sav Datei, dieser Ordner ist nach unserer SteamID benannt.

Hier können wir nun alle unserer Savegames einsehen.

### Savegame Hochladen

::info Gehe sicher, dass dein Server vor Änderung des Savegames gestoppt ist!

Um ein eigenes Savegame zu hochzuladen, kannst du deinen Savegame-Ordner in den `Pal/Saved/SaveGames/0` Ordner hochladen:

![](https://screensaver01.zap-hosting.com/index.php/s/tadxngnRCJDbtTe/preview)

### Savegame Laden

Um das Savegame auf dem Server zu laden, müssen wir die `GameUserSettings.ini` editieren, diese finden wir

bei Windows in:
`Pal/Saved/Config/WindowsServer/`

bei Linux in:
`Pal/Saved/Config/LinuxServer/`

Dort kann die `GameUserSettings.ini` geöffnet werden, hier finden wir eine `DedicatedServerName=` Zeile:

![](https://screensaver01.zap-hosting.com/index.php/s/qLG2jtzFkYM6WB7/preview)

Hier tragen wir nun den Namen unseres hochgeladenen Savegames ein, in unserem Fall sieht die Zeile dann so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/xe85aAbd7DefpF9/preview)

Fertig! Du kannst deinen Server nun starten und auf deinem Savegame weiter spielen.

## Mein Savegame ist aufeinmal weg, was nun?

In seltenen Fällen kann es passieren, dass der Server ein neues Savegame erstellt, wenn er gestartet wird, anstelle das bestehende zu laden.

Prüfe dazu in `Pal/Saved/SaveGames/0`, welche Savgames vorhanden sind:

![](https://screensaver01.zap-hosting.com/index.php/s/wYQ42Aein5y6Z6j/preview)

In unserem Fall haben wir zwei Savegames, der ältere Ordner ist hier wahrscheinlich unser Savegame, dieses können wir nun über unseren [in der GameUserSettings.ini Konfigurieren](#savegame-laden).

Danach sollte das Savegame wieder auf dem Server aktiv sein!