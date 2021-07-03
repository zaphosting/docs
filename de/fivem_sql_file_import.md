---
id: fivem_sql_file_import
title: FiveM Server: SQL Dateiimport
description: Informationen, wie du SQL-Dateien in die Datenbank deines FiveM-Server von ZAP-Hosting importieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: SQL Dateiimport
---

## Importieren von SQL Dateien in die Datenbank von FiveM

Viele Ressourcen für FiveM benötigen Einträge in der Datenbank deines FiveM Servers um richtig funktionieren zu können.
Um so wichtiger ist es, die SQL Dateien von Ressourcen korrekt in deine Datenbank zu importieren um somit die von den Ressourcen benötigten 
Einträge in der Datenbank deines FiveM Servers zu erstellen.

> Nicht alle Ressourcen benötigen den Import einer SQL Datei in die Datenbank um zu funktionieren! Wenn du dir eine Ressource herunter lädst,
liegt dort jedoch in vielen Fällen eine oder mehrere Dateien mit der Dateiendung **.sql** bei, diese müssen dann in die Datenbank importiert werden.

## Vorbereitung und Einrichtung der Datenbank

In den Einstellungen deines FiveM Servers muss zu Beginn die Option **Konfiguriere Datenbank** aktiviert und 
die benötigte Ressource **MySQL-Async** installiert werden, damit eine Datenbank erstellt und genutzt werden kann.

![](https://screensaver01.zap-hosting.com/index.php/s/J6WjWF9Q4ZApE8t/preview)


Dort scrollst du herunter bis du den Punkt **Konfiguriere Datenbank** erreichst und stellst sicher dass dieser
auf **Yes, configure!** gesetzt ist. Danach scrollst Du zum Ende der Seite und klickst auf **Speichern** um die Einstellungen zu übernehmen.

![](https://screensaver01.zap-hosting.com/index.php/s/Qmg5jtG9mWDZ5G8/preview)


Nun navigieren wir zum Menüpunkt **Resources** und installieren dort, sofern dies noch nicht geschehen ist, die Resource **MySQL-Async**.

![](https://screensaver01.zap-hosting.com/index.php/s/iNMwLf4ffkpWKLy/preview)


Die Datenbank ist nun konfiguriert und einsatzbereit.


## Vorbereiten der SQL Datei

In diesem Beispiel wird die SQL Datei für die Ressource **es_extended** in die Datenbank importiert.
Du öffnest den Ordner der Ressource und findest dort, sofern vorhanden, eine Datei mit der Dateiendung **.sql**.

![](https://screensaver01.zap-hosting.com/index.php/s/Dqc2zNGYnd7CTk2/preview)


> ACHTUNG! Öffne vor dem Import die .sql Datei mit einem beliebigen Editor und prüfe ob dort die folgenden Zeilen vorhanden sind:


![](https://screensaver01.zap-hosting.com/index.php/s/KjyrB8zWAeMQLwP/preview)


Ist dies der Fall, entferne vorher beide Zeilen da die SQL-Datei sonst nicht importiert werden kann.

**Erklärung:** Die erste zeile teilt dem Datenbankserver mit dass eine neue Datenbank mit dem Namen **essentialmode** erstellt werden soll.
Das wollen wir jedoch nicht da dein FiveM Gameserver bereits über eine Datenbank mit einem anderen Namen verfügt und wir diese nutzen wollen.
Die zweite Zeile weist den Datenbankserver an, die Datenbank mit dem Namen **essentialmode** für den Import zu nutzen, aber auch dies wollen wir nicht
da für den Import die bereits vorhandene Datenbank genutzt wird.

## Import der SQL Datei in die FiveM Datenbank

Die Datenbank deines Fivem Gameservers erreichst du über den Menüpunkt **Datenbanken** auf der linken Seite im Menü.

![](https://screensaver01.zap-hosting.com/index.php/s/mR82WJ8Q8Ha5Txo/preview)


Die Datenbank selbst wird im weiteren über das Tool **phpmyadmin** verwaltet, dieses öffnest du mit einem Klick auf den blauen **Verwalten-Button**
auf der rechten Seite.

![](https://screensaver01.zap-hosting.com/index.php/s/XcMWRKoXRsSN9s9/preview)


In **phpmyadmin** angekommen wählst du zuerst deine Datenbank aus der Liste links via Linksklick aus. 

> Der Name deiner Datenbank beginnt **IMMER** mit zap!

![](https://screensaver01.zap-hosting.com/index.php/s/T8DW7Jz8E5nfiZ9/preview)


Deine Datenbank ist aktuell noch leer, das ändert sich in Kürze. Über den Menüpunkt **Importieren** im oberen Bereich von **phpmyadmin**
gelangst du zu den Importoptionen.

![](https://screensaver01.zap-hosting.com/index.php/s/brD4GYnbTxxH35H/preview)


Dort wählst du nun über den Punkt **Datei auswählen** deine SQL Datei aus, diese darf maximal 2MB groß sein!

**Tipp:** Für größere SQL Dateien kannst du einen sogenannten **SQL-Splitter** verwenden um eine große SQL Datei
in mehrere kleine SQL Dateien aufzuteilen. Ein Beispiel für einen **SQL-Splitter** ist folgender: [Pinetools SQL-Splitter](https://pinetools.com/split-files).

Nachdem du deine SQL-Datei ausgewählt hast, musst du nur noch auf **OK** klicken um den Importvorgang zu starten.

![](https://screensaver01.zap-hosting.com/index.php/s/DW2tcLgk59bCo6M/preview)


Wenn alles funktionier hat, siehst du einige Erfolgsmeldungen, so wie auf der linken Seite deine neu erstellten Datenbankinhalte.


![](https://screensaver01.zap-hosting.com/index.php/s/Zm2bYCZpz28e6db)


Du hast nun erfolgreich deine SQL Datei importiert.

