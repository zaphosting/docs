---
id: dedicated-linux-lamp-stack
title: "LAMP Stack auf einem Linux Server einrichten – Klassische PHP-Anwendungen betreiben"
description: "Entdecke, wie du eine LAMP-Stack für das effiziente Hosting dynamischer PHP-Websites auf Linux-Servern einrichtest → Jetzt mehr erfahren"
sidebar_label: Web LAMP Stack
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der **LAMP** Stack ist eine beliebte Auswahl an Open-Source-Software, die zusammen eingerichtet wird, um einfaches Hosting dynamischer Websites zu ermöglichen – mit besonderem Fokus auf PHP-Websites und -Apps. Das Akronym steht für: **L**inux als Betriebssystem, **A**pache als Webserver, **M**ySQL als Datenbank und zuletzt **P**HP für die Verarbeitung. In dieser Anleitung zeigen wir dir, wie du einen LAMP Stack auf einem Linux Dedicated Server einrichtest, inklusive einer detaillierten Schritt-für-Schritt-Erklärung und einem Beispiel für eine To-Do-Listen-Website.

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem Server. Falls du nicht weißt, wie das geht, schau dir unsere [Erster Zugriff (SSH)](vserver-linux-ssh.md) Anleitung an.

In dieser Anleitung verwenden wir Ubuntu als Linux-Distribution. Die Befehle sind identisch für Debian und sollten bei anderen Distributionen ähnlich sein, wobei sich die Syntax der Befehle leicht unterscheiden kann. Stelle sicher, dass ein Betriebssystem installiert ist und du per SSH verbunden bist.

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

Die Installation lässt sich gut in die einzelnen Kernkomponenten des LAMP Stacks aufteilen, beginnend mit dem Apache Webserver, gefolgt von der MySQL-Datenbank und zuletzt PHP. Während der Installation richten wir eine Test-Website ein, die in PHP geschrieben ist und auf die MySQL-Datenbank zugreift. Jede Webanfrage wird dann über Apache verarbeitet und ausgeliefert.

### Apache einrichten

Apache ist der Webserver, der eingehende Webanfragen verarbeitet und Antworten ausliefert. Installiere ihn mit folgendem Befehl:
```
sudo apt install apache2
```

Nach der Installation solltest du sicherstellen, dass die passenden Firewall-Regeln erstellt sind, damit der Webserver aus dem Internet erreichbar ist. In diesem Beispiel verwenden wir die **UFW Firewall**, da Apache dafür eine registrierte Anwendung hat.

Wenn du eine andere Firewall nutzt, stelle sicher, dass Port 80 (HTTP) freigegeben ist. Mehr Infos zu Firewalls unter Linux findest du in unserer [Firewall verwalten](vserver-linux-firewall.md) Anleitung.

Aktiviere die UFW Firewall und erstelle eine Regel für SSH:
```
# Regel für SSH erstellen
sudo ufw allow OpenSSH

# UFW Firewall aktivieren
sudo ufw enable
```

:::caution
Achte darauf, dass du eine Regel für SSH eingerichtet hast, wenn du UFW nutzt! Ohne diese kannst du dich nach dem Aktivieren der Firewall nicht mehr per SSH verbinden!
:::

Erstelle nun die Regel für Apache und überprüfe anschließend die Regeln:
```
# Regel für Apache erstellen
sudo ufw allow in "Apache Full"

# UFW Firewall Regeln anzeigen
sudo ufw status
```

:::tip
Mit `ufw app list` kannst du dir anzeigen lassen, welche Profile verfügbar sind. Im Beispiel oben sorgt `Apache Full` dafür, dass sowohl HTTP (Port 80) als auch HTTPS (Port 443) freigegeben werden.
:::

Du solltest `Apache` und `Apache (v6)` mit der Aktion `ALLOW` sehen, was bestätigt, dass die Firewall bereit ist. Außerdem siehst du weitere Regeln, die du zuvor eingerichtet hast, inklusive der SSH-Regel.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Nachdem die Firewall für Apache geöffnet ist, solltest du testen, ob Apache funktioniert. Öffne dazu deinen Browser und gib deine IP-Adresse ein: `http://[deine_ip_adresse]`

Wenn alles läuft, siehst du eine Standard-Willkommensseite. Falls nicht, prüfe den Status mit: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL einrichten

Jetzt installierst du den MySQL-Server, der als Datenbank dient, um Daten dauerhaft relational zu speichern. Installiere ihn mit:
```
sudo apt install mysql-server
```

Nach der Installation empfehlen wir, das Sicherheits-Skript auszuführen, um deinen MySQL-Server abzusichern. Das ist optional, aber sehr zu empfehlen. Starte es mit:
```
sudo mysql_secure_installation
```

Das Skript führt dich interaktiv durch die Einrichtung. Zuerst wirst du nach der Passwortvalidierung gefragt. Wir empfehlen `Y` zu wählen, um nur sichere Passwörter zu erlauben, und dann `MEDIUM` (1) oder `STRONG` (2) auszuwählen.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Anschließend wirst du gefragt, ob der `anonymous` Benutzer entfernt und der Root-Login aus der Ferne deaktiviert werden soll. Beides solltest du aus Sicherheitsgründen mit `Y` bestätigen. So wird der Testbenutzer entfernt und der Root-Zugang ist nur lokal per SSH möglich, was das Risiko minimiert.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Zum Schluss wirst du gefragt, ob die `test` Datenbank entfernt und die Berechtigungstabellen neu geladen werden sollen. Auch hier empfehlen wir `Y`, da die Testdatenbank nicht benötigt wird und die Privilegientabellen für Änderungen neu geladen werden müssen.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Prüfe nun, ob MySQL läuft, indem du dich anmeldest:
```
sudo mysql -u root
```
Wenn du eine Willkommensnachricht siehst, hat alles geklappt. Mit `quit` kannst du die MySQL-Konsole wieder verlassen.

### PHP einrichten

Die letzte LAMP-Komponente ist PHP, das sich einfach installieren lässt. Der folgende Befehl installiert PHP zusammen mit einem Apache-Modul und MySQL-Unterstützung, damit Apache PHP ausführen kann und PHP auf MySQL zugreifen kann:
```
sudo apt install php libapache2-mod-php php-mysql
```

Prüfe die Installation, indem du die PHP-Version abfragst. Wenn eine Version angezeigt wird, funktioniert PHP korrekt:
```
php -v
```

:::tip PHP-Erweiterungen
Für erweiterte Anwendungsfälle brauchst du vielleicht zusätzliche PHP-Erweiterungen. Eine Liste kannst du mit `apt search php- | less` anzeigen lassen.

Mit den Pfeiltasten scrollen und mit `Q` beenden. Zum Installieren einer Erweiterung nutze:
```
sudo apt install [php_extension] [...]
```
Du kannst mehrere Erweiterungen gleichzeitig installieren, indem du sie mit Leerzeichen trennst.
:::

Wir empfehlen, die Verzeichnisindex-Reihenfolge so anzupassen, dass `index.php` vor `.html` geladen wird. Öffne die Datei:
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

Im Nano-Editor entferne `index.php` aus der Liste und setze es an den Anfang, so:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Speichere mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`. Starte Apache neu, damit die Änderung wirksam wird:
```
sudo systemctl restart apache2
```

### Test-Website erstellen

Nachdem alle LAMP-Komponenten installiert sind, erstellen wir eine Test-Website, um zu zeigen, wie der Stack zusammenarbeitet. Das ist optional, aber hilfreich, um zu verstehen, wie du deine eigenen Websites aufbauen kannst.

In diesem Beispiel bauen wir eine kleine To-Do-Liste in PHP, die Einträge aus einer MySQL-Datenbank abruft und anzeigt. Die Website wird über Apache ausgeliefert.

Wir verwenden als Beispiel-Domain `zapdocs.example.com`. In der Praxis solltest du eine Domain nutzen und einen `A`-DNS-Eintrag anlegen, der auf die IP-Adresse deines Servers zeigt. Hilfe dazu findest du in unserer [Domain-Einträge](domain-records.md) Anleitung.

:::note
Du kannst auch ohne Domain arbeiten und `[your_domain]` durch einen beliebigen Namen ersetzen. Dann greifst du über die IP-Adresse auf die Website zu. In diesem Fall solltest du aber später in der virtuellen Host-Datei die `ServerName`-Zeile entfernen.
:::

#### Apache konfigurieren

Webserver speichern alle Website-Dateien normalerweise im Verzeichnis `/var/www`. Standardmäßig gibt es dort oft einen `html`-Ordner mit einer Standardseite. Um mehrere Websites sauber zu organisieren, empfehlen wir, für jede Domain einen eigenen Ordner anzulegen.

Erstelle also einen neuen Ordner unter `/var/www/[your_domain]`. In unserem Beispiel:
```
sudo mkdir /var/www/[your_domain]
```

Erstelle nun eine neue Apache Virtual Host Konfigurationsdatei im Verzeichnis `sites-available` für diese Domain:
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Kopiere die folgende Vorlage in den Editor und ersetze `[your_domain]` durch deine Domain:
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

Diese Datei sorgt dafür, dass Anfragen auf Port 80 (HTTP) an deine Domain erkannt und die Dateien aus dem entsprechenden Ordner ausgeliefert werden.

Speichere und beende Nano mit `CTRL + X`, `Y` und `ENTER`. Prüfe die Konfiguration auf Syntaxfehler mit:
```
sudo apache2ctl configtest
```

Aktiviere den neuen Virtual Host mit:
```
sudo a2ensite [your_domain]
```

:::note Keine Domain genutzt
Wenn du keine Domain nutzt, entferne oder kommentiere die `ServerName`-Zeile (mit `#` davor). Außerdem solltest du den Standard-Virtual Host deaktivieren:
```
sudo a2dissite 000-default
```
:::

Starte Apache neu, damit die Änderungen wirksam werden:
```
sudo systemctl restart apache2
```

#### Website erstellen

Jetzt, wo Apache konfiguriert ist, erstellen wir die eigentliche Website. Der Ordner ist aktuell leer, also wird noch nichts angezeigt. Wir bauen eine kleine To-Do-Liste für die Domain.

##### Datenbank vorbereiten

Logge dich in MySQL ein:
```
sudo mysql -u root
```

Erstelle eine neue Datenbank `todowebsite` und eine Tabelle `todoitems`:
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
INSERT INTO todoitems (name, is_completed) VALUES ('ZAP-Docs Anleitung erstellen', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('ZAP-Hosting Server kaufen', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('ZAP-Hosting Discord beitreten', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Hab einen tollen Tag!', 0);
```

Erstelle einen dedizierten Benutzer `todo` für die Website:
```
# Benutzer erstellen
# Ersetze [your_password] durch dein Passwort
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Rechte vergeben (alles in einer Zeile kopieren)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Rechte neu laden
FLUSH PRIVILEGES;
```

Verlasse die MySQL-Konsole mit `quit`.

##### PHP Website-Dateien

Erstelle die PHP-Datei für die To-Do-Liste im Verzeichnis `/var/www/[your_domain]`:
```
sudo nano /var/www/[your_domain]/index.php
```

Füge folgenden Code ein. Er verbindet sich mit der Datenbank und zeigt die To-Do-Einträge an.

:::important
Ersetze `[your_password]` mit dem Passwort, das du für den `todo` Benutzer vergeben hast.
:::

```
<?php
// MySQL-Verbindung vorbereiten
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Verbindung herstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Verbindung prüfen, bei Fehler abbrechen
if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}

// SQL-Abfrage ausführen und Ergebnis speichern
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
      <p>Für unsere coole ZAP-Hosting Anleitung: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
      <ul>
          <?php
          // Prüfen, ob Ergebnisse vorliegen
          if ($result->num_rows > 0) {
              // Durch alle Einträge iterieren
              foreach ($result as $entry) {
                  echo "<li>";
                  // Name anzeigen, htmlspecialchars schützt vor XSS
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
              echo "<li>Keine To-Do Einträge gefunden.</li>";
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

Speichere die Datei mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`.

#### Website testen

Du hast erfolgreich eine Test-To-Do-Website eingerichtet, die alle LAMP-Komponenten nutzt!

Rufe die Website über die Domain (HTTP/Port 80) auf, die du im Virtual Host definiert hast, z.B. `zapdocs.example.com`. So sollte die Seite aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Fazit

Glückwunsch, du hast den LAMP Stack erfolgreich installiert und eingerichtet! Als nächsten Schritt empfehlen wir dir **dringend**, eine Domain und ein **SSL-Zertifikat** einzurichten, damit deine Website sicher über HTTPS erreichbar ist. Schau dir dazu unsere [Certbot Anleitung](dedicated-linux-certbot.md) mit Fokus auf das **Apache Plugin** an und folge der interaktiven Einrichtung, um schnell ein Zertifikat für deine Domain zu bekommen.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – melde dich gerne! 🙂