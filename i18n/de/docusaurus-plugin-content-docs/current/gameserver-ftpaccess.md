---
id: gameserver-ftpaccess
title: "Gameserver: Zugriff via FTP zur Verwaltung der Server-Dateien"
description: "Entdecke, wie du sicher per FTP auf deine Server-Dateien zugreifst und sie verwaltest – für reibungslose Dateiübertragungen und volle Serverkontrolle → Jetzt mehr erfahren"
sidebar_label: FTP-Zugang
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

FTP (File Transfer Protocol) ist ein Netzwerkprotokoll, das für den Dateitransfer über ein TCP/IP-Netzwerk entwickelt wurde. Das Protokoll ermöglicht einen einfachen Dateiaustausch zwischen Systemen. Mit FTP kannst du auf deine Server-Dateien zugreifen und sie verwalten – egal ob du Dateien hoch- und runterladen oder aktiv bearbeiten möchtest.

<InlineVoucher />

## Vorbereitung

Um deine Dateien per FTP zu verwalten, brauchst du einen passenden FTP-Client. Es gibt eine große Auswahl an FTP-Clients, aber zwei der bekanntesten und etabliertesten sind **FileZilla** und **WinSCP**.

| FTP-Client | Download                                                     |
| ---------- | ------------------------------------------------------------ |
| FileZilla  | [Offizielle Webseite](https://filezilla-project.org/download.php?platform=win64) |
| WinSCP     | [Offizielle Webseite](https://winscp.net/eng/downloads.php)  |



## FTP-Zugangsdaten erhalten

Um per FTP auf deinen Gameserver zuzugreifen, brauchst du die passenden Login-Daten. Diese findest du im Bereich **FTP Browser** deiner Gameserver-Verwaltung.

Gib einfach die **IP-Adresse (FTP-Server)**, den **Benutzernamen** und das **Passwort** ein, um die Verbindung herzustellen. Diese Daten findest du auf der **FTP Browser**-Seite. Der Port ist immer **21** und wird normalerweise automatisch gesetzt.

![img](https://screensaver01.zap-hosting.com/index.php/s/6FTFDwyBQZ792Fd/download)



## FileZilla

### Verbindung herstellen

Du kannst die Verbindung entweder über die Quickconnect-Funktion oder über **Datei -> Servermanager** herstellen. Trage dort die **FTP-Zugangsdaten** für deinen Server ein und klicke dann auf **Verbinden**.

![](https://screensaver01.zap-hosting.com/index.php/s/wxSSFoW3GTXJdLK/preview)

:::info
Stelle sicher, dass du den Server stoppst und die FTP-Berechtigungen aktualisierst, bevor du auf die Server-Dateien zugreifst. Sonst können Fehlermeldungen wie „Permission Denied“ oder „Access Denied“ auftreten.
:::

### Dateien verwalten

Wie schon erwähnt, kannst du mit dem FTP-Client Dateien auf deinen Server hoch- und herunterladen sowie bearbeiten. Der FTP-Client ist in zwei Bereiche aufgeteilt: Links siehst du deinen Client (deinen PC), rechts deinen Server. Du kannst in beiden Verzeichnissen navigieren – lokal und auf dem Server.

Die Verwaltung erfolgt per Rechtsklick auf die jeweilige Datei oder den Ordner. Je nachdem, was du machen willst, kannst du Dateien oder Ordner hochladen, herunterladen, bearbeiten, umbenennen oder verschieben.

![](https://screensaver01.zap-hosting.com/index.php/s/qizoBD5JnHBRkJc/preview)

:::info
Wenn du mehrere Gameserver hast, musst du zuerst in das richtige Gameserver-Verzeichnis navigieren.
:::



### Mögliche Probleme und Lösungen

#### Fehler „530 Login incorrect“
Wenn dieser Fehler beim Verbindungsaufbau auftritt, wurden falsche Zugangsdaten eingegeben. Prüfe alle Felder auf Vollständigkeit und Richtigkeit.

#### Fehler „Transfer connection interrupted“
Wenn dieser Fehler während der Verbindung oder beim Transfer auftritt, kannst du versuchen, den Übertragungsmodus von *Passiv* auf *Aktiv* zu wechseln. Die folgenden Schritte zeigen, wie du diese Einstellung in FileZilla änderst.




## WinSCP

### Verbindung herstellen
Du kannst die Verbindung über Quickconnect oder oben über **Neue Sitzung** herstellen. Gib dort die FTP-Zugangsdaten für deinen Server ein und klicke dann auf **Verbinden**.

![](https://screensaver01.zap-hosting.com/index.php/s/KNnkJsnETTFqZpD/preview)


:::info
Stelle sicher, dass du den Server stoppst und die FTP-Berechtigungen aktualisierst, bevor du auf die Server-Dateien zugreifst. Sonst können Fehlermeldungen wie „Permission Denied“ oder „Access Denied“ auftreten.
:::


### Dateien verwalten

Wie schon erwähnt, kannst du mit dem FTP-Client Dateien auf deinen Server hoch- und herunterladen sowie bearbeiten. Der FTP-Client ist in zwei Bereiche aufgeteilt: Links siehst du deinen Client (deinen PC), rechts deinen Server. Du kannst in beiden Verzeichnissen navigieren – lokal und auf dem Server.

Die Verwaltung erfolgt per Rechtsklick auf die jeweilige Datei oder den Ordner. Je nachdem, was du machen willst, kannst du Dateien oder Ordner hochladen, herunterladen, bearbeiten, umbenennen oder verschieben.

![](https://screensaver01.zap-hosting.com/index.php/s/dAYiFwWQAipgTqW/preview)


### Mögliche Probleme und Lösungen

#### Fehler „530 Login incorrect“
Wenn dieser Fehler beim Verbindungsaufbau auftritt, wurden falsche Zugangsdaten eingegeben. Prüfe alle Felder auf Vollständigkeit und Richtigkeit.

<InlineVoucher />