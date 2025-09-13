---
id: dedicated-linux-joplin
title: "Dedicated Server: Joplin unter Linux einrichten"
description: Informationen zur Einrichtung von Joplin auf deinem Linux Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Joplin installieren
services:
- dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Joplin ist eine Open-Source-App für Notizen und To-dos, mit der sich Markdown-basierte Notizen in durchsuchbaren Notizbüchern organisieren und über Geräte hinweg synchronisieren lassen. Sie bietet Ende-zu-Ende-Verschlüsselung, einen Web Clipper und plattformübergreifende Synchronisierung. Perfekt für Nutzer, die Privatsphäre, Flexibilität und volle Kontrolle über ihre Daten priorisieren!

![img](https://screensaver01.zap-hosting.com/index.php/s/qfo8k2RXWPFqi3g/preview)

Überlegst du, diesen Dienst selbst zu hosten? Wir führen dich durch jeden Schritt der Einrichtung und Konfiguration und nennen alles, was du beachten musst.

:::danger Linux mit Desktop-Variante erforderlich
Diese Anwendung kann nur auf einem Linux-System mit grafischer Benutzeroberfläche installiert und verwendet werden; in diesem Beispiel wird Ubuntu Desktop 25.04 als Referenz verwendet.

:::

<InlineVoucher />



## Voraussetzungen

Bevor du **Joplin** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Leistung zu gewährleisten.

| Hardware | Minimum | ZAP-Hosting Empfehlung |
| ---------- | ------------ | -------------------------- |
| CPU | 1 vCPU-Kerne | 4 vCPU-Kerne |
| RAM | 2 GB | 4 GB |
| Speicherplatz | 250 MB | 250 MB |

Die Software erfordert, dass alle notwendigen Abhängigkeiten installiert sind und dass sie auf einem unterstützten Betriebssystem läuft. Stelle vor dem Fortfahren sicher, dass dein Server die folgenden Anforderungen erfüllt:

**Abhängigkeiten:** `Libfuse2`

**Betriebssystem:** Linux mit Desktop-Unterstützung

Stelle sicher, dass alle Abhängigkeiten installiert sind und die richtige Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme während der Installation von Joplin zu vermeiden.



## Vorbereitung

Bevor du **Joplin** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitungen sorgen für eine stabile Umgebung und helfen, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit der aktuellsten Software und den neuesten Sicherheitsverbesserungen läuft, solltest du zuerst Systemupdates durchführen. Führe dazu den folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor dem Fortfahren die neuesten Sicherheitspatches und Softwareversionen hat.

### Abhängigkeiten installieren
Sobald der Aktualisierungsvorgang abgeschlossen ist, kann mit der Installation der Abhängigkeiten fortgefahren werden. 

#### Libfuse2
Die Joplin-Software erfordert, dass Libfuse2 zunächst installiert wird. Führe dazu den folgenden Befehl aus: 
```
sudo apt install -y libfuse2
```




## Installation
Nun, da alle Anforderungen erfüllt sind und die notwendigen Vorbereitungen abgeschlossen wurden, kannst du mit der Installation der Joplin-Anwendung fortfahren. Führe dazu den folgenden Befehl aus:

```
wget -O - https://raw.githubusercontent.com/laurent22/joplin/dev/Joplin_install_and_update.sh | bash
```

Joplin wird mit dem offiziellen Installationsskript heruntergeladen und installiert. Lasse den Prozess einfach bis zum Ende laufen. Anschließend kannst du die Anwendung sofort starten.



![img](https://screensaver01.zap-hosting.com/index.php/s/Af9xjkqz7TSr4sZ/preview)



## Konfiguration

Nach der Installation von Joplin solltest du die Grundeinstellungen konfigurieren, um die Anwendung an deinen Workflow anzupassen. Die Konfiguration ist über das Menü *Settings* erreichbar.

**Synchronization**
Joplin unterstützt mehrere Synchronisationsziele wie Nextcloud, Dropbox, OneDrive oder WebDAV. Wähle unter „Synchronization“ deinen bevorzugten Anbieter und gib deine Zugangsdaten ein. So hältst du Notizen auf allen Geräten aktuell.

**Encryption**
Um deine synchronisierten Notizen zu sichern, aktiviere in den „Encryption“-Einstellungen die Ende-zu-Ende-Verschlüsselung. Es wird ein Schlüssel generiert, der auf allen Geräten eingerichtet werden muss, die auf deine Notizen zugreifen.

**Editor & Appearance**
Joplin verwendet Markdown für Notizen. In den „Editor“-Einstellungen kannst du festlegen, ob die Vorschau automatisch angezeigt wird, sowie Schriftart und -größe anpassen.

**Plugins & Extensions**
Über den integrierten Plugin-Manager kannst du zusätzliche Funktionen installieren, z. B. Diagramm-Unterstützung, Kalenderintegration oder erweitertes Tag-Management.

**Web Clipper**
Optional kannst du die Browser-Erweiterung „Joplin Web Clipper“ aktivieren, um komplette Webseiten oder Ausschnitte direkt als Notizen zu speichern.

Mit diesen Grundeinstellungen ist Joplin bereit für verschiedenste Einsatzzwecke wie Aufgabenverwaltung, Projektdokumentation oder persönliche Wissensdatenbanken.



![img](https://screensaver01.zap-hosting.com/index.php/s/FyjyeF3EcRFe2qf/preview)




## Abschluss und weitere Ressourcen

Glückwunsch! Du hast Joplin jetzt erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir zusätzliche Hilfe und Orientierung während deiner Serverkonfiguration bieten können

- [Joplinapp.org](https://joplin.org/) - Offizielle Website
- [Joplinapp.org/help/](https://joplinapp.org/help/) - Joplin Help Center

Hast du spezielle Fragen, die hier nicht abgedeckt sind? Für weitere Fragen oder Unterstützung wende dich bitte an unser Support-Team, das täglich für dich da ist! 🙂



<InlineVoucher />