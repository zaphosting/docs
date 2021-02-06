---
id: valheim_savegame
title: Savegames Verwalten
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

Um deine eigenen Savegames hochzuladen, benötigst du den FTP-Zugang deines Servers, wir haben einen Guide, um diesen einzurichten, [hier](gameserver_ftpaccess.md).

Nachdem wir uns per FTP Angemeldet haben, können wir den `world-backups` Ordner öffnen, hier befinden sich alle unsere Welten, außer die Aktive.

Hier können wir nun unser eigenes Savegame per Drag&Drop hochladen, dies sollte danach wie folgt aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/AXwfFHs7yMZ7kWN/preview)

> db-backup Dateien in diesen Ordner werden erstellt, wenn dein Server gestartet oder gestoppt wird, diese kannst du ignorieren.

Jetzt können wir im Webinterface den `Savegame-Manager` öffnen:

![](https://screensaver01.zap-hosting.com/index.php/s/assFxGRHqMWsToC/preview)

Unter `Backups` sollten wir die gleichen Saves finden, welche im `world-backups` Ordner sind, hier suchen wir unser Savegame raus:

![](https://screensaver01.zap-hosting.com/index.php/s/d8Q68crjokoSEqR/preview)

Nun müssen wir nur noch bei beiden Dateien den Gelben "Wiederherstellen" Button Drücken und das Ganze bestätigen, dann wird unser Savegame geladen.

Nachdem dies geladen wurde, erscheint unten rechts eine Meldung:

![](https://screensaver01.zap-hosting.com/index.php/s/rYC5CLrEbYrHoD2/preview)

Jetzt kann der Server gestartet werden, das hochgeladene Savegame wird dann auf dem Server aktiv sein.
