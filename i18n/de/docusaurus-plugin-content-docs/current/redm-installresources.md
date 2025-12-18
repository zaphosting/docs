---
id: redm-installresources
title: "RedM: Installation von Ressourcen"
description: "Entdecke, wie du deinen RedM Gameserver mit beliebten Ressourcen für größere Projekte wie Roleplay-Server aufwertest → Jetzt mehr erfahren"
sidebar_label: Ressourcen installieren
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Ressourcen kannst du nutzen, um deinen RedM Gameserver mit zusätzlichen Features zu erweitern. Das ist besonders spannend, wenn du größere Projekte wie einen Roleplay-Server oder Ähnliches planst. So etwas geht nicht ohne solche zusätzlichen Ressourcen.

RedM und seine Community bieten eine riesige Auswahl an Ressourcen. Eine Übersicht der beliebtesten Ressourcen findest du im Cfx.re Forum: https://forum.cfx.re/c/redm-development/54



<InlineVoucher />

## Vorbereitung

Die Installation der Ressourcen erfolgt via FTP. Du brauchst also einen FTP-Client, um Dateien auf deinen Server hochzuladen. Falls du noch nicht mit FTP vertraut bist, empfehlen wir dir einen Blick in die [FTP-Zugang](gameserver-ftpaccess.md) Anleitung.

Heruntergeladene Ressourcen werden meist in komprimierter Form angeboten. Das heißt, du musst die gepackten Dateien mit einem Entpackprogramm wie 7Zip, WinRAR oder WinZip entpacken. Der entpackte Ressourcen-Ordner sollte mindestens folgende Dateien enthalten: `__resource.lua` oder `fxmanifest.lua` sowie die zugehörigen Skriptdateien.

:::info
Falls diese Dateien nicht direkt sichtbar sind, könnten sie sich in einem Unterordner innerhalb der Ressource befinden.
:::

## Installation

### Dateien hochladen

Jetzt musst du die zuvor entpackten Dateien als einzelnen Ordner (falls noch nicht geschehen) hochladen. Dein Ordner muss in das `resource`-Verzeichnis deines Servers hochgeladen werden. Die Verzeichnisstruktur sieht typischerweise so aus: `/gXXXXXX/redm-txadmin/YOUR_FRAMEWORK/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/ofMKfG6rfewsb3o/preview)



Manche Ressourcen arbeiten mit einer Datenbank zusammen und enthalten daher oft schon SQL-Dateien, die in die Datenbank importiert werden müssen. Falls das bei dir der Fall ist, schau dir unsere [SQL-Datei Import](redm-sql-file-import.md) Anleitung an, um zu erfahren, wie das geht.

### Aktivierung

Damit die installierte Ressource beim Serverstart geladen wird, musst du sie zuerst in der `server.cfg` Datei deines Servers aktivieren. Die Aktivierung erfolgt über den Befehl `start [Beispiel Ressource]`.

Wenn du zum Beispiel die Ressource mit dem Ordnernamen `eup-ui` hochgeladen hast, muss der Startbefehl in der Config so aussehen:
```
start eup-ui
```

Auf deine `server.cfg` Datei kannst du über den CFG Editor im txAdmin Interface zugreifen.

:::info
Achte darauf, dass der Name des zuvor erstellten Ordners exakt mit dem im Startbefehl übereinstimmt – inklusive Groß- und Kleinschreibung.
:::



## Fazit
Zum Schluss kannst du deinen Server neu starten. Die installierte Ressource sollte beim nächsten vollständigen Start deines Servers geladen werden. Du hast erfolgreich eine Ressource in deinen RedM Gameserver installiert. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />