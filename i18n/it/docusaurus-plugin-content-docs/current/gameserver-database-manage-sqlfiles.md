---
id: gameserver-database-manage-sqlfiles
title: "Gameserver: SQL-Datei importieren oder exportieren"
description: "Entdecke, wie du deine Gameserver-Datenbank effizient mit phpMyAdmin verwaltest – SQL-Dateien importieren und exportieren → Jetzt mehr erfahren"
sidebar_label: SQL-Dateien importieren/exportieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Viele Games für deinen Gameserver nutzen Datenbanken, um langfristige Daten zu speichern und richtig zu funktionieren. Manche Games, Ressourcen oder Mods liefern dir eine `.sql`-Datei, mit der du die passenden Tabellen und Daten in deine eigene Datenbank importieren kannst. Das Exportieren deiner Datenbank ist ebenfalls praktisch, um Daten zwischen Systemen zu übertragen oder einfach manuell Backups zu erstellen. In diesem Guide zeigen wir dir, wie du SQL-Dateien über die phpMyAdmin-Oberfläche in deine Gameserver-Datenbank importierst und exportierst.

<InlineVoucher />

## Vorbereitung

Zuerst musst du auf die MySQL-Datenbank deines Gameservers zugreifen, was direkt über die Weboberfläche möglich ist. Außerdem solltest du die `.sql`-Datei(en) bereit haben, die du importieren möchtest.

:::tip
Manche SQL-Dateien verlangen eine bestimmte Datenbanknamen-Nutzung, was mit dem automatisch vergebenen ZAP ID-Datenbanknamen kollidieren und Fehler verursachen kann.

Du erkennst solche Dateien, wenn du im Texteditor nach `USE xxx` oder `CREATE DATABASE` suchst. Falls das der Fall ist, entferne diese Zeilen und speichere die Datei, bevor du sie importierst.

![](https://screensaver01.zap-hosting.com/index.php/s/DRoDqGngrS7qbQW/preview)
:::

Gehe in den Bereich **Tools->Datenbanken** und klicke auf den blauen Link-Button, um die phpMyAdmin-Oberfläche zu öffnen. Melde dich mit den Zugangsdaten an, die du auf deiner Webinterface-Seite findest.

![](https://screensaver01.zap-hosting.com/index.php/s/8ix7q4tHmPnyYSy/preview)

Mehr Infos zu phpMyAdmin findest du in unserem Guide [Datenbankzugriff](gameserver-databases-pma.md), der die Oberfläche ausführlich erklärt.

## SQL-Datei importieren

Nachdem du dich bei phpMyAdmin eingeloggt hast, wähle die Hauptdatenbank aus, das sollte deine ZAP ID sein. Oben in der Navigation findest du den Bereich **Importieren**.

Auf dieser Seite klickst du auf den Button **Durchsuchen...**, um den Datei-Explorer zu öffnen. Suche die SQL-Datei, die du importieren möchtest, und öffne sie.

:::note
Die maximale Dateigröße für SQL-Dateien liegt bei 2MB. Ist deine Datei größer, empfehlen wir Tools wie den [Pinetools SQL-Splitter](https://pinetools.com/split-files), um die Datei in kleinere Teile zu splitten. Diese kannst du dann einzeln importieren.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/TgZZBaSJJmXraZc/preview)

Du kannst bei Bedarf noch weitere Einstellungen anpassen. Für die meisten reicht aber die Standardkonfiguration, also scroll einfach runter und klicke auf **Importieren**.

Die SQL-Datei wird jetzt erfolgreich importiert und du solltest die Änderungen in der Datenbank sehen – z.B. neue Tabellen oder Daten.

## SQL-Datei exportieren

Das Exportieren deiner Datenbank ist super praktisch, um Daten einfach zu übertragen oder Backups zu erstellen. Wähle wieder deine Hauptdatenbank (deine ZAP ID) aus und gehe oben auf den Reiter **Exportieren**.

Standardmäßig ist die **Schnell**-Methode aktiviert, die automatisch alle Tabellen und Daten exportiert. Wenn du genau auswählen möchtest, was exportiert wird, wähle **Benutzerdefiniert** und passe die Optionen nach deinem Geschmack an. Wenn du fertig bist, klick auf **Exportieren**, um die SQL-Datei lokal auf deinem Rechner zu speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa2HakWpYGpfzfA/preview)

## Fazit

Du hast deine Datenbank erfolgreich als SQL-Datei exportiert und kannst sie so jederzeit einfach wieder importieren. Falls du Fragen hast oder Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />