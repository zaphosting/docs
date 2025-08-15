---
id: gameserver-database-external-access
title: 'Gameserver: Externer Datenbankzugriff'
description: Informationen, wie du mit externen Verwaltungsprogrammen auf die Datenbanken von Gameservern von ZAP-Hosting zugreifen kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Externer Datenbankzugriff
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Bei den Gameserver Produkten bietet ZAP-Hosting MySQL Datenbanken inklusive an. Diese können sowohl intern via phpMyAdmin als auch über externen MySQL-Verwaltungsprogrammen wie zum Beispiel Navicat oder HeidiSQL verwaltet werden.

Hierfür werden die Zugangsdaten zu der Datenbank benötigt. Diese befinden sich in der Gameserver Verwaltung unter Datenbanken. Hierbei werden die Informationen bezüglich **Server/IP**, **Datenbank**, **Benutzer**, **Passwort** und des Standard Port **3306** benötigt:

![](https://screensaver01.zap-hosting.com/index.php/s/ZFo5GQk62i4734q/preview)

<InlineVoucher />

## Vorbereitung

Zunächst benötigen wir eine Software, um zur Datenbank zu verbinden, in diesem Beispiel zeigen wir die Nutzung von [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) oder [HeidiSQL](https://www.heidisql.com/download.php). Im Anschluss wird die heruntergeladene Datei ausgeführt und der Einrichtungsvorgang befolgt. Wenn dieser Schritt abgeschlossen ist, dann kann das Programm gestartet werden und die Verbindung zur Datenbank hergestellt werden. 

## HeidiSQL

Damit die Verbindung in HeidiSQL hergestellt werden kann, legen wir mit "Neu" eine neue Verbindung an.

![](https://screensaver01.zap-hosting.com/index.php/s/YWmR2aTJzWP7LqH/preview)

Bei Hostname / IP, tragen wir den Namen deiner Datenbank an, in unserem Beispiel "mysql-mariadb-5-101.zap-hosting.com"
Benutzername und Passwort sind ebenso den Angaben zu entnehmen, Port bleibt auf 3306

Danach klicken wir einfach "Öffnen"

## Navicat

Damit die Verbindung in Navicat hergestellt werden kann, legen wir eine neue Verbindung an. Unter **Connection** wählen wir **MySQL** aus. Im Anschluss öffnet sich ein weiteres Popup Fenster, wo die Datenbankinformationen eingetragen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/jGbWRBmkDZZBpyx/preview)

Der **Connection Name** gilt nur zur Übersicht der Datenbanken und kann daher frei gewählt werden. Alle weiteren Informationen übernehmen wir aus dem Interface, wie oben beschrieben. Im Anschluss klicken wir auf **OK** und fertig ist die Einrichtung. Die Verbindung kann im Anschluss links in der Datenbank Übersicht hergestellt 
werden. Klicke dafür einmal einen Doppelklick auf deine Datenbank oder Rechtsklick und wähle "Öffne Verbindung":

![](https://screensaver01.zap-hosting.com/index.php/s/CHYEZW2Mrks6pHB/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/LHy9bieft62bKN7/preview)


Im Anschluss öffnet sich die Datenbank mit allen vorhandenen Datenbanktabellen. Dort kann nun deine Datenbank ähnlich wie in PhpMyAdmin sowohl per Klick als auch per SQL-Befehle verändert oder verwaltet werden. 
![](https://screensaver01.zap-hosting.com/index.php/s/8FaoQai8AriXZDz/preview)

<InlineVoucher />
