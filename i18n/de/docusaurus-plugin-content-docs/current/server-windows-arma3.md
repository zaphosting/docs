---
id: server-windows-arma3
title: "Arma 3 Dedicated Server Windows Setup"
description: "Entdecke, wie du einen Arma 3 Dedicated Server auf deinem Windows Server für nahtloses Gameplay und volle Kontrolle einrichtest → Jetzt mehr erfahren"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Windows VPS/Dedicated Server und möchtest darauf den Arma 3 Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server installierst.

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per Remote Desktop (RDP) mit deinem VPS/Dedicated Server. Falls du dabei Hilfe brauchst, nutze unsere [Initial Access (RDP)](vserver-windows-userdp.md) Anleitung.

Sobald du Zugriff auf deinen Server hast, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du einfach verschiedene Steam Workshop- und Dedicated Server-Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Webseite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Beispiel nennen wir ihn `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** Datei und verschiebe sie in den `steamcmd` Ordner. Entpacke die Datei jetzt per Rechtsklick und Windows-eigener Entpackfunktion oder mit Programmen wie 7zip oder WinRAR. Am Ende solltest du eine **steamcmd.exe** Datei entpackt haben.

Starte einfach **steamcmd.exe** und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![](https://screensaver01.zap-hosting.com/index.php/s/RsC7AK37qrYnDYR/preview)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Arma 3 Dedicated Servers im nächsten Abschnitt starten.

## Installation

Nach der Installation solltest du Befehle im **steamcmd.exe** Kommandozeilenfenster ausführen können, das du zuvor gestartet hast. Du musst dich zuerst anmelden, bevor du irgendwas machen kannst, und zwar mit dem Benutzer **anonymous** über den Befehl: `login anonymous`

Sobald du eingeloggt bist, kannst du mit dem Download der Dateien beginnen.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad für deinen Server ersetzt. Zum Beispiel:
```
force_install_dir C:\arma3-server
```
:::

Starte jetzt den Download mit dem Befehl `app_update 233780`. Die App-ID **233780** steht für die **Arma 3** Anwendung.

![](https://screensaver01.zap-hosting.com/index.php/s/52dAJQDFjTs8Y4f/preview)

:::info
Bitte unterbrich den Prozess nicht vor Abschluss, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Nach erfolgreichem Download findest du alle Serverdateien im Download-Verzeichnis. Dort kannst du die **Arma 3_server.exe** starten, um den Server zu starten. Wir empfehlen jedoch, zuerst das Portforwarding einzurichten und deinen Server zu konfigurieren.

### Portweiterleitung für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du die Portweiterleitungsregeln für die Ports anpassen, die der VPS/Dedicated Server Prozess nutzt. Das kannst du entweder direkt über Powershell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Klicke mit Rechts und wähle **Als Administrator ausführen**, damit die nötigen Berechtigungen vorhanden sind und alles reibungslos funktioniert.

:::info
Stelle sicher, dass du Powershell im Administrator-Modus ausführst, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge nun die folgenden Befehle in die Powershell ein:
```
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Inbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Outbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch Firewall-Regeln, die notwendig sind, damit dein Arma 3 Server öffentlich erreichbar ist.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall-Seite siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://screensaver01.zap-hosting.com/index.php/s/r9j8kYmR3LtcQJ2/preview)

Du musst neue Regeln für deinen Arma 3 Server anlegen. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- UDP eingehend und ausgehend: 2302–2306

Falls du weitere Hilfe brauchst, nutze unsere [Portweiterleitung (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

Nachdem du diese Regeln hinzugefügt hast, ist dein Server erreichbar und du kannst dich über die IP-Adresse deines Servers verbinden. Wähle dazu im Hauptmenü deinen Charakter aus, gehe zum Tab **Spiele finden** und klicke auf **Server hinzufügen**. Gib hier deine Server-IP zusammen mit dem Port (standardmäßig 2302) und deinem Serverpasswort (falls gesetzt, sonst leer lassen) ein.

Wir empfehlen, deinen Server zuerst über den nächsten Abschnitt zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines Arma 3 Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Navigiere dazu in folgendes Verzeichnis:
```
C:\arma3-Server
```

Hier findest du die **server.cfg** Datei. In dieser Datei kannst du verschiedene Parameter für deinen Server einstellen.

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Gehe ins Hauptspielverzeichnis und starte die ausführbare Datei **arma3server_x64.exe**.

Das öffnet die Serverkonsole und startet den Server.

Spieler können sich über den **Arma 3 Serverbrowser** mit deiner **Server-IP-Adresse** und dem Standardport **2302** verbinden.

## Fazit

Glückwunsch, du hast den **Arma 3 Server** erfolgreich auf deinem VPS/Dedicated Server installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />