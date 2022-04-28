---
id: gameserver_database_external_access
title: Gameserver: Externer Datenbankzugriff
description: Informationen, wie du mit externen Verwaltungsprogrammen auf die Datenbanken von Gameservern von ZAP-Hosting zugreifen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Externer Datenbankzugriff
---

## Datenbank Zugriff (Extern)

Bei den Gameserver Produkten bietet ZAP-Hosting MySQL Datenbanken inklusive an. Diese können sowohl intern via phpMyAdmin als auch über externen MySQL-Verwaltungsprogrammen wie zum Beispiel Navicat oder HeidiSQL verwaltet werden. 

### Vorbereitung

Zunächst benötigen wir eine Software um zur Datenbank zu verbinden, in diesem Beispiel zeigen wir die Nutzung von [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) oder [HeidiSQL](https://www.heidisql.com/download.php) Im Anschluss wird die heruntergeladene Datei ausgeführt und der Einrichtungsvorgang befolgt. Wenn dieser Schritt abgeschlossen ist, dann kann das Programm gestartet werden und die Verbindung zur Datenbank hergestellt werden. 

### Einrichtung

Hierfür werden die Zugangsdaten zu der Datenbank benötigt. Diese befinden sich in der Gameserver Verwaltung unter Datenbanken. Hierbei werden die Informationen bezüglich **Server/IP**, **Datenbank**, **Benutzer**, **Passwort** und des Standard Port **3306** benötigt:

![image](https://user-images.githubusercontent.com/13604413/159171035-cbada76f-c540-42d1-8a77-26d9b09acaa1.png)


### HeidiSQL

Damit die Verbindung in HeidiSQL hergestellt werden kann, legen wir mit "Neu" eine neue Verbindung an.

![image](https://user-images.githubusercontent.com/71441339/161415767-8acd5679-6462-4207-9021-8d5ea4b4c4c5.png)

Bei Hostname / IP, tragen wir den Namen deiner Datenbank an, in unserem Beispiel "mysql-mariadb-5-101.zap-hosting.com"
Benutzername und Passwort sind ebenso den Angaben zu entnehmen, Port bleibt auf 3306

Danach klicken wir einfach "Öffnen"

### Navicat

Damit die Verbindung in Navicat hergestellt werden kann legen wir eine neue Verbindung an. Unter **Connection** wählen wir **MySQL** aus. Im Anschluss öffnet sich ein weiteres Popup Fenster wo die Datenbank Informationen eingetragen werden.

![](https://user-images.githubusercontent.com/61839701/165672645-81f0c3ed-0f1c-4be5-8a85-d92df335981f.png)

Der **Connection Name** gilt nur zur Übersicht der Datenbanken und kann daher frei gewählt werden. Alle weiteren Informationen übernehmen wir aus dem Interface wie oben beschrieben. Im Anschluss klicken wir auf **OK** und fertig ist die Einrichtung. Die Verbindung kann im Anschluss links in der Datenbank Übersicht hergestellt 
werden. Klicke dafür einmal einen Doppelklick auf deine Datenbank oder Rechtsklick und wähle "Öffne Verbindung":

![](https://user-images.githubusercontent.com/61839701/165672933-6ba9594e-50b3-40cc-b9e4-1178ea91fbca.png)
![](https://user-images.githubusercontent.com/61839701/165673099-e1cd908a-5421-4ec4-bb88-186c3d894c39.png)


Im Anschluss öffnet sich die Datenbank mit allen vorhandenen Datenbanktabellen. Dort kann nun deine Datenbank ähnlich wie in phpMyAdmin sowohl per Klick als auch per SQL-Befehle verändert oder verwaltet werden. 
