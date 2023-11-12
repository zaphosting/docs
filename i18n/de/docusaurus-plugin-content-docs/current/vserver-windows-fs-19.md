---
id: vserver-windows-fs-19
title: Landwirtschafts-Simulator 2019 auf Windows installieren
description: Informationen wie du einen Landwirtschafts-Simulator Dedizierter Server 2019 auf deinen Windows vServer und Dedizierter Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Landwirtschafts-Simulator 2019
---

# Installation eines Dedizierter Servers für den Landwirtschafts-Simulator 2019

:::info
Diese Anleitung gilt auch für einen Dedizierter Server von ZAP-Hosting mit Windowsserver 2016/2019. Wie Windows auf einem dedizierten Server installiert werden kann, erklären wir [hier](dedicated-windows.md).
:::

## Basic Informationen: 
Es wird ein Server, basierend auf Windowsserver 2016/2019, mit mindestens 4x 2,4 GHz CPU (AMD/Intel) sowie mindestens 2 GB RAM (DDR3/4) und 6 GB freien Speicher (SSD oder besser, bevorzugt) benötigt. Der Server muss auf der 64 Bit Architektur laufen. 
Des Weiteren wird eine eigene Spiellizenz benötigt (keine Steam Version), sowie eine öffentliche IPv4 Adresse. Eine GPU oder eine Soundkarte sind für den Dedizierter Server nicht notwendig. 
Je nachdem, wie stark der dedizierter Server modifiziert wird, mit Mods oder mit DLCs erweitert wird, sind ggf. mehr Ressourcen nötig. 


## Schritt 1 Digitale Lizenz erwerben

Es wird eine digitale Version des Landwirtschafts-Simulator 2019 benötigt, es darf keine Steam Version sein. 
Die digitale Version kann auf der [Landwirtschafts-Simulator Webseite](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital) erworben werden.
Nachdem die digitale Version erworben wurde, kann der Landwirtschafts-Simulator online heruntergeladen werden, folge dazu dem [Link](https://eshop.giants-software.com/downloads.php) aus der Mail, die du von Giants erhalten hast.
:::info
Wichtig: In der Mail befindet sich der Spiellizenz, der zum Download als auch zur späteren Aktivierung der Installation benötigt wird. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/KbccgYdHFLp3gWp/preview)

## Schritt 2 Download des Landwirtschafts-Simulators direkt auf deinen Windows Server

Verbinde dich via RDP [RDP](vserver-windows-userdp.md) zu deinem Windowsserver. Nachdem du verbunden bist, öffne den Browser und rufe erneut den [Link](https://eshop.giants-software.com/downloads.php) aus der Mail auf. Gebe dort dann deine Spiellizenz ein und wähle dann den Download für Windows8/10. 

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

Anschließend wird die Datei heruntergeladen und sollte sich dann im Download Verzeichnis befinden. (Das Downloadverzeichnis kann abweichend sein)


![](https://screensaver01.zap-hosting.com/index.php/s/YZaRsXW99TMEFAw/preview)

Mit einem Doppelklick wird die Datei geöffnet und es kann die Setup.exe ausgeführt werden.
Anschließend liest man die AGB und bestätigt sie. Danach kann die Installation als Standard oder Benutzerdefiniert erfolgen, in der Regel reicht Standard aus. 
Zum Abschluss klickt man auf installieren und der Landwirtschafts-Simulator 2019 wird nun installiert, dies kann einige Minuten dauern. 

![](https://screensaver01.zap-hosting.com/index.php/s/5A2efQGi4yk3fjw/preview)

Sobald der Installationsvorgang beendet ist, erscheint folgende Meldung, welche mit "Fertigstellen" bestätigt werden kann. 

![](https://screensaver01.zap-hosting.com/index.php/s/BbET9BNdjQMdCLN/preview)

Die Basis-Installation ist jetzt abgeschlossen. 

## Schritt 3 Aktivierung des Games und Konfiguration des Dedizierter Servers

Jetzt muss der Landwirtschafts-Simulator gestartet werden. Auf dem Desktop sollte eine Verknüpfung liegen, falls nicht, kann er auch über das Windows Menü gestartet werden. 
Fehler bezüglich einer fehlenden GPU oder ähnliches können ignoriert bzw. mit Nein/Abbrechen geschlossen werden. Der Landwirtschafts-Simulator muss nur gestartet werden, um den Key eingeben zu können. 

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SqrNNYyHZ9Cwqps/preview)

Sobald der Key anerkannt wurde, erscheint eine Bestätigung. 

![](https://screensaver01.zap-hosting.com/index.php/s/RS9QGLspjeA4Pf2/preview)

Jetzt muss in der Config des Dedizierter Servers ein Login Name und Passwort gesetzt bzw. geändert/ausgelesen werden, damit ein Login in das Webinterface des Dedizierter Servers möglich ist. 
Die Config ist in der Standardinstallation unter 
`C:\Program Files (x86)\Landwirtschafts-Simulator 2019` zu finden unter dem Namen `"dedicatedServer.xml"`. 
Die Logindaten können frei angepasst werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## Schritt 4 Landwirtschafts-Simulator 2019 Dedizierter Server starten

Um den Dedizierter Server zu starten, muss im gleichen Verzeichnis, wo auch die `"dedicatedServer.xml"` liegt, die `"dedicatedServer.exe"` ausgeführt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

Anschließend kann das Webinterface unter `https://SERVER-IP:8080` geöffnet werden.

![](https://screensaver01.zap-hosting.com/index.php/s/ybm8aEYLN2ECJJr/preview)

Der Login ist mit den zuvor gesetzten/ausgelesenen Login Daten aus der `"dedicatedServer.xml"` möglich. 
Die weitere Konfiguration ist im Webinterface selbsterklärend und kann mit wenigen Klicks vorgenommen werden, ganz nach den persönlichen Wünschen. 

## Schritt 5 Ports freischalten in der Firewall

Der Server soll natürlich öffentlich erreichbar sein, um mit Freunden spielen zu können. Dazu müssen die Ports des Servers in der Windows Firewall freigeschaltet werden. Es müssen die Ports 10823 und 8080 freigegeben werden für das Protokoll TCP. 10823 ist dabei der Spielserver-Port und 8080 ist der Webport für das Webinterface, der Webport muss nur bei Bedarf freigegeben werden, eine Verwaltung kann auch weiterhin nur lokal auf dem Windows Server erfolgen via RDP. 
Wie Ports bei Windows freigeschaltet werden können, [erklären wir in diesem Guide](vserver-windows-port.md). 

Nach der Port Freigabe ist der Server öffentlich erreichbar, sofern er gestartet wurde. 
