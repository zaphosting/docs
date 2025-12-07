---
id: dedicated-linux-lemp-stack
title: "Dedicated Server: LEMP stack installeren - Linux, Nginx, MySQL, PHP"
description: "Ontdek hoe je een LEMP stack instelt voor het hosten van dynamische PHP-websites op Linux-servers met praktische voorbeelden → Leer het nu"
sidebar_label: Web LEMP stack
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

De **LEMP** stack is een populaire combinatie van open-source software die samen wordt geïnstalleerd om eenvoudig dynamische websites te hosten, met een speciale focus op PHP-websites en apps. De afkorting staat voor: **L**inux als besturingssysteem, "**E**ngine x" (nginx) als webserver, **M**ySQL als database en tenslotte **P**HP voor verwerking. In deze gids behandelen we het proces van het opzetten van een LEMP stack op een Linux Dedicated Server, met een gedetailleerde uitleg en een voorbeeld van het opzetten van een to-do lijst website.

## Voorbereiding

Begin met verbinden met je server via SSH. Als je niet weet hoe dit moet, bekijk dan onze [Eerste toegang (SSH)](vserver-linux-ssh.md) gids.

In deze gids gebruiken we Ubuntu als Linux-distributie. De instructies zijn hetzelfde voor Debian en zouden vergelijkbaar moeten zijn voor andere distributies, maar de syntax van commando’s kan iets verschillen. Zorg dat je een OS geïnstalleerd hebt en verbonden bent met de server via SSH.

Zoals altijd, zorg ervoor dat alle pakketten up-to-date zijn voordat je verder gaat met de installatie, via het volgende commando:
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

De installatie kan makkelijk worden opgesplitst in de kernonderdelen van de LEMP stack, te beginnen met de Nginx webserver, gevolgd door de MySQL database en tenslotte PHP. Tijdens de installatie zetten we een testwebsite op die in PHP geschreven is en de MySQL database aanspreekt. Elke webrequest wordt uiteindelijk verwerkt en geserveerd via de Nginx webserver.

### Nginx installeren

Nginx is de webserver die inkomende webverzoeken verwerkt en antwoorden serveert. Installeer het met het volgende commando:
```
sudo apt install nginx
```

Zodra het geïnstalleerd is, moet je ervoor zorgen dat de juiste firewallregels zijn aangemaakt zodat de webserver toegankelijk is vanaf het internet. In dit voorbeeld gebruiken we de **UFW Firewall** omdat Nginx hiervoor een geregistreerde applicatie heeft.

Als je een andere firewall gebruikt, zorg dan dat poort 80 (HTTP) openstaat. Meer info over firewalls in Linux vind je in onze [Firewall beheren](vserver-linux-firewall.md) gids.

Zorg dat de UFW firewall aanstaat en dat er een regel voor SSH is aangemaakt:
```
# Maak een regel aan om SSH toe te staan
sudo ufw allow OpenSSH

# Zet UFW Firewall aan
sudo ufw enable
```

:::caution
Zorg dat je een regel voor SSH hebt als je UFW gebruikt! Zonder deze regel kun je **niet** meer inloggen via SSH als je huidige sessie wegvalt!
:::

Maak nu de regel aan om Nginx toe te staan en controleer daarna of de regels aanwezig zijn:
```
# Regel om Nginx toe te staan
sudo ufw allow in "Nginx Full"

# Controleer de UFW firewall regels
sudo ufw status
```

:::tip
Je kunt zien welke profielen beschikbaar zijn met het commando `ufw app list`. In het voorbeeld hierboven zorgt `Nginx Full` ervoor dat zowel HTTP (poort 80) als HTTPS (poort 443) openstaan.
:::

Je zou regels moeten zien voor `Nginx` en `Nginx (v6)` met de actie `ALLOW`, wat bevestigt dat de firewall klaar is. Ook zie je andere regels die je eerder hebt ingesteld, inclusief de SSH-regel.

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

Met de firewall open voor Nginx, controleer je of Nginx werkt door je IP-adres in een browser te openen, bijvoorbeeld: `http://[jouw_ipadres]`

Als het werkt, zie je een standaard welkomstpagina. Zo niet, check dan de status van de service met: `systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### MySQL installeren

Installeer nu een MySQL server die als database fungeert om data relationeel op te slaan. Gebruik het volgende commando:
```
sudo apt install mysql-server
```

Na installatie is het aan te raden om een beveiligingsscript te draaien om je MySQL server veilig te houden. Dit is optioneel maar sterk aanbevolen. Start het met `sudo mysql_secure_installation`.

Je doorloopt een interactieve setup. Eerst wordt gevraagd naar wachtwoordvalidatie. Kies `Y` om alleen veilige wachtwoorden toe te staan en selecteer `MEDIUM` via `1` of `STRONG` via `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Vervolgens wordt gevraagd om de `anonymous` gebruiker te verwijderen en root-login op afstand uit te schakelen. We raden aan beide met `Y` te accepteren voor betere beveiliging.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Tot slot wordt gevraagd om de `test` database te verwijderen en de privileges te herladen. Ook dit raden we aan met `Y` te bevestigen.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Controleer of MySQL draait door in te loggen met: `sudo mysql -u root`. Als het lukt, zie je een welkombericht. Verlaat met `quit`.

### PHP installeren

De laatste LEMP component is PHP. Voor Nginx heb je `php-fpm` nodig (PHP FastCGI Process Manager). Nginx stuurt verzoeken door naar `php-fpm` voor verwerking.

Installeer de nieuwste versie van php-fpm en de PHP MySQL plugin met:
```
sudo apt install php-fpm php-mysql
```

Controleer of PHP werkt door de versie te checken:
```
php -v
```

:::tip PHP Extensies
Voor geavanceerde toepassingen heb je misschien extra PHP extensies nodig. Bekijk ze met `apt search php- | less`.

Gebruik de pijltjestoetsen om te scrollen en druk op `Q` om te stoppen. Installeer extensies met:
```
sudo apt install [php_extensie] [...]
```
Je kunt meerdere extensies tegelijk installeren door ze te scheiden met een spatie.
:::

### Testwebsite aanmaken

Nu alle LEMP onderdelen geïnstalleerd zijn, maken we een testwebsite om te laten zien hoe de stack samenwerkt voor een dynamische website. Dit is optioneel, maar handig om te begrijpen hoe je deze tools kunt gebruiken.

We maken een kleine to-do lijst website in PHP die to-do items ophaalt uit een MySQL database en via Nginx serveert.

We gebruiken het testdomein `zapdocs.example.com`. In de praktijk gebruik je een eigen domein waarvoor je een `A` DNS-record moet aanmaken dat naar je server-IP wijst. Hulp nodig? Bekijk onze [Domein Records](domain-records.md) gids.

:::note
Je kunt ook zonder domein werken en `[your_domain]` vervangen door een naam. Dan bezoek je de site via het IP-adres. Verwijder dan wel de `server_name` regel in het server block bestand.
:::

#### Nginx configureren

Websites worden meestal opgeslagen in `/var/www`. Standaard heeft Nginx een `html` map met een standaardpagina. Voor overzichtelijkheid raden we aan elke website in een eigen map te zetten.

Maak een map aan voor je domein, bijvoorbeeld `/var/www/zapdocs.example.com`:
```
sudo mkdir /var/www/[your_domain]
```

Maak nu een nieuw Nginx server block bestand aan in `sites-available`:
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

Plak de onderstaande template in nano en vervang `[your_domain]` door je domein:
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

:::important PHP Versie
Vervang `[your_phpversion]` door de geïnstalleerde PHP versie. Check met `php -v`, bijvoorbeeld `PHP 8.3.6`. Gebruik dan `8.3` in de regel, dus:
`fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;`
:::

Dit server block luistert op poort 80 en checkt of het verzoek overeenkomt met je domein. Het wijst naar de map die je net hebt aangemaakt.

Sla op en sluit nano af met `CTRL + X`, dan `Y` en `ENTER`.

Activeer het server block door een symlink te maken in `sites-enabled`:
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note Geen domein
Gebruik je geen domein? Verwijder of commentarieer dan de `server_name` regel met een `#`. Schakel ook het default server block uit met:
```
sudo unlink /etc/nginx/sites-enabled/default
```
:::

Test de configuratie met:
```
sudo nginx -t
```

Herstart Nginx om de wijzigingen toe te passen:
```
sudo systemctl reload nginx
```

#### Website aanmaken

Nu Nginx is ingesteld, maken we de website zelf. De map is nu leeg, dus er wordt niets geserveerd. We maken een kleine to-do website.

##### Database voorbereiden

Log in op MySQL:
```
sudo mysql -u root
```

Maak een nieuwe database `todowebsite` en een tabel `todoitems`:
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

Maak een dedicated gebruiker `todo` aan voor deze website:
```
# Maak gebruiker aan
# Vervang [your_password] door je eigen wachtwoord
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Geef rechten (alles in één regel kopiëren)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Herlaad privileges
FLUSH PRIVILEGES;
```

Verlaat MySQL met `quit`.

##### PHP website bestanden

Maak het PHP bestand aan in `/var/www/[your_domain]/index.php`:
```
sudo nano /var/www/[your_domain]/index.php
```

Plak deze simpele code in nano. Het eerste PHP-gedeelte maakt verbinding met de database.

:::important
Vervang `[your_password]` door het wachtwoord dat je eerder hebt ingesteld voor de `todo` gebruiker.
:::

Het HTML-gedeelte toont de to-do lijst.

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
      <p>Voor onze coole ZAP-Hosting gids: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
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
// Sluit verbinding
$conn->close();
?>
```

Sla op en sluit nano af met `CTRL + X`, dan `Y` en `ENTER`.

#### Website testen

Je hebt nu succesvol een test to-do website opgezet die de hele LEMP stack gebruikt!

Je kunt de website bezoeken via het domein (http/poort 80) dat je hebt ingesteld, in dit voorbeeld `zapdocs.example.com`. Het resultaat zou er zo uit moeten zien:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusie

Gefeliciteerd, je hebt de LEMP stack succesvol geïnstalleerd en ingesteld! Als volgende stap raden we **sterk aan** om een domein en een **SSL-certificaat** te regelen zodat data veilig wordt verzonden naar je websites. Bekijk onze [Certbot gids](vserver-linux-certbot.md) met focus op de **Nginx Plugin** en volg de interactieve setup om snel een certificaat voor je domein te installeren.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, dagelijks beschikbaar om je te helpen! 🙂