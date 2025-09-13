---
id: dedicated-linux-speedtest-cli
title: "Dedicated Server: Speedtest-Cli unter Linux einrichten"
description: Informationen zur Einrichtung von Speedtest-Cli auf deinem Linux Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Speedtest-Cli installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Speedtest-Cli ist sowohl ein kostenloses Kommandozeilentool als auch eine Softwarebibliothek (libSpeedtest-Cli) zum Übertragen von Daten über URLs. Es unterstützt eine große Bandbreite an Protokollen – darunter HTTP(S), FTP, SMTP, LDAP, MQTT und mehr – und wird häufig für Aufgaben wie das Herunterladen von Dateien, das Testen von APIs und die Automatisierung von Netzwerkprozessen verwendet.  

Du überlegst, diesen Dienst selbst zu hosten? Wir führen dich durch jeden Schritt der Einrichtung und Konfiguration und nennen alles, was du beachten musst.

<InlineVoucher />



## Vorbereitung

Bevor du **Speedtest-Cli** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren. Diese Vorbereitungen sorgen für eine stabile Umgebung und helfen, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit der aktuellsten Software und den neuesten Sicherheitsverbesserungen läuft, solltest du zuerst Systemupdates durchführen. Führe dazu den folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor dem Fortfahren die neuesten Sicherheitspatches und Softwareversionen hat.



## Installation

Nachdem die notwendigen Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Speedtest-Cli-Anwendung fortfahren. Führe dazu den folgenden Befehl aus: 

```console
sudo apt install speedtest-cli
```



## Konfiguration

speedtest-cli verwendet keine klassische Konfigurationsdatei, kann aber über Befehlszeilenoptionen und Umgebungsvariablen angepasst werden. So lässt es sich für konsistente und automatisierte Einsätze konfigurieren:

- `--server <ID>`: Wähle einen bestimmten Server über seine ID für konsistentere und vergleichbare Testergebnisse.  
- `--bytes`: Zeige Geschwindigkeiten in Bytes pro Sekunde statt in Bits an.  
- `--simple`: Gibt nur Ping-, Download- und Upload-Werte in einem kompakten Format aus.  
- `--json` oder `--csv`: Nützlich für Automatisierung und Logging, da Ergebnisse in einem maschinenlesbaren Format gespeichert werden.  
- Proxy-Unterstützung: Setze Umgebungsvariablen wie `http_proxy` oder `https_proxy`, um speedtest-cli hinter einem Proxy zu betreiben.  

Für wiederholte Aufrufe mit denselben Optionen bietet es sich an, einen Shell-Alias oder ein kleines Wrapper-Skript zu erstellen. So startest du speedtest-cli schnell und erhältst ein einheitliches Ausgabeformat.



## Abschluss und weitere Ressourcen

Glückwunsch! Du hast Speedtest-Cli jetzt erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir zusätzliche Hilfe und Orientierung während deiner Serverkonfiguration bieten können

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Offizielle Website

Hast du spezielle Fragen, die hier nicht abgedeckt sind? Für weitere Fragen oder Unterstützung wende dich bitte an unser Support-Team, das täglich für dich da ist! 🙂



<InlineVoucher />