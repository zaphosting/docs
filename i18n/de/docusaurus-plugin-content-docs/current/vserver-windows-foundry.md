---
id: vserver-windows-foundry
title: "vServer: Foundry Dedicated Server Windows Setup"
description: "Entdecke, wie du einen Foundry Dedicated Server auf deinem Windows VPS einrichtest für nahtloses Gameplay-Hosting → Jetzt mehr erfahren"
sidebar_label: Foundry
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS und möchtest den Foundry Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Xm3o2P3oc7QzLtp/preview" title="How To Setup Foundry Dedicated Server on Windows VPS!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder lieber auf unterhaltsame Weise lernst!"/>
<InlineVoucher />

## Vorbereitung

Zuerst verbinde dich per Remote Desktop (RDP) mit deinem VPS. Falls du Hilfe brauchst, schau dir unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

Sobald du auf deinem Server bist, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du einfach verschiedene Steam Workshop- und Dedicated Server-Dateien runterladen kannst. Lade [SteamCMD von der offiziellen Valve-Webseite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, wir nennen ihn hier `steamcmd`. Gehe in deinen Downloads-Ordner, finde die **steamcmd.zip** Datei, die du gerade heruntergeladen hast, und verschiebe sie in den `steamcmd` Ordner. Jetzt entpackst du die Datei per Rechtsklick und Windows-eigener Entpackfunktion oder mit Programmen wie 7zip oder WinRAR. Am Ende solltest du eine **steamcmd.exe** Datei entpackt haben.

Starte einfach **steamcmd.exe** und warte, bis der Installationsprozess komplett abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist alles erfolgreich installiert und du kannst mit der Foundry Dedicated Server Installation im nächsten Abschnitt weitermachen.

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
Bitte unterbrich den Prozess nicht vorzeitig, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Nach erfolgreichem Download gehst du in das Download-Verzeichnis, wo alle Serverdateien liegen. Dort kannst du die **FoundryDedicatedServerLauncher.exe** starten, um den Server zu starten. Wir empfehlen aber vorher noch das Portforwarding und die Serverkonfiguration.

### Portfreigabe für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Portfreigaben für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt per PowerShell machen (einfacher) oder über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Per PowerShell" default>

Öffne die Windows-Suche und suche nach **PowerShell**. Rechtsklick und **Als Administrator ausführen** wählen, damit du die nötigen Rechte hast.

:::info
Achte darauf, PowerShell als Administrator zu starten, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge dann folgende Befehle in die PowerShell ein:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die nötigen Firewall-Regeln, damit dein Foundry Server öffentlich erreichbar ist.

</TabItem>

<TabItem value="windefender" label="Per Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Erstelle neue Regeln für deinen Foundry Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 3724, 27015
- UDP eingehend und ausgehend: 3724, 27015

Falls du Hilfe brauchst, schau dir unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung an.

</TabItem>
</Tabs>

Nachdem du die Regeln hinzugefügt hast, ist dein Server erreichbar. Du kannst dich über die IP-Adresse deines Servers verbinden. Gehe dazu im Hauptmenü auf Multiplayer, wähle IP Direct Connect und gib deine IP-Adresse sowie den Port 3724 (Standard) ein.

Wir empfehlen, deinen Server zuerst über den nächsten Abschnitt zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines Foundry Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei vornehmen. Gehe in deinen Spielordner und erstelle eine neue Datei namens **app.cfg** (falls noch nicht vorhanden) im Hauptverzeichnis, also im gleichen Ordner wie die **FoundryDedicatedServerLauncher.exe**.

Öffne die **app.cfg** mit Notepad oder einem Editor deiner Wahl und füge die gewünschten Konfigurationsparameter hinzu. Jeder Parameter kommt in eine neue Zeile, mit einem Gleichheitszeichen und dem Wert, den du setzen möchtest.

Hier ein Beispiel mit drei Einstellungen:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Alle verfügbaren Optionen und ihre Bedeutung findest du in unserer [Serverkonfiguration](foundry-configuration.md).

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Gehe in das Hauptverzeichnis und starte **FoundryDedicatedServerLauncher.exe**. Das öffnet die Serverkonsole im Kommandozeilenfenster und startet den Server.

Verbinde dich dann über **Multiplayer -> IP Direct Connect** mit der IP deines Servers und dem Port 3724 (Standard, den du auch freigegeben hast).

Wenn dein Server in der Serverliste erscheinen soll, füge in der Konfigurationsdatei die Parameter `server_name` und `server_is_public` hinzu. Speichere die Datei und starte den Server erneut.

## Fazit

Glückwunsch, du hast den Foundry Server erfolgreich auf deinem VPS installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />