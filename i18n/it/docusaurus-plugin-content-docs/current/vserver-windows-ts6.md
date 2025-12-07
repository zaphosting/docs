---
id: vserver-windows-ts6
title: "VPS: Teamspeak 6 Server auf deinem Windows VPS einrichten"
description: "Entdecke, wie du den TeamSpeak 6 Server Beta einrichtest und optimierst für reibungsloses Hosting und beste Performance → Jetzt mehr erfahren"
sidebar_label: Teamspeak 6 Server installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Sommer 2025 hat TeamSpeak die **Beta-Version** des **TeamSpeak 6 Servers** released. Jetzt kannst du die nächste Generation von TeamSpeak live erleben!

Willst du den Service selbst hosten? Wir zeigen dir Schritt für Schritt, wie du den Server installierst und konfigurierst – inklusive allem, was du beachten musst.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Voraussetzungen

Bevor du den **Teamspeak 6 Server** installierst, check am besten, ob dein Hosting-Setup die folgenden Anforderungen erfüllt, damit alles smooth läuft und die Performance top ist.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung    |
| ---------- | ------------ | ------------------------- |
| CPU        | 1 vCPU Kern  | 4 vCPU Kerne              |
| RAM        | 1 GB         | 4 GB                      |
| Speicher   | 1 GB         | 25 GB                     |



## Vorbereitung

Bevor du den **TeamSpeak 6 Server** installierst, solltest du dein System vorbereiten. Damit alles stabil läuft und sicher ist, mach am besten zuerst ein Update deines Systems.

So hast du die neuesten Sicherheits-Patches und Software-Versionen am Start, bevor es losgeht.




## Installation
Wenn alle Voraussetzungen passen und du vorbereitet bist, kannst du mit der Installation vom Teamspeak 6 Server starten. Lade dir zuerst die aktuellste Release-Datei `http://teamspeak-server_win64-v6.0.0-beta6.zip/` von GitHub runter: [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Entpack die Datei in einen Ordner deiner Wahl. Öffne **PowerShell** und navigiere in den Ordner mit den entpackten Server-Dateien. Starte den Server mit:

```
.\tsserver.exe
```

Beim ersten Start poppt ein Fenster mit der Lizenzvereinbarung auf, die du akzeptieren musst. Danach bekommst du die Server Query Admin Account Daten und den Privilege Key angezeigt. Diese Infos gibt’s nur einmal, also sicher abspeichern!

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Wenn du das bestätigt hast, läuft der TeamSpeak 6 Server schon im Hintergrund und ist ready to go.

##### 

## Konfiguration

Du kannst den **TeamSpeak 6 Server** auch mit **Kommandozeilen-Parametern** anpassen. Die Optionen gibst du direkt beim Start mit an. Eine komplette Liste findest du in der offiziellen [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md) Doku. Beispiel:

```
./tsserver --default-voice-port 9987
```



## Verbindung herstellen

Sobald der TeamSpeak 6 Server läuft, kannst du dich mit dem TeamSpeak 6 Client verbinden. Einfach die IP deines Servers plus den richtigen Port eingeben. Dann kannst du direkt loslegen und testen.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Fazit und weitere Ressourcen

Glückwunsch! Du hast den Teamspeak 6 Server erfolgreich auf deinem VPS installiert und konfiguriert. Schau dir auch diese Ressourcen an, die dir bei der Server-Konfiguration weiterhelfen können:

- [Offizielle Website](https://teamspeak.com/en/) – Infos und Downloads zu TeamSpeak 6
- [Community Forum](https://community.teamspeak.com/) – Support und Austausch mit anderen Usern
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) – Bugs melden und offene Issues verfolgen

Du hast noch Fragen, die hier nicht beantwortet wurden? Für weitere Hilfe steht dir unser Support-Team täglich zur Seite – meld dich einfach bei uns! 🙂