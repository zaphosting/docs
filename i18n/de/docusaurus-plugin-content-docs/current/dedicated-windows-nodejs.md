---
id: dedicated-windows-nodejs
title: "Dedicated Server: Setup Node.js on Windows"
description: "Informationen zur Einrichtung von Node.js auf deinem Windows Dedicated Server von ZAP-Hosting – ZAP-Hosting.com Dokumentation"
sidebar_label: Installiere Node.js
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Node.js ist eine plattformübergreifende, quelloffene JavaScript-Laufzeitumgebung, die JavaScript-Code außerhalb des Browsers ausführt, etwa auf Servern oder in Kommandozeilen-Tools. Aufgebaut auf der V8-Engine unterstützt sie asynchrones, ereignisgesteuertes I/O und eignet sich dadurch sehr gut für skalierbare Netzwerkanwendungen und Echtzeitanwendungen.

Das Paradigma „JavaScript überall“ ermöglicht es Entwicklerinnen und Entwicklern, sowohl im Backend als auch im Frontend dieselbe Sprache zu verwenden.  



<InlineVoucher />



## Vorbereitung

Bevor du **Node.js** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitungen sorgen für eine stabile Umgebung und helfen, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit aktueller Software und den neuesten Sicherheitsverbesserungen läuft, solltest du zuerst Systemupdates durchführen. Führe dazu den folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor dem Fortfahren die neuesten Sicherheitspatches und Softwareversionen hat.

### Abhängigkeiten installieren
Sobald der Aktualisierungsvorgang abgeschlossen ist, kann mit der Installation der Abhängigkeiten fortgefahren werden. Node.js wird auf deinem System mithilfe mehrerer Docker-Container bereitgestellt und ausgeführt. Dafür muss Docker zunächst installiert werden. Führe dazu die folgenden Befehle aus: 

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine vollständige Erklärung zum Installationsprozess und zur Nutzung von Docker findest du in unserer [Docker](dedicated-windows-docker.md) Anleitung.



## Installation

Nachdem alle Anforderungen erfüllt sind und die notwendigen Vorbereitungen abgeschlossen wurden, kannst du mit der Installation der Node.js-Anwendung fortfahren.


Um Node.js in einer isolierten Umgebung zu verwenden, musst du zunächst das offizielle, auf Alpine basierende Image herunterladen. Führe den folgenden Befehl aus, um das neueste Node.js‑22‑Image auf dein System zu ziehen und für Container-Bereitstellungen verfügbar zu machen:

```
docker pull node:22-alpine
```

Als Nächstes startest du einen Container auf Basis dieses Images und öffnest darin eine Shell-Sitzung. Verwende dazu folgenden Befehl, um den Container mit einer interaktiven Shell zu starten. Die Option `--rm` sorgt dafür, dass der Container beim Beenden automatisch entfernt wird und deine Host-Umgebung sauber bleibt.  

```
docker run -it --rm --entrypoint sh node:22-alpine
```

Im Container überprüfst du die installierte Node.js-Version mit `node -v`; sie sollte `v22.19.0` anzeigen. Die npm-Version bestätigst du mit

`npm -v`; die erwartete Ausgabe ist `10.9.3`. Das bestätigt, dass das Image die korrekten Versionen von Node.js und npm bereitstellt und sofort einsatzbereit ist.



## Konfiguration

Nach dem Starten des Node.js-Containers empfiehlt es sich, wichtige Node.js-Einstellungen innerhalb der Umgebung zu konfigurieren. Ein üblicher Ansatz ist das Setzen von Umgebungsvariablen, zum Beispiel:

```
export NODE_ENV=production
```

Dies aktiviert den Produktionsmodus, schaltet Leistungsoptimierungen frei und passt das Logging-Verhalten an. Für Entwicklungszwecke kannst du stattdessen `NODE_ENV=development` setzen, um ausführlichere Fehlermeldungen und Debugging-Funktionen zu erhalten.  

Eine gut strukturierte Projektordnerstruktur ist wichtig. Starte mit einer Konfigurationsdatei, die du über folgenden Befehl erzeugst:

```
npm init -y
```

Dadurch wird eine `package.json` erstellt, die Abhängigkeiten, Skripte und Metadaten für dein Projekt definiert. Sie ist die zentrale Konfigurationsdatei jeder Node.js-Anwendung.  

Abhängigkeiten installierst du mit `npm install <package>`, Entwicklungsabhängigkeiten mit `npm install <package> --save-dev`. Im Abschnitt `scripts` der `package.json` kannst du benutzerdefinierte Kommandos wie `npm start` oder `npm run build` definieren, um Ausführung und Projektverwaltung zu vereinfachen.  

Für fortgeschrittene Setups lässt sich Node.js über Dateien wie `.npmrc` oder `.nvmrc` anpassen, etwa für private Registries, Caching-Optionen oder das Erzwingen einer bestimmten Node.js-Version. So laufen Anwendungen konsistent über verschiedene Umgebungen hinweg.



## Abschluss und weitere Ressourcen

Glückwunsch! Du hast Node.js jetzt erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir zusätzliche Hilfe und Orientierung während deiner Serverkonfiguration bieten können

- [Node.js.com](https://Node.js.com/) – Offizielle Website
- https://Node.js.com/help/ – Node.js Help Center (Dokumentation)

Hast du spezielle Fragen, die hier nicht abgedeckt sind? Für weitere Fragen oder Unterstützung wende dich bitte an unser Support‑Team, das täglich für dich da ist! 🙂