---
id: dedicated-linux-php
title: 'Dedicated Server: PHP Installeren'
description: "Ontdek hoe je PHP installeert op je Linux-server voor webontwikkeling en optimaliseer je setup met essentiële extensies → Leer het nu"
sidebar_label: PHP Installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

PHP is een populaire programmeertaal voor algemene doeleinden en wordt veel gebruikt in webontwikkeling. In deze gids leggen we uit hoe je PHP op je server installeert.



## Voorbereiding

Begin met verbinden met je server via SSH. Als je niet weet hoe dat moet, check dan onze [Eerste toegang (SSH)](vserver-linux-ssh.md) handleiding.

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

Er zijn twee hoofdmanieren om PHP op je Linux-server te installeren: standalone of als extra pakket voor Apache. Gebruik je je eigen webserver die geen Apache is, of wil je PHP voor algemene taken gebruiken? Dan raden we de standalone methode aan. Voor gebruik met de Apache webserver kies je de Apache-methode om PHP als extra pakket te installeren.

## Standalone

Gebruik het volgende commando om de nieuwste PHP-versie te installeren. Wil je een specifieke versie installeren? Gebruik dan de `-y` vlag gevolgd door de versie.
```
# Nieuwste versie
sudo apt install php

# Specifieke versie (bijv. php7.4)
sudo apt -y install php[versie]
```

Check of de installatie gelukt is met het commando `php -v`. Gefeliciteerd, PHP staat nu op je server! We raden je aan om ook de **PHP Extensies** sectie te lezen, zodat je de extensies kunt installeren die jij nodig hebt.

## Met Apache

Als eerste moet je Apache op je server installeren als dat nog niet gedaan is. Dat doe je met dit commando:
```
sudo apt install apache2
```

Zodra Apache draait, moet je zorgen dat de juiste firewallregels zijn ingesteld zodat je webserver bereikbaar is vanaf internet. In dit voorbeeld gebruiken we de **UFW Firewall**, omdat Apache daar een geregistreerde applicatie voor heeft. Gebruik je een andere firewall? Zorg dan dat poort 80 (HTTP) openstaat.
```
sudo ufw allow in "Apache"
```

Je server zou nu bereikbaar moeten zijn. Test dit door `http://[jouw_serverip]` in een browser te typen.

Met Apache klaar, installeer je PHP voor Apache met dit commando:
```
sudo apt install php libapache2-mod-php
```

Controleer de installatie met `php -v`. Je hebt nu PHP succesvol naast Apache geïnstalleerd. Vergeet niet de **PHP Extensies** sectie te checken om de extensies te installeren die jij nodig hebt.

## PHP Extensies

PHP heeft een grote selectie optionele extensies die je kunt installeren om de functionaliteit uit te breiden. Wil je zien welke extensies beschikbaar zijn? Gebruik dan dit commando, dat de zoekresultaten via `less` toont zodat je makkelijk kunt scrollen.

```
apt search php- | less
```

Gebruik de pijltjestoetsen om te scrollen en druk op `Q` om te stoppen. Om een extensie te installeren, gebruik je simpelweg het apt install commando. Je kunt meerdere extensies tegelijk installeren door ze met een spatie te scheiden, zo gaat het sneller.

```
sudo apt install [php_extensie] [...]
```

## Afsluiting

Je hebt PHP succesvol geïnstalleerd op je Linux-server. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂