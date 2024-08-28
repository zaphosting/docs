---
id: discordbot-setup
title: Discord Bot einrichten
description: Informationen, wie man seinen eigenen Discord-Bot einrichtet - ZAP-Hosting.com documentation
sidebar_label: Einrichtung
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mit einem **Discord-Bot-Server** kannst du Discord-Bots kontinuierlich laufen lassen, die z.B. automatisch deinen Discord-Kanal moderieren, Musik abspielen, Giveaways und Umfragen durchführen und vieles mehr. Ein Discord-Bot-Server von ZAP-Hosting lässt sich ganz einfach konfigurieren, indem du die gewünschten Dateien per FTP** hochlädst. Die Discord-Bot-Server von ZAP-Hosting unterstützen die Sprachen **NodeJS**, **Java** und **Python**.

<YouTube videoId="OoKA8UJ_N5A" title="Wie man einen Discord-Bot-Server einrichtet und Bot-Dateien hochlädt!" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

<InlineVoucher />

## Verbinden mit FTP

Um deinen Bot einzurichten, muss der [FTP-Zugang](gameserver-ftpaccess.md) erst konfiguriert werden.

## Vorbereitung

Sobald du über FTP verbunden bist, kannst du den Discord Bot Ordner öffnen und deine Botdateien hochladen.

![image](https://screensaver01.zap-hosting.com/index.php/s/XKc2bRwifG5JswA/preview)

## Bot hochladen

Jetzt können wir unsere Bot-Dateien einfach in den leeren Ordner hochladen:

![image](https://screensaver01.zap-hosting.com/index.php/s/3pdXmN6fX3Qowbm/preview)

## Konfiguration des Dashboards

Damit du deinen Bot über das Dashboard ausführen kannst, musst du es erst unter "Einstellungen" konfigurieren:

![image](https://screensaver01.zap-hosting.com/index.php/s/itzjxJaTtTyGaD6/preview)

Hier kannst du nun die Programmiersprache und die Hauptdatei des Bots festlegen:

![image](https://screensaver01.zap-hosting.com/index.php/s/KofY38BgAS9xT4L/preview)

In unserem Fall sind dies Python 3 und main.py.

## Starten des Bots

Nachdem du die Einstellungen gespeichert hast, kannst du deinen Bot einfach über den grünen Start-Button oben auf der Seite starten!

In der Live-Konsole kannst du dann überprüfen, ob der Bot erfolgreich gestartet wurde.