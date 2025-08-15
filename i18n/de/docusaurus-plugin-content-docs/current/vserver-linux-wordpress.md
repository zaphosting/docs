---
id: vserver-linux-wordpress
title: "vServer: Installation von WordPress"
description: Informationen, wie du WordPress auf deinem Linux Server von ZAP-Hosting installieren und einrichten kannst - ZAP-Hosting.com Dokumentation
sidebar_label: WordPress installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

WordPress ist ein beliebtes Web-Content-Management-System zum Verwalten und Veröffentlichen von Websites. Heutzutage hat sich WordPress in viele andere Bereiche wie Mailing, Foren, Shops und vieles mehr entwickelt. Das wird durch eine aktive Community unterstützt, die ein starkes Plugin-Ökosystem und Vorlagen aufgebaut hat, mit denen Endnutzer alles ganz einfach einrichten können. In dieser Anleitung zeigen wir dir, wie du das WordPress-CMS auf einem Linux-Server installierst.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

<InlineVoucher />

## Vorbereitung

Stell erst mal über SSH eine Verbindung zu deinem Server her. Wenn du nicht weißt, wie das geht, schau dir bitte unsere Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md) an.

:::info
In dieser Anleitung verwenden wir die Ubuntu-Distribution zusammen mit Apache als Webserver, MySQL als Datenbank und PHP als Kernkomponente. Das nennt man den LAMP-Stack: Linux, Apache, MySQL und PHP.
:::

Sobald du angemeldet bist, startest du mit dem Update-Befehl.
```
sudo apt update
```

Jetzt kannst du alle wichtigen Sachen installieren. Kopiere einfach den ganzen Befehl unten und füge ihn ein, um alles auf einmal zu installieren. Hab ein bisschen Geduld, das kann eine Weile dauern.
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

Nachdem du die Abhängigkeiten installiert hast, solltest du ein paar kleine Schritte machen, damit alle wichtigen Abhängigkeiten des LAMP-Stacks funktionieren.

### Apache & Firewall

Zuerst musst du die Firewall so einrichten, dass der Apache-Webserver mit dem Internet kommunizieren kann und alles funktioniert. Es ist wichtig, dass die richtigen Firewall-Regeln erstellt werden, damit der Webserver über das Internet erreichbar ist.

In diesem Beispiel verwenden wir die **UFW-Firewall**, da Apache dafür eine registrierte Anwendung hat. Wenn du eine andere Firewall verwendest, musst du sicherstellen, dass Port 80 (HTTP) durch die Firewall zugelassen ist. Mehr über Firewalls in Linux erfährst du in unserem Leitfaden [Firewall verwalten](vserver-linux-firewall.md).

Stelle sicher, dass die UFW-Firewall aktiviert ist und dass eine Regel für SSH erstellt wurde.
```
# Erstell eine Regel, um SSH zuzulassen
sudo ufw allow OpenSSH

# UFW-Firewall aktivieren
sudo ufw enable
```

:::caution
Stell sicher, dass du eine Regel für SSH eingerichtet hast, wenn du die UFW-Firewall benutzt! Wenn du das nicht machst, kannst du dich **nicht** mehr per SSH mit dem Server verbinden, wenn die Verbindung zu deiner aktuellen Sitzung unterbrochen wird!
:::

Jetzt machst du die Regel, damit Apache durchkommt, und checkst danach, ob die Regeln da sind.
```
# Erstell eine Regel, um Apache zuzulassen
sudo ufw allow in "Apache Full"

# Schau mal die UFW-Firewall-Regeln an
sudo ufw status
```

:::tip
Mit dem Befehl `ufw app list` kannst du sehen, welche Profile verfügbar sind. Im Beispiel oben bedeutet `Apache Full`, dass sowohl HTTP- (Port 80) als auch HTTPS-Regeln (Port 443) erstellt werden.
:::

Du solltest die Regeln `Apache` und `Apache (v6)` mit der Aktion `ALLOW` sehen, was zeigt, dass die Firewall bereit ist. Du solltest auch andere Regeln sehen, die du vielleicht schon eingerichtet hast, einschließlich der SSH-Regel.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Nachdem du die Firewall für Apache geöffnet hast, solltest du jetzt checken, ob Apache funktioniert. Dazu versuchst du einfach, deine IP-Adresse in einem Browser aufzurufen, und zwar so: `http://[your_ipaddress]`

Wenn alles funktioniert, solltest du eine Standard-Begrüßungsseite sehen. Wenn nicht, überprüfe den Status des Dienstes mit dem folgenden Befehl: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL einrichten

Als Nächstes musst du MySQL zum ersten Mal einrichten. Es ist ratsam, ein Skript für eine sichere Installation zu laufen zu lassen, damit dein MySQL-Server sicher bleibt. Das ist optional, aber echt empfehlenswert. Du kannst das Skript mit dem Befehl `sudo mysql_secure_installation` starten.

Du wirst durch eine interaktive Einrichtung geführt. Zuerst wirst du nach der Passwortüberprüfung gefragt. Wir empfehlen, `Y` zu wählen, damit in Zukunft nur sichere Passwörter erlaubt sind, und dann entweder `MEDIUM` über `1` oder `STRONG` über `2` auszuwählen.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Als Nächstes wirst du gefragt, ob du den Benutzer `anonymous` löschen und die Remote-Anmeldung als Root verbieten möchtest. Aus Sicherheitsgründen empfehlen wir, beide Fragen mit `Y` zu beantworten. Dadurch wird sichergestellt, dass der Testbenutzer gelöscht wird und der Master-Benutzer `root` nur lokal über SSH und nicht anderswo verwendet werden kann, was das Risiko verringert.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Zum Schluss wirst du gefragt, ob du die Datenbank `test` löschen und die Berechtigungstabellen neu laden willst. Wir empfehlen, hier wieder mit `Y` zu bestätigen, da die Testtabelle nicht gebraucht wird und du die Berechtigungstabelle neu laden musst, damit die Änderungen übernommen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Jetzt check mal, ob die MySQL-Datenbank läuft, indem du dich mit dem folgenden Befehl anmeldest: `sudo mysql -u root`. Wenn alles geklappt hat, solltest du eine Willkommensmeldung sehen. Wenn du fertig bist, kannst du das Programm mit dem Befehl `quit` beenden.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### PHP testen

Zuletzt solltest du sicherstellen, dass PHP wie erwartet funktioniert. Dazu musst du eine Datei namens `info.php` im Apache-Verzeichnis `/var/www/html/` erstellen, die den PHP-Befehl `phpinfo()` enthält.
```
# Öffne den Nano-Editor im neuen Dateipfad
nano /var/www/html/info.php

# Kopiere den folgenden Text in den Editor
<?php
phpinfo();
?>
```

Wenn du fertig bist, speicher die Datei, indem du `STRG+X` drückst, dann `Y` und `Enter`, um die Änderungen zu bestätigen.

Ruf jetzt die folgende URL auf, die eine PHP-Infoseite anzeigen sollte, wenn alles richtig funktioniert.
```
http://[deine_ipaddress]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Nachdem die wichtigsten LAMP-Abhängigkeiten getestet wurden und funktionieren, kannst du mit der Hauptinstallation des WordPress CRM weitermachen.

## Installation

Die Installation von WordPress kann in drei Schritte unterteilt werden: Zuerst musst du eine MySQL-Datenbank vorbereiten, dann WordPress installieren und zum Schluss die Konfiguration mit dem WordPress-Setup-Assistenten erledigen.

### MySQL-Datenbank

Um mit der Installation loszulegen, musst du erst mal eine neue MySQL-Datenbank einrichten. Das ist wichtig, weil du diese später beim WordPress-Einrichtungsassistenten brauchst. Wir empfehlen dir, einfach unsere Beispiele zu nehmen.

Kopiere einfach die folgenden Befehle, um die nötigen Datenbanken, Tabellen und Benutzer zu erstellen.
```
# Bei MySQL anmelden
sudo mysql -u root

# Datenbank erstellen
CREATE DATABASE wordpress;

# Erstell einen eigenen WordPress-Benutzer
# Ersetz [deine_Passwort] durch dein eigenes Passwort
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# Privilegien für den Benutzer festlegen (als einer kopieren)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Lade die Tabellen neu
FLUSH PRIVILEGES;
```

Sobald du die Datenbank eingerichtet und den Benutzer erstellt hast, kannst du mit dem Befehl `quit` das Programm beenden. Jetzt kannst du WordPress installieren.

### WordPress installieren

Für die Hauptinstallation von WordPress empfehlen wir die Version direkt von **wordpress.org** und werden diese auch verwenden, da dies von WordPress empfohlen wird, um mögliche Probleme zu vermeiden.

Um die neueste Datei herunterzuladen, benutze den folgenden Befehl, der die neueste Version in das temporäre Verzeichnis herunterlädt.
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Jetzt pack das Dateiarchiv aus, dann hast du einen Ordner namens `wordpress` mit allen benötigten Dateien.
```
tar -xvf latest.tar.gz
```

Nachdem du die Dateien extrahiert hast, musst du den Ordner in dein Apache-Verzeichnis `/var/www/html/` kopieren, damit alles über das Internet zugänglich ist. Führe die folgenden Befehle aus, um den Ordner zu kopieren, ein Verzeichnis `uploads` zu erstellen und die Berechtigungen anzupassen, damit die Gruppe `www-data` für Webserver Zugriff hat.
```
# Kopiere den Ordner wordpress und ändere die Besitzrechte.
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Uploads-Ordner erstellen
mkdir /var/www/html/wordpress/wp-content/uploads

# Dateiberechtigungen anpassen
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

Und schon sollte WordPress installiert sein. Rufen Sie den WordPress-Einrichtungsassistenten auf: `http://[deine_ipaddress]/wordpress`

### Einrichtungsassistent

Mit dem Einrichtungsassistenten kannst du jetzt WordPress konfigurieren, was der letzte Schritt der Installation ist. Zuerst wirst du gefragt, welche Sprache du verwenden möchtest.
 
Danach musst du die Datenbank-Einstellungen machen. Das hast du schon im ersten Teil der Installation über MySQL erledigt, also solltest du hier die gleichen Zugangsdaten und Werte verwenden. Wenn du unseren Beispielen gefolgt bist, solltest du die Optionen wie folgt ausfüllen und dabei `[your_password]` durch das Passwort ersetzen, das du vorher eingegeben hast.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Wenn du das erledigt hast, wirst du aufgefordert, die Installation zu starten. Das ist der letzte Schritt der Einrichtung.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

Auf der nächsten Seite musst du ein paar Infos eingeben, wie den Namen deiner Seite, eine E-Mail-Adresse und einen Benutzernamen und ein Passwort für das WordPress-Konto, um ins Admin-Panel zu kommen. Du kannst auch festlegen, ob deine Seite in Suchmaschinen angezeigt werden soll oder nicht.

:::tip
Wähle unbedingt ein starkes Passwort und speicher die Zugangsdaten, damit du nicht den Zugriff auf dein WordPress-Panel verlierst!
:::

Wenn du startklar bist, klick einfach auf **WordPress installieren**, um die Installation abzuschließen.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Du kommst auf eine Seite, die dich zur **Anmeldung** weiterleitet. Wähl das aus und logg dich mit deinen Zugangsdaten zum ersten Mal in dein WordPress-Panel ein!

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

Und schon bist du nach dem erfolgreichen Login in deinem WordPress-Panel und hast alles installiert.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Abschluss

Herzlichen Glückwunsch, du hast WordPress erfolgreich installiert und eingerichtet! Als nächsten Schritt empfehlen wir dir dringend, eine Domain und ein **SSL-Zertifikat** einzurichten, damit Daten sicher übertragen werden und du leichter auf das WordPress-Panel zugreifen kannst. Schau dir unsere [Certbot-Anleitung](vserver-linux-certbot.md#webroot-plugin) an, insbesondere den Abschnitt zum **Apache-Plugin**, und folge den interaktiven Anweisungen, um schnell und einfach ein Zertifikat für deine Domain einzurichten.

Für späteres Nachlesen und weitere Einstellungen empfehlen wir dir, einen Blick in unsere Anleitungen zu [WordPress-Plugins](webspace-wordpress-plugins.md) und [WordPress Elementor](webspace-wordpress-elementor.md) zu werfen, in denen die Installation von Plugins und die Verwendung eines beliebten, benutzerfreund

Wenn du noch Fragen oder Probleme hast, wende dich einfach an unser Support-Team, das dir jeden Tag gerne weiterhilft!

<InlineVoucher />
