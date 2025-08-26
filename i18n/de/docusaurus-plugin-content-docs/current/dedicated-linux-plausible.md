---
id: dedicated-linux-plausible
title: "Dedicated Server: Plausible unter Linux einrichten"
description: Informationen zur Einrichtung von Plausible auf deinem Linux Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Plausible installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Plausible ist eine schlanke, quelloffene Webanalyse-Plattform, die ohne Cookies arbeitet und Datenschutzvorgaben vollständig einhält. Sie liefert Kennzahlen wie Besucherzahlen, Seitenaufrufe und Besuchsdauer über ein aufgeräumtes, intuitives Dashboard. Dank einfacher Bedienung, hoher Geschwindigkeit und EU-basierter Infrastruktur ist Plausible eine moderne, datenschutzfreundliche Alternative zu Google Analytics.  

Denkst du darüber nach, diesen Dienst selbst zu hosten? Wir führen dich Schritt für Schritt durch Einrichtung und Konfiguration und nennen alles, was du beachten musst.

<InlineVoucher />



## Voraussetzungen

Bevor du **Plausible** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Leistung zu gewährleisten.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung |
| ---------- | ------------ | ---------------------- |
| CPU        | 1 CPU-Kerne | 4 CPU-Kerne          |
| RAM        | 2 GB         | 4 GB                   |
| Speicherplatz | 10 GB     | 25 GB                  |

Die Software erfordert, dass alle notwendigen Abhängigkeiten installiert sind und dass sie auf einem unterstützten Betriebssystem läuft. Stelle vor dem Fortfahren sicher, dass dein Server die folgenden Anforderungen erfüllt:

**Abhängigkeiten:** `Docker`

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Unterstützung für Docker 26+

Stelle sicher, dass alle Abhängigkeiten installiert sind und die korrekte Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme während der Installation von Plausible zu vermeiden.



## Vorbereitung

Bevor du **Plausible** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitungen sorgen für eine stabile Umgebung und helfen, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit der aktuellsten Software und den neuesten Sicherheitsverbesserungen läuft, solltest du zuerst Systemupdates durchführen. Führe dazu den folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor dem Fortfahren die neuesten Sicherheitspatches und Paketversionen hat.

### Abhängigkeiten installieren
Sobald der Aktualisierungsvorgang abgeschlossen ist, kann mit der Installation der Abhängigkeiten fortgefahren werden. 

#### Git
Die Plausible-Daten werden über GitHub bezogen. Dafür muss Git zunächst installiert sein. Führe dazu den folgenden Befehl aus: 
```
sudo apt install git-all
```



#### Docker

Plausible wird auf deinem System mithilfe eines Docker-Containers bereitgestellt und ausgeführt. Dafür muss Docker zunächst installiert werden. Führe dazu den folgenden Befehl aus: 

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine vollständige Anleitung zum Installationsprozess und zur Nutzung von Docker findest du in unserer [Docker](Dedicated Server-linux-docker.md) Anleitung.




## Installation
Nun, da alle Anforderungen erfüllt sind und die notwendigen Vorbereitungen abgeschlossen wurden, kannst du mit der Installation der Plausible-Anwendung fortfahren.

Beginne damit, das Community Edition-Repository zu klonen und die erforderliche Konfigurationsdatei zu erstellen:

```
$ git clone -b v3.0.1 --single-branch https://github.com/plausible/community-edition plausible-ce
```

Als Nächstes erstellst du eine Umgebungsdatei (.env) und definierst die notwendigen Variablen. Die BASE_URL muss auf die tatsächliche Domain zeigen, die bereits einen DNS-Eintrag hat, der auf deinen Server auflöst. Zudem musst du einen zufälligen SECRET_KEY_BASE mit mindestens 64 Bytes erzeugen:
```
touch .env
echo "BASE_URL=https://plausible.example.com" >> .env
echo "SECRET_KEY_BASE=$(openssl rand -base64 48)" >> .env
echo "HTTP_PORT=80" >> .env
echo "HTTPS_PORT=443" >> .env
```

Überprüfe den Dateiinhalt mit `cat .env`, um zu bestätigen, dass die Werte korrekt sind. Die Ausgabe sollte so aussehen:

```
BASE_URL=https://plausible.example.com
SECRET_KEY_BASE=As0fZsJlUpuFYSthRjT5Yflg/NlxkFKPRro72xMLXF8yInZ60s6xGGXYVqml+XN1
HTTP_PORT=80
HTTPS_PORT=443
```

Diese Standardports ermöglichen es Let’s Encrypt, automatisch TLS-Zertifikate auszustellen. Wenn du planst, Plausible hinter einem Reverse Proxy zu betreiben, kannst du diese Werte anpassen. Zusätzlich erstellst du eine `compose.override.yml`, um die korrekten Ports für den Plausible-Container freizugeben:

```
cat > compose.override.yml << EOF
services:
  plausible:
    ports:
      - 80:80
      - 443:443
EOF 
```

Zum Schluss startest du die benötigten Dienste mit Docker Compose:

```
docker compose up -d
```

Sobald die Container laufen, öffne deinen Browser unter der in BASE_URL angegebenen Domain und erstelle das erste Benutzerkonto.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)



## Konfiguration

Plausible kann in die Google Search Console integriert werden, um deine Analysen mit Suchanfragedaten anzureichern. So siehst du, welche Keywords den Traffic auf deine Seite bringen, und erhältst tiefere Einblicke in das Besucherverhalten.

Wenn bereits ein Google-Cloud-Konto und ein OAuth-Client eingerichtet sind, musst du nur deine Zugangsdaten (`GOOGLE_CLIENT_ID` und `GOOGLE_CLIENT_SECRET`) in die `.env`-Datei eintragen. Nach dem Speichern startest du deine Docker-Dienste mit `docker compose up -d` neu. Im Plausible-Dashboard gehst du zu *Site Settings > Integrations*, um die Verbindung abzuschließen und den Authentifizierungsanweisungen zu folgen.

Für alle, die noch keinen OAuth-Client haben oder mit dem Prozess nicht vertraut sind, bietet das offizielle Plausible-Wiki eine ausführliche Schritt-für-Schritt-Anleitung. Es erklärt, wie man ein Projekt in Google Cloud erstellt, die benötigten APIs aktiviert, einen OAuth-Client konfiguriert und die generierten Zugangsdaten zu Plausible hinzufügt: [Plausible Wiki: Google Integration](https://github.com/plausible/community-edition/wiki/google-integration).

Wenn du die Google Search Console nutzt, kannst du die Google-Integration konfigurieren, um Daten aus der Search Console zu Suchbegriffen zu übernehmen, was wirklich ziemlich praktisch ist.

Wenn du bereits ein Google-Cloud-Konto mit einem OAuth-Client hast, kannst du einfach deine `GOOGLE_CLIENT_ID` und `GOOGLE_CLIENT_SECRET` in die `.env`-Datei einfügen, deinen Docker-Dienst mit `docker compose up -d` neu starten und den Anweisungen im Bildschirm *Site Settings > Integrations* von Plausible folgen.



## Abschluss und weitere Ressourcen

Glückwunsch! Du hast Plausible jetzt erfolgreich auf deinem VPS installiert und konfiguriert. Wir empfehlen außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir zusätzliche Hilfe und Orientierung während deiner Serverkonfiguration bieten können

- [plausible.io](https://plausible.io/) - Offizielle Website
- [github.com/plausible/analytics](https://github.com/plausible/analytics) - Ankündigungen, Diskussionen, Issue-Meldung

Hast du spezielle Fragen, die hier nicht abgedeckt sind? Für weitere Fragen oder Unterstützung wende dich bitte an unser Support‑Team, das täglich für dich da ist! 🙂



<InlineVoucher />