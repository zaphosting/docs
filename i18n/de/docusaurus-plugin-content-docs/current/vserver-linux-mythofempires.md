---
id: vserver-linux-mythofempires
title: "VPS: Myth of Empires Dedicated Server Linux Setup"
description: Informationen zur Einrichtung eines Myth of Empires Dedicated Servers auf einem Linux VPS von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Myth of Empires
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Linux VPS oder Root Server und möchtest den Myth of Empires Dedicated Server Service darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst mit SteamCMD auf deinem Linux-Server installierst. Wir verwenden in den Beispielen Ubuntu, aber der Prozess sollte bei anderen Distributionen sehr ähnlich sein.

:::tip
Wusstest du, dass du unser **ZAP GS/TS3 Interface** direkt auf deinem VPS oder Root-Server installieren kannst? Damit kannst du mit nur wenigen Klicks Gameserver-Dienste einrichten, die direkt in dein ZAP-Hosting-Dashboard integriert sind! Erfahre mehr über das [GS/TS3 Interface hier](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über SSH mit deinem VPS oder Root-Server. Benutze unsere Anleitung [SSH-Erstzugang](vserver-linux-ssh.md), wenn du dabei Hilfe brauchst.

Du musst auch eine Ersteinrichtung für SteamCMD vornehmen, wenn du es zum ersten Mal auf deinem Linux-Server verwendest. Bitte benutze unsere [SteamCMD Linux Setup](vserver-linux-steamcmd.md) Anleitung und stelle sicher, dass SteamCMD vollständig eingerichtet ist, bevor du fortfährst.

:::info Wine-Kompatibilitätsschicht
Myth of Empires bietet derzeit keinen nativen Linux-basierten Server-Build an. Das bedeutet, dass ein zusätzlicher Vorbereitungsschritt notwendig ist, um den Windows-Server-Build auf Linux auszuführen.

Du musst eine einmalige Installation der **Wine**-Kompatibilitätsschicht durchführen, wenn du sie zum ersten Mal auf deinem Linux-Server verwendest. Bitte benutze unsere Kurzanleitung [Wine Compatibility Layer Setup](vserver-linux-wine.md), um dies einzurichten, bevor du fortfährst.
:::

## Installation

Beginne damit, dich als Benutzer `steam` anzumelden und gehe in das Root-Verzeichnis `home/steam`, um für Ordnung zu sorgen.
```
sudo -u steam -s
cd ~
```

Wenn du eingeloggt bist, kannst du den Installationsprozess mit folgendem Befehl starten, um die Installation mit Hilfe von SteamCMD direkt in deinem `steam`-Benutzer zu starten. Mit dem Parameter `+@sSteamCmdForcePlatformType windows` stellst du zwangsweise sicher, dass die Windows-Binärdateien installiert werden.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Bitte habe etwas Geduld, während der Download abgeschlossen wird, denn bei größeren Spielen kann es einige Zeit dauern. Sobald der Download erfolgreich war, wird eine Erfolgsmeldung angezeigt, die dies bestätigt.

## Konfiguration

Zu diesem Zeitpunkt hast du die Einrichtung deines Myth of Empires-Servers abgeschlossen. Du kannst weitere Serverkonfigurationen über eine Reihe von Konfigurationsdateien vornehmen, die sich im Verzeichnis deines Servers befinden.

Du kannst alle Konfigurationsparameter anpassen, indem du die Konfigurationsdateien `.ini` im Ordner Saved aufrufst und bearbeitest. Benutze den Befehl `ls`, um zu sehen, welche Dateien es gibt.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

Um eine Datei zu bearbeiten, rufe einfach `nano ./[Dateiname].ini` auf, um den nano-Editor zu öffnen.

In unserer [Myth of Empires Serverkonfigurationsanleitung](moe-configuration.md) findest du alle verfügbaren Serveroptionen und ihre Funktionen.

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe in das Hauptverzeichnis des Spiels und führe die ausführbare Datei **MOEServer.exe** mit dem unten stehenden Befehl aus. Vergewissere dich, dass du die Befehle **xvfb-run** und **wine** hinzufügst, um die Datei über die Wine-Kompatibilitätsschicht auszuführen.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

In der Eingabeaufforderung sollten nun Protokolle erscheinen, die anzeigen, dass der Start erfolgreich war. Bitte beachte, dass der erste Start einige Zeit dauern kann, da alles eingerichtet wird. Du kannst dich direkt verbinden, indem du auf der Registerkarte **Custom Server** nach den Serverdetails suchst: `[your_ip_address]:15636`.

## Abschluss

Herzlichen Glückwunsch, du hast den Myth of Empires-Server erfolgreich auf deinem VPS installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir einen Blick in unsere Anleitung [Setup Linux Service](vserver-linux-create-gameservice.md), in der du deinen neuen dedizierten Spieleserver als Dienst einrichtest. Dies bietet verschiedene Vorteile, wie z. B. den automatischen Start des Servers beim Hochfahren, automatische Server-Updates, einfache Verwaltung und Zugriff auf Logs und vieles mehr!

Wenn du weitere Fragen oder Probleme hast, wende dich bitte an unser Support-Team, das dir jeden Tag zur Verfügung steht!