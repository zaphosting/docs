---
id: minecraft-rcon
title: "Minecraft: Server RCON verwenden"
description: Informationen, wie du RCON mit deinem Minecraft-Server von ZAP-Hosting verwendest, um deinen Server zu verwalten - ZAP-Hosting.com Dokumentation
sidebar_label: RCON
---

Hier gelangst du zu unseren Minecraft Servern: [Minecraft Server mieten](https://zap-hosting.com/de/minecraft-server-mieten/)

## Was ist RCON?
RCON ist eine Schnittstelle in verschiedenen Programmen, wie also auch Gameservern, 
mit der Fernwartungen wie auch Fernverwaltungen durchgeführt werden können.
Mit dieser Schnittstelle können Server verwaltet werden, die bereits laufen und erreichbar sind.
Mit einem bestimmten Fernwartungsprogramm kann dann auf die Schnittstelle zugegriffen werden
und der Server somit verwaltet werden.

## Wie benutze ich RCON bei Minecraft?
Um bei Minecraft RCON nutzen zu können, muss es vorerst in der Datei `server.properties`
aktiviert werden. Suche dazu die Zeile mit folgendem Inhalt auf:
`enable-rcon=false`

Entferne den Wert `false` und trage dort stattdessen `true` ein.
Nun brauch die Schnittstelle noch ein Passwort, damit sich nicht jeder mit dieser
Fernwartungsschnittstelle verbinden kann. Das Passwort dafür kann in der Zeile
mit folgendem Inhalt eingetragen werden:
`rcon.password=`

Schreibe zum Festlegen des Kennworts hinter das Gleichheitszeichen dein gewünschtes Passwort.
Ist das getan, musst du nur noch herausfinden, wie der Port deiner RCON Schnittstelle lautet.
Dieser kann in der Zeile `rcon.port` abgelesen und festgelegt werden. Der Port besteht aus einer
bis zu fünfstelligen Zahl zwischen `1` und `65534`.

Hast du den Port davon herausgefunden, öffne jetzt ein beliebiges RCON Programm, mit dem du dich auf die
Schnittstelle verbinden kannst. Eine Empfehlung unsererseits für ein RCON-taugliches Programm wäre die [RCON Console](https://sourceforge.net/projects/rconconsole/).
Trage jetzt die IP-Adresse deines Servers in das oben stehende Textfeld `Address` ein. Direkt daneben den
RCON-Port deines Gameservers und dahinter das Passwort. Stelle nun sicher, dass dein Gameserver läuft
und erreichbar ist und verbinde nun mit dem Programm per RCON auf deinen Server.

Bei erfolgreicher Verbindung kannst du nun Minecraft-Befehle an deinen Server senden. Trage dazu die Befehle in das
untenstehende Textfeld deines RCON Programms ein und beachte die Rückgabe der Konsole in der Fenstermitte.
