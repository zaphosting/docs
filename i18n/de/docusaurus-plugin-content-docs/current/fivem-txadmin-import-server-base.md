---
id: fivem-txadmin-import-server-base
title: "FiveM: txAdmin Server Base importieren"
description: "Entdecke, wie du eine fertige Server Base mit txAdmin auf deinem eigenen Server importierst für eine schnelle Einrichtung und nahtlose Integration → Jetzt mehr erfahren"
sidebar_label: Server Base importieren
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

Du hast eine fertige Server Base im Internet gefunden und möchtest sie auf deinem eigenen Server hochladen? Kein Problem! Mit txAdmin kannst du eine fertige Server Base schnell und einfach importieren – vorausgesetzt, du beachtest ein paar wichtige Voraussetzungen und Details. In dieser Anleitung zeigen wir dir, wie du eine Server Base importieren kannst.



<InlineVoucher />

## Vorbereitung

Damit du mit dem Setup starten kannst, musst du eine fertige Server Base bereits aus dem Internet auf deinen PC heruntergeladen und die Datei entpackt haben.

Der Inhalt einer Server Base kann je nach Servertyp und Inhalt variieren und die Dateien sehen dementsprechend unterschiedlich aus. Deine Server Base sollte aber grundsätzlich folgende Daten enthalten:

- **Serverkonfiguration - `server.cfg` (erforderlich):** Die Serverkonfigurationsdatei enthält alle relevanten Befehle/Einstellungen für deinen Server.
- **Resource-Ordner - `resource` (erforderlich):** Der Resource-Ordner enthält alle fertigen Ressourcen, die in der Server Base verwendet werden.
- **SQL-Datei - `filenameXY.sql` (optional):** Diese Datei enthält die fertige Datenbankstruktur, die für die Nutzung und Kommunikation zwischen den Ressourcen und der Datenbank (falls verwendet) benötigt wird.

Die **Daten (`server.cfg`, `resources`)** deiner heruntergeladenen Server Base müssen auf deinen Gameserver hochgeladen werden. Die **SQL-Datei** muss in die von uns bereitgestellte ZAP-Datenbank importiert werden.

### Serverdateien
Der Upload deiner Server Base Daten erfolgt via FTP. Falls du noch nicht genau weißt, wie das funktioniert, schau dir unsere Anleitung an: [FTP-Zugang](gameserver-ftpaccess.md)

Verbinde dich per FTP mit deinem Gameserver und navigiere in den Ordner `fivem`. Erstelle dort einen Ordner für deine Server Base, falls dieser noch nicht existiert. In diesem Beispiel heißt die fertige Server Base **ExampleServer**.

![img](https://screensaver01.zap-hosting.com/index.php/s/HzDrADKgK3rqfKm/download)



Nachdem der Ordner erstellt wurde, müssen jetzt die Server Base Daten hochgeladen werden. Navigiere dazu in deinen neu erstellten Ordner und lade den Resource-Ordner sowie deine Serverkonfiguration hoch. Das Ergebnis sollte so aussehen:

![img](https://screensaver01.zap-hosting.com/index.php/s/xyAZyt8W5XcxGaF/preview)

 

### Datenbank

Falls deine Server Base auch eine Datenbank benötigt, muss die bereitgestellte SQL-Datei in deine ZAP-Datenbank importiert werden. Falls du noch nicht genau weißt, wie das funktioniert, schau dir unsere Anleitung an: [SQL-Datei importieren](fivem-sql-file-import.md)

Importiere deine SQL-Datei wie in der Anleitung beschrieben in deine Datenbank. Achte aber vorher darauf, dass du den Inhalt der SQL-Datei angepasst hast und den korrekten Namen deiner ZAP-Datenbank angegeben hast. Ersetze dazu den Originalwert im Use '...' Befehl mit dem Namen deiner ZAP-Datenbank.

:::warning Inhalt der SQL-Datei vor dem Import doppelt prüfen
Bitte stelle sicher, dass der Inhalt der SQL-Datei angepasst und vollständig korrekt ist, bevor du sie importierst. Andernfalls erscheint folgende Fehlermeldung:

`Access denied for user ‘zapXXXXX-X’@’%’ to database ’originalDatabaseName’`
:::



## txAdmin Setup

Die Vorbereitung für das Setup des Servers ist jetzt abgeschlossen. Die weitere Einrichtung, Installation und Konfiguration des Servers erfolgt nun über den Setup-Prozess der txAdmin-Oberfläche. Die folgende Anleitung erklärt dir detailliert, wie du auf txAdmin zugreifst und wie genau das Setup abläuft: [txAdmin Setup](fivem-txadmin-setup.md)



### Willkommen

Definiere einen Namen, den du für dein Projekt verwenden möchtest. Dieser Name ist nicht für die Serverliste gedacht, sondern dient ausschließlich der Nutzung innerhalb der txAdmin-Oberfläche und für Chat-/Discord-Nachrichten. Fahre mit dem Schritt Deployment Type fort.

![img](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)

### Deployment Type

Unter Deployment Type musst du jetzt auswählen, wie du deinen Server einrichten möchtest. Du hast folgende Optionen: **Popular Recipes**, **Existing Server Data**, **Remote URL Template** und **Custom Template**. Für deinen Anwendungsfall wählst du **Existing Server Data**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oMSBwf6jmHMwtYn/preview)

### Pfade auswählen

Als nächstes muss der Pfad angegeben werden, wo sich deine Server Base befindet. Die Ordnerstruktur beginnt wie folgt und muss um den Namen deiner definierten Server Base erweitert werden: `/home/zapXXXXX/gXXXXXXXX/fivem/ExampleServer`.

Du kannst die angegebene Ordnerstruktur einfach kopieren und einfügen, wie im Screenshot gezeigt, und dann den Namen deines zuvor erstellten Server Base Ordners hinzufügen. Das Ergebnis sollte so aussehen:

![img](https://screensaver01.zap-hosting.com/index.php/s/eDPeDzSqfMbk7Tg/download)



Klicke auf **Next**. Die Serverkonfigurationsdatei `server.cfg` sollte nun erkannt werden. Bestätige dies und schließe das reguläre Setup über den **Save & Start Button** ab.



## Konfiguration

Es ist sehr wahrscheinlich, dass der Server nicht starten kann, weil nicht alle notwendigen Informationen korrekt sind. Das liegt unter anderem an falschen Angaben zur IP-Adresse und zum Port des Servers, fehlenden Datenbankinformationen für eine erfolgreiche Verbindung zur Datenbank sowie einem fehlenden Lizenzschlüssel. Deshalb sind noch finale Anpassungen an der Serverkonfiguration nötig, um das Setup abzuschließen.

### Serverdetails

Standardmäßig sind die Angaben zur IP-Adresse und zum Port entweder nicht vorhanden oder falsch. Stelle sicher, dass die Einträge für die Endpunkte in deiner Serverkonfigurationsdatei vorhanden und korrekt sind. Die Syntax sieht so aus:

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
```

Ersetze die IP-Adresse (0.0.0.0) und den Port (30120) mit den Serverdaten deines Servers. Diese findest du in der Gameserver-Verwaltung deines Servers.

:::warning Falsche IP-Adresse/Port
Wenn die von dir konfigurierten Angaben nicht korrekt sind, erkennst du das an folgender Fehlermeldung:

```
Line XX: [ZAP-Hosting] the 'endpoint_add_tcp' interface MUST be 'XXX.XXX.XXX.XXX'
Line XX: [ZAP-Hosting] the 'endpoint_add_udp' interface MUST be 'XXX.XXX.XXX.XXX'
```
:::


### Datenbank

Damit dein Server eine Verbindung zur Datenbank herstellen kann, muss in der Serverkonfigurationsdatei `server.cfg` eine MySQL-Verbindungszeichenfolge mit den Datenbankinformationen angegeben sein. Diese sieht standardmäßig so aus:

```sql
set mysql_connection_string "mysql://username:password@dataBaseHostname/databaseName?charset=utf8mb4"
```

Ob eine solche MySQL-Verbindungszeichenfolge bereits in deiner Serverkonfiguration existiert, hängt von der verwendeten Server Base ab. Falls sie noch nicht existiert oder nicht die notwendigen Datenbankinformationen enthält, musst du sie hinzufügen und anpassen. Die Datenbankinformationen findest du in der Gameserver-Verwaltung unter Datenbanken. Das Ergebnis könnte zum Beispiel so aussehen:

```sql
set mysql_connection_string "mysql://zapXXXXXXX-X:yourDatabasePassword@mysql-mariadb-XX-XXX.zap-hosting.com/zapXXXXXX-X?charset=utf8mb4"
```

:::tip Keep it simple
Wenn du dir diesen Schritt sparen möchtest, kannst du auch in der Gameserver-Verwaltung unter Einstellungen ganz unten auf den **[MySQL-Verbindungszeichenfolge neu konfigurieren](https://screensaver01.zap-hosting.com/index.php/s/zZSmQex6ropFK3X/preview)** Button klicken.
:::


### Onesync

Falls die `server.cfg` deiner Server Base Informationen zu **Onesync** enthält, müssen diese entfernt werden. Onesync wird stattdessen über die Einstellungen der txAdmin-Oberfläche verwaltet. Wenn du es aktivieren möchtest, findest du die Option unter **Settings ⟶ FXServer**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y4LKM8ZRn4ZSFzp/download)

### Lizenzschlüssel

Um deinen Server zu betreiben, benötigst du einen eigenen Lizenzschlüssel von CFX. Wie du deinen eigenen Lizenzschlüssel erstellst, erfährst du in der folgenden Anleitung: [Eigener Lizenzschlüssel](fivem-licensekey.md)

Füge den Lizenzschlüssel in die Serverkonfigurationsdatei ein:

```
sv_licenseKey "deinLizenzschluesselHier"
```



## Fazit

Glückwunsch! Sobald du die Dateien erfolgreich hochgeladen, das txAdmin Setup abgeschlossen und die notwendigen Änderungen an der Serverkonfiguration vorgenommen hast, kannst du deinen Server jetzt starten und mit deiner Server Base loslegen.

<InlineVoucher />