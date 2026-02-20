---
id: dedicated-linux-wordpress
title: "WordPress installeren op een Linux-server - Start je eigen website of blog"
description: "Ontdek hoe je WordPress installeert op een Linux-server met de LAMP-stack om je website efficiënt te bouwen en beheren → Leer het nu"
sidebar_label: WordPress installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

WordPress is een populair contentmanagementsysteem voor het beheren en publiceren van websites. Tegenwoordig is WordPress uitgegroeid tot veel meer, zoals mailing, forums, webshops en nog veel meer. Dit wordt ondersteund door een actieve community die een sterk ecosysteem van plugins en templates heeft opgebouwd, waardoor het voor eindgebruikers super makkelijk is om alles op te zetten. In deze gids behandelen we het proces van het installeren van WordPress CMS op een Linux-server.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## Voorbereiding

Begin met verbinden met je server via SSH. Weet je niet hoe? Check dan onze [Eerste toegang (SSH)](dedicated-linux-ssh.md) gids.

:::info
In deze gids gebruiken we de Ubuntu distro, gecombineerd met Apache als webserver, MySQL voor de database en PHP als kerncomponent. Dit staat bekend als de LAMP-stack: Linux, Apache, MySQL en PHP.
:::

Als je bent ingelogd, start dan met het updaten van de pakketlijst.
```
sudo apt update
```

Daarna kun je alle benodigde dependencies installeren. Kopieer gewoon de hele onderstaande opdracht en plak deze om alles in één keer te installeren. Heb geduld, het kan even duren.
```
sudo apt install apache2 \
                 ghostscript \
                 libapache2-mod-php \
                 mysql-server \
                 php \
                 php-bcmath \
                 php-curl \
                 php-imagick \
                 php-intl \
                 php-json \
                 php-mbstring \
                 php-mysql \
                 php-xml \
                 php-zip
```

Met de dependencies geïnstalleerd, zijn er een paar kleine aanbevolen stappen om te zorgen dat alle kernonderdelen van de LAMP-stack goed werken.

### Apache & Firewall

Eerst moet je de firewall instellen zodat de Apache webserver verbinding kan maken met het internet en functioneel is. Het is belangrijk dat de juiste firewallregels worden aangemaakt zodat de webserver bereikbaar is vanaf het internet.

In dit voorbeeld gebruiken we de **UFW Firewall** omdat Apache hiervoor een geregistreerde applicatie heeft. Gebruik je een andere firewall? Zorg dan dat poort 80 (HTTP) openstaat. Meer over firewalls in Linux vind je in onze [Firewall beheren](vserver-linux-firewall.md) gids.

Zorg dat de UFW firewall aanstaat en dat er een regel voor SSH is.
```
# Maak een regel aan voor SSH
sudo ufw allow OpenSSH

# Zet UFW Firewall aan
sudo ufw enable
```

:::caution
Zorg dat je een regel voor SSH hebt als je UFW gebruikt! Zonder die regel kun je niet meer inloggen via SSH als je verbinding wegvalt!
:::

Maak nu de regel aan om Apache toe te staan en check daarna of de regels er staan.
```
# Regel om Apache toe te staan
sudo ufw allow in "Apache Full"

# Check de UFW firewall regels
sudo ufw status
```

:::tip
Je kunt zien welke profielen beschikbaar zijn met `ufw app list`. In het voorbeeld hierboven zorgt `Apache Full` ervoor dat zowel HTTP (poort 80) als HTTPS (poort 443) openstaan.
:::

Je zou regels moeten zien voor `Apache` en `Apache (v6)` met de actie `ALLOW`, wat betekent dat de firewall klaar is. Ook zie je andere regels die je eerder hebt ingesteld, inclusief die voor SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Met de firewall open voor Apache, check je nu of Apache werkt. Probeer je IP-adres te openen in een browser: `http://[jouw_ipadres]`

Als het werkt, zie je een standaard welkomstpagina. Zo niet, check dan de status van de service met: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL Setup

De volgende stap is de eerste setup van MySQL. Het is aan te raden om het beveiligingsscript te draaien, zodat je MySQL-server veilig blijft. Dit is optioneel maar sterk aanbevolen. Voer uit met `sudo mysql_secure_installation`.

Je doorloopt een interactieve setup. Eerst wordt gevraagd naar wachtwoordvalidatie. Kies `Y` om alleen veilige wachtwoorden toe te staan en selecteer `MEDIUM` met `1` of `STRONG` met `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Daarna wordt gevraagd om de `anonymous` gebruiker te verwijderen en root-login op afstand uit te schakelen. We raden aan dit met `Y` te accepteren voor betere beveiliging. Zo wordt de testgebruiker verwijderd en kan root alleen lokaal via SSH inloggen, wat veiliger is.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Tot slot wordt gevraagd om de `test` database te verwijderen en de privilege-tabellen te herladen. Ook dit raden we aan met `Y` te accepteren, want de testdatabase is niet nodig en privileges moeten worden vernieuwd.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Check nu of MySQL draait door in te loggen met: `sudo mysql -u root`. Als het lukt, zie je een welkombericht. Verlaat met `quit`.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### PHP testen

Tot slot check je of PHP werkt. Maak een `info.php` bestand aan in de Apache `/var/www/html/` map met de volgende inhoud om `phpinfo()` uit te voeren.
```
# Open nano editor voor het nieuwe bestand
nano /var/www/html/info.php

# Plak deze inhoud in de editor
<?php
phpinfo();
?>
```

Sla op met `CTRL+X`, dan `Y` en `Enter`.

Ga nu naar deze URL, die een PHP info-pagina moet tonen als alles werkt:
```
http://[jouw_ipadres]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Met de kern van de LAMP-stack getest en werkend, ben je klaar voor de WordPress installatie.

## Installatie

De WordPress installatie bestaat uit drie delen: eerst een MySQL database aanmaken, daarna WordPress installeren en tot slot de configuratie via de setup wizard.

### MySQL Database

Begin met het aanmaken van een nieuwe MySQL database. Dit is belangrijk omdat je deze gegevens straks nodig hebt in de WordPress setup wizard. We raden aan onze voorbeelden te gebruiken.

Kopieer de volgende commando’s om de database, tabellen en gebruiker aan te maken.
```
# Inloggen op MySQL
sudo mysql -u root

# Database aanmaken
CREATE DATABASE wordpress;

# Maak een dedicated wordpress gebruiker aan
# Vervang [your_password] door je eigen wachtwoord
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# Geef rechten aan de gebruiker (alles in één keer kopiëren)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Herlaad de privileges
FLUSH PRIVILEGES;
```

Als je klaar bent, verlaat je MySQL met `quit`. Je bent nu klaar om WordPress te installeren.

### WordPress installeren

Voor de WordPress installatie raden we aan om de officiële release van **wordpress.org** te gebruiken in plaats van het APT-pakket, omdat WordPress dit aanbeveelt om problemen te voorkomen.

Download de nieuwste versie met dit commando, die wordt opgeslagen in de tijdelijke map.
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Pak het archief uit, dit levert een `wordpress` map met alle bestanden.
```
tar -xvf latest.tar.gz
```

Kopieer de map naar de Apache `/var/www/html/` map zodat alles via het web bereikbaar is. Voer deze commando’s uit om te kopiëren, een `uploads` map aan te maken en rechten goed te zetten zodat de `www-data` groep toegang heeft.
```
# Kopieer wordpress map en pas eigenaar aan
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Maak uploads map aan
mkdir /var/www/html/wordpress/wp-content/uploads

# Pas bestandsrechten aan
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

WordPress is nu geïnstalleerd. Open de setup wizard via: `http://[jouw_ipadres]/wordpress`

### Setup Wizard

In de setup wizard configureer je WordPress, de laatste stap van de installatie. Eerst kies je je taal.

Daarna vul je de databasegegevens in. Die heb je net aangemaakt, dus gebruik dezelfde gegevens. Als je onze voorbeelden hebt gevolgd, vul je dit in, waarbij je `[your_password]` vervangt door je eigen wachtwoord.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Na deze stap start je de installatie.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

Op de volgende pagina vul je info in zoals de sitetitel, e-mailadres, gebruikersnaam en wachtwoord voor de hoofd WordPress account. Je kunt ook kiezen of zoekmachines je site mogen indexeren of niet.

:::tip
Kies een sterk wachtwoord en sla je inloggegevens goed op, zodat je niet buitengesloten raakt!
:::

Klik op **WordPress installeren** om de installatie af te ronden.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Je komt op een succespagina die je doorstuurt naar de **Inloggen** pagina. Klik hier en log in met je gegevens om voor het eerst in je WordPress dashboard te komen!

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

En zo, na succesvol inloggen, sta je in je WordPress dashboard met een volledige installatie.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Conclusie

Gefeliciteerd, je hebt WordPress succesvol geïnstalleerd en geconfigureerd! Als volgende stap raden we **sterk aan** om een domein en een **SSL-certificaat** in te stellen, zodat data veilig wordt verzonden en je WordPress dashboard makkelijker te bereiken is. Bekijk onze [Certbot gids](dedicated-linux-certbot.md) met focus op de **Apache Plugin** en volg de interactieve setup om snel een certificaat voor je domein te regelen.

Voor verdere verdieping en uitbreidingen raden we je aan om onze [WordPress Plugins](webspace-wordpress-plugins.md) en [WordPress Elementor](webspace-wordpress-elementor.md) gidsen te bekijken. Hier leer je hoe je plugins installeert en werkt met Elementor, een populaire en gebruiksvriendelijke page builder.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, we staan dagelijks voor je klaar! 🙂