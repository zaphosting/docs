---
id: vserver-windows-mythofempires
title: Myth of Empires Dedicated Server Einrichtung
description: Informationen zum Einrichten eines Myth of Empires Dedicated Servers auf einem VPS/Rootserver - ZAP-Hosting.com Dokumentation
sidebar_label: MOE Dedicated Server Einrichtung
---

**📺Video:** Du bevorzugst eine Anleitung eher in Form eines Videos oder als zusätzliche visuelle Ergänzung? Kein Problem! Für dieses Thema stellen wir ebenfalls ein Video zur Verfügung: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/ir3QNvwu7WY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Einführung

Hast du einen Windows VPS oder Rootserver und möchtest darauf einen MOE Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst auf deinem Server installierst.

## Vorbereitung

Verbinde dich zunächst mit deinem VPS oder Rootserver über Remote Desktop (RDP). Verwende unsere Anleitung [RDP-Erstzugang](vserver-windows-userdp.md), wenn du Hilfe brauchst.

Sobald du auf deinen Server zugegriffen hast, musst du **SteamCMD** einrichten, damit du die notwendigen Dateien für den dedizierten Server herunterladen kannst. SteamCMD ist die **Befehlszeilenversion (CLI)** des Steam-Clients und das Tool, mit dem du ganz einfach eine Reihe von Steam-Workshop- und Dedicated Server-Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Website](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Szenario nennen wir ihn `steamcmd`. Gehe zu deinem Download-Ordner, suche die Datei **steamcmd.zip**, die du gerade heruntergeladen hast, und lege sie in deinem Ordner `steamcmd` ab. Nun musst du die Datei entpacken, indem du mit der rechten Maustaste klickst und die Entpackungsfunktion von Windows oder ein anderes Programm wie .7zip oder Winrar verwendest. Das Ergebnis sollte eine **steamcmd.exe** Datei sein, die entpackt wurde.

Führe einfach **steamcmd.exe** aus und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![image](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** angezeigt wird, ist der Vorgang erfolgreich abgeschlossen und du kannst mit der Installation des MOE Dedicated Servers im folgenden Abschnitt fortfahren.

## Installation

Nach der Installation solltest du in der Lage sein, Befehle in der **steamcmd.exe** Eingabeaufforderung auszuführen, die du zuvor ausgeführt hast. Bevor du etwas tun kannst, musst du dich mit dem Benutzer **anonymous** anmelden, indem du den Befehl `login anonymous`

Sobald du eingeloggt bist, kannst du mit dem Herunterladen der Dateien beginnen. 

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis festlegen, indem du den Befehl `force_install_dir [path]` verwendest und dabei `[path]` durch den Pfad ersetzst, den du für deinen Server verwenden möchtest. Zum Beispiel: 
```
force_install_dir C:\MOE-Server
```
:::

Führe nun den Befehl `app_update 1794810` aus, der den Download startet. Die App-ID **1794810** ist die **MOE**-Anwendung.

![image](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Bitte unterbrich den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber es lohnt sich, geduldig zu sein! :)
:::

Sobald der Vorgang erfolgreich abgeschlossen ist, gehst du in das Download-Verzeichnis, in dem alle Serverdateien heruntergeladen wurden. 

### Zugriff auf das PrivateServerTool

Anders als bei typischen SteamCMD-Installationen musst du bei MOE einen Ordner aus deiner lokalen Steam-Spielinstallation holen, um den Server unter Windows ausführen zu können.

Öffne Steam auf deinem System, klicke mit der rechten Maustaste auf dein **Myth of Empires** Spiel und wähle **Lokale Dateien durchsuchen**, während du den Mauszeiger über den Abschnitt **Verwalten** bewegst.

![Bild](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

In dem Stammordner, der sich öffnet, findest du den Ordner **PrivateServerTool**. Das ist der Ordner, den du auf deinen Server kopieren musst. Das kannst du ganz einfach tun, indem du `CTRL+C` zum Kopieren auf deinem lokalen PC und `CTRL+V` zum Einfügen auf deinem Windows Server über RDP benutzt. Achte darauf, dass du sie in das Stammverzeichnis deines Servers einfügst.

![image](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Als Nächstes gehst du zum folgenden Abschnitt, um deinen Server zu portforwarden und zu konfigurieren.

### Port Weiterleitung deines Servers

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
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Mit diesen Befehlen werden automatisch Firewall-Regeln erstellt, die notwendig sind, damit dein MOE-Server für die Öffentlichkeit zugänglich ist.

</TabItem>

<TabItem value="windefender" label="Über Windows Defender">

Verwende die Suchfunktion von Windows, um die **Windows Firewall-Einstellungen mit erweiterter Sicherheit** zu öffnen. Es kann sein, dass du auf **Erweiterte Einstellungen** drücken musst, um das entsprechende Fenster zu öffnen, wenn du die Basisseite der Windows Firewall öffnest.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen MOE-Server erstellen. Klicke dazu auf die ein- und ausgehenden Regeln wie unten beschrieben und füge sie für die folgenden Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 11888, 12888
- UDP eingehend und ausgehend: 11888, 12888

Bitte benutze unseren [Windows Port Forwarding Guide](vserver-windows-port.md), wenn du weitere Hilfe benötigst.

</TabItem>
</Tabs>

Gehe zum folgenden Abschnitt, bevor du auf deinen Server zugreifst, um deine Konfigurationsdatei zu erstellen und die `.bat`-Datei zu starten.

## Konfiguration

Mit dem Server-Tool, das sich in dem Ordner befindet, den du zuvor aus deinen Spieldateien kopiert hast, erstellst du nun deine Konfigurationsdatei und die Start-.bat-Datei, mit der du deinen Server starten wirst.

Navigiere in das folgende Verzeichnis (den Ordner, den du zuvor kopiert hast):
```
../MOE/PrivateServerTool
```

Führe in diesem Ordner die Datei **PrivateServerTool.exe** aus. Mit diesem Tool kannst du die Serveroptionen nach deinen Wünschen konfigurieren, einschließlich Mods, Spieleinstellungen und vieles mehr.

Wir empfehlen, zumindest die grundlegenden Parameter wie den **Servernamen** einzurichten, bevor du fortfährst.

Wenn du fertig bist, gehst du einfach auf die Registerkarte **Startkonsole** im Tool und drückst die Schaltfläche **Konfiguration speichern** und anschließend die Schaltfläche **Server starten**. Dadurch wird die Datei `StartPrivateServer.bat` erstellt, mit der du deinen Server starten kannst.

![Bild](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

Wir empfehlen, eine Verknüpfung zu deiner Datei `StartPrivateServer.bat` zu erstellen, indem du mit der rechten Maustaste klickst und **Verknüpfung erstellen** wählst, um den Start zu erleichtern.

:::note
Möglicherweise musst du den Pfad zu deinem Spielordner in der automatisch erstellten Datei `StartPrivateServer.bat` ändern. Öffne die Datei einfach mit einem Programm wie Notepad und stelle sicher, dass der Pfad am Anfang mit dem Pfad übereinstimmt, in dem sich das Spiel befindet. 

Wenn der Pfad nicht stimmt, kannst du im Stammverzeichnis deines dedizierten MOE-Server-Ordners auf die obere Pfadleiste doppelklicken und ihn an der richtigen Stelle einfügen.
:::

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe in das Verzeichnis deines Myth of Empires-Servers und führe **StartPrivateServer.bat** (oder die Verknüpfung, wenn du eine erstellt hast) aus, um den Startvorgang zu beginnen. Dadurch wird die Konsole des Servers in einer Eingabeaufforderung geöffnet und der Startvorgang beginnt. Jetzt kannst du dich direkt mit deinem Server verbinden, indem du auf die Registerkarte **Benutzerdefinierter Server** gehst und über das Suchfeld nach deinem Server suchst.

:::tip
Wenn du Probleme hast, dich mit dem Server zu verbinden, öffne die Datei "StartPrivateServer.bat" mit einem Programm wie z. B. Notepad und vergewissere dich, dass die beiden IP-Parameter mit der IP deines Windows-Servers übereinstimmen. Das sollte von dem verwendeten Tool automatisch ausgefüllt werden, aber es ist ein guter Schritt zur Fehlerbehebung.
:::

Du hast Myth of Empires erfolgreich auf deinem Windows VPS installiert.