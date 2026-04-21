---
id: vserver-one-click-apps-installer
title: "VPS: One Click Apps Installer"
description: "Setze Apps mit dem VPS One Click Apps Installer ein, verwalte Projekte über die Weboberfläche und nutze Coolify für erweiterte App-Verwaltung -> Jetzt mehr erfahren"
sidebar_label: One Click App Installer
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der One Click Apps Installer ermöglicht dir, durch einen umfangreichen App-Katalog zu stöbern und Apps direkt über die Weboberfläche deines VPS zu deployen. In dieser Anleitung lernst du, wie du deinen Server vorbereitest, den richtigen Installationstyp auswählst, Apps installierst und verwaltest sowie erweiterte Einstellungen und Troubleshooting-Tools bei Bedarf nutzt.

![img](https://screensaver01.zap-hosting.com/index.php/s/GDwkwA8Mi4gHS7D/preview)

<InlineVoucher />

## Vorbereitung

Bevor du den One Click Apps Installer nutzt, muss dein VPS die Mindestanforderungen erfüllen und ein unterstütztes Betriebssystem verwenden.

:::info Mindestanforderungen
Die Apps-Funktion benötigt, dass dein VPS online ist und mit ausreichend Ressourcen konfiguriert wurde, um sowohl die Plattformdienste als auch deine installierten Apps zuverlässig auszuführen.
:::

| Anforderung | Minimum | Empfohlen |
| --- | --- | --- |
| Serverstatus | Online | Online |
| Speicherplatz | 30 GB | 50 GB |
| RAM | 2 GB | 4 GB |
| CPU | 2 Kerne | 4 Kerne |
| Betriebssystem | Debian oder Ubuntu LTS | Debian 13 - EN - 64bit |

:::caution Frisches Betriebssystem empfohlen
Es wird dringend empfohlen, die Apps-Funktion auf einer frischen Betriebssysteminstallation einzurichten. So vermeidest du Konflikte mit bestehenden Diensten, belegten Ports, Docker-Setups oder individuellen Konfigurationen, die bereits auf dem Server vorhanden sind.
:::

Falls du deinen VPS neu installieren musst, nutze ein frisches, unterstütztes Debian- oder Ubuntu LTS-Image aus deinem VPS-Management-Interface.

## Zugriff auf den One Click Apps Installer

Öffne deinen VPS im ZAP-Hosting Webinterface und finde den Bereich One Click Apps. Dort kannst du die Erstkonfiguration starten und später alle installierten Apps auf dem Server verwalten.

Beim ersten Öffnen dieser Funktion musst du auswählen, wie die Plattform auf deinem VPS installiert werden soll.

## Auswahl des Installationstyps

Du kannst zwischen einer Vollinstallation und einer Node-only-Installation wählen. Die richtige Option hängt davon ab, ob dieser VPS sowohl das Management-Panel als auch die Apps hosten soll oder nur als verknüpfter Node für ein anderes Panel fungiert.

### Vollinstallation

Wähle **Vollinstallation**, wenn du den Server mit dem Panel und dem Server selbst als Node einrichten möchtest. Dies ist die empfohlene Option für Einsteiger und die meisten Standard-Deployments.

Mit dieser Methode kannst du:

- Apps aus dem App-Katalog deployen
- Projekte und Umgebungen verwalten
- alle Apps an einem Ort organisieren
- die integrierten Webinterface-Verwaltungstools nutzen
- bei Bedarf später auf das erweiterte Panel zugreifen

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Für die meisten Nutzer empfohlen
Wenn du die Apps-Funktion zum ersten Mal nutzt, wähle die Vollinstallation. Sie bietet die einfachste Einrichtung und volle Verwaltung direkt über das ZAP-Hosting Webinterface.
:::

### Node-only-Installation

Wähle **Node-only-Installation**, wenn dieser VPS nur als Node fungieren soll. Du kannst ihn dann mit einem anderen VPS-Server oder einer externen Panel-Instanz verknüpfen.

Diese Option ist sinnvoll, wenn du:

- über mehrere VPS-Systeme skalieren möchtest
- das Management auf einem zentralen Panel bündeln willst
- diesen Server an eine bestehende Deployment-Umgebung anbinden möchtest
- ein bestehendes Multi-Node-Setup erweitern willst

:::note Erweiterte Deployment-Option
Die Node-only-Installation ist für Nutzer gedacht, die bereits eine andere Panel-Instanz haben oder diesen Server an eine externe Umgebung anbinden möchten.
:::

## Installation der Apps-Funktion

Nach der Auswahl des Installationstyps startest du die Einrichtung über das Webinterface. Die Erstinstallation dauert in der Regel nur wenige Minuten.

Während dieses Prozesses werden die Plattformdienste für die One Click Apps-Funktion auf deinem VPS bereitgestellt. Nach Abschluss sind der App-Katalog und die Verwaltungsbereiche im Webinterface verfügbar.

:::info Installationsverlauf
Der genaue Fortschritt der Installation kann je nach VPS-Leistung, Zustand des Betriebssystems und Netzwerkbedingungen variieren. Falls die Einrichtung nicht erfolgreich abgeschlossen wird, schaue später im Troubleshooting-Abschnitt dieser Anleitung nach.
:::

## Durchstöbern des App-Katalogs

Nach der Installation kannst du den App-Katalog öffnen und die verfügbaren Apps durchsuchen. Der Katalog enthält über 300 sofort einsatzbereite Apps und unterstützt Filter, damit du schnell die passende App findest.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Apps suchen und filtern

Im Katalog kannst du Apps nach Namen suchen und nach Kategorien filtern. So kannst du die große Auswahl im App-Store-Stil eingrenzen und das passende Deployment-Ziel für dein Projekt finden.

Typische Aktionen sind:

- Suche nach App-Namen
- Filterung nach Kategorie
- Durchsicht der verfügbaren App-Einträge
- Auswahl einer App zur Installation

Dieser Workflow ist besonders praktisch, wenn du viele Apps verwaltest oder mehrere Dienste vor der Installation vergleichst.

### Start einer App-Installation

Nach der Auswahl einer App aus dem Katalog startest du die Installation über das Webinterface. Je nach App musst du Werte wie diese definieren:

- `[dein_projektname]`
- `[dein_umgebungsname]`
- `[deine_domain]`
- `[dein_appname]`

Diese Platzhalter stehen für spezifische Werte deiner Deployment-Umgebung. Zum Beispiel sollte `[deine_domain]` durch die Domain ersetzt werden, die du für die App nutzen möchtest.

:::tip Projekte und Umgebungen
Nutze Projekte und Umgebungen, um dein Deployment übersichtlich zu halten. Das ist besonders hilfreich, wenn du mehrere Apps hostest, Versionen testest oder Produktions- und Staging-Services trennst.
:::

## Verwaltung installierter Apps

Nach dem Deployment werden deine installierten Apps im Verwaltungsbereich des Webinterfaces aufgelistet. Von hier aus kannst du deine Services überwachen und steuern, ohne manuell mit den zugrundeliegenden Containern arbeiten zu müssen.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Verfügbare Verwaltungsaktionen

Der Bereich für installierte Apps erlaubt dir, gängige Lifecycle-Aktionen direkt über das Webinterface auszuführen.

| Aktion | Zweck |
| --- | --- |
| Starten | Startet eine gestoppte App |
| Stoppen | Stoppt eine laufende App |
| Logs prüfen | Öffnet die App-Logs zur Fehlerbehebung |
| Neu installieren | Setzt die App neu auf |

Diese Tools erleichtern die Verwaltung aller Apps an einem Ort, besonders wenn du einfache Web-basierte Kontrolle statt manueller Kommandozeilenarbeit bevorzugst.

### Organisation von Projekten und Umgebungen

Projekte und Umgebungen helfen dir, deine Deployments klar zu strukturieren. Du kannst sie nutzen, um zu trennen:

- private und produktive Apps
- Test- und Live-Umgebungen
- mehrere Kunden- oder Team-Deployments
- verschiedene Stacks auf demselben VPS

Diese Organisation wird immer wichtiger, je größer deine App-Store-App-Sammlung wird und je mehr Services du auf einem oder mehreren Nodes verwaltest.

## Domains, Cloud-Zugriff und SSL

Die One Click Apps-Funktion unterstützt eigene Domains und die ZAP Cloud-Integration. So kannst du Apps sicher zugänglich machen und SSL-Zertifikate für deine Deployments bereitstellen.

:::info Domain- und SSL-Unterstützung
Du kannst eigene Domains für deine Apps verwenden und von der automatischen SSL-Zertifikatsbereitstellung profitieren, sofern die Plattform das Setup unterstützt.
:::

Beim Zuweisen einer Domain stelle sicher, dass deine DNS-Einträge auf `[deine_server_ip]` zeigen. Wenn deine Domain nicht korrekt konfiguriert ist, wird die App möglicherweise nicht aus dem Internet erreichbar sein.

| Wert | Beschreibung |
| --- | --- |
| `[deine_domain]` | Die Domain oder Subdomain, die deiner App zugewiesen ist |
| `[deine_server_ip]` | Die öffentliche IP-Adresse deines VPS |

:::caution DNS muss auf deinen VPS zeigen
Wenn der DNS für `[deine_domain]` nicht auf `[deine_server_ip]` zeigt, kann die Domainvalidierung und der App-Zugriff fehlschlagen.
:::

## Nutzung erweiterter Einstellungen

Fortgeschrittene Nutzer können über das externe Panel im Bereich der erweiterten Einstellungen zusätzliche Funktionen nutzen.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

Das ist praktisch, wenn du tiefere Anpassungen, erweiterte Deployment-Kontrolle oder direkten Zugriff auf Funktionen jenseits der Standard-Weboberfläche brauchst.

### Wichtige Support-Einschränkung

:::caution Supportumfang bei Nutzung des erweiterten Panels
Fortgeschrittene Nutzer können das externe Coolify-Panel für zusätzliche Anpassungen und Funktionen verwenden. Der Support beschränkt sich jedoch auf das ZAP-Hosting Webinterface. Änderungen außerhalb des Webinterfaces können vom Support nicht abgedeckt werden.
:::

### Wann das erweiterte Panel nutzen?

Das erweiterte Panel ist sinnvoll, wenn du:

- detailliertere Deployment-Anpassungen brauchst
- direkte Node-Verknüpfungs-Workflows nutzen möchtest
- erweiterte App-Konfigurationen vornehmen willst
- Panel-Management jenseits der vereinfachten Oberfläche benötigst

Falls du den Zugriff verlierst oder die Integration nicht mehr reagiert, nutze die unten beschriebenen Troubleshooting-Tools, bevor du manuelle Änderungen vornimmst.

## Nodes verknüpfen

Wenn du die Node-only-Installation gewählt hast, kannst du diesen VPS mit einem anderen VPS-Server oder einer externen Panel-Instanz verknüpfen. So kannst du deine Infrastruktur skalieren und mehrere Nodes zentral verwalten.

Node-Verknüpfung ist sinnvoll, wenn du:

- Apps auf mehrere VPS-Systeme verteilen möchtest
- das Management zentralisieren willst
- Kapazitäten erweitern möchtest, ohne isolierte Deployments zu erstellen
- dich mit einer externen Panel-Umgebung verbinden willst

:::note Externe Panel-Verknüpfung
Du kannst deinen Node mit einem anderen VPS oder einer externen Panel-Instanz verbinden. Die genauen Verknüpfungsdetails hängen von der bereits genutzten Zielumgebung ab.
:::

## Troubleshooting bei degradiertem Status

Wenn das Webinterface einen degradierten Status anzeigt, bedeutet das, dass die Plattform die Instanz, die die One Click Apps-Funktion betreibt, nicht erreichen oder keine Daten abrufen kann. Folge den Troubleshooting-Schritten in chronologischer Reihenfolge.

### Statusanzeigen

Das Troubleshooting-Popup kann folgende Indikatoren anzeigen:

| Status | Bedeutung |
| --- | --- |
| Coolify Status: Aktiv | Der Panel-Dienst scheint zu laufen |
| API Status: Erreichbar | Die API ist aktuell erreichbar |
| Service Status: Online | Dein VPS selbst ist online |

Wenn ein oder mehrere Teile nicht korrekt funktionieren, fahre mit den folgenden Schritten fort.

### Schritt 1: VPS-Status prüfen

Stelle zuerst sicher, dass dein VPS im ZAP-Hosting Webinterface online ist. Wenn der Server offline ist, kann die Apps-Plattform nicht funktionieren.

### Schritt 2: Status aktualisieren

Nutze die Aktion **Status aktualisieren**, um den Gesundheitscheck mit den neuesten Daten erneut auszuführen. Das kann temporäre Verbindungsprobleme beheben.

:::tip Temporäre Verbindungsprobleme
Ein degradierten Zustand kann manchmal durch kurzzeitige Kommunikationsprobleme verursacht werden. Das Aktualisieren des Status ist der schnellste erste Check.
:::

### Schritt 3: Docker neu starten

Bleibt der Status degradiert, nutze die Aktion **Docker neu starten**. Dadurch wird die Plattform-Instanz neu gestartet. Nach erfolgreicher Rückmeldung warte `1-2 Minuten` und aktualisiere den Status erneut.

:::caution Dienstneustart
Das Neustarten von Docker kann laufende Apps vorübergehend unterbrechen, während die Dienste neu starten.
:::

### Schritt 4: Zugangsdaten aktualisieren

Als letzten Schritt nutze **Zugangsdaten aktualisieren**. Das ist besonders wichtig, wenn der Status online anzeigt, aber Funktionen im Webinterface wie App-Installation nicht funktionieren.

Diese Aktion:

- löscht **nicht** deine Daten
- aktualisiert die Root-Benutzer-Zugangsdaten
- erneuert den API-Token, der vom Webinterface genutzt wird
- aktualisiert die Panel-Zugangsdaten automatisch bei Erfolg

:::info Sicheres Aktualisieren der Zugangsdaten
Das Aktualisieren der Zugangsdaten entfernt keine installierten Apps oder Deployment-Daten. Es erneuert nur die für Zugriff und Kommunikation benötigten Zugangsdaten.
:::

### Wann Support kontaktieren?

Wenn das Problem nach allen Troubleshooting-Schritten weiterhin besteht, erstelle bitte ein Support-Ticket über die ZAP-Hosting Webseite.

## Best Practices

Damit der One Click Apps Installer stabil und einfach zu verwalten bleibt, beachte diese Empfehlungen:

| Best Practice | Grund |
| --- | --- |
| Frische OS-Installation nutzen | Vermeidet Konflikte mit bestehenden Diensten und Ports |
| Empfohlene Ressourcen erfüllen | Verbessert Performance und Zuverlässigkeit |
| Apps in Projekte und Umgebungen organisieren | Hält Deployments übersichtlich |
| DNS vor Domain-Zuweisung konfigurieren | Verhindert Zugriffs- und SSL-Probleme |
| Erweiterte Einstellungen mit Bedacht nutzen | Vermeidet nicht unterstützte individuelle Änderungen |

:::tip Deployments organisiert halten
Wenn du viele Apps hosten möchtest, erstelle vor dem ersten Deployment ein klares Namensschema für `[dein_projektname]`, `[dein_umgebungsname]` und `[dein_appname]`.
:::

## Fazit

Glückwunsch, du hast den VPS One Click Apps Installer erfolgreich eingerichtet und genutzt, um Apps auf deinem Server zu deployen und zu verwalten. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren!

<InlineVoucher />