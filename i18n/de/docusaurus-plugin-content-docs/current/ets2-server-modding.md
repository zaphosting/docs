---
id: ets2-server-modding
title: "ETS2: Mods/DLCs auf deinem ETS2 Server installieren"
description: "Entdecke, wie du dein Euro Truck Simulator 2 Erlebnis mit Mods und DLCs für noch mehr Spielspaß aufpeppen kannst → Jetzt mehr erfahren"
sidebar_label: Mods/DLCs installieren
services:
  - gameserver-factorio-ets2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Euro Truck Simulator 2 unterstützt Modding nativ über den Steam Workshop, der direkt im Spiel integriert ist. So kannst du eine Vielzahl von Mods sowohl in deinem Spiel als auch auf deinem Server hinzufügen – neben den gekauften DLCs. In dieser Anleitung zeigen wir dir, wie du Mods zuerst auf deinem Client installierst und anschließend auf deinem ETS2 Gameserver einrichtest.

<InlineVoucher />

## Mods & DLCs hinzufügen

Zuerst musst du die Mods und DLCs finden und auswählen, die du nutzen möchtest. Das kannst du direkt im Spiel über den **Mod Manager** und den **DLC Browser** im Hauptmenü machen.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

Mods findest du über die Option **Mod Manager** im Hauptmenü, wo du bequem Mods über den Steam Workshop suchen und installieren kannst.

Nachdem du Mods installiert hast, musst du sie mit den Pfeilen neben jedem Mod in die Liste der **Aktiven Mods** verschieben.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Bestätige dann die Änderungen und starte das Spiel im Einzelspielermodus.

### DLCs

Deine gekauften DLCs findest du über die Option **DLC Browser** im Hauptmenü.

Hier kannst du alle DLCs sehen, die du besitzt und auf deinem Client installiert hast.

## Server-Pakete exportieren

Nachdem du die Mods aktiviert hast und im Spiel bereit bist, musst du deine Mods als Server-Pakete exportieren. Dafür musst du die Konsole im Spiel öffnen, die standardmäßig deaktiviert ist.

Um sie zu aktivieren, öffne die folgende Datei:
```
C:/Users/[dein_benutzer]/Documents/Euro Truck Simulator 2
```

Suche in der Datei `config.cfg` die Zeile `uset g_developer "0"` und ändere sie zu `uset g_developer "1"`. Ebenso suche die Zeile `uset g_console "0"` und ändere sie zu `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

Starte dein Spiel neu. Die Konsole kannst du jetzt mit einer der folgenden Tasten öffnen, je nach Tastaturlayout:
```
` ODER ~ ODER \
```

Gib in der Konsole folgenden Befehl ein, um die Server-Pakete zu exportieren:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

Es werden zwei Dateien in deinem Ordner `Documents/Euro Truck Simulator 2` erstellt: `server_packages.dat` und `server_packages.sii`. Diese enthalten Infos zu deinen DLCs/Mods und werden im nächsten Schritt gebraucht.

## Server-Pakete hochladen

Jetzt musst du die exportierten Server-Pakete per FTP auf deinen ETS2 Gameserver hochladen. Nutze dafür unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung, falls du Hilfe beim Verbinden brauchst.

Wechsle dann in das Hauptverzeichnis **Euro Truck Simulator 2** auf deinem Server und lade beide Server-Paket-Dateien hoch. Falls sie schon existieren, einfach überschreiben.

![](https://screensaver01.zap-hosting.com/index.php/s/9xaDPw7sptsN3FH/preview)

:::tip
Beim Modding müssen Mods zwischen Client und Server synchron sein. Wenn du dich mit einem Server verbindest, der Mods hat, die du nicht besitzt, wirst du aufgefordert, die fehlenden Mods herunterzuladen.
:::

Starte deinen Server zum Schluss neu, damit die Mods automatisch aktiviert und installiert werden. Glückwunsch, du hast erfolgreich Mods auf deinem ETS2 Gameserver installiert!

<InlineVoucher />