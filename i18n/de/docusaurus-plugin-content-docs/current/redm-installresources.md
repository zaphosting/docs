---
id: redm-installresources
title: "RedM: Installation of resources"
description: Information on how to install resources on your RedM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install resources
---

## Introduction

## Einführung

Ressourcen können verwendet werden, um deinen FiveM Server um zusätzliche Funktionen zu erweitern. Dies ist gerade dann interessant, wenn du größere Projekte angehen möchtest, wie zum Beispiel einen Roleplay Server oder ähnlichen. Ohne solche zusätzlichen Ressourcen lässt sich das so direkt nicht umsetzen.

FiveM beziehungsweise dessen Community bietet hierbei eine große Auswahl an Ressourcen an. Eine Übersicht mit den beliebtesten Ressourcen findest du im Cfx.re Forum: https://forum.cfx.re/c/redm-development/54

## Vorbereitung

Die Installation der Ressourcen erfolgt per FTP. Du benötigst einen FTP-Client, um Dateien auf deinen Server hochzuladen. Falls du nicht mit der Verwendung von FTP vertraut bist, empfehlen wir dir, einen Blick in die [FTP Dateizugriff](gameserver-ftpaccess.md) Anleitung zu werfen.

Heruntergeladene Ressourcen werden in der Regel in einem komprimierten Format bereitgestellt. Das bedeutet, dass du die komprimierten Dateien mit einem Entpackungsprogramm wie 7Zip, Winrar oder WinZip entpacken musst. Der entpackte Ressourcenordner sollte mindestens die folgenden Dateien enthalten: `__resource.lua` oder `fxmanifest.lua` sowie die zugehörigen Skriptdateien.

:::info
Falls diese Dateien nicht vorhanden sind, kann es sein, dass sie sich in einem Unterverzeichnis innerhalb der Ressource befinden.
:::

## Installation

### Uploading files

Du musst nun die zuvor unkomprimierten Dateien als einen einzelnen Ordner hochladen (falls noch nicht geschehen). Dein Ordner muss in das `Resource`-Verzeichnis des Servers hochgeladen werden.

![image](https://github.com/zaphosting/docs/assets/42719082/5a9678bf-ddb5-41a2-a5ad-10cb6f748b67)

Die Verzeichnisstruktur sieht normalerweise wie folgt aus:
```
/gXXXXXX/redm/server-data/resources
```

Bestimmte Ressourcen kooperieren mit einer Datenbank und enthalten daher oft bereits SQL-Dateien, die in die Datenbank importiert werden müssen. Wenn dies der Fall ist, dann lese unsere Anleitung [SQL-Datei importieren](fivem-sql-file-import.md), um mehr darüber zu erfahren, wie du dies tun kannst.



### Aktivierung

Um sicherzustellen, dass die installierte Ressource beim Start des Servers geladen wird, musst du sie zunächst in der Datei `server.cfg` für deinen Server aktivieren. Die Aktivierung erfolgt über den Befehl `start [Beispielressource]`. 

Wenn du zum Beispiel die Ressource mit dem Ordnernamen `eup-ui` hochgeladen hast, muss der Startbefehl in der Konfiguration wie folgt aussehen: 

```
start eup-ui
```

Du kannst auf deine "server.cfg"-Datei entweder per FTP (siehe oben) oder über den Abschnitt **Configs** im Webinterface deines Gameservers zugreifen.

:::info
Bitte vergewissern dich, dass der Name des zuvor erstellten Ordners mit dem Namen übereinstimmt, der im Startbefehl angegeben ist. Dabei ist auch die Groß- und Kleinschreibung zu beachten.
:::

Abschließend kannst du deinen Server neu starten. Die installierte Ressource sollte nun geladen werden, wenn dein Server das nächste Mal vollständig gestartet ist. Du hast erfolgreich eine Ressource auf deinem RedM Gameserver installiert!