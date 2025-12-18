---
id: dedicated-windows-cscz
title: "Dedicated Server: Counter-Strike: Condition Zero Dedicated Server Windows Setup"
description: "Lerne, wie du schnell und einfach einen Counter-Strike: Condition Zero Dedicated Server auf deinem VPS oder Dedicated Server einrichtest → Jetzt mehr erfahren"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen VPS oder Dedicated Server und willst darauf Gameserver installieren? Zum Beispiel einen Counter-Strike: Condition Zero Dedicated Server? Dann bist du hier genau richtig! Im Folgenden erklären wir dir Schritt für Schritt, wie du so einen Service auf deinem Server installierst.



## Vorbereitung

Für die Einrichtung eines Counter-Strike: Condition Zero Servers wird SteamCMD benötigt. SteamCMD ist die **Kommandozeilen-Version des Steam-Clients**. Mit diesem Tool kannst du schnell und einfach die Dedicated Server-Anwendungen beliebter Steam-Games herunterladen. SteamCMD findest du auf der offiziellen Valve Entwicklerseite: https://developer.valvesoftware.com/wiki/SteamCMD. 

Anschließend erfolgt der Download. Dabei erhältst du die **steamcmd.zip** Datei, die zuerst entpackt werden muss. Es empfiehlt sich, einen eigenen Ordner anzulegen, in den du die Datei entpackst. Am Ende solltest du die **steamcmd.exe** sehen. Starte diese und warte, bis der Installationsprozess abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, wurde der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Counter-Strike: Condition Zero Servers starten.



## Installation

Nach der Installation solltest du Befehle in der **Steam-Kommandozeile (steamcmd.exe)** ausführen können. Dort musst du dich einloggen. Das funktioniert mit dem Benutzer **anonymous**. Führe folgenden Befehl aus: `login anonymous`

Der nächste Schritt ist die Installation. Diese erfolgt mit dem Befehl `app_update 90`. Die App ID **90** steht für die **Counter-Strike: Condition Zero Dedicated Server** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Bitte hab Geduld, bis der Download abgeschlossen ist – bei größeren Spielen kann das eine Weile dauern. Sobald alles erfolgreich ist, erscheint eine Bestätigungsmeldung.

Damit der Server von außen sichtbar und erreichbar ist, müssen die genutzten Server-Ports in der Firewall freigegeben/weitergeleitet werden. Öffne dazu die Windows Firewall Einstellungen.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

In den Einstellungen müssen zusätzliche Regeln hinzugefügt werden. Klicke dazu auf die eingehenden und ausgehenden Regeln wie unten beschrieben und füge sie für folgende Ports hinzu: 27015-27020 für die Protokolle TCP/UDP.



## Konfiguration

Bis hierhin hast du die Grundinstallation deines Counter-Strike: Condition Zero Servers abgeschlossen. Weitere Server-Einstellungen kannst du direkt über die Bearbeitung der Startdatei vornehmen. Gehe dazu in dein Root-Verzeichnis. Navigiere dort in den Ordner cfg und öffne die Datei `server.cfg`. Dort kannst du Server-Optionen anpassen.

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```



## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server. Wechsle ins Hauptspielverzeichnis und führe folgenden Startbefehl aus:

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

Im Kommandozeilenfenster solltest du nun Logs sehen, die signalisieren, dass der Server erfolgreich gestartet wurde. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Alternativ kannst du dich direkt verbinden, indem du in der Serverliste unten die Suchleiste nutzt und nach `[deine_ip_adresse]:2456` suchst.


## Fazit

Glückwunsch, du hast deinen Counter-Strike: Condition Zero Server erfolgreich auf deinem VPS installiert und konfiguriert! Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Seite – zögere nicht, uns zu kontaktieren! 🙂