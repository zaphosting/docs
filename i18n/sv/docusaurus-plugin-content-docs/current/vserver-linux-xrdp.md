---
id: vserver-linux-xrdp
title: "VPS: Installation av xRDP (Fjärrskrivbord)"
description: "Lär dig hur du sätter upp fjärrskrivbordsåtkomst på Ubuntu och Debian-servrar för enklare hantering och kontroll → Läs mer nu"
sidebar_label: Installera xRDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

På Linux finns det oftast en standard SSH-konsol för att hantera servern. I vissa fall kan det vara smidigare att använda en fjärrskrivbordsanslutning, likt Windows.  
En efterinstallation är möjlig för de flesta Linux-distributioner. I den här guiden förklaras det för Ubuntu och Debian.  
<InlineVoucher />

:::info
Viktigt: Minst Ubuntu 18.04.X LTS (Bionic Beaver) eller Debian 10 (Buster) måste användas som OS. Nyare versioner rekommenderas. 
:::

## Installera xRDP

Först bör servern uppdateras: 
```
// Debian
sudo apt update; sudo apt upgrade -y

// Ubuntu
sudo apt update; sudo apt upgrade -y
```

Efter uppdateringen installeras nödvändiga paket: 
```
// Debian
sudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y

// Ubuntu
sudo apt install ubuntu-desktop -y
```

Sedan kan xRDP installeras: 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

Efter installationen ska status visa "active": 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/P3G4ztqbYjZZMGR/preview)

Om status är okej behöver en användare skapas. Därefter måste xRDP-tjänsten startas om: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

När konfigurationen är klar kan du ansluta till root eller respektive användardata på servern via Fjärrskrivbord.  
Standardporten är: 3389

## Anslutning

Anslutningen kan göras via valfritt RDP-verktyg, kopplat med IP:PORT.  
Vid anslutning kommer du bli ombedd att ange inloggningsuppgifter: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/GHzrDz6Ct3TGDN2/preview)

Efter lyckad inloggning ser du skrivbordet.  
Med Ubuntu ser det lite annorlunda ut än med Debian:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/tgkAEyQxXnrk3Qr/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/gtxmQcPACEZJce7/preview)


## Slutsats

Grattis, du har nu installerat XRDP! Har du fler frågor eller problem, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 

<InlineVoucher />