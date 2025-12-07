---
id: dedicated-windows-speedtest-cli
title: "Dedicated Server: Speedtest CLI installieren auf Windows"
description: "Entdecke, wie du Source-Code effizient managst und mit Speedtest CLI nahtlos zusammenarbeitest für modernes Development → Jetzt mehr erfahren"
sidebar_label: Speedtest CLI installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Speedtest CLI ist ein verteiltes Versionskontrollsystem, das für effizientes Source-Code-Management entwickelt wurde. Es ermöglicht Entwicklern, Änderungen nachzuverfolgen, parallel an verschiedenen Branches zu arbeiten und Projekte reibungslos gemeinsam zu bearbeiten. Dank seiner Flexibilität und Performance ist Speedtest CLI zum Standard-Tool für Versionskontrolle in der modernen Softwareentwicklung geworden.

Willst du diesen Service selbst hosten? Wir zeigen dir Schritt für Schritt, wie du Speedtest CLI installierst und konfigurierst – inklusive allem, was du beachten musst.



## Vorbereitung

Bevor du **Speedtest CLI** einrichtest, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst immer ein System-Update durchführen. So stellst du sicher, dass alle Sicherheitspatches und Softwareversionen auf dem neuesten Stand sind, bevor du weitermachst.



## Installation

Nachdem du alles vorbereitet hast, kannst du mit der Installation von Speedtest CLI starten. Lade dir dafür die Windows-Version (x64) hier herunter: https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Starte anschließend das Setup der heruntergeladenen Datei und folge den Anweisungen.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)



## Konfiguration

speedtest-cli nutzt keine klassische Konfigurationsdatei, lässt sich aber über Kommandozeilen-Optionen und Umgebungsvariablen anpassen. So kannst du es für konsistente und automatisierte Tests einstellen:

- `--server <ID>`: Wähle einen bestimmten Server per ID aus für vergleichbare und stabile Testergebnisse.  
- `--bytes`: Zeigt die Geschwindigkeit in Bytes pro Sekunde statt Bits an.  
- `--simple`: Gibt nur Ping, Download und Upload in einem kompakten Format aus.  
- `--json` oder `--csv`: Praktisch für Automatisierung und Logging, da die Ergebnisse maschinenlesbar gespeichert werden.  
- Proxy-Support: Setze Umgebungsvariablen wie `http_proxy` oder `https_proxy`, um speedtest-cli hinter einem Proxy zu nutzen.  

Wenn du die gleichen Optionen öfter nutzt, empfiehlt es sich, einen Shell-Alias oder ein kleines Wrapper-Skript zu erstellen. So kannst du speedtest-cli schnell starten und hast immer ein einheitliches Ergebnis.



## Fazit & weitere Ressourcen

Glückwunsch! Du hast Speedtest CLI erfolgreich auf deinem vServer installiert und konfiguriert. Schau dir auch diese Ressourcen an, die dir bei der Server-Konfiguration weiterhelfen können:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) – Offizielle Website

Du hast noch Fragen, die hier nicht beantwortet wurden? Unser Support-Team steht dir täglich zur Seite – melde dich einfach bei uns! 🙂