---
id: dedicated-linux-phpmyadmin
title: "Dedicated Server: Installation von phpMyAdmin "
description: Informationen wie du phpMyAdmin auf deinen Linux Dedicated Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: phpMyAdmin installieren
---


## Einführung

phpMyAdmin ist ein kostenloses, webbasiertes Werkzeug zur Verwaltung von MySQL- und MariaDB-Datenbanken. Es bietet eine benutzerfreundliche Oberfläche, über die Benutzer Datenbanken erstellen, bearbeiten, verwalten und löschen können, ohne SQL-Befehle manuell eingeben zu müssen. 

## Vorbereitung

Zuerst sollte geprüft werden, ob der Server auf dem neusten Stand ist. 
Dazu wird der Update-Befehl ausgeführt: 

```
sudo apt update
```
Sollte der Server neue Updates/Pakete geufunden haben, können diese mit dem Upgrade Befehl installiert werden. 
```
sudo apt upgrade -y
```
Nun befindet sich der Server auf dem neusten Stand. 


>Sollte "sudo" nicht gefunden werden, so kann dies mit folgendem Befehl nachinstalliert werden: 
```
apt install sudo -y
```

## Installation

Zuerst wird das Installationsverzeichnis aufgerufen, in dem phpMyAdmin installiert werden soll. 
Das geschieht mit folgendem Befehl: 

```
cd /usr/share
```
Anschließend wird mithilfe von wget die letzte phpMyAdmin Version in das Installationsverzeichnis heruntergeladen:
```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```
:::info
Sollte "wget" nicht gefunden werden, so kann dies mit folgendem Befehl nachinstalliert werden: 
:::
```
sudo apt install wget -y
```
Sobald der Download abgeschlossen ist, kann die ZIP-Datei mit folgendem Befehl entpackt werden: 
```
unzip phpmyadmin.zip
```
:::info
Sollte "unzip" nicht gefunden werden, so kann dies mit folgendem Befehl nachinstalliert werden: 
:::
```
sudo apt install unzip -y
```
Nun kann das entpackte Archiv in einen einfacheren Namen umbenannt werden: 
```
mv phpMyAdmin-*-all-languages phpmyadmin
```
Nachdem dies erledigt ist, kann die ursprüngliche ZIP-Datei entfernt werden sowie die nötigen Rechte für das phpMyAdmin Verzeichnis gesetzt werden. 
```
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Erstellung der Apache2 phpMyAdmin-Config

Die Apache2-phpMyAdmin-Config wird mit folgendem Befehl erstellt:

```
nano /etc/apache2/conf-available/phpmyadmin.conf
```
Die leere Apache2-phpMyAdmin-Config muss nun mit folgendem Inhalt bestückt werden: 
```
# phpMyAdmin Apache configuration

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Disallow web access for security to directories that don't need it
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```
Ist die Apach2-phpMyAdmin-Config mit dem Inhalt befüllt, kann diese gespeichert und geschlossen werden mit ***STRG+X***, anschließend die ***Y-Taste*** drücken und mit ***Enter*** bestätigen.

Die nun neuerstelltee Apache2-phpMyAdmin-Config muss vom Apache2 Server aktiviert/eingelesen werden:

```
a2enconf phpmyadmin
```
Anschließend muss der Apache2 Server neu geladen werden: 
```
systemctl reload apache2
```

## Benötigtes temporäres Verzeichnis für phpMyAdmin anlegen

Damit phpMyAdmin auch ordnungsgemäß funktioniert, muss folgendes Verzeichnis angelegt werden:
```
mkdir /usr/share/phpmyadmin/tmp/
```
Das gerade erstelle Verzeichnis benötigt noch die richtigen Rechte:
```
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```
Fertig ist die phpMyAdmin Installation. Das phpMyAdmin Webinterface kann nun via Browser mit /phpmyadmin geöffnet werden, z. B. 123.123.123.123/phpmyadmin
