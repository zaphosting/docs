---
id: dedicated-linux-xrdp
title: "Dedicated Server: Installatie van xRDP (Remote Desktop)"
description: "Ontdek hoe je remote desktop toegang instelt op Ubuntu en Debian servers voor makkelijker beheer en controle → Leer het nu"
sidebar_label: Installeer xRDP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Op Linux is er meestal standaard een SSH-console om de server te beheren. In sommige gevallen is het makkelijker om een remote desktop verbinding te gebruiken, vergelijkbaar met Windows.  
Een post-installatie is mogelijk voor de meeste Linux distros. In deze gids leggen we uit hoe dat werkt voor Ubuntu en Debian.

:::info
Belangrijk: Gebruik minimaal Ubuntu 18.04.X LTS (Bionic Beaver) of Debian 10 (Buster) als besturingssysteem. Nieuwere versies worden aanbevolen.
:::

## xRDP installeren

Eerst moet de server geüpdatet worden: 
```
// Debian
sudo apt update; sudo apt upgrade -y

// Ubuntu
sudo apt update; sudo apt upgrade -y
```

Na de update worden de benodigde pakketten geïnstalleerd: 
```
// Debian
sudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y

// Ubuntu
sudo apt install ubuntu-desktop -y
```

Daarna kan xRDP geïnstalleerd worden: 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

Na installatie moet de status "active" teruggeven: 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/wdKep3W6GHWekp3/preview)

Als de status goed is, moet er nog een gebruiker worden aangemaakt. Daarna moet de xRDP service opnieuw gestart worden: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

Na het afronden van de configuratie kun je via Remote Desktop verbinden met de root of de betreffende gebruikersgegevens van de server.  
De standaardpoort is: 3389

## Verbinding maken

De verbinding kan gemaakt worden via elke RDP-client, verbonden met IP:POORT.  
Bij het verbinden wordt om de inloggegevens gevraagd: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/btRPMG73cT6ysyL/preview)

Na een succesvolle login zie je de desktop.  
Bij Ubuntu ziet het er iets anders uit dan bij Debian:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/Co6TgmH3yoad6HP/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/riHNCEEyKcoLHDy/preview)