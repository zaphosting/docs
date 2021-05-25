---
id: valheim_savegame
title: Valheim: Savegames auf Server verwalten
description: Informationen, wie du Savegames und Welten auf deinem Valheim-Server von ZAP-Hosting verwalten und bestehende Welten zu deinem Server hinzufügen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Savegames Verwalten
---

## Savegames Runterladen

> Beachte: Vor dem Herunterladen des Savegames muss der Server gestoppt werden, damit das aktive Savegame gespeichert wird, nachdem der Server gestoppt wurde, wird das Savegame nach dem neu laden der Seite auftauchen.

Um dein Savegame herunterladen zu können, kannst du den `Savegame-Manager` im Webinterface nutzen:

![](https://screensaver01.zap-hosting.com/index.php/s/assFxGRHqMWsToC/preview)

Hier kannst du dein Savegame ganz einfach über den grünen "Download" Button herunterladen:

![](https://screensaver01.zap-hosting.com/index.php/s/GEAsY3MJWjdtmWk/preview)

> Beachte, dass du die `.db` **und** `.fwl` Dateien runterladen musst.

Fertig! Du kannst das Backup nun anderweitig nutzen, oder später wieder hochladen.


## Savegame Hochladen & Aktivieren

Um deine eigenen Savegames hochzuladen, öffnen wir zunächst unseren Savegame-Manager.

Hier können wir nun unser eigenes Savegame per Drag&Drop hochladen, dies sollte danach wie folgt aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/TiZGzY9b83qNEgD/preview)

> Beachte, dass dein Savegame genauso heißen sollte, wie es vom Spiel erstellt wurde.

In Unseren fall heißen die Backup-Dateien `meinewelt123-test-upload.fwl` und `meinewelt123-test-upload.db`.

Nun tragen wir den Namen des Backups oben unter `Savegame (worlds)` ein:

![](https://screensaver01.zap-hosting.com/index.php/s/6N2KCfeaJDSCNbS/preview)

Unter `ZAP Backups` hier suchen wir nun unser Savegame raus:

![](https://screensaver01.zap-hosting.com/index.php/s/eYeyWg2ifMniskT/preview)

Nun müssen wir nur noch bei beiden Dateien den Gelben "Wiederherstellen" Button Drücken und das Ganze bestätigen, dann wird unser Savegame geladen.

Nachdem dies geladen wurde, erscheint unten rechts eine Meldung:

![](https://screensaver01.zap-hosting.com/index.php/s/rYC5CLrEbYrHoD2/preview)

Jetzt kann der Server gestartet werden, das hochgeladene Savegame wird dann auf dem Server aktiv sein.

## Autosaves

Leider unterstützt Valheim derzeit keine Autosaves, um den Spielverlauf zu speichern, muss der Server gestoppt werden. Mit dem Restart Planer im Webinterface kann der Server zu bestimmten Zeiten automatisch neu gestartet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/Zj4MT83T8W6pFko/preview)

Hier können wir einfach eine Zeit für einen täglichen oder wöchentlichen Neustart hinzufügen:

![](https://screensaver01.zap-hosting.com/index.php/s/rjQLrqmLo9oy8RD/preview)

Nachdem wir den Neustart gespeichert haben, können wir auch mehr als einen täglichen oder wöchentlichen Neustart hinzufügen.

![](https://screensaver01.zap-hosting.com/index.php/s/GQPCJBzHSiiJrbz/preview)

Fertig! Ihr Server wird nun zu diesen bestimmten Zeiten neu gestartet, das Savegame wird während dieser Neustarts gespeichert.
