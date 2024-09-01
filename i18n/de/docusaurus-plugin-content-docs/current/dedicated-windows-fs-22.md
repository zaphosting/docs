---
id: dedicated-windows-fs-22
title: "Dedicated Server: Landwirtschafts-Simulator 2022 Dedicated Server Einrichtung"
description: Informationen wie du einen Landwirtschafts-Simulator Dedicated Server 2022 auf deinen Windows Dedicated Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Landwirtschafts-Simulator 2022
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Windows Dedicated Server und möchtest darauf einen Landwirtschafts-Simulator 2019 Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst auf deinem Server installierst.

<InlineVoucher />

## Vorbereitung

Es wird ein Server, basierend auf Windowsserver 2016/2019 mit mindestens 4x 2,4 GHz CPU (AMD/Intel) sowie mindestens 2GB RAM (DDR3/4) und 6GB freien Speicher (SSD oder besser, bevorzugt) benötigt. Der Server muss auf der 64 Bit Architektur laufen. 
Des Weiteren wird eine eigene GameLizenz benötigt (keine Steam Version), sowie eine öffentliche IPv4 Adresse. Eine GPU oder eine Soundkarte sind für den Dedicated Server nicht notwendig. 
Je nachdem, wie stark der Dedicated Server gemodded wird, mit Mods oder mit DLCs erweitert wird, sind ggf. mehr Ressourcen nötig. 


## Schritt 1 Digitale Lizenz erwerben

Es wird eine digitale Version des Landwirtschafts-Simulator 2022 benötigt, es darf keine Steam Version sein. 
Die digitale Version kann auf der [Landwirtschafts-Simulator Webseite](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital) erworben werden.
Nachdem die digitale Version erworben wurde, kann der Landwirtschafts-Simulator online heruntergeladen werden, folge dazu dem [Link](https://eshop.giants-software.com/downloads.php) aus der Mail, die du von Giants erhalten hast.
:::info
Wichtig: In der Mail befindet sich der GameKey der zum Download als auch zur späteren Aktivierung der Installation benötigt wird. 
:::

![image](https://screensaver01.zap-hosting.com/index.php/s/qkj3xF7Ai7KL5JY/preview)

## Schritt 2 Download des Landwirtschafts-Simulator direkt auf deinen Windowserver

Verbinde dich via [RDP](vserver-windows-userdp.md) zu deinem Windowsserver. Nachdem du verbunden bist, öffne den Browser und rufe erneut den [Link](https://eshop.giants-software.com/downloads.php) aus der Mail auf. Gebe dort dann deinen GameKey ein und wähle dann den Download für Windows8/10. 

![image](https://screensaver01.zap-hosting.com/index.php/s/85gzmbXL8M9sQAq/preview)

Anschließend wird die Datei heruntergeladen und sollte sich dann im Download Verzeichnis befinden. (Das Downloadverzeichnis kann abweichend sein)


![image](https://screensaver01.zap-hosting.com/index.php/s/cPJZgmzwHCFqsjX/preview)

Mit einem Doppelklick wird die Datei geöffnet und es kann die Setup.exe ausgeführt werden.
Anschließend liest man die TOS und bestätigt sie. Danach kann die Installation als Standard oder Benutzerdefiniert erfolgen, in der Regel reicht Standard aus. 
Zum Abschluss klickt man auf installieren und der Landwirtschafts-Simulator 2022 wird nun installiert, dies kann einige Minuten dauern. 

![image](https://screensaver01.zap-hosting.com/index.php/s/XHtGqcSm454LjJG/preview)

Sobald der Installationsvorgang beendet ist, erscheint folgende Meldung, welche mit "Fertigstellen" bestätigt werden kann. 


![image](https://screensaver01.zap-hosting.com/index.php/s/8XBiSesjBANdNo9/preview)

Die Basis-Installation ist jetzt abgeschlossen. 

## Schritt 3 Aktivierung des Games und Konfiguration des Dedicated Servers

Jetzt muss der Landwirtschafts-Simulator gestartet werden. Auf dem Desktop sollte eine Verknüpfung liegen, falls nicht, kann er auch über das Windows Menü gestartet werden. Fehler bezüglich einer fehlenden GPU oder ähnliches können ignoriert bzw. mit Nein/Abbrechen geschlossen werden. Der Landwirtschafts-Simulator muss nur gestartet werden, um den Key eingeben zu können. 

![image](https://screensaver01.zap-hosting.com/index.php/s/8LHsXKcrNkFPaRN/preview)

![image](https://screensaver01.zap-hosting.com/index.php/s/kWXsHPaLbZeBH98/preview)

Jetzt muss in der Config des Dedicated Servers ein Login Name und Passwort gesetzt bzw. geändert/ausgelesen werden, damit ein Login in das Webinterface des Dedicated Servers möglich ist. Die Config ist in der Standardinstallation unter 
`C:\Program Files (x86)\Landwirtschafts-Simulator 2022` zu finden unter dem Namen `"dedicatedServer.xml"`. 
Die Logindaten können frei angepasst werden. 

![image](https://screensaver01.zap-hosting.com/index.php/s/72rRgoJnDycFi92/preview)

## Schritt 4 Landwirtschafts-Simulator 2022 Dedicated Server starten

Um den Dedicated Server zu starten, muss im gleichen Verzeichnis, wo auch die `"dedicatedServer.xml"` liegt, die `"dedicatedServer.exe"` ausgeführt werden.

![image](https://screensaver01.zap-hosting.com/index.php/s/mWwBm8Sk5aPwzCc/preview)

Anschließend kann das Webinterface via `https://SERVER-IP:8080` geöffnet werden. 

![image](https://screensaver01.zap-hosting.com/index.php/s/6F5xsJAAzBm2Yes/preview)

Der Login ist mit den zuvor gesetzten/ausgelesenen Login Daten aus der `"dedicatedServer.xml"` möglich. 
Die weitere Konfiguration ist im Webinterface selbsterklärend und kann mit wenigen Klicks vorgenommen werden, ganz nach den persönlichen Wünschen. 

## Schritt 5 Ports freischalten in der Firewall

Der Server soll natürlich öffentlich erreichbar sein, um mit Freunden spielen zu können. Dazu müssen die Ports des Servers in der Windows Firewall freigeschaltet werden. Es müssen die Ports 10823 und 8080 freigegeben werden für das Protokoll TCP. 10823 ist dabei der Gameserver Port und 8080 ist der Webport für das Webinterface, der Webport muss nur bei Bedarf freigegeben werden, eine Verwaltung kann auch weiterhin nur lokal auf dem Windows Server erfolgen via RDP. 
Wie Ports bei Windows freigeschaltet werden können, [erklären wir in dieser Anleitung](vserver-windows-port.md). 

Nach der Port Freigabe ist der Server öffentlich erreichbar, sofern er gestartet wurde. 
