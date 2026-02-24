---
id: dedicated-linux-phpmyadmin
title: "phpMyAdmin auf einem Linux-Server einrichten – Verwalte deine Datenbanken per Webinterface"
description: "Entdecke, wie du MySQL- und MariaDB-Datenbanken ganz easy mit dem Webinterface von phpMyAdmin verwaltest – für effiziente Datenbank-Administration → Jetzt mehr erfahren"
sidebar_label: phpMyAdmin installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

phpMyAdmin ist ein kostenloses, webbasiertes Tool zur Verwaltung von MySQL- und MariaDB-Datenbanken. Es bietet eine benutzerfreundliche Oberfläche, mit der du Datenbanken erstellen, bearbeiten, verwalten und löschen kannst – ganz ohne manuelles Eintippen von SQL-Befehlen.



## Vorbereitung

Bevor du mit der Installation startest, solltest du sicherstellen, dass dein System auf dem neuesten Stand ist. Ausstehende Updates und Upgrades kannst du so durchführen:

```
sudo apt update -y
sudo apt upgrade -y
```

Außerdem musst du sicherstellen, dass PHP bereits auf deinem System installiert ist. PHP ist essenziell für die Nutzung von phpMyAdmin. Wie du PHP installierst, erfährst du in unserer [PHP installieren](vserver-linux-php.md) Anleitung.

:::warning Fehlende PHP-Pakete
Wenn die notwendigen PHP-Pakete fehlen, können die PHP-Dateien von phpMyAdmin nicht korrekt verarbeitet und dargestellt werden. 
:::

## Installation

Wenn die Vorbereitung abgeschlossen ist, kann die Installation der phpMyAdmin-Oberfläche starten. Öffne dazu zuerst das Installationsverzeichnis, in dem phpMyAdmin liegen soll.

Wechsle mit dem Befehl `cd /usr/share` in das entsprechende Verzeichnis. Lade dann die aktuellste phpMyAdmin-Version mit `wget` in das Installationsverzeichnis:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Falls der Befehl `wget` nicht gefunden wird, kannst du ihn mit `sudo apt install wget -y` nachinstallieren. 
:::

Sobald der Download abgeschlossen ist, kannst du die ZIP-Datei mit folgendem Befehl entpacken:

```
unzip phpmyadmin.zip
```
:::warning
Falls der Befehl `unzip` nicht gefunden wird, kannst du ihn mit `sudo apt install unzip -y` nachinstallieren. 
:::

Das entpackte Archiv kannst du jetzt in einen einfacheren Namen umbenennen, die ZIP-Datei löschen und die nötigen Berechtigungen setzen:

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Konfiguration

### Webserver-Konfigurationsdatei

Jetzt muss phpMyAdmin in die Webserver-Konfiguration eingebunden werden. Erstelle dazu mit `nano /etc/apache2/conf-available/phpmyadmin.conf` eine neue Virtual-Host-Konfigurationsdatei und fülle sie mit folgendem Inhalt:

```
# phpMyAdmin Apache-Konfiguration

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Webzugriff aus Sicherheitsgründen auf nicht benötigte Verzeichnisse verbieten
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

Wenn die Apache2-phpMyAdmin-Konfiguration mit dem Inhalt gefüllt ist, speichere und schließe die Datei mit `CTRL+X`, dann `Y` und bestätige mit `Enter`.

Die neu erstellte Virtual-Host-Konfigurationsdatei muss jetzt aktiviert und geladen werden. Führe dazu folgende Befehle aus:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Erstellen des benötigten temporären Verzeichnisses

Damit phpMyAdmin richtig funktioniert, muss ein temporäres Verzeichnis angelegt und die passenden Berechtigungen gesetzt werden. Das machst du mit diesen Befehlen:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Fazit

Glückwunsch, du hast phpMyAdmin erfolgreich installiert und konfiguriert! Du kannst jetzt über die IP-Adresse deines Servers und den Pfad (http://IP-Adresse/phpmyadmin) auf das Webinterface zugreifen. Bei Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂