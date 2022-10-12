---
id: gameserver_ftpaccess
title: Gameserver: Dateien mit FTP hochladen und herunterladen
description: Informationen, wie du mit FTP Dateien auf deinen Gameserver von ZAP-Hosting hoch- und runterladen kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: FTP Dateizugriff
---

## Mit FTP verbinden

Um eine Verbindung mit dem Server herzustellen, muss die **IP-Adresse(FTP Server)**, der **Username** und das **Passwort** eingegeben werden. Diese Daten können unter FTP-Browser eingesehen werden. Der Port ist immer **21**, dieser wird aber in der Regel automatisch eingetragen.

![image](https://user-images.githubusercontent.com/13604413/159184693-261d0660-4cfb-472e-b3bb-945ab6a33346.png)

## Über FileZilla verbinden
### Richtige FileZilla Version
> Man benötigt die "**FileZilla Client**" Version, nicht die FileZilla Server Version. 

> Stoppe deinen Server, bevor du Dateien via FTP bearbeitest oder hochlädst.
> Nach dem Serverstop aktualisiere die FTP Rechte hier.
> Bei gestartetem Server kann es zu "Permission denied" Fehlern kommen.

### FileZilla Übersicht

Wenn die Verbindung hergestellt ist, kann man alle Daten einsehen und bearbeiten. Oben rechts hat man die Verzeichnisse. Dort kann man schnell zwischen den Ordnern wechseln. Unten rechts sind die Daten, die man mit Rechtsklick **herunterladen, ansehen** und **bearbeiten** kann:

> Wichtig ist, dass der Server offline sein muss, wenn man die Daten bearbeitet, da sie sonst nicht übernommen werden oder der Server crashen wird.



### Dateien hochladen

Dateien können per "**Drag and Drop**" von der linken Seite (dem Computer), in die rechte Seite (den Server) gezogen werden. 

> Wenn man über mehrere Server verfügt, muss vorher die ID des Servers ermittelt werden, damit man die Daten in den richtigen Ordner verschiebt.

### "Transfer connection interrupted" Fehler Meldung

Sollte bei der Verbindung oder auch Übertragung die Fehlermeldung "Transfer connection interrupted: ECCONABORTED - Connection aborted" bestehen, so kann testweise der Übertragungsmodus von *Passive* auf *Active* umgestellt werden.
In den folgenden Schritten wird gezeigt, wie das bei Filezilla in den Einstellungen umgestellt werden kann.

![image](https://user-images.githubusercontent.com/13604413/159184695-c03a49df-113a-4435-b253-5418843f150c.png)

Drücke in deinem Filezilla Client auf "**Bearbeiten**", dort dann direkt die "**Einstellungen...**" öffnen:

![image](https://user-images.githubusercontent.com/13604413/159184700-af55e7e0-484f-4992-8b56-d0cdedc3ddf0.png)

Im Anschluss daran öffnet sich das "Einstellungen" Fenster. Dort kannst du nun auf "**FTP**" um die Einstellungen für die FTP Verbindung einzusehen.
Bei "**FTP**" angekommen, wird der Standard Übertragungsmodus auf  "Passiv" stehen, dort kannst du den Radio-Button bei "**Aktiv**" auswählen und die Änderung mit "**OK**" bestätigen.

![image](https://user-images.githubusercontent.com/13604413/159184704-95564d7c-f103-45a5-894e-fa24c8af54f7.png)

Sobald auch dies getan ist, kann jetzt die FTP Verbindung erneut getestet werden.

## Über WinSCP verbinden

WinSCP [Download](https://winscp.net/eng/index.php).

> Stoppe deinen Server, bevor du Dateien via FTP bearbeitest oder hochlädst.
> Nach dem Serverstop aktualisiere die FTP Rechte hier.
> Bei gestartetem Server kann es zu "Permission denied" Fehlern kommen.

Zum Verbinden muss das Übertragungsprotokoll auf FTP gestellt werden.

### WinSCP Übersicht

Auf der **linken Seite** sind die **eigenen Dateien** des Computers. Auf der **rechten Seite** sind die **Dateien vom Server**, die per Rechtsklick **bearbeitet, gelöscht** oder **heruntergeladen** werden können. **Oben** sieht man die **aktuelle Sitzung**, dort können mehrere Sitzungen gleichzeitig hergestellt werden.

![image](https://user-images.githubusercontent.com/13604413/159184711-6ca6c2d0-03f8-4c35-8e8e-dbf46f40afe5.png)


> Wichtig ist, dass der Server offline sein muss, wenn man die Daten bearbeitet, da sie sonst nicht übernommen werden oder der Server crashen wird.

### Dateien hochladen

Dateien können per "**Drag and Drop**" von der linken Seite (dem Computer), in die rechte Seite (den Server) gezogen werden. 

> Wenn man über mehrere Server verfügt, muss vorher die ID des Servers ermittelt werden, damit man die Daten in den richtigen Ordner verschiebt.
