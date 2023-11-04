---
id: vserver-windows-arksurvivalascended
title: ARK Survival Ascended Dedicated Server Einrichtung
description: Informationen zur Einrichtung eines ARK Survival Ascended Dedizierten Servers auf einem vServer/Rootserver - ZAP-Hosting.com Dokumentation
sidebar_label: ARK Survival Ascended Dedicated Server Einrichtung
---

Hast du einen Windows vServer oder Rootserver und möchtest darauf einen ARK: Survival Ascended Dedizierten Server installieren? Du bist hier genau richtig. In dieser Anleitung erklären wir dir Schritt für Schritt den Prozess der Installation dieses Dienstes auf deinem Server.

## Vorbereitung

Um zu beginnen, verbinde dich über Remote Desktop (RDP) mit deinem vServer oder Rootserver. Wenn du dabei Hilfe benötigst, nutze unsere Anleitung [Erstzugriff auf Windows Server mit RDP](https://zap-hosting.com/guides/de/docs/vserver-windows-userdp)

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

Verwende die Suchfunktion in Windows, um die **Windows-Firewall-Einstellungen mit erweiterter Sicherheit** zu öffnen. Möglicherweise musst du **Erweiterte Einstellungen** auswählen, um das erforderliche Fenster zu öffnen, wenn du die Startseite der Windows-Firewall öffnest.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Du musst neue Regeln für deinen ARK: Survival Ascended Server erstellen. Klicke dazu auf die eingehenden und ausgehenden Regeln, wie unten beschrieben, und füge sie für die folgenden Protokolle und Ports hinzu:
- TCP eingehend und ausgehend: 27020
- UDP eingehend und ausgehend: 27015
- UDP eingehend und ausgehend: 7777-7778

Wenn du weitere Hilfe bei diesem Vorgang benötigst, nutze unsere Anleitung [Ports bei Windows Servern freigeben](https://zap-hosting.com/guides/de/docs/vserver-windows-port/)

Nachdem du diese Regeln hinzugefügt hast, wird dein Server nun erreichbar sein, was bedeutet, dass du dich über die IP-Adresse deines Servers mit ihm verbinden kannst. Dies kannst du tun, indem du deine In-Game-Konsole in ARK: Survival Ascended öffnest und `open [deine_ip_adresse]:7777` ausführst.

Wir empfehlen dir, deine Servereinstellungen zuerst im folgenden Abschnitt zu konfigurieren.

## Konfiguration

Zu diesem Zeitpunkt hast du die Einrichtung für deinen Dedicated Server für ARK: Survival Ascended abgeschlossen. Du kannst weitere Servereinstellungen in zwei Konfigurationsdateien vornehmen, die sich im Verzeichnis deines Servers befinden.

Zunächst navigiere zu den folgenden Verzeichnissen:
```
../steamapps/common/ARK Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/ARK Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

Dort findest du sowohl die **DefaultGameUserSettings.ini** als auch die **Gameusersettings.ini** Konfigurationsdateien. In diesen Dateien kannst du eine Vielzahl von Variablen und Optionen bezüglich deines Servers bearbeiten.

## Verbindung zu deinem Server

Nachdem du die Einrichtung und Konfiguration für deinen Server abgeschlossen hast, kannst du den Server starten, indem du die zuvor erstellte **start-ark.bat** Datei ausführst.

Dies öffnet die Serverkonsole in einem Befehlsfenster und startet den Startvorgang. Wenn alles wie erwartet verläuft, wird dein Server in der Serverliste sichtbar sein. Alternativ kannst du dich direkt verbinden, indem du die In-Game-Konsole in ARK: Survival Ascended öffnest und `open [deine_ip_adresse]:7777` ausführst.