---
id: vserver-linux-standard-notes
title: "VPS: Standard Notes unter Linux einrichten"
description: Informationen zur Einrichtung von Standard Notes auf deinem Linux VPS von ZAP-Hosting – ZAP-Hosting.com Dokumentation
sidebar_label: Standard Notes installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Standard Notes ist eine Open‑Source‑Notizen‑App, die deine Daten mit geprüfter Ende‑zu‑Ende‑Verschlüsselung schützt. Nur du kontrollierst die Entschlüsselungsschlüssel. Die App synchronisiert deine verschlüsselten Notizen und Dateien nahtlos über unbegrenzt viele Geräte, hält sie offline verfügbar und schützt deine Inhalte aktiv vor externem Zugriff. 

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

Du überlegst, diesen Dienst selbst zu hosten? Wir führen dich durch jeden Schritt der Einrichtung und Konfiguration und nennen alles, was du beachten musst.

<InlineVoucher />



## Voraussetzungen

Bevor du **Standard Notes** installierst, stelle sicher, dass deine Hosting‑Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Leistung zu gewährleisten.

| Hardware   | Minimum      | ZAP‑Hosting Empfehlung |
| ---------- | ------------ | ---------------------- |
| CPU        | 1 vCPU‑Kerne | 4 vCPU‑Kerne           |
| RAM        | 2 GB         | 4 GB                   |
| Speicherplatz | 5 GB     | 25 GB                  |

Die Software setzt voraus, dass alle nötigen Abhängigkeiten installiert sind und ein unterstütztes Betriebssystem verwendet wird. Stelle vor dem Fortfahren sicher, dass dein Server die folgenden Anforderungen erfüllt:

**Abhängigkeiten:** `Docker (Engine 26+ und Compose)` 

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Unterstützung für Docker 26+

Stelle sicher, dass alle Abhängigkeiten installiert sind und die richtige Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme während der Installation von Standard Notes zu vermeiden.



## Vorbereitung

Bevor du **Standard Notes** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitungen sorgen für eine stabile Umgebung und helfen, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit aktueller Software und den neuesten Sicherheitsverbesserungen läuft, solltest du zuerst Systemupdates durchführen. Führe dazu den folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor dem Fortfahren die neuesten Sicherheitspatches und Softwareversionen hat.

### Abhängigkeiten installieren
Sobald der Aktualisierungsvorgang abgeschlossen ist, kann mit der Installation der Abhängigkeiten fortgefahren werden. Standard Notes wird auf deinem System mithilfe mehrerer Docker‑Container bereitgestellt und ausgeführt. Dafür muss Docker zunächst installiert werden. Führe dazu den folgenden Befehl aus: 

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine vollständige Anleitung zum Installationsprozess und zur Nutzung von Docker findest du in unserem [Docker](vserver-linux-docker.md) Leitfaden.




## Installation
Nun, da alle Anforderungen erfüllt sind und die notwendigen Vorbereitungen abgeschlossen wurden, kannst du mit der Installation der Standard‑Notes‑Anwendung fortfahren.



Lege zunächst einen Ordner an, der alle Konfigurations‑ und Setupdateien enthält. Dieser Ordner dient als Arbeitsverzeichnis für die Installation.

```
mkdir standardnotes
cd standardnotes
```

Erstelle als Nächstes eine `.env`‑Datei in deinem Arbeitsverzeichnis und fülle sie mit Standardwerten aus der Beispielkonfiguration des Projekts:
```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

Diese Datei enthält nur die minimal erforderlichen Variablen für ein funktionierendes Setup. Die vollständige Liste der aktuell verwendeten Variablen findest du hier: [docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

Öffne die `.env`‑Datei und stelle sicher, dass alle Schlüssel im Abschnitt KEYS korrekt gesetzt sind. Erzeuge zufällige Werte für jede erforderliche Umgebungsvariable mit:

```
openssl rand -hex 32
```

Füge diese Werte in deine `.env`‑Datei ein. Standard Notes benötigt ein Bootstrap‑Skript für LocalStack. Lade es in dein Arbeitsverzeichnis und mache es ausführbar:

```shell
curl https://raw.githubusercontent.com/standardnotes/server/main/docker/localstack_bootstrap.sh > localstack_bootstrap.sh
chmod +x localstack_bootstrap.sh
```

Lade die offizielle Beispielkonfiguration herunter und speichere sie als `docker-compose.yml` in deinem Arbeitsordner. Diese Datei definiert alle Container‑Dienste, die für Standard Notes benötigt werden.

```
curl https://raw.githubusercontent.com/standardnotes/server/main/docker-compose.example.yml > docker-compose.yml
```

Wenn alles bereit ist, ziehe die neuesten Images und starte die Dienste im Hintergrundmodus:

```
docker compose pull && docker compose up -d
```



## Konfiguration

Die Standardkonfiguration in der bereitgestellten Datei `docker-compose.yml` kann an deine Anforderungen angepasst werden. Ein zentraler Bereich ist der Dienst `server`, bei dem du die Port‑Zuordnungen in der Eigenschaft `ports` anpassen kannst. So legst du fest, über welche Host‑Ports die Anwendung erreichbar ist, vermeidest Konflikte mit anderen Diensten oder passt die Zuordnung an dein bevorzugtes Netzwerk‑Setup an.  

Ein weiterer wichtiger Schritt ist die Absicherung der Datenbank. Ersetze Standardpasswörter durch starke, zufällig generierte Zeichenfolgen. Du kannst ein sicheres Passwort erzeugen mit:  

```
openssl rand -hex 12  
```

Trage den generierten Wert in der `.env`‑Datei als `DB_PASSWORD` ein. Derselbe Wert muss außerdem in der `docker-compose.yml` für `MYSQL_ROOT_PASSWORD` und `MYSQL_PASSWORD` gesetzt werden, damit die Container konsistent bleiben.  

Diese Konfigurationsänderungen stellen sicher, dass deine Installation nicht nur funktioniert, sondern auch abgesichert und auf deine Umgebung zugeschnitten ist.





## Verbindung zum Sync‑Server

Um dein Konto in Standard Notes einzurichten, klicke in der App unten rechts auf das Avatar‑Symbol. Wähle im erscheinenden Menü „Create Account“, um mit der Erstellung eines neuen Benutzerprofils zu beginnen. Gib eine gültige E‑Mail‑Adresse sowie ein sicheres Passwort ein.  

Bevor du den Vorgang abschließt, öffne den Bereich „Advanced Options“. Wähle unter „Sync Server“ die Option „Custom“ und gib die IP‑Adresse und den Port deines eigenen Servers im Format IP:Port ein. Dadurch werden deine Notizen nicht über den Standard‑Dienst von Standard Notes, sondern mit deinem selbst gehosteten Server synchronisiert.

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)





## Abschluss und weitere Ressourcen

Glückwunsch! Du hast Standard Notes jetzt erfolgreich auf deinem VPS installiert und konfiguriert. Wir empfehlen außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir zusätzliche Hilfe und Orientierung während deiner Serverkonfiguration bieten können

- [Standardnotes.com](https://standardnotes.com/) – Offizielle Website
- [Standardnotes.com/help](https://standardnotes.com/help) – Standard Notes Help Center (Dokumentation)

Hast du spezielle Fragen, die hier nicht abgedeckt sind? Für weitere Fragen oder Unterstützung wende dich bitte an unser Support‑Team, das täglich für dich da ist! 🙂