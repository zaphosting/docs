---
id: dedicated-linux-cs16
title: "Dedicated Server: Counter-Strike 1.6 Dedicated Server Linux Setup"
description: "Lerne, wie du einen Counter-Strike 1.6 Dedicated Server auf deinem Linux VPS einrichtest für nahtloses Gameplay und einfache Serververwaltung → Jetzt mehr erfahren"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux VPS und möchtest darauf den Counter-Strike 1.6 Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über das [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem VPS. Falls du dabei Hilfe brauchst, schau dir unsere [SSH Erste Schritte](dedicated-linux-ssh.md) Anleitung an. Außerdem musst du SteamCMD beim ersten Mal auf deinem Linux-Server einrichten. Nutze dafür unsere [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. So installierst du den Server direkt über SteamCMD als `steam` User:
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 90 validate +quit
```

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Counter-Strike 1.6 Servers abgeschlossen. Für weitere Einstellungen kannst du die Startdatei direkt bearbeiten.

Wechsle in dein Root-Verzeichnis. Dort findest du den Ordner `cfg`. Öffne die Datei `server.cfg`, um Serveroptionen anzupassen.
```
nano /home/steam/cs2-ds/game/csgo/cfg/server.cfg
```

## GSL Token registrieren

Damit andere Spieler auf deinen Server connecten können, musst du einen Game Server Login Token (GSLT) generieren und einbinden. Dieser Token authentifiziert deinen Server bei Steam. Erstelle deinen GSLT unter http://steamcommunity.com/dev/managegameservers mit der Game-ID 90, die für Counter-Strike 1.6 steht.

Füge den Token dann in deine Server-Startparameter mit `+sv_setsteamaccount <TOKEN>` ein.

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Wechsle ins Hauptverzeichnis des Spiels und führe folgenden Startbefehl aus:
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

Im Terminal solltest du nun Logs sehen, die bestätigen, dass der Server erfolgreich gestartet wurde. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten die Suche nutzt und `[deine_ip_adresse]:2456` eingibst.

## Fazit

Glückwunsch, du hast deinen Counter-Strike 1.6 Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](dedicated-linux-create-gameservice.md) Anleitung. Dort erfährst du, wie du deinen Dedicated Gameserver als Service einrichtest – mit Vorteilen wie automatischem Serverstart beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und vieles mehr!

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />