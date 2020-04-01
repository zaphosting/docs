---
id: gameserver_ftpaccess
title: FTP Dateizugriff
sidebar_label: FTP Dateizugriff
---

## Mit FTP verbinden

Um eine Verbindung mit dem Server herzustellen, muss die **IP-Adresse(FTP Server)**, der **Username** und das **Passwort** eingegeben werden. Diese Daten können unter FTP-Browser eingesehen werden. Der Port ist immer **21**, dieser wird aber in der Regel automatisch eingetragen.

![](https://screensaver01.zap-hosting.com/index.php/s/wMrn4YSLXj4Qocj/preview)

## Über FileZilla verbinden
### Richtige FileZilla Version
> Man benötigt die "**FileZilla Client**" Version, nicht die FileZilla Server Version. 

> Stoppe deinen Server, bevor du Dateien via FTP bearbeitest oder hochlädst.
> Nach dem Serverstop aktualisiere die FTP Rechte hier.
> Bei gestartetem Server kann es zu "Permission denied" Fehlern kommen.

Wenn die Verbindung das erste Mal hergestellt wird, fragt das Programm, ob das Passwort gespeichert werden soll:

![](https://screensaver01.zap-hosting.com/index.php/s/HdNFoZb4CPcrAXk/preview)

Ebenfalls wird gefragt, ob diese Verbindung zugelassen werden soll, da das **Passwort** im Klartext übermittelt wird:

![](https://screensaver01.zap-hosting.com/index.php/s/qpMNnWBdMe7ee9o/preview)

### FileZilla Übersicht

Wenn die Verbindung hergestellt ist, kann man alle Daten einsehen und bearbeiten. Oben rechts hat man die Verzeichnisse. Dort kann man schnell zwischen den Ordnern wechseln. Unten rechts sind die Daten, die man mit Rechtsklick **herunterladen, ansehen** und **bearbeiten** kann:

> Wichtig ist, dass der Server offline sein muss, wenn man die Daten bearbeitet, da sie sonst nicht übernommen werden oder der Server crashen wird.

![](https://screensaver01.zap-hosting.com/index.php/s/kpJn6eKX8XA7jiP/preview)


### Dateien hochladen

Dateien können per "**Drag and Drop**" von der linken Seite (dem Computer), in die rechte Seite (den Server) gezogen werden. 

> Wenn man über mehrere Server verfügt, muss vorher die ID des Servers ermittelt werden, damit man die Daten in den richtigen Ordner verschiebt.

## Über WinSCP verbinden

WinSCP [Download](https://winscp.net/eng/index.php).

> Stoppe deinen Server, bevor du Dateien via FTP bearbeitest oder hochlädst.
> Nach dem Serverstop aktualisiere die FTP Rechte hier.
> Bei gestartetem Server kann es zu "Permission denied" Fehlern kommen.

Zum Verbinden muss das Übertragungsprotokoll auf FTP gestellt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/iN3itbZ2To6zXEi/preview)

### WinSCP Übersicht

Auf der **linken Seite** sind die **eigenen Dateien** des Computers. Auf der **rechten Seite** sind die **Dateien vom Server**, die per Rechtsklick **bearbeitet, gelöscht** oder **heruntergeladen** werden können. **Oben** sieht man die **aktuelle Sitzung**, dort können mehrere Sitzungen gleichzeitig hergestellt werden.

> Wichtig ist, dass der Server offline sein muss, wenn man die Daten bearbeitet, da sie sonst nicht übernommen werden oder der Server crashen wird.

![](https://screensaver01.zap-hosting.com/index.php/s/BLw7RY5SXPmb6Q8/preview)

### Dateien hochladen

Dateien können per "**Drag and Drop**" von der linken Seite (dem Computer), in die rechte Seite (den Server) gezogen werden. 

> Wenn man über mehrere Server verfügt, muss vorher die ID des Servers ermittelt werden, damit man die Daten in den richtigen Ordner verschiebt.