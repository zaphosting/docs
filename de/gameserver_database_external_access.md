---
id: gameserver_database_external_access
title: Gameserver: Externer Datenbankzugriff
description: Informationen, wie du mit externen Verwaltungsprogrammen auf die Datenbanken von Gameservern von ZAP-Hosting zugreifen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Externer Datenbankzugriff
---

## Datenbank Zugriff (Extern)

Bei den Gameserver Produkten bietet ZAP-Hosting MySQL Datenbanken inklusive an. Diese können sowohl intern via phpMyAdmin als auch über externen MySQL-Verwaltungsprogrammen wie zum Beispiel Navicat oder HeidiSQL verwaltet werden. Im Folgenden wird die Einrichtung und Verwaltung der Datenbank mittels Navicat erläutert. 

![img](https://screensaver01.zap-hosting.com/index.php/s/ySbAL7f8rwQQdKE/preview)


### Vorbereitung

Zunächst wird die Navicat Software benötigt. Neben der Premium Version gibt es diese auch als Lite Version. Heruntergeladen werden kann Sie hier: [Download](https://www.chip.de/downloads/Navicat-Lite_70358373.html) Im Anschluss wird die heruntergeladene Datei ausgeführt und der Einrichtungsvorgang befolgt. Wenn dieser Schritt abgeschlossen ist, dann kann das Programm gestartet werden und die Verbindung zur Datenbank hergestellt werden. 


### Einrichtung

Hierfür werden die Zugangsdaten zu der Datenbank benötigt. Diese befinden sich in der Gameserver Verwaltung unter Datenbanken. Hierbei werden die Informationen bezüglich **Server/IP**, **Datenbank**, **Benutzer**, **Passwort** und des Standard Port **3306** benötigt:

![img](https://screensaver01.zap-hosting.com/index.php/s/yypXkB3S8m8PxrK/preview)

Damit die Verbindung in Navicat hergestellt werden kann legen wir eine neue Verbindung an. Unter **Connection** wählen wir **MySQL** aus. Im Anschluss öffnet sich ein weiteres Popup Fenster wo die Datenbank Informationen eingetragen werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/ty8jN4W9Frf6Ywx/preview)



Der **Connection Name** gilt nur zur Übersicht der Datenbanken und kann daher frei gewählt werden. Alle weiteren Informationen übernehmen wir aus dem Interface wie oben beschrieben. Im Anschluss klicken wir auf **OK** und fertig ist die Einrichtung. Die Verbindung kann im Anschluss links in der Datenbank Übersicht hergestellt werden. Klicke dafür einmal einen Doppelklick auf deine Datenbank oder Rechtsklick und wähle "Öffne Verbindung":

![img](https://screensaver01.zap-hosting.com/index.php/s/ppmZfnzBdRQ3Cfw/preview)



Im Anschluss öffnet sich die Datenbank mit allen vorhandenen Datenbanktabellen. Dort kann nun deine Datenbank ähnlich wie in phpMyAdmin sowohl per Klick als auch per SQL-Befehle verändert oder verwaltet werden. 

![img](https://screensaver01.zap-hosting.com/index.php/s/AkeerYYRjx4xHLY/preview)
