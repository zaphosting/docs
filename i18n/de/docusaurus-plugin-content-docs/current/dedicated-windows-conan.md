---
id: dedicated-windows-conan
title: "Dedicated Server: Conan Exiles Dedicated Server Windows Setup"
description: "Entdecke, wie du einen Conan Exiles Dedicated Server auf deinem Windows Dedicated Server einrichtest für flüssiges Gameplay und einfache Serververwaltung → Jetzt mehr erfahren"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows Dedicated Server und möchtest darauf den Conan Exiles Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

## Vorbereitung

Verbinde dich zunächst per Remote Desktop (RDP) mit deinem Dedicated Server. Falls du dabei Hilfe brauchst, schau dir unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

:::note Server Launcher Tool
Als Alternative zu SteamCMD pflegen die Entwickler von Conan Exiles ein praktisches Server-Launcher-Tool, das du unter Windows nutzen kannst, um den Serverstart zu erleichtern.

Wir empfehlen dir, den [Offiziellen Forum-Post](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) zu lesen, falls du dieses Tool verwenden möchtest.
:::

Sobald du Zugriff auf deinen Server hast, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und ermöglicht dir, Steam Workshop und Dedicated Server Dateien einfach herunterzuladen. Lade [SteamCMD von der offiziellen Valve-Webseite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Beispiel nennen wir ihn `steamcmd`. Wechsle in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** und verschiebe sie in den `steamcmd` Ordner. Entpacke die Datei jetzt per Rechtsklick und Windows-eigener Entpackfunktion oder mit Programmen wie 7zip oder WinRAR. Danach solltest du die **steamcmd.exe** Datei entpackt vorfinden.

Starte einfach **steamcmd.exe** und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist die Installation erfolgreich abgeschlossen und du kannst mit der Installation des Conan Exiles Dedicated Servers im nächsten Abschnitt weitermachen.

## Installation

Nach der Installation solltest du im **steamcmd.exe** Kommandozeilenfenster Befehle ausführen können. Melde dich zuerst mit dem anonymen Benutzer an, indem du folgenden Befehl eingibst: `login anonymous`

Sobald du eingeloggt bist, kannst du mit dem Download der Dateien starten.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad für deinen Server ersetzt. Zum Beispiel:
```
force_install_dir C:\Conan-Server
```
:::

Starte nun den Download mit dem Befehl `app_update 443030`. Die App-ID **443030** steht für die **Conan Exiles** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Bitte unterbrich den Prozess nicht vorzeitig, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Nach erfolgreichem Download wechsle in das Download-Verzeichnis, in dem alle Serverdateien liegen. Dort kannst du die **StartServer.bat** nutzen, um den Server zu starten. Wir empfehlen jedoch zuerst das Port-Forwarding und die Konfiguration deines Servers vorzunehmen.

### Portfreigabe für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du die Portfreigabe für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt über Powershell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Klicke mit Rechts und wähle **Als Administrator ausführen**, damit die nötigen Berechtigungen vorhanden sind und alles reibungslos funktioniert.

:::info
Stelle sicher, dass du Powershell im Administrator-Modus ausführst, sonst werden die Einstellungen möglicherweise nicht korrekt übernommen.
:::

Füge nun folgende Befehle in die Powershell ein:
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein Conan Exiles Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall-Seite siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Erstelle neue Regeln für deinen Conan Exiles Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 7777, 25575
- UDP eingehend und ausgehend: 7777, 7778, 27015

Falls du weitere Hilfe brauchst, schau dir unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung an.

</TabItem>
</Tabs>

Nachdem du diese Regeln hinzugefügt hast, ist dein Server öffentlich erreichbar und du kannst dich über die IP-Adresse deines Servers verbinden. Wir empfehlen dir aber, zuerst die Servereinstellungen zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines Conan Exiles Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Navigiere dazu in folgendes Verzeichnis:
```
../Conan-Server/Engine/Config/Windows
```

Dort findest du die Datei **WindowsServerEngine.ini**. In dieser Datei kannst du viele Einstellungen anpassen, indem du bestimmte Parameter hinzufügst.

Beispiel: Um einen Servernamen, Passwort und Admin-Passwort zu setzen, fügst du Folgendes hinzu:
```
[OnlineSubsystem]
ServerName=[dein_servername]
ServerPassword=[dein_passwort]

[ServerSettings]
AdminPassword=[dein_adminpasswort]
```

Wir empfehlen dir, im [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) nach einer umfassenden Liste aller verfügbaren Optionen zu schauen.

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Wechsle in das Hauptverzeichnis deines Conan Exiles Servers und starte die **StartServer.bat**, die du vorher erstellt hast. Dadurch öffnet sich die Server-Konsole im Kommandozeilenfenster und der Startvorgang beginnt. Du kannst dich nun direkt über den Ingame-Serverbrowser verbinden, indem du die IP-Adresse und den Port deines Servers eingibst (Standardport ist 7777).

## Fazit

Glückwunsch, du hast deinen Conan Exiles Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!