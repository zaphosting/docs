---
id: vserver-linux-plausible
title: "VPS: Plausible auf OS einrichten"
description: "Entdecke, wie du eine datenschutzfreundliche Web-Analytics-Plattform für klare Insights und schnelle Performance einrichtest → Jetzt mehr erfahren"
sidebar_label: Plausible installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Plausible ist eine leichte, Open-Source Web-Analytics-Plattform, die ohne Cookies auskommt und vollständig die Datenschutzbestimmungen einhält. Sie liefert wichtige Kennzahlen wie Besucherzahlen, Seitenaufrufe und Besuchsdauer über ein sauberes, intuitives Dashboard. Mit einfacher Bedienung, schneller Performance und einer Infrastruktur in der EU ist Plausible eine moderne und datenschutzbewusste Alternative zu Google Analytics.

Du willst diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

<InlineVoucher />



## Voraussetzungen

Bevor du **Plausible** installierst, stelle sicher, dass deine Hosting-Umgebung folgende Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung    |
| ---------- | ------------ | ------------------------- |
| CPU        | 1 vCPU Kern  | 4 vCPU Kerne              |
| RAM        | 2 GB         | 4 GB                      |
| Festplattenspeicher | 10 GB        | 25 GB                     |

Die Software benötigt, dass alle notwendigen Abhängigkeiten installiert sind und auf einem unterstützten Betriebssystem läuft. Vergewissere dich, dass dein Server folgende Anforderungen erfüllt, bevor du mit der Installation startest:

**Abhängigkeiten:** `Docker`

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Docker 26+ Unterstützung

Stelle sicher, dass alle Abhängigkeiten installiert sind und das richtige Betriebssystem verwendet wird, um Kompatibilitätsprobleme bei der Installation von Plausible zu vermeiden.



## Vorbereitung

Bevor du **Plausible** einrichtest, musst du dein System vorbereiten. Das beinhaltet das Aktualisieren deines Betriebssystems auf die neueste Version und die Installation aller benötigten Abhängigkeiten. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Um sicherzustellen, dass dein System mit der aktuellsten Software und den neuesten Sicherheitsupdates läuft, solltest du zuerst ein Systemupdate durchführen. Führe dazu folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So ist dein System mit den neuesten Sicherheitspatches und Softwareversionen ausgestattet, bevor es weitergeht.

### Abhängigkeiten installieren
Nachdem das Update abgeschlossen ist, kannst du mit der Installation der Abhängigkeiten fortfahren.

#### Git
Die Plausible-Daten werden über GitHub heruntergeladen. Dafür muss Git zuerst installiert sein. Führe dazu folgenden Befehl aus:
```
sudo apt install git-all
```

#### Docker

Plausible wird auf deinem System in einem Docker-Container ausgeführt. Dafür muss Docker installiert sein. Führe dazu folgende Befehle aus:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine ausführliche Anleitung zur Installation und Nutzung von Docker findest du in unserer [Docker](vserver-linux-docker.md) Anleitung.




## Installation
Nachdem alle Voraussetzungen erfüllt und die Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Plausible-Anwendung starten.

Klon das Community Edition Repository und erstelle die nötige Konfigurationsdatei:

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

Erstelle anschließend eine Umgebungsdatei (.env) und definiere die wichtigsten Variablen. Die BASE_URL muss auf die tatsächliche Domain zeigen, die bereits einen DNS-Eintrag hat, der auf deinen Server zeigt. Außerdem musst du einen zufälligen SECRET_KEY_BASE mit mindestens 64 Bytes generieren:
```
touch .env
echo "BASE_URL=https://Plausible.example.com" >> .env
echo "SECRET_KEY_BASE=$(openssl rand -base64 48)" >> .env
echo "HTTP_PORT=80" >> .env
echo "HTTPS_PORT=443" >> .env
```

Überprüfe den Inhalt der Datei mit `cat .env`, um sicherzugehen, dass die Werte korrekt sind. Die Ausgabe sollte so aussehen:

```
BASE_URL=https://Plausible.example.com
SECRET_KEY_BASE=As0fZsJlUpuFYSthRjT5Yflg/NlxkFKPRro72xMLXF8yInZ60s6xGGXYVqml+XN1
HTTP_PORT=80
HTTPS_PORT=443
```

Diese Standard-Ports erlauben es Let’s Encrypt, automatisch TLS-Zertifikate auszustellen. Wenn du Plausible hinter einem Reverse Proxy betreiben möchtest, kannst du diese Werte anpassen. Erstelle außerdem eine `compose.override.yml`, um die richtigen Ports für den Plausible-Container freizugeben:

```
cat > compose.override.yml << EOF
services:
  Plausible:
    ports:
      - 80:80
      - 443:443
EOF 
```

Starte abschließend die benötigten Dienste mit Docker Compose:

```
docker compose up -d
```

Sobald die Container laufen, öffne deinen Browser und rufe die Domain auf, die du in BASE_URL angegeben hast, um den ersten Benutzeraccount anzulegen.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)



## Konfiguration

Plausible lässt sich mit der Google Search Console verbinden, um deine Analytics mit Suchanfragen-Daten anzureichern. So siehst du, welche Keywords Traffic auf deine Seite bringen und bekommst tiefere Einblicke ins Besucherverhalten.

Wenn du bereits ein Google Cloud Konto und einen OAuth-Client eingerichtet hast, musst du nur noch deine Zugangsdaten (`GOOGLE_CLIENT_ID` und `GOOGLE_CLIENT_SECRET`) in die `.env` Datei eintragen. Nach dem Speichern startest du deine Docker-Dienste mit `docker compose up -d` neu. Im Plausible Dashboard findest du unter *Site Settings > Integrations* die Möglichkeit, die Verbindung abzuschließen und den Authentifizierungsprozess zu durchlaufen.

Falls du noch keinen OAuth-Client hast oder dir der Prozess unbekannt ist, bietet das offizielle Plausible Wiki eine ausführliche Schritt-für-Schritt-Anleitung. Dort wird erklärt, wie du ein Projekt in Google Cloud anlegst, die nötigen APIs aktivierst, einen OAuth-Client konfigurierst und die generierten Zugangsdaten in Plausible einfügst: [Plausible Wiki: Google Integration](https://github.com/Plausible/community-edition/wiki/google-integration).

Wenn du Google Search Console nutzt, kannst du die Google Integration konfigurieren, um Daten zu Suchbegriffen direkt aus der Search Console zu ziehen – echt praktisch.

Hast du schon ein Google Cloud Konto mit OAuth-Client, kannst du einfach deine `GOOGLE_CLIENT_ID` und `GOOGLE_CLIENT_SECRET` in die `.env` Datei einfügen, den Docker-Service mit `docker compose up -d` neu starten und den Anweisungen im Plausible Dashboard unter Site Settings > Integrations folgen.



## Fazit und weitere Ressourcen

Glückwunsch! Du hast Plausible erfolgreich auf deinem VPS installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf folgende Ressourcen zu werfen, die dir bei der weiteren Server-Konfiguration helfen können:

- [Plausible.io](https://Plausible.io/) - Offizielle Webseite
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) - Ankündigungen, Diskussionen, Fehlerberichte

Du hast spezielle Fragen, die hier nicht beantwortet werden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂



<InlineVoucher />