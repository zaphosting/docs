---
id: dedicated-windows-fs-22
title: "Dedicated Server: Farming Simulator 2022 Dedicated Server Windows Setup"
description: "Entdecke, wie du den Farming Simulator Dedicated Server 2022 auf deinem Windows VPS oder Dedicated Server einrichtest → Jetzt mehr erfahren"
sidebar_label: Farming Simulator 2022
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS oder Dedicated Server und möchtest den Farming Simulator Dedicated Server 2022 darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

<InlineVoucher />

## Vorbereitung
Benötigt wird ein Server mit Windows Server 2016/2019, mindestens 4x 2,4 GHz CPU (AMD/Intel), mindestens 2GB RAM (DDR3/4) und 6GB freiem Speicher (SSD oder besser, bevorzugt). Der Server muss auf 64-Bit-Architektur laufen.  
Außerdem brauchst du eine eigene GameLicense (keine Steam-Version) sowie eine öffentliche IPv4-Adresse. Eine GPU oder Soundkarte sind für den Dedicated Server nicht notwendig.  
Je nachdem, wie stark der Dedicated Server mit Mods oder DLCs erweitert wird, können mehr Ressourcen nötig sein.  

## Schritt 1 Digitale Lizenz kaufen

Du benötigst eine digitale Version von Farming Simulator 2022, die Steam-Version ist nicht erlaubt.  
Die digitale Version kannst du auf der [Farming Simulator Webseite](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital) kaufen.  
Nach dem Kauf kannst du Farming Simulator online über den Link in der Mail von Giants herunterladen: [Link](https://eshop.giants-software.com/downloads.php).  
:::info
Wichtig: In der Mail findest du den GameKey, der für den Download und die spätere Aktivierung der Installation benötigt wird. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/MXkbf8pNSYJAmGt/preview)

## Schritt 2 Farming Simulator direkt auf deinen Windows Server herunterladen

Verbinde dich via [Initial Access (RDP)](vserver-windows-userdp.md) mit deinem Windows Server. Öffne danach den Browser und gehe erneut auf den Link aus der Mail: [Link](https://eshop.giants-software.com/downloads.php). Gib deinen GameKey ein und wähle den Download für Windows 8/10 aus.

![](https://screensaver01.zap-hosting.com/index.php/s/wDa758WS8aKDBwE/preview)

Die Datei wird heruntergeladen und sollte im Download-Ordner liegen (der Speicherort kann variieren).

![](https://screensaver01.zap-hosting.com/index.php/s/3KZ9wstGSz6JTke/preview)

Mit einem Doppelklick öffnest du die Datei und kannst die Setup.exe starten.  
Anschließend liest du die AGB und bestätigst sie. Die Installation kann als Standard oder Custom durchgeführt werden, Standard reicht normalerweise aus.  
Klicke auf Installieren und Farming Simulator 2022 wird nun installiert – das kann ein paar Minuten dauern.

![](https://screensaver01.zap-hosting.com/index.php/s/A4daMGF35a6aCj4/preview)

Sobald die Installation abgeschlossen ist, erscheint die folgende Meldung, die du mit „Fertigstellen“ bestätigst.

![](https://screensaver01.zap-hosting.com/index.php/s/EWcaeSD8HacP8je/preview)

Die Grundinstallation ist jetzt abgeschlossen.

## Schritt 3 Spiel aktivieren und Dedicated Server konfigurieren

Starte jetzt den Farming Simulator. Auf dem Desktop sollte eine Verknüpfung sein, falls nicht, kannst du ihn auch über das Windows-Menü starten.  
Fehlermeldungen wegen fehlender GPU oder ähnlichem kannst du ignorieren oder mit Nein/Abbrechen schließen. Farming Simulator muss nur gestartet werden, um den Key eingeben zu können.

![](https://screensaver01.zap-hosting.com/index.php/s/5FcRkkxajWFN6D5/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/FXzNNeaBzAP794w/preview)

Jetzt musst du einen Login-Namen und ein Passwort festlegen oder in der Config des Dedicated Servers auslesen/ändern, damit du dich später im Webinterface des Dedicated Servers anmelden kannst.  
Die Config findest du in der Standardinstallation unter  
`C:\Program Files (x86)\Farming Simulator 2022` mit dem Namen `"dedicatedServer.xml"`.  
Die Login-Daten kannst du frei anpassen.

![](https://screensaver01.zap-hosting.com/index.php/s/LHkeCNSnEtE5Rd8/preview)

## Schritt 4 Farming Simulator 2022 Dedicated Server starten

Um den Dedicated Server zu starten, musst du `"dedicatedServer.exe"` im gleichen Verzeichnis ausführen, in dem auch die `"dedicatedServer.xml"` liegt.

![](https://screensaver01.zap-hosting.com/index.php/s/43ZYGoNiE7npxDz/preview)

Danach kannst du das Webinterface über `https://SERVER-IP:8080` öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/RbfZFQZkRSX4okr/preview)

Der Login erfolgt mit den zuvor festgelegten Login-Daten aus der `"dedicatedServer.xml"`.  
Die weitere Konfiguration im Webinterface ist selbsterklärend und kann mit wenigen Klicks nach deinen Wünschen angepasst werden.

## Schritt 5 Ports in der Firewall freischalten

Der Server sollte natürlich öffentlich erreichbar sein, damit du mit Freunden spielen kannst. Dafür müssen die Ports in der Windows-Firewall freigegeben werden.  
Die Ports 10823 und 8080 müssen für das TCP-Protokoll freigegeben werden. 10823 ist der Gameserver-Port, 8080 ist der Webport für das Webinterface. Der Webport muss nur freigegeben werden, wenn du das Webinterface auch remote nutzen möchtest – die Administration ist sonst auch lokal via RDP auf dem Windows Server möglich.  
Wie du Ports unter Windows freigibst: [Portfreigabe (Firewall)](vserver-windows-port.md).

Nach der Portfreigabe ist der Server öffentlich erreichbar, sofern er gestartet wurde.

<InlineVoucher />