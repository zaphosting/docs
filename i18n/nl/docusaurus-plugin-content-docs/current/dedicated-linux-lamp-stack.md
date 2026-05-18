---
id: dedicated-linux-lamp-stack
title: "Een LAMP Stack op een Linux Server Installeren - Classic PHP Apps Krachtig Maken"
description: "Ontdek hoe je efficiënt een LAMP stack opzet voor het hosten van dynamische PHP-websites op Linux-servers → Leer het nu"
sidebar_label: Web LAMP stack
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

De **LAMP** stack is een populaire set open-source software die samen wordt geïnstalleerd om eenvoudig dynamische websites te hosten, met een focus op PHP-websites en apps. De afkorting staat voor: **L**inux als besturingssysteem, **A**pache als webserver, **M**ySQL als database en tenslotte **P**HP voor verwerking. In deze gids behandelen we het proces van het opzetten van een LAMP stack op een Linux Dedicated Server, met een gedetailleerde uitleg en een voorbeeld van het opzetten van een to-do lijst website.

## Voorbereiding

Begin met verbinden met je server via SSH. Als je niet weet hoe, bekijk dan onze [Eerste toegang (SSH)](vserver-linux-ssh.md) gids.

In deze gids gebruiken we Ubuntu als Linux-distributie. De instructies zijn hetzelfde voor Debian en vergelijkbaar voor andere distributies, maar de syntax van commando’s kan iets verschillen. Zorg dat je een OS geïnstalleerd hebt en verbonden bent via SSH.

Zoals altijd, zorg ervoor dat alle pakketten up-to-date zijn voordat je verder gaat met de installatie, met het volgende commando:
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

## Installatie

De installatie splitsen we makkelijk op per kernonderdeel van LAMP, te beginnen met de Apache webserver, daarna de MySQL database en tenslotte PHP. Tijdens de installatie zetten we een testwebsite op die in PHP geschreven is en de MySQL database aanspreekt. Elke webrequest wordt uiteindelijk verwerkt en geserveerd via Apache.

### Apache installeren

Apache is de webserver die inkomende webverzoeken verwerkt en antwoorden serveert. Installeer het met het volgende commando:
```
sudo apt install apache2
```

Zodra geïnstalleerd, moet je zorgen dat de juiste firewallregels zijn ingesteld zodat de webserver bereikbaar is vanaf internet. In dit voorbeeld gebruiken we de **UFW Firewall** omdat Apache hiervoor een geregistreerde applicatie heeft.

Gebruik je een andere firewall, zorg dan dat poort 80 (HTTP) openstaat. Meer info over firewalls in Linux vind je in onze [Firewall beheren](vserver-linux-firewall.md) gids.

Zorg dat UFW firewall aanstaat en dat er een regel voor SSH is:
```
# Regel maken om SSH toe te staan
sudo ufw allow OpenSSH

# UFW Firewall inschakelen
sudo ufw enable
```

:::caution
Zorg dat je een regel voor SSH hebt als je UFW gebruikt! Zonder deze regel kun je **niet** meer via SSH inloggen als je huidige sessie wegvalt!
:::

Maak nu de regel aan om Apache toe te staan en controleer daarna of de regels aanwezig zijn:
```
# Regel maken om Apache toe te staan
sudo ufw allow in "Apache Full"

# UFW firewall regels checken
sudo ufw status
```

:::tip
Je kunt zien welke profielen beschikbaar zijn met het commando `ufw app list`. In het voorbeeld hierboven zorgt `Apache Full` ervoor dat zowel HTTP (poort 80) als HTTPS (poort 443) openstaan.
:::

Je zou regels moeten zien voor `Apache` en `Apache (v6)` met de actie `ALLOW`, wat betekent dat de firewall klaar is. Ook zie je andere regels die je eerder hebt ingesteld, zoals de SSH-regel.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Met de firewall open voor Apache, check je of Apache werkt door je IP-adres in een browser te openen: `http://[jouw_ipadres]`

Als het werkt, zie je een standaard welkomstpagina. Zo niet, check dan de status met: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL installeren

Installeer nu de MySQL server die als database fungeert om data relationeel op te slaan:
```
sudo apt install mysql-server
```

Na installatie is het aan te raden de beveiligingsscript te draaien om je MySQL server veilig te houden. Dit is optioneel maar sterk aanbevolen. Voer uit met `sudo mysql_secure_installation`.

Je doorloopt een interactieve setup. Eerst wordt gevraagd naar wachtwoordvalidatie. Kies `Y` om alleen veilige wachtwoorden toe te staan en selecteer `MEDIUM` via `1` of `STRONG` via `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Daarna wordt gevraagd om de `anonymous` gebruiker te verwijderen en root login op afstand uit te schakelen. We raden aan beide met `Y` te accepteren voor betere beveiliging.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Tot slot wordt gevraagd om de `test` database te verwijderen en de privileges te herladen. Ook hier raden we aan `Y` te kiezen.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Controleer of MySQL draait door in te loggen: `sudo mysql -u root`. Als het lukt, zie je een welkombericht. Verlaat met `quit`.

### PHP installeren

PHP is de laatste LAMP dependency en eenvoudig te installeren. Dit commando installeert PHP plus plugins voor Apache en MySQL, zodat Apache met PHP werkt en PHP MySQL kan gebruiken:
```
sudo apt install php libapache2-mod-php php-mysql
```

Check of PHP goed is geïnstalleerd door de versie te tonen:
```
php -v
```

:::tip PHP Extensies
Voor geavanceerde toepassingen heb je misschien extra PHP extensies nodig. Bekijk ze met `apt search php- | less`.

Scroll met pijltjestoetsen en druk op `Q` om te stoppen. Installeer extensies met:
```
sudo apt install [php_extensie] [...]
```
Je kunt meerdere extensies tegelijk installeren door ze te scheiden met spaties.
:::

We raden aan de directory index aan te passen zodat `index.php` voorrang krijgt boven `.html`. Open het bestand:
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

Verplaats `index.php` naar het begin van de lijst:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Sla op met `CTRL + X`, bevestig met `Y` en druk op `ENTER`. Herstart Apache:
```
sudo systemctl restart apache2
```

### Testwebsite maken

Nu alles geïnstalleerd is, maken we een testwebsite om te laten zien hoe de LAMP stack samenwerkt. Dit is optioneel maar handig om te snappen hoe je eigen sites opzet.

We maken een kleine to-do lijst website in PHP die to-do items ophaalt uit een MySQL tabel en via Apache serveert.

We gebruiken het testdomein `zapdocs.example.com`. In de praktijk moet je een `A` DNS-record aanmaken dat naar het IP-adres van je server wijst. Hulp nodig? Check onze [Domein Records](domain-records.md) gids.

:::note
Je kunt ook zonder domein werken en `[your_domain]` vervangen door een naam. Dan bezoek je de site via het IP-adres. Verwijder dan wel de `ServerName` regel in het virtual host bestand.
:::

#### Apache instellen

Websites staan meestal in `/var/www`. Apache heeft standaard een `html` map met een standaardpagina. Om overzicht te houden, vooral bij meerdere sites, raden we aan elke site in een eigen map te zetten.

Maak een map aan voor je domein, bijvoorbeeld `/var/www/zapdocs.example.com`:
```
sudo mkdir /var/www/[your_domain]
```

Maak nu een nieuw Apache virtual host configuratiebestand aan in `sites-available`:
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Plak deze template en vervang `[your_domain]` door je domein:
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

Dit bestand behandelt poort 80 (HTTP) en checkt of het verzoek overeenkomt met `ServerName`. Het wijst ook naar de map die je net hebt gemaakt.

Sla op met `CTRL + X`, bevestig met `Y` en druk op `ENTER`. Test de configuratie met:
```
sudo apache2ctl configtest
```

Activeer de nieuwe site:
```
sudo a2ensite [your_domain]
```

:::note Geen domein gebruikt
Gebruik je geen domein? Verwijder of commentarieer dan de `ServerName` regel (zet er een `#` voor). Schakel ook de standaard site uit:
```
sudo a2dissite 000-default
```
:::

Herstart Apache:
```
sudo systemctl restart apache2
```

#### Website maken

De map is nu leeg, dus we maken een kleine to-do website.

##### Database voorbereiden

Log in op MySQL:
```
sudo mysql -u root
```

Maak een database `todowebsite` en een tabel `todoitems`:
```
# Database aanmaken
CREATE DATABASE todowebsite;

# Gebruik de database
USE todowebsite;

# Tabel aanmaken
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Voeg wat voorbeelditems toe:
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Maak een dedicated gebruiker `todo` aan met eigen wachtwoord:
```
# Vervang [your_password] door je eigen wachtwoord
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Rechten toekennen (alles in één regel kopiëren)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Privileges herladen
FLUSH PRIVILEGES;
```

Verlaat MySQL met `quit`.

##### PHP website bestanden

Maak het PHP bestand aan:
```
sudo nano /var/www/[your_domain]/index.php
```

Plak deze code in de editor. Vergeet niet `[your_password]` te vervangen door het wachtwoord van de `todo` gebruiker.

```
<?php
// MySQL verbinding voorbereiden
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Verbinding maken
$conn = new mysqli($servername, $username, $password, $dbname);

// Check verbinding
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query om items op te halen
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
      <p>Voor onze coole ZAP-Hosting gids: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
      <ul>
          <?php
          // Check of er resultaten zijn
          if ($result->num_rows > 0) {
              // Loop door elk item
              foreach ($result as $entry) {
                  echo "<li>";
                  // Toon naam, voorkom XSS met htmlspecialchars
                  echo htmlspecialchars($entry["name"]);

                  // Toon status
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // Toon aanmaakdatum
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Geen items gevonden
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// Verbinding sluiten
$conn->close();
?>
```

Sla op met `CTRL + X`, bevestig met `Y` en druk op `ENTER`.

#### Website testen

Je hebt nu een test to-do website opgezet die de hele LAMP stack gebruikt!

Bezoek de site via je domein (http/poort 80), bijvoorbeeld `zapdocs.example.com`. Het resultaat zou er zo uit moeten zien:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusie

Gefeliciteerd, je hebt de LAMP stack succesvol geïnstalleerd en opgezet! Als volgende stap raden we **sterk aan** om een domein en een **SSL-certificaat** te regelen zodat data veilig wordt verzonden. Bekijk onze [Certbot gids](dedicated-linux-certbot.md) met focus op de **Apache Plugin** en volg de interactieve setup om snel een certificaat voor je domein te installeren.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, we staan dagelijks voor je klaar! 🙂