---
id: dedicated-windows-ts6
title: "Dedicated Server: Teamspeak 6 Server auf deinem Windows Dedicated Server einrichten"
description: "Entdecke, wie du deinen TeamSpeak 6 Server einrichtest und optimierst für beste Performance und Sicherheit → Jetzt mehr erfahren"
sidebar_label: Teamspeak 6 Server installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Sommer 2025 hat TeamSpeak die **Beta-Version** des **TeamSpeak 6 Servers** veröffentlicht. Jetzt kannst du die nächste Generation von TeamSpeak hautnah erleben!

Du überlegst, diesen Service selbst zu hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)





## Voraussetzungen

Bevor du den **Teamspeak 6 Server** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung    |
| ---------- | ------------ | ------------------------- |
| CPU        | 1 vCPU Kern  | 4 vCPU Kerne              |
| RAM        | 1 GB         | 4 GB                      |
| Festplattenspeicher | 1 GB  | 25 GB                     |



## Vorbereitung

Bevor du den **TeamSpeak 6 Server** einrichtest, solltest du dein System vorbereiten. Um sicherzugehen, dass dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst immer ein Systemupdate durchführen.

So stellst du sicher, dass dein System die neuesten Sicherheitspatches und Softwareversionen hat, bevor du weitermachst.




## Installation
Nachdem alle Anforderungen erfüllt und die notwendigen Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Teamspeak 6 Server-Anwendung starten. Um den TeamSpeak 6 Server zu installieren, lade zuerst die neueste Release-Datei `http://teamspeak-server_win64-v6.0.0-beta6.zip/` von GitHub herunter: [TeamSpeak 6 Server (Windows 64-bit)](https://github.com/teamspeak/teamspeak6-server/releases/download/v6.0.0%2Fbeta6/teamspeak-server_win64-v6.0.0-beta6.zip)

![img](https://screensaver01.zap-hosting.com/index.php/s/Ywc6mMTJybbgtF5/preview)

Entpacke die Datei anschließend in ein Verzeichnis deiner Wahl. Öffne **PowerShell** und navigiere in das Verzeichnis, in das du die Server-Dateien entpackt hast. Starte den Server mit:

```
.\tsserver.exe
```

Beim ersten Start erscheint ein Fenster mit der Lizenzvereinbarung, die du akzeptieren musst. Danach werden dir die Zugangsdaten für das Server Query Admin Konto und der Privilege Key angezeigt. Diese Daten werden nur einmal angezeigt, also sichere sie unbedingt gut ab.

![img](https://screensaver01.zap-hosting.com/index.php/s/rsmBkcJiAAinjE6/download)

Nach der Bestätigung läuft der TeamSpeak 6 Server bereits im Hintergrund und ist einsatzbereit.

##### 

## Konfiguration

Du kannst weitere Einstellungen für den **TeamSpeak 6 Server** auch über **Kommandozeilen-Argumente** anpassen. Die Optionen werden direkt beim Start des Servers übergeben. Eine vollständige Liste der verfügbaren Optionen findest du in der offiziellen [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md) Dokumentation. Beispiel:

```
./tsserver --default-voice-port 9987
```



## Verbindung herstellen

Sobald der TeamSpeak 6 Server läuft, kannst du dich mit dem TeamSpeak 6 Client verbinden. Nutze einfach die IP-Adresse deines Servers zusammen mit dem richtigen Port. Gib diese Daten im Client ein, um dich mit deinem Server zu verbinden und loszulegen.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Fazit und weitere Ressourcen

Glückwunsch! Du hast den Teamspeak 6 Server erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der Server-Konfiguration weiterhelfen können:

- [Offizielle Webseite](https://teamspeak.com/en/) – Infos und Downloads zu TeamSpeak 6
- [Community Forum](https://community.teamspeak.com/) – Nutzer-Support und Diskussionen
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) – Fehler melden und offene Issues verfolgen

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂