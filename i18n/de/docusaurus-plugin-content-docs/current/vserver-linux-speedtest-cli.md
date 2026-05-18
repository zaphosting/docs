---
id: vserver-linux-speedtest-cli
title: "Speedtest CLI auf einem Linux-Server einrichten – Überwache die Netzwerkperformance deines Servers"
description: "Entdecke, wie du Speedtest-Cli für zuverlässige Netzwerktests und Automatisierung einrichtest → Jetzt mehr erfahren"
sidebar_label: Speedtest-Cli installieren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Speedtest-Cli ist sowohl ein kostenloses Kommandozeilen-Tool als auch eine Software-Bibliothek (libSpeedtest-Cli) zum Datentransfer über URLs. Es unterstützt eine Vielzahl von Protokollen – darunter HTTP(S), FTP, SMTP, LDAP, MQTT und mehr – und wird häufig für Aufgaben wie das Herunterladen von Dateien, das Testen von APIs und die Automatisierung von Netzwerkprozessen genutzt.

Du willst diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

<InlineVoucher />

## Vorbereitung

Bevor du **Speedtest-Cli** einrichtest, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.

### System aktualisieren
Damit dein System mit der aktuellsten Software und den neuesten Sicherheitsupdates läuft, solltest du zuerst ein System-Update durchführen. Dafür gibst du folgenden Befehl ein:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor der Installation die neuesten Sicherheitspatches und Softwareversionen hat.

## Installation

Nachdem die Vorbereitung abgeschlossen ist, kannst du Speedtest-Cli installieren. Führe dazu diesen Befehl aus:

```console
sudo apt install speedtest-cli
```

## Konfiguration

speedtest-cli nutzt keine klassische Konfigurationsdatei, lässt sich aber über Kommandozeilen-Optionen und Umgebungsvariablen anpassen. So kannst du es für konsistente und automatisierte Tests konfigurieren:

- `--server <ID>`: Wähle einen bestimmten Server per ID aus, um konsistentere und vergleichbare Testergebnisse zu erhalten.  
- `--bytes`: Zeigt die Geschwindigkeiten in Bytes pro Sekunde statt in Bits an.  
- `--simple`: Gibt nur Ping, Download und Upload in einem kompakten Format aus.  
- `--json` oder `--csv`: Praktisch für Automatisierung und Logging, da die Ergebnisse maschinenlesbar gespeichert werden.  
- Proxy-Support: Setze Umgebungsvariablen wie `http_proxy` oder `https_proxy`, um speedtest-cli hinter einem Proxy zu nutzen.

Wenn du die gleichen Optionen öfter nutzt, empfiehlt es sich, einen Shell-Alias oder ein kleines Wrapper-Skript zu erstellen. So kannst du speedtest-cli schnell starten und hast immer ein einheitliches Ausgabeformat.

## Abschluss und weitere Ressourcen

Glückwunsch! Du hast Speedtest-Cli erfolgreich auf deinem VPS/Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf diese Ressourcen zu werfen, die dir bei der Server-Konfiguration weiterhelfen können:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) – Offizielle Webseite

Du hast noch Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂

<InlineVoucher />