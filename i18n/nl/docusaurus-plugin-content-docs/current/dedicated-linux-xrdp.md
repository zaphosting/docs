---
id: dedicated-linux-xrdp
title: "xRDP instellen op een Linux Server - Remote Desktop Toegang activeren"
description: "Ontdek hoe je remote desktop toegang instelt op Ubuntu en Debian servers voor makkelijker beheer en controle → Leer het nu"
sidebar_label: xRDP installeren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Op Linux is er meestal een standaard SSH-console om de server te beheren. Soms is het echter makkelijker om een remote desktop verbinding te gebruiken, net zoals bij Windows.  
Een post-installatie is mogelijk voor de meeste Linux distro’s. In deze gids leggen we uit hoe dat werkt voor Ubuntu en Debian.

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

Daarna installeer je xRDP: 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

Na de installatie check je of de status “active” is: 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/wdKep3W6GHWekp3/preview)

Als de status goed is, moet je nog een gebruiker aanmaken. Daarna herstart je de xRDP service: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

Als je klaar bent met de configuratie, kun je via Remote Desktop verbinden met de root of de betreffende gebruikersdata van de server.  
De standaardpoort is: 3389

## Verbinding maken

Je kunt verbinden met elke RDP-client, via IP:POORT.  
Bij het verbinden wordt om je inloggegevens gevraagd: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/btRPMG73cT6ysyL/preview)

Na een succesvolle login zie je de desktop.  
Bij Ubuntu ziet het er iets anders uit dan bij Debian:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/Co6TgmH3yoad6HP/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/riHNCEEyKcoLHDy/preview)
