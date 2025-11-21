---
id: vserver-linux-arksurvivalascended
title: "vServer: ARK Survival Ascended Dedicated Server Linux Setup"
description: "Entdecke, wie du den ARK: Survival Ascended Dedicated Server auf deinem Linux VPS für nahtloses Gameplay-Management einrichtest → Jetzt mehr erfahren"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Linux VPS und möchtest den ARK: Survival Ascended Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Linux-Server mit SteamCMD installierst. Wir verwenden Ubuntu als Beispiel, aber der Prozess ist bei anderen Distributionen sehr ähnlich.

:::tip
Wusstest du, dass du unsere **ZAP GS/TS3 Interface** direkt auf deinem VPS installieren kannst? Damit richtest du Gameserver-Services mit direkter Integration in dein ZAP-Hosting Dashboard in nur wenigen Klicks ein! Erfahre mehr über die [GS/TS3 Interface hier](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [SSH Erste Schritte](vserver-linux-ssh.md) Anleitung.

Außerdem musst du SteamCMD beim ersten Mal auf deinem Linux-Server einrichten. Nutze dazu unsere [SteamCMD Linux Setup](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du weitermachst.

:::info Wine-Kompatibilitätsschicht
ARK: Survival Ascended bietet aktuell keinen nativen Linux-Server-Build an, daher ist ein zusätzlicher Vorbereitungsschritt nötig, um die Windows-Server-Version unter Linux laufen zu lassen.

Du musst einmalig die **Wine** Kompatibilitätsschicht installieren, falls du das noch nicht auf deinem Linux-Server gemacht hast. Nutze unsere schnelle [Wine Kompatibilitätsschicht Setup](vserver-linux-wine.md) Anleitung, um das einzurichten, bevor du weitermachst.
:::

## Installation

Melde dich zuerst als `steam` Benutzer an und wechsle in das Home-Verzeichnis von `steam`, um alles ordentlich zu halten.
```
sudo -u steam -s
cd ~
```

Wenn du eingeloggt bist, kannst du die Installation mit folgendem Befehl starten, der SteamCMD nutzt, um die Installation direkt im `steam` Benutzerverzeichnis durchzuführen.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Sobald alles erfolgreich ist, erscheint eine Bestätigungsmeldung.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines ARK: Survival Ascended Servers abgeschlossen. Weitere Server-Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Alle Konfigurationsparameter kannst du in der **GameUserSettings.ini** Datei anpassen, die du im Saved-Ordner findest.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

Sieh dir unsere [ARK: Survival Ascended Server Konfigurationsanleitung](ark-configuration.md) an, um alle verfügbaren Optionen und ihre Funktionen kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Starten deines Servers. Wechsle ins Hauptspielverzeichnis und starte die **ArkAscendedServer.exe** mit folgendem Befehl. Wichtig: Nutze **xvfb-run** und **wine**, um den Server über die Wine-Kompatibilitätsschicht auszuführen.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Leider kannst du aufgrund fehlender Unterstützung die Anti-Cheat Battleye-Version des Servers nicht unter Linux betreiben. Der Anti-Cheat ist einfach nicht kompatibel.
:::

Im Terminal solltest du nun Logs sehen, die bestätigen, dass der Server erfolgreich gestartet wurde. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten die Suche nutzt und `[deine_ip_adresse]:7777` eingibst.

## Fazit

Glückwunsch, du hast den ARK: Survival Ascended Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir unsere [Linux Service Setup](vserver-linux-create-gameservice.md) Anleitung. Dort erfährst du, wie du deinen neuen Dedicated Gameserver als Service einrichtest. Das bringt viele Vorteile wie automatischen Serverstart beim Booten, automatische Updates, einfache Verwaltung und Zugriff auf Logs – und noch viel mehr!

Falls du weitere Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />