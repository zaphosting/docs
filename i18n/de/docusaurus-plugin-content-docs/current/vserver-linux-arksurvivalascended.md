---
id: vserver-linux-arksurvivalascended
title: "VPS: ARK Survival Ascended Dedicated Server Linux Setup"
description: Informationen zum Einrichten eines ARK Survival Ascended Dedicated Servers auf einem Linux VPS von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Linux VPS oder Root Server und möchtest den ARK: Survival Ascended Dedicated Server Service darauf installieren? Dann bist du hier genau richtig. In diesem Leitfaden erklären wir dir Schritt für Schritt, wie du diesen Dienst mithilfe von SteamCMD auf deinem Linux-Server installierst. Wir verwenden in den Beispielen Ubuntu, aber der Prozess sollte bei anderen Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS oder Root-Server installieren kannst? Damit kannst du mit nur wenigen Klicks Gameserver-Dienste einrichten, die direkt in dein ZAP-Hosting-Dashboard integriert sind! Erfahre mehr über das [GS/TS3 Interface hier](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem VPS oder Root-Server. Benutze unsere Anleitung [SSH-Erstzugang](vserver-linux-ssh.md), wenn du dabei Hilfe brauchst.

Du musst auch eine Ersteinrichtung für SteamCMD vornehmen, wenn du es zum ersten Mal auf deinem Linux-Server verwendest. Bitte benutze unsere [SteamCMD Linux Setup](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du fortfährst.

:::info Wine-Kompatibilitätsschicht
ARK: Survival Ascended bietet derzeit keinen nativen Linux-basierten Server-Build an, was bedeutet, dass ein zusätzlicher Vorbereitungsschritt notwendig ist, um den Windows-Server-Build unter Linux auszuführen.

Wenn du ARK: Survival Ascended zum ersten Mal auf deinem Linux-Server verwendest, musst du die Kompatibilitätsschicht **Wine** einmalig installieren. Bitte benutze unsere Kurzanleitung [Wine Compatibility Layer Setup](vserver-linux-wine.md), um dies einzurichten, bevor du fortfährst.
:::

## Installation

Beginne damit, dich als Benutzer `steam` anzumelden und gehe in das Stammverzeichnis `home/steam`, um Ordnung zu schaffen.
```
sudo -u steam -s
cd ~
```

Wenn du eingeloggt bist, kannst du den Installationsprozess mit dem folgenden Befehl starten, um die Installation mit Hilfe von SteamCMD direkt in deinem `steam`-Benutzer zu starten.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Bitte habe etwas Geduld, während der Download abgeschlossen wird, denn bei größeren Spielen kann es einige Zeit dauern. Sobald der Download erfolgreich war, erscheint eine Erfolgsmeldung, die dies bestätigt.

## Konfiguration

An dieser Stelle hast du die Einrichtung deines ARK: Survival Ascended Servers abgeschlossen. Du kannst weitere Serverkonfigurationen über eine Konfigurationsdatei vornehmen, die sich im Verzeichnis deines Servers befindet.

Du kannst alle Konfigurationsparameter anpassen, indem du die Konfigurationsdatei **GameUserSettings.ini**, die sich im Ordner Saved befindet, aufrufst und bearbeitest.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

In unserem [ARK: Survival Ascended Server Configuration guide](ark-configuration.md) findest du alle verfügbaren Optionen und ihre Funktionen.

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe in das Hauptverzeichnis des Spiels und führe die ausführbare Datei **ArkAscendedServer.exe** mit dem unten stehenden Befehl aus. Vergewissere dich, dass du die Befehle **xvfb-run** und **wine** hinzufügst, um die Datei über die Wine-Kompatibilitätsschicht auszuführen.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Leider kannst du die Anti-Cheat Battleye-Version des Servers aufgrund mangelnder Unterstützung nicht unter Linux ausführen. Das liegt daran, dass der Anti-Cheat überhaupt nicht kompatibel ist.
:::

In der Eingabeaufforderung sollten nun Logs erscheinen, die anzeigen, dass der Start erfolgreich war. Bitte beachte, dass der erste Start einige Zeit dauern kann, da alles eingerichtet wird. Alternativ kannst du dich auch direkt verbinden, indem du die untere Suchleiste in der Serverliste benutzt und nach: `[dein_ip_address]:7777`.

## Abschluss

Glückwunsch, du hast den ARK: Survival Ascended Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir einen Blick in unsere Anleitung [Setup Linux Service](vserver-linux-create-gameservice.md), in der du deinen neuen dedizierten Spieleserver als Dienst einrichtest. Dies bietet verschiedene Vorteile, wie z. B. den automatischen Start des Servers beim Hochfahren, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du weitere Fragen oder Probleme hast, wende dich bitte an unser Support-Team, das dir jeden Tag zur Verfügung steht!