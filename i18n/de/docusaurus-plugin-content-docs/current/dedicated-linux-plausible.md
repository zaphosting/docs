---
id: dedicated-linux-plausible
title: "Dedicated Server: Plausible auf OS einrichten"
description: "Entdecke, wie du eine datenschutzfreundliche Web-Analytics-Plattform einrichtest, die dir wichtige Insights schnell und einfach liefert → Jetzt mehr erfahren"
sidebar_label: Plausible installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Plausible ist eine leichte, Open-Source Web-Analytics-Plattform, die ohne Cookies auskommt und komplett datenschutzkonform ist. Sie liefert wichtige Kennzahlen wie Besucherzahlen, Seitenaufrufe und Besuchsdauer über ein sauberes, intuitives Dashboard. Mit einfacher Bedienung, schneller Performance und einer Infrastruktur in der EU ist Plausible eine moderne und datenschutzbewusste Alternative zu Google Analytics.

Willst du diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.



## Voraussetzungen

Bevor du **Plausible** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum     | ZAP-Hosting Empfehlung    |
| ---------- | ----------- | ------------------------- |
| CPU        | 1 CPU-Kern  | 4 CPU-Kerne               |
| RAM        | 2 GB        | 4 GB                      |
| Festplattenspeicher | 10 GB       | 25 GB                     |

Die Software benötigt, dass alle nötigen Abhängigkeiten installiert sind und auf einem unterstützten Betriebssystem läuft. Vergewissere dich, dass dein Server folgende Anforderungen erfüllt, bevor du mit der Installation startest:

**Abhängigkeiten:** `Docker`

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Docker 26+

Stelle sicher, dass alle Abhängigkeiten installiert sind und das richtige Betriebssystem verwendet wird, um Kompatibilitätsprobleme bei der Installation von Plausible zu vermeiden.



## Vorbereitung

Bevor du **Plausible** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Um sicherzugehen, dass dein System mit der aktuellsten Software und den neuesten Sicherheitsupdates läuft, solltest du zuerst ein Update durchführen. Führe dazu folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor der Installation die neuesten Sicherheitspatches und Softwareversionen hat.

### Abhängigkeiten installieren
Nachdem das Update abgeschlossen ist, kannst du mit der Installation der Abhängigkeiten weitermachen.

#### Git
Die Plausible-Daten werden über GitHub heruntergeladen. Dafür muss Git installiert sein. Führe diesen Befehl aus:
```
sudo apt install git-all
```

#### Docker

Plausible wird als Docker-Container auf deinem Server laufen. Docker muss also zuerst installiert werden. Führe dazu folgende Befehle aus:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine ausführliche Anleitung zur Installation und Nutzung von Docker findest du in unserer [Docker](vserver-linux-docker.md) Anleitung.




## Installation
Jetzt, wo alle Voraussetzungen erfüllt und die Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Plausible starten.

Klon das Community Edition Repository und erstelle die nötige Konfigurationsdatei:

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

Erstelle als Nächstes eine Umgebungsdatei (.env) und definiere die wichtigsten Variablen. Die BASE_URL muss auf die tatsächliche Domain zeigen, die bereits einen DNS-Eintrag hat, der auf deinen Server zeigt. Außerdem musst du einen zufälligen SECRET_KEY_BASE mit mindestens 64 Bytes generieren:
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

Starte abschließend die benötigten Services mit Docker Compose:

```
docker compose up -d
```

Sobald die Container laufen, öffne deinen Browser und rufe die Domain auf, die du in BASE_URL angegeben hast, um den ersten Benutzeraccount anzulegen.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)



## Konfiguration

Plausible lässt sich mit der Google Search Console verbinden, um deine Analytics mit Suchanfragen-Daten anzureichern. So siehst du, welche Keywords Traffic auf deine Seite bringen und bekommst tiefere Einblicke ins Besucherverhalten.

Wenn du bereits ein Google Cloud Konto und einen OAuth-Client eingerichtet hast, musst du nur noch deine Zugangsdaten (`GOOGLE_CLIENT_ID` und `GOOGLE_CLIENT_SECRET`) in die `.env` Datei eintragen. Nach dem Speichern startest du deine Docker-Services mit `docker compose up -d` neu. Im Plausible Dashboard findest du unter *Site Settings > Integrations* die Möglichkeit, die Verbindung abzuschließen und der Authentifizierung zu folgen.

Falls du noch keinen OAuth-Client hast oder dir der Prozess unbekannt ist, bietet das offizielle Plausible Wiki eine ausführliche Schritt-für-Schritt-Anleitung. Dort wird erklärt, wie du ein Projekt in Google Cloud anlegst, die nötigen APIs aktivierst, einen OAuth-Client konfigurierst und die generierten Zugangsdaten in Plausible einfügst: [Plausible Wiki: Google Integration](https://github.com/Plausible/community-edition/wiki/google-integration).

Wenn du Google Search Console nutzt, kannst du die Google Integration so konfigurieren, dass du Daten zu Suchbegriffen direkt aus der Search Console abrufen kannst – echt praktisch.

Wenn du schon ein Google Cloud Konto mit OAuth-Client hast, kannst du einfach deine `GOOGLE_CLIENT_ID` und `GOOGLE_CLIENT_SECRET` in die `.env` Datei einfügen, den Docker-Service mit `docker compose up -d` neu starten und den Anweisungen im Plausible Dashboard unter Site Settings > Integrations folgen.



## Fazit und weitere Ressourcen

Glückwunsch! Du hast Plausible erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der weiteren Server-Konfiguration helfen können:

- [Plausible.io](https://Plausible.io/) - Offizielle Webseite
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) - Ankündigungen, Diskussionen, Fehlerberichte

Du hast noch spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂