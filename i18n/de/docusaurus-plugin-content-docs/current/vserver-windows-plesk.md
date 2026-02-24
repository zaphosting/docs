---
id: vserver-windows-plesk
title: "Plesk auf einem Windows Server einrichten – Websites mit einem starken Control Panel verwalten"
description: "Entdecke, wie du Websites und Server effizient mit Plesk verwaltest – die vielseitige Plattform für Einsteiger und Profis → Jetzt mehr erfahren"
sidebar_label: Plesk installieren
services:
  - vserver
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

Der Installer wird nun in einem Ordner gespeichert, in unserem Beispiel nutzen wir einen "Plesk"-Ordner, den wir auf dem Desktop erstellt haben. Der Pfad zu dieser Datei ist für die nächsten Schritte wichtig.

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### Eingabeaufforderung öffnen

Für die Installation muss jetzt die CMD-Konsole geöffnet werden. Das geht über die Tastenkombination [Windows] + [R] oder indem du in der Windows-Suche „cmd“ oder „Eingabeaufforderung“ eingibst.

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### Plesk Installation

In der CMD-Konsole musst du in das Verzeichnis wechseln, in das du den Plesk Installer hochgeladen hast. In unserem Beispiel ist das der "Plesk"-Ordner auf dem Desktop.

Das Verzeichnis wechselst du in CMD mit dem Befehl "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

Befindest du dich im richtigen Verzeichnis, ist der letzte Schritt die Ausführung des Installer-Befehls. Dadurch wird die Datei plesk-installer.exe gestartet und die neueste Plesk-Version automatisch installiert.

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

Befehl: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
Der Installationsprozess kann 30 bis 60 Minuten dauern. Danach ist Plesk installiert und einsatzbereit.
:::


## Fazit

Glückwunsch, du hast Plesk erfolgreich auf deinem VPS/Dedicated Server installiert und eingerichtet! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

<InlineVoucher />