---
id: dedicated-windows-valheim
title: "Dedicated Server: Valheim Dedicated Server Einrichtung"
description: Informationen zum Einrichten eines Valheim Dedicated Server auf einem Dedicated Server - ZAP-Hosting.com Dokumentation
sidebar_label: Valheim
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Windows Dedicated Server und möchtest darauf unter anderem Gameserver installieren? Beispielsweise einen Valheim Dedicated Server? Dann bist du hier genau richtig! Im Folgenden werden wir dir Schritt für Schritt erklären, wie du solch einen Dienst auf deinem Server installieren kannst.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5yYEMYR97w6xPfd/preview" title="Valehim Dedicated Server Setup on Windows VPS" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

<InlineVoucher />

## Vorbereitung
Verbinde dich für die Einrichtung deines Valheim Dedicated Server mit deinem vServer oder Rootserver per RDP. Solltest du noch nicht wissen, wie du dich per RDP mit deinem Server verbinden kannst, dann empfehlen wir einen Blick in die [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung zu werfen. Für die Einrichtung eines Valheim Server wird die SteamCMD benötigt. Die SteamCMD ist die **Kommandozeilen-Edition des Steam-Clients**. Über dieses Tool können schnell und einfach die Dedicated-Server-Anwendungen beliebter Steam-Games heruntergeladen werden. Die SteamCMD findest du auf der offiziellen Valve Entwickler Webseite: https://developer.valvesoftware.com/wiki/SteamCMD 

Im Anschluss erfolgt der Download. Dieser beinhaltet die **steamcmd.zip** Datei, welche zunächst entpackt werden muss. Erstelle dafür am besten einen separaten Ordner, wo die Datei dann entpackt wird. Als Resultat solltest du nun die **steamcmd.exe** sehen. Führe diese aus und warte, bis der Installationsprozess abgeschlossen ist. 

![](https://screensaver01.zap-hosting.com/index.php/s/6i72Yrj5TKC3tdd/preview)

Sobald die Meldung **Loading Steam API... OK** angezeigt wird, wurde der Vorgang erfolgreich abgeschlossen und es kann mit der Installation des Valheim Servers begonnen werden. 



## Installation

Nach der Installation solltest du die Möglichkeit haben, Befehle in der **Steam Kommandozeile (steamcmd.exe)** auszuführen. Dort ist jetzt der Login notwendig. Diesen führen wir über den **anonymous** Benutzer durch. Führe dafür folgenden Befehl durch: `login anonymous`

Als nächstes erfolgt die Installation. Diese wird mit dem `app_update 896660` Befehl durchgeführt. Die App ID **896660** steht in dem Fall für die **Valheim Dedicated Server** Applikation. 

![](https://screensaver01.zap-hosting.com/index.php/s/N88sMNnNfacK7zq/preview)

>Bitte unterbreche den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber es lohnt sich, geduldig zu sein! :)


Navigiere nun in das Verzeichnis, wo du die Installation durchgeführt hast, und gehe dort in das folgende Unterverzeichnis: **../steamapps/common/Valheim dedicated Server**/

Dort muss als Nächstes die Startdatei angelegt werden, welche zum Ausführen der Server Software benötigt wird. Erstelle dafür eine Datei mit dem folgenden Namen. start_headless.bat

:::info
Bitte stelle sicher, dass du die Dateiendungen anzeigen Option aktiv hast, damit auch die richtige Dateiendung verwendet wird. 
:::

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

![](https://screensaver01.zap-hosting.com/index.php/s/ByL8NWGRQ7qARNC/preview)

In den Einstellungen müssen nun weitere Regeln angelegt werden. Klicke dazu jeweils, wie im Folgenden beschrieben, auf die eingehenden und ausgehenden Regeln und füge die Ports 2456-2458 für die Protokolle TCP/UDP hinzu. 


## Konfiguration

Die eigentliche Einrichtung ist damit bereits abgeschlossen. Weitere Änderungen bezüglich der Konfiguration kannst du über die **start_headless_server.bat** Datei vornehmen. Dort hast du die Möglichkeit den Server Name und Server Passwort vorzunehmen. Navigiere dazu in das folgende Verzeichnis: 

```
../steamapps/common/Valheim dedicated Server/
```

## Spielen

Zum Abschluss der Einrichtung kannst du jetzt den Server starten, indem du die zuvor erstellte **start_headless_server.bat** Datei ausführst. Hierdurch sollte sich die Konsole des Servers öffnen und der Startprozess beginnen. Wenn alles wie erwartet verläuft, sollte der Server nach dem erfolgreichen Start in der Liste der Server sichtbar sein.
