---
id: dedicated-windows-soulmask
title: "Dedicated Server: Soulmask Dedicated Server Einrichtung"
description: Informationen zum Einrichten eines Soulmask Dedicated Servers auf einem Dedicated Server - ZAP-Hosting.com Dokumentation
sidebar_label: Soulmask
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einleitung

Hast du einen Windows Dedicated Server und möchtest den Soulmask Dedicated Server Service darauf installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst auf deinem Server installierst.

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über Remote Desktop (RDP) mit deinem VPS oder Root-Server. Benutze unseren Anleitung [Erstzugang (RDP)](vserver-windows-userdp.md), wenn du dabei Hilfe brauchst.

Sobald du auf deinen Server zugegriffen hast, musst du **SteamCMD** einrichten, damit du die notwendigen Dateien für den dedizierten Server herunterladen kannst. SteamCMD ist die **Befehlszeilenversion (CLI)** des Steam-Clients und das Tool, mit dem du ganz einfach eine Reihe von Steam-Workshop- und Dedicated Server-Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Website](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Szenario nennen wir ihn `steamcmd`. Gehe zu deinem Download-Ordner, suche die Datei **steamcmd.zip**, die du gerade heruntergeladen hast, und lege sie in deinem Ordner `steamcmd` ab. Nun musst du die Datei entpacken, indem du mit der rechten Maustaste klickst und die Entpackungsfunktion von Windows oder ein anderes Programm wie .7zip oder Winrar verwendest. Das Ergebnis sollte eine **steamcmd.exe** Datei sein, die entpackt wurde.

Führe einfach **steamcmd.exe** aus und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** angezeigt wird, ist der Vorgang erfolgreich abgeschlossen und du kannst mit der Installation des Soulmask Dedicated Servers im folgenden Abschnitt fortfahren.

## Installation

Nach der Installation solltest du in der Lage sein, Befehle in der **steamcmd.exe** Eingabeaufforderung auszuführen, die du zuvor ausgeführt hast. Bevor du etwas tun kannst, musst du dich mit dem Benutzer **anonymous** anmelden, indem du den Befehl `login anonymous`

Sobald du eingeloggt bist, kannst du mit dem Herunterladen der Dateien beginnen. 

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis festlegen, indem du den Befehl `force_install_dir [path]` verwendest und dabei `[path]` durch den Pfad ersetzst, den du für deinen Server verwenden möchtest. Zum Beispiel: 
```
force_install_dir C:\Soulmask-Server
```
:::

Führe nun den Befehl `app_update 3017310` aus, um den Download zu starten. Die App ID **3017310** ist die **Soulmask** Anwendung.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Bitte unterbrich den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber es lohnt sich, geduldig zu sein! :)
:::

Sobald der Vorgang erfolgreich abgeschlossen ist, gehst du in das Download-Verzeichnis, in dem alle Serverdateien heruntergeladen worden sind. Hier kannst du die **StartServer.bat** verwenden, um den Server zu starten. Wir empfehlen dir jedoch, deinen Server zunächst per Port Forwarding weiterzuleiten und zu konfigurieren.

### Portweiterleitung deines Servers

Um sicherzustellen, dass dein Server für die Öffentlichkeit zugänglich ist, musst du die Portweiterleitungsregeln für die Ports ändern, die der dedizierte Serverprozess verwendet. Du kannst dies entweder direkt über PowerShell-Befehle tun, was einfacher ist, oder regelmäßig über die Windows Defender Firewall-Seite.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Über Powershell" default>

Öffne dein Windows-Suchfeld und suche nach **PowerShell**. Achte darauf, dass du mit der rechten Maustaste klickst und **Als Administrator ausführen** wählst, damit die Berechtigungen zugänglich sind und alles richtig funktioniert.

:::info
Vergewissere dich, dass du die PowerShell im Administratormodus ausführst, sonst werden die Einstellungen möglicherweise nicht korrekt übernommen.
:::

Als Nächstes kopierst du die folgenden Befehle und fügst sie in deine PowerShell-Eingabeaufforderung ein:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

Mit diesen Befehlen werden automatisch Firewall-Regeln erstellt, die notwendig sind, damit dein Soulmask-Server für die Öffentlichkeit zugänglich ist.

</TabItem>

<TabItem value="windefender" label="Über Windows Defender">

Verwende die Suchfunktion von Windows, um die **Windows Firewall-Einstellungen mit erweiterter Sicherheit** zu öffnen. Es kann sein, dass du auf **Erweiterte Einstellungen** drücken musst, um das entsprechende Fenster zu öffnen, wenn du die Basisseite der Windows Firewall öffnest.

![](https://screensaver01.zap-hosting.com/index.php/s/rsKWH5dyyycFXBw/preview)

Du musst neue Regeln für deinen Soulmask-Server erstellen. Klicke dazu auf die ein- und ausgehenden Regeln wie unten beschrieben und füge sie für die folgenden Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 8777, 27015
- UDP eingehend und ausgehend: 8777, 27015

Bitte benutze unseren [Portweiterleitung (Firewall)](vserver-windows-port.md), wenn du weitere Hilfe benötigst.

</TabItem>
</Tabs>

Wenn du diese Regeln hinzugefügt hast, ist dein Server jetzt erreichbar, d.h. du kannst dich über die IP-Adresse deines Servers mit ihm verbinden. Das kannst du tun, indem du im Hauptmenü auf Multiplayer gehst, IP Direct Connect eingibst und deine IP-Adresse und den verwendeten Port eingibst, der standardmäßig 3724 ist und wie du ihn eingerichtet hast.

Wir empfehlen, dass du deine Servereinstellungen zuerst im folgenden Abschnitt konfigurierst, bevor du auf deinen Server zugreifst.

## Konfiguration

An dieser Stelle hast du die Einrichtung deines Soulmask-Servers abgeschlossen. Du kannst weitere Serverkonfigurationen vornehmen, indem du die Parameter in der Datei **StartServer.bat** im Stammverzeichnis und in der Datei **GameUserSettings.ini** im Pfad `../WS/Saved/Config/WindowsServer` anpasst.

In unserem [Server-Konfiguration](soulmask-configuration.md) findest du alle verfügbaren Parameter und Konfigurationsoptionen für deinen Soulmask Server.

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe in das Stammverzeichnis und führe **StartServer.bat** aus, um den Startvorgang zu beginnen. Dadurch wird die Konsole des Servers in einer Eingabeaufforderung geöffnet und der Startvorgang beginnt.

:::tip
Wenn dein Server nicht startet und die Eingabeaufforderung einfach verschwindet, gehe in das Verzeichnis `../WS/Saved/Logs` und prüfe das letzte Log, um das Problem zu diagnostizieren.

Es gibt ein häufiges Problem, das damit zusammenhängt, dass der Online-Dienst Steam auf den Windows Dedicated Server Binarys aufgrund einer falschen Verpackung nicht startet. Wenn der Fehler mit Steam zusammenhängt, gehe in dein Stammverzeichnis und verschiebe die folgenden Dateien in den Ordner `../WS/Binaries/Win64`: `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll`. Versuche nun, den Server erneut zu starten und er sollte in der Eingabeaufforderung erfolgreich starten.
:::

Jetzt kannst du dich über deine IP direkt mit deinem Server verbinden, indem du die IP-Adresse deines Servers und den Port 8777 im Multiplayer-Menü des Spiels eingibst.

Wenn du möchtest, dass dein Server in der Serverliste verfügbar ist, sieh dir bitte unsere [Server-Konfiguration](soulmask-configuration.md) an und füge den entsprechenden Parameter "SteamServerName" in deine **StartServer.bat**-Datei ein. Speichere die Datei danach und führe die Batch-Datei erneut aus.

Du hast Soulmask erfolgreich auf deinem Windows Dedicated Server installiert.