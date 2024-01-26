---
id: vserver-windows-enshrouded
title: Enshrouded Dedicated Dedicated Server Einrichtung
description: Informationen zur Einrichtung eines Enshrouded Dedizierten Servers auf einem vServer/Rootserver - ZAP-Hosting.com Dokumentation
sidebar_label: Enshrouded Dedicated Server Einrichtung
---

**📺Video:** Du bevorzugst eine Anleitung eher in Form eines Videos oder als zusätzliche visuelle Ergänzung? Kein Problem! Für dieses Thema stellen wir ebenfalls ein Video zur Verfügung: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/cxhqHt2DYjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Einleitung

Hast du einen Windows VPS oder Rootserver und möchtest darauf einen Enshrouded Dedicated Server installieren? Dann bist du hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt, wie du diesen Dienst auf deinem Server installierst.

## Vorbereitung

Verbinde dich zunächst über Remote Desktop (RDP) mit deinem VPS oder Rootserver. Verwende unsere Anleitung [RDP-Erstzugang](vserver-windows-userdp.md), wenn du Hilfe brauchst.

Sobald du auf deinen Server zugegriffen hast, musst du **SteamCMD** einrichten, damit du die notwendigen Dateien für den dedizierten Server herunterladen kannst. SteamCMD ist die **Befehlszeilenversion (CLI)** des Steam-Clients und das Tool, mit dem du ganz einfach eine Reihe von Steam-Workshop- und Dedicated Server-Dateien herunterladen kannst. Lade [SteamCMD von der offiziellen Valve-Website](https://developer.valvesoftware.com/wiki/SteamCMD) oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) herunter.

Erstelle irgendwo auf deinem Server einen neuen Ordner, in diesem Szenario nennen wir ihn `steamcmd`. Gehe zu deinem Download-Ordner, suche die Datei **steamcmd.zip**, die du gerade heruntergeladen hast, und lege sie in deinem Ordner `steamcmd` ab. Nun musst du die Datei entpacken, indem du mit der rechten Maustaste klickst und die Entpackungsfunktion von Windows oder ein anderes Programm wie .7zip oder Winrar verwendest. Das Ergebnis sollte eine **steamcmd.exe** Datei sein, die entpackt wurde.

Führe einfach **steamcmd.exe** aus und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![image](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** angezeigt wird, ist der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Enshrouded Dedicated Servers im folgenden Abschnitt fortfahren.

## Installation

Nach der Installation solltest du in der Lage sein, Befehle in der **steamcmd.exe** Eingabeaufforderung auszuführen, die du zuvor ausgeführt hast. Bevor du etwas tun kannst, musst du dich mit dem Benutzer **anonymous** anmelden, indem du den Befehl `login anonymous`

Sobald du eingeloggt bist, kannst du mit dem Herunterladen der Dateien beginnen. 

:::tip
Optional: Du kannst dein bevorzugtes Installationsverzeichnis festlegen, indem du den Befehl `force_install_dir [path]` verwendest und dabei `[path]` durch den Pfad ersetzst, den du für deinen Server verwenden möchtest. Zum Beispiel: 
```
force_install_dir C:\Enshrouded-Server
```
:::

Führe nun den Befehl `app_update 2278520` aus, um den Download zu starten. Die App ID **2278520** ist die **Enshrouded** Anwendung.

![image](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Bitte unterbrich den Vorgang nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber es lohnt sich, geduldig zu sein! :)
:::

Sobald der Vorgang erfolgreich abgeschlossen ist, gehst du in das Download-Verzeichnis, in dem alle Serverdateien heruntergeladen wurden. Hier kannst du die **enshrouded_server.exe** verwenden, um den Server zu starten. Wir empfehlen dir jedoch, deinen Server zuerst zu konfigurieren und eine Portweiterleitung einzurichten.

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
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

Mit diesen Befehlen werden automatisch Firewall-Regeln erstellt, die notwendig sind, damit dein Enshrouded Server für die Öffentlichkeit zugänglich ist.

</TabItem>

<TabItem value="windefender" label="Über Windows Defender">

Verwende die Suchfunktion von Windows, um die **Windows Firewall-Einstellungen mit erweiterter Sicherheit** zu öffnen. Es kann sein, dass du auf **Erweiterte Einstellungen** drücken musst, um das entsprechende Fenster zu öffnen, wenn du die Basisseite der Windows Firewall öffnest.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen Enshrouded-Server erstellen. Klicke dazu auf die ein- und ausgehenden Regeln wie unten beschrieben und füge sie für die folgenden Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 15636-15637
- UDP eingehend und ausgehend: 15636-15637

Bitte benutze unseren [Windows Port Forwarding Guide](vserver-windows-port.md), wenn du weitere Hilfe dabei brauchst.

</TabItem>
</Tabs>

Wenn du diese Regeln hinzugefügt hast, ist dein Server jetzt erreichbar, d.h. du kannst dich über die IP-Adresse deines Servers mit ihm verbinden. Das kannst du tun, indem du deinen Charakter im Hauptmenü auswählst, zum Reiter **Spiele finden** gehst und auf **Server hinzufügen** drückst. Hier gibst du die IP-Adresse deines Servers sowie den Port (standardmäßig 15636) und dein Server-Passwort ein (falls festgelegt, sonst leer lassen).

:::tip
Sieh dir unsere [Enshrouded Server Configuration guide](enshrouded-configuration.md) an, wenn du ein Passwort für deinen Server aktivieren und die Einstellungen anpassen möchtest.
:::

Wir empfehlen, dass du deine Servereinstellungen zuerst über den folgenden Abschnitt konfigurierst, bevor du auf deinen Server zugreifst.

## Konfiguration

In diesem Stadium hast du die Einrichtung deines Enshrouded-Servers abgeschlossen. Du kannst die weitere Serverkonfiguration über eine Konfigurationsdatei im Verzeichnis deines Servers vornehmen.

Wechsle zunächst in das folgende Verzeichnis:
```
..EnshroudedServer/ (Stammverzeichnis)
```

Dort findest du die Konfigurationsdatei **enshrouded_server.json**. In dieser Datei kannst du ein paar Parameter für deinen Server konfigurieren. In unserem [Enshrouded Server Configuration guide](enshrouded-configuration.md) findest du alle verfügbaren Serveroptionen und ihre Funktionen.

## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Gehe in das Basisverzeichnis deines Enshrouded-Servers und starte **enshrouded_server.exe**, um den Startvorgang zu beginnen. Dadurch wird die Konsole des Servers in einer Eingabeaufforderung geöffnet und der Startvorgang beginnt. Jetzt kannst du dich direkt mit deinem Server verbinden, indem du auf die Registerkarte **Spiele finden** gehst, auf **Server hinzufügen** drückst und deine Server-IP und deinen Port eingibst (Standard ist 15636).

Du hast Enshrouded erfolgreich auf deinem Windows VPS installiert.