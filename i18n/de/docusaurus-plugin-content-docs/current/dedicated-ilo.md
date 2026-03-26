---
id: dedicated-ilo
title: "Dedicated Server: iLO"
description: "Entdecke, wie du deinen Enterprise Dedicated Server mit iLO komplett verwaltest für nahtlose Kontrolle und Überwachung → Jetzt mehr erfahren"
sidebar_label: iLO
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Auf unseren Enterprise Dedicated Servern nutzen wir die Management-Schnittstelle iLO, die dir uneingeschränkte volle Verwaltung deines Servers ermöglicht.  
Zu den Funktionen gehören Server starten/stoppen/neustarten, Management-Konsole via Java oder HTML5, Einbinden von Boot-Medien (ISOs).  
Ändere die Einstellungen mit Vorsicht, falsche Änderungen können große Probleme verursachen.

## iLO Zugriff
Öffne das Server-Dashboard deines ZAP Dedicated Servers mit einem Browser deiner Wahl. Dort findest du bereits die wichtigsten Infos zu deinem iLO.  
Um das iLO zu aktivieren, klicke einfach auf „iLO aktivieren“.  
![](https://screensaver01.zap-hosting.com/index.php/s/grj9PxttLKiZg6m/preview)

Bitte beachte, dass es ein paar Sekunden dauern kann, bis dein iLO vollständig verfügbar ist.  
Wenn das System die Management-Schnittstelle gestartet hat und sie erreichbar ist, siehst du die Login-Daten.  
Zum Öffnen des iLO klickst du auf die angezeigte IP-Adresse und meldest dich mit den Zugangsdaten an.

![](https://screensaver01.zap-hosting.com/index.php/s/MJeEW2LLrjxsAGN/preview)

Nach einem kurzen Moment bist du nun im Admin-Interface deines Dedicated Servers eingeloggt.  
Hier findest du viele wichtige Infos:

![](https://screensaver01.zap-hosting.com/index.php/s/BGWGXDRgS9A74dB/preview)

### Übersicht
* **System Health**  
Sollte normalerweise grün sein. Bei jedem Serverstart überprüft die Hardware sich selbst. Gibt es Probleme, meldet das System sie sofort.  
Mögliche Zustände: grün (OK), gelb (Degraded) und rot (Critical). Es kann vorkommen, dass der Server deine SSD als „degraded“ anzeigt – meist kein Problem.  
Natürlich kannst du den Support informieren, wir prüfen dann, ob Handlungsbedarf besteht. Ist der Systemstatus rot („Critical“), sollte der Support sofort informiert werden.  
Der erste Schritt zur Problemlösung ist immer ein kompletter Neustart des Servers.

* **iLO Health**  
Zeigt weitere Infos zu den iLO-Parametern, hier sollten keine signifikanten Änderungen sein.  
Es ist nicht nötig, hier etwas zu ändern.

* **Server Power**  
Zeigt den Status deines Servers an, z.B. „ON“ bedeutet, dass dein Server läuft.

* **Integrierte Remote-Konsole**  
Hier kannst du deinen Server visuell sehen und Befehle ausführen.  
Die Remote-Konsolen unterscheiden sich in zwei Varianten:  
HTML5 startet direkt im Browser und benötigt keine Drittanbieter-Software.  
Java Web Start nutzt Java, um die Management-Konsole zu öffnen.  
Sicherheitswarnungen kannst du bedenkenlos wegklicken.  
Wie du Schritt für Schritt per Remote-Konsole verbindest, findest du in der detaillierten Anleitung.

* **Aktive Sitzungen**  
Hier siehst du alle Nutzer, die gerade mit iLO verbunden sind.

### iLO Ereignisprotokoll
Speichert alle Änderungen, die über iLO gemacht wurden, z.B. Logins, Serverstarts/-stopps und Einstellungen.

### Integriertes Management-Log
Speichert alle hardwarerelevanten Infos, z.B. Ergebnisse des POST (Power on Self Test), der bei jedem Serverstart ausgeführt wird.  
Hardwareprobleme deines Dedicated Servers werden hier angezeigt.

### Virtuelle Medien
Das Einbinden eigener Boot-Medien (ISOs) erfolgt über das Untermenü „Connect CD/DVD-ROM“.  
Die Boot-Reihenfolge ist so eingestellt, dass standardmäßig immer zuerst ein registriertes ISO gebootet wird.  
Die Reihenfolge kannst du auch im Menü „Boot Order“ ändern.

![](https://screensaver01.zap-hosting.com/index.php/s/6ezDgt2dsCMwEam/preview)

Bei „Scripted Media URL“ musst du den kompletten Link zur ISO eingeben, z.B.: http://mydomain.com/bootimage.iso  
Der Link muss direkt auf die ISO zeigen und mit .iso enden.  
Dann klickst du auf „Insert Media“ und startest deinen Server im „Power Management“ neu.  
Der Server lädt nun dein eingebundenes ISO.

### Power Management
In diesem Menü kannst du alles rund ums Starten & Stoppen deines ZAP Dedicated Servers erledigen.

![](https://screensaver01.zap-hosting.com/index.php/s/NHW8iafC3zjcsJG/preview)

* **Graceful Power Off**  
Fährt deinen Server sauber herunter, wie wenn du einmal den Power-Button deines Notebooks/PCs drückst.  
Alle Anwendungen werden korrekt beendet und der Server fährt geordnet runter.  
Das kann je nach Anwendungen etwas dauern.

* **Force Power Off**  
Fährt deinen Server sofort aus, ohne zu warten – wie wenn du den Stromstecker ziehst.  
Das System geht sofort aus, ohne Verzögerung.

* **Force System Reset**  
Löst einen sofortigen Neustart deines Systems aus.

### Power Meter
Zeigt dir den durchschnittlichen Stromverbrauch deines Systems an. Grundsätzlich gilt: Je höher der Verbrauch, desto höher die Auslastung.

### Netzwerk
Zeigt dir die Netzwerkkonfiguration deines iLO an. Beachte, dass diese Einstellungen nicht mit der Netzwerkkonfiguration deines Servers selbst zu tun haben.

:::info
Um deinen Server einzurichten oder falls der Netzwerkzugriff nicht funktioniert, kannst du jederzeit direkt auf deinen Server schauen.
:::

## Remote-Konsolen (Anzeige)
Das iLO bietet dir standardmäßig zwei verschiedene Remote-Konsolen:

![](https://screensaver01.zap-hosting.com/index.php/s/cozRqRt9KLTMCkd/preview)

### Die HTML5-Konsole
Mit einem Klick bist du direkt auf deinem Server, du brauchst keine zusätzliche Software und sie startet direkt im Browser.  
Sie bietet viele nützliche Tools:

![](https://screensaver01.zap-hosting.com/index.php/s/G8DjtHYnJosiQBy/preview)

* 1 - Power Management Einstellungen (Start, Stop, Neustart) des Servers  
* 2 - Senden von Tastenkombinationen (z.B. STRG + ALT + ENTF)  
* 3 - Einbinden von ISOs > CD/DVD > Scripted Media URL  
* 4 - System Health  
* 5 - Server Power Status (AN / AUS)

Hat dein Server eine grafische Oberfläche (GUI), kannst du die Maus wie gewohnt nutzen, auch Tastatureingaben werden übertragen.

### Die Java-Konsole
Für die Java-Konsole brauchst du Java installiert (Download unter java.com).  
:::info
Sicherheitswarnungen kannst du ignorieren.
:::

Nach dem Öffnen der Datei erscheint folgende Meldung, bestätige mit „Fortfahren“.  
![](https://screensaver01.zap-hosting.com/index.php/s/nByYm3X8DXNHXmP/preview)

Wir bestätigen das Risiko und klicken auf „Ausführen“.  

![](https://screensaver01.zap-hosting.com/index.php/s/eWzpyXgQPWWz4J4/preview)

Jetzt öffnet sich die Java-Konsole.  
:::info
Die Anwendung stellt oft das Tastaturlayout auf „EN“ um.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/kAp5rddEDjdLNwi/preview)

* 1 - Power Management Einstellungen (Start, Stop, Neustart) des Servers  
* 2 - Einbinden von ISOs > URL CD/DVD-ROM  
* 3 - Senden von Tastenkombinationen (z.B. STRG + ALT + ENTF)  
* 4 - System Health  
* 5 - Server Power Status (AN / AUS)

Hat dein Server eine grafische Oberfläche (GUI), kannst du die Maus wie gewohnt nutzen, auch Tastatureingaben werden übertragen.

## Häufige Probleme, Tipps & Tricks

* Server bleibt im POST (Power on Self Test) hängen und bootet nicht mehr.  
Verbinde dich mit einer Remote-Konsole und prüfe, wo genau der Server hängen bleibt. Werden Fehler angezeigt?  
Schalte den Server im Power Management für ein paar Sekunden aus (Force Power Off) und starte ihn dann neu (Momentary Press).  
Bootet der Server immer noch nicht, kontaktiere den Support.

* ISO wird nicht geladen.  
Prüfe, ob der Link zu deiner ISO wirklich korrekt ist. Der einfachste Test: Link im Browser öffnen, startet ein Download, ist alles korrekt.  
Stelle sicher, dass der Link richtig in Virtual Media eingetragen ist und der Server neu gestartet wurde. Schau auch in die Boot-Reihenfolge, ob das CD/DVD-Laufwerk ganz oben steht.

* Mein Server braucht lange zum Booten.  
Die eingesetzte Enterprise-Hardware braucht etwas Zeit zum Booten, das ist völlig normal. Es kann 10-15 Minuten dauern.

* Ich kann das iLO nicht mehr öffnen.  
Stelle sicher, dass das iLO in deinem Server-Dashboard aktiviert ist. Aus Sicherheitsgründen schaltet sich die Management-Schnittstelle nach einiger Zeit automatisch ab.  
Du kannst das iLO natürlich deaktivieren und wieder aktivieren. (Warte mindestens 5 Minuten nach Aktivierung)

## Abschluss

Das sollte dir die Administration deutlich erleichtern, wenn du alles genau durchgelesen hast. Für weitere Fragen oder Hilfe steht dir unser Support-Team täglich zur Verfügung! 🙂