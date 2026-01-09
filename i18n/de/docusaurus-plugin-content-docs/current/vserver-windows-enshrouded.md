---
id: vserver-windows-enshrouded
title: "vServer: Enshrouded Dedicated Server Windows Setup"
description: "Entdecke, wie du einen Enshrouded Dedicated Server auf deinem Windows VPS einrichtest für nahtloses Gameplay und volle Kontrolle → Jetzt mehr erfahren"
sidebar_label: Enshrouded
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Windows VPS und möchtest den Enshrouded Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qQy4x4cS5Rz8WR4/preview" title="How To Setup Enshrouded Dedicated Server on Windows VPS!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder lieber auf unterhaltsame Weise lernst!"/>
<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, schau dir unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

Sobald du auf deinem Server bist, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du einfach verschiedene Steam Workshop- und Dedicated Server Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Seite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Beispiel nennen wir ihn `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** Datei und verschiebe sie in den `steamcmd` Ordner. Entpacke die Datei jetzt per Rechtsklick und Windows-eigener Entpackfunktion oder mit Programmen wie 7zip oder WinRAR. Danach solltest du eine **steamcmd.exe** Datei im Ordner haben.

Starte einfach **steamcmd.exe** und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Enshrouded Dedicated Servers im nächsten Abschnitt starten.

## Installation

Nach der Installation solltest du im **steamcmd.exe** Kommandozeilenfenster Befehle ausführen können. Melde dich zuerst mit dem Benutzer **anonymous** an, indem du folgenden Befehl eingibst: `login anonymous`

Nach dem Login kannst du mit dem Download der Dateien beginnen.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad für deinen Server ersetzt. Beispiel:
```
force_install_dir C:\Enshrouded-Server
```
:::

Starte nun den Download mit dem Befehl `app_update 2278520`. Die App-ID **2278520** steht für die **Enshrouded** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Bitte unterbrich den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Nach erfolgreichem Download gehst du in das Verzeichnis, in das alle Serverdateien geladen wurden. Dort kannst du die **enshrouded_server.exe** starten, um den Server zu starten. Wir empfehlen jedoch, vorher das Port Forwarding einzurichten und deinen Server zu konfigurieren.

### Portfreigabe für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Portfreigabe-Regeln für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt über Powershell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Klicke mit Rechts und wähle **Als Administrator ausführen**, damit die nötigen Berechtigungen vorhanden sind und alles korrekt funktioniert.

:::info
Stelle sicher, dass du Powershell im Administrator-Modus startest, sonst werden die Einstellungen nicht richtig übernommen.
:::

Füge nun die folgenden Befehle in die Powershell ein:
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein Enshrouded Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall-Seite siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Erstelle neue Regeln für deinen Enshrouded Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 15636-15637
- UDP eingehend und ausgehend: 15636-15637

Falls du dabei Hilfe brauchst, nutze unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

Nachdem du die Regeln hinzugefügt hast, ist dein Server erreichbar. Du kannst dich über die IP-Adresse deines Servers verbinden. Wähle dazu im Hauptmenü deinen Charakter aus, gehe zum Tab **Find Games** und klicke auf **Add Server**. Gib dort deine Server-IP, den Port (standardmäßig 15636) und dein Server-Passwort ein (falls gesetzt, sonst leer lassen).

:::tip
Schau dir unsere [Server-Konfiguration](enshrouded-configuration.md) Anleitung an, wenn du ein Passwort für deinen Server aktivieren oder weitere Einstellungen anpassen möchtest.
:::

Wir empfehlen, deinen Server zuerst über den nächsten Abschnitt zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines Enshrouded Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Navigiere dazu in folgendes Verzeichnis:
```
..EnshroudedServer/ (Hauptverzeichnis)
```

Dort findest du die Datei **enshrouded_server.json**. In dieser Datei kannst du verschiedene Parameter für deinen Server einstellen. Alle verfügbaren Optionen und ihre Funktionen findest du in unserer [Server-Konfiguration](enshrouded-configuration.md) Anleitung.

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Gehe in das Hauptverzeichnis deines Enshrouded Servers und starte **enshrouded_server.exe**. Dadurch öffnet sich die Server-Konsole in einem Kommandozeilenfenster und der Startvorgang beginnt. Verbinde dich anschließend direkt über den Tab **Find Games**, klicke auf **Add Server** und gib deine Server-IP sowie den Port (Standard: 15636) ein.

## Fazit

Glückwunsch, du hast den Enshrouded Server erfolgreich auf deinem VPS installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />