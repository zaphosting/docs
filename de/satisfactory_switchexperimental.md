---
id: satisfactory_switchexperimental
title: Satisfactory: Experimentelles Version
description: Informationen zu Experimentelles Version für Satisfactory von ZAP-Hosting - ZAP-Hosting.com Dokumentationen
sidebar_label: Experimentelles Version
---

## Was ist ein experimentelles Version?
Satisfactory besteht aus zwei Versionen, dem regulären Build und dem experimentellen Build. Das reguläre Build ist zuverlässiger, stabiler und weniger fehleranfällig, da es ein endgültigeres Build ist. Das experimentelle Build hingegen bietet zunächst Zugang zu größeren Patches, bevor es als reguläres Build veröffentlicht wird. Es birgt daher ein höheres Risiko von Fehlern und wird viel häufiger aktualisiert, hat aber den Vorteil, dass größere Aktualisierungen zuerst ausprobiert werden können!

> Hinweis: Unabhängig davon, welches Build du wählst, müssen sowohl dein Server als auch dein Spielclient die gleiche Build-Version haben, damit eine Verbindung hergestellt werden kann.

## Wie wechsle ich zur experimentellen Version?
Durch unser Gameserver-System ist es sehr einfach, den Build des Servers über unsere Website zu ändern. Bevor du beginnst, empfehlen wir dir, deine Satisfactory-Savegames zu sichern, da beim Wechsel des Spiels alle Dateien gelöscht werden.

### Sichern von Spielständen
Deinen gesamten Gameserver oder deine Gamesaves zu sichern, ist ganz einfach. Gehe auf die Satisfactory-Produktseite und wähle den Reiter `Tools -> Backups`.

![Screenshot 2023-02-21 192618](https://user-images.githubusercontent.com/42719082/220439833-3b8f24d4-75bd-42f2-84a5-df59206497e4.png)

Auf dieser Seite kannst du eine Vielzahl von Funktionen ausführen, darunter auch automatische Backups, die [auf dieser Seite](https://zap-hosting.com/guides/docs/en/gameserver_backups/) näher erläutert werden. Hier konzentrieren wir uns auf eine manuelle Sicherung.

Drücke oben auf der Seite einfach auf das grüne + Symbol und akzeptiere die Aufforderung, ein Backup des gesamten Gameservers auf deinem ZAP-Backup-Speicher zu erstellen.

![Screenshot 2023-02-21 193113](https://user-images.githubusercontent.com/42719082/220440713-4f7acd14-3b9f-4f2b-a03d-72b8b1a9ec2d.png)

Dein Backup wurde nun erstellt und du kannst über FTP darauf zugreifen, wie [auf dieser Seite](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess/) gezeigt wird.

Alternativ kannst du die Savegame-Dateien auch direkt aus dem Bereich "Savegame Manager" im Webinterface herunterladen. Diesen findest du [auf dieser Seite](https://zap-hosting.com/guides/docs/en/satisfactory_savegame/).

### Zur experimentellen Version wechseln
Gehe zunächst auf deine Satisfactory Produktseite und öffne den Reiter "Einstellungen -> Spiele".

![Screenshot 2023-02-21 191212](https://user-images.githubusercontent.com/42719082/220437310-bb85b189-e599-401d-a30c-35232ce0b46b.png)

Du siehst den Abschnitt `Installierte Spiele`, in dem die Spiele angezeigt werden, die du bereits installiert hast. Wenn du bereits zwischen den beiden Versionen gewechselt hast, werden sie dort angezeigt und du kannst zum letzten Schritt übergehen, um das Spiel zu aktivieren.

Scrolle dann nach unten, klicke auf das Dropdown-Menü "Verfügbare Spiele" und suche im Textfeld nach "Satisfactory".

![Screenshot 2023-02-21 191713](https://user-images.githubusercontent.com/42719082/220438422-c1f512c0-a0c3-4940-8423-0155b1692875.png)

Drücke auf die grüne Download-Schaltfläche und bestätige die Einrichtung bei der daraufhin erscheinenden Aufforderung. Der Download des angegebenen Server-Builds wird nun gestartet.

![Screenshot 2023-02-21 191956](https://user-images.githubusercontent.com/42719082/220438714-8dc8ccb2-24f1-4a12-86da-112edb58277d.png)

>Der Download kann bis zu einigen Minuten dauern. Bitte warte, bis er abgeschlossen ist, bevor du mit dem letzten Schritt fortfährst.

Jetzt werden beide Versionen unter `Installierte Spiele` angezeigt, so dass es einfacher ist, zwischen beiden zu wechseln.

Schließlich musst du das Spiel unter dem Abschnitt `Installierte Spiele` aktivieren. Drücke auf das blaue Symbol "Spiel aktivieren".

> Achtung! Alle Daten des Spiels werden bei der Neuinstallation gelöscht. Gehe also unbedingt ein paar Schritte zurück und erstelle ein Backup, falls du das noch nicht getan hast.

![Screenshot 2023-02-22 020606](https://user-images.githubusercontent.com/42719082/220502401-4738e1b7-e083-40e4-88f8-8e5e044f3270.png)

Wenn du wieder zum regulären Build wechseln möchtest, befolge dieselben Schritte, wähle aber stattdessen den regulären Satisfactory Gameserver während des Auswahlprozesses!

## Spielclient auf experimentell umstellen
> Hinweis: Unabhängig davon, welches Build du wählst, müssen sowohl dein Server als auch dein Spielclient die gleiche Build-Version haben, um eine Verbindung herstellen zu können.

<!--DOCUSAURUS_CODE_TABS-->

<!--Steam Version-->
Öffne zunächst dein Steam und gehe zu deiner Spielebibliothek. Suche nach "Satisfactory", klicke mit der rechten Maustaste darauf und wähle das Menü "Eigenschaften".

![Screenshot 2023-02-21 203108](https://user-images.githubusercontent.com/42719082/220451989-b90762b7-0b13-4374-82e6-af24d3da321a.png)

Im neuen Menü gehst du zum Abschnitt `Betas` und wählst `Experimentell` aus.

![Screenshot 2023-02-21 203435](https://user-images.githubusercontent.com/42719082/220452436-e30decc9-1a9d-4d4d-9aa6-5ff9681da1ef.png)

Das war's. Jetzt musst du nur noch darauf warten, dass Steam das Spiel auf den ausgewählten Spiel-Version aktualisiert, dann kannst du dein Spiel starten und deinen Server genießen!

<!--Epic Games Version-->
Bei Epic Games ist es sogar noch einfacher, zu Experimental zu wechseln. Alles, was du tun musst, ist, in deine Bibliothek zu gehen und das Spiel "Satisfactory Experimental" zu finden. Beide Spiel Versionen auf dem Epic Games Launcher sind ihre eigenen in der Bibliothek.

Das war's. Jetzt musst du nur noch darauf warten, dass Epic Games das Spiel herunterlädt und installiert. Danach kannst du dein Spiel starten und deinen Server genießen!

<!--END_DOCUSAURUS_CODE_TABS-->