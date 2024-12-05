---
id: vserver-linux-phpmyadmin
title: "vServer: Installation von phpMyAdmin"
description: Informationen wie du phpMyAdmin auf deinem Linux vServer von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: phpMyAdmin installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

phpMyAdmin ist ein kostenloses, webbasiertes Werkzeug zur Verwaltung von MySQL- und MariaDB-Datenbanken. Es bietet eine benutzerfreundliche Oberfläche, über die Benutzer Datenbanken erstellen, bearbeiten, verwalten und löschen können, ohne SQL-Befehle manuell eingeben zu müssen.

<InlineVoucher />

## Vorbereitung

Zu Beginn der Installation sollte sichergestellt werden, dass das System auf dem neusten Stand läuft. Ausstehende Updates und Upgrades können wie folgt durchgeführt werden:


```
sudo apt update -y
sudo apt upgrade -y
```

Des Weiteren muss sichergestellt sein, dass du bereits PHP auf deinem System installiert hast. Für die Verwendung von phpMyAdmin ist dies zwingend notwendig. Wie du PHP installieren kannst erfährst du in unserer [PHP installieren](vserver-linux-php.md) Anleitung. 

:::warning Fehlende PHP Pakete
Wenn die notwendigen PHP Pakete fehlen, dann können die PHP-Dateien von phpMyAdmin nicht korrekt vearbeitet und dargestellt werden. 
:::

## Installation

Sofern die Vorbereitung abgeschlossen wurde, kann nun mit der Installation der phpMyAdmin Oberfläche begonnen werden. Dafür wird zuerst das Installationsverzeichnis aufgerufen, in dem phpMyAdmin installiert werden soll. 
Navigiere dafür mit dem Befehl  `cd /usr/share` in das entsprechende Verzeichnis. Anschließend muss mithilfe von `wget` die neuste phpMyAdmin Version in das Installationsverzeichnis heruntergeladen werden:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Sollte der `wget` Dienst nicht gefunden werden, so kann der zugehörige Dienst mit dem Befehl

 `sudo apt install wget -y` nachinstalliert werden. 
:::

Sobald der Download abgeschlossen ist, kann die heruntergeladene ZIP-Datei mit dem folgendem Befehl entpackt werden: 

```
unzip phpmyadmin.zip
```
:::warning
Sollte der `unzip` Dienst nicht gefunden werden, so kann der zugehörige Dienst mit dem Befehl

 `sudo apt install unzip -y` nachinstalliert werden. 
:::

Nun kann das entpackte Archiv in einen einfacheren Namen umbenannt, die ZIP-Datei entfernt und die notzwenden Berechtigungen gesetzt werden: 

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```



## Konfiguration

###  Webserver Konfigurationsdatei
Nun muss phpMyAdmin in der Webserver Konfiguration ergänzt werden. Lege dazu mit `nano /etc/apache2/conf-available/phpmyadmin.conf` eine neue 
Virtual Host Konfigurationsdatei an und befülle diese mit dem folgenden Inhalt:

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

Im Anschluss muss die neu erstellte Virtual Host Konfigurationsdatei aktiviert und eingelesen werden. Führe dazu folgende Befehle aus:

```
a2enconf phpmyadmin
systemctl reload apache2
```



### Notwendiges temporäres Verzeichnis anlegen

Damit phpMyAdmin auch ordnungsgemäß funktioniert, muss  noch ein temporäres Verzeichnis angelegt und dazu die benötigten Berechtigungen gesetzt werden. Dies kannst du mit den folgenden Befehlen umsetzen: 

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Abschluss

Glückwunsch, du hast erfolgreich phpMyAdmin installiert und konfiguriert. Du kannst die Weboberfläche nut über die IP-Adresse deines Servers und der Pfadangabe (http://IP-Adresse/phpmyadmin) aufrufen. Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂