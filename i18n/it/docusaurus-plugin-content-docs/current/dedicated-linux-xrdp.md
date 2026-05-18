---
id: dedicated-linux-xrdp
title: "Configura xRDP su un Server Linux - Abilita Accesso Desktop Remoto"
description: "Scopri come configurare l'accesso desktop remoto su server Ubuntu e Debian per una gestione e controllo più semplice → Scopri di più ora"
sidebar_label: Installa xRDP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Su Linux, di solito c'è una console SSH predefinita per gestire il server. In alcuni casi può essere più comodo usare una connessione desktop remota, simile a Windows.  
È possibile un'installazione post-configurazione per la maggior parte delle distro Linux. In questa guida viene spiegato per Ubuntu e Debian.

:::info
Importante: Deve essere usato almeno Ubuntu 18.04.X LTS (Bionic Beaver) o Debian 10 (Buster) come OS. Versioni più recenti sono consigliate.
:::

## Installazione di xRDP

Per prima cosa, aggiorna il server: 
```
// Debian
sudo apt update; sudo apt upgrade -y

// Ubuntu
sudo apt update; sudo apt upgrade -y
```

Dopo l'aggiornamento, installa i pacchetti necessari: 
```
// Debian
sudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y

// Ubuntu
sudo apt install ubuntu-desktop -y
```

Ora puoi installare xRDP: 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

Dopo l'installazione, lo stato dovrebbe risultare "active": 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/wdKep3W6GHWekp3/preview)

Se lo stato è ok, devi ancora creare un utente. Poi riavvia il servizio xRDP: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

Al termine della configurazione, puoi connetterti al root o all’utente corrispondente del server tramite Desktop Remoto.  
La porta di default è: 3389

## Connessione

La connessione può essere fatta tramite qualsiasi tool RDP, collegandosi con IP:PORT.  
Quando ti connetti ti verranno chiesti i dati di login: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/btRPMG73cT6ysyL/preview)

Dopo il login riuscito vedrai il desktop.  
Con Ubuntu l’aspetto è un po’ diverso rispetto a Debian:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/Co6TgmH3yoad6HP/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/riHNCEEyKcoLHDy/preview)