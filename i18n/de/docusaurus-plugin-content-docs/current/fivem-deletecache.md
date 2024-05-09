---
id: fivem-deletecache
title: "FiveM: Cache leeren"
description: Informationen, wie du den Cache deines FiveM Server von ZAP-Hosting leeren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Cache leeren
---

## Einfache Methode

Das Löschen des Caches auf deinem FiveM Gameserver ist ganz einfach. Rufe zunächst das Webinterface deines Gameservers auf. Öffne den Bereich **Einstellungen** im Webinterface deines Gameservers.

![image](https://github.com/zaphosting/docs/assets/42719082/bbdfc816-6160-4e2a-b9ee-74feca4663ed)

Scrollen dann zum unteren Ende der Seite, um mehrere Buttons unter dem Unterabschnitt **Aktionen** zu finden. Drücke hier den Button **Cache-Dateien löschen**, um den Cache deines Gameservers zu löschen.

![image](https://github.com/zaphosting/docs/assets/42719082/f917d7bf-f436-4e6c-b53d-bd2d2df1e4c0)

:::note
Dies führt zu einem sofortigen Neustart deines Servers, um die Cache-Dateien zu leeren, also stelle sicher, dass du darauf vorbereitet bist.
:::

Dein Server wird nun neu gestartet und der Cache gelöscht. Wenn der Server neu gestartet wird, schreibt der Server den Cache neu. Du hast den Cache für deinen FiveM Gameserver erfolgreich geleert!

## Alternative Methode

### Zugriff per FTP

Zunächst musst du dich per FTP mit deinem Server verbinden. Wenn du mit der Verwendung von FTP nicht vertraut bist, empfehlen wir dir, einen Blick in die [Zugriff per FTP](gameserver-ftpaccess.md) Anleitung zu werfen.

![image](https://user-images.githubusercontent.com/13604413/159137768-9431a8d8-afa2-47a7-960b-7bcd700c9627.png)

### Cache lokalisieren

Im nächsten Schritt musst du den Cache-Ordner finden und ihn löschen. Du solltest diesem Pfad folgen: `/gXXXXXX/gta5-fivem/server-data/cache`, um direkt auf den Cache-Ordner zugreifen zu können.

![image](https://user-images.githubusercontent.com/13604413/159137776-328b84d3-992b-47ef-b8d8-c1abb0beae45.png)

### Cache leeren

Jetzt musst du einfach den Cache leeren. Klicken dazu auf den Ordner **Cache** und dann auf **Files**. Nun solltest du alle Ordner markieren, die sich im Ordner **Cache** befinden und sie löschen.

![image](https://user-images.githubusercontent.com/13604413/159137786-b7a63449-4d89-4f77-a06c-9edd87bdd85e.png)

Starten jetzt deinen FiveM Server neu, damit die Änderungen wirksam werden. Beim Neustart des Servers wird der Cache neu beschrieben. Du hast den Cache für deinen FiveM Gameserver erfolgreich bereinigt!