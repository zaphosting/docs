---
id: server-linux-arma3
title: "Arma 3 Dedicated Server Linux Setup"
description: "Entdecke, wie du den Arma 3 Dedicated Server auf Linux installierst und betreibst für nahtloses Server mieten und Management → Jetzt mehr erfahren"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux VPS/Dedicated Server und möchtest den Arma 3 Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen ähnlich.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS/Dedicated Server installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über das [GS/TS3 Interface hier](dedicated-linux-gs-interface.md).
:::

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem VPS/Dedicated Server. Falls du Hilfe brauchst, nutze unsere [SSH Erste Schritte](dedicated-linux-ssh.md) Anleitung.

Falls du SteamCMD zum ersten Mal auf deinem Linux-Server nutzt, musst du eine Erstkonfiguration durchführen. Nutze dafür unsere [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

## Installation

Melde dich als `steam` Nutzer an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. Damit installierst du den Arma 3 Dedicated Server direkt über SteamCMD unter dem `steam` Nutzer. Der Parameter `+@sSteamCmdForcePlatformType windows` sorgt dafür, dass die Windows-Binaries installiert werden.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/arma3-server' +login anonymous +app_update 233780 validate +quit
```

Sei geduldig, der Download kann je nach Größe des Spiels etwas dauern. Nach erfolgreichem Abschluss erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Arma 3 Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Alle Konfigurationsparameter kannst du in der **server.cfg** Datei im Hauptverzeichnis anpassen.
```
nano /home/steam/arma3-server/server.cfg
```

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server, indem du ins Hauptverzeichnis wechselst und die ausführbare Datei **arma3server_x64** mit folgendem Befehl startest:
```
/home/steam/arma3-server/arma3server_x64
```

Im Terminal solltest du nun viele Logs sehen, die bestätigen, dass der Server erfolgreich gestartet ist.

Spieler können sich direkt über den **Arma 3 Serverbrowser** mit deiner Server-IP und dem Standard-Port **2302** verbinden.

## Fazit

Glückwunsch, du hast den **Arma 3 Server** erfolgreich auf deinem VPS/Dedicated Server installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />