---
id: vserver-windows-openmp
title: "vServer: Open.mp Dedicated Server Windows Setup"
description: "Lerne, wie du einen open.mp Dedicated Server auf deinem Windows VPS einrichtest und konfigurierst für nahtloses Multiplayer-Gaming → Jetzt mehr erfahren"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows VPS und möchtest den open.mp Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server installierst.

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per Remote Desktop (RDP) mit deinem VPS. Falls du dabei Hilfe brauchst, schau dir unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

Sobald du Zugriff auf deinen Server hast, lade die neueste Version aus dem [open.mp GitHub Repository](https://github.com/openmultiplayer/open.mp/releases) herunter. Achte darauf, die **win-x86** Version auszuwählen.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Installation

Nachdem der Release heruntergeladen wurde, entpacke die Dateien mit einem Tool wie 7zip oder WinRAR. Es sollte ein **Server** Ordner entstehen, der alle notwendigen Serverdateien enthält.

Um den Server zu starten, führe einfach **omp-server.exe** aus und der Server bootet. Wir empfehlen jedoch, zuerst das Port Forwarding einzurichten und deinen Server zu konfigurieren.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Port Forwarding für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Port-Weiterleitungsregeln für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt über PowerShell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

:::tip
Beim ersten Start des Servers sollte eine UAC-Abfrage erscheinen. Wenn du diese bestätigst, werden die Firewall-Regeln automatisch eingerichtet und du kannst direkt mit dem nächsten Abschnitt weitermachen. Falls nicht, folge einer der Methoden unten.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Öffne die Windows-Suche und suche nach **PowerShell**. Klicke mit der rechten Maustaste und wähle **Als Administrator ausführen**, damit die nötigen Berechtigungen vorhanden sind und alles reibungslos funktioniert.

:::info
Stelle sicher, dass du PowerShell im Administrator-Modus ausführst, sonst werden die Einstellungen möglicherweise nicht korrekt übernommen.
:::

Kopiere und füge dann die folgenden Befehle in die PowerShell ein:
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein open.mp Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Erstelle neue Regeln für deinen open.mp Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 7777
- UDP eingehend und ausgehend: 7777

Falls du weitere Hilfe brauchst, schau dir unsere [Port Forwarding (Firewall)](vserver-windows-port.md) Anleitung an.

</TabItem>
</Tabs>

Nachdem du diese Regeln hinzugefügt hast, ist dein Server erreichbar und du kannst dich über die IP-Adresse deines Servers verbinden.

Wir empfehlen, deinen Server zuerst über den nächsten Abschnitt zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines open.mp Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei vornehmen.

Wechsle zurück in das Root-Verzeichnis und öffne die **config.json** Datei. Dort kannst du viele Serverparameter anpassen, z.B. den Port, das Passwort und vieles mehr.

Hier ein Beispiel für ein paar Konfigurationsoptionen:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

Sieh dir unsere [Server Konfiguration](openmp-configuration.md) an, um alle verfügbaren Optionen und ihre Funktionen kennenzulernen.

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Gehe ins Root-Verzeichnis und führe **omp-server.exe** aus, um den Startvorgang zu beginnen. Die Server-Konsole öffnet sich in einem Kommando-Fenster und der Server bootet.

Du kannst dich jetzt direkt im Spiel über den open.mp Launcher mit deinem Server verbinden. Wenn du möchtest, dass dein Server in der Serverliste angezeigt wird, schau dir unsere [Server Konfiguration](openmp-configuration.md) Anleitung an und stelle sicher, dass der Parameter `enable_query` auf true steht (sollte standardmäßig so sein). Speichere die Datei und starte den Server erneut.

## Fazit

Glückwunsch, du hast deinen open.mp Server erfolgreich auf deinem VPS installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />