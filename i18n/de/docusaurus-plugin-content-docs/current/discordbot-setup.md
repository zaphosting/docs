---
id: discordbot-setup
title: Richte deinen Discord Bot ein
description: "Entdecke, wie du Discord Bots für Moderation, Musik, Giveaways und mehr mit nahtlosem Server mieten betreibst und verwaltest → Jetzt mehr erfahren"
sidebar_label: Einrichtung
services:
  - discord-bot
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

Ein **Discord Bot Gameserver** ermöglicht es dir, deine Discord Bots nahtlos und dauerhaft laufen zu lassen. Diese Bots können viele Aufgaben übernehmen, wie z.B. automatisch deinen Discord Channel moderieren, Musik abspielen, Giveaways und Umfragen organisieren und vieles mehr.

<YouTube videoId="OoKA8UJ_N5A" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ffjmn3snRrkoeoK/preview" title="Wie du einen Discord Bot Gameserver einrichtest und Bot-Dateien hochlädst!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art lernst!"/>

<InlineVoucher />



## Unterstützte Sprachen

Discord Bots können in verschiedenen Programmiersprachen geschrieben werden. Unser Produkt unterstützt Discord Bots, die in einer der folgenden Programmiersprachen programmiert sind:

- Java
- Python
- NodeJS

  
  

## Vorbereitung



### Bot besorgen

Um loszulegen, brauchst du einen voll funktionsfähigen Discord Bot. Du kannst entweder selbst einen erstellen oder einen vorgefertigten Bot aus dem Internet herunterladen. Speichere ihn auf deinem PC, damit du ihn später einfach auf deinen Service hochladen kannst.

### Dateien hochladen

Die Dateien deines Discord Bots müssen hochgeladen werden. Das geht am besten per FTP. Falls du nicht genau weißt, wie FTP funktioniert, empfehlen wir dir unsere [Zugriff via FTP](gameserver-ftpaccess.md) Anleitung mit detaillierten Schritten.

![](https://screensaver01.zap-hosting.com/index.php/s/x4WPiNS6xQcWQrp/preview)


Wenn du den Ordner geöffnet hast, kannst du die Bot-Dateien einfach in den leeren Ordner hochladen:

![](https://screensaver01.zap-hosting.com/index.php/s/t7DDaF684PZkXjn/preview)



## Konfiguration

Damit du deinen Bot über das Dashboard starten kannst, muss der Bot im Discord Bot Dashboard unter der **Einstellungen**-Seite konfiguriert werden.

![](https://screensaver01.zap-hosting.com/index.php/s/HoPpfJKsTC6ozNy/preview)

Hier musst du jetzt einstellen, welche Programmiersprache der Bot nutzt und wie die Hauptdatei heißt. Im Beispiel wird Python 3 verwendet und der Name der auszuführenden Discord Bot Datei angegeben. Der Dateiname ist `main.py`.

![](https://screensaver01.zap-hosting.com/index.php/s/ixfz2xKYCepS9Ek/preview)



:::danger Abhängigkeiten
Discord Bots enthalten oft zusätzliche Abhängigkeiten für ihre Funktionen. Stelle sicher, dass alle vorhanden und korrekt im Discord Bot konfiguriert sind. Diese sind in folgenden Dateien definiert:

- Python: Abhängigkeiten in `requirements.txt`.
- Node.js: Abhängigkeiten in `package.json`.
- Java: Abhängigkeiten in `pom.xml` (Maven) oder `build.gradle` (Gradle).

:::



## Funktionalität testen

Nachdem du die Einstellungen gespeichert hast, kannst du den Bot einfach über den grünen Start-Button oben auf der Seite starten. In der Live-Konsole kannst du dann prüfen, ob der Bot erfolgreich gestartet ist.



## Fazit

Glückwunsch, du hast deinen Discord Bot erfolgreich installiert und konfiguriert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂






<InlineVoucher />