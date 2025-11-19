---
id: dedicated-linux-lemp-stack
title: "Dedicated Server: LEMP-Stack einrichten - Linux, Nginx, MySQL, PHP"
description: "Entdecke, wie du einen LEMP-Stack für das Hosting dynamischer PHP-Websites auf Linux-Servern einrichtest – mit praktischen Beispielen → Jetzt mehr erfahren"
sidebar_label: Web LEMP-Stack
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der **LEMP**-Stack ist eine beliebte Auswahl an Open-Source-Software, die zusammen eingerichtet wird, um einfaches Hosting dynamischer Websites zu ermöglichen – mit besonderem Fokus auf PHP-Websites und Apps. Das Akronym steht für: **L**inux als Betriebssystem, "**E**ngine x" (nginx) als Webserver, **M**ySQL als Datenbank und zuletzt **P**HP für die Verarbeitung. In dieser Anleitung zeigen wir dir, wie du einen LEMP-Stack auf einem Linux Dedicated Server einrichtest, inklusive einer detaillierten Schritt-für-Schritt-Erklärung und einem Beispiel für eine To-Do-Listen-Website.

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem Server. Falls du nicht weißt, wie das geht, schau dir unsere [Erstzugang (SSH)](vserver-linux-ssh.md) Anleitung an.

In dieser Anleitung verwenden wir Ubuntu als Linux-Distribution. Die Befehle sind für Debian identisch und sollten bei anderen Distributionen ähnlich sein, wobei sich die Syntax der Befehle leicht unterscheiden kann. Stelle sicher, dass ein Betriebssystem installiert ist und du per SSH verbunden bist.

Wie immer solltest du vor der Installation alle Pakete mit folgendem Befehl aktualisieren:
```
// Ubuntu & Debian
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## Installation

Die Installation lässt sich gut in die einzelnen Kernkomponenten des LEMP-Stacks aufteilen, beginnend mit dem Nginx-Webserver, gefolgt von der MySQL-Datenbank und zuletzt PHP. Während der Installation richten wir eine Test-Website ein, die in PHP geschrieben ist und auf die MySQL-Datenbank zugreift. Jede Webanfrage wird anschließend über den Nginx-Webserver verarbeitet und ausgeliefert.

### Nginx einrichten

Nginx ist der Webserver, der eingehende Webanfragen verarbeitet und Antworten ausliefert. Installiere ihn mit folgendem Befehl:
```
sudo apt install nginx
```

Nach der Installation solltest du sicherstellen, dass die passenden Firewall-Regeln erstellt werden, damit der Webserver aus dem Internet erreichbar ist. In diesem Beispiel verwenden wir die **UFW Firewall**, da Nginx dafür eine registrierte Anwendung hat.

Wenn du eine andere Firewall nutzt, stelle sicher, dass Port 80 (HTTP) freigegeben ist. Mehr Infos zu Firewalls unter Linux findest du in unserer [Firewall verwalten](vserver-linux-firewall.md) Anleitung.

Aktiviere die UFW Firewall und erstelle eine Regel für SSH:
```
# Regel für SSH erstellen
sudo ufw allow OpenSSH

# UFW Firewall aktivieren
sudo ufw enable
```

:::caution
Stelle sicher, dass du eine Regel für SSH eingerichtet hast, wenn du UFW nutzt! Ohne diese kannst du dich **nicht mehr per SSH** mit deinem Server verbinden, falls die Verbindung abbricht!
:::

Erstelle nun die Regel für Nginx und überprüfe anschließend, ob die Regeln vorhanden sind:
```
# Regel für Nginx erstellen
sudo ufw allow in "Nginx Full"

# UFW Firewall-Regeln anzeigen
sudo ufw status
```

:::tip
Mit dem Befehl `ufw app list` kannst du dir anzeigen lassen, welche Profile verfügbar sind. Im Beispiel oben sorgt `Nginx Full` dafür, dass sowohl HTTP (Port 80) als auch HTTPS (Port 443) freigegeben werden.
:::

Du solltest `Nginx` und `Nginx (v6)` mit der Aktion `ALLOW` sehen, was bestätigt, dass die Firewall bereit ist. Außerdem siehst du weitere Regeln, die du zuvor eingerichtet hast, inklusive der SSH-Regel.

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

Nachdem die Firewall für Nginx geöffnet ist, solltest du prüfen, ob Nginx funktioniert. Öffne dazu deinen Browser und gib deine IP-Adresse ein, z.B.: `http://[deine_ipadresse]`

Wenn alles funktioniert, solltest du eine Standard-Willkommensseite sehen. Falls nicht, prüfe den Status des Dienstes mit: `systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### MySQL einrichten

Jetzt installierst und richtest du einen MySQL-Server ein, der als Datenbank dient, um Daten dauerhaft relational zu speichern. Installiere ihn mit:
```
sudo apt install mysql-server
```

Nach der Installation empfehlen wir, das Sicherheits-Skript auszuführen, um deinen MySQL-Server abzusichern. Das ist optional, aber sehr empfehlenswert. Starte es mit:
```
sudo mysql_secure_installation
```

Das Skript führt dich interaktiv durch die Einrichtung. Zuerst wirst du nach der Passwortvalidierung gefragt. Wir empfehlen, mit `Y` zu bestätigen, damit zukünftig nur sichere Passwörter erlaubt sind, und dann `MEDIUM` (1) oder `STRONG` (2) auszuwählen.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Anschließend wirst du gefragt, ob der anonyme Benutzer entfernt und der Root-Login aus der Ferne deaktiviert werden soll. Wir empfehlen, beides mit `Y` zu bestätigen, um die Sicherheit zu erhöhen. So wird der Testbenutzer entfernt und der Root-Zugriff ist nur lokal per SSH möglich.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Zum Schluss wirst du gefragt, ob die Test-Datenbank entfernt und die Berechtigungstabellen neu geladen werden sollen. Auch hier empfehlen wir `Y`, da die Testdatenbank nicht benötigt wird und die Berechtigungen aktualisiert werden müssen.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Prüfe nun, ob die MySQL-Datenbank läuft, indem du dich mit folgendem Befehl anmeldest: `sudo mysql -u root`. Wenn du eine Willkommensmeldung siehst, hat alles geklappt. Verlasse die MySQL-Konsole mit `quit`.

### PHP einrichten

Die letzte LEMP-Komponente ist PHP. Für Nginx wird dazu ein externes Programm namens `php-fpm` (PHP FastCGI Process Manager) benötigt. Nginx wird so konfiguriert, dass Anfragen an `php-fpm` weitergeleitet werden, bevor die Antwort ausgeliefert wird.

Installiere die neueste Version von php-fpm zusammen mit dem PHP-MySQL-Plugin, damit Nginx mit PHP arbeiten kann und PHP MySQL nutzen kann:
```
sudo apt install php-fpm php-mysql
```

Prüfe, ob die Installation erfolgreich war, indem du die PHP-Version abfragst. Wenn eine Version angezeigt wird, funktioniert PHP korrekt:
```
php -v
```

:::tip PHP-Erweiterungen
Für spezielle Anwendungsfälle brauchst du vielleicht zusätzliche PHP-Erweiterungen. Eine Liste kannst du dir mit `apt search php- | less` anzeigen lassen.

Mit den Pfeiltasten scrollen und mit `Q` beenden. Um eine Erweiterung zu installieren, nutze einfach:
```
sudo apt install [php_extension] [...]
```
Du kannst mehrere Erweiterungen gleichzeitig installieren, indem du sie mit Leerzeichen trennst.
:::

### Test-Website erstellen

Nachdem alle LEMP-Komponenten installiert sind, erstellen wir eine Test-Website, um zu zeigen, wie der Stack zusammenarbeitet und eine dynamische Website ermöglicht. Das ist optional, aber super hilfreich, um zu verstehen, wie du die Tools für eigene Websites nutzen kannst.

In diesem Beispiel bauen wir eine kleine To-Do-Liste in PHP, die To-Do-Einträge aus einer MySQL-Datenbank abruft und anzeigt. Die Website wird über Nginx ausgeliefert.

Wir verwenden als Beispiel-Domain `zapdocs.example.com`, da du in der Praxis wahrscheinlich eine Domain nutzt. Du **musst** einen DNS-A-Eintrag für die Domain anlegen, der auf die IP-Adresse deines Servers zeigt. Hilfe dazu findest du in unserer [Domain-Einträge](domain-records.md) Anleitung.

:::note
Du kannst auch ohne Domain arbeiten und `[your_domain]` durch einen beliebigen Namen ersetzen. Dann greifst du über die IP-Adresse auf die Website zu. Beachte aber, dass du in der Serverblock-Datei später die `server_name`-Zeile entfernen solltest.
:::

#### Nginx konfigurieren

Webserver speichern alle Website-Dateien normalerweise im Verzeichnis `/var/www`. Standardmäßig gibt es bei Nginx ein `html`-Verzeichnis mit einer Standardseite. Um Ordnung zu halten, vor allem wenn du mehrere Websites hostest, empfehlen wir, für jede Website ein eigenes Verzeichnis anzulegen.

Erstelle also für jede Domain einen Ordner unter `/var/www/[your_domain]`. In unserem Beispiel ist das `/var/www/zapdocs.example.com`:
```
sudo mkdir /var/www/[your_domain]
```

Erstelle nun eine neue Nginx-Serverblock-Konfigurationsdatei im Verzeichnis `sites-available` für diese Domain:
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

Kopiere die folgende Vorlage in den Editor und ersetze `[your_domain]` durch deine Domain:
```
server {
    listen 80;
    server_name [your_domain] www.[your_domain];
    root /var/www/[your_domain];

    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php[your_phpversion]-fpm.sock;
     }

    location ~ /\.ht {
        deny all;
    }
}
```

:::important PHP-Version
Wichtig: Ersetze `[your_phpversion]` durch die aktuell installierte PHP-Version. Prüfe sie mit `php -v`, z.B. `PHP 8.3.6 (cli) (built: Mar 19 2025 10:08:38) (NTS)`.

In diesem Beispiel wäre das `8.3`, also lautet die Zeile: `fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;`
:::

Diese Serverblock-Datei behandelt Anfragen auf Port 80 (HTTP) und prüft, ob die Anfrage zur angegebenen Domain passt. Außerdem zeigt sie auf das Verzeichnis `/var/www/[your_domain]`, das du zuvor erstellt hast.

Speichere die Datei und verlasse nano mit `CTRL + X`, dann `Y` zum Bestätigen und `ENTER`.

Aktiviere die Konfiguration, indem du einen symbolischen Link im Verzeichnis `sites-enabled` erstellst:
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note Keine Domain genutzt
Wenn du **keine** Domain nutzt, entferne oder kommentiere die `server_name`-Zeile (mit `#` davor). Außerdem solltest du den Standard-Serverblock deaktivieren:
```
sudo unlink /etc/nginx/sites-enabled/default
```
:::

Prüfe die Nginx-Konfiguration auf Syntaxfehler mit:
```
sudo nginx -t
```

Starte Nginx neu, damit die Änderungen wirksam werden:
```
sudo systemctl reload nginx
```

#### Website erstellen

Jetzt, wo Nginx konfiguriert ist, kannst du die eigentliche Website erstellen. Das Verzeichnis ist aktuell leer, also wird noch nichts angezeigt. Wir bauen eine kleine To-Do-Liste, wie oben beschrieben.

##### Datenbank vorbereiten

Logge dich in MySQL ein:
```
sudo mysql -u root
```

Erstelle eine neue Datenbank `todowebsite` und eine Tabelle `todoitems` darin:
```
# Datenbank erstellen
CREATE DATABASE todowebsite;

# Datenbank auswählen
USE todowebsite;

# Tabelle erstellen
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Füge ein paar Beispiel-Einträge hinzu:
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Erstelle einen dedizierten Benutzer `todo` für diese Website:
```
# Benutzer erstellen
# Ersetze [your_password] durch dein eigenes Passwort
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Rechte vergeben (als ein Befehl kopieren)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Rechte neu laden
FLUSH PRIVILEGES;
```

Verlasse die MySQL-Konsole mit `quit`.

##### PHP-Website-Dateien

Erstelle die PHP-Datei für die To-Do-Seite im Verzeichnis `/var/www/[your_domain]`:
```
sudo nano /var/www/[your_domain]/index.php
```

Füge folgenden Code ein. Der erste PHP-Block stellt die Verbindung zur MySQL-Datenbank her.

:::important
Ersetze `[your_password]` durch das Passwort, das du für den `todo`-Benutzer vergeben hast.
:::

Der HTML-Teil zeigt die To-Do-Liste an und durchläuft die Datenbankeinträge.

```
<?php
// MySQL-Verbindung vorbereiten
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Verbindung herstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Prüfen, ob Verbindung erfolgreich war, sonst Fehler ausgeben
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL-Abfrage, um Einträge aus der Tabelle zu holen
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="de">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-Do Liste</title>
  </head>
  <body>
      <h1>Coole To-Do Liste :D</h1>
      <p>Für unsere coole ZAP-Hosting Anleitung: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
      <ul>
          <?php
          // Prüfen, ob Ergebnisse vorhanden sind
          if ($result->num_rows > 0) {
              // Durch alle Einträge iterieren
              foreach ($result as $entry) {
                  echo "<li>";
                  // Name anzeigen und htmlspecialchars nutzen, um XSS zu verhindern
                  echo htmlspecialchars($entry["name"]);

                  // Status anzeigen
                  if ($entry["is_completed"]) {
                      echo " <strong>(Abgeschlossen)</strong>";
                  } else {
                      echo " <strong>(Offen)</strong>";
                  }

                  // Erstellungsdatum anzeigen
                  echo " - Erstellungsdatum: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Falls keine Einträge vorhanden sind
              echo "<li>Keine To-Do-Einträge gefunden.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// Verbindung schließen
$conn->close();
?>
```

Speichere die Datei und verlasse nano mit `CTRL + X`, dann `Y` und `ENTER`.

#### Website testen

Du hast erfolgreich eine Test-To-Do-Website eingerichtet, die alle Komponenten des LEMP-Stacks nutzt!

Du solltest die Website jetzt über die Domain (Port 80 / http) erreichen können, die du im Serverblock definiert hast, in unserem Beispiel `zapdocs.example.com`. Das Ergebnis sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Fazit

Glückwunsch, du hast den LEMP-Stack erfolgreich installiert und eingerichtet! Als nächsten Schritt empfehlen wir dir **dringend**, eine Domain und ein **SSL-Zertifikat** einzurichten, damit die Daten sicher übertragen werden. Schau dir dazu unsere [Certbot-Anleitung](vserver-linux-certbot.md) mit Fokus auf das **Nginx-Plugin** an und folge der interaktiven Einrichtung, um schnell und einfach ein Zertifikat für deine Domain zu bekommen.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂