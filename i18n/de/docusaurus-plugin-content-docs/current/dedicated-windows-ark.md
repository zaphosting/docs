---
id: dedicated-windows-ark
title: "Dedicated Server: ARK Survival Evolved Dedicated Server Windows Setup"
description: "Entdecke, wie du einen ARK: Survival Evolved Dedicated Server auf einem Windows VPS für nahtloses Multiplayer-Gaming einrichtest → Jetzt mehr erfahren"
sidebar_label: ARK Survival Evolved Dedicated Server Setup
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS und willst darauf Gameserver installieren? Zum Beispiel einen ARK: Survival Evolved Dedicated Server? Dann bist du hier genau richtig! Im Folgenden erklären wir dir Schritt für Schritt, wie du so einen Service auf deinem Server installierst. Verbinde dich per RDP mit deinem VPS, um deinen ARK: Survival Evolved Dedicated Server einzurichten. Falls du nicht weißt, wie du dich per RDP mit deinem Server verbindest, empfehlen wir dir einen Blick in die [Initial Access (RDP)](vserver-windows-userdp.md) Anleitung.

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BF23kJKNsFQyeyX/preview" title="ARK: Survival Evolved Dedicated Server Setup auf Windows VPS" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Tauche ein in unser Video, das alles für dich erklärt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art lernst!"/>



## Vorbereitung

Für die Einrichtung eines ARK Servers wird SteamCMD benötigt. SteamCMD ist die **Kommandozeilen-Version des Steam-Clients**. Mit diesem Tool kannst du schnell und einfach die Dedicated Server Anwendungen beliebter Steam-Games herunterladen. SteamCMD findest du auf der offiziellen Valve Entwicklerseite: https://developer.valvesoftware.com/wiki/SteamCMD. 

Anschließend erfolgt der Download. Dieser enthält die **steamcmd.zip** Datei, die zuerst entpackt werden muss. Es empfiehlt sich, einen eigenen Ordner zu erstellen, in den die Datei entpackt wird. Du solltest anschließend die **steamcmd.exe** sehen. Starte diese und warte, bis der Installationsprozess abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/QnqpbKQiEAFLL2T/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, wurde der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des ARK Servers starten.



## Installation

Nach der Installation solltest du Befehle in der **Steam Kommandozeile (steamcmd.exe)** ausführen können. Dort musst du dich einloggen. Das erfolgt mit dem Benutzer **anonymous**. Führe folgenden Befehl aus: `login anonymous`

Der nächste Schritt ist die Installation. Diese erfolgt mit dem Befehl `app_update 376030`. Die App ID **376030** steht für die **ARK: Survival Evolved Dedicated Server** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/RJzpFL4ZPSsAZZd/preview)



:::info
Bitte unterbrich den Prozess nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld lohnt sich! :)
:::



Navigiere in das Verzeichnis, in dem du die Installation durchgeführt hast, und gehe in das folgende Unterverzeichnis: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

Dort musst du die Startdatei erstellen, die zum Ausführen der Serversoftware benötigt wird. Erstelle eine Datei mit folgendem Namen: start-ark.bat

:::info
Stelle sicher, dass die Option „Dateinamenerweiterungen anzeigen“ aktiviert ist, damit die korrekte Dateiendung verwendet wird.
:::

Öffne die Datei, füge folgenden Inhalt ein und speichere die Änderungen:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



Damit der Server sichtbar und extern erreichbar ist, müssen die verwendeten Server-Ports in der Firewall freigegeben/weitergeleitet werden. Öffne dazu die Windows Firewall Einstellungen.

![](https://screensaver01.zap-hosting.com/index.php/s/p7iyYxZwfeGaZaW/preview)


In den Einstellungen müssen zusätzliche Regeln hinzugefügt werden. Klicke dazu auf die eingehenden und ausgehenden Regeln wie unten beschrieben und füge sie für folgende Protokolle und Ports hinzu:

- TCP eingehend und ausgehend: 27020
- UDP eingehend und ausgehend: 27015
- UDP eingehend und ausgehend: 7777-7778



## Konfiguration

Die eigentliche Einrichtung ist damit schon abgeschlossen. Weitere Konfigurationsänderungen kannst du in den Config-Dateien **DefaultGameUserSettings.ini** und **Gameusersettings.ini** vornehmen. Dort kannst du den Servernamen, Serverpasswort, Server-Admin-Passwort und viele weitere Optionen anpassen. Navigiere dazu in folgende Verzeichnisse:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Spielen

Am Ende der Einrichtung kannst du den Server jetzt starten, indem du die zuvor erstellte **start-ark.bat** Datei ausführst. Dadurch sollte sich die Server-Konsole öffnen und der Serverstartprozess beginnen. Wenn alles wie erwartet läuft, sollte der Server nach erfolgreichem Start in der Serverliste sichtbar sein.

![](https://screensaver01.zap-hosting.com/index.php/s/cENfRQGxK4NjM3Y/preview)