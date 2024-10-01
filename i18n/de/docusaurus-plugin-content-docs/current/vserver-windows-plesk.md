---
id: vserver-windows-plesk
title: "vServer: Installation von Plesk"
description: Informationen, wie du Plesk auf deinen Windows vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Plesk installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Plesk ist eine umfassende Webhosting- und Servermanagement-Plattform, die es Benutzern ermöglicht, Websites, Server, E-Mail-Konten und mehr über eine benutzerfreundliche Oberfläche zu verwalten. Es handelt sich um eine vielseitige Lösung, die sowohl für Einsteiger als auch für erfahrene Webentwickler und Systemadministratoren geeignet ist. 

<InlineVoucher />

## Verbindung zum Server herstellen

Um Plesk auf dem Server zu installieren, musst du dich erstmal mit diesen verbinden. 
Wie das geht, ist hier in unserer separaten Anleitung ausführlich erläutert: [Erstzugriff (RDP)](vserver-windows-userdp.md)

## Plesk Installer 

Als Nächstes wird der Plesk Installer benötigt, welche für die Installation von Plesk benötigt wird.
Diese kann über einen Klick auf [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe) heruntergeladen werden

Diesen Installer wird nun in einem Ordner abgelegt, in unserem Beispiel nutzen wir dafür einen auf unserem Desktop erstellten "Plesk" Ordner
Der Pfad zu dieser Datei wäre für die weiteren Schritte wichtig.

![](https://screensaver01.zap-hosting.com/index.php/s/HjzEBrowYnWk4pf/preview)

### Befehl Prompt öffnen

Für die Installation muss jetzt die CMD Konsole geöffnet werden.
Dies würde über die Tastenkombination [Windows] + [R] gehen oder auch wenn man bei dem "Windows Symbol" nach "Befehl" sucht und diese "command prompt" dort öffnet.

![](https://screensaver01.zap-hosting.com/index.php/s/BjnZszr8KbP6yz2/preview)

### Plesk Installation

In dieser CMD Konsole muss zu Beginn in das Verzeichnis navigiert werden, in welches der Plesk Installer hochgeladen wurde.
In unserem Beispiel war es der "Plesk" Ordner auf dem "Desktop". 

Über CMD gelangt man mit dem Befehl "*cd*" in dieses Verzeichnis.

![](https://screensaver01.zap-hosting.com/index.php/s/wx9EGrtAewMSkHd/preview)

Korrekt in dieses Verzeichnis gekommen, wäre der letzte Schritt die Ausführung von dem Installer Befehl.
Mit diesem würde die Plesk-installer.exe ausgeführt und es würde automatisch die neuste Plesk Version installiert werden.

![](https://screensaver01.zap-hosting.com/index.php/s/7wc8dWQqnW5E3XT/preview)

Befehl: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
Der Installationsprozess kann 30 bis 60 Minuten dauern, im Anschluss wäre Plesk installiert und kann genutzt werden.
:::


## Abschluss

Glückwunsch, du hast Plesk erfolgreich installiert und konfiguriert! Solltest du noch weitere Fragen oder Probleme haben, dann wende dich gerne an unser Support-Team, welches dir jeden Tag zur Verfügung steht!