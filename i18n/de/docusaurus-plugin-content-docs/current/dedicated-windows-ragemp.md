---
id: dedicated-windows-ragemp
title: "Dedicated Server: RageMP Dedicated Server Windows Setup"
description: "Lerne, wie du den RageMP Dedicated Server auf deinem Windows Dedicated Server einrichtest, um Multiplayer-GTA V-Sessions zu hosten → Jetzt mehr erfahren"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Du hast einen Windows Dedicated Server und möchtest den RageMP Dedicated Server darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

## Vorbereitung

Verbinde dich zunächst per Remote Desktop (RDP) mit deinem Dedicated Server. Falls du dabei Hilfe brauchst, schau dir unsere [Initial Access (RDP)](vserver-windows-userdp.md) Anleitung an.

Sobald du Zugriff auf deinen Server hast, installiere zuerst das [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe), da dies eine Voraussetzung für RageMP ist. Stelle sicher, dass es installiert ist, bevor du weitermachst. Falls du unsicher bist, ob es schon installiert ist, starte einfach den Installer – er sagt dir während der Installation Bescheid.

Nachdem die Abhängigkeit installiert ist, lade die neueste Server-Version von der [RageMP Website](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe) herunter.

:::tip
Falls du RageMP schon installiert hast, kannst du direkt zum Abschnitt **Wechsel zum Server-Branch** springen. Eine Neuinstallation ist nicht nötig.
:::

## Installation

Nachdem du die Version heruntergeladen hast, starte die **RAGEMultiplayer_Setup.exe** und folge den Installationsschritten. Du kannst während der Installation den Installationspfad anpassen, was wir dir empfehlen.

Mit installiertem RageMP öffne die **RAGE Multiplayer** App, die jetzt in deinen Windows-Apps verfügbar sein sollte.

Beim ersten Start wirst du aufgefordert, den Pfad zu deinem GTA:V-Installationsordner anzugeben. Der Installationsordner hängt vom Launcher ab, mit dem du das Spiel installiert hast, und befindet sich standardmäßig unter `C:/Program Files` oder `C:/Program Files (x86)`.

Jetzt musst du den Branch anpassen, um die Server-Dateien herunterzuladen.

### Wechsel zum Server-Branch

Navigiere in das Verzeichnis, in das RageMP installiert wurde. Suche die Datei **config.xml** in diesem Ordner. Ändere den Parameter `channel` von `prerelease` auf `prerelease_server` und speichere die Datei.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Starte nun die **updater.exe**, die die notwendigen Server-Dateien basierend auf dem Branch-Wechsel herunterlädt. Du wirst einen neuen Ordner **server-files** in deinem RageMP-Verzeichnis sehen, der die benötigten Dateien enthält.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

Du kannst den `channel`-Parameter wieder auf `prerelease` zurücksetzen und die **update.exe** erneut ausführen, um wieder zur Client-Version zu wechseln und das Spiel zu starten.

:::tip
Du kannst die Server-Dateien verschieben und den Ordner beliebig umbenennen, z.B. auf deinen Desktop. Es ist nicht nötig, sie im `RAGEMP`-Ordner zu lassen.
:::

Um den Server zu starten, führe einfach **ragemp-server.exe** im `server-files`-Verzeichnis oder deinem Server-Ordner aus. Der Server startet dann. Wir empfehlen aber, vorher das Port-Forwarding einzurichten und deinen Server zu konfigurieren.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Port-Forwarding für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Port-Forwarding für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt per PowerShell-Befehle machen, was einfacher ist, oder über die Windows Defender Firewall.

:::tip
Beim ersten Start des Servers erscheint eine UAC-Abfrage. Wenn du diese bestätigst, werden die Firewall-Regeln automatisch eingerichtet und du kannst direkt mit dem nächsten Abschnitt weitermachen. Falls nicht, folge einer der Methoden unten.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Per PowerShell" default>

Öffne die Windows-Suche und suche nach **PowerShell**. Rechtsklicke darauf und wähle **Als Administrator ausführen**, damit die nötigen Berechtigungen vorhanden sind und alles korrekt funktioniert.

:::info
Stelle sicher, dass du PowerShell im Administrator-Modus ausführst, sonst werden die Einstellungen nicht korrekt übernommen.
:::

Füge dann die folgenden Befehle in die PowerShell ein:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch die Firewall-Regeln, die dein RageMP Server braucht, um öffentlich erreichbar zu sein.

</TabItem>

<TabItem value="windefender" label="Per Windows Defender">

Öffne über die Windows-Suche die **Windows-Firewall mit erweiterter Sicherheit**. Falls du nur die Basis-Firewall siehst, klicke auf **Erweiterte Einstellungen**, um das richtige Fenster zu öffnen.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Erstelle neue Regeln für deinen RageMP Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:

- TCP eingehend und ausgehend: 22005
- UDP eingehend und ausgehend: 22005

Falls du weitere Hilfe brauchst, schau dir unsere [Port Forwarding (Firewall)](vserver-windows-port.md) Anleitung an.

</TabItem>
</Tabs>

Nachdem du diese Regeln hinzugefügt hast, ist dein Server erreichbar und du kannst dich über die IP-Adresse deines Servers verbinden.

Wir empfehlen, deinen Server zuerst zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines RageMP Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei vornehmen.

Gehe zurück in den Hauptordner. Öffne die Datei **conf.json**. Hier kannst du verschiedene Server-Parameter anpassen, z.B. Port, Servername und mehr.

Beispielhafte Einstellungen:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Wechsle in das Verzeichnis `server-files` oder deinen Server-Ordner und starte **ragemp-server.exe**. Das öffnet die Server-Konsole im Command Prompt und startet den Server.

Im RageMP Launcher kannst du dich jetzt direkt mit deinem Server verbinden.

## Fazit

Glückwunsch, du hast den RageMP Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!