---
id: dedicated-windows-hytale
title: "Dedicated Server: Hytale Dedicated Server Setup"
description: "Entdecke, wie du den Hytale Dedicated Server auf deinem Windows Dedicated Server einrichtest für ein reibungsloses Gameplay-Management → Jetzt mehr erfahren"
sidebar_label: Hytale
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Dedicated Server und möchtest deinen eigenen Hytale Server darauf hosten? In dieser Anleitung erklären wir dir Schritt für Schritt, wie du den Hytale Dedicated Server auf einem Windows-System installierst und betreibst.

## Vorbereitung

Um einen Hytale Server zu betreiben, muss dein System ein paar grundlegende Anforderungen erfüllen. Der Server läuft auf Java 25 und benötigt mindestens 4 GB RAM. Sowohl x64 als auch arm64 Architekturen werden unterstützt. Der tatsächliche Ressourcenverbrauch hängt von der Spieleranzahl, der Sichtweite und der Weltaktivität ab, daher können für größere Server zusätzliche Ressourcen nötig sein.

Bevor du weitermachst, stelle sicher, dass Java 25 auf deinem Windows-System installiert ist. Du kannst die Installation überprüfen, indem du eine Eingabeaufforderung öffnest und folgenden Befehl ausführst:

```
java --version
```

Falls Java noch nicht installiert ist, folge unserer speziellen Install Java Anleitung für Windows Server. Diese Anleitung zeigt dir, wie du Java richtig auf deinem System installierst und konfigurierst.



## Installation

Starte damit, ein eigenes Verzeichnis für den Hytale Server anzulegen. So bleiben alle Serverdateien übersichtlich an einem Ort. Zum Beispiel:

```
C:\Hytale
```

Der Server benötigt zwei Hauptkomponenten: die Server-Anwendung selbst und die Game-Assets. Diese Dateien kannst du mit dem Hytale Kommandozeilen-Downloader beziehen, der für Server-Deployments und einfachere Updates gedacht ist.

Der CLI-Downloader bietet eine strukturierte Möglichkeit, die Hytale Serverdateien herunterzuladen und zu aktualisieren. Nach dem Download des Downloader-Archivs entpackst du es in ein temporäres Verzeichnis. Im Archiv findest du eine QUICKSTART.md Datei, die die Grundfunktionen des Tools erklärt.

Starte den Downloader über die Kommandozeile und folge den Anweisungen, um die neueste Server-Version herunterzuladen. Nach Abschluss kopierst du die heruntergeladenen Serverdateien und das Assets-Archiv in dein Serververzeichnis. Danach sollte das Verzeichnis die Server-JAR-Datei und ein Assets-Archiv wie Assets.zip enthalten.

| **Befehl**                                   | **Beschreibung**                       |
| :-------------------------------------------- | :------------------------------------ |
| `./hytale-downloader`                         | Neueste Version herunterladen         |
| `./hytale-downloader -print-version`          | Spielversion anzeigen ohne Download   |
| `./hytale-downloader -version`                | Version des hytale-downloader anzeigen|
| `./hytale-downloader -check-update`           | Nach Updates für hytale-downloader suchen |
| `./hytale-downloader -download-path game.zip` | In bestimmte Datei herunterladen      |
| `./hytale-downloader -patchline pre-release`  | Aus dem Pre-Release-Kanal herunterladen |
| `./hytale-downloader -skip-update-check`      | Automatische Update-Prüfung überspringen |



## Konfiguration

### Server starten

Der Server wird gestartet, indem die JAR-Datei ausgeführt und der Pfad zum Assets-Archiv angegeben wird. Passe den Pfad an, falls deine Assets an einem anderen Ort liegen. Öffne die Eingabeaufforderung im Serververzeichnis und führe aus:

```
java -jar HytaleServer.jar --assets C:\Hytale\Assets.zip --bind 0.0.0.0:5520
```

### Authentifizierung

Beim ersten Start muss der Server authentifiziert werden, bevor Spieler sich verbinden können. Das erfolgt direkt über die Server-Konsole mittels eines gerätebasierten Login-Prozesses. Folge den Anweisungen in der Konsole, um die Authentifizierung abzuschließen.

```
/auth login device
```

Die Ausgabe sieht etwa so aus:

```
> /auth login device
===================================================================
GERÄTE-AUTORISIERUNG
===================================================================
Besuche: https://accounts.hytale.com/device
Gib den Code ein: ABCD-1234
Oder besuche: https://accounts.hytale.com/device?user_code=ABCD-1234
===================================================================
Warte auf Autorisierung (läuft in 900 Sekunden ab)...

[User schließt Autorisierung im Browser ab]

> Authentifizierung erfolgreich! Modus: OAUTH_DEVICE
```

Nach der Authentifizierung kann dein Server Spieler-Verbindungen annehmen.



### Firewall-Konfiguration

Standardmäßig hört der Server auf UDP-Port 5520 und bindet an alle verfügbaren Schnittstellen. Du kannst Adresse und Port bei Bedarf ändern. Der Server kommuniziert über UDP mit QUIC. Stelle sicher, dass deine Firewall eingehenden UDP-Traffic auf dem gewählten Port erlaubt, z.B. mit Iptables oder UFW. Führe folgenden Befehl in PowerShell aus, um die Firewall-Regel einfach zu setzen:

```
New-NetFirewallRule -DisplayName "Hytale Server" -Direction Inbound -Protocol UDP -LocalPort 5520 -Action Allow
```



## Performance-Hinweise

Die Sichtweite ist einer der wichtigsten Faktoren für den Speicherverbrauch. Höhere Werte erhöhen den RAM-Bedarf, da mehr Weltdaten gleichzeitig aktiv bleiben müssen.

Für die meisten Setups bietet eine maximale Sichtweite von 12 Chunks (384 Blöcke) einen guten Kompromiss zwischen Server-Performance und Spielerlebnis.

Zum Vergleich: Minecraft Server nutzen standardmäßig eine Sichtweite von 10 Chunks (160 Blöcke). Hytales Standard von 384 Blöcken entspricht ungefähr 24 Minecraft Chunks, was die höheren Speicheranforderungen erklärt. Dieser Wert sollte je nach erwarteter Spielerzahl und verfügbaren Ressourcen angepasst werden.



## Fazit

Glückwunsch, du hast jetzt einen funktionierenden Hytale Server auf deinem System am Start. Von hier aus kannst du das Setup erweitern, indem du Mods installierst, Welteinstellungen anpasst und Performance-Parameter auf deine Spielerbasis abstimmst. Eine regelmäßige Überwachung der Ressourcennutzung ist empfehlenswert, um einen stabilen Betrieb sicherzustellen, wenn der Server wächst.

Bei weiteren Fragen oder Support brauchst du nur unser Support-Team zu kontaktieren, das täglich für dich da ist! 🙂