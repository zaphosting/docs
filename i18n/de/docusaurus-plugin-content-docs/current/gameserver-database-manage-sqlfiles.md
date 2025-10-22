---
id: gameserver-database-manage-sqlfiles
title: "Gameserver: SQL-Datei importieren oder exportieren"
description: "Entdecke, wie du deine Gameserver-Datenbank effizient verwaltest, indem du SQL-Dateien mit phpMyAdmin importierst und exportierst → Jetzt mehr erfahren"
sidebar_label: SQL-Dateien importieren/exportieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Viele Games für deinen Gameserver nutzen Datenbanken, um langfristige Daten zu speichern und richtig zu funktionieren. Manche Games, Ressourcen oder Mods liefern dir eine `.sql`-Datei, mit der du die passenden Tabellen und Daten in deine eigene Datenbank importieren kannst. Das Exportieren deiner Datenbank ist ebenfalls praktisch, um Daten zwischen Systemen zu übertragen oder einfach manuell Backups deiner Dateien zu erstellen. In dieser Anleitung zeigen wir dir, wie du SQL-Dateien in die Datenbank deines Gameservers importierst oder daraus exportierst – und zwar über die phpMyAdmin-Oberfläche.

<InlineVoucher />

## Vorbereitung

Zuerst musst du auf die MySQL-Datenbank deines Gameservers zugreifen, was direkt über die Weboberfläche möglich ist. Außerdem solltest du die `.sql`-Datei(en) bereit haben, die du importieren möchtest.

:::tip
Manche SQL-Dateien verlangen, dass ein bestimmter Datenbankname verwendet wird. Das kann mit dem automatisch vergebenen ZAP ID-Datenbanknamen kollidieren und Fehler verursachen.

Du erkennst solche Dateien, wenn du im Texteditor nach `USE xxx` oder `CREATE DATABASE` suchst. Falls das der Fall ist, solltest du diese Befehle entfernen und die Datei speichern, bevor du sie importierst.

![](https://screensaver01.zap-hosting.com/index.php/s/DRoDqGngrS7qbQW/preview)
:::

Gehe im Control Panel auf **Tools->Databases** und klicke auf den blauen Link-Button, um die phpMyAdmin-Oberfläche zu öffnen. Melde dich mit den Zugangsdaten an, die du auf deiner Webinterface-Seite findest.

![](https://screensaver01.zap-hosting.com/index.php/s/8ix7q4tHmPnyYSy/preview)

Mehr Infos zu phpMyAdmin findest du in unserer [Datenbank-Zugriffs-Anleitung](gameserver-databases-pma.md), die die Oberfläche ausführlich erklärt.

## SQL-Datei importieren

Nachdem du dich in phpMyAdmin eingeloggt hast, wähle die Hauptdatenbank aus, das sollte deine ZAP ID sein. Oben in der Navigationsleiste findest du den Bereich **Import**.

Auf dieser Seite klickst du auf den **Durchsuchen...**-Button, um den Datei-Explorer zu öffnen. Suche die SQL-Datei, die du importieren möchtest, und öffne sie.

:::note
Die maximale Dateigröße für deine SQL-Datei beträgt 2MB. Ist deine Datei größer, empfehlen wir dir einen SQL-Splitter wie den [Pinetools SQL-Splitter](https://pinetools.com/split-files), der die Datei in kleinere Teile aufteilt. Diese kannst du dann einzeln importieren.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/TgZZBaSJJmXraZc/preview)

Du kannst bei Bedarf noch weitere Einstellungen anpassen. Für die meisten reicht der Standard, also einfach runter scrollen und den **Importieren**-Button klicken.

Die SQL-Datei wird jetzt erfolgreich importiert und du solltest die Änderungen in der Datenbank sehen – z.B. neue Tabellen, Daten und mehr.

## SQL-Datei exportieren

Das Exportieren deiner Datenbank ist ebenfalls super wichtig, z.B. um Daten einfach zu übertragen oder Backups zu erstellen. Wähle wieder die Hauptdatenbank (deine ZAP ID) aus und klicke oben auf den Bereich **Export**.

Standardmäßig ist die **Schnell**-Exportmethode ausgewählt, die automatisch alle Tabellen und Daten exportiert. Wenn du genau einstellen willst, welche Tabellen und Daten exportiert werden, wähle **Benutzerdefiniert** und passe die Optionen nach deinen Wünschen an. Wenn alles passt, klickst du auf **Exportieren**, um die SQL-Datei lokal auf deinem System zu speichern.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa2HakWpYGpfzfA/preview)

## Fazit

Du hast deine Datenbank erfolgreich in eine SQL-Datei exportiert, sodass du sie in Zukunft ganz easy wieder importieren kannst. Falls du noch Fragen hast oder Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />