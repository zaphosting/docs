---
id: valheim-savegame
title: "Valheim: Savegames auf deinem Server verwalten"
description: "Entdecke, wie du deine Valheim-Savegames effizient verwaltest, herunterlädst und wiederherstellst – mit dem Savegame-Manager → Jetzt mehr erfahren"
sidebar_label: Savegames verwalten
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Savegames herunterladen

:::info
Hinweis: Bevor du das Savegame herunterlädst, musst du den Server stoppen, damit das aktive Savegame gespeichert wird. Nach dem Stoppen des Servers erscheint das Savegame nach einmaligem Neuladen der Seite.
:::

Um dein Savegame herunterzuladen, kannst du den `Savegame-Manager` im Webinterface nutzen:

![](https://screensaver01.zap-hosting.com/index.php/s/FryL7EXmEYBFBXD/preview)

Hier kannst du dein Savegame ganz easy per Klick auf den grünen "Download"-Button herunterladen:

![](https://screensaver01.zap-hosting.com/index.php/s/2o2gnQ3GKpwc22w/preview)

:::info
Wichtig: Du musst sowohl die `.db` **als auch** die `.fwl` Dateien herunterladen.
:::

Fertig! Du kannst das Backup jetzt für andere Zwecke nutzen oder später wieder hochladen.

## Savegame hochladen & aktivieren

Um eigene Savegames hochzuladen, öffnen wir zuerst unseren Savegame-Manager.

Hier kannst du dein Savegame per Drag & Drop hochladen, das sollte dann so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/H2RJSyMGeiojfxD/preview)

:::info
Achte darauf, dass dein Savegame den gleichen Namen hat, wie es vom Spiel erstellt wurde.
:::

In unserem Beispiel heißen die Backup-Dateien `380622.fwl` und `380622.db`.

Jetzt geben wir den Namen des Backups oben unter `Savegame (worlds)` ein:

![](https://screensaver01.zap-hosting.com/index.php/s/Ggrys4xKjDm7inz/preview)

Unter `ZAP Backups` suchen wir jetzt unser Savegame:

![](https://screensaver01.zap-hosting.com/index.php/s/beRMYmE4CicDNsz/preview)

Jetzt müssen wir nur noch bei beiden Dateien den gelben "Restore"-Button drücken und das Ganze bestätigen, dann wird unser Savegame geladen.

Nachdem das Laden abgeschlossen ist, erscheint unten rechts eine Meldung:

![](https://screensaver01.zap-hosting.com/index.php/s/Zs9F4rNRen4QMcs/preview)

Jetzt kannst du den Server starten, das hochgeladene Savegame ist dann aktiv auf dem Server.

## Autosaves

Leider unterstützt Valheim aktuell keine Autosaves. Um deinen Spielstand zu speichern, muss der Server gestoppt werden. Den Restart-Planer im Webinterface kannst du nutzen, um deinen Server automatisch zu bestimmten Zeiten neu zu starten:

![](https://screensaver01.zap-hosting.com/index.php/s/gTp5yJDQyHKX7eF/preview)

Hier kannst du einfach eine Zeit für einen täglichen oder wöchentlichen Neustart hinzufügen:

![](https://screensaver01.zap-hosting.com/index.php/s/nyqbMzjNL78qz9K/preview)

Nachdem du den Neustart gespeichert hast, kannst du auch mehrere tägliche oder wöchentliche Neustarts hinzufügen.

![](https://screensaver01.zap-hosting.com/index.php/s/BddatyGLAZZWnCA/preview)

Fertig! Dein Server startet jetzt zu den angegebenen Zeiten neu, dabei wird das Savegame automatisch gespeichert.

<InlineVoucher />