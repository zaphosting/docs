---
id: vserver-linux-phpmyadmin
title: "VPS: Installatie van phpMyAdmin"
description: "Ontdek hoe je MySQL en MariaDB databases makkelijk beheert met de gebruiksvriendelijke webinterface van phpMyAdmin → Leer het nu"
sidebar_label: Installeer phpMyAdmin
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

phpMyAdmin is een gratis, web-based tool voor het beheren van MySQL en MariaDB databases. Het biedt een gebruiksvriendelijke interface waarmee je databases kunt aanmaken, bewerken, beheren en verwijderen zonder zelf SQL-commando’s te hoeven typen.

<InlineVoucher />

## Voorbereiding

Voordat je begint met de installatie, zorg dat je systeem up-to-date is. Eventuele updates en upgrades voer je uit met:

```
sudo apt update -y
sudo apt upgrade -y
```

Je moet ook zeker weten dat PHP al op je systeem geïnstalleerd is. Dit is essentieel voor het gebruik van phpMyAdmin. Wil je weten hoe je PHP installeert? Check dan onze [PHP Installatie](vserver-linux-php.md) gids.  
:::warning Ontbrekende PHP-pakketten
Als de benodigde PHP-pakketten ontbreken, kunnen de PHP-bestanden van phpMyAdmin niet correct verwerkt en weergegeven worden. 
:::

## Installatie

Als de voorbereiding klaar is, kan de installatie van de phpMyAdmin interface beginnen. Open eerst de map waarin je phpMyAdmin wilt installeren.  
Ga naar de juiste map met het commando `cd /usr/share`. Download daarna de nieuwste phpMyAdmin versie naar deze map met `wget`:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Als het `wget` commando niet gevonden wordt, kun je het installeren met `sudo apt install wget -y`. 
:::

Als de download klaar is, pak je het ZIP-bestand uit met:

```
unzip phpmyadmin.zip
```
:::warning
Als het `unzip` commando niet gevonden wordt, installeer het dan met `sudo apt install unzip -y`. 
:::

Hernoem daarna de uitgepakte map naar een simpelere naam, verwijder het ZIP-bestand en stel de juiste rechten in:

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Configuratie

### Webserver configuratiebestand
Nu moet phpMyAdmin toegevoegd worden aan de webserverconfiguratie. Maak hiervoor een nieuw configuratiebestand aan met `nano /etc/apache2/conf-available/phpmyadmin.conf` en vul deze met de volgende inhoud:

```
# phpMyAdmin Apache configuratie

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Webtoegang blokkeren voor beveiliging naar mappen die dat niet nodig hebben
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

Als je de Apache2 phpMyAdmin-config hebt ingevuld, sla je het bestand op en sluit je af met ***CTRL+X***, druk daarna op ***Y*** en bevestig met ***Enter***.

Activeer en laad het nieuwe configuratiebestand met deze commando’s:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Vereiste tijdelijke map aanmaken

Om phpMyAdmin goed te laten werken, moet er een tijdelijke map aangemaakt worden met de juiste rechten. Dit doe je zo:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Afronding

Gefeliciteerd, je hebt phpMyAdmin succesvol geïnstalleerd en geconfigureerd! Je kunt de webinterface bereiken via het IP-adres en pad van je server (http://IP-Address/phpmyadmin). Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂

<InlineVoucher />