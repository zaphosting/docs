---
id: fivem-txadmin-import-server-base
title: "FiveM: txAdmin Server Base importieren"
description: Informationen, wie du deine eigene Server Base in einen FiveM txAdmin Server von ZAP-Hosting importieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Server Base importieren
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Einführung

Du hast einen vorgefertigten Server im Internet gefunden und möchtest ihn bei deinem eigenen Server hochladen? Kein Problem! Mit txAdmin kannst du schnell und unkompliziert einen vorgefertigten Server importieren – vorausgesetzt, du beachtest einige wichtige Anforderungen und Details. Wir zeigen dir, worauf du achten musst und wie der Import Vorgang genau umgesetzt wird.

<InlineVoucher />

## Vorbereitung

Damit der Einrichtungsprozess begonnen werden kann, wird vorausgesetzt, dass du bereits eine fertige Server Base aus dem Internet auf deinen Computer heruntergeladen hast und die voraussichtlich gepackte Datei bereits entpackt wurde. 

Der Inhalt einer Server Base kann sich je nach Art und Inhalt des Servers von den Dateien her unterscheiden und dementsprechend unterschiedlich aussehen. Allerdings sollte deine Server Base in der Regel folgende Daten beinhalten: 

- **Server Konfiguration - `server.cfg` (Notwendig):** Die Server Konfigurationsdatei beinhaltet alle relevanten Konfigurationsbefehle/Einstellungen für deinen Server.
- **Ordner mit allen Ressourcen - `resource` (Notwendig)** Der Resource Ordner beinhaltet alle fertigen Ressourcen, die in der bereitgestellten Server Base verwendet werden.
- **SQL-Datei - `filenameXY.sql` (Optional):** Diese Datei beinhaltet die fertige Datenbankstruktur, die für die Nutzung und Kommunikation zwischen den Resourcen und der Datenbank (falls verwendet) benötigt wird. 

Die **Daten (`server.cfg`, `resources`)**  deiner heruntergeladenen Server Base müssen bei deinem Gameserver hochgeladen werden. Die **SQL-Datei** muss wiederum in die von uns bereitgestellten ZAP-Datenbank importiert werden. 

### Server Dateien
Das Hochladen der Daten deiner Server Base wird per FTP realisiert. Solltest du noch nicht wissen, wie das genau funktioniert, dann schaue dir dazu am besten die folgende Anleitung an: [FTP-Zugriff](gameserver-ftpaccess.md)

Verbinde dich per FTP mit deinem Gameserver und navigiere zum `fivem` Ordner. Erstelle dort einen Ordner für deine Server Base, sofern noch nicht vorhanden. In diesem Beispiel wird für die fertige Server Base der Name **ExampleServer** verwendet.

![img](https://screensaver01.zap-hosting.com/index.php/s/HzDrADKgK3rqfKm/download)



Nach Erstellung des Ordners müssen nun die Daten der Server Base hochgeladen. Navigiere dazu in deinen neu angelegten Ordner und lade den Resource Ordner und deine Server Konfigurationsdatei hoch. Das Ergebnis sollte im Anschluss wie folgt aussehen:

![img](https://screensaver01.zap-hosting.com/index.php/s/xyAZyt8W5XcxGaF/preview)

 

### Datenbank

Wenn deine Server Base ebenfalls die Nutzung einer Datenbank voraussetzt, dann muss in dem Fall ebenfalls die bereitgestellte SQL-Datei in deiner ZAP-Datenbank importiert werden. Solltest du noch nicht wissen, wie das genau funktioniert, dann schaue dir dazu am besten die folgende Anleitung an: [SQL-Datei importieren](fivem-sql-file-import.md) 

Importie wie in der Anleitung beschrieben, deine SQL-Datei in deine Datenbank. Stelle dabei vorher allerdings sicher, dass du den Inhalt der SQL-Datei angepasst hast und den richtigen Namen deiner ZAP-Datenbank angibst. Ersetze hierfür den ursprünglichen Wert beim Use '...' Befehl mit dem Namen deiner ZAP-Datenbank.

:::warning Kontrolliere den Inhalt der SQL-Datei vor dem Import
Bitte vergewissere dich, dass der Inhalt der SQL-Datei angepasst wurde und vollständig korrekt ist, bevor du sie importierst. Andernfalls wird die folgende Fehlermeldung erscheinen: 

`Access denied for user ‘zapXXXXX-X’@’%’ to database ’originalDatenbankName’` 
:::



## txAdmin Setup

Die Vorbereitung der Einrichtung des Servers ist nun bereits erledigt. Die weitere Einrichtung, Installation und Konfiguration des Servers erfolgt nun über den Setup Vorgang vom txAdmin Interface. Wie du das txAdmin aufrufst und das Setup genau vorgenommen wird erläutern wir in der folgenden Anleitung im Detail: [txAdmin Setup](fivem-txadmin-setup.md)



### Willkommen

Definiere  einen Namen, welchen du für dein Projekt verwenden möchtest. Dieser Name ist nicht für die Serverliste gedacht sondern dient lediglich für das txAdmin Interface und Chat/Discord Nachrichten. Fahre mit dem Schritt Art der Bereitstellung fort. 

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)

### Art der Bereitstellung

Beim Deployment Type musst du nun auswählen, wie du deinen Server einrichten möchtest. Dir stehen die folgenden Auswahloptionen zur Verfügung: **Popular Recipes**, **Existing Server Data**, Remote URL Template und **Custom Template**. Für deinen Anwendungsfall musst du **Existing Server Data** auswählen.

![](https://screensaver01.zap-hosting.com/index.php/s/oMSBwf6jmHMwtYn/preview)

### Auswahl des Verzeichnis

Als Nächstes muss der Pfad angegeben, wo sich deine Server Base befindet. Die Verzeichnisstruktur beginnt wie folgt und muss mit deinem definierten Server Base Namen zusätzlich ergänzt werden: `/home/zapXXXXX/gXXXXXX/fivem/ExampleServer`

Die vorgegebene Verzeichnisstruktur kannst du wie im Screenshot dargestellt einfach kopieren, einfügen und dann mit dem Namen deines zuvor angelegten Server Base Ordners im Anschluss ergänzen. Das Ergebnis sollte wie folgt aussehen:

![img](https://screensaver01.zap-hosting.com/index.php/s/eDPeDzSqfMbk7Tg/download)



Klicke anschließend auf **Next**. Die Server Konfigurationsdatei `server.cfg` sollte nun erkannt werden. Bestätige dies und schließe die reguläre Einrichtung über den **Save & Start Button** ab. 



## Konfiguration

Mit hoher Wahrscheinlichkeit wird der Server aktuell noch nicht starten können, weil noch nicht alle notwendigen Informationen korrekt sind. Das liegt unter anderen an falschen Informationen bezüglich der IP-Adresse und Port des Servers, fehlende Datenbankinformationen für eine erfolgreiche Verbindung zur Datenbank, als auch einem fehlenden Lizenzschlüssel. Aus diesem Grund sind für den Abschluss noch finale Anpassungen in der Server Konfigurationen notwendig. 

### Server Details

Standardmäßig sind die bereitgestellten Informationen zur IP-Adresse und Port entweder nicht vorhanden oder nicht korrekt. Stelle sicher, dass in deiner Server Konfigurationsdatei die Einträge für die Endpoints vorhanden und korrekt sind. Die Syntax sieht dafür wie folgt:

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
```

Ersetze die IP-Adresse (0.0.0.0) und den Port mit den Server Informationen von deinem Server. Diese kannst du in der Gameserver Verwaltung deines Servers einsehen. 

:::warning Falsche IP-Adresse/Port
Sollten die Informationen, die du konfiguriert hast, nicht korrekt sein, so kannst du dies anhand der folgenden Fehlermeldung erkennen: 
```
Line XX: [ZAP-Hosting] the 'endpoint_add_tcp' interface MUST be 'XXX.XXX.XXX.XXX'
Line XX: [ZAP-Hosting] the 'endpoint_add_udp' interface MUST be 'XXX.XXX.XXX.XXX'
```
:::


### Datenbank

Damit dein Server eine Verbindung zur Datenbank herstellen kann, muss in der Server Konfigurationsdatei `server.cfg` ein MySQL Connection String mit den Datenbankinformationen hinterlegt sein. Dieser kann standardmäßig wie folgt aussehen: 

```sql
set mysql_connection_string "mysql://benutzername:passwort@datenbankHostname/datenbankName?charset=utf8mb4"
```

Ob solch ein MySQL Connection String bei deiner Server Konfiguration bereits vorhanden ist oder nicht hängt von der von dir verwendeten Server Base ab. Sollte dieser noch nicht vorhanden sein oder noch nicht die notwendigen Datenbankinformationen beinhalten, so musst du diesen noch hinzufügen und anpassen. Die Datenbankinformationen kannst du in der Gameserver Verwaltung unter Datenbanken einsehen. Das Ergebnis könnte im Anschluss beispielsweise wie folgt aussehen: 

```sql
set mysql_connection_string "mysql://zapXXXXXXX-X:deinDatenbankPasswort@mysql-mariadb-XX-XXX.zap-hosting.com/zapXXXXXX-X?charset=utf8mb4"
```

:::tip Mach es dir einfach
Wenn du dir diesen Schritt sparen möchtest, dann kannst du auch in der Gameserver Verwaltung unter den Einstellungen am Ende der Seite auf den **[Reconfigure MySQL Connection String](https://screensaver01.zap-hosting.com/index.php/s/zZSmQex6ropFK3X/preview)** Button klicken. 
:::


### Onesync

Sollte die `server.cfg` Konfigurationsdatei deiner Server Base irgendwelche Informationen bezüglich **Onesync** beinhalten, so müssen diese entfernt werden. Die Verwaltung erfolgt stattdessen über die Einstellungen des txAdmin Interfaces. Solltest du das aktivieren wollen dann findest du die Option unter **Settings ⟶ FXServer**. 

![](https://screensaver01.zap-hosting.com/index.php/s/Y4LKM8ZRn4ZSFzp/download)

### Lizenzschlüssel

Für das Betreiben deines Servers benötigst du einen eigenen Lizenzschlüssel von CFX. Wie du einen eigenen Lizenzschlüssel erstellst, kannst du in der folgenden Anleitung nachlesen: [Eigener Lizenzschlüssel](fivem-licensekey.md)

Füge den Lizensschlüssel im Anschluss in die Server-Konfigurationsdatei hinzu: 

```
sv_licenseKey "DeinLizenzSchlüsselKommtHierHin"
```



## Abschluss

Glückwunsch! Nachdem du die Dateien erfolgreich hochgeladen, das txAdmin Setup abgeschlossen und abschließend die noch notwendigen Änderungen in der Server Konfiguration vorgenommen hast, kannst du nun deinen Server mit deiner Server Base starten und spielen.
