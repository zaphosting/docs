---
id: redm-sql-file-import
title: "RedM: SQL-Datei importieren"
description: Informationen zum Import von SQL-Dateien in die Datenbank deines RedM-Servers von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: SQL-Datei importieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Einführung

Viele der Ressourcen für RedM benötigen eine Datenbank, um ordnungsgemäß zu funktionieren. Daher ist es wichtig, dass du die mit deinen Ressourcen gelieferten SQL-Dateien korrekt in deine Datenbank importierst, um sicherzustellen, dass die Ressourcen Einträge in deiner Datenbank erstellen können und wie erwartet funktionieren.

:::info 
Nicht alle Ressourcen benötigen eine Datenbank, um zu funktionieren! Wenn du eine Ressource herunterlädst, überprüfe die Beschreibung oder Dokumentation, um herauszufinden, ob du eine SQL-Datei importieren musst.
:::

In vielen Fällen sind in den Download-Dateien für die Ressource eine oder mehrere Dateien mit der Dateierweiterung **.sql** enthalten. Diese müssen in die Datenbank importiert werden.

## Vorbereiten der SQL-Datei

In diesem Beispiel werden wir die SQL-Datei für das RP-Framework **RedEM** importieren. Du solltest die SQL-Datei für die Ressource vorbereiten, die du importieren möchtest. Öffne dazu den Ordner deiner Ressource, die eine Datenbank benötigt und suche eine Datei mit der Dateiendung **.sql**.

![](https://github.com/zaphosting/docs/assets/42719082/331d2a3d-0d81-4b39-8ad6-d0aba84ff19c)

:::info 
Bevor du mit dem Import fortfährst, solltest du die .sql-Datei mit einem beliebigen Texteditor öffnen und überprüfen, ob die folgenden Zeilen vorhanden sind:

![](https://github.com/zaphosting/docs/assets/42719082/dfc43c55-9918-45e7-99eb-1f70193c0be1)

Wenn diese in deiner .sql Datei vorhanden ist, stelle sicher, dass du die `CREATE` und `USE` Datenbankzeilen entfernst und die Datei speicherst, sonst kann die SQL Datei nicht importiert werden. 

Das liegt daran, dass die erste Zeile angibt, dass eine neue Datenbank erstellt werden soll, die du aber nicht brauchst, da dein RedM Gameserver bereits eine Datenbank mit einem anderen Namen hat. In der zweiten Zeile wird angegeben, dass die Datenbank mit dem Namen `essentialmode` für den Import verwendet werden soll, aber auch dies ist nicht notwendig, da es bereits eine Datenbank gibt, die du zum Importieren verwenden wirst.
:::

## Importieren der SQL-Datei in deine Datenbank

Du solltest nun auf den Abschnitt **Datenbank** im Webinterface deines Gameservers zugreifen.

![](https://github.com/zaphosting/docs/assets/42719082/83ba522a-929e-4a90-8c9e-0badc2d779d4)


Auf der Datenbankseite findest du eine Reihe von verschiedenen Funktionen zur Verwaltung deiner Datenbank, einschließlich der Optionen zum Sichern, Erstellen, Verwalten und mehr. Wir werden uns auf den Zugriff auf deine Datenbank konzentrieren, wirf jedoch einen Blick auf unsere anderen Datenbankanleitungen, wenn du mehr Informationen benötigst: [Externer Datenbankzugriff](gameserver-database-external-access.md).


Klicke auf das blaue Icon für die Weiterleitung, das dich zum Tool **phpmyadmin** führt, mit dem du ganz einfach auf deine Datenbank zugreifen kannst. Melde dich mit den Anmeldedaten an, die du auf der Datenbank-Seite erhalten hast, wenn du dazu aufgefordert wirst.

Sobald du auf der Seite bist, wähle deine Datenbank aus der Liste auf der linken Seite. Der Name deiner Datenbank beginnt **immer** mit `zap` als Präfix.

![](https://github.com/zaphosting/docs/assets/42719082/30fa6041-b94e-4ac8-a3cd-286cca226dba)

Im Moment ist deine Datenbank noch leer, wenn du sie noch nicht benutzt hast. Importiere nun die SQL-Datei. Klicken auf den Button **Importieren** in der oberen Navigationsleiste von phpmyadmin, um das Importmenü zu öffnen. 

![](https://github.com/zaphosting/docs/assets/42719082/c0ca30f0-c520-4a71-843a-296064ba5761)

Als Nächstes solltest du auf den Button **Durchsuchen...** klicken, wodurch sich ein Datei-Explorer-Fenster öffnet. Wähle die **SQL-Datei** aus, die du importieren möchtest.

![](https://github.com/zaphosting/docs/assets/42719082/02d09225-a68d-498b-a2bd-df57386ce242)

:::note
Die maximale Dateigröße beträgt 2 MB. Wenn du eine größere SQL-Datei hast, solltest du einen SQL-Splitter verwenden, um eine große SQL-Datei in kleinere Teile aufzuteilen. Wir empfehlen das Tool [Pinetools SQL-Splitter] (https://pinetools.com/split-files), das dies für dich erledigt. Danach kannst du die SQL-Dateien wie gewohnt importieren.
:::

Klicke abschließend auf den Button **Importieren** am unteren Ende der Seite, um den Importvorgang zu starten. Wenn alles richtig funktioniert hat, erhältst du eine Erfolgsmeldung und es wird eine neue Tabelle in deiner Datenbank erstellt, die du auf der linken Seite sehen kannst.

![](https://github.com/zaphosting/docs/assets/42719082/5fef5d58-78f1-4b59-bc3e-1e0af2ff981b)

## Abschluss

Das Importieren von SQL Dateien für deinen RedM Server ist nötig, um viele ressourcen problemlos nutzen zu könnnen. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂