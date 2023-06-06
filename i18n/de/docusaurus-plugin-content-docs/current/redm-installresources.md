---
id: redm-installresources
title: Installation von Resourcen
description: Informationen, wie du Ressourcen, Mods und Scripts auf deinen RedM-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Resource installieren
---


## Einführung

Resourcen können verwendet werden, um deinen RedM Server um zusätzliche Funktionen zu erweitern. Dies ist gerade dann interessant, wenn du größere Projekte angehen möchtest, wie zum Beispiel einen Roleplay Server oder ähnlichen. Ohne solche zusätzlichen Resourcen lässt sich das so direkt nicht umsetzen. 

RedM beziehungsweise dessen Community bietet hierbei eine große Auswahl an Resourcen an. Eine Übersicht mit den beliebtesten Resourcen findest du hier: https://forum.cfx.re/c/redm-development/redm-releases/60




## Vorbereitung

Die Installation von Resourcen erfolgt per FTP. Um Dateien auf deinen Server hochladen zu können, benötigst du einen FTP-Client. Falls du noch nicht weißt, was FTP ist und wie es funktioniert, dann schaue dir am besten die folgende Anleitung an: [FTP Dateizugriff](https://zap-hosting.com/guides/docs/de/gameserver_ftpaccess/)


Heruntergeladene Resourcen werden in der Regel in einem gepackten Format angeboten. Das bedeutet, dass du diese gepackte Datei erst noch mit einem Entpackungsprogramm, wie zum Beispiel 7Zip, Winrar oder WinZip entpacken musst. Die entpackte Resource sollte im Anschluss mindestens die folgenden Dateien beinhalten:  __resource.lua / fxmanifest.lua und die zugehörigen Script-Dateien. 

:::info
Sollten diese Dateien nicht vorhanden sein, dann kann es unter Umständen sein, dass diese in einem Unterverzeichnis liegen. 
:::


## Installation

### Hochladen

Die zuvor entpackten Dateien müssen nun, sofern noch nicht vorhanden, in einen eigenen Ordner hochgeladen werden. Dieser Ordner muss dann in das Resource Verzeichnis des Servers hochgeladen werden. Die Verzeichnisstruktur sieht in der Regel wie folgt aus:

```
/gXXXXXX/redm/server-data/resources
```

Gewisse Resourcen arbeiten mit einer Datenbank zusammen und beinhalten daher oftmals bereits SQL-Dateien, die in der Datenbank importiert werden müssen. 


### Aktivierung

Damit die installierte Resource auch geladen wird, muss diese in der Server Config erst noch aktiviert werden. Die Aktivierung erfolgt über den **Start** Befehl. Wenn du beispielsweise die Resource mit dem Namen "eup-ui" hochgeladen hast, dann muss der Start Befehl in der Config folgendermaßen aussehen: 

```
start eup-ui
```

:::info
Hierbei ist zu beachten, dass der Name des zuvor erstellten Ordners mit dem Namen des Startbefehls übereinstimmen muss. Dabei ist auch die Groß- und Kleinschreibung essentiell. 
:::


Der Server kann anschließend wieder gestartet werden, sobald dieser Schritt abgeschlossen wurde. Im nächsten Startvorgang sollte die installierte Resource nun geladen werden. 
