---
id: vserver-linux-plex
title: "vServer: Plex auf Linux einrichten"
description: "Entdecke, wie du deine persönliche Mediathek mit Plex ganz easy verwaltest und streamst – für nahtlosen Zugriff auf all deinen Geräten → Jetzt mehr erfahren"
sidebar_label: Plex installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Plex ist eine Plattform zum Verwalten und Streamen von Medieninhalten wie Filmen, Serien, Musik und Fotos von einem zentralen Ort aus. Mit dem Plex Media Server kannst du deine Bibliotheken organisieren, automatisch mit Metadaten anreichern und auf verschiedenen Geräten sowohl im lokalen Netzwerk als auch über das Internet streamen. Das macht Plex zu einer flexiblen Lösung, um deine persönliche Mediensammlung einfach und bequem zugänglich zu machen.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Du willst diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

<InlineVoucher />



## Voraussetzungen

Bevor du **Plex** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung    |
| ---------- | ------------ | ------------------------- |
| CPU        | 4 vCPU Kerne | 8 vCPU Kerne              |
| RAM        | 4 GB         | 8 GB                      |
| Festplattenspeicher | 25 GB         | 25 GB                     |

Die Software benötigt, dass alle notwendigen Abhängigkeiten installiert sind und auf einem unterstützten Betriebssystem läuft. Vergewissere dich, dass dein Server folgende Anforderungen erfüllt, bevor du mit der Installation startest:

**Abhängigkeiten:** Keine

**Betriebssystem:** Ubuntu (16.04+) / Debian (8+) - Intel/AMD 64-bit

Stelle sicher, dass alle Abhängigkeiten installiert sind und die richtige Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme bei der Plex-Installation zu vermeiden.



## Installation

Die offizielle Plex Media Website bietet die aktuelle Linux-Version des Plex Media Servers zum Download an. Nutze die 64-Bit-Variante, um Kompatibilität mit allen modernen Linux-Editionen sicherzustellen. Lade die `.deb`-Datei mit folgendem Befehl herunter:

```
wget https://downloads.plex.tv/plex-media-server-new/1.42.1.10060-4e8b05daf/debian/plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Nach dem Download kannst du den Installer ausführen, um den Plex Media Server einzurichten. Die Konfiguration erfolgt anschließend über die Weboberfläche im Browser, wo du Bibliotheken anlegen und deine Mediensammlung verwalten kannst. Starte die Installation mit diesem Befehl:

```
sudo dpkg -i plexmediaserver_1.42.1.10060-4e8b05daf_amd64.deb
```

Um den Plex Media Server einzurichten, öffne auf dem gleichen Rechner, auf dem du den Server installiert hast, ein Browserfenster und gehe zu `http://127.0.0.1:32400/web`. An dieser Stelle wirst du aufgefordert, dich mit einem bestehenden Plex-Konto anzumelden oder ein neues zu erstellen, falls du noch keines hast.

Dieser Login-Schritt ist notwendig, um den Server mit deinem persönlichen Konto zu verknüpfen und Funktionen wie Fernzugriff, Benutzerverwaltung und Synchronisation über Geräte hinweg zu ermöglichen. Nach erfolgreicher Anmeldung befindest du dich in deiner eigenen Plex Media Instanz. Dort kannst du Bibliotheken für Filme, Serien, Musik oder Fotos anlegen, Metadaten automatisch abrufen und Inhalte mit anderen Nutzern im lokalen Netzwerk oder übers Internet teilen.

Nach der Einrichtung kannst du auch von extern auf deinen Plex Media Server zugreifen, indem du die Weboberfläche im Browser über `http://<ip-adresse>:32400` öffnest. Ersetze `<ip-adresse>` durch die öffentliche IP-Adresse deines Servers.

Port 32400 ist der Standardport für den Plex-Webzugriff und muss gegebenenfalls in deiner Firewall oder deinem Router freigegeben werden, wenn du über das Internet verbinden möchtest.

Sobald die Adresse aufgerufen wird, wirst du zur Plex-Login-Seite weitergeleitet und kannst dort deine Bibliotheken und Einstellungen verwalten. Für sicheren externen Zugriff empfiehlt es sich, in den Plex-Einstellungen den Remote Access zu aktivieren, da so eine verschlüsselte Verbindung hergestellt und der Traffic über den Plex-Dienst geleitet wird.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)



## Fazit und weitere Ressourcen

Glückwunsch! Du hast Plex jetzt erfolgreich auf deinem VPS installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der Serverkonfiguration zusätzliche Hilfe und Tipps bieten können:

- [Plex.com](https://Plex.com/) - Offizielle Website
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Plex Hilfe-Center (Dokumentation)

Du hast spezielle Fragen, die hier nicht beantwortet werden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂



<InlineVoucher />