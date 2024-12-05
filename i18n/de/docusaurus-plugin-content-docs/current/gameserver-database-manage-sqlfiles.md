---
id: gameserver-database-manage-sqlfiles
title: "Gameserver: Import oder Export einer SQL-Datei"
description: Informationen zum Importieren und Exportieren einer SQL-Datei in/aus der Datenbank für deinen Spielserver von ZAP-Hosting – ZAP-Hosting.com-Dokumentation
sidebar_label: Import/Export von SQL-Dateien
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Eine Vielzahl von Spielen für deinen Spieleserver verwendet Datenbanken, um Langzeitdaten zu speichern und ordnungsgemäß zu funktionieren. Einige Spiele, Ressourcen oder Mods stellen dir möglicherweise eine `.sql`-Datei zur Verfügung, mit der die entsprechenden Tabellen und Daten in deine eigene Datenbank importiert werden. Das Exportieren deiner Datenbank kann sich auch als nützlich erweisen, um deine Daten zwischen Systemen zu übertragen oder einfach deine Dateien manuell zu sichern. In dieser Anleitung werden wir den Prozess des Imports und Exports von SQL-Dateien in die bzw. aus der Datenbank deines Spielservers mithilfe der phpMyAdmin-Schnittstelle untersuchen.

<InlineVoucher />

## Vorbereitung

Zu Beginn musst du auf die MySQL-Datenbank deines Spielservers zugreifen, was direkt über die Webschnittstelle erfolgen kann. Du solltest auch eine oder mehrere `.sql`-Dateien bereithalten, die in deine Datenbank importiert werden müssen.

:::tip
Bestimmte SQL-Dateien können die Verwendung eines bestimmten Datenbanknamens erzwingen, was zu Konflikten mit dem ZAP-ID-Datenbanknamen führen kann, den du automatisch erhältst, und Fehler verursachen kann.

Du kannst eine solche Datei identifizieren, indem du beim Öffnen der Datei in einem Texteditor nach einer `USE xxx`- oder `CREATE DATABASE`-Anweisung suchst. Wenn dies der Fall ist, solltest du beide Anweisungen entfernen und die Datei vor dem Importieren speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/DRoDqGngrS7qbQW/preview)
:::

Gehe zum Abschnitt **Tools->Datenbanken** und öffne über die blaue Schaltfläche die phpMyAdmin-Benutzeroberfläche. Melde dich mit den Anmeldedaten auf deiner Web-Oberfläche an.

![](https://screensaver01.zap-hosting.com/index.php/s/8HgkfqBaw26XC5g/preview)

Um mehr über phpMyAdmin zu erfahren, empfehlen wir dir, unsere Anleitung [Datenbankzugriff](gameserver-databases-pma.md) zu lesen, der die Benutzeroberfläche ausführlicher behandelt.

## SQL-Datei importieren

Nachdem du dich bei der phpMyAdmin-Benutzeroberfläche angemeldet hast, wähle die Hauptdatenbank aus, die deine ZAP-ID sein sollte. Suche in der oberen Navigationsleiste den Abschnitt **Import**.

Verwende auf dieser Seite die Schaltfläche **Browse...**, um ein Datei-Explorer-Fenster zu öffnen. Suche darin die SQL-Datei, die du in deine Datenbank importieren möchtest, und öffne sie.

:::note
Die maximale Dateigröße für deine SQL-Datei beträgt 2 MB. Wenn deine Datei größer ist, empfehlen wir die Verwendung eines SQL-Splitters wie den [Pinetools SQL-Splitter](https://pinetools.com/split-files), der die Datei in kleinere Dateien aufteilt. Diese kannst du dann einzeln importieren.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/TgZZBaSJJmXraZc/preview)

Du kannst auch einige zusätzliche Einstellungen anpassen, wenn du möchtest. Für die meisten Benutzer sollten die Standardwerte akzeptabel sein, daher scrolle einfach nach unten und klicke auf die Schaltfläche **Import**.

Die SQL-Datei sollte nun erfolgreich importiert worden sein und in der Datenbank sollten sich Änderungen wie neue Tabellen, Daten usw. widerspiegeln.

## SQL-Datei exportieren

Das Exportieren deiner Datenbank ist eine weitere wichtige Funktion, die sich für die einfache Übertragung von Datenbanken oder für Sicherungskopien als nützlich erweisen kann. Wähle erneut die Hauptdatenbank aus, die deine ZAP-ID sein sollte, und suche den Abschnitt **Export** in der oberen Navigationsleiste.

Standardmäßig ist die **Quick**-Exportmethode ausgewählt, die automatisch alle deine Tabellen und Daten exportiert. Wenn du die zu exportierenden Tabellen und Daten individuell anpassen möchtest, wähle die Option **Custom** und passe die relevanten Parameter nach deinen Wünschen an. Wenn du fertig bist, kannst du einfach die Schaltfläche **Export** verwenden, um eine SQL-Datei lokal auf dein System herunterzuladen.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa2HakWpYGpfzfA/preview)

Du hast deine Datenbank erfolgreich in eine SQL-Datei exportiert, sodass du sie in Zukunft einfach importieren kannst.