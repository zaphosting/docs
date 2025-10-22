---
id: gameserver-databases-pma
title: 'Gameserver: PHPMyAdmin Zugriff'
description: "Entdecke, wie du MySQL-Datenbanken mit phpMyAdmin auf ZAP-Hosting Gameservern effizient verwaltest für nahtlose Datenbankkontrolle → Jetzt mehr erfahren"
sidebar_label: PHPMyAdmin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Mit phpMyAdmin kannst du MySQL-Datenbanken schnell und einfach über eine Weboberfläche verwalten. ZAP-Hosting bietet MySQL-Datenbanken inklusive zu den Gameserver-Produkten an. Diese lassen sich sowohl mit phpMyAdmin als auch mit externen MySQL-Admin-Programmen wie Navicat oder HeidiSQL verwalten. Wir haben auch eine Anleitung dafür, die du unter [Externer Datenbankzugriff](gameserver-database-external-access.md) findest.

<InlineVoucher />

## Login bei phpMyAdmin

Zuerst gehen wir zur Liste der für den Gameserver erstellten Datenbanken. Dazu öffnen wir im linken Sidebar-Menü des Servers unter dem Reiter „Tools“ den Menüpunkt „Datenbanken“.

![](https://screensaver01.zap-hosting.com/index.php/s/ay9X6jBsCRWYdDB/preview)

Auf dieser Seite sind alle Datenbanken für diesen Server aufgelistet. Der Login bei phpMyAdmin ist ziemlich easy, da der Login automatisch von unserem System durchgeführt wird. Du musst nur auf den blauen Button „Verwalten“ klicken.

:::info
Falls der Login nicht automatisch funktioniert, muss der Login manuell mit den entsprechenden Zugangsdaten erfolgen. Die Infos dazu findest du im rot markierten Bereich in diesem Beispiel.
:::


## Tabellen-Tools

Zunächst wird nur die Startseite von phpMyAdmin angezeigt. Um die Tabellen der jeweiligen Datenbank anzusehen und zu bearbeiten, muss die Datenbank geöffnet werden:

![](https://screensaver01.zap-hosting.com/index.php/s/DFTDGKm47ngaB9R/preview)

Jetzt werden alle Tabellen der Datenbank und einige Tools angezeigt, mit denen du bestimmte Aktionen durchführen kannst, z.B. Tabellen löschen, indem du auf den roten „Löschen“-Button klickst.

![](https://screensaver01.zap-hosting.com/index.php/s/dkPqEj5xgQoHgHD/preview)

Um Zeit zu sparen, kannst du Aktionen auch auf mehrere Tabellen gleichzeitig anwenden. Klicke dazu einmal auf das Auswahlkästchen ganz links und wiederhole das, bis alle gewünschten Tabellen markiert sind. Wenn die Aktion auf alle Tabellen der Datenbank angewendet werden soll, kannst du auch den Button „Alle auswählen“ nutzen, der automatisch jede Tabelle markiert. Danach wählst du die gewünschte Aktion im Dropdown-Menü aus und führst sie mit „OK“ aus.

![](https://screensaver01.zap-hosting.com/index.php/s/Qip8TDLbeezT67F/preview)


## Tabelleninhalte bearbeiten

Werte in einer Tabelle kannst du schnell und einfach bearbeiten, indem du auf das jeweilige Feld doppelklickst. Dabei muss sichergestellt sein, dass die Tabelle so konfiguriert ist, dass eine Bearbeitung möglich ist. Erkennbar ist das an den drei Aktionsbuttons, die in diesem Fall angezeigt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/H7twJagPyR7L66w/preview)


## SQL-Befehle ausführen

Mit phpMyAdmin kannst du auch normale SQL-Befehle ausführen. Dazu muss zuerst die Datenbank ausgewählt werden und dann oben in der Menüleiste der Menüpunkt „SQL“ aufgerufen werden.

Im Eingabefeld kannst du dann alle gewünschten SQL-Befehle eingeben, die anschließend mit einem Klick auf „OK“ ausgeführt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/jJcmLGcXAfxQgkH/preview)

<InlineVoucher />