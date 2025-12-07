---
id: vserver-linux-xrdp
title: "VPS: Installatie van xRDP (Remote Desktop)"
description: "Ontdek hoe je remote desktop toegang instelt op Ubuntu en Debian servers voor makkelijker beheer en controle → Leer het nu"
sidebar_label: Installeer xRDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Op Linux is er meestal een standaard SSH-console om de server te beheren. In sommige gevallen is het makkelijker om een remote desktop verbinding te gebruiken, vergelijkbaar met Windows.  
Een post-installatie is mogelijk voor de meeste Linux distros. In deze gids leggen we uit hoe dat werkt voor Ubuntu en Debian.  
<InlineVoucher />

:::info
Belangrijk: Je moet minimaal Ubuntu 18.04.X LTS (Bionic Beaver) of Debian 10 (Buster) als OS gebruiken. Nieuwere versies worden aanbevolen. 
:::

## xRDP installeren

Eerst update je de server: 
```
// Debian
sudo apt update; sudo apt upgrade -y

// Ubuntu
sudo apt update; sudo apt upgrade -y
```

Na de update installeer je de benodigde pakketten: 
```
// Debian
sudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y

// Ubuntu
sudo apt install ubuntu-desktop -y
```

Daarna kun je xRDP installeren: 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

Na de installatie moet de status “active” zijn: 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/P3G4ztqbYjZZMGR/preview)

Als de status goed is, moet je nog een gebruiker aanmaken. Daarna herstart je de xRDP service: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

Als de configuratie klaar is, kun je via Remote Desktop verbinden met root of de betreffende gebruikersgegevens van de server.  
De standaardpoort is: 3389

## Verbinding maken

Je kunt verbinden via elke RDP-client, met IP:POORT.  
Bij het verbinden wordt om je inloggegevens gevraagd: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/GHzrDz6Ct3TGDN2/preview)

Na een succesvolle login zie je de desktop.  
Bij Ubuntu ziet het er iets anders uit dan bij Debian:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/tgkAEyQxXnrk3Qr/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/gtxmQcPACEZJce7/preview)


## Conclusie

Gefeliciteerd, je hebt xRDP succesvol geïnstalleerd! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat! 

<InlineVoucher />