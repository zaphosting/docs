---
id: dedicated-linux-lamp-stack
title: "Dedicated Server: LAMP-Stack einrichten – Linux, Apache, MySQL, PHP"
description: "Entdecke, wie du eine LAMP-Stack für das effiziente Hosting dynamischer PHP-Websites auf Linux-Servern einrichtest → Jetzt mehr erfahren"
sidebar_label: Web LAMP-Stack
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der **LAMP**-Stack ist eine beliebte Auswahl an Open-Source-Software, die zusammen eingerichtet wird, um einfaches Hosting dynamischer Websites zu ermöglichen – mit besonderem Fokus auf PHP-Websites und -Apps. Das Akronym steht für: **L**inux als Betriebssystem, **A**pache als Webserver, **M**ySQL als Datenbank und zuletzt **P**HP für die Verarbeitung. In dieser Anleitung zeigen wir dir, wie du einen LAMP-Stack auf einem Linux Dedicated Server einrichtest, inklusive einer detaillierten Schritt-für-Schritt-Erklärung und einem Beispiel für eine To-Do-Listen-Website.

<InlineVoucher />

## Vorbereitung

Verbinde dich zunächst per SSH mit deinem Server. Falls du nicht weißt, wie das geht, schau dir bitte unsere [Erstzugang (SSH)](vserver-linux-ssh.md) Anleitung an.

In dieser Anleitung verwenden wir Ubuntu als Linux-Distribution. Die Befehle sind für Debian identisch und sollten bei anderen Distributionen ähnlich sein, wobei sich die Syntax der Befehle leicht unterscheiden kann. Stelle sicher, dass ein Betriebssystem installiert ist und du per SSH verbunden bist.

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

Die Installation lässt sich einfach in die einzelnen Kernkomponenten des LAMP-Stacks aufteilen, beginnend mit dem Apache-Webserver, gefolgt von der MySQL-Datenbank und zuletzt PHP. Während der Installation richten wir eine Test-Website ein, die in PHP geschrieben ist und auf die MySQL-Datenbank zugreift. Jede Webanfrage wird dann über den Apache-Webserver verarbeitet und ausgeliefert.

### Apache einrichten

Apache ist der Webserver, der eingehende Webanfragen verarbeitet und Antworten ausliefert. Installiere ihn mit folgendem Befehl:
```
sudo apt install apache2
```

Nach der Installation solltest du sicherstellen, dass die passenden Firewall-Regeln erstellt werden, damit der Webserver aus dem Internet erreichbar ist. In diesem Beispiel verwenden wir die **UFW Firewall**, da Apache dafür eine registrierte Anwendung hat.

Wenn du eine andere Firewall nutzt, stelle sicher, dass Port 80 (HTTP) freigegeben ist. Mehr Infos zu Firewalls unter Linux findest du in unserer [Firewall verwalten](vserver-linux-firewall.md) Anleitung.

Aktiviere die UFW-Firewall und erstelle eine Regel für SSH:
```
# Regel für SSH erstellen
sudo ufw allow OpenSSH

# UFW Firewall aktivieren
sudo ufw enable
```

:::caution
Achte darauf, dass du eine Regel für SSH eingerichtet hast, wenn du UFW nutzt! Ohne diese kannst du dich nach dem Aktivieren der Firewall **nicht mehr per SSH verbinden**, falls du die aktuelle Sitzung verlierst!
:::

Erstelle nun die Regel für Apache und überprüfe anschließend, ob die Regeln gesetzt sind:
```
# Regel für Apache erstellen
sudo ufw allow in "Apache Full"

# UFW Firewall-Regeln anzeigen
sudo ufw status
```

:::tip
Mit dem Befehl `ufw app list` kannst du dir anzeigen lassen, welche Profile verfügbar sind. Im Beispiel oben sorgt `Apache Full` dafür, dass sowohl HTTP (Port 80) als auch HTTPS (Port 443) freigegeben werden.
:::

Du solltest `Apache` und `Apache (v6)` mit der Aktion `ALLOW` sehen, was bestätigt, dass die Firewall bereit ist. Außerdem siehst du weitere Regeln, die du zuvor eingerichtet hast, inklusive der SSH-Regel.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Nachdem die Firewall für Apache geöffnet ist, solltest du testen, ob Apache funktioniert. Öffne dazu im Browser die IP-Adresse deines Servers: `http://[deine_ip_adresse]`

Wenn alles läuft, siehst du eine Standard-Willkommensseite. Falls nicht, prüfe den Status des Dienstes mit: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL einrichten

Jetzt installierst und richtest du einen MySQL-Server ein, der als Datenbank dient, um Daten dauerhaft relational zu speichern. Installiere ihn mit:
```
sudo apt install mysql-server
```

Nach der Installation empfehlen wir, das Sicherheits-Skript auszuführen, um deinen MySQL-Server abzusichern. Das ist optional, aber sehr zu empfehlen. Starte es mit:
```
sudo mysql_secure_installation
```

Das Skript führt dich interaktiv durch die Einrichtung. Zuerst wirst du nach der Passwortvalidierung gefragt. Wir empfehlen, mit `Y` zu bestätigen, damit zukünftig nur sichere Passwörter erlaubt sind, und dann `MEDIUM` (1) oder `STRONG` (2) auszuwählen.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Anschließend wirst du gefragt, ob der anonyme Benutzer entfernt und der Root-Login von außen deaktiviert werden soll. Wir empfehlen beides mit `Y` zu bestätigen, um die Sicherheit zu erhöhen. So wird der Testbenutzer entfernt und der Root-User kann nur lokal per SSH genutzt werden, was das Risiko minimiert.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Zum Schluss wirst du gefragt, ob die Test-Datenbank entfernt und die Berechtigungstabellen neu geladen werden sollen. Auch hier empfehlen wir `Y`, da die Test-Datenbank nicht benötigt wird und die Privilegientabellen für Änderungen neu geladen werden müssen.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Prüfe nun, ob die MySQL-Datenbank läuft, indem du dich mit folgendem Befehl anmeldest: `sudo mysql -u root`. Wenn das klappt, erscheint eine Willkommensmeldung. Du kannst die MySQL-Konsole mit `quit` wieder verlassen.

### PHP einrichten

Die letzte LAMP-Komponente ist PHP, was ziemlich einfach zu installieren ist. Der folgende Befehl installiert PHP zusammen mit einem Plugin für Apache und MySQL, damit Apache mit PHP arbeiten kann und PHP MySQL nutzen kann.
```
sudo apt install php libapache2-mod-php php-mysql
```

Prüfe, ob die Installation erfolgreich war, indem du die Version abfragst. Wenn eine Versionsnummer angezeigt wird, funktioniert PHP korrekt.
```
php -v
```

:::tip PHP-Erweiterungen
Für fortgeschrittene Anwendungsfälle brauchst du vielleicht zusätzliche PHP-Erweiterungen für mehr Funktionen. Eine Liste kannst du dir mit `apt search php- | less` anzeigen lassen.

Mit den Pfeiltasten scrollen und mit `Q` beenden. Um eine Erweiterung zu installieren, nutze einfach:
```
sudo apt install [php_erweiterung] [...]
```
Du kannst mehrere Erweiterungen gleichzeitig installieren, indem du sie mit Leerzeichen trennst.
:::

Wir empfehlen, den Directory-Index so anzupassen, dass `index.php` Vorrang vor der Standard-`index.html` hat. Öffne die Datei mit:
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

Im Nano-Editor entferne `index.php` aus der Liste und setze es an den Anfang, so:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Speichere die Datei und verlasse Nano mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`. Starte Apache neu, damit die Änderung wirksam wird:
```
sudo systemctl restart apache2
```

### Test-Website erstellen

Nachdem alle LAMP-Komponenten installiert sind, erstellen wir eine Test-Website, um zu zeigen, wie der Stack zusammenarbeitet und eine dynamische Website ermöglicht. Das ist optional, aber hilfreich, um zu verstehen, wie du die Tools für eigene Websites nutzen kannst.

In diesem Beispiel erstellen wir eine kleine To-Do-Listen-Website in PHP, die To-Do-Einträge aus einer MySQL-Datenbank abruft und anzeigt. Die Website wird über Apache ausgeliefert.

Wir verwenden als Testdomain `zapdocs.example.com`, da du in der Praxis wahrscheinlich eine Domain nutzen wirst. Du **musst** einen DNS-`A`-Eintrag für die Domain anlegen, der auf die IP-Adresse deines Servers zeigt. Hilfe dazu findest du in unserer [Domain-Einträge](domain-records.md#a-records) Anleitung.

:::note
Du kannst auch ohne Domain arbeiten und `[your_domain]` durch einen beliebigen Namen ersetzen. Dann greifst du über die IP-Adresse auf die Website zu. Beachte aber, dass du in der virtuellen Host-Datei später die `ServerName`-Zeile entfernen solltest.
:::

#### Apache konfigurieren

Normalerweise werden alle Website-Dateien unter `/var/www` gespeichert. Standardmäßig gibt es dort ein `html`-Verzeichnis mit einer Standardseite. Um Ordnung zu halten, vor allem wenn du viele Websites auf einem Apache hostest, empfehlen wir, für jede Website ein eigenes Verzeichnis anzulegen.

Erstelle also für jede Domain ein neues Verzeichnis unter `/var/www/[your_domain]`. In unserem Beispiel ist das `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Erstelle nun eine neue Apache-Virtual-Host-Konfigurationsdatei im Verzeichnis `sites-available` für diese Domain:
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Kopiere die folgende Vorlage in den Nano-Editor und ersetze `[your_domain]` durch deine Domain:
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

Diese Virtual-Host-Datei behandelt Anfragen auf Port 80 (HTTP) und prüft, ob die Anfrage zur angegebenen `ServerName`-Domain passt. Außerdem zeigt sie auf das Verzeichnis `/var/www/[your_domain]`, das du zuvor erstellt hast, um Dateien auszuliefern.

Speichere die Datei und verlasse Nano mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`. Wir empfehlen, die Konfiguration mit folgendem Befehl auf Syntaxfehler zu prüfen:
```
sudo apache2ctl configtest
```

Aktiviere den neuen Virtual Host mit:
```
sudo a2ensite [your_domain]
```

:::note Keine Domain genutzt
Wenn du **keine** Domain nutzt, entferne die `ServerName`-Zeile oder kommentiere sie mit einem `#` aus. Außerdem musst du den Standard-Virtual-Host deaktivieren:
```
sudo a2dissite 000-default
```
:::

Starte Apache neu, damit der neue Virtual Host aktiv wird:
```
sudo systemctl restart apache2
```

#### Website erstellen

Nachdem Apache konfiguriert ist, kannst du die eigentliche Website erstellen. Das Verzeichnis ist aktuell leer, daher wird noch nichts ausgeliefert. Wir erstellen nun die kleine To-Do-Website für die Domain.

##### Datenbank vorbereiten

Zuerst erstellen wir eine neue Datenbank und eine Tabelle für die To-Do-Einträge. Melde dich bei MySQL an:
```
sudo mysql -u root
```

Erstelle nun die Datenbank `todowebsite` und darin die Tabelle `todoitems`:
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

# Rechte vergeben (alles in einer Zeile kopieren)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Rechte neu laden
FLUSH PRIVILEGES;
```

Verlasse die MySQL-Konsole mit `quit`.

##### PHP-Website-Dateien

Der letzte Schritt ist die Erstellung der PHP-Datei für die To-Do-Seite. Erstelle eine neue `index.php` im Verzeichnis `/var/www/[your_domain]`:
```
sudo nano /var/www/[your_domain]/index.php
```

Füge folgenden Code ein, der eine Verbindung zur MySQL-Datenbank herstellt und die To-Do-Einträge anzeigt. Der erste PHP-Block baut die Verbindung auf.

:::important
Ersetze unbedingt `[your_password]` durch das Passwort, das du für den `todo`-Benutzer vergeben hast.
:::

Der HTML-Teil zeigt die Webseite mit einer ungeordneten Liste, die alle Einträge ausgibt.

```
<?php
// MySQL-Verbindung vorbereiten
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Verbindung herstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Prüfen, ob die Verbindung erfolgreich war, sonst Fehler ausgeben
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
      <p>Für unseren coolen ZAP-Hosting Guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
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
              // Falls keine Einträge gefunden wurden
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

Speichere die Datei und verlasse Nano mit `CTRL + X`, bestätige mit `Y` und drücke `ENTER`.

#### Website testen

Du hast erfolgreich eine Test-To-Do-Website eingerichtet, die alle Aspekte des LAMP-Stacks nutzt!

Du solltest die Website jetzt über die Domain (Port 80 / HTTP) erreichen können, die du im Virtual Host definiert hast, in unserem Beispiel `zapdocs.example.com`. Das Ergebnis sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Fazit

Glückwunsch, du hast den LAMP-Stack erfolgreich installiert und eingerichtet! Als nächsten Schritt empfehlen wir dir **dringend**, eine Domain und ein **SSL-Zertifikat** einzurichten, damit deine Website-Daten sicher übertragen werden. Schau dir dazu unsere [Certbot-Anleitung](vserver-linux-certbot.md#webroot-plugin) mit Fokus auf das **Apache Plugin** an und folge der interaktiven Einrichtung, um schnell und einfach ein Zertifikat für deine Domain zu bekommen.

Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />