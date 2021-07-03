---
id: vserver_linux_plesk
title: vServer: Plesk auf Linux Servern installieren
description: Informationen, wie du Plesk auf deinen Linux vServer von ZAP-Hosting installieren kannst - ZAP-Hosting.com Dokumentationen
sidebar_label: Plesk
---

## Plesk installieren

> Führe vor dem Install apt update und apt upgrade aus, damit auf dem Server die neusten Pakete installiert sind. 
Plesk kann aktuell nur auf Debian 8 (Jessie), Debian 9 (Strech), Ubuntu 16.04 (Xenial Xerus), Ubuntu 18.04 (Bionic Beaver), CentOS 6/7/8, Red Hat Enterprise Linux 6.x/7.x/8.x, CloudLinux 6.x/7.1+ und Virtuozzo Linux 7 installiert werden. Die Architektur muss 64 Bit sein.

Die Verbindung zum Server kann zum Beispiel via Putty erfolgen.


## Starten der Installation 

<!--DOCUSAURUS_CODE_TABS-->
<!--One-Click Installation-->

Damit Plesk sich voll automatisch mit den Standardkomponenten sowie Funktionen installiert, die die meisten Plesk User nutzen, ist nur ein Befehl notwendig:

>Der Plesk Installer installiert immer die neuste/aktuelleste Version von Plesk. Es kann passieren das die hier gezeigten Grafiken/Screenshots nicht die neuste/aktuellese Version von Plesk zeigen.

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

> Sollte dieser Fehler angezeigt werden: "-bash: curl: command not found" so muss mit `apt install curl` das Paket nachgeladen werden.

Sobald dieser Befehl ausgeführt wurde, dauert es in der Regel zwischen 15 und 60 Minuten bis Plesk vollständig installiert ist.

> Die SSH Sitzung darf nicht geschlossen werden solange der Installer noch aktiv ist. Dies würde sonst zum Abbruch führen. 
Ebenfalls müsste der Server anschließend neu installiert werden, damit der Installer erneut gestartet werden kann. 
Wird der Installer erneut gestartet ohne vorherigen Reinstalls des Servers, so wird es bei der Installation, spätestens jedoch im Plesk Panel selber Probleme mit nicht funktionierenden Features geben. 

> Es kann passieren das es so aussieht als ob der Installer "stecken" geblieben ist, in 99% der Fälle läuft dieser nach wenigen Minuten weiter, da er erst noch Pakete/Configs und co. konfigurieren muss, benötigt dieser die Zeit.


Die Installation ist abgeschlossen, sobald dies angezeigt wird

![](https://screensaver01.zap-hosting.com/index.php/s/fpWfEdgRi77zb3t/preview)

<!--Web Installation-->

Damit Plesk via Web installiert wird, sind nur wenige Befehle nötig. 

>Der Plesk Installer installiert immer die neuste/aktuelleste Version von Plesk. Es kann passieren das die hier gezeigten Grafiken/Screenshots nicht die neuste/aktuellese Version von Plesk zeigen.

Download des Plesk Installers:
```
wget https://autoinstall.plesk.com/plesk-installer
```

Korrekte Berechtigung setzen:

```
chmod +x plesk-installer
```

Starten des Installers:

```
./plesk-installer --web-interface
```

![](https://screensaver01.zap-hosting.com/index.php/s/6gzT95ded8d99RD/preview)

<!--Konsolen Installation-->

Damit Plesk via Console installiert wird sind nur wenige Befehle nötig. 

>Der Plesk Installer installiert immer die neuste/aktuelleste Version von Plesk. Es kann passieren das die hier gezeigten Grafiken/Screenshots nicht die neuste/aktuellese Version von Plesk zeigen.

Download des Installers:

```
wget https://autoinstall.plesk.com/plesk-installer
```

Korrekte Berechtigung setzen:

```
chmod +x plesk-installer
```

Starten des Installers:

```
./plesk-installers
```

Sobald die drei Befehle zum starten ausgeführt wurden, muss der Lizenz zugestimmt werden mit "F": 

![](https://screensaver01.zap-hosting.com/index.php/s/B3fEBqeDkzxf3iQ/preview)

Nach der Zustimmung fragt das System, welches Plesk installiert werden soll. In diesem Fall Plesk Obsidian oder Plesk Onyx. Es wird auch gekennzeichnet, welches das stabilere davon ist. In der Regel wird eine "Stable" Version für den Produktiv Einsatz genutzt. Da die ausgewählten Optionen bereits auf die Stable Version zeigen, bestätigt man dies erneut mit "F"

Die Frage ob Plesk Daten für die Verbesserung der Produkte erheben darf, kann mit "Y"(Yes) oder "n"(No) beantwortet werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/6PEEjG9zTSZTcfJ/preview)

Nach der Beantwortung, fragt das System welchen Typ von der ausgewählten Plesk Version installiert werden soll. In der Regel ist der bereits eingestellte Typ "Recommended" ausreichend. Module die später eventuell nicht installiert wurden, aber benötigt werden, können im Plesk Panel nachinstalliert werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/a8Bi982gTtgAcrx/preview)

Die nächste Frage ob Pakete installiert/upgegradet werden dürfen, wird mit "F" bestätigt.

![](https://screensaver01.zap-hosting.com/index.php/s/Sp9DjKBEKkowoo4/preview)

Nun startet der Installer mit der Installation.

>Die SSH Sitzung darf nicht geschlossen werden solange der Installer noch aktiv ist. Dies würde sonst zum Abbruch führen und der Server müsste neuinstalliert werden, damit der Installer neugestartet werden kann. 
Es kann passieren das es so aussieht als ob der Installer "stecken" geblieben ist, in 99% der Fälle läuft dieser nach wenigen Minuten weiter, da er erst noch Pakete/Configs und co. konfigurieren muss.

Die Installation ist abgeschlossen sobald folgendes erscheint: 

![](https://screensaver01.zap-hosting.com/index.php/s/Fyy72nWq4NbRxmz/preview)

<!--END_DOCUSAURUS_CODE_TABS-->

## Öffnen des Web-Installers

Nachdem der Installer gestartet wurde, wird die Installation im Browser vorgenommen. Die Installationsseite ist via https://IP:8447 oder via https://Domain.xx:8447 erreichbar.

## Das Plesk Webpanel 

> Es wird beim Aufruf des Webpanels folgendes angezeigt: "Dies ist keine sichere Verbindung". Das muss beim ersten mal bestätigt werden, anschließend öffnet sich die Seite. 

Das Webinterface kann über https://IP:8443 oder https://Domain.xx:8443 des Servers erreicht werden. Die Login Daten lauten root/admin und das aktuelle Root Password. Alternativ kann einfach einer der angezeigten URLs genutzt werden, sollten diese nicht mehr gültig sein, kann einfach mit dem Befehl ```plesk login``` neue URLs erstellt werden. 

### Einrichtung

Sobald die Anmeldung erfolgreich war, muss der Admin Account eingerichtet werden. Es muss ein Kontakt Namen, eine E-Mail sowie ein Password angegeben werden. Sollte bereits eine Plesk Lizenz vorhanden sein, so kann diese direkt eingetragen werden. Alternativ kann eine 15 Tägige Test/Trial Lizenz von Plesk angefordert werden. Zum Schluss muss noch der Nutzungsvertrag bestätigt werden. 
Plesk kann nun genutzt werden. 

### Sprache einstellen


Nach der Installation ist das Plesk-Panel auf Englischer Sprache, die Deutsche Sprache kann unter Tools&Settings ➡️ Plesk Appearance ➡️ Languages eingestellt bzw. ausgewählt werden. Dort muss dann "de-DE" ausgewählt werden. Anschließend kann die Sprache mit Klick auf "Make default" dauerhaft für alle gesetzt werden. 
Nach einem Logut und anchließendem Login ist das Plesk-Panel in Deutsch vorzufinden.

![](https://screensaver01.zap-hosting.com/index.php/s/z428FDYSsQeiHDK/preview)

### Domain hinzufügen

Um die erste Domain hinzuzufügen klickt man auf den blauen Button "Domain hinzufügen".

![](https://screensaver01.zap-hosting.com/index.php/s/i4gmrL3S79GYMdg/preview)

Nun kann die eigene Domain eingetragen werden. Ebenfalls muss eine IP sowie ein Benutzernamen und Passwort für den Webspace der Domain festgelegt werden. Sollte bereits die Subdoimain "www" im DNS der Domain eingetragen sein, kann direkt ein SSL Zertifikat von Lets Encrypt mit erstellt werden. Dazu kann diese Option ausgewählt werden, nachdem eine Mail Adresse eingetragen wurde, wird es auf dem blauen "OK" Button bestätigt.  

![](https://screensaver01.zap-hosting.com/index.php/s/rSPCzD5ECMZmkQC/preview)

Nun kann man eine Domain eintragen wählt eine IP-Adresse aus und trägt einem Benutzernamen sowie ein Passwort ein für den Webspace, den man nun zu der Domain anlegt. Man kann insofern man die Subdomain "www" schon erstellt hat, direkt ein SSL Zertifikat von Lets Encrypt mit generieren lassen, dazu wählt man diese Option aus, trägt eine Mail ein und bestätigt dann alles auf dem blauen "OK" Button ganz unten. 

> Die Domain muss auf die IP des Webspaces zeigen, liegt die Domain bei ZAP-Hosting, kann diese via EasyDNS einfach auf den Webspace geleitet werden, liegt sie extern so muss ein A-Record auf die IP gesetzt werden sowie die Subdomain "www", "webmail" müssen ebenfalls auf die IP zeigen. Ein MX Record sollte auch auf die IP des Webspaces angelegt werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/PGHznNFxoTXycW5/preview)

> Es kann bis zu 24 Stunden dauern, bis ein neuer/geänderter DNS Eintrag auf das richtige Ziel weiterleitet. 

## SSL Verschlüsselung

Bei der Domain Eintragung/Erstellung vom Webspace wurde bereits ein SSL Zertifikat von Lets Encrypt mit generiert, dies kann nun unter "Hosting Einstellungen" der Domain, eingetragen/ausgewählt werden. Anschließen muss es mit einem Klick auf "Übernehmen" bestätigen.

> Damit dauerhaft auf HTTPS (SSL) geleitet wird beim Aufruf der Webseite muss das Häkchen bei "Dauerhafte, für SEO geeignete 301-Weiterleitung von HTTP zu HTTPS" gesetzt werden. 

![](https://screensaver01.zap-hosting.com/index.php/s/Kc3Ssajgm7KCz4b/preview)

Wird nun die Domain im Browser geöffnet, so zeigt diese ihre Verschlüsslung an.

![](https://screensaver01.zap-hosting.com/index.php/s/Nb3jawSSknSQajg/preview)

> Die Installation sowie der Einrichtung der ersten Domain mit Verschlüsslung ist nun vollständig abgeschlossen. 
