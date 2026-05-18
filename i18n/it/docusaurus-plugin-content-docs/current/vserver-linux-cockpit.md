---
id: vserver-linux-cockpit
title: "Configura Cockpit su un Server Linux - Gestisci il tuo Server via Interfaccia Web"
description: "Scopri come gestire i server Linux in modo efficiente con l’interfaccia web di Cockpit, perfetta per principianti ed esperti → Scopri di più ora"
sidebar_label: Installa Cockpit
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Cockpit è un’interfaccia web per gestire uno o più server Linux (cluster). Dai semplici log alla gestione del raid, Cockpit offre tante funzionalità.  
Cockpit è adatto sia ai principianti che agli utenti avanzati che vogliono vedere/gestire tutto ciò che conta in poco tempo. Inoltre, è accessibile da quasi qualsiasi dispositivo.  
Il sito ufficiale del progetto è https://cockpit-project.org/. 

## Installa Cockpit con il One Click Apps Installer

Puoi installare **Cockpit** direttamente tramite il nostro **One Click Apps Installer** nell’interfaccia web del VPS. Dopo aver completato la configurazione iniziale delle app, apri il catalogo app, cerca **Cockpit** e avvia il deployment con le impostazioni di progetto, ambiente e dominio che preferisci.  
Così avrai un modo rapido e user-friendly per installare e gestire **Cockpit** senza dover usare la linea di comando manualmente, beneficiando comunque della gestione web integrata, supporto per domini personalizzati e provisioning SSL dove disponibile.

:::info
Questa guida spiega l’installazione per Debian (da Buster) e Ubuntu (da Bionic Beaver). L’installazione è disponibile anche sulla pagina del progetto per Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux e Tumbleweed.   
:::

<InlineVoucher />

## Installazione

Prima di tutto, aggiorna il server:
```
// Aggiorna
sudo apt update; sudo apt upgrade -y
```
Dopodiché, procedi con l’installazione: 
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