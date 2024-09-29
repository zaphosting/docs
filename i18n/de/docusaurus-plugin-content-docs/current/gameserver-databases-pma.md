---
id: gameserver-databases-pma
title: 'Gameserver: phpMyAdmin Zugriff'
description: Informationen, wie du phpMyAdmin mit Gameservern von ZAP-Hosting verwenden kannst, um die Datenbanken zu verwalten - ZAP-Hosting.com Dokumentation
sidebar_label: PHPMyAdmin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mit phpMyAdmin können MySQL Datenbanken schnell und einfach über eine Art Webinterface verwaltet werden.
Bei den Gameserver Produkten bietet ZAP-Hosting MySQL Datenbanken inklusive an. Diese können sowohl mittels phpMyAdmin als auch über externen MySQL-Verwaltungsprogrammen wie zum Beispiel Navicat oder HeidiSQL verwaltet werden. Hier halten wir ebenfalls einen Eintrag in unserer Dokumentation bereit, welcher [Externer Datenbankzugriff](gameserver-database-external-access.md) gefunden werden kann.

<InlineVoucher />

## Anmeldung in PhpMyAdmin

Zunächst begeben wir uns zu der Liste der Datenbanken, welche für den Gameserver erstellt wurden. Dazu öffnen wir in der linken Sidebar des Servers unter dem Reiter "Werkzeuge" den Menü-Punkt "Datenbanken".

![](https://screensaver01.zap-hosting.com/index.php/s/WkEymiJP4ec3StT/preview)

Auf der Seite sind nun alle Datenbanken zu diesem Server aufgelistet. Die Anmeldung in phpMyAdmin gestaltet sich durch unser System sehr einfach, da die Anmeldung automatisch durch uns erfolgt. Hierzu ist nur ein Klick auf den blauen Button "Verwalten" nötig.

:::info
Sollte die Anmeldung einmal doch nicht automatisch funktionieren, so muss die manuelle Anmeldung mit den jeweiligen Zugangsdaten durchgeführt werden.

Die Daten dazu können in diesem Beispiel aus dem rot markierten Bereich entnommen werden.
:::


## Tabellen-Tools

Zunächst wird nur die Startseite von phpMyAdmin angezeigt. Um die Tabellen in der jeweiligen Datenbank nun einsehen und bearbeiten zu können, muss die Datenbank mit einem einfachen Klick geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/7xeLT6TNEafQw9H/preview)

Jetzt werden alle Tabellen in der Datenbank aufgelistet und bereit einige Tools angezeigt, womit bereits einige Aktionen durchgeführt werden können.
Beispielsweise können Tabellen mit einem Klick auf den roten "Löschen" Button so gelöscht werden.

![](https://screensaver01.zap-hosting.com/index.php/s/ZMxKzHP3BHGYEzf/preview)

Um Zeit zu sparen, können auch auf mehrere Tabellen gleichzeitig Aktionen durchgeführt werden.
Hierzu klick man das Auswahlkästchen an der äußeren linken Seite einmal an und wiederholt dies dann so oft, bis alle gewünschten Tabellen ausgewählt wurden.
Sofern die Aktion auf alle Tabellen in der Datenbank angewendet werden soll, kann auch der Button "Alle auswählen" verwendet werden, wodurch jede Tabelle automatisch ausgewählt wird. Danach kann über das Dropdown-Menü die gewünschte Aktion ausgewählt werden und mit einem Klick auf "OK" ausgeführt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/MgexrKaYx3D5PR7/preview)

## Tabellen-Inhalte bearbeiten

Inhalte in einer Tabelle können schnell und einfach mit einem Doppelklick auf das jeweilige Feld bearbeitet werden.
Hierzu muss aber sichergestellt werden, dass die Tabelle so konfiguriert ist, dass die Bearbeitung auch möglich ist.
Dies kann aber an den drei Aktions-Buttons erkennen, welche in diesem Fall dargestellt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/xe4Qm9cNB3L9BX4/preview)

## SQL-Befehle ausführen

Über phpMyAdmin ist es ebenfalls möglich normale SQL-Befehle auszuführen, wie etwa manuell via SSH.
Hierzu muss die Datenbank **zuvor** in der linken Liste einmal angeklickt werden, worauf dann oben in der Menü-Leiste der Punkt "SQL" geöffnet werden kann und zur Befehlseingabe gelangen.

In der Befehlseingabe angekommen, können dort nun alle gewünschten SQL-Befehle eingetragen werden, welche dann im Anschluss mit einem Klick auf "OK" ausgeführt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/9jrZfEer2rRjdgX/preview)
