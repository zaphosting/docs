---
id: dedicated-windows-ragemp
title: "Dedicated Server: RageMP Dedicated Server Windows Einrichtung"
description: Informationen zur Einrichtung eines dedizierten RageMP-Servers auf einem Windows Dedicated Server von ZAP-Hosting – ZAP-Hosting.com-Dokumentation
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Hast du einen Windows Dedicated Server und möchtest den RageMP Dedicated Server Service darauf installieren? Dann bist du hier richtig. In diesem Anleitung erklären wir dir Schritt für Schritt, wie du diesen Service auf deinem Server installierst.

<InlineVoucher />

## Vorbereitung

Stelle zunächst über Remote Desktop (RDP) eine Verbindung zu deinem Dedicated Server her. Verwende unseren Anleitung [Erstzugang (RDP)](vserver-windows-userdp.md), wenn du dabei Hilfe benötigst.

Sobald du auf deinen Server zugegriffen hast, beginne mit der Installation von [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe), da dies eine Voraussetzung für RageMP ist. Stelle sicher, dass dies installiert ist, bevor du fortfährst. Wenn du dir nicht sicher bist, ob du es bereits installiert hast, führe das Installationsprogramm aus und es wird dir während des Setups mitgeteilt.

Sobald du die Abhängigkeit installiert hast, lade die neueste Serverversion von der [RageMP-Website](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe) herunter.

:::tip
Wenn du RageMP bereits installiert hast, kannst du mit dem Unterabschnitt **Wechsel zum Serverzweig** fortfahren. Du musst RageMP nicht erneut installieren.
:::

## Installation

Sobald die Version heruntergeladen wurde, führe die ausführbare Datei **RAGEMultiplayer_Setup.exe** aus und fahre mit den Installationsschritten fort. Du kannst den Installationspfad während des Setups anpassen, was wir empfehlen.

Nachdem RageMP installiert wurde, starte die **RAGE Multiplayer**-App, die nun in deinen Windows-Apps verfügbar sein sollte.

Beim ersten Start musst du den Pfad zu deinem GTA:V-Spielinstallationsordner festlegen. Das Installationsverzeichnis hängt von dem Launcher ab, über den du das Spiel installiert hast, und befindet sich standardmäßig unter `C:/Program Files` oder `C:/Program Files (x86)`.

Du musst nun den Zweig anpassen, um die Serverdateien herunterzuladen.

### Wechsel zum Serverzweig

Navigiere zu dem Verzeichnis, in dem RageMP installiert wurde. Suche die **config.xml**-Datei in diesem Ordner. Passe den `channel`-Parameter von `prerelease` zu `prerelease_server` an und speichere die Datei.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Führe nun die ausführbare Datei `updater.exe` aus, die die erforderlichen Serverdateien basierend auf der Änderung des Zweigs herunterlädt. Du wirst einen neuen Ordner `server-files` in deinem RageMP-Verzeichnis bemerken, den du benötigst.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

Du kannst jetzt den Parameter `channel` wieder auf `prerelease` zurücksetzen und die Datei **update.exe** erneut ausführen, um wieder auf die Client-Version umzuschalten, damit du wieder spielen kannst.

:::tip
Du kannst die Serverdateien verschieben und den Ordner beliebig umbenennen, z. B. auf deinen Desktop. Du musst dies nicht innerhalb des Ordners `RAGEMP` ausführen.
:::

Um den Server zu starten, führe einfach **ragemp-server.exe** aus, das sich im Verzeichnis `server-files` oder in deinem Serverordner befindet, und der Server wird gestartet. Wir empfehlen jedoch, zuerst die Portweiterleitung und die Konfiguration deines Servers vorzunehmen.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Portweiterleitung deines Servers

Um sicherzustellen, dass dein Server für die Öffentlichkeit zugänglich ist, musst du die Portweiterleitungsregeln für die Ports ändern, die der dedizierte Serverprozess verwendet. Dies kann entweder direkt über PowerShell-Befehle erfolgen, was einfacher ist, oder regelmäßig über die Windows Defender Firewall-Seite.

:::tip
Beim ersten Start des Servers sollte eine UAC-Eingabeaufforderung angezeigt werden. Wenn du diese akzeptierst, werden deine Firewall-Regeln automatisch eingerichtet, sodass du mit dem nächsten Abschnitt fortfahren kannst. Andernfalls folge einer der folgenden Methoden.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öffne das Windows-Suchfeld und suche nach **PowerShell**. Klicke mit der rechten Maustaste und **Führe als Administrator aus**, damit die Berechtigungen zugänglich sind und alles korrekt funktioniert.

:::info
Stelle sicher, dass du PowerShell im Administratormodus ausführst, da die Einstellungen sonst möglicherweise nicht korrekt angewendet werden.
:::

Kopiere als Nächstes die folgenden Befehle und füge sie in deine PowerShell-Eingabeaufforderung ein:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch Firewallregeln, die erforderlich sind, damit dein RageMP-Server für die Öffentlichkeit zugänglich ist.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Verwende die Suchfunktion von Windows, um die **Windows-Firewall-Einstellungen mit erweiterter Sicherheit** zu öffnen. Möglicherweise musst du auf **Erweiterte Einstellungen** klicken, um das erforderliche Fenster zu öffnen, wenn du die Basis-Seite der Windows-Firewall öffnest.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen RageMP-Server erstellen. Klicke dazu auf die eingehenden und ausgehenden Regeln, wie unten beschrieben, und füge sie für die folgenden Protokolle und Ports hinzu:

- TCP eingehend und ausgehend: 22005
- UDP eingehend und ausgehend: 22005

Bitte verwende unsere [Portweiterleitung (Firewall)](vserver-windows-port.md), wenn du weitere Hilfe dabei benötigst.

</TabItem>
</Tabs>

Sobald du diese Regeln hinzugefügt hast, ist dein Server nun zugänglich, was bedeutet, dass du dich über die IP-Adresse deines Servers mit ihm verbinden kannst.

Wir empfehlen, dass du deine Servereinstellungen zuerst über den folgenden Abschnitt konfigurierst, bevor du auf deinen Server zugreifst.

## Konfiguration

Zu diesem Zeitpunkt hast du die Einrichtung deines RageMP-Servers abgeschlossen. Du kannst weitere Serverkonfigurationen über eine Konfigurationsdatei vornehmen.

Navigiere zurück zum Stammordner. Suche und öffne die **conf.json**-Konfigurationsdatei. In dieser Datei kannst du einige Serverparameter anpassen, die vom Port bis zum Servernamen reichen.

Als Beispiel sind hier einige Konfigurationsoptionen aufgeführt, die festgelegt sind:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe zum Verzeichnis `server-files` oder zu deinem Serverordner und führe **ragemp-server.exe** aus, um den Startvorgang zu starten. Dadurch wird die Serverkonsole in einer Eingabeaufforderung geöffnet und der Startvorgang beginnt.

Du kannst dich jetzt über den RageMP-Launcher direkt mit deinem Server im Spiel verbinden.

## Fazit

Herzlichen Glückwunsch, du hast den RageMP-Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert! Bei weiteren Fragen oder Problemen wende dich bitte an unser Support-Team, das dir täglich zur Verfügung steht!
