---
id: vserver-linux-cockpit
title: "VPS: Cockpit Installeren"
description: "Ontdek hoe je Linux-servers efficiënt beheert met de webinterface van Cockpit, geschikt voor beginners en experts → Leer het nu"
sidebar_label: Cockpit Installeren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Cockpit is een webinterface om één of meerdere Linux-servers (cluster) te beheren. Van simpele logbestanden tot het beheren van RAID, Cockpit biedt veel functies.  
Cockpit is ideaal voor beginners, maar ook voor gevorderde gebruikers die snel alles wat belangrijk is willen zien en beheren. Bovendien is het toegankelijk vanaf bijna elk apparaat.  
De projectwebsite vind je op https://cockpit-project.org/. 

:::info
Deze handleiding legt de installatie uit voor Debian (vanaf Buster) en Ubuntu (vanaf Bionic Beaver). De installatie is ook beschikbaar op de projectpagina voor Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux en Tumbleweed.  
:::

<InlineVoucher />

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

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## Conclusie

Gefeliciteerd, je hebt Cockpit succesvol geïnstalleerd en geconfigureerd! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat! 

<InlineVoucher />