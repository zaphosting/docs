---
id: vserver_linux_plesk
title: Plesk
sidebar_label: Plesk
---


> ###ZAP INTERNE INFORMATION###

>DIES IST EINE KOPIERTE FORM, DA ICH SO SCHLAU WAR UND ES BEI PASSI GESPEICHERT HABE. BILDER ETC. WERDEN NOCH NICHT KORREKT ANGEZEIGT, DA ICH SIE MANUELL NEU HOCHLADEN SOWIE EINFÜGEN MUSS. DIE "FERTIGE" VERSION KANN MAN BEI PASSI FINDEN

> ###ZAP INTERNE INFORMATION###


> ###ZAP INTERNE INFO###
> Den Sprachstil überarbeite ich noch

## Plesk Installieren

> Führe vor dem Install apt update und apt upgrade aus, damit auf dem Server die neusten Pakete installiert sind.

>> Plesk kann aktuell nur auf Debian 8 (Jessie), Debian 9 (Strech), Ubuntu 16.04 (Xenial Xerus), Ubuntu 18.04 (Bionic Beaver), CentOS 6, CentOS 7 installiert werden. Die Architektur muss 64 Bit sein.

Verbinde dich z. B. mit Putty zu deinem Server.


### Starten der Installation

Damit Plesk sich voll automatisch mit den Standardkomponenten sowie Funktionen installiert, die die meisten Plesk User nutzen, ist nur ein Befehl notwendig:

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

> Sollte dieser Fehler angezeigt werden: "-bash: curl: command not found" so muss mit apt install curl das Paket nachgeladen werden.

Sobald dieser Befehl ausgeführt wurde, dauert es in der Regel zwischen 30 und 60 Minuten bis Plesk vollständig installiert ist.

> Die SSH Sitzung darf nicht geschlossen werden solange der Installer noch aktiv ist. Dies würde sonst zum Abbruch führen und der Server müsste neuinstalliert werden um den Installer erneut zu starten. 

> Es kann passieren das es so aussieht als ob der Installer "stecken" geblieben ist, in 99% der Fälle läuft dieser nach wenigen Minuten weiter, da er erst noch Pakete/Configs und co. konfigurieren muss.

### Abschluss der Installation

Die Installation ist abgeschlossen, sobald dies angezeigt wird

![](https://i.imgur.com/czCN5lj.png)

Das Webinterface kann über https://IP:8443 oder https://Domain.xx:8443 des Servers erreicht werden. Die Login Daten lauten root/admin und das aktuelle Root Password. Alternativ nutzt man einfach einer der angezeigten URLs, sollte dieser nicht mehr gültig sein, kann man einfach mit dem Befehl "plesk login" eine neue erstellen. 

## Das Plesk Webpanel 

> Es wird beim Aufruf des Webpanels folgendes angezeigt: "Dies ist keine sichere Verbindung". Das muss beim ersten mal bestätigt werden, das man die Seite dennoch öffnen möchte

Das Webinterface kann über https://IP:8443 oder https://Domain.xx:8443 des Servers erreicht werden. Die Login Daten lauten root/admin und das aktuelle Root Password. Alternativ nutzt man einfach einer der angezeigten URLs, sollte dieser nicht mehr gültig sein, kann man einfach mit dem Befehl "plesk login" eine neue erstellen. 

### Einrichtung

Sobald man erfolgreich die Login Daten oder eine Login-URL genutzt hat, muss man sein Admin Account einrichten. Man gibt einen Kontakt Namen an, eine E-Mail sowie ein Password. Besitzt man schon eine Plesk Lizenz, so kann man den Key bereits eintragen, alternativ kann man für 15 Tage eine Test-Lizenz bekommen. Am Ende noch den Nutzungsvertrag von Plesk akzeptieren und die Admin Account Einrichtung ist abgeschlossen. 

### Sprache einstellen

![](https://i.imgur.com/BsdM0Dj.png)

Nach der Installation ist das Panel auf Englisch, möchte man dies auf Deutsch umstellen kann man dies unter Tools&Settings --> Plesk Appearance --> Languages machen.  Dort wählt man de-DE aus und klickt dann auf "Make Default". Nun ist das Panel nach einem Logout und wieder Login in Deutsch 

### Domain hinzufügen

![](https://i.imgur.com/qPa5xab.png)

Um die erste Domain hinzuzufügen klickt man auf den blauen Button "Domain hinzufügen".

Nun trägt man seine Domain ein, wählt eine IP-Adresse aus und trägt einem Benutzernamen sowie ein Passwort ein für den Webspace, den man nun zu der Domain anlegt. Man kann insofern man die Subdomain "www" schon erstellt hat, direkt ein SSL Zertifikat von Lets Encrypt mit generieren lassen, dazu wählt man diese Option aus, trägt eine Mail ein und bestätigt dann alles auf dem blauen "OK" Button ganz unten. 

![](https://i.imgur.com/HP5AgU1.png)

Nun kann man eine Domain eintragen wählt eine IP-Adresse aus und trägt einem Benutzernamen sowie ein Passwort ein für den Webspace, den man nun zu der Domain anlegt. Man kann insofern man die Subdomain "www" schon erstellt hat, direkt ein SSL Zertifikat von Lets Encrypt mit generieren lassen, dazu wählt man diese Option aus, trägt eine Mail ein und bestätigt dann alles auf dem blauen "OK" Button ganz unten. 

> Die Domain muss auf die IP des Webspaces zeigen, liegt die Domain bei ZAP-Hosting, kann man via EasyDNS diese einfach auf den Webspace leiten lassen, liegt sie extern so muss ein A-Record auf die IP gesetzt werden sowie die Subdomain "www", "webmail" müssen ebenfalls auf die IP zeigen. Ein MX Record sollte auch auf die IP angelegt werden. 

![](https://i.imgur.com/WsdNRnN.png)

> Es kann in der Regel bis zu 24 Stunden dauern, bis ein DNS Eintrag gültig wird bzw. korrekt auf den Webspace weiterleitet. 

## SSL Verschlüsselung

Bei der Domain Eintragung/Erstellung vom Webspace wurde bereits ein SSL Zertifikat von Lets Encrypt mit generiert, dies kann nun unter "Hosting Einstellungen" der Domain eingetragen/ausgewählt werden. Anschließen bestätigt man es mit Klick auf "Übernehmen".

## Domain / Website

![](https://i.imgur.com/hnJ0UYS.png)

Bei der Domain Eintragung/Erstellung vom Webspace wurde bereits ein SSL Zertifikat von Lets Encrypt mit generiert, dies kann nun unter "Hosting Einstellungen" der Domain eingetragen/ausgewählt werden. Anschließen bestätigt man es mit Klick auf "Übernehmen".

> Damit dauerhaft auf HTTPS (SSL) geleitet wird beim Aufruf der Webseite muss das Häkchen bei "Dauerhafte, für SEO geeignete 301-Weiterleitung von HTTP zu HTTPS" gesetzt werden. 

![](https://i.imgur.com/ion3kL2.png)

Öffnet man nun seine Domain, so ist die Seite verschlüsselt

> Die Installation sowie der Einrichtung der ersten Domain mit Verschlüsslung ist nun abgeschlossen. 