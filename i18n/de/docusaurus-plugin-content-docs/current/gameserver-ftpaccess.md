---
id: gameserver-ftpaccess
title: 'Gameserver: Zugriff per FTP zum Verwalten der Serverdateien'
description: Informationen, wie du per FTP verbindest und die Dateien deines Gameservers von ZAP-Hosting verwaltest - ZAP-Hosting.com Dokumentation
sidebar_label: Zugriff per FTP
---



## Einführung

Das FTP (File Transfer Protocol) ist ein Netzwerkprotokoll, das dazu dient, Dateien über ein TCP/IP-Netzwerk zu übertragen.
Das Protokoll wurde entwickelt, um den einfachen Austausch von Dateien zwischen Systemen zu ermöglichen. Über das FTP-Protokoll hast du die Möglichkeit, auf deine Server-Dateien zuzugreifen und zu verwalten. Sei es, dass du Dateien hoch- und runterlädst oder diese aktiv bearbeitest. 



## Vorbereitung

Damit du deine Dateien mittels des FTP-Protokolls verwalten kannst, benötigst du einen passenden FTP-Client. Es gibt hierbei eine recht große Auswahl an verfügbaren FTP-Client. Zu den bekanntesten und etabliertesten FTP-Clients gehören allerdings **FileZilla** und **WinSCP**. 

| FTP-Client | Download                                                     |
| ---------- | ------------------------------------------------------------ |
| FileZilla  | [Offizielle Webseite](https://filezilla-project.org/download.php?platform=win64) |
| WinSCP     | [Offizielle Webseite](https://winscp.net/eng/downloads.php)  |

Suche dir einen FTP-Client aus und installiere diesen auf deinem Computer. Um eine Verbindung mit dem Server herzustellen, muss die **IP-Adresse (FTP Server)**, der **Username** und das **Passwort** eingegeben werden. Diese Informationen können unter FTP-Browser Seite eingesehen werden. Der Port ist immer **21**. Dieser wird in der Regel automatisch eingetragen.

![img](https://screensaver01.zap-hosting.com/index.php/s/q8qb6GLXHmrMwEw/preview)



## FileZilla

### Verbinden

Die Verbindung kannst du entweder über die Direktverbindung oder unter **Datei -> Server Manager** herstellen. Trage dort die **FTP-Zugangsdaten** von deinem Server ein und klicke im Anschluss auf **Verbinden**. 

![img](https://screensaver01.zap-hosting.com/index.php/s/KH9HRWK3geypbf4/preview)

:::info
Stelle sicher, dass du den Server stoppst und die FTP-Berechtigungen aktualisierst, bevor du auf die Serverdateien zugreifst. Andernfalls könnten Fehlermeldungen wie „Permission Denied“ oder „Access Denied“ auftreten.
:::



### Dateien verwalten

Wie bereits ursprünglich erwähnt kannst du mit dem FTP-Client bei deinem Server Dateien hochladen, herunterladen und bearbeiten. Der FTP-Client ist in zwei Teile aufgeteilt. Die Linke Hälfte stellt deinen Client (Computer) und die rechte Hälfte deinen Server Bereich dar. Du kannst dementsprechend in beiden Verzeichnissen sowohl auf Lokaler als auch Server Ebene navigieren. 

Die Verwaltung erfolgt mit einem Rechtsklick auf die jeweilige Datei oder Ordner. Je nachdem was du machen möchtest, kannst du darüber Dateien oder Ordner hoch- und herunterladen, bearbeiten, umbenennen oder verschieben. 

![img](https://screensaver01.zap-hosting.com/index.php/s/65LiiStT7SrFndT/preview)



:::info
Solltest du mehrere Gameserver besitzen, so musst du zunächst in das richtige Gameserververzeichnis navigieren. 
:::



### Mögliche Probleme und Lösungsansätze

#### "530 Login incorrect" Fehlermeldung

Sollte beim Verbindungaufbau diese Fehlermeldung auftreten, so bedeutet dies, dass falsche Zugangsdaten angegeben wurden. Überprüfe alle ausgefüllten Felder auf Vollständigkeit und Korrektheit. 

#### "Transfer connection interrupted" Fehlermeldung

Sollte bei der Verbindung oder auch Übertragung diese Fehlermeldung auftreten, so kann testweise der Übertragungsmodus von *Passive* auf *Active* umgestellt werden.




## WinSCP

### Verbinden

Die Verbindung kannst du entweder über die Direktverbindung oder oben über **Neue Sitzung** herstellen. Trage dort die FTP-Zugangsdaten von deinem Server ein und klicke im Anschluss auf **Verbinden**. 

![img](https://screensaver01.zap-hosting.com/index.php/s/QZj8SMLS574rK2F/preview)

:::info
Stelle sicher, dass du den Server stoppst und die FTP-Berechtigungen aktualisierst, bevor du auf die Serverdateien zugreifst. Andernfalls könnten Fehlermeldungen wie „Permission Denied“ oder „Access Denied“ auftreten.
:::

### Dateien verwalten

Wie bereits ursprünglich erwähnt kannst du mit dem FTP-Client bei deinem Server Dateien hochladen, herunterladen und bearbeiten. Der FTP-Client ist in zwei Teile aufgeteilt. Die Linke Hälfte stellt deinen Client (Computer) und die rechte Hälfte deinen Server Bereich dar. Du kannst dementsprechend in beiden Verzeichnissen sowohl auf Lokaler als auch Server Ebene navigieren. 

Die Verwaltung erfolgt mit einem rechtsklick auf die jeweilige Datei oder Ordner. Je nachdem was du machen möchtest, kannst du darüber Dateien oder Ordner hoch- und herunterladen, bearbeiten, umbenennen oder verschieben. 

![img](https://screensaver01.zap-hosting.com/index.php/s/rFMnnsdi2dbEt6r/preview)



### Mögliche Probleme und Lösungsansätze

#### "530 Login incorrect" Fehlermeldung

Sollte beim Verbindungsaufbau diese Fehlermeldung auftreten, so bedeutet dies, dass falsche Zugangsdaten angegeben wurden. Überprüfe alle ausgefüllten Felder auf Vollständigkeit und Korrektheit. 



