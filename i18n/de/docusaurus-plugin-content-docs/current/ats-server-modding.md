---
id: ats-server-modding
title: "ATS: Mods/DLCs auf deinem ATS Gameserver installieren"
description: "Entdecke, wie du dein American Truck Simulator Erlebnis mit Mods und DLCs für Client und Server verbesserst → Jetzt mehr erfahren"
sidebar_label: Mods/DLCs installieren
services:
  - gameserver-ats
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

American Truck Simulator unterstützt Modding nativ über den Steam Workshop, der direkt im Spiel integriert ist. So kannst du eine Vielzahl von Mods zu deinem Spiel und deinem Gameserver hinzufügen, neben den gekauften DLCs. In dieser Anleitung zeigen wir dir, wie du Mods zuerst auf deinem Client und anschließend auf deinem ATS Gameserver installierst.

<InlineVoucher />

## Mods & DLCs hinzufügen

Zuerst musst du die Mods und DLCs finden und auswählen, die du nutzen möchtest. Das kannst du im Spiel über die Optionen **Mod Manager** und **DLC Browser** im Hauptmenü machen.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

Mods findest du über die Option **Mod Manager** im Hauptmenü, die dir den einfachen Zugriff auf den Steam Workshop ermöglicht.

Nachdem du Mods installiert hast, stelle sicher, dass du sie mit den Pfeilen neben jedem Mod in die Liste der **Aktiven Mods** verschiebst.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Bestätige abschließend die Änderungen und starte das Spiel im Einzelspieler-Modus.

### DLCs

Deine gekauften DLCs findest du über die Option **DLC Browser** im Hauptmenü.

Hier kannst du alle DLCs sehen, die du aktuell besitzt und auf deinem Client installiert hast.

## Server-Pakete exportieren

Nachdem du die Mods aktiviert hast und im Spiel bereit bist, musst du deine Mods als Server-Pakete exportieren. Dafür musst du die Konsole im Spiel öffnen, die standardmäßig deaktiviert ist.

Um sie zu aktivieren, öffne die folgende Verzeichnis und bearbeite die Datei `config.cfg`:
```
C:/Users/[dein_benutzer]/Documents/American Truck Simulator
```

Suche in der Datei die Zeile `uset g_developer "0"` und ersetze sie durch `uset g_developer "1"`, um den Entwickler-Modus zu aktivieren. Ebenso suche die Zeile `uset g_console "0"` und ersetze sie durch `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

Starte dein Spiel neu, nun kannst du die Konsole mit einer der folgenden Tasten öffnen, je nach Tastaturlayout:
```
` ODER ~ ODER \
```

Wenn du bereit bist, gib in der Konsole folgenden Befehl ein, um die Server-Pakete zu exportieren:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

Es werden zwei Dateien in deinem `Documents/American Truck Simulator` Ordner erstellt: `server_packages.dat` und `server_packages.sii`. Diese enthalten Infos zu DLCs/Mods und werden im nächsten Schritt gebraucht.

## Server-Pakete hochladen

Nachdem du die Server-Pakete für deine Mods exportiert hast, musst du sie per FTP auf deinen ATS Gameserver hochladen. Nutze dazu unsere [FTP-Zugang](gameserver-ftpaccess.md) Anleitung, falls du Hilfe beim Verbinden brauchst.

Wechsle dann in das Hauptverzeichnis **American Truck Simulator** auf deinem Server. Lade beide Server-Paket-Dateien in diesen Ordner hoch. Falls die Dateien schon existieren, einfach überschreiben.

![](https://screensaver01.zap-hosting.com/index.php/s/c5cYWL8eQKTzDg9/preview)

:::tip
Beim Modding müssen Mods zwischen Client und Server synchron sein. Wenn du dich mit einem Server verbindest, der Mods hat, die du nicht besitzt, wirst du aufgefordert, die fehlenden Mods herunterzuladen.
:::

Starte abschließend deinen Gameserver neu, damit die Mods automatisch aktiviert und installiert werden. Du hast erfolgreich Mods auf deinem ATS Gameserver installiert.

<InlineVoucher />