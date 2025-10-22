---
id: dedicated-linux-ftp-install
title: "Dedicated Server: Installation eines FTP-Servers"
description: "Entdecke, wie du einen sicheren FTP-Server auf Linux mit FileZilla Server einrichtest und verwaltest, um Dateiübertragungen und Benutzerzugriffe zu optimieren → Jetzt mehr erfahren"
sidebar_label: FTP-Server installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das **FTP (File Transfer Protocol)** ist ein Netzwerkprotokoll, das zum Übertragen von Dateien über ein TCP/IP-Netzwerk verwendet wird. Das Protokoll wurde entwickelt, um den einfachen Austausch von Dateien zwischen Systemen zu ermöglichen. Mit dem **FileZilla Server** ist es möglich, einen solchen FTP-Server auf einem Linux-Betriebssystem einzurichten. Der FileZilla Server ist einfach zu installieren und zu konfigurieren und bietet zahlreiche Features wie die Einrichtung von Benutzerkonten, Verwaltung von Zugriffsrechten und Dateiübertragungen. In dieser Anleitung schauen wir uns den Prozess der Installation und Konfiguration des **FileZilla Server** Dienstes auf einem Linux-Server an.

<InlineVoucher />

## Wie installiere ich den FTP-Server, um einen Benutzer hinzuzufügen?

Um einen FTP-Benutzer hinzuzufügen, musst du zuerst den FTP-Server installieren. Verbinde dich dafür einmal per SSH (Putty) mit dem Server.

Um den FTP-Server jetzt zu installieren, gib folgenden Befehl ein: **apt-get install proftpd**. Du musst die Abfrage mit einem **Y** bestätigen und Enter drücken:

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

Jetzt müssen wir noch die Konfiguration anpassen. Dafür gibst du folgenden Befehl ein: **nano /etc/proftpd/proftpd.conf** und bestätigst. Danach öffnet sich die Konfigurationsdatei im Nano-Editor:

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

Folgende Einträge müssen hinzugefügt werden:

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

Jetzt muss der FTP-Server neu gestartet werden, damit die Änderungen übernommen werden. Das geht mit folgendem Befehl: **service proftpd restart**

## Wie füge ich einen FTP-Benutzer hinzu?

Um den neuen FTP-Benutzer zu erstellen, müssen wir zuerst eine FTP-Gruppe anlegen. Das machen wir mit dem Befehl **addgroup ftpuser**. Das sieht dann so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

Jetzt können wir unseren ersten FTP-Benutzer mit den Befehlen **adduser benutzerftp -shell /bin/false -home /var/www** und danach **adduser benutzerftp ftpuser** hinzufügen.

Nun wirst du aufgefordert, ein Passwort zu vergeben:

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

Anschließend musst du bestätigen, dass die Eingaben korrekt sind:

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

Der letzte Schritt ist, den neuen Benutzer der Gruppe zuzuweisen via **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

Jetzt kannst du dich mit den gesetzten Daten verbinden:

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)


<InlineVoucher />