---
id: vserver_windows_valheim
title: VPS/ROOT: Valheim Dedicated Server Setup
descriptionen: Informationen zum Einrichten eines Valheim Dedicated Server auf einem VPS/Rootserver - ZAP-Hosting.com Dokumentationen
sidebar_label: Valheim Dedicated Server Setup
---


Du hast einen Windows VPS oder Rootserver und möchtest darauf unter anderem Gameserver installieren? Beispielsweise einen Valheim Dedicated Server? Dann bist du hier genau richtig! Im folgenden werden wir dir Schritt für Schritt erklären, wie du solch einen Dienst auf deinem Server installieren kannst.

**📺Video:** Du bevorzugst eine Anleitung eher in Form eines Videos oder als zusätzliche visuelle Ergänzung? Kein Problem! Für dieses Thema stellen wir ebenfalls ein Video zur Verfügung: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/NWspZFmexqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Einführung

Verbinde dich für die Einrichtung deines Valheim Dedicated Server mit deinem VPS oder Rootserver per RDP. Solltest du noch nicht wissen, wie du dich per RDP mit deinem Server verbinden kannst, dann empfehlen wir einen Blick in die [RDP Anleitung](vserver_windows_userdp.md) zu werfen. 



## Vorbereitung

Für die Einrichtung eines Valheim Server wird die SteamCMD benötigt. Die SteamCMD ist die **Kommandozeilen-Edition des Steam-Clients**. Über dieses Tool können schnell und einfach die Dedicated-Server-Anwendungen beliebter Steam-Games heruntergeladen werden. Die SteamCMD findest du auf der offiziellen Valve Entwickler Webseite: https://developer.valvesoftware.com/wiki/SteamCMD 

Im Anschluss erfolgt der Download. Dieser beinhaltet die **steamcmd.zip** Datei, welche zunächst entpackt werden muss. Erstelle dafür am besten einen separaten Ordner, wo die Datei dann entpackt wird. Als Resultat solltest du nun die **steamcmd.exe** sehen. Führe diese aus und warte, bis der Installationsprozess abgeschlossen ist. 

![image](https://user-images.githubusercontent.com/26007280/217028019-99df003d-0a7d-4bc7-9f06-a9022862fd53.png)

Sobald die Meldung **Loading Steam API... OK** angezeigt wird, wurde der Vorgang erfolgreich abgeschlossen und es kann mit der Installation des Valheim Servers begonnen werden. 



## Installation

Nach der Installation solltest du die Möglichkeit haben, Befehle in der **Steam Kommandozeile (steamcmd.exe)** auszuführen. Dort ist nun der Login notwendig. Diesen führen wir über den **anonymous** Benutzer durch. Führe dafür folgenden Befehl durch: `login anonymous`

Als nächstes erfolgt die Installation. Diese wird mit dem `app_update 896660` Befehl durchgeführt. Die App ID **896660** steht in dem Fall für die **Valheim Dedicated Server** Applikation. 

![image](https://user-images.githubusercontent.com/26007280/217027978-f34caa53-3c85-428e-bd06-9a55684e0279.png)

> ⚠️Bitte unterbreche den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber es lohnt sich, geduldig zu sein! :)


Navigiere nun in das Verzeichnis, wo du die Installation durchgeführt hast, und gehe dort in das folgende Unterverzeichnis: **../steamapps/common/Valheim dedicated Server**/

Dort muss als nächstes die Startdatei angelegt werden, welche zum Ausführen der Server Software benötigt wird. Erstelle dafür eine Datei mit dem folgenden Namen. start_headless.bat

> ⚠️ Bitte stelle sicher, dass du die Dateiendungen anzeigen Option aktiv hast, damit auch die richtige Dateiendung verwendet wird. 

Öffne diese Datei im Anschluss, füge den folgenden Inhalt hinzu und speichere die neu hinzugefügten Veränderung:

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tip: Make a local copy of this script to avoid it being overwritten by steam.
REM NOTE: Minimum password length is 5 characters & Password cant be in the server name.
REM NOTE: You need to make sure che ports 2456-2458 is being forwarded to your server through your local router & firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

Damit der Server auch extern sichtbar und erreichbar ist, müssen die verwendeten Server Ports in der Firewall freigeschaltet/weitergeleitet werden. Öffne dazu die Windows Firewall Einstellungen. 

![image](https://user-images.githubusercontent.com/26007280/217027905-bb6bde60-1e9d-4db3-aadf-7b853abc963e.png)

In den Einstellungen müssen nun weitere Regeln angelegt werden. Klicke dazu jeweils, wie im Folgenden beschrieben, auf die eingehenden und ausgehenden Regeln und füge die Ports 2456-2458 für die Protokolle TCP/UDP hinzu. 


## Konfiguration

Die eigentliche Einrichtung ist damit bereits abgeschlossen. Weitere Änderungen bezüglich der Konfiguration kannst du über die **start_headless_server.bat** Datei vornehmen. Dort hast du die Möglichkeit den Server Name und Server Passwort vorzunehmen. Navigiere dazu in das  folgenden Verzeichnis: 

```
../steamapps/common/Valheim dedicated Server/
```

## Spielen

Zum Abschluss der Einrichtung kannst du nun den Server starten, indem du die zuvor erstellte **start_headless_server.bat** Datei ausführst. Hierdurch sollte sich die Konsole des Servers öffnen und der Startprozess beginnen. Wenn alles wie erwartet verläuft, sollte der Server nach dem erfolgreichen Start in der Liste der Server sichtbar sein.
