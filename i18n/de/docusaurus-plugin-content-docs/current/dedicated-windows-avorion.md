---
id: dedicated-windows-avorion
title: "Dedicated Server: Avorion Dedicated Server Windows Setup"
description: "Entdecke, wie du den Avorion Dedicated Server auf deinem Windows VPS einrichtest für nahtloses Gameplay-Hosting → Jetzt mehr erfahren"
sidebar_label: Avorion
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS und möchtest den Avorion Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="How To Setup Avorion Dedicated Server on Windows VPS!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder einfach lieber auf die unterhaltsamste Art lernst!"/>
<InlineVoucher />

## Vorbereitung

Zuerst verbinde dich per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [Initial Access (RDP)](vserver-windows-userdp.md) Anleitung.

Sobald du auf deinem Server bist, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien runterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du einfach verschiedene Steam Workshop und Dedicated Server Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve Webseite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Beispiel nennen wir ihn `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** Datei und verschiebe sie in deinen `steamcmd` Ordner. Jetzt musst du die Datei entpacken, indem du mit Rechtsklick die Windows-Entpackfunktion nutzt oder Programme wie 7zip oder WinRAR. Am Ende solltest du eine **steamcmd.exe** Datei entpackt haben.

Starte einfach **steamcmd.exe** und warte, bis der Installationsprozess komplett abgeschlossen ist.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Avorion Dedicated Servers im nächsten Abschnitt starten.

## Installation

Nach der Installation solltest du Befehle im **steamcmd.exe** Kommandozeilenfenster ausführen können, das du vorher gestartet hast. Du musst dich zuerst anmelden, bevor du irgendwas machen kannst, und zwar als **anonymous** User mit dem Befehl: `login anonymous`

Sobald du eingeloggt bist, kannst du mit dem Download der Dateien starten.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad für deinen Server ersetzt. Zum Beispiel: 
```
force_install_dir C:\Avorion-Server
```
:::

Jetzt führe den Befehl `app_update 565060` aus, um den Download zu starten. Die App ID **565060** steht für die **Avorion** Anwendung.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Bitte unterbrich den Prozess nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Wenn der Download erfolgreich war, gehe in das Download-Verzeichnis, in dem alle Serverdateien gespeichert sind. Hier solltest du eine Kopie der **server.bat** Datei anlegen und die Kopie z.B. in **startserver.bat** umbenennen. Diese neue `.bat` Datei nutzt du später zum Starten des Servers und um Server-Konfigurationsoptionen zu bearbeiten. Wir empfehlen dir, zuerst das Portforwarding einzurichten und deinen Server zu konfigurieren.

### Portfreigabe für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Portfreigabe-Regeln für die Ports anlegen, die der Dedicated Server nutzt. Das kannst du entweder direkt per Powershell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Klicke mit Rechts und wähle **Als Administrator ausführen**, damit du die nötigen Rechte hast und alles reibungslos funktioniert.

:::info
Stelle sicher, dass du Powershell im Administrator-Modus startest, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge dann die folgenden Befehle in die Powershell ein:
```
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

Diese Befehle legen automatisch die Firewall-Regeln an, die dein Avorion Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall-Seite siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen Avorion Server anlegen. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 27000
- UDP eingehend und ausgehend: 27000, 27003, 27020, 27021

Falls du dabei Hilfe brauchst, schau dir unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung an.

</TabItem>
</Tabs>

Nachdem du diese Regeln hinzugefügt hast, ist dein Server öffentlich erreichbar. Du kannst dich jetzt über die IP-Adresse deines Servers verbinden. Wähle im Hauptmenü deinen Charakter aus, gehe zum Tab **Spiele finden** und klicke auf **Server hinzufügen**. Gib hier deine Server-IP, den Port (standardmäßig 15636) und dein Serverpasswort ein (falls gesetzt, sonst leer lassen).

Wir empfehlen dir, deinen Server zuerst über den nächsten Abschnitt zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Einrichtung deines Avorion Servers abgeschlossen. Du kannst die Servereinstellungen direkt über die **startserver.bat** Datei anpassen, die du vorher kopiert hast. Öffne die Datei mit einem Texteditor wie Notepad und passe die Parameter für deinen Server an.

Wenn du welt-spezifische Einstellungen ändern möchtest, musst du deine Galaxie-Saves öffnen und die **server.ini** Datei bearbeiten. Diese findest du im Windows AppData-Ordner unter folgendem Pfad:
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
Du kannst diesen Pfad ganz einfach öffnen, indem du gleichzeitig `STRG` + `R` drückst und im Ausführen-Dialog folgenden Pfad eingibst: `%userprofile%/AppData/Roaming/Avorion/galaxies`. Einfach auf **OK** klicken und du bist im Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## Server starten & verbinden

Jetzt geht’s ans Eingemachte: Starte deinen Server, indem du in das Basisverzeichnis deines Avorion Servers gehst und die **startserver.bat** ausführst, die du erstellt hast. Dadurch öffnet sich die Server-Konsole in einem Kommandozeilenfenster und der Startvorgang beginnt. Du kannst dich jetzt direkt über den Ingame-Serverbrowser verbinden, indem du deine Server-IP und den Port (Standard: 27000) eingibst.

## Fazit

Glückwunsch, du hast den Avorion Server erfolgreich auf deinem VPS installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />