---
id: dedicated-windows-foundry
title: "Dedicated Server: Foundry Dedicated Server Windows Setup"
description: "Entdecke, wie du deinen Foundry Dedicated Server schnell und effizient auf deinem Windows VPS oder Dedicated Server einrichtest → Jetzt mehr erfahren"
sidebar_label: Foundry
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS oder Dedicated Server und möchtest darauf den Foundry Dedicated Server Service installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server installierst.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="How To Setup Foundry Dedicated Server on Windows VPS!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich aufschlüsselt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art lernst!"/>

<InlineVoucher />

## Vorbereitung

Zuerst verbindest du dich per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung.

Sobald du auf deinem Server bist, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du einfach verschiedene Steam Workshop- und Dedicated Server Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Webseite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Beispiel nennen wir ihn `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** Datei und verschiebe sie in deinen `steamcmd` Ordner. Entpacke die Datei jetzt per Rechtsklick und Windows-eigener Entpackfunktion oder mit Programmen wie 7zip oder WinRAR. Danach solltest du eine **steamcmd.exe** Datei entpackt haben.

Starte einfach **steamcmd.exe** und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Foundry Dedicated Servers im nächsten Abschnitt starten.

## Installation

Nach der Installation solltest du im **steamcmd.exe** Kommandozeilenfenster Befehle ausführen können. Du musst dich zuerst anmelden, bevor du irgendwas machen kannst, und zwar als **anonymous** User mit dem Befehl: `login anonymous`

Nach dem Login kannst du jetzt mit dem Download der Dateien starten.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad ersetzt. Zum Beispiel:
```
force_install_dir C:\Foundry-Server
```
:::

Führe nun den Befehl `app_update 2915550` aus, um den Download zu starten. Die App-ID **2915550** steht für die **Foundry** Anwendung.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Bitte unterbrich den Prozess nicht vor Abschluss, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Nach erfolgreichem Download gehst du in das Download-Verzeichnis, wo alle Serverdateien liegen. Hier kannst du die **FoundryDedicatedServerLauncher.exe** nutzen, um den Server zu starten. Wir empfehlen jedoch, zuerst das Portforwarding einzurichten und deinen Server zu konfigurieren.

### Portforwarding für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Portweiterleitungsregeln für die Ports anlegen, die der Dedicated Server nutzt. Das kannst du entweder direkt über PowerShell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Öffne die Windows-Suche und suche nach **PowerShell**. Klicke mit Rechts und wähle **Als Administrator ausführen**, damit du die nötigen Rechte hast und alles reibungslos funktioniert.

:::info
Stelle sicher, dass du PowerShell im Administrator-Modus startest, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge nun die folgenden Befehle in die PowerShell ein:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein Foundry Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall-Seite siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen Foundry Server anlegen. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 3724, 27015
- UDP eingehend und ausgehend: 3724, 27015

Falls du weitere Hilfe brauchst, schau dir unsere [Portforwarding (Firewall)](vserver-windows-port.md) Anleitung an.

</TabItem>
</Tabs>

Nachdem du diese Regeln hinzugefügt hast, ist dein Server erreichbar. Du kannst dich jetzt über die IP-Adresse deines Servers verbinden. Gehe dazu im Hauptmenü auf Multiplayer, wähle IP Direct Connect und gib deine IP-Adresse sowie den Port 3724 ein (Standardport, den du eingerichtet hast).

Wir empfehlen dir, zuerst die Servereinstellungen zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines Foundry Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei vornehmen. Gehe zurück in deinen Spielordner und erstelle eine neue **app.cfg** Datei (falls noch nicht vorhanden) im Hauptverzeichnis. Diese Datei liegt im gleichen Ordner wie die **FoundryDedicatedServerLauncher.exe**.

Öffne die **app.cfg** mit Notepad oder einem Editor deiner Wahl und füge die gewünschten Konfigurationsoptionen hinzu. Jede Option kommt in eine neue Zeile, mit einem Gleichheitszeichen und dem Wert, den du setzen möchtest.

Hier ein Beispiel mit drei Einstellungen:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Alle verfügbaren Optionen und ihre Bedeutung findest du in unserer [Server Konfiguration](foundry-configuration.md) Anleitung.

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Gehe ins Hauptverzeichnis und starte **FoundryDedicatedServerLauncher.exe**. Das öffnet die Server-Konsole im Kommandozeilenfenster und startet den Server.

Du kannst dich jetzt direkt per IP verbinden, indem du im Spiel auf **Multiplayer -> IP Direct Connect** gehst und die IP-Adresse deines Servers sowie den Port 3724 eingibst (Standardport, den du weitergeleitet hast).

Wenn dein Server in der Serverliste erscheinen soll, schau dir unsere [Server Konfiguration](foundry-configuration.md) Anleitung an und füge die Parameter `server_name` und `server_is_public` in deine Konfigurationsdatei ein. Speichere die Datei und starte den Server erneut.

Du hast Foundry erfolgreich auf deinem Windows Dedicated Server installiert.

<InlineVoucher />