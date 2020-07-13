---
id: fivem_mastadon
title: Activity Feed Einrichten
sidebar_label: Activity Feed Einrichten
---

## Vorbereitung

Um auf unserem Server einen Activity Feed einzurichten, müssen wir zunächst einen Account auf [Mastadon](https://mstdn.social/about) Registrieren.

## Einrichtung

Nun öffnen wir unser [Mastadon Profil](https://mstdn.social/settings/profile) und Kopieren unseren Username, in unserem fall ist das `zaphosting@mstdn.social`

Jetzt können wir unsere "Configs", bei unserem FiveM Server öffnen, und die server.cfg editieren:

![](https://screensaver01.zap-hosting.com/index.php/s/PaQHqny89EFXNYK/preview)


Wir Fügen nun ganz unten folgende Zeile ein:

```
sets activitypubFeed username
```

"username" sollte mit deinem Mastadon Usernamen ersetzt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/JkwaEpJbDqqPmjK/preview)

Nun speichern wir die Datei und starten unseren Server neu, nach ~20 Minuten wird das "Feed" Tab verfügbar sein, nachdem dein Server geöffnet wurde.

![](https://screensaver01.zap-hosting.com/index.php/s/ZwsnnABibqZncEx/preview)