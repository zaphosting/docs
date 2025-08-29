---
id: vserver-linux-ts6
title: "vServer: Teamspeak 6 Server auf deinem Linux-vServer einrichten"
description: Informationen zur Einrichtung von Teamspeak 6 Server auf einem Linux vServer von ZAP-Hosting – ZAP-Hosting.com Dokumentation
sidebar_label: Teamspeak 6 Server installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Im Sommer 2025 hat TeamSpeak die **Beta-Version** der **TeamSpeak 6 Server** veröffentlicht. Endlich kannst du die nächste Generation von TeamSpeak selbst ausprobieren und erleben!

Du möchtest diesen Dienst selbst hosten? Wir zeigen dir Schritt für Schritt, wie du ihn einrichtest und konfigurierst und was du dabei beachten musst.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Voraussetzungen

Bevor du den **Teamspeak 6 Server** installierst, solltest du sicherstellen, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Leistung zu gewährleisten.

| Hardware   | Minimum      | ZAP-Hosting-Empfehlung |
| ---------- | ------------ | ---------------------- |
| CPU        | 1 vCPU Cores | 4 vCPU Cores           |
| RAM        | 1 GB         | 4 GB                   |
| Disk space | 1 GB         | 25 GB                  |



## Vorbereitung

Bevor du mit der Einrichtung des **TeamSpeak 6 Servers** beginnst, solltest du dein System vorbereiten. Dazu gehört in erster Linie, dein Betriebssystem auf den neuesten Stand zu bringen und alle notwendigen Abhängigkeiten zu installieren. Mit diesen Vorbereitungen stellst du sicher, dass der Server stabil läuft und spätere Probleme vermieden werden.


### System aktualisieren
Um sicherzustellen, dass dein System mit der neuesten Software und den neuesten Sicherheitsverbesserungen läuft, solltest du immer zuerst Systemupdates durchführen. Führe dazu den folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
Dadurch wird sichergestellt, dass dein System über die neuesten Sicherheitspatches und Softwareversionen verfügt, bevor du fortfährst.

### Abhängigkeiten installieren
Sobald der Aktualisierungsvorgang abgeschlossen ist, kann nun mit der Installation der Abhängigkeiten fortgefahren werden. Für eine schnelle, einfache und empfohlene Installation empfehlen wir die Verwendung von Docker. Dazu musst du die Docker Engine installieren:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Installation
Nachdem nun alle Anforderungen erfüllt und die notwendigen Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Teamspeak 6 Server-Anwendung fortfahren.

Im nächsten Schritt legst du für den **TeamSpeak 6 Server** eine Docker-Compose-Datei an. Du kannst das Verzeichnis frei wählen, in diesem Beispiel wird die Datei unter
 `/opt/containers/ts6/` erstellt. Dafür kommt die offizielle TeamSpeak-Compose-Datei zum Einsatz:

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

Navigiere in das Verzeichnis wo die Datei angelegt werden soll und lege die Datei an. Verwende dazu den Befehl `nano docker-compose.yml` und füge dort den Inhalt ein. 

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


Um den Docker-Container und den TeamSpeak 6 Server zu starten, führst du den folgenden Docker-Compose-Befehl aus:
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

Nun startet der Docker-Container für den TeamSpeak 6 Server. Standardmäßig läuft dieser zunächst nicht dauerhaft. Beim ersten Start werden dir wichtige Informationen zum **Server Query Admin Account** sowie der **Berechtigungsschlüssel** angezeigt. 

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Notiere dir diese Daten unbedingt sicher, da sie bei späteren Starts nicht erneut ausgegeben werden. Beende den Container danach wieder mit `STRG+C`.



## Konfiguration

Weitere Einstellungen für den TeamSpeak 6 Server kannst du direkt über **Environment-Variablen** in der Docker-Compose-Datei vornehmen. Auf diese Weise lässt sich der Server flexibel an deine Anforderungen anpassen. Eine Übersicht aller verfügbaren Optionen findest du in der offiziellen  [TeamSpeak 6 Server](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md) Dokumentation.

Ein Beispiel für eine Anpassung in der `docker-compose.yml`

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## Serverbetrieb

Um den TeamSpeak 6 Server im Hintergrund zu starten, starte den Container mit dem folgenden Befehl:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

Um den TeamSpeak 6 Server zu stoppen, stoppe den Container mit dem folgenden Befehl:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Verbindung herstellen

Nachdem der TeamSpeak 6 Server gestartet und eingerichtet ist, kannst du die Verbindung mit dem TeamSpeak 6 Client herstellen. Verwende dazu die IP-Adresse deines Servers sowie den entsprechenden Port. Trage diese Daten im Client ein, um dich mit deinem Server zu verbinden und die ersten Tests durchzuführen.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)


## Abschluss und weitere Informationen

Glückwunsch! Du hast Teamspeak 6 Server jetzt erfolgreich auf deinem vServer installiert und konfiguriert. Wir empfehlen dir auch, dir die folgenden Informationen anzusehen, die dir bei der Konfiguration deines Servers zusätzliche Hilfe und Anleitung bieten können:

- [Offizielle Website](https://teamspeak.com/en/) – Infos und Downloads für TeamSpeak 6
- [Community-Forum](https://community.teamspeak.com/) – Benutzerunterstützung und Diskussionen
- [GitHub-Issues](https://github.com/teamspeak/teamspeak6-server/issues) – Fehler melden und offene Probleme verfolgen

Du hast spezielle Fragen, die hier nicht behandelt werden?  For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂



<InlineVoucher />