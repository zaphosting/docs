---
id: dedicated-linux-cockpit
title: "Server Dedicato: Installazione di Cockpit"
description: "Scopri come gestire i server Linux in modo efficiente con l’interfaccia web di Cockpit per monitoraggio e amministrazione → Scopri di più ora"
sidebar_label: Installa Cockpit
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Cockpit è un’interfaccia web per gestire uno o più server Linux (cluster). Dai semplici log alla gestione del raid, Cockpit offre tante funzionalità.  
Cockpit è perfetto sia per principianti che per utenti avanzati che vogliono vedere/gestire tutto ciò che conta in poco tempo. Inoltre, è accessibile da quasi qualsiasi dispositivo.  
Il sito ufficiale del progetto è https://cockpit-project.org/. 

:::info
Questa guida spiega l’installazione per Debian (da Buster) / Ubuntu (da Bionic Beaver). L’installazione è disponibile anche sulla pagina del progetto per Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux e Tumbleweed.   
:::

## Installazione

Prima di tutto, aggiorna il server:
```
// Aggiorna
sudo apt update; sudo apt upgrade -y
```
Dopodiché, puoi procedere con l’installazione: 
```
// Installazione Cockpit
sudo apt install cockpit -y
```
Una volta completata l’installazione, il pannello di Cockpit è raggiungibile tramite IP:9090.  
Il login avviene con le normali credenziali del server/utente. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/iobBy6s7gDJ4Zxm/preview)