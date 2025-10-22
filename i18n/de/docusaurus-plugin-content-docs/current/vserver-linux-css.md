---
id: vserver-linux-css
title: "VPS: Counter-Strike: Source Dedicated Server Linux Setup"
description: "Entdecke, wie du schnell und einfach einen Counter-Strike: Source Dedicated Server auf deinem Linux VPS einrichtest → Jetzt mehr erfahren"
sidebar_label: "Counter-Strike: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux VPS und möchtest darauf den Counter-Strike: Source Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Mehr Infos zum [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem VPS. Falls du dabei Hilfe brauchst, schau dir unsere [SSH Erste Schritte](vserver-linux-ssh.md) Anleitung an. Außerdem musst du SteamCMD beim ersten Mal auf deinem Linux-Server einrichten. Nutze dafür unsere [SteamCMD Linux Setup](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. So installierst du den Server direkt über SteamCMD als `steam` User.
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 232330 validate +quit
```

Sei geduldig, der Download kann je nach Größe des Spiels etwas dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Counter-Strike: Source Servers abgeschlossen. Weitere Servereinstellungen kannst du direkt in der Startdatei anpassen.

Wechsle in dein Root-Verzeichnis. Dort findest du im Ordner `cfg` die Datei `server.cfg`, die du bearbeiten kannst, um Serveroptionen zu konfigurieren.
```
nano /home/steam/css-ds/cstrike/cfg/server.cfg
```

## GSL Token registrieren

Damit andere Spieler auf deinen Server connecten können, musst du einen Game Server Login Token (GSLT) generieren und einbinden. Dieser Token authentifiziert deinen Server bei Steam. Erstelle deinen GSLT unter http://steamcommunity.com/dev/managegameservers mit der Game-ID 232330 für Counter-Strike: Source.

Füge den Token dann in deine Server-Startparameter mit `+sv_setsteamaccount <TOKEN>` ein.

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Wechsle ins Hauptverzeichnis des Spiels und führe folgenden Startbefehl aus:
```
./srcds_run -console -game cstrike -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Im Terminal solltest du nun Logs sehen, die den erfolgreichen Start anzeigen. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten die Suche benutzt und `[deine_ip_adresse]:2456` eingibst.

## Fazit

Glückwunsch, du hast deinen Counter-Strike: Source Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](vserver-linux-create-gameservice.md) Anleitung. Dort erfährst du, wie du deinen Dedicated Gameserver als Service einrichtest – mit Vorteilen wie automatischem Start beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und vieles mehr!

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />