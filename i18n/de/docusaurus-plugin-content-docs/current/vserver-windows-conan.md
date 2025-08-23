---
id: vserver-windows-conan
title: "vServer: Conan Exiles Dedicated Server Einrichtung"
description: Informationen zur Einrichtung eines Conan Exiles Dedizierten Servers auf einem vServer - ZAP-Hosting.com Dokumentation
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

 
## Einführung

Hast du einen Windows VPS und möchtest darauf einen Conan Exiles Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst auf deinem Server installierst.

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst über Remote Desktop (RDP) mit deinem VPS. Verwende unsere Anleitung [Erstzugang (RDP)](vserver-windows-userdp.md), wenn du Hilfe benötigst.

:::note Server Launcher Tool
Als Alternative zu SteamCMD bieten die Entwickler von Conan Exiles ein nützliches Server-Startprogramm an, das unter Windows verwendet werden kann, um das Starten eines Servers zu erleichtern.

Wir empfehlen, den [offiziellen Forumsbeitrag](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699) zu lesen, wenn du stattdessen dieses Tool verwenden möchtest.
:::

Sobald du auf deinen Server zugegriffen hast, musst du **SteamCMD** einrichten, damit du die notwendigen Dateien für den dedizierten Server herunterladen kannst. SteamCMD ist die **Befehlszeilenversion (CLI)** des Steam-Clients und das Tool, mit dem du ganz einfach eine Reihe von Steam-Workshop- und Dedicated Server-Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Website](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Szenario nennen wir ihn `steamcmd`. Gehe zu deinem Download-Ordner, suche die Datei **steamcmd.zip**, die du gerade heruntergeladen hast, und lege sie in deinem Ordner `steamcmd` ab. Nun musst du die Datei entpacken, indem du mit der rechten Maustaste klickst und die Entpackungsfunktion von Windows oder ein anderes Programm wie .7zip oder Winrar verwendest. Das Ergebnis sollte eine **steamcmd.exe** Datei sein, die entpackt wurde.

Führe einfach **steamcmd.exe** aus und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** angezeigt wird, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Conan Exiles Dedicated Servers im folgenden Abschnitt fortfahren.

## Installation

Nach der Installation solltest du in der Lage sein, Befehle in der **steamcmd.exe** Eingabeaufforderung auszuführen, die du zuvor ausgeführt hast. Bevor du etwas tun kannst, musst du dich mit dem Benutzer **anonymous** anmelden, indem du den Befehl `login anonymous`

Sobald du eingeloggt bist, kannst du mit dem Herunterladen der Dateien beginnen. 

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis festlegen, indem du den Befehl `force_install_dir [path]` verwendest und dabei `[path]` durch den Pfad ersetzst, den du für deinen Server verwenden möchtest. Zum Beispiel: 
```
force_install_dir C:\Conan-Server
```
:::

Führe nun den Befehl `app_update 443030` aus, um den Download zu starten. Die App ID **443030** ist die **Conan Exiles** Anwendung.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Bitte unterbrich den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber es lohnt sich, geduldig zu sein! :)
:::

Wenn der Vorgang erfolgreich war, gehe zum Download-Verzeichnis, in dem alle Serverdateien heruntergeladen wurden. Hier kannst du den **StartServer.bat** verwenden, um den Server zu starten. Wir empfehlen jedoch, zuerst die Portweiterleitung zu aktivieren und deinen Server zu konfigurieren.

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
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Mit diesen Befehlen werden automatisch Firewall-Regeln erstellt, die notwendig sind, damit dein Conan Exiles Server für die Öffentlichkeit zugänglich ist.

</TabItem>

<TabItem value="windefender" label="Über Windows Defender">

Verwende die Suchfunktion von Windows, um die **Windows Firewall-Einstellungen mit erweiterter Sicherheit** zu öffnen. Es kann sein, dass du auf **Erweiterte Einstellungen** drücken musst, um das entsprechende Fenster zu öffnen, wenn du die Basisseite der Windows Firewall öffnest.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen Conan Exiles-Server erstellen. Klicke dazu auf die ein- und ausgehenden Regeln wie unten beschrieben und füge sie für die folgenden Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 7777, 25575
- UDP eingehend und ausgehend: 7777, 7778, 27015

Bitte benutze unsere [Portweiterleitung (Firewall)](vserver-windows-port.md) Anleitung, wenn du weitere Hilfe dabei brauchst.

</TabItem>
</Tabs>

Nachdem du diese Regeln hinzugefügt hast, ist dein Server nun erreichbar, d. h. du kannst dich über die IP-Adresse deines Servers mit ihm verbinden. Wir empfehlen, dass du zuerst deine Servereinstellungen über den folgenden Abschnitt konfigurierst, bevor du auf deinen Server zugreifst.

## Konfiguration

Damit hast du die Einrichtung deines Conan Exiles-Servers abgeschlossen. Du kannst weitere Serverkonfigurationen über eine Konfigurationsdatei im Verzeichnis deines Servers vornehmen.

Navigiere zunächst zum folgenden Verzeichnis:
```
../Conan-Server/Engine/Config/Windows
```

Dort findest du die **WindowsServerEngine.ini**-Konfigurationsdatei. Über diese Datei kannst du eine Vielzahl von Konfigurationsoptionen anpassen, indem du bestimmte Parameter hinzufügst

Um beispielsweise einen Servernamen, ein Passwort und ein Admin-Passwort hinzuzufügen, füge Folgendes zur Datei hinzu.
```
[OnlineSubsystem]
ServerName=[deine_servername]
ServerPassword=[deine_password]

[ServerSettings]
AdminPassword=[deine_adminpassword]
```

Wir empfehlen, im [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) nach einer umfassenden Liste der verfügbaren Optionen zu suchen.

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe zum Basisverzeichnis deines Conan Exiles-Servers und führe die zuvor erstellte "StartServer.bat" aus, um den Startvorgang zu starten. Dadurch wird die Serverkonsole in einer Eingabeaufforderung geöffnet und der Startvorgang gestartet. Du kannst dich jetzt direkt mit deinem Server verbinden, indem du den Serverbrowser im Spiel verwendest und deine Server-IP und deinen Port eingibst (Standard ist 7777).

## Abschluss

Glückwunsch, du hast den Conan Exiles Server erfolgreich installiert und konfiguriert! Solltest du noch weitere Fragen oder Probleme haben, dann wende dich gerne an unser Support-Team, welches dir jeden Tag zur Verfügung steht!

<InlineVoucher />
