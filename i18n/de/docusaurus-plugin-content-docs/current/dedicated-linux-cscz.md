---
id: dedicated-linux-cscz
title: "Dedicated Server: Counter-Strike: Condition Zero Dedicated Server Linux Setup"
description: "Informationen zur Einrichtung eines Counter-Strike: Condition Zero Dedicated Servers auf einem Linux VPS von ZAP Hosting – ZAP Hosting.com Dokumentation"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux VPS und möchtest darauf den Counter-Strike: Condition Zero Dedicated Server installieren? Dann bist du hier richtig. In dieser Anleitung erläutern wir Schritt für Schritt die Installation dieses Dienstes auf deinem Linux Server mit SteamCMD. In den Beispielen verwenden wir Ubuntu, der Ablauf ist jedoch bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? So richtest du Gameserver Dienste mit direkter Integration in dein ZAP Hosting Dashboard mit nur wenigen Klicks ein! Mehr dazu im [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Stelle zunächst per SSH eine Verbindung zu deinem VPS her. Nutze bei Bedarf unsere Anleitung [SSH Erster Zugriff](dedicated-linux-ssh.md). Wenn du SteamCMD zum ersten Mal auf deinem Linux Server verwendest, musst du außerdem eine Ersteinrichtung durchführen. Verwende dazu unsere Anleitung [SteamCMD Linux Einrichtung](dedicated-linux-steamcmd.md) und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du fortfährst.

## Installation

Melde dich beim Benutzer `steam` an und wechsle in dessen Home Verzeichnis, um die Dateien übersichtlich zu halten.
```
sudo -u steam -s
cd ~
```

Wenn du angemeldet bist, kannst du den Installationsprozess mit folgendem Befehl starten, um die Installation bequem per SteamCMD direkt für den Benutzer `steam` durchzuführen.
```
steamcmd +force_install_dir '/home/steam/cs-ds' +login anonymous +app_update 90 validate +quit
```

Bitte warte, bis der Download abgeschlossen ist. Bei größeren Spielen kann das etwas dauern. Nach erfolgreichem Abschluss erscheint eine entsprechende Erfolgsmeldung.

## Konfiguration

An diesem Punkt ist die Grundinstallation deines Counter-Strike: Condition Zero Servers abgeschlossen. Weitere Servereinstellungen kannst du durch direktes Bearbeiten der Start /Konfigurationsdateien vornehmen.

Wechsle in dein Hauptverzeichnis. Navigiere darin in das Verzeichnis `cfg` und öffne die Datei `server.cfg`. Dort kannst du Serveroptionen anpassen.
```
nano /home/steam/cs-ds/cstrike/cfg/server.cfg
```


## Server starten und verbinden

Jetzt kannst du deinen Server starten. Wechsle in das Hauptverzeichnis des Spiels und führe folgenden Startbefehl aus:
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

In der Konsole sollten nun Protokolle erscheinen, die einen erfolgreichen Start signalisieren. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Alternativ kannst du direkt verbinden, indem du in der Serverliste in der unteren Suchleiste nach folgender Adresse suchst: `[your_ip_address]:2456`.

## Abschluss

Glückwunsch, du hast den Counter-Strike: Condition Zero Server auf deinem VPS erfolgreich installiert und konfiguriert! Als nächsten Schritt empfehlen wir unsere Anleitung [Linux Dienst einrichten](dedicated-linux-create-gameservice.md). Diese erklärt, wie du deinen neuen Dedicated Gameserver als Dienst betreibst. Vorteile: automatischer Start beim Booten, automatische Server Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Für weitere Fragen oder Unterstützung wende dich bitte an unser Support Team, das täglich für dich da ist! 🙂

<InlineVoucher />
