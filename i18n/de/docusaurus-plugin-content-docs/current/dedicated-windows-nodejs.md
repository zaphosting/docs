---
id: dedicated-windows-nodejs
title: "Dedicated Server: Node.js auf Windows einrichten"
description: "Entdecke, wie du Node.js für skalierbare, Echtzeit-Anwendungen in einer schlanken Umgebung einrichtest → Jetzt mehr erfahren"
sidebar_label: Node.js installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Node.js ist eine plattformübergreifende, Open-Source JavaScript-Laufzeitumgebung, die JavaScript-Code außerhalb des Browsers ausführt, z.B. auf Servern oder in Kommandozeilen-Tools. Basierend auf der V8-Engine unterstützt es asynchrones, ereignisgesteuertes I/O und ist dadurch super effizient für den Bau skalierbarer Netzwerk- und Echtzeit-Anwendungen.

Das „JavaScript überall“-Paradigma ermöglicht es Entwicklern, eine einzige Sprache sowohl im Backend als auch im Frontend zu nutzen.  

## Vorbereitung

Bevor du **Node.js** einrichtest, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu bringen und alle nötigen Abhängigkeiten zu installieren. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.

### System aktualisieren
Damit dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst immer ein System-Update durchführen. Dafür führst du folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor der Installation die neuesten Sicherheits-Patches und Software-Versionen hat.

### Abhängigkeiten installieren
Sobald das Update durch ist, kannst du mit der Installation der Abhängigkeiten starten. Node.js wird auf deinem System in mehreren Docker-Containern laufen. Dafür muss Docker zuerst installiert sein. Führe dazu diesen Befehl aus:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine ausführliche Schritt-für-Schritt-Anleitung zur Installation und Nutzung von Docker findest du in unserer [Docker](vserver-windows-docker.md) Anleitung.

## Installation

Jetzt, wo alle Voraussetzungen erfüllt und Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Node.js-Anwendung starten.

Um Node.js in einer isolierten Umgebung zu nutzen, musst du zuerst das offizielle Alpine-basierte Image herunterladen. Hol dir mit folgendem Befehl das neueste Node.js 22 Image auf dein System, damit du es für Container-Deployments verwenden kannst:

```
docker pull node:22-alpine
```

Danach kannst du einen Container basierend auf diesem Image starten und eine Shell-Session darin öffnen. Starte den Container mit einer interaktiven Shell. Die Option `--rm` sorgt dafür, dass der Container automatisch gelöscht wird, sobald du ihn verlässt – so bleibt dein Host sauber.

```
docker run -it --rm --entrypoint sh node:22-alpine
```

Im Container kannst du mit `node -v` die installierte Node.js-Version prüfen, die `v22.19.0` anzeigen sollte. Die npm-Version checkst du mit

`npm -v`, die erwartete Ausgabe ist `10.9.3`. Damit ist bestätigt, dass das Image die richtigen Versionen von Node.js und npm bereitstellt und sofort einsatzbereit ist.

## Konfiguration

Nachdem du den Node.js-Container gestartet hast, empfiehlt es sich, wichtige Node.js-Einstellungen direkt in der Umgebung zu konfigurieren. Ein gängiger Weg ist das Setzen von Umgebungsvariablen, z.B.:

```
export NODE_ENV=production
```

Das aktiviert den Produktionsmodus, der Performance-Optimierungen einschaltet und das Logging anpasst. Für Entwicklungszwecke kannst du stattdessen `NODE_ENV=development` setzen, um ausführliche Fehlermeldungen und Debugging-Features zu nutzen.

Ein gut strukturiertes Projektverzeichnis ist wichtig, beginnend mit einer Konfigurationsdatei, die du mit folgendem Befehl erstellst:

```
npm init -y
```

Das erzeugt eine `package.json` Datei, die Abhängigkeiten, Skripte und Metadaten für dein Projekt definiert. Sie ist die zentrale Konfigurationsdatei jeder Node.js-Anwendung.

Abhängigkeiten installierst du mit `npm install <package>`, während Entwicklungsabhängigkeiten mit `npm install <package> --save-dev` hinzugefügt werden. Der `scripts`-Abschnitt in der `package.json` erlaubt dir, eigene Befehle wie `npm start` oder `npm run build` zu definieren, um die Ausführung und Projektverwaltung zu vereinfachen.

Für fortgeschrittene Setups kannst du Node.js mit `.npmrc` oder `.nvmrc` Dateien anpassen, um private Registries, Cache-Optionen oder eine bestimmte Node.js-Version zu erzwingen. So läuft deine Anwendung konsistent in verschiedenen Umgebungen.

## Fazit und weitere Ressourcen

Glückwunsch! Du hast Node.js erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der Server-Konfiguration weiterhelfen können:

- [Node.js.com](https://Node.js.com/) – Offizielle Webseite
- https://Node.js.com/help/ – Node.js Help Center (Dokumentation)

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂