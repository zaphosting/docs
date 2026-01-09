---
id: vserver-windows-palworld
title: "vServer: Palworld Dedicated Server Windows Setup"
description: "Entdecke, wie du einen Palworld Dedicated Server auf deinem Windows VPS einrichtest für nahtloses Gameplay-Hosting → Jetzt mehr erfahren"
sidebar_label: Palworld
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS und möchtest den Palworld Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/3gSdKyDDL65BAxM/preview" title="How To Setup Palworld Dedicated Server on Windows VPS!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles ganz easy. Egal ob du es eilig hast oder lieber entspannt lernst!"/>
<InlineVoucher />

## Vorbereitung

Zuerst verbinde dich per Remote Desktop (RDP) mit deinem VPS. Falls du Hilfe brauchst, schau dir unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

Sobald du auf deinem Server bist, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien runterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** vom Steam Client und das Tool, mit dem du einfach verschiedene Steam Workshop und Dedicated Server Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve Webseite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, wir nennen ihn hier `steamcmd`. Gehe in deinen Downloads-Ordner, finde die **steamcmd.zip** Datei, die du gerade runtergeladen hast, und verschiebe sie in deinen `steamcmd` Ordner. Jetzt entpackst du die Datei per Rechtsklick mit der Windows-Entpackfunktion oder Tools wie 7zip oder Winrar. Danach solltest du eine **steamcmd.exe** Datei im Ordner haben.

Starte einfach **steamcmd.exe** und warte, bis die Installation komplett durchgelaufen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist alles erfolgreich abgeschlossen und du kannst mit der Installation des Palworld Dedicated Servers im nächsten Abschnitt starten.

## Installation

Nach der Installation solltest du im **steamcmd.exe** Kommandozeilenfenster Befehle ausführen können. Melde dich zuerst mit dem Benutzer **anonymous** an, indem du folgenden Befehl eingibst: `login anonymous`

Sobald du eingeloggt bist, kannst du mit dem Download der Dateien starten.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis festlegen mit dem Befehl `force_install_dir [Pfad]`, wobei du `[Pfad]` durch den gewünschten Pfad ersetzt. Beispiel: 
```
force_install_dir C:\Palworld-Server
```
:::

Starte jetzt den Download mit dem Befehl `app_update 2394010`. Die App-ID **2394010** steht für die **Palworld** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Bitte unterbrich den Prozess nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Wenn der Download fertig ist, geh in das Verzeichnis, in das die Serverdateien geladen wurden. Dort kannst du die **PalServer.exe** starten, um den Server zu starten. Wir empfehlen aber zuerst das Portforwarding und die Serverkonfiguration vorzunehmen.

### Portfreigabe für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Portfreigaben für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt per Powershell machen (einfacher) oder über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Rechtsklick und **Als Administrator ausführen** wählen, damit du die nötigen Rechte hast.

:::info
Stelle sicher, dass du Powershell im Administrator-Modus startest, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge nun folgende Befehle in die Powershell ein:
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein Palworld Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Erstelle neue Regeln für deinen Palworld Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 8211
- UDP eingehend und ausgehend: 8211

Falls du Hilfe brauchst, schau in unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

Nachdem du die Regeln hinzugefügt hast, ist dein Server öffentlich erreichbar. Du kannst dich dann über die IP-Adresse deines Servers verbinden. Öffne dazu den Serverbrowser und gib unten in der Suche ein: `[deine_ip_adresse]:8211`

Wir empfehlen, zuerst die Servereinstellungen zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines Palworld Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Navigiere dazu in folgendes Verzeichnis:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Hier findest du die **PalWorldSettings.ini** Datei. In dieser Datei kannst du viele Parameter für deinen Server anpassen. Sieh dir unsere [Serverkonfiguration](palworld-configuration.md) an, um alle Optionen und ihre Funktionen kennenzulernen.

:::note
Falls die Datei noch nicht da ist, starte deinen Server mindestens **einmal**, damit sie automatisch erstellt wird. Alternativ kannst du die Standardwerte aus `steamapps/common/PalServer/DefaultPalWorldSettings.ini` kopieren.
:::

### Xbox-Modus aktivieren

Palworld Dedicated Server können jetzt auch als Microsoft Store/Xbox Dedicated Server laufen, damit Xbox- und Microsoft Store PC-Spieler zusammen auf deinem Server zocken können.

:::note
Crossplay zwischen Steam & Microsoft Store/Xbox Versionen ist aktuell noch nicht möglich. Dein Server kann entweder für Steam oder für Microsoft Store/Xbox eingestellt werden.
:::

Öffne die **PalWorldSettings.ini** Datei im Verzeichnis:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

Füge dort folgenden Abschnitt hinzu, um den Xbox-Modus zu aktivieren:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

Speichere die Datei. Beim nächsten Serverstart läuft er dann im Xbox-Modus.

:::info
Auf Xbox-Konsolen kannst du dich nicht direkt über die IP-Adresse verbinden. Wenn du also auf Xbox spielen willst, musst du deinen Dedicated Server öffentlich machen.

Erstelle dazu im Hauptverzeichnis eine neue `StartServer.bat` Datei mit folgendem Inhalt: `PalServer.exe -publiclobby`. Der spezielle Start-Parameter `-publiclobby` aktiviert den Community Server Modus, sodass dein Server in der Serverliste sichtbar wird.

Vergib außerdem einen gut auffindbaren Servernamen. Wie das geht, erfährst du in unserer [Serverkonfiguration](palworld-configuration.md).
:::

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Falls noch nicht installiert, brauchst du eventuell das [DirectX Runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) auf deinem Windows VPS.

Wechsle in das Hauptverzeichnis deines Palworld Servers und starte **PalServer.exe**, um den Server zu starten. Es öffnet sich die Server-Konsole in einem Kommandozeilenfenster und der Startvorgang beginnt. Wenn alles klappt, erscheint dein Server in der Serverliste. Alternativ kannst du dich direkt verbinden, indem du im Serverbrowser unten suchst nach: `[deine_ip_adresse]:8211`.

## Fazit

Glückwunsch, du hast deinen Palworld Server erfolgreich auf deinem VPS installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />