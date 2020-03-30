---
id: fivem_sql_file_import
title: SQL Dateiimport
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
die benötigte Ressource **MySQL-Ansync** installiert werden, damit eine Datenbank erstellt und genutzt werden kann.

![](https://puu.sh/Fo5WF/74b8db03f9.png)


Dort scrollst du herunter bis du den Punkt **Konfiguriere Datenbank** erreichst und stellst sicher dass dieser
auf **Yes, configure!** gesetzt ist. Danach scrollst Du zum Ende der Seite und klickst auf **Speichern** um die Einstellungen zu übernehmen.

![](https://puu.sh/Fo5ZN/d5fd796e36.png)


Nun navigieren wir zum Menüpunkt **Resources** und installieren dort, sofern dies noch nicht geschehen ist, die Resource **MySQL-Async**.

![](https://puu.sh/Fo68T/70b57a628c.png)


Die Datenbank ist nun konfiguriert und einsatzbereit.


## Vorbereiten der SQL Datei

In diesem Beispiel wird die SQL Datei für die Ressource **es_extended** in die Datenbank importiert.
Du öffnest den Ordner der Ressource und findest dort, sofern vorhanden, eine Datei mit der Dateiendung **.sql**.

![](https://puu.sh/Fo5LS/64e0758dc4.png)


> ACHTUNG! Öffne vor dem Import die .sql Datei mit einem beliebigen Editor und prüfe ob dort die folgenden Zeilen vorhanden sind:


![](https://puu.sh/Fo5NT/727de4c92a.png)


Ist dies der Fall, entferne vorher beide Zeilen da die SQL-Datei sonst nicht importiert werden kann.

**Erklärung:** Die erste zeile teilt dem Datenbankserver mit dass eine neue Datenbank mit dem Namen **essentialmode** erstellt werden soll.
Das wollen wir jedoch nicht da dein FiveM Gameserver bereits über eine Datenbank mit einem anderen Namen verfügt und wir diese nutzen wollen.
Die zweite Zeile weist den Datenbankserver an, die Datenbank mit dem Namen **essentialmode** für den Import zu nutzen, aber auch dies wollen wir nicht
da für den Import die bereits vorhandene Datenbank genutzt wird.

## Import der SQL Datei in die FiveM Datenbank

Die Datenbank deines Fivem Gameservers erreichst du über den Menüpunkt **Datenbanken** auf der linken Seite im Menü.

![](https://puu.sh/Fo6fa/ecba0dc960.png)


Die Datenbank selbst wird im weiteren über das Tool **phpmyadmin** verwaltet, dieses öffnest du mit einem Klick auf den blauen **Verwalten-Button**
auf der rechten Seite.

![](https://puu.sh/Fo6gj/bf5b9d4105.png)


In **phpmyadmin** angekommen wählst du zuerst deine Datenbank aus der Liste links via Linksklick aus. 

> Der Name deiner Datenbank beginnt **IMMER** mit zap!

![](https://puu.sh/Fo6mn/5da34ac4ca.png)


Deine Datenbank ist aktuell noch leer, das ändert sich in Kürze. Über den Menüpunkt **Importieren** im oberen Bereich von **phpmyadmin**
gelangst du zu den Importoptionen.

![](https://puu.sh/Fo6oE/6e3b9578b0.png)


Dort wählst du nun über den Punkt **Datei auswählen** deine SQL Datei aus, diese darf maximal 2MB groß sein!

**Tipp:** Für größere SQL Dateien kannst du einen sogenannten **SQL-Splitter** verwenden um eine große SQL Datei
in mehrere kleine SQL Dateien aufzuteilen. Ein Beispiel für einen **SQL-Splitter** ist folgender: [Pinetools SQL-Splitter](https://pinetools.com/split-files).

Nachdem du deine SQL-Datei ausgewählt hast, musst du nur noch auf **OK** klicken um den Importvorgang zu starten.

![](https://puu.sh/Fo6yI/af049b04a5.png)


Wenn alles funktionier hat, siehst du einige Erfolgsmeldungen, so wie auf der linken Seite deine neu erstellten Datenbankinhalte.


![](https://puu.sh/Fo6Am/78d0738b1d.png)


Du hast nun erfolgreich deine SQL Datei importiert.

