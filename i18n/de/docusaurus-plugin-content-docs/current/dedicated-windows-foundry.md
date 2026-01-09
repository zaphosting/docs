---
id: dedicated-windows-foundry
title: "Dedicated Server: Foundry Dedicated Server Windows Setup"
description: "Entdecke, wie du schnell und einfach einen Foundry Dedicated Server auf deinem Windows VPS oder Dedicated Server einrichtest → Jetzt mehr erfahren"
sidebar_label: Foundry
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS oder Dedicated Server und möchtest darauf den Foundry Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="How To Setup Foundry Dedicated Server on Windows VPS!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art lernst!"/>



## Vorbereitung

Zuerst verbinde dich per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung.

Sobald du auf deinem Server bist, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du ganz easy verschiedene Steam Workshop- und Dedicated Server Dateien runterladen kannst. Lade [SteamCMD von der offiziellen Valve-Webseite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, wir nennen ihn hier `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** und verschiebe sie in den `steamcmd`-Ordner. Jetzt entpackst du die Datei per Rechtsklick und Windows-eigener Entpackfunktion oder mit Programmen wie 7zip oder Winrar. Am Ende solltest du eine **steamcmd.exe** Datei haben.

Starte einfach **steamcmd.exe** und warte, bis die Installation komplett durchgelaufen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist alles erfolgreich abgeschlossen und du kannst mit der Foundry Dedicated Server Installation im nächsten Abschnitt starten.

## Installation

Nach der Installation solltest du im **steamcmd.exe** Kommandozeilenfenster Befehle ausführen können. Melde dich zuerst mit dem Benutzer **anonymous** an, indem du folgenden Befehl eingibst: `login anonymous`

Sobald du eingeloggt bist, kannst du mit dem Download der Dateien starten.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad ersetzt. Beispiel: 
```
force_install_dir C:\Foundry-Server
```
:::

Starte jetzt den Download mit dem Befehl `app_update 2915550`. Die App-ID **2915550** steht für die **Foundry** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Bitte unterbrich den Prozess nicht vor Abschluss, um Fehler zu vermeiden. Es dauert einen Moment, aber Geduld zahlt sich aus! :)
:::

Nach erfolgreichem Download gehst du in das Download-Verzeichnis, wo alle Serverdateien liegen. Dort kannst du die **FoundryDedicatedServerLauncher.exe** starten, um den Server zu starten. Wir empfehlen aber zuerst das Port Forwarding und die Serverkonfiguration vorzunehmen.

### Portfreigabe für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du die Portfreigabe für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt über PowerShell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **PowerShell**. Rechtsklick und **Als Administrator ausführen** auswählen, damit du die nötigen Rechte hast und alles reibungslos funktioniert.

:::info
Stelle sicher, dass du PowerShell im Administrator-Modus startest, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge nun folgende Befehle in die PowerShell ein:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein Foundry Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Erstelle neue Regeln für deinen Foundry Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 3724, 27015
- UDP eingehend und ausgehend: 3724, 27015

Falls du Hilfe brauchst, schau dir unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung an.

</TabItem>
</Tabs>

Nachdem du die Regeln hinzugefügt hast, ist dein Server erreichbar. Du kannst dich über die IP-Adresse deines Servers verbinden. Gehe dazu im Hauptmenü auf Multiplayer, wähle IP Direct Connect und gib deine IP-Adresse sowie den Port 3724 (Standard) ein.

Wir empfehlen dir, zuerst die Servereinstellungen zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines Foundry Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei vornehmen. Gehe in deinen Spielordner und erstelle (falls noch nicht vorhanden) eine neue Datei namens **app.cfg** im Hauptverzeichnis. Diese liegt im gleichen Ordner wie die **FoundryDedicatedServerLauncher.exe**.

Öffne die **app.cfg** mit Notepad oder einem Editor deiner Wahl und füge die gewünschten Konfigurationsparameter hinzu. Jeder Parameter kommt in eine neue Zeile, mit einem Gleichheitszeichen und dem Wert, den du setzen möchtest.

Hier ein Beispiel mit drei Einstellungen:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Alle verfügbaren Optionen und ihre Bedeutung findest du in unserer [Server Konfiguration](foundry-configuration.md) Anleitung.

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Gehe in das Hauptverzeichnis und starte **FoundryDedicatedServerLauncher.exe**. Das öffnet die Server-Konsole im Kommandozeilenfenster und startet den Server.

Verbinde dich direkt über deine IP, indem du im Spiel auf **Multiplayer -> IP Direct Connect** gehst und deine Server-IP sowie den Port 3724 eingibst (Standard, den du freigegeben hast).

Wenn dein Server in der Serverliste erscheinen soll, füge in der Konfigurationsdatei die Parameter `server_name` und `server_is_public` hinzu. Speichere die Datei und starte den Server erneut.

Herzlichen Glückwunsch, du hast Foundry erfolgreich auf deinem Windows Dedicated Server installiert!