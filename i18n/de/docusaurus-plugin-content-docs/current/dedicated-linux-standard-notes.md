---
id: dedicated-linux-standard-notes
title: "Dedicated Server: Standard Notes auf Linux einrichten"
description: "Entdecke, wie du deine Notizen sicher synchronisierst und schützt – mit Standard Notes zum Selbsthosten → Jetzt mehr erfahren"
sidebar_label: Standard Notes installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Standard Notes ist eine Open-Source-Notiz-App, die deine Daten mit geprüfter Ende-zu-Ende-Verschlüsselung schützt. Nur du hast die Kontrolle über die Entschlüsselungsschlüssel. Sie synchronisiert deine verschlüsselten Notizen und Dateien nahtlos über unbegrenzt viele Geräte, hält sie offline verfügbar und schützt deinen Content aktiv vor externem Zugriff.

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

Willst du diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration – inklusive allem, was du beachten musst.

<InlineVoucher />



## Voraussetzungen

Bevor du **Standard Notes** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung   |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 vCPU Kern  | 4 vCPU Kerne             |
| RAM        | 2 GB         | 4 GB                     |
| Speicher   | 5 GB         | 25 GB                    |

Die Software benötigt alle notwendigen Abhängigkeiten und muss auf einem unterstützten Betriebssystem laufen. Vergewissere dich, dass dein Server folgende Anforderungen erfüllt, bevor du mit der Installation startest:

**Abhängigkeiten:** `Docker (Engine 26+ und Compose)`

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Docker 26+ Support

Stelle sicher, dass alle Abhängigkeiten installiert sind und das richtige Betriebssystem verwendet wird, um Kompatibilitätsprobleme bei der Installation von Standard Notes zu vermeiden.



## Vorbereitung

Bevor du **Standard Notes** einrichtest, solltest du dein System vorbereiten. Das bedeutet, dein Betriebssystem auf den neuesten Stand zu bringen und alle erforderlichen Abhängigkeiten zu installieren. So sorgst du für eine stabile Umgebung und vermeidest Probleme während oder nach der Installation.


### System aktualisieren
Damit dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst ein Update durchführen. Führe dazu folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor der Installation die neuesten Sicherheitspatches und Softwareversionen hat.

### Abhängigkeiten installieren
Nach dem Update kannst du mit der Installation der Abhängigkeiten starten. Standard Notes wird über mehrere Docker-Container auf deinem Server laufen. Docker muss also zuerst installiert werden. Führe dazu folgende Befehle aus:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine ausführliche Anleitung zur Docker-Installation und Nutzung findest du in unserer [Docker](vserver-linux-docker.md) Anleitung.




## Installation
Wenn alle Voraussetzungen erfüllt und die Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Standard Notes starten.



Erstelle zuerst einen Ordner, der alle Konfigurations- und Setup-Dateien enthält. Dieser Ordner wird dein Arbeitsverzeichnis für die Installation.

```
mkdir standardnotes
cd standardnotes
```

Erstelle nun eine `.env`-Datei in deinem Arbeitsverzeichnis und fülle sie mit den Standardwerten aus der Beispielkonfiguration des Projekts:

```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

Diese Datei enthält nur die minimal notwendigen Variablen für eine funktionierende Installation. Die vollständige Liste der aktuell genutzten Variablen findest du hier: [docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

Öffne die `.env`-Datei und stelle sicher, dass alle Schlüssel im KEYS-Bereich korrekt gesetzt sind. Generiere für jede benötigte Umgebungsvariable zufällige Werte mit:

```
openssl rand -hex 32
```

Füge diese Werte in deine `.env`-Datei ein. Standard Notes benötigt außerdem ein Bootstrap-Skript für LocalStack. Lade es in dein Arbeitsverzeichnis und mache es ausführbar:

```shell
curl https://raw.githubusercontent.com/standardnotes/server/main/docker/localstack_bootstrap.sh > localstack_bootstrap.sh
chmod +x localstack_bootstrap.sh
```

Lade die offizielle Beispielkonfiguration herunter und speichere sie als `docker-compose.yml` in deinem Arbeitsordner. Diese Datei definiert alle Container-Services, die Standard Notes benötigt.

```
curl https://raw.githubusercontent.com/standardnotes/server/main/docker-compose.example.yml > docker-compose.yml
```

Wenn alles bereit ist, lade die neuesten Images herunter und starte die Services im Hintergrund:

```
docker compose pull && docker compose up -d
```



## Konfiguration

Die Standardkonfiguration in der bereitgestellten `docker-compose.yml` kannst du an deine Bedürfnisse anpassen. Ein wichtiger Punkt ist der `server`-Service, wo du die Port-Zuordnungen in der `ports`-Eigenschaft ändern kannst. So legst du fest, über welche Host-Ports die Anwendung erreichbar sein soll – das hilft, Konflikte mit anderen Diensten zu vermeiden oder dein Netzwerksetup anzupassen.

Die Absicherung der Datenbank ist ein weiterer wichtiger Schritt. Ersetze die Standardpasswörter durch starke, zufällig generierte Strings. Ein sicheres Passwort kannst du so erstellen:

```
openssl rand -hex 12  
```

Füge den generierten Wert als `DB_PASSWORD` in die `.env`-Datei ein. Der gleiche Wert muss auch für `MYSQL_ROOT_PASSWORD` und `MYSQL_PASSWORD` in der `docker-compose.yml` gesetzt werden, damit die Container synchron bleiben.

Diese Anpassungen sorgen dafür, dass deine Installation nicht nur läuft, sondern auch sicher und auf deine Umgebung zugeschnitten ist.





## Verbindung zum Sync-Server

Um dein Konto in Standard Notes einzurichten, klicke unten rechts in der App auf das Avatar-Symbol. Wähle im erscheinenden Menü „Konto erstellen“, um ein neues Benutzerprofil anzulegen. Gib eine gültige E-Mail-Adresse und ein sicheres Passwort ein.

Bevor du den Vorgang abschließt, öffne den Bereich „Erweiterte Optionen“. Unter „Sync Server“ wähle die Option „Benutzerdefiniert“ und gib die IP-Adresse und den Port deines eigenen Servers im Format IP:Port ein. So werden deine Notizen nicht über den Standard-Standard Notes-Service synchronisiert, sondern über deinen selbst gehosteten Server.

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)





## Fazit und weitere Ressourcen

Glückwunsch! Du hast Standard Notes erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der Serverkonfiguration weiterhelfen können:

- [Standardnotes.com](https://standardnotes.com/) – Offizielle Webseite
- [Standardnotes.com/help](https://standardnotes.com/help) – Standard Notes Hilfe-Center (Dokumentation)

Du hast spezielle Fragen, die hier nicht beantwortet werden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂