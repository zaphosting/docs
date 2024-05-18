---
id: vserver-windows-foundry
title: "vServer: Foundry Dedicated Server Setup"
description: Informationen zum Einrichten eines Foundry Dedicated Servers auf einem VPS/Root-Server/Dedicated Server - ZAP-Hosting.com Dokumentation
sidebar_label: Foundry
---

import YouTube from '@site/src/components/YouTube/YouTube';

## Einführung

Hast du einen Windows VPS, Root Server oder Dedicated Server und möchtest den Foundry Dedicated Server Service darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst auf deinem Server installierst.

<YouTube videoId="bRsZNqKsghA" title="How To Setup Foundry Dedicated Server on Windows VPS!" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

## Vorbereitung

Verbinde dich zunächst über Remote Desktop (RDP) mit deinem VPS oder Rootserver. Benutze unsere Anleitung [RDP-Erstzugang](vserver-windows-userdp.md), wenn du Hilfe dabei brauchst.

Sobald du auf deinen Server zugegriffen hast, musst du **SteamCMD** einrichten, damit du die notwendigen Dateien für den dedizierten Server herunterladen kannst. SteamCMD ist die **Befehlszeilenversion (CLI)** des Steam-Clients und das Tool, mit dem du ganz einfach eine Reihe von Steam-Workshop- und Dedicated Server-Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Website](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Szenario nennen wir ihn `steamcmd`. Gehe zu deinem Download-Ordner, suche die Datei **steamcmd.zip**, die du gerade heruntergeladen hast, und lege sie in deinem Ordner `steamcmd` ab. Nun musst du die Datei entpacken, indem du mit der rechten Maustaste klickst und die Entpackungsfunktion von Windows oder ein anderes Programm wie .7zip oder Winrar verwendest. Das Ergebnis sollte eine **steamcmd.exe** Datei sein, die entpackt wurde.

Führe einfach **steamcmd.exe** aus und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![image](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** angezeigt wird, ist der Vorgang erfolgreich abgeschlossen und du kannst mit der Installation des Foundry Dedicated Servers im folgenden Abschnitt fortfahren.

## Installation

Nach der Installation solltest du in der Lage sein, Befehle in der **steamcmd.exe** Eingabeaufforderung auszuführen, die du zuvor ausgeführt hast. Bevor du etwas tun kannst, musst du dich mit dem Benutzer **anonymous** anmelden, indem du den Befehl `login anonymous`

Sobald du eingeloggt bist, kannst du mit dem Herunterladen der Dateien beginnen. 

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis festlegen, indem du den Befehl `force_install_dir [path]` verwendest und dabei `[path]` durch den Pfad ersetzt, den du für deinen Server verwenden möchtest. Zum Beispiel: 

```
force_install_dir C:\Foundry-Server
```
:::

Führe nun den Befehl `app_update 2915550` aus, der den Download startet. Die App ID **2915550** ist die **Foundry** Anwendung.

![image](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Bitte unterbrich den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber es lohnt sich, geduldig zu sein! :)
:::

Sobald der Vorgang erfolgreich abgeschlossen ist, gehst du in das Download-Verzeichnis, in dem alle Serverdateien heruntergeladen worden sind. Hier kannst du die **FoundryDedicatedServerLauncher.exe** verwenden, um den Server zu starten. Wir empfehlen dir jedoch, deinen Server zuerst zu konfigurieren und eine Portweiterleitung einzurichten.

### Portweiterleitung deines Servers

Um sicherzustellen, dass dein Server für die Öffentlichkeit zugänglich ist, musst du die Portweiterleitungsregeln für die Ports ändern, die der dedizierte Serverprozess verwendet. Du kannst dies entweder direkt über Powershell-Befehle tun, was einfacher ist, oder regelmäßig über die Windows Defender Firewall-Seite.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Über Powershell" default>

Öffne dein Windows-Suchfeld und suche nach **PowerShell**. Achte darauf, dass du mit der rechten Maustaste klickst und **Als Administrator ausführen** wählst, damit die Berechtigungen zugänglich sind und alles richtig funktioniert.

:::info
Vergewissere dich, dass du die PowerShell im Administratormodus ausführst, sonst werden die Einstellungen möglicherweise nicht korrekt übernommen.
:::

Als Nächstes kopierst du die folgenden Befehle und fügst sie in deine Powershell-Eingabeaufforderung ein:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

Mit diesen Befehlen werden automatisch Firewall-Regeln erstellt, die notwendig sind, damit dein Foundry-Server für die Öffentlichkeit zugänglich ist.

</TabItem>

<TabItem value="windefender" label="Über Windows Defender">

Verwende die Suchfunktion von Windows, um die **Windows Firewall-Einstellungen mit erweiterter Sicherheit** zu öffnen. Es kann sein, dass du auf **Erweiterte Einstellungen** drücken musst, um das entsprechende Fenster zu öffnen, wenn du die Basisseite der Windows Firewall öffnest.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen Foundry-Server erstellen. Dazu klickst du auf die ein- und ausgehenden Regeln wie unten beschrieben und fügst sie für die folgenden Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 3724, 27015
- UDP eingehend und ausgehend: 3724, 27015

Bitte benutze unseren [Windows Port freigeben Anleitung](vserver-windows-port.md), wenn du weitere Hilfe benötigst.

</TabItem>
</Tabs>

Wenn du diese Regeln hinzugefügt hast, ist dein Server jetzt erreichbar, d.h. du kannst dich über die IP-Adresse deines Servers mit ihm verbinden. Du kannst dies tun, indem du im Hauptmenü auf Multiplayer gehst, IP Direct Connect eingibst und deine IP-Adresse und den verwendeten Port eingibst, der standardmäßig 3724 ist und den du eingerichtet hast.

Wir empfehlen, dass du deine Servereinstellungen zuerst im folgenden Abschnitt konfigurierst, bevor du auf deinen Server zugreifst.

## Konfiguration

An dieser Stelle hast du die Einrichtung deines Foundry-Servers abgeschlossen. Du kannst weitere Serverkonfigurationen über eine Konfigurationsdatei vornehmen. Gehe zurück zu deinem Spielordner und erstelle eine neue **app.cfg** Datei (falls sie noch nicht existiert) im Hauptverzeichnis. Diese sollte im selben Ordner wie die **FoundryDedicatedServerLauncher.exe** Serverstartdatei erstellt werden.

Jetzt kannst du die Datei **app.cfg** mit Notepad oder einem Editor deiner Wahl öffnen und Konfigurationsoptionen für Parameter hinzufügen, die du anpassen möchtest. Du solltest einfach für jeden Parameter, den du hinzufügen möchtest, eine neue Zeile mit einem Gleichheitszeichen erstellen, gefolgt von dem Wert, auf den du ihn setzen möchtest.

Hier sind zum Beispiel drei Konfigurationsoptionen, die eingestellt werden:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

In unserer [Foundry Server-Konfigurationsanleitung](foundry-configuration.md) findest du alle verfügbaren Optionen und ihre Funktionen.

## Starten und Verbinden mit deinem Server

Nun ist es an der Zeit, deinen Server zu starten. Gehe in das Stammverzeichnis und führe **FoundryDedicatedServerLauncher.exe** aus, um den Startvorgang zu beginnen. Dadurch wird die Konsole des Servers in einer Eingabeaufforderung geöffnet und der Startvorgang beginnt.

Jetzt kannst du dich über deine IP direkt mit deinem Server verbinden, indem du unter **Multiplayer->IP Direct Connect** die IP-Adresse deines Servers und den Port 3724 eingibst, der standardmäßig eingestellt ist und den du weitergeleitet hast.

Wenn du möchtest, dass dein Server in der Serverliste verfügbar ist, sieh dir bitte unsere [Foundry Server-Konfigurationsanleitung](foundry-configuration.md) an und füge die entsprechenden Parameter `server_name` und `server_is_public` in deine Konfigurationsdatei ein. Speichere die Datei anschließend und führe den Server erneut aus.

Du hast Foundry erfolgreich auf deinem Windows VPS installiert.