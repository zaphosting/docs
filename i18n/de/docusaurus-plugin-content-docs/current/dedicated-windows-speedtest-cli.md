---
id: dedicated-windows-speedtest-cli
title: "Dedicated Server: Speedtest CLI auf Windows einrichten"
description: "Entdecke, wie du Quellcode effizient verwaltest und mit Speedtest CLI nahtlos zusammenarbeitest – perfekt für moderne Entwicklung → Jetzt mehr erfahren"
sidebar_label: Speedtest CLI installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Speedtest CLI ist ein verteiltes Versionskontrollsystem, das für effizientes Quellcode-Management entwickelt wurde. Es ermöglicht Entwicklern, Änderungen nachzuverfolgen, gleichzeitig an verschiedenen Branches zu arbeiten und Projekte reibungslos gemeinsam zu bearbeiten. Dank seiner Flexibilität und Performance hat sich Speedtest CLI zum Standard-Tool für Versionskontrolle in der modernen Softwareentwicklung etabliert.

Du überlegst, diesen Service selbst zu hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.



## Vorbereitung

Bevor du **Speedtest CLI** einrichtest, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Um sicherzustellen, dass dein System mit der aktuellsten Software und den neuesten Sicherheitsupdates läuft, solltest du zuerst immer ein Systemupdate durchführen. So ist gewährleistet, dass dein System vor der Installation die neuesten Sicherheitspatches und Softwareversionen hat.



## Installation

Nachdem die notwendigen Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Speedtest CLI Anwendung starten. Lade dazu die Speedtest CLI für Windows (x64) hier herunter: https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Führe anschließend die Setup-Datei aus und folge den angezeigten Schritten.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)



## Konfiguration

speedtest-cli nutzt keine klassische Konfigurationsdatei, kann aber über Kommandozeilenoptionen und Umgebungsvariablen angepasst werden. So kannst du es für konsistente und automatisierte Nutzung konfigurieren:

- `--server <ID>`: Wähle einen bestimmten Server per ID aus, um konsistentere und vergleichbare Testergebnisse zu erhalten.  
- `--bytes`: Zeigt die Geschwindigkeiten in Bytes pro Sekunde statt in Bits an.  
- `--simple`: Gibt nur Ping, Download und Upload in einem kompakten Format aus.  
- `--json` oder `--csv`: Praktisch für Automatisierung und Logging, da die Ergebnisse maschinenlesbar gespeichert werden.  
- Proxy-Unterstützung: Setze Umgebungsvariablen wie `http_proxy` oder `https_proxy`, um speedtest-cli hinter einem Proxy auszuführen.  

Für wiederholte Nutzung mit denselben Optionen empfiehlt es sich, einen Shell-Alias oder ein kleines Wrapper-Skript zu erstellen. So kannst du speedtest-cli schnell starten und gleichzeitig ein einheitliches Ausgabeformat sicherstellen.



## Fazit und weitere Ressourcen

Glückwunsch! Du hast Speedtest CLI erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der weiteren Serverkonfiguration helfen können:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) – Offizielle Website

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂