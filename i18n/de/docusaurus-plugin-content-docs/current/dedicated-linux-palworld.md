---
id: dedicated-linux-palworld
title: "Dedicated Server: Palworld Dedicated Server Linux Setup"
description: "Entdecke, wie du einen Palworld Dedicated Server auf Linux einrichtest und konfigurierst für nahtloses Gameplay-Management → Jetzt mehr erfahren"
sidebar_label: Palworld
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux Dedicated Server und möchtest den Palworld Dedicated Server Service darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Mehr Infos zur [GS/TS3 Interface findest du hier](dedicated-linux-gs-interface.md).
:::

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem Dedicated Server. Falls du Hilfe brauchst, nutze unsere [SSH Erste Schritte](dedicated-linux-ssh.md) Anleitung.

Falls du SteamCMD zum ersten Mal auf deinem Linux-Server nutzt, musst du es erstmal einrichten. Folge dazu unserer [SteamCMD Linux Einrichtung](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD komplett eingerichtet ist, bevor du weitermachst.

## Installation

Melde dich als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten, der SteamCMD nutzt, um den Server direkt im `steam` User-Verzeichnis zu installieren.
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Wenn alles erfolgreich war, erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Palworld Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Du musst eine Kopie der Standard-Konfigurationsdatei erstellen und in den Saved-Ordner legen, bevor du sie bearbeiten kannst.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Mit der Kopie kannst du die wichtigsten Einstellungen anpassen, indem du die neue **PalWorldSettings.ini** Datei öffnest.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Schau dir unsere Palworld [Server Konfiguration](palworld-configuration.md) Anleitung an, um alle verfügbaren Optionen und ihre Funktionen kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server, indem du ins Hauptspielverzeichnis wechselst und die **PalServer.sh** Shell-Datei ausführst.
```
/home/steam/Palworld-Server/PalServer.sh
```

Im Terminal solltest du jetzt Logs sehen, inklusive einer Spielversion, was bedeutet, dass der Start erfolgreich war. Wenn alles glatt läuft, erscheint dein Server in der Serverliste. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten in der Suchleiste `[deine_ip_adresse]:8211` eingibst.

## Fazit

Glückwunsch, du hast deinen Palworld Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächstes empfehlen wir dir, unsere [Linux Service Einrichtung](dedicated-linux-create-gameservice.md) Anleitung anzuschauen. Damit richtest du deinen neuen Dedicated Gameserver als Service ein – mit Vorteilen wie automatischem Serverstart beim Booten, automatischen Updates, einfacher Verwaltung und Zugriff auf Logs und vieles mehr!

Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!