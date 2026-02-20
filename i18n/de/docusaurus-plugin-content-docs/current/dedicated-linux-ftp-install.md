---
id: dedicated-linux-ftp-install
title: "ProFTPD auf einem Linux Server einrichten – Sicheren FTP-Service hosten"
description: "Entdecke, wie du einen sicheren FTP-Server auf Linux mit FileZilla Server einrichtest und verwaltest, um Dateiübertragungen und Benutzerzugriffe zu optimieren → Jetzt mehr erfahren"
sidebar_label: FTP-Server installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das **FTP (File Transfer Protocol)** ist ein Netzwerkprotokoll, das zum Übertragen von Dateien über ein TCP/IP-Netzwerk verwendet wird. Das Protokoll wurde entwickelt, um den einfachen Austausch von Dateien zwischen Systemen zu ermöglichen. Mit dem **FileZilla Server** kannst du einen solchen FTP-Server auf einem Linux-Betriebssystem einrichten. Der FileZilla Server ist einfach zu installieren und zu konfigurieren und bietet zahlreiche Features wie das Anlegen von Benutzerkonten, das Verwalten von Zugriffsrechten und das Übertragen von Dateien. In dieser Anleitung zeigen wir dir, wie du den **FileZilla Server** auf einem Linux-Gameserver installierst und konfigurierst.

## Wie installiere ich den FTP-Server und füge einen Benutzer hinzu?

Um einen FTP-Benutzer hinzuzufügen, musst du zuerst den FTP-Server installieren. Verbinde dich dafür einmal per SSH (z.B. mit Putty) mit deinem Server.

Um den FTP-Server zu installieren, gib folgenden Befehl ein: **apt-get install proftpd**. Bestätige die Abfrage mit **Y** und drücke Enter:

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

Jetzt müssen wir noch die Konfiguration anpassen. Öffne dazu die Konfigurationsdatei mit: **nano /etc/proftpd/proftpd.conf** und bestätige. Danach öffnet sich die Datei im Nano-Editor:

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

Folgende Einträge müssen hinzugefügt werden:

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

Jetzt muss der FTP-Server neu gestartet werden, damit die Änderungen wirksam werden. Das machst du mit dem Befehl: **service proftpd restart**

## Wie füge ich einen FTP-Benutzer hinzu?

Um einen neuen FTP-Benutzer anzulegen, müssen wir zuerst eine FTP-Gruppe erstellen. Das geht mit dem Befehl **addgroup ftpuser**. Das sieht dann so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

Jetzt können wir unseren ersten FTP-Benutzer mit den Befehlen **adduser benutzerftp -shell /bin/false -home /var/www** und anschließend **adduser benutzerftp ftpuser** hinzufügen.

Danach wirst du aufgefordert, ein Passwort zu vergeben:

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

Anschließend musst du bestätigen, dass die Eingaben korrekt sind:

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

Der letzte Schritt ist, den neuen Benutzer der Gruppe zuzuweisen via **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

Jetzt kannst du dich mit den eingerichteten Daten verbinden:

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)