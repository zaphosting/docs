---
id: fivem-sql-file-import
title: "FiveM: SQL-Datei importieren"
description: "Verstehe, wie du SQL-Dateien richtig importierst, damit deine FiveM-Ressourcen korrekt mit deiner Datenbank funktionieren → Jetzt mehr erfahren"
sidebar_label: SQL-Datei importieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Viele Ressourcen für FiveM benötigen eine Datenbank, um richtig zu funktionieren. Deshalb ist es wichtig, dass du die mit deinen Ressourcen gelieferten SQL-Dateien korrekt in deine Datenbank importierst, damit die Ressourcen Einträge in deiner Datenbank erstellen und wie erwartet funktionieren können.

:::info
Nicht alle Ressourcen benötigen eine Datenbank, um zu funktionieren! Wenn du eine Ressource herunterlädst, check die Beschreibung oder Dokumentation, um herauszufinden, ob du eine SQL-Datei importieren musst.
:::

In vielen Fällen sind eine oder mehrere Dateien mit der Dateiendung **.sql** in den Download-Dateien der Ressource enthalten. Diese müssen in die Datenbank importiert werden.

<InlineVoucher />

## Vorbereitung der SQL-Datei

In diesem Beispiel importieren wir die SQL-Datei für **ESX**. Du solltest die SQL-Datei für die Ressource vorbereiten, für die du sie importieren möchtest. Öffne dazu den Ordner deiner Ressource, die eine Datenbank benötigt, und suche nach einer Datei mit der Endung **.sql**.

![](https://screensaver01.zap-hosting.com/index.php/s/3YMrCZ29pc87aW8/preview)

:::info
Bevor du mit dem Import fortfährst, öffne die .sql-Datei mit einem beliebigen Texteditor und prüfe, ob folgende Zeilen vorhanden sind:

![](https://screensaver01.zap-hosting.com/index.php/s/wXLmBpmiwYp3Zzo/preview)

Falls diese Zeilen in deiner .sql-Datei vorhanden sind, entferne unbedingt die `CREATE` und `USE` Datenbank-Zeilen und speichere die Datei, sonst kann die SQL-Datei nicht importiert werden.

Der Grund: Die erste Zeile legt fest, dass eine neue Datenbank erstellt werden soll, was du nicht brauchst, da dein FiveM Gameserver bereits eine Datenbank mit einem anderen Namen hat. Die zweite Zeile legt fest, dass die Datenbank mit dem Namen `essentialmode` verwendet werden soll, was ebenfalls nicht nötig ist, da du eine bestehende Datenbank für den Import nutzt.
:::

## SQL-Datei in deine Datenbank importieren

Jetzt solltest du den Bereich **Datenbank** in deinem Gameserver-Webinterface aufrufen.

![](https://screensaver01.zap-hosting.com/index.php/s/jk6BBm4d5dDtNcd/preview)

Auf der Datenbank-Seite findest du verschiedene Funktionen zur Verwaltung deiner Datenbank, darunter Optionen zum Backup, Erstellen, Verwalten und mehr. Wir konzentrieren uns hier auf den Zugriff auf deine Datenbank. Für mehr Infos schau dir gerne unsere anderen Datenbank-Anleitungen an: [Externer Datenbankzugriff](gameserver-database-external-access.md).

Drücke das blaue Weiterleitungs-Icon, das dich zum Tool **phpMyAdmin** bringt, wo du deine Datenbank einfach verwalten kannst. Melde dich mit den Zugangsdaten an, die dir auf der Datenbank-Seite angezeigt werden, falls du danach gefragt wirst.

Auf der Seite wählst du deine Datenbank aus der Liste links aus. Der Name deiner Datenbank beginnt **immer** mit dem Präfix `zap`.

![](https://screensaver01.zap-hosting.com/index.php/s/Qx37APa9233B7zt/preview)

Falls du die Datenbank noch nicht benutzt hast, ist sie aktuell leer. Jetzt kannst du endlich die .sql-Datei importieren.

Drücke oben in der Navigationsleiste von phpMyAdmin auf den Button **Importieren**, um das Import-Menü zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/McfzS8DraJsXPTZ/preview)

Klicke dann auf den Button **Durchsuchen...**, der einen Datei-Explorer öffnet. Wähle die **.sql**-Datei aus, die du importieren möchtest.

![](https://screensaver01.zap-hosting.com/index.php/s/cfTYGYfFGMEyQbA/preview)

:::note
Die maximale Dateigröße beträgt 2MB. Wenn deine SQL-Datei größer ist, solltest du einen SQL-Splitter verwenden, um die große Datei in kleinere Teile zu teilen. Wir empfehlen das Tool [Pinetools SQL-Splitter](https://pinetools.com/split-files), das dir dabei hilft. Danach kannst du die SQL-Dateien ganz normal importieren.
:::

Zum Schluss drückst du unten auf der Seite den Button **Importieren**, um den Import zu starten. Wenn alles geklappt hat, bekommst du eine Erfolgsmeldung und es wird eine neue Tabelle in deiner Datenbank erstellt, die du links sehen kannst.

![](https://screensaver01.zap-hosting.com/index.php/s/iyobgkNtQpnNjoH/preview)

## Abschluss

Das Importieren einer SQL-Datei für deinen FiveM Gameserver ist notwendig, um viele Ressourcen problemlos nutzen zu können. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung! 🙂

<InlineVoucher />