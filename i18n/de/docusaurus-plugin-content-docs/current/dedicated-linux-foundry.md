---
id: dedicated-linux-foundry
title: "Dedicated Server: Foundry Dedicated Server Linux Setup"
description: "Entdecke, wie du den Foundry Dedicated Server auf deinem Linux Dedicated Server installierst für nahtloses Gameserver Hosting und Management → Jetzt mehr erfahren"
sidebar_label: Foundry
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux Dedicated Server und möchtest den Foundry Dedicated Server Service darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux Server mit SteamCMD installierst. Wir nutzen Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem Dedicated Server installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über das [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem Dedicated Server. Falls du dabei Hilfe brauchst, nutze unsere [SSH Erste Schritte](dedicated-linux-ssh.md) Anleitung.

Falls du SteamCMD zum ersten Mal auf deinem Linux Server nutzt, musst du eine Erstkonfiguration durchführen. Folge dazu unserer [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

:::info Wine-Kompatibilitätsschicht
Foundry bietet aktuell keinen nativen Linux-Server-Build an, daher ist ein zusätzlicher Vorbereitungsschritt nötig, um die Windows-Server-Version unter Linux laufen zu lassen.

Du musst einmalig die **Wine** Kompatibilitätsschicht installieren, falls du diese noch nicht auf deinem Linux Server eingerichtet hast. Nutze dazu unsere schnelle [Wine Kompatibilitätsschicht Setup](dedicated-linux-wine.md) Anleitung, bevor du weitermachst.
:::

## Installation

Melde dich als erstes als `steam` User an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Sobald du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten. Damit wird SteamCMD genutzt, um die Windows-Binaries direkt im Verzeichnis des `steam` Users zu installieren. Der Parameter `+@sSteamCmdForcePlatformType windows` sorgt dafür, dass die Windows-Version erzwungen wird.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Sei geduldig, der Download kann je nach Größe des Spiels etwas dauern. Nach erfolgreichem Abschluss erscheint eine Bestätigungsmeldung.

## Konfiguration

Jetzt hast du die Grundinstallation deines Foundry Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Alle Konfigurationsparameter kannst du in der **app.cfg** Datei im Root-Verzeichnis anpassen.
```
nano /home/steam/Foundry-Server/app.cfg
```

Sieh dir unsere Foundry [Server Konfiguration](foundry-configuration.md) Anleitung an, um alle verfügbaren Optionen und deren Funktionen kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Starten deines Servers. Wechsle ins Hauptverzeichnis des Spiels und starte die ausführbare Datei **FoundryDedicatedServerLauncher.exe** mit folgendem Befehl. Nutze dabei **xvfb-run** und **wine**, um den Server über die Wine-Kompatibilitätsschicht auszuführen.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

Im Terminal solltest du nun Logs sehen, die anzeigen, dass der Server erfolgreich gestartet wurde. Wenn alles läuft wie erwartet, erscheint dein Server in der Serverliste. Alternativ kannst du dich direkt verbinden, indem du in der unteren Suchleiste der Serverliste `[deine_ip_adresse]:3724` eingibst.

## Fazit

Glückwunsch, du hast den Foundry Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](dedicated-linux-create-gameservice.md) Anleitung. Dort erfährst du, wie du deinen neuen Dedicated Gameserver als Service einrichtest. Das bringt viele Vorteile wie automatischen Serverstart beim Booten, automatische Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Falls du noch Fragen hast oder Probleme auftreten, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!