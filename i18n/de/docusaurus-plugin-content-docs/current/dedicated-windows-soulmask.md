---
id: dedicated-windows-soulmask
title: "Dedicated Server: Soulmask Dedicated Server Windows Setup"
description: "Entdecke, wie du den Soulmask Dedicated Server schnell und effizient auf deinem Windows VPS oder Dedicated Server installierst → Jetzt mehr erfahren"
sidebar_label: Soulmask
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS oder Dedicated Server und möchtest den Soulmask Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server installierst.

<InlineVoucher />

## Vorbereitung

Als Erstes verbinde dich per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung.

Sobald du Zugriff auf deinen Server hast, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du einfach verschiedene Steam Workshop- und Dedicated Server-Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Webseite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Beispiel nennen wir ihn `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** Datei und verschiebe sie in deinen `steamcmd` Ordner. Entpacke die Datei jetzt per Rechtsklick mit der Windows-eigenen Entpackfunktion oder mit Programmen wie 7zip oder Winrar. Danach solltest du eine **steamcmd.exe** Datei entpackt haben.

Starte einfach **steamcmd.exe** und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Soulmask Dedicated Servers im nächsten Abschnitt weitermachen.

## Installation

Nach der Installation solltest du Befehle im **steamcmd.exe** Kommandozeilenfenster ausführen können, das du zuvor gestartet hast. Du musst dich zuerst anmelden, bevor du irgendwas machen kannst, und zwar als **anonymous** User mit dem Befehl: `login anonymous`

Nachdem du eingeloggt bist, kannst du jetzt mit dem Download der Dateien starten.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad für deinen Server ersetzt. Zum Beispiel:
```
force_install_dir C:\Soulmask-Server
```
:::

Führe nun den Befehl `app_update 3017310` aus, um den Download zu starten. Die App-ID **3017310** steht für die **Soulmask** Anwendung.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Bitte unterbrich den Prozess nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Wenn der Download erfolgreich war, gehe in das Download-Verzeichnis, in dem alle Serverdateien gespeichert wurden. Hier kannst du die **StartServer.bat** nutzen, um den Server zu starten. Wir empfehlen jedoch, zuerst das Port Forwarding einzurichten und deinen Server zu konfigurieren.

### Port Forwarding für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Port-Weiterleitungsregeln für die Ports anlegen, die der Dedicated Server nutzt. Das kannst du entweder direkt über PowerShell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **PowerShell**. Klicke mit Rechts und wähle **Als Administrator ausführen**, damit die nötigen Berechtigungen vorhanden sind und alles reibungslos funktioniert.

:::info
Stelle sicher, dass du PowerShell im Administrator-Modus startest, sonst werden die Einstellungen möglicherweise nicht korrekt übernommen.
:::

Kopiere und füge dann die folgenden Befehle in die PowerShell ein:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein Soulmask Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall-Seite siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen Soulmask Server anlegen. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 8777, 27015
- UDP eingehend und ausgehend: 8777, 27015

Falls du dabei Hilfe brauchst, schau in unsere [Port Forwarding (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

Nachdem du diese Regeln hinzugefügt hast, ist dein Server erreichbar. Du kannst dich also über die IP-Adresse deines Servers verbinden. Gehe dazu im Hauptmenü auf Multiplayer, wähle IP Direct Connect und gib deine IP-Adresse sowie den Port ein, der standardmäßig 3724 ist oder den du eingerichtet hast.

Wir empfehlen, deinen Server zuerst über den nächsten Abschnitt zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines Soulmask Servers abgeschlossen. Weitere Servereinstellungen kannst du anpassen, indem du die Parameter in deiner **StartServer.bat** Datei im Root-Verzeichnis und in der **GameUserSettings.ini** Datei unter `../WS/Saved/Config/WindowsServer` bearbeitest.

Sieh dir unsere [Server Konfiguration](soulmask-configuration.md) Anleitung an, um alle verfügbaren Parameter und Optionen für deinen Soulmask Server kennenzulernen.

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server, indem du im Root-Verzeichnis die **StartServer.bat** ausführst. Dadurch öffnet sich die Server-Konsole in einem Kommandozeilenfenster und der Startvorgang beginnt.

:::tip
Falls dein Server nicht startet und das Kommandozeilenfenster einfach verschwindet, schau im Verzeichnis `../WS/Saved/Logs` in die neuesten Logs, um den Fehler zu finden.

Ein häufiger Fehler hängt mit dem Steam Online Service zusammen, der bei den Windows Dedicated Server Binaries wegen falscher Verpackung nicht startet. Wenn der Fehler mit Steam zu tun hat, verschiebe folgende Dateien aus deinem Root-Verzeichnis in den Ordner `../WS/Binaries/Win64`: `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll`. Versuche danach den Server erneut zu starten – jetzt sollte er im Kommandozeilenfenster korrekt starten.
:::

Du kannst dich jetzt direkt über die IP-Adresse und den Port 8777 im Multiplayer-Menü des Spiels mit deinem Server verbinden.

Wenn dein Server in der Serverliste erscheinen soll, schau in unsere [Server Konfiguration](soulmask-configuration.md) Anleitung und füge den passenden `-SteamServerName` Parameter in deine **StartServer.bat** Datei ein. Speichere die Datei und starte die Batch-Datei erneut.

Du hast Soulmask erfolgreich auf deinem Windows Dedicated Server installiert.

<InlineVoucher />