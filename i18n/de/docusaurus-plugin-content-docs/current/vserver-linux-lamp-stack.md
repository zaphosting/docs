---
id: vserver-linux-lamp-stack
title: "VPS: LAMP-Stack einrichten - Linux, Apache, MySQL, PHP"
description: "Entdecke, wie du einen LAMP-Stack für das effiziente Hosting dynamischer PHP-Websites auf deinem Linux VPS einrichtest → Jetzt mehr erfahren"
sidebar_label: Web LAMP-Stack
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der **LAMP**-Stack ist eine beliebte Auswahl an Open-Source-Software, die zusammen eingerichtet wird, um einfaches Hosting dynamischer Websites zu ermöglichen – mit besonderem Fokus auf PHP-Websites und -Apps. Das Akronym steht für: **L**inux als Betriebssystem, **A**pache als Webserver, **M**ySQL als Datenbank und zuletzt **P**HP für die Verarbeitung. In dieser Anleitung zeigen wir dir, wie du einen LAMP-Stack auf einem Linux VPS einrichtest, inklusive einer detaillierten Schritt-für-Schritt-Erklärung und einem Beispiel für eine To-Do-Listen-Website.

<InlineVoucher />

## Vorbereitung

Verbinde dich zuerst per SSH mit deinem Server. Falls du nicht weißt, wie das geht, schau dir bitte unsere [Erstzugang (SSH)](vserver-linux-ssh.md) Anleitung an.

In dieser Anleitung verwenden wir Ubuntu als Linux-Distribution. Die Befehle sind identisch für Debian und sollten bei anderen Distributionen ähnlich sein, wobei sich die Syntax der Befehle leicht unterscheiden kann. Stelle sicher, dass ein Betriebssystem installiert ist und du per SSH verbunden bist.

Wie immer solltest du vor der Installation alle Pakete mit folgendem Befehl auf den neuesten Stand bringen:
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

Die Installation lässt sich einfach in die Kernkomponenten des LAMP-Stacks aufteilen: Zuerst der Apache-Webserver, dann die MySQL-Datenbank und zuletzt PHP. Während der Installation richten wir eine Test-Website ein, die in PHP geschrieben ist und auf die MySQL-Datenbank zugreift. Jede Webanfrage wird anschließend über Apache verarbeitet und ausgeliefert.

### Apache einrichten

Apache ist der Webserver, der eingehende Webanfragen verarbeitet und Antworten ausliefert. Installiere ihn mit folgendem Befehl:
```
sudo apt install apache2
```

Nach der Installation solltest du sicherstellen, dass die passenden Firewall-Regeln erstellt werden, damit der Webserver aus dem Internet erreichbar ist. In diesem Beispiel nutzen wir die **UFW Firewall**, da Apache dafür eine registrierte Anwendung hat.

Wenn du eine andere Firewall nutzt, stelle sicher, dass Port 80 (HTTP) freigegeben ist. Mehr Infos zu Firewalls unter Linux findest du in unserer [Firewall verwalten](vserver-linux-firewall.md) Anleitung.

Stelle sicher, dass die UFW-Firewall aktiviert ist und eine Regel für SSH existiert:
```
# Regel für SSH erstellen
sudo ufw allow OpenSSH

# UFW Firewall aktivieren
sudo ufw enable
```

:::caution
Achte darauf, dass du eine Regel für SSH eingerichtet hast, wenn du UFW nutzt! Ohne diese kannst du dich **nicht mehr per SSH** mit deinem Server verbinden, falls die Verbindung abbricht!
:::

Erstelle nun die Regel für Apache und überprüfe anschließend, ob die Regeln vorhanden sind:
```
# Regel für Apache erstellen
sudo ufw allow in "Apache Full"

# UFW-Firewall-Regeln anzeigen
sudo ufw status
```

:::tip
Du kannst dir verfügbare Profile mit `ufw app list` anzeigen lassen. Im Beispiel oben sorgt `Apache Full` dafür, dass sowohl HTTP (Port 80) als auch HTTPS (Port 443) freigegeben werden.
:::

Du solltest `Apache` und `Apache (v6)` mit der Aktion `ALLOW` sehen, was bestätigt, dass die Firewall bereit ist. Außerdem siehst du weitere Regeln, die du vorher eingerichtet hast, inklusive der SSH-Regel.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Nachdem die Firewall für Apache geöffnet ist, solltest du testen, ob Apache funktioniert. Öffne dazu im Browser die IP-Adresse deines Servers: `http://[deine_ip_adresse]`

Wenn alles läuft, siehst du eine Standard-Willkommensseite. Falls nicht, prüfe den Status des Dienstes mit: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL einrichten

Jetzt installierst und richtest du einen MySQL-Server ein, der als Datenbank dient, um Daten relational zu speichern. Installiere ihn mit:
```
sudo apt install mysql-server
```

Nach der Installation empfehlen wir, das Sicherheits-Skript auszuführen, um deinen MySQL-Server abzusichern. Das ist optional, aber sehr zu empfehlen. Starte es mit:
```
sudo mysql_secure_installation
```

Das Skript führt dich interaktiv durch die Einrichtung. Zuerst wirst du nach der Passwortvalidierung gefragt. Wir empfehlen `Y` zu wählen, um nur sichere Passwörter zu erlauben, und dann `MEDIUM` (1) oder `STRONG` (2) auszuwählen.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Anschließend wirst du gefragt, ob der `anonymous` Benutzer entfernt und der Root-Login von außen deaktiviert werden soll. Wir empfehlen beides mit `Y` zu bestätigen, um die Sicherheit zu erhöhen. So wird der Testbenutzer entfernt und der Root-User kann nur lokal per SSH genutzt werden.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Zum Schluss wirst du gefragt, ob die `test` Datenbank gelöscht und die Berechtigungstabellen neu geladen werden sollen. Auch hier empfehlen wir `Y`, da die Testdatenbank nicht benötigt wird und die Privilegientabellen für Änderungen neu geladen werden müssen.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Prüfe nun, ob MySQL läuft, indem du dich anmeldest:
```
sudo mysql -u root
```
Wenn du eine Willkommensnachricht siehst, hat alles geklappt. Verlasse die MySQL-Konsole mit `quit`.

### PHP einrichten

Die letzte LAMP-Komponente ist PHP, was einfach zu installieren ist. Der folgende Befehl installiert PHP zusammen mit einem Apache-Modul und MySQL-Unterstützung, damit Apache PHP ausführen und PHP mit MySQL kommunizieren kann:
```
sudo apt install php libapache2-mod-php php-mysql
```

Prüfe, ob PHP korrekt installiert wurde, indem du die Version abfragst:
```
php -v
```

:::tip PHP-Erweiterungen
Für spezielle Anwendungsfälle brauchst du vielleicht zusätzliche PHP-Erweiterungen. Eine Liste kannst du dir mit `apt search php- | less` anzeigen lassen.

Mit den Pfeiltasten scrollen und mit `Q` beenden. Um eine Erweiterung zu installieren, nutze:
```
sudo apt install [php_erweiterung] [...]
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

Nachdem alle LAMP-Komponenten installiert sind, erstellen wir eine Test-Website, um zu zeigen, wie der Stack zusammenarbeitet. Das ist optional, aber hilfreich, um zu verstehen, wie du deine eigenen Websites einrichten kannst.

In diesem Beispiel bauen wir eine kleine To-Do-Liste in PHP, die Einträge aus einer MySQL-Datenbank abruft und anzeigt. Die Website wird über Apache ausgeliefert.

Wir verwenden als Beispiel-Domain `zapdocs.example.com`. In der Praxis solltest du eine Domain nutzen und einen `A`-DNS-Eintrag anlegen, der auf die IP deines Servers zeigt. Hilfe dazu findest du in unserer [Domain-Einträge](domain-records.md#a-records) Anleitung.

:::note
Du kannst auch ohne Domain arbeiten und `[your_domain]` durch einen beliebigen Namen ersetzen. Dann erreichst du die Website über die IP-Adresse. In diesem Fall solltest du aber die `ServerName`-Zeile in der virtuellen Host-Datei entfernen.
:::

#### Apache konfigurieren

Webserver speichern alle Website-Dateien normalerweise im Verzeichnis `/var/www`. Standardmäßig gibt es dort oft einen `html`-Ordner mit einer Standardseite. Um mehrere Websites sauber zu organisieren, empfehlen wir, für jede Website einen eigenen Ordner anzulegen.

Erstelle also für deine Domain einen Ordner:
```
sudo mkdir /var/www/[your_domain]
```

Erstelle nun eine neue Apache Virtual Host-Konfigurationsdatei im Verzeichnis `sites-available`:
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Füge folgende Vorlage ein und ersetze `[your_domain]` durch deine Domain:
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

Diese Datei sorgt dafür, dass Anfragen auf Port 80 für deine Domain an den entsprechenden Ordner weitergeleitet werden.

Speichere mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`. Prüfe die Konfiguration auf Syntaxfehler:
```
sudo apache2ctl configtest
```

Aktiviere den neuen Virtual Host:
```
sudo a2ensite [your_domain]
```

:::note Keine Domain genutzt
Wenn du keine Domain nutzt, entferne oder kommentiere die `ServerName`-Zeile (mit `#`) und deaktiviere den Standard-Virtual-Host:
```
sudo a2dissite 000-default
```
:::

Starte Apache neu, damit die Änderungen wirksam werden:
```
sudo systemctl restart apache2
```

#### Website erstellen

Jetzt erstellst du die eigentliche Website. Der Ordner ist aktuell leer, also wird noch nichts angezeigt. Wir bauen eine kleine To-Do-Liste für deine Domain.

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
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
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

##### PHP-Website-Dateien

Erstelle die PHP-Datei für die To-Do-Liste:
```
sudo nano /var/www/[your_domain]/index.php
```

Füge folgenden Code ein. Er verbindet sich mit der Datenbank, holt die To-Do-Einträge und zeigt sie an.

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

// Verbindung herstellen
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

Speichere mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`.

#### Website testen

Du hast erfolgreich eine Test-To-Do-Website eingerichtet, die alle LAMP-Komponenten nutzt!

Du solltest die Website jetzt über die Domain (Port 80 / http) erreichen können, die du im Virtual Host definiert hast, z.B. `zapdocs.example.com`. So sollte das Ergebnis aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Fazit

Glückwunsch, du hast den LAMP-Stack erfolgreich installiert und eingerichtet! Als nächsten Schritt empfehlen wir **dringend**, eine Domain und ein **SSL-Zertifikat** einzurichten, damit deine Website sicher über HTTPS erreichbar ist. Schau dir dazu unsere [Certbot-Anleitung](vserver-linux-certbot.md#webroot-plugin) mit Fokus auf das **Apache Plugin** an und folge der interaktiven Einrichtung, um schnell und einfach ein Zertifikat für deine Domain zu bekommen.

Bei Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />