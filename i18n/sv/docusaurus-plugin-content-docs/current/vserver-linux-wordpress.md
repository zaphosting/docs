---
id: vserver-linux-wordpress
title: "VPS: Installation av WordPress"
description: "Upptäck hur du sätter upp WordPress på en Linux-server med LAMP-stack för en kraftfull och flexibel webbplatslösning → Lär dig mer nu"
sidebar_label: Installera WordPress
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

WordPress är ett populärt webbpubliceringssystem som används för att hantera och publicera webbplatser. Idag har WordPress utvecklats till att omfatta områden som e-post, forum, butiker och mycket mer. Detta stöds av en aktiv community som byggt upp ett starkt ekosystem av plugins och teman som gör det enkelt för slutanvändare att sätta upp vad som helst. I den här guiden går vi igenom hur du installerar WordPress CMS på en Linux-server.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din server via SSH. Om du inte vet hur man gör detta, kolla in vår guide för [Initial access (SSH)](vserver-linux-ssh.md).

:::info
I den här guiden använder vi Ubuntu som distro, tillsammans med Apache som webbserver, MySQL för databasen och PHP som kärnberoende. Detta kallas LAMP-stack: Linux, Apache, MySQL och PHP.
:::

När du är inloggad, börja med att köra uppdateringskommandot.
```
sudo apt update
```

Därefter kan du installera alla nödvändiga beroenden. Kopiera hela kommandot nedan och klistra in det för att installera allt på en gång. Ha tålamod, det kan ta lite tid.
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

När beroendena är installerade finns några små rekommenderade steg för att säkerställa att alla kärnkomponenter i LAMP-stacken fungerar som de ska.

### Apache & brandvägg

Först behöver du konfigurera brandväggen så att Apache-webbservern kan kommunicera med internet och säkerställa att den fungerar. Det är viktigt att rätt brandväggsregler skapas så att webbservern är åtkomlig från internet.

I det här exemplet använder vi **UFW-brandväggen** eftersom Apache har en registrerad profil för den. Om du använder en annan brandvägg, se till att tillåta port 80 (HTTP) genom brandväggen. Du kan läsa mer om brandväggar i Linux i vår guide [Hantera brandvägg](vserver-linux-firewall.md).

Se till att UFW är aktiverad och att en regel för SSH finns.
```
# Skapa regel för att tillåta SSH
sudo ufw allow OpenSSH

# Aktivera UFW-brandväggen
sudo ufw enable
```

:::caution
Se till att du har en regel för SSH om du använder UFW! Om du inte har det kommer du **inte** kunna ansluta via SSH igen om du tappar din nuvarande session!
:::

Skapa nu regeln för att tillåta Apache och kontrollera att reglerna finns.
```
# Skapa regel för att tillåta Apache
sudo ufw allow in "Apache Full"

# Kontrollera UFW-reglerna
sudo ufw status
```

:::tip
Du kan se vilka profiler som finns tillgängliga genom att köra `ufw app list`. I exemplet ovan betyder `Apache Full` att både HTTP (port 80) och HTTPS (port 443) tillåts.
:::

Du bör se regler för `Apache` och `Apache (v6)` med `ALLOW`-status, vilket bekräftar att brandväggen är redo. Du bör också se andra regler du tidigare skapat, inklusive SSH-regeln.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

När brandväggen är öppen för Apache, kontrollera att Apache fungerar. Testa att öppna din IP-adress i en webbläsare: `http://[din_ipadress]`

Om allt fungerar ska du se en standard välkomstsida. Om inte, kolla status på tjänsten med kommandot: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL-setup

Nästa steg är att göra en första konfiguration av MySQL. Det rekommenderas att köra ett säkerhetsinstallationsskript som ser till att din MySQL-server är säker. Detta är frivilligt men starkt rekommenderat. Kör kommandot `sudo mysql_secure_installation`.

Du kommer gå igenom en interaktiv setup. Först frågas du om lösenordsvalidering. Vi rekommenderar att välja `Y` för att säkerställa att bara säkra lösenord accepteras framöver, och sedan välja antingen `MEDIUM` med `1` eller `STRONG` med `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Sedan frågas du om att ta bort `anonymous`-användaren och att förhindra root-inloggning på distans. Vi rekommenderar starkt att acceptera båda med `Y` för säkerhetens skull. Det tar bort testanvändaren och ser till att root bara kan användas lokalt via SSH, vilket minskar risken.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Slutligen frågas du om att ta bort `test`-databasen och ladda om privilegietabellerna. Acceptera med `Y` eftersom testtabellen inte behövs och privilegietabellerna måste laddas om för att ändringar ska gälla.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Kolla nu att MySQL-databasen körs genom att försöka logga in med kommandot: `sudo mysql -u root`. Om det lyckas ser du ett välkomstmeddelande. Avsluta med kommandot `quit` när du är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### Testa PHP

Slutligen bör du säkerställa att PHP fungerar som det ska. Skapa en fil `info.php` i din Apache-katalog `/var/www/html/` med PHP-kod som kör `phpinfo()`:
```
# Öppna nano-editor för filen
nano /var/www/html/info.php

# Klistra in följande innehåll
<?php
phpinfo();
?>
```

Spara filen med `CTRL+X`, tryck `Y` och sedan `Enter` för att bekräfta.

Öppna sedan följande URL i webbläsaren, den ska visa en PHP-info-sida om allt fungerar:
```
http://[din_ipadress]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

När LAMP-stacken är testad och fungerar är du redo att gå vidare med själva installationen av WordPress.

## Installation

WordPress-installationen delas upp i tre steg: först förbereda MySQL-databasen, sedan installera WordPress och till sist konfigurera via installationsguiden.

### MySQL-databas

Börja med att skapa en ny MySQL-databas. Det är viktigt att komma ihåg dessa uppgifter då du kommer behöva dem i WordPress installationsguide senare. Vi rekommenderar att du använder våra exempel.

Kopiera följande kommandon för att skapa databas, tabeller och användare:
```
# Logga in i MySQL
sudo mysql -u root

# Skapa databas
CREATE DATABASE wordpress;

# Skapa dedikerad wordpress-användare
# Byt ut [your_password] mot ditt eget lösenord
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# Ge rättigheter till användaren (kopiera som en rad)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Ladda om privilegietabellerna
FLUSH PRIVILEGES;
```

När databasen och användaren är skapade, avsluta med `quit`. Nu är du redo att installera WordPress.

### Installera WordPress

För själva WordPress-installationen rekommenderar vi att använda den officiella releasen från **wordpress.org** istället för APT-paketet, eftersom WordPress själva rekommenderar detta för att undvika problem.

Ladda ner senaste versionen med följande kommando som sparar filen i temporärmappen:
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Packa upp arkivet, vilket skapar en mapp `wordpress` med alla filer:
```
tar -xvf latest.tar.gz
```

Kopiera sedan mappen till Apache-katalogen `/var/www/html/` för att göra den tillgänglig via webben. Kör följande kommandon som kopierar mappen, skapar en `uploads`-mapp och sätter rättigheter så att webbserverns grupp `www-data` har åtkomst:
```
# Kopiera wordpress-mappen och ändra ägarskap
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Skapa uploads-mapp
mkdir /var/www/html/wordpress/wp-content/uploads

# Sätt filrättigheter
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

Nu är WordPress installerat. Öppna installationsguiden via: `http://[din_ipadress]/wordpress`

### Installationsguiden

I guiden kan du nu konfigurera WordPress, sista steget i installationen. Först väljer du språk.

Sedan anger du databasinställningarna. Du har redan förberett detta i MySQL, så använd samma uppgifter här. Om du följt våra exempel fyller du i enligt nedan, byt ut `[your_password]` mot lösenordet du valde tidigare.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

När detta är klart får du möjlighet att starta installationen, sista steget i processen.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

På nästa sida fyller du i information som webbplatsens titel, e-postadress, användarnamn och lösenord för WordPress admin-kontot. Du kan också välja om sökmotorer ska indexera din sida eller inte.

:::tip
Välj ett starkt lösenord och spara dina inloggningsuppgifter så du inte tappar åtkomst till WordPress-panelen!
:::

När du är redo klickar du på **Install WordPress** för att slutföra installationen.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Du kommer till en bekräftelsesida som sedan leder dig till **Logga in**-sidan. Klicka där och logga in med dina uppgifter för första gången!

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

Klart! Efter inloggning är du inne i din WordPress-panel med en fullständig installation.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Avslutning

Grattis, du har nu installerat och konfigurerat WordPress! Nästa steg är att **starkt rekommendera** att du sätter upp en domän och ett **SSL-certifikat** för att säkra datatrafiken och göra WordPress-panelen enklare att nå. Kolla in vår [Certbot-guide](vserver-linux-certbot.md) med fokus på **Apache-plugin** och följ den interaktiva guiden för att snabbt och enkelt fixa certifikat för din domän.

För mer läsning och vidare konfiguration rekommenderar vi att du kollar in våra guider för [WordPress-plugins](webspace-wordpress-plugins.md) och [WordPress Elementor](webspace-wordpress-elementor.md) som visar hur du installerar plugins och använder den populära och användarvänliga sidbyggaren Elementor.

Har du frågor eller behöver hjälp? Tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />