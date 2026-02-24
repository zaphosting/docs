---
id: dedicated-windows-plex
title: "Plex auf einem Windows Server einrichten – Stream deine persönliche Mediathek"
description: "Entdecke, wie du deine persönliche Medienbibliothek mit Plex ganz easy verwaltest und streamst – für nahtlosen Zugriff auf all deinen Geräten → Jetzt mehr erfahren"
sidebar_label: Plex installieren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Plex ist eine Plattform zum Verwalten und Streamen von Medieninhalten wie Filmen, Serien, Musik und Fotos von einem zentralen Ort aus. Mit dem Plex Media Server kannst du deine Bibliotheken organisieren, automatisch mit Metadaten anreichern und auf verschiedenen Geräten sowohl im lokalen Netzwerk als auch übers Internet streamen. So ist Plex die flexible Lösung, um deine persönliche Mediensammlung easy und bequem überall verfügbar zu machen.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Willst du diesen Service selbst hosten? Wir zeigen dir Schritt für Schritt, wie du Plex installierst und konfigurierst – inklusive allem, was du beachten musst.

## Voraussetzungen

Bevor du **Plex** installierst, check am besten, ob dein Hosting-Setup die folgenden Anforderungen erfüllt, damit die Installation reibungslos läuft und die Performance top ist.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung    |
| ---------- | ------------ | ------------------------- |
| CPU        | 4 vCPU Kerne | 8 vCPU Kerne              |
| RAM        | 4 GB         | 8 GB                      |
| Speicher   | 25 GB        | 25 GB                     |

Die Software braucht keine speziellen Abhängigkeiten, muss aber auf einem unterstützten Betriebssystem laufen. Vergewissere dich, dass dein Server folgende Voraussetzungen erfüllt, bevor du loslegst:

**Abhängigkeiten:** Keine

**Betriebssystem:** Windows 10/11, Windows Server 20XX

Stell sicher, dass alle Voraussetzungen erfüllt sind und das richtige Betriebssystem läuft, um Kompatibilitätsprobleme bei der Plex-Installation zu vermeiden.

## Installation

Auf der offiziellen Plex Media Website findest du die aktuelle Windows-Version des Plex Media Servers zum Download. Nutze die 64-Bit-Variante, damit alles mit modernen Windows-Versionen kompatibel ist. Hier geht’s zum Download: https://www.plex.tv/media-server-downloads/

![img](https://screensaver01.zap-hosting.com/index.php/s/d3b4mZsiQ4iqXrL/preview)

Nach dem Download kannst du den Installer starten, um den Plex Media Server einzurichten. Die Konfiguration erfolgt dann über die Weboberfläche im Browser, wo du Bibliotheken anlegen und deine Medien verwalten kannst.

![img](https://screensaver01.zap-hosting.com/index.php/s/5TnmMeRkdLAt2RJ/download)

Nach der Installation öffnet sich die Plex Media Server Weboberfläche automatisch in deinem Standardbrowser. Jetzt wirst du aufgefordert, dich mit einem bestehenden Plex-Account einzuloggen oder einen neuen Account zu erstellen, falls du noch keinen hast.

Dieser Login ist notwendig, um den Server mit deinem persönlichen Account zu verknüpfen. So kannst du Features wie Fernzugriff, Benutzerverwaltung und Synchronisation über verschiedene Geräte nutzen. Nach erfolgreicher Anmeldung bist du in deiner eigenen Plex Media Instanz. Dort kannst du Bibliotheken für Filme, Serien, Musik oder Fotos anlegen, Metadaten automatisch abrufen und Inhalte mit anderen Nutzern im lokalen Netzwerk oder übers Internet teilen.

![img](https://screensaver01.zap-hosting.com/index.php/s/HmQPZGsBqxqPHmy/download)

Nach der Einrichtung kannst du auch von extern auf deinen Plex Media Server zugreifen, indem du die Weboberfläche im Browser über `http://<ip-adresse>:32400` öffnest. Ersetze `<ip-adresse>` durch die öffentliche IP-Adresse deines Servers.

Der Port 32400 ist der Standardport für den Plex-Webzugriff und muss ggf. in deiner Firewall oder deinem Router freigegeben werden, wenn du über das Internet verbinden möchtest.

Sobald du die Adresse aufrufst, wirst du zur Plex-Login-Seite weitergeleitet und kannst dann deine Bibliotheken und Einstellungen verwalten. Für sicheren externen Zugriff empfehlen wir, in den Plex-Einstellungen den Remote Access zu aktivieren. So wird die Verbindung verschlüsselt und der Traffic über den Plex-Dienst geleitet.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)

## Fazit und weitere Ressourcen

Glückwunsch! Du hast Plex jetzt erfolgreich auf deinem VPS/Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der Serverkonfiguration weiterhelfen können:

- [Plex.com](https://Plex.com/) – Offizielle Website
- [support.plex.tv/articles/](https://support.plex.tv/articles/) – Plex Hilfe-Center (Dokumentation)

Du hast noch spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – meld dich einfach bei uns! 🙂