---
id: vserver-windows-palworld
title: "vServer: Palworld Dedicated Server Einrichtung"
description: Informationen zur Einrichtung eines Palworld Dedizierten Servers auf einem vServer/Rootserver - ZAP-Hosting.com Dokumentation
sidebar_label: Palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';

## Einführung

Du hast einen Windows VPS oder Rootserver und möchtest darauf einen Palworld Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst auf deinem Server installierst.

<YouTube videoId="thn0wDE5LDg" title="How To Setup Palworld Dedicated Server on Windows VPS!" description="Feel like you understand better when you see things in action?  We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

## Vorbereitung

Verbinde dich zunächst über Remote Desktop (RDP) mit deinem VPS oder Rootserver. Verwende unsere Anleitung [RDP-Erstzugang](vserver-windows-userdp.md), wenn du Hilfe brauchst.

Sobald du auf deinen Server zugegriffen hast, musst du **SteamCMD** einrichten, damit du die notwendigen Dateien für den dedizierten Server herunterladen kannst. SteamCMD ist die **Befehlszeilenversion (CLI)** des Steam-Clients und das Tool, mit dem du ganz einfach eine Reihe von Steam-Workshop- und Dedicated Server-Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Website](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Szenario nennen wir ihn `steamcmd`. Gehe zu deinem Download-Ordner, suche die Datei **steamcmd.zip**, die du gerade heruntergeladen hast, und lege sie in deinem Ordner `steamcmd` ab. Nun musst du die Datei entpacken, indem du mit der rechten Maustaste klickst und die Entpackungsfunktion von Windows oder ein anderes Programm wie .7zip oder Winrar verwendest. Das Ergebnis sollte eine **steamcmd.exe** Datei sein, die entpackt wurde.

Führe einfach **steamcmd.exe** aus und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![image](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** angezeigt wird, ist der Vorgang erfolgreich abgeschlossen und du kannst mit der Installation des Palworld Dedicated Servers im folgenden Abschnitt fortfahren.

## Installation

Nach der Installation solltest du in der Lage sein, Befehle in der **steamcmd.exe** Eingabeaufforderung auszuführen, die du zuvor ausgeführt hast. Bevor du etwas tun kannst, musst du dich mit dem Benutzer **anonymous** anmelden, indem du den Befehl `login anonymous`

Sobald du eingeloggt bist, kannst du mit dem Herunterladen der Dateien beginnen. 

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis mit dem Befehl `force_install_dir [path]` festlegen, indem du `[path]` durch den Pfad ersetzst, den du für deinen Server verwenden möchtest. Zum Beispiel:
```
force_install_dir C:\Palworld-Server
```
:::

Führe nun den Befehl `app_update 2394010` aus, um den Download zu starten. Die App ID **2394010** ist die **Palworld** Anwendung.

![image](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Bitte unterbrich den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber es lohnt sich, geduldig zu sein! :)
:::

Sobald der Vorgang erfolgreich abgeschlossen ist, gehst du in das Download-Verzeichnis, in dem alle Serverdateien heruntergeladen wurden. Hier kannst du die **PalServer.exe** verwenden, um den Server zu starten. Wir empfehlen dir jedoch, deinen Server zuerst zu konfigurieren und eine Portweiterleitung einzurichten.

### Portweiterleitung deines Servers

Um sicherzustellen, dass dein Server für die Öffentlichkeit zugänglich ist, musst du die Portweiterleitungsregeln für die Ports ändern, die der dedizierte Serverprozess verwendet. Du kannst dies entweder direkt über Powershell-Befehle tun, was einfacher ist, oder regelmäßig über die Windows Defender Firewall-Seite.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Über Powershell" default>

Öffne dein Windows-Suchfeld und suche nach **Powershell**. Achte darauf, dass du mit der rechten Maustaste klickst und **Als Administrator ausführen** wählst, damit die Berechtigungen zugänglich sind und alles richtig funktioniert.

:::info
Vergewissere dich, dass du die Powershell im Administratormodus ausführst, sonst werden die Einstellungen möglicherweise nicht korrekt übernommen.
:::

Als nächstes kopierst du die folgenden Befehle und fügst sie in deine Powershell-Eingabeaufforderung ein:
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

Mit diesen Befehlen werden automatisch Firewall-Regeln erstellt, die notwendig sind, damit dein Palworld-Server für die Öffentlichkeit zugänglich ist.

</TabItem>

<TabItem value="windefender" label="Über Windows Defender">

Verwende die Suchfunktion von Windows, um die **Windows Firewall-Einstellungen mit erweiterter Sicherheit** zu öffnen. Es kann sein, dass du auf **Erweiterte Einstellungen** drücken musst, um das entsprechende Fenster zu öffnen, wenn du die Basisseite der Windows Firewall öffnest.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen Palworld Server erstellen. Klicke dazu auf die ein- und ausgehenden Regeln wie unten beschrieben und füge sie für die folgenden Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 8211
- UDP eingehend und ausgehend: 8211

Bitte benutze unseren [Ports bei Windows Servern freigeben](vserver-windows-port.md), wenn du weitere Hilfe dabei brauchst.

</TabItem>
</Tabs>

Wenn du diese Regeln hinzugefügt hast, ist dein Server jetzt erreichbar, d.h. du kannst dich über die IP-Adresse deines Servers mit ihm verbinden. Das kannst du tun, indem du den Browser der Serverliste aufrufst und deine IP-Adresse und den Port in die Suche am unteren Rand eingibst. Du solltest suchen nach: `[your_ip_address]:8211`

Wir empfehlen, dass du deine Servereinstellungen zuerst im folgenden Abschnitt konfigurierst, bevor du auf deinen Server zugreifst.

## Konfiguration

An dieser Stelle hast du die Einrichtung deines Palworld-Servers abgeschlossen. Du kannst die weitere Serverkonfiguration über eine Konfigurationsdatei vornehmen, die sich im Verzeichnis deines Servers befindet.

Wechsle zunächst in das folgende Verzeichnis:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Dort findest du die Konfigurationsdatei **PalWorldSettings.ini**. Über diese Datei kannst du eine große Auswahl an Parametern für deinen Server konfigurieren. In der [Palworld Server-Konfiguration Anleitung](palworld-configuration.md) kannst du dir alle verfügbaren Optionen ansehen und erfahren, was sie jeweils bewirken.

:::note
Wenn du diese Datei nicht siehst, starte deinen Server bitte mindestens **einmal**, damit sie automatisch erstellt wird. Alternativ kannst du auch die Standardeinstellungen aus dem Pfad `steamapps/common/PalServer/DefaultPalWorldSettings.ini` kopieren und verwenden.
:::

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Möglicherweise musst du [DirectX Runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35) installieren, wenn du es nicht bereits auf deinem Windows VPS hast.

Gehe in das Basisverzeichnis deines Palworld-Servers und starte **PalServer.exe**, um den Startvorgang zu beginnen. Dadurch wird die Konsole des Servers in einer Eingabeaufforderung geöffnet und der Startvorgang beginnt. Wenn alles wie erwartet abläuft, wird dein Server in der Serverliste sichtbar sein. Alternativ kannst du dich auch direkt verbinden, indem du in der unteren Suchleiste der Serverliste nach `[your_ip_address]:8211`.

Du hast Palworld erfolgreich auf deinem Windows VPS installiert.