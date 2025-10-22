---
id: vserver-windows-soulmask
title: "VPS: Soulmask Dedicated Server Windows Setup"
description: "Entdecke, wie du den Soulmask Dedicated Server auf deinem Windows VPS oder Dedicated Server installierst für ein reibungsloses Gameplay → Jetzt mehr erfahren"
sidebar_label: Soulmask
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS oder Dedicated Server und möchtest den Soulmask Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du den Server auf deinem System einrichtest.

<InlineVoucher />

## Vorbereitung

Als Erstes verbinde dich per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, schau dir unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

Sobald du auf deinem Server bist, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien runterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du einfach verschiedene Steam Workshop- und Dedicated Server-Dateien herunterladen kannst. Lade dir [SteamCMD von der offiziellen Valve-Seite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) runter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, wir nennen ihn hier `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** und verschiebe sie in den `steamcmd` Ordner. Entpacke die Datei jetzt per Rechtsklick und Windows-Entpackfunktion oder mit Programmen wie 7zip oder WinRAR. Danach solltest du die **steamcmd.exe** Datei im Ordner haben.

Starte einfach **steamcmd.exe** und warte, bis die Installation komplett durchgelaufen ist.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist alles fertig und du kannst mit der Installation des Soulmask Dedicated Servers im nächsten Abschnitt weitermachen.

## Installation

Nach der Installation solltest du im **steamcmd.exe** Kommandozeilenfenster Befehle ausführen können. Melde dich zuerst mit dem anonymen Benutzer an, indem du folgenden Befehl eingibst: `login anonymous`

Wenn du eingeloggt bist, kannst du mit dem Download der Dateien starten.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad ersetzt. Zum Beispiel:
```
force_install_dir C:\Soulmask-Server
```
:::

Starte jetzt den Download mit dem Befehl `app_update 3017310`. Die App-ID **3017310** steht für die **Soulmask** Anwendung.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Bitte unterbrich den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Wenn der Download abgeschlossen ist, geh in das Verzeichnis, in das die Serverdateien geladen wurden. Dort kannst du die **StartServer.bat** nutzen, um den Server zu starten. Wir empfehlen aber, vorher noch das Portforwarding einzurichten und deinen Server zu konfigurieren.

### Portfreigabe für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du die Portfreigabe für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt per PowerShell machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Per PowerShell" default>

Öffne die Windows-Suche und suche nach **PowerShell**. Rechtsklick und **Als Administrator ausführen** wählen, damit du die nötigen Rechte hast und alles reibungslos funktioniert.

:::info
Stelle sicher, dass du PowerShell im Administrator-Modus startest, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge nun folgende Befehle in die PowerShell ein:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein Soulmask Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Per Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Erstelle neue Regeln für deinen Soulmask Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 8777, 27015
- UDP eingehend und ausgehend: 8777, 27015

Wenn du dabei Hilfe brauchst, schau dir unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung an.

</TabItem>
</Tabs>

Nachdem du die Regeln hinzugefügt hast, ist dein Server erreichbar. Du kannst dich jetzt über die IP-Adresse deines Servers verbinden. Gehe dazu im Spiel ins Multiplayer-Menü, wähle IP Direct Connect und gib deine IP-Adresse sowie den Port ein (standardmäßig 8777 oder wie du ihn eingestellt hast).

Wir empfehlen, deinen Server zuerst zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines Soulmask Servers abgeschlossen. Weitere Einstellungen kannst du in der **StartServer.bat** Datei im Hauptverzeichnis vornehmen sowie in der **GameUserSettings.ini** Datei unter `../WS/Saved/Config/WindowsServer`.

Sieh dir unsere [Server Konfiguration](soulmask-configuration.md) an, um alle verfügbaren Parameter und Optionen für deinen Soulmask Server kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server, indem du im Hauptverzeichnis die **StartServer.bat** ausführst. Das öffnet die Server-Konsole in einem Kommandozeilenfenster und startet den Server.

:::tip
Falls dein Server nicht startet und das Kommandozeilenfenster sofort wieder schließt, schau im Verzeichnis `../WS/Saved/Logs` in die neuesten Logs, um den Fehler zu finden.

Ein häufiger Fehler hängt mit dem Steam Online Service zusammen, der bei den Windows Dedicated Server-Binaries wegen falscher Verpackung nicht startet. Falls der Fehler Steam betrifft, verschiebe folgende Dateien aus deinem Hauptverzeichnis in den Ordner `../WS/Binaries/Win64`: `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll`. Starte den Server danach erneut – er sollte jetzt im Kommandozeilenfenster starten.
:::

Du kannst dich jetzt direkt über die IP und den Port 8777 im Multiplayer-Menü mit deinem Server verbinden.

Wenn dein Server in der Serverliste erscheinen soll, check unsere [Server Konfiguration](soulmask-configuration.md) und füge den passenden `-SteamServerName` Parameter in deine **StartServer.bat** ein. Speichere die Datei und starte den Server erneut.

Herzlichen Glückwunsch, du hast Soulmask erfolgreich auf deinem Windows Dedicated Server installiert!

## Fazit

Glückwunsch, du hast den Soulmask Server erfolgreich auf deinem VPS installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />