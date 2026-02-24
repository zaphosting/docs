---
id: vserver-linux-lamp-stack
title: "LAMP Stack auf Linux Server einrichten – Klassische PHP-Anwendungen betreiben"
description: "Entdecke, wie du eine LAMP-Stack für das Hosting dynamischer PHP-Websites auf Linux VPS effizient einrichtest → Jetzt mehr erfahren"
sidebar_label: Web LAMP Stack
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der **LAMP** Stack ist eine beliebte Auswahl an Open-Source-Software, die zusammen eingerichtet wird, um einfaches Hosting dynamischer Websites zu ermöglichen – mit besonderem Fokus auf PHP-Websites und -Apps. Das Akronym steht für: **L**inux als Betriebssystem, **A**pache als Webserver, **M**ySQL als Datenbank und zuletzt **P**HP für die Verarbeitung. In dieser Anleitung zeigen wir dir, wie du einen LAMP Stack auf einem Linux VPS einrichtest, inklusive einer detaillierten Schritt-für-Schritt-Erklärung und einem Beispiel für eine To-Do-Listen-Website.

<InlineVoucher />

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem Server. Falls du nicht weißt, wie das geht, schau dir unsere [Erstzugang (SSH)](vserver-linux-ssh.md) Anleitung an.

In dieser Anleitung verwenden wir Ubuntu als Linux-Distribution. Die Befehle sind bei Debian identisch und bei anderen Distributionen ähnlich, können sich aber in der Syntax leicht unterscheiden. Stelle sicher, dass ein Betriebssystem installiert ist und du per SSH verbunden bist.

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

Die Installation lässt sich gut in die einzelnen Kernkomponenten des LAMP Stacks aufteilen: zuerst der Apache Webserver, dann die MySQL Datenbank und zuletzt PHP. Während der Installation richten wir eine Test-Website ein, die in PHP geschrieben ist und auf die MySQL-Datenbank zugreift. Jede Webanfrage wird anschließend über Apache verarbeitet und ausgeliefert.

### Apache einrichten

Apache ist der Webserver, der eingehende Webanfragen verarbeitet und Antworten ausliefert. Installiere ihn mit folgendem Befehl:
```
sudo apt install apache2
```

Nach der Installation solltest du sicherstellen, dass die passenden Firewall-Regeln gesetzt sind, damit der Webserver aus dem Internet erreichbar ist. In diesem Beispiel nutzen wir die **UFW Firewall**, da Apache dafür eine registrierte Anwendung hat.

Wenn du eine andere Firewall nutzt, stelle sicher, dass Port 80 (HTTP) freigegeben ist. Mehr Infos zu Firewalls unter Linux findest du in unserer [Firewall verwalten](vserver-linux-firewall.md) Anleitung.

Aktiviere die UFW Firewall und erstelle eine Regel für SSH:
```
# Regel für SSH erstellen
sudo ufw allow OpenSSH

# UFW Firewall aktivieren
sudo ufw enable
```

:::caution
Achte darauf, dass du eine SSH-Regel in der UFW Firewall hast! Ohne diese kannst du dich nach dem Aktivieren der Firewall nicht mehr per SSH verbinden, falls du die aktuelle Session verlierst!
:::

Erstelle nun die Regel für Apache und überprüfe die Regeln:
```
# Regel für Apache erstellen
sudo ufw allow in "Apache Full"

# UFW Firewall Status prüfen
sudo ufw status
```

:::tip
Mit `ufw app list` kannst du dir anzeigen lassen, welche Profile verfügbar sind. `Apache Full` bedeutet, dass sowohl HTTP (Port 80) als auch HTTPS (Port 443) freigegeben werden.
:::

Du solltest `Apache` und `Apache (v6)` mit `ALLOW` sehen, was bestätigt, dass die Firewall richtig konfiguriert ist. Weitere Regeln, wie die für SSH, sollten ebenfalls angezeigt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Mit der geöffneten Firewall für Apache kannst du jetzt testen, ob Apache funktioniert. Öffne im Browser die IP-Adresse deines Servers: `http://[deine_ip_adresse]`

Wenn alles läuft, solltest du eine Standard-Willkommensseite sehen. Falls nicht, prüfe den Status mit: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL einrichten

Jetzt installierst du MySQL, das als Datenbank dient, um Daten relational zu speichern. Installiere es mit:
```
sudo apt install mysql-server
```

Nach der Installation empfehlen wir, das Sicherheits-Skript auszuführen, um deinen MySQL-Server abzusichern. Das ist optional, aber sehr zu empfehlen. Starte es mit:
```
sudo mysql_secure_installation
```

Das Skript führt dich interaktiv durch die Einrichtung. Zuerst wirst du nach der Passwortvalidierung gefragt. Wir empfehlen `Y` zu wählen, um nur sichere Passwörter zu erlauben, und dann `MEDIUM` (1) oder `STRONG` (2) auszuwählen.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Anschließend wirst du gefragt, ob der anonyme Benutzer entfernt und der Root-Login von außen deaktiviert werden soll. Wir empfehlen beides mit `Y` zu bestätigen, um die Sicherheit zu erhöhen.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Zum Schluss wirst du gefragt, ob die Test-Datenbank entfernt und die Berechtigungstabellen neu geladen werden sollen. Auch hier empfehlen wir `Y`.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Prüfe, ob MySQL läuft, indem du dich anmeldest:
```
sudo mysql -u root
```
Wenn du eine Willkommensmeldung siehst, hat alles geklappt. Mit `quit` verlässt du die MySQL-Konsole.

### PHP einrichten

Die letzte LAMP-Komponente ist PHP. Die Installation ist einfach:
```
sudo apt install php libapache2-mod-php php-mysql
```

Prüfe die Installation mit:
```
php -v
```
Wenn eine Versionsnummer angezeigt wird, funktioniert PHP korrekt.

:::tip PHP-Erweiterungen
Für spezielle Anwendungsfälle brauchst du vielleicht zusätzliche PHP-Erweiterungen. Eine Liste findest du mit:
```
apt search php- | less
```
Mit den Pfeiltasten scrollen, mit `Q` beenden. Zum Installieren einer Erweiterung:
```
sudo apt install [php_extension] [...]
```
Du kannst mehrere Erweiterungen gleichzeitig installieren, getrennt durch Leerzeichen.
:::

Wir empfehlen, die Verzeichnisindex-Reihenfolge so anzupassen, dass `index.php` vor `.html` geladen wird. Öffne die Datei:
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

Verschiebe `index.php` an den Anfang der Liste:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Speichere mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`. Starte Apache neu:
```
sudo systemctl restart apache2
```

### Test-Website erstellen

Nachdem alle LAMP-Komponenten installiert sind, erstellen wir eine Test-Website, um zu zeigen, wie alles zusammenarbeitet. Das ist optional, aber hilfreich, um zu verstehen, wie du deine eigenen Websites aufbauen kannst.

Wir erstellen eine kleine To-Do-Liste in PHP, die Einträge aus einer MySQL-Datenbank abruft und anzeigt. Als Beispiel-Domain verwenden wir `zapdocs.example.com`. Du **musst** einen `A`-DNS-Eintrag für die Domain anlegen, der auf die IP-Adresse deines Servers zeigt. Hilfe dazu findest du in unserer [Domain-Einträge](domain-records.md) Anleitung.

:::note
Du kannst auch ohne Domain arbeiten und `[your_domain]` durch einen beliebigen Namen ersetzen. Dann greifst du über die IP-Adresse zu. In diesem Fall solltest du aber die `ServerName`-Zeile in der virtuellen Host-Datei entfernen.
:::

#### Apache konfigurieren

Websites liegen normalerweise im Verzeichnis `/var/www`. Standardmäßig gibt es dort ein `html`-Verzeichnis mit einer Standardseite. Für mehrere Websites empfehlen wir, für jede Domain ein eigenes Verzeichnis anzulegen.

Erstelle ein Verzeichnis für deine Domain:
```
sudo mkdir /var/www/[your_domain]
```

Erstelle eine neue virtuelle Host-Konfigurationsdatei:
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Füge diese Vorlage ein und ersetze `[your_domain]` durch deine Domain:
```
<VirtualHost *:80>
    ServerName [your_domain]
    ServerAlias www.[your_domain]
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/[your_domain]
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Speichere und beende mit `CTRL + X`, `Y` und `ENTER`. Prüfe die Syntax:
```
sudo apache2ctl configtest
```

Aktiviere den neuen virtuellen Host:
```
sudo a2ensite [your_domain]
```

:::note Keine Domain genutzt
Wenn du keine Domain nutzt, entferne oder kommentiere die `ServerName`-Zeile (mit `#`) und deaktiviere den Standard-Host:
```
sudo a2dissite 000-default
```
:::

Starte Apache neu:
```
sudo systemctl restart apache2
```

#### Website erstellen

Das Verzeichnis ist aktuell leer, also erstellen wir jetzt die To-Do-Website.

##### Datenbank vorbereiten

Melde dich bei MySQL an:
```
sudo mysql -u root
```

Erstelle eine neue Datenbank und Tabelle:
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

Erstelle einen dedizierten Benutzer für die Website:
```
# Benutzer erstellen
# Ersetze [your_password] durch dein Passwort
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Rechte vergeben (als ein Befehl kopieren)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Rechte neu laden
FLUSH PRIVILEGES;
```

Verlasse die MySQL-Konsole mit `quit`.

##### PHP Website-Dateien

Erstelle die PHP-Datei für die To-Do-Seite:
```
sudo nano /var/www/[your_domain]/index.php
```

Füge folgenden Code ein. Er verbindet sich mit der Datenbank und zeigt die To-Do-Einträge an.

:::important
Ersetze `[your_password]` mit dem Passwort, das du für den `todo`-Benutzer vergeben hast.
:::

```
<?php
// MySQL-Verbindung vorbereiten
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Verbindung erstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Verbindung prüfen, bei Fehler abbrechen
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL-Abfrage, um Einträge abzurufen
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
      <p>Für unseren coolen ZAP-Hosting Guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
      <ul>
          <?php
          // Prüfen, ob Ergebnisse vorhanden sind
          if ($result->num_rows > 0) {
              // Durch alle Einträge iterieren
              foreach ($result as $entry) {
                  echo "<li>";
                  // Name anzeigen, htmlspecialchars schützt vor XSS
                  echo htmlspecialchars($entry["name"]);

                  // Status anzeigen
                  if ($entry["is_completed"]) {
                      echo " <strong>(Erledigt)</strong>";
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

Speichere und beende mit `CTRL + X`, `Y` und `ENTER`.

#### Website testen

Du hast erfolgreich eine Test-To-Do-Website eingerichtet, die alle LAMP-Komponenten nutzt!

Greife jetzt über die Domain (HTTP/Port 80) zu, die du im virtuellen Host definiert hast, z.B. `zapdocs.example.com`. Das Ergebnis sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Fazit

Glückwunsch, du hast den LAMP Stack erfolgreich installiert und eingerichtet! Als nächsten Schritt empfehlen wir **dringend**, eine Domain und ein **SSL-Zertifikat** einzurichten, damit deine Website sicher erreichbar ist. Schau dir dazu unsere [Certbot Anleitung](dedicated-linux-certbot.md) mit Fokus auf das **Apache Plugin** an und folge der interaktiven Einrichtung, um schnell ein Zertifikat für deine Domain zu bekommen.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />