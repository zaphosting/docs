---
id: vserver-linux-lamp-stack
title: "Sätt upp en LAMP Stack på en Linux-server - Driv klassiska PHP-applikationer"
description: "Upptäck hur du effektivt sätter upp en LAMP stack för att hosta dynamiska PHP-webbplatser på Linux VPS → Läs mer nu"
sidebar_label: Web LAMP stack
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

**LAMP** stacken är en populär samling öppen källkodsprogram som sätts upp tillsammans för att möjliggöra enkel hosting av dynamiska webbplatser, med särskilt fokus på PHP-webbplatser och appar. Akronymen står för: **L**inux som operativsystem, **A**pache som webbserver, **M**ySQL som databas och slutligen **P**HP för bearbetning. I den här guiden går vi igenom processen för att sätta upp en LAMP stack på en Linux VPS, med en detaljerad genomgång och exempel på att sätta upp en att-göra-lista webbplats.

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din server via SSH. Om du inte vet hur man gör detta, ta en titt på vår guide [Initial access (SSH)](vserver-linux-ssh.md).

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

Installationen kan enkelt delas upp i varje kärnberoende i LAMP, med start från Apache webbserver, följt av MySQL-databasen och slutligen PHP. Under installationen kommer vi att sätta upp en testwebbplats som är skriven i PHP och som kommer att använda MySQL-databasen. Varje webbförfrågan kommer sedan att bearbetas och serveras via Apache webbserver.

### Sätta upp Apache

Apache är webbservern som kommer att användas för att bearbeta inkommande webbförfrågningar och leverera svar. Installera den med följande kommando.
```
sudo apt install apache2
```

När den är installerad bör du säkerställa att rätt brandväggsregler skapas för att webbservern ska vara tillgänglig från internet. I det här exemplet använder vi **UFW Firewall** eftersom Apache har en registrerad applikation för detta.

Om du använder en annan brandvägg, se till att tillåta port 80 (HTTP) genom brandväggen. Du kan lära dig mer om brandväggar i Linux via vår guide [Hantera brandvägg](vserver-linux-firewall.md).

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

Skapa nu regeln för att tillåta Apache och kontrollera sedan att reglerna finns.
```
# Skapa en regel för att tillåta Apache
sudo ufw allow in "Apache Full"

# Kontrollera UFW-brandväggsreglerna
sudo ufw status
```

:::tip
Du kan se vilka profiler som finns tillgängliga genom att köra kommandot `ufw app list`. I exemplet ovan betyder `Apache Full` att både HTTP (port 80) och HTTPS (port 443) regler skapas.
:::

Du bör se `Apache` och `Apache (v6)` regler med `ALLOW`-åtgärder, vilket bekräftar att brandväggen är redo. Du bör också se andra regler som du tidigare har satt upp, inklusive SSH-regeln.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Med brandväggen öppen för Apache bör du nu säkerställa att Apache fungerar. Du kan göra detta genom att försöka nå din IP-adress i en webbläsare, så här: `http://[din_ipadress]`

Om det fungerar bör du se en standard välkomstsida. Om inte, kontrollera statusen för tjänsten med följande kommando: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Sätta upp MySQL

Nu installerar och sätter du upp en MySQL-server som kommer att fungera som din databas för att lagra data på ett relationsmässigt sätt. Installera den med följande kommando.
```
sudo apt install mysql-server
```

När detta är klart rekommenderas det att köra ett säkert installationsskript som ser till att din MySQL-serverinstans förblir säker. Detta är valfritt men starkt rekommenderat. Du kan köra detta med kommandot `sudo mysql_secure_installation`.

Detta tar dig igenom en interaktiv setup. Först kommer du att bli tillfrågad om lösenordsvalidering. Vi rekommenderar att välja `Y` för att säkerställa att endast säkra lösenord tillåts i framtiden och sedan välja antingen `MEDIUM` via `1` eller `STRONG` via `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Nästa fråga handlar om att ta bort `anonymous`-användaren och att förhindra root-inloggning på distans. För båda rekommenderar vi starkt att acceptera med `Y` av säkerhetsskäl. Detta säkerställer att testanvändaren tas bort och att master-root-användaren endast kan användas lokalt via SSH, vilket minskar risken.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Slutligen blir du tillfrågad om att ta bort `test`-databasen och ladda om privilegietabellerna. Återigen rekommenderar vi att acceptera med `Y` eftersom testtabellen inte behövs och du behöver ladda om privilegietabellen för att ändringarna ska träda i kraft.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Kontrollera nu om MySQL-databasen körs genom att försöka logga in med följande kommando: `sudo mysql -u root`. Om det lyckas bör du se ett välkomstmeddelande. Du kan avsluta med kommandot `quit` när du är klar.

### Sätta upp PHP

Den sista LAMP-komponenten är PHP och det är ganska enkelt att installera. Följande kommando installerar PHP tillsammans med en plugin för Apache och MySQL, för att låta Apache arbeta med PHP och PHP använda MySQL.
```
sudo apt install php libapache2-mod-php php-mysql
```

Bekräfta att installationen lyckades genom att kolla versionen. Om du ser en versionsutskrift betyder det att PHP fungerar korrekt.
```
php -v
```

:::tip PHP Extensions
För avancerade användningsfall kan du behöva extra PHP-tillägg för att få mer funktionalitet. Du kan se en lista på dessa genom att köra kommandot `apt search php- | less`.

Använd piltangenterna för att scrolla och tryck `Q` när du vill avsluta. För att installera ett tilläggspaket, använd helt enkelt apt install-kommandot så här. Du kan ange flera tillägg samtidigt, separerade med mellanslag för att snabba upp installationen.

```
sudo apt install [php_extension] [...]
```
:::

Vi rekommenderar att du justerar directory index för att säkerställa att `index.php` filer prioriteras över standard `.html`. Öppna filen med följande kommando.
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

I nano-editorn, ta bort `index.php` och flytta den till början av listan, så här:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Spara filen och avsluta nano med `CTRL + X`, följt av `Y` för att bekräfta och slutligen `ENTER`. Starta om Apache för att ändringen ska träda i kraft med `sudo systemctl restart apache2`.

### Skapa testwebbplats

När installationen av varje LAMP-komponent är klar, skapar vi nu en testwebbplats för att visa hur LAMP stacken fungerar tillsammans för att skapa en grym dynamisk webbplatslösning. Detta är helt valfritt, men det är bra för att förstå hur du kan använda dessa verktyg för att sätta upp dina egna webbplatser.

I det här exemplet skapar vi en liten att-göra-lista webbplats via PHP som hämtar och returnerar att-göra-poster. Dessa lagras i en MySQL-databastabell och serveras via Apache.

Vi kommer också att använda ett testdomännamn `zapdocs.example.com` genomgående, eftersom du i verkligheten troligtvis använder en domän. Du **måste** sätta upp en `A`-typ DNS-post för domänen som pekar på IP-adressen till din server. Om du behöver hjälp med detta, kolla vår guide [Domänposter](domain-records.md).

:::note
Du kan välja att inte använda en domän och ersätta alla förekomster av `[your_domain]` med ett vanligt namn. Då når du webbplatsen via IP-adressen. Observera dock att när du skapar virtual host-filen senare bör du ta bort `ServerName`-parametern.
:::

#### Sätta upp Apache

Vanligtvis lagras alla webbplatsfiler och data under `/var/www`-katalogen på webbservrar. Som standard har Apache vanligtvis en `html`-katalog som innehåller en standardwebbsida. För att hålla allt organiserat, särskilt när du hostar många webbplatser på en Apache-instans, rekommenderar vi att varje webbplats får en egen katalog eller mapp.

Du kan enkelt skapa en ny mapp i `/var/www/[your_domain]` för varje webbplatsdomän. I det här exemplet blir det `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Skapa nu en ny Apache virtual host-konfigurationsfil i `sites-available`-katalogen för denna domän och mapp.
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Använd mallen nedan och klistra in den i nano-editorn, byt ut `[your_domain]` mot den domän du använder.
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

Den här nya virtual host-filen hanterar port 80 (HTTP) förfrågningar och kollar om förfrågan matchar `ServerName` som anges, i det här fallet din domän. Den pekar också på att mappen `/var/www/[your_domain]` som du skapade tidigare ska användas för att servera filer.

Spara filen och avsluta nano med `CTRL + X`, följt av `Y` för att bekräfta och slutligen `ENTER`. Vi rekommenderar att du kör `sudo apache2ctl configtest` för att säkerställa att filen inte innehåller några syntaxfel.

Det sista steget för Apache-konfigurationen är att aktivera den nya virtual host med `a2ensite`.
```
sudo a2ensite [your_domain]
```

:::note Ingen domän används
Om du **inte** använder en domän, ta bort raden `ServerName` eller kommentera ut den genom att sätta ett `#` framför. Du måste också inaktivera standard virtual host med kommandot `sudo a2dissite 000-default`.
:::

Starta slutligen om Apache för att den nya virtual hosten ska börja gälla med följande kommando: `sudo systemctl restart apache2`.

#### Skapa webbplats

Nu när du har konfigurerat Apache via den nya virtual hosten och dokumentmappen är det dags att skapa själva webbplatsen som ska serveras. För tillfället är mappen tom, så inget kommer att visas. Vi skapar en liten att-göra-webbplats som nämnts tidigare för denna domän.

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

# Skapa en ny tabell för items i databasen
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
# Skapa dedikerad användare
# Byt ut [your_password] mot ditt eget lösenord
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Sätt privilegier för användaren (kopiera som en rad)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Ladda om privilegier
FLUSH PRIVILEGES;
```

När databasen är klar och användaren redo kan du avsluta MySQL-terminalen med kommandot `quit` när du är klar.

##### PHP-webbfiler

Den sista delen i exemplet är att sätta upp själva PHP-webbplatsfilen för att-göra-sidan. Detta görs genom en ny `index.php`-fil i `/var/www/[your_domain]`-katalogen som du skapade tidigare. Öppna nano-editorn för att skapa filen där.
```
sudo nano /var/www/[your_domain]/index.php
```

Nedan har vi förberett en enkel kodsnutt som du kan klistra in i nano-editorn för en grundläggande att-göra-sida som returnerar poster som lagras i databasen. Den första PHP-sektionen etablerar en MySQL-anslutning till din databas.

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

När du har klistrat in detta i nano-editorn, spara filen och avsluta nano med `CTRL + X`, följt av `Y` för att bekräfta och slutligen `ENTER`.

#### Testa webbplatsen

Du har nu framgångsrikt följt med och satt upp en test-att-göra-webbplats som använder alla delar av LAMP stacken!

Du bör nu kunna nå webbplatsen via domänen (med `http`/port 80) som du definierade tidigare i virtual host-filen, i det här exemplet `zapdocs.example.com`. Slutresultatet bör se ut ungefär så här:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Slutsats

Grattis, du har framgångsrikt installerat och satt upp LAMP stacken! Nästa steg rekommenderar vi **starkt** att du sätter upp en domän och ett **SSL-certifikat** för att säkerställa att data skickas säkert till dina webbplatser. Kolla in vår [Certbot-guide](dedicated-linux-certbot.md) med fokus på **Apache-plugin** och följ den interaktiva setupen för att snabbt och enkelt sätta upp ett certifikat för din valda domän.

Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />