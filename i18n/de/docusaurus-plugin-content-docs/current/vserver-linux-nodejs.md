---
id: vserver-linux-nodejs
title: "vServer: Node.js auf Linux einrichten"
description: "Entdecke, wie du eine stabile Node.js-Umgebung für skalierbare Echtzeitanwendungen mit Docker und Systemvorbereitung einrichtest → Jetzt mehr erfahren"
sidebar_label: Node.js installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Node.js ist eine plattformübergreifende, Open-Source JavaScript-Laufzeitumgebung, die JavaScript-Code außerhalb des Browsers ausführt, z.B. auf Servern oder in Kommandozeilen-Tools. Basierend auf der V8-Engine unterstützt es asynchrone, ereignisgesteuerte I/O, was es extrem effizient für den Aufbau skalierbarer Netzwerk- und Echtzeitanwendungen macht.

Das „JavaScript überall“-Paradigma ermöglicht es Entwicklern, eine einzige Sprache sowohl im Backend als auch im Frontend zu verwenden.

<InlineVoucher />

## Vorbereitung

Bevor du **Node.js** einrichtest, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen und alle benötigten Abhängigkeiten zu installieren. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.

### System aktualisieren
Damit dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du immer zuerst ein Systemupdate durchführen. Führe dazu folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System die neuesten Sicherheitspatches und Softwareversionen hat, bevor du weitermachst.

### Abhängigkeiten installieren
Nachdem das Update abgeschlossen ist, kannst du mit der Installation der Abhängigkeiten weitermachen. Node.js wird auf deinem System in mehreren Docker-Containern ausgeführt. Dafür muss Docker zuerst installiert sein. Führe dazu folgenden Befehl aus:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine ausführliche Anleitung zur Installation und Nutzung von Docker findest du in unserer [Docker](dedicated-linux-docker.md) Anleitung.

## Installation

Nachdem alle Voraussetzungen erfüllt und Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Node.js-Anwendung starten.

Um Node.js in einer isolierten Umgebung zu nutzen, musst du zuerst das offizielle Alpine-basierte Image herunterladen. Führe folgenden Befehl aus, um das neueste Node.js 22 Image auf dein System zu ziehen und für Container-Deployments verfügbar zu machen:

```
docker pull node:22-alpine
```

Starte anschließend einen Container basierend auf diesem Image und öffne eine Shell-Session darin. Nutze dazu folgenden Befehl, um den Container interaktiv zu starten. Die Option `--rm` sorgt dafür, dass der Container automatisch gelöscht wird, sobald du ihn verlässt – so bleibt dein Host sauber.

```
docker run -it --rm --entrypoint sh node:22-alpine
```

Im Container kannst du die installierte Node.js-Version mit `node -v` prüfen, die `v22.19.0` anzeigen sollte. Die npm-Version kannst du mit `npm -v` checken, hier wird `10.9.3` erwartet. Das bestätigt, dass das Image die korrekten Versionen von Node.js und npm bereitstellt und sofort einsatzbereit ist.

## Konfiguration

Nachdem du den Node.js-Container gestartet hast, empfiehlt es sich, wichtige Node.js-Einstellungen direkt in der Umgebung zu konfigurieren. Ein gängiger Weg ist das Setzen von Umgebungsvariablen, z.B.:

```
export NODE_ENV=production
```

Das aktiviert den Produktionsmodus, schaltet Performance-Optimierungen ein und passt das Logging an. Für Entwicklungszwecke kannst du stattdessen `NODE_ENV=development` setzen, um ausführliche Fehlermeldungen und Debugging-Features zu nutzen.

Eine gut strukturierte Projektordnerstruktur ist wichtig, beginnend mit einer Konfigurationsdatei, die du mit folgendem Befehl erstellst:

```
npm init -y
```

Das erzeugt eine `package.json` Datei, die Abhängigkeiten, Skripte und Metadaten für dein Projekt definiert. Sie ist die zentrale Konfigurationsdatei jeder Node.js-Anwendung.

Abhängigkeiten installierst du mit `npm install <package>`, Entwicklungsabhängigkeiten mit `npm install <package> --save-dev`. Im `scripts`-Abschnitt der `package.json` kannst du eigene Befehle definieren, z.B. `npm start` oder `npm run build`, um die Ausführung und Projektverwaltung zu vereinfachen.

Für fortgeschrittene Setups kannst du Node.js mit `.npmrc` oder `.nvmrc` Dateien anpassen, um private Registries, Cache-Optionen oder eine bestimmte Node.js-Version zu erzwingen. So läuft deine Anwendung konsistent in verschiedenen Umgebungen.

## Fazit und weitere Ressourcen

Glückwunsch! Du hast Node.js erfolgreich auf deinem VPS installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf folgende Ressourcen zu werfen, die dir bei der Serverkonfiguration weiterhelfen können:

- [Node.js.com](https://Node.js.com/) – Offizielle Webseite
- https://Node.js.com/help/ – Node.js Help Center (Dokumentation)

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂