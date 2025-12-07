---
id: vserver-windows-plex
title: "VPS: Plex auf Windows einrichten"
description: "Entdecke, wie du deine persönliche Mediathek mit Plex kinderleicht verwaltest und streamst – für nahtlosen Zugriff auf jedem Gerät → Jetzt mehr erfahren"
sidebar_label: Plex installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Plex ist eine Plattform, mit der du Medieninhalte wie Filme, Serien, Musik und Fotos zentral verwalten und streamen kannst. Mit dem Plex Media Server kannst du deine Bibliotheken organisieren, automatisch mit Metadaten anreichern und auf verschiedenen Geräten im lokalen Netzwerk oder übers Internet abspielen. So hast du deine persönliche Mediathek immer flexibel und bequem am Start.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Willst du den Service selbst hosten? Wir zeigen dir Schritt für Schritt, wie du Plex installierst und konfigurierst – inklusive allem, was du beachten solltest.

<InlineVoucher />



## Voraussetzungen

Bevor du **Plex** installierst, check am besten, ob dein Hosting-Setup die folgenden Anforderungen erfüllt, damit alles smooth läuft und die Performance top ist.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung    |
| ---------- | ------------ | ------------------------- |
| CPU        | 4 vCPU Kerne | 8 vCPU Kerne              |
| RAM        | 4 GB         | 8 GB                      |
| Speicher   | 25 GB        | 25 GB                     |

Die Software braucht keine extra Abhängigkeiten, läuft aber nur auf unterstützten Betriebssystemen. Stell sicher, dass dein Server folgende Voraussetzungen erfüllt, bevor du loslegst:

**Abhängigkeiten:** Keine

**Betriebssystem:** Windows 10/11, Windows Server 20XX

Check, dass alle Voraussetzungen passen und das OS aktuell ist, damit es bei der Plex-Installation keine Kompatibilitätsprobleme gibt.



## Installation

Auf der offiziellen Plex Media Website findest du die aktuelle Windows-Version des Plex Media Servers zum Download. Nimm die 64-Bit-Version, damit alles mit modernen Windows-Editionen kompatibel ist. Hier geht’s zum Download: https://www.plex.tv/media-server-downloads/

![img](https://screensaver01.zap-hosting.com/index.php/s/d3b4mZsiQ4iqXrL/preview)

Nach dem Download kannst du den Installer starten und den Plex Media Server installieren. Die Konfiguration läuft dann über die Weboberfläche im Browser, wo du deine Bibliotheken anlegst und deine Medien verwaltest.

![img](https://screensaver01.zap-hosting.com/index.php/s/5TnmMeRkdLAt2RJ/download)

Nach der Installation öffnet sich die Plex-Weboberfläche automatisch in deinem Standardbrowser. Jetzt musst du dich mit deinem Plex-Account anmelden oder einen neuen erstellen, falls du noch keinen hast.

Dieser Login verbindet deinen Server mit deinem persönlichen Account und schaltet Features wie Fernzugriff, Nutzerverwaltung und Synchronisation auf verschiedenen Geräten frei. Nach dem Login bist du in deiner eigenen Plex-Instanz und kannst Bibliotheken für Filme, Serien, Musik oder Fotos anlegen, Metadaten automatisch abrufen und Inhalte mit anderen Nutzern im lokalen Netzwerk oder übers Internet teilen.

![img](https://screensaver01.zap-hosting.com/index.php/s/HmQPZGsBqxqPHmy/download)

Nach der Einrichtung kannst du deinen Plex Media Server auch von außen erreichen, indem du im Browser `http://<ip-adresse>:32400` eingibst. Ersetze `<ip-adresse>` durch die öffentliche IP deines Servers.

Port 32400 ist der Standardport für den Plex-Webzugriff. Falls du über das Internet verbinden willst, musst du diesen Port in deiner Firewall oder deinem Router freigeben.

Wenn du die Adresse aufrufst, wirst du zur Plex-Login-Seite weitergeleitet und kannst dann deine Bibliotheken und Einstellungen verwalten. Für sicheren externen Zugriff empfehlen wir, in den Plex-Einstellungen den Remote Access zu aktivieren. So läuft die Verbindung verschlüsselt und der Traffic wird über den Plex-Service geleitet.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)



## Fazit & weitere Ressourcen

Glückwunsch! Du hast Plex jetzt erfolgreich auf deinem VPS installiert und eingerichtet. Schau dir auch diese Ressourcen an, die dir bei der Server-Konfiguration weiterhelfen können:

- [Plex.com](https://Plex.com/) – Offizielle Website
- [support.plex.tv/articles/](https://support.plex.tv/articles/) – Plex Hilfe & Dokumentation

Du hast noch Fragen, die hier nicht beantwortet wurden? Unser Support-Team steht dir täglich zur Seite – meld dich einfach bei uns! 🙂



<InlineVoucher />