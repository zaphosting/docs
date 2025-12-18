---
id: gameserver-database-external-access
title: 'Gameserver: Externer Datenbankzugriff'
description: "Entdecke, wie du ZAP-Hosting MySQL-Datenbanken für Gameserver mit Tools wie Navicat oder HeidiSQL verwaltest → Jetzt mehr erfahren"
sidebar_label: Externer Datenbankzugriff
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

ZAP-Hosting bietet MySQL-Datenbanken inklusive für die Gameserver-Produkte an. Diese können entweder intern über phpMyAdmin oder extern über MySQL-Admin-Tools wie Navicat oder HeidiSQL verwaltet werden.

Für den Zugriff auf die Datenbank werden die Benutzerzugangsdaten benötigt. Diese findest du in der Gameserver-Verwaltung unter Datenbanken. Dafür brauchst du die Infos zu **Server/IP**, **Datenbank**, **Benutzer**, **Passwort** und dem Standardport **3306**:

![](https://screensaver01.zap-hosting.com/index.php/s/GLG56HQ737rNC7R/preview)

<InlineVoucher />

## Vorbereitung

Zuerst brauchst du eine Software, in diesem Beispiel zeigen wir [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) oder [HeidiSQL](https://www.heidisql.com/download.php). Danach muss die heruntergeladene Datei ausgeführt und die Installation durchlaufen werden. Wenn das erledigt ist, kannst du das Programm starten und die Verbindung zur Datenbank konfigurieren.

## HeidiSQL

Damit die Verbindung in HeidiSQL klappt, erstellen wir eine neue Verbindung mit „Neu“.

![](https://screensaver01.zap-hosting.com/index.php/s/CgwFCeHErLAokHo/preview)

Bei Hostname / IP gibst du den Namen deiner Datenbank ein, in unserem Beispiel „mysql-mariadb-5-101.zap-hosting.com“.
Benutzername und Passwort holst du ebenfalls aus den Daten, der Port bleibt auf 3306.

Danach einfach auf „Öffnen“ klicken.

## Navicat

Um die Verbindung in Navicat herzustellen, erstellen wir eine neue Verbindung. Unter **Verbindung** wählen wir **MySQL** aus. Danach öffnet sich ein weiteres Fenster, in das die Datenbankinformationen eingetragen werden müssen.

![](https://screensaver01.zap-hosting.com/index.php/s/rFBDYidqnBc4TZB/preview)

Der **Verbindungsname** dient nur zur Übersicht deiner Datenbanken und kann frei gewählt werden. Alle anderen Infos nimmst du aus der Oberfläche, wie oben beschrieben. Anschließend klickst du auf **OK** und die Einrichtung ist abgeschlossen. Die Verbindung kannst du dann links in der Datenbankübersicht herstellen. Dazu doppelklickst du auf deine Datenbank oder machst einen Rechtsklick und wählst „Verbindung öffnen“:

![](https://screensaver01.zap-hosting.com/index.php/s/Gy7jjBDHiR5n5gn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WyqzoLaEP6yQn85/preview)

Danach öffnet sich die Datenbank mit allen vorhandenen Tabellen. Dort kannst du deine Datenbank jetzt ähnlich wie bei phpMyAdmin per Klick oder mit SQL-Befehlen bearbeiten und verwalten.
![](https://screensaver01.zap-hosting.com/index.php/s/FxDrm2K3f7YwLqS/preview)

## Fazit

Du hast erfolgreich eine Verbindung zu deiner Datenbank hergestellt und kannst sie jetzt verwalten. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂 

<InlineVoucher />