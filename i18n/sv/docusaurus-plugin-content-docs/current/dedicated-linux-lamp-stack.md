---
id: dedicated-linux-lamp-stack
title: "Dedikerad Server: Installera LAMP-stack - Linux, Apache, MySQL, PHP"
description: "Lär dig hur du snabbt och smidigt sätter upp en LAMP-stack för att hosta dynamiska PHP-webbplatser på Linux-servrar → Läs mer nu"
sidebar_label: Web LAMP-stack
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

**LAMP**-stacken är en populär samling öppen källkodsprogram som installeras tillsammans för att enkelt kunna hosta dynamiska webbplatser, med särskilt fokus på PHP-webbplatser och appar. Akronymen står för: **L**inux som operativsystem, **A**pache som webbserver, **M**ySQL som databas och slutligen **P**HP för bearbetning. I den här guiden går vi igenom hur du sätter upp en LAMP-stack på en Linux Dedikerad Server, med en detaljerad genomgång och exempel på hur du skapar en att-göra-lista-webbplats.

## Förberedelser

Börja med att ansluta till din server via SSH. Om du inte vet hur man gör detta, kolla in vår guide för [Initial access (SSH)](vserver-linux-ssh.md).

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

Installationen delas enkelt upp i varje kärnkomponent i LAMP, med start från Apache-webbservern, följt av MySQL-databasen och slutligen PHP. Under installationen sätter vi upp en testwebbplats skriven i PHP som kommer att använda MySQL-databasen. Varje webbförfrågan kommer sedan att bearbetas och serveras via Apache.

### Installera Apache

Apache är webbservern som hanterar inkommande webbförfrågningar och levererar svar. Installera den med följande kommando:
```
sudo apt install apache2
```

När installationen är klar bör du se till att rätt brandväggsregler skapas så att webbservern är tillgänglig från internet. I det här exemplet använder vi **UFW-brandväggen** eftersom Apache har en registrerad applikation för den.

Om du använder en annan brandvägg, se till att port 80 (HTTP) är tillåten genom brandväggen. Du kan läsa mer om brandväggar i Linux i vår guide [Hantera brandvägg](vserver-linux-firewall.md).

Se till att UFW-brandväggen är aktiverad och att en regel för SSH finns.
```
# Skapa regel för att tillåta SSH
sudo ufw allow OpenSSH

# Aktivera UFW-brandväggen
sudo ufw enable
```

:::caution
Se till att du har en regel för SSH om du använder UFW-brandväggen! Om du inte har det kommer du **inte** kunna SSH:a in i servern igen om du tappar anslutningen till din nuvarande session!
:::

Skapa nu regeln för att tillåta Apache och kontrollera att reglerna finns.
```
# Skapa regel för att tillåta Apache
sudo ufw allow in "Apache Full"

# Kontrollera UFW-brandväggsregler
sudo ufw status
```

:::tip
Du kan se vilka profiler som finns tillgängliga genom att köra kommandot `ufw app list`. I exemplet ovan betyder `Apache Full` att både HTTP (port 80) och HTTPS (port 443) regler skapas.
:::

Du bör se `Apache` och `Apache (v6)` regler med `ALLOW`-status, vilket bekräftar att brandväggen är redo. Du bör också se andra regler du tidigare skapat, inklusive SSH-regeln.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

När brandväggen är öppen för Apache bör du kontrollera att Apache fungerar. Testa att nå din IP-adress i en webbläsare, så här: `http://[din_ipadress]`

Om allt fungerar ska du se en standard välkomstsida. Om inte, kolla status på tjänsten med kommandot: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Installera MySQL

Nu installerar och konfigurerar du en MySQL-server som kommer agera som din databas för att lagra data på ett relationsmässigt sätt. Installera med följande kommando:
```
sudo apt install mysql-server
```

När installationen är klar rekommenderas det att köra ett säkerhetsinstallationsskript som ser till att din MySQL-server är säker. Detta är valfritt men starkt rekommenderat. Kör det med kommandot `sudo mysql_secure_installation`.

Du kommer att guidas genom en interaktiv setup. Först blir du tillfrågad om lösenordsvalidering. Vi rekommenderar att du väljer `Y` för att säkerställa att endast säkra lösenord tillåts i framtiden, och sedan väljer antingen `MEDIUM` via `1` eller `STRONG` via `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Nästa steg är att ta bort `anonymous`-användaren och förhindra root-inloggning på distans. Vi rekommenderar starkt att acceptera båda med `Y` för säkerhetens skull. Detta tar bort testanvändaren och ser till att root-användaren bara kan användas lokalt via SSH, vilket minskar risken.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Slutligen blir du tillfrågad om att ta bort `test`-databasen och ladda om privilegietabellerna. Vi rekommenderar att acceptera med `Y` eftersom testtabellen inte behövs och privilegietabellerna måste laddas om för att ändringar ska träda i kraft.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Kolla nu om MySQL-databasen körs genom att försöka logga in med kommandot: `sudo mysql -u root`. Om det lyckas bör du se ett välkomstmeddelande. Avsluta med kommandot `quit` när du är klar.

### Installera PHP

Den sista LAMP-komponenten är PHP och det är enkelt att installera. Följande kommando installerar PHP tillsammans med en plugin för Apache och MySQL, så att Apache kan hantera PHP och PHP kan använda MySQL.
```
sudo apt install php libapache2-mod-php php-mysql
```

Bekräfta att installationen lyckades genom att kolla versionen. Om du får en versionsutskrift betyder det att PHP fungerar som det ska.
```
php -v
```

:::tip PHP Extensions
För mer avancerade användningsfall kan du behöva extra PHP-tillägg för att få mer funktionalitet. Du kan se en lista på dessa genom att köra `apt search php- | less`.

Använd piltangenterna för att scrolla och tryck `Q` för att avsluta. För att installera ett tillägg, använd helt enkelt `apt install` följt av tilläggets namn. Du kan installera flera tillägg samtidigt genom att separera dem med mellanslag.

```
sudo apt install [php_extension] [...]
```
:::

Vi rekommenderar att du ändrar katalogindexet så att `index.php` prioriteras före standard `.html`. Öppna filen med följande kommando:
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

I nano-editorn, ta bort `index.php` och flytta den till början av listan, så här:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Spara filen och avsluta nano med `CTRL + X`, tryck `Y` för att bekräfta och sedan `ENTER`. Starta om Apache för att ändringen ska träda i kraft med `sudo systemctl restart apache2`.

### Skapa testwebbplats

Nu när alla LAMP-komponenter är installerade ska vi skapa en testwebbplats för att visa hur LAMP-stacken fungerar tillsammans för att skapa en grym dynamisk webbplats. Detta är helt frivilligt men bra för att förstå hur du kan använda verktygen för att sätta upp egna webbplatser.

I det här exemplet skapar vi en liten att-göra-lista via PHP som hämtar och visar att-göra-poster. Dessa lagras i en MySQL-databastabell och serveras via Apache.

Vi använder ett testdomännamn `zapdocs.example.com` genom hela guiden, eftersom du i verkligheten troligen använder en riktig domän. Du **måste** skapa en DNS A-post för domänen som pekar på din servers IP-adress. Behöver du hjälp med detta, kolla vår guide [Domänposter](domain-records.md).

:::note
Du kan välja att inte använda en domän och ersätta alla `[your_domain]` med ett vanligt namn. Då når du webbplatsen via IP-adressen. Men när du skapar virtual host-filen senare bör du ta bort `ServerName`-parametern.
:::

#### Konfigurera Apache

Vanligtvis lagras alla webbplatsfiler under `/var/www`-katalogen. Som standard har Apache en `html`-mapp med en standardwebbsida. För att hålla ordning, särskilt om du hostar flera webbplatser på samma Apache-instans, rekommenderar vi att varje webbplats får sin egen mapp.

Skapa en ny mapp i `/var/www/[your_domain]` för varje webbplatsdomän. I vårt exempel blir det `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Skapa sedan en ny Apache virtual host-konfigurationsfil i `sites-available` för denna domän och mapp.
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Kopiera in mallen nedan i nano och ersätt `[your_domain]` med din domän.
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

Denna virtual host-fil hanterar port 80 (HTTP) och kollar om förfrågan matchar `ServerName` (din domän). Den pekar också på mappen `/var/www/[your_domain]` som ska användas för att servera filer.

Spara och avsluta nano med `CTRL + X`, `Y` och `ENTER`. Vi rekommenderar att du kör `sudo apache2ctl configtest` för att säkerställa att filen inte innehåller syntaxfel.

Slutsteget är att aktivera den nya virtual host med `a2ensite`.
```
sudo a2ensite [your_domain]
```

:::note Ingen domän används
Om du **inte** använder en domän, ta bort eller kommentera ut `ServerName`-raden med `#`. Du måste också inaktivera standardvirtual host med `sudo a2dissite 000-default`.
:::

Starta om Apache för att den nya virtual hosten ska börja gälla:
```
sudo systemctl restart apache2
```

#### Skapa webbplats

Nu när Apache är konfigurerat med den nya virtual hosten och dokumentmappen är klar, är det dags att skapa själva webbplatsen. Mappen är tom just nu, så inget kommer att visas. Vi skapar en enkel att-göra-webbplats som tidigare nämnts.

##### Förbered databasen

Börja med att skapa en ny databas och tabell för att lagra varje lista. Logga in på MySQL-servern:
```
sudo mysql -u root
```

Skapa en ny databas `todowebsite` och en tabell `todoitems` i den:
```
# Skapa databas
CREATE DATABASE todowebsite;

# Använd databasen
USE todowebsite;

# Skapa tabell för items
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Skapa några exempelposter:
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Skapa en dedikerad användare `todo` för webbplatsen:
```
# Skapa användare
# Byt ut [your_password] mot ditt lösenord
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Ge rättigheter (kopiera som en rad)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Ladda om privilegier
FLUSH PRIVILEGES;
```

När databasen och användaren är klara, avsluta MySQL-terminalen med `quit`.

##### PHP-webbplatsfiler

Sista steget är att skapa PHP-filen för att-göra-sidan. Skapa en ny `index.php` i `/var/www/[your_domain]`:
```
sudo nano /var/www/[your_domain]/index.php
```

Nedan finns en enkel kodsnutt för en grundläggande att-göra-sida som hämtar poster från databasen. Den första PHP-delen skapar en MySQL-anslutning.

:::important
Glöm inte att byta ut `[your_password]` mot lösenordet du satte för `todo`-användaren tidigare.
:::

HTML-delen skapar en lista och loopar igenom resultaten.

```
<?php
// Förbered MySQL-anslutning
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Skapa anslutning
$conn = new mysqli($servername, $username, $password, $dbname);

// Kolla om anslutningen lyckades, annars visa fel
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Kör SQL-fråga för att hämta poster och spara resultatet
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
      <p>För vår grymma ZAP-Hosting-guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
      <ul>
          <?php
          // Kolla om det finns resultat
          if ($result->num_rows > 0) {
              // Loopa igenom varje post i resultatet
              foreach ($result as $entry) {
                  echo "<li>";
                  // Visa namn och använd htmlspecialchars för att undvika XSS
                  echo htmlspecialchars($entry["name"]);

                  // Visa status för slutfört
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // Visa skapandedatum
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Om inga poster finns, visa meddelande
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// Stäng databasanslutning
$conn->close();
?>
```

Klistra in detta i nano, spara och avsluta med `CTRL + X`, `Y` och `ENTER`.

#### Testa webbplatsen

Du har nu följt guiden och satt upp en test-att-göra-webbplats som använder hela LAMP-stacken!

Du ska nu kunna nå webbplatsen via domänen (med `http`/port 80) som du definierade i virtual host-filen, i vårt exempel `zapdocs.example.com`. Resultatet bör se ut ungefär så här:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Avslutning

Grattis, du har nu installerat och konfigurerat LAMP-stacken! Nästa steg är att **starkt rekommendera** att du sätter upp en domän och ett **SSL-certifikat** för att säkerställa att data skickas säkert till dina webbplatser. Kolla in vår [Certbot-guide](dedicated-linux-certbot.md) med fokus på **Apache-plugin** och följ den interaktiva installationen för att snabbt och enkelt få ett certifikat för din domän.

Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂