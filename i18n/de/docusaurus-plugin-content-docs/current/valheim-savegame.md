---
id: valheim-savegame
title: "Valheim: Savegames auf Server verwalten"
description: Informationen, wie du Savegames und Welten auf deinem Valheim-Server von ZAP-Hosting verwalten und bestehende Welten zu deinem Server hinzufügen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Savegames verwalten
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Savegames herunterladen

:::info
Beachte: Vor dem Herunterladen des Savegames muss der Server gestoppt werden, damit das aktive Savegame gespeichert wird, nachdem der Server gestoppt wurde, wird das Savegame nach dem neu Laden der Seite auftauchen.
:::

Um dein Savegame herunterladen zu können, kannst du den `Savegame-Manager` im Webinterface nutzen:

![](https://screensaver01.zap-hosting.com/index.php/s/HSNNJKCmb2bPrmg/preview)

Hier kannst du dein Savegame ganz einfach über den grünen "Download" Button herunterladen:

![](https://screensaver01.zap-hosting.com/index.php/s/aN2SkGBE4FFTpD5/preview)

:::info
Beachte, dass du die `.db` **und** `.fwl` Dateien herunterladen musst.
:::

Fertig! Du kannst das Backup nun anderweitig nutzen, oder später wieder hochladen.


## Savegame hochladen & aktivieren

Um deine eigenen Savegames hochzuladen, öffnen wir zunächst unseren Savegame-Manager.

Hier können wir nun unser eigenes Savegame per Drag&Drop hochladen, dies sollte danach wie folgt aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/DWYGxX8Hoxg9Bnb/preview)

:::info
Beachte, dass dein Savegame genauso heißen sollte, wie es vom Spiel erstellt wurde.
:::

In unseren Fall heißen die Backup-Dateien `380622.fwl` und `380622.db`.

Nun tragen wir den Namen des Backups oben unter `Savegame (worlds)` ein:

![](https://screensaver01.zap-hosting.com/index.php/s/5iCtc2e6qCZpAQc/preview)

Unter `ZAP Backups` hier suchen wir nun unser Savegame raus:

![](https://screensaver01.zap-hosting.com/index.php/s/MfLMPtAykSb6DYX/preview)

Jetzt müssen wir nur noch bei beiden Dateien den gelben "Wiederherstellen" Button drücken und das Ganze bestätigen, dann wird unser Savegame geladen.

Nachdem dies geladen wurde, erscheint unten rechts eine Meldung:

![](https://screensaver01.zap-hosting.com/index.php/s/54N5wBMCHa3SkyQ/preview)

Jetzt kann der Server gestartet werden, das hochgeladene Savegame wird dann auf dem Server aktiv sein.

## Autosaves

Leider unterstützt Valheim derzeit keine Autosaves, um den Spielverlauf zu speichern, muss der Server gestoppt werden. Mit dem Restart Planer im Webinterface kann der Server zu bestimmten Zeiten automatisch neu gestartet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/YKjbgfsJyqDYp78/preview)

Hier können wir einfach eine Zeit für einen täglichen oder wöchentlichen Neustart hinzufügen:

![](https://screensaver01.zap-hosting.com/index.php/s/FfymF9KfiDidCYB/preview)

Nachdem wir den Neustart gespeichert haben, können wir auch mehr als einen täglichen oder wöchentlichen Neustart hinzufügen.

![](https://screensaver01.zap-hosting.com/index.php/s/iQmQ4K4EcL6bQsw/preview)

Fertig! Dein Server wird nun zu diesen bestimmten Zeiten neu gestartet, das Savegame wird während dieser Neustarts gespeichert.
