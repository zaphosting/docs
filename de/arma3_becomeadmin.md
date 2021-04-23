---
id: arma3_becomeadmin
title: Admin werden
sidebar_label: Admin werden
---

# Admin werden
Generell gibt es zwei Möglichkeiten einen ArmA 3 Server administrativ zu verwalten. Diese unterscheiden sich lediglich in der Übersichtlichkeit, bieten jedoch die selben Funktionen für die Verwaltung des Servers.

## Möglichkeit 1: Verwaltung via RCON

Generell wird die Verwendung von RCON für die Verwaltung eines ArmA 3 Servers empfohlen da sich dies übersichtlicher gestaltet und einige Befehle wie das bannen von Spielern 
bereits per Knopfdruck ausgeführt werden kann.

## Möglichkeit 2: Verwaltung über InGame Befehle

Eine etwas umständlichere Variante bietet die Verwaltung über den Admin Login im Spiel bei welchem Befehle über das Chatfenster eingegeben werden um beispielsweise Spieler zu bannen 
oder andere Aktionen auszuführen.

# Vergabe von Adminrechten

Um sich im Spiel als Admin einloggen zu können muss entweder ein Adminpasswort gesetzt oder die **Steam64ID** des jeweiligen Spielers in der server.cfg eingetragen werden. 
Ist in der server.cfg lediglich ein Passwort gesetzt so wird dieses für den Login benötigt, wird dort eine Steam64ID hinterlegt funktioniert der Login auch ohne Eingabe eines Passwortes.

Um das Passwort so wie die Steam64ID zu hinterlegen bearbeitest du deine server.cfg wie folgt: 

https://screensaver01.zap-hosting.com/index.php/s/gEoMJKMdjfZSgYM/preview
https://screensaver01.zap-hosting.com/index.php/s/6aG55TJiT458Log/preview
https://screensaver01.zap-hosting.com/index.php/s/94K7dg65LXJ3TZ7/preview

Dort wird jeweils das Adminpasswort und/oder die Steam64ID hinterlegt, danach kann der Login im Spiel mit dem Befehl **#login** oder **#login passwort** erfolgen.

## Verwaltung via RCON

Um den Server via RCON verwalten zu können 
