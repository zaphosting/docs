---
id: dedicated-windows-avorion
title: "Dedicated Server: Avorion Dedicated Server Windows Setup"
description: "Entdecke, wie du den Avorion Dedicated Server auf deinem Windows VPS für nahtloses Gameplay-Hosting einrichtest → Jetzt mehr erfahren"
sidebar_label: Avorion
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS und möchtest den Avorion Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="How To Setup Avorion Dedicated Server on Windows VPS!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles ganz easy. Egal ob du es eilig hast oder lieber entspannt und anschaulich lernst!"/>


## Vorbereitung

Verbinde dich zunächst per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, schau dir unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

Sobald du auf deinem Server bist, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du ganz einfach verschiedene Steam Workshop- und Dedicated Server-Dateien runterladen kannst. Lade [SteamCMD von der offiziellen Valve-Seite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, wir nennen ihn hier `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** und verschiebe sie in den `steamcmd`-Ordner. Entpacke die Datei jetzt per Rechtsklick mit der Windows-Entpackfunktion oder einem Programm wie 7zip oder WinRAR. Danach solltest du eine **steamcmd.exe** Datei im Ordner haben.

Starte einfach **steamcmd.exe** und warte, bis die Installation komplett durchgelaufen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist alles erfolgreich abgeschlossen und du kannst mit der Installation des Avorion Dedicated Servers im nächsten Abschnitt weitermachen.

## Installation

Nach dem Start von **steamcmd.exe** kannst du Befehle in der Kommandozeile ausführen. Melde dich zuerst mit dem anonymen Benutzer an, indem du folgenden Befehl eingibst: `login anonymous`

Nach dem Login kannst du mit dem Download der Dateien starten.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen. Ersetze `[Pfad]` durch den gewünschten Pfad für deinen Server. Beispiel:
```
force_install_dir C:\Avorion-Server
```
:::

Starte jetzt den Download mit dem Befehl `app_update 565060`. Die App-ID **565060** steht für die **Avorion** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Bitte unterbrich den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Nach erfolgreichem Download gehst du in das Verzeichnis, in das die Serverdateien geladen wurden. Dort solltest du eine Kopie der **server.bat** Datei erstellen und diese z.B. in **startserver.bat** umbenennen. Diese neue `.bat` Datei nutzt du später zum Starten des Servers und zum Anpassen der Server-Konfiguration. Wir empfehlen dir, zuerst das Port Forwarding einzurichten und deinen Server zu konfigurieren.

### Portfreigabe für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Portfreigabe-Regeln für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt per Powershell-Befehle machen (einfacher) oder über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Per Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Klicke mit Rechts und wähle **Als Administrator ausführen**, damit du die nötigen Rechte hast und alles reibungslos funktioniert.

:::info
Stelle sicher, dass du die Powershell im Administrator-Modus startest, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge nun folgende Befehle in die Powershell ein:
```
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein Avorion Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Per Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall-Seite siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Erstelle neue Regeln für deinen Avorion Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 27000
- UDP eingehend und ausgehend: 27000, 27003, 27020, 27021

Falls du weitere Hilfe brauchst, schau dir unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung an.

</TabItem>
</Tabs>

Nachdem du die Regeln hinzugefügt hast, ist dein Server öffentlich erreichbar. Du kannst dich jetzt über die IP-Adresse deines Servers verbinden. Wähle im Hauptmenü deinen Charakter aus, gehe zum Tab **Spiele finden** und klicke auf **Server hinzufügen**. Gib dort deine Server-IP, den Port (standardmäßig 15636) und dein Server-Passwort (falls gesetzt, sonst leer lassen) ein.

Wir empfehlen dir, deinen Server zuerst über den nächsten Abschnitt zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines Avorion Servers abgeschlossen. Du kannst die Server-Einstellungen direkt in der **startserver.bat** Datei anpassen, die du vorher kopiert hast. Öffne sie mit einem Texteditor wie Notepad und ändere die Parameter nach deinen Wünschen.

Wenn du welt-spezifische Einstellungen ändern möchtest, musst du die Galaxie-Saves bearbeiten und die **server.ini** Datei anpassen. Diese findest du im Windows AppData-Verzeichnis unter folgendem Pfad:
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
Du kannst diesen Pfad ganz einfach öffnen, indem du gleichzeitig `STRG` + `R` drückst und im Ausführen-Dialog folgenden Pfad eingibst: `%userprofile%/AppData/Roaming/Avorion/galaxies`. Dann einfach auf **OK** klicken und du bist im Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server, indem du in das Basisverzeichnis deines Avorion Servers gehst und die **startserver.bat** ausführst, die du erstellt hast. Dadurch öffnet sich die Server-Konsole in einem Kommandozeilenfenster und der Startvorgang beginnt. Du kannst dich jetzt direkt über den Ingame-Serverbrowser verbinden, indem du deine Server-IP und den Port (Standard: 27000) eingibst.

## Fazit

Glückwunsch, du hast den Avorion Server erfolgreich auf deinem VPS installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!