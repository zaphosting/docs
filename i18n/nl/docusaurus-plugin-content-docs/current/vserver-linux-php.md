---
id: vserver-linux-php
title: 'VPS: PHP Installeren'
description: "Leer hoe je PHP installeert op je Linux-server voor webontwikkeling en optimaliseer je setup voor Apache of standalone gebruik → Ontdek het nu"
sidebar_label: PHP Installeren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

PHP is een populaire programmeertaal voor algemene doeleinden met veel gebruik in webontwikkeling. In deze gids leggen we uit hoe je PHP op je server installeert.

<InlineVoucher />

## Voorbereiding

Begin met verbinden met je server via SSH. Als je niet weet hoe dat moet, bekijk dan onze [Eerste toegang (SSH)](vserver-linux-ssh.md) handleiding.

Eenmaal ingelogd, is het aan te raden om het update-commando te draaien dat bij jouw besturingssysteem hoort, zodat je server veilig en up-to-date blijft met de nieuwste features.

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

Er zijn twee hoofdmanieren om PHP op je Linux-server te installeren: standalone of als extra pakket voor Apache. Gebruik je je eigen webserver die geen Apache is, of wil je PHP voor algemene taken gebruiken? Dan raden we de standalone methode aan. Voor gebruik met de Apache webserver installeer je PHP als extra pakket via de Apache-methode.

## Standalone

Gebruik het volgende commando om de nieuwste PHP-versie te installeren. Wil je een specifieke versie installeren, gebruik dan de `-y` vlag gevolgd door de versie.
```
# Nieuwste versie
sudo apt install php

# Specifieke versie (bijv. php7.4)
sudo apt -y install php[versie]
```

Controleer of de installatie gelukt is met het commando `php -v`. Je hebt nu succesvol PHP op je server geïnstalleerd. We raden aan om de sectie **PHP Extensions** te lezen om te zorgen dat je alle benodigde extensies installeert.

## Met Apache

Begin met het installeren van Apache op je server als dat nog niet gedaan is. Dit doe je met het volgende commando:
```
sudo apt install apache2
```

Zodra Apache geïnstalleerd is, moet je zorgen dat de juiste firewallregels zijn ingesteld zodat de webserver bereikbaar is via internet. In dit voorbeeld gebruiken we de **UFW Firewall**, omdat Apache hiervoor een geregistreerde applicatie heeft. Gebruik je een andere firewall? Zorg dan dat poort 80 (HTTP) openstaat.
```
sudo ufw allow in "Apache"
```

Je server is nu bereikbaar. Test dit door `http://[jouw_serverip]` in een browser te openen.

Met Apache klaar, installeer je het PHP-pakket voor Apache met dit commando:
```
sudo apt install php libapache2-mod-php
```

Controleer de installatie met `php -v`. Je hebt nu PHP succesvol geïnstalleerd naast je Apache webserver. Vergeet niet de **PHP Extensions** sectie te checken om te zorgen dat je alle benodigde extensies installeert.

## PHP Extensions

PHP heeft een grote selectie aan optionele extensies die je kunt installeren om de functionaliteit uit te breiden. Om een lijst van beschikbare extensies te zien, gebruik je dit commando, dat de zoekresultaten via `less` in de console toont:

```
apt search php- | less
```

Gebruik de pijltjestoetsen om te scrollen en druk op `Q` om te stoppen. Om een extensie te installeren, gebruik je simpelweg het apt install commando zoals hieronder. Je kunt meerdere extensies tegelijk installeren door ze met een spatie te scheiden, zo gaat het sneller.

```
sudo apt install [php_extensie] [...]
```

## Conclusie

Je hebt PHP succesvol geïnstalleerd op je Linux-server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />