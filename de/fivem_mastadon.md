---
id: fivem_mastadon
title: FiveM: Activity Feed für Server einrichten
description: Informationen, wie du einen Activity Feed für deinen FiveM-Server von ZAP-Hosting einrichten kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Activity Feed Einrichten
---

## Vorbereitung

Um auf unserem Server einen Activity Feed einzurichten, müssen wir zunächst einen Account auf [Mastadon](https://mstdn.social/about) Registrieren.

## Einrichtung

Nun öffnen wir unser [Mastadon Profil](https://mstdn.social/settings/profile) und Kopieren unseren Username, in unserem fall ist das `zaphosting@mstdn.social`

Jetzt können wir unsere "Configs", bei unserem FiveM Server öffnen, und die server.cfg editieren:

[](https://screensaver01.zap-hosting.com/index.php/s/6gfSWmbfGBpRaNb/preview)


Wir Fügen nun ganz unten folgende Zeile ein:

```
sets activitypubFeed username
```

"username" sollte mit deinem Mastadon Usernamen ersetzt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/KyW5rMNrQRrfGji/preview)

Nun speichern wir die Datei und starten unseren Server neu, nach ~20 Minuten wird das "Feed" Tab verfügbar sein, nachdem dein Server geöffnet wurde.
