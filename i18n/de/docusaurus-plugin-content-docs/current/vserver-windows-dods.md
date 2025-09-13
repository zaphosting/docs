---
id: vserver-windows-dods
title: "VPS: Day of Defeat: Source Dedicated Server Windows Setup"
description: "Informationen zur Einrichtung eines Day of Defeat: Source Dedicated Servers auf einem Windows VPS von ZAP Hosting – ZAP Hosting.com Dokumentation"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen VPS oder Dedicated Server und möchtest darauf Gameserver installieren, zum Beispiel einen Day of Defeat:Source  Dedicated Server? Dann bist du hier genau richtig! Im Folgenden erklären wir dir Schritt für Schritt, wie du einen solchen Dienst auf deinem Server installierst.

<InlineVoucher />

## Vorbereitung

Für die Einrichtung eines Day of Defeat:Source Servers wird SteamCMD benötigt. SteamCMD ist die **Kommandozeilen Variante des Steam Clients**. Mit diesem Tool lassen sich Dedicated Server Anwendungen beliebter Steam Spiele schnell und einfach herunterladen. Du findest SteamCMD auf der offiziellen Valve Developer Website: https://developer.valvesoftware.com/wiki/SteamCMD. 

Im Anschluss lädst du das Paket herunter. Es enthält die Datei **steamcmd.zip**, die zunächst entpackt werden muss. Es empfiehlt sich, dafür einen separaten Ordner zu erstellen. Nach dem Entpacken solltest du die **steamcmd.exe** sehen. Führe sie aus und warte, bis der Installationsprozess abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, war der Vorgang erfolgreich und du kannst mit der Installation des Day of Defeat:Source  Servers fortfahren.

## Installation

Nach der Installation solltest du Befehle in der **Steam Kommandozeile (steamcmd.exe)** ausführen können. Melde dich dort an. Dies erfolgt mit dem Benutzer **anonymous**. Führe folgenden Befehl aus: `login anonymous`

Der nächste Schritt ist die Installation. Diese erfolgt mit dem Befehl `app_update 232290`. Die App ID **232290** steht für die Anwendung **Counter Strike 2 Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Bitte warte, bis der Download abgeschlossen ist. Bei größeren Spielen kann das etwas dauern. Nach erfolgreichem Abschluss erscheint eine Erfolgsmeldung.

Damit der Server extern sichtbar und erreichbar ist, müssen die verwendeten Serverports in der Firewall freigegeben/weitergeleitet werden. Öffne dazu die Windows Firewall Einstellungen.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

In den Einstellungen müssen zusätzliche Regeln hinzugefügt werden. Klicke dazu wie beschrieben auf eingehende und ausgehende Regeln und füge sie für die folgenden Ports hinzu: 27015 27020 für die Protokolle TCP/UDP.

## Konfiguration

An diesem Punkt ist die Grundinstallation deines Day of Defeat:Source  Servers abgeschlossen. Weitere Servereinstellungen kannst du durch direktes Bearbeiten der Start /Konfigurationsdatei vornehmen. Wechsle in dein Hauptverzeichnis. Navigiere darin in das Verzeichnis `cfg` und öffne die Datei `server.cfg`. Dort kannst du Serveroptionen anpassen.

```
../steamapps/common/dod-ds/dod/cfg/server.cfg
```

## GSL Token registrieren

Damit andere Spieler deinem Server beitreten können, musst du ein Game Server Login Token (GSLT) erstellen und hinterlegen. Dieses Token authentifiziert deinen Server bei Steam. Erzeuge ein GSLT unter http://steamcommunity.com/dev/managegameservers und verwende dabei die App ID 232290 für Counter Strike 2.

Füge das Token anschließend in die Startparameter deines Servers ein, z.B. mit `+sv_setsteamaccount <TOKEN>`.

## Server starten und verbinden

Jetzt kannst du deinen Server starten. Wechsle in das Hauptverzeichnis des Spiels und führe folgenden Startbefehl aus:

```
start srcds.exe -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

In der Konsole sollten nun Protokolle erscheinen, die einen erfolgreichen Start signalisieren. Beachte, dass der erste Start etwas länger dauern kann, da alles eingerichtet wird. Alternativ kannst du direkt verbinden, indem du in der Serverliste in der unteren Suchleiste nach folgender Adresse suchst: `[your_ip_address]:2456`.

## Abschluss

Glückwunsch, du hast den Day of Defeat:Source  Server auf deinem VPS erfolgreich installiert und konfiguriert! Für weitere Fragen oder Unterstützung wende dich bitte an unser Support Team, das täglich für dich da ist! 🙂

<InlineVoucher />
