---
id: valheim_savegame
title: Valheim: Savegames auf Server verwalten
description: Informationen, wie du Savegames und Welten auf deinem Valheim-Server von ZAP-Hosting verwalten und bestehende Welten zu deinem Server hinzufügen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Savegames Verwalten
---

## ⬇️ Savegames herunterladen

> Beachte: Vor dem Herunterladen des Savegames muss der Server gestoppt werden, damit das aktive Savegame gespeichert wird, nachdem der Server gestoppt wurde, wird das Savegame nach dem neu laden der Seite auftauchen.

Um dein Savegame herunterladen zu können, kannst du den `Savegame-Manager` im Webinterface nutzen:

![image](https://user-images.githubusercontent.com/26007280/189886630-8eebbae7-f322-44d8-8dea-3918205e1901.png)

Hier kannst du dein Savegame ganz einfach über den grünen "Download" Button herunterladen:

![image](https://user-images.githubusercontent.com/26007280/189886651-8a74d1bf-53d7-4d14-a570-bd6df65ba252.png)

> Beachte, dass du die `.db` **und** `.fwl` Dateien runterladen musst.

Fertig! Du kannst das Backup nun anderweitig nutzen, oder später wieder hochladen.


## ⬆️ Savegame hochladen & aktivieren

Um deine eigenen Savegames hochzuladen, öffnen wir zunächst unseren Savegame-Manager.

Hier können wir nun unser eigenes Savegame per Drag&Drop hochladen, dies sollte danach wie folgt aussehen:

![image](https://user-images.githubusercontent.com/26007280/189886675-44c0ed35-2eee-4501-a0c1-6702ce672d11.png)

> Beachte, dass dein Savegame genauso heißen sollte, wie es vom Spiel erstellt wurde.

In Unseren fall heißen die Backup-Dateien `380622.fwl` und `380622.db`.

Nun tragen wir den Namen des Backups oben unter `Savegame (worlds)` ein:

![image](https://user-images.githubusercontent.com/26007280/189886698-434550f2-e6dd-4873-8bb6-49d85997c779.png)

Unter `ZAP Backups` hier suchen wir nun unser Savegame raus:

![image](https://user-images.githubusercontent.com/26007280/189886739-05c36f4d-107d-4032-881f-73a8a7ab238b.png)

Nun müssen wir nur noch bei beiden Dateien den Gelben "Wiederherstellen" Button Drücken und das Ganze bestätigen, dann wird unser Savegame geladen.

Nachdem dies geladen wurde, erscheint unten rechts eine Meldung:

![image](https://user-images.githubusercontent.com/26007280/189886759-bb34e209-4b94-462f-acef-e32135f47d79.png)

Jetzt kann der Server gestartet werden, das hochgeladene Savegame wird dann auf dem Server aktiv sein.

## 🔃 Autosaves

Leider unterstützt Valheim derzeit keine Autosaves, um den Spielverlauf zu speichern, muss der Server gestoppt werden. Mit dem Restart Planer im Webinterface kann der Server zu bestimmten Zeiten automatisch neu gestartet werden:

![image](https://user-images.githubusercontent.com/26007280/189886785-cc289487-9671-4ce2-bd33-d80a86825104.png)

Hier können wir einfach eine Zeit für einen täglichen oder wöchentlichen Neustart hinzufügen:

![image](https://user-images.githubusercontent.com/26007280/189886817-85c7060d-d8cd-4c24-864f-b340b4fd2a2e.png)

Nachdem wir den Neustart gespeichert haben, können wir auch mehr als einen täglichen oder wöchentlichen Neustart hinzufügen.

![image](https://user-images.githubusercontent.com/26007280/189886853-07368109-14ba-4971-9ec8-e27a2e809c02.png)

Fertig! Ihr Server wird nun zu diesen bestimmten Zeiten neu gestartet, das Savegame wird während dieser Neustarts gespeichert.
