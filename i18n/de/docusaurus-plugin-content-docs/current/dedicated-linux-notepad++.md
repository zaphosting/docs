---
id: dedicated-linux-notepad++
title: "Dedicated Server: Notepad++ auf Linux einrichten"
description: "Entdecke, wie du Notepad++ auf Linux installierst und optimierst für leistungsstarkes, leichtgewichtiges Coden und mehr Entwickler-Produktivität → Jetzt mehr erfahren"
sidebar_label: Notepad++ installieren
services:
- dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Notepad++ ist ein kostenloser und Open-Source Text- und Quellcode-Editor für Windows. Er unterstützt Syntax-Highlighting, Code-Folding und tab-basiertes Editieren für viele Programmier- und Skriptsprachen und ist durch Plugins stark anpassbar. Bekannt für seine schnelle Performance und geringen Ressourcenverbrauch, ist Notepad++ eine beliebte Wahl für Entwickler und Nutzer, die ein mächtiges, aber leichtgewichtiges Tool zum Editieren suchen.

![img](https://screensaver01.zap-hosting.com/index.php/s/jMMDejqDfWDCfrr/preview)

Du willst diesen Service selbst hosten? Wir zeigen dir Schritt für Schritt, wie du Notepad++ einrichtest und konfigurierst – inklusive allem, was du beachten musst.

:::danger Linux mit Desktop-Variante erforderlich
Diese Anwendung kann nur auf einem Linux-System mit grafischer Benutzeroberfläche installiert und genutzt werden; in diesem Beispiel verwenden wir Ubuntu Desktop 25.04 als Referenz.

:::

<InlineVoucher />



## Voraussetzungen

Bevor du **Notepad++** installierst, stelle sicher, dass deine Hosting-Umgebung folgende Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware | Minimum | ZAP-Hosting Empfehlung |
| -------- | ------- | ---------------------- |
| CPU | 1 vCPU Kern | 4 vCPU Kerne |
| RAM | 2 GB | 4 GB |
| Speicherplatz | 25 MB | 25 GB |

Die Software benötigt, dass alle nötigen Abhängigkeiten installiert sind und auf einem unterstützten Betriebssystem läuft. Prüfe vor der Installation, ob dein Server folgende Voraussetzungen erfüllt:

**Abhängigkeiten:** `Snap`

**Betriebssystem:** Linux mit Desktop-Support

Stelle sicher, dass alle Abhängigkeiten installiert sind und die richtige Betriebssystem-Version verwendet wird, um Kompatibilitätsprobleme bei der Installation von Notepad++ zu vermeiden.



## Vorbereitung

Bevor du **Notepad++** einrichtest, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst ein Update durchführen. Führe dazu folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System die neuesten Sicherheitspatches und Softwareversionen hat, bevor du weitermachst.

### Abhängigkeiten installieren
Nachdem das Update abgeschlossen ist, kannst du die Installation der Abhängigkeiten starten.

#### Snap
Notepad++ benötigt Snap als Voraussetzung. Installiere es mit folgendem Befehl: 
```
sudo apt install snapd
```




## Installation
Wenn alle Anforderungen erfüllt und Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Notepad++ starten. Führe dazu diesen Befehl aus:

```
sudo snap install notepad-plus-plus
```

Notepad++ wird über das offizielle Installationsskript heruntergeladen und installiert. Lass den Prozess einfach durchlaufen, bis er fertig ist. Danach kannst du die Anwendung direkt starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/ca9Z8D37wCSrDbf/preview)



## Konfiguration

Notepad++ bietet eine Vielzahl an Anpassungsmöglichkeiten, die du unter *Einstellungen > Einstellungen* findest. Damit kannst du den Editor perfekt auf deinen Workflow abstimmen:

- **Allgemein**: Steuer das Startverhalten, z.B. ob zuletzt geöffnete Dateien wieder geladen werden, eine Standardsprache gesetzt wird oder wie Tabs sich verhalten.  
- **Editor-Einstellungen**: Passe Schriftart und -größe, Tab-Breite, Zeilennummerierung, Auto-Einrückung oder die Anzeige von Leerzeichen und Tabulatoren an.  
- **Farbschemata & Syntax**: Nutze den „Style Configurator“, um zwischen Themes zu wechseln und Syntax-Highlighting für jede unterstützte Sprache zu individualisieren.  
- **Dateiverwaltung**: Konfiguriere Optionen wie automatisches Neuladen bei Dateiänderungen, Verhalten bei großen Dateien oder bevorzugte Kodierungen wie UTF-8.  
- **Sicherheit & Backup**: Aktiviere automatische Backups oder Sitzungswiederherstellung, um Datenverlust zu vermeiden.  
- **Plugins**: Installiere und verwalte Erweiterungen über den Plugin Manager, z.B. für FTP-Support oder erweitertes Formatieren.  

Diese Einstellungen machen Notepad++ extrem flexibel – egal ob für simples Text-Editing oder umfangreiche Softwareentwicklung.

![img](https://screensaver01.zap-hosting.com/index.php/s/X8og5qnFkBTRcmA/preview)




## Fazit und weitere Ressourcen

Glückwunsch! Du hast Notepad++ erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf folgende Ressourcen zu werfen, die dir bei der Server-Konfiguration weiterhelfen können:

- [notepad-plus-plus.org/](https://notepad-plus-plus.org/) – Offizielle Webseite

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂



<InlineVoucher />