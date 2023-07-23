---
id: fivem-mastodon
title: Activity Feed für Server einrichten
description: Informationen, wie du einen Activity Feed für deinen FiveM-Server von ZAP-Hosting einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Activity Feed einrichten
---

## Vorbereitung

Um auf unserem Server einen Activity Feed einzurichten, müssen wir zunächst einen Account auf einer Mastodon Instanz registrieren.

## Einrichtung

Nun öffnen wir unser Mastodon Profil und kopieren unseren Username, in unserem Fall ist das `zaphosting@mastodon.instance`

Jetzt können wir unsere "Configs", bei unserem FiveM Server öffnen, und die server.cfg editieren.


Wir fügen nun ganz unten folgende Zeile ein:

```
sets activitypubFeed username
```

"username" sollte mit deinem Mastodon Usernamen ersetzt werden.

![image](https://user-images.githubusercontent.com/13604413/159167537-e15fe091-0a65-4d72-ac06-690c7d64bcae.png)

Nun speichern wir die Datei und starten unseren Server neu, nach ~20 Minuten wird das "Feed" Tab verfügbar sein, nachdem dein Server geöffnet wurde.
