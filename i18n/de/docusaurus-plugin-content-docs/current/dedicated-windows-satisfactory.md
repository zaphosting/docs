---
id: dedicated-windows-satisfactory
title: "Dedicated Server: Satisfactory Dedicated Server Einrichtung"
description: Informationen zum Einrichten eines Satisfactory Dedicated Server auf einem Dedicated Server - ZAP-Hosting.com Dokumentation
sidebar_label: Satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';

## Einführung
Du hast einen Windows Dedicated Server und möchtest darauf unter anderem Gameserver installieren? Beispielsweise einen Satisfactory Dedicated Server? Dann bist du hier genau richtig! Im Folgenden werden wir dir Schritt für Schritt erklären, wie du solch einen Dienst auf deinem Server installieren kannst.

<YouTube videoId="rqtQJa_awGw" title="Satisfactory Dedicated Server Setup on Windows VPS" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst?  Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>


## Vorbereitung
Verbinde dich für die Einrichtung deines Satisfactory Dedicated Server mit deinem vServer oder Rootserver per RDP. Solltest du noch nicht wissen, wie du dich per RDP mit deinem Server verbinden kannst, dann empfehlen wir einen Blick in die [RDP Anleitung](vserver-windows-userdp.md) zu werfen. Für die Einrichtung eines Satisfactory Servers wird die SteamCMD benötigt. Die SteamCMD ist die **Kommandozeilen-Edition des Steam-Clients**. Über dieses Tool können schnell und einfach die Dedicated-Server-Anwendungen beliebter Steam-Games heruntergeladen werden. Die SteamCMD findest du auf der offiziellen Valve Entwickler Webseite: https://developer.valvesoftware.com/wiki/SteamCMD 

Im Anschluss erfolgt der Download. Dieser beinhaltet die **steamcmd.zip** Datei, welche zunächst entpackt werden muss. Erstelle dafür am besten einen separaten Ordner, wo die Datei dann entpackt wird. Als Resultat solltest du nun die **steamcmd.exe** sehen. Führe diese aus und warte, bis der Installationsprozess abgeschlossen ist. 

![image](https://user-images.githubusercontent.com/26007280/217031741-4f29ac21-d3e3-4c00-8b25-c1d15a95c213.png)

Sobald die Meldung **Loading Steam API... OK** angezeigt wird, wurde der Vorgang erfolgreich abgeschlossen und es kann mit der Installation des Satisfactory Servers begonnen werden. 



## Installation

Nach der Installation solltest du die Möglichkeit haben, Befehle in der **Steam Kommandozeile (steamcmd.exe)** auszuführen. Dort ist nun der Login notwendig. Diesen führen wir über den **anonymous** Benutzer durch. Führe dafür folgenden Befehl durch: `login anonymous`

Als nächstes erfolgt die Installation. Diese wird mit dem `app_update 1690800` Befehl durchgeführt. Die App ID **1690800** steht in dem Fall für die **Satisfactory Dedicated Server** Applikation. 

![image](https://user-images.githubusercontent.com/26007280/217031764-55338964-8547-4539-babc-2e12e78d8d98.png)



>Bitte unterbreche den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber es lohnt sich, geduldig zu sein! :)



Navigiere nun in das Verzeichnis, wo du die Installation durchgeführt hast, und gehe dort in das folgende Unterverzeichnis: **../steamapps/common/SatisfactoryDedicatedServer**

Dort muss als Nächstes die Startdatei angelegt werden, welche zum Ausführen der Server Software benötigt wird. Erstelle dafür eine Datei mit dem folgenden Namen: server-start.bat

:::info
Bitte stelle sicher, dass du die Dateiendungen anzeigen Option aktiv hast, damit auch die richtige Dateiendung verwendet wird. 
:::



Öffne diese Datei im Anschluss, füge den folgenden Inhalt hinzu und speichere die neu hinzugefügten Veränderung:

```
Factoryserver.exe -log -unattended
```

Im Anschluss wird die Datei ausgeführt. Bei dem ersten Startvorgang sollte ein Popup Fenster scheinen, in dem mitgeteilt wird, dass gewisse Komponenten notwendig sind, um das Programm auszuführen. Das Spiel benötigt die Visual C++ Runtime. Klicke auf Ja und führe die Installation durch. 

Damit der Server auch extern sichtbar und erreichbar ist, müssen die verwendeten Server Ports in der Firewall freigeschaltet/weitergeleitet werden. Öffne dazu die Windows Firewall Einstellungen. 

![image](https://user-images.githubusercontent.com/26007280/217031778-d5a2a978-6989-4602-83d9-5d37d8c5f2cc.png)



In den Einstellungen müssen nun weitere Regeln angelegt werden. Klicke dazu jeweils, wie im Folgenden beschrieben, auf die eingehenden und ausgehenden Regeln und füge diese für das UDP Protokoll und den Port 15000 hinzu.



## Konfiguration

Die eigentliche Einrichtung ist damit bereits abgeschlossen. Weitere Änderungen bezüglich der Konfiguration kannst du über die **ServerSettings.ini** Konfigurationsdatei vornehmen. Dort hast du die Möglichkeit den Server Name, Server Passwort und weitere Optionen vorzunehmen. Navigiere dazu in das folgende Verzeichnis: 

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/

```



## Spielen

Zum Abschluss der Einrichtung kannst du nun den Server starten, indem du die zuvor erstellte **server-start.bat** Datei ausführst. Hierdurch sollte sich die Konsole des Servers öffnen und der Startprozess beginnen. Wenn alles wie erwartet verläuft, sollte der Server nach dem erfolgreichen Start in der Liste der Server sichtbar sein.