---
id: webspace_mybb
title: Webspace: MyBB Forensoftware installieren
description: Informationen, wie du die MyBulletinBoard Forensoftware auf deinen Webspace von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: MyBB installieren

---



## Was ist MyBB?

MyBB, ursprünglich MyBulletinBoard, ist eine freie und quelloffene Forensoftware, welche von der MyBB Group entwickelt wird. In dieser Anleitung erklären wir, wie diese Forensoftware auf unserem Webspace Produkt installiert werden kann. 

## MyBB einrichten

### Vorbereitung

Bevor die eigentliche Installation von MyBB durchgeführt werden kann, müssen gewisse Vorbereitungen vorgenommen werden. Dazu gehört das Besorgen der Forensoftware, die Einrichtung der zu verwendenden Datenbank und der Mailserver (E-Mail Adresse).



**Software**

Die Forensoftware  kann auf der offiziellen Webseite von MyBB heruntergeladen werden. Der Download dazu ist hier zu finden: [MyBB](https://mybb.com/download/)

![Bildschirmfoto vom 2022-05-15 23-16-59](https://user-images.githubusercontent.com/61953937/168512563-83fb02bd-ab40-4a8e-9178-8bf909614925.png)

Beim Download erhält man eine gepackte Datei, welche auf dem lokalen Computer entpackt werden muss. Darin befindet sich dann ein Ordner mit dem Namen **Upload**. Dessen Inhalt wird benötigt und muss entweder per **FTP oder Datei-Manager** hochgeladen werden. Unter **Websites & Domains** bei **FTP-Access** kannst du einen FTP-Benutzer anlegen.


Nach dem öffnen des Datei-Managers im Pleskpanel, navigieren wir in das **httpdocs** Verzeichnis und laden im Anschluss die Dateien der Forensoftware hoch.

![de-file](https://user-images.githubusercontent.com/61953937/168512586-31820a99-5b11-4f2f-a9c8-b110f81eb901.png)


**Datenbank**

Als Nächstes muss die Datenbank angelegt werden, in der später alle Informationen vom Forum gespeichert werden sollen. Klicke dazu wieder auf **Websites & Domains** und dann auf **Datenbanken**. Dort klicken wir dann auf Datenbank hinzufügen und legen eine Datenbank an: 

![de-db](https://user-images.githubusercontent.com/61953937/168512610-ed66b068-eac3-4ab2-ba36-1d1de1637ce2.png)

Im Anschluss auf **OK** klicken und schon wurde die Datenbank hinzugefügt.



**Mailserver (E-Mail Adresse)**

Um einen Account beim Forum zu registrieren wird ein Mailserver mit einer E-Mail-Adresse benötigt, damit die Registrierungsmails auch an die Benutzer verschickt werden können. Eine Anleitung zur Einrichtung solch einer E-Mail-Adresse findest du hier: [E-Mails verschicken](https://zap-hosting.com/guides/docs/de/webspace_plesk_sendmail/)



### Installation

Wenn alle Schritte von der Vorbereitung erfüllt wurden, dann kann mit der eigentlichen Einrichtung von MyBB begonnen werden. Dafür muss nun im Internetbrowser die Webseite aufgerufen werden. Das sieht dann so aus: 

![mybbinstall](https://user-images.githubusercontent.com/61953937/168512635-934c6160-229b-4123-82ea-e0f04977f3a4.png)


Dort angelangt, müssen wir bei der Einrichtung nun die 9 Kategorien konfigurieren. Während der Konfiguration wird geprüft, ob alle Voraussetzungen erfüllt wurden, die Datenbank und Forensoftware wird konfiguriert und so weiter. Zu Beginn muss allerdings erstmal festgelegt werden, ob anonyme Statistiken an MyBB weitergeleitet werden soll oder nicht. Im Anschluss müssen dann ebenfalls noch den Lizenz Bestimmungen noch zugestimmt werden. 

Anschließend sollte eine Übersicht aller notwendigen Voraussetzungen angezeigt werden. Standardmäßig sollten das Webspace bereits so konfiguriert sein, dass diese alle erfüllt werden.


![install2](https://user-images.githubusercontent.com/61953937/168512646-73f919f8-3aef-4dbf-b460-8f167590a88d.png)

Sollten irgendwelche Voraussetzungen nicht erfüllt werden, dann melde dich diesbezüglich bitte im Support. Ansonsten kannst du einfach auf **Weiter** klicken und die Einrichtung fortsetzen. Nun steht die Konfiguration der Datenbank an, welche bereits im Voraus erstellt wurde. Die Datenbank Informationen von der erstellten Datenbank müssen nun dort eingetragen werden: 

![image](https://user-images.githubusercontent.com/13604413/159177023-e839a466-f66e-4bdf-a11a-d505734eecfc.png)


Die Datenbank wird im Anschluss konfiguriert. Das kann einen Augenblick dauern. Im Anschluss erfolgt dann die Implementierung der Standard Daten und Designs. Hier musst du ebenfalls nur auf **Weiter** klicken.


Darauffolgend kommen wir dann schon zur allgemeinen Konfiguration. Hier kann nun der Name der, Website, Forum, URL und mehr definiert werden:


![install3](https://user-images.githubusercontent.com/61953937/168512663-c4d96d31-92a3-47c7-835e-a78c748d1dee.png)

Zu guter Letzt wird nun noch ein allgemeiner Administrator Account angelegt, bevor die Einrichtung dann endgültig abgeschlossen werden kann. 

![Install4](https://user-images.githubusercontent.com/61953937/168512681-4f7474c4-9c08-4fd1-90a0-e3707dcf09eb.png)

Wenn du das erledigt hast und auch ansonsten alles erfolgreich konfiguriert wurde, dann solltest du im Anschluss folgende Meldung sehen und dein Forum ebenfalls aufrufen können:

![image](https://user-images.githubusercontent.com/13604413/159177053-541b8e05-9fb5-4dfa-a536-ab1958a0f598.png)

![image](https://user-images.githubusercontent.com/13604413/159177056-647941dd-31f1-4c75-a656-da73c3edf2cc.png)
