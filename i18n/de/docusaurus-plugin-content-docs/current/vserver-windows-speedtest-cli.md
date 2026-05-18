---
id: vserver-windows-speedtest-cli
title: "Speedtest CLI auf einem Windows Server einrichten – Überwache deine Netzwerkperformance"
description: "Entdecke, wie du mit Speedtest CLI deinen Quellcode effizient verwaltest und nahtlos zusammenarbeitest – die perfekte Lösung für modernes Version Control → Jetzt mehr erfahren"
sidebar_label: Speedtest CLI installieren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Speedtest CLI ist ein verteiltes Versionskontrollsystem, das für effizientes Quellcode-Management entwickelt wurde. Es ermöglicht Entwicklern, Änderungen nachzuverfolgen, gleichzeitig an verschiedenen Branches zu arbeiten und Projekte reibungslos gemeinsam zu bearbeiten. Dank seiner Flexibilität und Performance hat sich Speedtest CLI zum Standard-Tool für Versionskontrolle in der modernen Softwareentwicklung etabliert.

Du denkst darüber nach, diesen Service selbst zu hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

<InlineVoucher />



## Vorbereitung

Bevor du **Speedtest CLI** einrichtest, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Um sicherzustellen, dass dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst immer ein Systemupdate durchführen. So hast du die neuesten Sicherheitspatches und Softwareversionen, bevor du weitermachst.



## Installation

Nachdem die notwendigen Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Speedtest CLI Anwendung starten. Lade dazu die Speedtest CLI für Windows (x64) hier herunter: https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Starte anschließend die Installation der heruntergeladenen Datei und folge den angezeigten Schritten.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)



## Konfiguration

speedtest-cli nutzt keine klassische Konfigurationsdatei, kann aber über Kommandozeilenoptionen und Umgebungsvariablen angepasst werden. So kannst du es für konsistente und automatisierte Nutzung optimieren:

- `--server <ID>`: Wähle einen bestimmten Server per ID aus, um konsistentere und vergleichbare Testergebnisse zu erhalten.  
- `--bytes`: Zeigt die Geschwindigkeiten in Bytes pro Sekunde statt in Bits an.  
- `--simple`: Gibt nur Ping, Download- und Upload-Werte in einem kompakten Format aus.  
- `--json` oder `--csv`: Praktisch für Automatisierung und Logging, da die Ergebnisse maschinenlesbar gespeichert werden.  
- Proxy-Unterstützung: Konfiguriere Umgebungsvariablen wie `http_proxy` oder `https_proxy`, um speedtest-cli hinter einem Proxy zu betreiben.  

Für wiederholte Nutzung mit denselben Optionen empfiehlt es sich, einen Shell-Alias oder ein kleines Wrapper-Skript zu erstellen. So kannst du speedtest-cli schnell starten und gleichzeitig ein einheitliches Ausgabeformat sicherstellen.



## Abschluss und weitere Ressourcen

Glückwunsch! Du hast Speedtest CLI erfolgreich auf deinem vServer installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der weiteren Serverkonfiguration hilfreich sein können:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) – Offizielle Webseite

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂



<InlineVoucher />