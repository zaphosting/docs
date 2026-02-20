---
id: dedicated-windows-installmysql
title: "Configura MySQL su un Server Windows - Distribuisci e Gestisci Database Affidabili"
description: "Scopri come configurare e mettere in sicurezza il tuo server database MySQL su un Server Dedicato Windows per una gestione dati affidabile → Scopri di più ora"
sidebar_label: Installa MySQL
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Un server MySQL è necessario per varie applicazioni e può contenere dati importanti, ad esempio per un server di gioco o un sito web. Qui ti spieghiamo come configurare il tuo server database MySQL sul tuo Server Dedicato Windows.



## Installazione

All’inizio ti connetti al tuo server tramite Desktop Remoto e scarichi l’ultima versione di MariaDB, che viene usata come server database: [Download MariaDB](https://mariadb.org/download/?t=mariadb). 

Estrai l’archivio scaricato con WinRAR o 7Zip e avvia il file di installazione con un doppio click: 

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

Poi segui il processo di installazione cliccando su **Next** finché non ti viene chiesto di inserire la password root:

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

Qui puoi definire la master password per l’accesso al tuo server database. Assicurati di usare una password sicura che nessun altro conosca!

:::info
IMPORTANTE! Se vuoi accedere al database da remoto tramite Navicat, HeidiSQL o altri tool, devi attivare l’opzione **Enable access from remote machines for root user**! Per motivi di sicurezza, però, non è generalmente consigliato.
:::

Poi clicca su **Next** fino alla fine dell’installazione, dove dovrai cliccare su **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

Il tuo server database è ora online e pronto all’uso!

## Configurazione dell’accesso esterno

Se hai abilitato "Enable access from remote machines for root user" durante l’installazione, devi anche aprire la porta MySQL **3306** nel firewall di Windows. Per farlo, apri il firewall e crea una nuova regola.
Qui trovi la guida su come aprire porte nel firewall:
[Port Forwarding (Firewall)](vserver-windows-port.md)

Ora puoi accedere al tuo server MySQL dall’esterno!



## Conclusione

Congratulazioni, hai installato con successo il server MySQL. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂