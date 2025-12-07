---
id: vserver-windows-bitwarden
title: "VPS: Bitwarden auf Windows einrichten"
description: "Entdecke, wie du Bitwarden sicher selbst hostest, um Passwörter mit Ende-zu-Ende-Verschlüsselung und starken Credential-Features zu managen → Jetzt mehr erfahren"
sidebar_label: Bitwarden installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Bitwarden ist ein Open-Source-Passwortmanager für Passwörter und Passkeys, der Zero-Knowledge und Ende-zu-Ende-Verschlüsselung nutzt, um deine Daten zu schützen. Du kannst ihn als Cloud-Service nutzen oder selbst hosten – mit Features zum Generieren, Speichern und automatischen Ausfüllen starker Zugangsdaten.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Willst du den Service selbst hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

<InlineVoucher />



## Voraussetzungen

Bevor du **Bitwarden** installierst, stelle sicher, dass deine Hosting-Umgebung folgende Anforderungen erfüllt, damit die Installation reibungslos läuft und die Performance top ist.

| Hardware   | Minimum      | ZAP-Hosting Empfehlung    |
| ---------- | ------------ | ------------------------- |
| CPU        | 1 vCPU Kern  | 4 vCPU Kerne              |
| RAM        | 2 GB         | 4 GB                      |
| Speicher   | 12 GB        | 25 GB                     |

Die Software benötigt alle nötigen Abhängigkeiten und muss auf einem unterstützten Betriebssystem laufen. Check also vor der Installation, ob dein Server folgende Anforderungen erfüllt:

**Abhängigkeiten:** `Docker (Engine 26+ und Compose)`

**Betriebssystem:** Neueste Windows Server Version mit Docker 26+ Support

Stell sicher, dass alle Abhängigkeiten installiert sind und das richtige OS läuft, um Kompatibilitätsprobleme bei der Bitwarden-Installation zu vermeiden.



## Vorbereitung

Bevor du mit der **Bitwarden**-Installation startest, solltest du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen und alle nötigen Abhängigkeiten zu installieren. So sorgst du für eine stabile Umgebung und vermeidest Probleme während oder nach der Installation.


### System aktualisieren
Damit dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst alle Updates einspielen. So hast du die neuesten Sicherheitspatches und Softwareversionen am Start, bevor es losgeht.

### Abhängigkeiten installieren
Nach dem Update kannst du die Abhängigkeiten installieren. Bitwarden läuft in mehreren Docker-Containern, daher muss Docker zuerst installiert sein. Installiere dazu [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) auf deinem Server.

Eine ausführliche Anleitung zur Docker-Installation und Nutzung findest du in unserem [Docker](vserver-windows-docker.md) Guide.



### Benutzer & Verzeichnis anlegen

Wir empfehlen, auf deinem Windows Server einen eigenen `bitwarden` Service-Account anzulegen, von dem aus du Bitwarden installierst und betreibst. So bleibt deine Bitwarden-Instanz sauber von anderen Anwendungen getrennt.

Öffne PowerShell als Administrator und erstelle den lokalen Bitwarden-Benutzer mit diesen Befehlen. Nach dem ersten Befehl erscheint ein Passwort-Eingabefenster. Gib dein Wunschpasswort ein und bestätige. Dann den zweiten Befehl ausführen, um die Einrichtung abzuschließen.

```
PS C:\> $Password = Read-Host -AsSecureString
New-LocalUser "Bitwarden" -Password $Password -Description "Bitwarden Local Admin"
```

Erstelle anschließend einen Bitwarden-Ordner unter `C:\` für den neuen User:

```
PS C:\> mkdir Bitwarden
```

In Docker Desktop gehst du zu **Settings → Resources → File Sharing**. Füge den Pfad `C:\Bitwarden` zu den freigegebenen Verzeichnissen hinzu. Klicke auf Apply & Restart, um die Änderungen zu übernehmen.



### Domain konfigurieren

Standardmäßig läuft Bitwarden auf dem Host über die Ports 80 (HTTP) und 443 (HTTPS). Richte eine Domain mit DNS-Einträgen ein, die auf deinen Host zeigen, z.B. server.example.com – vor allem, wenn du Bitwarden öffentlich im Internet anbieten willst. Vermeide es, Bitwarden im Hostnamen zu verwenden, um nicht direkt auf die Serverrolle oder Software hinzuweisen.




## Installation
Wenn alle Voraussetzungen erfüllt und die Vorbereitung abgeschlossen ist, kannst du mit der Bitwarden-Installation starten.

Lade das Bitwarden-Installationsskript auf deinen Server und führe es aus:

```
cd C:\Bitwarden
Invoke-RestMethod -OutFile bitwarden.ps1 -Uri "https://func.bitwarden.com/api/dl/?app=self-host&platform=windows"
.\bitwarden.ps1 -install
```

Im Installer gibst du zuerst den Domainnamen deiner Bitwarden-Instanz ein, also den konfigurierten DNS-Eintrag. Dann wählst du, ob Let’s Encrypt ein kostenloses, vertrauenswürdiges SSL-Zertifikat erstellen soll. Falls ja, gibst du eine E-Mail für Ablaufbenachrichtigungen an. Falls nein, folgen Fragen zum Zertifikat.

Trage deine Installations-ID und den Installationsschlüssel ein, die du bei [Bitwarden](https://bitwarden.com/host) bekommst. Wähle dann die Region US oder EU – relevant nur, wenn du eine selbst gehostete Instanz mit einem kostenpflichtigen Abo verbindest.

Wenn du kein Let’s Encrypt nutzt, kannst du ein bestehendes Zertifikat verwenden, indem du die Dateien in `C:\Bitwarden\bwdata\ssl\<deine_domain>` ablegst und angibst, ob es vertrauenswürdig ist. Alternativ kannst du ein selbstsigniertes Zertifikat generieren – das empfehlen wir nur zum Testen. Wenn du kein Zertifikat nutzt, brauchst du einen HTTPS-Proxy vor der Installation, sonst funktionieren Bitwarden-Apps nicht.



## Konfiguration

Nach der Installation machst du die Grundkonfiguration über zwei Dateien. Bearbeite zuerst die Umgebungsdatei unter `\bwdata\env\global.override.env`. Trage dort deine SMTP-Server-Daten ein – Host, Port, SSL, Benutzername und Passwort – damit Bitwarden Verifizierungs- und Organisations-Einladungsmails verschicken kann. Wenn du Zugriff auf das System-Admin-Portal brauchst, füge eine Admin-E-Mail zu `adminSettings__admins` hinzu.

```
...
globalSettings__mail__smtp__host=<platzhalter>
globalSettings__mail__smtp__port=<platzhalter>
globalSettings__mail__smtp__ssl=<platzhalter>
globalSettings__mail__smtp__username=<platzhalter>
globalSettings__mail__smtp__password=<platzhalter>
...
adminSettings__admins=
...
```

Teste die SMTP-Konfiguration. Bei korrekter Einrichtung bekommst du eine Erfolgsmeldung; sonst siehst du Hinweise zu fehlendem OpenSSL oder falschen Werten. Änderungen übernimmst du mit `.\bitwarden.ps1 -start`.

Wenn alles passt, starte Bitwarden mit `.\bitwarden.ps1 -restart`.

Prüfe danach die Installationsparameter in `.\bwdata\config.yml`. Diese Datei steuert die generierten Assets und muss bei speziellen Setups angepasst werden, z.B. wenn du hinter einem Proxy bist oder andere Ports nutzt. Änderungen übernimmst du mit `.\bitwarden.ps1 -rebuild`.

Zum Schluss startest du die Instanz mit `.\bitwarden.ps1 -start`. Der erste Start kann dauern, weil Docker die Images lädt. Mit `docker ps` kannst du checken, ob alle Container healthy sind. Dann öffne das Web Vault unter deiner Domain und registriere dich, falls nötig. Für die E-Mail-Verifizierung muss SMTP korrekt konfiguriert sein.

## Fazit & weitere Ressourcen

Glückwunsch! Du hast Bitwarden erfolgreich auf deinem VPS installiert und konfiguriert. Schau dir auch diese Ressourcen an, die dir bei der Server-Konfiguration weiterhelfen können:

- [bitwarden.com](https://bitwarden.com/) – Offizielle Website
- https://bitwarden.com/help/ – Bitwarden Help Center (Dokumentation)

Hast du noch Fragen, die hier nicht beantwortet werden? Für weitere Hilfe steht dir unser Support-Team täglich zur Verfügung – meld dich einfach! 🙂