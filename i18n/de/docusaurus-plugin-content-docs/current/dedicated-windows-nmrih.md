---
id: dedicated-windows-nmrih
title: "Dedicated Server: No More Room In Hell Dedicated Server Windows Setup"
description: "Lerne, wie du schnell und einfach einen No More Room In Hell Dedicated Gameserver auf deinem VPS oder Dedicated Server einrichtest → Jetzt mehr erfahren"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen VPS oder Dedicated Server und willst darauf Gameserver installieren? Zum Beispiel einen No More Room In Hell Dedicated Server? Dann bist du hier genau richtig! Im Folgenden erklären wir dir Schritt für Schritt, wie du so einen Service auf deinem Server installierst.



## Vorbereitung

Für die Einrichtung eines No More Room In Hell Servers wird SteamCMD benötigt. SteamCMD ist die **Kommandozeilen-Version des Steam-Clients**. Mit diesem Tool kannst du schnell und einfach die Dedicated Server-Anwendungen beliebter Steam-Games herunterladen. SteamCMD findest du auf der offiziellen Valve Entwicklerseite: https://developer.valvesoftware.com/wiki/SteamCMD. 

Danach erfolgt der Download. Dieser enthält die **steamcmd.zip** Datei, die zuerst entpackt werden muss. Es empfiehlt sich, einen eigenen Ordner anzulegen, in den die Datei entpackt wird. Am Ende solltest du die **steamcmd.exe** sehen. Starte diese und warte, bis der Installationsprozess abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des No More Room In Hell Servers starten.



## Installation

Nach der Installation solltest du Befehle in der **Steam-Kommandozeile (steamcmd.exe)** ausführen können. Dort musst du dich einloggen. Das funktioniert mit dem Benutzer **anonymous**. Führe folgenden Befehl aus: `login anonymous`

Der nächste Schritt ist die Installation. Diese erfolgt mit dem Befehl `app_update 317670`. Die App ID **317670** steht für die **No More Room In Hell Dedicated Server** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Sobald es erfolgreich war, erscheint eine Bestätigungsmeldung.

Damit der Server von außen sichtbar und erreichbar ist, müssen die verwendeten Server-Ports in der Firewall freigegeben/weitergeleitet werden. Öffne dazu die Windows Firewall Einstellungen.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

In den Einstellungen müssen zusätzliche Regeln hinzugefügt werden. Klicke dazu auf die eingehenden und ausgehenden Regeln wie unten beschrieben und füge sie für folgende Ports hinzu: 27015-27020 für die Protokolle TCP/UDP.



## Konfiguration

Bis hierhin hast du die Grundinstallation deines No More Room In Hell Servers abgeschlossen. Weitere Servereinstellungen kannst du vornehmen, indem du die Startdatei direkt bearbeitest. Navigiere in dein Root-Verzeichnis. Dort findest du den Ordner cfg, in dem du die Datei `server.cfg` öffnest. Hier kannst du Serveroptionen anpassen.

```
../steamapps/common/nmrih-ds/nmrih/cfg/server.cfg
```

## GSL Token registrieren

Damit andere Spieler deinem Server beitreten können, musst du einen Game Server Login Token (GSLT) generieren und einbinden. Dieser Token authentifiziert deinen Server bei Steam. Um einen GSLT zu erstellen, besuche http://steamcommunity.com/dev/managegameservers und generiere einen Token mit der Game ID 317670, die für No More Room In Hell steht.

Hast du den Token, füge ihn in deine Server-Startparameter mit `+sv_setsteamaccount <TOKEN>` ein. 



## Server starten & verbinden

Jetzt geht’s ans Starten deines Servers. Wechsle ins Hauptspielverzeichnis und führe folgenden Startbefehl aus:

```
start srcds.exe -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Im Kommandozeilenfenster solltest du nun Logs sehen, die signalisieren, dass der Start erfolgreich war. Beachte, dass der erste Start etwas dauern kann, da alles eingerichtet wird. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten die Suche nutzt und nach `[deine_ip_adresse]:2456` suchst.


## Fazit

Glückwunsch, du hast deinen No More Room In Hell Server erfolgreich auf deinem VPS eingerichtet und konfiguriert! Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂