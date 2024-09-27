---
id: ets2-server-modding
title: "ETS2: Installiere Mods/DLCs auf deinem ETS2-Server"
description: Informationen darüber, wie du Mods und DLCs auf deinem Euro Truck Simulator 2 (ETS2) Server oder Spielclient von ZAP-Hosting installierst - ZAP-Hosting.com Dokumentation
sidebar_label: Mods/DLCs installieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der Euro Truck Simulator 2 verfügt über eine native Modding-Unterstützung über den Steam Workshop, die es dir ermöglicht, neben gekauften DLCs eine Vielzahl von Mods zu deinem Spiel und deinem Server hinzuzufügen. In dieser Anleitung erklären wir dir, wie du Mods auf deinem Client und anschließend auf deinem ETS2-Server installierst.

<InlineVoucher />

## Hinzufügen von Mods & DLCs

Zunächst musst du die Mods und DLCs, die du verwenden möchtest, finden und auswählen. Das kannst du im Spiel tun, indem du die Optionen **Mod Manager** und **DLC Browser** im Hauptmenü aufrufst.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

Auf Mods kannst du über die Option **Mod Manager** im Hauptmenü zugreifen, mit der du ganz einfach Mods über den Steam Workshop finden kannst.

Wenn du einige Mods installiert hast, stelle sicher, dass du sie mit den Pfeilen neben jeder Mod in die Liste **Aktive Mods** verschiebst.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Bestätige abschließend die Änderungen und starte das Spiel im Einzelspielermodus.

### DLCs

Du kannst auf die DLCs, die du auf deinem Konto gekauft hast, über die Option **DLC Browser** im Hauptmenü zugreifen.

Auf dieser Seite kannst du alle DLCs durchsuchen, die du derzeit besitzt und auf deinem Client installiert hast.

## Server-Pakete exportieren

Jetzt, wo du die Mods aktiviert hast und im Spiel bereit bist, musst du deine Mods als Serverpakete exportieren. Dazu musst du die Konsole im Spiel öffnen, die standardmäßig deaktiviert ist.

Um sie zu aktivieren, gehst du in das folgende Verzeichnis und öffnest die Datei `config.cfg`:
```
C:/Users/[dein_benutzer]/Dokumente/Euro Truck Simulator 2
```

Suche in dieser Datei die Zeile `uset g_developer "0"` und ersetze sie durch `uset g_developer "1"`, um sie zu aktivieren. Finde auch die Zeile `uset g_console "0"` und ersetze sie durch `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

Starte dein Spiel neu. Jetzt kannst du die Konsole je nach Tastaturlayout mit einer der folgenden Tasten öffnen:
```
` ODER ~ ODER
```

Jetzt bist du bereit und gibst in der Konsole den folgenden Befehl ein, um die Serverpakete zu exportieren:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

Es werden zwei Dateien in deinen `Dokumente/Euro Truck Simulator 2` Ordner exportiert, die `server_packages.dat` und die `server_packages.sii` Dateien, die Informationen über DLCs/Mods enthalten und im nächsten Abschnitt verwendet werden.

## Server-Pakete hochladen

Nachdem du die Serverpakete für deine Mods exportiert hast, musst du sie per FTP auf deinen ETS2-Server hochladen. Bitte benutze unsere [FTP File Access guide](https://zap-hosting.com/guides/docs/gameserver-ftpaccess) als weitere Hilfe, um dich mit deinem Server zu verbinden.

Sobald du fertig bist, gehe in das Hauptverzeichnis  von **Euro Truck Simulator 2**. Lade die beiden Dateien der Serverpakete in diesen Ordner hoch. Wenn diese Dateien bereits existieren, ersetze sie einfach.

![](https://screensaver01.zap-hosting.com/index.php/s/9xaDPw7sptsN3FH/preview)

:::tip
Beim Modding müssen die Mods zwischen dem Client und dem Server synchronisiert werden. Das heißt, wenn du dich mit einem Server verbindest, auf dem du keine Mods hast, wirst du aufgefordert, die fehlenden Mods herunterzuladen.
:::

Zum Schluss musst du deinen Server neu starten, damit die Mods automatisch aktiviert und installiert werden. Du hast erfolgreich Mods auf deinem ETS2-Server installiert.