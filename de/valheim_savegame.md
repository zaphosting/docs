---
id: valheim_savegame
title: Valheim: Savegames auf Server verwalten
description: Informationen, wie du Savegames und Welten auf deinem Valheim-Server von ZAP-Hosting verwalten und bestehende Welten zu deinem Server hinzufügen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Savegames Verwalten
---

## ⬇️ Savegames herunterladen

> Beachte: Vor dem Herunterladen des Savegames muss der Server gestoppt werden, damit das aktive Savegame gespeichert wird, nachdem der Server gestoppt wurde, wird das Savegame nach dem neu laden der Seite auftauchen.

Um dein Savegame herunterladen zu können, kannst du den `Savegame-Manager` im Webinterface nutzen:

![](https://screensaver01.zap-hosting.com/index.php/s/iRCoJNrQF9QKcJb/preview)

Hier kannst du dein Savegame ganz einfach über den grünen "Download" Button herunterladen:

![](https://screensaver01.zap-hosting.com/index.php/s/9nxrys7zqKioarf/preview)

> Beachte, dass du die `.db` **und** `.fwl` Dateien runterladen musst.

Fertig! Du kannst das Backup nun anderweitig nutzen, oder später wieder hochladen.


## ⬆️ Savegame hochladen & aktivieren

Um deine eigenen Savegames hochzuladen, öffnen wir zunächst unseren Savegame-Manager.

Hier können wir nun unser eigenes Savegame per Drag&Drop hochladen, dies sollte danach wie folgt aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/tBc5Aa7HpyLPZXc/preview)

> Beachte, dass dein Savegame genauso heißen sollte, wie es vom Spiel erstellt wurde.

In Unseren fall heißen die Backup-Dateien `380622.fwl` und `380622.db`.

Nun tragen wir den Namen des Backups oben unter `Savegame (worlds)` ein:

![](https://screensaver01.zap-hosting.com/index.php/s/fLnAGN8mFNXCxi6/preview)

Unter `ZAP Backups` hier suchen wir nun unser Savegame raus:

![](https://screensaver01.zap-hosting.com/index.php/s/Qnm6p8TmdXr7Fwx/preview)

Nun müssen wir nur noch bei beiden Dateien den Gelben "Wiederherstellen" Button Drücken und das Ganze bestätigen, dann wird unser Savegame geladen.

Nachdem dies geladen wurde, erscheint unten rechts eine Meldung:

![](https://screensaver01.zap-hosting.com/index.php/s/e6ZLX2bBMn9BXW4/preview)

Jetzt kann der Server gestartet werden, das hochgeladene Savegame wird dann auf dem Server aktiv sein.

## 🔃 Autosaves

Leider unterstützt Valheim derzeit keine Autosaves, um den Spielverlauf zu speichern, muss der Server gestoppt werden. Mit dem Restart Planer im Webinterface kann der Server zu bestimmten Zeiten automatisch neu gestartet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/prd6xMR5mSg9rco/preview)

Hier können wir einfach eine Zeit für einen täglichen oder wöchentlichen Neustart hinzufügen:

![](https://screensaver01.zap-hosting.com/index.php/s/BwbxfMTSKKDoEqn/preview)

Nachdem wir den Neustart gespeichert haben, können wir auch mehr als einen täglichen oder wöchentlichen Neustart hinzufügen.

![](https://screensaver01.zap-hosting.com/index.php/s/WPm86DQ2Gg7QKRW/preview)

Fertig! Ihr Server wird nun zu diesen bestimmten Zeiten neu gestartet, das Savegame wird während dieser Neustarts gespeichert.
