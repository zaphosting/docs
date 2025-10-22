---
id: vserver-linux-tf2
title: "VPS: Team Fortress 2 Dedicated Server Linux Setup"
description: "Entdecke, wie du schnell und einfach einen Team Fortress 2 Dedicated Server auf deinem Linux VPS einrichtest → Jetzt mehr erfahren"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux VPS und möchtest darauf den Team Fortress 2 Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir verwenden Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über das [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [SSH Erste Schritte](vserver-linux-ssh.md) Anleitung. Außerdem musst du SteamCMD beim ersten Mal auf deinem Linux-Server einrichten. Folge dazu unserer [SteamCMD Linux Setup](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

## Installation

Melde dich als `steam`-User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. Damit wird SteamCMD genutzt, um den Server direkt im Verzeichnis `/home/steam/tf2-ds` zu installieren.
```
steamcmd +force_install_dir '/home/steam/tf2-ds' +login anonymous +app_update 232250 validate +quit
```

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Team Fortress 2 Servers abgeschlossen. Weitere Servereinstellungen kannst du direkt in der Startdatei anpassen.

Wechsle in dein Root-Verzeichnis. Dort findest du im Ordner `cfg` die Datei `server.cfg`, in der du die Serveroptionen bearbeiten kannst.
```
nano /home/steam/tf-ds/tf2/tf/cfg/server.cfg
```

## GSL Token registrieren

Damit andere Spieler auf deinen Server connecten können, musst du einen Game Server Login Token (GSLT) generieren und einbinden. Dieser Token authentifiziert deinen Server bei Steam. Erstelle deinen GSLT unter http://steamcommunity.com/dev/managegameservers mit der Game-ID 232250 für Team Fortress 2.

Füge den Token dann in deine Server-Startparameter mit `+sv_setsteamaccount <TOKEN>` ein.

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Wechsle in das Hauptspielverzeichnis und führe folgenden Startbefehl aus:
```
./srcds_run -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Im Terminal solltest du nun Logs sehen, die den erfolgreichen Start anzeigen. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten die Suche nutzt und nach `[deine_ip_adresse]:2456` suchst.

## Fazit

Glückwunsch, du hast deinen Team Fortress 2 Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](vserver-linux-create-gameservice.md) Anleitung. Dort erfährst du, wie du deinen Dedicated Gameserver als Service einrichtest – mit Vorteilen wie automatischem Serverstart beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und vieles mehr!

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />