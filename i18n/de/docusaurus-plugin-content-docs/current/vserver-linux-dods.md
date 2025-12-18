---
id: vserver-linux-dods
title: "vServer: Day of Defeat: Source Dedicated Server Linux Setup"
description: "Entdecke, wie du schnell und einfach einen Day of Defeat: Source Dedicated Server auf deinem Linux VPS einrichtest → Jetzt mehr erfahren"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux VPS und möchtest den Day of Defeat: Source Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir verwenden Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über die [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [SSH Erste Schritte](vserver-linux-ssh.md) Anleitung. Außerdem musst du SteamCMD beim ersten Mal auf deinem Linux-Server einrichten. Nutze dazu unsere [SteamCMD Linux Setup](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

## Installation

Melde dich als `steam` Benutzer an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. Damit wird SteamCMD genutzt, um den Server direkt im Verzeichnis des `steam` Users zu installieren.
```
steamcmd +force_install_dir '/home/steam/dod-ds' +login anonymous +app_update 232290 validate +quit
```

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Sobald alles erfolgreich ist, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Day of Defeat: Source Servers abgeschlossen. Weitere Server-Einstellungen kannst du direkt in der Startdatei vornehmen.

Wechsle in dein Root-Verzeichnis. Dort findest du im Ordner `cfg` die Datei `server.cfg`, die du bearbeiten kannst, um Serveroptionen anzupassen.
```
nano /home/steam/dod-ds/dod/cfg/server.cfg
```

## GSL Token registrieren

Damit andere Spieler deinem Server beitreten können, musst du einen Game Server Login Token (GSLT) generieren und einbinden. Dieser Token authentifiziert deinen Server bei Steam. Erstelle deinen GSLT unter http://steamcommunity.com/dev/managegameservers mit der Game-ID 232290 für Day of Defeat: Source.

Füge den Token dann in deine Server-Startparameter mit `+sv_setsteamaccount <TOKEN>` ein.

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Wechsle in das Hauptverzeichnis des Spiels und führe folgenden Startbefehl aus:
```
./srcds_run -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Im Terminal solltest du nun Logs sehen, die den erfolgreichen Start anzeigen. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten in der Suchleiste nach `[deine_ip_adresse]:2456` suchst.

## Fazit

Glückwunsch, du hast deinen Day of Defeat: Source Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](vserver-linux-create-gameservice.md) Anleitung. Dort erfährst du, wie du deinen neuen Dedicated Server als Service einrichtest. Das bringt dir viele Vorteile wie automatischen Serverstart beim Booten, automatische Updates, einfache Verwaltung und Zugriff auf Logs – und noch viel mehr!

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />