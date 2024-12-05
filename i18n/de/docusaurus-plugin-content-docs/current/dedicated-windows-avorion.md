---
id: dedicated-windows-avorion
title: "Dedicated Server: Avorion Dedicated Server Einrichtung"
description: Informationen zur Einrichtung eines Avorion Dedizierten Servers auf einem Dedicated Server - ZAP-Hosting.com Dokumentation
sidebar_label: Avorion
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Besitzt du einen Windows Dedicated Server und möchtest den Avorion Dedicated Server-Dienst darauf installieren? Dann bist du hier richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst auf deinem Server installierst.

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="How To Setup Avorion Dedicated Server on Windows Dedicated Server!" description="Hast du das Gefühl, dass du etwas besser verstehst, wenn du es in Aktion siehst? Wir haben etwas für dich! Tauche ab in unser Video, welches alles für dich zusammenfasst. Egal, ob du es eilig hast oder einfach nur Informationen auf möglichst verständliche Art und Weise aufnehmen möchtest!"/>

## Vorbereitung

Verbinde dich zunächst über Remote Desktop (RDP) mit deinem Dedicated Server. Verwende unsere Anleitung [Erstzugang (RDP)](vserver-windows-userdp.md), wenn du Hilfe benötigst.

Sobald du auf deinen Server zugegriffen hast, musst du **SteamCMD** einrichten, damit du die notwendigen Dateien für den dedizierten Server herunterladen kannst. SteamCMD ist die **Befehlszeilenversion (CLI)** des Steam-Clients und das Tool, mit dem du ganz einfach eine Reihe von Steam-Workshop- und Dedicated Server-Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Website](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Szenario nennen wir ihn `steamcmd`. Gehe zu deinem Download-Ordner, suche die Datei **steamcmd.zip**, die du gerade heruntergeladen hast, und lege sie in deinem Ordner `steamcmd` ab. Nun musst du die Datei entpacken, indem du mit der rechten Maustaste klickst und die Entpackungsfunktion von Windows oder ein anderes Programm wie .7zip oder Winrar verwendest. Das Ergebnis sollte eine **steamcmd.exe** Datei sein, die entpackt wurde.

Führe einfach **steamcmd.exe** aus und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** angezeigt wird, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Avorion Dedicated Servers im folgenden Abschnitt fortfahren.

## Installation

Nach der Installation solltest du in der Lage sein, Befehle in der **steamcmd.exe** Eingabeaufforderung auszuführen, die du zuvor ausgeführt hast. Bevor du etwas tun kannst, musst du dich mit dem Benutzer **anonymous** anmelden, indem du den Befehl `login anonymous`

Sobald du eingeloggt bist, kannst du mit dem Herunterladen der Dateien beginnen. 

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis festlegen, indem du den Befehl `force_install_dir [path]` verwendest und dabei `[path]` durch den Pfad ersetzst, den du für deinen Server verwenden möchtest. Zum Beispiel: 
```
force_install_dir C:\Avorion-Server
```
:::

Führe nun den Befehl `app_update 565060` aus, um den Download zu starten. Die App ID **565060** ist die **Avorion** Anwendung.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Bitte unterbrich den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber es lohnt sich, geduldig zu sein! :)
:::

Sobald der Vorgang erfolgreich abgeschlossen ist, gehst du in das Download-Verzeichnis, in dem alle Serverdateien heruntergeladen wurden. Hier solltest du eine Kopie der **server.bat**-Datei erstellen und die Kopie in **startserver.bat** oder ähnlich umbenennen. Du wirst die neue `.bat`-Datei verwenden, um den Server zu starten und die Bearbeitung der Serverkonfigurationsoptionen im folgenden Abschnitt zu ermöglichen. Wir empfehlen, zuerst die Portweiterleitung und die Konfiguration deines Servers vorzunehmen.

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
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

Mit diesen Befehlen werden automatisch Firewall-Regeln erstellt, die notwendig sind, damit dein Avorion Server für die Öffentlichkeit zugänglich ist.

</TabItem>

<TabItem value="windefender" label="Über Windows Defender">

Verwende die Suchfunktion von Windows, um die **Windows Firewall-Einstellungen mit erweiterter Sicherheit** zu öffnen. Es kann sein, dass du auf **Erweiterte Einstellungen** drücken musst, um das entsprechende Fenster zu öffnen, wenn du die Basisseite der Windows Firewall öffnest.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen Avorion-Server erstellen. Klicke dazu wie unten beschrieben auf die eingehenden und ausgehenden Regeln und füge sie für die folgenden Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 27000
- UDP eingehend und ausgehend: 27000, 27003, 27020, 27021

Bitte benutze unsere [Portweiterleitung (Firewall)](vserver-windows-port.md) Anleitung, wenn du weitere Hilfe dabei brauchst.

</TabItem>
</Tabs>

Sobald du diese Regeln hinzugefügt hast, ist dein Server nun zugänglich, was bedeutet, dass du dich über die IP-Adresse deines Servers mit ihm verbinden kannst. Wir empfehlen, dass du deine Servereinstellungen zuerst über den folgenden Abschnitt konfigurierst, bevor du auf deinen Server zugreifst.

## Konfiguration

Zu diesem Zeitpunkt hast du die Einrichtung deines Avorion-Servers abgeschlossen. Du kannst deine Servereinstellungen direkt über die **startserver.bat**-Datei konfigurieren, die du zuvor kopiert hast. Öffne die Datei mit einem Texteditor wie Notepad und konfiguriere die Parameter für deinen Server.

Wenn du weltenspezifische Parameter und Einstellungen bearbeiten möchtest, musst du auf deine Galaxie-Speicher zugreifen und die **server.ini**-Konfigurationsdatei bearbeiten. Diese wird in deinem Windows-AppData-Ordner gespeichert, auf den du über den folgenden Pfad zugreifen kannst.
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
Du kannst diesen Pfad direkt aufrufen, indem du gleichzeitig `STRG` + `R` drückst und im Ausführen-Dialog nach dem folgenden Pfad suchst: `%userprofile%/AppData/Roaming/Avorion/galaxies`. Drücke einfach auf **OK** und du gelangst zum Ordner.

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe zum Basisverzeichnis deines Avorion-Servers und führe die zuvor erstellte Datei **startserver.bat** aus, um den Startvorgang zu starten. Dadurch wird die Serverkonsole in einer Eingabeaufforderung geöffnet und der Startvorgang beginnt. Du kannst dich jetzt direkt mit deinem Server verbinden, indem du den Serverbrowser im Spiel verwendest und deine Server-IP und deinen Port eingibst (Standard ist 27000).

## Abschluss

Glückwunsch, du hast den Avorion Server erfolgreich installiert und konfiguriert! Solltest du noch weitere Fragen oder Probleme haben, dann wende dich gerne an unser Support-Team, welches dir jeden Tag zur Verfügung steht!