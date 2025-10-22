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

Du hast einen Windows Dedicated Server und möchtest darauf den RageMP Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server einrichtest.

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per Remote Desktop (RDP) mit deinem Dedicated Server. Falls du dabei Hilfe brauchst, schau dir unsere [Erstzugang (RDP)](vserver-windows-userdp.md) Anleitung an.

Sobald du Zugriff auf deinen Server hast, installiere als erstes das [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe), da dies eine Voraussetzung für RageMP ist. Stelle sicher, dass es installiert ist, bevor du weitermachst. Falls du unsicher bist, ob es schon installiert ist, starte einfach den Installer – er zeigt dir während der Installation an, ob es bereits vorhanden ist.

Nachdem die Abhängigkeit installiert ist, lade die neueste Server-Version von der [RageMP Webseite](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe) herunter.

:::tip
Falls du RageMP schon installiert hast, kannst du direkt zum Abschnitt **Wechsel zum Server-Branch** springen. Du musst RageMP nicht nochmal neu installieren.
:::

## Installation

Nachdem du die Version heruntergeladen hast, starte die **RAGEMultiplayer_Setup.exe** und folge den Installationsschritten. Du kannst während der Installation den Installationspfad anpassen, was wir dir auch empfehlen.

Mit installiertem RageMP öffne die **RAGE Multiplayer** App, die jetzt in deinen Windows-Apps verfügbar sein sollte.

Beim ersten Start wirst du aufgefordert, den Pfad zu deinem GTA:V-Installationsordner anzugeben. Der Installationsordner hängt vom Launcher ab, mit dem du das Spiel installiert hast, und befindet sich standardmäßig unter `C:/Program Files` oder `C:/Program Files (x86)`.

Jetzt musst du den Branch anpassen, um die Server-Dateien herunterzuladen.

### Wechsel zum Server-Branch

Wechsle in das Verzeichnis, in das RageMP installiert wurde. Suche dort die Datei **config.xml**. Ändere den Parameter `channel` von `prerelease` auf `prerelease_server` und speichere die Datei.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Starte nun die **updater.exe**, die basierend auf dem Branch-Wechsel die nötigen Server-Dateien herunterlädt. Du wirst sehen, dass im RageMP-Verzeichnis ein neuer Ordner **server-files** erscheint – genau den brauchst du.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

Du kannst den `channel`-Parameter wieder auf `prerelease` zurücksetzen und die **update.exe** erneut starten, um wieder zur Client-Version zu wechseln und normal spielen zu können.

:::tip
Du kannst die Server-Dateien auch verschieben und den Ordner beliebig umbenennen, z.B. auf deinen Desktop. Du musst das nicht im `RAGEMP`-Ordner laufen lassen.
:::

Um den Server zu starten, führe einfach **ragemp-server.exe** im `server-files`-Verzeichnis oder deinem Server-Ordner aus – der Server startet dann. Wir empfehlen aber vorher das Port-Forwarding und die Server-Konfiguration.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Port-Forwarding für deinen Server

Damit dein Server öffentlich erreichbar ist, musst du Port-Forwarding für die Ports einrichten, die der Dedicated Server nutzt. Das kannst du entweder direkt per PowerShell-Befehle machen, was einfacher ist, oder klassisch über die Windows Defender Firewall.

:::tip
Beim ersten Start des Servers erscheint eine UAC-Abfrage. Wenn du diese bestätigst, werden die Firewall-Regeln automatisch gesetzt und du kannst direkt zum nächsten Abschnitt springen. Falls nicht, folge einer der Methoden unten.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Per PowerShell" default>

Öffne die Windows-Suche und suche nach **PowerShell**. Klicke mit Rechts und wähle **Als Administrator ausführen**, damit die nötigen Rechte vorhanden sind und alles korrekt funktioniert.

:::info
Achte darauf, PowerShell im Administrator-Modus zu starten, sonst werden die Einstellungen nicht richtig übernommen.
:::

Füge dann folgende Befehle in die PowerShell ein und führe sie aus:

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

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Erstelle neue Regeln für deinen RageMP Server. Klicke dazu auf eingehende und ausgehende Regeln und füge folgende Protokolle und Ports hinzu:

- TCP eingehend und ausgehend: 22005
- UDP eingehend und ausgehend: 22005

Wenn du dabei Hilfe brauchst, nutze unsere [Port-Forwarding (Firewall)](vserver-windows-port.md) Anleitung.

</TabItem>
</Tabs>

Nachdem du die Regeln hinzugefügt hast, ist dein Server erreichbar und du kannst dich über die IP-Adresse deines Servers verbinden.

Wir empfehlen, deinen Server zuerst zu konfigurieren, bevor du dich verbindest.

## Konfiguration

Bis hierhin hast du die Grundinstallation deines RageMP Servers abgeschlossen. Weitere Einstellungen kannst du über eine Konfigurationsdatei vornehmen.

Wechsle zurück in den Hauptordner. Öffne die Datei **conf.json**. Dort kannst du verschiedene Server-Parameter anpassen, z.B. Port, Servername und mehr.

Hier ein Beispiel für ein paar Konfigurationsoptionen:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## Server starten & verbinden

Jetzt kannst du deinen Server starten. Gehe in das `server-files`-Verzeichnis oder deinen Server-Ordner und starte **ragemp-server.exe**. Es öffnet sich die Server-Konsole im Kommandozeilenfenster und der Server startet.

Du kannst dich jetzt direkt im Spiel über den RageMP Launcher mit deinem Server verbinden.

## Fazit

Glückwunsch, du hast den RageMP Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />