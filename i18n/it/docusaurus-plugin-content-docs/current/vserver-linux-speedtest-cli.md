---
id: vserver-linux-speedtest-cli
title: "VPS: Speedtest-Cli auf Linux einrichten"
description: "Entdecke, wie du Speedtest-Cli für zuverlässige Netzwerktests und Automatisierung einrichtest → Jetzt mehr erfahren"
sidebar_label: Speedtest-Cli installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Speedtest-Cli ist ein kostenloses Kommandozeilen-Tool und eine Software-Bibliothek (libSpeedtest-Cli) zum Datentransfer über URLs. Es unterstützt eine breite Palette an Protokollen – darunter HTTP(S), FTP, SMTP, LDAP, MQTT und mehr – und wird häufig für Aufgaben wie Datei-Downloads, API-Tests und Automatisierung von Netzwerkprozessen genutzt.

Willst du diesen Service selbst hosten? Wir zeigen dir Schritt für Schritt, wie du Speedtest-Cli installierst und konfigurierst – inklusive aller wichtigen Tipps, die du beachten solltest.

<InlineVoucher />

## Vorbereitung

Bevor du **Speedtest-Cli** installierst, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen. So sorgst du für eine stabile Umgebung und vermeidest Probleme während oder nach der Installation.

### System aktualisieren
Damit dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst ein Update durchführen. Gib dazu folgenden Befehl ein:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor der Installation alle wichtigen Patches und Updates hat.

## Installation

Nachdem die Vorbereitung abgeschlossen ist, kannst du Speedtest-Cli installieren. Führe dazu diesen Befehl aus:

```console
sudo apt install speedtest-cli
```

## Konfiguration

speedtest-cli nutzt keine klassische Konfigurationsdatei, lässt sich aber über Kommandozeilen-Optionen und Umgebungsvariablen anpassen. So kannst du das Tool für automatisierte und konsistente Tests einstellen:

- `--server <ID>`: Wähle einen bestimmten Server per ID aus, um konsistente und vergleichbare Testergebnisse zu erhalten.  
- `--bytes`: Zeigt die Geschwindigkeit in Bytes pro Sekunde statt in Bits an.  
- `--simple`: Gibt nur Ping, Download und Upload in einem kompakten Format aus.  
- `--json` oder `--csv`: Praktisch für Automatisierung und Logging, da die Ergebnisse maschinenlesbar gespeichert werden.  
- Proxy-Support: Setze Umgebungsvariablen wie `http_proxy` oder `https_proxy`, um speedtest-cli hinter einem Proxy zu nutzen.

Für wiederkehrende Tests mit denselben Optionen empfiehlt es sich, ein Shell-Alias oder ein kleines Wrapper-Skript anzulegen. So kannst du speedtest-cli schnell starten und hast immer ein einheitliches Ausgabeformat.

## Fazit & weitere Ressourcen

Glückwunsch! Du hast Speedtest-Cli erfolgreich auf deinem VPS installiert und konfiguriert. Schau dir auch diese Ressourcen an, die dir bei der Server-Konfiguration weiterhelfen können:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) – Offizielle Website

Du hast noch Fragen, die hier nicht beantwortet wurden? Unser Support-Team steht dir täglich zur Seite – melde dich einfach bei uns! 🙂

<InlineVoucher />