---
id: hytale-commands
title: "Hytale: Befehlsübersicht"
description: "Überblick über verfügbare Konsolen- und Ingame-Befehle für Hytale Gameserver → Jetzt mehr erfahren"
sidebar_label: Befehlsübersicht
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hytale Gameserver bieten eine Vielzahl an Befehlen, mit denen Admins Gameplay, Spieler, Welten und Serverkonfiguration verwalten können. Diese Befehle lassen sich entweder über die Live-Server-Konsole oder direkt im Spiel ausführen, sofern die nötigen Berechtigungen vorhanden sind.

![](https://screensaver01.zap-hosting.com/index.php/s/2yJ6G3AWCDfAHMj/download)

Auf dieser Seite findest du eine Übersicht der häufig genutzten und offiziell dokumentierten Hytale Server-Befehle.

<InlineVoucher />



## Authentifizierung

Authentifizierungsbefehle sind notwendig, um den Server zu autorisieren, damit er Spieler-Verbindungen akzeptiert und mit den Hytale Online-Diensten interagieren kann.

| Befehl                 | Beschreibung                                                  |
| ---------------------- | ------------------------------------------------------------- |
| `/auth login device`   | Startet den gerätebasierten Authentifizierungsprozess. Der Server gibt eine URL und einen Geräte-Code aus, die mit einem Hytale-Account bestätigt werden müssen. |
| `/auth login browser`  | Startet einen browserbasierten Authentifizierungsprozess. Erfordert eine grafische Umgebung auf dem Server. |
| `/auth status`         | Zeigt den aktuellen Authentifizierungsstatus des Servers an.  |
| `/auth logout`         | Loggt den Server aus und entfernt die aktive Authentifizierungssitzung. |



## Spieler & Berechtigungen

Diese Befehle steuern den administrativen Zugriff und die feingranulare Vergabe von Berechtigungen für Nutzer und Gruppen.

| Befehl                                   | Beschreibung                                             |
| --------------------------------------- | -------------------------------------------------------- |
| `/op add <PlayerName>`                   | Vergibt Operator-Rechte an den angegebenen Spieler.      |
| `/op remove <PlayerName>`                | Entzieht dem angegebenen Spieler Operator-Rechte.        |
| `/perm user list <uuid>`                 | Zeigt alle direkt dem Nutzer zugewiesenen Berechtigungen.|
| `/perm user add <uuid> <permission>`    | Weist dem Nutzer eine oder mehrere Berechtigungen direkt zu. |
| `/perm user remove <uuid> <permission>` | Entfernt bestimmte Berechtigungen vom Nutzer.             |
| `/perm user group list <uuid>`           | Zeigt alle Berechtigungsgruppen, denen der Nutzer angehört.|
| `/perm user group add <uuid> <group>`    | Fügt den Nutzer der angegebenen Berechtigungsgruppe hinzu.|
| `/perm user group remove <uuid> <group>` | Entfernt den Nutzer aus der angegebenen Berechtigungsgruppe.|
| `/perm group list <group>`               | Listet alle Berechtigungen auf, die einer Gruppe zugewiesen sind.|
| `/perm group add <group> <permission>`   | Fügt einer Gruppe Berechtigungen hinzu.                   |
| `/perm group remove <group> <permission>`| Entfernt Berechtigungen von einer Gruppe.                  |



## Whitelist

Whitelist-Befehle beschränken den Serverzugang auf genehmigte Spieler.

| Befehl                          | Beschreibung                                      |
| -------------------------------| ------------------------------------------------ |
| `/whitelist add <playername>`   | Fügt den angegebenen Spieler zur Whitelist hinzu.|
| `/whitelist remove <playername>`| Entfernt den angegebenen Spieler von der Whitelist.|
| `/whitelist list`               | Zeigt alle aktuell auf der Whitelist stehenden Spieler an.|
| `/whitelist enable`             | Aktiviert die Whitelist.                          |
| `/whitelist disable`            | Deaktiviert die Whitelist.                        |
| `/whitelist status`             | Zeigt den aktuellen Status der Whitelist an.    |



## Weltverwaltung

Welt-Befehle steuern das Erstellen, Laden, Entladen und Löschen von Welten.

| Befehl                      | Beschreibung                                        |
| --------------------------- | -------------------------------------------------- |
| `/world create <name>`      | Erstellt eine neue Welt mit dem angegebenen Namen. |
| `/world load <name>`        | Lädt eine bestehende Welt und macht sie aktiv.     |
| `/world unload <name>`      | Entlädt eine Welt, ohne ihre Daten zu löschen.     |
| `/world remove <name>`      | Löscht eine Welt und alle zugehörigen Daten.       |
| `/world setdefault <name>`  | Legt die Standardwelt fest, die beim Serverstart geladen wird. |



## Gameplay und Umgebung

Diese Befehle beeinflussen direkt die Spielregeln und das Verhalten der Welt.

| Befehl                      | Beschreibung                                 |
| --------------------------- | ------------------------------------------- |
| `/list`                     | Zeigt alle aktuell verbundenen Spieler an. |
| `/tp <player> <target>`     | Teleportiert einen Spieler zu einem anderen Spieler. |
| `/tp <player> <x> <y> <z>`  | Teleportiert einen Spieler zu bestimmten Koordinaten. |



## Teleport & Positionierung

Befehle zur Verwaltung von Spielerpositionen und Sichtbarkeit.

| Befehl                      | Beschreibung                                 |
| --------------------------- | ------------------------------------------- |
| `/list`                     | Zeigt alle aktuell verbundenen Spieler an. |
| `/tp <player> <target>`     | Teleportiert einen Spieler zu einem anderen Spieler. |
| `/tp <player> <x> <y> <z>`  | Teleportiert einen Spieler zu bestimmten Koordinaten. |



## Utility und Hilfe

Utility-Befehle bieten Hilfe und Serverinformationen.

| Befehl             | Beschreibung                                          |
| ------------------ | ---------------------------------------------------- |
| `/help`            | Zeigt eine Liste verfügbarer Befehle an.             |
| `/help <command>`  | Zeigt detaillierte Hilfe zu einem bestimmten Befehl. |
| `/status`          | Zeigt aktuellen Serverstatus und Laufzeitinformationen. |



## Fazit

Das Hytale-Befehlsystem bietet mächtige Tools zur Verwaltung von Gameservern, Spielern und Gameplay-Verhalten. Mit dem Verständnis und der Nutzung der verfügbaren Befehle können Admins ihre Hytale Server-Umgebung effizient betreiben und anpassen.

Bei weiteren Fragen oder Support brauchst du nur unser Support-Team zu kontaktieren – wir sind täglich für dich da! 🙂



<InlineVoucher />