---
id: vserver-windows-plex
title: "vServer: Plex unter Windows einrichten"
description: Informationen zur Einrichtung von Plex auf deinem Windows vServer von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Plex installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Plex ist eine Plattform zum zentralen Verwalten und Streamen von Medieninhalten wie Filmen, Serien, Musik und Fotos. Mit dem Plex Media Server können Medienbibliotheken organisiert, automatisch mit Metadaten angereichert und sowohl im lokalen Netzwerk als auch über das Internet auf verschiedenste Geräte gestreamt werden. Dadurch bietet Plex eine flexible Lösung, um persönliche Medien einfach und komfortabel verfügbar zu machen.

![img](https://screensaver01.zap-hosting.com/index.php/s/68xdESEHimoY9Jp/preview)

Denkst du darüber nach, diesen Dienst selbst zu hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und nennen alles, was du beachten musst.

<InlineVoucher />



## Voraussetzungen

Bevor du **Plex** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, damit die Installation reibungslos verläuft und die Leistung passt.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung |
| ---------- | ------------ | ---------------------- |
| CPU        | 4 vCPU-Kerne | 8 vCPU-Kerne           |
| RAM        | 4 GB         | 8 GB                   |
| Speicher   | 25GB         | 25 GB                  |

Die Software setzt voraus, dass alle notwendigen Abhängigkeiten installiert sind und ein unterstütztes Betriebssystem verwendet wird. Stelle vor der Installation sicher, dass dein Server die folgenden Anforderungen erfüllt:

**Abhängigkeiten:** Keine

**Betriebssystem:** Windows 10/11, Windows Server 20XX

Stelle sicher, dass alle Abhängigkeiten installiert sind und die korrekte Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme während der Installation von Plex zu vermeiden.



## Installation

Die offizielle Plex Media Website stellt die aktuelle Windows-Version des Plex Media Servers zum Download bereit. Verwende die 64-Bit-Variante, um die Kompatibilität mit allen modernen Windows-Editionen sicherzustellen. Der Download ist verfügbar unter: https://www.plex.tv/media-server-downloads/

![img](https://screensaver01.zap-hosting.com/index.php/s/d3b4mZsiQ4iqXrL/preview)

Nach dem Herunterladen kann der Installer ausgeführt werden, um den Plex Media Server einzurichten. Nach der Installation erfolgt die Konfiguration über die Weboberfläche im Browser, in der du Bibliotheken anlegen und deine Mediensammlung verwalten kannst.

![img](https://screensaver01.zap-hosting.com/index.php/s/5TnmMeRkdLAt2RJ/download)

Sobald die Einrichtung abgeschlossen ist, öffnet sich die Weboberfläche des Plex Media Servers automatisch in deinem Standardbrowser. An diesem Punkt wirst du aufgefordert, dich mit einem bestehenden Plex-Konto anzumelden oder ein neues zu erstellen, wenn du noch keines hast. 

Dieser Anmeldeschritt ist erforderlich, um den Server mit deinem persönlichen Konto zu verknüpfen und Funktionen wie Remotezugriff, Benutzerverwaltung und Synchronisierung über Geräte hinweg zu aktivieren. Nach erfolgreicher Authentifizierung befindest du dich in deiner eigenen Plex Media Instanz. Von dort aus kannst du Bibliotheken für Filme, Serien, Musik oder Fotos erstellen, Metadaten automatisch abrufen und Inhalte mit anderen Nutzern in deinem lokalen Netzwerk oder über das Internet teilen.

![img](https://screensaver01.zap-hosting.com/index.php/s/HmQPZGsBqxqPHmy/download)

Nach der Einrichtung kannst du auch extern auf deinen Plex Media Server zugreifen, indem du die Weboberfläche im Browser über `http://<ip-address>:32400` öffnest. Ersetze `<ip-address>` durch entweder die öffentliche deines Servers. 

Port 32400 ist der Standardport für den Plex Webzugriff und muss möglicherweise in deiner Firewall oder deinem Router erlaubt werden, wenn du dich über das Internet verbinden möchtest. 

Sobald die Adresse erreicht ist, wirst du auf die Plex Login-Seite weitergeleitet und kannst dann deine Bibliotheken und Einstellungen verwalten. Für einen sicheren externen Zugriff wird empfohlen, den Remotezugriff in den Plex-Einstellungen zu aktivieren, da dies eine verschlüsselte Verbindung sicherstellt und den Datenverkehr über den Plex-Dienst weiterleitet.

![img](https://screensaver01.zap-hosting.com/index.php/s/jfQxZ6e4BGMfen5/preview)



## Abschluss und weitere Ressourcen

Glückwunsch. Du hast Plex jetzt erfolgreich auf deinem VPS installiert und konfiguriert. Wir empfehlen außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir zusätzliche Hilfe und Orientierung während deiner Serverkonfiguration bieten können

- [Plex.com](https://Plex.com/) - Offizielle Website
- [support.plex.tv/articles/](https://support.plex.tv/articles/) - Plex Help Center (Dokumentation)

Hast du spezielle Fragen, die hier nicht abgedeckt sind? Für weitere Fragen oder Unterstützung wende dich bitte an unser Support-Team, das täglich für dich da ist! 🙂



<InlineVoucher />