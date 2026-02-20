---
id: vserver-linux-php
title: 'PHP installeren op een Linux Server - Power je Dynamische Webapps'
description: "Leer hoe je PHP installeert op je Linux-server voor webontwikkeling en optimaliseer je setup voor Apache of standalone gebruik → Ontdek het nu"
sidebar_label: PHP Installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

PHP is een populaire programmeertaal voor algemene doeleinden en wordt veel gebruikt in webontwikkeling. In deze gids leggen we uit hoe je PHP op je server installeert.

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je server via SSH. Weet je niet hoe? Check dan onze [Eerste toegang (SSH)](vserver-linux-ssh.md) handleiding.

Eenmaal ingelogd, is het aan te raden om de update-commando’s van je besturingssysteem uit te voeren om je server veilig en up-to-date te houden met de nieuwste features.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Installatie

Er zijn twee hoofdmanieren om PHP op je Linux-server te installeren: standalone of als extra pakket voor Apache. Gebruik je je eigen webserver die geen Apache is, of wil je PHP voor algemene taken? Dan raden we de standalone methode aan. Gebruik je Apache als webserver? Installeer PHP dan als extra pakket via de Apache-methode.

## Standalone

Gebruik het volgende commando om de nieuwste PHP-versie te installeren. Wil je een specifieke versie? Gebruik dan de `-y` vlag gevolgd door de versie.
```
# Nieuwste versie
sudo apt install php

# Specifieke versie (bijv. php7.4)
sudo apt -y install php[versie]
```

Check of de installatie gelukt is met `php -v`. Gefeliciteerd, PHP staat nu op je server! We raden je aan om ook de **PHP Extensions** sectie te lezen zodat je de extensies kunt installeren die je nodig hebt.

## Met Apache

Begin met het installeren van Apache als dat nog niet gedaan is. Dit doe je met:
```
sudo apt install apache2
```

Zorg daarna dat de juiste firewallregels zijn ingesteld zodat je webserver bereikbaar is vanaf het internet. In dit voorbeeld gebruiken we de **UFW Firewall** omdat Apache daar een geregistreerde applicatie voor heeft. Gebruik je een andere firewall? Zorg dan dat poort 80 (HTTP) openstaat.
```
sudo ufw allow in "Apache"
```

Je server is nu bereikbaar. Test dit door `http://[jouw_serverip]` in je browser te typen.

Met Apache klaar, installeer je PHP voor Apache met:
```
sudo apt install php libapache2-mod-php
```

Controleer de installatie met `php -v`. PHP draait nu samen met je Apache webserver. Vergeet niet de **PHP Extensions** sectie te checken om de extensies te installeren die jij nodig hebt.

## PHP Extensions

PHP heeft een grote selectie optionele extensies die je kunt installeren om extra functionaliteit toe te voegen. Wil je zien welke er zijn? Gebruik dan dit commando, dat de zoekresultaten via `less` toont zodat je makkelijk kunt scrollen.

```
apt search php- | less
```

Gebruik de pijltjestoetsen om te scrollen en druk op `Q` om te stoppen. Om een extensie te installeren, gebruik je simpelweg:
```
sudo apt install [php_extensie] [...]
```
Je kunt meerdere extensies tegelijk installeren door ze met een spatie te scheiden, zo gaat het sneller.

## Afsluiting

Je hebt PHP succesvol geïnstalleerd op je Linux-server. Heb je nog vragen of hulp nodig? Ons supportteam staat dagelijks voor je klaar! 🙂

<InlineVoucher />