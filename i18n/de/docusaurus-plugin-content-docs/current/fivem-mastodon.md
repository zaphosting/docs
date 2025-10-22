---
id: fivem-mastodon
title: "FiveM: Activity Feed für deinen Server einrichten"
description: "Entdecke, wie du einen Mastodon Activity Feed in deinen Server integrierst für Echtzeit-Updates und mehr Community-Interaktion → Jetzt mehr erfahren"
sidebar_label: Activity Feed konfigurieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Vorbereitung

Um einen Activity Feed auf unserem Server einzurichten, müssen wir zuerst einen Account bei Mastodon registrieren.

## Einrichtung

Jetzt öffnen wir unser Mastodon-Profil und kopieren unseren Benutzernamen, in unserem Fall ist das `zaphosting@mstdn.instance`

Anschließend öffnen wir die "Configs" auf unserem FiveM Gameserver und bearbeiten die server.cfg.

Wir fügen nun ganz unten folgende Zeile ein:

```
sets activitypubFeed username
```

"username" ersetzt du durch deinen Mastodon-Benutzernamen.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Jetzt speichern wir die Datei und starten unseren Server neu. Nach ca. 20 Minuten ist der Reiter "Feed" verfügbar, sobald dein Server online ist.


<InlineVoucher />