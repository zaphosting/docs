---
id: exiled-plugins
title: "SCP EXILED: Plugins installieren"
description: "Informationen zur Installation von Plugins auf deinem SCP: EXILED Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation"
sidebar_label: Plugins installieren
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Plugins ermöglichen es dir, deinen Server noch weiter zu erweitern und individuell anzupassen. Im Folgenden erklären wir dir, wo du die am häufigsten genutzten Plugins findest und wie du sie einrichtest.

<InlineVoucher />

## Vorbereitung

Zuerst musst du die Plugins herunterladen, die du auf deinem Server installieren möchtest. Eine große Auswahl an EXILED-Plugins findest du auf ihrer offiziellen GitHub-Seite. Sobald du ein Plugin-Repository ausgewählt hast, findest du dort einen Releases-Bereich, über den du die neueste Version herunterladen kannst. Detaillierte Anweisungen dazu findest du weiter unten.

Auch wenn Plugins aus verschiedenen Quellen heruntergeladen werden können, empfehlen wir dir, auf vertrauenswürdige Plattformen wie das offizielle GitHub-Repository zurückzugreifen, da diese in der Regel als sicher gelten. Sei immer vorsichtig bei der Installation von Plugins – überprüfe die Quelle, informiere dich über die Entwickler und stelle sicher, dass du genau weißt, was das Plugin auf deinem Server macht.

Um ein Plugin von GitHub herunterzuladen, besuche die offizielle [EXILED GitHub-Seite](https://github.com/Exiled-Team) und wähle das gewünschte Plugin-Repository aus.  
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)  

Innerhalb des Repositories findest du auf der rechten Seite den Bereich **Releases**.  
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)  

Dort kannst du eine **.dll**-Datei herunterladen. Klicke darauf, um den Download zu starten.  
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)  

Das war’s schon! Nach dem Download kannst du weiter unten in dieser Anleitung mit der Installation der **.dll**-Datei auf deinem Server fortfahren.

## Installation

Sobald die gewünschten Plugins heruntergeladen wurden, kannst du mit der Installation fortfahren. Diese erfolgt über **FTP**, daher benötigst du einen FTP-Client, um die Dateien auf deinen Server hochzuladen. Wenn du noch nicht weißt, was FTP ist und wie es funktioniert, wirf bitte einen Blick in die [FTP Zugriff](gameserver-ftpaccess.md) Anleitung:

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

Das richtige Plugin Verzeichnis findest du unter: 
```/gXXXXXX/.config/EXILED/Plugins```  Lade die heruntergeladenen **.dll**-Dateien in diesen Ordner hoch. Nach dem Hochladen sollte es so ähnlich aussehen:  

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

Damit ist die Installation abgeschlossen. Abschließend solltest du noch in der **Live-Konsole** überprüfen, ob das Plugin erfolgreich kompiliert und geladen wurde. Die Bestätigung sieht ungefähr so aus:

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)

## Abschluss

Wenn du alle Schritte befolgt hast, solltest du dein Plugin erfolgreich installiert haben. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂
