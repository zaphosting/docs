---
id: dedicated-linux-joplin
title: "Dedicated Server: Joplin auf Linux einrichten"
description: "Entdecke, wie du verschlüsselte Markdown-Notizen mit Joplin geräteübergreifend organisierst und synchronisierst – für sicheres und flexibles Notizenmachen → Jetzt mehr erfahren"
sidebar_label: Joplin installieren
services:
- dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Joplin ist eine Open-Source Notiz- und To-Do-App, mit der du Markdown-basierte Notizen in durchsuchbaren Notizbüchern organisieren und geräteübergreifend synchronisieren kannst. Sie bietet Ende-zu-Ende-Verschlüsselung, einen Web Clipper und plattformübergreifende Synchronisation. Perfekt für alle, die Wert auf Datenschutz, Flexibilität und volle Kontrolle über ihre Daten legen!

![img](https://screensaver01.zap-hosting.com/index.php/s/qfo8k2RXWPFqi3g/preview)

Willst du diesen Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

:::danger Linux mit Desktop-Variante erforderlich
Diese Anwendung kann nur auf einem Linux-System mit grafischer Benutzeroberfläche installiert und genutzt werden; in diesem Beispiel wird Ubuntu Desktop 25.04 als Referenz verwendet.

:::

<InlineVoucher />



## Voraussetzungen

Bevor du **Joplin** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware | Minimum | ZAP-Hosting Empfehlung |
| ---------- | ------------ | -------------------------- |
| CPU | 1 vCPU Kern | 4 vCPU Kerne |
| RAM | 2 GB | 4 GB |
| Speicherplatz | 250 MB | 250 MB |

Die Software benötigt, dass alle notwendigen Abhängigkeiten installiert sind und auf einem unterstützten Betriebssystem läuft. Vergewissere dich, dass dein Server folgende Anforderungen erfüllt, bevor du mit der Installation startest:

**Abhängigkeiten:** `Libfuse2`

**Betriebssystem:** Linux mit Desktop-Support

Stelle sicher, dass alle Abhängigkeiten installiert sind und die richtige Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme bei der Installation von Joplin zu vermeiden.



## Vorbereitung

Bevor du **Joplin** einrichtest, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst immer ein Update durchführen. Führe dazu folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor der Installation die neuesten Sicherheitspatches und Softwareversionen hat.

### Abhängigkeiten installieren
Sobald das Update abgeschlossen ist, kannst du mit der Installation der Abhängigkeiten fortfahren.

#### Libfuse2
Die Joplin-Software benötigt Libfuse2. Installiere es mit folgendem Befehl: 
```
sudo apt install -y libfuse2
```




## Installation
Nachdem alle Voraussetzungen erfüllt und Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Joplin starten. Führe dazu folgenden Befehl aus:

```
wget -O - https://raw.githubusercontent.com/laurent22/joplin/dev/Joplin_install_and_update.sh | bash
```

Joplin wird über das offizielle Installationsskript heruntergeladen und installiert. Lass den Prozess einfach durchlaufen, bis er fertig ist, danach kannst du die Anwendung direkt starten.



![img](https://screensaver01.zap-hosting.com/index.php/s/Af9xjkqz7TSr4sZ/preview)



## Konfiguration

Nach der Installation solltest du die Grundeinstellungen anpassen, um Joplin optimal an deinen Workflow anzupassen. Die Konfiguration findest du im *Einstellungen*-Menü.

**Synchronisation**
Joplin unterstützt verschiedene Sync-Ziele wie Nextcloud, Dropbox, OneDrive oder WebDAV. Wähle deinen bevorzugten Anbieter unter „Synchronisation“ aus und gib deine Zugangsdaten ein. So bleiben deine Notizen auf allen Geräten aktuell.

**Verschlüsselung**
Um deine synchronisierten Notizen zu schützen, aktiviere die Ende-zu-Ende-Verschlüsselung in den „Verschlüsselung“-Einstellungen. Ein Schlüssel wird generiert, der auf allen Geräten eingerichtet werden muss, die auf deine Notizen zugreifen.

**Editor & Erscheinungsbild**
Joplin nutzt Markdown für Notizen. In den „Editor“-Einstellungen kannst du festlegen, ob die Vorschau automatisch angezeigt wird und Schriftart sowie -größe anpassen.

**Plugins & Erweiterungen**
Der integrierte Plugin-Manager ermöglicht dir, zusätzliche Features zu installieren, z. B. Diagrammunterstützung, Kalenderintegration oder erweiterte Tag-Verwaltung.

**Web Clipper**
Optional kannst du die Browser-Erweiterung „Joplin Web Clipper“ aktivieren, um ganze Webseiten oder Ausschnitte direkt als Notizen zu speichern.

Mit diesen Grundeinstellungen ist Joplin bereit für viele Einsatzbereiche, wie Aufgabenmanagement, Projektdokumentation oder persönliche Wissensdatenbanken.



![img](https://screensaver01.zap-hosting.com/index.php/s/FyjyeF3EcRFe2qf/preview)




## Fazit und weitere Ressourcen

Glückwunsch! Du hast Joplin erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der Serverkonfiguration weiterhelfen können:

- [Joplinapp.org](https://joplin.org/) – Offizielle Webseite
- [Joplinapp.org/help/](https://joplinapp.org/help/) – Joplin Hilfe-Center

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂



<InlineVoucher />