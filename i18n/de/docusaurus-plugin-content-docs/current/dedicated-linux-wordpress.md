---
id: dedicated-linux-wordpress
title: "WordPress auf einem Linux Server einrichten – Starte deine eigene Website oder deinen Blog"
description: "Entdecke, wie du WordPress auf einem Linux Server mit dem LAMP-Stack installierst, um deine Website effizient zu erstellen und zu verwalten → Jetzt mehr erfahren"
sidebar_label: WordPress installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

WordPress ist ein beliebtes Web-Content-Management-System, das zur Verwaltung und Veröffentlichung von Websites genutzt wird. Heutzutage hat sich WordPress in viele weitere Bereiche entwickelt, wie Mailing, Foren, Shops und vieles mehr. Das wird durch eine aktive Community unterstützt, die ein starkes Plugin-Ökosystem und Templates aufgebaut hat, die es Endanwendern leicht machen, alles Mögliche einzurichten. In dieser Anleitung zeigen wir dir, wie du das WordPress CMS auf einem Linux Server installierst.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## Vorbereitung

Starte, indem du dich per SSH mit deinem Server verbindest. Falls du nicht weißt, wie das geht, schau dir bitte unsere [Erstzugang (SSH)](dedicated-linux-ssh.md) Anleitung an.

:::info
In dieser Anleitung verwenden wir die Ubuntu-Distribution, kombiniert mit Apache als Webserver, MySQL für die Datenbank und PHP als Kernabhängigkeit. Das nennt man den LAMP-Stack: Linux, Apache, MySQL und PHP.
:::

Sobald du eingeloggt bist, führe zuerst den Update-Befehl aus.
```
sudo apt update
```

Danach kannst du alle notwendigen Abhängigkeiten installieren. Kopiere einfach den kompletten Befehl unten und füge ihn ein, um alles auf einmal zu installieren. Hab Geduld, das kann eine Weile dauern.
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

Nachdem die Abhängigkeiten installiert sind, gibt es ein paar kleine empfohlene Einrichtungsschritte, die du befolgen solltest, um sicherzustellen, dass alle Kernkomponenten des LAMP-Stacks funktionieren.

### Apache & Firewall

Zuerst musst du die Firewall so konfigurieren, dass der Apache Webserver mit dem Internet kommunizieren kann und funktionsfähig ist. Es ist wichtig, dass die passenden Firewall-Regeln erstellt werden, damit der Webserver aus dem Internet erreichbar ist.

In diesem Beispiel nutzen wir die **UFW Firewall**, da Apache dafür eine registrierte Anwendung hat. Wenn du eine andere Firewall nutzt, stelle sicher, dass Port 80 (HTTP) freigegeben ist. Mehr Infos zu Firewalls unter Linux findest du in unserer [Firewall verwalten](vserver-linux-firewall.md) Anleitung.

Stelle sicher, dass die UFW Firewall aktiviert ist und eine Regel für SSH existiert.
```
# Regel für SSH erstellen
sudo ufw allow OpenSSH

# UFW Firewall aktivieren
sudo ufw enable
```

:::caution
Achte darauf, dass du eine Regel für SSH eingerichtet hast, wenn du UFW nutzt! Ohne diese kannst du dich **nicht mehr per SSH** mit deinem Server verbinden, falls du die aktuelle Session verlierst!
:::

Erstelle jetzt die Regel für Apache und überprüfe anschließend, ob die Regeln vorhanden sind.
```
# Regel für Apache erstellen
sudo ufw allow in "Apache Full"

# UFW Firewall Regeln anzeigen
sudo ufw status
```

:::tip
Mit dem Befehl `ufw app list` kannst du dir anzeigen lassen, welche Profile verfügbar sind. Im Beispiel oben sorgt `Apache Full` dafür, dass sowohl HTTP (Port 80) als auch HTTPS (Port 443) freigegeben werden.
:::

Du solltest die Regeln `Apache` und `Apache (v6)` mit der Aktion `ALLOW` sehen, was bestätigt, dass die Firewall bereit ist. Außerdem solltest du weitere Regeln sehen, die du vorher eingerichtet hast, inklusive der SSH-Regel.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Nachdem die Firewall für Apache geöffnet ist, solltest du sicherstellen, dass Apache funktioniert. Öffne dazu deinen Browser und gib deine IP-Adresse ein, z.B.: `http://[deine_ipadresse]`

Wenn alles läuft, solltest du eine Standard-Willkommensseite sehen. Falls nicht, prüfe den Status des Dienstes mit: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL Einrichtung

Als nächstes steht die Erstkonfiguration von MySQL an. Es wird empfohlen, das sichere Installationsskript auszuführen, um deinen MySQL-Server sicher zu machen. Das ist optional, aber sehr zu empfehlen. Starte es mit: `sudo mysql_secure_installation`.

Das Skript führt dich interaktiv durch die Einrichtung. Zuerst wirst du nach der Passwortvalidierung gefragt. Wir empfehlen, mit `Y` zu bestätigen, damit zukünftig nur sichere Passwörter erlaubt sind, und dann `MEDIUM` mit `1` oder `STRONG` mit `2` auszuwählen.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Danach wirst du gefragt, ob der `anonymous` Benutzer entfernt und der Root-Login von außen deaktiviert werden soll. Wir empfehlen, beides mit `Y` zu bestätigen, um die Sicherheit zu erhöhen. So wird der Testuser entfernt und der Root-User kann nur lokal per SSH genutzt werden, was das Risiko minimiert.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Zum Schluss wirst du gefragt, ob die `test` Datenbank gelöscht und die Berechtigungstabellen neu geladen werden sollen. Auch hier empfehlen wir `Y`, da die Testdatenbank nicht gebraucht wird und die Privilegientabellen neu geladen werden müssen.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Prüfe nun, ob die MySQL-Datenbank läuft, indem du dich mit folgendem Befehl einloggst: `sudo mysql -u root`. Wenn es klappt, erscheint eine Willkommensnachricht. Mit `quit` kannst du die MySQL-Konsole wieder verlassen.

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

Speichere die Datei mit `CTRL+X`, dann `Y` und `Enter`.

Rufe nun im Browser die folgende URL auf, die dir eine PHP-Info-Seite anzeigen sollte, wenn alles funktioniert:
```
http://[deine_ipadresse]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Wenn die Kernkomponenten des LAMP-Stacks getestet und funktionsfähig sind, kannst du mit der eigentlichen WordPress-Installation starten.

## Installation

Die WordPress-Installation lässt sich in drei Schritte unterteilen: Zuerst die Vorbereitung der MySQL-Datenbank, dann die Installation von WordPress und zuletzt die Konfiguration über den WordPress Setup-Assistenten.

### MySQL-Datenbank

Für den Start musst du eine neue MySQL-Datenbank anlegen. Das ist wichtig, da du diese Daten später im WordPress Setup-Assistenten brauchst. Wir empfehlen, unsere Beispiele zu verwenden.

Kopiere einfach die folgenden Befehle, um die Datenbank, Tabellen und Benutzer anzulegen.
```
# In MySQL einloggen
sudo mysql -u root

# Datenbank erstellen
CREATE DATABASE wordpress;

# Dedizierten WordPress-Benutzer anlegen
# Ersetze [dein_passwort] durch dein eigenes Passwort
CREATE USER wordpress@localhost IDENTIFIED BY '[dein_passwort]';

# Rechte für den Benutzer setzen (alles als ein Befehl kopieren)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Berechtigungen neu laden
FLUSH PRIVILEGES;
```

Wenn die Datenbank und der Benutzer eingerichtet sind, kannst du mit `quit` MySQL verlassen. Jetzt bist du bereit für die WordPress-Installation.

### WordPress installieren

Für die WordPress-Installation empfehlen wir, die offizielle Version von **wordpress.org** zu nutzen, statt das APT-Paket. Das wird von WordPress empfohlen, um mögliche Probleme zu vermeiden.

Lade die neueste Version mit folgendem Befehl in das temporäre Verzeichnis herunter:
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Entpacke das Archiv, es wird ein Ordner `wordpress` mit allen Dateien erstellt.
```
tar -xvf latest.tar.gz
```

Kopiere den Ordner in dein Apache-Verzeichnis `/var/www/html/`, damit alles über das Web erreichbar ist. Führe dazu diese Befehle aus, die den Ordner kopieren, ein `uploads` Verzeichnis anlegen und die Rechte so setzen, dass die Gruppe `www-data` Zugriff hat.
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

Damit ist WordPress installiert. Rufe den Setup-Assistenten auf unter: `http://[deine_ipadresse]/wordpress`

### Setup-Assistent

Im Setup-Assistenten kannst du WordPress jetzt konfigurieren – der letzte Schritt der Installation. Zuerst wirst du aufgefordert, deine Sprache auszuwählen.

Danach musst du die Datenbank-Einstellungen eingeben. Diese hast du bereits im ersten Schritt mit MySQL vorbereitet, also nutze hier dieselben Zugangsdaten. Wenn du unseren Beispielen gefolgt bist, füll die Felder so aus und ersetze `[dein_passwort]` durch dein Passwort.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Nach diesem Schritt wirst du aufgefordert, die Installation zu starten – das ist der letzte Teil des Setups.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

Auf der nächsten Seite gibst du verschiedene Infos ein, wie den Seitentitel, eine E-Mail-Adresse sowie einen Benutzernamen und ein Passwort für den WordPress-Admin-Account. Du kannst auch einstellen, ob deine Website von Suchmaschinen indexiert werden soll oder nicht.

:::tip
Wähle ein starkes Passwort und speichere deine Zugangsdaten, damit du nicht den Zugriff auf dein WordPress Dashboard verlierst!
:::

Wenn du bereit bist, klick auf den Button **WordPress installieren**, um die Installation abzuschließen.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Du wirst zu einer Erfolgsseite weitergeleitet, die dich zum **Login** bringt. Klick darauf und melde dich mit deinen Zugangsdaten zum ersten Mal im WordPress Dashboard an!

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

Und schon bist du drin – dein WordPress Dashboard mit einer frischen Installation.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Abschluss

Glückwunsch, du hast WordPress erfolgreich installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir **dringend**, eine Domain und ein **SSL-Zertifikat** einzurichten, damit deine Daten sicher übertragen werden und der Zugriff auf das WordPress Dashboard einfacher wird. Schau dir dazu unsere [Certbot Anleitung](dedicated-linux-certbot.md) mit Fokus auf das **Apache Plugin** an und folge der interaktiven Einrichtung, um schnell und einfach ein Zertifikat für deine Domain zu erstellen.

Für weiterführende Infos und Setup-Tipps empfehlen wir dir, unsere [WordPress Plugins](webspace-wordpress-plugins.md) und [WordPress Elementor](webspace-wordpress-elementor.md) Anleitungen durchzulesen. Dort erfährst du, wie du Plugins installierst und den beliebten, benutzerfreundlichen Page Builder Elementor nutzt.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite – zögere nicht, uns zu kontaktieren! 🙂