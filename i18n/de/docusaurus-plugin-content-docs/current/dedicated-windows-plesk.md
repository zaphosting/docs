---
id: dedicated-windows-plesk
title: "Dedicated Server: Installation von Plesk"
description: "Entdecke, wie du Websites und Server mit Plesk effizient verwaltest – perfekt für Einsteiger und Profis → Jetzt mehr erfahren"
sidebar_label: Plesk installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Plesk ist eine umfassende Webhosting- und Servermanagement-Plattform, mit der du Websites, Server, E-Mail-Konten und mehr über eine benutzerfreundliche Oberfläche verwalten kannst. Es ist eine vielseitige Lösung, die sich sowohl für Einsteiger als auch für erfahrene Webentwickler und Systemadministratoren eignet.

<InlineVoucher />

## Verbindung zum Server herstellen

Um Plesk auf dem Server zu installieren, musst du dich zuerst mit ihm verbinden. Wie das genau funktioniert, erklären wir ausführlich in unserer separaten Anleitung: [Erstzugang (RDP)](vserver-windows-userdp.md)

## Plesk Installer

Als Nächstes brauchst du den Plesk Installer, der für die Installation von Plesk erforderlich ist. Diesen kannst du herunterladen, indem du auf [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe) klickst.

Der Installer wird nun in einem Ordner gespeichert. In unserem Beispiel nutzen wir einen "Plesk"-Ordner, den wir auf dem Desktop erstellt haben. Der Pfad zu dieser Datei ist für die nächsten Schritte wichtig.

![](https://screensaver01.zap-hosting.com/index.php/s/qpQK28F3oPezWR8/preview)

### Eingabeaufforderung öffnen

Für die Installation muss jetzt die CMD-Konsole geöffnet werden. Das geht über die Tastenkombination [Windows] + [R] oder indem du in der Windows-Suche „cmd“ oder „Eingabeaufforderung“ eingibst.

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCiRtYrFK43Xbn/preview)

### Plesk Installation

In der CMD-Konsole musst du in das Verzeichnis wechseln, in das du den Plesk Installer hochgeladen hast. In unserem Beispiel ist das der "Plesk"-Ordner auf dem Desktop.

Das Verzeichnis wechselst du in CMD mit dem Befehl "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/sCCpiogDGsrGN9F/preview)

Bist du im richtigen Verzeichnis, führst du als letzten Schritt den Installer-Befehl aus. Dadurch wird die Datei plesk-installer.exe gestartet und die neueste Plesk-Version automatisch installiert.

![](https://screensaver01.zap-hosting.com/index.php/s/TKrkZagQr4CC7Hr/preview)

Befehl: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
Der Installationsprozess kann 30 bis 60 Minuten dauern. Danach ist Plesk installiert und einsatzbereit.
:::

## Fazit

Glückwunsch, du hast Plesk erfolgreich installiert! Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />