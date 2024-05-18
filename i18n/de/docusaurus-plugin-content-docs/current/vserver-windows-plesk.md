---
id: vserver-windows-plesk
title: "vServer: Installation von Plesk"
description: Informationen, wie du Plesk auf deinen Windows vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentation
sidebar_label: Plesk installieren
---



## Einführung

Plesk ist eine umfassende Webhosting- und Servermanagement-Plattform, die es Benutzern ermöglicht, Websites, Server, E-Mail-Konten und mehr über eine benutzerfreundliche Oberfläche zu verwalten. Es handelt sich um eine vielseitige Lösung, die sowohl für Einsteiger als auch für erfahrene Webentwickler und Systemadministratoren geeignet ist. 



## Verbindung zum Server herstellen

Um Plesk auf dem Server zu installieren, musst du dich erstmal mit diesen verbinden. 
Wie das geht, ist hier in unserer separaten Anleitung ausführlich erläutert: [RDP Erstzugriff](https://docs.zap-hosting.com/docs/de/vserver-windows-userdp/#-remotedesktopverbindung)

## Plesk Installer 

Als Nächstes wird der Plesk Installer benötigt, welche für die Installation von Plesk benötigt wird.
Diese kann über einen Klick auf [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe) heruntergeladen werden

Diesen Installer wird nun in einem Ordner abgelegt, in unserem Beispiel nutzen wir dafür einen auf unserem Desktop erstellten "Plesk" Ordner
Der Pfad zu dieser Datei wäre für die weiteren Schritte wichtig.

![](https://user-images.githubusercontent.com/61839701/166202762-579fe417-e6b2-4be8-b3a4-90114a63b02c.png)

### Befehl Prompt öffnen

Für die Installation muss jetzt die CMD Konsole geöffnet werden.
Dies würde über die Tastenkombination [Windows] + [R] gehen oder auch wenn man bei dem "Windows Symbol" nach "Befehl" sucht und diese "command prompt" dort öffnet.

![](https://user-images.githubusercontent.com/61839701/166202804-694e3d29-dc3c-4963-9d3d-2c1abf5c1784.png)

### Plesk Installation

In dieser CMD Konsole muss zu Beginn in das Verzeichnis navigiert werden, in welches der Plesk Installer hochgeladen wurde.
In unserem Beispiel war es der "Plesk" Ordner auf dem "Desktop". 

Über CMD gelangt man mit dem Befehl "*cd*" in dieses Verzeichnis.

![](https://user-images.githubusercontent.com/61839701/166202847-222f8fb2-a776-4d53-ae5d-77470eb184a7.png)

Korrekt in dieses Verzeichnis gekommen, wäre der letzte Schritt die Ausführung von dem Installer Befehl.
Mit diesem würde die Plesk-installer.exe ausgeführt und es würde automatisch die neuste Plesk Version installiert werden.

![](https://user-images.githubusercontent.com/61839701/166202878-f14baaa5-0405-40b3-ab5b-ac4d49bf76a8.png)

Befehl: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
Der Installationsprozess kann 30 bis 60 Minuten dauern, im Anschluss wäre Plesk installiert und kann genutzt werden.
:::
