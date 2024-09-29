---
id: dedicated-linux-ftp-install
title: "Dedicated Server: Installation eines FTP-Servers"
description: Informationen, wie du einen FTP Server auf deinen Dedicated Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: FTP Server installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das **FTP (File Transfer Protocol)** ist ein Netzwerkprotokoll, das dazu dient, Dateien über ein TCP/IP-Netzwerk zu übertragen. Das Protokoll wurde entwickelt, um den einfachen Austausch von Dateien zwischen Systemen zu ermöglichen. Mit dem **FileZilla Server** kann solch ein FTP-Server auf einem Linux Betriebssystem eingerichtet werden. Der FileZilla Server ist dabei einfach zu installieren und zu konfigurieren und bietet zahlreiche Funktionen wie die Möglichkeit, Benutzerkonten einzurichten, Zugriffsrechte zu verwalten und Dateien zu übertragen. In dieser Anleitung werden wir uns mit der Installation und Konfiguration des **FileZilla Server**-Dienstes auf einem Linux-Server beschäftigen.

<InlineVoucher />

## Wie installiere ich den FTP Server, und füge einen Nutzer hinzu? 

Als Erstes muss ein FTP Server installiert werden. Dafür verbindest du dich ein mal via SSH(Putty) mit dem Server.

Um den FTP Server nun zu installieren, gibst du folgendes ein **apt-get install proftpd**. Die Abfrage musst du dann noch mit einem **Y** und Enter bestätigen:

![](https://screensaver01.zap-hosting.com/index.php/s/r6y2AydtyCkPs2d/preview)

Jetzt müssen wir noch die Konfiguration anpassen. Dafür geben wir ein mal folgendes ein **nano /etc/proftpd/proftpd.conf** und bestätigen. Anschließend wird die Konfigurationsdatei im Nanoeditor geöffnet:

![](https://screensaver01.zap-hosting.com/index.php/s/b4NB48jYok4xKYm/preview)

Folgende Einträge müssen hinzugefügt werden: 

![](https://screensaver01.zap-hosting.com/index.php/s/fbnRMxCteweDjQi/preview)

Jetzt muss der FTP-Server neu gestartet werden, sodass die Änderungen übernommen werden. Dies kann man mit folgendem Befehl mache: **service proftpd restart**

## Wie füge ich einen FTP Nutzer hinzu? 

Um jetzt den neuen FTP Nutzer anzulegen, müssen wir erst eine FTP Gruppe erstellen. Dies machen wir mit dem Befehl **addgroup ftpuser**. Dies sieht dann so aus: 

![](https://screensaver01.zap-hosting.com/index.php/s/LaSfAQEyQmJNWbP/preview)


Jetzt können wir unseren ersten FTP Benutzer hinzufügen, mit den Befehlen: **adduser benutzerftp -shell /bin/false -home /var/www** und anschließend **adduser benutzerftp ftpuser**.

Nun werden wir aufgefordert, ein Passwort zu setzen: 

![](https://screensaver01.zap-hosting.com/index.php/s/qRDExHyDMsZb3rn/preview)


Anschließend müssen wir noch bestätigen, dass die Eingaben auch korrekt sind: 

![](https://screensaver01.zap-hosting.com/index.php/s/FMs2a5ZDQb8Ttsc/preview)

Als letzten Schritt müssen wir den neuen User nun noch der Gruppe zuweisen per **adduser benutzerftp ftpuser** :

![](https://screensaver01.zap-hosting.com/index.php/s/iyq7FzmFSrKtCb6/preview)

Nun können wir mit unseren angegebenen Informationen verbinden:

![](https://screensaver01.zap-hosting.com/index.php/s/T5jEf5c87DGjMLa/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/KXXNYKsM9TccKBt/preview)



