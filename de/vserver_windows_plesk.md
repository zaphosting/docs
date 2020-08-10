---
id: vserver_windows_plesk
title: Plesk Installation
sidebar_label: Plesk installieren
---

## 🖥️ Verbindung zum Server herstellen

Um Plesk auf dem Server zu installieren, musst du dich erstmal mit diesen verbinden. 
Wie das geht ist hier in unserer separaten Anleitung ausführlich erläutert: [RDP Erstzugriff](https://docs.zap-hosting.com/docs/de/vserver_windows_userdp/#-remotedesktopverbindung)

## ⏳ Plesk Installer 

Als nächstes wird der Plesk Installer benötigt, welche für die Installation von Plesk benötigt wird.
Diese kann über einen Klick auf [Plesk Installer](https://installer-win.plesk.com/plesk-installer.exe) runtergeladen werden

Diesen Installer wird nun in einem Ordner abgelegt, in unserem Beispiel nutzen wir dafür einen auf unserem Desktop erstellten "Plesk" Ordner
Der Pfad zu dieser Datei wäre für die weiteren Schritte wichtig.

![](https://screensaver01.zap-hosting.com/index.php/s/3XT96Si5JbXdkTy/preview)

### Command Prompt öffnen

Für die Installation muss nun die CMD Konsole geöffnet werden.
Dies würde über die Tastenkombination [Windows] + [R] gehen oder auch wenn man bei dem "Windows Symbol" nach "command" sucht und diese "command prompt" dort öffnet.

![](https://screensaver01.zap-hosting.com/index.php/s/xzt2HkwonoNQLsQ/preview)

### Plesk Installation

In dieser CMD Konsole muss zu Beginn in das Verzeichnis navigiert werden in welches der Plesk Installer hochgeladen wurde.
In unserem Beispiel war es der "Plesk" Ordner auf dem "Desktop". 

Über CMD gelangt man mit dem Befehl "*cd*" in dieses Verzeichnis.

![](https://screensaver01.zap-hosting.com/index.php/s/c3LkiMsWQNaqAka/preview)

Korrekt in dieses Verzeichnis gekommen, wäre der letzte Schritt die Ausführung von dem Installer Befehl.
Mit diesem würde die Plesk-installer.exe ausgeführt und es würde automatisch die neuste Plesk Version installiert werden.

![](https://screensaver01.zap-hosting.com/index.php/s/AXjnDfJGZfsmb3C/preview)

Befehl: `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

> Der Installationsprozess kann 30 bis 60 Minuten dauern, im Anschluss wäre Plesk installiert und kann genutzt werden.
