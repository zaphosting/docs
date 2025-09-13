---
id: vserver-linux-lamp-stack
title: "vServer: LAMP-Stack einrichten – Linux, Apache, MySQL, PHP"
description: Infos zum Einrichten eines LAMP-Stacks (Linux, Apache, MySQL, PHP) auf deinem Linux-vServer von ZAP-Hosting – ZAP-Hosting.com Dokumentation
sidebar_label: Web LAMP stack
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Der **LAMP**-Stack ist eine beliebte Auswahl an Open-Source-Software, die zusammen eingerichtet wird, um einfaches dynamisches Website-Hosting zu ermöglichen, mit einem besonderen Fokus auf PHP-Websites und -Apps. Das Akronym steht für: **L**inux als Betriebssystem, **A**pache als Webserver, **M**ySQL als Datenbank und schließlich **P**HP für die Verarbeitung. In dieser Anleitung zeigen wir dir, wie du einen LAMP-Stack auf einem Linux-vServer einrichtest, mit einer detaillierten Beschreibung und einem Beispiel für die Einrichtung einer To-Do-Liste-Website.

<InlineVoucher />

## Vorbereitung

Verbinde dich erst mal über SSH mit deinem Server. Wenn du nicht weißt, wie das geht, schau dir unsere Anleitung [Erstzugriff (SSH)](vserver-linux-ssh.md) an.

In dieser Anleitung verwenden wir Ubuntu als Linux-Distribution. Die Anweisungen sind für Debian identisch und sollten für andere Distributionen ähnlich sein, allerdings kann die Syntax der Befehle leicht abweichen. Vergewissere dich, dass du ein Betriebssystem installiert hast und über SSH mit dem Server verbunden bist.

Wie immer solltest du vor der Installation sicherstellen, dass alle Pakete auf dem neuesten Stand sind. Dazu gibst du folgenden Befehl ein:
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

Die Installation kann ganz einfach in die einzelnen LAMP-Abhängigkeiten aufgeteilt werden, angefangen beim Apache-Webserver, dann die MySQL-Datenbank und zum Schluss PHP. Während der Installation richten wir eine Testwebsite ein, die in PHP geschrieben ist und auf die MySQL-Datenbank zugreift. Zum Schluss wird jede Webanfrage über den Apache-Webserver verarbeitet und bereitgestellt.

### Apache einrichten

Apache ist der Webserver, der eingehende Webanfragen verarbeitet und Antworten sendet. Installiere ihn mit dem folgenden Befehl.
```
sudo apt install apache2
```

Nach der Installation solltest du sicherstellen, dass die richtigen Firewall-Regeln eingerichtet sind, damit der Webserver über das Internet erreichbar ist. In diesem Beispiel verwenden wir die **UFW-Firewall**, da Apache dafür eine registrierte Anwendung hat.

Wenn du eine andere Firewall benutzt, stell sicher, dass Port 80 (HTTP) durch die Firewall geht. Mehr über Firewalls in Linux erfährst du in unserer Anleitung [Firewall verwalten](vserver-linux-firewall.md).

Stell sicher, dass die UFW-Firewall aktiviert ist und dass eine Regel für SSH erstellt wurde.
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

Du solltest die Regeln `Apache` und `Apache (v6)` mit der Aktion `ALLOW` sehen, was bedeutet, dass die Firewall bereit ist. Du solltest auch andere Regeln sehen, die du vielleicht schon eingerichtet hast, einschließlich der SSH-Regel.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Nachdem du die Firewall für Apache geöffnet hast, solltest du jetzt checken, ob Apache funktioniert. Dazu versuchst du, deine IP-Adresse in einem Browser aufzurufen, und zwar so: `http://[deine_ipaddress]`

Wenn alles funktioniert, solltest du eine Standard-Begrüßungsseite sehen. Wenn nicht, überprüfe den Status des Dienstes mit dem folgenden Befehl: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL einrichten

Jetzt installierst und richtest du einen MySQL-Server ein, der als Datenbank dient, um Daten dauerhaft in einer relationalen Struktur zu speichern. Installiere ihn mit dem folgenden Befehl.
```
sudo apt install mysql-server
```

Wenn das erledigt ist, solltest du ein Skript für eine sichere Installation laufen lassen, damit dein MySQL-Server sicher bleibt. Das ist optional, aber echt empfehlenswert. Du kannst das mit dem Befehl `sudo mysql_secure_installation` machen.

Du wirst durch eine interaktive Einrichtung geführt. Zuerst wirst du nach der Passwortüberprüfung gefragt. Wir empfehlen, `Y`zu wählen, damit in Zukunft nur sichere Passwörter erlaubt sind, und dann entweder `MEDIUM` über `1` oder `STRONG` über `2` auszuwählen.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Als Nächstes wirst du gefragt, ob du den Benutzer `anonymous` löschen und die Remote-Anmeldung als Root verbieten willst. Aus Sicherheitsgründen empfehlen wir, beides mit `Y` zu bestätigen. So wird der Testbenutzer gelöscht und der Master-Benutzer `root` kann nur lokal über SSH und nirgendwo anders verwendet werden, was das Risiko verringert.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Zum Schluss wirst du gefragt, ob du die Datenbank `test` löschen und die Berechtigungstabellen neu laden willst. Wir empfehlen, hier wieder mit `Y` zu bestätigen, da die Testtabelle nicht gebraucht wird und du die Berechtigungstabelle neu laden musst, damit die Änderungen übernommen werden.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Jetzt check mal, ob die MySQL-Datenbank läuft, indem du dich mit dem folgenden Befehl anmeldest: `sudo mysql -u root`. Wenn alles geklappt hat, solltest du eine Willkommensmeldung sehen. Wenn du fertig bist, kannst du das Programm mit dem Befehl `quit` beenden.

### PHP einrichten

Die letzte LAMP-Abhängigkeit ist PHP, das ganz einfach zu installieren ist. Mit dem folgenden Befehl installierst du PHP zusammen mit einem Plugin für Apache und MySQL, damit Apache mit PHP arbeiten und PHP MySQL nutzen kann.
```
sudo apt install php libapache2-mod-php php-mysql
```

Überprüfe, ob die Installation geklappt hat, indem du die Version checkst. Wenn du eine Version siehst, funktioniert PHP richtig.
```
php -v
```

:::tip PHP-Erweiterungen
Für fortgeschrittene Anwendungen brauchst du vielleicht zusätzliche PHP-Erweiterungen, um mehr Funktionen zu nutzen. Eine Liste davon findest du mit dem Befehl `apt search php- | less`.

Mit den Pfeiltasten kannst du scrollen und mit `Q` beenden, wenn du fertig bist. Um ein Erweiterungspaket zu installieren, benutze einfach den Befehl „apt install“ wie unten gezeigt. Du kannst mehrere Erweiterungen auf einmal eingeben, indem du sie durch ein Leerzeichen trennst, um die Installation zu beschleunigen.

```
sudo apt install [php_extension] [...]
```
:::

Wir empfehlen, den Verzeichnisindex so anzupassen, dass die Dateien `index.php` Vorrang vor den Standarddateien `.html` haben. Öffne die Datei mit dem folgenden Befehl.
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

Entferne im Nano-Editor `index.php` und zieh es ganz nach vorne in die Liste, so wie hier gezeigt:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Speicher die Datei und beende nano mit `STRG + X`, dann `Y` zum Bestätigen und zum Schluss `ENTER`. Jetzt startest du Apache neu, damit die Änderungen wirksam werden, mit `sudo systemctl restart apache2`.

### Test-Website erstellen

Nachdem wir jetzt alle LAMP-Abhängigkeiten installiert haben, erstellen wir eine Test-Website, um zu zeigen, wie der LAMP-Stack zusammenarbeitet und eine tolle dynamische Website-Lösung bildet. Das ist komplett optional, aber es ist nützlich, um zu verstehen, wie du diese Tools nutzen kannst, um deine eigenen Websites einzurichten.

In diesem Beispiel erstellen wir mit PHP eine kleine Website für eine To-do-Liste, die To-do-Einträge abruft und anzeigt. Diese werden in einer MySQL-Datenbanktabelle gespeichert und über Apache bereitgestellt.

Wir werden auch durchgehend die Testdomain `zapdocs.example.com` verwenden, da du in der Praxis wahrscheinlich eine Domain nutzen würdest. Du **musst** unbedingt einen DNS-Eintrag vom Typ `A` für die Domain einrichten, der auf die IP-Adresse deines Servers verweist. Wenn du dabei Hilfe brauchst, schau mal in unsere [Domain Records](domain-records.md#a-records) Anleitung rein.

:::note
Du kannst auch keine Domain verwenden und alle Erwähnungen von `[deine_domain]` durch einen normalen Namen ersetzen. Dann erreichst du die Website über die IP-Adresse. Denk aber daran, dass du später beim Erstellen der virtuellen Hostdatei den Parameter `ServerName` entfernen musst.
:::

#### Apache einrichten

Normalerweise werden auf Webservern alle Website-Dateien und Daten im Verzeichnis `/var/www` gespeichert. Standardmäßig kommt Apache mit einem Verzeichnis `html`, das eine Standardseite enthält. Damit alles gut organisiert ist, vor allem wenn du viele Websites auf einer einzigen Apache-Instanz hostest, empfehlen wir, jede Website in einem eigenen Verzeichnis oder Ordner einzurichten.

Dazu kannst du einfach für jede Website-Domain einen neuen Ordner im Verzeichnis `/var/www/[deine_domain]` anlegen. In diesem Beispiel wäre das `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[deine_domain]
```

Jetzt legst du eine neue Apache-Konfigurationsdatei für virtuelle Hosts im Verzeichnis `sites-available` für diese Domain und diesen Ordner an.
```
sudo nano /etc/apache2/sites-available/[deine_domain].conf
```

Kopiere die Vorlage unten in den Nano-Editor und ersetze `[deine_domain]` durch die von dir verwendete Domain.
```
<VirtualHost *:80>
    ServerName [deine_domain]
    ServerAlias www.[deine_domain]
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/[deine_domain]
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Diese neue virtuelle Hostdatei kümmert sich um Anfragen an Port 80 (HTTP) und checkt, ob die Anfrage zum angegebenen `ServerName` passt, in diesem Fall deine Domain. Sie sagt auch, dass der Ordner `/var/www/[deine_domain]`, den du vorher erstellt hast, zum Ausliefern von Dateien verwendet werden soll.

Speicher die Datei und beende nano mit `STRG + X`, dann `Y` zum Bestätigen und zum Schluss `ENTER`. Wir empfehlen, den Befehl `sudo apache2ctl configtest` zu verwenden, um sicherzustellen, dass die Datei keine Syntaxfehler enthält.

Der letzte Schritt bei der Apache-Konfiguration besteht darin, den neuen virtuellen Host mit `a2ensite` zu aktivieren.
```
sudo a2ensite [deine_domain]
```

:::note Keine Domain verwendet
Wenn du **keine** Domain benutzt, lösch die Zeile `ServerName` oder setz sie mit einem `#` vor, damit sie nicht mehr beachtet wird. Außerdem musst du den Standard-Virtual-Host mit dem Befehl `sudo a2dissite 000-default` deaktivieren.
:::

Starte Apache neu, damit der neue virtuelle Host mit dem folgenden Befehl aktiv wird: `sudo systemctl restart apache2`.

#### Website erstellen

Nachdem du Apache über den neuen virtuellen Host und den Dokumentordner eingerichtet hast, ist es Zeit, die eigentliche Website zu erstellen, die bereitgestellt werden soll. Im Moment ist der Ordner leer, daher wird noch nichts angezeigt. Wir erstellen eine kleine To-Do-Website, wie zuvor für diese Domain erwähnt.

##### Datenbank vorbereiten

Lass uns erst mal eine neue Datenbank und Tabelle anlegen, um die einzelnen Listenelemente zu speichern. Melde dich bei deinem MySQL-Server an.
```
sudo mysql -u root
```

Jetzt erstellen wir eine neue Datenbank namens `todowebsite` und darin eine Tabelle namens `todoitems`.
```
# Datenbank erstellen
CREATE DATABASE todowebsite;

# Nutze die neue Datenbank
USE todowebsite;

# Erstell eine neue Tabelle für die Artikel in der Datenbank.
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Jetzt, wo die Tabelle fertig ist, legen wir erstmal ein paar Beispiel-Einträge an.
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Zum Schluss legen wir noch einen eigenen Benutzer namens `todo` an, den wir speziell für diese Website verwenden werden.
```
# Erstell einen eigenen Benutzer
# Ersetz [deine_passwort] durch dein eigenes Passwort.
CREATE USER todo@localhost IDENTIFIED BY '[deine_passwort]';

# Privilegien für den Benutzer festlegen (als einer kopieren)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Rechte neu laden
FLUSH PRIVILEGES;
```

Nachdem die Datenbank vorbereitet und der Benutzer bereit ist, kannst du das MySQL-Terminal mit dem Befehl `quit` verlassen, sobald du fertig bist.

##### PHP-Website-Dateien

Der letzte Schritt in diesem Beispiel ist das Einrichten der eigentlichen PHP-Website-Datei für die To-Do-Seite. Dazu erstellst du eine neue Datei namens `index.php` im Verzeichnis `/var/www/[deine_domain]`, das du vorhin angelegt hast. Öffne den Nano-Editor, um dort eine Datei zu erstellen.
```
sudo nano /var/www/[deine_domain]/index.php
```

Unten haben wir einen einfachen Code-Schnipsel vorbereitet, den du in den Nano-Editor einfügen kannst, um eine einfache To-Do-Seite zu erstellen, die die in der Datenbank gespeicherten Elemente anzeigt. Der erste PHP-Abschnitt stellt eine MySQL-Verbindung zu deiner Datenbank her.

:::important
Du musst das Feld `[deine_passwort]` durch das Passwort ersetzen, das du vorher für den Benutzer `todo` festgelegt hast.
:::

Der nächste HTML-Abschnitt zeigt die Hauptwebseite, die eine ungeordnete Liste erstellt und alle Ergebnisse durchläuft.

```
<?php
// Prepare MySQL Connection
$servername = "localhost";
$username = "todo";
$password = "[deine_passwort]";
$dbname = "todowebsite";

// Create Connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check whether the connection was successful, if not return an error
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Run an SQL query to return entries from the table and set it as the result variable
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF--8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-Do List</title>
  </head>
  <body>
      <h1>Awesome To-Do List :D</h1>
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
      <ul>
          <?php
          // Check whether there are any results
          if ($result->num_rows > 0) {
              // Loop through each item of the returned array from the query
              foreach ($result as $entry) {
                  echo "<li>";
                  // Display the name and use htmlspecialchars to prevent XSS (cross-site scripting)
                  echo htmlspecialchars($entry["name"]);

                  // Display the completion status
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // Display creation date
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // If none are found, return a default message
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// Close database connection
$conn->close();
?>
```

Wenn du das in den Nano-Editor kopiert hast, speicher die Datei und beende Nano mit `STRG + X`, dann `Y` zum Bestätigen und zum Schluss `ENTER`.

#### Die Website testen

Du hast alles richtig gemacht und eine Test-To-Do-Website eingerichtet, die alle Teile des LAMP-Stacks nutzt!

Jetzt solltest du über die Domain (mit `http`/Port 80), die du vorher in der virtuellen Hostdatei festgelegt hast, auf die Website zugreifen können. In diesem Beispiel ist das `zapdocs.example.com`. Das Endergebnis sollte so aussehen:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Abschluss

Glückwunsch, du hast den LAMP-Stack erfolgreich installiert und eingerichtet! Als nächsten Schritt empfehlen wir dir dringend, eine Domain und ein **SSL-Zertifikat** einzurichten, um sicherzustellen, dass Daten sicher auf deine Websites übertragen werden. Schau dir unsere [Certbot-Anleitung](vserver-linux-certbot.md#webroot-plugin) an, insbesondere den Abschnitt zum **Apache-Plugin**, und folge den interaktiven Einrichtungsanweisungen, um schnell und einfach ein Zertifikat für deine Domain einzurichten.

Für weitere Fragen oder Hilfe zögere bitte nicht, unser Support-Team zu kontaktieren, das dir täglich zur Verfügung steht! 🙂

<InlineVoucher />
