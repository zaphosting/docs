---
id: vserver-linux-xrdp
title: "VPS: Installazione di xRDP (Desktop Remoto)"
description: "Scopri come configurare l'accesso desktop remoto su server Ubuntu e Debian per una gestione e controllo più semplici → Scopri di più ora"
sidebar_label: Installa xRDP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Su Linux, di solito c’è una console SSH predefinita per gestire il server. In alcuni casi può essere più comodo usare una connessione desktop remoto, simile a Windows.  
Una post-installazione è possibile per la maggior parte delle distro Linux. In questa guida spieghiamo come fare su Ubuntu e Debian.  
<InlineVoucher />

:::info
Importante: come sistema operativo devi usare almeno Ubuntu 18.04.X LTS (Bionic Beaver) o Debian 10 (Buster). Versioni più recenti sono consigliate. 
:::

## Installazione di xRDP

Per prima cosa aggiorna il server: 
```
// Debian
sudo apt update; sudo apt upgrade -y

// Ubuntu
sudo apt update; sudo apt upgrade -y
```

Dopo l’aggiornamento, installa i pacchetti necessari: 
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

Dopo l’installazione, lo stato dovrebbe risultare “active”: 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/P3G4ztqbYjZZMGR/preview)

Se lo stato è ok, devi ancora creare un utente. Poi riavvia il servizio xRDP: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

A configurazione finita puoi connetterti al root o all’utente del server tramite Desktop Remoto.  
La porta di default è: 3389

## Connessione

La connessione si può fare con qualsiasi tool RDP, collegandosi con IP:PORT.  
Al collegamento ti verranno chiesti i dati di login: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/GHzrDz6Ct3TGDN2/preview)

Dopo il login vedrai il desktop.  
Su Ubuntu l’aspetto è un po’ diverso rispetto a Debian:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/tgkAEyQxXnrk3Qr/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/gtxmQcPACEZJce7/preview)


## Conclusione

Congratulazioni, hai installato XRDP con successo! Se hai altre domande o problemi, contatta il nostro supporto, sempre pronto ad aiutarti ogni giorno! 

<InlineVoucher />