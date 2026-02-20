---
id: vserver-linux-cockpit
title: "Configura Cockpit su un Server Linux - Gestisci il Tuo Server via Interfaccia Web"
description: "Scopri come gestire i server Linux in modo efficiente con l’interfaccia web di Cockpit, perfetta per principianti ed esperti → Scopri di più ora"
sidebar_label: Installa Cockpit
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Cockpit è un’interfaccia web per gestire uno o più server Linux (cluster). Dai semplici log alla gestione del raid, Cockpit offre tante funzionalità.  
È adatto sia ai principianti che agli utenti avanzati che vogliono vedere/gestire tutto ciò che conta in poco tempo. Inoltre, è accessibile da quasi qualsiasi dispositivo.  
Il sito ufficiale del progetto è https://cockpit-project.org/. 

:::info
Questa guida spiega l’installazione per Debian (da Buster) / Ubuntu (da Bionic Beaver). L’installazione è disponibile anche sulla pagina del progetto per Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux e Tumbleweed.   
:::

<InlineVoucher />

## Installazione

Per prima cosa, aggiorna il server:
```
// Aggiorna
sudo apt update; sudo apt upgrade -y
```
Poi puoi procedere con l’installazione: 
```
// Installa Cockpit
sudo apt install cockpit -y
```
Una volta completata l’installazione, puoi accedere al pannello di Cockpit tramite IP:9090.  
Il login avviene con le normali credenziali del server/utente. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## Conclusione

Congratulazioni, hai installato e configurato Cockpit con successo! Se hai altre domande o problemi, il nostro supporto è sempre pronto ad aiutarti, tutti i giorni! 

<InlineVoucher />