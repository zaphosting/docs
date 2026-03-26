---
id: vserver-windows-ts6
title: "TeamSpeak 6 Server auf Windows Server einrichten – Deine eigene Voice-Plattform starten"
description: "Entdecke, wie du den TeamSpeak 6 Server Beta einrichtest und optimierst für nahtloses Hosting und Performance → Jetzt mehr erfahren"
sidebar_label: TeamSpeak 6 Server installieren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Sommer 2025 hat TeamSpeak die **Beta-Version** des **TeamSpeak 6 Servers** veröffentlicht. Erlebe jetzt die nächste Generation von TeamSpeak hautnah!

Du überlegst, den Service selbst zu hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Voraussetzungen

Bevor du den **TeamSpeak 6 Server** installierst, stelle sicher, dass deine Hosting-Umgebung folgende Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung    |
| ---------- | ------------ | ------------------------- |
| CPU        | 1 vCPU Kern  | 4 vCPU Kerne              |
| RAM        | 1 GB         | 4 GB                      |
| Festplattenspeicher | 1 GB  | 25 GB                     |



## Vorbereitung

Bevor du den **TeamSpeak 6 Server** einrichtest, solltest du dein System vorbereiten. Um sicherzugehen, dass dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du immer zuerst ein System-Update durchführen.

So stellst du sicher, dass dein System die neuesten Sicherheitspatches und Softwareversionen hat, bevor es losgeht.




## Installation
Wenn alle Voraussetzungen erfüllt sind und die Vorbereitung abgeschlossen ist, kannst du mit der Installation der TeamSpeak 6 Server-Anwendung starten. Lade dir dafür zuerst die neueste Release-Datei `http://teamspeak-server_win64-v6.0.0-beta6.zip/` von GitHub herunter: [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Entpacke die Datei anschließend in ein Verzeichnis deiner Wahl. Öffne **PowerShell** und navigiere in das Verzeichnis, in das du die Server-Dateien entpackt hast. Starte den Server mit:

```
.\tsserver.exe
```

Beim ersten Start erscheint ein Fenster mit der Lizenzvereinbarung, die du akzeptieren musst. Danach werden dir die Zugangsdaten für das Server Query Admin-Konto sowie der Privilege Key angezeigt. Diese Infos werden nur einmal gezeigt, also sichere sie dir unbedingt gut ab.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Nach der Bestätigung läuft der TeamSpeak 6 Server bereits im Hintergrund und ist einsatzbereit.

##### 

## Konfiguration

Du kannst weitere Einstellungen für den **TeamSpeak 6 Server** auch über **Kommandozeilen-Parameter** anpassen. Die Optionen werden direkt beim Start des Servers übergeben. Eine vollständige Liste der verfügbaren Optionen findest du in der offiziellen [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md) Dokumentation. Beispiel:

```
./tsserver --default-voice-port 9987
```



## Verbindung herstellen

Sobald der TeamSpeak 6 Server läuft, kannst du dich mit dem TeamSpeak 6 Client verbinden. Nutze einfach die IP-Adresse deines Servers zusammen mit dem passenden Port. Gib diese Daten im Client ein, um dich mit deinem Server zu verbinden und direkt loszulegen.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Abschluss und weitere Ressourcen

Glückwunsch! Du hast den TeamSpeak 6 Server erfolgreich auf deinem VPS/Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der weiteren Server-Konfiguration helfen können:

- [Offizielle Website](https://teamspeak.com/en/) – Infos und Downloads zu TeamSpeak 6
- [Community Forum](https://community.teamspeak.com/) – Support und Diskussionen der Nutzer
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) – Fehler melden und offene Tickets verfolgen

Du hast spezielle Fragen, die hier nicht beantwortet werden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂