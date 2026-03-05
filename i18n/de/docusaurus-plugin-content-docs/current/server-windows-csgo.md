---
id: server-windows-csgo
title: "CS:GO Dedicated Server Windows Setup"
description: "Lerne, wie du schnell und effizient einen CS:GO Dedicated Server auf deinem Server einrichtest → Jetzt mehr erfahren"
sidebar_label: "CS:GO"
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen VPS/Dedicated Server und willst darauf Gameserver installieren? Zum Beispiel einen CS:GO Dedicated Server? Dann bist du hier genau richtig! Im Folgenden erklären wir dir Schritt für Schritt, wie du so einen Service auf deinem Server installierst.



## Vorbereitung

Für die Einrichtung eines CS:GO Servers wird SteamCMD benötigt. SteamCMD ist die **Kommandozeilen-Version des Steam-Clients**. Mit diesem Tool kannst du schnell und einfach die VPS/Dedicated Server-Anwendungen beliebter Steam-Games herunterladen. SteamCMD findest du auf der offiziellen Valve Entwicklerseite: https://developer.valvesoftware.com/wiki/SteamCMD. 

Danach erfolgt der Download. Dieser enthält die **steamcmd.zip** Datei, die zuerst entpackt werden muss. Es empfiehlt sich, einen eigenen Ordner dafür anzulegen, in den die Datei entpackt wird. Am Ende solltest du die **steamcmd.exe** sehen. Starte diese und warte, bis der Installationsprozess abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des CS:GO Servers starten.



## Installation

Nach der Installation solltest du Befehle in der **Steam-Kommandozeile (steamcmd.exe)** ausführen können. Dort musst du dich einloggen. Das erfolgt mit dem Benutzer **anonymous**. Führe folgenden Befehl aus: `login anonymous`

Der nächste Schritt ist die Installation. Diese erfolgt mit dem Befehl `app_update 730`. Die App ID **730** steht für die **CS:GO Dedicated Server** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Bitte hab Geduld, bis der Download abgeschlossen ist, das kann bei größeren Spielen etwas dauern. Sobald erfolgreich, erscheint eine Erfolgsmeldung.

Damit der Server von außen sichtbar und erreichbar ist, müssen die genutzten Server-Ports in der Firewall freigegeben/weitergeleitet werden. Öffne dazu die Windows Firewall Einstellungen.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

In den Einstellungen müssen zusätzliche Regeln hinzugefügt werden. Klicke dazu auf die eingehenden und ausgehenden Regeln wie unten beschrieben und füge sie für die Ports 27015-27020 für die Protokolle TCP/UDP hinzu.



## Konfiguration

Bis hierhin hast du die Grundinstallation deines CS:GO Servers abgeschlossen. Weitere Server-Konfigurationen kannst du direkt über die Bearbeitung der Startdatei vornehmen. Navigiere in dein Root-Verzeichnis. Dort findest du den Ordner cfg, in dem du die Datei `server.cfg` öffnest. Dort kannst du Server-Optionen anpassen.

```
../steamapps/common/CS:GO-ds/game/csgo/cfg/server.cfg
```

## GSL Token registrieren

Damit andere Spieler deinem Server beitreten können, musst du einen Game Server Login Token (GSLT) generieren und einbinden. Dieser Token authentifiziert deinen Server bei Steam. Um einen GSLT zu erstellen, besuche http://steamcommunity.com/dev/managegameservers und generiere einen Token mit der Game ID **4465480**, die für das neue CS:GO Standalone steht.

Hast du den Token, binde ihn in deine Server-Startparameter mit `+sv_setsteamaccount <TOKEN>` ein. 



## Server starten & verbinden

Jetzt geht’s ans Starten deines Servers. Wechsle ins Hauptspielverzeichnis und führe folgenden Startbefehl aus:

```
.\CS:GO.exe -dedicated +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX +map de_dust2
```

Im Kommandozeilenfenster solltest du nun Logs sehen, die signalisieren, dass der Start erfolgreich war. Beachte, dass der erste Start etwas dauern kann, da alles eingerichtet wird. Alternativ kannst du dich direkt verbinden, indem du in der unteren Suchleiste der Serverliste nach `[deine_ip_adresse]:2456` suchst.


## Fazit

Glückwunsch, du hast deinen CS:GO Server erfolgreich auf deinem VPS/Dedicated Server installiert und konfiguriert! Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂