---
id: dedicated-windows-valheim
title: "Dedicated Server: Valheim Dedicated Server Windows Setup"
description: "Entdecke, wie du einen Valheim Dedicated Server auf deinem eigenen Server für nahtloses Multiplayer-Gaming einrichtest → Jetzt mehr erfahren"
sidebar_label: Valheim
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Dedicated Server und willst darauf Gameserver installieren? Zum Beispiel einen Valheim Dedicated Server? Dann bist du hier genau richtig! Im Folgenden erklären wir dir Schritt für Schritt, wie du so einen Service auf deinem Server installierst.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/D2doaAqjzdMSo9r/preview" title="Valheim Dedicated Server Setup auf Windows VPS" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Tauche ein in unser Video, das alles für dich erklärt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art lernst!"/>

<InlineVoucher />

## Vorbereitung
Für die Einrichtung eines Valheim Servers wird SteamCMD benötigt. SteamCMD ist die **Kommandozeilen-Version des Steam-Clients**. Mit diesem Tool kannst du schnell und einfach die Dedicated Server-Anwendungen beliebter Steam-Games herunterladen. SteamCMD findest du auf der offiziellen Valve Entwicklerseite: https://developer.valvesoftware.com/wiki/SteamCMD. 

Anschließend erfolgt der Download. Dieser enthält die **steamcmd.zip** Datei, die zuerst entpackt werden muss. Es empfiehlt sich, einen eigenen Ordner zu erstellen, in den die Datei entpackt wird. Du solltest anschließend die **steamcmd.exe** sehen. Starte diese und warte, bis der Installationsprozess abgeschlossen ist.
![](https://screensaver01.zap-hosting.com/index.php/s/Y5zygHw2DFJa4dZ/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Valheim Servers starten.



## Installation

Nach der Installation solltest du Befehle in der **Steam-Kommandozeile (steamcmd.exe)** ausführen können. Dort musst du dich einloggen. Das erfolgt mit dem Benutzer **anonymous**. Führe folgenden Befehl aus: `login anonymous`

Der nächste Schritt ist die Installation. Diese erfolgt mit dem Befehl `app_update 896660`. Die App ID **896660** steht für die **Valheim Dedicated Server** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/PxZFZat7cP2C26k/preview)

:::info
Bitte unterbrich den Prozess nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld lohnt sich! :)
:::


Navigiere in das Verzeichnis, in dem du die Installation durchgeführt hast, und gehe in den folgenden Unterordner:  **../steamapps/common/Valheim dedicated Server/**

Dort musst du die Startdatei erstellen, die zum Ausführen der Serversoftware benötigt wird. Erstelle eine Datei mit folgendem Namen: start_headless.bat

:::info
Stelle sicher, dass die Option „Dateinamenerweiterungen anzeigen“ aktiviert ist, damit die korrekte Dateiendung verwendet wird.
:::

Öffne die Datei, füge folgenden Inhalt ein und speichere die Änderungen:

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tipp: Erstelle eine lokale Kopie dieses Skripts, damit es nicht von Steam überschrieben wird.
REM HINWEIS: Das Passwort muss mindestens 5 Zeichen lang sein & darf nicht im Servernamen vorkommen.
REM HINWEIS: Stelle sicher, dass die Ports 2456-2458 über deinen lokalen Router & die Firewall an deinen Server weitergeleitet werden.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

Damit der Server extern sichtbar und erreichbar ist, müssen die verwendeten Server-Ports in der Firewall freigegeben/weitergeleitet werden. Öffne dazu die Windows Firewall Einstellungen.

![](https://screensaver01.zap-hosting.com/index.php/s/MTHjL85zKsLtN9g/preview)

In den Einstellungen müssen zusätzliche Regeln hinzugefügt werden. Klicke dazu auf die eingehenden und ausgehenden Regeln wie unten beschrieben und füge sie für die folgenden Ports hinzu: 2456-2458 für die Protokolle TCP/UDP.




## Konfiguration

Die eigentliche Einrichtung ist damit schon abgeschlossen. Weitere Konfigurationsänderungen kannst du in der **start_headless_server.bat** Datei vornehmen. Dort kannst du den Servernamen, das Serverpasswort, das Admin-Passwort und viele weitere Optionen anpassen. Navigiere dazu in folgendes Verzeichnis:

```
../steamapps/common/Valheim dedicated Server/
```



## Spielen

Am Ende der Einrichtung kannst du den Server jetzt starten, indem du die zuvor erstellte **start_headless_server.bat** Datei ausführst. Dadurch sollte sich die Serverkonsole öffnen und der Serverstartprozess beginnen. Wenn alles wie erwartet läuft, sollte der Server nach erfolgreichem Start in der Serverliste sichtbar sein.

<InlineVoucher />