---
id: exiled-plugins
title: "SCP EXILED: Plugins installieren"
description: "Entdecke, wie du deinen Server mit vertrauenswürdigen Plugins erweiterst und personalisierst für mehr Funktionalität und Anpassung → Jetzt mehr erfahren"
sidebar_label: Plugins installieren
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/scp-plugins.json';


## Einführung

Plugins ermöglichen es dir, deinen Server noch weiter auszubauen und individuell anzupassen. Im Folgenden erklären wir dir, wo du die meistgenutzten Plugins findest und wie du sie einrichtest.

<InlineVoucher />

## Vorbereitung

Zuerst musst du die Plugins herunterladen, die du auf deinem Server installieren möchtest. Eine große Auswahl an EXILED-Plugins findest du auf der offiziellen GitHub-Seite. Sobald du ein Plugin-Repository ausgewählt hast, findest du dort einen Bereich „Releases“, in dem du die neueste Version herunterladen kannst. Eine genaue Anleitung, wie du vorgehst, findest du weiter unten.

Plugins können zwar von verschiedenen Quellen heruntergeladen werden, wir empfehlen dir aber, dich an vertrauenswürdige Plattformen wie das offizielle GitHub-Repository zu halten, da diese in der Regel am sichersten sind. Sei immer vorsichtig, wenn du Plugins zu deinem Server hinzufügst. Überprüfe die Quelle, schau dir die Entwickler an und verstehe genau, was das Plugin macht, bevor du es installierst.

Um ein Plugin von GitHub herunterzuladen, besuche zuerst die offizielle [EXILED GitHub-Seite](https://github.com/Exiled-Team) und wähle das Plugin-Repository aus, das du nutzen möchtest.  
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)  

Im Plugin-Repository findest du auf der rechten Seite den Bereich **Releases**.  
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)  

Im Bereich Releases findest du eine herunterladbare **.dll**-Datei. Klicke darauf, um den Download zu starten.  
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)  

Das war’s! Sobald der Download abgeschlossen ist, kannst du mit den Installationsschritten weiter unten in dieser Anleitung fortfahren, um zu lernen, wie du die **.dll**-Datei auf deinem Server installierst.


## Installation

Nachdem du die gewünschten Plugins heruntergeladen hast, kannst du mit der Installation starten. Diese erfolgt über **FTP**, daher benötigst du einen FTP-Client, um die Dateien auf deinen Server hochzuladen. Falls du noch nicht mit FTP vertraut bist, schau dir bitte unsere Anleitung dazu an: [Zugriff via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

Das richtige Plugin-Verzeichnis findest du unter: ```/gXXXXXX/.config/EXILED/Plugins```. Lade die heruntergeladenen **.dll**-Plugin-Dateien einfach in diesen Ordner hoch. Nach dem Hochladen sollte es ungefähr so aussehen:  

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

Sobald dieser Schritt abgeschlossen ist, ist die Plugin-Installation fertig. Überprüfe abschließend die **Live-Konsole**, um sicherzugehen, dass das Plugin erfolgreich kompiliert und geladen wurde. Die Bestätigung in der Konsole sieht so aus:  

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)



## Beliebte Plugins

Du suchst noch nach den perfekten Plugins für deinen Server? Stöbere durch unsere sorgfältig zusammengestellte Liste der beliebtesten und am meisten empfohlenen Plugins, um dein Gameplay zu verbessern und deinem Server den letzten Schliff zu geben. Lass dich inspirieren und finde genau die Erweiterungen, die zu deinem Projekt passen.

<SearchableItemList items={items} />


## Abschluss

Wenn du alle Schritte befolgt hast, solltest du dein Plugin erfolgreich installiert haben. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />