---
id: verver-one-click-apps-installer
title: "VPS: One Click Apps Installer"
description: "Apps mit dem VPS One Click Apps Installer bereitstellen, Projekte über die Weboberfläche verwalten und Coolify für erweiterte App-Verwaltung nutzen -> Jetzt mehr erfahren"
sidebar_label: One Click App Installer
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der One Click Apps Installer ermöglicht dir, aus einem umfangreichen App-Katalog zu wählen und Apps direkt über die Weboberfläche deines VPS bereitzustellen. In dieser Anleitung lernst du, wie du deinen Server vorbereitest, den richtigen Installationstyp auswählst, Apps installierst und verwaltest sowie erweiterte Einstellungen und Troubleshooting-Tools nutzt.

<InlineVoucher />

## Vorbereitung

Bevor du den One Click Apps Installer nutzt, muss dein VPS die Mindestanforderungen erfüllen und ein unterstütztes Betriebssystem verwenden.

:::info Mindestanforderungen
Die Apps-Funktion benötigt, dass dein VPS online ist und über ausreichend Ressourcen verfügt, um sowohl die Plattformdienste als auch deine installierten Apps zuverlässig auszuführen.
:::

| Anforderung | Minimum | Empfohlen |
| --- | --- | --- |
| Serverstatus | Online | Online |
| Speicherplatz | 30 GB | 50 GB |
| RAM | 2 GB | 4 GB |
| CPU | 2 Kerne | 4 Kerne |
| Betriebssystem | Debian oder Ubuntu LTS | Debian 13 - EN - 64bit |

:::caution Frisches Betriebssystem empfohlen
Es wird dringend empfohlen, die Apps-Funktion auf einer frischen Betriebssysteminstallation einzurichten. So vermeidest du Konflikte mit bestehenden Diensten, belegten Ports, Docker-Setups oder individuellen Konfigurationen auf dem Server.
:::

Falls du deinen VPS vor der Nutzung neu installieren musst, verwende ein frisches, unterstütztes Debian- oder Ubuntu-LTS-Image aus deinem VPS-Management.

## Zugriff auf den One Click Apps Installer

Öffne deinen VPS im ZAP-Hosting Webinterface und finde den Bereich One Click Apps. Dort kannst du die Erstinstallation starten und später alle installierten Apps verwalten.

Beim ersten Öffnen dieser Funktion musst du auswählen, wie die Plattform auf deinem VPS installiert werden soll.

## Auswahl des Installationstyps

Du kannst zwischen einer Vollinstallation und einer Node-only-Installation wählen. Die richtige Option hängt davon ab, ob dein VPS sowohl das Management-Panel als auch die Apps hosten soll oder nur als verknüpfter Node für ein anderes Panel fungiert.

### Vollinstallation

Wähle **Vollinstallation**, wenn du den Server mit dem Panel und dem Server selbst als Node einrichten möchtest. Dies ist die empfohlene Option für Einsteiger und die meisten Standard-Setups.

Mit dieser Methode kannst du:

- Apps aus dem App-Katalog bereitstellen  
- Projekte und Umgebungen verwalten  
- alle Apps an einem Ort organisieren  
- die integrierten Webinterface-Verwaltungstools nutzen  
- bei Bedarf später auf das erweiterte Panel zugreifen  

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Für die meisten Nutzer empfohlen
Wenn du die Apps-Funktion zum ersten Mal nutzt, wähle die Vollinstallation. Sie bietet die einfachste Einrichtung und volle Verwaltung direkt über das ZAP-Hosting Webinterface.
:::

### Node-only-Installation

Wähle **Node-only-Installation**, wenn dein VPS nur als Node fungieren soll. Du kannst ihn dann mit einem anderen VPS oder einer externen Panel-Instanz verknüpfen.

Diese Option ist sinnvoll, wenn du:

- über mehrere VPS-Systeme skalieren möchtest  
- das Management auf einem Panel zentralisieren willst  
- diesen Server in eine bestehende Installation einbinden möchtest  
- ein bestehendes Multi-Node-Setup erweitern willst  

:::note Erweiterte Deployment-Option
Die Node-only-Installation ist für Nutzer gedacht, die bereits ein anderes Panel nutzen oder den Server mit einer externen Umgebung verbinden wollen.
:::

## Installation der Apps-Funktion

Nach Auswahl des Installationstyps startest du die Einrichtung über das Webinterface. Die Erstinstallation dauert in der Regel nur wenige Minuten.

Währenddessen werden die Plattformdienste für die One Click Apps Funktion auf deinem VPS bereitgestellt. Nach Abschluss sind der App-Katalog und die Verwaltungsbereiche im Webinterface verfügbar.

:::info Installationsverlauf
Der genaue Fortschritt kann je nach VPS-Leistung, Betriebssystemzustand und Netzwerkbedingungen variieren. Falls die Einrichtung nicht erfolgreich ist, findest du weiter unten im Guide eine Fehlerbehebung.
:::

## Durchsuchen des App-Katalogs

Nach der Installation kannst du den App-Katalog öffnen und die verfügbaren Apps durchsuchen. Der Katalog enthält über 300 sofort einsatzbereite Apps und bietet Filterfunktionen, um schnell die passende App zu finden.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Apps suchen und filtern

Im Katalog kannst du Apps nach Namen suchen und nach Kategorien filtern. So findest du schnell den richtigen Deployment-Zielort für dein Projekt.

Typische Aktionen sind:

- Suche nach App-Namen  
- Filterung nach Kategorie  
- Durchsicht der verfügbaren App-Einträge  
- Auswahl einer App zur Installation  

Dieser Workflow ist besonders hilfreich, wenn du viele Apps verwaltest oder mehrere Dienste vor der Installation vergleichst.

### App-Installation starten

Nach Auswahl einer App im Katalog startest du die Installation über das Webinterface. Je nach App musst du Werte wie diese definieren:

- `[your_project_name]`  
- `[your_environment_name]`  
- `[your_domain]`  
- `[your_app_name]`  

Diese Platzhalter stehen für spezifische Werte deiner Bereitstellung. Zum Beispiel ersetzt du `[your_domain]` durch die Domain, die du für die App verwenden möchtest.

:::tip Projekte und Umgebungen
Nutze Projekte und Umgebungen, um deine Bereitstellung übersichtlich zu halten. Das ist besonders praktisch, wenn du mehrere Apps hostest, Versionen testest oder Produktions- und Staging-Services trennst.
:::

## Verwaltung installierter Apps

Nach der Bereitstellung werden deine installierten Apps im Verwaltungsbereich des Webinterfaces aufgelistet. Von hier aus kannst du deine Dienste überwachen und steuern, ohne manuell mit den zugrundeliegenden Containern arbeiten zu müssen.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Verfügbare Verwaltungsaktionen

Der Bereich für installierte Apps ermöglicht dir gängige Lifecycle-Aktionen direkt im Webinterface.

| Aktion | Zweck |
| --- | --- |
| Starten | Startet eine gestoppte App |
| Stoppen | Stoppt eine laufende App |
| Logs prüfen | Öffnet die App-Logs zur Fehlerbehebung |
| Neu installieren | Setzt die App neu auf |

Diese Tools erleichtern die Verwaltung aller Apps an einem Ort, besonders wenn du eine einfache Websteuerung statt manueller Kommandozeilenarbeit bevorzugst.

### Projekte und Umgebungen organisieren

Projekte und Umgebungen helfen dir, deine Deployments klar zu strukturieren. Du kannst damit trennen:

- persönliche und produktive Apps  
- Test- und Live-Umgebungen  
- mehrere Kunden- oder Team-Deployments  
- verschiedene Stacks auf demselben VPS  

Diese Organisation wird wichtiger, je größer deine App-Sammlung wird und je mehr Dienste du auf einem oder mehreren Nodes verwaltest.

## Domains, Cloud-Zugriff und SSL

Die One Click Apps Funktion unterstützt benutzerdefinierte Domains und die ZAP Cloud-Integration. So kannst du Apps sicher bereitstellen und SSL-Zertifikate für deine Deployments ausstellen lassen.

:::info Domain- und SSL-Unterstützung
Du kannst benutzerdefinierte Domains für deine Apps nutzen und von der automatischen SSL-Zertifikatsbereitstellung profitieren, sofern die Plattform das unterstützt.
:::

Beim Zuweisen einer Domain stelle sicher, dass deine DNS-Einträge auf `[your_server_ip]` zeigen. Ist deine Domain nicht korrekt konfiguriert, ist die App möglicherweise nicht aus dem Internet erreichbar.

| Wert | Beschreibung |
| --- | --- |
| `[your_domain]` | Die Domain oder Subdomain, die deiner App zugewiesen ist |
| `[your_server_ip]` | Die öffentliche IP-Adresse deines VPS |

:::caution DNS muss auf deinen VPS zeigen
Wenn der DNS für `[your_domain]` nicht auf `[your_server_ip]` zeigt, kann die Domainvalidierung und der Zugriff auf die App fehlschlagen.
:::

## Nutzung erweiterter Einstellungen

Fortgeschrittene Nutzer können über das externe Panel im Bereich der erweiterten Einstellungen zusätzliche Funktionen nutzen.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

Das ist hilfreich, wenn du tiefere Anpassungen, erweiterte Deployment-Kontrolle oder direkten Zugriff auf Funktionen außerhalb der Standard-Weboberfläche benötigst.

### Wichtige Support-Einschränkung

:::caution Supportumfang bei Nutzung des erweiterten Panels
Fortgeschrittene Nutzer können das externe Coolify-Panel für mehr Anpassungen verwenden. Der Support beschränkt sich jedoch auf das ZAP-Hosting Webinterface. Änderungen außerhalb des Webinterfaces können nicht unterstützt werden.
:::

### Wann das erweiterte Panel nutzen?

Das erweiterte Panel ist sinnvoll, wenn du:

- detailliertere Deployment-Anpassungen brauchst  
- direkte Node-Verknüpfungen verwalten willst  
- erweiterte App-Konfigurationen durchführen möchtest  
- Panel-Management jenseits der vereinfachten Oberfläche benötigst  

Falls du den Zugriff verlierst oder die Integration nicht mehr reagiert, nutze zuerst die unten beschriebenen Troubleshooting-Tools, bevor du manuelle Änderungen vornimmst.

## Nodes verknüpfen

Wenn du die Node-only-Installation gewählt hast, kannst du diesen VPS mit einem anderen VPS oder einer externen Panel-Instanz verknüpfen. So kannst du deine Infrastruktur skalieren und mehrere Nodes zentral verwalten.

Node-Verknüpfungen sind sinnvoll, wenn du:

- Apps auf mehrere VPS-Systeme verteilen möchtest  
- das Management zentralisieren willst  
- Kapazitäten erweitern möchtest, ohne isolierte Deployments zu erstellen  
- dich mit einer externen Panel-Umgebung verbinden willst  

:::note Externe Panel-Verknüpfung
Du kannst deinen Node mit einem anderen VPS oder einer externen Panel-Instanz verbinden. Die genauen Verknüpfungsdetails hängen von der Zielumgebung ab.
:::

## Fehlerbehebung bei verschlechtertem Status

Wenn das Webinterface einen verschlechterten Status anzeigt, kann die Plattform keine Verbindung zur Instanz herstellen, die die One Click Apps Funktion betreibt. Folge den Troubleshooting-Schritten in der angegebenen Reihenfolge.

### Statusanzeigen

Das Troubleshooting-Popup zeigt möglicherweise folgende Statusanzeigen:

| Status | Bedeutung |
| --- | --- |
| Coolify Status: Aktiv | Der Panel-Dienst läuft offenbar |
| API Status: Erreichbar | Die API ist aktuell erreichbar |
| Service Status: Online | Dein VPS ist online |

Wenn eine oder mehrere Komponenten nicht funktionieren, fahre mit den folgenden Schritten fort.

### Schritt 1: VPS-Status prüfen

Stelle zuerst sicher, dass dein VPS im ZAP-Hosting Webinterface online ist. Ist der Server offline, kann die Apps-Plattform nicht funktionieren.

### Schritt 2: Status aktualisieren

Nutze die Aktion **Status aktualisieren**, um die Gesundheitsprüfung mit aktuellen Daten erneut auszuführen. Das kann temporäre Verbindungsprobleme beheben.

:::tip Temporäre Verbindungsprobleme
Ein verschlechterter Zustand kann durch kurzzeitige Kommunikationsprobleme verursacht werden. Das Aktualisieren des Status ist der schnellste erste Check.
:::

### Schritt 3: Docker neu starten

Bleibt der Status verschlechtert, nutze die Aktion **Docker neu starten**. Dadurch wird die Plattforminstanz neu gestartet. War die Antwort erfolgreich, warte `1-2 Minuten` und aktualisiere den Status erneut.

:::caution Dienstneustart
Das Neustarten von Docker kann laufende Apps vorübergehend unterbrechen, während die Dienste neu starten.
:::

### Schritt 4: Zugangsdaten aktualisieren

Als letzten Schritt nutze **Zugangsdaten aktualisieren**. Das ist besonders wichtig, wenn der Status online anzeigt, aber Funktionen wie App-Installation nicht funktionieren.

Diese Aktion:

- löscht **nicht** deine Daten  
- aktualisiert die Root-Benutzer-Zugangsdaten  
- erneuert den API-Token, den das Webinterface nutzt  
- aktualisiert die Panel-Zugangsdaten automatisch bei Erfolg  

:::info Sichere Aktualisierung der Zugangsdaten
Das Aktualisieren der Zugangsdaten entfernt keine installierten Apps oder Deployment-Daten. Es erneuert nur die für Zugriff und Kommunikation benötigten Credentials.
:::

### Wann Support kontaktieren

Wenn das Problem nach allen Schritten weiterhin besteht, erstelle bitte ein Support-Ticket über die ZAP-Hosting Webseite.

## Best Practices

Damit der One Click Apps Installer stabil und einfach zu verwalten bleibt, beachte diese Empfehlungen:

| Best Practice | Grund |
| --- | --- |
| Frische OS-Installation verwenden | Vermeidet Konflikte mit bestehenden Diensten und Ports |
| Empfohlene Ressourcen einhalten | Verbessert Leistung und Zuverlässigkeit |
| Apps in Projekte und Umgebungen organisieren | Hält Deployments übersichtlich |
| DNS vor Domain-Zuweisung konfigurieren | Verhindert Zugriffs- und SSL-Probleme |
| Erweiterte Einstellungen mit Bedacht nutzen | Vermeidet nicht unterstützte Änderungen |

:::tip Deployments organisiert halten
Wenn du viele Apps hosten möchtest, erstelle vor der ersten Bereitstellung ein klares Namensschema für `[your_project_name]`, `[your_environment_name]` und `[your_app_name]`.
:::

## Fazit

Glückwunsch, du hast den VPS One Click Apps Installer erfolgreich eingerichtet und genutzt, um Apps auf deinem Server bereitzustellen und zu verwalten. Für weitere Fragen oder Unterstützung steht dir unser Support-Team täglich zur Verfügung!

<InlineVoucher />