---
id: vserver-windows-installmysql
title: "VPS: Installazione di MySQL"
description: "Scopri come configurare e mettere in sicurezza il tuo server database MySQL su un VPS Windows per una gestione dati affidabile → Scopri di più ora"
sidebar_label: Installa MySQL
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduzione

Un server MySQL è necessario per varie applicazioni e può contenere dati importanti, ad esempio per un server di gioco o un sito web. Qui ti spieghiamo come configurare il tuo server database MySQL sul tuo VPS Windows.
<InlineVoucher />

## Installazione

All’inizio ti connetti al tuo server tramite desktop remoto e scarichi l’ultima versione di MariaDB, che viene usata come server database: [Download MariaDB](https://mariadb.org/download/?t=mariadb). Estrai l’archivio scaricato con WinRAR o 7Zip e avvia il file di installazione con un doppio click.

Poi segui la procedura di installazione cliccando su **Next** finché non ti viene chiesto di inserire la password root:

![](https://screensaver01.zap-hosting.com/index.php/s/gMrr8aHEM2eAG22/preview)

Qui puoi definire la master password per l’accesso al tuo server database. Assicurati di usare una password sicura che nessun altro conosca!

:::info
IMPORTANTE! Se vuoi accedere al database da remoto tramite Navicat, HeidiSQL o altri tool devi attivare l’opzione **Enable access from remote machines for root user**! Per motivi di sicurezza, però, non è generalmente consigliato.
:::

Poi clicca su **Next** fino alla fine dell’installazione, dove dovrai cliccare su **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/qYT3rrDrcXRb4gc/preview)

Il tuo server database è ora online e pronto all’uso!

## Configurazione accesso esterno

Se durante l’installazione hai abilitato "Enable access from remote machines for root user", devi anche aprire la porta MySQL **3306** nel firewall di Windows. Per farlo, apri il firewall e crea una nuova regola.
Qui trovi la guida su come aprire le porte nel firewall:
[Port Forwarding (Firewall)](vserver-windows-port.md)

Ora puoi accedere al tuo server MySQL da remoto!



## Conclusione

Congratulazioni, hai installato e configurato con successo il server MySQL sul tuo VPS! Se hai altre domande o problemi, il nostro supporto è sempre pronto ad aiutarti ogni giorno!

<InlineVoucher />