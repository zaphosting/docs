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

Du hast einen Windows VPS oder Dedicated Server und möchtest darauf den Palworld Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pt4oNY8tPJdKf44/preview" title="How To Setup Palworld Dedicated Server on Windows VPS!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder lieber auf die unterhaltsamste Art lernst!"/>



## Vorbereitung

Verbinde dich zunächst per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung.

Sobald du auf deinem Server bist, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du einfach verschiedene Steam Workshop- und Dedicated Server-Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Seite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Beispiel nennen wir ihn `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** und verschiebe sie in den `steamcmd`-Ordner. Entpacke die Datei jetzt per Rechtsklick und Windows-eigener Entpackfunktion oder mit Programmen wie 7zip oder Winrar. Danach solltest du eine **steamcmd.exe** Datei im Ordner haben.

Starte einfach **steamcmd.exe** und warte, bis die Installation komplett abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Palworld Dedicated Servers im nächsten Abschnitt weitermachen.

## Installation

Nach der Installation solltest du im **steamcmd.exe** Kommandozeilenfenster Befehle ausführen können. Melde dich zuerst mit dem Benutzer **anonymous** an, indem du folgenden Befehl eingibst: `login anonymous`

Nach dem Login kannst du mit dem Download der Dateien starten.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad ersetzt. Beispiel:
```
force_install_dir C:\Palworld-Server
```
:::

Starte nun den Download mit dem Befehl `app_update 2394010`. Die App-ID **2394010** steht für die **Palworld** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Bitte unterbrich den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Nach erfolgreichem Download gehst du in das Verzeichnis, in das alle Serverdateien geladen wurden. Dort kannst du die **PalServer.exe** starten, um den Server zu starten. Wir empfehlen jedoch, vorher noch das Port Forwarding einzurichten und deinen Server zu konfigurieren.

### Portfreigabe für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Portfreigaben für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt über Powershell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Klicke mit Rechts und wähle **Als Administrator ausführen**, damit du die nötigen Rechte hast und alles reibungslos funktioniert.

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

Diese Befehle erstellen automatisch die nötigen Firewall-Regeln, damit dein Palworld Server öffentlich erreichbar ist.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall-Seite siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Erstelle neue Regeln für deinen Palworld Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 8211
- UDP eingehend und ausgehend: 8211

Falls du dabei Hilfe brauchst, schau in unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

Nachdem du die Regeln hinzugefügt hast, ist dein Server erreichbar und du kannst dich über die IP-Adresse deines Servers verbinden. Öffne dazu den Serverbrowser und gib unten in der Suche folgendes ein: `[deine_ip_adresse]:8211`

Wir empfehlen dir, deinen Server zuerst zu konfigurieren, bevor du dich verbindest. Wie das geht, erfährst du im nächsten Abschnitt.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines Palworld Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Navigiere dazu in folgendes Verzeichnis:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Dort findest du die **PalWorldSettings.ini** Datei. In dieser Datei kannst du viele Parameter deines Servers anpassen. Alle verfügbaren Optionen und ihre Bedeutung findest du in unserer [Server Konfiguration](palworld-configuration.md).

:::note
Falls du die Datei nicht findest, starte deinen Server mindestens **einmal**, damit sie automatisch generiert wird. Alternativ kannst du die Standardwerte aus `steamapps/common/PalServer/DefaultPalWorldSettings.ini` kopieren und verwenden.
:::

### Xbox-Modus aktivieren

Palworld Dedicated Server bieten jetzt die Möglichkeit, als Microsoft Store/Xbox Dedicated Server zu laufen, damit Xbox- und Microsoft Store PC-Spieler gemeinsam auf deinem Server zocken können.

:::note
Crossplay zwischen Steam- und Microsoft Store/Xbox-Versionen ist weiterhin nicht möglich. Dein Server kann entweder für Steam oder für Microsoft Store/Xbox eingestellt werden.
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

Speichere die Datei. Beim nächsten Start läuft dein Server im Xbox-Modus.

:::info
Auf Xbox-Konsolen kannst du dich nicht direkt über die IP-Adresse verbinden. Wenn du also auf Xbox spielen möchtest, musst du deinen Dedicated Server öffentlich machen.

Erstelle dazu im Root-Verzeichnis eine neue `StartServer.bat` Datei mit folgendem Inhalt: `PalServer.exe -publiclobby`. Der spezielle Startparameter `-publiclobby` aktiviert den Community Server-Modus, sodass dein Server in der Serverliste sichtbar ist.

Außerdem solltest du einen gut auffindbaren Servernamen vergeben. Wie das geht, erfährst du in unserer [Server Konfiguration](palworld-configuration.md).
:::

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Falls noch nicht installiert, musst du eventuell [DirectX Runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) auf deinem Windows Dedicated Server nachinstallieren.

Wechsle in das Hauptverzeichnis deines Palworld Servers und starte **PalServer.exe**, um den Server zu starten. Es öffnet sich ein Konsolenfenster, in dem der Startvorgang angezeigt wird. Wenn alles klappt, erscheint dein Server in der Serverliste. Alternativ kannst du dich direkt verbinden, indem du im Serverbrowser unten in der Suche `[deine_ip_adresse]:8211` eingibst.

Herzlichen Glückwunsch, du hast Palworld erfolgreich auf deinem Windows Dedicated Server installiert!