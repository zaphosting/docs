---
id: exiled-plugins
title: "SCP EXILED: Plugin installieren"
description: "Entdecke, wie du deinen Server mit vertrauenswürdigen Plugins erweiterst und personalisierst für mehr Funktionalität und Customizing → Jetzt mehr erfahren"
sidebar_label: Plugins installieren
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/scp-plugins.json';


## Einführung

Plugins ermöglichen es dir, deinen Server noch weiter auszubauen und individuell anzupassen. Im Folgenden zeigen wir dir, wo du die beliebtesten Plugins findest und wie du sie einrichtest.

<InlineVoucher />

## Vorbereitung

Zuerst musst du die Plugins herunterladen, die du auf deinem Server installieren möchtest. Eine große Auswahl an EXILED-Plugins findest du auf deren offizieller GitHub-Seite. Sobald du ein Plugin-Repository ausgewählt hast, findest du dort einen Bereich „Releases“, in dem du die neueste Version herunterladen kannst. Detaillierte Anleitungen zum Vorgehen findest du weiter unten.

Plugins können zwar von verschiedenen Quellen geladen werden, wir empfehlen dir aber, bei vertrauenswürdigen Plattformen wie dem offiziellen GitHub-Repository zu bleiben, da diese in der Regel am sichersten sind. Sei immer vorsichtig beim Hinzufügen von Plugins zu deinem Server. Überprüfe die Quelle, check die Entwickler und verstehe genau, was das Plugin macht, bevor du es installierst.

Um ein Plugin von GitHub herunterzuladen, besuche zuerst die offizielle [EXILED GitHub-Seite](https://github.com/Exiled-Team) und wähle das Plugin-Repository aus, das du nutzen möchtest.  
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)  

Im Plugin-Repository findest du rechts den Bereich **Releases**.  
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)  

Im Releases-Bereich findest du eine herunterladbare **.dll**-Datei. Klick drauf, um den Download zu starten.  
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)  

Das war’s! Nach dem Download kannst du mit den Installationsschritten weiter unten lernen, wie du die **.dll**-Datei auf deinem Server installierst.


## Installation

Nachdem du die gewünschten Plugins heruntergeladen hast, kannst du mit der Installation starten. Das läuft über **FTP**, du brauchst also einen FTP-Client, um die Dateien auf deinen Server hochzuladen. Falls du noch nicht mit FTP vertraut bist, schau dir bitte unseren Guide an: [Zugriff via FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

Das richtige Plugin-Verzeichnis findest du unter: ```/gXXXXXX/.config/EXILED/Plugins```. Lade einfach die heruntergeladenen **.dll**-Plugin-Dateien in diesen Ordner hoch. Danach sollte es ungefähr so aussehen:  

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

Sobald das erledigt ist, ist die Plugin-Installation abgeschlossen. Check zum Schluss die **Live-Konsole**, um sicherzugehen, dass das Plugin erfolgreich kompiliert und geladen wurde. Die Bestätigung in der Konsole sieht so aus:  

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)



## Beliebte Plugins

Du suchst noch nach den perfekten Plugins für deinen Server? Stöbere durch unsere sorgfältig zusammengestellte Liste der beliebtesten und am meisten empfohlenen Plugins, um dein Gameplay zu verbessern und deinem Server den letzten Schliff zu geben. Lass dich inspirieren und finde genau die Add-ons, die zu deinem Projekt passen.

<SearchableItemList items={items} />


## Fazit

Wenn du alle Schritte befolgt hast, solltest du dein Plugin erfolgreich installiert haben. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />