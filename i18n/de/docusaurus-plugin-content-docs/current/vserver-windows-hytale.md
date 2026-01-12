---
id: vserver-windows-hytale
title: "VPS: Hytale Dedicated Server Setup"
description: "Entdecke, wie du den Hytale Dedicated Server auf deinem Windows VPS einrichtest für nahtloses Gameplay-Management → Jetzt mehr erfahren"
sidebar_label: Hytale
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung
Du hast einen Windows VPS und willst deinen eigenen Hytale Server darauf hosten? In dieser Anleitung erklären wir dir Schritt für Schritt, wie du den Hytale Dedicated Server auf einem Windows-System installierst und startest.

<InlineVoucher />

## Vorbereitung

Um einen Hytale Server zu betreiben, muss dein System ein paar Grundvoraussetzungen erfüllen. Der Server läuft auf Java 25 und benötigt mindestens 4 GB RAM. Sowohl x64 als auch arm64 Architekturen werden unterstützt. Der tatsächliche Ressourcenverbrauch hängt von der Spieleranzahl, der Sichtweite und der Weltaktivität ab, daher können für größere Server zusätzliche Ressourcen nötig sein.

Bevor du weitermachst, stelle sicher, dass Java 25 auf deinem Windows-System installiert ist. Überprüfen kannst du das, indem du die Eingabeaufforderung öffnest und folgenden Befehl eingibst:

```
java --version
```

Falls Java noch nicht installiert ist, folge unserer speziellen Install Java Anleitung für Windows Server. Dort erfährst du, wie du Java richtig installierst und konfigurierst.



## Installation

Starte damit, ein eigenes Verzeichnis für den Hytale Server anzulegen. So bleiben alle Serverdateien ordentlich an einem Ort. Zum Beispiel:

```
C:\Hytale
```

Der Server benötigt zwei Hauptkomponenten: die Server-Anwendung selbst und die Spiel-Assets. Diese Dateien kannst du mit dem Hytale Kommandozeilen-Downloader beziehen, der für Server-Deployments und einfachere Updates gedacht ist.

Der CLI-Downloader bietet eine strukturierte Möglichkeit, die Hytale Serverdateien herunterzuladen und zu aktualisieren. Nachdem du das Downloader-Archiv geladen hast, entpacke es in ein temporäres Verzeichnis. Im Archiv findest du eine QUICKSTART.md Datei, die die Grundfunktionen des Tools erklärt.

Starte den Downloader über die Kommandozeile und folge den Anweisungen, um die neueste Server-Version herunterzuladen. Nach Abschluss kopierst du die heruntergeladenen Serverdateien und das Assets-Archiv in dein Serververzeichnis. Danach sollte das Verzeichnis die Server-JAR-Datei und ein Assets-Archiv wie Assets.zip enthalten.

| **Befehl**                                   | **Beschreibung**                       |
| :-------------------------------------------- | :------------------------------------ |
| `./hytale-downloader`                         | Neueste Version herunterladen         |
| `./hytale-downloader -print-version`          | Spielversion anzeigen ohne Download   |
| `./hytale-downloader -version`                | Version des hytale-downloader anzeigen|
| `./hytale-downloader -check-update`           | Nach Updates für hytale-downloader suchen |
| `./hytale-downloader -download-path game.zip` | Download in eine bestimmte Datei      |
| `./hytale-downloader -patchline pre-release`  | Download aus dem Pre-Release-Kanal    |
| `./hytale-downloader -skip-update-check`      | Automatische Update-Prüfung überspringen |



## Konfiguration

### Server starten

Der Server wird gestartet, indem du die JAR-Datei ausführst und den Pfad zum Assets-Archiv angibst. Passe den Pfad an, falls deine Assets an einem anderen Ort liegen. Öffne die Eingabeaufforderung im Serververzeichnis und führe aus:

```
java -jar HytaleServer.jar --assets C:\Hytale\Assets.zip --bind 0.0.0.0:5520
```

### Authentifizierung

Beim ersten Start muss der Server authentifiziert werden, bevor Spieler sich verbinden können. Das erfolgt direkt über die Server-Konsole mit einem gerätebasierten Login-Prozess. Folge den Anweisungen in der Konsole, um die Authentifizierung abzuschließen.

```
/auth login device
```

Die Ausgabe sieht ungefähr so aus:

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

Standardmäßig hört der Server auf UDP-Port 5520 und bindet an alle verfügbaren Schnittstellen. Du kannst Adresse und Port bei Bedarf ändern. Die Kommunikation läuft über UDP mit QUIC. Stelle sicher, dass deine Firewall eingehenden UDP-Traffic auf dem gewählten Port erlaubt, z.B. mit Iptables oder UFW. In PowerShell kannst du die Firewall-Regel so hinzufügen:

```
New-NetFirewallRule -DisplayName "Hytale Server" -Direction Inbound -Protocol UDP -LocalPort 5520 -Action Allow
```



## Performance-Hinweise

Die Sichtweite ist einer der wichtigsten Faktoren für den Speicherverbrauch. Höhere Werte erhöhen den RAM-Bedarf, weil mehr Welt-Daten gleichzeitig aktiv bleiben müssen.

Für die meisten Setups ist eine maximale Sichtweite von 12 Chunks (384 Blöcke) ein guter Kompromiss zwischen Server-Performance und Spielerlebnis.

Zum Vergleich: Minecraft Server nutzen standardmäßig 10 Chunks (160 Blöcke). Hytales Standard von 384 Blöcken entspricht etwa 24 Minecraft Chunks, was die höheren Speicheranforderungen erklärt. Dieser Wert sollte je nach erwarteter Spielerzahl und verfügbaren Ressourcen angepasst werden.



## Fazit

Glückwunsch, du hast jetzt einen funktionierenden Hytale Server auf deinem System am Start. Von hier aus kannst du das Setup erweitern, Mods installieren, Welteinstellungen anpassen und Performance-Parameter auf deine Spielerbasis abstimmen. Eine regelmäßige Überwachung der Ressourcennutzung empfiehlt sich, um einen stabilen Betrieb sicherzustellen, wenn der Server wächst.

Bei Fragen oder Support brauchst du nur unser Team zu kontaktieren – wir sind täglich für dich da! 🙂

<InlineVoucher />