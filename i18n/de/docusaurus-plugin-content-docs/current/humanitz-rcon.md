---
id: humanitz-rcon
title: "HumanitZ: RCON"
description: "Lerne, wie du deinen HumanitZ-Server per RCON und rcon-cli remote verwaltest → Jetzt mehr erfahren"
sidebar_label: RCON
services:
- gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

RCON (Remote Console) ist ein Netzwerkprotokoll, mit dem du Gameserver aus der Ferne steuern kannst. Es ermöglicht Admins, Befehle auf dem Server auszuführen, ohne sich direkt ins Spiel einloggen zu müssen. So kannst du Spieler verwalten, Einstellungen anpassen oder die Serveraktivität von außen überwachen.

Bei **HumanitZ** kannst du RCON nutzen, um administrative Befehle wie das Kicken von Spielern, das Senden von Nachrichten oder die Steuerung des Serververhaltens auszuführen. Der Zugriff wird durch ein Passwort und einen dedizierten Port abgesichert.

Ein großer Vorteil von RCON ist, dass du den Server **verwalten kannst, ohne als Spieler im Spiel verbunden zu sein**, was eine flexible und effiziente Fernverwaltung ermöglicht.

<InlineVoucher />

## Konfiguration

Bevor du RCON nutzen kannst, muss es in der Serverkonfiguration aktiviert werden. Öffne die Einstellungsseite deines Servers und aktiviere die RCON-Option. Alternativ kannst du es auch direkt in den Config-Dateien anpassen. Öffne dein Gameserver-Management-Panel, navigiere zu Configs und öffne die Datei `GameServerSettings.ini`.

Füge folgende Einträge hinzu oder passe sie an:

```
RCONEnabled=true
RCONPassword=dein_sicheres_passwort
RCONPort=XXXXX
```

Den zugewiesenen RCON-Port findest du in der **Port-Übersicht** deiner Serververwaltung. Achte darauf, dass Passwort und Port mit deiner Konfiguration übereinstimmen.

Speichere die Datei nach den Änderungen und **starte den Server neu**, damit die Einstellungen wirksam werden.

## Verbindung über RCON

Um dich per RCON mit deinem HumanitZ-Server zu verbinden, kannst du das Kommandozeilen-Tool **rcon-cli** verwenden. Es ist im offiziellen GitHub-Repository verfügbar:
https://github.com/gorcon/rcon-cli

Nach der Installation verbindest du dich mit folgendem Befehl:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORT> befehl
```

Ersetze die Platzhalter durch die IP-Adresse deines Servers, den RCON-Port und dein Passwort.

Mit diesem Befehl kannst du RCON-Kommandos direkt von deinem lokalen System ausführen, ohne eine interaktive Sitzung zu starten.

## RCON-Befehle

Sobald du per RCON verbunden bist, kannst du verschiedene administrative Befehle auf deinem HumanitZ-Server ausführen. Die verfügbaren Befehle hängen vom Spiel ab, umfassen aber meist Spieler-Management und Serversteuerung.

| Befehl | Beschreibung |
|----------------------------------|------------------------------------------|
| `broadcast <nachricht>`| Sendet eine Nachricht an alle Spieler |
| `kick <spielername>`| Kickt einen Spieler vom Server |
| `ban <spielername>` | Bannt einen Spieler |
| `unban <spielername>` | Entbannt einen Spieler |
| `save` | Speichert den aktuellen Spielstand |
| `restart`| Startet den Server neu |
| `shutdown` | Fährt den Server herunter |
| `whitelist add <steamid>`| Fügt einen Spieler zur Whitelist hinzu |
| `whitelist remove <steamid>` | Entfernt einen Spieler von der Whitelist |

## Fazit

Glückwunsch! Du hast RCON erfolgreich für deinen HumanitZ-Server eingerichtet und genutzt. So kannst du deinen Server remote verwalten, administrative Befehle ausführen und die Kontrolle behalten, ohne ins Spiel joinen zu müssen.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />