---
id: dedicated-linux-plex
title: "Plex auf einem Linux-Server einrichten – Stream deine persönliche Mediathek"
description: "Entdecke, wie du deine persönliche Mediathek mit Plex ganz easy verwaltest und auf all deinen Geräten streamst → Jetzt mehr erfahren"
sidebar_label: Plex installieren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Plex ist eine Plattform zum Verwalten und Streamen von Medieninhalten wie Filme, Serien, Musik und Fotos von einem zentralen Ort aus. Mit dem Plex Media Server kannst du deine Bibliotheken organisieren, automatisch mit Metadaten anreichern und auf verschiedenen Geräten sowohl im lokalen Netzwerk als auch übers Internet streamen. Plex ist damit eine flexible Lösung, um deine persönliche Mediensammlung einfach und bequem zugänglich zu machen.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Willst du diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.





## Voraussetzungen

Bevor du **Plex** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung    |
| ---------- | ------------ | ------------------------- |
| CPU        | 4 vCPU Kerne | 8 vCPU Kerne              |
| RAM        | 4 GB         | 8 GB                      |
| Festplattenspeicher | 25 GB         | 25 GB                     |

Die Software benötigt, dass alle notwendigen Abhängigkeiten installiert sind und auf einem unterstützten Betriebssystem läuft. Vergewissere dich, dass dein Server folgende Anforderungen erfüllt, bevor du mit der Installation startest:

**Abhängigkeiten:** Keine

**Betriebssystem:** Ubuntu (16.04+) / Debian (8+) – Intel/AMD 64-bit

Stelle sicher, dass alle Abhängigkeiten installiert sind und die richtige Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme bei der Plex-Installation zu vermeiden.



## Installation

Die offizielle Plex Media Website stellt die aktuelle Linux-Version des Plex Media Servers zum Download bereit. Nutze die 64-Bit-Variante, um Kompatibilität mit allen modernen Linux-Editionen sicherzustellen. Lade die `.deb`-Datei mit folgendem Befehl herunter:

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Nach dem Download kannst du den Installer ausführen, um den Plex Media Server einzurichten. Die Konfiguration erfolgt anschließend über die Weboberfläche im Browser, wo du Bibliotheken anlegen und deine Mediensammlung verwalten kannst. Starte die Installation mit diesem Befehl:

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Um den Plex Media Server einzurichten, öffne auf dem gleichen Rechner, auf dem du den Server installiert hast, ein Browserfenster und gehe zu `http://127.0.0.1:32400/web`. An dieser Stelle wirst du aufgefordert, dich mit einem bestehenden Plex-Konto anzumelden oder ein neues zu erstellen, falls du noch keines hast.

Dieser Login ist notwendig, um den Server mit deinem persönlichen Konto zu verknüpfen und Features wie Fernzugriff, Benutzerverwaltung und Synchronisation über Geräte hinweg zu ermöglichen. Nach erfolgreicher Anmeldung bist du in deiner eigenen Plex Media Instanz. Dort kannst du Bibliotheken für Filme, Serien, Musik oder Fotos anlegen, Metadaten automatisch abrufen und Inhalte mit anderen Nutzern im lokalen Netzwerk oder übers Internet teilen.

Nach der Einrichtung kannst du auch von extern auf deinen Plex Media Server zugreifen, indem du die Weboberfläche im Browser über `http://<ip-adresse>:32400` öffnest. Ersetze `<ip-adresse>` durch die öffentliche IP-Adresse deines Servers.

Port 32400 ist der Standardport für den Plex-Webzugriff und muss gegebenenfalls in deiner Firewall oder deinem Router freigegeben werden, wenn du über das Internet verbinden möchtest.

Sobald die Adresse aufgerufen wird, wirst du zur Plex-Login-Seite weitergeleitet und kannst dann deine Bibliotheken und Einstellungen verwalten. Für sicheren externen Zugriff empfehlen wir, in den Plex-Einstellungen den Remote Access zu aktivieren, da so eine verschlüsselte Verbindung hergestellt und der Traffic über den Plex-Dienst geleitet wird.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)



## Fazit und weitere Ressourcen

Glückwunsch! Du hast Plex jetzt erfolgreich auf deinem VPS/Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der Serverkonfiguration weiterhelfen können:

- [Plex.com](https://Plex.com/) – Offizielle Website
- [support.plex.tv/articles/](https://support.plex.tv/articles/) – Plex Hilfe-Center (Dokumentation)

Du hast spezielle Fragen, die hier nicht beantwortet werden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂