---
id: vserver-linux-ts6
title: "VPS: Teamspeak 6 Server auf deinem Linux VPS einrichten"
description: "Entdecke, wie du den TeamSpeak 6 Server einrichtest und optimierst für zuverlässiges Hosting und Performance → Jetzt mehr erfahren"
sidebar_label: Teamspeak 6 Server installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Sommer 2025 hat TeamSpeak die **Beta-Version** des **TeamSpeak 6 Servers** veröffentlicht. Jetzt kannst du die nächste Generation von TeamSpeak hautnah erleben!

Du überlegst, den Service selbst zu hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Voraussetzungen

Bevor du den **Teamspeak 6 Server** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung    |
| ---------- | ------------ | ------------------------- |
| CPU        | 1 vCPU Kern  | 4 vCPU Kerne              |
| RAM        | 1 GB         | 4 GB                      |
| Speicher   | 1 GB         | 25 GB                     |



## Vorbereitung

Bevor du den **TeamSpeak 6 Server** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren und alle benötigten Abhängigkeiten zu installieren. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit der aktuellsten Software und den neuesten Sicherheitsupdates läuft, solltest du zuerst immer ein System-Update durchführen. Dafür führst du folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor der weiteren Installation die neuesten Sicherheitspatches und Softwareversionen hat.

### Abhängigkeiten installieren
Nachdem das Update abgeschlossen ist, kannst du mit der Installation der Abhängigkeiten weitermachen. Für eine schnelle, einfache und empfohlene Installation empfehlen wir Docker zu nutzen. Dafür musst du die Docker Engine installieren:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Installation
Jetzt, wo alle Voraussetzungen erfüllt und die Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Teamspeak 6 Server Anwendung starten.

Der nächste Schritt ist, die Docker Compose Datei `docker-compose.yml` für den TeamSpeak 6 Server zu erstellen. Du kannst jedes Verzeichnis wählen, in diesem Beispiel wird die Datei unter `/opt/containers/ts6/` erstellt. Dafür wird die offizielle TeamSpeak Compose Datei verwendet:

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # Voice Port
      - "30033:30033/tcp" # File Transfer
      # - "10080:10080/tcp" # Web Query
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

Wechsle in das Verzeichnis, in dem die Datei erstellt werden soll, und erstelle die Datei. Nutze dafür den Befehl `nano docker-compose.yml` und füge den Inhalt dort ein.

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


Um den Docker Container und den TeamSpeak 6 Server zu starten, führe folgenden Docker Compose Befehl aus:
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

Jetzt startet der Docker Container für den TeamSpeak 6 Server. Standardmäßig läuft er noch nicht dauerhaft. Beim ersten Start siehst du **wichtige Infos** zum **Server Query Admin Account** und dem **Privilege Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Speichere diese Infos unbedingt sicher ab, da sie bei späteren Starts nicht nochmal angezeigt werden. Danach stoppst du den Container wieder mit `CTRL+C`.



## Konfiguration

Du kannst weitere Einstellungen für den TeamSpeak 6 Server über **Environment-Variablen** in der Docker Compose Datei anpassen. So kannst du den Server ganz nach deinen Wünschen konfigurieren. Eine vollständige Liste der verfügbaren Optionen findest du in der offiziellen [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md) Dokumentation.

Beispiel-Snippet in `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## Serverbetrieb

Damit der TeamSpeak 6 Server im Hintergrund weiterläuft, startest du den Container mit folgendem Befehl:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

Um den TeamSpeak 6 Server zu stoppen, stoppst du den Container mit diesem Befehl:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Verbindung herstellen

Sobald der TeamSpeak 6 Server läuft, kannst du dich mit dem TeamSpeak 6 Client verbinden. Nutze einfach die IP-Adresse deines Servers zusammen mit dem richtigen Port. Gib diese Daten im Client ein, um dich mit deinem Server zu verbinden und loszulegen.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Fazit und weitere Ressourcen

Glückwunsch! Du hast den Teamspeak 6 Server erfolgreich auf deinem VPS installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der Server-Konfiguration weiterhelfen können:

- [Offizielle Webseite](https://teamspeak.com/en/) – Infos und Downloads für TeamSpeak 6
- [Community Forum](https://community.teamspeak.com/) – Support und Diskussionen der Nutzer
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) – Bugs melden und offene Issues verfolgen

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Hilfe steht dir unser Support-Team täglich zur Verfügung – melde dich einfach bei uns! 🙂