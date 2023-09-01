---
id: fivem-installresources
title: Installation von Resourcen
description: Informationen, wie du Ressourcen auf deinen FiveM-Server von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Resourcen installieren
---

**📺Video:** Du bevorzugst eine Anleitung eher in Form eines Videos oder als zusätzliche visuelle Ergänzung? Kein Problem! Für dieses Thema stellen wir ebenfalls ein Video zur Verfügung:

<iframe width="560" height="315" src="https://www.youtube.com/embed/V7us5V6KLho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Einführung

Resourcen können verwendet werden, um deinen FiveM Server um zusätzliche Funktionen zu erweitern. Dies ist gerade dann interessant, wenn du größere Projekte angehen möchtest, wie zum Beispiel einen Roleplay Server oder ähnlichen. Ohne solche zusätzlichen Resourcen lässt sich das so direkt nicht umsetzen.

FiveM beziehungsweise dessen Community bietet hierbei eine große Auswahl an Resourcen an. Eine Übersicht mit den beliebtesten Resourcen findest du im Cfx.re Forum: https://forum.cfx.re/c/development/releases/7



## Vorbereitung

Die Installation der Ressourcen erfolgt per FTP. Du benötigst einen FTP-Client, um Dateien auf deinen Server hochzuladen. Falls du nicht mit der Verwendung von FTP vertraut bist, empfehlen wir dir, einen Blick in die [FTP Dateizugriff](https://zap-hosting.com/guides/docs/gameserver-ftpaccess/) Anleitung zu werfen.

Heruntergeladene Ressourcen werden in der Regel in einem komprimierten Format bereitgestellt. Das bedeutet, dass du die komprimierten Dateien mit einem Entpackungsprogramm wie 7Zip, Winrar oder WinZip entpacken musst. Der entpackte Ressourcenordner sollte mindestens die folgenden Dateien enthalten: `__resource.lua` oder `fxmanifest.lua` sowie die zugehörigen Skriptdateien.

:::info
Falls diese Dateien nicht vorhanden sind, kann es sein, dass sie sich in einem Unterverzeichnis innerhalb der Ressource befinden.
:::



## Installation

### Dateien hochladen

Du musst nun die zuvor unkomprimierten Dateien als einen einzelnen Ordner hochladen (falls noch nicht geschehen). Dein Ordner muss in das `Resource`-Verzeichnis des Servers hochgeladen werden.

![image](https://github.com/zaphosting/docs/assets/42719082/85a508ac-fd43-401f-9fc6-cffd538e34f0)

Die Verzeichnisstruktur sieht normalerweise wie folgt aus:
```
/gXXXXXX/gta5-fivem/server-data/resources
```

:::info
Die Verzeichnisstruktur des FiveM TxAdmin Gameservers unterscheidet sich von den übrigen FiveM Produkten, da diese ein eigenes Template-Verzeichnis enthalten. Die Ressourcen befinden sich ebenfalls im Template-Verzeichnis.
:::

Bestimmte Ressourcen kooperieren mit einer Datenbank und enthalten daher oft bereits SQL-Dateien, die in die Datenbank importiert werden müssen. Wenn dies der Fall ist, dann lese unsere Anleitung [SQL-Datei importieren](https://zap-hosting.com/guides/docs/fivem-sql-file-import), um mehr darüber zu erfahren, wie du dies tun kannst.

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

Abschließend kannst du deinen Server neu starten. Die installierte Ressource sollte nun geladen werden, wenn dein Server das nächste Mal vollständig gestartet ist. Du hast erfolgreich eine Ressource auf deinem FiveM Gameserver installiert!

