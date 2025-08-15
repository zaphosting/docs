---
id: webspace-mybb
title: "Webspace: MyBB Forensoftware installieren"
description: Informationen, wie du die MyBulletinBoard Forensoftware auf deinen Webspace von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: MyBB installieren
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

MyBB, ursprünglich MyBulletinBoard, ist eine freie und quelloffene Forensoftware, welche von der MyBB Group entwickelt wird. In dieser Anleitung erklären wir, wie diese Forensoftware auf unserem Webspace Produkt installiert werden kann.

<InlineVoucher />

## Vorbereitung

Bevor die eigentliche Installation von MyBB durchgeführt werden kann, müssen gewisse Vorbereitungen vorgenommen werden. Dazu gehört das Besorgen der Forensoftware, die Einrichtung der zu verwendenden Datenbank und der Mailserver (E-Mail Adresse).



**Software**

Die Forensoftware kann auf der offiziellen Webseite von MyBB heruntergeladen werden. Der Download dazu ist hier zu finden: [MyBB](https://mybb.com/download/)

![Bildschirmfoto vom 2022-05-15 23-16-59](https://screensaver01.zap-hosting.com/index.php/s/n6HkkQmxSyJ2fek/preview)

Beim Download erhält man eine gepackte Datei, welche auf dem lokalen Computer entpackt werden muss. Darin befindet sich dann ein Ordner mit dem Namen **Upload**. Dessen Inhalt wird benötigt und muss entweder per **FTP oder Datei-Manager** hochgeladen werden. Unter **Websites & Domains** bei **FTP-Access** kannst du einen FTP-Benutzer anlegen.


Nach dem Öffnen des Datei-Managers im Pleskpanel, navigieren wir in das **httpdocs** Verzeichnis und laden im Anschluss die Dateien der Forensoftware hoch.

![](https://screensaver01.zap-hosting.com/index.php/s/MczCqJsjgifFd5G/preview)


**Datenbank**

Als Nächstes muss die Datenbank angelegt werden, in der später alle Informationen vom Forum gespeichert werden sollen. Klicke dazu wieder auf **Websites & Domains** und dann auf **Datenbanken**. Dort klicken wir dann auf Datenbank hinzufügen und legen eine Datenbank an: 

![](https://screensaver01.zap-hosting.com/index.php/s/7X2wZFSJeBTsyqG/preview)

Im Anschluss auf **OK** klicken und schon wurde die Datenbank hinzugefügt.



**Mailserver (E-Mail Adresse)**

Um einen Account beim Forum zu registrieren wird ein Mailserver mit einer E-Mail-Adresse benötigt, damit die Registrierungsmails auch an die Benutzer verschickt werden können. Eine Anleitung zur Einrichtung solch einer E-Mail-Adresse findest du hier: [E-Mails verschicken](webspace-plesk-sendmail.md)



## Installation

Wenn alle Schritte von der Vorbereitung erfüllt wurden, dann kann mit der eigentlichen Einrichtung von MyBB begonnen werden. Dafür muss nun im Internetbrowser die Webseite aufgerufen werden. Das sieht dann so aus: 

![](https://screensaver01.zap-hosting.com/index.php/s/q6yBdx9zdYza5BP/preview)


Dort angelangt, müssen wir bei der Einrichtung jetzt die 9 Kategorien konfigurieren. Während der Konfiguration wird geprüft, ob alle Voraussetzungen erfüllt wurden, die Datenbank und Forensoftware wird konfiguriert und so weiter. Zu Beginn muss allerdings erstmal festgelegt werden, ob anonyme Statistiken an MyBB weitergeleitet werden soll oder nicht. Im Anschluss müssen dann ebenfalls noch den Lizenzbestimmungen noch zugestimmt werden. 

Anschließend sollte eine Übersicht aller notwendigen Voraussetzungen angezeigt werden. Standardmäßig sollten das Webspace bereits so konfiguriert sein, dass diese alle erfüllt werden.


![install2](https://screensaver01.zap-hosting.com/index.php/s/E4gSmm4KrzFJxPK/preview)

Sollten irgendwelche Voraussetzungen nicht erfüllt werden, dann melde dich diesbezüglich bitte im Support. Ansonsten kannst du einfach auf **Weiter** klicken und die Einrichtung fortsetzen. Jetzt steht die Konfiguration der Datenbank an, welche bereits im Voraus erstellt wurde. Die Datenbankinformationen von der erstellten Datenbank müssen nun dort eingetragen werden: 

![](https://screensaver01.zap-hosting.com/index.php/s/ySCZWiPwWFWsFD2/preview)


Die Datenbank wird im Anschluss konfiguriert. Das kann einen Augenblick dauern. Im Anschluss erfolgt dann die Implementierung der Standard Daten und Designs. Hier musst du ebenfalls nur auf **Weiter** klicken.


Darauffolgend kommen wir dann schon zur allgemeinen Konfiguration. Hier kann nun der Name der, Website, Forum, URL und mehr definiert werden:


![install3](https://screensaver01.zap-hosting.com/index.php/s/x8D4wQCJ9PwgqMq/preview)

Zu guter Letzt wird nun noch ein allgemeiner Administrator Account angelegt, bevor die Einrichtung dann endgültig abgeschlossen werden kann. 

![Install4](https://screensaver01.zap-hosting.com/index.php/s/FgejewJkTxDC5j2/preview)

Wenn du das erledigt hast und auch ansonsten alles erfolgreich konfiguriert wurde, dann solltest du im Anschluss folgende Meldung sehen und dein Forum ebenfalls aufrufen können:

![](https://screensaver01.zap-hosting.com/index.php/s/e8btBkHP9Cd5nxt/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/kHTSpaESrJB7MMP/preview)

<InlineVoucher />
