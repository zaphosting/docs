---
id: vserver-windows-arksurvivalascended
title: ARK Survival Ascended Dedicated Server Einrichtung
description: Informationen zur Einrichtung eines ARK Survival Ascended Dedizierten Servers auf einem vServer/Rootserver - ZAP-Hosting.com Dokumentation
sidebar_label: ARK Survival Ascended Dedicated Server Einrichtung
---

**📺Video:** Du bevorzugst eine Anleitung eher in Form eines Videos oder als zusätzliche visuelle Ergänzung? Kein Problem! Für dieses Thema stellen wir ebenfalls ein Video zur Verfügung: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/NvaXYjLSCn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Einführung

Hast du einen Windows vServer oder Rootserver und möchtest darauf einen ARK: Survival Ascended Dedizierten Server installieren? Du bist hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt den Prozess der Installation dieses Dienstes auf deinem Server.

## Vorbereitung

Um zu beginnen, verbinde dich über Remote Desktop (RDP) mit deinem vServer oder Rootserver. Wenn du dabei Hilfe benötigst, nutze unsere Anleitung [Erstzugriff auf Windows Server mit RDP](vserver-windows-userdp.md)

Sobald du Zugriff auf deinen Server hast, musst du **SteamCMD** einrichten, um die erforderlichen Dateien für den Dedicated Server herunterladen zu können. SteamCMD ist die **command-line (CLI)-Version** des Steam-Clients und das Tool, das es dir ermöglicht, eine Vielzahl von Steam Workshop- und Dateien für dedicated Server einfach herunterzuladen. Lade [SteamCMD von der offiziellen Valve-Website](https://developer.valvesoftware.com/wiki/SteamCMD) herunter oder direkt [hier](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip.

Erstelle einen neuen Ordner irgendwo auf deinem Server. In diesem Szenario nennen wir ihn `steamcmd`. Gehe zu deinem Download-Ordner, suche die gerade heruntergeladene Datei **steamcmd.zip** und platziere sie in diesem `steamcmd` Ordner. Jetzt musst du die Datei entpacken, indem du mit der rechten Maustaste darauf klickst und die Entpackungsfunktion von Windows verwendest oder Anwendungen wie .7zip oder Winrar. Das sollte daszu führen, dass eine Datei **steamcmd.exe** entpackt wird.

Führe einfach **steamcmd.exe** aus und warte, bis der Installationsprozess vollständig abgeschlossen ist.

![image](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Sobald die Meldung **Loading Steam API.... OK** angezeigt wird, wurde der Prozess erfolgreich abgeschlossen und du kannst mit der Installation des Dedicated Servers für ARK: Survival Ascended im folgenden Abschnitt beginnen.
​
## Installation

Nach der Installation solltest du in der Lage sein, Befehle innerhalb des **steamcmd.exe** Befehlsfensters auszuführen, das du zuvor gestartet hast. Du musst dich vorher anmelden, um irgendetwas tun zu können, und zwar als **anonymer** Benutzer, indem du den Befehl ausführst: `login anonymous`

Sobald du angemeldet bist, kannst du nun mit dem Herunterladen der Dateien beginnen. Führe den Befehl `app_update 2430930` aus, um den Download zu starten. Die App-ID **2430930** ist der **Dedicated Server für ARK: Survival Ascended**.

![image](https://github.com/zaphosting/docs/assets/42719082/98d7c643-04be-488b-8831-86606363f98c)

:::info
Bitte unterbreche den Prozess nicht, bevor er abgeschlossen ist, um Fehler zu vermeiden. Es kann einen Moment dauern, aber es lohnt sich, geduldig zu sein! :)
:::

### Erstellung der Startdatei

Sobald der Download erfolgreich abgeschlossen wurde, navigiere zum Verzeichnis, in dem du die Installation durchgeführt hast, und gehe zu folgendem Unterordner:
```
../steamapps/common/ARK Survival Ascended Dedizierter Server/ShooterGame/Binaries/Win64
```

In diesem Unterordner musst du deine Startdatei erstellen, die erforderlich ist, um den Dedicated Server zu starten. Erstelle eine Datei mit dem Namen: `start-ark.bat`. Du kannst zuerst ein Textdokument erstellen und es dann in die Dateierweiterung `.bat` umbenennen.

:::info
Stelle sicher, dass du die Option "Dateierweiterungen anzeigen" in deinem Datei-Explorer aktiviert hast, damit die richtige Dateierweiterung verwendet wird.
:::

Öffne die Datei mit einem Texteditor (wie Notepad++) und füge folgenden Inhalt ein:
```
start ARKAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

In diesem Befehl solltest du '[server_name]', '[admin_password]' und '[max_players]' mit den von dir gewünschten Inhalten bzw. Werten austauschen.

Wenn du auch ein Passwort für normale Spieler einrichten möchtest, damit diese nur mit Passwort dem Server beitreten können, füge `?ServerPassword=[join_password]` zum Befehl in der obenstehenden Datei hinzu. Das würde es wie folgt ändern:
```
start ARKAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Stelle sicher, dass du die Variablen festgelegt hast und die Änderungen speicherst, bevor du die Datei schließt.

Dein Server wird nun lokal über `127.0.0.1:7777` erreichbar sein, sobald du die Startdatei ausführst und der Server online geht. Wenn du möchtest, dass dein Server für die Öffentlichkeit zugänglich ist, musst du jedoch noch Windows Firewall Portweiterleitungsregeln hinzufügen, was im folgenden Abschnitt behandelt wird.

### Portweiterleitung deines Servers

Um sicherzustellen, dass dein Server für die Öffentlichkeit erreichbar ist, musst du Portweiterleitungsregeln für die Ports erstellen, die der Prozess des Dedicated Servers verwendet.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Über Powershell" default>

Öffne dein Windows-Suchfeld und suche nach **Powershell**. Achte darauf, dass du mit der rechten Maustaste klickst und **Ausführen als Administrator** wählst, damit die Berechtigungen zugänglich sind und alles richtig funktioniert.

:::info
Vergewissere dich, dass du die Powershell im Administratormodus ausführst, sonst werden die Einstellungen möglicherweise nicht korrekt übernommen.
:::

Als Nächstes kopierst du die folgenden Befehle und fügst sie in deine Powershell-Eingabeaufforderung ein:
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Diese Befehle erstellen automatisch Firewall-Regeln, die notwendig sind, damit dein Ark: Survival Ascended-Server für die Öffentlichkeit zugänglich ist.
</TabItem>

<TabItem value="windefender" label="Über Windows Defender">

Verwende die Suchfunktion in Windows, um die **Windows-Firewall-Einstellungen mit erweiterter Sicherheit** zu öffnen. Möglicherweise musst du **Erweiterte Einstellungen** auswählen, um das erforderliche Fenster zu öffnen, wenn du die Startseite der Windows-Firewall öffnest.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen ARK: Survival Ascended Server erstellen. Klicke dazu auf die eingehenden und ausgehenden Regeln, wie unten beschrieben, und füge sie für die folgenden Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 27020
- UDP eingehend und ausgehend: 27015
- UDP eingehend und ausgehend: 7777-7778

Wenn du weitere Hilfe bei diesem Vorgang benötigst, nutze unsere Anleitung [Ports bei Windows Servern freigeben](vserver-windows-port.md)

</TabItem>
</Tabs>

Nachdem du diese Regeln hinzugefügt hast, wird dein Server nun erreichbar sein, was bedeutet, dass du dich über die IP-Adresse deines Servers mit ihm verbinden kannst. Dies kannst du tun, indem du deine In-Game-Konsole in ARK: Survival Ascended öffnest und `open [your_ip_address]:7777` ausführst.

Wir empfehlen dir, deine Servereinstellungen zuerst im folgenden Abschnitt zu konfigurieren.

## Konfiguration

Zu diesem Zeitpunkt hast du die Einrichtung deines dedizierten Ark: Survival Ascended-Servers abgeschlossen. Du kannst die weitere Serverkonfiguration über zwei Konfigurationsdateien vornehmen, die sich im Verzeichnis deines Servers befinden.

Navigiere zunächst zu den folgenden Verzeichnissen:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

You will be able to find both **DefaultGameUserSettings.ini** and **Gameusersettings.ini** configuration files. In these files, you can edit a wide range of variables and options regarding your server.

:::warning[CROSSPLAY SUPPORT]
Seit dem 18. November 2023 müssen Serverbesitzer die Zertifikatswiderrufsliste, die unter https://dev.epicgames.com/ (oder direkt unter http://crl.r2m02.amazontrust.com/r2m02.crl) erhältlich ist, manuell installieren. Die heruntergeladene Datei r2m02.crl muss installiert werden (klicken mit der rechten Maustaste auf die Datei), indem du "Place all certificates in the following store" und "Trusted Root Certification Authorities" auswählst. Ein Neustart des Systems könnte erforderlich sein.

Wenn Serverbesitzer vor dem 18. November 2023 die Zertifikatsdatei r2m02.cer installiert haben und der Server nicht angezeigt wird, muss dieses Zertifikat aus dem System entfernt werden, damit die Server wieder ordnungsgemäß angezeigt werden können. Um das widerrufene Zertifikat zu entfernen, führen (Windows + R) certmgr.msc aus und suche nach Amazon RSA 2048 M02 in Trusted Root Certification Authorities. Dasselbe muss mit certlm.msc gemacht werden. Abschließend kann ein Neustart des Systems erforderlich sein.
:::


## Starten und Verbinden mit deinem Server

Jetzt ist es an der Zeit, deinen Server zu starten. Damit der Server erfolgreich starten kann, musst du [Microsoft Visual C++ 2013 Redistribute](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) auf deinem Windows VPS installieren.

:::info
Du musst [Microsoft Visual C++ 2013 Redistribute](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170) auf deinem Windows VPS installieren, bevor du versuchst, den Server zu starten, wenn du es noch nicht hast, da es eine Abhängigkeit ist. Dein Server startet möglicherweise nicht, wenn du es nicht installiert hast.
:::

Sobald du sie auf deinem VPS installiert hast, kannst du den Server starten, indem du die Datei **start-ark.bat** ausführst, die du zuvor erstellt hast.

Dadurch wird die Konsole des Servers in einer Eingabeaufforderung geöffnet und der Startvorgang beginnt. Wenn alles wie erwartet abläuft, wird dein Server in der Serverliste angezeigt. Alternativ kannst du dich auch direkt mit dem Server verbinden, indem du die Konsole im Spiel öffnest und "open [your_ip_address]:7777" eingibst.

Du hast Ark: Survival Ascended erfolgreich auf deinem Windows VPS installiert.