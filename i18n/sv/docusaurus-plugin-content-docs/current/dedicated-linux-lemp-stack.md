---
id: dedicated-linux-lemp-stack
title: "Sätt upp en LEMP Stack på en Linux-server - Distribuera högpresterande webbapplikationer"
description: "Upptäck hur du sätter upp en LEMP stack för att hosta dynamiska PHP-webbplatser på Linux-servrar med praktiska exempel → Lär dig mer nu"
sidebar_label: Web LEMP stack
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

**LEMP** stacken är en populär samling öppen källkod-programvara som sätts upp tillsammans för att möjliggöra enkel hosting av dynamiska webbplatser, med särskilt fokus på PHP-webbplatser och appar. Akronymen står för: **L**inux som OS (operativsystem), "**E**ngine x" (nginx) som webbserver, **M**ySQL som databas och slutligen **P**HP för bearbetning. I den här guiden går vi igenom processen att sätta upp en LEMP stack på en Linux Dedicated Server, med en detaljerad genomgång och exempel på att sätta upp en att-göra-lista-webbplats.

## Förberedelser

Börja med att ansluta till din server via SSH. Om du inte vet hur man gör detta, ta en titt på vår [Initial access (SSH)](vserver-linux-ssh.md)-guide.

I den här guiden använder vi Ubuntu som Linux-distribution. Instruktionerna är desamma för Debian och bör vara liknande för andra distributioner, men syntaxen för kommandon kan skilja sig något. Se till att du har ett OS installerat och är ansluten till servern via SSH.

Som alltid, innan du fortsätter med installationen, se till att alla paket är uppdaterade med följande kommando:
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

Installationen kan enkelt delas upp i varje kärnberoende i LEMP, med start från Nginx webbserver, följt av MySQL-databasen och slutligen PHP. Under installationen sätter vi upp en testwebbplats som är skriven i PHP och kommer att använda MySQL-databasen. Varje webbförfrågan kommer sedan att bearbetas och serveras via Nginx webbserver.

### Sätta upp Nginx

Nginx är webbservern som kommer att användas för att bearbeta inkommande webbförfrågningar och leverera svar. Installera den med följande kommando.
```
sudo apt install nginx
```

När den är installerad bör du säkerställa att rätt brandväggsregler skapas för att webbservern ska vara tillgänglig från internet. I det här exemplet använder vi **UFW Firewall** eftersom Nginx har en registrerad applikation för detta.

Om du använder en annan brandvägg, se till att port 80 (HTTP) tillåts genom brandväggen. Du kan lära dig mer om brandväggar i Linux via vår [Manage Firewall](vserver-linux-firewall.md)-guide.

Se till att UFW-brandväggen är aktiverad och att en regel för SSH också är skapad.
```
# Skapa en regel för att tillåta SSH
sudo ufw allow OpenSSH

# Aktivera UFW-brandväggen
sudo ufw enable
```

:::caution
Se till att du har en regel för SSH om du använder UFW-brandväggen! Om du inte har det kommer du **inte** kunna SSH:a in i servern igen om du tappar anslutningen till din nuvarande session!
:::

Skapa nu regeln för att tillåta Nginx och kontrollera sedan att reglerna finns.
```
# Skapa en regel för att tillåta Nginx
sudo ufw allow in "Nginx Full"

# Kontrollera UFW-brandväggsreglerna
sudo ufw status
```

:::tip
Du kan se vilka profiler som finns tillgängliga genom att köra kommandot `ufw app list`. I exemplet ovan betyder `Nginx Full` att både HTTP (port 80) och HTTPS (port 443) regler skapas.
:::

Du bör se `Nginx` och `Nginx (v6)` regler med `ALLOW`-åtgärder, vilket bekräftar att brandväggen är redo. Du bör också se andra regler som du tidigare kan ha satt upp, inklusive SSH-regeln.

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

Med brandväggen öppen för Nginx bör du nu säkerställa att Nginx fungerar. Du kan göra detta genom att försöka nå din IP-adress i en webbläsare, så här: `http://[your_ipaddress]`

Om det fungerar bör du se en standard välkomstsida. Om inte, kontrollera statusen för tjänsten med följande kommando: `systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### Sätta upp MySQL

Nu installerar och sätter du upp en MySQL-server som kommer att agera som din databas för att lagra data på ett relationsmässigt sätt. Installera den med följande kommando.
```
sudo apt install mysql-server
```

När detta är klart rekommenderas det att köra ett säkert installationsskript som ser till att din MySQL-serverinstans förblir säker. Detta är valfritt men starkt rekommenderat. Du kan köra detta med kommandot `sudo mysql_secure_installation`.

Detta tar dig igenom en interaktiv setup. Först blir du tillfrågad om lösenordsvalidering. Vi rekommenderar att välja `Y` för att säkerställa att endast säkra lösenord tillåts i framtiden och sedan välja antingen `MEDIUM` via `1` eller `STRONG` via `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Nästa steg är att ta bort `anonymous`-användaren och förhindra root-inloggning på distans. För båda rekommenderar vi starkt att acceptera med `Y` av säkerhetsskäl. Detta säkerställer att testanvändaren tas bort och att master-root-användaren endast kan användas lokalt via SSH och inte någon annanstans, vilket minskar risken.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Slutligen blir du tillfrågad om att ta bort `test`-databasen och ladda om privilegietabellerna. Återigen rekommenderar vi att acceptera med `Y` eftersom testtabellen inte behövs och du behöver ladda om privilegietabellen för att ändringarna ska träda i kraft.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Kontrollera nu om MySQL-databasen körs genom att försöka logga in med följande kommando: `sudo mysql -u root`. Om det lyckas bör du se ett välkomstmeddelande. Du kan avsluta med kommandot `quit` när du är klar.

### Sätta upp PHP

Det sista LEMP-beroendet är PHP och för nginx krävs det att man använder ett externt program som heter `php-fpm` (PHP fastCGI process manager). Nginx konfigureras sedan för att skicka förfrågningar till `php-fpm` innan svaren skickas vidare när serverblock används.

Följande kommando installerar den senaste versionen av php-fpm tillsammans med ett PHP-plugin för MySQL, för att låta Nginx fungera med PHP och för att PHP ska kunna använda MySQL.
```
sudo apt install php-fpm php-mysql
```

Bekräfta att installationen lyckades genom att kolla versionen. Om du ser en versionsutskrift betyder det att PHP fungerar korrekt.
```
php -v
```

:::tip PHP Extensions
För avancerade användningsfall kan du behöva extra PHP-tillägg för att få mer funktionalitet. Du kan se en lista på dessa genom att köra kommandot `apt search php- | less`.

Använd piltangenterna för att scrolla och tryck `Q` när du vill avsluta. För att installera ett tilläggspaket, använd helt enkelt apt install-kommandot så här. Du kan ange flera tillägg samtidigt, separerade med mellanslag för snabbare installation.

```
sudo apt install [php_extension] [...]
```
:::

### Skapa testwebbplats

När installationen av varje LEMP-beroende är klar, skapar vi nu en testwebbplats för att visa hur LEMP stacken fungerar tillsammans för att skapa en grym dynamisk webbplatslösning. Detta är helt frivilligt, men det är bra för att förstå hur du kan använda dessa verktyg för att sätta upp dina egna webbplatser.

I det här exemplet skapar vi en liten att-göra-lista-webbplats via PHP som hämtar och returnerar att-göra-poster. Dessa lagras i en MySQL-databastabell och serveras via Nginx.

Vi kommer också använda ett testdomännamn `zapdocs.example.com` genom hela guiden, eftersom du i verkliga scenarion troligtvis använder en domän. Du **måste** sätta upp en `A`-typ DNS-post för domänen som pekar på IP-adressen till din server. Om du behöver hjälp med detta, kolla vår [Domain Records](domain-records.md)-guide.

:::note
Du kan välja att inte använda en domän och ersätta alla förekomster av `[your_domain]` med ett vanligt namn. Då når du webbplatsen via IP-adressen. Observera dock att när du skapar serverblock-filen senare bör du ta bort `server_name`-parametern.
:::

#### Sätta upp Nginx

Vanligtvis lagras alla webbplatsfiler och data under `/var/www`-katalogen på webbservrar. Som standard kommer Nginx ofta med en `html`-katalog som innehåller en standard-sida. För att hålla allt organiserat, särskilt när du hostar många webbplatser på en och samma Nginx-instans, rekommenderar vi att varje webbplats får en egen katalog eller mapp.

Du kan enkelt skapa en ny mapp i `/var/www/[your_domain]` för varje webbplatsdomän. I det här exemplet blir det `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Skapa nu en ny Nginx serverblock-konfigurationsfil i `sites-available`-katalogen för denna domän och mapp.
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

Använd mallen nedan och klistra in den i nano-editorn, byt ut `[your_domain]` mot den domän du använder.
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

:::important PHP Version
Det är viktigt att ändra `[your_phpversion]` till den aktuella PHP-versionen som är installerad. För att kolla detta, kör `php -v` som bör visa en version, till exempel: `PHP 8.3.6 (cli) (built: Mar 19 2025 10:08:38) (NTS)`.

I det här exemplet sätter du `8.3` som huvudversion, så raden blir: `fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;`
:::

Den här nya serverblock-filen hanterar port 80 (HTTP) förfrågningar och kollar om förfrågan matchar `server_name` som specificerats, i det här fallet din domän. Den pekar också på att mappen `/var/www/[your_domain]` som du skapade tidigare ska användas för att servera filer.

Spara filen och avsluta nano med `CTRL + X`, följt av `Y` för att bekräfta och slutligen `ENTER`.

Det sista steget för Nginx-konfigurationen är att aktivera konfigurationen genom att länka filen från `sites-enabled`-katalogen.
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note Ingen domän används
Om du **inte** använder en domän, ta bort raden `server_name` eller kommentera ut den genom att sätta ett `#` framför. Du måste också inaktivera standardserverblocket med kommandot `sudo unlink /etc/nginx/sites-enabled/default`.
:::

Vi rekommenderar att du kör `sudo nginx -t` för att säkerställa att filen inte innehåller några syntaxfel.

Slutligen, starta om Nginx för att den nya virtuella hosten ska börja gälla med följande kommando: `sudo systemctl reload nginx`.

#### Skapa webbplats

Nu när du har konfigurerat Nginx via det nya serverblocket och dokumentmappen är det dags att skapa själva webbplatsen som ska serveras. För tillfället är mappen tom och inget kommer att serveras. Vi skapar en liten att-göra-webbplats som nämnts tidigare för denna domän.

##### Förbereda databasen

Börja med att skapa en ny databas och tabell för att lagra varje lista. Logga in på din MySQL-server.
```
sudo mysql -u root
```

Skapa nu en ny databas `todowebsite` och en tabell `todoitems` i den.
```
# Skapa databas
CREATE DATABASE todowebsite;

# Använd den nya databasen
USE todowebsite;

# Skapa en ny tabell i databasen
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

När tabellen är klar, skapa några exempelposter för tillfället.
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Skapa slutligen en dedikerad `todo`-användare som ska användas specifikt för den här webbplatsen.
```
# Skapa en dedikerad användare
# Byt ut [your_password] mot ditt eget lösenord
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Sätt privilegier för användaren (kopiera som en rad)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Ladda om privilegier
FLUSH PRIVILEGES;
```

När databasen är förberedd och användaren klar kan du avsluta MySQL-terminalen med kommandot `quit` när du är redo.

##### PHP-webbplatsfiler

Den sista delen i detta exempel är att skapa själva PHP-webbplatsfilen för att-göra-sidan. Detta görs via en ny `index.php`-fil i `/var/www/[your_domain]`-katalogen som du skapade tidigare. Öppna nano-editorn för att skapa filen där.
```
sudo nano /var/www/[your_domain]/index.php
```

Nedan har vi förberett en enkel kodsnutt som du kan klistra in i nano-editorn för en grundläggande att-göra-sida som returnerar poster som finns i databasen. Den första PHP-sektionen etablerar en MySQL-anslutning till din databas.

:::important
Du måste ändra fältet `[your_password]` till det lösenord du satte för `todo`-användaren tidigare.
:::

Den efterföljande HTML-sektionen innehåller huvudsidan som skapar en oordnad lista och loopar igenom varje resultat.

```
<?php
// Prepare MySQL Connection
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
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
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
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

När du klistrat in detta i nano-editorn, spara filen och avsluta nano med `CTRL + X`, följt av `Y` för att bekräfta och slutligen `ENTER`.

#### Testa webbplatsen

Du har nu framgångsrikt följt guiden och satt upp en test-att-göra-webbplats som använder alla delar av LEMP stacken!

Du bör nu kunna nå webbplatsen via domänen (med `http`/port 80) som du definierade tidigare i serverblock-filen, i det här exemplet `zapdocs.example.com`. Slutresultatet bör se ut ungefär så här:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Slutsats

Grattis, du har framgångsrikt installerat och satt upp LEMP stacken! Nästa steg är att vi **starkt rekommenderar** att du sätter upp en domän och ett **SSL-certifikat** för att säkerställa att data skickas säkert till dina webbplatser. Kolla in vår [Certbot-guide](dedicated-linux-certbot.md) med fokus på **Nginx Plugin** och följ den interaktiva setupen för att snabbt och enkelt sätta upp ett certifikat för din valda domän.

För fler frågor eller hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt dagligen för att hjälpa dig! 🙂