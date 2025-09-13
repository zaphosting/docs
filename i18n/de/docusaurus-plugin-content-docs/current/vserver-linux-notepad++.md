---
id: vserver-linux-notepad++
title: "vServer: Setup Notepad++ on Linux"
description: "Informationen zur Einrichtung von Notepad++ auf deinem Linux-vServer von ZAP-Hosting - ZAP-Hosting.com Dokumentation"
sidebar_label: Installiere Notepad++
services:
- vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Notepad++ ist ein freier und quelloffener Text‑ und Quellcode‑Editor für Windows. Er unterstützt Syntaxhervorhebung, Codefaltung und tabbasierte Bearbeitung für viele Programmier‑ und Skriptsprachen und ist über Plugins stark anpassbar. Bekannt für hohe Geschwindigkeit und geringen Ressourcenverbrauch bleibt Notepad++ eine beliebte Wahl für Entwickler und Nutzer, die ein leistungsfähiges und dennoch schlankes Werkzeug suchen. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jMMDejqDfWDCfrr/preview)

Du erwägst, diesen Dienst selbst zu nutzen? Wir führen dich Schritt für Schritt durch Einrichtung und Konfiguration und nennen alles, was du beachten musst.

:::danger Linux‑Desktop‑Variante erforderlich
Diese Anwendung kann nur auf einem Linux‑System mit grafischer Benutzeroberfläche installiert und verwendet werden; in diesem Beispiel wird Ubuntu Desktop 25.04 als Referenz verwendet.

:::

<InlineVoucher />



## Voraussetzungen

Bevor du **Notepad++** installierst, stelle sicher, dass deine Hosting‑Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Leistung zu gewährleisten.

| Hardware | Minimum | ZAP-Hosting Empfehlung |
| ---------- | ------------ | -------------------------- |
| CPU | 1 vCPU‑Kerne | 4 vCPU‑Kerne |
| RAM | 2 GB | 4 GB |
| Speicherplatz | 25 MB | 25 GB |

Die Software erfordert, dass alle notwendigen Abhängigkeiten installiert sind und dass sie auf einem unterstützten Betriebssystem läuft. Stelle vor dem Fortfahren sicher, dass dein Server die folgenden Anforderungen erfüllt:

**Abhängigkeiten:** `Snap`

**Betriebssystem:** Linux mit Desktop‑Unterstützung

Stelle sicher, dass alle Abhängigkeiten installiert sind und die richtige Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme während der Installation von Notepad++ zu vermeiden.



## Vorbereitung

Bevor du **Notepad++** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitungen sorgen für eine stabile Umgebung und helfen, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit aktueller Software und den neuesten Sicherheitsverbesserungen läuft, solltest du zuerst Systemupdates durchführen. Führe dazu den folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor dem Fortfahren die neuesten Sicherheitspatches und Paketversionen hat.

### Abhängigkeiten installieren
Sobald der Aktualisierungsvorgang abgeschlossen ist, kann mit der Installation der Abhängigkeiten fortgefahren werden. 

#### Snap
Die Notepad++‑Software erfordert, dass Snap zunächst installiert wird. Führe dazu den folgenden Befehl aus: 
```
sudo apt install snapd
```




## Installation
Nun, da alle Anforderungen erfüllt sind und die notwendigen Vorbereitungen abgeschlossen wurden, kannst du mit der Installation der Notepad++‑Anwendung fortfahren. Führe dazu den folgenden Befehl aus:

```
sudo snap install notepad-plus-plus
```

Notepad++ wird mit dem offiziellen Installationsskript heruntergeladen und installiert. Lasse den Prozess einfach bis zum Ende laufen. Anschließend kannst du die Anwendung sofort starten.

![img](https://screensaver01.zap-hosting.com/index.php/s/ca9Z8D37wCSrDbf/preview)



## Konfiguration

Notepad++ bietet viele Anpassungsoptionen unter *Settings > Preferences*, mit denen du den Editor an deinen Workflow anpassen kannst:

- **Allgemein**: Steuere das Startverhalten, z. B. das erneute Laden zuvor geöffneter Dateien, setze eine Standardsprache oder definiere das Tab‑Verhalten.  
- **Editor‑Einstellungen**: Passe Schriftart und ‑größe, Tab‑Breite, Zeilennummern, Auto‑Einrückung oder die Anzeige von Leerzeichen‑ und Tab‑Marken an.  
- **Farbschemata & Syntax**: Nutze den „Style Configurator“, um Themes zu wechseln und die Syntaxhervorhebung für jede unterstützte Sprache zu individualisieren.  
- **Dateihandling**: Konfiguriere Optionen wie automatisches Neuladen bei Änderungen, Verhalten bei großen Dateien oder Kodierungsvorgaben wie UTF‑8.  
- **Sicherheit & Backup**: Aktiviere automatische Backups oder Sitzungswiederherstellung, um Datenverlust zu vermeiden.  
- **Plugins**: Installiere und verwalte Erweiterungen über den Plugin‑Manager, um Funktionen wie FTP‑Support oder erweitertes Formatieren hinzuzufügen.  

Diese Einstellungen machen Notepad++ hochgradig anpassbar, egal ob für einfache Textbearbeitung oder vollständige Softwareentwicklung.

![img](https://screensaver01.zap-hosting.com/index.php/s/X8og5qnFkBTRcmA/preview)




## Abschluss und weitere Ressourcen

Glückwunsch! Du hast Notepad++ jetzt erfolgreich auf deinem vServer installiert und konfiguriert. Wir empfehlen außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir zusätzliche Hilfe und Orientierung während deiner Serverkonfiguration bieten können

- [notepad-plus-plus.org/](https://notepad-plus-plus.org/) – Offizielle Website

Hast du spezielle Fragen, die hier nicht abgedeckt sind? Für weitere Fragen oder Unterstützung wende dich bitte an unser Support‑Team, das täglich für dich da ist! 🙂



<InlineVoucher />