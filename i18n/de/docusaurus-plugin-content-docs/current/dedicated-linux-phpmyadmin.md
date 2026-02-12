---
id: dedicated-linux-phpmyadmin
title: "Dedicated Server: Installation von phpMyAdmin"
description: "Entdecke, wie du MySQL- und MariaDB-Datenbanken einfach mit der Weboberfläche von phpMyAdmin verwaltest – für effiziente Datenbankadministration → Jetzt mehr erfahren"
sidebar_label: phpMyAdmin installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

phpMyAdmin ist ein kostenloses, webbasiertes Tool zur Verwaltung von MySQL- und MariaDB-Datenbanken. Es bietet eine benutzerfreundliche Oberfläche, mit der du Datenbanken erstellen, bearbeiten, verwalten und löschen kannst – ganz ohne manuelles Eingeben von SQL-Befehlen.



## Vorbereitung

Bevor du mit der Installation startest, stelle sicher, dass dein System auf dem neuesten Stand ist. Ausstehende Updates und Upgrades kannst du wie folgt durchführen:

```
sudo apt update -y
sudo apt upgrade -y
```

Außerdem musst du sicherstellen, dass PHP bereits auf deinem System installiert ist. Das ist essenziell für die Nutzung von phpMyAdmin. Wie du PHP installierst, erfährst du in unserer [PHP installieren](vserver-linux-php.md) Anleitung.

:::warning Fehlende PHP-Pakete
Wenn die notwendigen PHP-Pakete fehlen, können die PHP-Dateien von phpMyAdmin nicht korrekt verarbeitet und dargestellt werden. 
:::

## Installation

Wenn die Vorbereitung abgeschlossen ist, kann die Installation der phpMyAdmin-Oberfläche starten. Öffne dazu zuerst das Installationsverzeichnis, in dem phpMyAdmin installiert werden soll.

Wechsle mit dem Befehl `cd /usr/share` in das entsprechende Verzeichnis. Lade dann die neueste phpMyAdmin-Version mit `wget` in das Installationsverzeichnis herunter:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Falls der Befehl `wget` nicht gefunden wird, kannst du das Tool mit `sudo apt install wget -y` nachinstallieren. 
:::

Sobald der Download abgeschlossen ist, kannst du die ZIP-Datei mit folgendem Befehl entpacken:

```
unzip phpmyadmin.zip
```
:::warning
Falls der Befehl `unzip` nicht gefunden wird, kannst du das Tool mit `sudo apt install unzip -y` nachinstallieren. 
:::

Das entpackte Archiv kannst du jetzt in einen einfacheren Namen umbenennen, die ZIP-Datei löschen und die nötigen Berechtigungen setzen:

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Konfiguration

### Webserver-Konfigurationsdatei

Jetzt muss phpMyAdmin in die Webserver-Konfiguration eingebunden werden. Erstelle dazu mit `nano /etc/apache2/conf-available/phpmyadmin.conf` eine neue Konfigurationsdatei und fülle sie mit folgendem Inhalt:

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

Nachdem du die Apache2-phpMyAdmin-Konfiguration mit dem Inhalt gefüllt hast, speichere und schließe die Datei mit `CTRL+X`, bestätige mit `Y` und drücke `Enter`.

Die neu erstellte Konfigurationsdatei muss nun aktiviert und geladen werden. Führe dazu folgende Befehle aus:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Erstellen des benötigten temporären Verzeichnisses

Damit phpMyAdmin richtig funktioniert, muss ein temporäres Verzeichnis erstellt und die erforderlichen Berechtigungen gesetzt werden. Das machst du mit diesen Befehlen:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Fazit

Glückwunsch, du hast phpMyAdmin erfolgreich installiert und konfiguriert! Du kannst die Weboberfläche jetzt über die IP-Adresse und den Pfad deines Servers erreichen (http://IP-Adresse/phpmyadmin). Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂