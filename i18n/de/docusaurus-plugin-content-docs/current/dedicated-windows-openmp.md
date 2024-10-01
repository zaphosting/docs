---
id: dedicated-windows-openmp
title: "Dedicated Server: Open.mp Dedicated Server Windows Einrichtung"
description: Informationen zur Einrichtung eines dedizierten open.mp-Servers auf einem Windows Dedicated Server von ZAP-Hosting – ZAP-Hosting.com-Dokumentation
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Windows Dedicated Server und möchtest den open.mp Dedicated Server Service darauf installieren? Dann bist du hier richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server installierst.

<InlineVoucher />

## Vorbereitung

Stelle zunächst über Remote Desktop (RDP) eine Verbindung zu deinem Dedicated Server her. Verwende unseren Anleitung [Erstzugang (RDP)](vserver-windows-userdp.md), wenn du dabei Hilfe benötigst.

Sobald du auf deinen Server zugegriffen hast, lade die neueste Version aus dem [open.mp GitHub Repository](https://github.com/openmultiplayer/open.mp/releases) herunter. Achte darauf, dass du die **win-x86**-Version auswählst.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Installation

Nach dem Herunterladen der Version entpacke den Inhalt der Datei mit einem Tool wie 7zip oder WinRAR. Dadurch sollte ein **Server**-Ordner erstellt werden, der alle erforderlichen Serverdateien enthält.

Um den Server zu starten, führe einfach **omp-server.exe** aus und der Server wird gestartet. Wir empfehlen jedoch, zuerst die Portweiterleitung einzurichten und deinen Server zu konfigurieren.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Portweiterleitung für deinen Server

Um sicherzustellen, dass dein Server für die Öffentlichkeit zugänglich ist, musst du die Portweiterleitungsregeln für die Ports ändern, die der dedizierte Serverprozess verwendet. Dies kannst du entweder direkt über PowerShell-Befehle tun, was einfacher ist, oder regelmäßig über die Windows Defender Firewall-Seite.

:::tip
Beim ersten Start des Servers sollte eine UAC-Eingabeaufforderung angezeigt werden. Wenn du diese akzeptierst, werden deine Firewall-Regeln automatisch eingerichtet, sodass du mit dem nächsten Abschnitt fortfahren kannst. Andernfalls folge einer der folgenden Methoden.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne das Windows-Suchfeld und suche nach **PowerShell**. Klicke mit der rechten Maustaste darauf und wähle **Als Administrator ausführen**, damit die Berechtigungen zugänglich sind und alles ordnungsgemäß funktioniert.

:::info
Stelle sicher, dass du PowerShell im Administratormodus ausführst, da die Einstellungen sonst möglicherweise nicht korrekt angewendet werden.
:::

Kopiere anschließend die folgenden Befehle und füge sie in deine PowerShell-Eingabeaufforderung ein:
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch Firewallregeln, die erforderlich sind, damit der open.mp-Server für die Öffentlichkeit zugänglich ist.

</TabItem>

<TabItem value="windefender" label="Über Windows Defender">

Verwende die Suchfunktion von Windows, um **Windows-Firewalleinstellungen mit erweiterter Sicherheit** zu öffnen. Möglicherweise musst du auf **Erweiterte Einstellungen** klicken, um das erforderliche Fenster zu öffnen, wenn du die Basis-Seite der Windows-Firewall öffnest.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen open.mp-Server erstellen. Klicke dazu auf die eingehenden und ausgehenden Regeln, wie unten beschrieben, und füge sie für die folgenden Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 7777
- UDP eingehend und ausgehend: 7777

Bitte verwende unsere [Portweiterleitung (Firewall)](vserver-windows-port.md), wenn du weitere Hilfe dabei benötigst.

</TabItem>
</Tabs>

Nachdem du diese Regeln hinzugefügt hast, ist dein Server nun zugänglich, d. h. du kannst dich über die IP-Adresse deines Servers mit ihm verbinden.

Wir empfehlen, dass du deine Servereinstellungen zuerst über den folgenden Abschnitt konfigurierst, bevor du auf deinen Server zugreifst.

## Konfiguration

Zu diesem Zeitpunkt hast du die Einrichtung deines open.mp-Servers abgeschlossen. Du kannst weitere Serverkonfigurationen über eine Konfigurationsdatei vornehmen.

Navigiere zurück zum Stammordner. Suche und öffne die Konfigurationsdatei **config.json**. In dieser Datei kannst du eine Vielzahl von Serverparametern anpassen, vom Port bis zum Passwort und vieles mehr.

Hier sind einige der voreingestellten Konfigurationsoptionen:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

Unter [Server Konfiguration](openmp-configuration.md) findest du alle verfügbaren Optionen und erfährst, wozu sie jeweils dienen.

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe zum Stammverzeichnis und führe **omp-server.exe** aus, um den Startvorgang zu starten. Dadurch wird die Serverkonsole in einer Eingabeaufforderung geöffnet und der Startvorgang beginnt.

Du kannst dich nun über den open.mp-Launcher direkt mit deinem Server im Spiel verbinden. Wenn du Serverinformationen in der Serverliste anzeigen möchtest, lies bitte unseren Anleitung [Server Konfiguration](openmp-configuration.md) und stelle sicher, dass der Parameter `enable_query` auf true gesetzt ist (sollte die Standardeinstellung sein). Speichere die Datei anschließend und führe die ausführbare Serverdatei erneut aus.

## Abschluss

Herzlichen Glückwunsch, du hast den open.mp-Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Bei weiteren Fragen oder Problemen wende dich bitte an unser Support-Team, das dir täglich zur Verfügung steht! 