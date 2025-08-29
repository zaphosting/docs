---
id: dedicated-windows-speedtest-cli
title: "Dedicated Server: Speedtest CLI unter Windows einrichten"
description: Informationen zur Einrichtung von Speedtest CLI auf deinem Windows vServer von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Speedtest CLI installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Speedtest CLI ist ein verteiltes Versionskontrollsystem, das für effizientes Quellcode-Management entwickelt wurde. Es ermöglicht Entwicklerinnen und Entwicklern, Änderungen nachzuverfolgen, gleichzeitig in verschiedenen Branches zu arbeiten und nahtlos in Projekten zu kollaborieren. Dank seiner Flexibilität und Leistung ist Speedtest CLI zum Standardwerkzeug für Versionskontrolle in der modernen Softwareentwicklung geworden.

Du überlegst, diesen Dienst selbst zu hosten? Wir führen dich durch jeden Schritt der Einrichtung und Konfiguration und nennen alles, was du beachten musst.

<InlineVoucher />



## Vorbereitung

Bevor du **Speedtest CLI** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren. Diese Vorbereitungen sorgen für eine stabile Umgebung und helfen, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit der aktuellsten Software und den neuesten Sicherheitsverbesserungen läuft, solltest du zuerst Systemupdates durchführen. So stellst du sicher, dass dein System vor dem Fortfahren die neuesten Sicherheitspatches und Softwareversionen hat.



## Installation

Nachdem die notwendigen Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Speedtest-CLI-Anwendung fortfahren. Lade dazu Speedtest CLI für Windows (x64) hier herunter: https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Führe anschließend das Setup der heruntergeladenen Datei aus und folge den angezeigten Schritten.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)



## Konfiguration

speedtest-cli verwendet keine klassische Konfigurationsdatei, kann aber über Befehlszeilenoptionen und Umgebungsvariablen angepasst werden. So lässt es sich für konsistente und automatisierte Einsätze konfigurieren:

- `--server <ID>`: Wähle einen bestimmten Server über seine ID für konsistentere und vergleichbare Testergebnisse.  
- `--bytes`: Zeige Geschwindigkeiten in Bytes pro Sekunde statt in Bits an.  
- `--simple`: Gibt nur Ping-, Download- und Upload-Werte in einem kompakten Format aus.  
- `--json` oder `--csv`: Nützlich für Automatisierung und Logging, da Ergebnisse in einem maschinenlesbaren Format gespeichert werden.  
- Proxy-Unterstützung: Setze Umgebungsvariablen wie `http_proxy` oder `https_proxy`, um speedtest-cli hinter einem Proxy zu betreiben.  

Für wiederholte Aufrufe mit denselben Optionen bietet es sich an, einen Shell-Alias oder ein kleines Wrapper-Skript zu erstellen. So startest du speedtest-cli schnell und erhältst ein einheitliches Ausgabeformat.



## Abschluss und weitere Ressourcen

Glückwunsch! Du hast Speedtest CLI jetzt erfolgreich auf deinem vServer installiert und konfiguriert. Wir empfehlen außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir zusätzliche Hilfe und Orientierung während deiner Serverkonfiguration bieten können

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Offizielle Website

Hast du spezielle Fragen, die hier nicht abgedeckt sind? Für weitere Fragen oder Unterstützung wende dich bitte an unser Support-Team, das täglich für dich da ist! 🙂



<InlineVoucher />