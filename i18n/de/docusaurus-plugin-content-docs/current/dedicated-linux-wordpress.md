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



## WordPress mit dem One Click Apps Installer installieren

Du kannst **WordPress** direkt über unseren **One Click Apps Installer** im VPS Webinterface installieren. Nach der ersten Einrichtung der Apps öffnest du den App-Katalog, suchst nach **WordPress** und startest die Installation mit deinen bevorzugten Projekt-, Umgebungs- und Domain-Einstellungen. So kannst du WordPress schnell und benutzerfreundlich deployen und verwalten, ohne manuell per Kommandozeile zu arbeiten – und profitierst trotzdem von integriertem Web-Management, Support für eigene Domains und SSL-Zertifikaten, wo verfügbar.

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem Server. Falls du nicht weißt, wie das geht, schau dir unsere [Erstzugang (SSH)](dedicated-linux-ssh.md) Anleitung an.

:::info
In dieser Anleitung verwenden wir die Ubuntu-Distribution, kombiniert mit Apache als Webserver, MySQL als Datenbank und PHP als Kernabhängigkeit. Das nennt man den LAMP-Stack: Linux, Apache, MySQL und PHP.
:::

Sobald du eingeloggt bist, starte mit dem Update-Befehl.
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

Nachdem die Abhängigkeiten installiert sind, gibt es ein paar empfohlene Schritte, um sicherzustellen, dass alle Kernkomponenten des LAMP-Stacks funktionieren.

### Apache & Firewall

Zuerst musst du die Firewall so konfigurieren, dass der Apache Webserver mit dem Internet kommunizieren kann und funktionsfähig ist. Es ist wichtig, die passenden Firewall-Regeln zu erstellen, damit der Webserver von außen erreichbar ist.

In diesem Beispiel nutzen wir die **UFW Firewall**, da Apache dafür eine registrierte Anwendung hat. Wenn du eine andere Firewall nutzt, stelle sicher, dass Port 80 (HTTP) freigegeben ist. Mehr zu Firewalls unter Linux findest du in unserer [Firewall verwalten](vserver-linux-firewall.md) Anleitung.

Stelle sicher, dass die UFW Firewall aktiviert ist und eine Regel für SSH existiert.
```
# Regel für SSH erstellen
sudo ufw allow OpenSSH

# UFW Firewall aktivieren
sudo ufw enable
```

:::caution
Achte darauf, dass du eine SSH-Regel eingerichtet hast, wenn du UFW nutzt! Ohne diese kannst du dich nach Verbindungsverlust nicht mehr per SSH auf den Server einloggen!
:::

Erstelle jetzt die Regel für Apache und überprüfe anschließend, ob die Regeln vorhanden sind.
```
# Regel für Apache erstellen
sudo ufw allow in "Apache Full"

# UFW Firewall Regeln anzeigen
sudo ufw status
```

:::tip
Mit dem Befehl `ufw app list` kannst du sehen, welche Profile verfügbar sind. Im Beispiel oben sorgt `Apache Full` dafür, dass sowohl HTTP (Port 80) als auch HTTPS (Port 443) freigegeben werden.
:::

Du solltest `Apache` und `Apache (v6)` mit der Aktion `ALLOW` sehen, was bestätigt, dass die Firewall bereit ist. Außerdem siehst du weitere Regeln, die du vorher eingerichtet hast, inklusive der SSH-Regel.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Nachdem die Firewall für Apache geöffnet ist, solltest du sicherstellen, dass Apache funktioniert. Öffne dazu im Browser die IP-Adresse deines Servers: `http://[deine_ipadresse]`

Wenn alles läuft, siehst du eine Standard-Willkommensseite. Falls nicht, prüfe den Status des Dienstes mit: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL Einrichtung

Als nächstes führst du die Ersteinrichtung von MySQL durch. Es wird empfohlen, das Sicherheits-Skript auszuführen, um deinen MySQL-Server sicher zu machen. Das ist optional, aber sehr zu empfehlen. Starte es mit: `sudo mysql_secure_installation`

Das Skript führt dich interaktiv durch die Einrichtung. Zuerst wirst du nach der Passwortvalidierung gefragt. Wir empfehlen `Y` zu wählen, damit zukünftig nur sichere Passwörter erlaubt sind, und dann entweder `MEDIUM` mit `1` oder `STRONG` mit `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Danach wirst du gefragt, ob der `anonymous` Benutzer entfernt und der Root-Login aus der Ferne deaktiviert werden soll. Beides solltest du aus Sicherheitsgründen mit `Y` bestätigen. So wird der Testuser entfernt und der Root-User kann nur lokal per SSH genutzt werden, was das Risiko minimiert.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Zum Schluss wirst du gefragt, ob die `test` Datenbank gelöscht und die Berechtigungstabellen neu geladen werden sollen. Auch hier empfehlen wir `Y`, da die Testdatenbank nicht gebraucht wird und die Privilegientabellen für Änderungen neu geladen werden müssen.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Prüfe nun, ob die MySQL-Datenbank läuft, indem du dich mit folgendem Befehl einloggst: `sudo mysql -u root`. Wenn es klappt, erscheint eine Willkommensmeldung. Mit `quit` kannst du die Sitzung wieder beenden.

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

Rufe nun im Browser folgende URL auf, die eine PHP-Info-Seite anzeigen sollte, wenn alles funktioniert:
```
http://[deine_ipadresse]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Wenn die Kernkomponenten des LAMP-Stacks getestet und funktionsfähig sind, kannst du mit der eigentlichen WordPress-Installation starten.

## Installation

Die WordPress-Installation lässt sich in drei Bereiche aufteilen: Zuerst die Vorbereitung der MySQL-Datenbank, dann die Installation von WordPress und zuletzt die Konfiguration über den WordPress Setup-Assistenten.

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

# Privilegientabellen neu laden
FLUSH PRIVILEGES;
```

Nach der Einrichtung kannst du mit `quit` MySQL verlassen. Jetzt bist du bereit für die WordPress-Installation.

### WordPress installieren

Für die WordPress-Installation empfehlen wir, die offizielle Version von **wordpress.org** zu nutzen, statt das APT-Paket. Das wird von WordPress empfohlen, um mögliche Probleme zu vermeiden.

Lade die neueste Version mit folgendem Befehl in das temporäre Verzeichnis herunter:
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Entpacke das Archiv, es entsteht ein Ordner `wordpress` mit allen nötigen Dateien:
```
tar -xvf latest.tar.gz
```

Kopiere den Ordner in dein Apache-Verzeichnis `/var/www/html/`, damit alles über das Web erreichbar ist. Führe dazu folgende Befehle aus, die den Ordner kopieren, ein Upload-Verzeichnis anlegen und die Rechte so setzen, dass die Gruppe `www-data` Zugriff hat:
```
# WordPress-Ordner kopieren und Besitzrechte setzen
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Uploads-Verzeichnis anlegen
mkdir /var/www/html/wordpress/wp-content/uploads

# Dateiberechtigungen anpassen
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

Damit ist WordPress installiert. Öffne den Setup-Assistenten über: `http://[deine_ipadresse]/wordpress`

### Setup-Assistent

Im Setup-Assistenten kannst du WordPress jetzt konfigurieren – der letzte Schritt der Installation. Zuerst wirst du nach der Sprache gefragt.

Danach musst du die Datenbank-Einstellungen eingeben. Diese hast du bereits bei der MySQL-Einrichtung vorbereitet, also nutze hier dieselben Zugangsdaten. Wenn du unseren Beispielen gefolgt bist, füllst du die Felder so aus und ersetzt `[dein_passwort]` durch dein Passwort.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Nach diesem Schritt wirst du aufgefordert, die Installation zu starten – das ist der letzte Teil des Setups.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

Auf der nächsten Seite gibst du verschiedene Infos ein, darunter den Seitentitel, eine E-Mail-Adresse sowie einen Benutzernamen und ein Passwort für den WordPress-Root-Account, mit dem du dich später ins Panel einloggst. Du kannst auch einstellen, ob Suchmaschinen deine Website indexieren dürfen oder nicht.

:::tip
Wähle ein starkes Passwort und speichere deine Zugangsdaten, damit du nicht den Zugriff auf dein WordPress Panel verlierst!
:::

Wenn du bereit bist, klick auf den Button **WordPress installieren**, um den Vorgang abzuschließen.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Du wirst auf eine Erfolgsseite weitergeleitet, die dich zum **Login** führt. Dort meldest du dich mit deinen Zugangsdaten zum ersten Mal im WordPress Panel an!

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

Und schon bist du drin – dein WordPress Panel mit kompletter Installation.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Fazit

Glückwunsch, du hast WordPress erfolgreich installiert und konfiguriert! Als nächsten Schritt empfehlen wir dir **dringend**, eine Domain und ein **SSL-Zertifikat** einzurichten, damit deine Daten sicher übertragen werden und der Zugriff auf das WordPress Panel einfacher wird. Schau dir dazu unsere [Certbot Anleitung](dedicated-linux-certbot.md) mit Fokus auf das **Apache Plugin** an und folge der interaktiven Einrichtung, um schnell und einfach ein Zertifikat für deine Wunschdomain zu bekommen.

Für weiterführende Infos und Setup-Tipps empfehlen wir dir unsere [WordPress Plugins](webspace-wordpress-plugins.md) und [WordPress Elementor](webspace-wordpress-elementor.md) Anleitungen, die zeigen, wie du Plugins installierst und den beliebten, benutzerfreundlichen Page Builder Elementor nutzt.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite – zögere nicht, uns zu kontaktieren! 🙂