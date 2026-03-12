---
id: server-truenas-scale
title: "TrueNAS SCALE auf einem Server einrichten – Baue dein persönliches NAS-System"
description: "Entdecke, wie du TrueNAS SCALE auf deinem Dedicated Server für Netzwerk-Speicher und Dateifreigabe installierst → Jetzt mehr erfahren"
sidebar_label: TrueNAS SCALE installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Einführung

TrueNAS SCALE ist eine Open-Source Speicherplattform, mit der du ein Netzwerk-Attached Storage (NAS) System auf einem Server aufbauen kannst. In dieser Anleitung installierst du TrueNAS SCALE auf einem Dedicated Server und konfigurierst die Ersteinrichtung, inklusive Storage Pools, Benutzerkonten und SMB-Dateifreigabe.

:::danger VPS Nicht geeignet
Unsere VPS-Produkte sind nicht geeignet, da sie nur eine virtuelle Festplatte enthalten. Du kannst TrueNAS SCALE zwar auf einem VPS installieren, aber keine Storage Pools erstellen, da die gesamte Festplatte für das Betriebssystem verwendet wird.

Für die Einrichtung von TrueNAS SCALE wird eine [Dedicated Server Konfiguration](https://zap-hosting.com/en/dedicated-server-hosting/) mit mindestens zwei Festplatten benötigt.
 :::

<InlineVoucher />

## Vorbereitung

Bevor du mit der Installation startest, stelle sicher, dass du folgende Mindestanforderungen erfüllst:

| Hardware   | Minimum     | ZAP-Hosting Empfehlung   |
| ---------- | ----------- | ------------------------ |
| CPU        | 2 CPU-Kerne | 8 vCPU-Kerne             |
| RAM        | 8 GB        | 16 GB                    |
| Festplattenspeicher | 16 GB OS    | Je nach Anwendungsfall   |

<InlineServiceLink />

Besuche die offizielle [TrueNAS Webseite](https://www.truenas.com/download-truenas-scale/) und lade die neueste stabile Version herunter. Du kannst die ISO entweder an einem öffentlich zugänglichen Ort hochladen (dein eigener Webserver oder Cloud-Speicher) oder lokal auf deinem Rechner behalten, um sie direkt zu mounten.

:::tip[ISO Hosting]
Wenn du planst, die ISO per URL in der Remote-Konsole zu mounten, achte darauf, dass die ISO-Datei-URL mit `.iso` endet und öffentlich ohne Authentifizierung zugänglich ist.
:::

**ISO mounten**

Melde dich in deinem [ZAP-Hosting Dashboard](https://zap-hosting.com/en/customer/) an und navigiere zu deinem Dedicated Server in der Service-Liste. Öffne dort die Server-Verwaltungsseite und klicke auf **iLO aktivieren**, um auf die Server-Management-Oberfläche zuzugreifen.

![img](https://screensaver01.zap-hosting.com/index.php/s/or8HJ8e3QeAJm6z/preview)

In der iLO-Oberfläche findest du die Option **Integrated Remote Console**. Wähle deinen bevorzugten Konsolentyp und starte ihn. Ein neues Fenster öffnet sich mit direktem Zugriff auf die Anzeige deines Servers.

In der Remote-Konsole klickst du oben auf das **CD-Symbol** und wählst **CD/DVD**. Wähle **Scripted Media URL**, wenn du die ISO online hochgeladen hast, und gib die direkte URL ein. Alternativ wähle **Lokale .iso Datei**, um auf deinem Rechner zu browsen. So wird die ISO auf das virtuelle CD/DVD-Laufwerk gemountet.

![img](https://screensaver01.zap-hosting.com/index.php/s/F98tgjsqq2S6nqp/preview)

:::tip Alternative Methoden
Für weitere ISO-Mount-Methoden, inklusive über die Virtual Media Schnittstelle, siehe die [Own ISO Anleitung](dedicated-iso.md).
:::

Mit gemounteter ISO nutze das **Power-Menü** in der Konsole, um neu zu starten. Wähle **Reset** und der Server bootet vom TrueNAS SCALE ISO.

## Installation

Beobachte die Konsole beim Booten. Der TrueNAS SCALE Setup-Bildschirm erscheint und der Installer lädt automatisch. Das Laden der Installationsumgebung dauert ein paar Minuten.

![img](https://screensaver01.zap-hosting.com/index.php/s/TJwMWFZeorwGryn/preview)

Der Installer zeigt **Choose destination media** mit deinen verfügbaren Festplatten. Navigiere mit den **Pfeiltasten** und wähle die Festplatte für das Betriebssystem aus. Wähle die kleinste Festplatte für die OS-Installation (diese wird komplett für TrueNAS SCALE verwendet). Drücke **Space**, um sie auszuwählen, dann **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z5o7TFye6BPor7Q/preview)

Eine Warnung erscheint, dass die Installation alles auf der ausgewählten Festplatte **löschen** wird. Navigiere mit den Pfeiltasten zu **Yes** und bestätige mit **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/LS2mJBQ2deawKFp/preview)

Als Nächstes fragt der Installer nach der Authentifizierung. **Option 1** setzt das Passwort jetzt, **Option 2** erlaubt die Konfiguration später über die Weboberfläche. Wir wählen **Option 2: Konfiguration über Web UI** für mehr Flexibilität. Wähle es aus und drücke **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oPpMLCZ5nPePdLW/preview)

Der Installer fragt **"Allow EFI boot?"**. Wähle **Yes** (empfohlen) und bestätige mit **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/We8tqgctQrjz5oS/preview)

Die Installation startet und dauert in der Regel 15-20 Minuten. Verfolge den Fortschritt auf dem Bildschirm, während Dateien kopiert und das System konfiguriert wird.

![img](https://screensaver01.zap-hosting.com/index.php/s/BAykMjmxDn76sJB/preview)

Nach Abschluss erscheint die Meldung **"The TrueNAS installation is successful"**. Drücke **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/GmNwHaTfY6KHSbN/preview)

Bevor du neu startest, **werfe die ISO aus**, sonst bootest du wieder in den Installer. Klicke auf das **DVD-Symbol**, wähle **CD/DVD** und klicke auf **Medium auswerfen**. Starte den Server über das Power-Menü neu oder lass ihn automatisch neu starten.

<InlineServiceLink />

## Konfiguration

Nach der Installation musst du festlegen, von welcher Festplatte der Server bootet. TrueNAS SCALE ist installiert, aber der Server muss über die RAID-Controller-ROM konfiguriert werden, um vom richtigen Laufwerk zu starten.

:::info[Kritischer Schritt]
Nach der Installation musst du das Boot-Volume im RAID-Controller-ROM konfigurieren, damit der Server vom korrekten Laufwerk bootet.
:::

**Boot-Disk im ROM einstellen**

Beobachte die Konsole beim Booten. Sobald **"Press F8 for ROM Configuration for Arrays Utility"** erscheint, drücke sofort **F8**.

![img](https://screensaver01.zap-hosting.com/index.php/s/BCosyXCBnZJjeiX/preview)

Das ROM-Konfigurations-Tool öffnet sich. Navigiere mit den Pfeiltasten zu **Select Boot Volume** und bestätige mit **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw4netxJPkX3354/preview)

Hier werden deine verfügbaren Festplatten angezeigt. Wähle die Festplatte, auf der TrueNAS SCALE installiert ist, und drücke **Enter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7mPgXFMqn9Q475Z/preview)

Mit ausgewählter Festplatte drücke **F8**, um zu speichern. Bestätige ggf. und verlasse das Tool. Dein Server bootet nun in TrueNAS SCALE.

![img](https://screensaver01.zap-hosting.com/index.php/s/YEFokMkz3RSB625/preview)

**Zugriff auf die Weboberfläche**

Nach dem ersten Boot zeigt die TrueNAS SCALE Konsole die Web UI Zugriffs-URL an: `http://[deine_server_ip]`. Notiere dir diese IP-Adresse, da du sie für den Zugriff auf die Weboberfläche brauchst.

![img](https://screensaver01.zap-hosting.com/index.php/s/8JwikNGRTz4La3y/preview)

:::tip Netzwerk Auto-Konfiguration
TrueNAS SCALE konfiguriert Netzwerk-Einstellungen normalerweise automatisch via DHCP. Überspringe diesen Schritt, wenn du keine mehreren IP-Adressen hast oder keine statische IP benötigst.
:::

Für manuelle Netzwerkkonfiguration wähle im Konsolenmenü **1) Configure Network Interfaces**. Wähle dein primäres Interface (z.B. `enp0s3` oder `eth0`), dann **Configure IPv4** und **Static**. Gib IP-Adresse, Subnetzmaske und Gateway ein (diese findest du im ZAP-Hosting Dashboard).

Öffne einen Browser und rufe `http://[deine_server_ip]` mit der IP-Adresse aus der Konsole auf.

Da wir zuvor **Konfiguration über Web UI** gewählt haben, kannst du hier das Passwort setzen. Die Login-Seite zeigt `truenas_admin` als Benutzername. Gib ein sicheres Passwort ein, bestätige es und klicke auf **Submit**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dZrpdZYQwKBFksJ/preview)

:::danger Sicherheit wichtig
Wähle ein starkes, einzigartiges Passwort für dein TrueNAS Admin-Konto. Dieses Konto hat vollen Systemzugriff.
:::

Nach dem Login erscheint das Dashboard mit Systeminfos, Netzwerkstatus, Storage Pools, Services und Alerts. Du hast TrueNAS SCALE erfolgreich konfiguriert und kannst jetzt den Speicher einrichten.

![img](https://screensaver01.zap-hosting.com/index.php/s/fYkDpDfpqwTT5yY/preview)

**Storage Pools erstellen**

Klicke links in der Sidebar auf **Storage** und dann auf den Button **Create Pool**.

![img](https://screensaver01.zap-hosting.com/index.php/s/fFeSjm3YnnPfxq5/preview)

Gib deinem Pool einen Namen, z.B. `Disk`, `tank` oder was für dich Sinn macht. Klicke auf **Next**, wenn du bereit bist.

![img](https://screensaver01.zap-hosting.com/index.php/s/23MNpcrHmmGz2L2/preview)

Im Bereich **Data** öffne das Dropdown **Layout** und wähle die Konfiguration, die zu deinen Anforderungen passt:

- **Stripe**: Maximale nutzbare Kapazität, aber keine Redundanz
- **Mirror**: Speichert identische Daten auf zwei Festplatten, bietet Redundanz, reduziert aber nutzbare Kapazität
- **RAIDZ1**: Bietet eine Festplatte Redundanz
- **RAIDZ2**: Bietet zwei Festplatten Redundanz
- **RAIDZ3**: Bietet drei Festplatten Redundanz

![img](https://screensaver01.zap-hosting.com/index.php/s/wKHy7f8xoifEXB6/preview)

Unter **Disk Selection** werden alle deine Speicherfestplatten angezeigt. Klicke die Festplatten an, die du im Pool haben möchtest. Sie wandern in den Konfigurationsbereich mit geschätzter Kapazität.

:::info Boot-Disk nicht verfügbar
Die Installationsfestplatte wird hier nicht angezeigt, da sie ausschließlich für das Betriebssystem reserviert ist.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/McEcGQSBzHaZNNc/preview)

Lass optionale Einstellungen auf Standard und klicke auf **Next**. Die Übersichtsseite zeigt deine Konfiguration mit Name, Layout, Festplatten und Kapazität. Prüfe alles und klicke auf **Create Pool**, um zu bestätigen.

![img](https://screensaver01.zap-hosting.com/index.php/s/RDitijsoGWtEoT5/preview)

**Organisation mit Datasets**

Nachdem dein Storage Pool erstellt ist, kannst du deine Daten mit Datasets organisieren. Datasets sind logische Unterteilungen deines Pools, die helfen, verschiedene Datentypen zu trennen. Klicke in der Sidebar auf **Datasets**. Dein neuer Pool erscheint dort (z.B. "Disk").

![img](https://screensaver01.zap-hosting.com/index.php/s/oZPctpbLcCESWWt/preview)

Klicke auf **Add Dataset**. Der Pool ist automatisch als Parent gesetzt. Gib dem Dataset einen Namen wie `documents`, `media` oder `backups`. Lass die erweiterten Optionen auf Standard, außer du hast spezielle Anforderungen. Klicke auf **Save**.

![img](https://screensaver01.zap-hosting.com/index.php/s/JxPmPW53zke9NQL/preview)

**Benutzerkonten erstellen**

Klicke in der Sidebar auf **Credentials** und dann auf **Add**. Wähle einen Benutzernamen (z.B. `john` oder `fileuser`), gib den vollständigen Namen ein und setze ein Passwort. Lass primäre Gruppe, Home-Verzeichnis und Shell auf Standard. Scrolle nach unten und aktiviere die **SMB** Option für Windows-Zugriff.

Passe Berechtigungen je nach Sicherheitsanforderungen an. Für einfache Dateifreigabe reichen Standardoptionen mit aktiviertem SMB. Klicke auf **Submit**, um den Schritt abzuschließen.

:::danger Wichtig für SMB-Zugriff
Verwende **nicht** `root` oder `truenas_admin` für die Dateifreigabe. Diese Systemkonten funktionieren nicht mit SMB. Erstelle stattdessen dedizierte Benutzer.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/3SLGk75E3KP57ZS/preview)

**SMB-Freigaben einrichten**

Klicke in der Sidebar auf **Shares**. Es erscheinen drei Optionen: Windows (SMB) für Windows/macOS/Linux, Unix (NFS) für Linux/Unix und Block (iSCSI) für Blockspeicher. Wir richten SMB ein. Klicke im Bereich Windows (SMB) Shares auf **Add**.

![img](https://screensaver01.zap-hosting.com/index.php/s/fgWcqjyxXLD2dRy/preview)

Das Dialogfenster **Add SMB** öffnet sich. Für **Path** wähle dein Dataset (z.B. `/mnt/Disk/documents`). Für **Name** gib einen Namen wie `documents` ein (dieser Name wird im Netzwerk angezeigt). **Purpose** kann meistens auf Standard bleiben. Füge eine Beschreibung hinzu, wenn du möchtest. Es gibt erweiterte Optionen (ACL-Einstellungen und mehr), aber lass den Gastzugang aus Sicherheitsgründen deaktiviert. Klicke auf **Save**.

![img](https://screensaver01.zap-hosting.com/index.php/s/D2xQYHQfbmsKRwT/preview)

Nach dem Erstellen der Freigabe erscheint ein Popup, dass der **SMB-Dienst nicht läuft**. Klicke auf **Start Service**. Aktiviere auch **Start Automatically**, damit der Dienst beim Booten automatisch startet. Die SMB-Freigabe ist jetzt im Netzwerk verfügbar.

![img](https://screensaver01.zap-hosting.com/index.php/s/KQH5zoA7FYWaXMa/preview)

Für NFS-Freigaben mit Linux/Unix-Systemen navigiere zu **Shares** → **Unix (NFS) Shares** und klicke auf **Add**. Wähle dein Dataset, konfiguriere Netzwerke und Berechtigungen, aktiviere NFS bei Nachfrage und speichere.

<InlineServiceLink />

## Zugriff auf deine Freigabe

Um z.B. von deinem Windows-PC auf die Freigabe zuzugreifen, öffne den **Datei-Explorer**. Rechtsklicke auf **Dieser PC** (oder **Computer**) und wähle **Netzwerkadresse hinzufügen**.

![img](https://screensaver01.zap-hosting.com/index.php/s/NDJWjdpC6ZCq6c3/preview)

Der **Assistent zum Hinzufügen einer Netzwerkadresse** öffnet sich. Klicke auf **Weiter**, um fortzufahren.

![img](https://screensaver01.zap-hosting.com/index.php/s/7KXPxNQJy4qsiBy/preview)

Wenn nach dem Speicherort gefragt wird, nutze folgendes Format: `\\[deine_server_ip]\[freigabe_name]`. Beispiel: `\\192.168.1.100\documents`. Ersetze `[deine_server_ip]` mit der IP deines TrueNAS Servers und `[freigabe_name]` mit dem Namen deiner SMB-Freigabe. Klicke auf **Weiter**.

![img](https://screensaver01.zap-hosting.com/index.php/s/2yaoWfiCTX6XLAz/preview)

Gib den **Benutzernamen** und das **Passwort** des zuvor erstellten TrueNAS-Benutzers ein. Verwende **nicht** `root` oder `truenas_admin`, da diese für SMB nicht funktionieren. Aktiviere **Anmeldedaten speichern**, um sie für das nächste Mal zu sichern. Klicke auf **OK**.

![img](https://screensaver01.zap-hosting.com/index.php/s/4nFReNbPLkHfmMp/preview)

Die TrueNAS-Freigabe ist jetzt erreichbar. Du kannst Dateien durchsuchen, Ordner erstellen und Daten kopieren wie bei jedem anderen Netzlaufwerk. Du hast deinen Windows-PC erfolgreich mit der TrueNAS-Freigabe verbunden.

![img](https://screensaver01.zap-hosting.com/index.php/s/nBqrkmkCYJntwW2/preview)

:::tip Schneller Zugriff
Für einfacheren Zugriff nutze **Netzlaufwerk verbinden** statt **Netzwerkadresse hinzufügen**. Die Freigabe erscheint dann als Laufwerksbuchstabe (z.B. `Z:`) im Datei-Explorer.
:::

:::info Zugriff von macOS oder Linux
**macOS**: Im Finder `Cmd+K` drücken und `smb://[deine_server_ip]/[freigabe_name]` eingeben

**Linux**: Nutze die Option „Mit Server verbinden“ im Dateimanager mit `smb://[deine_server_ip]/[freigabe_name]` oder mounte per Kommandozeile mit `mount.cifs`
:::

## Fazit

Glückwunsch, du hast TrueNAS SCALE erfolgreich auf deinem Server installiert und konfiguriert. Bei weiteren Fragen oder Supportbedarf steht dir unser Support-Team täglich zur Verfügung – wir helfen dir gerne! 🙂