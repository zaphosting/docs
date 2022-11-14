---
id: discordbot_setup
title: Discord Bot einrichten
description: Informationen, wie man seinen eigenen Discord-Bot einrichtet - ZAP-Hosting.com documentation
sidebar_label: Einrichtung
---

## Verbinden mit FTP

Um deinen Bot einrichten zu können, muss der [FTP-Zugang](gameserver_ftpaccess.md) konfiguriert werden.

## Vorbereitung

Sobald wir mit FTP verbunden sind, müssen wir unseren Ordner "Discordbot" öffnen, in den wir unsere Bot-Dateien hochladen:

![image](https://user-images.githubusercontent.com/26007280/194344056-2bc1440e-9142-42d1-962d-3b5edfe7ff03.png)

## Upload your Bot

Jetzt können wir unsere Bot-Dateien einfach in den leeren Ordner hochladen:

![image](https://user-images.githubusercontent.com/26007280/194344097-9c90b5f0-3707-4409-9c39-3246c6f84d11.png)

## Konfiguration des Dashboards

Um Ihren Bot über das Dashboard laufen lassen zu können, muss er auf der Seite "Einstellungen" konfiguriert werden:

![image](https://user-images.githubusercontent.com/26007280/194344145-090a5b3e-36b3-4163-83d7-95fa03561f61.png)

Hier müssen wir nun konfigurieren, welche Programmiersprache der Bot verwendet und wie seine Hauptdatei aufgerufen wird:

![image](https://user-images.githubusercontent.com/26007280/194344211-015a0eb9-4ee0-4a93-8f9e-7f42d6921b11.png)

in unserem Fall ist das jeweils Python 3 und main.py.

## Starten des Bots

Nach dem Speichern der Einstellungen kann der Bot einfach über den grünen Start-Button oben auf der Seite gestartet werden!

In der Live-Konsole kann man dann überprüfen, ob der Bot erfolgreich gestartet ist!
