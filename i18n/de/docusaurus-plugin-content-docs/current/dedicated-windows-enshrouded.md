---
id: dedicated-windows-enshrouded
title: "Dedicated Server: Enshrouded Dedicated Server Windows Setup"
description: "Entdecke, wie du schnell und einfach einen Enshrouded Dedicated Server auf deinem Windows VPS oder Dedicated Server einrichtest → Jetzt mehr erfahren"
sidebar_label: Enshrouded
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Windows VPS oder Dedicated Server und möchtest darauf den Enshrouded Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/PR2nR7xtNp93BLx/preview" title="How To Setup Enshrouded Dedicated Server on Windows VPS!" description="Du verstehst besser, wenn du Dinge in Aktion siehst? Kein Problem! Schau dir unser Video an, das alles für dich erklärt. Egal ob du es eilig hast oder einfach lieber auf die spannendste Art lernst!"/>

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, nutze unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung.

Sobald du Zugriff auf deinen Server hast, musst du **SteamCMD** einrichten, um die nötigen Dedicated Server Dateien herunterladen zu können. SteamCMD ist die **Kommandozeilen-Version (CLI)** des Steam-Clients und das Tool, mit dem du einfach verschiedene Steam Workshop und Dedicated Server Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Seite](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Beispiel nennen wir ihn `steamcmd`. Gehe in deinen Downloads-Ordner, finde die gerade heruntergeladene **steamcmd.zip** und verschiebe sie in den `steamcmd`-Ordner. Entpacke die Datei jetzt per Rechtsklick mit der Windows-eigenen Entpackfunktion oder mit Programmen wie 7zip oder Winrar. Danach solltest du die **steamcmd.exe** Datei entpackt vorfinden.

Starte einfach **steamcmd.exe** und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** erscheint, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Enshrouded Dedicated Servers im nächsten Abschnitt weitermachen.

## Installation

Nach der Installation solltest du Befehle im **steamcmd.exe** Kommandozeilenfenster ausführen können, das du zuvor gestartet hast. Du musst dich zuerst anmelden, bevor du irgendwas machen kannst, und zwar als **anonymous** User mit dem Befehl: `login anonymous`

Nach dem Login kannst du mit dem Download der Dateien starten.

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [Pfad]` festlegen, wobei du `[Pfad]` durch den gewünschten Pfad für deinen Server ersetzt. Zum Beispiel: 
```
force_install_dir C:\Enshrouded-Server
```
:::

Starte jetzt den Download mit dem Befehl `app_update 2278520`. Die App-ID **2278520** steht für die **Enshrouded** Anwendung.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Bitte unterbrich den Prozess nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber Geduld zahlt sich aus! :)
:::

Nach erfolgreichem Download gehst du in das Verzeichnis, in dem alle Serverdateien gespeichert wurden. Dort kannst du die **enshrouded_server.exe** starten, um den Server zu starten. Wir empfehlen jedoch, vorher noch das Portforwarding einzurichten und deinen Server zu konfigurieren.

### Portfreigabe für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Portfreigabe-Regeln für die Ports anlegen, die der Dedicated Server nutzt. Das kannst du entweder direkt per Powershell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Per Powershell" default>

Öffne die Windows-Suche und suche nach **Powershell**. Klicke mit Rechts und wähle **Als Administrator ausführen**, damit du die nötigen Rechte hast und alles reibungslos funktioniert.

:::info
Stelle sicher, dass du die Powershell im Administrator-Modus startest, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge nun die folgenden Befehle in die Powershell ein:
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

Diese Befehle legen automatisch die Firewall-Regeln an, die dein Enshrouded Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Per Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen Enshrouded Server anlegen. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 15636-15637
- UDP eingehend und ausgehend: 15636-15637

Wenn du dabei Hilfe brauchst, schau in unsere [Portfreigabe (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

Nachdem du die Regeln hinzugefügt hast, ist dein Server erreichbar. Du kannst dich jetzt über die IP-Adresse deines Servers verbinden. Wähle dazu im Hauptmenü deinen Charakter aus, gehe zum Tab **Find Games** und klicke auf **Add Server**. Gib dort die Server-IP, den Port (standardmäßig 15636) und dein Serverpasswort ein (falls gesetzt, sonst leer lassen).

:::tip
Schau dir unsere [Server-Konfiguration](enshrouded-configuration.md) Anleitung an, wenn du ein Passwort für deinen Server aktivieren oder Einstellungen anpassen möchtest.
:::

Wir empfehlen, deinen Server zuerst über den nächsten Abschnitt zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines Enshrouded Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei im Serververzeichnis vornehmen.

Navigiere dazu in folgendes Verzeichnis:
```
..EnshroudedServer/ (Root-Verzeichnis)
```

Dort findest du die Datei **enshrouded_server.json**. In dieser Datei kannst du verschiedene Parameter für deinen Server einstellen. Alle verfügbaren Optionen und ihre Funktionen findest du in unserer [Server-Konfiguration](enshrouded-configuration.md) Anleitung.

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Gehe in das Basisverzeichnis deines Enshrouded Servers und starte **enshrouded_server.exe**, um den Server hochzufahren. Es öffnet sich die Server-Konsole in einem Kommandozeilenfenster und der Startvorgang beginnt. Du kannst dich nun direkt verbinden, indem du im Spiel zum Tab **Find Games** gehst, auf **Add Server** klickst und deine Server-IP sowie den Port (Standard 15636) eingibst.

Du hast Enshrouded erfolgreich auf deinem Windows Dedicated Server installiert.

<InlineVoucher />