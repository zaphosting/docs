---
id: discordbot-setup
title: Discord Bot einrichten
description: Informationen, wie man seinen eigenen Discord-Bot einrichtet - ZAP-Hosting.com documentation
sidebar_label: Einrichtung
---

import YouTube from '@site/src/components/YouTube/YouTube';

<YouTube videoId="OoKA8UJ_N5A" title="Wie man einen Discord-Bot-Server einrichtet und Bot-Dateien hochlädt!" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst?  Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>


## Verbinden mit FTP

Um deinen Bot einzurichten, muss der [FTP-Zugang](gameserver-ftpaccess.md) erst konfiguriert werden.

## Vorbereitung

Sobald du über FTP verbunden bist, kannst du den Discord Bot Ordner öffnen und deine Botdateien hochladen.

![image](https://user-images.githubusercontent.com/26007280/194344056-2bc1440e-9142-42d1-962d-3b5edfe7ff03.png)

## Bot hochladen

Jetzt können wir unsere Bot-Dateien einfach in den leeren Ordner hochladen:

![image](https://user-images.githubusercontent.com/26007280/194344097-9c90b5f0-3707-4409-9c39-3246c6f84d11.png)

## Konfiguration des Dashboards

Damit du deinen Bot über das Dashboard ausführen kannst, musst du es erst unter "Einstellungen" konfigurieren:

![image](https://user-images.githubusercontent.com/26007280/194344145-090a5b3e-36b3-4163-83d7-95fa03561f61.png)

Hier kannst du nun die Programmiersprache und die Hauptdatei des Bots festlegen:

![image](https://user-images.githubusercontent.com/26007280/194344211-015a0eb9-4ee0-4a93-8f9e-7f42d6921b11.png)

In unserem Fall sind dies Python 3 und main.py.

## Starten des Bots

Nachdem du die Einstellungen gespeichert hast, kannst du deinen Bot einfach über den grünen Start-Button oben auf der Seite starten!

In der Live-Konsole kannst du dann überprüfen, ob der Bot erfolgreich gestartet wurde.