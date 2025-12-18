---
id: dedicated-linux-l4d2
title: "Dedicated Server: Left 4 Dead 2 Dedicated Server Linux Setup"
description: "Entdecke, wie du einen Left 4 Dead 2 Dedicated Server auf deinem Linux VPS für nahtloses Multiplayer-Gaming einrichtest → Jetzt mehr erfahren"
sidebar_label: "Left 4 Dead 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux VPS und möchtest den Left 4 Dead 2 Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über das [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [SSH Initial Access](dedicated-linux-ssh.md) Anleitung. Außerdem musst du SteamCMD beim ersten Mal auf deinem Linux-Server einrichten. Nutze dafür unsere [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten, der SteamCMD nutzt, um den Server direkt im Verzeichnis des `steam` Users zu installieren:
```
steamcmd +force_install_dir '/home/steam/l4d2-ds' +login anonymous +app_update 222840 validate +quit
```

Sei geduldig, der Download kann je nach Größe des Spiels etwas dauern. Sobald alles fertig ist, erscheint eine Erfolgsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Left 4 Dead 2 Servers abgeschlossen. Weitere Servereinstellungen kannst du direkt in der Startdatei vornehmen.

Wechsle in dein Root-Verzeichnis. Dort findest du im Ordner `cfg` die Datei `server.cfg`, die du bearbeiten kannst, um Serveroptionen anzupassen.
```
nano /home/steam/l4d2-ds/l4d2/cfg/server.cfg
```

## GSL Token registrieren

Damit andere Spieler deinem Server beitreten können, musst du einen Game Server Login Token (GSLT) generieren und einbinden. Dieser Token authentifiziert deinen Server bei Steam. Erstelle deinen GSLT unter http://steamcommunity.com/dev/managegameservers mit der Game-ID 222840 für Left 4 Dead 2.

Füge den Token dann in deine Server-Startparameter mit `+sv_setsteamaccount <TOKEN>` ein.

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Wechsle in das Hauptverzeichnis des Spiels und führe folgenden Startbefehl aus:
```
./srcds_run -console -game left4dead2 -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Im Terminal solltest du nun Logs sehen, die den erfolgreichen Start anzeigen. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten die Suche nutzt und `[deine_ip_adresse]:2456` eingibst.

## Fazit

Glückwunsch, du hast deinen Left 4 Dead 2 Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Setup Linux Service](dedicated-linux-create-gameservice.md) Anleitung. Dort erfährst du, wie du deinen neuen Dedicated Gameserver als Service einrichtest. Das bringt viele Vorteile wie automatischen Serverstart beim Booten, automatische Updates, einfache Verwaltung und Zugriff auf Logs – und noch viel mehr!

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂