---
id: dedicated-windows-fs-19
title: "Dedicated Server: Farming Simulator 2019 Dedicated Server Windows Setup"
description: "Entdecke, wie du einen Farming Simulator Dedicated Server 2019 auf deinem Windows VPS oder Dedicated Server schnell und effizient einrichtest → Jetzt mehr erfahren"
sidebar_label: Farming Simulator 2019
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS oder Dedicated Server und möchtest darauf den Farming Simulator Dedicated Server 2019 installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server installierst.



## Vorbereitung

Benötigt wird ein Server mit Windows Server 2016/2019, mindestens 4x 2,4 GHz CPU (AMD/Intel), mindestens 2GB RAM (DDR3/4) und 6GB freiem Speicherplatz (SSD oder besser, bevorzugt). Der Server muss auf 64-Bit-Architektur laufen.  
Außerdem wird eine eigene GameLicense benötigt (keine Steam-Version) sowie eine öffentliche IPv4-Adresse. Eine GPU oder Soundkarte sind für den Dedicated Server nicht erforderlich.  
Je nachdem, wie stark der Dedicated Server mit Mods oder DLCs erweitert wird, können mehr Ressourcen nötig sein. 


## Schritt 1 Digitale Lizenz kaufen

Du brauchst eine digitale Version von Farming Simulator 2019, die Steam-Version ist nicht erlaubt.  
Die digitale Version kannst du auf der [Farming Simulator Webseite](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital) kaufen.  
Nach dem Kauf kannst du Farming Simulator online über den Link in der Mail von Giants herunterladen: [Link](https://eshop.giants-software.com/downloads.php).  
:::info
Wichtig: In der Mail findest du den GameKey, der für den Download und die spätere Aktivierung der Installation benötigt wird. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## Schritt 2 Farming Simulator direkt auf deinem Windows Server herunterladen

Verbinde dich via [Initial Access (RDP)](vserver-windows-userdp.md) mit deinem Windows Server. Öffne danach den Browser und rufe erneut den Link aus der Mail auf. Gib deinen GameKey ein und wähle den Download für Windows 8/10 aus. 

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

Die Datei wird heruntergeladen und sollte im Download-Ordner liegen (der Download-Ordner kann variieren).

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

Mit einem Doppelklick öffnest du die Datei und kannst die Setup.exe starten.  
Danach liest du die AGB und bestätigst sie. Die Installation kann als Standard oder Custom durchgeführt werden, Standard reicht normalerweise aus.  
Klicke abschließend auf Installieren – die Installation von Farming Simulator 2019 startet und kann ein paar Minuten dauern. 

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

Sobald die Installation abgeschlossen ist, erscheint die folgende Meldung, die du mit „Fertigstellen“ bestätigst. 

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

Die Grundinstallation ist jetzt abgeschlossen. 

## Schritt 3 Spiel aktivieren und Dedicated Server konfigurieren

Starte jetzt den Farming Simulator. Es sollte eine Verknüpfung auf dem Desktop geben, falls nicht, kannst du das Spiel auch über das Windows-Menü starten.  
Fehlermeldungen wegen fehlender GPU oder ähnlichem kannst du ignorieren oder mit Nein/Abbrechen schließen. Der Farming Simulator muss nur gestartet werden, um den Key eingeben zu können. 

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

Sobald der Key erkannt wurde, erscheint eine Bestätigung. 

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

Jetzt musst du einen Login-Namen und ein Passwort festlegen oder in der Config des Dedicated Servers auslesen/ändern, damit du dich später im Webinterface des Dedicated Servers anmelden kannst.  
Die Config findest du in der Standardinstallation unter  
`C:\Program Files (x86)\Farming Simulator 2019` unter dem Namen `"dedicatedServer.xml"`.  
Die Login-Daten kannst du frei anpassen. 

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## Schritt 4 Farming Simulator 2019 Dedicated Server starten

Um den Dedicated Server zu starten, musst du `"dedicatedServer.exe"` im gleichen Verzeichnis ausführen, in dem auch die `"dedicatedServer.xml"` liegt.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

Danach kannst du das Webinterface über `https://SERVER-IP:8080` öffnen. 

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

Die Anmeldung erfolgt mit den zuvor festgelegten/ausgelesenen Login-Daten aus der `"dedicatedServer.xml"`.  
Die weitere Konfiguration im Webinterface ist selbsterklärend und kann mit wenigen Klicks nach deinen Wünschen angepasst werden. 

## Schritt 5 Ports in der Firewall freischalten

Damit der Server natürlich öffentlich erreichbar ist und du mit Freunden spielen kannst, müssen die Ports in der Windows-Firewall freigegeben werden.  
Die Ports 10823 und 8080 müssen für das TCP-Protokoll freigegeben werden. 10823 ist der Gameserver-Port, 8080 ist der Webport für das Webinterface. Der Webport muss nur freigegeben werden, wenn du das Webinterface von außen nutzen möchtest – die Administration ist auch lokal über RDP auf dem Windows Server möglich.  
Wie du Ports unter Windows freigibst: [Portfreigabe (Firewall)](vserver-windows-port.md).  

Nach der Portfreigabe ist der Server öffentlich erreichbar, sofern er gestartet wurde. 


