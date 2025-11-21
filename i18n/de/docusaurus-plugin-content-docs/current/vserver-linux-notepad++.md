---
id: vserver-linux-notepad++
title: "vServer: Notepad++ auf Linux einrichten"
description: "Entdecke, wie du Notepad++ auf Linux installierst und optimierst für effizientes, leichtgewichtiges Coden und Entwickeln → Jetzt mehr erfahren"
sidebar_label: Notepad++ installieren
services:
- vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Notepad++ ist ein kostenloser und quelloffener Text- und Quellcode-Editor für Windows. Er unterstützt Syntax-Highlighting, Code-Faltung und tab-basiertes Editieren für viele Programmier- und Skriptsprachen und ist durch Plugins stark anpassbar. Bekannt für seine schnelle Performance und geringen Ressourcenverbrauch, ist Notepad++ eine beliebte Wahl für Entwickler und Nutzer, die ein mächtiges, aber leichtgewichtiges Tool zum Editieren suchen.

![img](https://screensaver01.zap-hosting.com/index.php/s/jMMDejqDfWDCfrr/preview)

Willst du diesen Service selbst hosten? Wir zeigen dir Schritt für Schritt, wie du ihn einrichtest und konfigurierst – inklusive allem, was du beachten musst.

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
| Speicherplatz | 25 MB | 25 GB |

Die Software benötigt, dass alle nötigen Abhängigkeiten installiert sind und auf einem unterstützten Betriebssystem läuft. Vergewissere dich, dass dein Server folgende Anforderungen erfüllt, bevor du mit der Installation startest:

**Abhängigkeiten:** `Snap`

**Betriebssystem:** Linux mit Desktop-Support

Stelle sicher, dass alle Abhängigkeiten installiert sind und die richtige Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme bei der Installation von Notepad++ zu vermeiden.



## Vorbereitung

Bevor du **Notepad++** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst ein Update durchführen. Führe dazu folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor der Installation die neuesten Sicherheitspatches und Softwareversionen hat.

### Abhängigkeiten installieren
Sobald das Update abgeschlossen ist, kannst du mit der Installation der Abhängigkeiten weitermachen.

#### Snap
Notepad++ benötigt, dass Snap zuerst installiert ist. Führe dazu folgenden Befehl aus: 
```
sudo apt install snapd
```




## Installation
Nachdem alle Voraussetzungen erfüllt und Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Notepad++ starten. Führe dazu folgenden Befehl aus:

```
sudo snap install notepad-plus-plus
```

Notepad++ wird über das offizielle Installationsskript heruntergeladen und installiert. Lass den Prozess einfach durchlaufen, bis er fertig ist – danach kannst du die Anwendung direkt starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/ca9Z8D37wCSrDbf/preview)



## Konfiguration

Notepad++ bietet eine Vielzahl an Anpassungsmöglichkeiten, die du unter *Einstellungen > Einstellungen* findest. Damit kannst du den Editor perfekt auf deinen Workflow zuschneiden:

- **Allgemein**: Steuer das Startverhalten, z.B. ob zuletzt geöffnete Dateien wieder geladen werden, eine Standardsprache gesetzt wird oder wie Tabs sich verhalten.  
- **Editor-Einstellungen**: Passe Schriftart und -größe, Tab-Breite, Zeilennummerierung, automatische Einrückung oder die Anzeige von Leerzeichen und Tabulatoren an.  
- **Farbschemata & Syntax**: Nutze den „Style Configurator“, um zwischen Themes zu wechseln und Syntax-Highlighting für jede unterstützte Sprache zu individualisieren.  
- **Dateiverwaltung**: Konfiguriere Optionen wie automatisches Neuladen bei Dateiänderungen, Verhalten bei großen Dateien oder bevorzugte Kodierungen wie UTF-8.  
- **Sicherheit & Backup**: Aktiviere automatische Backups oder Sitzungswiederherstellung, um Datenverlust zu vermeiden.  
- **Plugins**: Installiere und verwalte Erweiterungen über den Plugin Manager, um Funktionen wie FTP-Support oder erweitertes Formatieren hinzuzufügen.  

Diese Einstellungen machen Notepad++ extrem flexibel – egal, ob du nur schnell Texte bearbeiten oder umfangreiche Softwareprojekte entwickeln willst.

![img](https://screensaver01.zap-hosting.com/index.php/s/X8og5qnFkBTRcmA/preview)




## Fazit und weitere Ressourcen

Glückwunsch! Du hast Notepad++ jetzt erfolgreich auf deinem VPS installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der weiteren Server-Konfiguration helfen können:

- [notepad-plus-plus.org/](https://notepad-plus-plus.org/) – Offizielle Webseite

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂



<InlineVoucher />