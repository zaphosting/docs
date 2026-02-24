---
id: dedicated-linux-phpmyadmin
title: "phpMyAdmin installeren op een Linux Server - Beheer je Databases via Webinterface"
description: "Ontdek hoe je MySQL en MariaDB databases eenvoudig beheert met de webinterface van phpMyAdmin voor efficiënt databasebeheer → Leer het nu"
sidebar_label: phpMyAdmin Installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

phpMyAdmin is een gratis, web-based tool voor het beheren van MySQL en MariaDB databases. Het biedt een gebruiksvriendelijke interface waarmee je databases kunt aanmaken, bewerken, beheren en verwijderen zonder handmatig SQL-commando’s te hoeven typen.

## Voorbereiding

Voordat je begint met de installatie, zorg dat je systeem up-to-date is. Eventuele updates en upgrades voer je uit met:

```
sudo apt update -y
sudo apt upgrade -y
```

Zorg er ook voor dat PHP al geïnstalleerd is op je systeem. Dit is essentieel voor het gebruik van phpMyAdmin. Wil je weten hoe je PHP installeert? Check dan onze [PHP Installatiegids](vserver-linux-php.md).

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
Als het commando `wget` niet gevonden wordt, installeer je het met `sudo apt install wget -y`.
:::

Als de download klaar is, pak je het ZIP-bestand uit met:

```
unzip phpmyadmin.zip
```
:::warning
Als het commando `unzip` niet gevonden wordt, installeer je het met `sudo apt install unzip -y`.
:::

Hernoem daarna de uitgepakte map naar een simpelere naam, verwijder het ZIP-bestand en stel de juiste permissies in:

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Configuratie

### Webserver configuratiebestand

Nu moet phpMyAdmin toegevoegd worden aan de webserverconfiguratie. Maak een nieuw configuratiebestand aan met `nano /etc/apache2/conf-available/phpmyadmin.conf` en vul het met de volgende inhoud:

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

Sla het bestand op en sluit af met `CTRL+X`, druk op `Y` en bevestig met `Enter`.

Activeer en laad het nieuwe configuratiebestand met:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Vereiste tijdelijke map aanmaken

Om phpMyAdmin goed te laten werken, moet er een tijdelijke map aangemaakt worden met de juiste permissies. Dit doe je met:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Afronding

Gefeliciteerd, je hebt phpMyAdmin succesvol geïnstalleerd en geconfigureerd! Je kunt de webinterface bereiken via het IP-adres en pad van je server (http://IP-Address/phpmyadmin). Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂