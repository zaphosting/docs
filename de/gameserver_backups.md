---
id: gameserver_backups
title: Gameserver: Backups bei ZAP-Hosting erstellen, herunterladen und einspielen
description: Informationen, wie du Backups für deinen Gameserver von ZAP-Hosting erstellen, herunterladen und wieder einspielen kannst -ZAP-Hosting.com Dokumentationen
sidebar_label: Backups
---

Wir bieten die Möglichkeit individuell Backups per Klick zu erstellen. Dadurch können Backups kinderleicht und ohne großen Aufwand erstellt und zu einem späteren Zeitpunkt jederzeit wieder importiert werden. Dieses Feature bieten wir sowohl für die Server-Dateien deines Gameserver als auch für die dazugehörigen Datenbanken. Das Backup wird dann auf deinem Storage Server gespeichert, welcher standardmäßig 10GB kostenlosen Speicherplatz bietet. Solltest du mehr benötigen, dann kannst du auch auf ein Premium Storage upgraden.

Neben dem manuellen erstellen von Backups können auch Backups voll automatisiert erstellt werden. Es können entweder täglich oder wöchentlich Backups zu einer angegebenen Uhrzeit angelegt werden. Nach einer Wiederherstellung eines Backups befindet sich der Server auf dem Stand zum Zeitpunkt der Backuperstellung.



## 🤏 Backup manuell erstellen

Um ein Backup manuell zu erstellen muss der grüne **+** Button neben der Backup Liste gedrückt werden. Im Anschluss startet der Backup Vorgang. 

> Je nach Speichergröße des Servers kann das anlegen das Backups durchaus ein paar Minuten dauern!



## 🔄 Backup automatisiert erstellen

Unten am Ende der Seite befinden sich weitere Optionen, wo unter anderem auch die Einstellungen für automatisierte Backups zu finden. Die Option **Backups automatisch erstellen** muss aktiviert sein, damit die Funktion aktiv ist. Zudem muss das Intervall gesetzt werden. 

![image](https://user-images.githubusercontent.com/13604413/159171260-f3d1775e-25bc-45a0-b4aa-d6bdc13bfa0f.png)

Je nach Spiel ist es oftmals auch zu empfehlen die Datenbank mit zu sichern, da dort oftmals wichtige Daten wie Spielstände, Rechte und vieles mehr gespeichert werden. 



## ⬇️ Backups herunterladen/löschen

Um Backups herunterladen oder zu löschen muss man sich per FTP mit dem Storage Server verbinden. Eine Anleitung zum Benutzen von FTP findest du hier: [FTP-Zugang](gameserver_ftpaccess.md)

![image](https://user-images.githubusercontent.com/13604413/159171263-ef2c31b3-1541-4f41-b7b1-e8a70c96a422.png)

![image](https://user-images.githubusercontent.com/13604413/159171264-187a5aca-1829-41a0-967b-f9125df236c1.png)

Dort angelangt findet man die Zugangsdaten zum Storage Server und den aktuell belegten Speicherplatz. Wenn du per FTP verbunden bist, dann findest du dort die Backups und kannst sie darüber herunterladen oder löschen.

