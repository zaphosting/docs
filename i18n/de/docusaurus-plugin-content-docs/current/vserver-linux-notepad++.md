---
id: vserver-linux-notepad++
title: "Notepad++ auf einem Linux-Server einrichten – Nutze deinen Lieblingseditor via Wine"
description: "Entdecke, wie du Notepad++ auf Linux installierst und optimierst für effizientes, leichtgewichtiges Coden und Entwickeln → Jetzt mehr erfahren"
sidebar_label: Notepad++ installieren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Notepad++ ist ein kostenloser und Open-Source Text- und Quellcode-Editor für Windows. Er unterstützt Syntax-Highlighting, Code-Folding und Tabbed Editing für viele Programmier- und Skriptsprachen und ist durch Plugins stark anpassbar. Bekannt für seine schnelle Performance und geringen Ressourcenverbrauch, ist Notepad++ eine beliebte Wahl für Entwickler und Nutzer, die ein mächtiges, aber leichtgewichtiges Tool zum Editieren suchen.

![img](https://screensaver01.zap-hosting.com/index.php/s/jMMDejqDfWDCfrr/preview)

Du überlegst, diesen Service selbst zu hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

:::danger Linux mit Desktop-Variante erforderlich
Diese Anwendung kann nur auf einem Linux-System mit grafischer Benutzeroberfläche installiert und genutzt werden; in diesem Beispiel wird Ubuntu Desktop 25.04 als Referenz verwendet.

:::

<InlineVoucher />



## Voraussetzungen

Bevor du **Notepad++** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware | Minimum | ZAP-Hosting Empfehlung |
| ---------- | ------------ | -------------------------- |
| CPU | 1 vCPU Kern | 4 vCPU Kerne |
| RAM | 2 GB | 4 GB |
| Festplattenspeicher | 25 MB | 25 GB |

Die Software benötigt, dass alle notwendigen Abhängigkeiten installiert sind und auf einem unterstützten Betriebssystem läuft. Vergewissere dich, dass dein Server folgende Voraussetzungen erfüllt, bevor du mit der Installation fortfährst:

**Abhängigkeiten:** `Snap`

**Betriebssystem:** Linux mit Desktop-Support

Stelle sicher, dass alle Abhängigkeiten installiert sind und die richtige Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme während der Installation von Notepad++ zu vermeiden.



## Vorbereitung

Bevor du **Notepad++** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Um sicherzustellen, dass dein System mit der aktuellsten Software und den neuesten Sicherheitsupdates läuft, solltest du immer zuerst ein Update durchführen. Führe dazu folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So ist dein System mit den neuesten Sicherheitspatches und Softwareversionen versorgt, bevor du weitermachst.

### Abhängigkeiten installieren
Nachdem das Update abgeschlossen ist, kannst du mit der Installation der Abhängigkeiten fortfahren.

#### Snap
Notepad++ benötigt, dass Snap zuerst installiert ist. Führe dazu folgenden Befehl aus: 
```
sudo apt install snapd
```




## Installation
Nachdem alle Voraussetzungen erfüllt und die Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Notepad++-Anwendung starten. Führe dazu folgenden Befehl aus:

```
sudo snap install notepad-plus-plus
```

Notepad++ wird über das offizielle Installationsskript heruntergeladen und installiert. Lass den Prozess einfach durchlaufen, bis er abgeschlossen ist, danach kannst du die Anwendung direkt starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/ca9Z8D37wCSrDbf/preview)



## Konfiguration

Notepad++ bietet eine Vielzahl an Anpassungsmöglichkeiten, die du unter *Einstellungen > Einstellungen* findest. Damit kannst du den Editor perfekt auf deinen Workflow zuschneiden:

- **Allgemein**: Steuer das Startverhalten, z.B. ob zuletzt geöffnete Dateien wieder geladen werden, eine Standardsprache gesetzt wird oder wie Tabs sich verhalten.  
- **Editor-Einstellungen**: Passe Schriftart und -größe, Tab-Breite, Zeilennummerierung, Auto-Einrückung oder die Anzeige von Leerzeichen und Tabulatoren an.  
- **Farbschemata & Syntax**: Nutze den „Style Configurator“, um zwischen Themes zu wechseln und Syntax-Highlighting für jede unterstützte Sprache zu individualisieren.  
- **Dateiverwaltung**: Konfiguriere Optionen wie automatisches Neuladen bei Änderungen, Verhalten bei großen Dateien oder bevorzugte Kodierungen wie UTF-8.  
- **Sicherheit & Backup**: Aktiviere automatische Backups oder Sitzungswiederherstellung, um Datenverlust zu vermeiden.  
- **Plugins**: Installiere und verwalte Erweiterungen über den Plugin Manager, um Funktionen wie FTP-Support oder erweitertes Formatieren hinzuzufügen.  

Diese Einstellungen machen Notepad++ extrem flexibel, egal ob du nur einfachen Text bearbeitest oder komplexe Software entwickelst.

![img](https://screensaver01.zap-hosting.com/index.php/s/X8og5qnFkBTRcmA/preview)




## Abschluss und weitere Ressourcen

Glückwunsch! Du hast Notepad++ erfolgreich auf deinem VPS/Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der weiteren Server-Konfiguration helfen können:

- [notepad-plus-plus.org/](https://notepad-plus-plus.org/) – Offizielle Webseite

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂



<InlineVoucher />