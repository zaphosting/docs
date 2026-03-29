---
id: over-the-top-wwi-configure-bans-and-moderation
title: "Over the Top WWI: Banns & Moderation konfigurieren"
description: "Lerne, wie du Bannlisten und Moderations-Einstellungen auf deinem Over the Top WWI Server konfigurierst → Jetzt mehr erfahren"
sidebar_label: Banns & Moderation
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Die Moderationstools in **Over the Top WWI** ermöglichen es dir, das Verhalten der Spieler zu kontrollieren und eine faire sowie angenehme Atmosphäre auf deinem Server zu gewährleisten. Durch das Konfigurieren von Bannlisten und Moderations-Einstellungen kannst du den Zugang einschränken, Strafen verwalten und klare Anweisungen für Spieler bereitstellen.

Diese Einstellungen sind besonders nützlich für Community-Server, bei denen eine aktive Moderation erforderlich ist.

<InlineVoucher />

## Konfiguration

Bann- und Moderations-Einstellungen werden in der Server-Konfigurationsdatei festgelegt. Du kannst diese Datei im **Gameserver Control Panel** unter **Configs** öffnen und bearbeiten. Suche und öffne die Datei `ServerConfiguration.ini`. In dieser Datei findest du folgende Parameter:

```
BanPathstring = Banlist.txt
TempBanPathstring = TempBanlist.txt
CustomUnBanString =
```

- `BanPathstring` definiert die Datei, die dauerhaft gebannte Spieler enthält  
- `TempBanPathstring` definiert die Datei, die temporär gebannte Spieler enthält  

- `CustomUnBanString` erlaubt dir, eine individuelle Nachricht zu hinterlegen, die Spielern erklärt, wie sie eine Entbannung beantragen können. Beispiel: Discord-Link oder Webseite

### Nutzung der Bann-Dateien

Die Bann-Dateien befinden sich im Serververzeichnis und enthalten Spieler-IDs.

Jeder gebannte Spieler sollte in der Datei in einer neuen Zeile stehen:

```
SteamID1
SteamID2
SteamID3
```

Diese Dateien werden automatisch vom Server ausgelesen, um den Zugang für die gelisteten Spieler zu blockieren. Durch das Anpassen dieser Einstellungen kannst du festlegen, wie Banns gehandhabt werden und wie Spieler Einspruch einlegen können.

Nachdem du die `ServerConfiguration.ini` geändert hast, speichere die Datei und starte deinen Server neu. Die aktualisierten Moderations-Einstellungen werden dann automatisch übernommen.

## Fazit

Glückwunsch! Du hast erfolgreich die Bann- und Moderations-Einstellungen auf deinem **Over the Top WWI Gameserver** konfiguriert. So kannst du das Verhalten der Spieler effektiv steuern und eine kontrollierte Server-Umgebung schaffen.

Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />