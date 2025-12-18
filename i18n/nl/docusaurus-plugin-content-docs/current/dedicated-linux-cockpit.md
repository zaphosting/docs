---
id: dedicated-linux-cockpit
title: "Dedicated Server: Installatie van Cockpit"
description: "Ontdek hoe je Linux-servers efficiënt beheert met de webinterface van Cockpit voor monitoring en administratie → Leer het nu"
sidebar_label: Cockpit Installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Cockpit is een webinterface om één of meerdere Linux-servers (cluster) te beheren. Van simpele logbestanden tot het beheren van RAID, Cockpit biedt veel handige functies.  
Cockpit is geschikt voor beginners, maar ook voor gevorderde gebruikers die snel alles wat belangrijk is willen zien/beheren. Bovendien is het vanaf bijna elk apparaat toegankelijk.  
De projectwebsite vind je op https://cockpit-project.org/. 

:::info
Deze handleiding legt de installatie uit voor Debian (vanaf Buster) / Ubuntu (vanaf Bionic Beaver). De installatie is ook beschikbaar op de projectpagina voor Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux en Tumbleweed.  
:::

## Installatie

Eerst moet de server geüpdatet worden:
```
// Update
sudo apt update; sudo apt upgrade -y
```
Daarna kan de installatie plaatsvinden:
```
// Cockpit installatie
sudo apt install cockpit -y
```
Na de installatie is het Cockpit-paneel bereikbaar via IP:9090.  
Inloggen doe je met de normale inloggegevens van de server/gebruiker.

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/iobBy6s7gDJ4Zxm/preview)