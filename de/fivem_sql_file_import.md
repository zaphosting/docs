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

![image](https://user-images.githubusercontent.com/13604413/159168765-ce6eb80a-71eb-4e3a-8834-ed0e50da1ebe.png)


Dort scrollst du herunter bis du den Punkt **Konfiguriere Datenbank** erreichst und stellst sicher dass dieser
auf **Yes, configure!** gesetzt ist. Danach scrollst Du zum Ende der Seite und klickst auf **Speichern** um die Einstellungen zu übernehmen.

![image](https://user-images.githubusercontent.com/13604413/159168774-3302004e-4b6f-4c58-809b-c40cb2a14901.png)


Nun navigieren wir zum Menüpunkt **Resources** und installieren dort, sofern dies noch nicht geschehen ist, die Resource **MySQL-Async**.

![image](https://user-images.githubusercontent.com/13604413/159168777-0d4102db-8568-4751-a0b0-a4329ddc9a2d.png)


Die Datenbank ist nun konfiguriert und einsatzbereit.


## Vorbereiten der SQL Datei

In diesem Beispiel wird die SQL Datei für die Ressource **es_extended** in die Datenbank importiert.
Du öffnest den Ordner der Ressource und findest dort, sofern vorhanden, eine Datei mit der Dateiendung **.sql**.

![image](https://user-images.githubusercontent.com/13604413/159168782-da143379-084a-47d7-b466-8c7dbd22e1d8.png)


> ACHTUNG! Öffne vor dem Import die .sql Datei mit einem beliebigen Editor und prüfe ob dort die folgenden Zeilen vorhanden sind:


![image](https://user-images.githubusercontent.com/13604413/159168784-570f0855-173d-4e1f-8a05-5a17e06d1daf.png)


Ist dies der Fall, entferne vorher beide Zeilen da die SQL-Datei sonst nicht importiert werden kann.

**Erklärung:** Die erste zeile teilt dem Datenbankserver mit dass eine neue Datenbank mit dem Namen **essentialmode** erstellt werden soll.
Das wollen wir jedoch nicht da dein FiveM Gameserver bereits über eine Datenbank mit einem anderen Namen verfügt und wir diese nutzen wollen.
Die zweite Zeile weist den Datenbankserver an, die Datenbank mit dem Namen **essentialmode** für den Import zu nutzen, aber auch dies wollen wir nicht
da für den Import die bereits vorhandene Datenbank genutzt wird.

## Import der SQL Datei in die FiveM Datenbank

Die Datenbank deines Fivem Gameservers erreichst du über den Menüpunkt **Datenbanken** auf der linken Seite im Menü.


![image](https://user-images.githubusercontent.com/13604413/159168788-e4899697-48e4-4d14-baa6-e4e37ff1a72e.png)


Die Datenbank selbst wird im weiteren über das Tool **phpmyadmin** verwaltet, dieses öffnest du mit einem Klick auf den blauen **Verwalten-Button**
auf der rechten Seite.

![image](https://user-images.githubusercontent.com/13604413/159168791-f5c360cf-ca61-4b91-86b7-cf76d868ea62.png)


In **phpmyadmin** angekommen wählst du zuerst deine Datenbank aus der Liste links via Linksklick aus. 

> Der Name deiner Datenbank beginnt **IMMER** mit zap!

![image](https://user-images.githubusercontent.com/13604413/159168811-626eba00-b7b3-4c45-894e-ca497571b2d7.png)


Deine Datenbank ist aktuell noch leer, das ändert sich in Kürze. Über den Menüpunkt **Importieren** im oberen Bereich von **phpmyadmin**
gelangst du zu den Importoptionen.

![image](https://user-images.githubusercontent.com/13604413/159168816-f4f95697-782d-4bfa-b78c-4f2b7bc3c6fe.png)


Dort wählst du nun über den Punkt **Datei auswählen** deine SQL Datei aus, diese darf maximal 2MB groß sein!

**Tipp:** Für größere SQL Dateien kannst du einen sogenannten **SQL-Splitter** verwenden um eine große SQL Datei
in mehrere kleine SQL Dateien aufzuteilen. Ein Beispiel für einen **SQL-Splitter** ist folgender: [Pinetools SQL-Splitter](https://pinetools.com/split-files).

Nachdem du deine SQL-Datei ausgewählt hast, musst du nur noch auf **OK** klicken um den Importvorgang zu starten.

![image](https://user-images.githubusercontent.com/13604413/159168819-a12db25e-dee1-42a1-9b83-1653900e5be2.png)


Wenn alles funktionier hat, siehst du einige Erfolgsmeldungen, so wie auf der linken Seite deine neu erstellten Datenbankinhalte.


![image](https://user-images.githubusercontent.com/13604413/159168822-94541dda-2c21-428f-9c31-d0a5b965e1e3.png)


Du hast nun erfolgreich deine SQL Datei importiert.

