---
id: dedicated-windows-palworld
title: "Dedicated Server: Palworld Dedicated Server Windows Setup"
description: "Entdecke, wie du deinen Palworld Dedicated Server schnell und einfach auf deinem Windows VPS oder Dedicated Server einrichtest → Jetzt mehr erfahren"
sidebar_label: Palworld
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS oder Dedicated Server und möchtest den Palworld Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du den Server auf deinem System einrichtest.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pt4oNY8tPJdKf44/preview" title="How To Setup Palworld Dedicated Server on Windows VPS!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Unser Video erklärt dir alles ganz easy. Egal ob du es eilig hast oder lieber entspannt lernst – hier bist du richtig!"/>

<InlineVoucher />

## Vorbereitung

Verbinde dich zuerst per Remote Desktop (RDP) mit deinem VPS. Falls du Hilfe brauchst, schau dir unsere [Erstanmeldung (RDP)](vserver-windows-userdp.md) Anleitung an.

Sobald du auf deinem Server bist, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien runterzuladen. SteamCMD ist die **Kommandozeilen-Version (CLI)** vom Steam-Client und das Tool, mit dem du ganz easy Steam Workshop und Dedicated Server Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Seite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) runter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, wir nennen ihn hier `steamcmd`. Gehe in deinen Downloads-Ordner, finde die **steamcmd.zip** Datei und verschiebe sie in den `steamcmd` Ordner. Entpacke die Datei jetzt per Rechtsklick mit Windows-eigener Entpackfunktion oder Tools wie 7zip oder WinRAR. Am Ende solltest du eine **steamcmd.exe** Datei haben.

Starte einfach **steamcmd.exe** und warte, bis die Installation komplett durchgelaufen ist.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist alles fertig und du kannst mit der Installation des Palworld Dedicated Servers im nächsten Abschnitt starten.

## Installation

Nach dem Start von **steamcmd.exe** kannst du Befehle in der Kommandozeile ausführen. Melde dich zuerst mit dem anonymen Nutzer an, indem du folgenden Befehl eingibst: `login anonymous`

Wenn du eingeloggt bist, kannst du mit dem Download der Dateien starten.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen. Ersetze `[Pfad]` durch den gewünschten Pfad für deinen Server, z.B.: 
```
force_install_dir C:\Palworld-Server
```
:::

Starte jetzt den Download mit dem Befehl `app_update 2394010`. Die App-ID **2394010** steht für die **Palworld** Anwendung.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Bitte unterbrich den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Nach erfolgreichem Download findest du alle Serverdateien im Installationsordner. Dort kannst du die **PalServer.exe** starten, um den Server zu starten. Wir empfehlen aber, vorher noch das Port Forwarding einzurichten und deinen Server zu konfigurieren.

### Portfreigabe für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du die Portfreigabe für die Ports einrichten, die der Dedicated Server nutzt. Das geht entweder direkt per Powershell-Befehle (einfacher) oder über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Per Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Rechtsklick und **Als Administrator ausführen** wählen, damit du die nötigen Rechte hast.

:::info
Starte Powershell unbedingt als Administrator, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge dann folgende Befehle in die Powershell ein:
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein Palworld Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Per Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Erstelle neue Regeln für deinen Palworld Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Ports und Protokolle hinzu:
- TCP eingehend und ausgehend: 8211
- UDP eingehend und ausgehend: 8211

Falls du Hilfe brauchst, schau in unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

Wenn du die Regeln hinzugefügt hast, ist dein Server öffentlich erreichbar. Du kannst dich dann über die IP-Adresse deines Servers verbinden. Gib dazu im Serverbrowser unten die Adresse ein: `[deine_ip_adresse]:8211`

Wir empfehlen, deinen Server vorher noch zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Jetzt hast du die Grundinstallation deines Palworld Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Navigiere dazu in folgendes Verzeichnis:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Hier findest du die Datei **PalWorldSettings.ini**. In dieser Datei kannst du viele Parameter für deinen Server anpassen. Schau dir unsere [Server-Konfiguration](palworld-configuration.md) an, um alle Optionen und ihre Funktionen kennenzulernen.

:::note
Falls die Datei noch nicht da ist, starte deinen Server mindestens **einmal**, damit sie automatisch erstellt wird. Alternativ kannst du die Standardwerte aus `steamapps/common/PalServer/DefaultPalWorldSettings.ini` kopieren.
:::

### Xbox-Modus aktivieren

Palworld Dedicated Server können jetzt auch als Microsoft Store/Xbox Server laufen, damit Xbox- und Microsoft Store PC-Spieler zusammen auf deinem Server zocken können.

:::note
Crossplay zwischen Steam und Microsoft Store/Xbox Versionen ist aktuell noch nicht möglich. Dein Server kann entweder für Steam oder für Microsoft Store/Xbox laufen.
:::

Öffne die **PalWorldSettings.ini** im Verzeichnis:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

Füge dort folgenden Abschnitt hinzu, um den Xbox-Modus zu aktivieren:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

Speichere die Datei ab. Beim nächsten Start läuft dein Server im Xbox-Modus.

:::info
Auf Xbox-Konsolen kannst du dich nicht direkt per IP verbinden. Wenn du also auf Xbox spielen willst, musst du deinen Dedicated Server öffentlich machen.

Erstelle dazu im Hauptverzeichnis eine neue Datei `StartServer.bat` mit folgendem Inhalt: `PalServer.exe -publiclobby`. Der Start-Parameter `-publiclobby` aktiviert den Community Server Modus, sodass dein Server in der Serverliste erscheint.

Vergib außerdem einen gut auffindbaren Servernamen. Wie das geht, erfährst du in unserer [Server-Konfiguration](palworld-configuration.md).
:::

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Falls noch nicht installiert, brauchst du eventuell das [DirectX Runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) auf deinem Windows Dedicated Server.

Wechsle in das Hauptverzeichnis deines Palworld Servers und starte **PalServer.exe**, um den Server zu starten. Es öffnet sich die Server-Konsole im Kommandozeilenfenster und der Startvorgang beginnt. Wenn alles klappt, erscheint dein Server in der Serverliste. Alternativ kannst du dich direkt verbinden, indem du im Serverbrowser unten nach `[deine_ip_adresse]:8211` suchst.

Du hast Palworld erfolgreich auf deinem Windows Dedicated Server installiert.

<InlineVoucher />