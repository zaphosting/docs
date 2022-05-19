---
id: vserver_windows_fs_22
title: vServer: Landwirtschafts-Simulator 2022 auf Windows installieren
description: Informationen wie du einen Landwirtschafts-Simulator Dedicated Server 2022 auf deinen Windows vServer und Dedicated Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Landwirtschafts-Simulator 2022
---

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/VGVPt0cmgTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

# Installation eines Dedicated Servers für den Landwirtschafts-Simulator 2022

> :information_source: Diese Anleitung gilt auch für einen Dedicated Server von ZAP-Hosting mit Windowsserver 2016/2019. Wie Windows auf einem Dedicated Server installiert werden kann, erklären wir [hier](https://zap-hosting.com/guides/docs/de/dedicated_windows/).

## Basic Informationen: 
Es wird ein Server, basierend auf Windowsserver 2016/2019 mit mindestens 4x 2,4 GHz CPU (AMD/Intel) sowie mindestens 2GB RAM (DDR3/4) und 6GB freien Speicher (SSD oder besser, bevorzugt) benötigt. Der Server muss auf der 64 Bit Architektur laufen. 
Des Weiteren wird eine eigene GameLizenz benötigt (keine Steam Version), sowie eine öffentliche IPv4 Adresse. Eine GPU oder eine Soundkarte sind für den Dedicated Server nicht notwendig. 
Je nachdem, wie stark der Dedicated Server gemodded wird, mit Mods oder mit DLCs erweitert wird, sind ggf. mehr Ressourcen nötig. 


## Schritt 1 Digitale Lizenz erwerben

Es wird eine digitale Version des Landwirtschafts-Simulator 2022 benötigt, es darf keine Steam Version sein. 
Die digitale Version kann auf der [Landwirtschafts-Simulator Webseite](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital) erworben werden.
Nachdem die digitale Version erworben wurde, kann der Landwirtschafts-Simulator online gedownloadet werden, folge dazu dem [Link](https://eshop.giants-software.com/downloads.php) aus der Mail, die du von Giants erhalten hast.
> Wichtig: In der Mail befindet sich der GameKey der zum Download als auch zur späteren Aktivierung der Installation benötigt wird. 

![image](https://user-images.githubusercontent.com/13604413/159173431-deafbefa-f186-4acc-9605-1d980142c5c0.png)

## Schritt 2 Download des Landwirtschafts-Simulator direkt auf deinen Windowserver

Verbinde dich via [RDP](https://zap-hosting.com/guides/docs/de/vserver_windows_userdp/) zu deinem Windowsserver. Nachdem du verbunden bist, öffne den Browser und rufe erneut den [Link](https://eshop.giants-software.com/downloads.php) aus der Mail auf. Gebe dort dann deinen GameKey ein und wähle dann den Download für Windows8/10. 

![image](https://user-images.githubusercontent.com/13604413/159173433-c3c90cb4-0c5c-4e60-a61c-ce150e5b99f2.png)

Anschließend wird die Datei heruntergeladen und sollte sich dann im Download Verzeichnis befinden. (Das Downloadverzeichnis kann abweichend sein)


![image](https://user-images.githubusercontent.com/13604413/159173436-409b2130-0165-424f-bbff-996f7b149730.png)

Mit einem Doppelklick wird die Datei geöffnet und es kann die Setup.exe ausgeführt werden.
Anschließend liest man die TOS und bestätigt sie. Danach kann die Installation als Standard oder Benutzerdefiniert erfolgen, in der Regel reicht Standard aus. 
Zum Abschluss klickt man auf installieren und der Landwirtschafts-Simulator 2022 wird nun installiert, dies kann einige Minuten dauern. 

![image](https://user-images.githubusercontent.com/13604413/159173444-037c1c40-e2a1-4551-9aaf-bc2aa402c9d0.png)

Sobald der Installationsvorgang beendet ist, erscheint folgende Meldung, welche mit "Fertigstellen" bestätigt werden kann. 


![image](https://user-images.githubusercontent.com/13604413/159173446-faee231b-8635-48f3-9caa-7c78e617702a.png)

Die Basis-Installation ist nun abgeschlossen. 

## Schritt 3 Aktivierung des Games und Konfiguration des Dedicated Servers

Nun muss der Landwirtschafts-Simulator  gestartet werden. Auf dem Desktop sollte eine Verknüpfung liegen, falls nicht, kann er auch über das Windows Menü gestartet werden. 
Fehler bezüglich einer fehlenden GPU oder ähnliches können ignoriert bzw. mit Nein/Abbrechen geschlossen werden. Der Landwirtschafts-Simulator muss nur gestartet werden, um den Key eingeben zu können. 

![image](https://user-images.githubusercontent.com/13604413/159173458-691716a6-6329-45d2-a782-e191388a7041.png)

![image](https://user-images.githubusercontent.com/13604413/159173461-3b03f54d-5b97-40e3-be2a-e0ca09da41bf.png)

Nun muss in der Config des Dedicated Servers ein Login Name und Passwort gesetzt bzw. geändert/ausgelesen werden, damit ein Login in das Webinterface des Dedicated Servers möglich ist. 
Die Config ist in der Standardinstallation unter 
`C:\Program Files (x86)\Landwirtschafts-Simulator 2022` zu finden unter dem Namen `"dedicatedServer.xml"`. 
Die Logindaten können frei angepasst werden. 

![image](https://user-images.githubusercontent.com/13604413/159173467-2341681d-a40d-44c1-bfdb-8523a716ff41.png)

## Schritt 4 Landwirtschafts-Simulator 2022 Dedicated Server starten

Um den Dedicated Server zu starten, muss im gleichen Verzeichnis, wo auch die `"dedicatedServer.xml"` liegt, die `"dedicatedServer.exe"` ausgeführt werden.

![image](https://user-images.githubusercontent.com/13604413/159173468-5f9473f8-734d-4236-a079-2c4a83e87caf.png)

Anschließend kann das Webinterface via `https://SERVER-IP:8080` geöffnet werden. 

![image](https://user-images.githubusercontent.com/13604413/159173472-525e9125-2011-4550-bc7c-a95fb20f6667.png)

Der Login ist mit den zuvor gesetzten/ausgelesenen Login Daten aus der `"dedicatedServer.xml"` möglich. 
Die weitere Konfiguration ist im Webinterface selbsterklärend und kann mit wenigen Klicks vorgenommen werden, ganz nach den persönlichen Wünschen. 

## Schritt 5 Ports freischalten in der Firewall

Der Server soll natürlich öffentlich erreichbar sein um mit Freunden spielen zu können. Dazu müssen die Ports des Servers in der Windows Firewall freigeschaltet werden. Es müssen die Ports 10823 und 8080 freigegeben werden für das Protokoll TCP. 10823 ist dabei der Gameserverport und 8080 ist der Webport für das Webinterface, der Webport muss nur bei Bedarf freigegeben werden, eine Verwaltung kann auch weiterhin nur lokal auf dem Windows Server erfolgen via RDP. 
Wie Ports bei Windows freigeschaltet werden können, [erklären wir in diesem Guide](https://zap-hosting.com/guides/docs/de/vserver_windows_port/). 

Nach der Port Freigabe ist der Server öffentlich erreichbar, sofern er gestartet wurde. 
