---
id: dedicated-linux-wordpress
title: "Dedicated Server: Installation von WordPress"
description: "Entdecke, wie du WordPress auf einem Linux-Server mit dem LAMP-Stack installierst, um deine Website effizient zu erstellen und zu verwalten → Jetzt mehr erfahren"
sidebar_label: WordPress installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

WordPress ist ein beliebtes Web-Content-Management-System, das zur Verwaltung und Veröffentlichung von Websites genutzt wird. Heutzutage hat sich WordPress in viele weitere Bereiche wie Mailing, Foren, Shops und vieles mehr entwickelt. Das wird durch eine lebendige Community unterstützt, die ein starkes Plugin-Ökosystem sowie Templates aufgebaut hat, die es Endanwendern leicht machen, alles Mögliche einzurichten. In dieser Anleitung zeigen wir dir, wie du das WordPress CMS auf einem Linux-Server installierst.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

<InlineVoucher />

## Vorbereitung

Starte, indem du dich per SSH mit deinem Server verbindest. Falls du nicht weißt, wie das geht, schau dir bitte unsere [Erstzugang (SSH)](dedicated-linux-ssh.md) Anleitung an.

:::info
In dieser Anleitung verwenden wir die Ubuntu-Distribution, kombiniert mit Apache als Webserver, MySQL für die Datenbank und PHP als Kernabhängigkeit. Das ist bekannt als der LAMP-Stack: Linux, Apache, MySQL und PHP.
:::

Sobald du eingeloggt bist, führe zuerst den Update-Befehl aus.
```
sudo apt update
```

Danach kannst du alle notwendigen Abhängigkeiten installieren. Kopiere einfach den gesamten Befehl unten und füge ihn ein, um alle Abhängigkeiten auf einmal zu installieren. Hab Geduld, das kann eine Weile dauern.
```
sudo apt install apache2 \
                 ghostscript \
                 libapache2-mod-php \
                 mysql-server \
                 php \
                 php-bcmath \
                 php-curl \
                 php-imagick \
                 php-intl \
                 php-json \
                 php-mbstring \
                 php-mysql \
                 php-xml \
                 php-zip
```

Nachdem die Abhängigkeiten installiert sind, gibt es ein paar kleine empfohlene Einrichtungsschritte, die du befolgen solltest, um sicherzustellen, dass alle Kernabhängigkeiten des LAMP-Stacks funktionieren.

### Apache & Firewall

Zuerst musst du die Firewall so konfigurieren, dass der Apache-Webserver mit dem Internet kommunizieren kann und funktionsfähig ist. Es ist wichtig, dass die passenden Firewall-Regeln erstellt werden, damit der Webserver aus dem Internet erreichbar ist.

In diesem Beispiel verwenden wir die **UFW Firewall**, da Apache dafür eine registrierte Anwendung hat. Wenn du eine andere Firewall nutzt, stelle sicher, dass Port 80 (HTTP) freigegeben ist. Mehr Infos zu Firewalls unter Linux findest du in unserer [Firewall verwalten](vserver-linux-firewall.md) Anleitung.

Stelle sicher, dass die UFW Firewall aktiviert ist und eine Regel für SSH erstellt wurde.
```
# Regel für SSH erstellen
sudo ufw allow OpenSSH

# UFW Firewall aktivieren
sudo ufw enable
```

:::caution
Stelle sicher, dass du eine Regel für SSH eingerichtet hast, wenn du UFW nutzt! Ohne diese kannst du dich **nicht mehr per SSH** mit dem Server verbinden, falls du die aktuelle Session verlierst!
:::

Erstelle jetzt die Regel für Apache und überprüfe anschließend, ob die Regeln vorhanden sind.
```
# Regel für Apache erstellen
sudo ufw allow in "Apache Full"

# UFW Firewall-Regeln anzeigen
sudo ufw status
```

:::tip
Du kannst dir verfügbare Profile mit dem Befehl `ufw app list` anzeigen lassen. Im Beispiel oben sorgt `Apache Full` dafür, dass sowohl HTTP (Port 80) als auch HTTPS (Port 443) freigegeben werden.
:::

Du solltest die Regeln `Apache` und `Apache (v6)` mit der Aktion `ALLOW` sehen, was bestätigt, dass die Firewall bereit ist. Außerdem solltest du weitere Regeln sehen, die du vorher eingerichtet hast, inklusive der SSH-Regel.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Nachdem die Firewall für Apache geöffnet ist, solltest du sicherstellen, dass Apache funktioniert. Öffne dazu im Browser deine IP-Adresse, z.B.: `http://[deine_ipadresse]`

Wenn alles funktioniert, solltest du eine Standard-Willkommensseite sehen. Falls nicht, prüfe den Status des Dienstes mit: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL Einrichtung

Als nächstes folgt die Ersteinrichtung von MySQL. Es wird empfohlen, das Sicherheits-Setup-Skript auszuführen, um deinen MySQL-Server sicher zu machen. Das ist optional, aber sehr zu empfehlen. Starte es mit: `sudo mysql_secure_installation`.

Das führt dich durch eine interaktive Einrichtung. Zuerst wirst du nach der Passwortvalidierung gefragt. Wir empfehlen `Y` zu wählen, damit zukünftig nur sichere Passwörter erlaubt sind, und dann entweder `MEDIUM` mit `1` oder `STRONG` mit `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Danach wirst du gefragt, ob der `anonymous` Benutzer entfernt und der Root-Login aus der Ferne deaktiviert werden soll. Wir empfehlen beides mit `Y` zu bestätigen, um die Sicherheit zu erhöhen. So wird der Testuser entfernt und der Root-User kann nur lokal per SSH genutzt werden, was das Risiko minimiert.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Zum Schluss wirst du gefragt, ob die `test` Datenbank gelöscht und die Berechtigungstabellen neu geladen werden sollen. Auch hier empfehlen wir `Y`, da die Test-Datenbank nicht benötigt wird und die Privilegientabellen für Änderungen neu geladen werden müssen.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Prüfe nun, ob die MySQL-Datenbank läuft, indem du dich mit folgendem Befehl einloggst: `sudo mysql -u root`. Wenn es klappt, erscheint eine Willkommensnachricht. Mit `quit` kannst du die Sitzung wieder beenden.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### PHP testen

Zum Schluss solltest du sicherstellen, dass PHP wie erwartet funktioniert. Erstelle dazu eine `info.php` Datei im Apache-Verzeichnis `/var/www/html/` mit folgendem Inhalt, der die `phpinfo()` Funktion ausführt.
```
# Öffne den nano Editor für die neue Datei
nano /var/www/html/info.php

# Füge folgenden Inhalt ein
<?php
phpinfo();
?>
```

Speichere die Datei mit `CTRL+X`, dann `Y` und `Enter`, um die Änderungen zu bestätigen.

Rufe nun im Browser die URL auf:
```
http://[deine_ipadresse]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Wenn die PHP-Info-Seite angezeigt wird, sind die Kernabhängigkeiten des LAMP-Stacks getestet und funktionsfähig. Du kannst mit der WordPress-Installation starten.

## Installation

Die WordPress-Installation lässt sich in drei Bereiche aufteilen: Zuerst die Vorbereitung der MySQL-Datenbank, dann die Installation von WordPress und zuletzt die Konfiguration über den WordPress-Setup-Assistenten.

### MySQL-Datenbank

Für den Start der Installation musst du eine neue MySQL-Datenbank anlegen. Das ist wichtig, da du diese Daten später im WordPress-Setup verwenden wirst. Wir empfehlen, unsere Beispiele zu nutzen.

Kopiere einfach die folgenden Befehle, um die Datenbank, Tabellen und Benutzer anzulegen.
```
# Login in MySQL
sudo mysql -u root

# Datenbank erstellen
CREATE DATABASE wordpress;

# Dedizierten WordPress-Benutzer anlegen
# Ersetze [dein_passwort] mit deinem eigenen Passwort
CREATE USER wordpress@localhost IDENTIFIED BY '[dein_passwort]';

# Rechte für den Benutzer setzen (als ein Befehl kopieren)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Berechtigungen neu laden
FLUSH PRIVILEGES;
```

Nachdem du die Datenbank und den Benutzer angelegt hast, kannst du mit `quit` die MySQL-Sitzung verlassen. Jetzt bist du bereit für die WordPress-Installation.

### WordPress installieren

Für die WordPress-Installation empfehlen wir, die offizielle Version von **wordpress.org** direkt zu verwenden, statt das APT-Paket. Das wird von WordPress empfohlen, um mögliche Probleme zu vermeiden.

Lade die neueste Version mit folgendem Befehl in das temporäre Verzeichnis herunter:
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Entpacke das Archiv, das einen `wordpress` Ordner mit allen Dateien enthält:
```
tar -xvf latest.tar.gz
```

Kopiere den Ordner in dein Apache-Verzeichnis `/var/www/html/`, damit alles über das Web erreichbar ist. Führe dazu folgende Befehle aus, die den Ordner kopieren, ein `uploads` Verzeichnis anlegen und die Rechte so setzen, dass die Gruppe `www-data` Zugriff hat:
```
# WordPress-Ordner kopieren und Besitzrechte setzen
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Uploads-Verzeichnis erstellen
mkdir /var/www/html/wordpress/wp-content/uploads

# Dateiberechtigungen anpassen
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

Damit ist WordPress installiert. Öffne den Setup-Assistenten im Browser unter: `http://[deine_ipadresse]/wordpress`

### Setup-Assistent

Im Setup-Assistenten kannst du WordPress jetzt konfigurieren – der letzte Schritt der Installation. Zuerst wirst du nach der Sprache gefragt.

Danach musst du die Datenbank-Einstellungen eingeben. Diese hast du bereits in MySQL vorbereitet, also nutze hier dieselben Zugangsdaten. Wenn du unseren Beispielen gefolgt bist, füll die Felder so aus und ersetze `[dein_passwort]` mit deinem Passwort.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Nach diesem Schritt wirst du aufgefordert, die Installation zu starten – das ist der letzte Teil des Setups.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

Auf der nächsten Seite gibst du verschiedene Infos ein, darunter den Seitentitel, eine E-Mail-Adresse sowie einen Benutzernamen und Passwort für den WordPress-Root-Account, mit dem du dich später ins Dashboard einloggst. Du kannst auch einstellen, ob Suchmaschinen deine Website indexieren dürfen oder nicht.

:::tip
Wähle ein starkes Passwort und speichere deine Zugangsdaten, damit du den Zugriff auf dein WordPress-Dashboard nicht verlierst!
:::

Wenn du bereit bist, klick auf den **WordPress installieren** Button, um die Installation abzuschließen.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Du wirst zu einer Erfolgsseite weitergeleitet, die dich zum **Login** führt. Klick darauf und melde dich mit deinen Zugangsdaten zum ersten Mal im WordPress-Dashboard an!

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

Und schon bist du drin – dein WordPress-Dashboard mit einer frischen, kompletten Installation.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Fazit

Glückwunsch, du hast WordPress erfolgreich installiert und konfiguriert! Als nächsten Schritt empfehlen wir **dringend**, eine Domain und ein **SSL-Zertifikat** einzurichten, damit deine Daten sicher übertragen werden und der Zugriff auf das WordPress-Dashboard einfacher wird. Schau dir dazu unsere [Certbot Anleitung](dedicated-linux-certbot.md) mit Fokus auf das **Apache Plugin** an und folge der interaktiven Einrichtung, um schnell und einfach ein Zertifikat für deine Domain zu erstellen.

Für weiterführende Infos und Setup-Tipps empfehlen wir dir unsere [WordPress Plugins](webspace-wordpress-plugins.md) und [WordPress Elementor](webspace-wordpress-elementor.md) Anleitungen, die dir zeigen, wie du Plugins installierst und den beliebten, benutzerfreundlichen Page Builder Elementor nutzt.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />