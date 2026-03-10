---
id: server-linux-coolify
title: Coolify auf einem Linux-Server einrichten – Self-Hosted Cloud-Anwendungen
description: "Entdecke, wie du Coolify installierst und einrichtest, um deine eigenen Anwendungen, Datenbanken und Services einfach selbst zu hosten → Jetzt mehr erfahren"
sidebar_label: Coolify installieren
services:
  - vserver-service-coolify
  - dedicated-service-coolify
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

[Coolify](https://coolify.io/) ist eine Open-Source, selbst gehostete Alternative zu Heroku und Vercel, mit der du deine Server, Anwendungen und Datenbanken ganz easy verwalten kannst.

![img](https://screensaver01.zap-hosting.com/index.php/s/nrXeZsgjXn43sfw/preview)

Das intuitive Dashboard von Coolify macht Self-Hosting zum Kinderspiel. Du hast volle Kontrolle über deine Infrastruktur, automatisierte GitHub-Deployments und hältst deine Cloud-Kosten niedrig.

In dieser Anleitung zeigen wir dir Schritt für Schritt, wie du Coolify einrichtest, dein Admin-Konto vorkonfigurierst und alles einstellst, was du wissen musst.

<InlineVoucher />

## Anwendungsfälle von Coolify

Coolify eignet sich für viele verschiedene Alltagsszenarien und ist perfekt für alle, die App-Deployments automatisieren, Datenbanken hosten oder Background Worker betreiben wollen. Egal ob Anfänger oder Profi – Coolify ist für jeden was.

Coolify unterstützt out-of-the-box das Deployen von Static Sites, Node.js, Python, PHP, Rust und Docker-Containern. Es gibt coole One-Click-Templates wie WordPress, Ghost, Grafana, Appwrite, Nextcloud und PostgreSQL-Datenbanken. Außerdem kümmert es sich automatisch um Let's Encrypt SSL-Zertifikate und Reverse-Proxy-Routing via Traefik.

## Vorbereitung

Coolify ist zwar leichtgewichtig, aber der Ressourcenverbrauch kann je nach Anzahl der deployten Apps, Docker-Builds und gleichzeitig laufenden Datenbanken stark steigen. Wir empfehlen folgende Hardware-Anforderungen, um Coolify auf deinem VPS/Dedicated Server zu hosten:

| Hardware   | Minimum      | Empfohlen                 |
| ---------- | ------------ | ------------------------- |
| CPU        | 2 vCPU Kerne | 4 vCPU Kerne              |
| RAM        | 2 GB         | 4 GB+                     |
| Speicher   | 30 GB        | 50 GB+                    |

<InlineServiceLink />

Bevor du Coolify installierst, verbinde dich mit deinem Server und stelle sicher, dass das Betriebssystem auf dem neuesten Stand ist. Du musst dich per SSH mit Root-Zugriff verbinden. Falls du dabei Hilfe brauchst, haben wir eine Anleitung zum [SSH-Erstzugang](vserver-linux-ssh.md).

:::tip[SSH-Key Authentifizierung]
Wir **empfehlen dringend**, statt Passwort eine SSH-Key-Authentifizierung einzurichten. Wie das geht, erfährst du in unserer [SSH-Key Einrichtung](vserver-linux-sshkey.md) Anleitung.
:::

## Installation

Nachdem du dich mit deinem Server verbunden hast, update deine Systempakete und installiere `curl`, das für das Herunterladen des Coolify-Installationsskripts benötigt wird:

```bash
sudo apt update && sudo apt upgrade -y && sudo apt install curl -y
```

### Admin-Benutzer-Zugangsdaten vorbereiten

Coolify setzt strenge Sicherheitsregeln für dein Admin-Konto durch. Bevor du das Installationsskript startest, bereite deine Coolify Root-User-Zugangsdaten nach diesen Vorgaben vor:

* **Benutzername**
  * Mindestens 3 Zeichen lang
  * Maximal 255 Zeichen lang
  * Nur Buchstaben, Zahlen, Leerzeichen, Unterstriche und Bindestriche erlaubt
* **E-Mail**
  * Muss eine gültige E-Mail-Adresse sein
  * Muss einen gültigen DNS-Eintrag haben
  * Maximal 255 Zeichen lang
* **Passwort**
  * Mindestens 8 Zeichen lang
  * Muss Groß- und Kleinbuchstaben enthalten
  * Mindestens eine Zahl
  * Mindestens ein Sonderzeichen
  * Darf kein häufig genutztes oder kompromittiertes Passwort sein

### Installationsskript ausführen

Coolify bietet ein schnelles, automatisiertes Installationsskript. Um die Installation abzusichern, definieren wir die Root-Admin-Daten per Umgebungsvariablen vor. So wird unbefugter Zugriff während der Einrichtung verhindert.

Führe folgenden Befehl aus und ersetze Benutzername, E-Mail und Passwort durch deine sicheren Zugangsdaten:

```bash
env ROOT_USERNAME=zaphosting ROOT_USER_EMAIL=info@zap-hosting.com ROOT_USER_PASSWORD=zaphosting bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```
:::note[Open Source]
Den Quellcode des Installationsskripts findest du im [offiziellen Coolify Repository](https://github.com/coollabsio/coolify/blob/v4.x/scripts/install.sh)
:::

Das Skript installiert automatisch Docker, richtet die nötigen Netzwerke ein und konfiguriert die Coolify-Container. Je nach Server-Hardware kann das ein paar Minuten dauern.

![img](https://screensaver01.zap-hosting.com/index.php/s/Zx5DXzEH2MmrkrX/preview)

### Coolify aufrufen

Nach der Installation kannst du das Dashboard im Browser öffnen. Gib die IP-Adresse deines Servers mit Port 8000 ein: `http://[deine_server_ip]:8000`

Da du deine Zugangsdaten schon beim Installationsbefehl angegeben hast, landest du direkt auf dem Login-Screen und nicht im Setup-Assistenten.

Melde dich mit der E-Mail und dem Passwort an, die du im Terminal verwendet hast.

### DNS-Einträge einrichten

Nach dem Login solltest du als erstes eine eigene Domain einrichten. Der Zugriff über die IP-Adresse (`http://[deine_server_ip]:8000`) ist unsicher.

Mit einer Domain kann Coolify automatisch kostenlose SSL-Zertifikate für dein Dashboard und alle zukünftigen Apps generieren.

Gehe ins DNS-Management deines Domain-Anbieters und füge zwei neue `A`-Einträge hinzu, die auf deinen Server zeigen. Wenn deine Domain bei ZAP-Hosting registriert ist, hilft dir unsere [Domain-Einträge](domain-records.md) Anleitung beim Einrichten:

| Name / Host | Typ | Wert               | TTL           |
| ----------- | ----| ------------------ | ------------- |
| `@`         | A   | `[deine_server_ip]`| Auto / Niedrig|
| `*`         | A   | `[deine_server_ip]`| Auto / Niedrig|

:::info[DNS-Routing]
*   Der `@`-Eintrag erlaubt Coolify, die Root-Domain zu nutzen
*   Der `*`-Wildcard-Eintrag sorgt dafür, dass Coolify automatisch alle neuen Subdomains (z.B. `api.[deine_domain]`) routet, ohne dass du für jedes Projekt DNS-Einträge anlegen musst.
:::

### Domain für die Instanz konfigurieren

Um deine Coolify-Instanz mit einem SSL-Zertifikat abzusichern, solltest du ihr eine Domain zuweisen. Gehe dazu im linken Menü auf **Einstellungen** und finde das Feld **Instance Domain**. Trage deine Domain inklusive `https://` ein (z.B. `https://coolify.[deine_domain]`). Klicke auf **Speichern**, um den Schritt abzuschließen.

![img](https://screensaver01.zap-hosting.com/index.php/s/jYW63sF9k5sZez3/preview)

## Deine erste App deployen

Jetzt kannst du im Tab **Projekte** deine erste Anwendung deployen!

Klicke auf **+ Ressource hinzufügen**, um ein öffentliches Repository oder eine Docker-Compose-Datei hinzuzufügen oder wähle einen der vielen vorkonfigurierten Services aus der One-Click-Template-Bibliothek. Deine Coolify-Installation ist startklar!

![img](https://screensaver01.zap-hosting.com/index.php/s/nEf9XBDrfypijE7/preview)

## Fazit und weitere Ressourcen

Glückwunsch! Du hast Coolify erfolgreich auf deinem Server installiert und kannst direkt mit dem Deployen deiner Projekte loslegen. Wir empfehlen dir außerdem, einen Blick auf diese Ressourcen zu werfen, die dir bei der Server-Konfiguration weiterhelfen können:

- [coolify.io](https://coolify.io/) – Offizielle Webseite
- [coolify.io/docs](https://coolify.io/docs/) – Coolify Dokumentation

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Team täglich zur Seite! 🙂

<InlineVoucher />