---
id: vserver-windows-avorion
title: "vServer: Avorion Dedicated Server Windows Setup"
description: "Entdecke, wie du deinen Avorion Dedicated Server schnell und einfach auf deinem Windows VPS einrichtest → Jetzt mehr erfahren"
sidebar_label: Avorion
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS und möchtest darauf den Avorion Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="How To Setup Avorion Dedicated Server on Windows VPS!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder einfach lieber auf unterhaltsame Weise lernst!"/>
<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [Erstanmeldung (RDP)](vserver-windows-userdp.md) Anleitung.

Sobald du auf deinem Server bist, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du einfach verschiedene Steam Workshop- und Dedicated Server-Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Webseite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Beispiel nennen wir ihn `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** Datei und verschiebe sie in den `steamcmd` Ordner. Entpacke die Datei dann per Rechtsklick und Windows-eigener Entpackfunktion oder mit Programmen wie 7zip oder WinRAR. Am Ende solltest du eine **steamcmd.exe** Datei entpackt haben.

Starte einfach **steamcmd.exe** und warte, bis der Installationsprozess komplett abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Avorion Dedicated Servers im nächsten Abschnitt starten.

## Installation

Nach der Installation solltest du im **steamcmd.exe** Kommandozeilenfenster Befehle ausführen können. Melde dich zuerst mit dem Benutzer **anonymous** an, indem du folgenden Befehl eingibst: `login anonymous`

Nach dem Login kannst du mit dem Download der Dateien beginnen.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad für deinen Server ersetzt. Beispiel:
```
force_install_dir C:\Avorion-Server
```
:::

Starte nun den Download mit dem Befehl `app_update 565060`. Die App-ID **565060** steht für die **Avorion** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Bitte unterbrich den Prozess nicht vor Abschluss, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Nach erfolgreichem Download gehst du in das Verzeichnis, in das alle Serverdateien geladen wurden. Dort solltest du die Datei **server.bat** kopieren und die Kopie z.B. in **startserver.bat** umbenennen. Diese neue `.bat` Datei nutzt du später zum Starten des Servers und um Server-Konfigurationen anzupassen. Wir empfehlen, zuerst das Portforwarding einzurichten und deinen Server zu konfigurieren.

### Portfreigabe für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Portfreigabe-Regeln für die Ports anlegen, die der Dedicated Server nutzt. Das kannst du entweder direkt per Powershell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Per Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Klicke mit Rechts und wähle **Als Administrator ausführen**, damit die nötigen Berechtigungen vorhanden sind und alles reibungslos funktioniert.

:::info
Stelle sicher, dass du die Powershell im Administrator-Modus startest, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge dann folgende Befehle in die Powershell ein:
```
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

Diese Befehle legen automatisch die Firewall-Regeln an, die dein Avorion Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Per Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall-Seite siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Du musst neue Regeln für deinen Avorion Server anlegen. Erstelle dazu eingehende und ausgehende Regeln für folgende Protokolle und Ports:
- TCP eingehend und ausgehend: 27000
- UDP eingehend und ausgehend: 27000, 27003, 27020, 27021

Falls du dabei Hilfe brauchst, schau in unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

Nachdem du die Regeln hinzugefügt hast, ist dein Server öffentlich erreichbar und du kannst dich über die IP-Adresse deines Servers verbinden. Wir empfehlen, deinen Server zuerst über den nächsten Abschnitt zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines Avorion Servers abgeschlossen. Du kannst die Server-Einstellungen direkt in der **startserver.bat** Datei anpassen, die du vorher kopiert hast. Öffne sie mit einem Texteditor wie Notepad und ändere die Parameter nach deinen Wünschen.

Wenn du welt-spezifische Einstellungen bearbeiten möchtest, musst du die Galaxie-Saves öffnen und die **server.ini** Datei anpassen. Diese findest du im Windows AppData-Verzeichnis unter folgendem Pfad:
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
Du kannst diesen Pfad ganz einfach öffnen, indem du gleichzeitig `STRG` + `R` drückst und im Ausführen-Dialog folgenden Pfad eingibst: `%userprofile%/AppData/Roaming/Avorion/galaxies`. Dann einfach auf **OK** klicken und du bist im Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Gehe in das Basisverzeichnis deines Avorion Servers und starte die **startserver.bat** Datei, die du erstellt hast. Dadurch öffnet sich die Server-Konsole in einem Kommandozeilenfenster und der Startvorgang beginnt. Du kannst dich jetzt direkt über den Ingame-Serverbrowser verbinden, indem du die IP-Adresse und den Port deines Servers eingibst (Standardport ist 27000).

## Fazit

Glückwunsch, du hast deinen Avorion Server erfolgreich auf deinem VPS installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />