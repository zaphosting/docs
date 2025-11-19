---
id: dedicated-linux-avorion
title: "Dedicated Server: Avorion Dedicated Server Linux Setup"
description: "Erfahre, wie du den Avorion Dedicated Server auf deinem Linux VPS installierst und konfigurierst für nahtloses Server mieten → Jetzt mehr erfahren"
sidebar_label: Avorion
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Linux VPS und möchtest den Avorion Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du deine Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über das [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [SSH Erste Schritte](dedicated-linux-ssh.md) Anleitung.

Falls du SteamCMD zum ersten Mal auf deinem Linux-Server nutzt, musst du eine Erstkonfiguration durchführen. Nutze dafür unsere [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

## Installation

Melde dich als `steam`-User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. So installierst du den Server direkt über SteamCMD als `steam`-User.
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Avorion Servers abgeschlossen. Die Servereinstellungen kannst du direkt in der **startserver.sh** Datei anpassen, die du zuvor kopiert hast. Öffne sie mit `nano /home/steam/Avorion-Server/startserver.sh` und konfiguriere deine Server-Parameter.

Welt-spezifische Einstellungen kannst du in der **server.ini** Datei anpassen, die in jedem Galaxy-Save liegt. Diese findest du im Root-Verzeichnis deines Users (normalerweise `steam`) und kannst sie mit folgenden Befehlen bearbeiten:
```
# Aktuelle Saves anzeigen
ls /home/steam/.avorion/galaxies

# Save-Konfiguration bearbeiten
nano /home/steam/.avorion/galaxies/avorion_galaxy/server.ini
```

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server. Wechsle in das Hauptverzeichnis des Spiels und erstelle am besten eine Kopie der Beispiel-Batchdatei.
```
cp /home/steam/Avorion-Server/server.sh /home/steam/Avorion-Server/startserver.sh
```

Du kannst die Datei nach Belieben anpassen. Wenn du bereit bist, starte den Server mit folgendem Befehl:
```
/home/steam/Avorion-Server/startserver.sh
```

Im Terminal solltest du jetzt Logs sehen, die anzeigen, dass der Server hochfährt. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Sobald alles fertig ist, erscheint die Meldung `Server startup complete.` in der Konsole. Du kannst dich jetzt direkt über den Ingame-Serverbrowser mit deinem Server verbinden, indem du die Server-IP und den Port (Standard: 27000) eingibst.

## Fazit

Glückwunsch, du hast deinen Avorion Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](dedicated-linux-create-gameservice.md) Anleitung. Damit richtest du deinen Dedicated Server als Service ein – mit Vorteilen wie automatischem Start beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und vieles mehr!

Falls du noch Fragen hast oder Probleme auftreten, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!