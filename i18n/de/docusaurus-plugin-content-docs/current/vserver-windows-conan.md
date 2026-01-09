---
id: vserver-windows-conan
title: "vServer: Conan Exiles Dedicated Server Windows Setup"
description: "Entdecke, wie du schnell und einfach einen Conan Exiles Dedicated Server auf deinem Windows VPS einrichtest → Jetzt mehr erfahren"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS und möchtest darauf den Conan Exiles Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [Erstanmeldung (RDP)](vserver-windows-userdp.md) Anleitung.

:::note Server Launcher Tool
Als Alternative zu SteamCMD pflegen die Entwickler von Conan Exiles ein praktisches Server Launcher Tool, das unter Windows genutzt werden kann, um den Serverstart zu erleichtern.

Wir empfehlen dir, den [Offiziellen Forum-Post](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) zu lesen, falls du dieses Tool verwenden möchtest.
:::

Sobald du Zugriff auf deinen Server hast, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und ermöglicht dir, einfach verschiedene Steam Workshop- und Dedicated Server-Dateien herunterzuladen. Lade [SteamCMD von der offiziellen Valve-Webseite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Beispiel nennen wir ihn `steamcmd`. Wechsle in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** und verschiebe sie in deinen `steamcmd`-Ordner. Entpacke die Datei jetzt per Rechtsklick mit der Windows-eigenen Entpackfunktion oder mit Programmen wie 7zip oder WinRAR. Danach solltest du eine **steamcmd.exe** Datei im Ordner haben.

Starte einfach **steamcmd.exe** und warte, bis die Installation komplett abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Conan Exiles Dedicated Servers im nächsten Abschnitt weitermachen.

## Installation

Nach der Installation solltest du Befehle im **steamcmd.exe** Kommandozeilenfenster ausführen können. Melde dich zuerst mit dem Benutzer **anonymous** an, indem du folgenden Befehl eingibst: `login anonymous`

Nach dem Login kannst du mit dem Download der Dateien starten.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad für deinen Server ersetzt. Zum Beispiel:
```
force_install_dir C:\Conan-Server
```
:::

Starte jetzt den Download mit dem Befehl `app_update 443030`. Die App-ID **443030** steht für die **Conan Exiles** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Bitte unterbrich den Prozess nicht vorzeitig, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Nach erfolgreichem Download findest du alle Serverdateien im Download-Verzeichnis. Dort kannst du die **StartServer.bat** nutzen, um den Server zu starten. Wir empfehlen jedoch, zuerst das Port Forwarding einzurichten und deinen Server zu konfigurieren.

### Port Forwarding für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Portweiterleitungsregeln für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt über Powershell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Klicke mit Rechts und wähle **Als Administrator ausführen**, damit die nötigen Berechtigungen vorhanden sind und alles reibungslos funktioniert.

:::info
Stelle sicher, dass du Powershell im Administrator-Modus startest, sonst werden die Einstellungen möglicherweise nicht korrekt übernommen.
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

Falls du weitere Hilfe brauchst, schau dir unsere [Port Forwarding (Firewall)](vserver-windows-port.md) Anleitung an.

</TabItem>
</Tabs>

Nachdem du diese Regeln hinzugefügt hast, ist dein Server erreichbar und du kannst dich über die IP-Adresse deines Servers verbinden. Wir empfehlen dir aber, zuerst die Servereinstellungen zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines Conan Exiles Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Navigiere dazu in folgendes Verzeichnis:
```
../Conan-Server/Engine/Config/Windows
```

Hier findest du die Datei **WindowsServerEngine.ini**. In dieser Datei kannst du viele Einstellungen anpassen, indem du bestimmte Parameter hinzufügst.

Beispiel: Um einen Servernamen, ein Passwort und ein Admin-Passwort zu setzen, fügst du Folgendes hinzu:
```
[OnlineSubsystem]
ServerName=[dein_servername]
ServerPassword=[dein_passwort]

[ServerSettings]
AdminPassword=[dein_adminpasswort]
```

Für eine umfassende Liste der Optionen empfehlen wir dir, im [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) nachzuschauen.

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Wechsle in das Basisverzeichnis deines Conan Exiles Servers und starte die **StartServer.bat**, die du zuvor erstellt hast. Dadurch öffnet sich die Serverkonsole in einem Kommandozeilenfenster und der Startvorgang beginnt. Du kannst dich nun direkt über den Ingame-Serverbrowser verbinden, indem du die IP-Adresse und den Port deines Servers eingibst (Standard-Port ist 7777).

## Fazit

Glückwunsch, du hast deinen Conan Exiles Server erfolgreich auf deinem VPS installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />