---
id: vserver-windows-ts6
title: "VPS: Teamspeak 6 Server auf deinem Windows-VPS einrichten"
description: Informationen zur Einrichtung von Teamspeak 6 Server auf einem Windows VPS von ZAP-Hosting – ZAP-Hosting.com Dokumentation
sidebar_label: Teamspeak 6 Server installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Sommer 2025 hat TeamSpeak die **Beta-Version** der **TeamSpeak 6 Server** veröffentlicht. Endlich kannst du die nächste Generation von TeamSpeak selbst ausprobieren und erleben!

Du möchtest diesen Dienst selbst hosten? Wir zeigen dir Schritt für Schritt, wie du ihn einrichtest und konfigurierst und was du dabei beachten musst.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Voraussetzungen

Bevor du den **Teamspeak 6 Server** installierst, solltest du sicherstellen, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Leistung zu gewährleisten.

| Hardware   | Minimum      | ZAP-Hosting-Empfehlung |
| ---------- | ------------ | ---------------------- |
| CPU        | 1 vCPU Cores | 4 vCPU Cores           |
| RAM        | 1 GB         | 4 GB                   |
| Disk space | 1 GB         | 25 GB                  |



## Vorbereitung

Bevor du mit der Einrichtung des **TeamSpeak 6 Servers** beginnst, solltest du dein System vorbereiten. Um sicherzustellen, dass dein System mit der neuesten Software und den neuesten Sicherheitsverbesserungen läuft, solltest du immer zuerst Systemupdates durchführen. 

Dadurch wird sichergestellt, dass dein System über die neuesten Sicherheitspatches und Softwareversionen verfügt, bevor du fortfährst.




## Installation
Nachdem nun alle Anforderungen erfüllt und die notwendigen Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Teamspeak 6 Server-Anwendung fortfahren.

Um den **TeamSpeak 6 Server** unter Windows zu installieren, lädst du zunächst das aktuelle Release von GitHub herunter: [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip).

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Danach entpackst du die Datei in ein Verzeichnis deiner Wahl. Öffne **PowerShell** und navigiere in das Verzeichnis, in dem du die entpackten Server-Dateien gespeichert hast. Dort startest du den Server mit folgendem Befehl:

```
.\tsserver.exe
```

Beim ersten Start erscheint ein Fenster mit den **Lizenzbedingungen**, die du bestätigen musst. Anschließend werden dir die Zugangsdaten für den **Server Query Admin Account** sowie der **Berechtigungsschlüssel** angezeigt. Diese Informationen werden nur einmal ausgegeben und sollten daher unbedingt sicher abgespeichert werden.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Nach erfolgreicher Bestätigung läuft der TeamSpeak 6 Server bereits im Hintergrund und ist einsatzbereit.



## Konfiguration

Du kannst zusätzliche Einstellungen für den **TeamSpeak 6 Server** auch direkt über **Command-Line Arguments** vornehmen. Dabei werden Optionen beim Starten des Servers übergeben. Eine Übersicht aller verfügbaren Optionen findest du in der offiziellen  [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md) Dokumentation. Beispiel:

```
.\tsserver.exe --default-voice-port 9987
```



## Verbindung herstellen

Nachdem der TeamSpeak 6 Server gestartet und eingerichtet ist, kannst du die Verbindung mit dem TeamSpeak 6 Client herstellen. Verwende dazu die IP-Adresse deines Servers sowie den entsprechenden Port. Trage diese Daten im Client ein, um dich mit deinem Server zu verbinden und die ersten Tests durchzuführen.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)


## Abschluss und weitere Informationen

Glückwunsch! Du hast Teamspeak 6 Server jetzt erfolgreich auf deinem VPS installiert und konfiguriert. Wir empfehlen dir auch, dir die folgenden Informationen anzusehen, die dir bei der Konfiguration deines Servers zusätzliche Hilfe und Anleitung bieten können:

- [Offizielle Website](https://teamspeak.com/en/) – Infos und Downloads für TeamSpeak 6
- [Community-Forum](https://community.teamspeak.com/) – Benutzerunterstützung und Diskussionen
- [GitHub-Issues](https://github.com/teamspeak/teamspeak6-server/issues) – Fehler melden und offene Probleme verfolgen

Du hast spezielle Fragen, die hier nicht behandelt werden?  For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂



<InlineVoucher />