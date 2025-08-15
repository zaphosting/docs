---
id: discordbot-setup
title: Discord Bot einrichten
description: Informationen, wie man seinen eigenen Discord-Bot einrichtet - ZAP-Hosting.com documentation
sidebar_label: Einrichtung
services:
  - discord-bot
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ein **Discord-Bot-Server** ermöglicht es dir, deine Discord-Bots reibungslos und kontinuierlich laufen zu lassen. Diese Bots können eine Vielzahl von Aufgaben übernehmen, wie z. B. die automatische Moderation deines Discord- Channels, das Abspielen von Musik, die Organisation von Giveaways, Umfragen, und vieles mehr. 

<YouTube videoId="OoKA8UJ_N5A" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/R98tNjGdaknbJbY/preview" title="Wie man einen Discord-Bot-Server einrichtet und Bot-Dateien hochlädt!" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

<InlineVoucher />



## Unterstützte Sprachen

Discord Bots können in verschiedenen Sprachen programmiert werden. Unser Produkt unterstützt Discord Bots, die in einer der folgenden unterstützten Programmiersprachen geschrieben wurden: 
- Java
- Python
- NodeJS



## Vorbereitung



### Bot erhalten

Um loszulegen, benötigst du einen voll funktionsfähigen Discord Bot. Du kannst ihn entweder selbst erstellen oder einen vorgefertigten Bot aus dem Internet herunterladen. Speichere ihn auf deinem Computer, so dass du ihn anschließend einfach auf deinen Dienst hochladen kannst.



Sobald du über FTP verbunden bist, kannst du den Discord Bot Ordner öffnen und deine Botdateien hochladen.

![](https://screensaver01.zap-hosting.com/index.php/s/XKc2bRwifG5JswA/preview)

### Dateien hochladen

Jetzt können wir unsere Bot-Dateien einfach in den leeren Ordner hochladen:

![](https://screensaver01.zap-hosting.com/index.php/s/3pdXmN6fX3Qowbm/preview)

## Konfiguration

Um deinen Bot über das Dashboard ausführen zu können, muss er im Discord Bot Dashboard auf der Seite **Einstellungen** konfiguriert werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/itzjxJaTtTyGaD6/preview)

Dort musst du nun konfigurieren, welche Programmiersprache der Bot verwendet und wie die Hauptdatei aufgerufen wird. In diesem Beispiel wird Python 3 verwendet und der Name der Datei des auszuführenden Discords angegeben. Der Dateiname ist `main.py`. 

![](https://screensaver01.zap-hosting.com/index.php/s/KofY38BgAS9xT4L/preview)

:::danger Abhängigkeiten
Discord Bots enthalten oft zusätzliche Abhängigkeiten für deren Funktionalität. Stelle sicher, dass alle diese Abhängigkeiten im Discord Bot vorhanden und korrekt konfiguriert sind. Diese werden in den folgenden Dateien definiert: 

- Python: Abhängigkeiten in `requirements.txt`.
- Node.js: Abhängigkeiten in `package.json`.
- Java: Abhängigkeiten in `pom.xml` (Maven) oder `build.gradle` (Gradle).
:::

## Funktionalität testen

Nachdem du die Einstellungen gespeichert hast, kannst du deinen Bot einfach über den grünen Start-Button oben auf der Seite starten. In der Live-Konsole kannst du dann überprüfen, ob der Bot erfolgreich gestartet wurde.

## Abschluss

Glückwunsch, du hast deinen Discord Bot erfolgreich installiert und konfiguriert. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
