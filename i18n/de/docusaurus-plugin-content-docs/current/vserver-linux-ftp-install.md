---
id: vserver-linux-ftp-install
title: "VPS: Installation eines FTP-Servers"
description: "Entdecke, wie du einen sicheren FTP-Server auf Linux mit FileZilla Server einrichtest und verwaltest, um Dateien effizient zu übertragen → Jetzt mehr erfahren"
sidebar_label: FTP-Server installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das **FTP (File Transfer Protocol)** ist ein Netzwerkprotokoll, das zum Übertragen von Dateien über ein TCP/IP-Netzwerk verwendet wird. Das Protokoll wurde entwickelt, um den einfachen Austausch von Dateien zwischen Systemen zu ermöglichen. Mit dem **FileZilla Server** ist es möglich, einen solchen FTP-Server auf einem Linux-Betriebssystem einzurichten. Der FileZilla Server ist einfach zu installieren und zu konfigurieren und bietet zahlreiche Features wie die Einrichtung von Benutzerkonten, Verwaltung von Zugriffsrechten und Dateiübertragungen. In dieser Anleitung schauen wir uns den Prozess der Installation und Konfiguration des **FileZilla Server**-Dienstes auf einem Linux-Server an.

<InlineVoucher />

## Installation

Um einen FTP-Benutzer hinzuzufügen, musst du zuerst den FTP-Server installieren. Verbinde dich dazu einmal per SSH (Putty) mit dem Server.

Um den FTP-Server jetzt zu installieren, gib folgenden Befehl ein: **apt-get install proftpd**. Du musst die Abfrage mit einem **Y** bestätigen und Enter drücken:

![](https://screensaver01.zap-hosting.com/index.php/s/seKtY9GBELG78in/preview)

Jetzt müssen wir noch die Konfiguration anpassen. Dafür gibst du folgenden Befehl ein: **nano /etc/proftpd/proftpd.conf** und bestätigst. Danach öffnet sich die Konfigurationsdatei im Nano-Editor:

![](https://screensaver01.zap-hosting.com/index.php/s/J5kS2bJFjDyLpCZ/preview)

Folgende Einträge müssen hinzugefügt werden:

![](https://screensaver01.zap-hosting.com/index.php/s/TZoDZpiBQi5Yb5L/preview)

Jetzt muss der FTP-Server neu gestartet werden, damit die Änderungen übernommen werden. Das geht mit folgendem Befehl: **service proftpd restart**

## Benutzer hinzufügen

Um den neuen FTP-Benutzer anzulegen, müssen wir zuerst eine FTP-Gruppe erstellen. Das machen wir mit dem Befehl **addgroup ftpuser**. Das sieht dann so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/M2jnE6mWqQLKkme/preview)

Jetzt können wir unseren ersten FTP-Benutzer mit den Befehlen **adduser benutzerftp -shell /bin/false -home /var/www** und anschließend **adduser benutzerftp ftpuser** hinzufügen.

Jetzt wirst du aufgefordert, ein Passwort zu vergeben:

![](https://screensaver01.zap-hosting.com/index.php/s/LKsops7sKTr2jXt/preview)

Danach musst du bestätigen, dass die Eingaben korrekt sind:

![](https://screensaver01.zap-hosting.com/index.php/s/LWdMS2j7PnRQwnd/preview)

Der letzte Schritt ist, den neuen Benutzer der Gruppe zuzuweisen via **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/66fqTTttpM5BPkg/preview)

Jetzt kannst du dich mit den gesetzten Daten verbinden:

![](https://screensaver01.zap-hosting.com/index.php/s/ftccknJBSoC2pCH/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zRsRHA3NWNCwcsj/preview)

## Fazit

Glückwunsch, du hast FTP erfolgreich installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />